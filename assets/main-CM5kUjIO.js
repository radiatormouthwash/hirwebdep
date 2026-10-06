const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BrHHSVT0.js","assets/form_types-CheoqBaR.js","assets/index-InWLkXXw.js"])))=>i.map(i=>d[i]);
var CN=Object.defineProperty;var ON=(e,n,t)=>n in e?CN(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var Ne=(e,n,t)=>ON(e,typeof n!="symbol"?n+"":n,t);import{b as oo,a as NN,f as gw,c as bw}from"./form_types-CheoqBaR.js";import{_ as Vt,r as Xt,s as kN,a as MN}from"./app_bootstrap-C4YeXdo6.js";const rr={lo:0,hi:1,loClosed:!0,hiClosed:!0};function Rr(e,n){return!(e.lo!==null&&(e.loClosed?n<e.lo:n<=e.lo)||e.hi!==null&&(e.hiClosed?n>e.hi:n>=e.hi))}function yw(e){return{lo:e.lo,hi:e.hi,loClosed:e.lo!==null,hiClosed:e.hi!==null}}function _a(e){const n=e.loClosed&&e.lo!==null?"[":"(",t=e.hiClosed&&e.hi!==null?"]":")";return`${n}${e.lo??"-inf"}, ${e.hi??"inf"}${t}`}const PN={closed_real_interval:[!0,!0],left_open_real_interval:[!1,!0],right_open_real_interval:[!0,!1],open_real_interval:[!1,!1]};function Lt(e){var i;const[n,t]=PN[e.type_mathlevel]??[!0,!0],r=((i=e.type_detail)==null?void 0:i.range)??[0,1];return{lo:r[0],hi:r[1],loClosed:n,hiClosed:t}}function Ur(e){return e.map(Lt)}function lu(e){return e.lo===0&&e.hi===1}function du(e){return e.lo===null||e.hi===null?null:[e.lo,e.hi]}function DN(e){return e.lo!==null&&e.lo>=0}function Ew(e){return Object.fromEntries(e.map(n=>[n.bareName,Lt(n.decl)]))}const FN=["aopt:","cparam:"];function ge(e){for(const n of FN)if(e.startsWith(n))return e.slice(n.length);return e}function zt(e){return e.startsWith("cparam:")}const x3="MultiStringFromSet";function Sw(e,n,t){const r=e.allowed_values,i=Ii(e)?e.input_type:void 0,o=u=>JSON.stringify(u),a=[];if(Ii(e)&&i===x3){const u=`${e.id} has input_type '${x3}' but`;if(!Array.isArray(n)||!n.every(d=>typeof d=="string"))return[`${u} ${t} ${o(n)} is not a list of strings`];const s=n,c=[...new Set(s.filter((d,p)=>s.indexOf(d)!==p))].sort();if(c.length>0&&a.push(`${u} ${t} contains duplicate entries ${o(c)}`),r!==void 0){const d=[...new Set(s.filter(p=>!r.includes(p)))].sort();d.length>0&&a.push(`${u} ${t} entries ${o(d)} are not in allowed_values ${o(r)}`)}const l=(e.required_values??[]).filter(d=>!s.includes(d));return l.length>0&&a.push(`${u} ${t} ${o(s)} lacks required_values entries ${o(l)}`),a}return r!==void 0&&!r.some(u=>u===n)&&a.push(`${e.id} ${t} ${o(n)} not in allowed_values ${o(r)}`),i==="StringFromSet"&&typeof n!="string"?a.push(`${e.id} has input_type 'StringFromSet' but non-string ${t} ${o(n)}`):i==="Bool"&&typeof n!="boolean"?a.push(`${e.id} has input_type 'Bool' but non-bool ${t} ${o(n)}`):i==="Number"&&typeof n!="number"?a.push(`${e.id} has input_type 'Number' but non-numeric ${t} ${o(n)}`):i==="FreeString"&&typeof n!="string"&&a.push(`${e.id} has input_type 'FreeString' but non-string ${t} ${o(n)}`),a}function Ii(e){return!zt(e.id)}function ga(e){return zt(e.id)}function fu(e){const n=e[0];if(n===void 0)throw new Error("cparam allowed_values must be a non-empty list");if(typeof n=="boolean")throw new Error(`cparam allowed_values must not contain booleans (got ${n}); a two-valued qualitative switch is an aopt, not a cparam`);return typeof n=="string"?"string":"number"}const ba="example:";function pu(e){return e.startsWith(ba)?e.slice(ba.length):e}const qN="srcquote:",B3="bib:";function xN(e){return e.startsWith(B3)?e.slice(B3.length):e}const Gr=["pos","neg"],Dv={pos:"Satisfying",neg:"Falsifying"},ya="tchoice:";function Li(e){return e.startsWith(ya)?e.slice(ya.length):e}const BN="svargroup:";function Cr(e){return e.response_kind==="enum"}function ww(e){return e.response_kind==="real"}const Ri="svar:",HN=["point","bounds","sample"],UN="elicited_svar_response_types",H3=[["point","bounds","sample"],["point","sample"],["sample"]];function GN(e){const n=e.elicited_svar_response_types;if(n===void 0)return HN;const t=H3.find(r=>r.length===n.length&&r.every((i,o)=>n[o]===i));if(t===void 0)throw new Error(`config.${UN} is ${JSON.stringify(n)}; expected one of ${JSON.stringify(H3)}`);return t}const Th="estimatorInstruct",jN="flabels_enabled",U3="framing_POVs_enabled";function VN(e){const n=new Set(e),t=[jN,U3].filter(r=>n.has(r));if(t.length>1)throw new Error(`A jprob may declare only one of ${t.join(", ")}; '${U3}' is the deprecated spelling, kept only by jprobs with archived methodical trial results`);return t[0]??null}function WN(e,n){if(!Array.isArray(e)||!e.every(t=>typeof t=="string"))throw new Error(`${n} must be a list of strings, got ${JSON.stringify(e)}`);return[...e]}function Aw(e,n){return!e.limit_reporting_to||e.limit_reporting_to.includes(n)}function $w(e,n){if(!Array.isArray(n)||n.length!==3||n[0]!=="eq"||typeof n[1]!="string")throw new Error(`Formula ${e} must have an equality s-expression with a string LHS`);return n[1]}function Tw(e){if(e.includes("{")||e.includes("}"))throw new Error(`Unexpected brace in sexpr reference leaf: ${e}`);if(e.startsWith(Ri))return`expr:${e.slice(Ri.length)}`;if(!e.startsWith("expr:"))throw new Error(`Unexpected expression reference ${JSON.stringify(e)}; expected expr:* or svar:*`);return e}function Ih(e){return e.startsWith(Ri)?e.slice(Ri.length):e}const G3="ax:";function Ci(e){return e.startsWith(G3)?e.slice(G3.length):e}const Lh="framing:";function Oi(e){return e.startsWith(Lh)?e.slice(Lh.length):e}function XN(e){if(e.simplifying&&e.derived)throw new Error(`Axiom "${e.id}" is flagged both simplifying and derived`);return e.simplifying?"simplifying":e.derived?"derived":"ordinary"}const Rh="form:",j3="expr:";function mu(e){return e.startsWith(Rh)?e.slice(Rh.length):e}function KN(e){const n=e.sexpr;if(!Array.isArray(n)||n.length!==3||n[0]!=="eq")throw new Error(`formula "${e.id}" is not an (eq LHS RHS) triple, so it produces no expression`);const t=n[1];if(typeof t!="string"||!t.startsWith(j3))throw new Error(`formula "${e.id}" has LHS ${JSON.stringify(t)}, which is not an ${j3} reference, so it produces no expression`);return t}const Iw="title",YN="webonly",JN={boolrv:"BoolRV",real:"ℝ",prop:"Prop",set:"Set",fn:"Function"},V3="textchunk:",W3="textdefn:",zN=[".","?","!"],QN=": ";class Lw{constructor(n){Ne(this,"_data");Ne(this,"aid");Ne(this,"options");Ne(this,"cparam_combo_filter");Ne(this,"logical_consistency");Ne(this,"config");Ne(this,"layout");Ne(this,"svar_list");Ne(this,"svar");Ne(this,"tchoice");Ne(this,"textchunk");Ne(this,"display");Ne(this,"isym");Ne(this,"ax");Ne(this,"expr");Ne(this,"form");Ne(this,"definedSym");Ne(this,"textdefn");Ne(this,"framing");Ne(this,"srcquote");Ne(this,"bib");this._data=n,this.aid=n.aid,this.options=n.options,this.cparam_combo_filter=n.cparam_combo_filter,this.logical_consistency=n.logical_consistency??null,this.config=n.config,this.layout=n.layout,this.svar_list=n.svar_list,this.svar=n.svar,this.tchoice=n.tchoice??[],this.textchunk=n.textchunk,this.display=n.display,this.isym=n.isym,this.ax=n.ax,this.expr=n.expr,this.form=n.form,this.definedSym=n.definedSym,this.textdefn=n.textdefn,this.framing=n.framing??[],this.srcquote=n.srcquote??[],this.bib=n.bib??[]}_get_data(){return this._data}get_options(){return this.options}get_aopts(){return this.options.filter(Ii)}get_cparams(){return this.options.filter(ga)}has_cparams(){return this.options.some(ga)}get_option(n){const t=this.options.find(r=>ge(r.id)===n);if(!t)throw new Error(`No option named "${n}"`);return t}get_aopt(n){const t=this.get_aopts().find(r=>ge(r.id)===n);if(!t)throw new Error(`No aopt named "${n}"`);return t}get_cparam(n){const t=this.find_cparam(n);if(!t)throw new Error(`No cparam named "${n}"`);return t}find_cparam(n){return this.get_cparams().find(t=>ge(t.id)===n)}cparam_value_kind(n){return fu(this.get_cparam(n).allowed_values)}get_option_bare_names(){return this.options.map(n=>ge(n.id))}get_aopt_bare_names(){return this.get_aopts().map(n=>ge(n.id))}get_cparam_bare_names(){return this.get_cparams().map(n=>ge(n.id))}get_option_ids(){return this.options.map(n=>n.id)}get_aopt_ids(){return this.get_aopts().map(n=>n.id)}get_cparam_ids(){return this.get_cparams().map(n=>n.id)}get_tchoice_decls(){return this.tchoice}get_tchoice_bare_names(){return new Set(this.tchoice.map(n=>Li(n.id)))}get_tchoice(n){const t=n.startsWith(ya)?n:`${ya}${n}`,r=this.tchoice.find(i=>i.id===t);if(r===void 0)throw new Error(`No tchoice named "${n}"`);return r}get_tchoice_default(n){const t=this.get_tchoice(n);if(!Cr(t))throw new Error(`tchoice "${n}" is not an enum kind; it has no default_value`);return t.default_value}get_enum_tchoice_defaults(){const n={};for(const t of this.tchoice)Cr(t)&&(n[Li(t.id)]=t.default_value);return n}get_textchunks(){return this.textchunk}find_textchunk(n){const t=this.strip_textchunk_prefix(n);return this.textchunk.find(r=>this.strip_textchunk_prefix(r.id)===t)}get_textchunk(n){const t=this.find_textchunk(n);if(!t)throw new Error(`No textchunk named "${n}"`);return t}find_textchunk_defn(n){var t;return(t=this.find_textchunk(n))==null?void 0:t.defn}get_textchunk_defn(n){return this.get_textchunk(n).defn}strip_textchunk_prefix(n){return n.startsWith(V3)?n.slice(V3.length):n}get_textdefn_entries(){return this.textdefn.map(n=>{const t=n.aliases??[];return{bareName:this.strip_textdefn_prefix(n.id),id:n.id,defn:n.defn,aliases:t,displayTerm:t[0]??n.id}})}find_textdefn(n){const t=this.strip_textdefn_prefix(n);return this.textdefn.find(r=>this.strip_textdefn_prefix(r.id)===t)}get_textdefn(n){const t=this.find_textdefn(n);if(!t)throw new Error(`No textdefn named "${n}"`);return t}get_textdefns(){return this.textdefn}strip_textdefn_prefix(n){return n.startsWith(W3)?n.slice(W3.length):n}get_svar_bare_names(){return this.svar_list}svar_decls(){return this.svar}get_svar(n){const t=n.startsWith("svar:")?n:`svar:${n}`,r=this.svar.find(i=>i.id===t);if(r===void 0)throw new Error(`No svar named "${n}"`);return r}get_svar_gloss_defn(n){return this.get_svar(n).defn}svar_entries(){const n=new Map;for(const t of this.svar)n.set(Ih(t.id),t);return this.svar_list.map(t=>{const r=n.get(t);if(!r)throw new Error(`svar_list entry "${t}" has no matching svar decl`);return{bareName:t,decl:r}})}svar_card_runs(){const n=new Map(this.svar_list.map((o,a)=>[o,a])),t=[];let r=0;const i=o=>{o<=r||(t.push({group:null,svarIndices:Array.from({length:o-r},(a,u)=>r+u)}),r=o)};for(const o of this.layout.svar_groups??[]){const a=o.svars.map(s=>{const c=n.get(Ih(s));if(c===void 0)throw new Error(`Svar group "${o.id}" names "${s}", which is not in svar_list`);return c}),u=a[0];if(u===void 0)throw new Error(`Svar group "${o.id}" has no svars`);if(u<r||a.some((s,c)=>s!==u+c))throw new Error(`Svar group "${o.id}" is not a contiguous run of svar_list in its order, after the groups before it`);i(u),t.push({group:o,svarIndices:a}),r=u+a.length}return i(this.svar_list.length),t}has_standard_rendering_framing_notes(){const n=this.standard_rendering_flabels();return this.framing.some(t=>n.has(t.flabel))}has_examples(){return this.isym.some(n=>{var t,r;return(((t=n.pos)==null?void 0:t.length)??0)>0||(((r=n.neg)==null?void 0:r.length)??0)>0})}isym_entries(){return this.isym}get_isym(n){const t=n.startsWith("isym:")?n:`isym:${n}`,r=this.isym.find(i=>i.id===t);if(r===void 0)throw new Error(`No isym named "${n}"`);return r}get_example(n){if(!n.startsWith(ba))throw new Error(`Not an example id: "${n}"`);for(const t of this.isym){const r=[...t.pos??[],...t.neg??[]].find(i=>i.id===n);if(r!==void 0)return r}throw new Error(`No isym example "${n}"`)}has_srcquotes(){return this.srcquote.length>0}resolve_srcquotes(n){const t=new Map(this.srcquote.map(r=>[r.id,r]));return n.map(r=>{const i=t.get(r);if(!i)throw new Error(`Unknown srcquote id: ${r}`);return i})}bib_entries(){return this.bib}resolve_bib(n){const t=this.bib.find(r=>r.id===n);if(t===void 0)throw new Error(`Unknown bib id: ${n}`);return t}bib_inline_display_text(n){const t=this.resolve_bib(n);return t.inline_display??t.title}bib_full_text(n){const t=this.resolve_bib(n);return[t.author,t.date,t.title,t.venue,t.note].filter(i=>i!==void 0).map(i=>zN.some(o=>i.endsWith(o))?i:`${i}.`).join(" ")}bib_reference_entry_text(n){const t=this.resolve_bib(n),r=this.bib_full_text(n);return t.inline_display===void 0||t.inline_display===t.title?r:`${t.inline_display}${QN}${r}`}framing_static_anchor_ids(){const n=new Set;for(const t of this.framing)t.static_anchor!==null&&n.add(t.static_anchor);return n}get_axioms(){return this.ax}get_axioms_in_display_section(n){return this.ax.filter(t=>XN(t)===n)}find_ax(n){const t=Ci(n);return this.ax.find(r=>Ci(r.id)===t)}get_ax(n){const t=this.find_ax(n);if(t===void 0)throw new Error(`No axiom named "${n}"`);return t}get_ax_sexpr(n){return this.get_ax(n).sexpr}get_ax_defn(n){return this.get_ax(n).defn}can_consolidate_isym_svar(n){var a,u;const t=n.slice(5),r=this.isym.find(s=>s.id===n);if(!r||r.kind!=="real"||(((a=r.pos)==null?void 0:a.length)??0)>0||(((u=r.neg)==null?void 0:u.length)??0)>0||!this.svar_list.includes(t))return!1;const i=this.svar.find(s=>s.id===`svar:${t}`);if(!i)return!1;const o=this.expr.find(s=>s.id===`expr:${t}`);return!o||o.sexpr!==n?!1:i.defn===""}get_display_ax(n){return this.display.ax[n]}get_display_ax_or_none(n){return this.display.ax[n]??null}get_display_expr(n){return this.display.expr[n]}get_display_form(n){return this.display.form[n]}get_display_form_or_none(n){return this.display.form[n]??null}get_display_definedSym(n){return this.display.definedSym[n]}get_display_definedSym_or_none(n){return this.display.definedSym[n]??null}get_display_expr_keys(){return Object.keys(this.display.expr)}get_display_form_keys(){return Object.keys(this.display.form)}logical_consistency_or_none(){return this.logical_consistency}conclusion_form_or_none(){return this.config.conclusion_form??null}conclusion_expr_or_none(){const n=this.conclusion_form_or_none();return n===null?null:this.form_produced_expr(n)}form_produced_expr(n){const t=this.form.find(r=>r.id===n);if(t===void 0)throw new Error(`${this.aid}: "${n}" names no registered formula`);try{return KN(t)}catch(r){throw new Error(`${this.aid}: ${r.message}`)}}conclusion_range_or_none(){const n=this.conclusionFormulaOrNone();return n===null?null:Lt(n)}conclusionFormulaOrNone(){const n=this.conclusion_form_or_none();if(n===null)return null;const t=this.form.find(r=>r.id===n);if(t===void 0)throw new Error(`${this.aid}: config.conclusion_form "${n}" names no registered formula`);return t}elicited_svar_response_types(){return GN(this.config)}get_fgroups(){const n=this.config.framing;if(n===void 0){if(this.framing.length>0)throw new Error(`${this.aid}: ${this.framing.length} framing note(s) but no config.framing declaring the fgroups their flabels belong to`);return{}}return n.fgroups}fgroup_of_flabel(n){const t=this.get_fgroups();for(const[r,i]of Object.entries(t))if(i.flabels.includes(n))return[r,i];throw new Error(`${this.aid}: framing flabel '${n}' belongs to no declared fgroup (declared: ${Object.keys(t).sort().join(", ")})`)}standard_fgroups_in_order(){return Object.entries(this.get_fgroups()).filter(([,n])=>n.standard_rendering)}standard_rendering_flabels(){const n=new Set;for(const[,t]of this.standard_fgroups_in_order())for(const r of t.flabels)n.add(r);return n}referenceable_framing_notes(){const n=this.standard_rendering_flabels();return this.framing.filter(t=>n.has(t.flabel))}nonstandard_notes(n,t){const r=this.get_fgroups(),i=r[n];if(i===void 0)throw new Error(`${this.aid}: no declared fgroup '${n}' (declared: ${Object.keys(r).sort().join(", ")})`);if(i.standard_rendering)throw new Error(`${this.aid}: fgroup '${n}' is standard-rendering; its notes are placed by get_framing_layout, not bespoke code`);const o=new Set(i.flabels),a=new Set(t);return this.framing.filter(u=>o.has(u.flabel)&&a.has(u.flabel))}placed_framing_note_ids(n){const t=this.get_framing_layout(n),r=new Set,i=o=>{for(const a of o)r.add(a.note.id),i(a.children)};i(t.root_section.layout_nodes);for(const o of t.nonroot_anchor_sections.values())i(o.layout_nodes);return r}get_framing_layout(n){const t=this.standard_rendering_flabels(),r=new Set([...n].filter(l=>t.has(l))),i=new Map(this.framing.map(l=>[l.id,l])),o=new Map,a=l=>{if(o.has(l))return o.get(l)??null;const d=i.get(l);if(!d)throw new Error(`Unknown framing note id: ${l}`);let p=null;if(r.has(d.flabel)){const m=d.framing_target;if(m!==null){const f=a(m);f!==null&&(p={anchor_id:f.anchor_id,depth:f.depth+1,visible_parent_id:m})}p===null&&d.static_anchor!==null&&(p={anchor_id:d.static_anchor,depth:1,visible_parent_id:null})}return o.set(l,p),p};for(const l of this.framing)a(l.id);const u=new Map,s=[],c=new Map;for(const l of this.framing){const d=o.get(l.id);d!=null&&u.set(l.id,{depth:d.depth,note:l,children:[]})}for(const l of this.framing){const d=o.get(l.id);if(d==null)continue;const p=u.get(l.id);if(d.visible_parent_id!==null)u.get(d.visible_parent_id).children.push(p);else if(d.anchor_id==="root")s.push(p);else{const m=c.get(d.anchor_id)??[];m.push(p),c.set(d.anchor_id,m)}}return{root_section:{static_anchor_id:"root",layout_nodes:s},nonroot_anchor_sections:new Map(Array.from(c.entries(),([l,d])=>[l,{static_anchor_id:l,layout_nodes:d}]))}}}function Fv(e){return e.get_textdefn_entries().map(n=>{const t=`def-${n.bareName.toLowerCase()}`;return{...n,anchorId:t,anchor:`#${t}`}})}const ZN=["options","config","layout","svar","textchunk","display","isym","ax","expr","form","definedSym","textdefn"];function ek(e){if(typeof e!="object"||e===null)throw new Error("Jprob template data must be a non-null object");const n=e,t=ZN.filter(r=>!(r in n));if(t.length>0)throw new Error(`Jprob template data missing required keys: ${t.join(", ")}`);return new Lw(e)}function nk(e){return ek(e)}const Ea="data-popover-target";function tk(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function X3(e,n){const t=Object.keys(e).sort(),r=[...n].sort();return t.length===r.length&&t.every((i,o)=>i===r[o])}function Rw(e){return encodeURIComponent(JSON.stringify(e))}function K3(e){let n;try{n=JSON.parse(decodeURIComponent(e))}catch(t){throw new Error("Malformed popover target encoding.",{cause:t})}if(!tk(n)||typeof n.kind!="string")throw new Error("Popover target must be an object with a recognized kind.");if(n.kind==="entity"){if(!X3(n,["kind","targetId"])||typeof n.targetId!="string"||n.targetId.length===0)throw new Error("Malformed entity popover target.");return{kind:"entity",targetId:n.targetId}}if(n.kind==="sourcequote"){if(!X3(n,["kind","sourcequoteIds"])||!Array.isArray(n.sourcequoteIds)||n.sourcequoteIds.length===0||!n.sourcequoteIds.every(t=>typeof t=="string"&&t.startsWith("srcquote:")&&t.length>9))throw new Error("Malformed source-quote popover target.");return{kind:"sourcequote",sourcequoteIds:n.sourcequoteIds}}throw new Error(`Unknown popover target kind: ${n.kind}`)}function x(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function K(e){return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const Ch="[",Oh="]",rk="|",Cw="{",Ow="}",ik=new RegExp("(?<!\\\\)\\{([^\\}]+)\\}","g"),Ni=new RegExp("(?<!\\\\)\\{((?:expr|form):[^\\}]+)\\}","g"),ok=new RegExp("(?<!\\\\)\\[([^\\]]+?)\\|([^\\]|]+)\\](?!\\((?:https?:\\/\\/|#|mailto:|[\\w-]+\\.html(?=[?#)])))","g"),ak=new RegExp("(?<!\\\\)\\[([^\\]|]+)\\](?!\\((?:https?:\\/\\/|#|mailto:|[\\w-]+\\.html(?=[?#)])))","g"),Nw=new RegExp("(?<!\\\\)\\[([^\\]]+)\\]\\(((?:https?:\\/\\/|#|mailto:|[\\w-]+\\.html(?=[?#)]))[^)\\s]*)\\)","g"),Nh=/‹\+(.*?)\+›/g,uk=new RegExp("(?<!\\\\)\\[([^\\]|]*?)(?:\\|[^\\]]*?)?\\](?!\\((?:https?:\\/\\/|#|mailto:|[\\w-]+\\.html(?=[?#)])))","g"),sk=new RegExp("(?<!\\\\)\\{[^\\}]*\\}","g"),ck=/\\([\{\}])/g,lk=/\\([\[\]])/g,kw="symbol-ref-name",dk="symbol-ref-repeat",qv="ax-",xv="svar-",hu="ex-",vu="framing-",Mw="bib-",fk="bib-inline-link",pk="↗";function _u(e){return`${Mw}${xN(e)}`}function Pw(e,n){return n.url===void 0?e:`${e} [${n.url}](${n.url})`}function Dw(e){return e.form.filter(n=>!n.hide&&e.get_display_form(n.id)).map(n=>n.id)}function Bv(e,n={}){const t=new Map,r=n.symbolMnames??!1,i=mk(e);for(const o of e.isym_entries()){const a=o.id.startsWith("isym:")?o.id:`isym:${o.id}`,u=a.startsWith("isym:")?a.slice(5):a,s=`#isym-${u}`,c={bareId:u,mname:i.get(a)??u},l=i.get(a);if(l){const d={anchor:s,displayText:l,symbolId:a};t.set(l,d),t.set(`${u}:long`,d),t.set(`isym:${u}:long`,d)}t.set(u,{anchor:s,displayText:Xo(c,r),symbolName:c,symbolId:a}),t.set(a,{anchor:s,displayText:Xo(c,r),symbolName:c,symbolId:a})}for(const o of Fv(e))for(const a of o.aliases)t.set(a,{anchor:o.anchor,displayText:a});for(const o of e.isym_entries())for(const a of Gr)for(const u of o[a]??[]){const s=pu(u.id);t.set(u.id,{anchor:`#${hu}${s}`,displayText:s})}for(const o of e.get_axioms()){if(!e.get_display_ax(o.id))continue;const u=Ci(o.id);t.set(o.id,{anchor:`#${qv}${u}`,displayText:u})}for(const o of Dw(e)){if(t.has(o))continue;const a=mu(o);t.set(o,{anchor:`#form-${a}`,displayText:a})}for(const o of e.get_options()){const a=ge(o.id),u=`#opt-${a}`,s={bareId:a,mname:o.longname??a},c=Xo(s,r),l={anchor:u,displayText:c,symbolName:s,symbolId:o.id};t.has(o.id)||t.set(o.id,l),t.has(a)||t.set(a,l);const d=`${a}:short`;t.has(d)||t.set(d,{anchor:u,displayText:a,symbolId:o.id})}for(const o of e.get_tchoice_decls()){const a=Li(o.id),u=`#tchoice-${a}`,s={bareId:a,mname:o.longname??a};t.has(o.id)||t.set(o.id,{anchor:u,displayText:Xo(s,r),symbolName:s,symbolId:o.id})}for(const o of e.get_svar_bare_names()){const a=`svar:${o}`;t.has(a)||t.set(a,{anchor:`#${xv}${o}`,displayText:o})}for(const o of e.referenceable_framing_notes())t.has(o.id)||t.set(o.id,{anchor:`#${vu}${Oi(o.id)}`,displayText:Oi(o.id),alwaysPopover:!0});for(const o of e.bib_entries())t.has(o.id)||t.set(o.id,{anchor:`#${_u(o.id)}`,displayText:e.bib_inline_display_text(o.id),alwaysPopover:!0,...o.inline_link?{inlineLinkUrl:o.url}:{}});for(const o of e.definedSym){const a=o.id.startsWith("definedSym:")?o.id.slice(11):o.id,s={anchor:`#defsym-${a}`,displayText:a,symbolId:o.id};t.has(a)||t.set(a,s),t.has(o.id)||t.set(o.id,s)}return t}function mk(e){const n=new Map;for(const t of e.isym_entries()){if(!t.longname)continue;const r=t.id.startsWith("isym:")?t.id:`isym:${t.id}`;n.set(r,t.longname)}return n}function Xo(e,n){return n?e.mname:e.bareId}const hk={point:"=",sample:"~",bounds:"∈"};function Fw(e){return hk[e]}function ao(e){return e.svar_entries().map(({bareName:n})=>`{expr:${n}}`)}function Y3(e,n,t,r){const i=qw(t,r),o=K(Rw({kind:"entity",targetId:n}));return`<button type="button" class="${["ref-popover",...i.classes].join(" ")}" ${Ea}="${o}" aria-expanded="false"${i.dataAttrs}>${e}</button>`}function Ko(e){return e.inlineLinkUrl===void 0?"":`<a class="${fk}" href="${K(e.inlineLinkUrl)}" target="_blank" rel="noopener">${pk}</a>`}function J3(e,n,t,r){const i=qw(t,r),o=i.classes.length===0?"":` class="${i.classes.join(" ")}"`;return`<a href="${e}"${o}${i.dataAttrs}>${n}</a>`}function qw(e,n){const t=[];let r="";return e&&(t.push(kw),r=` data-bareid="${K(e.bareId)}" data-mname="${K(e.mname)}"`),n&&t.push(dk),{classes:t,dataAttrs:r}}function z3(e,n){return n===void 0||e.symbolId===void 0?!1:n.has(e.symbolId)?!0:(n.add(e.symbolId),!1)}const vk=new RegExp(`${ok.source}|${ak.source}`,"g");function _k(e,n,t,r,i){const o=(t==null?void 0:t.popoverAllRefs)??!1;return e.replace(vk,(a,u,s,c)=>{if(c===void 0){if(u===void 0||s===void 0)throw new Error("resolveRefsHtmlBare: REF_PIPE_OR_BARE_RE matched neither form");const p=n.get(s);if(!p)return r==null||r.add(s),`${Ch}${u}${rk}${s}${Oh}`;const m=z3(p,i);return o||p.alwaysPopover?Y3(u,p.anchor,void 0,m)+Ko(p):J3(p.anchor,u,void 0,m)+Ko(p)}const l=n.get(c);if(!l)return r==null||r.add(c),`${Ch}${c}${Oh}`;const d=z3(l,i);return o||l.alwaysPopover?Y3(l.displayText,l.anchor,l.symbolName,d)+Ko(l):J3(l.anchor,l.displayText,l.symbolName,d)+Ko(l)})}const gk=10;function bk(e,n,t,r,i){let o=e;for(let a=0;a<gk;a++){const u=_k(o,n,t,r,i);if(u===o)break;o=u}return o.replace(lk,"$1")}const yk=/\*\*/g;function Ek(e){return e.replace(Nw,"$1").replace(uk,"$1").replace(sk,"").replace(yk,"")}function Hv(e,n){if("input_type"in e&&e.input_type==="MultiStringFromSet"){if(!Array.isArray(n)||!n.every(r=>typeof r=="string"))throw new Error(`Invalid MultiStringFromSet value for ${e.id}: expected a string array`);if(!Array.isArray(e.allowed_values))throw new Error(`Invalid MultiStringFromSet declaration for ${e.id}: missing allowed_values`);const t=Sw(e,n,"value");if(t.length>0)throw new Error(`Invalid MultiStringFromSet value for ${e.id}: ${t.join("; ")}`);return[...n]}if(typeof n=="object")throw new Error(`Invalid scalar value for ${e.id}: expected string, number, or boolean`);if(ga(e)){if(fu(e.allowed_values)==="string"){if(typeof n!="string")throw new Error(`Invalid string value for ${e.id}: ${n}`);return n}const t=Number(n);if(typeof n=="boolean"||!Number.isFinite(t))throw new Error(`Invalid numeric value for ${e.id}: ${n}`);return t}if(typeof e.default_value=="boolean"){if(typeof n=="boolean")return n;if(n==="true")return!0;if(n==="false")return!1;throw new Error(`Invalid boolean value for ${e.id}: ${n}`)}if(typeof e.default_value=="number"){if(typeof n=="boolean"||typeof n=="string"&&n.trim()==="")throw new Error(`Invalid numeric value for ${e.id}: ${n}`);const t=Number(n);if(!Number.isFinite(t))throw new Error(`Invalid numeric value for ${e.id}: ${n}`);return t}if(typeof e.default_value=="string"){if(typeof n!="string")throw new Error(`Invalid string value for ${e.id}: ${n}`);return n}throw new Error(`Option ${e.id} has no supported default value type`)}const Uv=!0;function xw(e,n){return e!=="typical"||n}function Sk(e,n){const t=e.map(a=>({name:ge(a.id),values:a.allowed_values.filter(u=>typeof u!="boolean")}));if(t.length===0)return{names:[],combinations:[{}]};const r=t.map(a=>a.name),i=t.map(a=>a.values);let o=[{}];for(let a=0;a<r.length;a++){const u=r[a],s=i[a],c=[];for(const l of o)for(const d of s)c.push({...l,[u]:d});o=c}return n!==void 0&&(o=o.filter(a=>n(a))),{names:r,combinations:o}}function Bw(e,n,t){const r=new Set(e.get_cparam_bare_names()),i=t!=="plainnum",o={};for(const[a,u]of Object.entries(n))i&&r.has(a)||(o[a]=u);return o}function Wn(e){return e!=="plainnum"}class wk extends Lw{constructor(t,r,i){super(t);Ne(this,"cparam_overrides");Ne(this,"aopt_overrides");Ne(this,"query_mode");const o=new Set(this.get_option_bare_names()),a=this.get_tchoice_bare_names(),u=new Map,s=new Map;for(const[c,l]of Object.entries(r)){if(a.has(c))throw new Error(`Cannot override tchoice entity "${c}" for ${this.aid}: it is left free for the responder to choose.`);if(!o.has(c))throw new Error(`Unknown option key "${c}" for ${this.aid}. Valid keys: ${[...o].sort().join(", ")}`);const d=this.find_cparam(c);if(d){if(Wn(i))throw new Error(`Cannot fix cparam "${c}" for ${this.aid} in ${i} mode: cparams are free in plaincode/richcode (the responder covers all combinations).`);u.set(d.id,l)}else{const p=this.get_aopt(c),m=Sw(p,l,"bound value");if(m.length>0)throw new Error(`Illegal value for aopt "${c}" of ${this.aid}: ${m.join("; ")}`);s.set(p.id,l)}}this.cparam_overrides=u,this.aopt_overrides=s,this.query_mode=i}is_code_mode(){return Wn(this.query_mode)}option_value(t){const r=this.find_cparam(t);if(r)return this.cparam_overrides.get(r.id)??r.default_value;const i=this.get_aopt(t);return this.aopt_overrides.get(i.id)??i.default_value}option_value_or(t,r){return this.get_option_bare_names().includes(t)?this.option_value(t):r}enabled_flabels(){const t=VN(this.get_option_bare_names());return t===null?[]:WN(this.option_value(t),t)}cited_bib_ids(t){const r=this.enabled_flabels(),i=new Set(this.placed_framing_note_ids(r));for(const[u,s]of Object.entries(this.get_fgroups()))if(!s.standard_rendering)for(const c of this.nonstandard_notes(u,r))i.add(c.id);const o=!!this.option_value_or("show_typical_examples",Uv),a=u=>{if(u.startsWith(Lh))return i.has(u);if(u.startsWith(ba))return xw(this.get_example(u).classification,o);if(u.startsWith(qN)){const[s]=this.resolve_srcquotes([u]);return t&&s.referenced_by.some(a)}return!0};return this.bib_entries().filter(u=>u.cited_by.some(a)).map(u=>u.id)}}function Hw(e,n,t){return new wk(e._get_data(),n,t)}const kh="dag-ref",Ak="dag-lhs",Mh="dag-glyph",Sa="data-dag-id",$k="↖",Tk="↘";function Ik(e){const n=e.sexpr;if(!Array.isArray(n)||n[0]!=="eq")return null;const t=n[1];return typeof t!="string"||!t.startsWith("expr:")?null:t.slice(5)}function Lk(e){Ni.lastIndex=0;const n=[];for(const t of e.matchAll(Ni)){const r=t[1];if(!r.startsWith("expr:"))continue;const i=r.slice(5);i.includes(":")||n.push(i)}return n}function Rk(e,n){const t=new Map(e.form.map(s=>[s.id,s])),r=n.map(s=>e.get_display_form(s)),i=new Map,o=n.map((s,c)=>{const l=t.get(s),d=l?Ik(l):null;return d!==null&&!i.has(d)&&i.set(d,c),d}),a=new Set;r.forEach((s,c)=>{for(const l of Lk(s)){const d=i.get(l);d!==void 0&&d<c&&a.add(l)}});const u=new Map;return n.forEach((s,c)=>{const l=r[c].replace(Ni,(d,p)=>{if(!p.startsWith("expr:"))return d;const m=p.slice(5);if(m.includes(":"))return d;if(m===o[c])return a.has(m)?`<span class="${kh} ${Ak}" ${Sa}="${K(m)}"><span class="${Mh}">${Tk}</span>${d}</span>`:d;const f=i.get(m);if(f===void 0||f>=c)return d;const h=mu(n[f]);return`<span class="${kh}" ${Sa}="${K(m)}"><a class="${Mh}" href="#form-${K(h)}">${$k}</a>${d}</span>`});u.set(s,l)}),u}const Ck=["expr:","form:"],Ok=["textchunk:","aopt:","cparam:"],Nk=10;function kk(e){const n=new Map;for(const t of e.get_options()){if(Ii(t)&&t.variant_producing)continue;const r=Uw(t.id);if(e.is_code_mode()&&zt(t.id)){n.set(r,`${Ch}${r}:short${Oh}`);continue}n.set(r,String(e.option_value(r)))}for(const t of e.get_textchunks()){const r=t.id.startsWith("textchunk:")?t.id.slice(10):t.id;n.set(r,t.defn)}return n}function Uw(e){for(const n of Ok)if(e.startsWith(n))return e.slice(n.length);return e}function Gv(e,n){const t=kk(n);let r=e;for(let i=0;i<Nk;i++){const o=r.replace(ik,(a,u)=>{for(const l of Ck)if(u.startsWith(l))return a;const s=Uw(u),c=t.get(s);if(c===void 0)throw new Error(`Template variable ${Cw}${u}${Ow} not found in non-variant-producing options or textchunks`);return c});if(o===r)break;r=o}return r.replace(ck,"$1")}const Mk=10;function Pk(e){const n=new Map;for(const r of e.get_display_expr_keys())n.set(r,e.get_display_expr(r));const t=new Set(e.form.filter(r=>!r.hide).map(r=>r.id));for(const r of e.get_display_form_keys())t.has(r)&&n.set(r,e.get_display_form(r));return n}function Dk(e,n){let t=e;for(let r=0;r<Mk;r++){const i=t.replace(Ni,(o,a)=>{const u=n.get(a);if(u===void 0)throw new Error(`Display ref ${Cw}${a}${Ow} not found in display.expr or display.form`);return u});if(i===t)break;t=i}return t}const Q3={};function Fk(e){let n=Q3[e];if(n)return n;n=Q3[e]=[];for(let t=0;t<128;t++){const r=String.fromCharCode(t);n.push(r)}for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);n[r]="%"+("0"+r.toString(16).toUpperCase()).slice(-2)}return n}function Or(e,n){typeof n!="string"&&(n=Or.defaultChars);const t=Fk(n);return e.replace(/(%[a-f0-9]{2})+/gi,function(r){let i="";for(let o=0,a=r.length;o<a;o+=3){const u=parseInt(r.slice(o+1,o+3),16);if(u<128){i+=t[u];continue}if((u&224)===192&&o+3<a){const s=parseInt(r.slice(o+4,o+6),16);if((s&192)===128){const c=u<<6&1984|s&63;c<128?i+="��":i+=String.fromCharCode(c),o+=3;continue}}if((u&240)===224&&o+6<a){const s=parseInt(r.slice(o+4,o+6),16),c=parseInt(r.slice(o+7,o+9),16);if((s&192)===128&&(c&192)===128){const l=u<<12&61440|s<<6&4032|c&63;l<2048||l>=55296&&l<=57343?i+="���":i+=String.fromCharCode(l),o+=6;continue}}if((u&248)===240&&o+9<a){const s=parseInt(r.slice(o+4,o+6),16),c=parseInt(r.slice(o+7,o+9),16),l=parseInt(r.slice(o+10,o+12),16);if((s&192)===128&&(c&192)===128&&(l&192)===128){let d=u<<18&1835008|s<<12&258048|c<<6&4032|l&63;d<65536||d>1114111?i+="����":(d-=65536,i+=String.fromCharCode(55296+(d>>10),56320+(d&1023))),o+=9;continue}}i+="�"}return i})}Or.defaultChars=";/?:@&=+$,#";Or.componentChars="";const Z3={};function qk(e){let n=Z3[e];if(n)return n;n=Z3[e]=[];for(let t=0;t<128;t++){const r=String.fromCharCode(t);/^[0-9a-z]$/i.test(r)?n.push(r):n.push("%"+("0"+t.toString(16).toUpperCase()).slice(-2))}for(let t=0;t<e.length;t++)n[e.charCodeAt(t)]=e[t];return n}function uo(e,n,t){typeof n!="string"&&(t=n,n=uo.defaultChars),typeof t>"u"&&(t=!0);const r=qk(n);let i="";for(let o=0,a=e.length;o<a;o++){const u=e.charCodeAt(o);if(t&&u===37&&o+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(o+1,o+3))){i+=e.slice(o,o+3),o+=2;continue}if(u<128){i+=r[u];continue}if(u>=55296&&u<=57343){if(u>=55296&&u<=56319&&o+1<a){const s=e.charCodeAt(o+1);if(s>=56320&&s<=57343){i+=encodeURIComponent(e[o]+e[o+1]),o++;continue}}i+="%EF%BF%BD";continue}i+=encodeURIComponent(e[o])}return i}uo.defaultChars=";/?:@&=+$,-_.!~*'()#";uo.componentChars="-_.!~*'()";function jv(e){let n="";return n+=e.protocol||"",n+=e.slashes?"//":"",n+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?n+="["+e.hostname+"]":n+=e.hostname||"",n+=e.port?":"+e.port:"",n+=e.pathname||"",n+=e.search||"",n+=e.hash||"",n}function wa(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const xk=/^([a-z0-9.+-]+:)/i,Bk=/:[0-9]*$/,Hk=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Uk=["<",">",'"',"`"," ","\r",`
`,"	"],Gk=["{","}","|","\\","^","`"].concat(Uk),jk=["'"].concat(Gk),eg=["%","/","?",";","#"].concat(jk),ng=["/","?","#"],Vk=255,tg=/^[+a-z0-9A-Z_-]{0,63}$/,Wk=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,rg={javascript:!0,"javascript:":!0},ig={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Vv(e,n){if(e&&e instanceof wa)return e;const t=new wa;return t.parse(e,n),t}wa.prototype.parse=function(e,n){let t,r,i,o=e;if(o=o.trim(),!n&&e.split("#").length===1){const c=Hk.exec(o);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}let a=xk.exec(o);if(a&&(a=a[0],t=a.toLowerCase(),this.protocol=a,o=o.substr(a.length)),(n||a||o.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=o.substr(0,2)==="//",i&&!(a&&rg[a])&&(o=o.substr(2),this.slashes=!0)),!rg[a]&&(i||a&&!ig[a])){let c=-1;for(let f=0;f<ng.length;f++)r=o.indexOf(ng[f]),r!==-1&&(c===-1||r<c)&&(c=r);let l,d;c===-1?d=o.lastIndexOf("@"):d=o.lastIndexOf("@",c),d!==-1&&(l=o.slice(0,d),o=o.slice(d+1),this.auth=l),c=-1;for(let f=0;f<eg.length;f++)r=o.indexOf(eg[f]),r!==-1&&(c===-1||r<c)&&(c=r);c===-1&&(c=o.length),o[c-1]===":"&&c--;const p=o.slice(0,c);o=o.slice(c),this.parseHost(p),this.hostname=this.hostname||"";const m=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!m){const f=this.hostname.split(/\./);for(let h=0,v=f.length;h<v;h++){const _=f[h];if(_&&!_.match(tg)){let g="";for(let b=0,y=_.length;b<y;b++)_.charCodeAt(b)>127?g+="x":g+=_[b];if(!g.match(tg)){const b=f.slice(0,h),y=f.slice(h+1),E=_.match(Wk);E&&(b.push(E[1]),y.unshift(E[2])),y.length&&(o=y.join(".")+o),this.hostname=b.join(".");break}}}}this.hostname.length>Vk&&(this.hostname=""),m&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const u=o.indexOf("#");u!==-1&&(this.hash=o.substr(u),o=o.slice(0,u));const s=o.indexOf("?");return s!==-1&&(this.search=o.substr(s),o=o.slice(0,s)),o&&(this.pathname=o),ig[t]&&this.hostname&&!this.pathname&&(this.pathname=""),this};wa.prototype.parseHost=function(e){let n=Bk.exec(e);n&&(n=n[0],n!==":"&&(this.port=n.substr(1)),e=e.substr(0,e.length-n.length)),e&&(this.hostname=e)};const Xk=Object.freeze(Object.defineProperty({__proto__:null,decode:Or,encode:uo,format:jv,parse:Vv},Symbol.toStringTag,{value:"Module"})),Gw=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,jw=/[\0-\x1F\x7F-\x9F]/,Kk=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Wv=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,Vw=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,Ww=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,Yk=Object.freeze(Object.defineProperty({__proto__:null,Any:Gw,Cc:jw,Cf:Kk,P:Wv,S:Vw,Z:Ww},Symbol.toStringTag,{value:"Module"})),Jk=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),zk=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var ks;const Qk=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),Zk=(ks=String.fromCodePoint)!==null&&ks!==void 0?ks:function(e){let n="";return e>65535&&(e-=65536,n+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),n+=String.fromCharCode(e),n};function eM(e){var n;return e>=55296&&e<=57343||e>1114111?65533:(n=Qk.get(e))!==null&&n!==void 0?n:e}var Ke;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(Ke||(Ke={}));const nM=32;var Tt;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(Tt||(Tt={}));function Ph(e){return e>=Ke.ZERO&&e<=Ke.NINE}function tM(e){return e>=Ke.UPPER_A&&e<=Ke.UPPER_F||e>=Ke.LOWER_A&&e<=Ke.LOWER_F}function rM(e){return e>=Ke.UPPER_A&&e<=Ke.UPPER_Z||e>=Ke.LOWER_A&&e<=Ke.LOWER_Z||Ph(e)}function iM(e){return e===Ke.EQUALS||rM(e)}var Xe;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(Xe||(Xe={}));var $t;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})($t||($t={}));class oM{constructor(n,t,r){this.decodeTree=n,this.emitCodePoint=t,this.errors=r,this.state=Xe.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=$t.Strict}startEntity(n){this.decodeMode=n,this.state=Xe.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(n,t){switch(this.state){case Xe.EntityStart:return n.charCodeAt(t)===Ke.NUM?(this.state=Xe.NumericStart,this.consumed+=1,this.stateNumericStart(n,t+1)):(this.state=Xe.NamedEntity,this.stateNamedEntity(n,t));case Xe.NumericStart:return this.stateNumericStart(n,t);case Xe.NumericDecimal:return this.stateNumericDecimal(n,t);case Xe.NumericHex:return this.stateNumericHex(n,t);case Xe.NamedEntity:return this.stateNamedEntity(n,t)}}stateNumericStart(n,t){return t>=n.length?-1:(n.charCodeAt(t)|nM)===Ke.LOWER_X?(this.state=Xe.NumericHex,this.consumed+=1,this.stateNumericHex(n,t+1)):(this.state=Xe.NumericDecimal,this.stateNumericDecimal(n,t))}addToNumericResult(n,t,r,i){if(t!==r){const o=r-t;this.result=this.result*Math.pow(i,o)+parseInt(n.substr(t,o),i),this.consumed+=o}}stateNumericHex(n,t){const r=t;for(;t<n.length;){const i=n.charCodeAt(t);if(Ph(i)||tM(i))t+=1;else return this.addToNumericResult(n,r,t,16),this.emitNumericEntity(i,3)}return this.addToNumericResult(n,r,t,16),-1}stateNumericDecimal(n,t){const r=t;for(;t<n.length;){const i=n.charCodeAt(t);if(Ph(i))t+=1;else return this.addToNumericResult(n,r,t,10),this.emitNumericEntity(i,2)}return this.addToNumericResult(n,r,t,10),-1}emitNumericEntity(n,t){var r;if(this.consumed<=t)return(r=this.errors)===null||r===void 0||r.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(n===Ke.SEMI)this.consumed+=1;else if(this.decodeMode===$t.Strict)return 0;return this.emitCodePoint(eM(this.result),this.consumed),this.errors&&(n!==Ke.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(n,t){const{decodeTree:r}=this;let i=r[this.treeIndex],o=(i&Tt.VALUE_LENGTH)>>14;for(;t<n.length;t++,this.excess++){const a=n.charCodeAt(t);if(this.treeIndex=aM(r,i,this.treeIndex+Math.max(1,o),a),this.treeIndex<0)return this.result===0||this.decodeMode===$t.Attribute&&(o===0||iM(a))?0:this.emitNotTerminatedNamedEntity();if(i=r[this.treeIndex],o=(i&Tt.VALUE_LENGTH)>>14,o!==0){if(a===Ke.SEMI)return this.emitNamedEntityData(this.treeIndex,o,this.consumed+this.excess);this.decodeMode!==$t.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var n;const{result:t,decodeTree:r}=this,i=(r[t]&Tt.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,i,this.consumed),(n=this.errors)===null||n===void 0||n.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(n,t,r){const{decodeTree:i}=this;return this.emitCodePoint(t===1?i[n]&~Tt.VALUE_LENGTH:i[n+1],r),t===3&&this.emitCodePoint(i[n+2],r),r}end(){var n;switch(this.state){case Xe.NamedEntity:return this.result!==0&&(this.decodeMode!==$t.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case Xe.NumericDecimal:return this.emitNumericEntity(0,2);case Xe.NumericHex:return this.emitNumericEntity(0,3);case Xe.NumericStart:return(n=this.errors)===null||n===void 0||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case Xe.EntityStart:return 0}}}function Xw(e){let n="";const t=new oM(e,r=>n+=Zk(r));return function(i,o){let a=0,u=0;for(;(u=i.indexOf("&",u))>=0;){n+=i.slice(a,u),t.startEntity(o);const c=t.write(i,u+1);if(c<0){a=u+t.end();break}a=u+c,u=c===0?a+1:a}const s=n+i.slice(a);return n="",s}}function aM(e,n,t,r){const i=(n&Tt.BRANCH_LENGTH)>>7,o=n&Tt.JUMP_TABLE;if(i===0)return o!==0&&r===o?t:-1;if(o){const s=r-o;return s<0||s>=i?-1:e[t+s]-1}let a=t,u=a+i-1;for(;a<=u;){const s=a+u>>>1,c=e[s];if(c<r)a=s+1;else if(c>r)u=s-1;else return e[s+i]}return-1}const uM=Xw(Jk);Xw(zk);function Kw(e,n=$t.Legacy){return uM(e,n)}function sM(e){return Object.prototype.toString.call(e)}function Xv(e){return sM(e)==="[object String]"}const cM=Object.prototype.hasOwnProperty;function lM(e,n){return cM.call(e,n)}function gu(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!="object")throw new TypeError(t+"must be object");Object.keys(t).forEach(function(r){e[r]=t[r]})}}),e}function Yw(e,n,t){return[].concat(e.slice(0,n),t,e.slice(n+1))}function Kv(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function Aa(e){if(e>65535){e-=65536;const n=55296+(e>>10),t=56320+(e&1023);return String.fromCharCode(n,t)}return String.fromCharCode(e)}const Jw=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,dM=/&([a-z#][a-z0-9]{1,31});/gi,fM=new RegExp(Jw.source+"|"+dM.source,"gi"),pM=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function mM(e,n){if(n.charCodeAt(0)===35&&pM.test(n)){const r=n[1].toLowerCase()==="x"?parseInt(n.slice(2),16):parseInt(n.slice(1),10);return Kv(r)?Aa(r):e}const t=Kw(e);return t!==e?t:e}function hM(e){return e.indexOf("\\")<0?e:e.replace(Jw,"$1")}function Nr(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(fM,function(n,t,r){return t||mM(n,r)})}const vM=/[&<>"]/,_M=/[&<>"]/g,gM={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function bM(e){return gM[e]}function Rt(e){return vM.test(e)?e.replace(_M,bM):e}const yM=/[.?*+^$[\]\\(){}|-]/g;function EM(e){return e.replace(yM,"\\$&")}function Le(e){switch(e){case 9:case 32:return!0}return!1}function ki(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Mi(e){return Wv.test(e)||Vw.test(e)}function Pi(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function bu(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}const SM={mdurl:Xk,ucmicro:Yk},wM=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:Yw,assign:gu,escapeHtml:Rt,escapeRE:EM,fromCodePoint:Aa,has:lM,isMdAsciiPunct:Pi,isPunctChar:Mi,isSpace:Le,isString:Xv,isValidEntityCode:Kv,isWhiteSpace:ki,lib:SM,normalizeReference:bu,unescapeAll:Nr,unescapeMd:hM},Symbol.toStringTag,{value:"Module"}));function AM(e,n,t){let r,i,o,a;const u=e.posMax,s=e.pos;for(e.pos=n+1,r=1;e.pos<u;){if(o=e.src.charCodeAt(e.pos),o===93&&(r--,r===0)){i=!0;break}if(a=e.pos,e.md.inline.skipToken(e),o===91){if(a===e.pos-1)r++;else if(t)return e.pos=s,-1}}let c=-1;return i&&(c=e.pos),e.pos=s,c}function $M(e,n,t){let r,i=n;const o={ok:!1,pos:0,str:""};if(e.charCodeAt(i)===60){for(i++;i<t;){if(r=e.charCodeAt(i),r===10||r===60)return o;if(r===62)return o.pos=i+1,o.str=Nr(e.slice(n+1,i)),o.ok=!0,o;if(r===92&&i+1<t){i+=2;continue}i++}return o}let a=0;for(;i<t&&(r=e.charCodeAt(i),!(r===32||r<32||r===127));){if(r===92&&i+1<t){if(e.charCodeAt(i+1)===32)break;i+=2;continue}if(r===40&&(a++,a>32))return o;if(r===41){if(a===0)break;a--}i++}return n===i||a!==0||(o.str=Nr(e.slice(n,i)),o.pos=i,o.ok=!0),o}function TM(e,n,t,r){let i,o=n;const a={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(r)a.str=r.str,a.marker=r.marker;else{if(o>=t)return a;let u=e.charCodeAt(o);if(u!==34&&u!==39&&u!==40)return a;n++,o++,u===40&&(u=41),a.marker=u}for(;o<t;){if(i=e.charCodeAt(o),i===a.marker)return a.pos=o+1,a.str+=Nr(e.slice(n,o)),a.ok=!0,a;if(i===40&&a.marker===41)return a;i===92&&o+1<t&&o++,o++}return a.can_continue=!0,a.str+=Nr(e.slice(n,o)),a}const IM=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:$M,parseLinkLabel:AM,parseLinkTitle:TM},Symbol.toStringTag,{value:"Module"})),Zn={};Zn.code_inline=function(e,n,t,r,i){const o=e[n];return"<code"+i.renderAttrs(o)+">"+Rt(o.content)+"</code>"};Zn.code_block=function(e,n,t,r,i){const o=e[n];return"<pre"+i.renderAttrs(o)+"><code>"+Rt(e[n].content)+`</code></pre>
`};Zn.fence=function(e,n,t,r,i){const o=e[n],a=o.info?Nr(o.info).trim():"";let u="",s="";if(a){const l=a.split(/(\s+)/g);u=l[0],s=l.slice(2).join("")}let c;if(t.highlight?c=t.highlight(o.content,u,s)||Rt(o.content):c=Rt(o.content),c.indexOf("<pre")===0)return c+`
`;if(a){const l=o.attrIndex("class"),d=o.attrs?o.attrs.slice():[];l<0?d.push(["class",t.langPrefix+u]):(d[l]=d[l].slice(),d[l][1]+=" "+t.langPrefix+u);const p={attrs:d};return`<pre><code${i.renderAttrs(p)}>${c}</code></pre>
`}return`<pre><code${i.renderAttrs(o)}>${c}</code></pre>
`};Zn.image=function(e,n,t,r,i){const o=e[n];return o.attrs[o.attrIndex("alt")][1]=i.renderInlineAsText(o.children,t,r),i.renderToken(e,n,t)};Zn.hardbreak=function(e,n,t){return t.xhtmlOut?`<br />
`:`<br>
`};Zn.softbreak=function(e,n,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`};Zn.text=function(e,n){return Rt(e[n].content)};Zn.html_block=function(e,n){return e[n].content};Zn.html_inline=function(e,n){return e[n].content};function jr(){this.rules=gu({},Zn)}jr.prototype.renderAttrs=function(n){let t,r,i;if(!n.attrs)return"";for(i="",t=0,r=n.attrs.length;t<r;t++)i+=" "+Rt(n.attrs[t][0])+'="'+Rt(n.attrs[t][1])+'"';return i};jr.prototype.renderToken=function(n,t,r){const i=n[t];let o="";if(i.hidden)return"";i.block&&i.nesting!==-1&&t&&n[t-1].hidden&&(o+=`
`),o+=(i.nesting===-1?"</":"<")+i.tag,o+=this.renderAttrs(i),i.nesting===0&&r.xhtmlOut&&(o+=" /");let a=!1;if(i.block&&(a=!0,i.nesting===1&&t+1<n.length)){const u=n[t+1];(u.type==="inline"||u.hidden||u.nesting===-1&&u.tag===i.tag)&&(a=!1)}return o+=a?`>
`:">",o};jr.prototype.renderInline=function(e,n,t){let r="";const i=this.rules;for(let o=0,a=e.length;o<a;o++){const u=e[o].type;typeof i[u]<"u"?r+=i[u](e,o,n,t,this):r+=this.renderToken(e,o,n)}return r};jr.prototype.renderInlineAsText=function(e,n,t){let r="";for(let i=0,o=e.length;i<o;i++)switch(e[i].type){case"text":r+=e[i].content;break;case"image":r+=this.renderInlineAsText(e[i].children,n,t);break;case"html_inline":case"html_block":r+=e[i].content;break;case"softbreak":case"hardbreak":r+=`
`;break}return r};jr.prototype.render=function(e,n,t){let r="";const i=this.rules;for(let o=0,a=e.length;o<a;o++){const u=e[o].type;u==="inline"?r+=this.renderInline(e[o].children,n,t):typeof i[u]<"u"?r+=i[u](e,o,n,t,this):r+=this.renderToken(e,o,n,t)}return r};function ln(){this.__rules__=[],this.__cache__=null}ln.prototype.__find__=function(e){for(let n=0;n<this.__rules__.length;n++)if(this.__rules__[n].name===e)return n;return-1};ln.prototype.__compile__=function(){const e=this,n=[""];e.__rules__.forEach(function(t){t.enabled&&t.alt.forEach(function(r){n.indexOf(r)<0&&n.push(r)})}),e.__cache__={},n.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(r){r.enabled&&(t&&r.alt.indexOf(t)<0||e.__cache__[t].push(r.fn))})})};ln.prototype.at=function(e,n,t){const r=this.__find__(e),i=t||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__[r].fn=n,this.__rules__[r].alt=i.alt||[],this.__cache__=null};ln.prototype.before=function(e,n,t,r){const i=this.__find__(e),o=r||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i,0,{name:n,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null};ln.prototype.after=function(e,n,t,r){const i=this.__find__(e),o=r||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i+1,0,{name:n,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null};ln.prototype.push=function(e,n,t){const r=t||{};this.__rules__.push({name:e,enabled:!0,fn:n,alt:r.alt||[]}),this.__cache__=null};ln.prototype.enable=function(e,n){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(r){const i=this.__find__(r);if(i<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[i].enabled=!0,t.push(r)},this),this.__cache__=null,t};ln.prototype.enableOnly=function(e,n){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(t){t.enabled=!1}),this.enable(e,n)};ln.prototype.disable=function(e,n){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(r){const i=this.__find__(r);if(i<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[i].enabled=!1,t.push(r)},this),this.__cache__=null,t};ln.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function Pn(e,n,t){this.type=e,this.tag=n,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Pn.prototype.attrIndex=function(n){if(!this.attrs)return-1;const t=this.attrs;for(let r=0,i=t.length;r<i;r++)if(t[r][0]===n)return r;return-1};Pn.prototype.attrPush=function(n){this.attrs?this.attrs.push(n):this.attrs=[n]};Pn.prototype.attrSet=function(n,t){const r=this.attrIndex(n),i=[n,t];r<0?this.attrPush(i):this.attrs[r]=i};Pn.prototype.attrGet=function(n){const t=this.attrIndex(n);let r=null;return t>=0&&(r=this.attrs[t][1]),r};Pn.prototype.attrJoin=function(n,t){const r=this.attrIndex(n);r<0?this.attrPush([n,t]):this.attrs[r][1]=this.attrs[r][1]+" "+t};function zw(e,n,t){this.src=e,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=n}zw.prototype.Token=Pn;const LM=/\r\n?|\n/g,RM=/\0/g;function CM(e){let n;n=e.src.replace(LM,`
`),n=n.replace(RM,"�"),e.src=n}function OM(e){let n;e.inlineMode?(n=new e.Token("inline","",0),n.content=e.src,n.map=[0,1],n.children=[],e.tokens.push(n)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function NM(e){const n=e.tokens;for(let t=0,r=n.length;t<r;t++){const i=n[t];i.type==="inline"&&e.md.inline.parse(i.content,e.md,e.env,i.children)}}function kM(e){return/^<a[>\s]/i.test(e)}function MM(e){return/^<\/a\s*>/i.test(e)}function PM(e){const n=e.tokens;if(e.md.options.linkify)for(let t=0,r=n.length;t<r;t++){if(n[t].type!=="inline"||!e.md.linkify.pretest(n[t].content))continue;let i=n[t].children,o=0;for(let a=i.length-1;a>=0;a--){const u=i[a];if(u.type==="link_close"){for(a--;i[a].level!==u.level&&i[a].type!=="link_open";)a--;continue}if(u.type==="html_inline"&&(kM(u.content)&&o>0&&o--,MM(u.content)&&o++),!(o>0)&&u.type==="text"&&e.md.linkify.test(u.content)){const s=u.content;let c=e.md.linkify.match(s);const l=[];let d=u.level,p=0;c.length>0&&c[0].index===0&&a>0&&i[a-1].type==="text_special"&&(c=c.slice(1));for(let m=0;m<c.length;m++){const f=c[m].url,h=e.md.normalizeLink(f);if(!e.md.validateLink(h))continue;let v=c[m].text;c[m].schema?c[m].schema==="mailto:"&&!/^mailto:/i.test(v)?v=e.md.normalizeLinkText("mailto:"+v).replace(/^mailto:/,""):v=e.md.normalizeLinkText(v):v=e.md.normalizeLinkText("http://"+v).replace(/^http:\/\//,"");const _=c[m].index;if(_>p){const E=new e.Token("text","",0);E.content=s.slice(p,_),E.level=d,l.push(E)}const g=new e.Token("link_open","a",1);g.attrs=[["href",h]],g.level=d++,g.markup="linkify",g.info="auto",l.push(g);const b=new e.Token("text","",0);b.content=v,b.level=d,l.push(b);const y=new e.Token("link_close","a",-1);y.level=--d,y.markup="linkify",y.info="auto",l.push(y),p=c[m].lastIndex}if(p<s.length){const m=new e.Token("text","",0);m.content=s.slice(p),m.level=d,l.push(m)}n[t].children=i=Yw(i,a,l)}}}}const Qw=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,DM=/\((c|tm|r)\)/i,FM=/\((c|tm|r)\)/ig,qM={c:"©",r:"®",tm:"™"};function xM(e,n){return qM[n.toLowerCase()]}function BM(e){let n=0;for(let t=e.length-1;t>=0;t--){const r=e[t];r.type==="text"&&!n&&(r.content=r.content.replace(FM,xM)),r.type==="link_open"&&r.info==="auto"&&n--,r.type==="link_close"&&r.info==="auto"&&n++}}function HM(e){let n=0;for(let t=e.length-1;t>=0;t--){const r=e[t];r.type==="text"&&!n&&Qw.test(r.content)&&(r.content=r.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),r.type==="link_open"&&r.info==="auto"&&n--,r.type==="link_close"&&r.info==="auto"&&n++}}function UM(e){let n;if(e.md.options.typographer)for(n=e.tokens.length-1;n>=0;n--)e.tokens[n].type==="inline"&&(DM.test(e.tokens[n].content)&&BM(e.tokens[n].children),Qw.test(e.tokens[n].content)&&HM(e.tokens[n].children))}const GM=/['"]/,og=/['"]/g,ag="’";function Yo(e,n,t){return e.slice(0,n)+t+e.slice(n+1)}function jM(e,n){let t;const r=[];for(let i=0;i<e.length;i++){const o=e[i],a=e[i].level;for(t=r.length-1;t>=0&&!(r[t].level<=a);t--);if(r.length=t+1,o.type!=="text")continue;let u=o.content,s=0,c=u.length;e:for(;s<c;){og.lastIndex=s;const l=og.exec(u);if(!l)break;let d=!0,p=!0;s=l.index+1;const m=l[0]==="'";let f=32;if(l.index-1>=0)f=u.charCodeAt(l.index-1);else for(t=i-1;t>=0&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t--)if(e[t].content){f=e[t].content.charCodeAt(e[t].content.length-1);break}let h=32;if(s<c)h=u.charCodeAt(s);else for(t=i+1;t<e.length&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t++)if(e[t].content){h=e[t].content.charCodeAt(0);break}const v=Pi(f)||Mi(String.fromCharCode(f)),_=Pi(h)||Mi(String.fromCharCode(h)),g=ki(f),b=ki(h);if(b?d=!1:_&&(g||v||(d=!1)),g?p=!1:v&&(b||_||(p=!1)),h===34&&l[0]==='"'&&f>=48&&f<=57&&(p=d=!1),d&&p&&(d=v,p=_),!d&&!p){m&&(o.content=Yo(o.content,l.index,ag));continue}if(p)for(t=r.length-1;t>=0;t--){let y=r[t];if(r[t].level<a)break;if(y.single===m&&r[t].level===a){y=r[t];let E,$;m?(E=n.md.options.quotes[2],$=n.md.options.quotes[3]):(E=n.md.options.quotes[0],$=n.md.options.quotes[1]),o.content=Yo(o.content,l.index,$),e[y.token].content=Yo(e[y.token].content,y.pos,E),s+=$.length-1,y.token===i&&(s+=E.length-1),u=o.content,c=u.length,r.length=t;continue e}}d?r.push({token:i,pos:l.index,single:m,level:a}):p&&m&&(o.content=Yo(o.content,l.index,ag))}}}function VM(e){if(e.md.options.typographer)for(let n=e.tokens.length-1;n>=0;n--)e.tokens[n].type!=="inline"||!GM.test(e.tokens[n].content)||jM(e.tokens[n].children,e)}function WM(e){let n,t;const r=e.tokens,i=r.length;for(let o=0;o<i;o++){if(r[o].type!=="inline")continue;const a=r[o].children,u=a.length;for(n=0;n<u;n++)a[n].type==="text_special"&&(a[n].type="text");for(n=t=0;n<u;n++)a[n].type==="text"&&n+1<u&&a[n+1].type==="text"?a[n+1].content=a[n].content+a[n+1].content:(n!==t&&(a[t]=a[n]),t++);n!==t&&(a.length=t)}}const Ms=[["normalize",CM],["block",OM],["inline",NM],["linkify",PM],["replacements",UM],["smartquotes",VM],["text_join",WM]];function Yv(){this.ruler=new ln;for(let e=0;e<Ms.length;e++)this.ruler.push(Ms[e][0],Ms[e][1])}Yv.prototype.process=function(e){const n=this.ruler.getRules("");for(let t=0,r=n.length;t<r;t++)n[t](e)};Yv.prototype.State=zw;function et(e,n,t,r){this.src=e,this.md=n,this.env=t,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const i=this.src;for(let o=0,a=0,u=0,s=0,c=i.length,l=!1;a<c;a++){const d=i.charCodeAt(a);if(!l)if(Le(d)){u++,d===9?s+=4-s%4:s++;continue}else l=!0;(d===10||a===c-1)&&(d!==10&&a++,this.bMarks.push(o),this.eMarks.push(a),this.tShift.push(u),this.sCount.push(s),this.bsCount.push(0),l=!1,u=0,s=0,o=a+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}et.prototype.push=function(e,n,t){const r=new Pn(e,n,t);return r.block=!0,t<0&&this.level--,r.level=this.level,t>0&&this.level++,this.tokens.push(r),r};et.prototype.isEmpty=function(n){return this.bMarks[n]+this.tShift[n]>=this.eMarks[n]};et.prototype.skipEmptyLines=function(n){for(let t=this.lineMax;n<t&&!(this.bMarks[n]+this.tShift[n]<this.eMarks[n]);n++);return n};et.prototype.skipSpaces=function(n){for(let t=this.src.length;n<t;n++){const r=this.src.charCodeAt(n);if(!Le(r))break}return n};et.prototype.skipSpacesBack=function(n,t){if(n<=t)return n;for(;n>t;)if(!Le(this.src.charCodeAt(--n)))return n+1;return n};et.prototype.skipChars=function(n,t){for(let r=this.src.length;n<r&&this.src.charCodeAt(n)===t;n++);return n};et.prototype.skipCharsBack=function(n,t,r){if(n<=r)return n;for(;n>r;)if(t!==this.src.charCodeAt(--n))return n+1;return n};et.prototype.getLines=function(n,t,r,i){if(n>=t)return"";const o=new Array(t-n);for(let a=0,u=n;u<t;u++,a++){let s=0;const c=this.bMarks[u];let l=c,d;for(u+1<t||i?d=this.eMarks[u]+1:d=this.eMarks[u];l<d&&s<r;){const p=this.src.charCodeAt(l);if(Le(p))p===9?s+=4-(s+this.bsCount[u])%4:s++;else if(l-c<this.tShift[u])s++;else break;l++}s>r?o[a]=new Array(s-r+1).join(" ")+this.src.slice(l,d):o[a]=this.src.slice(l,d)}return o.join("")};et.prototype.Token=Pn;const XM=65536;function Ps(e,n){const t=e.bMarks[n]+e.tShift[n],r=e.eMarks[n];return e.src.slice(t,r)}function ug(e){const n=[],t=e.length;let r=0,i=e.charCodeAt(r),o=!1,a=0,u="";for(;r<t;)i===124&&(o?(u+=e.substring(a,r-1),a=r):(n.push(u+e.substring(a,r)),u="",a=r+1)),o=i===92,r++,i=e.charCodeAt(r);return n.push(u+e.substring(a)),n}function KM(e,n,t,r){if(n+2>t)return!1;let i=n+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let o=e.bMarks[i]+e.tShift[i];if(o>=e.eMarks[i])return!1;const a=e.src.charCodeAt(o++);if(a!==124&&a!==45&&a!==58||o>=e.eMarks[i])return!1;const u=e.src.charCodeAt(o++);if(u!==124&&u!==45&&u!==58&&!Le(u)||a===45&&Le(u))return!1;for(;o<e.eMarks[i];){const y=e.src.charCodeAt(o);if(y!==124&&y!==45&&y!==58&&!Le(y))return!1;o++}let s=Ps(e,n+1),c=s.split("|");const l=[];for(let y=0;y<c.length;y++){const E=c[y].trim();if(!E){if(y===0||y===c.length-1)continue;return!1}if(!/^:?-+:?$/.test(E))return!1;E.charCodeAt(E.length-1)===58?l.push(E.charCodeAt(0)===58?"center":"right"):E.charCodeAt(0)===58?l.push("left"):l.push("")}if(s=Ps(e,n).trim(),s.indexOf("|")===-1||e.sCount[n]-e.blkIndent>=4)return!1;c=ug(s),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop();const d=c.length;if(d===0||d!==l.length)return!1;if(r)return!0;const p=e.parentType;e.parentType="table";const m=e.md.block.ruler.getRules("blockquote"),f=e.push("table_open","table",1),h=[n,0];f.map=h;const v=e.push("thead_open","thead",1);v.map=[n,n+1];const _=e.push("tr_open","tr",1);_.map=[n,n+1];for(let y=0;y<c.length;y++){const E=e.push("th_open","th",1);l[y]&&(E.attrs=[["style","text-align:"+l[y]]]);const $=e.push("inline","",0);$.content=c[y].trim(),$.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let g,b=0;for(i=n+2;i<t&&!(e.sCount[i]<e.blkIndent);i++){let y=!1;for(let $=0,T=m.length;$<T;$++)if(m[$](e,i,t,!0)){y=!0;break}if(y||(s=Ps(e,i).trim(),!s)||e.sCount[i]-e.blkIndent>=4||(c=ug(s),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop(),b+=d-c.length,b>XM))break;if(i===n+2){const $=e.push("tbody_open","tbody",1);$.map=g=[n+2,0]}const E=e.push("tr_open","tr",1);E.map=[i,i+1];for(let $=0;$<d;$++){const T=e.push("td_open","td",1);l[$]&&(T.attrs=[["style","text-align:"+l[$]]]);const C=e.push("inline","",0);C.content=c[$]?c[$].trim():"",C.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return g&&(e.push("tbody_close","tbody",-1),g[1]=i),e.push("table_close","table",-1),h[1]=i,e.parentType=p,e.line=i,!0}function YM(e,n,t){if(e.sCount[n]-e.blkIndent<4)return!1;let r=n+1,i=r;for(;r<t;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,i=r;continue}break}e.line=i;const o=e.push("code_block","code",0);return o.content=e.getLines(n,i,4+e.blkIndent,!1)+`
`,o.map=[n,e.line],!0}function JM(e,n,t,r){let i=e.bMarks[n]+e.tShift[n],o=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||i+3>o)return!1;const a=e.src.charCodeAt(i);if(a!==126&&a!==96)return!1;let u=i;i=e.skipChars(i,a);let s=i-u;if(s<3)return!1;const c=e.src.slice(u,i),l=e.src.slice(i,o);if(a===96&&l.indexOf(String.fromCharCode(a))>=0)return!1;if(r)return!0;let d=n,p=!1;for(;d++,!(d>=t||(i=u=e.bMarks[d]+e.tShift[d],o=e.eMarks[d],i<o&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(i)===a&&!(e.sCount[d]-e.blkIndent>=4)&&(i=e.skipChars(i,a),!(i-u<s)&&(i=e.skipSpaces(i),!(i<o)))){p=!0;break}s=e.sCount[n],e.line=d+(p?1:0);const m=e.push("fence","code",0);return m.info=l,m.content=e.getLines(n+1,d,s,!0),m.markup=c,m.map=[n,e.line],!0}function zM(e,n,t,r){let i=e.bMarks[n]+e.tShift[n],o=e.eMarks[n];const a=e.lineMax;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(r)return!0;const u=[],s=[],c=[],l=[],d=e.md.block.ruler.getRules("blockquote"),p=e.parentType;e.parentType="blockquote";let m=!1,f;for(f=n;f<t;f++){const b=e.sCount[f]<e.blkIndent;if(i=e.bMarks[f]+e.tShift[f],o=e.eMarks[f],i>=o)break;if(e.src.charCodeAt(i++)===62&&!b){let E=e.sCount[f]+1,$,T;e.src.charCodeAt(i)===32?(i++,E++,T=!1,$=!0):e.src.charCodeAt(i)===9?($=!0,(e.bsCount[f]+E)%4===3?(i++,E++,T=!1):T=!0):$=!1;let C=E;for(u.push(e.bMarks[f]),e.bMarks[f]=i;i<o;){const L=e.src.charCodeAt(i);if(Le(L))L===9?C+=4-(C+e.bsCount[f]+(T?1:0))%4:C++;else break;i++}m=i>=o,s.push(e.bsCount[f]),e.bsCount[f]=e.sCount[f]+1+($?1:0),c.push(e.sCount[f]),e.sCount[f]=C-E,l.push(e.tShift[f]),e.tShift[f]=i-e.bMarks[f];continue}if(m)break;let y=!1;for(let E=0,$=d.length;E<$;E++)if(d[E](e,f,t,!0)){y=!0;break}if(y){e.lineMax=f,e.blkIndent!==0&&(u.push(e.bMarks[f]),s.push(e.bsCount[f]),l.push(e.tShift[f]),c.push(e.sCount[f]),e.sCount[f]-=e.blkIndent);break}u.push(e.bMarks[f]),s.push(e.bsCount[f]),l.push(e.tShift[f]),c.push(e.sCount[f]),e.sCount[f]=-1}const h=e.blkIndent;e.blkIndent=0;const v=e.push("blockquote_open","blockquote",1);v.markup=">";const _=[n,0];v.map=_,e.md.block.tokenize(e,n,f);const g=e.push("blockquote_close","blockquote",-1);g.markup=">",e.lineMax=a,e.parentType=p,_[1]=e.line;for(let b=0;b<l.length;b++)e.bMarks[b+n]=u[b],e.tShift[b+n]=l[b],e.sCount[b+n]=c[b],e.bsCount[b+n]=s[b];return e.blkIndent=h,!0}function QM(e,n,t,r){const i=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4)return!1;let o=e.bMarks[n]+e.tShift[n];const a=e.src.charCodeAt(o++);if(a!==42&&a!==45&&a!==95)return!1;let u=1;for(;o<i;){const c=e.src.charCodeAt(o++);if(c!==a&&!Le(c))return!1;c===a&&u++}if(u<3)return!1;if(r)return!0;e.line=n+1;const s=e.push("hr","hr",0);return s.map=[n,e.line],s.markup=Array(u+1).join(String.fromCharCode(a)),!0}function sg(e,n){const t=e.eMarks[n];let r=e.bMarks[n]+e.tShift[n];const i=e.src.charCodeAt(r++);if(i!==42&&i!==45&&i!==43)return-1;if(r<t){const o=e.src.charCodeAt(r);if(!Le(o))return-1}return r}function cg(e,n){const t=e.bMarks[n]+e.tShift[n],r=e.eMarks[n];let i=t;if(i+1>=r)return-1;let o=e.src.charCodeAt(i++);if(o<48||o>57)return-1;for(;;){if(i>=r)return-1;if(o=e.src.charCodeAt(i++),o>=48&&o<=57){if(i-t>=10)return-1;continue}if(o===41||o===46)break;return-1}return i<r&&(o=e.src.charCodeAt(i),!Le(o))?-1:i}function ZM(e,n){const t=e.level+2;for(let r=n+2,i=e.tokens.length-2;r<i;r++)e.tokens[r].level===t&&e.tokens[r].type==="paragraph_open"&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function eP(e,n,t,r){let i,o,a,u,s=n,c=!0;if(e.sCount[s]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[s]-e.listIndent>=4&&e.sCount[s]<e.blkIndent)return!1;let l=!1;r&&e.parentType==="paragraph"&&e.sCount[s]>=e.blkIndent&&(l=!0);let d,p,m;if((m=cg(e,s))>=0){if(d=!0,a=e.bMarks[s]+e.tShift[s],p=Number(e.src.slice(a,m-1)),l&&p!==1)return!1}else if((m=sg(e,s))>=0)d=!1;else return!1;if(l&&e.skipSpaces(m)>=e.eMarks[s])return!1;if(r)return!0;const f=e.src.charCodeAt(m-1),h=e.tokens.length;d?(u=e.push("ordered_list_open","ol",1),p!==1&&(u.attrs=[["start",p]])):u=e.push("bullet_list_open","ul",1);const v=[s,0];u.map=v,u.markup=String.fromCharCode(f);let _=!1;const g=e.md.block.ruler.getRules("list"),b=e.parentType;for(e.parentType="list";s<t;){o=m,i=e.eMarks[s];const y=e.sCount[s]+m-(e.bMarks[s]+e.tShift[s]);let E=y;for(;o<i;){const P=e.src.charCodeAt(o);if(P===9)E+=4-(E+e.bsCount[s])%4;else if(P===32)E++;else break;o++}const $=o;let T;$>=i?T=1:T=E-y,T>4&&(T=1);const C=y+T;u=e.push("list_item_open","li",1),u.markup=String.fromCharCode(f);const L=[s,0];u.map=L,d&&(u.info=e.src.slice(a,m-1));const A=e.tight,w=e.tShift[s],S=e.sCount[s],I=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=C,e.tight=!0,e.tShift[s]=$-e.bMarks[s],e.sCount[s]=E,$>=i&&e.isEmpty(s+1)?e.line=Math.min(e.line+2,t):e.md.block.tokenize(e,s,t,!0),(!e.tight||_)&&(c=!1),_=e.line-s>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=I,e.tShift[s]=w,e.sCount[s]=S,e.tight=A,u=e.push("list_item_close","li",-1),u.markup=String.fromCharCode(f),s=e.line,L[1]=s,s>=t||e.sCount[s]<e.blkIndent||e.sCount[s]-e.blkIndent>=4)break;let R=!1;for(let P=0,k=g.length;P<k;P++)if(g[P](e,s,t,!0)){R=!0;break}if(R)break;if(d){if(m=cg(e,s),m<0)break;a=e.bMarks[s]+e.tShift[s]}else if(m=sg(e,s),m<0)break;if(f!==e.src.charCodeAt(m-1))break}return d?u=e.push("ordered_list_close","ol",-1):u=e.push("bullet_list_close","ul",-1),u.markup=String.fromCharCode(f),v[1]=s,e.line=s,e.parentType=b,c&&ZM(e,h),!0}function nP(e,n,t,r){let i=e.bMarks[n]+e.tShift[n],o=e.eMarks[n],a=n+1;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(i)!==91)return!1;function u(g){const b=e.lineMax;if(g>=b||e.isEmpty(g))return null;let y=!1;if(e.sCount[g]-e.blkIndent>3&&(y=!0),e.sCount[g]<0&&(y=!0),!y){const T=e.md.block.ruler.getRules("reference"),C=e.parentType;e.parentType="reference";let L=!1;for(let A=0,w=T.length;A<w;A++)if(T[A](e,g,b,!0)){L=!0;break}if(e.parentType=C,L)return null}const E=e.bMarks[g]+e.tShift[g],$=e.eMarks[g];return e.src.slice(E,$+1)}let s=e.src.slice(i,o+1);o=s.length;let c=-1;for(i=1;i<o;i++){const g=s.charCodeAt(i);if(g===91)return!1;if(g===93){c=i;break}else if(g===10){const b=u(a);b!==null&&(s+=b,o=s.length,a++)}else if(g===92&&(i++,i<o&&s.charCodeAt(i)===10)){const b=u(a);b!==null&&(s+=b,o=s.length,a++)}}if(c<0||s.charCodeAt(c+1)!==58)return!1;for(i=c+2;i<o;i++){const g=s.charCodeAt(i);if(g===10){const b=u(a);b!==null&&(s+=b,o=s.length,a++)}else if(!Le(g))break}const l=e.md.helpers.parseLinkDestination(s,i,o);if(!l.ok)return!1;const d=e.md.normalizeLink(l.str);if(!e.md.validateLink(d))return!1;i=l.pos;const p=i,m=a,f=i;for(;i<o;i++){const g=s.charCodeAt(i);if(g===10){const b=u(a);b!==null&&(s+=b,o=s.length,a++)}else if(!Le(g))break}let h=e.md.helpers.parseLinkTitle(s,i,o);for(;h.can_continue;){const g=u(a);if(g===null)break;s+=g,i=o,o=s.length,a++,h=e.md.helpers.parseLinkTitle(s,i,o,h)}let v;for(i<o&&f!==i&&h.ok?(v=h.str,i=h.pos):(v="",i=p,a=m);i<o;){const g=s.charCodeAt(i);if(!Le(g))break;i++}if(i<o&&s.charCodeAt(i)!==10&&v)for(v="",i=p,a=m;i<o;){const g=s.charCodeAt(i);if(!Le(g))break;i++}if(i<o&&s.charCodeAt(i)!==10)return!1;const _=bu(s.slice(1,c));return _?(r||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[_]>"u"&&(e.env.references[_]={title:v,href:d}),e.line=a),!0):!1}const tP=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],rP="[a-zA-Z_:][a-zA-Z0-9:._-]*",iP="[^\"'=<>`\\x00-\\x20]+",oP="'[^']*'",aP='"[^"]*"',uP="(?:"+iP+"|"+oP+"|"+aP+")",sP="(?:\\s+"+rP+"(?:\\s*=\\s*"+uP+")?)",Zw="<[A-Za-z][A-Za-z0-9\\-]*"+sP+"*\\s*\\/?>",eA="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",cP="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",lP="<[?][\\s\\S]*?[?]>",dP="<![A-Za-z][^>]*>",fP="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",pP=new RegExp("^(?:"+Zw+"|"+eA+"|"+cP+"|"+lP+"|"+dP+"|"+fP+")"),mP=new RegExp("^(?:"+Zw+"|"+eA+")"),vr=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+tP.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(mP.source+"\\s*$"),/^$/,!1]];function hP(e,n,t,r){let i=e.bMarks[n]+e.tShift[n],o=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let a=e.src.slice(i,o),u=0;for(;u<vr.length&&!vr[u][0].test(a);u++);if(u===vr.length)return!1;if(r)return vr[u][2];let s=n+1;if(!vr[u][1].test(a)){for(;s<t&&!(e.sCount[s]<e.blkIndent);s++)if(i=e.bMarks[s]+e.tShift[s],o=e.eMarks[s],a=e.src.slice(i,o),vr[u][1].test(a)){a.length!==0&&s++;break}}e.line=s;const c=e.push("html_block","",0);return c.map=[n,s],c.content=e.getLines(n,s,e.blkIndent,!0),!0}function vP(e,n,t,r){let i=e.bMarks[n]+e.tShift[n],o=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4)return!1;let a=e.src.charCodeAt(i);if(a!==35||i>=o)return!1;let u=1;for(a=e.src.charCodeAt(++i);a===35&&i<o&&u<=6;)u++,a=e.src.charCodeAt(++i);if(u>6||i<o&&!Le(a))return!1;if(r)return!0;o=e.skipSpacesBack(o,i);const s=e.skipCharsBack(o,35,i);s>i&&Le(e.src.charCodeAt(s-1))&&(o=s),e.line=n+1;const c=e.push("heading_open","h"+String(u),1);c.markup="########".slice(0,u),c.map=[n,e.line];const l=e.push("inline","",0);l.content=e.src.slice(i,o).trim(),l.map=[n,e.line],l.children=[];const d=e.push("heading_close","h"+String(u),-1);return d.markup="########".slice(0,u),!0}function _P(e,n,t){const r=e.md.block.ruler.getRules("paragraph");if(e.sCount[n]-e.blkIndent>=4)return!1;const i=e.parentType;e.parentType="paragraph";let o=0,a,u=n+1;for(;u<t&&!e.isEmpty(u);u++){if(e.sCount[u]-e.blkIndent>3)continue;if(e.sCount[u]>=e.blkIndent){let m=e.bMarks[u]+e.tShift[u];const f=e.eMarks[u];if(m<f&&(a=e.src.charCodeAt(m),(a===45||a===61)&&(m=e.skipChars(m,a),m=e.skipSpaces(m),m>=f))){o=a===61?1:2;break}}if(e.sCount[u]<0)continue;let p=!1;for(let m=0,f=r.length;m<f;m++)if(r[m](e,u,t,!0)){p=!0;break}if(p)break}if(!o)return!1;const s=e.getLines(n,u,e.blkIndent,!1).trim();e.line=u+1;const c=e.push("heading_open","h"+String(o),1);c.markup=String.fromCharCode(a),c.map=[n,e.line];const l=e.push("inline","",0);l.content=s,l.map=[n,e.line-1],l.children=[];const d=e.push("heading_close","h"+String(o),-1);return d.markup=String.fromCharCode(a),e.parentType=i,!0}function gP(e,n,t){const r=e.md.block.ruler.getRules("paragraph"),i=e.parentType;let o=n+1;for(e.parentType="paragraph";o<t&&!e.isEmpty(o);o++){if(e.sCount[o]-e.blkIndent>3||e.sCount[o]<0)continue;let c=!1;for(let l=0,d=r.length;l<d;l++)if(r[l](e,o,t,!0)){c=!0;break}if(c)break}const a=e.getLines(n,o,e.blkIndent,!1).trim();e.line=o;const u=e.push("paragraph_open","p",1);u.map=[n,e.line];const s=e.push("inline","",0);return s.content=a,s.map=[n,e.line],s.children=[],e.push("paragraph_close","p",-1),e.parentType=i,!0}const Jo=[["table",KM,["paragraph","reference"]],["code",YM],["fence",JM,["paragraph","reference","blockquote","list"]],["blockquote",zM,["paragraph","reference","blockquote","list"]],["hr",QM,["paragraph","reference","blockquote","list"]],["list",eP,["paragraph","reference","blockquote"]],["reference",nP],["html_block",hP,["paragraph","reference","blockquote"]],["heading",vP,["paragraph","reference","blockquote"]],["lheading",_P],["paragraph",gP]];function yu(){this.ruler=new ln;for(let e=0;e<Jo.length;e++)this.ruler.push(Jo[e][0],Jo[e][1],{alt:(Jo[e][2]||[]).slice()})}yu.prototype.tokenize=function(e,n,t){const r=this.ruler.getRules(""),i=r.length,o=e.md.options.maxNesting;let a=n,u=!1;for(;a<t&&(e.line=a=e.skipEmptyLines(a),!(a>=t||e.sCount[a]<e.blkIndent));){if(e.level>=o){e.line=t;break}const s=e.line;let c=!1;for(let l=0;l<i;l++)if(c=r[l](e,a,t,!1),c){if(s>=e.line)throw new Error("block rule didn't increment state.line");break}if(!c)throw new Error("none of the block rules matched");e.tight=!u,e.isEmpty(e.line-1)&&(u=!0),a=e.line,a<t&&e.isEmpty(a)&&(u=!0,a++,e.line=a)}};yu.prototype.parse=function(e,n,t,r){if(!e)return;const i=new this.State(e,n,t,r);this.tokenize(i,i.line,i.lineMax)};yu.prototype.State=et;function so(e,n,t,r){this.src=e,this.env=t,this.md=n,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}so.prototype.pushPending=function(){const e=new Pn("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};so.prototype.push=function(e,n,t){this.pending&&this.pushPending();const r=new Pn(e,n,t);let i=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(i),r};so.prototype.scanDelims=function(e,n){const t=this.posMax,r=this.src.charCodeAt(e),i=e>0?this.src.charCodeAt(e-1):32;let o=e;for(;o<t&&this.src.charCodeAt(o)===r;)o++;const a=o-e,u=o<t?this.src.charCodeAt(o):32,s=Pi(i)||Mi(String.fromCharCode(i)),c=Pi(u)||Mi(String.fromCharCode(u)),l=ki(i),d=ki(u),p=!d&&(!c||l||s),m=!l&&(!s||d||c);return{can_open:p&&(n||!m||s),can_close:m&&(n||!p||c),length:a}};so.prototype.Token=Pn;function bP(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function yP(e,n){let t=e.pos;for(;t<e.posMax&&!bP(e.src.charCodeAt(t));)t++;return t===e.pos?!1:(n||(e.pending+=e.src.slice(e.pos,t)),e.pos=t,!0)}const EP=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function SP(e,n){if(!e.md.options.linkify||e.linkLevel>0)return!1;const t=e.pos,r=e.posMax;if(t+3>r||e.src.charCodeAt(t)!==58||e.src.charCodeAt(t+1)!==47||e.src.charCodeAt(t+2)!==47)return!1;const i=e.pending.match(EP);if(!i)return!1;const o=i[1],a=e.md.linkify.matchAtStart(e.src.slice(t-o.length));if(!a)return!1;let u=a.url;if(u.length<=o.length)return!1;let s=u.length;for(;s>0&&u.charCodeAt(s-1)===42;)s--;s!==u.length&&(u=u.slice(0,s));const c=e.md.normalizeLink(u);if(!e.md.validateLink(c))return!1;if(!n){e.pending=e.pending.slice(0,-o.length);const l=e.push("link_open","a",1);l.attrs=[["href",c]],l.markup="linkify",l.info="auto";const d=e.push("text","",0);d.content=e.md.normalizeLinkText(u);const p=e.push("link_close","a",-1);p.markup="linkify",p.info="auto"}return e.pos+=u.length-o.length,!0}function wP(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==10)return!1;const r=e.pending.length-1,i=e.posMax;if(!n)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){let o=r-1;for(;o>=1&&e.pending.charCodeAt(o-1)===32;)o--;e.pending=e.pending.slice(0,o),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(t++;t<i&&Le(e.src.charCodeAt(t));)t++;return e.pos=t,!0}const Jv=[];for(let e=0;e<256;e++)Jv.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){Jv[e.charCodeAt(0)]=1});function AP(e,n){let t=e.pos;const r=e.posMax;if(e.src.charCodeAt(t)!==92||(t++,t>=r))return!1;let i=e.src.charCodeAt(t);if(i===10){for(n||e.push("hardbreak","br",0),t++;t<r&&(i=e.src.charCodeAt(t),!!Le(i));)t++;return e.pos=t,!0}let o=e.src[t];if(i>=55296&&i<=56319&&t+1<r){const u=e.src.charCodeAt(t+1);u>=56320&&u<=57343&&(o+=e.src[t+1],t++)}const a="\\"+o;if(!n){const u=e.push("text_special","",0);i<256&&Jv[i]!==0?u.content=o:u.content=a,u.markup=a,u.info="escape"}return e.pos=t+1,!0}function $P(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==96)return!1;const i=t;t++;const o=e.posMax;for(;t<o&&e.src.charCodeAt(t)===96;)t++;const a=e.src.slice(i,t),u=a.length;if(e.backticksScanned&&(e.backticks[u]||0)<=i)return n||(e.pending+=a),e.pos+=u,!0;let s=t,c;for(;(c=e.src.indexOf("`",s))!==-1;){for(s=c+1;s<o&&e.src.charCodeAt(s)===96;)s++;const l=s-c;if(l===u){if(!n){const d=e.push("code_inline","code",0);d.markup=a,d.content=e.src.slice(t,c).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=s,!0}e.backticks[l]=c}return e.backticksScanned=!0,n||(e.pending+=a),e.pos+=u,!0}function TP(e,n){const t=e.pos,r=e.src.charCodeAt(t);if(n||r!==126)return!1;const i=e.scanDelims(e.pos,!0);let o=i.length;const a=String.fromCharCode(r);if(o<2)return!1;let u;o%2&&(u=e.push("text","",0),u.content=a,o--);for(let s=0;s<o;s+=2)u=e.push("text","",0),u.content=a+a,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function lg(e,n){let t;const r=[],i=n.length;for(let o=0;o<i;o++){const a=n[o];if(a.marker!==126||a.end===-1)continue;const u=n[a.end];t=e.tokens[a.token],t.type="s_open",t.tag="s",t.nesting=1,t.markup="~~",t.content="",t=e.tokens[u.token],t.type="s_close",t.tag="s",t.nesting=-1,t.markup="~~",t.content="",e.tokens[u.token-1].type==="text"&&e.tokens[u.token-1].content==="~"&&r.push(u.token-1)}for(;r.length;){const o=r.pop();let a=o+1;for(;a<e.tokens.length&&e.tokens[a].type==="s_close";)a++;a--,o!==a&&(t=e.tokens[a],e.tokens[a]=e.tokens[o],e.tokens[o]=t)}}function IP(e){const n=e.tokens_meta,t=e.tokens_meta.length;lg(e,e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&lg(e,n[r].delimiters)}const nA={tokenize:TP,postProcess:IP};function LP(e,n){const t=e.pos,r=e.src.charCodeAt(t);if(n||r!==95&&r!==42)return!1;const i=e.scanDelims(e.pos,r===42);for(let o=0;o<i.length;o++){const a=e.push("text","",0);a.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function dg(e,n){const t=n.length;for(let r=t-1;r>=0;r--){const i=n[r];if(i.marker!==95&&i.marker!==42||i.end===-1)continue;const o=n[i.end],a=r>0&&n[r-1].end===i.end+1&&n[r-1].marker===i.marker&&n[r-1].token===i.token-1&&n[i.end+1].token===o.token+1,u=String.fromCharCode(i.marker),s=e.tokens[i.token];s.type=a?"strong_open":"em_open",s.tag=a?"strong":"em",s.nesting=1,s.markup=a?u+u:u,s.content="";const c=e.tokens[o.token];c.type=a?"strong_close":"em_close",c.tag=a?"strong":"em",c.nesting=-1,c.markup=a?u+u:u,c.content="",a&&(e.tokens[n[r-1].token].content="",e.tokens[n[i.end+1].token].content="",r--)}}function RP(e){const n=e.tokens_meta,t=e.tokens_meta.length;dg(e,e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&dg(e,n[r].delimiters)}const tA={tokenize:LP,postProcess:RP};function CP(e,n){let t,r,i,o,a="",u="",s=e.pos,c=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const l=e.pos,d=e.posMax,p=e.pos+1,m=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(m<0)return!1;let f=m+1;if(f<d&&e.src.charCodeAt(f)===40){for(c=!1,f++;f<d&&(t=e.src.charCodeAt(f),!(!Le(t)&&t!==10));f++);if(f>=d)return!1;if(s=f,i=e.md.helpers.parseLinkDestination(e.src,f,e.posMax),i.ok){for(a=e.md.normalizeLink(i.str),e.md.validateLink(a)?f=i.pos:a="",s=f;f<d&&(t=e.src.charCodeAt(f),!(!Le(t)&&t!==10));f++);if(i=e.md.helpers.parseLinkTitle(e.src,f,e.posMax),f<d&&s!==f&&i.ok)for(u=i.str,f=i.pos;f<d&&(t=e.src.charCodeAt(f),!(!Le(t)&&t!==10));f++);}(f>=d||e.src.charCodeAt(f)!==41)&&(c=!0),f++}if(c){if(typeof e.env.references>"u")return!1;if(f<d&&e.src.charCodeAt(f)===91?(s=f+1,f=e.md.helpers.parseLinkLabel(e,f),f>=0?r=e.src.slice(s,f++):f=m+1):f=m+1,r||(r=e.src.slice(p,m)),o=e.env.references[bu(r)],!o)return e.pos=l,!1;a=o.href,u=o.title}if(!n){e.pos=p,e.posMax=m;const h=e.push("link_open","a",1),v=[["href",a]];h.attrs=v,u&&v.push(["title",u]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=f,e.posMax=d,!0}function OP(e,n){let t,r,i,o,a,u,s,c,l="";const d=e.pos,p=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const m=e.pos+2,f=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(f<0)return!1;if(o=f+1,o<p&&e.src.charCodeAt(o)===40){for(o++;o<p&&(t=e.src.charCodeAt(o),!(!Le(t)&&t!==10));o++);if(o>=p)return!1;for(c=o,u=e.md.helpers.parseLinkDestination(e.src,o,e.posMax),u.ok&&(l=e.md.normalizeLink(u.str),e.md.validateLink(l)?o=u.pos:l=""),c=o;o<p&&(t=e.src.charCodeAt(o),!(!Le(t)&&t!==10));o++);if(u=e.md.helpers.parseLinkTitle(e.src,o,e.posMax),o<p&&c!==o&&u.ok)for(s=u.str,o=u.pos;o<p&&(t=e.src.charCodeAt(o),!(!Le(t)&&t!==10));o++);else s="";if(o>=p||e.src.charCodeAt(o)!==41)return e.pos=d,!1;o++}else{if(typeof e.env.references>"u")return!1;if(o<p&&e.src.charCodeAt(o)===91?(c=o+1,o=e.md.helpers.parseLinkLabel(e,o),o>=0?i=e.src.slice(c,o++):o=f+1):o=f+1,i||(i=e.src.slice(m,f)),a=e.env.references[bu(i)],!a)return e.pos=d,!1;l=a.href,s=a.title}if(!n){r=e.src.slice(m,f);const h=[];e.md.inline.parse(r,e.md,e.env,h);const v=e.push("image","img",0),_=[["src",l],["alt",""]];v.attrs=_,v.children=h,v.content=r,s&&_.push(["title",s])}return e.pos=o,e.posMax=p,!0}const NP=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,kP=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function MP(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==60)return!1;const r=e.pos,i=e.posMax;for(;;){if(++t>=i)return!1;const a=e.src.charCodeAt(t);if(a===60)return!1;if(a===62)break}const o=e.src.slice(r+1,t);if(kP.test(o)){const a=e.md.normalizeLink(o);if(!e.md.validateLink(a))return!1;if(!n){const u=e.push("link_open","a",1);u.attrs=[["href",a]],u.markup="autolink",u.info="auto";const s=e.push("text","",0);s.content=e.md.normalizeLinkText(o);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=o.length+2,!0}if(NP.test(o)){const a=e.md.normalizeLink("mailto:"+o);if(!e.md.validateLink(a))return!1;if(!n){const u=e.push("link_open","a",1);u.attrs=[["href",a]],u.markup="autolink",u.info="auto";const s=e.push("text","",0);s.content=e.md.normalizeLinkText(o);const c=e.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return e.pos+=o.length+2,!0}return!1}function PP(e){return/^<a[>\s]/i.test(e)}function DP(e){return/^<\/a\s*>/i.test(e)}function FP(e){const n=e|32;return n>=97&&n<=122}function qP(e,n){if(!e.md.options.html)return!1;const t=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=t)return!1;const i=e.src.charCodeAt(r+1);if(i!==33&&i!==63&&i!==47&&!FP(i))return!1;const o=e.src.slice(r).match(pP);if(!o)return!1;if(!n){const a=e.push("html_inline","",0);a.content=o[0],PP(a.content)&&e.linkLevel++,DP(a.content)&&e.linkLevel--}return e.pos+=o[0].length,!0}const xP=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,BP=/^&([a-z][a-z0-9]{1,31});/i;function HP(e,n){const t=e.pos,r=e.posMax;if(e.src.charCodeAt(t)!==38||t+1>=r)return!1;if(e.src.charCodeAt(t+1)===35){const o=e.src.slice(t).match(xP);if(o){if(!n){const a=o[1][0].toLowerCase()==="x"?parseInt(o[1].slice(1),16):parseInt(o[1],10),u=e.push("text_special","",0);u.content=Kv(a)?Aa(a):Aa(65533),u.markup=o[0],u.info="entity"}return e.pos+=o[0].length,!0}}else{const o=e.src.slice(t).match(BP);if(o){const a=Kw(o[0]);if(a!==o[0]){if(!n){const u=e.push("text_special","",0);u.content=a,u.markup=o[0],u.info="entity"}return e.pos+=o[0].length,!0}}}return!1}function fg(e){const n={},t=e.length;if(!t)return;let r=0,i=-2;const o=[];for(let a=0;a<t;a++){const u=e[a];if(o.push(0),(e[r].marker!==u.marker||i!==u.token-1)&&(r=a),i=u.token,u.length=u.length||0,!u.close)continue;n.hasOwnProperty(u.marker)||(n[u.marker]=[-1,-1,-1,-1,-1,-1]);const s=n[u.marker][(u.open?3:0)+u.length%3];let c=r-o[r]-1,l=c;for(;c>s;c-=o[c]+1){const d=e[c];if(d.marker===u.marker&&d.open&&d.end<0){let p=!1;if((d.close||u.open)&&(d.length+u.length)%3===0&&(d.length%3!==0||u.length%3!==0)&&(p=!0),!p){const m=c>0&&!e[c-1].open?o[c-1]+1:0;o[a]=a-c+m,o[c]=m,u.open=!1,d.end=a,d.close=!1,l=-1,i=-2;break}}}l!==-1&&(n[u.marker][(u.open?3:0)+(u.length||0)%3]=l)}}function UP(e){const n=e.tokens_meta,t=e.tokens_meta.length;fg(e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&fg(n[r].delimiters)}function GP(e){let n,t,r=0;const i=e.tokens,o=e.tokens.length;for(n=t=0;n<o;n++)i[n].nesting<0&&r--,i[n].level=r,i[n].nesting>0&&r++,i[n].type==="text"&&n+1<o&&i[n+1].type==="text"?i[n+1].content=i[n].content+i[n+1].content:(n!==t&&(i[t]=i[n]),t++);n!==t&&(i.length=t)}const Ds=[["text",yP],["linkify",SP],["newline",wP],["escape",AP],["backticks",$P],["strikethrough",nA.tokenize],["emphasis",tA.tokenize],["link",CP],["image",OP],["autolink",MP],["html_inline",qP],["entity",HP]],Fs=[["balance_pairs",UP],["strikethrough",nA.postProcess],["emphasis",tA.postProcess],["fragments_join",GP]];function co(){this.ruler=new ln;for(let e=0;e<Ds.length;e++)this.ruler.push(Ds[e][0],Ds[e][1]);this.ruler2=new ln;for(let e=0;e<Fs.length;e++)this.ruler2.push(Fs[e][0],Fs[e][1])}co.prototype.skipToken=function(e){const n=e.pos,t=this.ruler.getRules(""),r=t.length,i=e.md.options.maxNesting,o=e.cache;if(typeof o[n]<"u"){e.pos=o[n];return}let a=!1;if(e.level<i){for(let u=0;u<r;u++)if(e.level++,a=t[u](e,!0),e.level--,a){if(n>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;a||e.pos++,o[n]=e.pos};co.prototype.tokenize=function(e){const n=this.ruler.getRules(""),t=n.length,r=e.posMax,i=e.md.options.maxNesting;for(;e.pos<r;){const o=e.pos;let a=!1;if(e.level<i){for(let u=0;u<t;u++)if(a=n[u](e,!1),a){if(o>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(a){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};co.prototype.parse=function(e,n,t,r){const i=new this.State(e,n,t,r);this.tokenize(i);const o=this.ruler2.getRules(""),a=o.length;for(let u=0;u<a;u++)o[u](i)};co.prototype.State=so;function jP(e){const n={};e=e||{},n.src_Any=Gw.source,n.src_Cc=jw.source,n.src_Z=Ww.source,n.src_P=Wv.source,n.src_ZPCc=[n.src_Z,n.src_P,n.src_Cc].join("|"),n.src_ZCc=[n.src_Z,n.src_Cc].join("|");const t="[><｜]";return n.src_pseudo_letter="(?:(?!"+t+"|"+n.src_ZPCc+")"+n.src_Any+")",n.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",n.src_auth="(?:(?:(?!"+n.src_ZCc+"|[@/\\[\\]()]).)+@)?",n.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",n.src_host_terminator="(?=$|"+t+"|"+n.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+n.src_ZPCc+"))",n.src_path="(?:[/?#](?:(?!"+n.src_ZCc+"|"+t+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+n.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+n.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+n.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+n.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+n.src_ZCc+"|[']).)+\\'|\\'(?="+n.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+n.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+n.src_ZCc+"|$)|;(?!"+n.src_ZCc+"|$)|\\!+(?!"+n.src_ZCc+"|[!]|$)|\\?(?!"+n.src_ZCc+"|[?]|$))+|\\/)?",n.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',n.src_xn="xn--[a-z0-9\\-]{1,59}",n.src_domain_root="(?:"+n.src_xn+"|"+n.src_pseudo_letter+"{1,63})",n.src_domain="(?:"+n.src_xn+"|(?:"+n.src_pseudo_letter+")|(?:"+n.src_pseudo_letter+"(?:-|"+n.src_pseudo_letter+"){0,61}"+n.src_pseudo_letter+"))",n.src_host="(?:(?:(?:(?:"+n.src_domain+")\\.)*"+n.src_domain+"))",n.tpl_host_fuzzy="(?:"+n.src_ip4+"|(?:(?:(?:"+n.src_domain+")\\.)+(?:%TLDS%)))",n.tpl_host_no_ip_fuzzy="(?:(?:(?:"+n.src_domain+")\\.)+(?:%TLDS%))",n.src_host_strict=n.src_host+n.src_host_terminator,n.tpl_host_fuzzy_strict=n.tpl_host_fuzzy+n.src_host_terminator,n.src_host_port_strict=n.src_host+n.src_port+n.src_host_terminator,n.tpl_host_port_fuzzy_strict=n.tpl_host_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_port_no_ip_fuzzy_strict=n.tpl_host_no_ip_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+n.src_ZPCc+"|>|$))",n.tpl_email_fuzzy="(^|"+t+'|"|\\(|'+n.src_ZCc+")("+n.src_email_name+"@"+n.tpl_host_fuzzy_strict+")",n.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+n.src_ZPCc+"))((?![$+<=>^`|｜])"+n.tpl_host_port_fuzzy_strict+n.src_path+")",n.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+n.src_ZPCc+"))((?![$+<=>^`|｜])"+n.tpl_host_port_no_ip_fuzzy_strict+n.src_path+")",n}function Dh(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(r){e[r]=t[r]})}),e}function Eu(e){return Object.prototype.toString.call(e)}function VP(e){return Eu(e)==="[object String]"}function WP(e){return Eu(e)==="[object Object]"}function XP(e){return Eu(e)==="[object RegExp]"}function pg(e){return Eu(e)==="[object Function]"}function KP(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const rA={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function YP(e){return Object.keys(e||{}).reduce(function(n,t){return n||rA.hasOwnProperty(t)},!1)}const JP={"http:":{validate:function(e,n,t){const r=e.slice(n);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(r)?r.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,n,t){const r=e.slice(n);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(r)?n>=3&&e[n-3]===":"||n>=3&&e[n-3]==="/"?0:r.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(e,n,t){const r=e.slice(n);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(r)?r.match(t.re.mailto)[0].length:0}}},zP="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",QP="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function ZP(e){e.__index__=-1,e.__text_cache__=""}function eD(e){return function(n,t){const r=n.slice(t);return e.test(r)?r.match(e)[0].length:0}}function mg(){return function(e,n){n.normalize(e)}}function $a(e){const n=e.re=jP(e.__opts__),t=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||t.push(zP),t.push(n.src_xn),n.src_tlds=t.join("|");function r(u){return u.replace("%TLDS%",n.src_tlds)}n.email_fuzzy=RegExp(r(n.tpl_email_fuzzy),"i"),n.link_fuzzy=RegExp(r(n.tpl_link_fuzzy),"i"),n.link_no_ip_fuzzy=RegExp(r(n.tpl_link_no_ip_fuzzy),"i"),n.host_fuzzy_test=RegExp(r(n.tpl_host_fuzzy_test),"i");const i=[];e.__compiled__={};function o(u,s){throw new Error('(LinkifyIt) Invalid schema "'+u+'": '+s)}Object.keys(e.__schemas__).forEach(function(u){const s=e.__schemas__[u];if(s===null)return;const c={validate:null,link:null};if(e.__compiled__[u]=c,WP(s)){XP(s.validate)?c.validate=eD(s.validate):pg(s.validate)?c.validate=s.validate:o(u,s),pg(s.normalize)?c.normalize=s.normalize:s.normalize?o(u,s):c.normalize=mg();return}if(VP(s)){i.push(u);return}o(u,s)}),i.forEach(function(u){e.__compiled__[e.__schemas__[u]]&&(e.__compiled__[u].validate=e.__compiled__[e.__schemas__[u]].validate,e.__compiled__[u].normalize=e.__compiled__[e.__schemas__[u]].normalize)}),e.__compiled__[""]={validate:null,normalize:mg()};const a=Object.keys(e.__compiled__).filter(function(u){return u.length>0&&e.__compiled__[u]}).map(KP).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+n.src_ZPCc+"))("+a+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+n.src_ZPCc+"))("+a+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),ZP(e)}function nD(e,n){const t=e.__index__,r=e.__last_index__,i=e.__text_cache__.slice(t,r);this.schema=e.__schema__.toLowerCase(),this.index=t+n,this.lastIndex=r+n,this.raw=i,this.text=i,this.url=i}function Fh(e,n){const t=new nD(e,n);return e.__compiled__[t.schema].normalize(t,e),t}function hn(e,n){if(!(this instanceof hn))return new hn(e,n);n||YP(e)&&(n=e,e={}),this.__opts__=Dh({},rA,n),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=Dh({},JP,e),this.__compiled__={},this.__tlds__=QP,this.__tlds_replaced__=!1,this.re={},$a(this)}hn.prototype.add=function(n,t){return this.__schemas__[n]=t,$a(this),this};hn.prototype.set=function(n){return this.__opts__=Dh(this.__opts__,n),this};hn.prototype.test=function(n){if(this.__text_cache__=n,this.__index__=-1,!n.length)return!1;let t,r,i,o,a,u,s,c,l;if(this.re.schema_test.test(n)){for(s=this.re.schema_search,s.lastIndex=0;(t=s.exec(n))!==null;)if(o=this.testSchemaAt(n,t[2],s.lastIndex),o){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+o;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(c=n.search(this.re.host_fuzzy_test),c>=0&&(this.__index__<0||c<this.__index__)&&(r=n.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(a=r.index+r[1].length,(this.__index__<0||a<this.__index__)&&(this.__schema__="",this.__index__=a,this.__last_index__=r.index+r[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(l=n.indexOf("@"),l>=0&&(i=n.match(this.re.email_fuzzy))!==null&&(a=i.index+i[1].length,u=i.index+i[0].length,(this.__index__<0||a<this.__index__||a===this.__index__&&u>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=a,this.__last_index__=u))),this.__index__>=0};hn.prototype.pretest=function(n){return this.re.pretest.test(n)};hn.prototype.testSchemaAt=function(n,t,r){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(n,r,this):0};hn.prototype.match=function(n){const t=[];let r=0;this.__index__>=0&&this.__text_cache__===n&&(t.push(Fh(this,r)),r=this.__last_index__);let i=r?n.slice(r):n;for(;this.test(i);)t.push(Fh(this,r)),i=i.slice(this.__last_index__),r+=this.__last_index__;return t.length?t:null};hn.prototype.matchAtStart=function(n){if(this.__text_cache__=n,this.__index__=-1,!n.length)return null;const t=this.re.schema_at_start.exec(n);if(!t)return null;const r=this.testSchemaAt(n,t[2],t[0].length);return r?(this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+r,Fh(this,0)):null};hn.prototype.tlds=function(n,t){return n=Array.isArray(n)?n:[n],t?(this.__tlds__=this.__tlds__.concat(n).sort().filter(function(r,i,o){return r!==o[i-1]}).reverse(),$a(this),this):(this.__tlds__=n.slice(),this.__tlds_replaced__=!0,$a(this),this)};hn.prototype.normalize=function(n){n.schema||(n.url="http://"+n.url),n.schema==="mailto:"&&!/^mailto:/i.test(n.url)&&(n.url="mailto:"+n.url)};hn.prototype.onCompile=function(){};const Sr=2147483647,Gn=36,zv=1,Di=26,tD=38,rD=700,iA=72,oA=128,aA="-",iD=/^xn--/,oD=/[^\0-\x7F]/,aD=/[\x2E\u3002\uFF0E\uFF61]/g,uD={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},qs=Gn-zv,jn=Math.floor,xs=String.fromCharCode;function At(e){throw new RangeError(uD[e])}function sD(e,n){const t=[];let r=e.length;for(;r--;)t[r]=n(e[r]);return t}function uA(e,n){const t=e.split("@");let r="";t.length>1&&(r=t[0]+"@",e=t[1]),e=e.replace(aD,".");const i=e.split("."),o=sD(i,n).join(".");return r+o}function sA(e){const n=[];let t=0;const r=e.length;for(;t<r;){const i=e.charCodeAt(t++);if(i>=55296&&i<=56319&&t<r){const o=e.charCodeAt(t++);(o&64512)==56320?n.push(((i&1023)<<10)+(o&1023)+65536):(n.push(i),t--)}else n.push(i)}return n}const cD=e=>String.fromCodePoint(...e),lD=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:Gn},hg=function(e,n){return e+22+75*(e<26)-((n!=0)<<5)},cA=function(e,n,t){let r=0;for(e=t?jn(e/rD):e>>1,e+=jn(e/n);e>qs*Di>>1;r+=Gn)e=jn(e/qs);return jn(r+(qs+1)*e/(e+tD))},lA=function(e){const n=[],t=e.length;let r=0,i=oA,o=iA,a=e.lastIndexOf(aA);a<0&&(a=0);for(let u=0;u<a;++u)e.charCodeAt(u)>=128&&At("not-basic"),n.push(e.charCodeAt(u));for(let u=a>0?a+1:0;u<t;){const s=r;for(let l=1,d=Gn;;d+=Gn){u>=t&&At("invalid-input");const p=lD(e.charCodeAt(u++));p>=Gn&&At("invalid-input"),p>jn((Sr-r)/l)&&At("overflow"),r+=p*l;const m=d<=o?zv:d>=o+Di?Di:d-o;if(p<m)break;const f=Gn-m;l>jn(Sr/f)&&At("overflow"),l*=f}const c=n.length+1;o=cA(r-s,c,s==0),jn(r/c)>Sr-i&&At("overflow"),i+=jn(r/c),r%=c,n.splice(r++,0,i)}return String.fromCodePoint(...n)},dA=function(e){const n=[];e=sA(e);const t=e.length;let r=oA,i=0,o=iA;for(const s of e)s<128&&n.push(xs(s));const a=n.length;let u=a;for(a&&n.push(aA);u<t;){let s=Sr;for(const l of e)l>=r&&l<s&&(s=l);const c=u+1;s-r>jn((Sr-i)/c)&&At("overflow"),i+=(s-r)*c,r=s;for(const l of e)if(l<r&&++i>Sr&&At("overflow"),l===r){let d=i;for(let p=Gn;;p+=Gn){const m=p<=o?zv:p>=o+Di?Di:p-o;if(d<m)break;const f=d-m,h=Gn-m;n.push(xs(hg(m+f%h,0))),d=jn(f/h)}n.push(xs(hg(d,0))),o=cA(i,c,u===a),i=0,++u}++i,++r}return n.join("")},dD=function(e){return uA(e,function(n){return iD.test(n)?lA(n.slice(4).toLowerCase()):n})},fD=function(e){return uA(e,function(n){return oD.test(n)?"xn--"+dA(n):n})},fA={version:"2.3.1",ucs2:{decode:sA,encode:cD},decode:lA,encode:dA,toASCII:fD,toUnicode:dD},pD={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},mD={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},hD={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},vD={default:pD,zero:mD,commonmark:hD},_D=/^(vbscript|javascript|file|data):/,gD=/^data:image\/(gif|png|jpeg|webp);/;function bD(e){const n=e.trim().toLowerCase();return _D.test(n)?gD.test(n):!0}const pA=["http:","https:","mailto:"];function yD(e){const n=Vv(e,!0);if(n.hostname&&(!n.protocol||pA.indexOf(n.protocol)>=0))try{n.hostname=fA.toASCII(n.hostname)}catch{}return uo(jv(n))}function ED(e){const n=Vv(e,!0);if(n.hostname&&(!n.protocol||pA.indexOf(n.protocol)>=0))try{n.hostname=fA.toUnicode(n.hostname)}catch{}return Or(jv(n),Or.defaultChars+"%")}function vn(e,n){if(!(this instanceof vn))return new vn(e,n);n||Xv(e)||(n=e||{},e="default"),this.inline=new co,this.block=new yu,this.core=new Yv,this.renderer=new jr,this.linkify=new hn,this.validateLink=bD,this.normalizeLink=yD,this.normalizeLinkText=ED,this.utils=wM,this.helpers=gu({},IM),this.options={},this.configure(e),n&&this.set(n)}vn.prototype.set=function(e){return gu(this.options,e),this};vn.prototype.configure=function(e){const n=this;if(Xv(e)){const t=e;if(e=vD[t],!e)throw new Error('Wrong `markdown-it` preset "'+t+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&n.set(e.options),e.components&&Object.keys(e.components).forEach(function(t){e.components[t].rules&&n[t].ruler.enableOnly(e.components[t].rules),e.components[t].rules2&&n[t].ruler2.enableOnly(e.components[t].rules2)}),this};vn.prototype.enable=function(e,n){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){t=t.concat(this[i].ruler.enable(e,!0))},this),t=t.concat(this.inline.ruler2.enable(e,!0));const r=e.filter(function(i){return t.indexOf(i)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r);return this};vn.prototype.disable=function(e,n){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){t=t.concat(this[i].ruler.disable(e,!0))},this),t=t.concat(this.inline.ruler2.disable(e,!0));const r=e.filter(function(i){return t.indexOf(i)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r);return this};vn.prototype.use=function(e){const n=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,n),this};vn.prototype.parse=function(e,n){if(typeof e!="string")throw new Error("Input data should be a String");const t=new this.core.State(e,this,n);return this.core.process(t),t.tokens};vn.prototype.render=function(e,n){return n=n||{},this.renderer.render(this.parse(e,n),this.options,n)};vn.prototype.parseInline=function(e,n){const t=new this.core.State(e,this,n);return t.inlineMode=!0,this.core.process(t),t.tokens};vn.prototype.renderInline=function(e,n){return n=n||{},this.renderer.render(this.parseInline(e,n),this.options,n)};const _t="hir-persistent-fold",Qv="text-paragraph",Zv="text-blockquote",e2="text-list",mA="text-ordered-list",n2="text-list-item",SD="prose-link",Ta="text-section",hA="text-heading",vA="text-section-body",_A="text-table-scroll",wD="text-table",AD="text-code",$D="-h-",vg=2,gA=!0;function bA(e,n){return(e==null?void 0:e[n])??gA}const TD=["paragraph","list","blockquote","heading","table","newline","emphasis","backticks","html_inline","text","balance_pairs","fragments_join","text_join"],ID="prose_link",_g=new RegExp(Nw.source,"y");function LD(e,n){if(e.src.charCodeAt(e.pos)!==91)return!1;_g.lastIndex=e.pos;const t=_g.exec(e.src);if(t===null)return!1;const[r,i,o]=t;if(i===void 0||o===void 0)throw new Error("prose markdown: MD_LINK_RE lost a capture group");if(!n){const a=e.push("link_open","a",1);a.attrs=[["href",o]];const u=e.push("text","",0);u.content=i,e.push("link_close","a",-1)}return e.pos+=r.length,!0}const RD="prose_escape",CD=new Set("!\"#$%&'()*+,-./:;<=>?@^_`|~"),OD={"<":"&lt;",">":"&gt;","&":"&amp;"};function ND(e,n){if(e.src.charCodeAt(e.pos)!==92)return!1;const t=e.src[e.pos+1];if(t===void 0||!CD.has(t))return!1;if(!n){const r=e.push("text_special","",0);r.content=OD[t]??t,r.markup=`\\${t}`,r.info="escape"}return e.pos+=2,!0}const Su=new vn("zero",{html:!0,breaks:!0,linkify:!1}).enable([...TD]);Su.inline.ruler.push(ID,LD);Su.inline.ruler.after("newline",RD,ND);function kD(e,n){return`${e}${$D}${n}`}function MD(e,n,t={}){const r=Su.parse(e,{});return DD(r,n,t)}function PD(e,n){const t=Su.parseInline(e,{});return yA(t,n),t.map(yi).join("")}function DD(e,n,t={}){yA(e,n);const r={options:t,headingCount:0};return ia(e,0,e.length,!0,r)}function yA(e,n){let t=0;for(const r of e)if(r.type==="inline"&&r.children){for(const i of r.children)i.type==="text"&&(i.type="html_inline",i.content=i.content===""?"":n(i.content,t));t+=1}}function gn(e,n){const t=e[n];if(t===void 0)throw new Error(`prose markdown: token index ${n} out of range`);return t}function _r(e,n,t){let r=0;for(let i=n;i<t;i++)if(r+=gn(e,i).nesting,r===0)return i;throw new Error(`prose markdown: unclosed ${gn(e,n).type} at token ${n}`)}function FD(e,n,t){return t-n===3&&gn(e,n).type==="paragraph_open"&&gn(e,n+1).type==="inline"&&gn(e,n+2).type==="paragraph_close"}function ia(e,n,t,r,i){if(r&&FD(e,n,t))return yi(gn(e,n+1));let o="";const a=[];let u=n;for(;u<t;){const s=gn(e,u);switch(s.type){case"paragraph_open":{const c=_r(e,u,t),l=gn(e,u+1);if(c!==u+2||l.type!=="inline")throw new Error("prose markdown: paragraph without a single inline child");const d=yi(l);o+=s.hidden?d:`<p class="${Qv}">${d}</p>`,u=c+1;break}case"blockquote_open":{const c=_r(e,u,t);o+=`<blockquote class="${Zv}">`+ia(e,u+1,c,!0,i)+"</blockquote>",u=c+1;break}case"bullet_list_open":case"ordered_list_open":{const c=_r(e,u,t);o+=xD(s)+ia(e,u+1,c,!1,i)+`</${s.tag}>`,u=c+1;break}case"list_item_open":{const c=_r(e,u,t);o+=`<li class="${n2}">`+ia(e,u+1,c,!1,i)+"</li>",u=c+1;break}case"heading_open":{const c=_r(e,u,t),l=gn(e,u+1);if(c!==u+2||l.type!=="inline")throw new Error("prose markdown: heading without a single inline child");const d=s.markup.length;if(d<vg)throw new Error(`prose markdown: level-${d} heading '${l.content}'; prose headings start at level ${vg}`);for(;a.length>0&&a[a.length-1]>=d;)o+=gg,a.pop();i.headingCount+=1,o+=qD(d,yi(l),i),a.push(d),u=c+1;break}case"table_open":{const c=_r(e,u,t);o+=`<div class="${_A}"><table class="${wD}">`+HD(e,u+1,c)+"</table></div>",u=c+1;break}default:throw new Error(`prose markdown: unsupported block token '${s.type}'`)}}return o+=gg.repeat(a.length),o}const gg="</div></details>";function qD(e,n,t){const{headingIdPrefix:r,foldOpenById:i}=t.options,o=r===void 0?null:kD(r,t.headingCount),a=o===null?gA:bA(i,o);return`<details${o===null?` class="${Ta}"`:` id="${K(o)}" class="${Ta} ${_t}"`}${a?" open":""}><summary><h${e} class="${hA}">${n}</h${e}></summary><div class="${vA}">`}function xD(e){if(e.type==="bullet_list_open")return`<ul class="${e2}">`;const n=e.attrGet("start"),t=n===null?"":` start="${Number(n)}"`;return`<ol class="${mA}"${t}>`}const BD=new Set(["thead_open","thead_close","tbody_open","tbody_close","tr_open","tr_close"]),bg="style";function HD(e,n,t){let r="",i=n;for(;i<t;){const o=gn(e,i);if(BD.has(o.type)){r+=o.nesting===1?`<${o.tag}>`:`</${o.tag}>`,i+=1;continue}if(o.type!=="th_open"&&o.type!=="td_open")throw new Error(`prose markdown: unsupported table token '${o.type}'`);const a=gn(e,i+1),u=gn(e,i+2);if(a.type!=="inline"||u.type!==`${o.tag}_close`)throw new Error("prose markdown: table cell without a single inline child");let s="";for(const[c,l]of o.attrs??[]){if(c!==bg)throw new Error(`prose markdown: unexpected table cell attribute '${c}'`);s=` ${bg}="${K(l)}"`}r+=`<${o.tag}${s}>${yi(a)}</${o.tag}>`,i+=3}return r}function yi(e){let n="";for(const t of e.children??[])switch(t.type){case"html_inline":n+=t.content;break;case"softbreak":case"hardbreak":n+="<br>";break;case"strong_open":n+="<strong>";break;case"strong_close":n+="</strong>";break;case"em_open":case"em_close":n+=t.markup;break;case"link_open":{const r=t.attrGet("href")??"";n+=`<a class="${SD}" href="${K(r)}" target="_blank" rel="noopener">`;break}case"link_close":n+="</a>";break;case"code_inline":n+=`<code class="${AD}">${x(t.content)}</code>`;break;default:throw new Error(`prose markdown: unsupported inline token '${t.type}'`)}return n}const UD="inline-note-ref",EA="inline-note-popover-trigger",SA="data-popover-inline-body";function GD(e){return encodeURIComponent(e)}function jD(e){return decodeURIComponent(e)}function VD(e){return Nh.lastIndex=0,e.replace(Nh,(n,t)=>wA(t))}function wA(e){const n=K(GD(e));return`<span class="${UD}"><button type="button" class="${EA}" ${SA}="${n}" aria-label="Show note" aria-expanded="false"></button></span>`}const WD=2,XD="&nbsp;".repeat(WD),AA="framing-slot",$A="data-framing-anchor";function lo(e,n){return e.jprobInstance.framing_static_anchor_ids().has(n)?`<div class="${AA}" ${$A}="${K(n)}"></div>`:""}const TA="bare-id-label";function IA(e,n){return e.showBareIds??!1?LA(n):""}function LA(e){return`<span class="${TA}">${x(e)}</span>`}function KD(e,n){return`<span class="${TA}" id="${K(n)}">${x(e)}</span>`}const YD="❝",_i="srcquote-widget",oa="srcquote-glyph",JD="srcquote-popover",zD="srcquote-attribution",QD="srcquotes-inline",ZD={atStart:"",atEnd:""},eF=", ";function nF(e,n){if(e.bibref===void 0){if(e.attribution===void 0)throw new Error(`${e.id} has neither attribution nor bibref`);return x(e.attribution)}const t=`[${e.bibref}]`;return kr(e.locator===void 0?t:`${t}${eF}${e.locator}`,n)}function RA(e,n){return Ge(e.defn,n)+`<span class="${zD}">— ${nF(e,n)}</span>`}function tF(e){const n=K(Rw({kind:"sourcequote",sourcequoteIds:e}));return`<span class="${_i}"><button class="${oa}" type="button" aria-expanded="false" ${Ea}="${n}" aria-label="Source quotes">${YD}</button></span>`}function rF(e,n){return e.map(t=>RA(t,n)).join("")}function iF(e,n){const t=e.map(r=>RA(r,n));return`<div class="${QD}">${t.join("")}</div>`}function Xn(e,n){var t;if(!e||e.length===0)return ZD;for(const r of e)(t=n.renderedSrcquoteIds)==null||t.add(r);if(n.srcquotesInlined??!1){const r=n.jprobInstance.resolve_srcquotes(e);return{atStart:"",atEnd:iF(r,n)}}return{atStart:tF(e),atEnd:""}}const t2="isym-card",r2="examples",wu="ex-btn",Qt="visible",Au="active",oF=!0;function Fi(e,n,t){var r;return((r=e==null?void 0:e[n])==null?void 0:r[t])??oF}function Ge(e,n,t){const r={foldOpenById:n.foldOpenById};return t!==void 0&&(r.headingIdPrefix=t),MD(Gv(e,n.jprobInstance),i2(n).resolveProseLeaf,r)}function kr(e,n){return PD(Gv(e,n.jprobInstance),i2(n).resolveProseLeaf)}function nt(e,n){return i2(n).resolveDisplay(Gv(e,n.jprobInstance))}function i2(e){const n=Pk(e.jprobInstance),t=e.popoverAllRefs?{popoverAllRefs:!0}:void 0,r=(c,l)=>bk(c,e.refLookup,t,e.unresolvedRefs,l),i=c=>VD(r(Dk(c,n))),o=(c,l)=>yg(c,Ni,d=>i(d[0]),d=>r(d,l));let a,u=new Set;return{resolveDisplay:i,resolveProseLeaf:(c,l)=>(l!==a&&(a=l,u=new Set),yg(c,Nh,d=>{const p=d[1];if(p===void 0)throw new Error("INLINE_HIDDEN_NOTE_RE matched without its body group");return wA(o(p,new Set))},d=>o(d,u)))}}function yg(e,n,t,r){let i="",o=0;for(const a of e.matchAll(n)){const u=a.index;if(u===void 0)throw new Error("mapMatchesAndGaps: match without an index");u>o&&(i+=r(e.slice(o,u))),i+=t(a),o=u+a[0].length}return o<e.length&&(i+=r(e.slice(o))),i}const aF="bib-references",uF="bib-reference";function sF(e){const n=e.jprobInstance,t=n.cited_bib_ids(e.srcquotesInlined??!1);if(t.length===0)return"";const r=t.map(i=>{const o=Pw(n.bib_reference_entry_text(i),n.resolve_bib(i));return`<li id="${_u(i)}" class="${uF}">${kr(o,e)}</li>`});return`<ul class="${aF}">${r.join("")}</ul>`}function cF(e,n){return e.get_isym(n).longname??n}function lF(e){return e.startsWith("isym:")?e.slice(5):e}function dF(e,n){return e.get_isym(n).kind}function fF(e,n){const t=JN[dF(e,n)];let r=`${n} : ${t}`;const i=cF(e,n);return i&&n!==i&&(r+=`${XD}(aka ${i})`),r}function pF(e){if(!e.args||e.args.length===0)return e.id.slice(11);const n=e.id.slice(11),t=e.args.map(r=>`<i>${typeof r=="string"?r:r.name}</i>`);return`${n}(${t.join(", ")})`}function mF(e){const n=[];for(const t of e.jprobInstance.definedSym){if(t.always_inline)continue;const r=e.jprobInstance.get_display_definedSym_or_none(t.id);if(!r)continue;const o=`defsym-${t.id.slice(11)}`,a=pF(t),u=nt(r,e),c=[`<h3>${`${a} ≔ ${u}`}</h3>`],l=Xn(t.srcquotes,e);t.defn?c.push(`<div class="definition">${l.atStart}${Ge(t.defn,e,o)}${l.atEnd}</div>`):(l.atStart||l.atEnd)&&c.push(`<div class="definition">${l.atStart}${l.atEnd}</div>`),c.push(lo(e,t.id)),n.push(`<div class="defsym-card" id="${o}">${c.join("")}</div>`)}return n.join("")}function hF(e){const n=Fv(e.jprobInstance);if(!n.length)return"";const t=[];for(const r of n){const i=Xn(e.jprobInstance.get_textdefn(r.id).srcquotes,e);t.push(`<dt id="${r.anchorId}">${r.displayTerm}</dt><dd>${i.atStart}${Ge(r.defn,e,r.anchorId)}${i.atEnd}${lo(e,`textdefn:${r.bareName}`)}</dd>`)}return`<dl class="definitions">${t.join("")}</dl>`}function qh(e,n,t){return(n[t]??[]).filter(r=>xw(r.classification,e.showTypical))}function vF(e,n){return e.jprobInstance.isym_entries().some(t=>!e.jprobInstance.can_consolidate_isym_svar(t.id)&&Gr.some(r=>qh(e,t,r).some(i=>pu(i.id)===n)))}function _F(e){const n=e.jprobInstance.isym_entries();if(!n.length)return"";const t=[];for(const r of n){const i=lF(r.id);if(e.jprobInstance.can_consolidate_isym_svar(`isym:${i}`))continue;const o=`isym-${i}`,a=[];a.push(`<h3>${fF(e.jprobInstance,i)}</h3>`);const u=Xn(r.srcquotes,e);a.push(`<div class="definition">${u.atStart}${Ge(r.defn,e,o)}${u.atEnd}</div>`);const s=qh(e,r,"pos"),c=qh(e,r,"neg"),l=Fi(e.exampleFoldState,i,"pos"),d=Fi(e.exampleFoldState,i,"neg");if(s.length>0||c.length>0){const f=[];s.length>0&&f.push(Eg(i,"pos",l,"+")),c.length>0&&f.push(Eg(i,"neg",d,"&minus;")),a.push(`<div class="example-controls">${f.join("")}</div>`)}const p={pos:s,neg:c},m={pos:l,neg:d};for(const f of Gr){if(p[f].length===0)continue;const h=p[f].map(v=>{const _=pu(v.id),g=e.showExampleClassification?`<span class="classification">${v.classification.charAt(0).toUpperCase()+v.classification.slice(1)}:</span> `:"",b=Xn(v.srcquotes,e),y=`${hu}${_}`;return`<li id="${y}">`+LA(_)+`${g}${b.atStart}${Ge(v.defn,e,y)}${b.atEnd}</li>`});a.push(`<div class="${r2} ${f}${m[f]?` ${Qt}`:""}"><p>${Dv[f]} examples:</p><ul>${h.join("")}</ul></div>`)}a.push(lo(e,`isym:${i}`)),t.push(`<div class="${t2}" id="${o}">${a.join("")}</div>`)}return t.join("")}function Eg(e,n,t,r){return`<button class="${wu} ${n}${t?` ${Au}`:""}" data-isym="${e}" data-type="${n}" title="${Dv[n]} examples">${r}</button>`}function Bs(e,{classification:n}){const t=[];for(const r of e.jprobInstance.get_axioms_in_display_section(n)){const i=e.jprobInstance.get_display_ax(r.id);if(!i)continue;const o=Ci(r.id),a=`${qv}${o}`,u=r.defn?`<div class="ax-defn">${Ge(r.defn,e,a)}</div>`:"",s=lo(e,r.id),c=Xn(r.srcquotes,e);t.push(`<div class="ax-card" id="${a}">`+IA(e,o)+`<div class="ax-expr">${c.atStart}${nt(i,e)}</div>${u}${c.atEnd}${s}</div>`)}return t.length===0?"":`<div class="axioms">${t.join("")}</div>`}function gF(e){const n=[],t=Dw(e.jprobInstance),r=Rk(e.jprobInstance,t);for(const i of t){const o=r.get(i),a=mu(i);n.push(`<div class="formula" id="form-${a}">`+IA(e,a)+nt(o,e)+lo(e,i)+"</div>")}return n.join("")}const bF="global_options",yF=[{id:"symbolMnames",description:"Long symbol names",type:"boolean",default:!1},{id:"popoverAllRefs",description:"Popovers for all refs",type:"boolean",default:!0},{id:"persistentPopovers",description:"Persistent popovers (multiple, Esc to close)",type:"boolean",default:!0},{id:"inputMode",description:"Response type",type:"enum",values:["point","bounds","sample"],default:"sample"},{id:"probAsOdds",description:"Stats display",type:"enum",values:["probability","odds"],default:"probability"},{id:"densityScale",description:"Density plot scale",type:"enum",values:["raw","log"],default:"raw"},{id:"showExampleClassification",description:"Show example classifications",type:"boolean",default:!0},{id:"showFramingNotes",description:"Show framing notes",type:"boolean",default:!0},{id:"showGlobalProseFoldControls",description:"Global prose folding controls",type:"boolean",default:!0},{id:"longTextAbbrev",description:"Abbreviate long text",type:"boolean",default:!0},{id:"longTextAbbrevThreshold",description:"Abbreviation soft threshold",type:"integer",default:800,min:25,step:25},{id:"mcItersInitialPerPlot",description:"MC iters per plot (initial)",type:"integer",default:1e4,min:1e3,step:1e3},{id:"mcItersPerClickPerPlot",description:"MC iters per plot (+ click)",type:"integer",default:5e3,min:1e3,step:1e3},{id:"plaincodeEvalTimeoutMs",description:"Code eval timeout (ms)",type:"integer",default:5e3,min:1e3,step:1e3},{id:"refLinkColor",description:"Link color",type:"enum",values:["green","light-blue","dark-blue","black"],default:"light-blue"},{id:"estimatorTextColor",description:"Estimator text color",type:"enum",values:["blue","black","page-text"],default:"blue"}],CA={localStorage_key:bF,options:yF};function Sg(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function wg(e){return Object.keys(e).filter(n=>e[n]!==void 0)}function Kn(e,n){if(e===n)return!0;if(Array.isArray(e)&&Array.isArray(n))return e.length===n.length&&e.every((t,r)=>Kn(t,n[r]));if(Sg(e)&&Sg(n)){const t=wg(e);return t.length===wg(n).length&&t.every(r=>Kn(e[r],n[r]))}return!1}const $u=CA.options,EF=new Map($u.map(e=>[e.id,e.description]));function qi(e){return EF.get(e)??e}const fo=Object.freeze($u.reduce((e,n)=>(e[n.id]=n.default,e),{})),OA=CA.localStorage_key;function o2(){try{const e=localStorage.getItem(OA);return e===null?{}:JSON.parse(e)}catch{return{}}}function Ye(){return{...fo,...o2()}}function SF(){const e=fo;return Object.fromEntries(Object.entries(o2()).filter(([n,t])=>!Kn(t,e[n])))}function Mr(e,n){const t={...o2(),[e]:n},r=fo,i=Object.fromEntries(Object.entries(t).filter(([o,a])=>!Kn(a,r[o])));localStorage.setItem(OA,JSON.stringify(i))}const wF=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),AF=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]);function qn(e,n){return e>>>n|e<<32-n}function NA(e){const n=new TextEncoder().encode(e),t=n.length<<3>>>0,r=Math.floor(n.length/536870912),i=n.length+9+63&-64,o=new Uint8Array(i);o.set(n),o[n.length]=128;const a=new DataView(o.buffer);a.setUint32(i-8,r),a.setUint32(i-4,t);const u=new Uint32Array(AF),s=new Uint32Array(64);for(let l=0;l<i;l+=64){for(let b=0;b<16;b++)s[b]=a.getUint32(l+b*4);for(let b=16;b<64;b++){const y=s[b-15],E=s[b-2],$=qn(y,7)^qn(y,18)^y>>>3,T=qn(E,17)^qn(E,19)^E>>>10;s[b]=s[b-16]+$+s[b-7]+T|0}let d=u[0],p=u[1],m=u[2],f=u[3],h=u[4],v=u[5],_=u[6],g=u[7];for(let b=0;b<64;b++){const y=qn(h,6)^qn(h,11)^qn(h,25),E=h&v^~h&_,$=g+y+E+wF[b]+s[b]|0,T=qn(d,2)^qn(d,13)^qn(d,22),C=d&p^d&m^p&m,L=T+C|0;g=_,_=v,v=h,h=f+$|0,f=m,m=p,p=d,d=$+L|0}u[0]=u[0]+d|0,u[1]=u[1]+p|0,u[2]=u[2]+m|0,u[3]=u[3]+f|0,u[4]=u[4]+h|0,u[5]=u[5]+v|0,u[6]=u[6]+_|0,u[7]=u[7]+g|0}let c="";for(let l=0;l<8;l++)c+=(u[l]>>>0).toString(16).padStart(8,"0");return c}const kA=5;function Ag(e){const n={};for(const t of Object.keys(e).sort())n[t]=e[t];return n}function $F(e){return NA(JSON.stringify(e)).slice(0,kA)}function MA(e,n,t,r){const i=[n,Ag(t)];return e==="plainnum"&&i.push(Ag(r??{})),NA(JSON.stringify(i)).slice(0,kA)}const an="0",mn="1",Tu=["plaincode","plainnum"];function Vr(e,n){return n==="plainnum"?e.adhocPlainnumEntries:e.adhocPlaincodeEntries}function a2(e,n,t){return n==="plainnum"?e.plainnum[t.resultIndex]:e.plaincode[t.resultIndex]}function TF(e){const n=Object.keys(e.reasoning_response).some(o=>e.reasoning_response[o]!==""),t=e.misc_response!=="",r=e.trial_choices!==void 0&&Object.keys(e.trial_choices).length>0;if(!n&&!t&&!r)return[];const i={};return n&&(i.reasoning=e.reasoning_response),t&&(i.misc=e.misc_response),r&&(i.trial_choices=e.trial_choices),[i]}function po(e){return!!e.verified_code_input&&e.cparam_combos.length>0}function mo(e){if(e.count!==1)throw new Error(`Plaincode record "${e.label}" has count ${e.count}; a yours or adhoc plaincode record is always single-trial`);return{...e,cparam_combos:e.cparam_combos.map(n=>({...n,trials:n.trials.map(t=>({trial_index:0,...t}))})),model:"user",version:"",effort:null,jtask_group_id:"",prompt_file_basename:"yours-plaincode",trial_metadata:TF(e)}}function IF(e,n){const t=e.find(r=>r.mode==="richcode"&&r.name===n);return t?t.note:null}function LF(e){const n=[],t=[];for(let r=0;r<e.length;r++){const i=e[r];for(let o=0;o<i.plainnum.length;o++)n.push({presetIndex:r,resultIndex:o});for(let o=0;o<i.plaincode.length;o++)t.push({presetIndex:r,resultIndex:o})}return{plainnum:n,plaincode:t}}function RF(e,n,t){const r=e.name_or_pseudoname,o=e.plainnum.length>0&&e.plaincode.length>0?` [${n}]`:"",a=t.prompt_file_basename?` (${t.prompt_file_basename})`:"";return`${r}${o} ${t.label}${a}`}function CF(e){return e.filter(n=>n.prompt_file_basename.startsWith("richcode"))}const OF=/^[0-9a-f]{5}$/;function NF(e){return!OF.test(e)}function u2(e){return new Set(e.filter(n=>n.rdev_prompt_suffix!==void 0).map(n=>n.jtask_group_id))}const $g=0,kF=1,MF=2,PF=3;function DF(e,n,t){const r=new Map;for(const o of n)o.mode==="richcode"&&o.declared_display_position!==null&&r.set(o.name,o.declared_display_position);const i=o=>t.has(o)?PF:r.has(o)?$g:NF(o)?kF:MF;return[...new Set(e)].sort((o,a)=>{const u=i(o),s=i(a);return u!==s?u-s:u===$g?r.get(o)-r.get(a):o<a?-1:o>a?1:0})}function s2(e,n){const t=`trial${n===1?"":"s"}`;switch(e){case"methodical":return`${n} agent ${t}`;case"adhoc":return`${n} adhoc ${t}`;case"yours":return`${n} ${t} of yours`}}function FF(e,n){const t=Vr(n,e.queryMode)[e.entryIdx];if(!t)return null;const r=n.adhocPresets[t.presetIndex];if(e.queryMode==="plainnum")return(r==null?void 0:r.plainnum[t.resultIndex])??null;const i=r==null?void 0:r.plaincode[t.resultIndex];return i?mo(i):null}function qF(e,n){var r;if(e.queryMode!=="plaincode")return null;const t=n.adhocPlaincodeEntries[e.entryIdx];return t?((r=n.adhocPresets[t.presetIndex])==null?void 0:r.plaincode[t.resultIndex])??null:null}function xF(e,n){const t=Vr(n,e.queryMode)[e.entryIdx];return t?n.adhocPresets[t.presetIndex]??null:null}function PA(e){if(!e)return{point:!0,bounds:!0,sample:!0};bn(e)&&l2(e);const n=bn(e)?e.cparam_combos.flatMap(r=>r.trials):e.trials,t=r=>n.some(i=>Object.keys(i[r]).length>0);return{point:t("point"),bounds:(!bn(e)||c2(e))&&t("bounds"),sample:t("sample")}}const BF=["sample","bounds","point"];function DA(e,n){return e[n]?n:BF.find(t=>e[t])??n}function FA(e,n,t){return e==="yours"?t:DA(PA(n),t)}function c2(e){return e.count===1}function l2(e){for(const[t,r]of e.cparam_combos.entries()){if(r.trials.length===0||r.trials.length>e.count)throw new Error(`Code result cparam combo ${t} carries ${r.trials.length} trials; expected between 1 and the record trial count ${e.count}`);const i=new Set;for(const o of r.trials){const a=o.trial_index;if(a===void 0)throw new Error(`Code result cparam combo ${t} carries a trial with no trial_index; regenerate the result data (trial-dict schema >= 9)`);if(!Number.isInteger(a)||a<0||a>=e.count)throw new Error(`Code result cparam combo ${t} carries trial_index ${a}; expected an integer in [0, ${e.count})`);if(i.has(a))throw new Error(`Code result cparam combo ${t} carries record trial ${a} more than once`);i.add(a)}}const n=e.trial_metadata;if(n!==void 0&&n.length>0&&n.length!==e.count)throw new Error(`Code result carries ${n.length} trial_metadata entries; expected one per trial (record trial count ${e.count})`)}function Pt(e){if(e.trial_index===void 0)throw new Error("Code-mode combo trial carries no trial_index");return e.trial_index}function Dt(e){return bn(e)?e.count:e.trials.length}function qA(e,n){return e.find(t=>Pt(t)===n)}function xA(e,n){var t;return bn(e)?(t=e.trial_metadata)==null?void 0:t[n]:e.trials[n]}function HF(e,n){return xA(e,n)}function Iu(e,n){var t;return bn(e)?(t=e.trial_metadata)==null?void 0:t[n]:void 0}function UF(e,n){var t;return(t=xA(e,n))==null?void 0:t.trial_choices}function bn(e){return"cparam_combos"in e}function d2(e,n,t){if(n==="point"){const i=e.point[t];return i===void 0?"":String(i)}if(n==="bounds"){const i=e.bounds[t];return i?`${i[0]} ${i[1]}`:""}const r=e.sample[t];return r?typeof r=="string"?r:r.map(([i,o])=>`(${i} ${o})`).join(" "):""}function BA(e,n){return["point","bounds","sample"].filter(t=>n.length>0&&n.every(r=>d2(e,t,r)!==""))}function GF(e,n,t){return t.map(r=>d2(e,n,r)).join(`
`)}function jF(e,n,t){return bn(e)?[]:e.trials.map(r=>t.map(i=>d2(r,n,i)))}function f2(e,n){const t=Vr(n,e.queryMode)[e.entryIdx];if(t===void 0)return null;const r=n.adhocPresets[t.presetIndex];if(r===void 0)return null;const i=a2(r,e.queryMode,t);return i===void 0?null:{nameOrPseudoname:r.name_or_pseudoname,queryMode:e.queryMode,label:i.label}}function HA(e,n){const t=Vr(n,e.queryMode);for(let r=0;r<t.length;r++){const i=t[r],o=n.adhocPresets[i.presetIndex];if(o===void 0||o.name_or_pseudoname!==e.nameOrPseudoname)continue;const a=a2(o,e.queryMode,i);if(a!==void 0&&a.label===e.label)return{queryMode:e.queryMode,entryIdx:r}}return null}function VF(e){const n=[];for(const t of Tu){const r=new Set,i=Vr(e,t).length;for(let o=0;o<i;o++){const a=f2({queryMode:t,entryIdx:o},e);if(a===null)continue;const u=Ia(a);r.has(u)?n.push(u):r.add(u)}}return n}function Ia(e){return`adhoc ${e.queryMode} ${JSON.stringify(e.nameOrPseudoname)} labelled ${JSON.stringify(e.label)}`}const p2=["plainnum","plaincode"];function Nn(e){return e.interactionMode==="Estimate"?e.estimateQueryMode:null}function La(e){if(e.interactionMode!=="Estimate")throw new Error(`No Yours record is being edited in ${e.interactionMode}`);return e.estimateQueryMode}function Lu(e,n){return n==="plaincode"?e.yoursCodeRecord:e.yoursRecord}const St=[{name:"low",abbreviation:"L"},{name:"medium",abbreviation:"M"},{name:"high",abbreviation:"H"},{name:"xhigh",abbreviation:"XH"},{name:"max",abbreviation:"MAX"}],xh=[{model:"sonnet",abbreviation:"s",agentCli:"claudecode",efforts:St},{model:"opus",abbreviation:"o",agentCli:"claudecode",efforts:St},{model:"fable",abbreviation:"f",agentCli:"claudecode",efforts:St},{model:"luna",abbreviation:"gl",agentCli:"codex",efforts:St},{model:"terra",abbreviation:"gt",agentCli:"codex",efforts:St},{model:"sol",abbreviation:"gs",agentCli:"codex",efforts:St},{model:"astra",abbreviation:"ga",agentCli:"codex",efforts:St}],Ru=":";function ho(e){const n=xh.findIndex(t=>t.model===e);if(n<0)throw new Error(`unknown model ${JSON.stringify(e)}. Add it to MODEL_EFFORT_AXIS_CONFIG in model_version_effort_plot_support.ts.`);return{config:xh[n],order:n}}function xi(e){return ho(e).config.agentCli}function m2(e,n){const{config:t}=ho(e),r=t.efforts.findIndex(i=>i.name===n);if(r<0)throw new Error(`unknown effort ${JSON.stringify(n)} for model ${JSON.stringify(e)}. Add it to MODEL_EFFORT_AXIS_CONFIG in model_version_effort_plot_support.ts.`);return{config:t.efforts[r],order:r}}function WF(e,n){return e===n?0:e<n?-1:1}function XF(e,n,t){if(n.length===0)throw new Error(`makeModelVersionEffortKey: empty version not supported (model=${e}).`);if(t===null)throw new Error(`makeModelVersionEffortKey: null effort not supported (model=${e}, version=${n}). A null effort identifies a record of several model configurations — every published entry carries an explicit effort — which does not participate in the model/version/effort sweep.`);return[e,encodeURIComponent(n),t].join(Ru)}function vo(e){const n=e.split(Ru);if(n.length!==3||n.some(a=>a.length===0))throw new Error(`parseModelVersionEffortKey: invalid key ${JSON.stringify(e)}`);const[t,r,i]=n;let o;try{o=decodeURIComponent(r)}catch{throw new Error(`parseModelVersionEffortKey: invalid key ${JSON.stringify(e)}`)}if(o.length===0)throw new Error(`parseModelVersionEffortKey: invalid key ${JSON.stringify(e)}`);return{model:t,version:o,effort:i}}function h2(e){const{model:n,version:t,effort:r}=vo(e);return`${n} ${t} ${r}`}function v2(e){const{model:n,version:t,effort:r}=vo(e),{config:i}=ho(n),{config:o}=m2(n,r);return`${i.abbreviation}${t}${o.abbreviation}`}function KF(e){const{model:n,version:t}=vo(e);return`${n} ${t}`}function YF(e){const{model:n,effort:t}=vo(e);return m2(n,t).config.abbreviation}function JF(e){const n=Array.from(e,t=>{const r=vo(t),i=ho(r.model).order,o=m2(r.model,r.effort).order;return{key:t,parsed:r,modelOrder:i,effortOrder:o}});return n.sort((t,r)=>t.modelOrder-r.modelOrder||WF(t.parsed.version,r.parsed.version)||t.effortOrder-r.effortOrder),n.map(({key:t})=>t)}function yn(e){return XF(e.model,e.version,e.effort)}function _o(e){const n=new Map(e.map(t=>[yn(t),t]));return JF(n.keys()).map(t=>n.get(t))}function Pr(e,n){if(n.length===0)throw new Error(`makeModelVersionKey: empty version not supported (model=${e}).`);return[e,encodeURIComponent(n)].join(Ru)}function UA(e){const n=e.split(Ru);if(n.length!==2||n.some(o=>o.length===0))throw new Error(`parseModelVersionKey: invalid key ${JSON.stringify(e)}`);const[t,r]=n;let i;try{i=decodeURIComponent(r)}catch{throw new Error(`parseModelVersionKey: invalid key ${JSON.stringify(e)}`)}return{model:t,version:i}}function _2(e){const{model:n,version:t}=UA(e);return`${ho(n).config.abbreviation}${t}`}function GA(e){const{model:n,version:t}=UA(e);return`${n} ${t}`}function jA(){return[...new Set(xh.map(e=>e.agentCli))]}const Tg={claudecode:"Ant",codex:"OAI"};function VA(e){if(!Object.hasOwn(Tg,e))throw new Error(`unknown agent CLI ${JSON.stringify(e)}. Add it to AGENT_CLI_LABEL in model_version_effort_plot_support.ts.`);return Tg[e]}function WA(e){const n=t=>{const r=St.findIndex(i=>i.name===t);if(r<0)throw new Error(`unknown effort ${JSON.stringify(t)}. Add it to EFFORT_AXIS_CONFIG in model_version_effort_plot_support.ts.`);return r};return Array.from(e).sort((t,r)=>n(t)-n(r))}const aa=2e3,zF=aa/100,QF=[1,2,4,10];function ZF(){const e=new Set;for(let n=0;n<=aa;n+=zF)e.add(n);for(const n of QF)e.add(n),e.add(aa-n);return[...e].sort((n,t)=>n-t).map(n=>n/aa)}const mt=ZF(),eq=100,Hs=0,nq={logit:{inverse:e=>1/(1+Math.exp(-e)),lowerBound:0,upperBound:1},log:{inverse:e=>Math.exp(e),lowerBound:0,upperBound:null},identity:{inverse:e=>e,lowerBound:null,upperBound:null}};function Ig(e,n,t){const r=e[n];if(!Number.isInteger(r)||r<0)throw new Error(`quantile table ${n} must be a nonnegative integer; got ${r}`);if(r>0&&t===null)throw new Error(`quantile table ${n} is ${r}, but transform ${JSON.stringify(e.transform)} has no ${n==="count_at_lower_bound"?"lower":"upper"} bound`);return r}function Lg(e,n){const t=e[n];if(t===null)return null;if(typeof t!="number"||!Number.isFinite(t))throw new Error(`quantile table ${n} must be a finite number or null; got ${t}`);return t}function tq(e){const n=nq[e.transform];if(n===void 0)throw new Error(`unknown quantile table transform ${JSON.stringify(e.transform)}`);const t=Ig(e,"count_at_lower_bound",n.lowerBound),r=Ig(e,"count_at_upper_bound",n.upperBound),i=Lg(e,"anchor"),o=Lg(e,"log_gap_min"),a=e.gap_codes_ln100;if(!Array.isArray(a))throw new Error("quantile table gap_codes_ln100 must be a list");let u=!1;for(const p of a){if(!Number.isInteger(p)||p<0)throw new Error(`quantile table gap codes must be nonnegative integers; got ${p}`);p!==Hs&&(u=!0)}if(i===null&&a.length>0)throw new Error(`quantile table anchor is null, but it has ${a.length} gap codes (a table with no coded levels has none)`);const s=i===null?0:a.length+1;if(s+t+r!==mt.length)throw new Error(`a quantile table has one value per level (${mt.length} levels); got ${s} coded levels (${a.length} gap codes) plus ${t} + ${r} values at the bounds`);if(u&&o===null)throw new Error("quantile table log_gap_min is null, but it has a positive gap code");if(!u&&o!==null)throw new Error("quantile table log_gap_min is given, but it has no positive gap code");const c=p=>p===Hs?0:Math.exp(o+(p-Hs-1)/eq),l=new Array(s);if(i!==null){const p=Math.floor((s-1)/2);l[p]=i;let m=i;for(let f=p;f<a.length;f++)m+=c(a[f]),l[f+1]=m;m=i;for(let f=p-1;f>=0;f--)m-=c(a[f]),l[f]=m}const d=new Array(t).fill(n.lowerBound);for(const p of l)d.push(n.inverse(p));for(let p=0;p<r;p++)d.push(n.upperBound);return d}function rq(e,n){if(e.length===0)throw new Error("a mixture needs at least one member");if(n.length!==e.length)throw new Error(`expected one weight per member (${e.length}); got ${n.length}`);let t=0;for(const a of n){if(!(a>0))throw new Error("every mixture weight must be positive");t+=a}const r=e[0].transform,i=[],o=[];return e.forEach((a,u)=>{if(a.transform!==r)throw new Error(`cannot mix quantile tables quantized in different transforms (${r}, ${a.transform})`);a.tables.forEach((s,c)=>{i.push(s),o.push(n[u]/t*a.weights[c])})}),{tables:i,weights:o,transform:r}}const wr=1e-12;function Rg(e,n,t){if(n===0)return 0;if(n===e.length)return 1;const r=e[n-1],i=e[n],o=mt[n-1],a=mt[n];return o+(a-o)*(t-r)/(i-r)}function XA(e,n){let t=0,r=e.length;for(;t<r;){const i=t+r>>>1;e[i]>=n?r=i:t=i+1}return t}function iq(e,n,t){if(e.length===0)throw new Error("a mixture needs at least one table");if(n.length!==e.length)throw new Error(`expected one weight per table (${e.length}); got ${n.length}`);let r=0;for(const u of n){if(!(u>0))throw new Error("every mixture weight must be positive");r+=u}for(const u of e)if(u.length!==mt.length)throw new Error(`a quantile table has one value per level (${mt.length} levels); got ${u.length}`);const i=Float64Array.from(new Set(e.flat())).sort(),o=new Float64Array(i.length),a=new Float64Array(i.length);return e.forEach((u,s)=>{const c=n[s]/r;let l=0,d=0;for(let p=0;p<i.length;p++){const m=i[p];for(;l<u.length&&u[l]<=m;)l++;for(;d<u.length&&u[d]<m;)d++;o[p]=o[p]+c*Rg(u,l,m),a[p]=a[p]+c*Rg(u,d,m)}}),t.map(u=>{const s=XA(o,u-wr);if(s===i.length)return i[i.length-1];let c;if(s===0||a[s]<u-wr)c=i[s];else{const l=a[s]-o[s-1],d=Math.min(Math.max((u-o[s-1])/l,0),1);c=i[s-1]+d*(i[s]-i[s-1])}return o[s]>u+wr?c:(c+oq(i,o,a,u))/2})}function oq(e,n,t,r){let i=XA(n,r+wr);for(;i<e.length&&n[i]<=r+wr;)i++;return i===e.length?e[e.length-1]:t[i]<=r+wr?e[i]:e[i-1]}function aq(e,n){const t=e.length;return e.map(()=>1/t)}const uq=[.05,.5,.95];function Cg(e,n){const t=[];for(const s of e){if(s.quantile_table_mixture===void 0)return null;t.push(s.quantile_table_mixture)}const r=rq(t,n),[i,o,a]=iq(r.tables,r.weights,uq);let u=0;return e.forEach((s,c)=>{u+=n[c]*s.mean}),{mean:u,median:o,p5:i,p95:a,quantile_table_mixture:r}}function sq(e){var a;if(e.length===0)throw new Error("a pool needs at least one member trial");let n=0;for(const u of e){if(!(u.weight>0))throw new Error("every pool member weight must be positive");n+=u.weight}const t=e.map(u=>u.weight/n),r=[];for(const u of e){const s=(a=u.precomputed)==null?void 0:a[an];if(s===void 0)return null;r.push(s)}const i=Cg(r,t);if(i===null)return null;const o={[an]:i};if(e.some(u=>{var s;return((s=u.precomputed)==null?void 0:s[mn])!==void 0})){const u=e.map((c,l)=>{var d;return((d=c.precomputed)==null?void 0:d[mn])??r[l]}),s=Cg(u,t);if(s===null)return null;o[mn]=s}return o}function cq(e,n){try{return{tables:[tq(e)],weights:[1],transform:e.transform}}catch(t){console.warn(`omitting an undecodable quantile table: ${t.message}`);return}}function lq(e,n){const{quantile_table:t,...r}=e,i={...r};if(t!==void 0){const o=cq(t);o!==void 0&&(i.quantile_table_mixture=o)}return i}function go(e,n){const t={};for(const[r,i]of Object.entries(e))t[r]=lq(i);return t}function Cu(e,n){const t={};for(const[r,i]of Object.entries(e))t[r]=go(i);return t}function dq(e,n){const{precomputed:t,precomputed_aux_forms:r,...i}=e;return{...i,...t===void 0?{}:{precomputed:go(t)},...r===void 0?{}:{precomputed_aux_forms:Cu(r)}}}function fq(e,n){return{cparams:e.cparams,trials:e.trials.map(t=>dq(t)),precomputed:go(e.precomputed),...e.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:Cu(e.precomputed_aux_forms)}}}function pq(e,n){return{...e,cparam_combos:e.cparam_combos.map(t=>fq(t))}}function mq(e,n){return{trial_index:e.trial_index,...e.precomputed===void 0?{}:{precomputed:go(e.precomputed)},...e.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:Cu(e.precomputed_aux_forms)}}}function hq(e,n){return e.map(t=>({name_or_pseudoname:t.name_or_pseudoname,query_mode:t.query_mode,label:t.label,cparam_combos:t.cparam_combos.map(r=>({cparams:r.cparams,precomputed:go(r.precomputed),...r.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:Cu(r.precomputed_aux_forms)},trials:r.trials.map(i=>mq(i))}))}))}function Kt(e){return JSON.stringify(Object.keys(e).sort().map(n=>[n,e[n]]))}function vq(e,n){const t=[],r=new Set;for(const i of e){if(typeof i.entry_id!="string"){const o=`published richcode results carry an entry with no entry_id (${JSON.stringify(i.label)}), which no current producer writes: the file predates trial-dict schema 14 and needs regenerating`;console.warn(o);continue}if(r.has(i.entry_id)){const o=`published richcode results carry more than one entry with entry_id ${JSON.stringify(i.entry_id)}; its trials have no stable identity`;console.warn(o)}r.add(i.entry_id),t.push(pq(i))}return t}const KA="equal_per_trial",_q="record";function YA(e,n,t){return JSON.stringify([e??null,n??null,t??null])}function gq(e){return(e==null?void 0:e.model)===void 0?null:YA(e.model,e.version,e.effort)}function bq(e){const n=bn(e)?YA(e.model,e.version,e.effort):_q;return Array.from({length:Dt(e)},(t,r)=>gq(Iu(e,r))??n)}function Zt(e){return aq(bq(e))}function ht(e,n){const t=Zt(e);return n.map(r=>{const i=Pt(r),o=t[i];if(o===void 0)throw new Error(`combo trial names record trial ${i}, past the record's ${t.length} trials`);return o})}const JA="mixture";function Ou(e){return e.effort!==null}function g2(e){return{model:e.model,version:e.version,effort:e.effort}}function Nu(e,n){return _o(e.filter(Ou).filter(t=>t.jtask_group_id===n).map(g2))}function yq(e,n,t){return _o(t).map(r=>{const i=yn(r),o=e.filter(u=>Ou(u)&&u.jtask_group_id===n&&yn(g2(u))===i),a=`${h2(i)} in jtask group ${JSON.stringify(n)}`;if(o.length===0)throw new Error(`mixtureGroupRecord: no individual entry is published for ${a}`);if(o.length>1)throw new Error(`mixtureGroupRecord: more than one individual entry is published for ${a}`);return o[0]})}function Eq(e){return e.flatMap(({entry:n})=>Array.from({length:n.count},(t,r)=>{var i;return{...((i=n.trial_metadata)==null?void 0:i[r])??{},model:n.model,version:n.version,effort:n.effort}}))}function Sq(e){return e.flatMap(({entry:n})=>Array.from({length:n.count},(t,r)=>({entry_id:zA(n),entry_trial_index:r})))}function zA(e){if(e.entry_id===void 0)throw new Error(`mixtureGroupRecord: individual entry ${JSON.stringify(e.label)} carries no entry_id, so its trials have no stable identity`);return e.entry_id}function wq(e){const n=new Map;for(const{entry:t,recordTrialIndexOffset:r}of e)for(const i of t.cparam_combos){const o=Kt(i.cparams);let a=n.get(o);a===void 0&&(a={cparams:i.cparams,trials:[]},n.set(o,a)),a.trials.push(...i.trials.map(u=>({...u,trial_index:r+Pt(u)})))}return[...n.values()]}function Aq(e,n){const t=e.trials.map(a=>({auxForms:a.precomputed_aux_forms??{},weight:n[Pt(a)]})),r=t.reduce((a,u)=>a+u.weight,0),i=[...new Set(t.flatMap(a=>Object.keys(a.auxForms)))],o={};for(const a of i){const u=t.map(c=>c.auxForms[a]);if(u.some(c=>(c==null?void 0:c[an])===void 0))continue;const s=c=>t.reduce((l,d,p)=>{const m=u[p];return l+d.weight*(m[c]??m[an]).mean},0)/r;o[a]={[an]:s(an)},u.some(c=>c[mn]!==void 0)&&(o[a][mn]=s(mn))}return Object.keys(o).length===0?void 0:o}function $q(e,n){const t=sq(e.trials.map(i=>({precomputed:i.precomputed,weight:n[Pt(i)]}))),r=Aq(e,n);return{cparams:e.cparams,trials:e.trials,precomputed:t??{},...r===void 0?{}:{aux_form_means:r}}}function Tq(e,n){const t=e[0];for(const s of e)if(JSON.stringify(s.cparam_names)!==JSON.stringify(t.cparam_names))throw new Error(`mixtureGroupRecord: members of jtask group ${JSON.stringify(n)} disagree on cparam_names: ${JSON.stringify(t.cparam_names)} vs ${JSON.stringify(s.cparam_names)}`);const r=[];let i=0;for(const s of e)r.push({entry:s,recordTrialIndexOffset:i}),i+=s.count;const o=e.map(s=>g2(s)),a={label:`${e.length} model configurations`,aid:t.aid,aopts:t.aopts,count:i,cparam_names:t.cparam_names,cparam_combos:[],model:JA,version:"",effort:null,jtask_group_id:n,jtask_group_content_hashes:[...new Set(e.flatMap(s=>s.jtask_group_content_hashes??[]))].sort(),prompt_file_basename:t.prompt_file_basename,trial_metadata:Eq(r),result_set:{member_configurations:o,trial_identities:Sq(r)}},u=Zt(a);return{...a,cparam_combos:wq(r).map(s=>$q(s,u))}}const Og=new WeakMap;function QA(e){let n=Og.get(e);return n===void 0&&(n=new Map,Og.set(e,n)),n}function Iq(e){return JSON.stringify(["empty",e])}function ZA(e,n){const t=QA(e),r=Iq(n),i=t.get(r);if(i!==void 0)return i;const o=e.filter(Ou).filter(s=>s.jtask_group_id===n),a=o[0];if(a===void 0)throw new Error(`emptyMixtureGroupRecord: jtask group ${JSON.stringify(n)} publishes no individual entry`);const u={label:"no model configurations",aid:a.aid,aopts:a.aopts,count:0,cparam_names:a.cparam_names,cparam_combos:[],model:JA,version:"",effort:null,jtask_group_id:n,jtask_group_content_hashes:[...new Set(o.flatMap(s=>s.jtask_group_content_hashes??[]))].sort(),prompt_file_basename:a.prompt_file_basename,trial_metadata:[],result_set:{member_configurations:[],trial_identities:[]}};return t.set(r,u),u}function e$(e,n,t){if(t.length===0)throw new Error("mixtureGroupRecord: a mixture group record needs at least one member configuration");const r=yq(e,n,t);if(r.length===1)return r[0];const i=QA(e),o=JSON.stringify([n,KA,r.map(u=>zA(u))]);let a=i.get(o);return a===void 0&&(a=Tq(r,n),i.set(o,a)),a}function b2(e){const n=bn(e)?e.result_set:void 0;if(n===void 0||n.member_configurations.length<2)return[{configuration:null,trials:Array.from({length:Dt(e)},(r,i)=>({recordTrialIndex:i,trialNumber:i+1}))}];const t=new Map(n.member_configurations.map(r=>[yn(r),{configuration:r,trials:[]}]));return n.trial_identities.forEach((r,i)=>{var u;const o=(u=e.trial_metadata)==null?void 0:u[i],a=(o==null?void 0:o.model)===void 0||o.version===void 0||o.effort===void 0||o.effort===null?void 0:t.get(yn({model:o.model,version:o.version,effort:o.effort}));if(a===void 0)throw new Error(`recordTrialGroups: record trial ${i} is not stamped with one of the record's member configurations`);a.trials.push({recordTrialIndex:i,trialNumber:r.entry_trial_index+1})}),[...t.values()]}function y2(e,n){return e.result_set!==void 0?e.result_set.trial_identities[n]??null:e.entry_id===void 0||!Number.isInteger(n)||n<0||n>=e.count?null:{entry_id:e.entry_id,entry_trial_index:n}}function n$(e,n){for(let t=0;t<e.count;t++){const r=y2(e,t);if(r!==null&&r.entry_id===n.entry_id&&r.entry_trial_index===n.entry_trial_index)return t}return null}const Lq=["agentCli","modelVersion","effort"],Rq={agentCli:"agentClis",modelVersion:"modelVersions",effort:"efforts"};function ua(e){return Pr(e.model,e.version)}function Cq(e){return{agentClis:r$(e),modelVersions:[],efforts:[]}}function t$(e){return{agentClis:[],modelVersions:[ua(e)],efforts:[e.effort]}}function Oq(e,n,t){const r=Rq[n],i=e[r];return{...e,[r]:i.includes(t)?i.filter(o=>o!==t):[...i,t]}}function r$(e){const n=new Set(e.map(t=>xi(t.model)));return jA().filter(t=>n.has(t))}function Bh(e,n){try{return n(e)}catch{return e}}function Us(e,n,t,r,i,o){const a=e.map(s=>({value:s,label:t(s),hoverText:r(s),state:i(s),disabled:o,unavailable:!1})),u=n.filter(s=>!e.includes(s)).map(s=>({value:s,label:Bh(s,t),hoverText:Bh(s,r),state:i(s),disabled:o,unavailable:!0}));return[...a,...u]}function Nq(e,n){const t=_o(n),r=e.agentClis.length>0,i=!r&&e.modelVersions.length===0&&e.efforts.length===0,o=h=>r?e.agentClis.includes(xi(h.model)):i?!1:(e.modelVersions.length===0||e.modelVersions.includes(ua(h)))&&(e.efforts.length===0||e.efforts.includes(h.effort)),a=t.filter(o),u=new Set(a.map(h=>xi(h.model))),s=new Set(a.map(ua)),c=new Set(a.map(h=>h.effort)),l=h=>e.agentClis.includes(h)?"checked":u.has(h)?"partial":"unchecked",d=(h,v)=>_=>(r?v.has(_):h.includes(_))?"checked":"unchecked",p=[...new Set(t.map(ua))],m=WA(new Set(t.map(h=>h.effort))),f=h=>h;return{memberConfigurations:a,rows:{agentCli:Us(r$(t),e.agentClis,h=>VA(h),f,l,!1),modelVersion:Us(p,e.modelVersions,_2,GA,d(e.modelVersions,s),r),effort:Us(m,e.efforts,f,f,d(e.efforts,c),r)}}}function Gs(e){return!Array.isArray(e)||!e.every(n=>typeof n=="string")?null:[...new Set(e)]}function Ng(e){if(typeof e!="object"||e===null)return null;const n=e,t=Gs(n.agentClis),r=Gs(n.modelVersions),i=Gs(n.efforts);return t===null||r===null||i===null?null:{agentClis:t,modelVersions:r,efforts:i}}const Ct=["Estimate","ReadTrials","Compare"],E2="Estimate",kq={Estimate:"E",ReadTrials:"R",Compare:"C"},Mq={Estimate:"Explore the problem using your own subjective estimations, entered directly or copied in from ReadTrials.",ReadTrials:"Read one result set of methodical trials, or one adhoc response: as the mixture of its trials' belief distributions, or as one trial's estimates, reasoning and code.",Compare:"Compare results across model configurations, task groups and parameter values."};function Pq(e){return e.adhocPlainnumEntries.length>0||e.adhocPlaincodeEntries.length>0}function bo(e){const n=Wr(e).length>0;return Ct.filter(t=>t==="Estimate"||t==="ReadTrials"&&(n||Pq(e))||t==="Compare"&&n)}function Dq(e){return bo(e).includes("ReadTrials")?"ReadTrials":E2}const Yn={kind:"mix"},sa={jtaskGroupId:null,mixtureGroupSelection:null,adhoc:null,trial:Yn};function Fq(e){if(Wr(e).length>0)return sa;for(const n of Tu){const t=f2({queryMode:n,entryIdx:0},e);if(t!==null)return{...sa,adhoc:t}}return sa}function Wr(e){return DF(e.richcodeResults.map(n=>n.jtask_group_id),e.jtaskHashGroups,u2(e.richcodeResults))}const kg=10,qq="…",i$="rdev ";function o$(e,n){const t=e.map(i=>i.length>kg?i.slice(0,kg)+qq:i),r=new Map;for(const i of t)r.set(i,(r.get(i)??0)+1);return t.map((i,o)=>r.get(i)>1?e[o]:i).map((i,o)=>n.has(e[o])?i$+i:i)}function xq(e,n){const t=Wr(n);return e.jtaskGroupId!==null&&t.includes(e.jtaskGroupId)?e.jtaskGroupId:t[0]??null}function kn(e,n){let t=null;if(e.adhoc!==null){const c=HA(e.adhoc,n.presetData);if(c!==null)return{resultSet:{kind:"adhoc",entry:c},unavailableAdhoc:t};t=e.adhoc}const{presetData:r}=n,i=xq(e,r);if(i===null)return{resultSet:{kind:"no-results"},unavailableAdhoc:t};const o=Nu(r.richcodeResults,i),a=e.mixtureGroupSelection??Cq(o),u=Nq(a,o),s=u.memberConfigurations.length===0?ZA(r.richcodeResults,i):e$(r.richcodeResults,i,u.memberConfigurations);return{resultSet:{kind:"methodical",jtaskGroupId:i,mixtureGroupSelection:a,interpretation:u,record:s},unavailableAdhoc:t}}function Bq(e,n,t){return e.kind==="mix"?null:e.kind==="adhoc-trial"?n==="adhoc"&&e.entryTrialIndex<t.count?e.entryTrialIndex:null:n!=="methodical"?null:n$(t,e.identity)}function Hq(e,n,t){const r={...n,trial:Yn};if(e.trial.kind!=="methodical-trial")return r;const i=kn(e,t).resultSet,o=kn(n,t).resultSet;return i.kind!=="methodical"||o.kind!=="methodical"||i.jtaskGroupId!==o.jtaskGroupId||n$(o.record,e.trial.identity)===null?r:{...n,trial:e.trial}}const Mg={kind:"methodical"};function Xr(e,n){if(e.interactionMode==="Estimate")return{kind:"yours",queryMode:e.estimateQueryMode};if(e.interactionMode==="Compare")return Mg;const{resultSet:t}=kn(e.readTrials,n);return t.kind==="adhoc"?{kind:"adhoc",entry:t.entry}:Mg}function tt(e){switch(e.kind){case"yours":return e.queryMode;case"adhoc":return e.entry.queryMode;case"methodical":return"richcode"}}function Uq(e){if(typeof e!="object"||e===null)return null;const n=e;if(n.kind==="mix")return Yn;if(n.kind==="adhoc-trial")return Number.isInteger(n.entryTrialIndex)&&n.entryTrialIndex>=0?{kind:"adhoc-trial",entryTrialIndex:n.entryTrialIndex}:null;if(n.kind!=="methodical-trial")return null;const t=n.identity;if(typeof t!="object"||t===null)return null;const{entry_id:r,entry_trial_index:i}=t;return typeof r!="string"||!Number.isInteger(i)||i<0?null:{kind:"methodical-trial",identity:{entry_id:r,entry_trial_index:i}}}function Pg(e){if(typeof e!="object"||e===null)return null;const n=e;return typeof n.nameOrPseudoname!="string"||typeof n.label!="string"||n.queryMode!=="plainnum"&&n.queryMode!=="plaincode"?null:{nameOrPseudoname:n.nameOrPseudoname,queryMode:n.queryMode,label:n.label}}function Gq(e){if(typeof e!="object"||e===null)return null;const n=e,{jtaskGroupId:t,mixtureGroupSelection:r,adhoc:i,trial:o}=n;if(t!==null&&typeof t!="string"||r!==null&&Ng(r)===null||i!==null&&Pg(i)===null)return null;const a=Uq(o);return a===null?null:{jtaskGroupId:t,mixtureGroupSelection:r===null?null:Ng(r),adhoc:i===null?null:Pg(i),trial:a}}function jq(e,n,t){return{jtaskGroupId:e,mixtureGroupSelection:t$(n),adhoc:null,trial:t===null?Yn:{kind:"methodical-trial",identity:t}}}function Vq(e,n){return{...e,trial:n}}const Wq={model_version_effort:"model × version × effort",effort:"effort",model_version:"model × version"};function Xq(e){return e.length<2?"model_version_effort":new Set(e.map(r=>Pr(r.model,r.version))).size===1?"effort":new Set(e.map(r=>r.effort)).size===1?"model_version":"model_version_effort"}function Kq(e,n){const t=yn(e);return n==="effort"?YF(t):n==="model_version"?_2(Pr(e.model,e.version)):v2(t)}function Yq(e){const n=Xq(e);return{title:Wq[n],positions:_o(e).map(t=>{const r=yn(t);return{identity:t,tickLabel:Kq(t,n),longLabel:h2(r),segmentKey:KF(r)}})}}const Jq="task group";function zq(e){return{title:Jq,positions:e.map(({jtaskGroupId:n,designator:t})=>({identity:n,tickLabel:t,longLabel:`${t}: ${n}`,segmentKey:n}))}}function Qq(e,n,t){const r=n.positions.map(({identity:i})=>{const o=new Set(Nu(e,i).map(yn));return t.positions.map(({identity:a})=>o.has(yn(a))?e$(e,i,[a]):null)});return{jtaskGroupAxis:n,configurationAxis:t,entries:r}}const Ot=["jtaskGroup","agentCli","modelVersion","effort"],Zq=["agentCli","modelVersion","effort"],S2={jtaskGroup:{pinned:!0,value:null},agentCli:{pinned:!1,value:null},modelVersion:{pinned:!1,value:null},effort:{pinned:!1,value:null}};function ex(e,n){return e.jtaskGroup.value!==null||n===null?e:{...e,jtaskGroup:{...e.jtaskGroup,value:n}}}const js=26;function a$(e){const n=String.fromCharCode(65+e%js);return e<js?n:a$(Math.floor(e/js)-1)+n}function Dg(e,n,t){var o;const r=e.value??((o=n[0])==null?void 0:o.value)??null,i=n.find(a=>a.value===r);return{pinned:e.pinned,offered:n,value:r,valueLabel:r===null?null:(i==null?void 0:i.label)??t(r),unavailable:e.pinned&&r!==null&&i===void 0}}const ca=e=>e,nx={agentCli:{valueOf:e=>xi(e.model),inDisplayOrder:e=>jA().filter(n=>e.has(n)),labelOf:e=>VA(e),hoverTextOf:ca},modelVersion:{valueOf:e=>Pr(e.model,e.version),inDisplayOrder:e=>[...e],labelOf:_2,hoverTextOf:GA},effort:{valueOf:e=>e.effort,inDisplayOrder:e=>WA(e),labelOf:ca,hoverTextOf:ca}};function tx(e,n){const t=new Map;for(const r of n)for(const i of Nu(e.richcodeResults,r))t.set(yn(i),i);return _o([...t.values()])}function w2(e,n){const t=Wr(n),r=o$(t,u2(n.richcodeResults)),i=t.map((d,p)=>({jtaskGroupId:d,designator:a$(p),label:r[p]})),o=Dg(e.jtaskGroup,i.map(d=>({value:d.jtaskGroupId,label:d.label,hoverText:d.jtaskGroupId})),ca),a=o.pinned?i.filter(d=>d.jtaskGroupId===o.value):i;let u=tx(n,a.map(d=>d.jtaskGroupId));const s={};for(const d of Zq){const p=nx[d],m=p.inDisplayOrder(new Set(u.map(p.valueOf))).map(h=>({value:h,label:p.labelOf(h),hoverText:p.hoverTextOf(h)})),f=Dg(e[d],m,h=>Bh(h,p.labelOf));s[d]=f,f.pinned&&(u=u.filter(h=>p.valueOf(h)===f.value))}const c=Qq(n.richcodeResults,zq(a),Yq(u)),l={jtaskGroup:o,...s};return{jtaskGroups:i,rows:l,grid:c,jtaskGroupAxisSwept:!o.pinned&&a.length>1,configurationAxisSwept:u.length>1,unavailable:Ot.some(d=>l[d].unavailable)}}function rx(e,n,t,r){const i=w2(e,n).rows[t],o=r?i.value:i.unavailable?null:e[t].value;return{...e,[t]:{pinned:r,value:o}}}function ix(e,n,t){return{...e,[n]:{...e[n],value:t}}}function ox(e,n){return n+(e.jtaskGroupAxisSwept?1:0)+(e.configurationAxisSwept?1:0)}function ax(e){if(typeof e!="object"||e===null)return null;const{pinned:n,value:t}=e;return typeof n!="boolean"||t!==null&&typeof t!="string"?null:{pinned:n,value:t}}function ux(e){if(typeof e!="object"||e===null)return null;const n=e,t=Ot.map(u=>ax(n[u]));if(t.some(u=>u===null))return null;const[r,i,o,a]=t;return{jtaskGroup:r,agentCli:i,modelVersion:o,effort:a}}function Dr(e,n,t){const r=[];for(const i of e){if(t==="code"&&zt(i.id))continue;const o=ge(i.id);if(!Object.prototype.hasOwnProperty.call(n,o))throw new Error(`Cannot compute optionDictKey: missing value for ${i.id}`);r.push([i.id,n[o]])}return r.sort(([i],[o])=>i<o?-1:i>o?1:0),JSON.stringify(r)}const sx=.5;function u$(e){const n=e.viewportTopInsetPx;return n+(window.innerHeight-n)*sx}function Hh(e){return e.getClientRects().length===0?!1:typeof e.checkVisibility=="function"?e.checkVisibility():!0}function Fg(e){return document.getElementById(e.id)===e}function cx(e){const n=window.scrollY,{root:t}=e;if(t===null)return{anchorChain:[],pageScrollY:n};const r=u$(e);let i=null,o=Number.NEGATIVE_INFINITY;for(const u of t.querySelectorAll("[id]")){if(!Hh(u)||!Fg(u))continue;const{top:s}=u.getBoundingClientRect();s>r||s<o||(i=u,o=s)}if(i===null)return{anchorChain:[],pageScrollY:n};const a=[];for(let u=i;u!==null&&u!==t;u=u.parentElement)u.id===""||!Hh(u)||!Fg(u)||a.push({elementId:u.id,referenceLineOffsetPx:r-u.getBoundingClientRect().top});return{anchorChain:a,pageScrollY:n}}function lx(e,n){if(e.anchorChain.length===0){window.scrollTo({top:e.pageScrollY});return}const t=u$(n);for(const[r,i]of e.anchorChain.entries()){const o=document.getElementById(i.elementId);if(o===null||!Hh(o))continue;const a=e.anchorChain[r+1],u=a===void 0?null:document.getElementById(a.elementId);if(u!==null&&!u.contains(o))continue;const s=o.getBoundingClientRect(),l=r===0?i.referenceLineOffsetPx:Math.min(Math.max(i.referenceLineOffsetPx,0),s.height),d=s.top-(t-l);d!==0&&window.scrollBy(0,d);return}window.scrollTo({top:0})}function dx(e){if(typeof e!="object"||e===null)return!1;const n=e;return typeof n.elementId=="string"&&typeof n.referenceLineOffsetPx=="number"&&Number.isFinite(n.referenceLineOffsetPx)}function fx(e){if(typeof e!="object"||e===null)return null;const n=e;return!Array.isArray(n.anchorChain)||!n.anchorChain.every(dx)||typeof n.pageScrollY!="number"||!Number.isFinite(n.pageScrollY)?null:{anchorChain:[...n.anchorChain],pageScrollY:n.pageScrollY}}const px="Always included";function Uh(e,n,t){if(t==="Bool"&&n.type==="checkbox")return n.checked===!0;const r=Hv(e,n.value);if(typeof r=="object")throw new Error(`Invalid scalar control parser use for ${e.id}`);return r}function mx(e,n){const t=n.map(r=>{if(r.type!=="checkbox")throw new Error(`Invalid MultiStringFromSet control for ${e.id}: expected checkbox`);return r.checked===!0?r.value:void 0}).filter(r=>r!==void 0);return Hv(e,t)}function A2(e,n,t){return e!==void 0&&t.includes(e)?e:n!==void 0&&t.includes(n)?n:t[0]}const s$="declared-value-space",hx="One of:";function c$(e){const n=e.map(t=>x(String(t))).join(", ");return`<div class="${s$}">${hx} ${n}</div>`}function $2(e,n){let t=`<span class="cparam-or-aopt-name">${x(e)}</span>`;return n.longname&&(t+=` <span class="cparam-or-aopt-longname">(${x(n.longname)})</span>`),t}function Ra(e,n,t,r,i){const o=`${r.dataAttribute}="${K(e)}"`;if(i==="StringFromSet"){if(!Array.isArray(n.allowed_values))throw new Error(`StringFromSet option ${n.id} is missing allowed_values`);const l=n.allowed_values.map(d=>{const p=String(d),m=p===String(t)?" selected":"";return`<option value="${K(p)}"${m}>${x(p)}</option>`}).join("");return`<select class="${r.selectClass}" ${o}>${l}</select>`}if(i==="Number")return`<input class="${r.inputClass}" type="number" ${o} value="${K(String(t))}">`;if(i==="Bool"){const l=t?" checked":"";return`<input class="${r.checkboxClass??r.inputClass}" type="checkbox" ${o}${l}>`}if(i==="FreeString")return`<input class="${[r.inputClass,r.textInputClass].filter(Boolean).join(" ")}" type="text" ${o} value="${K(String(t))}">`;if(!Array.isArray(n.allowed_values))throw new Error(`MultiStringFromSet option ${n.id} is missing allowed_values`);if(!Array.isArray(t))throw new Error(`MultiStringFromSet option ${n.id} has a non-array current value`);const a=new Set(t),u=new Set(n.required_values??[]),s=r.checkboxClass??r.inputClass,c=n.allowed_values.map(l=>{if(typeof l!="string")throw new Error(`MultiStringFromSet option ${n.id} has a non-string allowed value`);const d=a.has(l)?" checked":"",p=u.has(l)?` disabled title="${K(px)}"`:"";return`<label><input class="${s}" type="checkbox" ${o} value="${K(l)}"${d}${p}> <span>${x(l)}</span></label>`}).join("");return`<span class="${r.checkboxGroupClass??""}">${c}</span>`}function yo(e){return e.allowed_values.filter(n=>typeof n!="boolean")}function T2(e,n){return A2(n.ui.inspectedCparamValues[ge(e.id)],e.default_value,yo(e))}function ku(e,n){const t={};for(const r of e.get_cparams())t[ge(r.id)]=T2(r,n);return t}function vx(e,n,t){if(n===void 0)return{};if(typeof n!="object"||n===null||Array.isArray(n))return qg(`persisted inspected combination is not a value map: ${JSON.stringify(n)}`),{};const r={};for(const[i,o]of Object.entries(n)){if(!_x(o)){qg(`persisted inspected value for ${i} is not a scalar: ${JSON.stringify(o)}`);continue}const a=e.find_cparam(i);if(a===void 0){console.warn(`Ignoring inspected value for ${i}, which this jprob no longer declares`);continue}if(!yo(a).includes(o)){console.warn(`Ignoring inspected value for ${a.id}, which its declaration no longer allows: ${JSON.stringify(o)}; falling back to the declared default`);continue}r[i]=o}return r}function _x(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function qg(e,n){console.warn(`${e}; falling back to the declared default`)}const Fe={VISIBLE_AOPTS:"visible-aopts",TCHOICE:"tchoice",CPARAMS_SECTION:"cparams",TEXT_DEFINITIONS:"text-definitions",INTERPRETED_SYMBOL_SEMANTICS:"interpreted-symbols",DEFINED_SYMBOLS:"defined-symbols",AXIOMS:"axioms",SIMPLIFYING_ASSUMPTIONS:"simplifying-assumptions",DERIVED_AXIOMS:"derived-axioms",ESTIMATION:"estimation",RESPONSE_NOTES:"response-notes",COMPUTED_FORMULAS:"formulas",FRAMING_ROOT:"framing-notes-root",FRAMING_EXPLAINER:"framing-notes-explainer",SRCQUOTE_EXPLAINER:"srcquote-explainer",CALCULATOR:"calculator",REFERENCES:"references"};function wt(e,n){return`${Fe[e]}-${Ca(n)}`}const l$="estimator-instructions",Gh="estimator-instructions-fold",gx="Estimator Instructions",bx="hir-section-fold",yx=!0;function I2(e,n,t){var r;return((r=t.foldOpenById)==null?void 0:r[e])??n?" open":""}function Vs(e,n,t,r){const i=I2(e,yx,r);return`<details id="${e}" class="${bx} ${_t}"${i}><summary>${n}</summary>`+t+"</details>"}const Ex={TEXT_DEFINITIONS:e=>hF(e),INTERPRETED_SYMBOL_SEMANTICS:e=>_F(e),DEFINED_SYMBOLS:e=>mF(e),AXIOMS:e=>Bs(e,{classification:"ordinary"}),SIMPLIFYING_ASSUMPTIONS:e=>Bs(e,{classification:"simplifying"}),DERIVED_AXIOMS:e=>Bs(e,{classification:"derived"}),COMPUTED_FORMULAS:e=>gF(e),REFERENCES:e=>sF(e)},Sx=`<div class="dag-legend">Each formula computes its left-hand side. <span class="dag-glyph">↖</span> marks a value computed by an earlier formula (click to jump to it); <span class="dag-glyph">↘</span> marks a left-hand side used by a later formula; hovering either highlights every occurrence of the value. Undecorated leaf names are estimated directly — each names a card in <a href="#${Fe.ESTIMATION}-section">Estimation</a> (click to jump to it).</div>`,wx="DERIVED_FORMS",Fr="derived-forms-fold",d$=!1,Ax="Computed auxiliary formulas",$x="CALCULATOR_RESULTS",f$="stats-display-control";function Tx(e){const n=new Set;for(const t of e.layout.sections.html)if("subentries"in t)for(const r of t.subentries)typeof r=="object"&&"formid"in r&&n.add(r.formid);return n}function p$(e){const n=e.conclusion_form_or_none(),t=Tx(e);return e.form.filter(r=>r.id!==n&&!t.has(r.id)).map(r=>r.id)}function Ix(e,n,t){let r;if(t)r={...t,unresolvedRefs:t.unresolvedRefs??new Set};else{const o=Bv(e),a=Hw(e,Bw(e,{},"plainnum"),"plainnum"),u=a.option_value_or("show_typical_examples",Uv),s=a.option_value_or("srcquotes_inlined",!1),c={};for(const l of a.get_option_bare_names())c[l]=a.option_value(l);r={jprobInstance:a,showTypical:u,srcquotesInlined:s,refLookup:o,displayOptionValues:c,unresolvedRefs:new Set}}const i=[];Th in e.get_fgroups()&&i.push(`<details id="${Gh}" class="hir-fold ${_t} estimator-instructions-fold"${I2(Gh,!1,r)} hidden><summary>${gx}</summary><div id="${l$}" class="hir-fold-body"></div></details>`);for(const o of e.layout.sections.html)i.push(Lx(o,e,r));return{html:i.join(""),unresolvedRefs:[...r.unresolvedRefs].sort()}}function Lx(e,n,t){if("chunkid"in e)return m$(e.chunkid,n,t,e.style)??"";if("subentries"in e){const u=Fe[e.delegation_id],s=e.subentries.map(c=>Rx(c,n,t,e.delegation_id));return Vs(`${u}-section`,`<h2 id="${u}-section-header">${e.header}</h2>`,s.join(""),t)}const{delegation_id:r,header:i}=e,o=Fe[r];if(!o)throw new Error("Expected `delegation_id` field here to be an element of DelegatedLayoutEntryId.");if((r==="FRAMING_ROOT"||r==="FRAMING_EXPLAINER")&&!n.has_standard_rendering_framing_notes()||r==="SRCQUOTE_EXPLAINER"&&!n.has_srcquotes())return"";const a=Ex[r];if(a){const u=a(t);if(!u.trim())return"";const s=r==="COMPUTED_FORMULAS"?Sx:"";return i==null?s+u:Vs(`${o}-section`,`<h2 id="${o}-section-header">${i}</h2>`,s+u,t)}return r==="FRAMING_EXPLAINER"||r==="SRCQUOTE_EXPLAINER"?`<div id="${o}-section"><div id="${o}-content"></div></div>`:Vs(`${o}-section`,`<h2 id="${o}-section-header">${i??""}</h2>`,`<div id="${o}-content"></div>`,t)}function Rx(e,n,t,r){if(typeof e=="string"){if(e===wx){const u=p$(n).map(s=>`<div id="derived-${Ca(s)}" class="derived-form" data-form-id="${s}"></div>`).join("");return u===""?"":`<details id="${Fr}" class="hir-fold ${_t} derived-forms-fold"${I2(Fr,d$,t)}><summary>${Ax}</summary><div class="hir-fold-body derived-forms-fold-body">${u}</div></details>`}const a=wt(r,e);return e===$x?`<div id="${f$}"></div><div id="${a}"></div>`:`<div id="${a}"></div>`}if("chunkid"in e)return m$(e.chunkid,n,t,e.style)??"";const i=e.formid;return`<div id="${`derived-${Ca(i)}`}" class="derived-form" data-form-id="${i}"></div>`}function m$(e,n,t,r){const i=n.find_textchunk_defn(e);if(i===void 0)throw new Error(`Layout references textchunk "${e}", which the jprob template does not declare`);if(!i)return null;if(r===Iw)return`<h1 class="arg-title">${kr(i,t)}</h1>`;const o=Ge(i,t,Ca(e));switch(r){case"subtitle":return`<div class="arg-subtitle">${o}</div>`;case"note":return`<div class="hir-loud-note">${o}</div>`;case"warning":return`<div class="arg-warning">${o}</div>`;case YN:return`<div class="hir-webonly-note">${o}</div>`;default:return`<div class="textchunk">${o}</div>`}}function Ca(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/-$/,"").replace(/^-/,"")}function jh(e,n){n.inputMode!==void 0&&(e.inputMode=n.inputMode),n.probAsOdds!==void 0&&(e.probAsOdds=n.probAsOdds),n.densityScale!==void 0&&(e.densityScale=n.densityScale),n.showFramingNotes!==void 0&&(e.showFramingNotes=n.showFramingNotes),n.srcquotesInlinedOverride!==void 0&&(e.srcquotesInlinedOverride=n.srcquotesInlinedOverride),n.auxFormsFoldOpen!==void 0&&(e.foldOpenById[Fr]=n.auxFormsFoldOpen),n.cparamPinned!==void 0&&Object.assign(e.cparamPinned,n.cparamPinned),n.cparamValues!==void 0&&Object.assign(e.cparamValues,n.cparamValues),n.inspectedCparamValues!==void 0&&Object.assign(e.inspectedCparamValues,n.inspectedCparamValues),n.interactionMode!==void 0&&(e.interactionMode=n.interactionMode),n.estimateQueryMode!==void 0&&(e.estimateQueryMode=n.estimateQueryMode),n.readTrials!==void 0&&(e.readTrials=structuredClone(n.readTrials)),n.compare!==void 0&&(e.compare=structuredClone(n.compare))}const h$="yours_code";function Mu(e,n){return`${h$}_${e}_${n}`}function v$(e,n){const t={};for(const r of e.get_aopts()){const i=ge(r.id);i in n&&(t[i]=n[i])}return{aid:e.aid,label:"code",aopts:t,count:1,cparam_names:[],cparam_combos:[],raw_code_input:"",reasoning_response:{},misc_response:"",trial_choices:e.get_enum_tchoice_defaults()}}function Cx(e,n,t){const r=Nx(Mu(e.aid,n));return r||v$(e,t)}function L2(e,n,t,r){r.timestamp||(r.timestamp=new Date().toISOString()),r.content_hash=MA("code",n,r.aopts,void 0),kx(Mu(e.aid,t),r)}function R2(e){const n=`${h$}_${e}_`,t=[];for(let r=0;r<localStorage.length;r++){const i=localStorage.key(r);if(i===null||!i.startsWith(n))continue;const o=localStorage.getItem(i);if(o===null)continue;let a;try{a=JSON.parse(o)}catch{continue}t.push({codeOptionDictKey:i.slice(n.length),record:a})}return t.sort((r,i)=>{const o=r.record.timestamp??"";return(i.record.timestamp??"").localeCompare(o)}),t}function Ox(e,n){localStorage.removeItem(Mu(e,n))}function Nx(e){try{const n=localStorage.getItem(e);return n===null?null:JSON.parse(n)}catch{return null}}function kx(e,n){localStorage.setItem(e,JSON.stringify(n))}function Pu(e,n){const t={};for(const r of e){const i=ge(r.id),o=n[i]??r.default_value;t[i]=Hv(r,o)}return t}function Mx(e,n){const t={...n};for(const r of e){if(!("input_type"in r)||r.input_type!=="MultiStringFromSet")continue;const i=ge(r.id),o=n[i];if(!Array.isArray(o)||!o.every(s=>typeof s=="string")||!Array.isArray(r.allowed_values))continue;const a=new Set(r.allowed_values),u=o.filter(s=>!a.has(s));u.length!==0&&(console.warn(`Ignoring MultiStringFromSet values no longer allowed for ${r.id}: `+u.join(", ")),t[i]=o.filter(s=>a.has(s)))}return t}function C2(e,n){const t={...n};for(const r of e){if(!("input_type"in r)||r.input_type!=="MultiStringFromSet")continue;const i=ge(r.id),o=n[i];if(!Array.isArray(o)||!o.every(u=>typeof u=="string"))continue;const a=(r.required_values??[]).filter(u=>!o.includes(u));a.length!==0&&(console.warn(`Adding MultiStringFromSet values now required for ${r.id}: `+a.join(", ")),t[i]=[...o,...a])}return t}const Eo={inputMode:"whole",probAsOdds:"whole",densityScale:"whole",symbolMnames:"whole",popoverAllRefs:"whole",persistentPopovers:"whole",showExampleClassification:"whole",showGlobalProseFoldControls:"whole",interactionMode:"whole",estimateQueryMode:"whole",readTrials:"whole",compare:"whole",exampleFoldState:"entrywise",framingFoldState:"entrywise",srcquotesInlinedOverride:"whole",showFramingNotes:"whole",longTextAbbrev:"whole",jointDependenceEditorOpen:"whole",foldOpenById:"entrywise",sidePanelExpanded:"whole",cparamPinned:"entrywise",cparamValues:"entrywise",inspectedCparamValues:"entrywise",codeSweepMode:"whole",plotTargetKind:"whole",plotFormulaId:"whole",plotRawResponseName:"whole",scrollPositionByInteractionMode:"entrywise"},_$=Object.keys(Eo),g$="aopt",b$="ui",Px="yours";function Oa(e,n){return`${e}_${n}`}function Du(e,n){return`${Px}_${e}_${n}`}const Dx=["inputMode","probAsOdds","densityScale","symbolMnames","popoverAllRefs","persistentPopovers","showExampleClassification","showGlobalProseFoldControls","showFramingNotes","longTextAbbrev"];function y$(e){const n={};for(const t of Dx)e[t]!==void 0&&(n[t]=e[t]);return n}const Fx={interactionMode:E2,estimateQueryMode:"plainnum",readTrials:sa,compare:S2,exampleFoldState:{},framingFoldState:{},jointDependenceEditorOpen:!0,foldOpenById:{},sidePanelExpanded:!0,srcquotesInlinedOverride:null,cparamPinned:{},cparamValues:{},inspectedCparamValues:{},codeSweepMode:"average",plotTargetKind:"formula",plotFormulaId:"",plotRawResponseName:"",scrollPositionByInteractionMode:{}};function E$(e){return{...structuredClone(Fx),...y$(e)}}function S$(e){const n={...E$(fo),interactionMode:Dq(e.presetData),readTrials:Fq(e.presetData)};return jh(n,e.defaultView),n}function w$(e){return{...S$(e),...y$(SF())}}function A$(e,n){const t={},r={};for(const i of e){const o=ge(i.id);o in n&&(zt(i.id)?r[o]=n[o]:t[o]=n[o])}return{aopts:t,cparam_values:r}}function $$(e,n){const{aopts:t,cparam_values:r}=A$(e.get_options(),n);return{aid:e.aid,label:"",prompt_file_basename:"",aopts:t,cparam_values:r,count:1,trials:[{point:{},bounds:{},sample:{}}],raw_input:{},reasoning_response:{},misc_response:"",trial_choices:e.get_enum_tchoice_defaults()}}function T$(e){return{...e,reasoning_response:e.reasoning_response??{},misc_response:e.misc_response??""}}function I$(e){const n=Na(e);return n===null?null:T$(n)}function qx(e){const n=Pu(e.get_options(),{}),t=Dr(e.get_options(),n,"plainnum"),r=Dr(e.get_options(),n,"code");return{optionValues:n,plainnumOptionDictKey:t,codeOptionDictKey:r,ui:E$(Ye()),yoursRecord:$$(e,n),yoursCodeRecord:v$(e,n)}}function xx(e,n,t,r){return{...e,[n]:{pos:Fi(e,n,"pos"),neg:Fi(e,n,"neg"),[t]:r}}}function L$(e,n){return!n&&e==="plaincode"?"plainnum":e}function Bx(e,n,t){const r=I$(Du(e.aid,n));return r||$$(e,t)}const Hx="assumptionTrialIndex",Ux="Remembered view",Gx="This does not affect any estimates you have saved.";function jx(e,n,t){if(e===null)return{interactionMode:n.interactionMode,estimateQueryMode:n.estimateQueryMode,readTrials:n.readTrials,compare:n.compare};const r=Gq(e.readTrials),i=ux(e.compare);return r===null&&e.readTrials!==void 0&&(t.warnings.push(`persisted ReadTrials selection is not readable: ${JSON.stringify(e.readTrials)}`),t.needsRepair=!0),e.compareInterim!==void 0&&(t.needsRepair=!0),i===null&&e.compare!==void 0&&(t.warnings.push(`persisted Compare selection is not readable: ${JSON.stringify(e.compare)}`),t.needsRepair=!0),{interactionMode:Ct.find(o=>o===e.interactionMode)??n.interactionMode,estimateQueryMode:p2.find(o=>o===e.estimateQueryMode)??n.estimateQueryMode,readTrials:r??n.readTrials,compare:i??n.compare}}function Vx(e,n,t){const{unavailableAdhoc:r}=kn(e,n);return r===null?e:(t.needsRepair=!0,t.warnings.push("persisted adhoc entry names nothing in the loaded data: "+Ia(r)),t.readerFacingMessages.push(`The adhoc result you were last viewing here is no longer available, so the page opened on the methodical results instead. ${Gx} (It was: ${Ia(r)}.)`),{...e,adhoc:null})}function Wx(e){if(typeof e!="object"||e===null)return{};const n={};for(const t of Ct){const r=fx(e[t]);r!==null&&(n[t]=r)}return n}function Xx(e,n){const{state:t,report:r}=Kx(e,n);if(r.needsRepair)try{R$(e.config,t.ui,n)}catch(i){console.warn("could not rewrite the stored selection",i)}return{state:t,readerFacingMessages:r.readerFacingMessages}}function Kx(e,n){const t=e.config.localStorage_prefix,r=e.get_options(),i=qx(e),o=Na(Oa(t,g$)),a=o?Pu(r,C2(r,Mx(r,o))):i.optionValues,u=Dr(r,a,"plainnum"),s=Dr(r,a,"code"),c=w$(n),l=Na(Oa(t,b$)),{[Hx]:d,interactionMode:p,estimateQueryMode:m,readTrials:f,compare:h,compareInterim:v,modelEffortPinned:_,selection:g,lastAdhocSelection:b,lastMethoSelection:y,selectedJtaskGroupId:E,whose:$,lastAdhocWhose:T,lastMethoWhose:C,lastYoursWhose:L,resultTrialSelection:A,modelEffortSweepScope:w,codePlotTargetKind:S,codePlotFormulaId:I,codePlotRawResponseName:R,...P}=l??{},k={readerFacingMessages:[],needsRepair:!1,warnings:[]},B=jx(l,c,k);for(const ae of k.warnings)console.warn(`${ae}; starting from the default view`);const q=bo(n.presetData).includes(B.interactionMode)?B.interactionMode:E2,M={...B,interactionMode:q,estimateQueryMode:L$(B.estimateQueryMode,e.has_cparams()),readTrials:Vx(B.readTrials,n,k)},Z=zx(c,P),G={...Z,...M,inspectedCparamValues:{...structuredClone(c.inspectedCparamValues),...vx(e,Z.inspectedCparamValues)},scrollPositionByInteractionMode:Wx(Z.scrollPositionByInteractionMode)},z=Bx(e,u,a),te=Cx(e,s,a);return{state:{optionValues:a,plainnumOptionDictKey:u,codeOptionDictKey:s,ui:G,yoursRecord:z,yoursCodeRecord:te},report:k}}function O2(e,n){const t=e.localStorage_prefix;k2(Oa(t,g$),n)}function R$(e,n,t){const r=e.localStorage_prefix;k2(Oa(r,b$),Jx(n,w$(t)))}function Yx(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Jx(e,n,t){const r={};for(const i of _$){if(Eo[i]==="whole"){Kn(e[i],n[i])||(r[i]=e[i]);continue}const o=e[i],a=n[i];for(const s of Object.keys(a)){if(o[s]!==void 0)continue;const c=`UI state ${i} lacks the entry ${JSON.stringify(s)} that its default supplies, which cannot be stored as a deviation`;console.warn(c)}const u=Object.fromEntries(Object.entries(o).filter(([s,c])=>!Kn(c,a[s])));Object.keys(u).length>0&&(r[i]=u)}return r}function zx(e,n){const t={};for(const r of _$){const i=n[r];i===void 0?t[r]=structuredClone(e[r]):Eo[r]==="entrywise"&&Yx(i)?t[r]={...structuredClone(e[r]),...i}:t[r]=i}return t}function N2(e,n,t,r){r.timestamp||(r.timestamp=new Date().toISOString()),r.content_hash=MA("plainnum",n,r.aopts,r.cparam_values??{}),k2(Du(e.aid,t),r)}function Qx(e,n,t){const{aopts:r,cparam_values:i}=A$(n.get_options(),t);return{...e,aopts:r,cparam_values:i,raw_input:{...e.raw_input??{}},reasoning_response:{...e.reasoning_response},trial_choices:{...e.trial_choices??{}},lloads_draft:e.lloads_draft===void 0?void 0:structuredClone(e.lloads_draft),trials:e.trials.map(o=>({point:{...o.point},bounds:{...o.bounds},sample:{...o.sample},lloads:o.lloads===void 0?void 0:structuredClone(o.lloads)})),timestamp:void 0}}function Zx(e,n,t){const r={};for(const i of n.get_aopts()){const o=ge(i.id);o in t&&(r[o]=t[o])}return{...e,aopts:r,reasoning_response:{...e.reasoning_response},trial_choices:{...e.trial_choices??{}},cparam_combos:[],cparam_names:[],verified_code_input:void 0,timestamp:void 0}}function xg(e,n,t,r){const i={...e.optionValues,[t]:r},o=Dr(n.get_options(),i,"plainnum"),a=Dr(n.get_options(),i,"code");let u=e.yoursRecord;o!==e.plainnumOptionDictKey&&(u=I$(Du(n.aid,o))??Qx(e.yoursRecord,n,i));let s=e.yoursCodeRecord;return a!==e.codeOptionDictKey&&(s=Na(Mu(n.aid,a))??Zx(e.yoursCodeRecord,n,i)),(o!==e.plainnumOptionDictKey||a!==e.codeOptionDictKey)&&O2(n.config,i),{optionValues:i,plainnumOptionDictKey:o,codeOptionDictKey:a,ui:e.ui,yoursRecord:u,yoursCodeRecord:s}}function eB(){const e={};for(let n=0;n<localStorage.length;n++){const t=localStorage.key(n);e[t]=localStorage.getItem(t)}return e}function nB(e){localStorage.clear();for(const[n,t]of Object.entries(e))localStorage.setItem(n,String(t))}function tB(){const e=new URLSearchParams(window.location.search),n=e.get("_preload");if(!n)return;try{const r=atob(n),i=JSON.parse(r);for(const[o,a]of Object.entries(i))localStorage.setItem(o,String(a))}catch(r){alert(`Failed to load preload state: ${r}`)}e.delete("_preload");const t=e.toString()?`${window.location.pathname}?${e}`:window.location.pathname;history.replaceState(null,"",t)}function Na(e){try{const n=localStorage.getItem(e);return n===null?null:JSON.parse(n)}catch{return null}}function k2(e,n){localStorage.setItem(e,JSON.stringify(n))}function M2(){return{wholeFields:{},mapEntries:{}}}const C$=Object.keys(Eo);function Bi(e,n){return e[n]}function ka(e,n){return e[n]===void 0?null:{value:e[n]}}function P2(e,n){return e===null||n===null?e===n:Kn(e.value,n.value)}function rB(e,n){const t=M2();for(const r of C$){if(Eo[r]==="whole"){if(Kn(e[r],n[r]))continue;t.wholeFields[r]={fromLink:structuredClone(n[r]),readersOwn:structuredClone(e[r])};continue}const i=Bi(e,r),o=Bi(n,r),a={};for(const u of new Set([...Object.keys(i),...Object.keys(o)])){const s=ka(i,u),c=ka(o,u);P2(s,c)||(a[u]=structuredClone({fromLink:c,readersOwn:s}))}Object.keys(a).length>0&&(t.mapEntries[r]=a)}return t}function iB(e,n){for(const[t,r]of Object.entries(e.wholeFields))if(!Kn(r.readersOwn,n[t]))return!0;for(const[t,r]of Object.entries(e.mapEntries)){const i=Bi(n,t);for(const[o,a]of Object.entries(r))if(!P2(a.readersOwn,ka(i,o)))return!0}return!1}function oB(e,n){for(const t of C$){const r=e.wholeFields[t];r!==void 0&&!Kn(n[t],r.fromLink)&&delete e.wholeFields[t];const i=e.mapEntries[t];if(i!==void 0){for(const[o,a]of Object.entries(i))P2(ka(Bi(n,t),o),a.fromLink)||delete i[o];Object.keys(i).length===0&&delete e.mapEntries[t]}}}function aB(e,n){const t={...e};for(const[r,i]of Object.entries(n.wholeFields))t[r]=structuredClone(i.readersOwn);for(const[r,i]of Object.entries(n.mapEntries)){const o={...Bi(e,r)};for(const[a,u]of Object.entries(i))u.readersOwn===null?delete o[a]:o[a]=structuredClone(u.readersOwn.value);t[r]=o}return t}const nn={whose:"whose",jtaskGroup:"jtask_group",model:"model",version:"version",effort:"effort",aggregate:"aggregate",adhocName:"adhoc_name",adhocLabel:"adhoc_label"},D2=Object.values(nn),Hi="preset";function uB(e){return e.has(nn.whose)||e.has(Hi)}const O$={"yours-plainnum":{whoseKind:"yours",queryMode:"plainnum"},"yours-plaincode":{whoseKind:"yours",queryMode:"plaincode"},"adhoc-plainnum":{whoseKind:"adhoc",queryMode:"plainnum"},"adhoc-plaincode":{whoseKind:"adhoc",queryMode:"plaincode"},"metho-richcode":{whoseKind:"metho"}},Ws=Object.keys(O$),Bg=["model_size__version","model_size","all"];function sB(e){const n=e.get(Hi),t=cB(e);return n===null?t:{identity:t.identity,errors:[`${Hi}=${JSON.stringify(n)} is a retired list position, not a selection this deploy can resolve; the link's selection was dropped and the rest of it kept`]}}function cB(e){const n=[],t=e.get(nn.whose);if(t===null)return lB(e)&&n.push(`selection parameters were given without whose; expected whose=${Ws.join("|")}`),{identity:null,errors:n};const r=Ws.find(d=>d===t);if(r===void 0)return n.push(`whose=${JSON.stringify(t)} invalid; expected one of: ${Ws.join(", ")}`),{identity:null,errors:n};const i=O$[r];if(i.whoseKind==="yours")return{identity:{whoseKind:"yours",queryMode:i.queryMode},errors:n};if(i.whoseKind==="adhoc"){const d=e.get(nn.adhocName),p=e.get(nn.adhocLabel),m=[d===null?nn.adhocName:null,p===null?nn.adhocLabel:null].filter(f=>f!==null);return d===null||p===null?(n.push(`whose=${r} requires ${m.join(" and ")}`),{identity:null,errors:n}):{identity:{whoseKind:"adhoc",nameOrPseudoname:d,queryMode:i.queryMode,label:p},errors:n}}const o=e.get(nn.jtaskGroup),a=e.get(nn.model),u=e.get(nn.version),s=[o===null?nn.jtaskGroup:null,a===null?nn.model:null,u===null?nn.version:null].filter(d=>d!==null);if(o===null||a===null||u===null)return n.push(`whose=${r} requires ${s.join(", ")}`),{identity:null,errors:n};const c=e.get(nn.aggregate),l=c===null?null:Bg.find(d=>d===c)??null;return c!==null&&l===null?(n.push(`aggregate=${JSON.stringify(c)} invalid; expected one of: ${Bg.join(", ")}`),{identity:null,errors:n}):{identity:{whoseKind:"metho",jtaskGroupId:o,model:a,version:u,effort:e.get(nn.effort),aggregate:l},errors:n}}function lB(e){return D2.some(n=>n!==nn.whose&&e.has(n))}function dB(e,n){if(e.aggregate==="all")return null;if(e.aggregate==="model_size__version")return{agentClis:[],modelVersions:[Pr(e.model,e.version)],efforts:[]};if(e.aggregate==="model_size"){const t=Nu(n.richcodeResults,e.jtaskGroupId);return{agentClis:[],modelVersions:[...new Set(t.filter(r=>r.model===e.model).map(r=>Pr(r.model,r.version)))],efforts:[]}}if(e.effort===null)throw new Error("a methodical identity with no aggregate kind names a configuration, which has an effort");return t$({model:e.model,version:e.version,effort:e.effort})}function fB(e,n){const t=e.whoseKind==="metho"?e:null;return{mode:e.whoseKind==="yours"?"Estimate":"ReadTrials",estimateQueryMode:e.whoseKind==="yours"?e.queryMode:null,readTrials:{jtaskGroupId:(t==null?void 0:t.jtaskGroupId)??null,mixtureGroupSelection:t===null?null:dB(t,n),adhoc:e.whoseKind==="adhoc"?{nameOrPseudoname:e.nameOrPseudoname,queryMode:e.queryMode,label:e.label}:null,trial:Yn}}}const er="mix",Ar={kind:"mix"};function Ui(e){return{kind:"trial",recordTrialIndex:e}}function N$(e){return e.kind==="mix"?er:String(e.recordTrialIndex)}function k$(e){return e===er?Ar:pB(e)?Ui(Number(e)):null}function pB(e){return/^\d+$/.test(e)}const M$=4,mB=3,hB=1e-4,vB=1e4,Hg=3;function Ug(e){const[n,t]=e.split("e"),r=n.includes(".")?n.replace(/0+$/,"").replace(/\.$/,""):n;return t===void 0?r:`${r}e${t}`}function _B(e){switch(e){case"deterministic":return M$;case"monte-carlo":return mB;default:{const n=e;throw new Error(`Unknown calculation precision: ${String(n)}`)}}}function Ma(e,n){if(Number.isNaN(e))return String(e);if(!Number.isFinite(e))return e>0?"∞":"-∞";if(e===0)return"0";const t=Number(e.toPrecision(n));if(t===0)return"0";const r=Math.abs(t);if(r<hB||r>=vB)return Ug(t.toExponential(n-1));const i=Math.floor(Math.log10(r)),o=Math.max(0,n-1-i);return Ug(t.toFixed(o))}function P$(e){return Number.isFinite(e)?e>=1?"∞:1":e<=0?"1:∞":e>=.5?`${Ma(e/(1-e),Hg)}:1`:`1:${Ma((1-e)/e,Hg)}`:"—"}function Gi(e,n){if(!Number.isFinite(e)||e===0)return e;const t=M$,r=Number(e.toPrecision(t));if(n==="floor"?r<=e:r>=e)return r;const i=Math.floor(Math.log10(Math.abs(r))),o=Math.pow(10,i-t+1),a=n==="floor"?r-o:r+o;return Number(a.toPrecision(t))}function Pe(e,n,t,r="deterministic"){const i=_B(r);return lu(n)?t==="odds"?P$(e):Ma(e*100,i)+"%":Ma(e,i)}const gB=`<p>Joint dependence lets you say how your distributions move <em>together</em>, beyond what each one says on its own. You express it as <b>named latents</b>: each latent is one shared influence, described in your own words, with a signed <b>loading</b> on each quantity it touches.</p>
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
<p>Say which one you mean. And note that dependence does not only widen: loading a ratio&#39;s numerator and its denominator in the same direction makes them rise and fall together, which <em>narrows</em> that ratio. That is sometimes exactly the belief you hold — but check the independent-vs-joint comparison, rather than reasoning from the signs alone.</p>`,bB="On the point estimates:",yB="Logically-implied analogous invariants are also enforced on the bounds and on sample-distribution quantiles. Violations surface as consistency-failure warnings, and any that remain in your submitted response are recorded with it.",F2={joint_dependence:gB,"srcquote-explainer":"Text in this style is source material related to the entity above it.",logical_consistency_point_list_intro:bB,logical_consistency_other_response_types:yB},D$="logical-consistency-content",Gg="logical-consistency-fold",EB="Logical consistency requirements",SB=!0,wB="logical-consistency-section-text",AB="logical-consistency-violations",$B="logical-consistency",TB="logical_consistency_point_list_intro",IB="logical_consistency_other_response_types",LB="- ";function jg(e){const n=F2[e];if(n===void 0)throw new Error(`shared_text.json is missing section '${e}' (regenerate via \`just gen\`)`);return n}function F$(e){return e.replace(/_/g," ")}const q$="must not depend on";function RB(e,n){return e==="constant"?`${q$} [${n}]`:`must be ${F$(e)} in [${n}]`}function Fu(e){return e.startsWith(Rh)}function x$(e,n){return Fu(n)?`{${e.form_produced_expr(n)}}`:`[${n}]`}function CB(e){const n=e.logical_consistency_or_none();if(n===null)return null;const t=[jg(TB)];for(const[r,i]of Object.entries(n.directions))for(const[o,a]of Object.entries(i))t.push(`${LB}${x$(e,o)} `+RB(a,r));return t.push("",jg(IB),"",n.defn),t.join(`
`)}const OB="Following are the instructions supplied to agents.",NB="This feature is not yet implemented for your estimations.",kB="All estimator agents for trials in the current mixture were given the following instructions, and had the described checks across parameters applied.",MB="Some but not all estimator agents for trials in the current mixture were given the following instructions, and had the described checks across parameters applied. You can see which used the feature by selecting individual trials in the sticky bar.",PB="None had violations.",DB="Some had violations. You can see the violations in the single trial views.",FB="For some, the checks could not be run on the submitted response; the single trial views say why.",Vg="This trial's estimator agent was given the following instructions.",qB="It had no violations.",xB="It had violations, which you can view below.",BB="The checks could not be run on its submitted response:",HB={fewer_than_two_wellformed_combinations:"fewer than two parameter combinations got a well-formed response, so there was no pair to compare.",malformed_combination:"the response for at least one parameter combination was malformed.",policy_rejected:"the agent's code was rejected before it ran, so there was no response to check."},UB="Violations left in this trial's submitted response:";function GB(){return`<div class="arg-warning">${x(OB)} <b>${x(NB)}</b></div>`}function B$(e){return e.checked&&e.violations.length>0}function jB(e){const n=HB[e];return n!==void 0?n:e}function VB(e){return e.checked?`${Vg} `+(B$(e)?xB:qB):`${Vg} ${BB} `+jB(e.reason)}function WB(e){const n=e.filter(r=>r!==void 0),t=[n.length===e.length?kB:MB,n.some(B$)?DB:PB];return n.some(r=>!r.checked)&&t.push(FB),t.join(" ")}function XB(e){return Fu(e.subject)?e.subject:`${Ri}${e.subject}`}function KB(e,n){if(!Fu(n))return Lt(e.get_svar(n));const t=e.form.find(r=>r.id===n);if(t===void 0)throw new Error(`${e.aid}: "${n}" names no registered formula`);return Lt(t)}const YB={lo:"floor",hi:"ceil"};function JB(e,n,t,r,i,o){if(Fu(t)){const a=o===void 0?e:Gi(e,YB[o]);return Pe(a,r,i)}return n.response_type==="sample"?Pe(e,r,i,"deterministic"):String(e)}function zB(e){return`q${String(Math.round(e*100)).padStart(2,"0")}`}function QB(e){return e==="decreasing"||e==="strictly_decreasing"}function Wg(e){const n=e.response_type;switch(n){case"point":return"point";case"sample":if(e.quantile===void 0)throw new Error("Logical consistency: a sample violation names no quantile");return`sample ${zB(e.quantile)}`;case"bounds":if(e.bounds_endpoint===void 0)throw new Error("Logical consistency: a one-endpoint bounds violation names no endpoint");return`bounds ${e.bounds_endpoint}`;default:{const t=n;throw new Error(`Logical consistency: unknown response_type '${String(t)}'`)}}}function ZB(e,n,t,r){const i=XB(e),o=KB(n,i),a=kr(x$(n,i),t),u=kr(`[cparam:${e.cparam_name}]`,t),s=(h,v)=>x(JB(h,e,i,o,r,v)),c=Object.entries(e.fixed_cparams),l=c.length===0?"":` [${c.map(([h,v])=>`${x(h)} = ${x(String(v))}`).join(", ")}]`,d=x(String(e.from_cparam_value)),p=x(String(e.to_cparam_value));if(e.direction==="constant"){const h=Wg(e),v=e.response_type==="bounds"?e.bounds_endpoint:void 0;return`${a} ${h} ${q$} ${u}: ${u} = ${d} → ${p}: ${s(e.from_value,v)} → ${s(e.to_value,v)}${l}`}const m=x(F$(e.direction)),f=e.response_type;switch(f){case"bounds":{const h=QB(e.direction)?`hi(${d}) = ${s(e.from_value,"hi")}, lo(${p}) = ${s(e.to_value,"lo")}`:`hi(${p}) = ${s(e.to_value,"hi")}, lo(${d}) = ${s(e.from_value,"lo")}`;return`${a} bounds violate ${m} in ${u}: ${h}${l}`}case"point":case"sample":{const h=Wg(e),v=e.to_value>e.from_value?"increases":e.to_value<e.from_value?"decreases":"stays constant";return`${a} ${h} ${v} (violates ${m}) in ${u}: ${u} = ${d} → ${p}: ${s(e.from_value)} → ${s(e.to_value)}${l}`}default:{const h=f;throw new Error(`Logical consistency: unknown response_type '${String(h)}'`)}}}function eH(e,n,t,r){const i=e.map(o=>{try{return ZB(o,n,t,r)}catch{return x(JSON.stringify(o))}});return`<div class="${AB}"><p class="${Qv}">${x(UB)}</p><ul class="${e2}">`+i.map(o=>`<li class="${n2}">${o}</li>`).join("")+"</ul></div>"}function nH(e){return e.logical_consistency_or_none()===null?"":`<div id="${D$}"></div>`}function tH(e,n,t,r,i){if(t.kind==="yours")return Wn(tt(t))?{introHtml:GB(),violationsHtml:""}:null;if(!r.some(a=>a!==void 0))return null;if(r.length>1)return{introHtml:`<div class="hir-loud-note">${x(WB(r))}</div>`,violationsHtml:""};const o=r[0];return{introHtml:`<div class="hir-loud-note">${x(VB(o))}</div>`,violationsHtml:o.checked&&o.violations.length>0?eH(o.violations,e,n,i):""}}function rH(e,n,t,r,i){var s;const o=CB(e);if(o===null)return"";const a=tH(e,n,t,r,i);if(a===null)return"";const u=((s=n.foldOpenById)==null?void 0:s[Gg])??SB;return`<details id="${Gg}" class="hir-fold ${_t}"${u?" open":""}><summary>${x(EB)}</summary><div class="hir-fold-body">`+a.introHtml+`<div class="${wB}">`+Ge(o,n,$B)+"</div>"+a.violationsHtml+"</div></details>"}function iH(e,n,t,r,i,o){e.innerHTML=rH(n,t,r,i,o)}const q2="StringFromSet",oH="Parameters",aH="Fixed Parameters",uH="Free Parameters";function sH(e,n,t,r,i,o,a){const u=e.filter(ga);if(u.length===0)return{headerText:"",bodyHtml:""};const s=Wn(tt(n)),c=n.kind==="yours",l=s?uH:c?oH:aH,d=r??x,p=s?"":H$(u,t,d,i,o),m=[];for(const f of u){const h=ge(f.id),v=d(f.defn),_=(a==null?void 0:a(f))??{atStart:"",atEnd:""},g=t[h]??f.default_value;if(typeof g=="object")throw new Error(`Cparam ${f.id} has a non-scalar current value`);let b=$2(h,f),y="";s?y=c$(f.allowed_values):c?b+=" = "+lH(h,f,g):b+=` <span class="cparam-or-aopt-value">= ${x(String(g))}</span>`,m.push(`<div class="cparam-or-aopt" id="opt-${h}"><div class="cparam-or-aopt-header">${b}</div><div class="cparam-or-aopt-defn">${_.atStart}${v}${_.atEnd}</div>`+y+"</div>")}return{headerText:l,bodyHtml:p+m.join("")}}function H$(e,n,t,r,i){if(!r||!i)return"";const o=cH(e,n);return o===null||r(o)?"":`<div class="arg-warning">${t(i)}</div>`}function cH(e,n){const t={};for(const r of e){const i=ge(r.id),o=n[i]??r.default_value;if(fu(r.allowed_values)==="string"){if(typeof o!="string")return null;t[i]=o;continue}const a=Number(o);if(!Number.isFinite(a))return null;t[i]=a}return t}function lH(e,n,t){return Ra(e,n,t,{dataAttribute:"data-cparam-body",selectClass:"cparam-body-select",inputClass:"cparam-body-input"},q2)}function dH(e,n,t,r,i,o,a){const{headerText:u,bodyHtml:s}=sH(n.get_cparams(),i,t.displayOptionValues,d=>Ge(d,t),o,a,d=>Xn(d.srcquotes,t)),c=document.getElementById("cparams-section");if(!s){e.innerHTML="",c&&(c.hidden=!0);return}c&&(c.hidden=!1);const l=document.getElementById("cparams-section-header");l&&(l.textContent=u),e.innerHTML=s+nH(n)}function fH(e){const n=e.conclusion_expr_or_none();return n===null?null:e.get_display_expr(n)??n}function pH(e,n){const t=fH(e);return t===null?null:nt(t,n)}const U$="jtask-group-provenance-fold",mH="Provenance",hH="Prompt content hashes answered by these trials:",vH="(prompt hash)",_H="(rdev)",gH="rdev suffix:",bH="not recorded",yH="none";function G$(e){return Wr(e).map(n=>{var i;const t=ZA(e.richcodeResults,n),r=(i=e.richcodeResults.find(o=>o.jtask_group_id===n))==null?void 0:i.rdev_prompt_suffix;return{jtaskGroupId:n,aopts:t.aopts,contentHashes:t.jtask_group_content_hashes??[],...r===void 0?{}:{rdevPromptSuffix:r}}})}function EH(e){return JSON.stringify(Array.isArray(e)?[...e].map(String).sort():e)}function SH(e,n){const t=new Set(e.flatMap(o=>Object.keys(o.aopts))),r=n.get_aopt_bare_names().filter(o=>t.has(o)),i=[...t].filter(o=>!r.includes(o)).sort();return[...r,...i].filter(o=>new Set(e.map(u=>o in u.aopts?EH(u.aopts[o]):void 0)).size>1)}function wH(e,n){const t=n.get_aopts().find(r=>ge(r.id)===e);return(t==null?void 0:t.longname)??e}function AH(e,n){if(!(n in e.aopts))return bH;const t=e.aopts[n];return Array.isArray(t)?t.length===0?yH:[...t].map(String).sort().join(", "):String(t)}function j$(e,n,t){const r=IF(t.jtaskHashGroups,e.jtaskGroupId),i=r===null?` <span class="jtask-group-implicit-mark">${vH}</span>`:"",o=e.rdevPromptSuffix===void 0?"":` <span class="jtask-group-rdev-mark">${_H}</span>`,a=e.rdevPromptSuffix===void 0?"":`<div class="jtask-group-rdev-suffix">${gH} ${x(e.rdevPromptSuffix)}</div>`,u=SH(n,t.jprobTemplate),s=u.length===0?"":' <span class="jtask-group-differing-options">'+u.map(m=>`${x(wH(m,t.jprobTemplate))}: `+x(AH(e,m))).join("; ")+"</span>",c=r===null||r===""?"":`<div class="jtask-group-note">${x(r)}</div>`,l=[...e.contentHashes].sort().map(m=>`<code class="jtask-group-content-hash">${x(m)}</code>`).join(" "),d=t.provenanceFoldId??U$,p=t.foldOpenById[d]?" open":"";return`<div class="jtask-group-description"><div class="jtask-group-description-head">Task group <span class="jtask-group-name">${x(e.jtaskGroupId)}</span>${i}${o}${s}</div>`+c+a+`<details id="${x(d)}" class="hir-fold ${_t} jtask-group-provenance-fold"${p}><summary>${mH}</summary><div class="hir-fold-body">${hH} ${l}</div></details></div>`}const x2="calc-response-type-toggle",B2="calc-control-caption",$H="yours-fixfree-radio";function V$(e,n){return e==="Estimate"&&n.has_cparams()}const W$="data-estimate-query-mode",Vh="mode-radio-btn",TH={plainnum:"fix",plaincode:"free"};function X$(e){const n=p2.map(t=>`<button class="${Vh}${t===e?" active":""}" ${W$}="${t}">${TH[t]}</button>`);return`<div class="mode-radio ${$H}">${n.join("")}</div>`}function IH(e){const n=e.getAttribute(W$);return p2.find(t=>t===n)??null}function LH(e,n,t,r){const i=Xr(r.ui,{presetData:t}).kind==="methodical";let o="";V$(r.ui.interactionMode,n)&&(o+=`<div class="calculator-header-controls">${X$(r.ui.estimateQueryMode)}</div>`),o+=`<div id="${x2}"></div>`;const a=i?$n(r.ui,t):null;a!==null&&bn(a)&&(o+=RH(n,t,r,a)),e.innerHTML=o}function RH(e,n,t,r){const i=G$(n),o=i.find(a=>a.jtaskGroupId===r.jtask_group_id);return o===void 0?"":j$(o,i,{jprobTemplate:e,jtaskHashGroups:n.jtaskHashGroups,foldOpenById:t.ui.foldOpenById})}function CH(e,n,t,r){var p;if(r.ui.interactionMode==="Estimate")return e.innerHTML="",!1;const i=Mn(r,t);if(!i)return e.innerHTML='<div style="color: #888; font-size: 13px;">No data.</div>',!1;const o=Qn(r,t),a=n.svar_entries().map(m=>m.bareName),u=a.length,s=jF(i,o,a),c=s.length;if(c===0)return e.innerHTML='<div style="color: #888; font-size: 13px;">No data for this mode.</div>',!1;const l=c>1;let d='<div class="sample-grid">';for(let m=0;m<c;m++){d+='<div class="sample-col">',l&&(d+=`<div class="sample-col-header">Sample ${m+1}</div>`);for(let f=0;f<u;f++){const h=((p=s[m])==null?void 0:p[f])??"";d+=`<div class="sample-cell">${x(h)}</div>`}d+="</div>"}return d+="</div>",e.innerHTML=d,l}const K$="plot-target-controls",Wh="plot-target-kind-radio",Y$="plot-formula-select",J$="plot-raw-response-select",z$="Formula";function OH(e){return e.startsWith("form:")?e.slice(5):e}function qu(e,n,t){return e.form.filter(r=>Aw(r,n)).map(r=>{const i=(t==null?void 0:t[r.id])??null;return{kind:"formula",id:r.id,bareId:OH(r.id),valueRange:(i==null?void 0:i.valueRange)??Lt(r),isConclusion:r.id===e.conclusion_form_or_none(),formEntry:i}})}function Q$(e){return e.svar_entries().map(({bareName:n,decl:t})=>({kind:"raw_response",bareName:n,valueRange:Lt(t),isConclusion:!1}))}function H2(e,n,t,r){const i=qu(e,t,r);if(i.length===0)return null;const o=e.conclusion_form_or_none(),a=n.ui.plotFormulaId||o;return i.find(u=>u.id===a)??i.find(u=>u.id===o)??i[0]}function Z$(e,n,t,r){const i=Q$(e);return n.ui.plotTargetKind==="raw_response"&&i.length>0?i.find(o=>o.bareName===n.ui.plotRawResponseName)??i[0]:H2(e,n,t,r)??i[0]??null}function eT(e,n){let t=`<select class="${Y$}" aria-label="Plot formula">`;for(const r of e)t+=`<option value="${K(r.id)}"${r.id===n?" selected":""}>${x(r.bareId)}</option>`;return t+="</select>",t}function nT(e,n,t,r,i){var d;const o=qu(e,t,i),a=Q$(e);if(o.length===0&&a.length===0)return"";const u=(r==null?void 0:r.kind)??"formula",s=(r==null?void 0:r.kind)==="formula"?r.id:n.ui.plotFormulaId||e.conclusion_form_or_none(),c=(r==null?void 0:r.kind)==="raw_response"?r.bareName:n.ui.plotRawResponseName||(((d=a[0])==null?void 0:d.bareName)??"");let l=`<div class="${K$}">`;if(e.form.length>0&&(l+='<div class="plot-target-kind">',l+=`<label><input type="radio" name="plot-target-kind" class="${Wh}" value="formula"${u==="formula"?" checked":""}${o.length===0?" disabled":""}> formulas</label>`,l+=`<label><input type="radio" name="plot-target-kind" class="${Wh}" value="raw_response"${u==="raw_response"?" checked":""}${a.length===0?" disabled":""}> raw responses</label>`,l+="</div>"),u==="formula")o.length>1?l+=eT(o,s):o.length===1&&(l+=`<span class="plot-target-single">${x(o[0].bareId)}</span>`);else if(a.length>1){l+=`<select class="${J$}" aria-label="Plot raw response">`;for(const p of a)l+=`<option value="${K(p.bareName)}"${p.bareName===c?" selected":""}>${x(p.bareName)}</option>`;l+="</select>"}else a.length===1&&(l+=`<span class="plot-target-single">${x(a[0].bareName)}</span>`);return l+="</div>",l}function tT(e,n){return qu(e,n).length>=2}function NH(e,n,t,r){if(!tT(e,n))return"";const i=qu(e,n,r);return`<div class="${K$}"><label><span class="${B2}">${x(z$)}</span> `+eT(i,(t==null?void 0:t.id)??null)+"</label></div>"}function So(e,n,t){if(e.kind==="formula"&&e.isConclusion){const a=pH(n,t);if(a!==null)return a}let r,i;if(e.kind==="raw_response")r=`svar:${e.bareName}`,i=e.bareName;else{const a=n.form.find(u=>u.id===e.id);if(!a)throw new Error(`Plot formula ${e.id} is not in the template`);r=$w(e.id,a.sexpr),i=e.bareId}const o=Tw(r);return nt(n.get_display_expr(o)??i,t)}function rt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}/**
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
*/var Xs,Xg;function kH(){if(Xg)return Xs;Xg=1;var e=typeof Object.defineProperty=="function"?Object.defineProperty:null;return Xs=e,Xs}/**
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
*/var Ks,Kg;function MH(){if(Kg)return Ks;Kg=1;var e=kH();function n(){try{return e({},"x",{}),!0}catch{return!1}}return Ks=n,Ks}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ys,Yg;function PH(){if(Yg)return Ys;Yg=1;var e=Object.defineProperty;return Ys=e,Ys}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Js,Jg;function rT(){if(Jg)return Js;Jg=1;function e(n){return typeof n=="number"}return Js=e,Js}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zs,zg;function iT(){if(zg)return zs;zg=1;function e(r){return r[0]==="-"}function n(r){var i="",o;for(o=0;o<r;o++)i+="0";return i}function t(r,i,o){var a=!1,u=i-r.length;return u<0||(e(r)&&(a=!0,r=r.substr(1)),r=o?r+n(u):n(u)+r,a&&(r="-"+r)),r}return zs=t,zs}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qs,Qg;function DH(){if(Qg)return Qs;Qg=1;var e=rT(),n=iT(),t=String.prototype.toLowerCase,r=String.prototype.toUpperCase;function i(o){var a,u,s;switch(o.specifier){case"b":a=2;break;case"o":a=8;break;case"x":case"X":a=16;break;case"d":case"i":case"u":default:a=10;break}if(u=o.arg,s=parseInt(u,10),!isFinite(s)){if(!e(u))throw new Error("invalid integer. Value: "+u);s=0}return s<0&&(o.specifier==="u"||a!==10)&&(s=4294967295+s+1),s<0?(u=(-s).toString(a),o.precision&&(u=n(u,o.precision,o.padRight)),u="-"+u):(u=s.toString(a),!s&&!o.precision?u="":o.precision&&(u=n(u,o.precision,o.padRight)),o.sign&&(u=o.sign+u)),a===16&&(o.alternate&&(u="0x"+u),u=o.specifier===r.call(o.specifier)?r.call(u):t.call(u)),a===8&&o.alternate&&u.charAt(0)!=="0"&&(u="0"+u),u}return Qs=i,Qs}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zs,Zg;function FH(){if(Zg)return Zs;Zg=1;function e(n){return typeof n=="string"}return Zs=e,Zs}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ec,eb;function qH(){if(eb)return ec;eb=1;var e=Math.abs,n=String.prototype.toLowerCase,t=String.prototype.toUpperCase,r=String.prototype.replace,i=/e\+(\d)$/,o=/e-(\d)$/,a=/^(\d+)$/,u=/^(\d+)e/,s=/\.0$/,c=/\.0*e/,l=/(\..*[^0])0*e/;function d(p,m){var f,h;switch(m.specifier){case"e":case"E":h=p.toExponential(m.precision);break;case"f":case"F":h=p.toFixed(m.precision);break;case"g":case"G":e(p)<1e-4?(f=m.precision,f>0&&(f-=1),h=p.toExponential(f)):h=p.toPrecision(m.precision),m.alternate||(h=r.call(h,l,"$1e"),h=r.call(h,c,"e"),h=r.call(h,s,""));break;default:throw new Error("invalid double notation. Value: "+m.specifier)}return h=r.call(h,i,"e+0$1"),h=r.call(h,o,"e-0$1"),m.alternate&&(h=r.call(h,a,"$1."),h=r.call(h,u,"$1.e")),p>=0&&m.sign&&(h=m.sign+h),h=m.specifier===t.call(m.specifier)?t.call(h):n.call(h),h}return ec=d,ec}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nc,nb;function xH(){if(nb)return nc;nb=1;function e(t){var r="",i;for(i=0;i<t;i++)r+=" ";return r}function n(t,r,i){var o=r-t.length;return o<0||(t=i?t+e(o):e(o)+t),t}return nc=n,nc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tc,tb;function BH(){if(tb)return tc;tb=1;var e=DH(),n=FH(),t=rT(),r=qH(),i=xH(),o=iT(),a=String.fromCharCode,u=Array.isArray;function s(d){return d!==d}function c(d){var p={};return p.specifier=d.specifier,p.precision=d.precision===void 0?1:d.precision,p.width=d.width,p.flags=d.flags||"",p.mapping=d.mapping,p}function l(d){var p,m,f,h,v,_,g,b,y,E;if(!u(d))throw new TypeError("invalid argument. First argument must be an array. Value: `"+d+"`.");for(_="",g=1,y=0;y<d.length;y++)if(f=d[y],n(f))_+=f;else{if(p=f.precision!==void 0,f=c(f),!f.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+y+"`. Value: `"+f+"`.");for(f.mapping&&(g=f.mapping),m=f.flags,E=0;E<m.length;E++)switch(h=m.charAt(E),h){case" ":f.sign=" ";break;case"+":f.sign="+";break;case"-":f.padRight=!0,f.padZeros=!1;break;case"0":f.padZeros=m.indexOf("-")<0;break;case"#":f.alternate=!0;break;default:throw new Error("invalid flag: "+h)}if(f.width==="*"){if(f.width=parseInt(arguments[g],10),g+=1,s(f.width))throw new TypeError("the argument for * width at position "+g+" is not a number. Value: `"+f.width+"`.");f.width<0&&(f.padRight=!0,f.width=-f.width)}if(p&&f.precision==="*"){if(f.precision=parseInt(arguments[g],10),g+=1,s(f.precision))throw new TypeError("the argument for * precision at position "+g+" is not a number. Value: `"+f.precision+"`.");f.precision<0&&(f.precision=1,p=!1)}switch(f.arg=arguments[g],f.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":p&&(f.padZeros=!1),f.arg=e(f);break;case"s":f.maxWidth=p?f.precision:-1,f.arg=String(f.arg);break;case"c":if(!s(f.arg)){if(v=parseInt(f.arg,10),v<0||v>127)throw new Error("invalid character code. Value: "+f.arg);f.arg=s(v)?String(f.arg):a(v)}break;case"e":case"E":case"f":case"F":case"g":case"G":if(p||(f.precision=6),b=parseFloat(f.arg),!isFinite(b)){if(!t(f.arg))throw new Error("invalid floating-point number. Value: "+_);b=f.arg,f.padZeros=!1}f.arg=r(b,f);break;default:throw new Error("invalid specifier: "+f.specifier)}f.maxWidth>=0&&f.arg.length>f.maxWidth&&(f.arg=f.arg.substring(0,f.maxWidth)),f.padZeros?f.arg=o(f.arg,f.width||f.precision,f.padRight):f.width&&(f.arg=i(f.arg,f.width,f.padRight)),_+=f.arg||"",g+=1}return _}return tc=l,tc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rc,rb;function HH(){if(rb)return rc;rb=1;var e=BH();return rc=e,rc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ic,ib;function UH(){if(ib)return ic;ib=1;var e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function n(r){var i={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(i.precision="1"),i}function t(r){var i,o,a,u;for(o=[],u=0,a=e.exec(r);a;)i=r.slice(u,e.lastIndex-a[0].length),i.length&&o.push(i),a[6]==="%"?o.push("%"):o.push(n(a)),u=e.lastIndex,a=e.exec(r);return i=r.slice(u),i.length&&o.push(i),o}return ic=t,ic}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oc,ob;function GH(){if(ob)return oc;ob=1;var e=UH();return oc=e,oc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ac,ab;function jH(){if(ab)return ac;ab=1;function e(n){return typeof n=="string"}return ac=e,ac}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uc,ub;function VH(){if(ub)return uc;ub=1;var e=HH(),n=GH(),t=jH();function r(i){var o,a;if(!t(i))throw new TypeError(r("invalid argument. First argument must be a string. Value: `%s`.",i));for(o=[n(i)],a=1;a<arguments.length;a++)o.push(arguments[a]);return e.apply(null,o)}return uc=r,uc}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sc,sb;function WH(){if(sb)return sc;sb=1;var e=VH();return sc=e,sc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cc,cb;function XH(){if(cb)return cc;cb=1;var e=WH(),n=Object.prototype,t=n.toString,r=n.__defineGetter__,i=n.__defineSetter__,o=n.__lookupGetter__,a=n.__lookupSetter__;function u(s,c,l){var d,p,m,f;if(typeof s!="object"||s===null||t.call(s)==="[object Array]")throw new TypeError(e("invalid argument. First argument must be an object. Value: `%s`.",s));if(typeof l!="object"||l===null||t.call(l)==="[object Array]")throw new TypeError(e("invalid argument. Property descriptor must be an object. Value: `%s`.",l));if(p="value"in l,p&&(o.call(s,c)||a.call(s,c)?(d=s.__proto__,s.__proto__=n,delete s[c],s[c]=l.value,s.__proto__=d):s[c]=l.value),m="get"in l,f="set"in l,p&&(m||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return m&&r&&r.call(s,c,l.get),f&&i&&i.call(s,c,l.set),s}return cc=u,cc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lc,lb;function KH(){if(lb)return lc;lb=1;var e=MH(),n=PH(),t=XH(),r;return e()?r=n:r=t,lc=r,lc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dc,db;function YH(){if(db)return dc;db=1;var e=KH();function n(t,r,i){e(t,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}return dc=n,dc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fc,fb;function rn(){if(fb)return fc;fb=1;var e=YH();return fc=e,fc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pc,pb;function JH(){if(pb)return pc;pb=1;function e(n){return n!==n}return pc=e,pc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mc,mb;function ue(){if(mb)return mc;mb=1;var e=JH();return mc=e,mc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hc,hb;function zH(){if(hb)return hc;hb=1;function e(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}return hc=e,hc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vc,vb;function QH(){if(vb)return vc;vb=1;var e=zH();return vc=e,vc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _c,_b;function ZH(){if(_b)return _c;_b=1;var e=QH(),n=e();function t(){return n&&typeof Symbol.toStringTag=="symbol"}return _c=t,_c}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gc,gb;function eU(){if(gb)return gc;gb=1;var e=ZH();return gc=e,gc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bc,bb;function oT(){if(bb)return bc;bb=1;var e=Object.prototype.toString;return bc=e,bc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yc,yb;function nU(){if(yb)return yc;yb=1;var e=oT();function n(t){return e.call(t)}return yc=n,yc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ec,Eb;function tU(){if(Eb)return Ec;Eb=1;var e=Object.prototype.hasOwnProperty;function n(t,r){return t==null?!1:e.call(t,r)}return Ec=n,Ec}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sc,Sb;function rU(){if(Sb)return Sc;Sb=1;var e=tU();return Sc=e,Sc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wc,wb;function iU(){if(wb)return wc;wb=1;var e=typeof Symbol=="function"?Symbol:void 0;return wc=e,wc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ac,Ab;function oU(){if(Ab)return Ac;Ab=1;var e=iU();return Ac=e,Ac}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $c,$b;function aU(){if($b)return $c;$b=1;var e=oU(),n=typeof e=="function"?e.toStringTag:"";return $c=n,$c}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tc,Tb;function uU(){if(Tb)return Tc;Tb=1;var e=rU(),n=aU(),t=oT();function r(i){var o,a,u;if(i==null)return t.call(i);a=i[n],o=e(i,n);try{i[n]=void 0}catch{return t.call(i)}return u=t.call(i),o?i[n]=a:delete i[n],u}return Tc=r,Tc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ic,Ib;function xu(){if(Ib)return Ic;Ib=1;var e=eU(),n=nU(),t=uU(),r;return e()?r=t:r=n,Ic=r,Ic}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lc,Lb;function sU(){if(Lb)return Lc;Lb=1;var e=xu(),n=typeof Uint32Array=="function";function t(r){return n&&r instanceof Uint32Array||e(r)==="[object Uint32Array]"}return Lc=t,Lc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rc,Rb;function cU(){if(Rb)return Rc;Rb=1;var e=sU();return Rc=e,Rc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cc,Cb;function lU(){if(Cb)return Cc;Cb=1;var e=4294967295;return Cc=e,Cc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Oc,Ob;function dU(){if(Ob)return Oc;Ob=1;var e=typeof Uint32Array=="function"?Uint32Array:null;return Oc=e,Oc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nc,Nb;function fU(){if(Nb)return Nc;Nb=1;var e=cU(),n=lU(),t=dU();function r(){var i,o;if(typeof t!="function")return!1;try{o=[1,3.14,-3.14,n+1,n+2],o=new t(o),i=e(o)&&o[0]===1&&o[1]===3&&o[2]===n-2&&o[3]===0&&o[4]===1}catch{i=!1}return i}return Nc=r,Nc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kc,kb;function pU(){if(kb)return kc;kb=1;var e=fU();return kc=e,kc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mc,Mb;function mU(){if(Mb)return Mc;Mb=1;var e=typeof Uint32Array=="function"?Uint32Array:void 0;return Mc=e,Mc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pc,Pb;function hU(){if(Pb)return Pc;Pb=1;function e(){throw new Error("not implemented")}return Pc=e,Pc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dc,Db;function Kr(){if(Db)return Dc;Db=1;var e=pU(),n=mU(),t=hU(),r;return e()?r=n:r=t,Dc=r,Dc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fc,Fb;function vU(){if(Fb)return Fc;Fb=1;var e=xu(),n=typeof Float64Array=="function";function t(r){return n&&r instanceof Float64Array||e(r)==="[object Float64Array]"}return Fc=t,Fc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qc,qb;function _U(){if(qb)return qc;qb=1;var e=vU();return qc=e,qc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xc,xb;function gU(){if(xb)return xc;xb=1;var e=typeof Float64Array=="function"?Float64Array:null;return xc=e,xc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bc,Bb;function bU(){if(Bb)return Bc;Bb=1;var e=_U(),n=gU();function t(){var r,i;if(typeof n!="function")return!1;try{i=new n([1,3.14,-3.14,NaN]),r=e(i)&&i[0]===1&&i[1]===3.14&&i[2]===-3.14&&i[3]!==i[3]}catch{r=!1}return r}return Bc=t,Bc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hc,Hb;function yU(){if(Hb)return Hc;Hb=1;var e=bU();return Hc=e,Hc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uc,Ub;function EU(){if(Ub)return Uc;Ub=1;var e=typeof Float64Array=="function"?Float64Array:void 0;return Uc=e,Uc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gc,Gb;function SU(){if(Gb)return Gc;Gb=1;function e(){throw new Error("not implemented")}return Gc=e,Gc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jc,jb;function Yr(){if(jb)return jc;jb=1;var e=yU(),n=EU(),t=SU(),r;return e()?r=n:r=t,jc=r,jc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vc,Vb;function wU(){if(Vb)return Vc;Vb=1;var e=xu(),n=typeof Uint8Array=="function";function t(r){return n&&r instanceof Uint8Array||e(r)==="[object Uint8Array]"}return Vc=t,Vc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wc,Wb;function AU(){if(Wb)return Wc;Wb=1;var e=wU();return Wc=e,Wc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xc,Xb;function $U(){if(Xb)return Xc;Xb=1;var e=255;return Xc=e,Xc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kc,Kb;function TU(){if(Kb)return Kc;Kb=1;var e=typeof Uint8Array=="function"?Uint8Array:null;return Kc=e,Kc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yc,Yb;function IU(){if(Yb)return Yc;Yb=1;var e=AU(),n=$U(),t=TU();function r(){var i,o;if(typeof t!="function")return!1;try{o=[1,3.14,-3.14,n+1,n+2],o=new t(o),i=e(o)&&o[0]===1&&o[1]===3&&o[2]===n-2&&o[3]===0&&o[4]===1}catch{i=!1}return i}return Yc=r,Yc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jc,Jb;function LU(){if(Jb)return Jc;Jb=1;var e=IU();return Jc=e,Jc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zc,zb;function RU(){if(zb)return zc;zb=1;var e=typeof Uint8Array=="function"?Uint8Array:void 0;return zc=e,zc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qc,Qb;function CU(){if(Qb)return Qc;Qb=1;function e(){throw new Error("not implemented")}return Qc=e,Qc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zc,Zb;function OU(){if(Zb)return Zc;Zb=1;var e=LU(),n=RU(),t=CU(),r;return e()?r=n:r=t,Zc=r,Zc}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var el,e6;function NU(){if(e6)return el;e6=1;var e=xu(),n=typeof Uint16Array=="function";function t(r){return n&&r instanceof Uint16Array||e(r)==="[object Uint16Array]"}return el=t,el}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nl,n6;function kU(){if(n6)return nl;n6=1;var e=NU();return nl=e,nl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tl,t6;function MU(){if(t6)return tl;t6=1;var e=65535;return tl=e,tl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rl,r6;function PU(){if(r6)return rl;r6=1;var e=typeof Uint16Array=="function"?Uint16Array:null;return rl=e,rl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var il,i6;function DU(){if(i6)return il;i6=1;var e=kU(),n=MU(),t=PU();function r(){var i,o;if(typeof t!="function")return!1;try{o=[1,3.14,-3.14,n+1,n+2],o=new t(o),i=e(o)&&o[0]===1&&o[1]===3&&o[2]===n-2&&o[3]===0&&o[4]===1}catch{i=!1}return i}return il=r,il}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ol,o6;function FU(){if(o6)return ol;o6=1;var e=DU();return ol=e,ol}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var al,a6;function qU(){if(a6)return al;a6=1;var e=typeof Uint16Array=="function"?Uint16Array:void 0;return al=e,al}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ul,u6;function xU(){if(u6)return ul;u6=1;function e(){throw new Error("not implemented")}return ul=e,ul}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sl,s6;function BU(){if(s6)return sl;s6=1;var e=FU(),n=qU(),t=xU(),r;return e()?r=n:r=t,sl=r,sl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cl,c6;function HU(){if(c6)return cl;c6=1;var e=OU(),n=BU(),t={uint16:n,uint8:e};return cl=t,cl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ll,l6;function UU(){if(l6)return ll;l6=1;var e=HU(),n;function t(){var r,i;return r=new e.uint16(1),r[0]=4660,i=new e.uint8(r.buffer),i[0]===52}return n=t(),ll=n,ll}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dl,d6;function Jr(){if(d6)return dl;d6=1;var e=UU();return dl=e,dl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fl,f6;function GU(){if(f6)return fl;f6=1;var e=Jr(),n;return e===!0?n=1:n=0,fl=n,fl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pl,p6;function jU(){if(p6)return pl;p6=1;var e=Kr(),n=Yr(),t=GU(),r=new n(1),i=new e(r.buffer);function o(a){return r[0]=a,i[t]}return pl=o,pl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ml,m6;function Sn(){if(m6)return ml;m6=1;var e=jU();return ml=e,ml}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hl,h6;function VU(){if(h6)return hl;h6=1;var e=Jr(),n;return e===!0?n=1:n=0,hl=n,hl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vl,v6;function WU(){if(v6)return vl;v6=1;var e=Kr(),n=Yr(),t=VU(),r=new n(1),i=new e(r.buffer);function o(a,u){return r[0]=a,i[t]=u>>>0,r[0]}return vl=o,vl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _l,_6;function wo(){if(_6)return _l;_6=1;var e=WU();return _l=e,_l}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gl,g6;function XU(){if(g6)return gl;g6=1;var e=Jr(),n,t,r;return e===!0?(t=1,r=0):(t=0,r=1),n={HIGH:t,LOW:r},gl=n,gl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bl,b6;function KU(){if(b6)return bl;b6=1;var e=Kr(),n=Yr(),t=XU(),r=new n(1),i=new e(r.buffer),o=t.HIGH,a=t.LOW;function u(s,c){return i[o]=s,i[a]=c,r[0]}return bl=u,bl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yl,y6;function Bu(){if(y6)return yl;y6=1;var e=KU();return yl=e,yl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var El,E6;function Re(){if(E6)return El;E6=1;var e=Number.POSITIVE_INFINITY;return El=e,El}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sl,S6;function YU(){return S6||(S6=1,Sl=Number),Sl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wl,w6;function JU(){if(w6)return wl;w6=1;var e=YU();return wl=e,wl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Al,A6;function on(){if(A6)return Al;A6=1;var e=JU(),n=e.NEGATIVE_INFINITY;return Al=n,Al}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $l,$6;function ir(){if($6)return $l;$6=1;var e=1023;return $l=e,$l}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tl,T6;function zU(){if(T6)return Tl;T6=1;var e=.34657359027997264;return Tl=e,Tl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Il,I6;function QU(){if(I6)return Il;I6=1;function e(n){return n===0?-.03333333333333313:-.03333333333333313+n*(.0015873015872548146+n*(-793650757867488e-19+n*(4008217827329362e-21+n*-20109921818362437e-23)))}return Il=e,Il}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ll,L6;function ZU(){if(L6)return Ll;L6=1;var e=ue(),n=Sn(),t=wo(),r=Bu(),i=Re(),o=on(),a=ir(),u=zU(),s=QU(),c=709.782712893384,l=.6931471803691238,d=19082149292705877e-26,p=1.4426950408889634,m=38.816242111356935,f=1.0397207708399179;function h(v){var _,g,b,y,E,$,T,C,L,A,w,S,I;if(v===i||e(v))return v;if(v===o)return-1;if(v===0)return v;if(v<0?(b=!0,C=-v):(b=!1,C=v),C>=m){if(b)return-1;if(C>=c)return i}if($=n(C)|0,C>u)C<f?b?(y=v+l,E=-d,I=-1):(y=v-l,E=d,I=1):(b?I=p*v-.5:I=p*v+.5,I|=0,w=I,y=v-w*l,E=w*d),v=y-E,A=y-v-E;else{if($<1016070144)return v;I=0}return _=.5*v,L=v*_,T=1+L*s(L),w=3-T*_,S=L*((T-w)/(6-v*w)),I===0?v-(v*S-L):(g=r(a+I<<20,0),S=v*(S-A)-A,S-=L,I===-1?.5*(v-S)-.5:I===1?v<-.25?-2*(S-(v+.5)):1+2*(v-S):I<=-2||I>56?(C=1-(S-v),I===1024?(y=n(C)+(I<<20)|0,C=t(C,y)):C*=g,C-1):(w=1,I<20?(y=1072693248-(2097152>>I)|0,w=t(w,y),C=w-(S-v)):(y=a-I<<20|0,w=t(w,y),C=v-(S+w),C+=1),C*=g,C))}return Ll=h,Ll}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rl,R6;function zr(){if(R6)return Rl;R6=1;var e=ZU();return Rl=e,Rl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cl,C6;function eG(){if(C6)return Cl;C6=1;var e=Math.floor;return Cl=e,Cl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ol,O6;function it(){if(O6)return Ol;O6=1;var e=eG();return Ol=e,Ol}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nl,N6;function nG(){if(N6)return Nl;N6=1;function e(n){return n===0?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+n*.14798198605116586)))))}return Nl=e,Nl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var kl,k6;function tG(){if(k6)return kl;k6=1;var e=ue(),n=Sn(),t=wo(),r=Re(),i=on(),o=ir(),a=nG(),u=.6931471803691238,s=19082149292705877e-26,c=.41421356237309503,l=-.2928932188134525,d=1862645149230957e-24,p=5551115123125783e-32,m=9007199254740992,f=.6666666666666666;function h(v){var _,g,b,y,E,$,T,C,L,A;if(v<-1||e(v))return NaN;if(v===-1)return i;if(v===r||v===0)return v;if(v<0?b=-v:b=v,A=1,b<c){if(b<d)return b<p?v:v-v*v*.5;v>l&&(A=0,y=v,g=1)}return A!==0&&(b<m?(L=1+v,g=n(L),A=(g>>20)-o,A>0?E=1-(L-v):E=v-(L-1),E/=L):(L=v,g=n(L),A=(g>>20)-o,E=0),g&=1048575,g<434334?L=t(L,g|1072693248):(A+=1,L=t(L,g|1071644672),g=1048576-g>>2),y=L-1),_=.5*y*y,g===0?y===0?(E+=A*s,A*u+E):(C=_*(1-f*y),A*u-(C-(A*s+E)-y)):($=y/(2+y),T=$*$,C=T*a(T),A===0?y-(_-$*(_+C)):A*u-(_-($*(_+C)+(A*s+E))-y))}return kl=h,kl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ml,M6;function wn(){if(M6)return Ml;M6=1;var e=tG();return Ml=e,Ml}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pl,P6;function rG(){if(P6)return Pl;P6=1;var e=Math.sqrt;return Pl=e,Pl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dl,D6;function be(){if(D6)return Dl;D6=1;var e=rG();return Dl=e,Dl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fl,F6;function aT(){if(F6)return Fl;F6=1;var e=.7853981633974483;return Fl=e,Fl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ql,q6;function iG(){if(q6)return ql;q6=1;function e(n){var t,r,i;return n===0?.16666666666666713:(n<0?t=-n:t=n,t<=1?(r=-8.198089802484825+n*(19.562619833175948+n*(-16.262479672107002+n*(5.444622390564711+n*(-.6019598008014124+n*.004253011369004428)))),i=-49.18853881490881+n*(139.51056146574857+n*(-147.1791292232726+n*(70.49610280856842+n*(-14.740913729888538+n*1))))):(n=1/n,r=.004253011369004428+n*(-.6019598008014124+n*(5.444622390564711+n*(-16.262479672107002+n*(19.562619833175948+n*-8.198089802484825)))),i=1+n*(-14.740913729888538+n*(70.49610280856842+n*(-147.1791292232726+n*(139.51056146574857+n*-49.18853881490881))))),r/i)}return ql=e,ql}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xl,x6;function oG(){if(x6)return xl;x6=1;function e(n){var t,r,i;return n===0?.08333333333333809:(n<0?t=-n:t=n,t<=1?(r=28.536655482610616+n*(-25.56901049652825+n*(6.968710824104713+n*(-.5634242780008963+n*.002967721961301243))),i=342.43986579130785+n*(-383.8770957603691+n*(147.0656354026815+n*(-21.947795316429207+n*1)))):(n=1/n,r=.002967721961301243+n*(-.5634242780008963+n*(6.968710824104713+n*(-25.56901049652825+n*28.536655482610616))),i=1+n*(-21.947795316429207+n*(147.0656354026815+n*(-383.8770957603691+n*342.43986579130785)))),r/i)}return xl=e,xl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Bl,B6;function aG(){if(B6)return Bl;B6=1;var e=ue(),n=be(),t=aT(),r=iG(),i=oG(),o=6123233995736766e-32;function a(u){var s,c,l,d,p;if(e(u))return NaN;if(u>0?l=u:(s=!0,l=-u),l>1)return NaN;if(l>.625)c=1-l,d=c*i(c),c=n(c+c),p=t-c,c=c*d-o,p-=c,p+=t;else{if(l<1e-8)return u;c=l*l,p=c*r(c),p=l*p+l}return s?-p:p}return Bl=a,Bl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hl,H6;function U2(){if(H6)return Hl;H6=1;var e=aG();return Hl=e,Hl}/**
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
*/var Ul,U6;function uG(){if(U6)return Ul;U6=1;function e(n){return Math.abs(n)}return Ul=e,Ul}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gl,G6;function ye(){if(G6)return Gl;G6=1;var e=uG();return Gl=e,Gl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jl,j6;function sG(){if(j6)return jl;j6=1;var e=Math.ceil;return jl=e,jl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vl,V6;function cG(){if(V6)return Vl;V6=1;var e=sG();return Vl=e,Vl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wl,W6;function lG(){if(W6)return Wl;W6=1;var e=it(),n=cG();function t(r){return r<0?n(r):e(r)}return Wl=t,Wl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xl,X6;function G2(){if(X6)return Xl;X6=1;var e=lG();return Xl=e,Xl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kl,K6;function dG(){if(K6)return Kl;K6=1;var e=1023;return Kl=e,Kl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yl,Y6;function fG(){if(Y6)return Yl;Y6=1;var e=-1023;return Yl=e,Yl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jl,J6;function pG(){if(J6)return Jl;J6=1;var e=-1074;return Jl=e,Jl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zl,z6;function mG(){if(z6)return zl;z6=1;var e=Re(),n=on();function t(r){return r===e||r===n}return zl=t,zl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ql,Q6;function Qr(){if(Q6)return Ql;Q6=1;var e=mG();return Ql=e,Ql}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zl,Z6;function hG(){if(Z6)return Zl;Z6=1;var e=2147483648;return Zl=e,Zl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e0,e4;function or(){if(e4)return e0;e4=1;var e=2147483647;return e0=e,e0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n0,n4;function vG(){if(n4)return n0;n4=1;var e=Jr(),n,t,r;return e===!0?(t=1,r=0):(t=0,r=1),n={HIGH:t,LOW:r},n0=n,n0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t0,t4;function uT(){if(t4)return t0;t4=1;var e=Kr(),n=Yr(),t=vG(),r=new n(1),i=new e(r.buffer),o=t.HIGH,a=t.LOW;function u(s,c,l,d){return r[0]=s,c[d]=i[o],c[d+l]=i[a],c}return t0=u,t0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r0,r4;function _G(){if(r4)return r0;r4=1;var e=uT();function n(t){return e(t,[0,0],1,0)}return r0=n,r0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i0,i4;function j2(){if(i4)return i0;i4=1;var e=rn(),n=_G(),t=uT();return e(n,"assign",t),i0=n,i0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o0,o4;function gG(){if(o4)return o0;o4=1;var e=hG(),n=or(),t=j2(),r=Sn(),i=Bu(),o=[0,0];function a(u,s){var c,l;return t.assign(u,o,1,0),c=o[0],c&=n,l=r(s),l&=e,c|=l,i(c,o[1])}return o0=a,o0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a0,a4;function V2(){if(a4)return a0;a4=1;var e=gG();return a0=e,a0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u0,u4;function ar(){if(u4)return u0;u4=1;var e=22250738585072014e-324;return u0=e,u0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s0,s4;function sT(){if(s4)return s0;s4=1;var e=ar(),n=Qr(),t=ue(),r=ye(),i=4503599627370496;function o(a,u,s,c){return t(a)||n(a)?(u[c]=a,u[c+s]=0,u):a!==0&&r(a)<e?(u[c]=a*i,u[c+s]=-52,u):(u[c]=a,u[c+s]=0,u)}return s0=o,s0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c0,c4;function bG(){if(c4)return c0;c4=1;var e=sT();function n(t){return e(t,[0,0],1,0)}return c0=n,c0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l0,l4;function yG(){if(l4)return l0;l4=1;var e=rn(),n=bG(),t=sT();return e(n,"assign",t),l0=n,l0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d0,d4;function Hu(){if(d4)return d0;d4=1;var e=2146435072;return d0=e,d0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f0,f4;function EG(){if(f4)return f0;f4=1;var e=Sn(),n=Hu(),t=ir();function r(i){var o=e(i);return o=(o&n)>>>20,o-t|0}return f0=r,f0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p0,p4;function SG(){if(p4)return p0;p4=1;var e=EG();return p0=e,p0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m0,m4;function wG(){if(m4)return m0;m4=1;var e=Re(),n=on(),t=ir(),r=dG(),i=fG(),o=pG(),a=ue(),u=Qr(),s=V2(),c=yG().assign,l=SG(),d=j2(),p=Bu(),m=2220446049250313e-31,f=2148532223,h=[0,0],v=[0,0];function _(g,b){var y,E;return b===0||g===0||a(g)||u(g)?g:(c(g,h,1,0),g=h[0],b+=h[1],b+=l(g),b<o?s(0,g):b>r?g<0?n:e:(b<=i?(b+=52,E=m):E=1,d.assign(g,v,1,0),y=v[0],y&=f,y|=b+t<<20,E*p(y,v[1])))}return m0=_,m0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h0,h4;function Zr(){if(h4)return h0;h4=1;var e=wG();return h0=e,h0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v0,v4;function AG(){if(v4)return v0;v4=1;function e(n){return n===0?.16666666666666602:.16666666666666602+n*(-.0027777777777015593+n*(6613756321437934e-20+n*(-16533902205465252e-22+n*41381367970572385e-24)))}return v0=e,v0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var _0,_4;function $G(){if(_4)return _0;_4=1;var e=Zr(),n=AG();function t(r,i,o){var a,u,s,c;return a=r-i,u=a*a,s=a-u*n(u),c=1-(i-a*s/(2-s)-r),e(c,o)}return _0=t,_0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var g0,g4;function TG(){if(g4)return g0;g4=1;var e=ue(),n=G2(),t=on(),r=Re(),i=$G(),o=.6931471803691238,a=19082149292705877e-26,u=1.4426950408889634,s=709.782712893384,c=-745.1332191019411,l=1/(1<<28),d=-l;function p(m){var f,h,v;return e(m)||m===r?m:m===t?0:m>s?r:m<c?0:m>d&&m<l?1+m:(m<0?v=n(u*m-.5):v=n(u*m+.5),f=m-v*o,h=v*a,i(f,h,v))}return g0=p,g0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b0,b4;function Ce(){if(b4)return b0;b4=1;var e=TG();return b0=e,b0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y0,y4;function IG(){if(y4)return y0;y4=1;var e=it();function n(t){return e(t)===t}return y0=n,y0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E0,E4;function ei(){if(E4)return E0;E4=1;var e=IG();return E0=e,E0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S0,S4;function LG(){if(S4)return S0;S4=1;var e=ei();function n(t){return e(t/2)}return S0=n,S0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w0,w4;function RG(){if(w4)return w0;w4=1;var e=LG();return w0=e,w0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A0,A4;function CG(){if(A4)return A0;A4=1;var e=RG();function n(t){return t>0?e(t-1):e(t+1)}return A0=n,A0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $0,$4;function W2(){if($4)return $0;$4=1;var e=CG();return $0=e,$0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T0,T4;function OG(){if(T4)return T0;T4=1;var e=Jr(),n;return e===!0?n=0:n=1,T0=n,T0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I0,I4;function NG(){if(I4)return I0;I4=1;var e=Kr(),n=Yr(),t=OG(),r=new n(1),i=new e(r.buffer);function o(a,u){return r[0]=a,i[t]=u>>>0,r[0]}return I0=o,I0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L0,L4;function Ao(){if(L4)return L0;L4=1;var e=NG();return L0=e,L0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R0,R4;function kG(){if(R4)return R0;R4=1;function e(n){return n|0}return R0=e,R0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C0,C4;function cT(){if(C4)return C0;C4=1;var e=kG();return C0=e,C0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var O0,O4;function MG(){if(O4)return O0;O4=1;var e=W2(),n=V2(),t=on(),r=Re();function i(o,a){return a===t?r:a===r?0:a>0?e(a)?o:0:e(a)?n(r,o):r}return O0=i,O0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var N0,N4;function PG(){if(N4)return N0;N4=1;var e=or(),n=Sn(),t=1072693247,r=1e300,i=1e-300;function o(a,u){var s,c;return c=n(a),s=c&e,s<=t?u<0?r*r:i*i:u>0?r*r:i*i}return N0=o,N0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k0,k4;function DG(){if(k4)return k0;k4=1;var e=ye(),n=Re();function t(r,i){return r===-1?(r-r)/(r-r):r===1?1:e(r)<1==(i===n)?0:n}return k0=t,k0}/**
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
*/var M0,M4;function lT(){if(M4)return M0;M4=1;var e=20;return M0=e,M0}/**
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
*/var P0,P4;function FG(){if(P4)return P0;P4=1;function e(n){return n===0?.5999999999999946:.5999999999999946+n*(.4285714285785502+n*(.33333332981837743+n*(.272728123808534+n*(.23066074577556175+n*.20697501780033842))))}return P0=e,P0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var D0,D4;function qG(){if(D4)return D0;D4=1;var e=Sn(),n=Ao(),t=wo(),r=ir(),i=lT(),o=FG(),a=1048575,u=1048576,s=1072693248,c=536870912,l=524288,d=9007199254740992,p=.9617966939259756,m=.9617967009544373,f=-7028461650952758e-24,h=[1,1.5],v=[0,.5849624872207642],_=[0,1350039202129749e-23];function g(b,y,E){var $,T,C,L,A,w,S,I,R,P,k,B,D,q,M,Z,G,z,te,ae,j,Y;return ae=0,E<u&&(y*=d,ae-=53,E=e(y)),ae+=(E>>i)-r|0,j=E&a|0,E=j|s|0,j<=235662?Y=0:j<767610?Y=1:(Y=0,ae+=1,E-=u),y=t(y,E),I=h[Y],z=y-I,te=1/(y+I),T=z*te,L=n(T,0),$=(E>>1|c)+l,$+=Y<<18,w=t(0,$),S=y-(w-I),A=te*(z-L*w-L*S),C=T*T,G=C*C*o(C),G+=A*(L+T),C=L*L,w=3+C+G,w=n(w,0),S=G-(w-3-C),z=L*w,te=A*w+S*T,P=z+te,P=n(P,0),k=te-(P-z),B=m*P,D=f*P+k*p+_[Y],R=v[Y],Z=ae,q=B+D+R+Z,q=n(q,0),M=D-(q-Z-R-B),b[0]=q,b[1]=M,b}return D0=g,D0}/**
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
*/var F0,F4;function xG(){if(F4)return F0;F4=1;function e(n){return n===0?.5:.5+n*(-.3333333333333333+n*.25)}return F0=e,F0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var q0,q4;function BG(){if(q4)return q0;q4=1;var e=Ao(),n=xG(),t=1.4426950408889634,r=1.4426950216293335,i=19259629911266175e-24;function o(a,u){var s,c,l,d,p,m;return l=u-1,d=l*l*n(l),p=r*l,m=l*i-d*t,c=p+m,c=e(c,0),s=m-(c-p),a[0]=c,a[1]=s,a}return q0=o,q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x0,x4;function HG(){if(x4)return x0;x4=1;var e=.6931471805599453;return x0=e,x0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B0,B4;function dT(){if(B4)return B0;B4=1;var e=1048575;return B0=e,B0}/**
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
*/var H0,H4;function UG(){if(H4)return H0;H4=1;function e(n){return n===0?.16666666666666602:.16666666666666602+n*(-.0027777777777015593+n*(6613756321437934e-20+n*(-16533902205465252e-22+n*41381367970572385e-24)))}return H0=e,H0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var U0,U4;function GG(){if(U4)return U0;U4=1;var e=Sn(),n=wo(),t=Ao(),r=cT(),i=Zr(),o=HG(),a=ir(),u=or(),s=dT(),c=lT(),l=UG(),d=1048576,p=1071644672,m=.6931471824645996,f=-1904654299957768e-24;function h(v,_,g){var b,y,E,$,T,C,L,A,w,S,I;return S=v&u|0,I=(S>>c)-a|0,w=0,S>p&&(w=v+(d>>I+1)>>>0,I=((w&u)>>c)-a|0,b=(w&~(s>>I))>>>0,E=n(0,b),w=(w&s|d)>>c-I>>>0,v<0&&(w=-w),_-=E),E=g+_,E=t(E,0),T=E*m,C=(g-(E-_))*o+E*f,A=T+C,L=C-(A-T),E=A*A,y=A-E*l(E),$=A*y/(y-2)-(L+A*L),A=1-($-A),v=e(A),v=r(v),v+=w<<c>>>0,v>>c<=0?A=i(A,w):A=n(A,v),A}return U0=h,U0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var G0,G4;function jG(){if(G4)return G0;G4=1;var e=ue(),n=W2(),t=Qr(),r=ei(),i=be(),o=ye(),a=j2(),u=Ao(),s=cT(),c=on(),l=Re(),d=or(),p=MG(),m=PG(),f=DG(),h=qG(),v=BG(),_=GG(),g=1072693247,b=1105199104,y=1139802112,E=1083179008,$=1072693248,T=1083231232,C=3230714880,L=31,A=1e300,w=1e-300,S=8008566259537294e-32,I=[0,0],R=[0,0];function P(k,B){var D,q,M,Z,G,z,te,ae,j,Y,V,Ee,me,ne,se,$e;if(e(k)||e(B))return NaN;if(a.assign(B,I,1,0),z=I[0],te=I[1],te===0){if(B===0)return 1;if(B===1)return k;if(B===-1)return 1/k;if(B===.5)return i(k);if(B===-.5)return 1/i(k);if(B===2)return k*k;if(B===3)return k*k*k;if(B===4)return k*=k,k*k;if(t(B))return f(k,B)}if(a.assign(k,I,1,0),Z=I[0],G=I[1],G===0){if(Z===0)return p(k,B);if(k===1)return 1;if(k===-1&&n(B))return-1;if(t(k))return k===c?P(-0,-B):B<0?0:l}if(k<0&&r(B)===!1)return(k-k)/(k-k);if(M=o(k),D=Z&d|0,q=z&d|0,ae=Z>>>L|0,j=z>>>L|0,ae&&n(B)?ae=-1:ae=1,q>b){if(q>y)return m(k,B);if(D<g)return j===1?ae*A*A:ae*w*w;if(D>$)return j===0?ae*A*A:ae*w*w;me=v(R,M)}else me=h(R,M,D);if(Y=u(B,0),Ee=(B-Y)*me[0]+B*me[1],V=Y*me[0],ne=Ee+V,a.assign(ne,I,1,0),se=s(I[0]),$e=s(I[1]),se>=E){if((se-E|$e)!==0||Ee+S>ne-V)return ae*A*A}else if((se&d)>=T&&((se-C|$e)!==0||Ee<=ne-V))return ae*w*w;return ne=_(se,V,Ee),ae*ne}return G0=P,G0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j0,j4;function Oe(){if(j4)return j0;j4=1;var e=jG();return j0=e,j0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V0,V4;function ni(){if(V4)return V0;V4=1;var e=2.718281828459045;return V0=e,V0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W0,W4;function ot(){if(W4)return W0;W4=1;var e=2220446049250313e-31;return W0=e,W0}/**
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
*/var X0,X4;function VG(){if(X4)return X0;X4=1;function e(n){var t,r,i;return n===0?1/0:(n<0?t=-n:t=n,t<=1?(r=709811.662581658+n*(679979.8474157227+n*(293136.7857211597+n*(74887.54032914672+n*(12555.290582413863+n*(1443.4299244417066+n*(115.24194596137347+n*(6.309239205732627+n*(.22668404630224365+n*(.004826466289237662+n*4624429436045379e-20))))))))),i=0+n*(362880+n*(1026576+n*(1172700+n*(723680+n*(269325+n*(63273+n*(9450+n*(870+n*(45+n*1)))))))))):(n=1/n,r=4624429436045379e-20+n*(.004826466289237662+n*(.22668404630224365+n*(6.309239205732627+n*(115.24194596137347+n*(1443.4299244417066+n*(12555.290582413863+n*(74887.54032914672+n*(293136.7857211597+n*(679979.8474157227+n*709811.662581658))))))))),i=1+n*(45+n*(870+n*(9450+n*(63273+n*(269325+n*(723680+n*(1172700+n*(1026576+n*(362880+n*0)))))))))),r/i)}return X0=e,X0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var K0,K4;function WG(){if(K4)return K0;K4=1;var e=ue(),n=wn(),t=be(),r=ye(),i=Ce(),o=Oe(),a=ni(),u=ot(),s=VG(),c=10.900511;function l(d,p){var m,f,h,v,_,g,b;return e(d)||e(p)?NaN:d<0||p<0?NaN:p===1?1/d:d===1?1/p:(b=d+p,b<u?(_=b/d,_/=p,_):b===d&&p<u?1/p:b===p&&d<u?1/d:(d<p&&(g=p,p=d,d=g),f=d+c-.5,h=p+c-.5,v=b+c-.5,_=s(d)*(s(p)/s(b)),m=d-.5-p,r(p*m)<v*100&&d>100?_*=i(m*n(-p/v)):_*=o(f/v,m),v>1e10?_*=o(f/v*(h/v),p):_*=o(f*h/(v*v),p),_*=t(a/h),_))}return K0=l,K0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y0,Y4;function Uu(){if(Y4)return Y0;Y4=1;var e=WG();return Y0=e,Y0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J0,J4;function XG(){if(J4)return J0;J4=1;var e=Re();function n(t){return t===0&&1/t===e}return J0=n,J0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z0,z4;function KG(){if(z4)return z0;z4=1;var e=XG();return z0=e,z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q0,Q4;function YG(){if(Q4)return Q0;Q4=1;var e=KG(),n=ue(),t=Re();function r(i,o){return n(i)||n(o)?NaN:i===t||o===t?t:i===o&&i===0?e(i)?i:o:i>o?i:o}return Q0=r,Q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z0,Z4;function ur(){if(Z4)return Z0;Z4=1;var e=YG();return Z0=e,Z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ed,ey;function JG(){if(ey)return ed;ey=1;var e=on();function n(t){return t===0&&1/t===e}return ed=n,ed}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nd,ny;function fT(){if(ny)return nd;ny=1;var e=JG();return nd=e,nd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var td,ty;function zG(){if(ty)return td;ty=1;var e=fT(),n=ue(),t=on();function r(i,o){return n(i)||n(o)?NaN:i===t||o===t?t:i===o&&i===0?e(i)?i:o:i<o?i:o}return td=r,td}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rd,ry;function Ft(){if(ry)return rd;ry=1;var e=zG();return rd=e,rd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var id,iy;function sr(){if(iy)return id;iy=1;var e=17976931348623157e292;return id=e,id}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var od,oy;function pT(){if(oy)return od;oy=1;var e=2147483647;return od=e,od}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ad,ay;function X2(){if(ay)return ad;ay=1;var e=1.5707963267948966;return ad=e,ad}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ud,uy;function qt(){if(uy)return ud;uy=1;var e=3.141592653589793;return ud=e,ud}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sd,sy;function QG(){if(sy)return sd;sy=1;function e(n){return n===0?.0416666666666666:.0416666666666666+n*(-.001388888888887411+n*2480158728947673e-20)}return sd=e,sd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cd,cy;function ZG(){if(cy)return cd;cy=1;function e(n){return n===0?-27557314351390663e-23:-27557314351390663e-23+n*(2087572321298175e-24+n*-11359647557788195e-27)}return cd=e,cd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ld,ly;function ej(){if(ly)return ld;ly=1;var e=QG(),n=ZG();function t(r,i){var o,a,u,s;return s=r*r,u=s*s,a=s*e(s),a+=u*u*n(s),o=.5*s,u=1-o,u+(1-u-o+(s*a-r*i))}return ld=t,ld}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dd,dy;function mT(){if(dy)return dd;dy=1;var e=ej();return dd=e,dd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var fd,fy;function nj(){if(fy)return fd;fy=1;var e=-.16666666666666632,n=.00833333333332249,t=-.0001984126982985795,r=27557313707070068e-22,i=-25050760253406863e-24,o=158969099521155e-24;function a(u,s){var c,l,d,p;return p=u*u,d=p*p,c=n+p*(t+p*r)+p*d*(i+p*o),l=p*u,s===0?u+l*(e+p*c):u-(p*(.5*s-l*c)-s-l*e)}return fd=a,fd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pd,py;function hT(){if(py)return pd;py=1;var e=nj();return pd=e,pd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var md,my;function tj(){if(my)return md;my=1;var e=Jr(),n;return e===!0?n=0:n=1,md=n,md}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hd,hy;function rj(){if(hy)return hd;hy=1;var e=Kr(),n=Yr(),t=tj(),r=new n(1),i=new e(r.buffer);function o(a){return r[0]=a,i[t]}return hd=o,hd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vd,vy;function ij(){if(vy)return vd;vy=1;var e=rj();return vd=e,vd}/**
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
*/var _d,_y;function oj(){if(_y)return _d;_y=1;function e(n,t){var r,i;for(r=[],i=0;i<t;i++)r.push(n);return r}return _d=e,_d}/**
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
*/var gd,gy;function aj(){if(gy)return gd;gy=1;var e=oj();return gd=e,gd}/**
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
*/var bd,by;function uj(){if(by)return bd;by=1;var e=aj();function n(t){return e(0,t)}return bd=n,bd}/**
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
*/var yd,yy;function sj(){if(yy)return yd;yy=1;var e=uj();return yd=e,yd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ed,Ey;function cj(){if(Ey)return Ed;Ey=1;var e=it(),n=Zr(),t=sj(),r=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],i=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],o=16777216,a=5960464477539063e-23,u=t(20),s=t(20),c=t(20),l=t(20);function d(m,f,h,v,_,g,b,y,E){var $,T,C,L,A,w,S,I,R;for(L=g,R=v[h],I=h,A=0;I>0;A++)T=a*R|0,l[A]=R-o*T|0,R=v[I-1]+T,I-=1;if(R=n(R,_),R-=8*e(R*.125),S=R|0,R-=S,C=0,_>0?(A=l[h-1]>>24-_,S+=A,l[h-1]-=A<<24-_,C=l[h-1]>>23-_):_===0?C=l[h-1]>>23:R>=.5&&(C=2),C>0){for(S+=1,$=0,A=0;A<h;A++)I=l[A],$===0?I!==0&&($=1,l[A]=16777216-I):l[A]=16777215-I;if(_>0)switch(_){case 1:l[h-1]&=8388607;break;case 2:l[h-1]&=4194303;break}C===2&&(R=1-R,$!==0&&(R-=n(1,_)))}if(R===0){for(I=0,A=h-1;A>=g;A--)I|=l[A];if(I===0){for(w=1;l[g-w]===0;w++);for(A=h+1;A<=h+w;A++){for(E[y+A]=r[b+A],T=0,I=0;I<=y;I++)T+=m[I]*E[y+(A-I)];v[A]=T}return h+=w,d(m,f,h,v,_,g,b,y,E)}for(h-=1,_-=24;l[h]===0;)h-=1,_-=24}else R=n(R,-_),R>=o?(T=a*R|0,l[h]=R-o*T|0,h+=1,_+=24,l[h]=T):l[h]=R|0;for(T=n(1,_),A=h;A>=0;A--)v[A]=T*l[A],T*=a;for(A=h;A>=0;A--){for(T=0,w=0;w<=L&&w<=h-A;w++)T+=i[w]*v[A+w];c[h-A]=T}for(T=0,A=h;A>=0;A--)T+=c[A];for(C===0?f[0]=T:f[0]=-T,T=c[0]-T,A=1;A<=h;A++)T+=c[A];return C===0?f[1]=T:f[1]=-T,S&7}function p(m,f,h,v){var _,g,b,y,E,$,T,C,L;for(g=4,y=v-1,b=(h-3)/24|0,b<0&&(b=0),$=h-24*(b+1),C=b-y,L=y+g,T=0;T<=L;T++)C<0?u[T]=0:u[T]=r[C],C+=1;for(T=0;T<=g;T++){for(_=0,C=0;C<=y;C++)_+=m[C]*u[y+(T-C)];s[T]=_}return E=g,d(m,f,E,s,$,g,b,y,u)}return Ed=p,Ed}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sd,Sy;function lj(){if(Sy)return Sd;Sy=1;var e=Math.round;return Sd=e,Sd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wd,wy;function vT(){if(wy)return wd;wy=1;var e=lj();return wd=e,wd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ad,Ay;function dj(){if(Ay)return Ad;Ay=1;var e=vT(),n=Sn(),t=.6366197723675814,r=1.5707963267341256,i=6077100506506192e-26,o=6077100506303966e-26,a=20222662487959506e-37,u=20222662487111665e-37,s=84784276603689e-45,c=2047;function l(d,p,m){var f,h,v,_,g,b,y;return h=e(d*t),_=d-h*r,g=h*i,y=p>>20|0,m[0]=_-g,f=n(m[0]),b=y-(f>>20&c),b>16&&(v=_,g=h*o,_=v-g,g=h*a-(v-_-g),m[0]=_-g,f=n(m[0]),b=y-(f>>20&c),b>49&&(v=_,g=h*u,_=v-g,g=h*s-(v-_-g),m[0]=_-g)),m[1]=_-m[0]-g,h}return Ad=l,Ad}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var $d,$y;function fj(){if($y)return $d;$y=1;var e=or(),n=Hu(),t=dT(),r=Sn(),i=ij(),o=Bu(),a=cj(),u=dj(),s=0,c=16777216,l=1.5707963267341256,d=6077100506506192e-26,p=2*d,m=3*d,f=4*d,h=598523,v=1072243195,_=1073928572,g=1074752122,b=1074977148,y=1075183036,E=1075388923,$=1075594811,T=1094263291,C=[0,0,0],L=[0,0];function A(w,S){var I,R,P,k,B,D,q,M;if(P=r(w)|0,k=P&e|0,k<=v)return S[0]=w,S[1]=0,0;if(k<=g)return(k&t)===h?u(w,k,S):k<=_?P>0?(M=w-l,S[0]=M-d,S[1]=M-S[0]-d,1):(M=w+l,S[0]=M+d,S[1]=M-S[0]+d,-1):P>0?(M=w-2*l,S[0]=M-p,S[1]=M-S[0]-p,2):(M=w+2*l,S[0]=M+p,S[1]=M-S[0]+p,-2);if(k<=$)return k<=y?k===b?u(w,k,S):P>0?(M=w-3*l,S[0]=M-m,S[1]=M-S[0]-m,3):(M=w+3*l,S[0]=M+m,S[1]=M-S[0]+m,-3):k===E?u(w,k,S):P>0?(M=w-4*l,S[0]=M-f,S[1]=M-S[0]-f,4):(M=w+4*l,S[0]=M+f,S[1]=M-S[0]+f,-4);if(k<T)return u(w,k,S);if(k>=n)return S[0]=NaN,S[1]=NaN,0;for(I=i(w),R=(k>>20)-1046,M=o(k-(R<<20|0),I),D=0;D<2;D++)C[D]=M|0,M=(M-C[D])*c;for(C[2]=M,B=3;C[B-1]===s;)B-=1;return q=a(C,L,R,B,1),P<0?(S[0]=-L[0],S[1]=-L[1],-q):(S[0]=L[0],S[1]=L[1],q)}return $d=A,$d}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Td,Ty;function _T(){if(Ty)return Td;Ty=1;var e=fj();return Td=e,Td}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Id,Iy;function pj(){if(Iy)return Id;Iy=1;var e=or(),n=Hu(),t=Sn(),r=mT(),i=hT(),o=_T(),a=1072243195,u=1045430272,s=[0,0];function c(l){var d,p;if(d=t(l),d&=e,d<=a)return d<u?l:i(l,0);if(d>=n)return NaN;switch(p=o(l,s),p&3){case 0:return i(s[0],s[1]);case 1:return r(s[0],s[1]);case 2:return-i(s[0],s[1]);default:return-r(s[0],s[1])}}return Id=c,Id}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ld,Ly;function $o(){if(Ly)return Ld;Ly=1;var e=pj();return Ld=e,Ld}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rd,Ry;function Gu(){if(Ry)return Rd;Ry=1;var e=2.5066282746310007;return Rd=e,Rd}/**
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
*/var Cd,Cy;function mj(){if(Cy)return Cd;Cy=1;function e(n){return n===0?.08333333333334822:.08333333333334822+n*(.0034722222160545866+n*(-.0026813261780578124+n*(-.00022954996161337813+n*.0007873113957930937)))}return Cd=e,Cd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Od,Oy;function hj(){if(Oy)return Od;Oy=1;var e=Gu(),n=Oe(),t=Ce(),r=mj(),i=143.01608;function o(a){var u,s,c;return u=1/a,u=1+u*r(u),s=t(a),a>i?(c=n(a,.5*a-.25),s=c*(c/s)):s=n(a,a-.5)/s,e*s*u}return Od=o,Od}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nd,Ny;function vj(){if(Ny)return Nd;Ny=1;var e=.5772156649015329;return Nd=e,Nd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var kd,ky;function _j(){if(ky)return kd;ky=1;var e=vj();function n(t,r){return r/((1+e*t)*t)}return kd=n,kd}/**
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
*/var Md,My;function gj(){if(My)return Md;My=1;function e(n){var t,r,i;return n===0?1:(n<0?t=-n:t=n,t<=1?(r=1+n*(.4942148268014971+n*(.20744822764843598+n*(.04763678004571372+n*(.010421379756176158+n*(.0011913514700658638+n*(.00016011952247675185+n*0)))))),i=1+n*(.0714304917030273+n*(-.23459179571824335+n*(.035823639860549865+n*(.011813978522206043+n*(-.004456419138517973+n*(.0005396055804933034+n*-23158187332412014e-21))))))):(n=1/n,r=0+n*(.00016011952247675185+n*(.0011913514700658638+n*(.010421379756176158+n*(.04763678004571372+n*(.20744822764843598+n*(.4942148268014971+n*1)))))),i=-23158187332412014e-21+n*(.0005396055804933034+n*(-.004456419138517973+n*(.011813978522206043+n*(.035823639860549865+n*(-.23459179571824335+n*(.0714304917030273+n*1))))))),r/i)}return Md=e,Md}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Pd,Py;function bj(){if(Py)return Pd;Py=1;var e=ue(),n=ei(),t=fT(),r=ye(),i=it(),o=$o(),a=Re(),u=on(),s=qt(),c=hj(),l=_j(),d=gj();function p(m){var f,h,v,_;if(n(m)&&m<0||m===u||e(m))return NaN;if(m===0)return t(m)?u:a;if(m>171.61447887182297)return a;if(m<-170.5674972726612)return 0;if(h=r(m),h>33)return m>=0?c(m):(v=i(h),(v&1)===0?f=-1:f=1,_=h-v,_>.5&&(v+=1,_=h-v),_=h*o(s*_),f*s/(r(_)*c(h)));for(_=1;m>=3;)m-=1,_*=m;for(;m<0;){if(m>-1e-9)return l(m,_);_/=m,m+=1}for(;m<2;){if(m<1e-9)return l(m,_);_/=m,m+=1}return m===2?_:(m-=2,_*d(m))}return Pd=p,Pd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dd,Dy;function at(){if(Dy)return Dd;Dy=1;var e=bj();return Dd=e,Dd}/**
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
*/var Fd,Fy;function ju(){if(Fy)return Fd;Fy=1;var e=170;return Fd=e,Fd}const yj=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291];/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qd,qy;function Ej(){if(qy)return qd;qy=1;var e=ue(),n=ei(),t=at(),r=Re(),i=ju(),o=yj;function a(u){return e(u)?NaN:n(u)?u<0?NaN:u<=i?o[u]:r:t(u+1)}return qd=a,qd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xd,xy;function gT(){if(xy)return xd;xy=1;var e=Ej();return xd=e,xd}/**
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
*/var Bd,By;function Sj(){if(By)return Bd;By=1;function e(n){var t,r,i;return n===0?1/0:(n<0?t=-n:t=n,t<=1?(r=3847467039331777e-5+n*(3685766504351951e-5+n*(1588920245372942e-5+n*(4059208354298835e-6+n*(6805476611834733e-7+n*(7823975500312005e-8+n*(6246580776401795e-9+n*(341986.3488721347+n*(12287.194511824551+n*(261.61404416416684+n*2.5066282746310007))))))))),i=0+n*(362880+n*(1026576+n*(1172700+n*(723680+n*(269325+n*(63273+n*(9450+n*(870+n*(45+n*1)))))))))):(n=1/n,r=2.5066282746310007+n*(261.61404416416684+n*(12287.194511824551+n*(341986.3488721347+n*(6246580776401795e-9+n*(7823975500312005e-8+n*(6805476611834733e-7+n*(4059208354298835e-6+n*(1588920245372942e-5+n*(3685766504351951e-5+n*3847467039331777e-5))))))))),i=1+n*(45+n*(870+n*(9450+n*(63273+n*(269325+n*(723680+n*(1172700+n*(1026576+n*(362880+n*0)))))))))),r/i)}return Bd=e,Bd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Hd,Hy;function wj(){if(Hy)return Hd;Hy=1;var e=Sj();return Hd=e,Hd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ud,Uy;function Aj(){if(Uy)return Ud;Uy=1;var e=wj();return Ud=e,Ud}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gd,Gy;function To(){if(Gy)return Gd;Gy=1;var e=10.900511;return Gd=e,Gd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var jd,jy;function $j(){if(jy)return jd;jy=1;var e=Aj(),n=at(),t=wn(),r=ye(),i=Ce(),o=Oe(),a=ot(),u=ni(),s=To(),c=ju(),l=4269068009004705e289;function d(p,m){var f,h,v;return p<a?m>=c?(h=d(m,c-m),h*=p,h*=l,1/h):1/(p*n(p+m)):(v=p+s-.5,p+m===p?r(m/v)<a?f=i(-m):f=1:(r(m)<10?f=i((.5-p)*t(m/v)):f=o(v/(v+m),p-.5),f*=e(p)/e(p+m)),f*=o(u/(v+m),m),f)}return jd=d,jd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Vd,Vy;function Tj(){if(Vy)return Vd;Vy=1;var e=ye(),n=it(),t=at(),r=gT(),i=ju(),o=$j();function a(u,s){var c,l,d;if(u<=0||u+s<=0)return t(u)/t(u+s);if(l=n(s),l===s){if(d=n(u),d===u&&u<=i&&u+s<=i)return r(d-1)/r(l+d-1);if(e(s)<20){if(s===0)return 1;if(s<0){for(u-=1,c=u,s+=1;s!==0;)u-=1,c*=u,s+=1;return c}for(c=1/u,s-=1;s!==0;)u+=1,c/=u,s-=1;return c}}return o(u,s)}return Vd=a,Vd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wd,Wy;function K2(){if(Wy)return Wd;Wy=1;var e=Tj();return Wd=e,Wd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xd,Xy;function Ij(){if(Xy)return Xd;Xy=1;function e(n){return n===0?.3999999999940942:.3999999999940942+n*(.22222198432149784+n*.15313837699209373)}return Xd=e,Xd}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kd,Ky;function Lj(){if(Ky)return Kd;Ky=1;function e(n){return n===0?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+n*.14798198605116586))}return Kd=e,Kd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Yd,Yy;function Rj(){if(Yy)return Yd;Yy=1;var e=Sn(),n=wo(),t=ue(),r=ir(),i=on(),o=Ij(),a=Lj(),u=.6931471803691238,s=19082149292705877e-26,c=0x40000000000000,l=.3333333333333333,d=1048575,p=2146435072,m=1048576,f=1072693248;function h(v){var _,g,b,y,E,$,T,C,L,A,w,S;return v===0?i:t(v)||v<0?NaN:(g=e(v),E=0,g<m&&(E-=54,v*=c,g=e(v)),g>=p?v+v:(E+=(g>>20)-r|0,g&=d,C=g+614244&1048576|0,v=n(v,g|C^f),E+=C>>20|0,T=v-1,(d&2+g)<3?T===0?E===0?0:E*u+E*s:($=T*T*(.5-l*T),E===0?T-$:E*u-($-E*s-T)):(A=T/(2+T),S=A*A,C=g-398458|0,w=S*S,L=440401-g|0,y=w*o(w),b=S*a(w),C|=L,$=b+y,C>0?(_=.5*T*T,E===0?T-(_-A*(_+$)):E*u-(_-(A*(_+$)+E*s)-T)):E===0?T-A*(T-$):E*u-(A*(T-$)-E*s-T))))}return Yd=h,Yd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jd,Jy;function we(){if(Jy)return Jd;Jy=1;var e=Rj();return Jd=e,Jd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var zd,zy;function Cj(){if(zy)return zd;zy=1;var e=Sn(),n=mT(),t=hT(),r=_T(),i=or(),o=Hu(),a=[0,0],u=1072243195,s=1044381696;function c(l){var d,p;if(d=e(l),d&=i,d<=u)return d<s?1:n(l,0);if(d>=o)return NaN;switch(p=r(l,a),p&3){case 0:return n(a[0],a[1]);case 1:return-t(a[0],a[1]);case 2:return-n(a[0],a[1]);default:return t(a[0],a[1])}}return zd=c,zd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qd,Qy;function Y2(){if(Qy)return Qd;Qy=1;var e=Cj();return Qd=e,Qd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zd,Zy;function Oj(){if(Zy)return Zd;Zy=1;var e=ue(),n=Qr(),t=Y2(),r=$o(),i=ye(),o=V2(),a=qt();function u(s){var c,l;return e(s)?NaN:n(s)?NaN:(l=s%2,c=i(l),c===0||c===1?o(0,l):c<.25?r(a*l):c<.75?(c=.5-c,o(t(a*c),l)):c<1.25?(l=o(1,l)-l,r(a*l)):c<1.75?(c-=1.5,-o(t(a*c),l)):(l-=o(2,l),r(a*l)))}return Zd=u,Zd}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ef,eE;function Nj(){if(eE)return ef;eE=1;var e=Oj();return ef=e,ef}/**
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
*/var nf,nE;function kj(){if(nE)return nf;nE=1;function e(n){return n===0?.06735230105312927:.06735230105312927+n*(.007385550860814029+n*(.0011927076318336207+n*(.00022086279071390839+n*25214456545125733e-21)))}return nf=e,nf}/**
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
*/var tf,tE;function Mj(){if(tE)return tf;tE=1;function e(n){return n===0?.020580808432516733:.020580808432516733+n*(.0028905138367341563+n*(.0005100697921535113+n*(.00010801156724758394+n*44864094961891516e-21)))}return tf=e,tf}/**
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
*/var rf,rE;function Pj(){if(rE)return rf;rE=1;function e(n){return n===0?1.3920053346762105:1.3920053346762105+n*(.7219355475671381+n*(.17193386563280308+n*(.01864591917156529+n*(.0007779424963818936+n*7326684307446256e-21))))}return rf=e,rf}/**
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
*/var of,iE;function Dj(){if(iE)return of;iE=1;function e(n){return n===0?.21498241596060885:.21498241596060885+n*(.325778796408931+n*(.14635047265246445+n*(.02664227030336386+n*(.0018402845140733772+n*3194753265841009e-20))))}return of=e,of}/**
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
*/var af,oE;function Fj(){if(oE)return af;oE=1;function e(n){return n===0?-.032788541075985965:-.032788541075985965+n*(.006100538702462913+n*(-.0014034646998923284+n*.00031563207090362595))}return af=e,af}/**
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
*/var uf,aE;function qj(){if(aE)return uf;aE=1;function e(n){return n===0?.01797067508118204:.01797067508118204+n*(-.0036845201678113826+n*(.000881081882437654+n*-.00031275416837512086))}return uf=e,uf}/**
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
*/var sf,uE;function xj(){if(uE)return sf;uE=1;function e(n){return n===0?-.010314224129834144:-.010314224129834144+n*(.0022596478090061247+n*(-.0005385953053567405+n*.0003355291926355191))}return sf=e,sf}/**
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
*/var cf,sE;function Bj(){if(sE)return cf;sE=1;function e(n){return n===0?.6328270640250934:.6328270640250934+n*(1.4549225013723477+n*(.9777175279633727+n*(.22896372806469245+n*.013381091853678766)))}return cf=e,cf}/**
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
*/var lf,cE;function Hj(){if(cE)return lf;cE=1;function e(n){return n===0?2.4559779371304113:2.4559779371304113+n*(2.128489763798934+n*(.7692851504566728+n*(.10422264559336913+n*.003217092422824239)))}return lf=e,lf}/**
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
*/var df,lE;function Uj(){if(lE)return df;lE=1;function e(n){return n===0?.08333333333333297:.08333333333333297+n*(-.0027777777772877554+n*(.0007936505586430196+n*(-.00059518755745034+n*(.0008363399189962821+n*-.0016309293409657527))))}return df=e,df}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ff,dE;function Gj(){if(dE)return ff;dE=1;var e=ue(),n=Qr(),t=ye(),r=we(),i=G2(),o=Nj(),a=qt(),u=Re(),s=kj(),c=Mj(),l=Pj(),d=Dj(),p=Fj(),m=qj(),f=xj(),h=Bj(),v=Hj(),_=Uj(),g=.07721566490153287,b=.3224670334241136,y=1,E=-.07721566490153287,$=.48383612272381005,T=-.1475877229945939,C=.06462494023913339,L=-.07721566490153287,A=1,w=.4189385332046727,S=1.4616321449683622,I=4503599627370496,R=72057594037927940,P=13877787807814457e-33,k=1.4616321449683622,B=-.12148629053584961,D=-3638676997039505e-33;function q(M){var Z,G,z,te,ae,j,Y,V,Ee,me,ne,se,$e;if(e(M)||n(M))return M;if(M===0)return u;if(M<0?(Z=!0,M=-M):Z=!1,M<P)return-r(M);if(Z){if(M>=I||(Ee=o(M),Ee===0))return u;G=r(a/t(Ee*M))}if(M===1||M===2)return 0;if(M<2)switch(M<=.9?($e=-r(M),M>=S-1+.27?(ne=1-M,z=0):M>=S-1-.27?(ne=M-(k-1),z=1):(ne=M,z=2)):($e=0,M>=S+.27?(ne=2-M,z=0):M>=S-.27?(ne=M-k,z=1):(ne=M-1,z=2)),z){case 0:se=ne*ne,j=g+se*s(se),ae=se*(b+se*c(se)),Y=ne*j+ae,$e+=Y-.5*ne;break;case 1:se=ne*ne,me=se*ne,j=$+me*p(me),ae=T+me*m(me),te=C+me*f(me),Y=se*j-(D-me*(ae+ne*te)),$e+=B+Y;break;case 2:j=ne*(L+ne*h(ne)),ae=A+ne*v(ne),$e+=-.5*ne+j/ae;break}else if(M<8)switch(z=i(M),ne=M-z,Y=ne*(E+ne*d(ne)),V=y+ne*l(ne),$e=.5*ne+Y/V,se=1,z){case 7:se*=ne+6;case 6:se*=ne+5;case 5:se*=ne+4;case 4:se*=ne+3;case 3:se*=ne+2,$e+=r(se)}else M<R?(Ee=r(M),se=1/M,ne=se*se,me=w+se*_(ne),$e=(M-.5)*(Ee-1)+me):$e=M*(r(M)-1);return Z&&($e=G-$e),$e}return ff=q,ff}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pf,fE;function ti(){if(fE)return pf;fE=1;var e=Gj();return pf=e,pf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mf,pE;function xt(){if(pE)return mf;pE=1;var e=709.782712893384;return mf=e,mf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hf,mE;function jj(){if(mE)return hf;mE=1;var e=14901161193847656e-24;return hf=e,hf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vf,hE;function Vj(){if(hE)return vf;hE=1;var e=eval;return vf=e,vf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _f,vE;function Wj(){if(vE)return _f;vE=1;var e=Vj();function n(){var t;try{e('"use strict"; (function* () {})'),t=!0}catch{t=!1}return t}return _f=n,_f}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gf,_E;function bT(){if(_E)return gf;_E=1;var e=Wj();return gf=e,gf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bf,gE;function Xj(){if(gE)return bf;gE=1;var e=ye(),n=ot(),t=1e6;function r(i,o){var a,u,s,c,l,d;if(d={},arguments.length>1&&(d=o),u=d.tolerance||n,c=d.maxTerms||t,l=d.initialValue||0,a=typeof i.next=="function",a===!0){for(s of i)if(l+=s,e(u*l)>=e(s)||--c===0)break}else do s=i(),l+=s;while(e(u*l)<e(s)&&--c);return l}return bf=r,bf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yf,bE;function Kj(){if(bE)return yf;bE=1;var e=ye(),n=ot(),t=1e6;function r(i,o){var a,u,s,c,l;l={},arguments.length>1&&(l=o),a=l.tolerance||n,s=l.maxTerms||t,c=l.initialValue||0;do u=i(),c+=u;while(e(a*c)<e(u)&&--s);return c}return yf=r,yf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ef,yE;function Io(){if(yE)return Ef;yE=1;var e=bT(),n=Xj(),t=Kj(),r;return e()?r=n:r=t,Ef=r,Ef}/**
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
*/var Sf,EE;function Yj(){if(EE)return Sf;EE=1;function e(n,t){var r=1,i=n,o=t;return a;function a(){var u=r;return r*=i/o,i-=1,u}}return Sf=e,Sf}/**
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
*/var wf,SE;function Jj(){if(SE)return wf;SE=1;var e=Io(),n=Yj();function t(r,i){var o,a;return a=n(r,i),o=e(a),o}return wf=t,wf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Af,wE;function zj(){if(wE)return Af;wE=1;var e=Ce();function n(t,r){var i,o,a,u;if(a=e(-r),o=a,o!==0)for(i=o,u=1;u<t;++u)i/=u,i*=r,o+=i;return o}return Af=n,Af}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $f,AE;function Qj(){if(AE)return $f;AE=1;function e(n){return n===0?-.3250421072470015:-.3250421072470015+n*(-.02848174957559851+n*(-.005770270296489442+n*-23763016656650163e-21))}return $f=e,$f}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tf,$E;function Zj(){if($E)return Tf;$E=1;function e(n){return n===0?.39791722395915535:.39791722395915535+n*(.0650222499887673+n*(.005081306281875766+n*(.00013249473800432164+n*-3960228278775368e-21)))}return Tf=e,Tf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var If,TE;function eV(){if(TE)return If;TE=1;function e(n){return n===0?.41485611868374833:.41485611868374833+n*(-.3722078760357013+n*(.31834661990116175+n*(-.11089469428239668+n*(.035478304325618236+n*-.002166375594868791))))}return If=e,If}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lf,IE;function nV(){if(IE)return Lf;IE=1;function e(n){return n===0?.10642088040084423:.10642088040084423+n*(.540397917702171+n*(.07182865441419627+n*(.12617121980876164+n*(.01363708391202905+n*.011984499846799107))))}return Lf=e,Lf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rf,LE;function tV(){if(LE)return Rf;LE=1;function e(n){return n===0?-.6938585727071818:-.6938585727071818+n*(-10.558626225323291+n*(-62.375332450326006+n*(-162.39666946257347+n*(-184.60509290671104+n*(-81.2874355063066+n*-9.814329344169145)))))}return Rf=e,Rf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cf,RE;function rV(){if(RE)return Cf;RE=1;function e(n){return n===0?19.651271667439257:19.651271667439257+n*(137.65775414351904+n*(434.56587747522923+n*(645.3872717332679+n*(429.00814002756783+n*(108.63500554177944+n*(6.570249770319282+n*-.0604244152148581))))))}return Cf=e,Cf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Of,CE;function iV(){if(CE)return Of;CE=1;function e(n){return n===0?-.799283237680523:-.799283237680523+n*(-17.757954917754752+n*(-160.63638485582192+n*(-637.5664433683896+n*(-1025.0951316110772+n*-483.5191916086514))))}return Of=e,Of}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nf,OE;function oV(){if(OE)return Nf;OE=1;function e(n){return n===0?30.33806074348246:30.33806074348246+n*(325.7925129965739+n*(1536.729586084437+n*(3199.8582195085955+n*(2553.0504064331644+n*(474.52854120695537+n*-22.44095244658582)))))}return Nf=e,Nf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var kf,NE;function aV(){if(NE)return kf;NE=1;var e=ue(),n=Ce(),t=Ao(),r=Re(),i=on(),o=Qj(),a=Zj(),u=eV(),s=nV(),c=tV(),l=rV(),d=iV(),p=oV(),m=1e-300,f=13877787807814457e-33,h=.8450629115104675,v=.12837916709551256,_=1,g=-.0023621185607526594,b=1,y=-.009864944034847148,E=1,$=-.0098649429247001,T=1;function C(L){var A,w,S,I,R,P,k,B;if(e(L))return NaN;if(L===r)return 0;if(L===i)return 2;if(L===0)return 1;if(L<0?(A=!0,w=-L):(A=!1,w=L),w<.84375)return w<f?1-L:(S=L*L,I=v+S*o(S),R=_+S*a(S),P=I/R,L<.25?1-(L+L*P):(I=L*P,I+=L-.5,.5-I));if(w<1.25)return R=w-1,k=g+R*u(R),B=b+R*s(R),A?1+h+k/B:1-h-k/B;if(w<28){if(R=1/(w*w),w<2.857142857142857)I=y+R*c(R),R=E+R*l(R);else{if(L<-6)return 2-m;I=$+R*d(R),R=T+R*p(R)}return S=t(w,0),I=n(-(S*S)-.5625)*n((S-w)*(S+w)+I/R),A?2-I/w:I/w}return A?2-m:m*m}return kf=C,kf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mf,kE;function Vu(){if(kE)return Mf;kE=1;var e=aV();return Mf=e,Mf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Pf,ME;function uV(){if(ME)return Pf;ME=1;var e=Vu(),n=be(),t=Ce(),r=qt();function i(o,a){var u,s,c,l,d;if(l=e(n(a)),l!==0&&o>1){for(s=t(-a)/n(r*a),s*=a,u=.5,s/=u,c=s,d=2;d<o;++d)s/=d-u,s*=a,c+=s;l+=c}return l}return Pf=i,Pf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Df,PE;function ri(){if(PE)return Df;PE=1;var e=-708.3964185322641;return Df=e,Df}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Ff,DE;function sV(){if(DE)return Ff;DE=1;var e=Ce(),n=Oe(),t=we(),r=xt(),i=ri();function o(a,u){var s,c;return c=a*t(u),u>=1?c<r&&-u>i?s=n(u,a)*e(-u):a>=1?s=n(u/e(u/a),a):s=e(c-u):c>i?s=n(u,a)*e(-u):u/a<r?s=n(u/e(u/a),a):s=e(c-u),s}return Ff=o,Ff}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qf,FE;function yT(){if(FE)return qf;FE=1;function e(n,t){var r,i;if(i=n.length,i<2||t===0)return i===0?0:n[0];for(i-=1,r=n[i]*t+n[i-1],i-=2;i>=0;)r=r*t+n[i],i-=1;return r}return qf=e,qf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xf,qE;function cV(){if(qE)return xf;qE=1;var e=Function;return xf=e,xf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bf,xE;function lV(){if(xE)return Bf;xE=1;var e=cV();return Bf=e,Bf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hf,BE;function dV(){if(BE)return Hf;BE=1;var e=lV(),n=yT();function t(r){var i,o,a,u;if(r.length>500)return s;if(i="return function evalpoly(x){",o=r.length,o===0)i+="return 0.0;";else if(o===1)i+="return "+r[0]+";";else{for(i+="if(x===0.0){return "+r[0]+";}",i+="return "+r[0],a=o-1,u=1;u<o;u++)i+="+x*",u<a&&(i+="("),i+=r[u];for(u=0;u<a-1;u++)i+=")";i+=";"}return i+="}",i+="//# sourceURL=evalpoly.factory.js",new e(i)();function s(c){return n(r,c)}}return Hf=t,Hf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uf,HE;function Bt(){if(HE)return Uf;HE=1;var e=rn(),n=yT(),t=dV();return e(n,"factory",t),Uf=n,Uf}/**
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
*/var Gf,UE;function fV(){if(UE)return Gf;UE=1;function e(n){var t=-n,r=-1,i=0;return o;function o(){return r*=t,i+=1,r/i}}return Gf=e,Gf}/**
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
*/var jf,GE;function pV(){if(GE)return jf;GE=1;var e=ye(),n=we(),t=ot(),r=Io(),i=fV();function o(a){var u,s;return a<=-1?NaN:(s=e(a),s>.95?n(1+a)-a:s<t?-a*a/2:(u={initialValue:-a},r(i(a),u)))}return jf=o,jf}/**
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
*/var Vf,jE;function ET(){if(jE)return Vf;jE=1;var e=pV();return Vf=e,Vf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wf,VE;function Wu(){if(VE)return Wf;VE=1;var e=6.283185307179586;return Wf=e,Wf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xf,WE;function mV(){if(WE)return Xf;WE=1;function e(n){return n===0?-.3333333333333333:-.3333333333333333+n*(.08333333333333333+n*(-.014814814814814815+n*(.0011574074074074073+n*(.0003527336860670194+n*(-.0001787551440329218+n*(3919263178522438e-20+n*(-21854485106799924e-22+n*(-185406221071516e-20+n*(8296711340953087e-22+n*(-17665952736826078e-23+n*(6707853543401498e-24+n*(10261809784240309e-24+n*(-4382036018453353e-24+n*914769958223679e-24)))))))))))))}return Xf=e,Xf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kf,XE;function hV(){if(XE)return Kf;XE=1;function e(n){return n===0?-.001851851851851852:-.001851851851851852+n*(-.003472222222222222+n*(.0026455026455026454+n*(-.0009902263374485596+n*(.00020576131687242798+n*(-4018775720164609e-22+n*(-18098550334489977e-21+n*(764916091608111e-20+n*(-16120900894563446e-22+n*(4647127802807434e-24+n*(1378633446915721e-22+n*(-5752545603517705e-23+n*11951628599778148e-24)))))))))))}return Kf=e,Kf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yf,KE;function vV(){if(KE)return Yf;KE=1;function e(n){return n===0?.004133597883597883:.004133597883597883+n*(-.0026813271604938273+n*(.0007716049382716049+n*(20093878600823047e-22+n*(-.00010736653226365161+n*(52923448829120125e-21+n*(-12760635188618728e-21+n*(3423578734096138e-23+n*(13721957309062932e-22+n*(-6298992138380055e-22+n*14280614206064242e-23)))))))))}return Yf=e,Yf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jf,YE;function _V(){if(YE)return Jf;YE=1;function e(n){return n===0?.0006494341563786008:.0006494341563786008+n*(.00022947209362139917+n*(-.0004691894943952557+n*(.00026772063206283885+n*(-7561801671883977e-20+n*(-2396505113867297e-22+n*(11082654115347302e-21+n*(-56749528269915965e-22+n*14230900732435883e-22)))))))}return Jf=e,Jf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zf,JE;function gV(){if(JE)return zf;JE=1;function e(n){return n===0?-.0008618882909167117:-.0008618882909167117+n*(.0007840392217200666+n*(-.0002990724803031902+n*(-14638452578843418e-22+n*(6641498215465122e-20+n*(-3968365047179435e-20+n*11375726970678419e-21)))))}return zf=e,zf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qf,zE;function bV(){if(zE)return Qf;zE=1;function e(n){return n===0?-.00033679855336635813:-.00033679855336635813+n*(-6972813758365858e-20+n*(.0002772753244959392+n*(-.00019932570516188847+n*(6797780477937208e-20+n*(1419062920643967e-22+n*(-13594048189768693e-21+n*(8018470256334202e-21+n*-2291481176508095e-21)))))))}return Qf=e,Qf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zf,QE;function yV(){if(QE)return Zf;QE=1;function e(n){return n===0?.0005313079364639922:.0005313079364639922+n*(-.0005921664373536939+n*(.0002708782096718045+n*(7902353232660328e-22+n*(-8153969367561969e-20+n*(561168275310625e-19+n*-18329116582843375e-21)))))}return Zf=e,Zf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e1,ZE;function EV(){if(ZE)return e1;ZE=1;function e(n){return n===0?.00034436760689237765:.00034436760689237765+n*(5171790908260592e-20+n*(-.00033493161081142234+n*(.0002812695154763237+n*-.00010976582244684731)))}return e1=e,e1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n1,e5;function SV(){if(e5)return n1;e5=1;function e(n){return n===0?-.0006526239185953094:-.0006526239185953094+n*(.0008394987206720873+n*-.000438297098541721)}return n1=e,n1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var t1,n5;function wV(){if(n5)return t1;n5=1;var e=Bt(),n=ET(),t=Vu(),r=be(),i=Ce(),o=Wu(),a=mV(),u=hV(),s=vV(),c=_V(),l=gV(),d=bV(),p=yV(),m=EV(),f=SV(),h=[0,0,0,0,0,0,0,0,0,0];function v(_,g){var b,y,E,$,T;return y=(g-_)/_,E=-n(y),$=_*E,T=r(2*E),g<_&&(T=-T),h[0]=a(T),h[1]=u(T),h[2]=s(T),h[3]=c(T),h[4]=l(T),h[5]=d(T),h[6]=p(T),h[7]=m(T),h[8]=f(T),h[9]=-.0005967612901927463,b=e(h,1/_),b*=i(-$)/r(o*_),g<_&&(b=-b),b+=t(r($))/2,b}return t1=v,t1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var r1,t5;function AV(){if(t5)return r1;t5=1;function e(n,t){var r=1,i=n,o=t;return a;function a(){var u=r;return i+=1,r*=o/i,u}}return r1=e,r1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var i1,r5;function ST(){if(r5)return i1;r5=1;var e=Io(),n=AV();function t(r,i,o){var a,u;return o=o||0,u=n(r,i),a=e(u,{initialValue:o}),a}return i1=t,i1}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o1,i5;function $V(){if(i5)return o1;i5=1;function e(n){var t,r,i;return n===0?1/0:(n<0?t=-n:t=n,t<=1?(r=709811.662581658+n*(679979.8474157227+n*(293136.7857211597+n*(74887.54032914672+n*(12555.290582413863+n*(1443.4299244417066+n*(115.24194596137347+n*(6.309239205732627+n*(.22668404630224365+n*(.004826466289237662+n*4624429436045379e-20))))))))),i=0+n*(362880+n*(1026576+n*(1172700+n*(723680+n*(269325+n*(63273+n*(9450+n*(870+n*(45+n*1)))))))))):(n=1/n,r=4624429436045379e-20+n*(.004826466289237662+n*(.22668404630224365+n*(6.309239205732627+n*(115.24194596137347+n*(1443.4299244417066+n*(12555.290582413863+n*(74887.54032914672+n*(293136.7857211597+n*(679979.8474157227+n*709811.662581658))))))))),i=1+n*(45+n*(870+n*(9450+n*(63273+n*(269325+n*(723680+n*(1172700+n*(1026576+n*(362880+n*0)))))))))),r/i)}return o1=e,o1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var a1,o5;function TV(){if(o5)return a1;o5=1;var e=$V();return a1=e,a1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u1,a5;function Xu(){if(a5)return u1;a5=1;var e=TV();return u1=e,u1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var s1,u5;function IV(){if(u5)return s1;u5=1;var e=Xu(),n=ti(),t=at(),r=ET(),i=be(),o=ye(),a=Ce(),u=Oe(),s=ur(),c=Ft(),l=we(),d=sr(),p=xt(),m=ri(),f=To(),h=ni();function v(_,g){var b,y,E,$,T,C,L;return E=_+f-.5,L=(g-_-f+.5)/E,_<1?g<=m||_<1/d?a(_*l(g)-g-n(_)):u(g,_)*a(-g)/t(_):(o(L*L*_)<=100&&_>150?(b=_*r(L)+g*(.5-f)/E,b=a(b)):($=_*l(g/E),T=_-g,c($,T)<=m||s($,T)>=p?(y=T/_,c($,T)/2>m&&s($,T)/2<p?(C=u(g/E,_/2)*a(T/2),b=C*C):c($,T)/4>m&&s($,T)/4<p&&g>_?(C=u(g/E,_/4)*a(T/4),b=C*C,b*=b):y>m&&y<p?b=u(g*a(y)/E,_):b=a($+T)):b=u(g/E,_)*a(T)),b*=i(E/h)/e(_),b)}return s1=v,s1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var c1,s5;function LV(){if(s5)return c1;s5=1;var e=ue(),n=Qr(),t=ye(),r=zr(),i=we(),o=Oe(),a=G2();function u(s,c){var l,d;if(e(s)||e(c))return NaN;if(c===0)return 0;if(s===0)return-1;if(s<0&&c%2===0&&(s=-s),s>0){if((t(c*(s-1))<.5||t(c)<.2)&&(d=i(s)*c,d<.5))return r(d)}else if(a(c)!==c)return NaN;return l=o(s,c)-1,n(l)||e(l)?NaN:l}return c1=u,c1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l1,c5;function RV(){if(c5)return l1;c5=1;var e=LV();return l1=e,l1}/**
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
*/var d1,l5;function CV(){if(l5)return d1;l5=1;function e(n){var t,r,i;return n===0?-.01803556856784494:(n<0?t=-n:t=n,t<=1?(r=-.01803556856784494+n*(.02512664961998968+n*(.049410315156753225+n*(.0172491608709614+n*(-.0002594535632054381+n*(-.0005410098692152044+n*(-3245886498259485e-20+n*0)))))),i=1+n*(1.962029871977952+n*(1.4801966942423133+n*(.5413914320717209+n*(.09885042511280101+n*(.008213096746488934+n*(.00022493629192211576+n*-22335276320861708e-23))))))):(n=1/n,r=0+n*(-3245886498259485e-20+n*(-.0005410098692152044+n*(-.0002594535632054381+n*(.0172491608709614+n*(.049410315156753225+n*(.02512664961998968+n*-.01803556856784494)))))),i=-22335276320861708e-23+n*(.00022493629192211576+n*(.008213096746488934+n*(.09885042511280101+n*(.5413914320717209+n*(1.4801966942423133+n*(1.962029871977952+n*1))))))),r/i)}return d1=e,d1}/**
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
*/var f1,d5;function OV(){if(d5)return f1;d5=1;function e(n){var t,r,i;return n===0?.04906224540690395:(n<0?t=-n:t=n,t<=1?(r=.04906224540690395+n*(-.09691175301595212+n*(-.4149833583594954+n*(-.4065671242119384+n*(-.1584135863906922+n*(-.024014982064857155+n*-.0010034668769627955))))),i=1+n*(3.0234982984646304+n*(3.4873958536072385+n*(1.9141558827442668+n*(.5071377386143635+n*(.05770397226904519+n*.001957681026011072)))))):(n=1/n,r=-.0010034668769627955+n*(-.024014982064857155+n*(-.1584135863906922+n*(-.4065671242119384+n*(-.4149833583594954+n*(-.09691175301595212+n*.04906224540690395))))),i=.001957681026011072+n*(.05770397226904519+n*(.5071377386143635+n*(1.9141558827442668+n*(3.4873958536072385+n*(3.0234982984646304+n*1)))))),r/i)}return f1=e,f1}/**
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
*/var p1,f5;function NV(){if(f5)return p1;f5=1;function e(n){var t,r,i;return n===0?-.029232972183027003:(n<0?t=-n:t=n,t<=1?(r=-.029232972183027003+n*(.14421626775719232+n*(-.14244039073863127+n*(.05428096940550536+n*(-.008505359768683364+n*(.0004311713426792973+n*0))))),i=1+n*(-1.5016935605448505+n*(.846973248876495+n*(-.22009515181499575+n*(.02558279715597587+n*(-.0010066679553914337+n*-8271935218912905e-22)))))):(n=1/n,r=0+n*(.0004311713426792973+n*(-.008505359768683364+n*(.05428096940550536+n*(-.14244039073863127+n*(.14421626775719232+n*-.029232972183027003))))),i=-8271935218912905e-22+n*(-.0010066679553914337+n*(.02558279715597587+n*(-.22009515181499575+n*(.846973248876495+n*(-1.5016935605448505+n*1)))))),r/i)}return p1=e,p1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var m1,p5;function kV(){if(p5)return m1;p5=1;var e=we(),n=ot(),t=CV(),r=OV(),i=NV(),o=.15896368026733398,a=.5281534194946289,u=.45201730728149414;function s(c,l,d){var p,m,f,h;if(c<n)return-e(c);if(l===0||d===0)return 0;if(m=0,c>2){if(c>=3){do c-=1,d-=1,m+=e(c);while(c>=3);d=c-2}return f=d*(c+1),h=t(d),m+=f*o+f*h,m}return c<1&&(m+=-e(c),d=l,l=c,c+=1),c<=1.5?(f=r(l),p=l*d,m+=p*a+p*f,m):(f=d*l,h=i(-d),m+=f*u+f*h,m)}return m1=s,m1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var h1,m5;function MV(){if(m5)return h1;m5=1;var e=at(),n=zr(),t=wn(),r=ue(),i=kV();function o(a){return r(a)?NaN:a<0?a<-.5?e(1+a)-1:n(-t(a)+i(a+2,a+1,a)):a<2?n(i(a+1,a,a-1)):e(1+a)-1}return h1=o,h1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v1,h5;function PV(){if(h5)return v1;h5=1;var e=MV();return v1=e,v1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var _1,v5;function DV(){if(v5)return _1;v5=1;function e(n,t){var r,i,o,a;return r=-t,t=-t,i=n+1,o=1,u;function u(){return a=r/i,r*=t,o+=1,r/=o,i+=1,a}}return _1=e,_1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var g1,_5;function FV(){if(_5)return g1;_5=1;var e=RV(),n=Io(),t=PV(),r=DV();function i(o,a,u){var s,c,l,d,p;return c=t(o),l=(c+1)/o,d=e(a,o),c-=d,c/=o,p=r(o,a),d+=1,s=u?l:0,c=-d*n(p,{initialValue:(s-c)/d}),u&&(c=-c),[c,l]}return g1=i,g1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b1,g5;function Ku(){if(g5)return b1;g5=1;var e=11754943508222875e-54;return b1=e,b1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y1,b5;function qV(){if(b5)return y1;b5=1;var e=ye(),n=Ku(),t=ot(),r=1e6;function i(u,s,c){var l,d,p,m,f,h,v;if(l=typeof u.next=="function",v=l?u.next().value:u(),m=v[1],p=v[0],m===0&&(m=n),f=m,h=0,l===!0)do v=u.next().value,v&&(h=v[1]+v[0]*h,h===0&&(h=n),f=v[1]+v[0]/f,f===0&&(f=n),h=1/h,d=f*h,m*=d);while(e(d-1)>s&&--c);else do v=u(),v&&(h=v[1]+v[0]*h,h===0&&(h=n),f=v[1]+v[0]/f,f===0&&(f=n),h=1/h,d=f*h,m*=d);while(v&&e(d-1)>s&&--c);return p/m}function o(u,s,c){var l,d,p,m,f,h;if(l=typeof u.next=="function",h=l?u.next().value:u(),p=h[1],p===0&&(p=n),m=p,f=0,l===!0)do h=u.next().value,h&&(f=h[1]+h[0]*f,f===0&&(f=n),m=h[1]+h[0]/m,m===0&&(m=n),f=1/f,d=m*f,p*=d);while(h&&e(d-1)>s&&--c);else do h=u(),h&&(f=h[1]+h[0]*f,f===0&&(f=n),m=h[1]+h[0]/m,m===0&&(m=n),f=1/f,d=m*f,p*=d);while(h&&e(d-1)>s&&--c);return p}function a(u,s){var c,l,d;return l={},arguments.length>1&&(l=s),c=l.maxIter||r,d=l.tolerance||t,l.keep?o(u,d,c):i(u,d,c)}return y1=a,y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E1,y5;function xV(){if(y5)return E1;y5=1;var e=ye(),n=ot(),t=Ku(),r=1e6;function i(u,s,c){var l,d,p,m,f,h;h=u(),f=h[1],d=h[0],f===0&&(f=t),p=f,m=0;do h=u(),h&&(m=h[1]+h[0]*m,m===0&&(m=t),p=h[1]+h[0]/p,p===0&&(p=t),m=1/m,l=p*m,f*=l);while(h&&e(l-1)>s&&--c);return d/f}function o(u,s,c){var l,d,p,m,f;f=u(),m=f[1],m===0&&(m=t),d=m,p=0;do f=u(),f&&(p=f[1]+f[0]*p,p===0&&(p=t),d=f[1]+f[0]/d,d===0&&(d=t),p=1/p,l=d*p,m*=l);while(f&&e(l-1)>s&&--c);return m}function a(u,s){var c,l,d;return l={},arguments.length>1&&(l=s),d=l.tolerance||n,c=l.maxIter||r,l.keep?o(u,d,c):i(u,d,c)}return E1=a,E1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S1,E5;function wT(){if(E5)return S1;E5=1;var e=bT(),n=qV(),t=xV(),r;return e()?r=n:r=t,S1=r,S1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var w1,S5;function BV(){if(S5)return w1;S5=1;function e(n,t){var r=t-n+1,i=n,o=0;return a;function a(){return o+=1,r+=2,[o*(i-o),r]}}return w1=e,w1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var A1,w5;function AT(){if(w5)return A1;w5=1;var e=wT(),n=BV();function t(r,i){var o=n(r,i);return 1/(i-r+1+e(o))}return A1=t,A1}/**
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
*/var $1,A5;function HV(){if(A5)return $1;A5=1;var e=it(),n=at(),t=ye(),r=Oe(),i=we(),o=jj(),a=sr(),u=xt(),s=Jj(),c=zj(),l=uV(),d=sV(),p=wV(),m=ST(),f=IV(),h=FV(),v=AT();function _(g,b,y,E){var $,T,C,L,A,w,S,I,R,P,k,B,D,q;switch(S=0,I=E,w=b<30&&b<=g+1&&g<u,w?(D=e(b),R=D===b,C=R?!1:t(D-b)===.5):(R=!1,C=!1),R&&g>.6?(I=!I,T=0):C&&g>.2?(I=!I,T=1):g<o&&b>1?T=6:g>1e3&&(b<g||t(b-50)/g<1)?(I=!I,T=7):g<.5?-.4/i(g)<b?T=2:T=3:g<1.1?g*.75<b?T=2:T=3:(A=!1,y&&b>20&&(P=t((g-b)/b),b>200?20/b>P*P&&(A=!0):P<.4&&(A=!0)),A?T=5:g-1/(3*g)<b?T=2:(T=4,I=!I)),T){case 0:S=c(b,g),y===!1&&(S*=n(b));break;case 1:S=l(b,g),y===!1&&(S*=n(b));break;case 2:S=y?f(b,g):d(b,g),S!==0&&(L=0,$=!1,I&&(L=y?1:n(b),y||S>=1||a*S>L?(L/=S,y||b<1||a/b>L?(L*=-b,$=!0):L=0):L=0),S*=m(b,g,L)/b,$&&(I=!1,S=-S));break;case 3:I=!I,k=h(b,g,I),S=k[0],q=k[1],I=!1,y&&(S/=q);break;case 4:S=y?f(b,g):d(b,g),S!==0&&(S*=v(b,g));break;case 5:S=p(b,g),g>=b&&(I=!I);break;case 6:S=y?r(g,b)/n(b+1):r(g,b)/b,S*=1-b*g/(b+1);break;case 7:S=y?f(b,g):d(b,g),S/=g,S!==0&&(S*=s(b,g));break}return y&&S>1&&(S=1),I&&(B=y?1:n(b),S=B-S),S}return $1=_,$1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var T1,$5;function UV(){if($5)return T1;$5=1;var e=ti(),n=Ce(),t=we(),r=Gu(),i=xt(),o=Re(),a=ju(),u=HV(),s=ST(),c=AT();function l(d,p,m,f){var h,v,_,g;return d<0||p<=0?NaN:(h=m===void 0?!0:m,_=f,p>=a&&!h?(_&&p*4<d?(g=p*t(d)-d,g+=t(c(p,d))):!_&&p>4*d?(g=p*t(d)-d,v=0,g+=t(s(p,d,v)/p)):(g=u(d,p,!0,_),g===0?_?(g=1+1/(12*p)+1/(288*p*p),g=t(g)-p+(p-.5)*t(p),g+=t(r)):(g=p*t(d)-d,v=0,g+=t(s(p,d,v)/p)):g=t(g)+e(p)),g>i?o:n(g)):u(d,p,h,_))}return T1=l,T1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I1,T5;function $T(){if(T5)return I1;T5=1;var e=UV();return I1=e,I1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var L1,I5;function GV(){if(I5)return L1;I5=1;var e=Ce(),n=Oe(),t=we(),r=xt(),i=ri();function o(a,u){var s,c;return c=a*t(u),u>=1?c<r&&-u>i?s=n(u,a)*e(-u):a>=1?s=n(u/e(u/a),a):s=e(c-u):c>i?s=n(u,a)*e(-u):u/a<r?s=n(u/e(u/a),a):s=e(c-u),s}return L1=o,L1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var R1,L5;function jV(){if(L5)return R1;L5=1;var e=Xu(),n=ti(),t=at(),r=wn(),i=be(),o=ye(),a=Ce(),u=Oe(),s=ur(),c=Ft(),l=we(),d=xt(),p=ri(),m=To(),f=ni();function h(v,_){var g,b,y,E,$,T,C;return y=v+m-.5,C=(_-v-m+.5)/y,v<1?_<=p?a(v*l(_)-_-n(v)):u(_,v)*a(-_)/t(v):(o(C*C*v)<=100&&v>150?(g=v*(r(C)-C)+_*(.5-m)/y,g=a(g)):(E=v*l(_/y),$=v-_,c(E,$)<=p||s(E,$)>=d?(b=$/v,c(E,$)/2>p&&s(E,$)/2<d?(T=u(_/y,v/2)*a($/2),g=T*T):c(E,$)/4>p&&s(E,$)/4<d&&_>v?(T=u(_/y,v/4)*a($/4),g=T*T,g*=g):b>p&&b<d?g=u(_*a(b)/y,v):g=a(E+$)):g=u(_/y,v)*a($)),g*=i(y/f)/e(v),g)}return R1=h,R1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var C1,R5;function VV(){if(R5)return C1;R5=1;var e=K2(),n=gT(),t=$T(),r=wn(),i=ye(),o=Oe(),a=we(),u=ar(),s=ot(),c=GV(),l=jV(),d=new Array(30);function p(m,f,h,v,_,g,b){var y,E,$,T,C,L,A,w,S,I,R,P,k,B,D,q,M,Z;if(L=f-1,M=m+L/2,v<.35?I=r(-v):I=a(h),Z=-M*I,P=l(f,Z),P<=u)return _;for(b?(y=P/e(m,f),y/=o(M,f)):y=c(f,Z)/o(M,f),y*=g,d[0]=1,k=t(Z,f,!0,!0),k/=P,T=_+y*k,$=1,A=I/2,A*=A,w=1,R=4*M*M,C=f,D=1;D<d.length;++D){for($+=2,d[D]=0,S=f-D,E=3,B=1;B<D;++B)S=B*f-D,d[D]+=S*d[D-B]/n(E),E+=2;if(d[D]/=D,d[D]+=L/n($),k=(C*(C+1)*k+(Z+C+1)*w)/R,w*=A,C+=2,q=y*d[D]*k,T+=q,q>1){if(i(q)<i(s*T))break}else if(i(q/s)<i(T))break}return T}return C1=p,C1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var O1,C5;function WV(){if(C5)return O1;C5=1;function e(n,t,r){var i,o;if(r===0)return 1;for(i=1,o=0;o<r;o++)i*=(n+o)/(t+o);return i}return O1=e,O1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N1,O5;function XV(){if(O5)return N1;O5=1;var e=ye(),n=ur();function t(r,i){return n(e(r),e(i))}return N1=t,N1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k1,N5;function KV(){if(N5)return k1;N5=1;var e=XV();return k1=e,k1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M1,k5;function YV(){if(k5)return M1;k5=1;var e=ye(),n=Ft();function t(r,i){return n(e(r),e(i))}return M1=t,M1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P1,M5;function JV(){if(M5)return P1;M5=1;var e=YV();return P1=e,P1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var D1,P5;function J2(){if(P5)return D1;P5=1;var e=Xu(),n=KV(),t=JV(),r=zr(),i=wn(),o=be(),a=ye(),u=Ce(),s=Oe(),c=Ft(),l=we(),d=xt(),p=ri(),m=To(),f=ni();function h(v,_,g,b,y){var E,$,T,C,L,A,w,S,I,R,P,k,B,D;if(!y)return s(g,v)*s(b,_);if(B=v+_,C=v+m-.5,L=_+m-.5,A=B+m-.5,E=e(B),E/=e(v)*e(_),E*=o(L/f),E*=o(C/A),w=(g*_-b*C)/C,S=(b*v-g*L)/L,t(w,S)<.2)if(w*S>0||c(v,_)<1)a(w)<.1?E*=u(v*i(w)):E*=s(g*A/C,v),a(S)<.1?E*=u(_*i(S)):E*=s(b*A/L,_);else if(n(w,S)<.5)$=v<_,T=_/v,$&&T*S<.1||!$&&w/T>.1?(I=r(T*i(S)),I=w+I+I*w,I=v*i(I),E*=u(I)):(I=r(i(w)/T),I=S+I+I*S,I=_*i(I),E*=u(I));else if(a(w)<a(S))if(D=v*i(w)+_*l(b*A/L),D<=p||D>=d){if(D+=l(E),D>=d)return NaN;E=u(D)}else E*=u(D);else if(D=_*i(S)+v*l(g*A/C),D<=p||D>=d){if(D+=l(E),D>=d)return NaN;E=u(D)}else E*=u(D);else if(P=g*A/C,k=b*A/L,w=v*l(P),S=_*l(k),w>=d||w<=p||S>=d||S<=p)if(v<_)if(R=s(k,_/v),I=v*(l(P)+l(R)),I<d&&I>p)E*=s(R*P,v);else{if(S+=w+l(E),S>=d)return NaN;E=u(S)}else if(R=s(P,v/_),I=(l(R)+l(k))*_,I<d&&I>p)E*=s(R*k,_);else{if(S+=w+l(E),S>=d)return NaN;E=u(S)}else E*=s(P,v)*s(k,_);return E}return D1=h,D1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var F1,D5;function zV(){if(D5)return F1;D5=1;var e=wT(),n=J2(),t={keep:!0,maxIter:1e3};function r(o,a,u,s){var c=0;return l;function l(){var d,p,m;return p=(o+c-1)*(o+a+c-1)*c*(a-c)*u*u,d=o+2*c-1,p/=d*d,m=c,m+=c*(a-c)*u/(o+2*c-1),m+=(o+c)*(o*s-a*u+1+c*(2-u))/(o+2*c+1),c+=1,[p,m]}}function i(o,a,u,s,c,l){var d,p,m;return d=n(o,a,u,s,c),l&&(l[1]=d),d===0?d:(m=r(o,a,u,s),p=e(m,t),d/p)}return F1=i,F1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q1,F5;function QV(){if(F5)return q1;F5=1;var e=9007199254740991;return q1=e,q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var x1,q5;function ZV(){if(q5)return x1;q5=1;function e(n,t){var r=0,i;if(n===0)return t;if(t===0)return n;for(;(n&1)===0&&(t&1)===0;)n>>>=1,t>>>=1,r+=1;for(;(n&1)===0;)n>>>=1;for(;t;){for(;(t&1)===0;)t>>>=1;n>t&&(i=t,t=n,n=i),t-=n}return n<<r}return x1=e,x1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var B1,x5;function eW(){if(x5)return B1;x5=1;function e(n,t){var r=1,i;if(n===0)return t;if(t===0)return n;for(;n%2===0&&t%2===0;)n/=2,t/=2,r*=2;for(;n%2===0;)n/=2;for(;t;){for(;t%2===0;)t/=2;n>t&&(i=t,t=n,n=i),t-=n}return r*n}return B1=e,B1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H1,B5;function nW(){if(B5)return H1;B5=1;var e=ue(),n=ei(),t=Re(),r=on(),i=pT(),o=ZV(),a=eW();function u(s,c){return e(s)||e(c)?NaN:s===t||c===t||s===r||c===r?NaN:n(s)&&n(c)?(s<0&&(s=-s),c<0&&(c=-c),s<=i&&c<=i?o(s,c):a(s,c)):NaN}return H1=u,H1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U1,H5;function tW(){if(H5)return U1;H5=1;var e=nW();return U1=e,U1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G1,U5;function rW(){if(U5)return G1;U5=1;var e=QV(),n=Re(),t=ei(),r=ue(),i=W2(),o=it(),a=tW();function u(s,c){var l,d,p,m,f,h,v;if(r(s)||r(c))return NaN;if(!t(s)||!t(c))return NaN;if(c<0||(d=1,s<0&&(s=-s+c-1,i(c)&&(d*=-1)),c>s))return 0;if(c===0||c===s)return d;if(c===1||c===s-1)return d*s;for(s-c<c&&(c=s-c),v=o(e/s),l=1,f=1;f<=c&&!(l>v);f++)l*=s,l/=f,s-=1;return f>c?d*l:(p=u(s,c-f+1),p===n?d*p:(m=u(c,c-f+1),h=a(p,m),p/=h,m/=h,l/=m,d*l*p))}return G1=u,G1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j1,G5;function iW(){if(G5)return j1;G5=1;var e=rW();return j1=e,j1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var V1,j5;function oW(){if(j5)return V1;j5=1;var e=iW(),n=it(),t=Oe(),r=ar();function i(o,a,u,s){var c,l,d,p,m;if(l=t(u,o),l>r)for(p=l,m=n(o-1);m>a;m--)p*=(m+1)*s/((o-m)*u),l+=p;else if(d=n(o*u),d<=a+1&&(d=n(a+2)),l=t(u,d)*t(s,o-d),l*=e(n(o),n(d)),l===0)for(m=d-1;m>a;m--)l+=t(u,m)*t(s,o-m),l*=e(n(o),n(m));else{for(p=l,c=l,m=d-1;m>a;m--)p*=(m+1)*s/((o-m)*u),l+=p;for(p=c,m=d+1;m<=o;m++)p*=(o-m+1)*u/(m*s),l+=p}return l}return V1=i,V1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var W1,V5;function aW(){if(V5)return W1;V5=1;var e=J2();function n(t,r,i,o,a,u,s){var c,l,d,p;if(c=e(t,r,i,o,u),s&&(s[1]=c),c/=t,c===0)return c;for(d=1,l=1,p=0;p<a-1;++p)l*=(t+r+p)*i/(t+p+1),d+=l;return c*=d,c}return W1=n,W1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var X1,W5;function uW(){if(W5)return X1;W5=1;var e=Xu(),n=Io(),t=wn(),r=be(),i=Ce(),o=Oe(),a=we(),u=ar(),s=xt(),c=ri(),l=To(),d=ni(),p={maxTerms:100};function m(h,v,_,g){var b=1-v,y=1;return E;function E(){var $=g/h;return h+=1,g*=b*_/y,y+=1,b+=1,$}}function f(h,v,_,g,b,y,E){var $,T,C,L,A,w,S,I;return b?(S=h+v,T=h+l-.5,C=v+l-.5,L=S+l-.5,$=e(S)/(e(h)*e(v)),A=a(L/C)*(v-.5),w=a(_*L/T)*h,A>c&&A<s&&w>c&&w<s?(h*v<C*10?$*=i((v-.5)*t(h/C)):$*=o(L/C,v-.5),$*=o(_*L/T,h),$*=r(T/d),y&&(y[1]=$*o(E,v))):($=a($)+A+w+(a(T)-1)/2,y&&(y[1]=i($+v*a(E))),$=i($))):$=o(_,h),$<u?g:(I=m(h,v,_,$),p.initialValue=g,n(I,p))}return X1=f,X1}var K1,X5;function TT(){if(X5)return K1;X5=1;var e=ue(),n=zr(),t=it(),r=wn(),i=U2(),o=Uu(),a=be(),u=Ce(),s=Oe(),c=ur(),l=Ft(),d=sr(),p=ar(),m=pT(),f=X2(),h=qt(),v=VV(),_=WV(),g=J2(),b=zV(),y=oW(),E=aW(),$=uW(),T=1/h;function C(L,A,w,S,I,R,P,k){var B,D,q,M,Z,G,z,te,ae,j,Y,V;if(V=1-L,z=k,te=k+P,R[te]=-1,e(L)||L<0||L>1)return R[z]=NaN,R[te]=NaN,R;if(S){if(A<0||w<0)return R[z]=NaN,R[te]=NaN,R;if(A===0){if(w===0)return R[z]=NaN,R[te]=NaN,R;if(w>0)return R[z]=I?0:1,R}else if(w===0&&A>0)return R[z]=I?1:0,R}else if(A<=0||w<=0)return R[z]=NaN,R[te]=NaN,R;return L===0?(A===1?R[te]=1:R[te]=A<1?d/2:p*2,I?(R[z]=S?1:o(A,w),R):(R[z]=0,R)):L===1?(w===1?R[te]=1:R[te]=w<1?d/2:p*2,I?R[z]=0:R[z]=S?1:o(A,w),R):A===.5&&w===.5?(R[te]=T*a(V*L),Y=i(a(I?V:L)),Y/=f,S||(Y*=h),R[z]=Y,R):(A===1&&(G=w,w=A,A=G,G=V,V=L,L=G,I=!I),w===1?A===1?(R[z]=I?V:L,R[te]=1,R):(R[te]=A*s(L,A-1),V<.5?Y=I?-n(A*r(-V)):u(A*r(-V)):Y=I?-(s(L,A)-1):s(L,A),S||(Y/=A),R[z]=Y,R):(l(A,w)<=1?(L>.5&&(G=w,w=A,A=G,G=V,V=L,L=G,I=!I),c(A,w)<=1?A>=l(.2,w)||s(L,A)<=.9?I?(q=-(S?1:o(A,w)),I=!1,q=-$(A,w,L,q,S,R,V)):q=$(A,w,L,0,S,R,V):(G=w,w=A,A=G,G=V,V=L,L=G,I=!I,V>=.3?I?(q=-(S?1:o(A,w)),I=!1,q=-$(A,w,L,q,S,R,V)):q=$(A,w,L,0,S,R,V):(S?D=1:D=_(A+w,A,20),q=E(A,w,L,V,20,S,R),I?(q-=S?1:o(A,w),I=!1,q=-v(A+20,w,L,V,q,D,S)):q=v(A+20,w,L,V,q,D,S))):w<=1||L<.1&&s(w*L,A)<=.7?I?(q=-(S?1:o(A,w)),I=!1,q=-$(A,w,L,q,S,R,V)):q=$(A,w,L,0,S,R,V):(G=w,w=A,A=G,G=V,V=L,L=G,I=!I,V>=.3?I?(q=-(S?1:o(A,w)),I=!1,q=-$(A,w,L,q,S,R,V)):q=$(A,w,L,0,S,R,V):A>=15?I?(q=-(S?1:o(A,w)),I=!1,q=-v(A,w,L,V,q,1,S)):q=v(A,w,L,V,0,1,S):(S?D=1:D=_(A+w,A,20),q=E(A,w,L,V,20,S,R),I?(q-=S?1:o(A,w),I=!1,q=-v(A+20,w,L,V,q,D,S)):q=v(A+20,w,L,V,q,D,S)))):(A<w?B=A-(A+w)*L:B=(A+w)*V-w,B<0&&(G=w,w=A,A=G,G=V,V=L,L=G,I=!I),w<40?t(A)===A&&t(w)===w&&A<m-100?(ae=A-1,j=w+ae,q=y(j,ae,L,V),S||(q*=o(A,w))):w*L<=.7?I?(q=-(S?1:o(A,w)),I=!1,q=-$(A,w,L,q,S,R,V)):q=$(A,w,L,0,S,R,V):A>15?(j=t(w),j===w&&(j-=1),M=w-j,S?D=1:D=_(A+M,M,j),q=E(M,A,V,L,j,S),q=v(A,M,L,V,q,1,S),q/=D):S?(j=t(w),M=w-j,M<=0&&(j-=1,M+=1),q=E(M,A,V,L,j,S),q+=E(A,M,L,V,20,S),I&&(q-=1),q=v(A+20,M,L,V,q,1,S),I&&(q=-q,I=!1)):q=b(A,w,L,V,S,R):q=b(A,w,L,V,S,R)),R[te]<0&&(R[te]=g(A,w,L,V,!0)),Z=V*L,R[te]!==0&&(d*Z<R[te]?R[te]=d/2:R[te]/=Z),R[z]=I?(S?1:o(A,w))-q:q,R))}return K1=C,K1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y1,K5;function sW(){if(K5)return Y1;K5=1;var e=TT();function n(t,r,i,o,a){return e(t,r,i,o,a,[0,0],1,0)}return Y1=n,Y1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J1,Y5;function IT(){if(Y5)return J1;Y5=1;var e=rn(),n=sW(),t=TT();return e(n,"assign",t),J1=n,J1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var z1,J5;function cW(){if(J5)return z1;J5=1;var e=IT().assign;function n(t,r,i,o,a){var u=[0,0];return o=o!==!1,a=a===!0,e(t,r,i,o,a,u,1,0),u[0]}return z1=n,z1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q1,z5;function Lo(){if(z5)return Q1;z5=1;var e=cW();return Q1=e,Q1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z1,Q5;function lW(){if(Q5)return Z1;Q5=1;var e=Lo(),n=ue();function t(r,i,o){return n(r)||n(i)||n(o)||i<=0||o<=0?NaN:r<=0?0:r>=1?1:e(r,i,o)}return Z1=t,Z1}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ep,Z5;function dW(){if(Z5)return ep;Z5=1;function e(n){return t;function t(){return n}}return ep=e,ep}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var np,e8;function An(){if(e8)return np;e8=1;var e=dW();return np=e,np}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tp,n8;function fW(){if(n8)return tp;n8=1;var e=An(),n=Lo(),t=ue();function r(i,o){if(t(i)||t(o)||i<=0||o<=0)return e(NaN);return a;function a(u){return t(u)?NaN:u<=0?0:u>=1?1:n(u,i,o)}}return tp=r,tp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rp,t8;function pW(){if(t8)return rp;t8=1;var e=rn(),n=lW(),t=fW();return e(n,"factory",t),rp=n,rp}var mW=pW();const Xh=rt(mW);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ip,r8;function LT(){if(r8)return ip;r8=1;var e=.9189385332046728;return ip=e,ip}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var op,i8;function hW(){if(i8)return op;i8=1;var e=[1276642195630063e-46,-3401102254316749e-45,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2868042435334643e-35,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,981082564692473e-23,-1384948176067564e-20,.16663894804518634],n=e.length;function t(r){var i,o,a,u,s;if(r<-1.1||r>1.1)return NaN;for(a=0,u=0,i=2*r,s=0;s<n;s++)o=a,a=u,u=i*a-o+e[s];return(u-o)*.5}return op=t,op}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var ap,o8;function vW(){if(o8)return ap;o8=1;var e=Oe(),n=hW(),t=9490626562425156e-8,r=3745194030963158e291;function i(o){return o<10?NaN:o>=r?0:o<t?n(2*e(10/o,2)-1)/o:1/(o*12)}return ap=i,ap}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var up,a8;function _W(){if(a8)return up;a8=1;var e=ti(),n=wn(),t=at(),r=ur(),i=Ft(),o=we(),a=LT(),u=on(),s=Re(),c=vW();function l(d,p){var m,f,h;return f=i(d,p),h=r(d,p),f<0?NaN:f===0?s:h===s?u:f>=10?(m=c(f)+c(h)-c(f+h),-.5*o(h)+a+m+(f-.5)*o(f/(f+h))+h*n(-f/(f+h))):h>=10?(m=c(h)-c(f+h),e(f)+m+f-f*o(f+h)+(h-.5)*n(-f/(f+h))):o(t(f)*(t(h)/t(f+h)))}return up=l,up}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sp,u8;function RT(){if(u8)return sp;u8=1;var e=_W();return sp=e,sp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cp,s8;function gW(){if(s8)return cp;s8=1;var e=RT(),n=ue(),t=wn(),r=Ce(),i=we(),o=Re();function a(u,s,c){var l;return n(u)||n(s)||n(c)||s<=0||c<=0?NaN:u<0||u>1?0:u===0?s<1?o:s>1?0:c:u===1?c<1?o:c>1?0:s:(l=(s-1)*i(u),l+=(c-1)*t(-u),l-=e(s,c),r(l))}return cp=a,cp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lp,c8;function bW(){if(c8)return lp;c8=1;var e=An(),n=RT(),t=ue(),r=wn(),i=Ce(),o=we(),a=Re();function u(s,c){var l;if(t(s)||t(c)||s<=0||c<=0)return e(NaN);return l=n(s,c),d;function d(p){var m;return t(p)?NaN:p<0||p>1?0:p===0?s<1?a:s>1?0:c:p===1?c<1?a:c>1?0:s:(m=-l,m+=(s-1)*o(p),m+=(c-1)*r(-p),i(m))}}return lp=u,lp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dp,l8;function yW(){if(l8)return dp;l8=1;var e=rn(),n=gW(),t=bW();return e(n,"factory",t),dp=n,dp}var EW=yW();const SW=rt(EW);/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fp,d8;function wW(){if(d8)return fp;d8=1;function e(n){var t,r,i;return n===0?-.0005087819496582806:(n<0?t=-n:t=n,t<=1?(r=-.0005087819496582806+n*(-.008368748197417368+n*(.03348066254097446+n*(-.012692614766297404+n*(-.03656379714117627+n*(.02198786811111689+n*(.008226878746769157+n*(-.005387729650712429+n*(0+n*0)))))))),i=1+n*(-.9700050433032906+n*(-1.5657455823417585+n*(1.5622155839842302+n*(.662328840472003+n*(-.7122890234154284+n*(-.05273963823400997+n*(.07952836873415717+n*(-.0023339375937419+n*.0008862163904564247))))))))):(n=1/n,r=0+n*(0+n*(-.005387729650712429+n*(.008226878746769157+n*(.02198786811111689+n*(-.03656379714117627+n*(-.012692614766297404+n*(.03348066254097446+n*(-.008368748197417368+n*-.0005087819496582806)))))))),i=.0008862163904564247+n*(-.0023339375937419+n*(.07952836873415717+n*(-.05273963823400997+n*(-.7122890234154284+n*(.662328840472003+n*(1.5622155839842302+n*(-1.5657455823417585+n*(-.9700050433032906+n*1))))))))),r/i)}return fp=e,fp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pp,f8;function AW(){if(f8)return pp;f8=1;function e(n){var t,r,i;return n===0?-.20243350835593876:(n<0?t=-n:t=n,t<=1?(r=-.20243350835593876+n*(.10526468069939171+n*(8.3705032834312+n*(17.644729840837403+n*(-18.851064805871424+n*(-44.6382324441787+n*(17.445385985570866+n*(21.12946554483405+n*-3.6719225470772936))))))),i=1+n*(6.242641248542475+n*(3.971343795334387+n*(-28.66081804998+n*(-20.14326346804852+n*(48.560921310873994+n*(10.826866735546016+n*(-22.643693341313973+n*1.7211476576120028)))))))):(n=1/n,r=-3.6719225470772936+n*(21.12946554483405+n*(17.445385985570866+n*(-44.6382324441787+n*(-18.851064805871424+n*(17.644729840837403+n*(8.3705032834312+n*(.10526468069939171+n*-.20243350835593876))))))),i=1.7211476576120028+n*(-22.643693341313973+n*(10.826866735546016+n*(48.560921310873994+n*(-20.14326346804852+n*(-28.66081804998+n*(3.971343795334387+n*(6.242641248542475+n*1)))))))),r/i)}return pp=e,pp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mp,p8;function $W(){if(p8)return mp;p8=1;function e(n){var t,r,i;return n===0?-.1311027816799519:(n<0?t=-n:t=n,t<=1?(r=-.1311027816799519+n*(-.16379404719331705+n*(.11703015634199525+n*(.38707973897260434+n*(.3377855389120359+n*(.14286953440815717+n*(.029015791000532906+n*(.0021455899538880526+n*(-6794655751811263e-22+n*(28522533178221704e-24+n*-681149956853777e-24))))))))),i=1+n*(3.4662540724256723+n*(5.381683457070069+n*(4.778465929458438+n*(2.5930192162362027+n*(.848854343457902+n*(.15226433829533179+n*(.011059242293464892+n*(0+n*(0+n*0)))))))))):(n=1/n,r=-681149956853777e-24+n*(28522533178221704e-24+n*(-6794655751811263e-22+n*(.0021455899538880526+n*(.029015791000532906+n*(.14286953440815717+n*(.3377855389120359+n*(.38707973897260434+n*(.11703015634199525+n*(-.16379404719331705+n*-.1311027816799519))))))))),i=0+n*(0+n*(0+n*(.011059242293464892+n*(.15226433829533179+n*(.848854343457902+n*(2.5930192162362027+n*(4.778465929458438+n*(5.381683457070069+n*(3.4662540724256723+n*1)))))))))),r/i)}return mp=e,mp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hp,m8;function TW(){if(m8)return hp;m8=1;function e(n){var t,r,i;return n===0?-.0350353787183178:(n<0?t=-n:t=n,t<=1?(r=-.0350353787183178+n*(-.0022242652921344794+n*(.018557330651423107+n*(.009508047013259196+n*(.0018712349281955923+n*(.00015754461742496055+n*(460469890584318e-20+n*(-2304047769118826e-25+n*26633922742578204e-28))))))),i=1+n*(1.3653349817554064+n*(.7620591645536234+n*(.22009110576413124+n*(.03415891436709477+n*(.00263861676657016+n*(7646752923027944e-20+n*(0+n*0)))))))):(n=1/n,r=26633922742578204e-28+n*(-2304047769118826e-25+n*(460469890584318e-20+n*(.00015754461742496055+n*(.0018712349281955923+n*(.009508047013259196+n*(.018557330651423107+n*(-.0022242652921344794+n*-.0350353787183178))))))),i=0+n*(0+n*(7646752923027944e-20+n*(.00263861676657016+n*(.03415891436709477+n*(.22009110576413124+n*(.7620591645536234+n*(1.3653349817554064+n*1)))))))),r/i)}return hp=e,hp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vp,h8;function IW(){if(h8)return vp;h8=1;function e(n){var t,r,i;return n===0?-.016743100507663373:(n<0?t=-n:t=n,t<=1?(r=-.016743100507663373+n*(-.0011295143874558028+n*(.001056288621524929+n*(.00020938631748758808+n*(14962478375834237e-21+n*(44969678992770644e-23+n*(4625961635228786e-24+n*(-2811287356288318e-29+n*9905570997331033e-32))))))),i=1+n*(.5914293448864175+n*(.1381518657490833+n*(.016074608709367652+n*(.0009640118070051656+n*(27533547476472603e-21+n*(282243172016108e-21+n*(0+n*0)))))))):(n=1/n,r=9905570997331033e-32+n*(-2811287356288318e-29+n*(4625961635228786e-24+n*(44969678992770644e-23+n*(14962478375834237e-21+n*(.00020938631748758808+n*(.001056288621524929+n*(-.0011295143874558028+n*-.016743100507663373))))))),i=0+n*(0+n*(282243172016108e-21+n*(27533547476472603e-21+n*(.0009640118070051656+n*(.016074608709367652+n*(.1381518657490833+n*(.5914293448864175+n*1)))))))),r/i)}return vp=e,vp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var _p,v8;function LW(){if(v8)return _p;v8=1;var e=ue(),n=be(),t=we(),r=Re(),i=on(),o=wW(),a=AW(),u=$W(),s=TW(),c=IW(),l=.08913147449493408,d=2.249481201171875,p=.807220458984375,m=.9399557113647461,f=.9836282730102539;function h(v){var _,g,b,y,E;return e(v)?NaN:v===0?r:v===2?i:v===1?0:v>2||v<0?NaN:(v>1?(_=-1,b=2-v):(_=1,b=v),v=1-b,v<=.5?(y=v*(v+10),E=o(v),_*(y*l+y*E)):b>=.25?(y=n(-2*t(b)),b-=.25,E=a(b),_*(y/(d+E))):(b=n(-t(b)),b<3?(g=b-1.125,E=u(g),_*(p*b+E*b)):b<6?(g=b-3,E=s(g),_*(m*b+E*b)):(g=b-6,E=c(g),_*(f*b+E*b))))}return _p=h,_p}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gp,_8;function Ro(){if(_8)return gp;_8=1;var e=LW();return gp=e,gp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var bp,g8;function RW(){if(g8)return bp;g8=1;var e=ue(),n=U2(),t=be(),r=aT(),i=6123233995736766e-32;function o(a){var u;return e(a)?NaN:a<-1||a>1?NaN:a>.5?2*n(t(.5-.5*a)):(u=r-n(a),u+=i,u+=r,u)}return bp=o,bp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yp,b8;function CW(){if(b8)return yp;b8=1;var e=RW();return yp=e,yp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ep,y8;function z2(){if(y8)return Ep;y8=1;var e=1.4142135623730951;return Ep=e,Ep}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sp,E8;function OW(){if(E8)return Sp;E8=1;function e(n){return n===0?.16666666666666666:.16666666666666666+n*.16666666666666666}return Sp=e,Sp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wp,S8;function NW(){if(S8)return wp;S8=1;function e(n){return n===0?.058333333333333334:.058333333333333334+n*(.06666666666666667+n*.008333333333333333)}return wp=e,wp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ap,w8;function kW(){if(w8)return Ap;w8=1;function e(n){return n===0?.0251984126984127:.0251984126984127+n*(.026785714285714284+n*(.0017857142857142857+n*.0001984126984126984))}return Ap=e,Ap}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $p,A8;function MW(){if(A8)return $p;A8=1;function e(n){return n===0?.012039792768959435:.012039792768959435+n*(.010559964726631394+n*(-.0011078042328042327+n*(.0003747795414462081+n*27557319223985893e-22)))}return $p=e,$p}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tp,$8;function PW(){if($8)return Tp;$8=1;function e(n){return n===0?.003837005972422639:.003837005972422639+n*(.00610392115600449+n*(-.0016095979637646305+n*(.0005945867404200738+n*(-6270542728876062e-20+n*2505210838544172e-23))))}return Tp=e,Tp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ip,T8;function DW(){if(T8)return Ip;T8=1;function e(n){return n===0?.0032177478835464946:.0032177478835464946+n*(.0010898206731540065+n*(-.0012579159844784845+n*(.0006908420797309686+n*(-.00016376804137220805+n*(154012654012654e-19+n*16059043836821613e-26)))))}return Ip=e,Ip}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lp,I8;function FW(){if(I8)return Lp;I8=1;function e(n){return n===0?.001743826229834001:.001743826229834001+n*(3353097688001788e-20+n*(-.0007624513544032393+n*(.0006451304695145635+n*(-.000249472580470431+n*(49255746366361444e-21+n*(-39851014346715405e-22+n*7647163731819816e-28))))))}return Lp=e,Lp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rp,L8;function qW(){if(L8)return Rp;L8=1;function e(n){return n===0?.0009647274732138864:.0009647274732138864+n*(-.0003110108632631878+n*(-.00036307660358786886+n*(.0005140660578834113+n*(-.00029133414466938067+n*(9086710793521991e-20+n*(-15303004486655377e-21+n*(10914179173496788e-22+n*28114572543455206e-31)))))))}return Rp=e,Rp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cp,R8;function xW(){if(R8)return Cp;R8=1;function e(n){return n===0?.0005422926281312969:.0005422926281312969+n*(-.0003694266780000966+n*(-.00010230378073700413+n*(.00035764655430568635+n*(-.00028690924218514614+n*(.00012645437628698076+n*(-33202652391372056e-21+n*(4890304529197534e-21+n*(-3123956959982987e-22+n*822063524662433e-32))))))))}return Cp=e,Cp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Op,C8;function BW(){if(C8)return Op;C8=1;var e=K2(),n=Bt(),t=be(),r=qt(),i=OW(),o=NW(),a=kW(),u=MW(),s=PW(),c=DW(),l=FW(),d=qW(),p=xW(),m=0,f=[1,0,0,0,0,0,0,0,0,0];function h(v,_){var g,b;return b=e(v/2,.5)*t(v*r)*(_-.5),g=1/v,f[1]=i(g),f[2]=o(g),f[3]=a(g),f[4]=u(g),f[5]=s(g),f[6]=c(g),f[7]=l(g),f[8]=d(g),f[9]=p(g),m+b*n(f,b*b)}return Op=h,Op}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Np,O8;function HW(){if(O8)return Np;O8=1;var e=K2(),n=Bt(),t=be(),r=Oe(),i=qt(),o=[0,0,0,0,0,0,0];function a(u,s){var c,l,d,p,m,f,h,v;return v=e(u/2,.5)*t(u*i)*s,p=u+2,m=u+4,f=u+6,o[0]=1,o[1]=-(u+1)/(2*p),p*=u+2,o[2]=-u*(u+1)*(u+3)/(8*p*m),p*=u+2,o[3]=-u*(u+1)*(u+5)*((3*u+7)*u-2)/(48*p*m*f),p*=u+2,m*=u+4,o[4]=-u*(u+1)*(u+7)*(((((15*u+154)*u+465)*u+286)*u-336)*u+64)/(384*p*m*f*(u+8)),p*=u+2,o[5]=-u*(u+1)*(u+3)*(u+9)*((((((35*u+452)*u+1573)*u+600)*u-2020)*u+928)*u-128)/(1280*p*m*f*(u+8)*(u+10)),p*=u+2,m*=u+4,f*=u+6,o[6]=-u*(u+1)*(u+11)*(((((((((((945*u+31506)*u+425858)*u+2980236)*u+11266745)*u+20675018)*u+7747124)*u-22574632)*u-8565600)*u+18108416)*u-7099392)*u+884736)/(46080*p*m*f*(u+8)*(u+10)*(u+12)),h=t(u),d=r(h*v,1/u),l=d*d,c=n(o,l),c*=h,c/=d,-c}return Np=a,Np}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var kp,N8;function UW(){if(N8)return kp;N8=1;var e=Ro(),n=zr(),t=be(),r=Oe(),i=X2(),o=z2();function a(u,s){var c,l,d,p,m,f,h;return u>1e20?-e(2*s)*o:(c=1/(u-.5),l=48/(c*c),d=((20700*c/l-98)*c-16)*c+96.36,p=((94.5/(l+d)-3)/l+1)*t(c*i)*u,h=r(p*2*s,2/u),h>.05+c?(f=-e(2*s)*o,h=f*f,u<5&&(d+=.3*(u-4.5)*(f+.6)),d+=(((.05*p*f-5)*f-7)*f-2)*f+l,h=(((((.4*h+6.3)*h+36)*h+94.5)/d-h-3)/l+1)*f,h=n(c*h*h)):h=((1/(((u+6)/(u*h)-.089*p-.822)*(u+2)*3)+.5/(u+4))*h-1)*(u+1)/(u+2)+1/h,m=t(u*h),-m)}return kp=a,kp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Mp,k8;function GW(){if(k8)return Mp;k8=1;var e=Ro(),n=it(),t=Zr(),r=vT(),i=CW(),o=be(),a=ye(),u=Y2(),s=Oe(),c=$o(),l=z2(),d=qt(),p=BW(),m=HW(),f=UW(),h=268435456,v=1/3,_=106/3,g=.8549879733383485;function b(y,E,$){var T,C,L,A,w,S,I,R,P,k,B,D,q,M,Z,G;if(w=0,E>$?(I=$,$=E,E=I,A=!0):A=!1,n(y)===y&&y<20)switch(C=t(1,_),n(y)){case 1:E===.5?w=0:w=-u(d*E)/c(d*E);break;case 2:w=(2*E-1)/o(2*E*$);break;case 4:S=4*E*$,L=o(S),q=4*u(i(L)/3)/L,M=o(q-4),w=E-.5<0?-M:M;break;case 6:if(E<1e-150)return(A?-1:1)*f(y,E);Z=4*(E-E*E),G=s(Z,v),D=6*(1+g*(1/G-1));do P=D*D,k=P*P,B=D*k,R=D,D=2*(8*Z*B-270*P+2187)/(5*(4*Z*k-216*D-243));while(a((D-R)/D)>C);D=o(D-y),w=E-.5<0?-D:D;break;default:y>h?w=e(2*E)*l:y<3?(T=.2742-y*.0242143,E>T?w=p(y,E):w=m(y,E)):(T=t(1,r(y/-.654)),E>T?w=f(y,E):w=m(y,E))}else y>h?w=-e(2*E)*l:y<3?(T=.2742-y*.0242143,E>T?w=p(y,E):w=m(y,E)):(T=t(1,r(y/-.654)),E>T?w=f(y,E):w=m(y,E));return A?-w:w}return Mp=b,Mp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Pp,M8;function jW(){if(M8)return Pp;M8=1;var e=GW();function n(t,r,i){var o,a,u,s;return a=r/2,u=1-a,o=t*2,s=e(o,a,u),i&&(i.value=s*s/(o+s*s)),o/(o+s*s)}return Pp=n,Pp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Dp,P8;function VW(){if(P8)return Dp;P8=1;var e=Bt(),n=Ro(),t=be(),r=Ce(),i=z2(),o=[0,0,0,0,0,0,0],a=[0,0,0,0];function u(s,c,l){var d,p,m,f,h,v,_;return d=n(2*l),d/=-t(s/2),a[0]=d,v=c-s,f=v*v,h=f*v,o[0]=-v*i/2,o[1]=(1-2*v)/8,o[2]=-(v*i/48),o[3]=-1/192,o[4]=-v*i/3840,o[5]=0,o[6]=0,a[1]=e(o,d),o[0]=v*i*(3*v-2)/12,o[1]=(20*f-12*v+1)/128,o[2]=v*i*(20*v-1)/960,o[3]=(16*f+30*v-15)/4608,o[4]=v*i*(21*v+32)/53760,o[5]=(-(32*f)+63)/368640,o[6]=-v*i*(120*v+17)/25804480,a[2]=e(o,d),o[0]=v*i*(-75*f+80*v-16)/480,o[1]=(-1080*h+868*f-90*v-45)/9216,o[2]=v*i*(-1190*f+84*v+373)/53760,o[3]=(-2240*h-2508*f+2100*v-165)/368640,o[4]=0,o[5]=0,o[6]=0,a[3]=e(o,d),m=e(a,1/s),p=m*m,_=-r(-p/2),p===0?.5:(1+m*t((1+_)/p))/2}return Dp=u,Dp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Fp,D8;function CT(){if(D8)return Fp;D8=1;var e=we(),n=sr(),t=n/4;function r(i,o){return a;function a(u){var s,c,l;return l=1-u,l===0?[-t,-t]:u===0?[-t,-t]:(c=e(u)+o*e(l)+i,s=1/u-o/l,[c,s])}}return Fp=r,Fp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qp,F8;function WW(){if(F8)return qp;F8=1;var e=ue();function n(t){return t===0||e(t)?t:t<0?-1:1}return qp=n,qp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xp,q8;function Yu(){if(q8)return xp;q8=1;var e=WW();return xp=e,xp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Bp,x8;function OT(){if(x8)return Bp;x8=1;var e=Yu(),n=ye(),t=Zr(),r=sr();function i(o,a,u,s,c,l){var d,p,m,f,h,v,_,g,b,y;b=0,d=0,h=a,f=t(1,1-c),_=r,p=r,m=r,v=l;do{if(d=b,m=p,p=_,g=o(h),b=g[0],y=g[1],v-=1,b===0)break;if(y===0?(d===0&&(h===u?a=s:a=u,d=o(a),_=a-h),e(d)*e(b)<0?_<0?_=(h-u)/2:_=(h-s)/2:_<0?_=(h-s)/2:_=(h-u)/2):_=b/y,n(_*2)>n(m)&&(_=_>0?(h-u)/2:(h-s)/2),a=h,h-=_,h<=u){if(_=.5*(a-u),h=a-_,h===u||h===s)break}else if(h>=s&&(_=.5*(a-s),h=a-_,h===u||h===s))break;_>0?s=a:u=a}while(v&&n(h*f)<n(_));return h}return Bp=i,Bp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hp,B8;function XW(){if(B8)return Hp;B8=1;function e(n){return n===0?-1:-1+n*(-5+n*5)}return Hp=e,Hp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Up,H8;function KW(){if(H8)return Up;H8=1;function e(n){return n===0?1:1+n*(21+n*(-69+n*46))}return Up=e,Up}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gp,U8;function YW(){if(U8)return Gp;U8=1;function e(n){return n===0?7:7+n*(-2+n*(33+n*(-62+n*31)))}return Gp=e,Gp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jp,G8;function JW(){if(G8)return jp;G8=1;function e(n){return n===0?25:25+n*(-52+n*(-17+n*(88+n*(-115+n*46))))}return jp=e,jp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vp,j8;function zW(){if(j8)return Vp;j8=1;function e(n){return n===0?7:7+n*(12+n*(-78+n*52))}return Vp=e,Vp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wp,V8;function QW(){if(V8)return Wp;V8=1;function e(n){return n===0?-7:-7+n*(2+n*(183+n*(-370+n*185)))}return Wp=e,Wp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xp,W8;function ZW(){if(W8)return Xp;W8=1;function e(n){return n===0?-533:-533+n*(776+n*(-1835+n*(10240+n*(-13525+n*5410))))}return Xp=e,Xp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kp,X8;function eX(){if(X8)return Kp;X8=1;function e(n){return n===0?-1579:-1579+n*(3747+n*(-3372+n*(-15821+n*(45588+n*(-45213+n*15071)))))}return Kp=e,Kp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yp,K8;function nX(){if(K8)return Yp;K8=1;function e(n){return n===0?449:449+n*(-1259+n*(-769+n*(6686+n*(-9260+n*3704))))}return Yp=e,Yp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jp,Y8;function tX(){if(Y8)return Jp;Y8=1;function e(n){return n===0?63149:63149+n*(-151557+n*(140052+n*(-727469+n*(2239932+n*(-2251437+n*750479)))))}return Jp=e,Jp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zp,J8;function rX(){if(J8)return zp;J8=1;function e(n){return n===0?29233:29233+n*(-78755+n*(105222+n*(146879+n*(-1602610+n*(3195183+n*(-2554139+n*729754))))))}return zp=e,zp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qp,z8;function iX(){if(z8)return Qp;z8=1;function e(n){return n===0?1:1+n*(-13+n*13)}return Qp=e,Qp}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zp,Q8;function oX(){if(Q8)return Zp;Q8=1;function e(n){return n===0?1:1+n*(21+n*(-69+n*46))}return Zp=e,Zp}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var em,Z8;function aX(){if(Z8)return em;Z8=1;var e=Bt(),n=Ro(),t=ye(),r=Ce(),i=we(),o=be(),a=$o(),u=Y2(),s=CT(),c=OT(),l=XW(),d=KW(),p=YW(),m=JW(),f=zW(),h=QW(),v=ZW(),_=eX(),g=nX(),b=tX(),y=rX(),E=iX(),$=oX(),T=[0,0,0,0,0,0],C=[0,0,0,0];function L(A,w,S){var I,R,P,k,B,D,q,M,Z,G,z,te,ae,j,Y,V,Ee,me,ne,se;return B=n(2*A)/-o(w/2),me=a(S),Ee=u(S),C[0]=B,Y=me*me,V=Ee*Ee,ae=me*Ee,te=ae*ae,z=te*ae,G=te*te,Z=te*z,M=z*z,q=G*z,T[0]=(2*Y-1)/(3*ae),T[1]=-l(Y)/(36*te),T[2]=d(Y)/(1620*z),T[3]=p(Y)/(6480*G),T[4]=m(Y)/(90720*Z),T[5]=0,C[1]=e(T,B),T[0]=-f(Y)/(405*z),T[1]=h(Y)/(2592*G),T[2]=-v(Y)/(204120*Z),T[3]=-_(Y)/(2099520*M),T[4]=0,T[5]=0,C[2]=e(T,B),T[0]=g(Y)/(102060*Z),T[1]=-b(Y)/(20995200*M),T[2]=y(Y)/(36741600*q),T[3]=0,T[4]=0,T[5]=0,C[3]=e(T,B),D=e(C,1/w),P=Ee/me,P*=P,j=-(D*D)/(2*Y)+i(Y)+V*i(V)/Y,t(D)<.7?(T[0]=Y,T[1]=ae,T[2]=(1-2*Y)/3,T[3]=E(Y)/(36*ae),T[4]=$(Y)/(270*te),T[5]=0,se=e(T,D)):(ne=r(j),T[0]=ne,T[1]=P,T[2]=0,T[3]=3*P*(3*P+1)/6,T[4]=4*P*(4*P+1)*(4*P+2)/24,T[5]=5*P*(5*P+1)*(5*P+2)*(5*P+3)/120,se=e(T,ne),(se-Y)*D<0&&(se=1-se)),D<0?(R=0,I=Y):(R=Y,I=1),(se<R||se>I)&&(se=(R+I)/2),k=s(-j,P),se=c(k,se,R,I,32,100),se}return em=L,em}var zo={exports:{}},Qo={exports:{}},nm,e9;function uX(){if(e9)return nm;e9=1;var e=1e3,n=e*60,t=n*60,r=t*24,i=r*365.25;nm=function(c,l){l=l||{};var d=typeof c;if(d==="string"&&c.length>0)return o(c);if(d==="number"&&isNaN(c)===!1)return l.long?u(c):a(c);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(c))};function o(c){if(c=String(c),!(c.length>100)){var l=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(c);if(l){var d=parseFloat(l[1]),p=(l[2]||"ms").toLowerCase();switch(p){case"years":case"year":case"yrs":case"yr":case"y":return d*i;case"days":case"day":case"d":return d*r;case"hours":case"hour":case"hrs":case"hr":case"h":return d*t;case"minutes":case"minute":case"mins":case"min":case"m":return d*n;case"seconds":case"second":case"secs":case"sec":case"s":return d*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return d;default:return}}}}function a(c){return c>=r?Math.round(c/r)+"d":c>=t?Math.round(c/t)+"h":c>=n?Math.round(c/n)+"m":c>=e?Math.round(c/e)+"s":c+"ms"}function u(c){return s(c,r,"day")||s(c,t,"hour")||s(c,n,"minute")||s(c,e,"second")||c+" ms"}function s(c,l,d){if(!(c<l))return c<l*1.5?Math.floor(c/l)+" "+d:Math.ceil(c/l)+" "+d+"s"}return nm}var n9;function sX(){return n9||(n9=1,(function(e,n){n=e.exports=i.debug=i.default=i,n.coerce=s,n.disable=a,n.enable=o,n.enabled=u,n.humanize=uX(),n.names=[],n.skips=[],n.formatters={};var t;function r(c){var l=0,d;for(d in c)l=(l<<5)-l+c.charCodeAt(d),l|=0;return n.colors[Math.abs(l)%n.colors.length]}function i(c){function l(){if(l.enabled){var d=l,p=+new Date,m=p-(t||p);d.diff=m,d.prev=t,d.curr=p,t=p;for(var f=new Array(arguments.length),h=0;h<f.length;h++)f[h]=arguments[h];f[0]=n.coerce(f[0]),typeof f[0]!="string"&&f.unshift("%O");var v=0;f[0]=f[0].replace(/%([a-zA-Z%])/g,function(g,b){if(g==="%%")return g;v++;var y=n.formatters[b];if(typeof y=="function"){var E=f[v];g=y.call(d,E),f.splice(v,1),v--}return g}),n.formatArgs.call(d,f);var _=l.log||n.log||console.log.bind(console);_.apply(d,f)}}return l.namespace=c,l.enabled=n.enabled(c),l.useColors=n.useColors(),l.color=r(c),typeof n.init=="function"&&n.init(l),l}function o(c){n.save(c),n.names=[],n.skips=[];for(var l=(typeof c=="string"?c:"").split(/[\s,]+/),d=l.length,p=0;p<d;p++)l[p]&&(c=l[p].replace(/\*/g,".*?"),c[0]==="-"?n.skips.push(new RegExp("^"+c.substr(1)+"$")):n.names.push(new RegExp("^"+c+"$")))}function a(){n.enable("")}function u(c){var l,d;for(l=0,d=n.skips.length;l<d;l++)if(n.skips[l].test(c))return!1;for(l=0,d=n.names.length;l<d;l++)if(n.names[l].test(c))return!0;return!1}function s(c){return c instanceof Error?c.stack||c.message:c}})(Qo,Qo.exports)),Qo.exports}var t9;function NT(){return t9||(t9=1,(function(e,n){var t={};n=e.exports=sX(),n.log=o,n.formatArgs=i,n.save=a,n.load=u,n.useColors=r,n.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:s(),n.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function r(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}n.formatters.j=function(c){try{return JSON.stringify(c)}catch(l){return"[UnexpectedJSONParseError]: "+l.message}};function i(c){var l=this.useColors;if(c[0]=(l?"%c":"")+this.namespace+(l?" %c":" ")+c[0]+(l?"%c ":" ")+"+"+n.humanize(this.diff),!!l){var d="color: "+this.color;c.splice(1,0,d,"color: inherit");var p=0,m=0;c[0].replace(/%[a-zA-Z%]/g,function(f){f!=="%%"&&(p++,f==="%c"&&(m=p))}),c.splice(m,0,d)}}function o(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(c){try{c==null?n.storage.removeItem("debug"):n.storage.debug=c}catch{}}function u(){var c;try{c=n.storage.debug}catch{}return!c&&typeof process<"u"&&"env"in process&&(c=t.DEBUG),c}n.enable(u());function s(){try{return window.localStorage}catch{}}})(zo,zo.exports)),zo.exports}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tm,r9;function Ju(){if(r9)return tm;r9=1;var e=34028234663852886e22;return tm=e,tm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rm,i9;function cX(){if(i9)return rm;i9=1;var e=NT(),n=$T(),t=ye(),r=Ce(),i=we(),o=Ju(),a=e("gammaincinv:higher_newton");function u(s,c,l,d,p,m,f,h){var v,_,g,b,y,E,$,T,C,L,A,w,S,I;I=s,A=1,w=1,E=c*c,_=s;do{if(I=s,$=I*I,l===0){if(v=(1-c)*i(I)+I+m,v>i(o))return a("Warning: overflow problems in one or more steps of the computation. The initial approximation to the root is returned."),_;S=r(v)}else S=-f*I;h?(T=n(I,c,!0,!1),g=-S*(T-d)):(C=n(I,c,!0,!0),g=S*(C-p)),S=g,d>1e-120||w>1?(b=.5*(I-c+1)/I,y=(2*$-4*I*c+4*I+2*E-3*c+1)/$,y/=6,s=I+S*(1+S*(b+S*y))):s=I+S,A=t(I/s-1),w+=1,I=s,I<0&&(I=_,w=100)}while(A>2e-14&&w<35);return(A>2e-14||w>99)&&a("Warning: the number of iterations in the Newton method reached the upper limit N=35. The last value obtained for the root is given as output."),L=I||0,L}return rm=u,rm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var im,o9;function lX(){if(o9)return im;o9=1;function e(n){return n===0?0:0+n*(1+n*(1+n*(1.5+n*(2.6666666666666665+n*(5.208333333333333+n*10.8)))))}return im=e,im}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var om,a9;function dX(){if(a9)return om;a9=1;function e(n){return n===0?1:1+n*(1+n*(.3333333333333333+n*(.027777777777777776+n*(-.003703703703703704+n*(.0002314814814814815+n*5878894767783657e-20)))))}return om=e,om}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var am,u9;function kT(){if(u9)return am;u9=1;var e=ye(),n=Ce(),t=we(),r=Bt(),i=lX(),o=dX(),a=1e-8,u=.08333333333333333,s=.008333333333333333,c=[1,0,0,0,0,0];function l(d){var p,m,f,h,v,_,g,b,y;if(y=d*d*.5,d===0?v=0:d<-1?(b=n(-1-y),v=i(b)):d<1?(b=d,v=o(b)):(b=11+y,_=t(b),v=b+_,b=1/b,p=_*_,m=p*_,f=m*_,h=f*_,c[1]=(2-_)*.5,c[2]=(-9*_+6+2*p)/6,c[3]=-(3*m+36*_-22*p-12)*u,c[4]=(60+350*p-300*_-125*m+12*f)/60,c[5]=-(-120-274*f+900*_-1700*p+1125*m+20*h)*s,v+=_*b*r(c,b)),b=1,d>-3.5&&d<-.03||d>.03&&d<40){b=1,g=v;do v=g*(y+t(g))/(g-1),b=e(g/v-1),g=v;while(b>a)}return v}return am=l,am}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var um,s9;function fX(){if(s9)return um;s9=1;var e=[1.9963790515900766,-.0017971032528832887,13129285796384672e-21,-2340875228178749e-22,72291210671127e-22,-3280997607821e-22,19875070901e-21,-1509214183e-21,1375340084e-22,-145728923e-22,17532367e-22,-2351465e-22,346551e-22,-55471e-22,9548e-22,-1748e-22,332e-22,-58e-22];function n(t,r){var i,o,a,u,s;o=0,a=0,i=r+r,s=t;do u=a,a=o,o=i*a-u+e[s],s-=1;while(s>=0);return(o-u)/2}return um=n,um}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sm,c9;function pX(){if(c9)return sm;c9=1;function e(n){return n===0?.025721014990011306:.025721014990011306+n*(.08247596616699963+n*(-.0025328157302663564+n*(.0006099292666946337+n*(-.00033543297638406+n*.000250505279903))))}return sm=e,sm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cm,l9;function mX(){if(l9)return cm;l9=1;function e(n){return n===0?.08333333333333333:.08333333333333333+n*(-.002777777777777778+n*(.0007936507936507937+n*-.0005952380952380953))}return cm=e,cm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lm,d9;function hX(){if(d9)return lm;d9=1;var e=ti(),n=we(),t=LT(),r=Ku(),i=Ju(),o=fX(),a=pX(),u=mX(),s=.30865217988013566;function c(l){var d;return l<r?i:l<1?e(l+1)-(l+.5)*n(l)+l-t:l<2?e(l)-(l-.5)*n(l)+l-t:l<3?e(l-1)-(l-.5)*n(l)+l-t+n(l-1):l<12?(d=18/(l*l)-1,o(17,d)/(12*l)):(d=1/(l*l),l<1e3?a(d)/(s+d)/l:u(d)/l)}return lm=c,lm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dm,f9;function vX(){if(f9)return dm;f9=1;var e=Ce(),n=at(),t=we(),r=Ju(),i=Gu(),o=hX();function a(u){return u>=3?e(o(u)):u>0?n(u)/(e(-u+(u-.5)*t(u))*i):r}return dm=a,dm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fm,p9;function _X(){if(p9)return fm;p9=1;function e(n){var t,r,i;return n===0?-.3333333333438:(n<0?t=-n:t=n,t<=1?(r=-.3333333333438+n*(-.2070740359969+n*(-.05041806657154+n*(-.004923635739372+n*-4293658292782e-17))),i=1+n*(.7045554412463+n*(.2118190062224+n*(.03048648397436+n*.001605037988091)))):(n=1/n,r=-4293658292782e-17+n*(-.004923635739372+n*(-.05041806657154+n*(-.2070740359969+n*-.3333333333438))),i=.001605037988091+n*(.03048648397436+n*(.2118190062224+n*(.7045554412463+n*1)))),r/i)}return fm=e,fm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pm,m9;function gX(){if(m9)return pm;m9=1;var e=ye(),n=we(),t=kT(),r=_X();function i(o){var a;return e(o)<1?r(o):(a=t(o),n(o/(a-1))/o)}return pm=i,pm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mm,h9;function bX(){if(h9)return mm;h9=1;function e(n){var t,r,i;return n===0?-.0172847633523:(n<0?t=-n:t=n,t<=1?(r=-.0172847633523+n*(-.0159372646475+n*(-.00464910887221+n*(-.00060683488776+n*-614830384279e-17))),i=1+n*(.764050615669+n*(.297143406325+n*(.0579490176079+n*.00574558524851)))):(n=1/n,r=-614830384279e-17+n*(-.00060683488776+n*(-.00464910887221+n*(-.0159372646475+n*-.0172847633523))),i=.00574558524851+n*(.0579490176079+n*(.297143406325+n*(.764050615669+n*1)))),r/i)}return mm=e,mm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hm,v9;function yX(){if(v9)return hm;v9=1;function e(n){var t,r,i;return n===0?-.0172839517431:(n<0?t=-n:t=n,t<=1?(r=-.0172839517431+n*(-.0146362417966+n*(-.00357406772616+n*(-.000391032032692+n*249634036069e-17))),i=1+n*(.690560400696+n*(.249962384741+n*(.0443843438769+n*.00424073217211)))):(n=1/n,r=249634036069e-17+n*(-.000391032032692+n*(-.00357406772616+n*(-.0146362417966+n*-.0172839517431))),i=.00424073217211+n*(.0443843438769+n*(.249962384741+n*(.690560400696+n*1)))),r/i)}return hm=e,hm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vm,_9;function EX(){if(_9)return vm;_9=1;function e(n){var t,r,i;return n===0?.99994466948:(n<0?t=-n:t=n,t<=1?(r=.99994466948+n*(104.649839762+n*(857.204033806+n*(731.901559577+n*45.5174411671))),i=1+n*(104.526456943+n*(823.313447808+n*(3119.93802124+n*3970.03311219)))):(n=1/n,r=45.5174411671+n*(731.901559577+n*(857.204033806+n*(104.649839762+n*.99994466948))),i=3970.03311219+n*(3119.93802124+n*(823.313447808+n*(104.526456943+n*1)))),r/i)}return vm=e,vm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _m,g9;function SX(){if(g9)return _m;g9=1;var e=we(),n=bX(),t=yX(),r=EX();function i(o){var a,u;return o<-5?(u=o*o,a=e(-o),(12-u-6*(a*a))/(12*u*o)):o<-2?n(o):o<2?t(o):o<1e3?(u=1/o,r(o)/(-12*o)):-1/(12*o)}return _m=i,_m}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gm,b9;function wX(){if(b9)return gm;b9=1;function e(n){var t,r,i;return n===0?.0495346498136:(n<0?t=-n:t=n,t<=1?(r=.0495346498136+n*(.0299521337141+n*(.00688296911516+n*(.000512634846317+n*-201411722031e-16))),i=1+n*(.759803615283+n*(.261547111595+n*(.0464854522477+n*.00403751193496)))):(n=1/n,r=-201411722031e-16+n*(.000512634846317+n*(.00688296911516+n*(.0299521337141+n*.0495346498136))),i=.00403751193496+n*(.0464854522477+n*(.261547111595+n*(.759803615283+n*1)))),r/i)}return gm=e,gm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bm,y9;function AX(){if(y9)return bm;y9=1;function e(n){var t,r,i;return n===0?.00452313583942:(n<0?t=-n:t=n,t<=1?(r=.00452313583942+n*(.00120744920113+n*(-789724156582e-16+n*(-504476066942e-16+n*-535770949796e-17))),i=1+n*(.912203410349+n*(.405368773071+n*(.0901638932349+n*.00948935714996)))):(n=1/n,r=-535770949796e-17+n*(-504476066942e-16+n*(-789724156582e-16+n*(.00120744920113+n*.00452313583942))),i=.00948935714996+n*(.0901638932349+n*(.405368773071+n*(.912203410349+n*1)))),r/i)}return bm=e,bm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ym,E9;function $X(){if(E9)return ym;E9=1;function e(n){var t,r,i;return n===0?.00439937562904:(n<0?t=-n:t=n,t<=1?(r=.00439937562904+n*(.000487225670639+n*(-.000128470657374+n*(529110969589e-17+n*15716677175e-17))),i=1+n*(.794435257415+n*(.333094721709+n*(.0703527806143+n*.00806110846078)))):(n=1/n,r=15716677175e-17+n*(529110969589e-17+n*(-.000128470657374+n*(.000487225670639+n*.00439937562904))),i=.00806110846078+n*(.0703527806143+n*(.333094721709+n*(.794435257415+n*1)))),r/i)}return ym=e,ym}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Em,S9;function TX(){if(S9)return Em;S9=1;function e(n){var t,r,i;return n===0?-.0011481191232:(n<0?t=-n:t=n,t<=1?(r=-.0011481191232+n*(-.112850923276+n*(1.51623048511+n*(-.218472031183+n*.0730002451555))),i=1+n*(14.2482206905+n*(69.7360396285+n*(218.938950816+n*277.067027185)))):(n=1/n,r=.0730002451555+n*(-.218472031183+n*(1.51623048511+n*(-.112850923276+n*-.0011481191232))),i=277.067027185+n*(218.938950816+n*(69.7360396285+n*(14.2482206905+n*1)))),r/i)}return Em=e,Em}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sm,w9;function IX(){if(w9)return Sm;w9=1;function e(n){var t,r,i;return n===0?-.000145727889667:(n<0?t=-n:t=n,t<=1?(r=-.000145727889667+n*(-.290806748131+n*(-13.308504545+n*(199.722374056+n*-11.4311378756))),i=1+n*(139.612587808+n*(2189.01116348+n*(7115.24019009+n*45574.6081453)))):(n=1/n,r=-11.4311378756+n*(199.722374056+n*(-13.308504545+n*(-.290806748131+n*-.000145727889667))),i=45574.6081453+n*(7115.24019009+n*(2189.01116348+n*(139.612587808+n*1)))),r/i)}return Sm=e,Sm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wm,A9;function LX(){if(A9)return wm;A9=1;var e=we(),n=wX(),t=AX(),r=$X(),i=TX(),o=IX();function a(u){var s,c;return u<-8?(s=u*u,c=e(-u)/u,(-30+u*c*(6*s*c*c-12+s))/(12*u*s*s)):u<-4?n(u)/(u*u):u<-2?t(u):u<2?r(u):u<10?(s=1/u,i(s)/(u*u)):u<100?(s=1/u,o(s)/(u*u)):-e(u)/(12*u*u*u)}return wm=a,wm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Am,$9;function RX(){if($9)return Am;$9=1;var e=NT(),n=Bt(),t=ti(),r=Ro(),i=at(),o=be(),a=ye(),u=Ce(),s=Ft(),c=Oe(),l=we(),d=Gu(),p=Ju(),m=Wu(),f=cX(),h=kT(),v=vX(),_=gX(),g=SX(),b=LX(),y=e("gammaincinv:compute"),E=.5,$=.3333333333333333,T=.25,C=.2,L=.16666666666666666,A=.08333333333333333,w=.041666666666666664,S=[0,0,0,0,0];function I(R,P,k){var B,D,q,M,Z,G,z,te,ae,j,Y,V,Ee,me,ne,se,$e,Se,gt,un,_e,In,Je,Ln,Ut,Q,ve,Rn,fi,st,bt,dr,pi,mi,Ho,ze,De,fr,Qe,Cn,dn,Gt,pr,mr;if(P<E?(M=!0,Z=P,Gt=-1):(M=!1,Z=k,Gt=1),Qe=0,a(R-1)<1e-4&&(Cn=0,M?P<.001?(dr=P*P,Rn=dr*P,bt=Rn*P,un=bt*P,gt=un*P,_e=P+dr*E+Rn*$+bt*T+un*C+gt*L):_e=-l(1-P):_e=-l(k),R===1?(Qe=2,mi=_e):(q=t(R),Qe=1)),k<1e-30&&R<E&&(Cn=0,_e=-l(k*i(R))+(R-1)*l(-l(k*i(R))),Qe=1,q=t(R)),R>1&&R<500&&P<1e-80){for(Cn=0,G=1/R,B=1/(R+1),_e=(t(R+1)+l(P))*G,_e=u(_e),me=_e,fr=0;fr<10;fr++)_e=me*u(_e*G)*c(1-_e*B,G);Qe=1,q=t(R)}if(z=1/R*(l(P)+t(R+1)),z<l(C*(1+R))&&Qe===0&&(dn=u(z),Cn=0,In=R*R,pi=In*R,fi=pi*R,ne=R+1,Y=ne*ne,j=ne*Y,ae=Y*Y,se=R+2,te=se*se,$e=R+3,S[0]=1,S[1]=1/ne,S[2]=E*(3*R+5)/(Y*se),S[3]=$*(31+8*In+33*R)/(j*se*$e),S[4]=w*(2888+1179*pi+125*fi+3971*In+5661*R)/(ae*te*$e*(R+4)),_e=dn*n(S,dn),q=t(R),Qe=1),R<10&&Qe===0&&(V=o(R)/(v(R)*d),Ee=s(.02,V),k<Ee&&(Cn=0,ze=1-R,Q=ze*ze,ve=Q*ze,Se=o(-2/R*l(k/V)),_e=R*h(Se),De=l(_e),_e>5?(Je=De*De,Ln=Je*De,Ut=Ln*De,dn=1/_e,S[0]=De-1,S[1]=(3*ze-2*ze*De+Je-2*De+2)*E,S[2]=(24*ze*De-11*Q-24*ze-6*Je+12*De-12-9*ze*Je+6*Q*De+2*Ln)*L,S[3]=(-12*ve*De+8.04*ze*Je-114*Q*De+(72+36*Je)+(3*Ut-72*De+162)*(ze-168*ze*De)-(12*Ln+25*ve)-(22*ze*Ln+36*Q*Je+120*Q))*A,S[4]=0,_e=_e-De+ze*dn*n(S,dn)):(dn=1/_e,Je=De*De,Ho=De-1,pr=De-ze*dn*Ho,pr<_e&&(_e-=pr)),q=t(R),Qe=1)),a(Z-E)<1e-5&&Qe===0&&(Cn=0,G=1/R,_e=R-$+(.019753086419753086+.007211444248481286*G)*G,q=t(R),Qe=1),R<1&&Qe===0&&(Cn=0,M?_e=u(1/R*(l(Z)+t(R+1))):_e=u(1/R*(l(1-Z)+t(R+1))),q=t(R),Qe=1),Qe===0)if(Cn=1,G=1/R,dn=r(2*Z),Se=Gt*dn/o(R*E),dn<p)Se+=(_(Se)+(g(Se)+b(Se)*G)*G)*G,_e=R*h(Se),mr=Se,st=-o(R/m)*u(-E*R*mr*mr)/v(R),D=1/st;else return y("Warning: Overflow problems in one or more steps of the computation."),NaN;return Qe<2&&(mi=f(_e,R,Cn,P,k,q,D,M)),mi}return Am=I,Am}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $m,T9;function CX(){if(T9)return $m;T9=1;var e=ue(),n=Ku(),t=Re(),r=RX();function i(o,a,u){return e(o)||e(a)?NaN:a<n?NaN:o>1||o<0?NaN:u===!0?o===0?t:o===1?0:r(a,1-o,o):o===0?0:o===1?t:r(a,o,1-o)}return $m=i,$m}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tm,I9;function OX(){if(I9)return Tm;I9=1;var e=CX();return Tm=e,Tm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Im,L9;function NX(){if(L9)return Im;L9=1;var e=5e-324;return Im=e,Im}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Lm,R9;function kX(){if(R9)return Lm;R9=1;var e=OX(),n=we(),t=be(),r=NX(),i=CT(),o=OT();function a(u,s,c,l){var d,p,m,f,h,v,_,g,b,y,E,$,T,C,L,A,w,S,I,R,P,k,B,D,q,M,Z,G,z,te;return c<l?h=e(c,s,!0):h=e(l,s,!1),h/=u,C=s/u,G=t(1+C),S=G*G,I=S*G,R=S*S,P=I*S,k=I*I,B=R*I,D=R*R,q=P*R,_=P*P,Z=h-C,L=Z*Z,A=L*Z,w=L*L,M=G+1,g=M*M,b=M*g,y=g*g,E=(G+2)*(G-1)/(3*G),E+=(I+9*S+21*G+5)*Z/(36*S*M),E-=(R-13*I+69*S+167*G+46)*L/(1620*g*I),E-=(7*P+21*R+70*I+26*S-93*G-31)*A/(6480*b*R),E-=(75*k+202*P+188*R-888*I-1345*S+118*G+138)*w/(272160*y*P),$=(28*R+131*I+402*S+581*G+208)*(G-1)/(1620*M*I),$-=(35*k-154*P-623*R-1636*I-3983*S-3514*G-925)*Z/(12960*g*R),$-=(2132*B+7915*k+16821*P+35066*R+87490*I+141183*S+95993*G+21640)*L/(816480*P*b),$-=(11053*D+53308*B+117010*k+163924*P+116188*R-258428*I-677042*S-481940*G-105497)*A/(14696640*y*k),T=-((3592*B+8375*k-1323*P-29198*R-89578*I-154413*S-116063*G-29632)*(G-1))/(816480*P*g),T-=(442043*q+2054169*D+3803094*B+3470754*k+2141568*P-2393568*R-19904934*I-34714674*S-23128299*G-5253353)*Z/(146966400*k*b),T-=(116932*_+819281*q+2378172*D+4341330*B+6806004*k+10622748*P+18739500*R+30651894*I+30869976*S+15431867*G+2919016)*L/(146966400*y*B),v=h+E/u+$/(u*u)+T/(u*u*u),v<=0&&(v=r),z=v-C*n(v)+(1+C)*n(1+C)-C,d=1/(1+C),m=v<C?d:0,f=v<C?1:d,te=(m+f)/2,p=i(z,C),o(p,te,m,f,32,100)}return Lm=a,Lm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Rm,C9;function MX(){if(C9)return Rm;C9=1;var e=ye(),n=Zr(),t=Yu(),r=ur(),i=sr();function o(a,u,s,c,l,d){var p,m,f,h,v,_,g,b,y,E,$,T,C,L,A,w;L=0,m=!1,_=u,v=n(1,1-l),y=r(1e7*u,1e7),g=0,f=y,h=y,b=d;do{if(g=L,h=f,f=y,C=a(_),L=C[0],A=C[1],w=C[2],b-=1,L===0)break;if(A===0?(g===0&&(_===s?u=c:u=s,g=a(u),y=u-_),t(g)*t(L)<0?y<0?y=(_-s)/2:y=(_-c)/2:y<0?y=(_-c)/2:y=(_-s)/2):w===0?y=L/A:(E=2*L,T=2*A-L*(w/A),e(T)<1&&e(E)>=e(T)*i?y=L/A:y=E/T,y*A/L<0&&(y=L/A,e(y)>2*e(u)&&(y=(y<0?-1:1)*2*e(u)))),p=e(y/h),p>.8&&p<2&&(y=y>0?(_-s)/2:(_-c)/2,e(y)>_&&(y=t(y)*_),h=y*3),u=_,_-=y,_<s){if(e(s)<1&&e(_)>1&&i/e(_)<e(s)?$=1e3:$=_/s,e($)<1&&($=1/$),!m&&$>0&&$<3)y=.99*(u-s),_=u-y,m=!0;else if(y=(u-s)/2,_=u-y,_===s||_===c)break}else if(_>c){if(e(c)<1&&e(_)>1&&i/e(_)<e(c)?$=1e3:$=_/c,e($)<1&&($=1/$),!m&&$>0&&$<3)y=.99*(u-c),_=u-y,m=!0;else if(y=(u-c)/2,_=u-y,_===s||_===c)break}y>0?c=u:s=u}while(b&&e(_*v)<e(y));return _}return Rm=o,Rm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var Cm,O9;function PX(){if(O9)return Cm;O9=1;var e=IT().assign,n=ye(),t=sr(),r=ar();function i(o,a,u,s){return c;function c(l){var d,p,m,f,h;return h=1-l,d=[0,0],e(l,o,a,!0,s,d,1,0),f=d[0]-u,p=d[1],s&&(p=-p),h===0&&(h=r*64),l===0&&(l=r*64),m=p*(-(h*o)+(a-2)*l+1),n(m)<h*l*t&&(m/=h*l),s&&(m=-m),p===0&&(p=(s?-1:1)*r*64),[f,p,m]}}return Cm=i,Cm}var Om,N9;function DX(){if(N9)return Om;N9=1;var e=Bt(),n=Lo(),t=zr(),r=wn(),i=U2(),o=Uu(),a=be(),u=ye(),s=Ce(),c=Oe(),l=$o(),d=ur(),p=Ft(),m=we(),f=ar(),h=X2(),v=ot(),_=jW(),g=VW(),b=aX(),y=kX(),E=MX(),$=PX(),T=32,C=1e3,L=[0,0,0,0,0];function A(w,S,I,R){var P,k,B,D,q,M,Z,G,z,te,ae,j,Y,V,Ee,me,ne,se,$e,Se,gt,un,_e,In,Je,Ln,Ut,Q,ve;if(k=!1,R===0)return[1,0];if(I===0)return[0,1];if(w===1){if(S===1)return[I,1-I];j=S,S=w,w=j,j=R,R=I,I=j,k=!0}if(Q=0,D=0,M=1,w===.5){if(S===.5)return Q=l(I*h),Q*=Q,ve=l(R*h),ve*=ve,[Q,ve];S>.5&&(j=S,S=w,w=j,j=R,R=I,I=j,k=!k)}if(S===.5&&w>=.5&&I!==1)gt={},Q=_(w,I,gt),ve=gt.value;else{if(S===1)return I<R?w>1?(Q=c(I,1/w),ve=-t(m(I)/w)):(Q=c(I,1/w),ve=1-Q):(Q=s(r(-R)/w),ve=-t(r(-R)/w)),k&&(j=ve,ve=Q,Q=j),[Q,ve];if(w+S>5)I>.5&&(j=S,S=w,w=j,j=R,R=I,I=j,k=!k),z=p(w,S),G=d(w,S),a(z)>G-z&&z>5?(Q=g(w,S,I),ve=1-Q):(Je=w+S,q=i(a(w/Je)),B=z/Je,B>=.2&&B<=.8&&Je>=10?(ae=c(I,1/w),ae<.0025&&w+S<200?Q=ae*c(w*o(w,S),1/w):Q=b(I,Je,q),ve=1-Q):(w<S&&(j=S,S=w,w=j,j=R,R=I,I=j,k=!k),te=0,S<2&&(te=o(w,S)),te===0?ve=1:(ve=c(S*R*te,1/S),Q=1-ve)),ve>1e-5&&(Q=y(w,S,I,R),ve=1-Q));else if(w<1&&S<1){if(Se=(1-w)/(2-w-S),me=n(Se,w,S)-I,u(me)/I<v*3)return k?[1-Se,Se]:[Se,1-Se];me<0&&(j=S,S=w,w=j,j=R,R=I,I=j,k=!k,Se=1-Se),$e=c(w*I*o(w,S),1/w),Q=$e/(1+$e),ve=1/(1+$e),Q>Se&&(Q=Se),M=Se}else w>1&&S>1?(Se=(w-1)/(w+S-2),Y=(S-1)/(w+S-2),se=n(Se,w,S)-I,se<0&&(j=S,S=w,w=j,j=R,R=I,I=j,j=Y,Y=Se,Se=j,k=!k),ne=m(I*w*o(w,S))/w,Q=s(ne),ve=Q<.9?1-Q:-t(ne),S<w&&Q<.2&&(V=w-1,Ee=S-1,un=w*w,_e=w*un,In=S*S,L[0]=0,L[1]=1,L[2]=Ee/V,V*=V,L[3]=Ee*(3*w*S+5*S+un-w-4)/(2*(w+2)*V),V*=w+1,L[4]=Ee*(33*w*In+31*In+8*un*In-30*w*S-47*S+11*un*S+6*_e*S+18+4*w-_e+un*un-10*un),L[4]/=3*(w+3)*(w+2)*V,Q=e(L,Q)),Q>Se&&(Q=Se),M=Se):(S<w&&(j=S,S=w,w=j,j=R,R=I,I=j,k=!k),c(I,1/w)<.5?(Q=c(I*w*o(w,S),1/w),Q===0&&(Q=f),ve=1-Q):(ve=c(1-c(I,S*o(w,S)),1/S),ve===0&&(ve=f),Q=1-ve))}return Q>.5&&(j=S,S=w,w=j,j=R,R=I,I=j,j=ve,ve=Q,Q=j,k=!k,Ln=1-M,Ut=1-D,D=Ln,M=Ut),D===0&&(k?(D=v,Q<D&&(Q=D)):D=f,Q<D&&(Q=D)),P=T,Q<1e-50&&(w<1||S<1)&&(P*=3,P/=2),Z=$(w,S,I<R?I:R,I>=R),Q=E(Z,Q,D,M,P,C),Q===D&&(Q=0),k?[1-Q,Q]:[Q,1-Q]}return Om=A,Om}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nm,k9;function Q2(){if(k9)return Nm;k9=1;var e=DX();return Nm=e,Nm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var km,M9;function FX(){if(M9)return km;M9=1;var e=ue(),n=Q2();function t(r,i,o,a){return e(r)||e(i)||e(o)?NaN:i<=0||o<=0?NaN:r<0||r>1?NaN:a?n(i,o,1-r,r)[0]:n(i,o,r,1-r)[0]}return km=t,km}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mm,P9;function MT(){if(P9)return Mm;P9=1;var e=FX();return Mm=e,Mm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pm,D9;function qX(){if(D9)return Pm;D9=1;var e=MT(),n=ue();function t(r,i,o){return n(r)||n(i)||n(o)||i<=0||o<=0||r<0||r>1?NaN:e(r,i,o)}return Pm=t,Pm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dm,F9;function xX(){if(F9)return Dm;F9=1;var e=An(),n=MT(),t=ue();function r(i,o){if(t(i)||t(o)||i<=0||o<=0)return e(NaN);return a;function a(u){return t(u)||u<0||u>1?NaN:n(u,i,o)}}return Dm=r,Dm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fm,q9;function BX(){if(q9)return Fm;q9=1;var e=rn(),n=qX(),t=xX();return e(n,"factory",t),Fm=n,Fm}var HX=BX();const UX=rt(HX);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qm,x9;function GX(){if(x9)return qm;x9=1;var e=Vu(),n=be(),t=ue();function r(i,o,a){var u,s;return t(i)||t(o)||t(a)||a<0?NaN:a===0?i<o?0:1:(u=a*n(2),s=i-o,.5*e(-s/u))}return qm=r,qm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xm,B9;function jX(){if(B9)return xm;B9=1;var e=ue();function n(t,r){return e(t)||e(r)?NaN:t<r?0:1}return xm=n,xm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bm,H9;function VX(){if(H9)return Bm;H9=1;var e=An(),n=ue();function t(r){if(n(r))return e(NaN);return i;function i(o){return n(o)?NaN:o<r?0:1}}return Bm=t,Bm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hm,U9;function WX(){if(U9)return Hm;U9=1;var e=rn(),n=jX(),t=VX();return e(n,"factory",t),Hm=n,Hm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Um,G9;function XX(){if(G9)return Um;G9=1;var e=An(),n=WX().factory,t=ue(),r=be(),i=Vu();function o(a,u){var s;if(t(a)||t(u)||u<0)return e(NaN);if(u===0)return n(a);return s=u*r(2),c;function c(l){var d;return t(l)?NaN:(d=l-a,.5*i(-d/s))}}return Um=o,Um}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gm,j9;function KX(){if(j9)return Gm;j9=1;var e=rn(),n=GX(),t=XX();return e(n,"factory",t),Gm=n,Gm}var YX=KX();const PT=rt(YX);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jm,V9;function JX(){if(V9)return jm;V9=1;var e=Ce(),n=Oe(),t=be(),r=Wu(),i=Re(),o=ue();function a(u,s,c){var l,d,p;return o(u)||o(s)||o(c)||c<0?NaN:c===0?u===s?i:0:(l=n(c,2),d=1/t(l*r),p=-1/(2*l),d*e(p*n(u-s,2)))}return jm=a,jm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vm,W9;function zX(){if(W9)return Vm;W9=1;var e=Re(),n=ue();function t(r,i){return n(r)||n(i)?NaN:r===i?e:0}return Vm=t,Vm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wm,X9;function QX(){if(X9)return Wm;X9=1;var e=An(),n=Re(),t=ue();function r(i){if(t(i))return e(NaN);return o;function o(a){return t(a)?NaN:a===i?n:0}}return Wm=r,Wm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xm,K9;function ZX(){if(K9)return Xm;K9=1;var e=rn(),n=zX(),t=QX();return e(n,"factory",t),Xm=n,Xm}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Km,Y9;function eK(){if(Y9)return Km;Y9=1;var e=An(),n=ZX().factory,t=ue(),r=be(),i=Ce(),o=Oe(),a=Wu();function u(s,c){var l,d,p;if(t(s)||t(c)||c<0)return e(NaN);if(c===0)return n(s);return l=o(c,2),d=1/r(l*a),p=-1/(2*l),m;function m(f){return t(f)?NaN:d*i(p*o(f-s,2))}}return Km=u,Km}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ym,J9;function nK(){if(J9)return Ym;J9=1;var e=rn(),n=JX(),t=eK();return e(n,"factory",t),Ym=n,Ym}var tK=nK();const DT=rt(tK);/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jm,z9;function rK(){if(z9)return Jm;z9=1;function e(n){var t,r,i;return n===0?-.0005087819496582806:(n<0?t=-n:t=n,t<=1?(r=-.0005087819496582806+n*(-.008368748197417368+n*(.03348066254097446+n*(-.012692614766297404+n*(-.03656379714117627+n*(.02198786811111689+n*(.008226878746769157+n*(-.005387729650712429+n*(0+n*0)))))))),i=1+n*(-.9700050433032906+n*(-1.5657455823417585+n*(1.5622155839842302+n*(.662328840472003+n*(-.7122890234154284+n*(-.05273963823400997+n*(.07952836873415717+n*(-.0023339375937419+n*.0008862163904564247))))))))):(n=1/n,r=0+n*(0+n*(-.005387729650712429+n*(.008226878746769157+n*(.02198786811111689+n*(-.03656379714117627+n*(-.012692614766297404+n*(.03348066254097446+n*(-.008368748197417368+n*-.0005087819496582806)))))))),i=.0008862163904564247+n*(-.0023339375937419+n*(.07952836873415717+n*(-.05273963823400997+n*(-.7122890234154284+n*(.662328840472003+n*(1.5622155839842302+n*(-1.5657455823417585+n*(-.9700050433032906+n*1))))))))),r/i)}return Jm=e,Jm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zm,Q9;function iK(){if(Q9)return zm;Q9=1;function e(n){var t,r,i;return n===0?-.20243350835593876:(n<0?t=-n:t=n,t<=1?(r=-.20243350835593876+n*(.10526468069939171+n*(8.3705032834312+n*(17.644729840837403+n*(-18.851064805871424+n*(-44.6382324441787+n*(17.445385985570866+n*(21.12946554483405+n*-3.6719225470772936))))))),i=1+n*(6.242641248542475+n*(3.971343795334387+n*(-28.66081804998+n*(-20.14326346804852+n*(48.560921310873994+n*(10.826866735546016+n*(-22.643693341313973+n*1.7211476576120028)))))))):(n=1/n,r=-3.6719225470772936+n*(21.12946554483405+n*(17.445385985570866+n*(-44.6382324441787+n*(-18.851064805871424+n*(17.644729840837403+n*(8.3705032834312+n*(.10526468069939171+n*-.20243350835593876))))))),i=1.7211476576120028+n*(-22.643693341313973+n*(10.826866735546016+n*(48.560921310873994+n*(-20.14326346804852+n*(-28.66081804998+n*(3.971343795334387+n*(6.242641248542475+n*1)))))))),r/i)}return zm=e,zm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qm,Z9;function oK(){if(Z9)return Qm;Z9=1;function e(n){var t,r,i;return n===0?-.1311027816799519:(n<0?t=-n:t=n,t<=1?(r=-.1311027816799519+n*(-.16379404719331705+n*(.11703015634199525+n*(.38707973897260434+n*(.3377855389120359+n*(.14286953440815717+n*(.029015791000532906+n*(.0021455899538880526+n*(-6794655751811263e-22+n*(28522533178221704e-24+n*-681149956853777e-24))))))))),i=1+n*(3.4662540724256723+n*(5.381683457070069+n*(4.778465929458438+n*(2.5930192162362027+n*(.848854343457902+n*(.15226433829533179+n*(.011059242293464892+n*(0+n*(0+n*0)))))))))):(n=1/n,r=-681149956853777e-24+n*(28522533178221704e-24+n*(-6794655751811263e-22+n*(.0021455899538880526+n*(.029015791000532906+n*(.14286953440815717+n*(.3377855389120359+n*(.38707973897260434+n*(.11703015634199525+n*(-.16379404719331705+n*-.1311027816799519))))))))),i=0+n*(0+n*(0+n*(.011059242293464892+n*(.15226433829533179+n*(.848854343457902+n*(2.5930192162362027+n*(4.778465929458438+n*(5.381683457070069+n*(3.4662540724256723+n*1)))))))))),r/i)}return Qm=e,Qm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zm,e7;function aK(){if(e7)return Zm;e7=1;function e(n){var t,r,i;return n===0?-.0350353787183178:(n<0?t=-n:t=n,t<=1?(r=-.0350353787183178+n*(-.0022242652921344794+n*(.018557330651423107+n*(.009508047013259196+n*(.0018712349281955923+n*(.00015754461742496055+n*(460469890584318e-20+n*(-2304047769118826e-25+n*26633922742578204e-28))))))),i=1+n*(1.3653349817554064+n*(.7620591645536234+n*(.22009110576413124+n*(.03415891436709477+n*(.00263861676657016+n*(7646752923027944e-20+n*(0+n*0)))))))):(n=1/n,r=26633922742578204e-28+n*(-2304047769118826e-25+n*(460469890584318e-20+n*(.00015754461742496055+n*(.0018712349281955923+n*(.009508047013259196+n*(.018557330651423107+n*(-.0022242652921344794+n*-.0350353787183178))))))),i=0+n*(0+n*(7646752923027944e-20+n*(.00263861676657016+n*(.03415891436709477+n*(.22009110576413124+n*(.7620591645536234+n*(1.3653349817554064+n*1)))))))),r/i)}return Zm=e,Zm}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var eh,n7;function uK(){if(n7)return eh;n7=1;function e(n){var t,r,i;return n===0?-.016743100507663373:(n<0?t=-n:t=n,t<=1?(r=-.016743100507663373+n*(-.0011295143874558028+n*(.001056288621524929+n*(.00020938631748758808+n*(14962478375834237e-21+n*(44969678992770644e-23+n*(4625961635228786e-24+n*(-2811287356288318e-29+n*9905570997331033e-32))))))),i=1+n*(.5914293448864175+n*(.1381518657490833+n*(.016074608709367652+n*(.0009640118070051656+n*(27533547476472603e-21+n*(282243172016108e-21+n*(0+n*0)))))))):(n=1/n,r=9905570997331033e-32+n*(-2811287356288318e-29+n*(4625961635228786e-24+n*(44969678992770644e-23+n*(14962478375834237e-21+n*(.00020938631748758808+n*(.001056288621524929+n*(-.0011295143874558028+n*-.016743100507663373))))))),i=0+n*(0+n*(282243172016108e-21+n*(27533547476472603e-21+n*(.0009640118070051656+n*(.016074608709367652+n*(.1381518657490833+n*(.5914293448864175+n*1)))))))),r/i)}return eh=e,eh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
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
*/var nh,t7;function sK(){if(t7)return nh;t7=1;var e=ue(),n=be(),t=we(),r=Re(),i=on(),o=rK(),a=iK(),u=oK(),s=aK(),c=uK(),l=.08913147449493408,d=2.249481201171875,p=.807220458984375,m=.9399557113647461,f=.9836282730102539;function h(v){var _,g,b,y,E,$;return e(v)?NaN:v===1?r:v===-1?i:v===0?v:v>1||v<-1?NaN:(v<0?(_=-1,g=-v):(_=1,g=v),y=1-g,g<=.5?(E=g*(g+10),$=o(g),_*(E*l+E*$)):y>=.25?(E=n(-2*t(y)),y-=.25,$=a(y),_*(E/(d+$))):(y=n(-t(y)),y<3?(b=y-1.125,$=u(b),_*(p*y+$*y)):y<6?(b=y-3,$=s(b),_*(m*y+$*y)):(b=y-6,$=c(b),_*(f*y+$*y))))}return nh=h,nh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var th,r7;function FT(){if(r7)return th;r7=1;var e=sK();return th=e,th}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rh,i7;function cK(){if(i7)return rh;i7=1;var e=FT(),n=ue(),t=be();function r(i,o,a){var u,s;return n(o)||n(a)||n(i)||a<0||i<0||i>1?NaN:a===0?o:(u=o,s=a*t(2),u+s*e(2*i-1))}return rh=r,rh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ih,o7;function lK(){if(o7)return ih;o7=1;var e=ue();function n(t,r){return e(t)||t<0||t>1?NaN:r}return ih=n,ih}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oh,a7;function dK(){if(a7)return oh;a7=1;var e=An(),n=ue();function t(r){if(n(r))return e(NaN);return i;function i(o){return n(o)||o<0||o>1?NaN:r}}return oh=t,oh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ah,u7;function fK(){if(u7)return ah;u7=1;var e=rn(),n=lK(),t=dK();return e(n,"factory",t),ah=n,ah}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uh,s7;function pK(){if(s7)return uh;s7=1;var e=An(),n=fK().factory,t=FT(),r=ue(),i=be();function o(a,u){var s,c;if(r(a)||r(u)||u<0)return e(NaN);return u===0&&n(a),s=a,c=u*i(2),l;function l(d){return r(d)||d<0||d>1?NaN:s+c*t(2*d-1)}}return uh=o,uh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sh,c7;function mK(){if(c7)return sh;c7=1;var e=rn(),n=cK(),t=pK();return e(n,"factory",t),sh=n,sh}var hK=mK();const vK=rt(hK);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ch,l7;function _K(){if(l7)return ch;l7=1;var e=Lo(),n=ue(),t=Oe();function r(i,o){var a,u,s;return n(i)||n(o)||o<=0?NaN:i===0?.5:(a=t(i,2),o>2*a?(s=a/(o+a),u=e(s,.5,o/2,!0,!0)/2):(s=o/(o+a),u=e(s,o/2,.5,!0,!1)/2),i>0?1-u:u)}return ch=r,ch}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lh,d7;function gK(){if(d7)return lh;d7=1;var e=An(),n=Lo(),t=ue(),r=Oe();function i(o){if(t(o)||o<=0)return e(NaN);return a;function a(u){var s,c,l;return t(u)?NaN:u===0?.5:(s=r(u,2),o>2*s?(l=s/(o+s),c=n(l,.5,o/2,!0,!0)/2):(l=o/(o+s),c=n(l,o/2,.5,!0,!1)/2),u>0?1-c:c)}}return lh=i,lh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dh,f7;function bK(){if(f7)return dh;f7=1;var e=rn(),n=_K(),t=gK();return e(n,"factory",t),dh=n,dh}var yK=bK();const qT=rt(yK);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fh,p7;function EK(){if(p7)return fh;p7=1;var e=ue(),n=Uu(),t=be(),r=Oe();function i(o,a){var u;return e(o)||e(a)||a<=0?NaN:(u=t(a)*n(a/2,.5),r(a/(a+r(o,2)),(1+a)/2)/u)}return fh=i,fh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ph,m7;function SK(){if(m7)return ph;m7=1;var e=An(),n=ue(),t=Uu(),r=be(),i=Oe();function o(a){var u,s;if(n(a)||a<=0)return e(NaN);return s=r(a)*t(a/2,.5),u=(1+a)/2,c;function c(l){return n(l)?NaN:i(a/(a+i(l,2)),u)/s}}return ph=o,ph}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mh,h7;function wK(){if(h7)return mh;h7=1;var e=rn(),n=EK(),t=SK();return e(n,"factory",t),mh=n,mh}var AK=wK();const Z2=rt(AK);/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hh,v7;function $K(){if(v7)return hh;v7=1;var e=Q2(),n=ue(),t=Yu(),r=be();function i(o,a){var u,s;return n(a)||n(o)||a<=0||o<0||o>1?NaN:(u=o>.5?1-o:o,s=e(a/2,.5,2*u,1-2*u),t(o-.5)*r(a*s[1]/s[0]))}return hh=i,hh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vh,_7;function TK(){if(_7)return vh;_7=1;var e=An(),n=Q2(),t=ue(),r=Yu(),i=be();function o(a){if(t(a)||a<=0)return e(NaN);return u;function u(s){var c,l;return t(s)||s<0||s>1?NaN:(c=s>.5?1-s:s,l=n(a/2,.5,2*c,1-2*c),r(s-.5)*i(a*l[1]/l[0]))}}return vh=o,vh}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _h,g7;function IK(){if(g7)return _h;g7=1;var e=rn(),n=$K(),t=TK();return e(n,"factory",t),_h=n,_h}var LK=IK();const RK=rt(LK),b7=1e-9,CK=/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/,xT=/^\s*([a-z][a-z-]*)\s*\((.*)\)\s*$/;function OK(e){const[n,t,r]=e;return n<r?n<=t&&t<=r?null:`requires lo <= peak <= hi, got lo=${n}, peak=${t}, hi=${r}`:`requires lo < hi, got lo=${n}, hi=${r}`}function NK(e){const[n,t]=e;return n<t?null:`requires lo < hi, got lo=${n}, hi=${t}`}function kK(e){const[n,t]=e;return n>0&&t>0?null:`requires a > 0 and b > 0, got a=${n}, b=${t}`}function y7(e){const n=e[1];return n>0?null:`requires sigma > 0, got sigma=${n}`}function MK(e){const[n,t]=e;return 0<n&&n<t?null:`requires 0 < lo < hi, got lo=${n}, hi=${t}`}function E7(e){const[,n,t]=e;return n<=0?`requires sigma > 0, got sigma=${n}`:t<=0?`requires df > 0, got df=${t}`:null}function S7(e,n){const t=n-e;return{cdf:r=>r<=e?0:r>=n?1:(r-e)/t,ppf:r=>e+r*t,pdf:r=>r>=e&&r<=n?1/t:0}}function PK(e,n,t){const r=t-e,i=(n-e)/r;return{cdf:o=>o<=e?0:o>=t?1:o<=n?(o-e)*(o-e)/(r*(n-e)):1-(t-o)*(t-o)/(r*(t-n)),ppf:o=>o<i?e+Math.sqrt(o*r*(n-e)):t-Math.sqrt((1-o)*r*(t-n)),pdf:o=>o<e||o>t?0:o===n?2/r:o<n?2*(o-e)/(r*(n-e)):2*(t-o)/(r*(t-n))}}function w7(e,n){return{cdf:t=>PT(t,e,n),ppf:t=>vK(t,e,n),pdf:t=>DT(t,e,n)}}function Kh(e,n,t){return{cdf:r=>qT((r-e)/n,t),ppf:r=>e+n*RK(r,t),pdf:r=>Z2((r-e)/n,t)/n}}function DK(e,n){return{cdf:t=>Xh(t,e,n),ppf:t=>UX(t,e,n),pdf:t=>SW(t,e,n)}}const FK=1e-10,qK=20,xK=1e-300,A7=24,BK=60,HK=.001;function Yh(e,n,t,r,i){return(n-e)/6*(t+4*r+i)}function Jh(e,n,t,r,i,o,a,u){const s=(n+t)/2,c=(n+s)/2,l=(s+t)/2,d=e(c),p=e(l),m=Yh(n,s,r,d,i),f=Yh(s,t,i,p,o),h=m+f,v=FK*Math.max(Math.abs(h),xK);return u>=qK||Math.abs(h-a)<=15*v?h+(h-a)/15:Jh(e,n,s,r,d,i,m,u+1)+Jh(e,s,t,i,p,o,f,u+1)}function UK(e,n,t){if(!(t>n))return 0;const r=(n+t)/2,i=e(n),o=e(r),a=e(t);return Jh(e,n,t,i,o,a,Yh(n,t,i,o,a),0)}const GK=(()=>{const e=[0];for(let n=A7;n>=1;n--)e.push(.5*2**-n);for(let n=A7;n>=0;n--)e.push(1-.5*2**-n);return e})();function jK(e){return BT(e,GK)}function BT(e,n){let t=0;for(let r=0;r<n.length-1;r++)t+=UK(e,n[r],n[r+1]);return t}function VK(e,n,t,r){const i=[n];for(let o=r;o>=1;o--){const a=t*2**-o;a>n&&i.push(a)}return i.push(t),BT(e,i)}function WK(e,n,t){const r=ji(e,n),i=ji(e,t)-r;return i>0?i*jK(o=>Math.min(Math.max(e.ppf(r+o*i),n),t)):0}function $7(e,n,t,r){return r>t?e*(r**3-t**3)/3+n*(r**2-t**2)/2:0}function XK(e,n,t){const[r,i]=e,o=Math.max(r,n),a=Math.min(i,t);return a>o?(a*a-o*o)/(2*(i-r)):0}function KK(e,n,t){const[r,i,o]=e,a=o-r,u=i-r,s=o-i;let c=0;if(u>0){const l=2/(a*u);c+=$7(l,-r*l,Math.max(r,n),Math.min(i,t))}if(s>0){const l=2/(a*s);c+=$7(-l,o*l,Math.max(i,n),Math.min(o,t))}return c}function YK(e,n,t){const[r,i]=e,o=Math.min(Math.max(n,0),1),a=Math.min(Math.max(t,0),1);return a>o?r/(r+i)*(Xh(a,r+1,i)-Xh(o,r+1,i)):0}function T7(e){return Number.isFinite(e)?DT(e,0,1):0}function Pa(e){return e===-1/0?0:e===1/0?1:PT(e,0,1)}function JK(e,n,t){const[r,i]=e,o=(n-r)/i,a=(t-r)/i;return r*(Pa(a)-Pa(o))-i*(T7(a)-T7(o))}function zK(e,n,t){const[r,i]=e,o=a=>Number.isFinite(a)?(a-r)/i-i:a;return Math.exp(r+i*i/2)*(Pa(o(t))-Pa(o(n)))}function QK(e,n,t){const[r,i]=e,o=Math.log(r),a=Math.log(i),u=Math.max(o,n),s=Math.min(a,t);return s>u?(Math.exp(s)-Math.exp(u))/(a-o):0}function gh(e,n){return-(n+e*e)*Z2(e,n)/(n-1)}function ZK(e,n,t){if(!Number.isFinite(e)||!Number.isFinite(n)){if(t<=1)return!Number.isFinite(e)&&!Number.isFinite(n)?NaN:Number.isFinite(e)?1/0:-1/0;const r=i=>Number.isFinite(i)?gh(i,t):0;return r(n)-r(e)}return Math.abs(t-1)<HK?WK(Kh(0,1,t),e,n):gh(n,t)-gh(e,t)}function eY(e,n,t){const[r,i,o]=e,a=(n-r)/i,u=(t-r)/i,s=c=>c===-1/0?0:c===1/0?1:qT(c,o);return r*(s(u)-s(a))+i*ZK(a,u,o)}function nY(e,n,t){const[r,i,o]=e;if(t===1/0)return 1/0;const a=Z2(0,o)/i,u=c=>{const l=(c-r)/i;return a*(1+l*l/o)**(-(o+1)/2)},s=n===-1/0?0:Math.exp(n-t);return Math.exp(t)*VK(c=>c<=0?0:u(t+Math.log(c)),s,1,BK)}const Nt={tri:{signature:"tri(lo, peak, hi)",note:"triangular",nParams:3,check:OK,build:e=>({latent:PK(e[0],e[1],e[2]),logX:!1}),partialFirstMoment:KK},uniform:{signature:"uniform(lo, hi)",note:"uniform",nParams:2,check:NK,build:e=>({latent:S7(e[0],e[1]),logX:!1}),partialFirstMoment:XK},beta:{signature:"beta(a, b)",note:"Beta on [0, 1]; a, b > 0",nParams:2,check:kK,build:e=>({latent:DK(e[0],e[1]),logX:!1}),partialFirstMoment:YK},normal:{signature:"normal(mu, sigma)",note:"normal; sigma > 0",nParams:2,check:y7,build:e=>({latent:w7(e[0],e[1]),logX:!1}),partialFirstMoment:JK},lognormal:{signature:"lognormal(mu, sigma)",note:"mu/sigma are mean/sd of log(X); sigma > 0",nParams:2,check:y7,build:e=>({latent:w7(e[0],e[1]),logX:!0}),partialFirstMoment:zK},loguniform:{signature:"loguniform(lo, hi)",note:"uniform in log space; 0 < lo < hi",nParams:2,check:MK,build:e=>({latent:S7(Math.log(e[0]),Math.log(e[1])),logX:!0}),partialFirstMoment:QK},t:{signature:"t(mu, sigma, df)",note:"location-scale Student-t; sigma > 0, df > 0",nParams:3,check:E7,build:e=>({latent:Kh(e[0],e[1],e[2]),logX:!1}),partialFirstMoment:eY},logt:{signature:"logt(mu, sigma, df)",note:"exp of location-scale Student-t; log-space params like lognormal",nParams:3,check:E7,build:e=>({latent:Kh(e[0],e[1],e[2]),logX:!0}),partialFirstMoment:nY}},tY=["normal","lognormal","t","logt"];function rY(e){const[n,t]=e;return n<t?null:`requires lo < hi in the truncation window, got lo=${n}, hi=${t}`}function iY(e,n){const t=n.signature.split("(",2)[1].slice(0,-1);return{signature:`${e}-trunc(${t}, lo, hi)`,note:`${n.note}; explicitly truncated to [lo, hi]`,nParams:n.nParams+2,check:r=>n.check(r.slice(0,n.nParams))??rY(r.slice(n.nParams)),build:r=>n.build(r),partialFirstMoment:n.partialFirstMoment,hasTruncWindow:!0}}for(const e of tY)Nt[`${e}-trunc`]=iY(e,Nt[e]);function oY(e){return xT.test(e)}function HT(e){const n=xT.exec(e);if(!n)throw new Error(`malformed family spec ${JSON.stringify(e)}: expected "family(num, num, ...)"`);const t=n[1],r=n[2],i=Nt[t];if(i===void 0)throw new Error(`unknown distribution family ${JSON.stringify(t)}; available: `+Object.values(Nt).map(s=>s.signature).join(", "));const o=r.split(",").map(s=>s.trim());for(const s of o)if(!CK.test(s))throw new Error(`family spec ${JSON.stringify(e.trim())}: bad numeric argument ${JSON.stringify(s)}`);const a=o.map(Number);if(a.length!==i.nParams)throw new Error(`${t} takes ${i.nParams} arguments as ${i.signature}, got ${a.length}`);const u=i.check(a);if(u)throw new Error(`${e.trim()}: ${i.signature} ${u}`);return i.hasTruncWindow?{family:t,params:a.slice(0,-2),text:e.trim(),truncWindow:[a[a.length-2],a[a.length-1]]}:{family:t,params:a,text:e.trim(),truncWindow:null}}function ji(e,n){return n===-1/0?0:n===1/0?1:e.cdf(n)}class e_{constructor(n,t,r,i,o,a,u,s,c){this.spec=n,this.latent=t,this.logX=r,this.cdfLo=i,this.mass=o,this.xLo=a,this.xHi=u,this.yLo=s,this.yHi=c}inverseCdf(n){const t=this.latent.ppf(this.cdfLo+n*this.mass),r=this.logX?Math.exp(t):t;return Math.min(Math.max(r,this.xLo),this.xHi)}cdf(n){if(n<=this.xLo)return 0;if(n>=this.xHi)return 1;if(this.logX&&n<=0)return 0;const t=this.logX?Math.log(n):n;return(ji(this.latent,t)-this.cdfLo)/this.mass}mean(){const n=Nt[this.spec.family];if(n===void 0)throw new Error(`unknown distribution family ${JSON.stringify(this.spec.family)}`);const r=n.partialFirstMoment(this.spec.params,this.yLo,this.yHi)/this.mass;return Number.isFinite(r)?r:null}pdf(n){return n<this.xLo||n>this.xHi?0:this.logX?n<=0?0:this.latent.pdf(Math.log(n))/n/this.mass:this.latent.pdf(n)/this.mass}}function n_(e,n,t){const r=Nt[e.family];if(r===void 0)throw new Error(`unknown distribution family ${JSON.stringify(e.family)}`);const{latent:i,logX:o}=r.build(e.params);let a=n===null?-1/0:n,u=t===null?1/0:t;e.truncWindow!==null&&(a=Math.max(a,e.truncWindow[0]),u=Math.min(u,e.truncWindow[1]));let s,c;o?(s=a>0?Math.log(a):-1/0,c=u>0?Math.log(u):-1/0):(s=a,c=u);const l=ji(i,s),p=ji(i,c)-l;if(p<b7){let m=`the variable's range [${n}, ${t}]`;throw e.truncWindow!==null&&(m+=` ∩ the spec's truncation window [${e.truncWindow[0]}, ${e.truncWindow[1]}]`),new Error(`family spec ${JSON.stringify(e.text)}: essentially no probability mass in ${m} (mass ${p.toExponential(2)} < ${b7})`)}return new e_(e,i,o,l,p,a,u,s,c)}const Da=20,UT=1e-9;function Fa(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function zh(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function aY(e,n,t){const r=`lloads.latents[${n}]`;if(!zh(e))return`${r}: expected an object, got ${Fa(e)}`;for(const o of["name","description"]){const a=e[o];if(typeof a!="string"||a.trim()==="")return`${r}.${o}: expected a non-empty string, got ${JSON.stringify(a)}`}const i=e.loadings;if(!zh(i))return`${r}.loadings: expected an object, got ${Fa(i)}`;if(Object.keys(i).length===0)return`${r}.loadings: empty — name the subjective variables this latent applies to, with 0 for any you considered and declined`;for(const[o,a]of Object.entries(i)){if(!t.has(o))return`${r}.loadings: '${o}' is not one of the subjective variables this jprob samples (${[...t].sort().join(", ")}), so a loading on it would have no effect`;if(typeof a!="number")return`${r}.loadings['${o}']: expected a number, got ${JSON.stringify(a)}`;if(!Number.isFinite(a))return`${r}.loadings['${o}']: ${a} is not finite`;if(a<-1||a>1)return`${r}.loadings['${o}']: ${a} not in [-1, 1]`}return null}function Co(e,n,t=[]){if(e==null)return null;if(!zh(e))return`lloads: expected an object, got ${Fa(e)}`;const r=Object.keys(e).filter(c=>c!=="latents").sort();if(r.length>0)return`lloads: unexpected key(s) ${JSON.stringify(r)}`;const i=e.latents;if(!Array.isArray(i))return`lloads.latents: expected a list, got ${Fa(i)}`;if(i.length>Da)return`lloads.latents: ${i.length} latents exceeds the cap of ${Da}`;const o=new Set(n);for(const[c,l]of i.entries()){const d=aY(l,c,o);if(d!==null)return d}const a=new Map;for(const c of i)for(const[l,d]of Object.entries(c.loadings))a.set(l,(a.get(l)??0)+d**2);for(const[c,l]of[...a.entries()].sort((d,p)=>d[0]<p[0]?-1:1))if(l>1+UT)return`lloads: loading budget exceeded for '${c}' — the sum of squared loadings across latents is ${I7(l)}, over the limit of 1 by ${I7(l-1)}; no residual variance is left for it`;const u=new Set(t),s=[...a.entries()].filter(([c,l])=>l>0&&u.has(c)).map(([c])=>c).sort();return s.length>0?`lloads: ${s.map(c=>`'${c}'`).join(", ")} ${s.length===1?"has":"have"} a point-mass distribution in this response, so a loading on it has no effect; remove the loading or give it a non-degenerate distribution`:null}function I7(e){return String(Number(e.toPrecision(6)))}function zu(e){return e==null?!1:e.latents.some(n=>Object.values(n.loadings).some(t=>t!==0))}function uY(e,n,t=1){if(!(t>=0&&t<=1))throw new Error(`lloads dependence strength ${t} not in [0, 1]`);const r=Co(e,n);if(r!==null)throw new Error(r);const i=(e==null?void 0:e.latents)??[],o=Math.sqrt(t),a=new Map(n.map((c,l)=>[c,l])),u=n.map(()=>i.map(()=>0));for(const[c,l]of i.entries())for(const[d,p]of Object.entries(l.loadings))u[a.get(d)][c]=p*o;const s=u.map(c=>Math.sqrt(Math.max(0,1-c.reduce((l,d)=>l+d*d,0))));return{loadingMatrix:u,residualSds:s}}const qa="pointmass",sY="[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?",cY=new RegExp(`^\\s*${qa}\\s*\\(\\s*(${sY})\\s*\\)\\s*$`),lY=new RegExp(`^\\s*${qa}\\b`);function GT(e){const n=cY.exec(e);if(n===null)throw new Error(`malformed ${qa} spec ${JSON.stringify(e)}: expected "${qa}(num)"`);return Number(n[1])}function t_(e){return lY.test(e)?GT(e):null}function jT(e){const n=GT(e);return[[n,1],[n,1]]}function VT(e,n,t){if(n===0)throw new Error(`${t}: need at least one component to mix`);if(e.length!==n)throw new Error(`${t}: expected one weight per component (${n}); got ${e.length}`);let r=0;for(const i of e){if(!(i>0))throw new Error(`${t}: every mixture weight must be positive`);r+=i}return e.map(i=>i/r)}function Qu(e,n){const t=VT(n,e.length,"weightedMean");let r=0;return e.forEach((i,o)=>{r+=t[o]*i}),r}function dY(e,n){let t=1/0,r=-1/0;for(const i of e){const{lo:o,hi:a}=n(i);t=Math.min(t,o),r=Math.max(r,a)}return{lo:t,hi:r}}function Qh(e){const n=.254829592,t=-.284496736,r=1.421413741,i=-1.453152027,o=1.061405429,a=.3275911,u=e<0?-1:1,s=Math.abs(e)/Math.SQRT2,c=1/(1+a*s),l=1-((((o*c+i)*c+r)*c+t)*c+n)*c*Math.exp(-s*s);return .5*(1+u*l)}function xa(){const e=Math.random(),n=Math.random(),t=Math.sqrt(-2*Math.log(e)),r=2*Math.PI*n;return[t*Math.cos(r),t*Math.sin(r)]}const Oo=1e-15;function fY(e,n){const t=e.length;if(t<2)throw new Error(`buildFromXsHs: need at least 2 breakpoints, got ${t}`);let r=0;for(let a=0;a<t-1;a++)r+=(e[a+1]-e[a])*(n[a]+n[a+1])/2;if(r<=0)throw new Error("buildPieceLinear: distribution has zero or negative area");const i=new Float64Array(t);for(let a=0;a<t;a++)i[a]=n[a]/r;const o=new Float64Array(t);o[0]=0;for(let a=0;a<t-1;a++)o[a+1]=o[a]+(e[a+1]-e[a])*(i[a]+i[a+1])/2;return o[t-1]=1,{xs:new Float64Array(e),fs:i,Fs:o}}function WT(e){const{pairs:n}=e,t=n[0][0];if(n[n.length-1][0]-t<Oo)return{xs:new Float64Array([t,t]),fs:new Float64Array([1,1]),Fs:new Float64Array([0,1])};const i=n.map(a=>a[0]),o=n.map(a=>a[1]);return fY(i,o)}function Vi(e,n){if(e.kind==="family"){if(n===void 0)throw new Error(`family spec ${JSON.stringify(e.spec.text)} needs the svar's declared range for implicit truncation, but no paramRange was provided (thread paramRanges through the caller)`);return n_(e.spec,n.lo,n.hi)}return WT(e)}function $r(e,n){return n instanceof e_?n.inverseCdf(e):mY(e,n)}const pY=1e-12;function mY(e,n){const{xs:t,fs:r,Fs:i}=n,o=t.length-1;if(o<=0||e<=0)return t[0];if(e>=1)return t[o];let a=0,u=o;for(;a<u-1;){const m=a+u>>1;i[m]<=e?a=m:u=m}const s=a,c=t[s+1]-t[s];if(c<Oo)return t[s];const l=e-i[s],d=(r[s+1]-r[s])/c;let p;if(Math.abs(d)<pY)p=l/r[s];else{const m=r[s]*r[s]+2*d*l;p=(-r[s]+Math.sqrt(Math.max(0,m)))/d}return t[s]+p}function Zh(e,n,t,r,i){var c;const{nParams:o,perTrialLoadings:a,trialPicker:u}=XT(e,n,t,r),s=Array.from({length:o},()=>new Float64Array(i));for(let l=0;l<i;l++){const d=u(),p=e[d],{loadingMatrix:m,residualSds:f}=a[d],h=((c=m[0])==null?void 0:c.length)??0;if(h===0)for(let v=0;v<o;v++)s[v][l]=$r(Math.random(),p[v]);else{const v=[];for(let _=0;_<h;_++)v.push(xa()[0]);for(let _=0;_<o;_++){const g=xa()[0],b=m[_];let y=f[_]*g;for(let E=0;E<h;E++)y+=b[E]*v[E];s[_][l]=$r(Qh(y),p[_])}}}return s}function XT(e,n,t,r){const i=e.length;if(i===0)throw new Error("sampleCopulaMatrix: need at least one trial");const o=r.length;if(e.some(u=>u.length!==o))throw new Error(`sampleCopulaMatrix: trials disagree with params on parameter count (${o} params)`);if(n.length!==i)throw new Error(`sampleCopulaMatrix: ${n.length} per-trial lloads specs for ${i} trials`);const a=n.map(u=>uY(u,r));return{trialCount:i,nParams:o,perTrialLoadings:a,trialPicker:hY(t,i)}}function hY(e,n){if(e.length!==n)throw new Error(`sampleCopulaMatrix: ${e.length} per-trial weights for ${n} trials`);const t=new Float64Array(n);let r=0;for(const[i,o]of e.entries()){if(!(o>0))throw new Error("sampleCopulaMatrix: every per-trial weight must be positive");r+=o,t[i]=r}return()=>{const i=Math.random()*r;for(let o=0;o<n;o++)if(i<t[o])return o;return n-1}}function vY(e,n,t,r,i){var d;const{nParams:o,perTrialLoadings:a,trialPicker:u}=XT(e,n,t,r),s=Array.from({length:o},()=>new Float64Array(i)),l=a.some(({loadingMatrix:p})=>{var m;return(((m=p[0])==null?void 0:m.length)??0)>0})?Array.from({length:o},()=>new Float64Array(i)):s;for(let p=0;p<i;p++){const m=u(),f=e[m],{loadingMatrix:h,residualSds:v}=a[m],_=((d=h[0])==null?void 0:d.length)??0;if(_===0)for(let g=0;g<o;g++){const b=$r(Math.random(),f[g]);s[g][p]=b,l[g][p]=b}else{const g=[];for(let b=0;b<_;b++)g.push(xa()[0]);for(let b=0;b<o;b++){const y=xa()[0];s[b][p]=$r(Qh(y),f[b]);const E=h[b];let $=v[b]*y;for(let T=0;T<_;T++)$+=E[T]*g[T];l[b][p]=$r(Qh($),f[b])}}}return{independent:s,joint:l}}function No(e,n){if(e.length===0)throw new Error("combineSampleColumns: need at least one sampled column");const t=e[0].length,r=new Float64Array(t),i=new Array(e.length);for(let o=0;o<t;o++){for(let a=0;a<e.length;a++)i[a]=e[a][o];r[o]=n(i)}return r}function _Y(e){if(typeof e=="string")return t_(e)!==null?{kind:"pairs",pairs:jT(e)}:{kind:"family",spec:HT(e)};if(!e||e.length===0)throw new Error("sampleValueToSpec: no sample value present (gate on sampleValueHasData to tolerate absence)");return{kind:"pairs",pairs:e}}function KT(e,n){const t=e.trim(),r=Number(t);if(isNaN(r)||!Rr(n,r))throw new Error(`"${t}" is not a valid value in ${_a(n)}`);return r}function YT(e,n){const t=e.trim(),r=t.split(/\s+/);if(r.length!==2)throw new Error(`expected "lo hi", got "${t}"`);const i=Number(r[0]),o=Number(r[1]),a=yw(n);if(isNaN(i)||isNaN(o)||!Rr(a,i)||!Rr(a,o)||i>o)throw new Error(`invalid bounds "${t}" (need lo ≤ hi within ${_a(a)})`);return[i,o]}const gY=/\(\s*([\d.eE+-]+)\s+([\d.eE+-]+)\s*\)/g;function Zu(e,n){const t=e.trim(),r=t_(t);if(r!==null){if(!Rr(n,r))throw new Error(`pointmass value ${r} not in ${_a(n)}`);return{kind:"pairs",pairs:jT(t)}}if(oY(t)){const s=HT(t);return n_(s,n.lo,n.hi),{kind:"family",spec:s}}if(!t.includes("("))throw new Error(`expected a family spec "name(num, ...)" or PWL pairs "(x y) ..." (pointmass(num) is also accepted), got "${t}"`);const i=[...t.matchAll(gY)];if(i.length<2)throw new Error(`need at least 2 (x y) pairs, got ${i.length}`);const o=i.map(s=>[Number(s[1]),Number(s[2])]),a=yw(n);let u=-1/0;for(let s=0;s<o.length;s++){const[c,l]=o[s];if(isNaN(c)||!Rr(a,c))throw new Error(`pair ${s+1} x=${c} not in ${_a(a)}`);if(isNaN(l)||l<0||l>1)throw new Error(`pair ${s+1} y=${l} not in [0, 1]`);if(c<u)throw new Error(`pair ${s+1} x=${c} not sorted (prev was ${u})`);u=c}return{kind:"pairs",pairs:o}}function JT(e){return typeof e=="string"?e.length>0:((e==null?void 0:e.length)??0)>0}function es(e){const n=new Float64Array(e);n.sort();const t=n.length;let r=0;for(let i=0;i<t;i++)r+=n[i];return{mean:r/t,median:n[Math.floor(t*.5)],p5:n[Math.floor(t*.05)],p95:n[Math.floor(t*.95)],samples:n,count:t}}const bY=.5,yY=.05,EY=.95,SY=1e-12,wY=200;function ko(e){return!(e instanceof e_)}function r_(e){const{xs:n}=e,t=n[0];return n[n.length-1]-t<Oo?t:null}function zT(e,n){let t=0,r=e.length-1;for(;t<r-1;){const i=t+r>>1;e[i]<=n?t=i:r=i}return t}function AY(e,n){const{xs:t,fs:r,Fs:i}=e,o=t.length-1;if(n<t[0])return 0;if(n>=t[o])return 1;const a=zT(t,n),u=t[a+1]-t[a];if(u<Oo)return i[a];const s=n-t[a],c=(r[a+1]-r[a])/u;return i[a]+r[a]*s+c*s*s/2}function $Y(e,n){if(r_(e)!==null)return 0;const{xs:t,fs:r}=e,i=t.length-1;if(n<t[0]||n>t[i])return 0;if(n===t[i])return r[i];const o=zT(t,n),a=t[o+1]-t[o];return a<Oo?r[o]:r[o]+(r[o+1]-r[o])*(n-t[o])/a}function TY(e){const n=r_(e);if(n!==null)return n;const{xs:t,fs:r}=e;let i=0;for(let o=0;o<t.length-1;o++){const a=t[o+1]-t[o];if(a<=0)continue;const u=(r[o+1]-r[o])/a;i+=t[o]*r[o]*a+(t[o]*u+r[o])*a*a/2+u*a**3/3}return i}function IY(e,n){return ko(e)?AY(e,n):e.cdf(n)}function LY(e,n){return ko(e)?$Y(e,n):e.pdf(n)}function L7(e,n){return $r(n,e)}function QT(e){return ko(e)?TY(e):e.mean()}function RY(e){return ko(e)?r_(e):null}function CY(e){return ko(e)?Array.from(e.xs):[]}function ii(e,n,t){return VT(n,e.length,t)}function OY(e,n,t){const r=ii(e,n,"mixtureCdf");let i=0;return e.forEach((o,a)=>{i+=r[a]*IY(o,t)}),i}function NY(e,n,t){const r=ii(e,n,"mixturePdf");let i=0;return e.forEach((o,a)=>{i+=r[a]*LY(o,t)}),i}function ZT(e,n){const t=ii(e,n,"mixtureMean");let r=0;for(const[i,o]of e.entries()){const a=QT(o);if(a===null)return null;r+=t[i]*a}return r}function Ei(e,n,t){if(ii(e,n,"mixtureQuantile"),!(t>0&&t<1))throw new Error(`mixtureQuantile: quantile level ${t} is not in (0, 1)`);if(e.length===1)return L7(e[0],t);const r=e.map(a=>L7(a,t));let i=Math.min(...r),o=Math.max(...r);for(let a=0;a<wY&&!(o-i<=SY*Math.max(Math.abs(i),Math.abs(o)));a++){const u=i+(o-i)/2;OY(e,n,u)>=t?o=u:i=u}return o}function eI(e,n){const t=ii(e,n,"mixtureAtoms"),r=new Map;return e.forEach((i,o)=>{const a=RY(i);if(a===null)return;const u=r.get(a)??{count:0,mass:0};r.set(a,{count:u.count+1,mass:u.mass+t[o]})}),[...r.entries()].sort(([i],[o])=>i-o).map(([i,{count:o,mass:a}])=>({x:i,count:o,mass:a}))}function nI(e,n){return ii(e,n,"mixtureStats"),{mean:ZT(e,n),median:Ei(e,n,bY),p5:Ei(e,n,yY),p95:Ei(e,n,EY)}}const kY=32,MY=4e6,Bn=new Map;let la=0;function Ht(e){return JSON.stringify(e,(n,t)=>{if(typeof t=="function"||typeof t=="symbol")throw new Error(`mc_memo key parts must be JSON-serializable data; got a ${typeof t}. Identify a combine function by a string tag / form id instead.`);return t})}function ns(e,n){const t=Ht(e),r=Bn.get(t);if(r!==void 0)return Bn.delete(t),Bn.set(t,r),r;const i=n();for(Bn.set(t,i),la+=i.samples.length;(Bn.size>kY||la>MY)&&Bn.size>1;){const o=Bn.keys().next().value;la-=Bn.get(o).samples.length,Bn.delete(o)}return i}function PY(){Bn.clear(),la=0}const DY=256,lt=new Map,Wi=new Map;let tI=1;function rI(e){const n=Ht(e),t=lt.get(n);if(t!==void 0)return lt.delete(n),lt.set(n,t),t;const r={token:`mcpool-${tI++}`,extraBlocks:0};for(lt.set(n,r),Wi.set(r.token,r);lt.size>DY;){const i=lt.keys().next().value;Wi.delete(lt.get(i).token),lt.delete(i)}return r}const FY=64,Ba=new Map,dt=new Map;function iI(e){const n=Ht([...e].sort()),t=dt.get(n);if(t!==void 0)return dt.delete(n),dt.set(n,t),t;const r=`mcpoolgroup-${tI++}`;for(dt.set(n,r),Ba.set(r,[...e]);dt.size>FY;){const i=dt.keys().next().value;Ba.delete(dt.get(i)),dt.delete(i)}return r}function qY(e){const n=Ba.get(e);if(n!==void 0){let r=!1;for(const i of n){const o=Wi.get(i);o!==void 0&&(o.extraBlocks+=1,r=!0)}return r}const t=Wi.get(e);return t===void 0?!1:(t.extraBlocks+=1,!0)}function xY(){lt.clear(),Wi.clear(),Ba.clear(),dt.clear()}const BY=2048,pt=new Map;function R7(e){const n=Ht(e),t=pt.get(n);if(t!==void 0)return pt.delete(n),pt.set(n,t),t}function C7(e){const n=Ht(e);if(pt.has(n))throw new Error(`streaming mean entry already exists for key ${n}`);const t={n:0,mean:0,m2:0,blocksFolded:0};for(pt.set(n,t);pt.size>BY;){const r=pt.keys().next().value;pt.delete(r)}return t}function bh(e,n,t){let{n:r,mean:i,m2:o}=e;for(let a=0;a<n.length;a++){const u=n[a];if(!Number.isFinite(u))throw new Error(`streaming mean fold: non-finite sample value ${u} at block index ${a}`);r+=1;const s=u-i;i+=s/r,o+=s*(u-i)}e.n=r,e.mean=i,e.m2=o,e.blocksFolded=t}function O7(e){return Math.sqrt(e.m2/(e.n-1)/e.n)}function HY(){pt.clear()}const Mo="Bounds are not available for this formula: no interval for it follows from bounds responses. Its point and distribution results are unaffected.",ts="copula-matrix";function i_(e,n,t,r){const i=oo(n,t);if(i.bounds&&!i.boundsTightness)throw new Error(`form ${e} has a bounds implementation but no boundsTightness — regenerate form_fns`);return{key:gw(e,n,t),params:i.params,valueRange:i.valueRange,point:i.point,bounds:i.bounds??null,boundsTightness:i.bounds?i.boundsTightness:null,sampleStage:i.sampleStage,barrierRegistry:r&&NN(r,t)}}function Jn(e,n,t,r){if(n.length!==e.length)throw new Error(`resolveTrialRecordInputs: expected one weight per trial (${e.length}); got ${n.length}`);return t==="point"?{mode:t,trialWeights:n,trials:e.map(i=>i.point)}:t==="bounds"?{mode:t,trialWeights:n,trials:e.map(i=>i.bounds)}:{mode:t,ranges:r,trialWeights:n,trials:e.map(i=>{const o={};for(const[a,u]of Object.entries(i.sample))JT(u)&&(o[a]=_Y(u));return{specs:o,lloads:i.lloads??null}})}}class Xi extends Error{constructor(n,t){super(`no trial has ${n} data for ${JSON.stringify(t)}`),this.missingParams=t,this.name="NoUsableTrialsError"}}function zn(e,n,t){switch(n.mode){case"point":{const r=qr(n.mode,n.trials,n.trialWeights,e.params,t.onIncompleteTrial),i=r.trials.map(a=>e.params.map(u=>a[u])),o=i.map(a=>e.point(a));return{kind:"point",value:Qu(o,r.weights),perTrial:o,perTrialInputs:i}}case"bounds":{const r=qr(n.mode,n.trials,n.trialWeights,e.params,t.onIncompleteTrial),i=r.trials.map(s=>e.params.map(c=>s[c])),o=e.bounds;if(!o)throw new Error(Mo);const{lo:a,hi:u}=dY(i,o);return{kind:"bounds",lo:a,hi:u,tightness:e.boundsTightness??"loose",trialCount:r.trials.length}}case"sample":return UY(e,n,t)}}function qr(e,n,t,r,i){const o=u=>e==="sample"?u.specs:u;if(n.length===0)throw i==="skip"?new Xi(e,r):new Error(`record has no trials with ${e} data`);if(i==="error"){for(const[u,s]of n.entries()){const c=r.filter(l=>o(s)[l]===void 0);if(c.length>0)throw new Error(`Missing required ${e} input(s) for trial ${u+1}: ${JSON.stringify(c)}`)}return{trials:n,weights:t}}const a=n.map((u,s)=>r.every(c=>o(u)[c]!==void 0)?s:-1).filter(u=>u>=0);if(a.length===0){const u=r.filter(s=>o(n[0])[s]===void 0);throw new Xi(e,u)}return{trials:a.map(u=>n[u]),weights:a.map(u=>t[u])}}function UY(e,n,t){if(t.precomputed)return ev(t.precomputed.stats);const r=t.mcIters;if(r===void 0)throw new Error("live sample evaluation requires opts.mcIters");if(e.params.length===0)throw new Error(`form ${e.key} has no params to Monte-Carlo over`);const i=qr(n.mode,n.trials,n.trialWeights,e.params,t.onIncompleteTrial);if(e.sampleStage!==void 0)return jY(e,e.sampleStage,n,i,r,t.mcItersPerClick);const{matrixContentParts:o,sampleFreshBlock:a}=rs(n,i),u=Ha(ts,o,r,t.mcItersPerClick,a),s=ns([...u.matrixKeyParts,"form",e.key],()=>es(No(e.params.map(c=>u.matrices.joint.get(c)),e.point)));return{kind:"mc",mean:s.mean,median:s.median,p5:s.p5,p95:s.p95,samples:s.samples,storedDistribution:null,provenance:"live",mcIters:u.totalIters,barrierInnerIters:null,mcPoolToken:u.poolToken,trialCount:i.trials.length}}function ev(e){return{kind:"mc",mean:e.mean,median:e.median,p5:e.p5,p95:e.p95,samples:null,storedDistribution:e.quantile_table_mixture??null,provenance:"precomputed",mcIters:e.mc_iters,barrierInnerIters:null,mcPoolToken:null,trialCount:0}}function oI(e){return{independent:ev(e.independent),joint:ev(e.joint)}}function o_(e,n,t){if(n.mode!=="sample")throw new Error(`joint-dependence comparison requires sample inputs, got ${n.mode}`);if(t.precomputed)return oI(t.precomputed);const r=t.mcIters;if(r===void 0)throw new Error("live joint-dependence comparison requires opts.mcIters");if(e.params.length===0)throw new Error(`form ${e.key} has no params to Monte-Carlo over`);const i=qr(n.mode,n.trials,n.trialWeights,e.params,t.onIncompleteTrial);if(e.sampleStage!==void 0)throw new Error(`joint dependence is not supported for form ${e.key}: correlation across an E[·] aggregation barrier has no defined semantics`);const{matrixContentParts:o,sampleFreshBlock:a}=rs(n,i),u=Ha(ts,o,r,t.mcItersPerClick,a),s=(p,m)=>ns([...u.matrixKeyParts,...m,"form",e.key],()=>es(No(e.params.map(f=>p.get(f)),e.point))),c=s(u.matrices.joint,[]),l=s(u.matrices.independent,["independent"]),d=p=>({kind:"mc",mean:p.mean,median:p.median,p5:p.p5,p95:p.p95,samples:p.samples,storedDistribution:null,provenance:"live",mcIters:u.totalIters,barrierInnerIters:null,mcPoolToken:u.poolToken,trialCount:i.trials.length});return{independent:d(l),joint:d(c)}}function aI(e,n,t){if(n.mode!=="sample")throw new Error(`live sample MC key requires sample inputs, got ${n.mode}`);if(e.sampleStage!==void 0)throw new Error(`live sample MC key is not defined for E[·] barrier form ${e.key}`);const r=qr(n.mode,n.trials,n.trialWeights,e.params,t.onIncompleteTrial),{matrixContentParts:i}=rs(n,r);return uI(ts,i,t.mcIters,t.mcItersPerClick)}function rs(e,n){const{trials:t,weights:r}=n,i=Object.keys(t[0].specs).filter(l=>t.every(d=>d.specs[l]!==void 0)).sort(),o=[i,t.map(l=>i.map(d=>l.specs[d])),i.map(l=>e.ranges[l]??null),t.map(l=>l.lloads),"weights",r],a=()=>t.map(l=>i.map(d=>Vi(l.specs[d],e.ranges[d]))),u=l=>new Map(i.map((d,p)=>[d,l[p]]));return{matrixContentParts:o,sampleFreshBlock:l=>{const d=vY(a(),t.map(f=>f.lloads),r,i,l),p=u(d.independent),m=d.joint===d.independent?p:u(d.joint);return{independent:p,joint:m}},sampleFreshJointBlock:l=>u(Zh(a(),t.map(d=>d.lloads),r,i,l))}}function GY(e,n,t){if(n.mode!=="sample")throw new Error(`streaming mean evaluation requires sample inputs, got ${n.mode}`);if(e.sampleStage!==void 0)throw new Error(`streaming mean evaluation of ${e.key} is not supported for formulas with E[·] aggregation barriers`);const r=t.mcIters;if(r===void 0)throw new Error("streaming mean evaluation requires opts.mcIters");if(e.params.length===0)throw new Error(`form ${e.key} has no params to Monte-Carlo over`);const i=qr(n.mode,n.trials,n.trialWeights,e.params,t.onIncompleteTrial),{matrixContentParts:o,sampleFreshJointBlock:a}=rs(n,i),u=m=>No(e.params.map(f=>a(m).get(f)),e.point),s=t.mcItersPerClick;if(s===void 0){const m=["stream-mean",...o,r,"form",e.key];let f=R7(m);return f===void 0&&(f=C7(m),bh(f,u(r),0)),{mean:f.mean,n:f.n,standardError:O7(f),mcPoolToken:null}}const c=["stream-mean-pool",...o,r,s],l=rI(c),d=[...c,"form",e.key];let p=R7(d);return p===void 0?(p=C7(d),bh(p,u(r+l.extraBlocks*s),l.extraBlocks)):l.extraBlocks>p.blocksFolded?bh(p,u((l.extraBlocks-p.blocksFolded)*s),l.extraBlocks):l.extraBlocks<p.blocksFolded&&(p.blocksFolded=l.extraBlocks),{mean:p.mean,n:p.n,standardError:O7(p),mcPoolToken:l.token}}function uI(e,n,t,r){return[`${e}-pool`,...n,t,r]}function Ha(e,n,t,r,i){if(r===void 0){const u=[e,...n,t];return{matrixKeyParts:u,poolToken:null,extraBlocks:0,totalIters:t,matrices:KY(u,()=>i(t))}}const o=uI(e,n,t,r),a=rI(o);return{matrixKeyParts:[...o,"blocks",a.extraBlocks],poolToken:a.token,extraBlocks:a.extraBlocks,totalIters:t+a.extraBlocks*r,matrices:JY(o,a.extraBlocks,t,r,i)}}function jY(e,n,t,r,i,o){if(r.trials.some(E=>{var $;return((($=E.lloads)==null?void 0:$.latents.length)??0)>0}))throw new Error(`joint dependence is not supported for form ${e.key}: correlation across an E[·] aggregation barrier has no defined semantics`);const a=e.barrierRegistry;if(a===void 0)throw new Error(`form ${e.key} contains an E[·] barrier but no barrier registry was provided — evaluating it without one would silently compute per-draw (pre-E) semantics`);const u=n.params.filter(E=>E.barrier);for(const E of u)if(a[E.name]===void 0)throw new Error(`form ${e.key}: barrier ${E.name} is not in the barrier registry`);const s=[...new Set(Object.values(a).flatMap(E=>E.params))].sort(),c=[],l=[],d=[],p=[];for(const E of r.trials){const $=s.filter(L=>E.specs[L]!==void 0),T=[$,$.map(L=>E.specs[L]),$.map(L=>t.ranges[L]??null)],C=Ha("barrier-inner-matrix",T,i,o,L=>{const A=$.map(S=>Vi(E.specs[S],t.ranges[S])),w=Zh([A],[null],[1],$,L);return N7(new Map($.map((S,I)=>[S,w[I]])))});C.poolToken!==null&&c.push(C.poolToken),l.push(C.extraBlocks),d.push(C.totalIters),p.push(u.map(L=>VY(C.matrixKeyParts,C.matrices.joint,L.name,a[L.name])))}const m=Object.keys(r.trials[0].specs).filter(E=>r.trials.every($=>$.specs[E]!==void 0)).sort(),f=u.map(E=>E.name),h=[m,r.trials.map(E=>m.map($=>E.specs[$])),m.map(E=>t.ranges[E]??null),"weights",r.weights,"barriers",f,i,o??null,l,p],_=Ha(ts,h,i,o,E=>{const $=[...m,...f],T=r.trials.map((A,w)=>[...m.map(S=>Vi(A.specs[S],t.ranges[S])),...p[w].map(S=>WT({pairs:[[S,1],[S,1]]}))]),C=Zh(T,r.trials.map(()=>null),r.weights,$,E),L=new Map($.map((A,w)=>[A,C[w]]));if(L.size!==$.length)throw new Error(`barrier key collides with a svar column name (${JSON.stringify($)})`);return N7(L)}),g=n.params.map(E=>{const $=_.matrices.joint.get(E.name);if($===void 0)throw new Error(`form ${e.key}: no sampled column for sample-stage param ${E.name}`);return $}),b=ns([..._.matrixKeyParts,"form",e.key],()=>es(No(g,n.point))),y=_.poolToken===null?null:iI([_.poolToken,...c]);return{kind:"mc",mean:b.mean,median:b.median,p5:b.p5,p95:b.p95,samples:b.samples,storedDistribution:null,provenance:"live",mcIters:_.totalIters,barrierInnerIters:Math.min(...d),mcPoolToken:y,trialCount:r.trials.length}}function VY(e,n,t,r){const i=r.cparamBindingKey===void 0?[...e,"barrier",t]:[...e,"barrier",t,r.cparamBindingKey];return ns(i,()=>{const a=r.params.map(p=>{const m=n.get(p);if(m===void 0)throw new Error(`barrier ${t}: trial has no inner sample column for leaf ${p}`);return m}),u=No(a,r.point);for(const p of u)if(!Number.isFinite(p))throw new Error(`barrier ${t}: non-finite operand draw (${p})`);const s=es(u);if(!Number.isFinite(s.mean))throw new Error(`barrier ${t}: non-finite mean (${s.mean})`);const c=u.length;let l=0;for(const p of u)l+=(p-s.mean)**2;const d=Math.sqrt(l/c/c)/Math.abs(s.mean);return console.debug(`[E-barrier] ${t}: n=${c} mean=${s.mean} relSE=${d}`),s}).mean}const WY=8,XY=6e6,Hn=new Map;let da=0;function N7(e){return{independent:e,joint:e}}function k7(e){let n=0;const t=new Set;for(const r of[e.independent,e.joint])for(const i of r.values())t.has(i)||(t.add(i),n+=i.length);return n}function nv(e){const n=Hn.get(e);return n!==void 0&&(Hn.delete(e),Hn.set(e,n)),n}function tv(e,n){for(Hn.set(e,n),da+=k7(n);(Hn.size>WY||da>XY)&&Hn.size>1;){const t=Hn.keys().next().value;da-=k7(Hn.get(t)),Hn.delete(t)}return n}function KY(e,n){const t=Ht(e);return nv(t)??tv(t,n())}function M7(e,n){const t=new Map;for(const[r,i]of e){const o=n.get(r);if(o===void 0)throw new Error(`concatSampleMatrices: fresh block lacks column for svar ${r}`);const a=new Float64Array(i.length+o.length);a.set(i,0),a.set(o,i.length),t.set(r,a)}return t}function YY(e,n){const t=M7(e.independent,n.independent),r=e.independent===e.joint&&n.independent===n.joint?t:M7(e.joint,n.joint);return{independent:t,joint:r}}function JY(e,n,t,r,i){const o=c=>Ht([...e,"blocks",c]),a=nv(o(n));if(a!==void 0)return a;let u=n-1,s;for(;u>=0&&(s=nv(o(u)))===void 0;)u--;s===void 0&&(s=tv(o(0),i(t)),u=0);for(let c=u+1;c<=n;c++)s=tv(o(c),YY(s,i(r)));return s}function zY(){Hn.clear(),da=0}function sI(e,n){const t=e.map(r=>`<span style="--density-legend-color: ${K(r.color)}; --density-legend-style: ${r.dashed?"dashed":"solid"}">${x(r.label)}</span>`).join("");return`<div class="density-overlay-legend" aria-label="${K(n)}">${t}</div>`}function a_(e,n){return'<div class="density-overlay-plot">'+sI(n,"Density curve legend")+`<canvas id="${K(e)}" width="400" height="200"></canvas></div>`}const QY=5,ZY=5,eJ=[0,.25,.5,.75,1];function cI(e,n,t){const r=n/2;return Math.min(Math.max(e,r),t-r)}function is(e,n){return{value:e,label:n===null?e.toFixed(2):n(e)}}function os(e,n){const t=QY/100*(n-e);return[e-t,n+t]}function u_(e,n,t){return e??os(n,t)}function nJ(e){return Math.max(0,-Math.floor(Math.log10(e)))}function tJ(e){const n=10**Math.floor(Math.log10(e)),t=e/n;return(t<=1?1:t<=2?2:t<=5?5:10)*n}function Ua(e,n,t=null){const r=rJ(e,n);return t===null?r:r.map(i=>({value:i.value,label:t(i.value)}))}function rJ(e,n){if(e===0&&n===1)return eJ.map(a=>({value:a,label:a.toFixed(2)}));if(n<=e)return[is(e,null)];const t=tJ((n-e)/ZY),r=nJ(t),i=[],o=t*1e-9;for(let a=Math.ceil(e/t)*t;a<=n+o;a+=t){const u=Math.abs(a)<o?0:a;i.push({value:u,label:u.toFixed(r)})}return i}const P7={ui:"sans-serif",mono:"monospace"},iJ={ui:"--font-ui",mono:"--font-mono"},D7=new Map;function lI(e){const n=D7.get(e);if(n!==void 0)return n;if(typeof getComputedStyle>"u"||typeof document>"u")return P7[e];const t=getComputedStyle(document.documentElement).getPropertyValue(iJ[e]).trim();return t?(D7.set(e,t),t):P7[e]}function as(e){return`${e}px ${lI("ui")}`}function Yt(e){return`${e}px ${lI("mono")}`}const oJ="pchip",aJ=200,uJ={logit:e=>Math.log(e/(1-e)),log:e=>Math.log(e),identity:e=>e};function sJ(e,n){const t=e.length,r=[],i=[];for(let u=0;u<t-1;u++)r.push(e[u+1]-e[u]),i.push((n[u+1]-n[u])/r[u]);if(t===2)return[i[0],i[0]];const o=new Array(t);for(let u=1;u<t-1;u++){const s=i[u-1],c=i[u];if(s*c<=0){o[u]=0;continue}const l=2*r[u]+r[u-1],d=r[u]+2*r[u-1];o[u]=(l+d)/(l/s+d/c)}const a=(u,s,c,l)=>{const d=((2*u+s)*c-u*l)/(u+s);return Math.sign(d)!==Math.sign(c)?0:Math.sign(c)!==Math.sign(l)&&Math.abs(d)>3*Math.abs(c)?3*c:d};return o[0]=a(r[0],r[1],i[0],i[1]),o[t-1]=a(r[t-2],r[t-3],i[t-2],i[t-3]),o}function cJ(e,n,t){if(e.length!==mt.length)throw new Error(`a quantile table has one value per level (${mt.length} levels); got ${e.length}`);const r=[],i=[],o=[];e.forEach((c,l)=>{const d=mt[l],p=r.length-1;if(p>=0&&c===r[p]){o[p]=d;return}if(p>=0&&!(c>r[p]))throw new Error(`quantile table values must be nondecreasing; got ${r[p]} then ${c}`);r.push(c),i.push(d),o.push(d)});const a=uJ[n],u=r.map(a),s=r.slice(0,-1).map((c,l)=>({levelAtStart:o[l],levelAtEnd:i[l+1],hermite:null}));if(t==="pchip"){let c=0;for(;c<s.length;){if(!Number.isFinite(u[c])||!Number.isFinite(u[c+1])){c++;continue}let l=c+1;for(;l<r.length-1&&i[l]===o[l]&&Number.isFinite(u[l+1]);)l++;const d=u.slice(c,l+1),p=d.map((f,h)=>h===0?o[c]:i[c+h]),m=sJ(d,p);for(let f=0;f<d.length-1;f++)s[c+f].hermite={uStart:d[f],uEnd:d[f+1],slopeStart:m[f],slopeEnd:m[f+1]};c=l}}return{values:Float64Array.from(r),levelFirst:Float64Array.from(i),levelLast:Float64Array.from(o),pieces:s,forward:a}}function dI(e,n,t){const r=e.pieces[n],{levelAtStart:i,levelAtEnd:o,hermite:a}=r;if(a===null){const p=e.values[n],m=e.values[n+1];return i+(o-i)*(t-p)/(m-p)}const u=a.uEnd-a.uStart,s=(e.forward(t)-a.uStart)/u,c=s*s,l=c*s,d=i*(2*l-3*c+1)+u*a.slopeStart*(l-2*c+s)+o*(-2*l+3*c)+u*a.slopeEnd*(l-c);return Math.min(Math.max(d,i),o)}function fI(e,n,t){let r=0,i=e.length;for(;r<i;){const o=r+i>>>1;(t?e[o]<n:e[o]<=n)?r=o+1:i=o}return r-1}function lJ(e,n){const t=fI(e.values,n,!1);return t<0?0:e.values[t]===n||t===e.values.length-1?e.levelLast[t]:dI(e,t,n)}function dJ(e,n){const t=fI(e.values,n,!0);return t===e.values.length-1?e.levelLast[t]:e.values[t+1]===n?e.levelFirst[t+1]:t<0?0:dI(e,t,n)}function fJ(e,n){const t=r=>{let i=0;return e.forEach((o,a)=>{i+=n[a]*r(o)}),Math.min(i,1)};return{atOrBelow:r=>t(i=>lJ(i,r)),below:r=>t(i=>dJ(i,r))}}function pJ(e,n,t,r){if(e.atOrBelow(t)>=n)return t;for(let i=0;i<aJ;i++){const o=t+(r-t)/2;if(o<=t||o>=r)break;e.atOrBelow(o)>=n?r=o:t=o}return r}function pI(e,n=oJ){const{tables:t,weights:r,transform:i}=e;if(t.length===0)throw new Error("a stored distribution needs at least one table");if(r.length!==t.length)throw new Error(`expected one weight per table (${t.length}); got ${r.length}`);const o=r.reduce((l,d)=>l+d,0);if(Math.abs(o-1)>1e-9)throw new Error(`stored distribution weights must sum to 1; got ${o}`);const a=t.map(l=>cJ(l,i,n)),u=fJ(a,r),s=[Math.min(...t.map(l=>l[0])),Math.max(...t.map(l=>l[l.length-1]))],c=l=>{const d=b=>b>l.domainLow&&(l.domainHigh===null||b<l.domainHigh);let p=1/0,m=-1/0;for(const b of t)for(const y of b)d(y)&&(p=Math.min(p,y),m=Math.max(m,y));if(p>m)return null;const f=u.atOrBelow(l.domainLow),h=l.domainHigh===null?0:1-u.below(l.domainHigh),v=[l.forward(p),l.forward(m)],_={cdfAtOrBelow:b=>u.atOrBelow(l.inverse(b)),cdfBelow:b=>u.below(l.inverse(b)),support:v,inView:()=>{throw new Error("a viewed stored distribution has no further view")}},g=b=>{if(b<=f)return v[0];if(b>=1-h)return v[1];const y=pJ(u,b,p,m);return Math.min(Math.max(l.forward(y),v[0]),v[1])};return{source:_,droppedLow:f,droppedHigh:h,centralRange:b=>[g(b),g(1-b)]}};return{cdfAtOrBelow:u.atOrBelow,cdfBelow:u.below,support:s,inView:c}}function mI(e){return e.samples!==null?e.samples:e.storedDistribution===null?null:pI(e.storedDistribution)}function s_(e){if(e instanceof Float64Array){if(e.length===0)throw new Error("density source has no samples");return[e[0],e[e.length-1]]}return e.support}function hI(e,n,t,r,i){if(!(t>=1)||!(i>r))throw new Error(`columnDensityFromCdf: need nColumns ≥ 1 and xMax > xMin; got ${t}, [${r}, ${i}]`);const o=(i-r)/t,a=new Float64Array(t);let u=e(r);for(let s=0;s<t;s++){const c=s===t-1?n(i):e(r+(i-r)*(s+1)/t);a[s]=(c-u)/o,u=c}return a}function mJ(e,n){let t=0,r=e.length;for(;t<r;){const i=t+r>>>1;e[i]<n?t=i+1:r=i}return t}function hJ(e,n){let t=0,r=e.length;for(;t<r;){const i=t+r>>>1;e[i]<=n?t=i+1:r=i}return t}function vJ(e,n,t,r){if(e.length===0)throw new Error("sampledColumnDensity: no samples");const i=e.length;return hI(o=>mJ(e,o)/i,o=>hJ(e,o)/i,n,t,r)}function vI(e,n,t,r){return e instanceof Float64Array?vJ(e,n,t,r):hI(e.cdfBelow,e.cdfAtOrBelow,n,t,r)}function _I(e,n,t){return Me.left+(e+.5)/n*t}const Me={top:4,bottom:18,left:4,right:4},_J=12,c_="#333",us=1.5,gJ="#777",gI="#2166ac",bJ="rgba(110, 110, 110, 0.12)",bI="rgba(33, 102, 172, 0.12)",Ga=c_,yI="rgba(51, 51, 51, 0.10)",ja=gI,EI=bI;function yJ(e){return e.quantile_table_mixture===void 0?null:{source:pI(e.quantile_table_mixture),p5:e.p5,p95:e.p95,color:Ga,dashed:!1,bandFill:yI}}function F7(e,n,t,r,i,o=null){const a=e.width,u=e.height,s=e.getContext("2d");if(!s)return;s.clearRect(0,0,a,u);const c=a-Me.left-Me.right,l=u-Me.top-Me.bottom,d=Me.top+l;if(n instanceof Float64Array&&n.length===0)return;const p=s_(n),[m,f]=u_(i,p[0],p[1]);if(f<=m){B7(s,Me.left+c/2,l),Si(s,[is(m,o)],()=>Me.left+c/2,d,a);return}const h=b=>Me.left+(b-m)/(f-m)*c,v=Math.round(c);if(p[1]-p[0]<(f-m)/c){B7(s,h((p[0]+p[1])/2),l),Si(s,Ua(m,f,o),h,d,a);return}const _=vI(n,v,m,f);let g=0;for(const b of _)g=Math.max(g,b);if(!(g<=0)){s.fillStyle="#e8e8e8",s.fillRect(h(t),Me.top,h(r)-h(t),l),s.beginPath();for(let b=0;b<v;b++){const y=_I(b,v,c),E=Me.top+l-_[b]/g*l;b===0?s.moveTo(y,E):s.lineTo(y,E)}s.strokeStyle=c_,s.lineWidth=us,s.stroke(),Si(s,Ua(m,f,o),h,d,a)}}const EJ=13,q7=20,SJ="#777";function wJ(e,n){const t=e.width,r=e.height,i=e.getContext("2d");if(!i)return;i.clearRect(0,0,t,r),i.save(),i.fillStyle=SJ,i.font=as(EJ),i.textAlign="center",i.textBaseline="middle";const o=r/2-(n.length-1)*q7/2;n.forEach((a,u)=>{i.fillText(a,t/2,o+u*q7)}),i.restore()}function x7(e,n,t,r=null){const i=e.width,o=e.height,a=e.getContext("2d");if(!a||(a.clearRect(0,0,i,o),n.length===0))return;const u=i-Me.left-Me.right,s=o-Me.top-Me.bottom,c=Me.top+s,l=n.map(_=>l_(_.source,t)),d=(t==null?void 0:t[0])??Math.min(...l.map(_=>_[0])),p=(t==null?void 0:t[1])??Math.max(...l.map(_=>_[1])),m=_=>Me.left+(_-d)/(p-d)*u;if(p<=d){for(const _ of n)SI(a,Me.left+u/2,s,_.color);Si(a,[is(d,r)],()=>Me.left+u/2,c,i);return}const f=Math.round(u),h=n.map(_=>AJ(_.source,f,d,p));let v=0;for(const _ of h)if(_.density!==null)for(const g of _.density)v=Math.max(v,g);for(const _ of n)_.bandFill!==null&&(a.fillStyle=_.bandFill,a.fillRect(m(_.p5),Me.top,m(_.p95)-m(_.p5),s));n.forEach((_,g)=>{$J(a,h[g],f,u,s,v,_.color,_.dashed,m)}),Si(a,Ua(d,p,r),m,c,i)}function l_(e,n){const t=s_(e);return u_(n,t[0],t[1])}function AJ(e,n,t,r){const i=s_(e);return i[1]-i[0]<(r-t)/n?{density:null,pointMassX:(i[0]+i[1])/2}:{density:vI(e,n,t,r),pointMassX:null}}function $J(e,n,t,r,i,o,a,u,s){if(n.pointMassX!==null){SI(e,s(n.pointMassX),i,a);return}if(!(n.density===null||o<=0)){e.beginPath();for(let c=0;c<t;c++){const l=_I(c,t,r),d=Me.top+i-n.density[c]/o*i;c===0?e.moveTo(l,d):e.lineTo(l,d)}e.strokeStyle=a,e.lineWidth=us,e.setLineDash(u?[5,4]:[]),e.stroke(),e.setLineDash([])}}function B7(e,n,t){e.beginPath(),e.moveTo(n,Me.top+t),e.lineTo(n,Me.top),e.strokeStyle=c_,e.lineWidth=us,e.stroke()}function SI(e,n,t,r){e.beginPath(),e.moveTo(n,Me.top+t),e.lineTo(n,Me.top),e.strokeStyle=r,e.lineWidth=us,e.stroke()}function Si(e,n,t,r,i){e.strokeStyle="#bbb",e.lineWidth=.5,e.fillStyle="#4d4d4d",e.font=as(_J),e.textAlign="center";for(const o of n){const a=t(o.value);e.beginPath(),e.moveTo(a,r),e.lineTo(a,r+3),e.stroke();const u=cI(a,e.measureText(o.label).width,i);e.fillText(o.label,u,r+12)}}function TJ(e,n){if(e.length!==n.length)throw new Error(`pwlToShape: xs length ${e.length} !== ys length ${n.length}`);return{points:e.map((t,r)=>({x:t,y:n[r]}))}}const nr=.001,Va=101,IJ=.04;function LJ(e){const n=e.inverseCdf(nr),t=e.inverseCdf(1-nr);if(!(t>n))return{points:[{x:n,y:1}]};const r=[],i=[];for(let a=0;a<Va;a++){const u=n+a/(Va-1)*(t-n);r.push(u),i.push(e.pdf(u))}const o=Math.max(...i);if(o<=0)throw new Error("familyToShape: zero density over the display window");return{points:r.map((a,u)=>({x:a,y:i[u]/o}))}}function wI(e,n){const t=eI(e,n),r=t.map(m=>m.x),i=Math.min(Ei(e,n,nr),...r),o=Math.max(Ei(e,n,1-nr),...r);if(!(o>i))return{points:[{x:i,y:1}]};const a=[];for(let m=0;m<Va;m++)a.push(i+m/(Va-1)*(o-i));for(const m of e)for(const f of CY(m))f>i&&f<o&&a.push(f);const u=new Set(r),s=[...new Set(a)].filter(m=>!u.has(m)).sort((m,f)=>m-f),c=s.map(m=>NY(e,n,m)),l=Math.max(0,...c),d=l>0?1:Math.max(...t.map(m=>m.mass));return{points:[...s.map((m,f)=>({x:m,points:[{x:m,y:l>0?c[f]/l:0}]})),...t.map(m=>{const f=Math.max(m.mass/d,IJ);return{x:m.x,points:[{x:m.x,y:0},{x:m.x,y:f},{x:m.x,y:0}]}})].sort((m,f)=>m.x-f.x).flatMap(m=>m.points)}}function AI(e,n){const t=e.points;return u_(n?du(n):null,t[0].x,t[t.length-1].x)}const xn={top:4,bottom:18,left:4,right:4},RJ=10,CJ="rgba(100, 149, 237, 0.25)",H7="#4477bb",U7=1.5,OJ="#e8e8e8";function G7(e,n,t,r,i=null){const o=e.width,a=e.height,u=e.getContext("2d");if(!u)return;u.clearRect(0,0,o,a);const{points:s}=n;if(s.length===0)return;const c=o-xn.left-xn.right,l=a-xn.top-xn.bottom,d=xn.top+l,[p,m]=t;if(m<=p){const b=xn.left+c/2;Math.max(...s.map(y=>y.y))>0&&(u.beginPath(),u.moveTo(b,d),u.lineTo(b,xn.top),u.strokeStyle=H7,u.lineWidth=U7,u.stroke()),j7(u,[is(p,i)],()=>b,d,o);return}const f=b=>xn.left+(b-p)/(m-p)*c,h=Math.max(...s.map(b=>b.y));if(h<=0)return;const v=b=>xn.top+l-b/h*l;if(r){const[b,y]=r;u.fillStyle=OJ,u.fillRect(f(b),xn.top,f(y)-f(b),l)}u.beginPath(),u.moveTo(f(s[0].x),d);for(const b of s)u.lineTo(f(b.x),v(b.y));u.lineTo(f(s[s.length-1].x),d),u.closePath(),u.fillStyle=CJ,u.fill(),u.beginPath();const _=s[0],g=s[s.length-1];_.y>0?(u.moveTo(f(_.x),d),u.lineTo(f(_.x),v(_.y))):u.moveTo(f(_.x),v(_.y));for(let b=1;b<s.length;b++)u.lineTo(f(s[b].x),v(s[b].y));g.y>0&&u.lineTo(f(g.x),d),u.strokeStyle=H7,u.lineWidth=U7,u.stroke(),j7(u,Ua(p,m,i),f,d,o)}function j7(e,n,t,r,i){e.strokeStyle="#bbb",e.lineWidth=.5,e.fillStyle="#4d4d4d",e.font=as(RJ),e.textAlign="center";for(const o of n){const a=t(o.value);e.beginPath(),e.moveTo(a,r),e.lineTo(a,r+3),e.stroke();const u=cI(a,e.measureText(o.label).width,i);e.fillText(o.label,u,r+12)}}function NJ(){const e=new WeakMap;return{get(n,t){var r;return(r=e.get(n))==null?void 0:r.get(t)},set(n,t,r){let i=e.get(n);i===void 0&&(i=new Map,e.set(n,i)),i.set(t,r)}}}const kJ=.5,MJ=3,V7=new WeakMap,W7=new WeakMap,X7=NJ();function ss(e,n,t){var p;if(V7.set(e,n),(p=e.parentElement)!=null&&p.classList.contains("resizable-canvas-wrapper"))return;const r=e.width,i=e.height;W7.set(e,{w:r,h:i});const o=t===void 0?1:X7.get(t.stateHost,t.stateKey)??1,a=document.createElement("div");a.className="resizable-canvas-wrapper",e.parentElement.insertBefore(a,e),a.appendChild(e);const u=document.createElement("div");u.className="resizable-canvas-handle",a.appendChild(u),o!==1&&(e.width=Math.round(r*o),e.height=Math.round(i*o)),a.style.width=`${e.width}px`,o!==1&&n();let s=!1,c=0,l=r;u.addEventListener("pointerdown",m=>{var f;s=!0,c=m.clientX,l=e.width,(f=u.setPointerCapture)==null||f.call(u,m.pointerId),m.preventDefault()}),u.addEventListener("pointermove",m=>{var b;if(!s)return;const f=W7.get(e)??{w:r,h:i},h=m.clientX-c,v=Math.max(f.w*kJ,Math.min(f.w*MJ,l+h)),_=v/f.w,g=Math.round(f.h*_);e.width=Math.round(v),e.height=g,a.style.width=`${e.width}px`,t!==void 0&&X7.set(t.stateHost,t.stateKey,e.width/f.w),(b=V7.get(e))==null||b()});const d=()=>{s=!1};u.addEventListener("pointerup",d),u.addEventListener("lostpointercapture",d)}function Vn(e){return{scale:e.densityScale,statsDisplay:e.probAsOdds}}const d_="density-scale-switch",PJ="density-scale-switch-left",DJ="density-scale-switch-right",FJ="density-scale-option",qJ="density-scale-option-active",Ki="data-density-scale",xJ="raw",BJ="Density plot scale: raw values, or the density of their logarithm (tick labels are then the logarithm). Applies to every plot that offers it.",HJ=.25,K7=256,UJ=1e-9,GJ=10,jJ=2,VJ=10,WJ="#555",XJ="rgba(255, 255, 255, 0.85)",Y7=3,Zo=2,J7=14;function $I(e){return{label:e,domainLow:0,domainHigh:null,inDomain:n=>n>0,forward:n=>Math.log(n),inverse:n=>Math.exp(n),jacobian:n=>n,sideOutside:()=>"low",outsideText:{low:"≤ 0",high:""}}}const KJ=$I("ln(prob)"),YJ=$I("ln"),JJ={label:"ln(odds)",domainLow:0,domainHigh:1,inDomain:e=>e>0&&e<1,forward:e=>Math.log(e/(1-e)),inverse:e=>1/(1+Math.exp(-e)),jacobian:e=>e*(1-e),sideOutside:e=>e<=0?"low":"high",outsideText:{low:"≤ 0",high:"≥ 1"}};function f_(e,n){return e===void 0||!DN(e)?null:lu(e)?n==="odds"?JJ:KJ:YJ}function p_(e,n){return e!==void 0&&lu(e)&&n==="odds"?P$:null}function zJ(e,n){const t=[];let r=0,i=0;for(const o of e)n.inDomain(o)?t.push(n.forward(o)):n.sideOutside(o)==="low"?r++:i++;return{values:Float64Array.from(t),droppedLow:r,droppedHigh:i,total:e.length}}function QJ(e){const n=e.values.length-1;if(n<0)throw new Error("logViewSampleRange: no in-domain draws");const t=Math.floor(nr*(e.total-1)+UJ),r=a=>Math.min(Math.max(a,0),n),i=e.values[r(t-e.droppedLow)],o=e.values[r(e.total-1-t-e.droppedLow)];return os(i,o)}function z7(e){const n=e*100;return n>=GJ?n.toFixed(0):String(Number(n.toPrecision(jJ)))}function ZJ(e){return{low:e.droppedLow/e.total,high:e.droppedHigh/e.total}}function TI(e,n,t){if(e.low+e.high<=nr)return null;const r=[],i=t?"up to ":"";return e.low>0&&r.push(`${i}${z7(e.low)}% of draws ${n.outsideText.low}`),e.high>0&&r.push(`${i}${z7(e.high)}% of draws ${n.outsideText.high}`),`not shown: ${r.join(", ")}`}function ez(e,n){const t=e[n].x;return n>0&&e[n-1].x===t||n<e.length-1&&e[n+1].x===t}function nz(e,n){const t=e.points,r=t.map((c,l)=>ez(t,l));let i=0,o=0;t.forEach((c,l)=>{r[l]||(i=Math.max(i,c.y),n.inDomain(c.x)&&(o=Math.max(o,c.y*n.jacobian(c.x))))});const a=i>0&&o>0?o/i:1,u=new Set,s=[];return t.forEach((c,l)=>{if(!n.inDomain(c.x)){r[l]&&u.add(c.x);return}s.push({x:n.forward(c.x),y:r[l]?c.y*a:c.y*n.jacobian(c.x)})}),s.length===0||Math.max(...s.map(c=>c.y))<=0?null:{shape:{points:s},droppedPointMassXs:[...u]}}function tz(e){return e.length===0?null:`not shown: point mass at ${e.map(String).join(" and ")}`}function xr(e,n,t){return n.inDomain(e)?n.forward(e):n.sideOutside(e)==="low"?t[0]:t[1]}function m_(e,n){return n<e?"right":"left"}function II(e,n){const t=(n-e)*HJ;return{leftEdge:e+t,rightEdge:n-t}}function LI(e,n,t){const{leftEdge:r,rightEdge:i}=II(n,t);if(e instanceof Float64Array){let o=0,a=0;for(const u of e)u<=r?o++:u>=i&&a++;return{left:o/e.length,right:a/e.length}}return{left:e.cdfAtOrBelow(r),right:1-e.cdfBelow(i)}}function rz(e,n,t){const{leftEdge:r,rightEdge:i}=II(n,t),o=e.points;let a=0,u=0,s=0,c=0;for(let l=0;l<K7;l++){const d=n+(t-n)*l/(K7-1);for(;a<o.length-1&&o[a+1].x<d;)a++;const p=o[a],m=o[Math.min(a+1,o.length-1)];if(d<p.x||d>m.x)continue;const f=m.x===p.x?p.y:p.y+(m.y-p.y)*(d-p.x)/(m.x-p.x);c+=f,d<=r?u+=f:d>=i&&(s+=f)}return c<=0?{left:0,right:0}:{left:u/c,right:s/c}}function h_(e,n,t){const r=e.getContext("2d");if(!r)return;r.save(),r.font=as(VJ),r.textBaseline="middle";const i=r.measureText(n).width+2*Y7,o=t==="left"?e.width-Zo-i:Zo;r.fillStyle=XJ,r.fillRect(o,Zo,i,J7),r.fillStyle=WJ,r.textAlign="left",r.fillText(n,o+Y7,Zo+J7/2),r.restore()}const v_=new WeakMap;function rv(e){const n=v_.get(e);n!==void 0&&(n.active==="log"&&n.log!==null?n.log():n.raw())}function RI(e,n){for(const t of e.querySelectorAll(`[${Ki}]`)){const r=t.getAttribute(Ki)===n;t.classList.toggle(qJ,r),t.setAttribute("aria-pressed",String(r))}}function iz(e,n,t,r){const i=document.createElement("span");i.className=`${d_} `+(n==="left"?PJ:DJ),i.setAttribute("role","group"),i.title=BJ;const o=[["raw",xJ],["log",t]];for(const[a,u]of o){const s=document.createElement("button");s.type="button",s.className=FJ,s.setAttribute(Ki,a),s.textContent=u,i.appendChild(s)}RI(i,r),e.appendChild(i)}function __(e,n,t,r){var u;const i=n.log,o=i===null?null:i.corner();v_.set(e,{raw:n.raw,log:i===null?null:()=>i.draw(o),active:t.scale}),rv(e),ss(e,()=>rv(e),r);const a=e.parentElement;(u=a.querySelector(`.${d_}`))==null||u.remove(),i!==null&&iz(a,o,i.label,t.scale)}function oz(e,n){var t;for(const r of e.querySelectorAll(`.${d_}`)){const i=(t=r.parentElement)==null?void 0:t.querySelector("canvas"),o=i?v_.get(i):void 0;!i||o===void 0||(o.active=n,rv(i),RI(r,n))}}function CI(e,n,t,r,i,o,a){const u=du(i),s=p_(i,o.statsDisplay),c=()=>F7(e,n,t,r,u,s),l=f_(i,o.statsDisplay),d=l===null?null:OI(n,l);__(e,{raw:c,log:d===null?null:{label:l.label,corner:()=>{const[p,m]=l_(n,u),f=LI(n,p,m);return m_(f.left,f.right)},draw:p=>{F7(e,d.source,xr(t,l,d.range),xr(r,l,d.range),d.range);const m=TI(d.dropped,l,!1);m!==null&&h_(e,m,p)}}},o,a)}function OI(e,n){if(e instanceof Float64Array){const o=zJ(e,n);return o.values.length===0?null:{source:o.values,range:QJ(o),dropped:ZJ(o)}}const t=e.inView(n);if(t===null)return null;const[r,i]=t.centralRange(nr);return{source:t.source,range:i>r?os(r,i):[r,i],dropped:{low:t.droppedLow,high:t.droppedHigh}}}function NI(e,n,t,r,i){const o=du(t),a=p_(t,r.statsDisplay),u=()=>x7(e,n,o,a),s=f_(t,r.statsDisplay);let c=null;const l=s===null||n.length===0?null:n.map(d=>OI(d.source,s));if(s!==null&&l!==null&&l.every(d=>d!==null)){const d=l,p=[Math.min(...d.map(v=>v.range[0])),Math.max(...d.map(v=>v.range[1]))],m=n.map((v,_)=>({...v,source:d[_].source,p5:xr(v.p5,s,p),p95:xr(v.p95,s,p)})),f={low:Math.max(0,...d.map(v=>v.dropped.low)),high:Math.max(0,...d.map(v=>v.dropped.high))},h=TI(f,s,n.length>1);c={label:s.label,corner:()=>{const v=n.map(E=>l_(E.source,o)),_=(o==null?void 0:o[0])??Math.min(...v.map(E=>E[0])),g=(o==null?void 0:o[1])??Math.max(...v.map(E=>E[1]));let b=0,y=0;for(const E of n){const $=LI(E.source,_,g);b+=$.left/n.length,y+=$.right/n.length}return m_(b,y)},draw:v=>{x7(e,m,p),h!==null&&h_(e,h,v)}}}__(e,{raw:u,log:c},r,i)}function kI(e,n,t,r,i,o,a){const u=p_(r,i.statsDisplay),s=()=>G7(e,n,t,o,u),c=f_(r,i.statsDisplay),l=c===null?null:nz(n,c);let d=null;if(c!==null&&l!==null){const p=l.shape.points,m=p[0],f=p[p.length-1],h=f.x>m.x?os(m.x,f.x):[m.x,f.x],v=o?[xr(o[0],c,h),xr(o[1],c,h)]:null,_=tz(l.droppedPointMassXs);d={label:c.label,corner:()=>{const g=rz(n,t[0],t[1]);return m_(g.left,g.right)},draw:g=>{G7(e,l.shape,h,v),_!==null&&h_(e,_,g)}}}__(e,{raw:s,log:d},i,a)}const gr={top:10,bottom:35,left:50,right:15},az=800,uz=500,Q7=12,sz=5,cz=3,lz=2,Z7=3,eS=5,dz=10,fz=1,pz=15,nS=["#333","#c44","#44c","#4c4","#c84","#84c","#4cc","#c4c","#888","#ca4"],MI="#333",PI=2,mz=1.5,hz={color:MI,lineWidth:PI};function vz(e,n,t=dz,r=[]){if(n)return n;let i=1/0,o=-1/0;const a=l=>{l<i&&(i=l),l>o&&(o=l)};for(const l of e)for(const d of l.points)a(d.y);for(const l of r)a(l.y);if(!Number.isFinite(i)||!Number.isFinite(o))return null;const c=(o-i||fz)*t/100;return[i-c,o+c]}function tS(e,n,t){e.width||(e.width=az),e.height||(e.height=uz);const r=e.width,i=e.height,o=e.getContext("2d");if(!o)return;o.clearRect(0,0,r,i);const a=t.scatterOverlay;if(n.length===0&&!a)return;const u=i-gr.top-gr.bottom,s=vz(n,t.yRange,t.yRangePaddingPercent,a==null?void 0:a.points);if(!s)return;const[c,l]=s,d=gz(c,l,sz),p=d.length>1?d[1]-d[0]:l-c,m=d.map(A=>bz(A,p));o.font=Yt(Q7);const f=m.reduce((A,w)=>Math.max(A,o.measureText(w).width),0),h=Math.max(gr.left,Math.ceil(f)+Z7+eS),v=r-h-gr.right;if(v<=0)return;const _=t.xLabels.length,g=_>1?v/(_-1):0,b=A=>h+A*g,y=A=>gr.top+u-(A-c)/(l-c)*u;o.save(),o.strokeStyle="#ddd",o.lineWidth=.5,o.setLineDash([3,3]);for(const A of d){const w=y(A);o.beginPath(),o.moveTo(h,w),o.lineTo(h+v,w),o.stroke()}if(o.restore(),a){o.fillStyle=a.color;for(const A of a.points)o.beginPath(),o.arc(b(A.x),y(A.y),lz,0,Math.PI*2),o.fill()}const E=n.length===1;for(let A=0;A<n.length;A++){const w=n[A],S=w.color??(E?MI:nS[A%nS.length]),I=w.lineWidth??(E?PI:mz);o.strokeStyle=S,o.lineWidth=I;for(const R of _z(w.points))R.length<2||(o.beginPath(),R.forEach((P,k)=>{const B=b(P.x),D=y(P.y);k===0?o.moveTo(B,D):o.lineTo(B,D)}),o.stroke());o.fillStyle=S;for(const R of w.points)o.beginPath(),o.arc(b(R.x),y(R.y),cz,0,Math.PI*2),o.fill()}const $=gr.top+u;o.strokeStyle="#bbb",o.lineWidth=.5,o.fillStyle="#4d4d4d",o.font=Yt(Q7),o.textAlign="center",o.textBaseline="top";const T=t.xLabels.reduce((A,w)=>Math.max(A,o.measureText(w).width),0),C=_>1?g:v,L=T>C-4;for(let A=0;A<_;A++){const w=b(A);o.beginPath(),o.moveTo(w,$),o.lineTo(w,$+3),o.stroke(),o.save(),L?(o.translate(w,$+5),o.rotate(-Math.PI/4),o.textAlign="right",o.fillText(t.xLabels[A],0,0)):o.fillText(t.xLabels[A],w,$+5),o.restore()}o.fillStyle="#777",o.textAlign="center",o.textBaseline="bottom",o.fillText(t.xAxisLabel,h+v/2,i-1),o.fillStyle="#4d4d4d",o.textAlign="right",o.textBaseline="middle";for(let A=0;A<d.length;A++){const w=d[A],S=y(w);o.strokeStyle="#bbb",o.lineWidth=.5,o.beginPath(),o.moveTo(h-Z7,S),o.lineTo(h,S),o.stroke(),o.fillText(m[A],h-eS,S)}}function _z(e){const n=[];for(const t of e){const r=n[n.length-1],i=r==null?void 0:r[r.length-1];r!==void 0&&i!==void 0&&t.x===i.x+1?r.push(t):n.push([t])}return n}function gz(e,n,t){const r=n-e;if(r<=0)return[e];const i=r/(t-1),o=Math.pow(10,Math.floor(Math.log10(i))),a=i/o;let u;a<=1.5?u=1*o:a<=3.5?u=2*o:a<=7.5?u=5*o:u=10*o;const s=Math.ceil(e/u)*u,c=[];for(let l=s;l<=n+u*.001;l+=u)c.push(l);return c}function bz(e,n){if(Number.isInteger(e)||!Number.isFinite(n)||n<=0)return e.toString();const t=Math.min(pz,Math.max(0,-Math.floor(Math.log10(n)))),r=e.toFixed(t).replace(/0+$/,"").replace(/\.$/,"");return r==="-0"?"0":r}const cs={top:10,bottom:35,left:60,right:60},yz=80,Ez=120,Sz=1e3,wz=60,Az=90,$z=800,Tz=35,kt=12,Iz=12,DI="#ddd",Lz="#eee",Rz=220,rS=10,Cz=80,Oz=25,iS=95,gi=12,FI=8,iv=4,yh=64,qI=8,Nz=6,xI=5,BI=4,kz=4,HI=-Math.PI/4,Mz=6,UI=1,Pz=.6;function Dz(e){return Math.max(cs.left,qI+kt+Nz+Math.ceil(e)+xI)}function Fz(e){return Math.max(cs.right,FI+gi+iv+Math.ceil(e))}function qz(e){const n=Math.max(kt,e*Math.abs(Math.sin(HI)));return Math.max(cs.bottom,BI+Math.ceil(n)+Mz+kt+UI)}let Eh;function xz(){return Eh===void 0&&(Eh=typeof document>"u"?null:document.createElement("canvas").getContext("2d")),Eh}function Sh(e,n){return n?(n.font=Yt(kt),e.reduce((t,r)=>Math.max(t,n.measureText(r).width),0)):e.reduce((t,r)=>Math.max(t,r.length*Pz*kt),0)}function GI(e){if(e.valueRange){const[r,i]=e.valueRange;return{vMin:r,vMax:i,hasValues:!0}}let n=1/0,t=-1/0;for(const r of e.cells)for(const i of r)i!==null&&(i<n&&(n=i),i>t&&(t=i));return{vMin:n,vMax:t,hasValues:isFinite(n)&&isFinite(t)}}function Bz(e,n){const{vMin:t,vMax:r,hasValues:i}=GI(e);return{yTickPx:Sh(e.yLabels,n),xTickPx:Sh(e.xLabels,n),legendPx:i?Sh([Yi(t),Yi(r)],n):0}}function jI(e,n){const t=Bz(e,n);return{top:cs.top,bottom:qz(t.xTickPx),left:Dz(t.yTickPx),right:Fz(t.legendPx)}}function oS(e,n,t){return Math.max(n,Math.min(t,Math.floor(e)))}function VI(e){const n=jI(e,xz()),t=oS(Sz/e.xLabels.length,yz,Ez),r=oS($z/e.yLabels.length,wz,Az);return{width:n.left+e.xLabels.length*t+n.right,height:n.top+e.yLabels.length*r+n.bottom}}function aS(e,n){var _;const t=n.xLabels.length,r=n.yLabels.length;if(t===0||r===0)return;const i=e.getContext("2d");if(!i)return;if(!e.width||!e.height){const g=VI(n);e.width=g.width,e.height=g.height}const o=e.width,a=e.height;i.clearRect(0,0,o,a);const u=jI(n,i),s=(o-u.left-u.right)/t,c=(a-u.top-u.bottom)/r;if(s<=0||c<=0)return;const{vMin:l,vMax:d,hasValues:p}=GI(n),m=p&&d-l||1,f=s>=Tz;i.font=Yt(Iz),i.textAlign="center",i.textBaseline="middle";for(let g=0;g<r;g++)for(let b=0;b<t;b++){const y=u.left+b*s,E=u.top+g*c,$=((_=n.cells[g])==null?void 0:_[b])??null;if($===null)i.fillStyle=Lz,i.fillRect(y,E,s,c);else{const T=p?($-l)/m:0;i.fillStyle=WI(T),i.fillRect(y,E,s,c),f&&(i.fillStyle=T>.55?"#fff":"#333",i.fillText(Yi($),y+s/2,E+c/2))}i.strokeStyle=DI,i.lineWidth=1,i.strokeRect(y,E,s,c)}i.fillStyle="#4d4d4d",i.font=Yt(kt),i.textBaseline="top";const v=n.xLabels.reduce((g,b)=>Math.max(g,i.measureText(b).width),0)>s-kz;for(let g=0;g<t;g++){const b=u.left+g*s+s/2,y=u.top+r*c+BI;i.save(),i.textAlign="center",v?(i.translate(b,y),i.rotate(HI),i.textAlign="right",i.fillText(n.xLabels[g],0,0)):i.fillText(n.xLabels[g],b,y),i.restore()}i.fillStyle="#777",i.textAlign="center",i.textBaseline="bottom",i.fillText(n.xAxisLabel,u.left+t*s/2,a-UI),i.fillStyle="#4d4d4d",i.font=Yt(kt),i.textAlign="right",i.textBaseline="middle";for(let g=0;g<r;g++){const b=u.top+g*c+c/2;i.fillText(n.yLabels[g],u.left-xI,b)}i.save(),i.fillStyle="#777",i.textAlign="center",i.textBaseline="top",i.translate(qI,u.top+r*c/2),i.rotate(-Math.PI/2),i.fillText(n.yAxisLabel,0,0),i.restore(),p&&Hz(i,o,u,r*c,l,d)}function WI(e){const n=rS+(Cz-rS)*e,t=iS+(Oz-iS)*e;return`hsl(${Rz}, ${n.toFixed(0)}%, ${t.toFixed(0)}%)`}function Yi(e){return Number.isInteger(e)?e.toString():e.toFixed(3).replace(/0+$/,"").replace(/\.$/,"")}function Hz(e,n,t,r,i,o){const a=n-t.right+FI,u=t.top,s=r,c=s/yh;for(let l=0;l<yh;l++){const d=1-l/(yh-1);e.fillStyle=WI(d),e.fillRect(a,u+l*c,gi,c+1)}e.strokeStyle=DI,e.lineWidth=1,e.strokeRect(a,u,gi,s),e.fillStyle="#4d4d4d",e.font=Yt(kt),e.textAlign="left",e.textBaseline="middle",e.fillText(Yi(o),a+gi+iv,u),e.fillText(Yi(i),a+gi+iv,u+s)}const XI="data-outside-click-neutral";function g_(e){return e instanceof Element&&e.closest(`[${XI}]`)!==null}const b_=18,y_=80,Uz=16,Wa=new Set;let uS=!1;function Gz(){uS||(uS=!0,document.addEventListener("click",e=>{if(!g_(e.target))for(const n of[...Wa])document.contains(n.wrapper)?n.wrapper.contains(e.target)||n.close():Wa.delete(n)}))}function jz(e,n=b_,t=y_){return E_(r=>{r.textContent=e},!1,!0,n,t)}function ut(e,n=b_,t=y_){return E_(r=>{r.innerHTML=e()},!0,!1,n,t)}const KI="help-widget-nested-slot",Vz="nestedHelp";function Wz(e){return`<span class="${KI}" data-nested-help="${K(e)}"></span>`}function Xz(e,n){for(const t of e.querySelectorAll(`.${KI}`)){const r=t.dataset[Vz]??"",i=n[r];i!==void 0&&t.appendChild(ut(i))}}function Kz(e,n){return E_(t=>{t.innerHTML=e(),Xz(t,n)},!0,!1,b_,y_)}function E_(e,n,t,r,i){const o=document.createElement("span");o.className="help-widget",o.style.display="inline-block";const a=document.createElement("button");a.className="help-widget-btn",a.type="button",a.textContent="?",a.setAttribute("aria-label","Help"),a.style.width=`${r}px`,a.style.height=`${r}px`,a.style.fontSize=`${Math.round(r*.6)}px`,a.style.lineHeight=`${r}px`;const u=document.createElement("div");u.className="help-widget-popover",u.hidden=!0;const s=document.createElement("button");s.className="help-widget-close",s.type="button",s.textContent="×",s.setAttribute("aria-label","Close");const c=document.createElement("div");c.className=n?"help-widget-body html-content":"help-widget-body",u.appendChild(s),u.appendChild(c),o.appendChild(a),o.appendChild(u),t&&e(c);const l={wrapper:o,close:()=>p()};function d(){e(c),u.hidden=!1,Wa.add(l);const m=window.innerWidth,f=window.innerHeight,h=Math.round(m*i/100),v=f-2*Uz;u.style.width=`${h}px`,u.style.maxHeight=`${v}px`;const _=Math.min(u.offsetHeight,v);u.style.left=`${Math.round((m-h)/2)}px`,u.style.top=`${Math.round((f-_)/2)}px`}function p(){u.hidden=!0,Wa.delete(l)}return a.addEventListener("click",m=>{m.stopPropagation(),u.hidden?d():p()}),s.addEventListener("click",m=>{m.stopPropagation(),p()}),u.addEventListener("keydown",m=>{m.key==="Escape"&&(p(),a.focus({preventScroll:!0}))}),o.addEventListener("keydown",m=>{m.key==="Escape"&&!u.hidden&&(p(),a.focus({preventScroll:!0}))}),Gz(),o}const ov="stats-display-select",YI="Stats display",Yz=["probability","odds"],Jz="Mean, median, and credible interval probabilities displayed as odds",zz="Computed probabilities displayed as odds";function Qz(e,n,t){return Wn(n)||Qn(e,t)==="sample"}function Zz(e){return e?Object.values(e).some(n=>lu(n.valueRange)):!1}function eQ(e,n,t,r,i){if(!Zz(r)){e.innerHTML="";return}const o=n.ui.probAsOdds,a=Yz.map(c=>`<option value="${c}"${c===o?" selected":""}>${c}</option>`).join(""),u=Qz(n,t,i)?Jz:zz,s=o==="odds"?`<p class="stats-display-odds-note"><strong>${u}</strong></p>`:"";e.innerHTML=`<div class="stats-display-row"><label for="${ov}" class="${B2}">${YI}</label><select id="${ov}">${a}</select></div>`+s}const JI=1,nQ="shortcutKeys",tQ=new Set(["","date","datetime-local","email","month","number","password","search","tel","text","time","url","week"]),cr=Object.freeze([{id:"toggle_mnames",description:"Toggle longer meaning-carrying names",short_label:"names",default_shortcut:"n",enabled:!0,in_touch_panel:!0},{id:"goto_calculator",description:"Move to Calculator section",short_label:"calc",default_shortcut:"c",enabled:!0,in_touch_panel:!0},{id:"goto_top",description:"Move to top of page",short_label:"top",default_shortcut:"t",enabled:!0,in_touch_panel:!0},{id:"goto_next_section",description:"Jump to next section",short_label:"section",default_shortcut:"s",enabled:!0,in_touch_panel:!0},{id:"toggle_srcquotes_inlined",description:"Toggle source quotes inline in the text vs. behind a glyph",short_label:"quotes",default_shortcut:"q",enabled:!0,in_touch_panel:!0},{id:"toggle_framing_notes",description:"Show/hide all framing notes",short_label:"framing",default_shortcut:"f",enabled:!0,in_touch_panel:!0},{id:"toggle_long_text_abbrev",description:"Toggle abbreviation of long text",short_label:"abbrev",default_shortcut:"a",enabled:!0,in_touch_panel:!0},{id:"switch_interaction_mode",description:"Cycle interaction mode (Estimate / ReadTrials / Compare), restoring its remembered selection",short_label:"mode",default_shortcut:"m",enabled:!0,in_touch_panel:!0},{id:"toggle_keymap",description:"Show/hide this keymap",short_label:"keymap",default_shortcut:"?",enabled:!0,in_touch_panel:!1}]);function zI(){return cr}function av(e){return cr.find(n=>n.id===e)}function S_(e){const n=e.trim().toLowerCase();return n===""?{ok:!0,key:n}:[...n].length!==JI?{ok:!1,key:n,error:"Use a single key, or clear the field to disable this shortcut."}:{ok:!0,key:n}}function QI(e){if(!e||typeof e!="object"||Array.isArray(e))return{};const n={};for(const[t,r]of Object.entries(e)){if(av(t)===void 0)continue;if(typeof r!="string"){console.error(`Ignoring non-string shortcut key for ${t}.`);continue}const i=S_(r);if(!i.ok){console.error(`Ignoring invalid persisted shortcut key for ${t}: ${r}`);continue}n[t]=i.key}return n}function ZI(){const e={};for(const n of cr)e[n.id]=n.default_shortcut;return e}function lr(){const e=QI(Ye().shortcutKeys);return{...ZI(),...e}}function eL(e,n,t=lr()){if(n==="")return null;for(const r of zI())if(r.id!==e&&t[r.id]===n)return r.id;return null}function rQ(e,n){var u;if(!av(e))throw new Error(`Unknown shortcut id: ${e}`);const r=S_(n);if(!r.ok)return{ok:!1,key:r.key,error:r.error};const i=lr(),o=eL(e,r.key,{...i,[e]:r.key});if(o)return{ok:!1,key:r.key,conflictId:o,error:`Already assigned to "${((u=av(o))==null?void 0:u.description)??o}".`};const a=QI(Ye().shortcutKeys);a[e]=r.key,Mr(nQ,oQ(a));for(const s of[...uv])s();return{ok:!0,key:r.key}}const uv=new Set;function iQ(e){return uv.add(e),()=>{uv.delete(e)}}function oQ(e){const n=ZI(),t={};for(const[r,i]of Object.entries(e))i!==n[r]&&(t[r]=i);return Object.keys(t).length===0?void 0:t}function aQ(e){if(e.altKey||e.ctrlKey||e.metaKey)return null;const n=e.key.toLowerCase();return[...n].length!==JI?null:n}function uQ(e){if(!(e instanceof HTMLElement))return!1;if(e.isContentEditable)return!0;let n=e;for(;n;){if(n.isContentEditable||n.contentEditable==="true")return!0;const t=n.getAttribute("contenteditable");if(t!==null&&t.toLowerCase()!=="false")return!0;n=n.parentElement}return e instanceof HTMLTextAreaElement?!0:e instanceof HTMLInputElement?tQ.has(e.type.toLowerCase()):!1}function nL(e,n){const t=e[n];return t?(t(),!0):!1}function sQ(e){const n=t=>{if(uQ(t.target))return;const r=aQ(t);if(r===null)return;const i=lr();for(const o of zI())if(i[o.id]===r){nL(e,o.id)&&t.preventDefault();return}};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)}const cQ="touch-shortcut-panel",lQ="touch-shortcut-panel-opener",sS="touch-shortcut-panel-body",dQ="touch-shortcut-labels-toggle",cS="compact",tL="touch-shortcut-btn",fQ="touch-shortcut-btn-keyless",pQ="touch-shortcut-key",mQ="touch-shortcut-word",rL="shortcutId",hQ="touchShortcutPanelCompact",iL="☝︎",vQ="Shortcut buttons",_Q="Shortcut buttons",gQ="?",bQ="Show what each button does",yQ="help-widget-btn";function EQ(){return cr.filter(e=>e.in_touch_panel)}function SQ(){return Ye().touchShortcutPanelCompact===!0}function wQ(e){Mr(hQ,e?!0:void 0)}function AQ(e,n){const t=document.createElement("button");if(t.type="button",t.className=tL,t.dataset[rL]=e.id,t.setAttribute("aria-label",e.description),t.title=e.description,n==="")t.classList.add(fQ);else{const i=document.createElement("kbd");i.className=pQ,i.textContent=n,t.appendChild(i)}const r=document.createElement("span");return r.className=mQ,r.textContent=e.short_label,t.appendChild(r),t}let br=null;function $Q(e){br==null||br();const n=document.createElement("div");n.id=cQ,n.setAttribute(XI,"");const t=document.createElement("div");t.id=sS,t.setAttribute("role","group"),t.setAttribute("aria-label",_Q),t.hidden=!0;const r=document.createElement("div");r.className="touch-shortcut-btns";const i=document.createElement("button");i.type="button",i.id=dQ,i.className=yQ,i.textContent=gQ,i.setAttribute("aria-label",bQ);const o=document.createElement("button");o.type="button",o.id=lQ,o.textContent=iL,o.setAttribute("aria-label",vQ),o.setAttribute("aria-controls",sS);const a=()=>{const d=lr();r.replaceChildren(...EQ().map(p=>AQ(p,d[p.id]??"")))},u=d=>{t.hidden=!d,o.setAttribute("aria-expanded",String(d))},s=d=>{n.classList.toggle(cS,d),i.setAttribute("aria-pressed",String(!d))};r.addEventListener("click",d=>{const p=d.target instanceof Element?d.target.closest(`.${tL}`):null,m=p==null?void 0:p.dataset[rL];m!==void 0&&nL(e,m)}),o.addEventListener("click",()=>u(t.hidden)),i.addEventListener("click",()=>{const d=!n.classList.contains(cS);wQ(d),s(d)}),a(),u(!1),s(SQ()),t.appendChild(r),t.appendChild(i),n.appendChild(t),n.appendChild(o),document.body.appendChild(n);const c=iQ(a),l=()=>{c(),n.remove(),br===l&&(br=null)};return br=l,l}const TQ=[{aid:"alpoker"},{aid:"mcovidB6",family:"mcovidB"},{aid:"mcovidB13",family:"mcovidB"},{aid:"mcovidB14",family:"mcovidB"},{aid:"simfix",family:"sim"},{aid:"simBetter",family:"sim"},{aid:"bbdoom3",family:"bbdoom"}],IQ={bbdoom:{sequence:[{aid:"bbdoom1",version:"0.1.0"},{aid:"bbdoom2",version:"0.2.0"},{aid:"bbdoom3",version:"1.0.0"}]},"cov-ATC":{sequence:[{aid:"covid0",version:"1.0.0"},{aid:"covatc1",version:"2.0.0"}]},mcovidB:{sequence:[{aid:"mcovidB1",version:"0.0.0"},{aid:"mcovidB2",version:"0.0.1"},{aid:"mcovidB3",version:"0.0.2"},{aid:"mcovidB4",version:"0.0.3"},{aid:"mcovidB5",version:"0.0.4"},{aid:"mcovidB6",version:"1.0.0"},{aid:"mcovidB7",version:"2.0.0"},{aid:"mcovidB8",version:"2.1.0"},{aid:"mcovidB9",version:"2.2.0"},{aid:"mcovidB10",version:"2.3.0"},{aid:"mcovidB11",version:"3.0.0"},{aid:"mcovidB12",version:"3.1.0"},{aid:"mcovidB13",version:"4.0.0"},{aid:"mcovidB14",version:"5.0.0"}]},mcovidA:{sequence:[{aid:"mcovidA",version:"0.0.0"},{aid:"mcovidA2",version:"0.0.1"}]},eggs:{sequence:[{aid:"eggsFH1",version:"0.1.0"},{aid:"eggsFH2",version:"0.2.0"}]},lhc:{sequence:[{aid:"lhcFXH1",version:"1.0.0"},{aid:"lhcFXH_SolMax",version:"2.0.0"},{aid:"lhcFXH_SolMax_Ultra",version:"3.0.0"}]},aminds:{sequence:[{aid:"cmindsBareParam1",version:"1.0.0"},{aid:"aminds2",version:"2.0.0"},{aid:"aminds3",version:"3.0.0"}]},sim:{sequence:[{aid:"simfix",version:"0.1.0"},{aid:"simBetter",version:"0.2.0"}]},testE:{sequence:[{aid:"testprob_preE",version:"pre"},{aid:"testprob_postE",version:"post"},{aid:"testprob_postE_extra",version:"postextra"}]}},LQ={navList:TQ,families:IQ},RQ="../../data/",CQ="/index.ts",oL=Object.assign({"../../data/alpoker/index.ts":()=>Vt(()=>import("./index-CDUT7AA5.js"),[]),"../../data/bbdoom3/index.ts":()=>Vt(()=>import("./index-YiDKo7zv.js"),[]),"../../data/mcovidB13/index.ts":()=>Vt(()=>import("./index-msqL36_R.js"),[]),"../../data/mcovidB14/index.ts":()=>Vt(()=>import("./index-BocwU5h_.js"),[]),"../../data/mcovidB6/index.ts":()=>Vt(()=>import("./index-BrHHSVT0.js"),__vite__mapDeps([0,1])),"../../data/simBetter/index.ts":()=>Vt(()=>import("./index-Z8e8pgf0.js"),[]),"../../data/simfix/index.ts":()=>Vt(()=>import("./index-InWLkXXw.js"),__vite__mapDeps([2,1]))});function w_(e){return`${RQ}${e}${CQ}`}function OQ(e){return oL[w_(e)]}function A_(e){return w_(e)in oL}const ls=LQ,aL=(()=>{const e=new Map;for(const[n,{sequence:t}]of Object.entries(ls.families))t.forEach((r,i)=>e.set(r.aid,{family:n,index:i}));return e})();function NQ(){return ls.navList}function kQ(){const e={};for(const[n,{sequence:t}]of Object.entries(ls.families))e[n]=t;return e}function uL(e){var n;return(n=aL.get(e))==null?void 0:n.family}function lS(e,n,t,r){for(let i=n+t;i>=0&&i<e.length;i+=t){const o=e[i].aid;if(r(o))return o}}function MQ(e,n=A_){const t=aL.get(e);if(t===void 0)return;const r=ls.families[t.family].sequence,i={version:r[t.index].version},o=lS(r,t.index,-1,n);o!==void 0&&(i.prev=o);const a=lS(r,t.index,1,n);return a!==void 0&&(i.next=a),i}const PQ={showGlobalProseFoldControls:e=>e.bodyHasProseFolds,showExampleClassification:e=>e.bodyHasExampleLists,plaincodeEvalTimeoutMs:e=>e.hasCparams};function DQ(e,n){const t=PQ[e];return t===void 0||t(n)}const wi="data-pref-row";function FQ(e,n){for(const t of e.querySelectorAll(`[${wi}]`)){const r=t.getAttribute(wi);r!==null&&(t.hidden=!DQ(r,n))}}const It={point:"point",bounds:"bounds",sample:"distr"},qQ="Response",xQ="timeline-nav",$_="interaction-mode-selector",sv="data-interaction-mode",T_="yours-fixfree-toggle",BQ="jprob-selector",sL="sticky-bar",cL="--sticky-bar-h",ds="options-controls",lL="options-expand-btn",dL="options-panel",Ji="options-panel-open",fL="visible",pL="⚙︎",dS="Settings",mL="jprob-selector-select",hL="/",vL="error-console-btn",_L="view-url-btn";function HQ(e,n,t,r,i,o){YQ(e),UQ(i),jQ(e.ui.estimateQueryMode,o),bL(e,t),KQ(n),XQ(r)}function UQ(e){const n=document.getElementById($_);if(n){if(e.available.length<=1){n.hidden=!0,n.innerHTML="";return}n.hidden=!1,n.innerHTML=Ct.filter(t=>e.available.includes(t)).map(t=>{const r=t===e.active,i=r?t:kq[t];return`<button type="button" class="atog-btn interaction-mode-btn${r?" active":""}" ${sv}="${t}" aria-pressed="${r}" title="${K(`${t} — ${Mq[t]}`)}">${i}</button>`}).join("")}}function GQ(){const e=document.getElementById($_);return e!==null&&!e.hidden}function jQ(e,n){const t=document.getElementById(T_);if(t){if(!n){t.hidden=!0,t.innerHTML="";return}t.hidden=!1,t.innerHTML=X$(e)}}function VQ(){const e=document.getElementById(T_);return e!==null&&!e.hidden}function WQ(e,n,t,r,i=A_){var c;const o=new Set(e.map(l=>l.aid).filter(i)),a=[],u=new Set;let s=t;for(const l of e){const d=l.family;if(d===void 0){o.has(l.aid)&&a.push({label:l.aid,value:l.aid});continue}if(u.has(d))continue;u.add(d);const m=(c=[...n[d]??[]].reverse().find(f=>o.has(f.aid)))==null?void 0:c.aid;m!==void 0&&(a.push({label:d,value:m}),d===r&&(s=m))}return{options:a,selectedValue:s}}function XQ(e,n=NQ(),t=kQ(),r=A_){const i=document.getElementById(BQ);if(!i)return;const{options:o,selectedValue:a}=WQ(n,t,e.currentAid,e.currentFamily,r),u=o.some(l=>l.value===a);i.hidden=!1;const s=u?"":'<option value="" disabled selected>switch</option>',c=o.map(l=>`<option value="${l.value}"${l.value===a?" selected":""}>${l.label}</option>`).join("");i.innerHTML=`<select id="${mL}" class="jprob-selector-select" title="Switch to another problem">${s}${c}<option value="${hL}">≣ Index</option></select>`}function KQ(e){const n=document.getElementById(xQ);if(!n)return;const{prev:t,next:r,version:i}=e;if(t===void 0&&r===void 0&&i===void 0){n.hidden=!0,n.innerHTML="";return}n.hidden=!1;const o=[];t!==void 0&&o.push(`<button class="timeline-nav-btn" data-timeline-target="${t}" title="Previous version">◀</button>`),o.push(`<span class="timeline-version">${i??""}</span>`),r!==void 0&&o.push(`<button class="timeline-nav-btn" data-timeline-target="${r}" title="Next version">▶</button>`),n.innerHTML=o.join("")}function YQ(e){const n=document.getElementById(ds);if(!n)return;const t=n.classList.contains(Ji);let r=`<button class="options-expand-btn${t?" active":""}" id="${lL}" type="button" aria-label="${dS}" title="${dS}" aria-expanded="${t}">${pL}</button>`;r+=`<div class="${dL}${t?` ${fL}`:""}">`,r+=eZ(e),r+=`<div class="options-buttons-row"><button id="${_L}" class="g-btn" title="Copy a link to this view (and put it in the address bar)">url</button> <button id="keymap-btn" class="g-btn">keymap</button> <button id="${vL}" class="g-btn">error console</button> <button id="save-all-data-btn" class="g-btn">save all data</button> <button id="load-all-data-btn" class="g-btn">load all data</button></div>`,r+="</div>",n.innerHTML=r,t&&n.classList.add(Ji)}function JQ(e){const n=document.getElementById(ds);n&&FQ(n,e)}function zQ(){const e=document.getElementById(ds);return(e==null?void 0:e.classList.contains(Ji))??!1}function gL(e){const n=document.getElementById(ds);if(!n||n.classList.contains(Ji)===e)return;n.classList.toggle(Ji,e);const t=n.querySelector(".options-expand-btn"),r=n.querySelector(`.${dL}`);t&&(t.classList.toggle("active",e),t.setAttribute("aria-expanded",String(e))),r&&r.classList.toggle(fL,e)}function QQ(){gL(!zQ())}function fS(){gL(!1)}function bL(e,n){const t=document.getElementById("response-type-toggle");t&&yL(t,e,n,null)}function yL(e,n,t,r){const i=[],o=DA(t,n.ui.inputMode);let a=0;for(const[s,c]of Object.entries(It)){const l=s===o?" active":"",d=t[s];d&&a++;const p=d?"":" hidden";i.push(`<button class="atog-btn${l}${p}" data-mode="${s}">${c}</button>`)}const u=r===null?"":`<span class="${B2}">${r}</span>`;e.innerHTML=u+i.join(""),e.hidden=a<2}function Wt(e){return`pref-${e}`}const ZQ=new Set(["inputMode","probAsOdds","densityScale"]);function eZ(e){const n=[];for(const t of $u)if(!ZQ.has(t.id)){if(t.type==="boolean"){const r=t.id,i=e.ui[r]?" checked":"";n.push(`<div class="options-pref-row" ${wi}="${t.id}"><label for="${Wt(t.id)}" class="option-label">${t.description}</label><input id="${Wt(t.id)}" class="option-checkbox pref-checkbox" type="checkbox" data-pref="${t.id}"${i}></div>`)}else if(t.type==="integer"){const i=Ye()[t.id]??t.default,o=t.min===void 0?"":` min="${t.min}"`,a=t.step===void 0?"":` step="${t.step}"`;n.push(`<div class="options-pref-row" ${wi}="${t.id}"><label for="${Wt(t.id)}" class="option-label">${t.description}</label><input id="${Wt(t.id)}" class="pref-number-input" type="number" data-pref-int="${t.id}" value="${i}"${o}${a}></div>`)}else if(t.type==="enum"){const r=Ye()[t.id]??t.default,i=t.values.map(o=>`<option value="${o}"${o===r?" selected":""}>${o}</option>`).join("");n.push(`<div class="options-pref-row" ${wi}="${t.id}"><label for="${Wt(t.id)}" class="option-label">${t.description}</label><select id="${Wt(t.id)}" class="pref-select" data-pref-enum="${t.id}">${i}</select></div>`)}}return n.join("")}const zi=`<b>${pL} settings</b>`,pS="examples, framing notes and the sections of text under a heading",mS="joint_dependence";function I_(){const e=F2[mS];if(e===void 0)throw new Error(`shared_text.json is missing section '${mS}' (regenerate via \`just gen\`)`);return e}const EL="joint_dependence",nZ={[EL]:I_};function tZ(){return"<p>Version numbers are semantic versioning inspired, incremented according to:</p><ul><li><b>1st/major</b>: Improved and clean enough over previous major version to run a full set of AI trials.</li><li><b>2nd/minor</b>: Improvements/fixes affecting semantics</li><li><b>3rd/patch</b>: Everything else</li></ul>"}function cv(e){return e?`<b>${x(e)}</b>`:"<i>(unbound)</i>"}const rZ={toggle_mnames:"toggle between short and long names for some defined entities",goto_top:"jump to top of the page",goto_calculator:"jump to the Calculator section",switch_interaction_mode:"switch between <b>Yours</b> / <b>Adhoc</b> / <b>AI results</b> modes, restoring the last viewed preset in each",toggle_srcquotes_inlined:`toggle source quotes inlined in the text (mirroring what AI agents see when source quotes are enabled) vs. accessible by clicking the <button class="srcquote-glyph" type="button" tabindex="-1">❝</button> buttons. This is a view setting only — it never changes what a preset's estimator actually read`,toggle_framing_notes:"show or hide all framing notes at once, without disturbing which ones the problem itself enables",goto_next_section:"jump to the next top-level section, wrapping from the last back to the first",toggle_long_text_abbrev:"abbreviate or unabbreviate every long block of text at once — the same switch as the <b>Abbreviate long text</b> preference",toggle_keymap:"show or hide the keymap, where each of these keys can be changed"};function iZ(){return`<li>When relevant (not all Adhoc / AI-results presets have all response modes), you can switch between estimation response modes <b>${It.point}</b> | <b>${It.bounds}</b> | <b>${It.sample}</b>. For each subjective variable (the cards in the <b>Estimation</b> section) they mean:<ul><li><b>point</b>: A single real value. Use for low-effort estimation.</li><li><b>bounds</b>: A real interval given as <code>low high</code>. Use to incorporate flat uncertainty, without any sampling interpretation. The Calculator will show the interval each compute formula can range over, given your intervals: "≅ [low, high]" means the shown interval is exactly that range; "⫇ [low, high]" means it is an outer enclosure — the true range may be narrower, but never wider. Displayed endpoints are rounded outward, so rounding also never narrows a shown interval.</li><li><b>${It.sample}</b>: A belief distribution; Monte Carlo sampling evaluates. This is the advanced mode. The ${zi} dropdown on the left side of the sticky bar has parameters for controlling the number of iterations, in case the defaults make your experience too slow. When in distribution mode, click the help icon in any Estimation card to learn what you can put in the input fields. The Calculator section has a redundant single input box for the same data; useful for copy-pasting from a read-only Adhoc or AI result.</li></ul></li>`}function SL(){return"<b>fix</b> requires setting each parameter to one of its allowed values in the <b>Parameters</b> section, and your estimates apply to that one setting. <b>free</b> opens a code editor in which you write a function giving your estimates for every allowed parameter combination at once."}function oZ(){return Ct.map(e=>`<b>${e}</b>`).join(" | ")}function aZ(e,n){const t=lr(),r=[];n.interactionModeSelector&&r.push(`<p>The ${oZ()} buttons switch between the three things you can do here; the ${cv(t.switch_interaction_mode)} shortcut cycles through the same modes, and each remembers what you last had selected in it. The selected button shows its full name, the others their initial.</p><ul><li><b>Estimate</b>: explore the problem using your own subjective estimations.</li><li><b>ReadTrials</b>: read one result set — methodical AI trials, or one adhoc response — either as the mixture of its trials' belief distributions or as one trial. Which result set is the side panel at the right edge of the page; which of its trials is the selector under the sticky bar.</li><li><b>Compare</b>: compare results across model configurations.</li></ul>`),r.push("<h4>Sticky bar</h4><ul>"),r.push("<li>On the far right of the sticky bar, there's a dropdown for switching to a different judgement problem (hidden when there are no others).</li>"),uL(e.aid)!==void 0&&r.push("<li>This judgement problem is part of a development timeline exposition sequence. The ◀ and/or ▶ buttons move backward and forward in the timeline.</li>"),n.yoursFixFreeToggle&&r.push(`<li><b>fix</b> | <b>free</b>: ${SL()}</li>`),n.proseFoldControls&&r.push(`<li>The <b>prose</b> buttons act on ${pS} together. <b>open</b> unfolds all of them and <b>close</b> folds all of them, and both are remembered like folding each one yourself. <b>peek</b> temporarily unfolds all of them, and <b>unpeek</b> returns each to where you had it.</li>`),n.proseFoldControlsOffInSettings&&r.push(`<li>Turn on <b>${x(qi("showGlobalProseFoldControls"))}</b> in the ${zi} dropdown for sticky-bar buttons that fold or unfold ${pS} all at once.</li>`),r.push(iZ()),r.push("</ul>"),r.push(`<h4>Keyboard shortcuts</h4><p>There are just a few, which you can customize in the keymap: its own shortcut is in the list below, and so is a <b>keymap</b> button in the sticky bar's ${zi} dropdown. On a touch screen, the <b>${iL}</b> button at the bottom right opens the same actions as buttons. Currently:</p>`),r.push("<ul>");for(const i of cr){const o=rZ[i.id]??x(i.description);r.push(`<li>${cv(t[i.id])} : ${o}</li>`)}return r.push("</ul>"),r.join("")}function uZ(){const e=Object.values(Nt).filter(i=>!i.hasTruncWindow),n=Object.entries(Nt).filter(([,i])=>i.hasTruncWindow),t=e.map(i=>`<li><code>${x(i.signature)}</code> — ${x(i.note)}</li>`),r=n.map(([i])=>`<code>${x(i)}(…)</code>`);return`<p>Enter your belief distribution over this variable in one of three forms:</p><ul><li><b>Point mass</b>: <code>pointmass(x)</code> — all probability mass at <code>x</code>.</li><li><b>Distribution family</b> (preferred when one fits your belief), e.g. <code>lognormal(-4.2, 1.3)</code>. Available families:<ul>${t.join("")}</ul>Every family is automatically truncated to the variable's allowed range and renormalized, so e.g. <code>normal(mu, sigma)</code> on a probability variable means a normal truncated to [0, 1]. The ${r.join(", ")} variants take two extra trailing arguments <code>lo, hi</code> — an explicit truncation window — for when your belief has its own truncation. Most important for a heavy-tailed family on an unbounded-range variable (e.g. a Student-t on a log-odds variable), where automatic truncation is a no-op.</li><li><b>Piecewise linear density</b> (fully general): space-separated pairs <code>(x1 y1) (x2 y2) …</code>, minimum 2. x values are sorted positions spanning your uncertainty, anywhere in the variable's allowed range; y values are unnormalized density heights in [0, 1].</li></ul>`}function sZ(e,n,t,r){const i=lr(),o=[];return o.push("<p><b>This help text changes based on which interaction mode you are in.</b></p>"),n.kind==="methodical"&&(o.push("<p>To see detailed results for the selected result set, click the <b>pin</b> checkbox.</p>","<p>An AI's plain text reasoning about one subjective variable shows in that variable's own card, and its notes about the response as a whole in the <b>Response Notes</b> section. Both show the trial the cards' <b>trial</b> selector points at.</p>","<p>To read the code that trial wrote, click <b>View code</b> beside the <b>Estimation</b> heading.</p>"),e.form.length>0&&o.push("<p>To explore compute formula results other than the main conclusion, there's a drop down below next to the <b>formulas</b> / <b>raw responses</b> radio buttons.</p>",`<p>Use the <b>${YI}</b> dropdown to switch between seeing probabilities as percentages or as odds.</p>`)),tt(n)==="plainnum"&&tT(e,t)&&o.push(`<p>To see compute formula results other than the main conclusion, choose one from the <b>${z$}</b> dropdown.</p>`),e.has_cparams()&&n.kind==="yours"&&o.push(`<p><b>fix</b> | <b>free</b> toggle (next to <b>Yours</b>): ${SL()}</p>`),n.kind==="yours"&&n.queryMode==="plaincode"&&r&&o.push(`<p>Your function may also return <code>lloads</code> beside <code>point</code>, <code>bounds</code> and <code>sample</code>: a joint-dependence specification (latent factor copula) between the variables, stated separately for each parameter combination and used only in <b>${It.sample}</b> mode. Leave it out for independent variables. The starter code ends with a commented-out example. What a specification means: ${Wz(EL)}</p>`),n.kind==="yours"?o.push(`<p>To start from someone else's response, switch to <b>ReadTrials</b> (${cv(i.switch_interaction_mode)} shortcut), choose a result set in the side panel at the right edge of the page, and find the <b>Copy to Estimate</b> button.</p><p>From scratch: Suggest starting with <b>point</b> response mode, then try <b>bounds</b>. If you're experienced or courageous, try <b>${It.sample}</b> and start with <code>tri(low, peak, hi)</code> or <code>uniform(low, high)</code> lines. For full syntax of distribution inputs accepted, find the help icon in any of <b>Estimation</b> cards above.</p>`):n.kind==="adhoc"&&o.push(`<p>To start your own estimation from this response, find the <b>Copy to Estimate</b> button below.</p><p>For advanced users, in <b>${It.sample}</b> mode, there is a second type of <b>Copy to Estimate</b> button inside the <b>Joint-dependence specification</b> section (latent factor copula), when the entry states one.</p>`),o.join("")}function cZ(e){const n=x(qi("mcItersPerClickPerPlot")),t=x(qi("mcItersInitialPerPlot")),r=e.itersPerTarget.toLocaleString(),i=["<p>The <b>+</b> button above pools another block of Monte&nbsp;Carlo draws into this plot and redraws it. Draws accumulate — nothing already sampled is thrown away — so the plot starts cheap and you click until its shape stops moving.</p>"];return e.targetCount===1?i.push(`<p>Each click adds <b>${r}</b> draws to this plot`+(e.pooledSampleCount===null?".</p>":` (pooled so far: ${e.pooledSampleCount.toLocaleString()}).</p>`)):i.push(`<p>Each click adds <b>${r}</b> draws to <i>each</i> of the ${e.targetCount.toLocaleString()} plotted points/cells. The setting is a budget for the whole plot, divided equally among the targets it draws, so a plot over a wider axis gets fewer draws per point per click than a single density does — same cost per click, spread thinner.</p>`),e.pooledSampleCount===null?i.push("<p>This plot's button stays yellow: it displays a mean per point/cell rather than a distribution, so the green convergence indicator — which reads a distribution's quantiles — does not apply. Means converge as 1/&radic;n; a few clicks go a long way.</p>"):e.converged?i.push(`<p><b>Green</b>: with ${e.convergedMinSamples.toLocaleString()} or more pooled draws, every quantile of the displayed distribution is pinned to within ${e.displayEpsilon} probability mass at ${e.confidencePercent}% confidence (a distribution-free Dvoretzky&ndash;Kiefer&ndash;Wolfowitz bound). Green is not a stop sign: further clicks keep sharpening the curve.</p>`):i.push(`<p><b>Yellow &rarr; green</b>: the button turns green at ${e.convergedMinSamples.toLocaleString()} pooled draws, the point where every quantile of the displayed distribution is pinned to within ${e.displayEpsilon} probability mass at ${e.confidencePercent}% confidence (a distribution-free Dvoretzky&ndash;Kiefer&ndash;Wolfowitz bound).</p>`),i.push(`<p>To change how much a click adds, open ${zi} in the bar at the top of the page and edit <b>${n}</b>. <b>${t}</b> sets what a plot draws before you click at all.</p>`),i.join("")}const lZ={equal_per_trial:"Each contributing trial has <b>equal weight</b>, however many trials its model configuration ran.",equal_per_config:"Each model configuration has <b>equal weight</b>, shared equally among its contributing trials."};function wL(){return`<p><b>mix</b> is the mixture of the selected trials' stated belief distributions. ${lZ[KA]}</p><p>A draw from it picks a contributing trial, with its weight as the probability, and then samples that trial's stated distribution. For a formula, the draw samples all of that one trial's quantities together, respecting its stated dependence between them.</p><p>It is a mixture of stated distributions, not the distribution of the trials' point estimates: two trials that each state a narrow distribution around different values mix into a two-peaked one, not a narrow one in between.</p><p>A trial contributes only where it answered. One that gave no response at a parameter combination, or stated no distribution for a quantity, is left out there and never stood in for by its point value or bounds; the view says how many trials contribute wherever that is not all of them.</p><p>In the point view, mix is the same weighted average of the trials' point values; where bounds are offered for several trials, it is the envelope of their bounds.</p>`}function dZ(e){const n=x(qi("mcItersPerClickPerPlot")),t=x(qi("mcItersInitialPerPlot")),r=`<b>${e.initialIters.toLocaleString()}</b>`,i=e.stored==="mean"?`<p>The mean beside this plot is <b>mixed from</b> the means the result generator stored for each model configuration in this result set. A mean is all that can be mixed exactly that way, so there is no median, interval or curve here yet. Nothing is being sampled here.</p><p>The <b>&#9654;</b> button above runs ${r} live Monte&nbsp;Carlo draws in your browser from the same estimates and plots them, with their own summary; the stored mean stays on screen so you can compare the numbers. `:e.stored==="curve"?`<p>This plot is drawn from a <b>precomputed</b> curve: the result generator sampled it once, with a far larger draw budget than a browser would spend, and stored the shape. Nothing is being sampled here.</p><p>The <b>&#9654;</b> button above runs ${r} live Monte&nbsp;Carlo draws in your browser from the same estimates, and draws them on the same axis beside the stored curve; both summaries stay on screen so you can compare the numbers. `:`<p>The numbers beside this plot are <b>precomputed</b>: the result generator sampled this quantity once, with a far larger draw budget than a browser would spend, and stored its summary, but no curve to draw. Nothing is being sampled here.</p><p>The <b>&#9654;</b> button above runs ${r} live Monte&nbsp;Carlo draws in your browser from the same estimates and plots them; the precomputed summary stays on screen so you can compare the numbers. `,o=e.stored==="curve"?"<p>Expect the live curve to be the rougher of the two at first — it is the same distribution with fewer draws behind it. ":"<p>Expect the live numbers to stray a little from the precomputed ones at first — they describe the same distribution with fewer draws behind them. ";return i+`The button then becomes the ordinary <b>+</b> accumulate control, adding <b>${e.itersPerTarget.toLocaleString()}</b> draws per click until the live shape stops moving.</p>`+o+`A difference that survives many clicks is worth a closer look.</p><p>Both draw counts are settings: open ${zi} in the bar at the top of the page and edit <b>${t}</b> and <b>${n}</b>.</p>`}const Qi="mc-accumulate-btn",hS="Sample",vS="Sample more",AL="mc-activate-live-btn",Xa="mc-accumulate-help",fZ="mc-converged",fa=.05,Ai=.01;function pZ(e){if(!Number.isInteger(e)||e<1)throw new Error(`distributionCount must be a positive integer, got ${e}`);return Math.ceil(Math.log(2*e/fa)/(2*Ai*Ai))}const $L=16;function fs(e,n,t,r,i=1){var d,p;const o=e.parentElement;if(!(o!=null&&o.classList.contains("resizable-canvas-wrapper"))){console.warn("attachMcAccumulateButton: canvas is not wrapped by makeResizable");return}(d=o.querySelector(`.${Qi}`))==null||d.remove(),(p=o.querySelector(`.${Xa}`))==null||p.remove();const a=r.itersPerTarget,u=pZ(i),s=t!==null&&t>=u,c=document.createElement("button");c.className=Qi+(s?` ${fZ}`:""),c.dataset.mcPoolToken=n,c.textContent="+",c.setAttribute("aria-label",vS),c.title=`${vS}: `+(t===null?`pool ${a.toLocaleString()} more MC samples into every plotted point/cell.`:`pool ${a.toLocaleString()} more MC samples into this plot (n=${t.toLocaleString()}). `+(s?`Green: every displayed quantile is within ${Ai} probability mass at ${(1-fa)*100}% confidence; further clicks keep sharpening.`:`Turns green when every displayed quantile is within ${Ai} probability mass at ${(1-fa)*100}% confidence.`)),o.appendChild(c);const l=ut(()=>cZ({itersPerTarget:a,targetCount:r.targetCount,pooledSampleCount:t,converged:s,convergedMinSamples:u,displayEpsilon:Ai,confidencePercent:(1-fa)*100}),$L);l.classList.add(Xa),o.appendChild(l)}function mZ(e,n,t,r,i){var s,c;const o=e.parentElement;if(!(o!=null&&o.classList.contains("resizable-canvas-wrapper"))){console.warn("attachLiveMcActivationButton: canvas is not wrapped by makeResizable");return}(s=o.querySelector(`.${Qi}`))==null||s.remove(),(c=o.querySelector(`.${Xa}`))==null||c.remove();const a=document.createElement("button");a.className=`${Qi} ${AL}`,a.dataset.mcLiveActivationToken=n,a.textContent="▶",a.setAttribute("aria-label",hS),a.title=`${hS}: run ${t.toLocaleString()} live Monte Carlo draws in your browser and `+(i==="curve"?"overlay them on the precomputed curve.":i==="summary"?"plot them beside the precomputed numbers.":"plot them beside the stored mean.")+" Nothing is sampled until you ask.",o.appendChild(a);const u=ut(()=>dZ({initialIters:t,itersPerTarget:r.itersPerTarget,stored:i}),$L);u.classList.add(Xa),o.appendChild(u)}const TL="mixture-coverage",IL="show-single-trial-view",hZ="Show single trial view",LL="data-record-trial-index",RL="data-cparams";function CL(e,n){return e>=n?null:`${e} of ${n} trials contribute here`}function OL(e){const n=e.contributingRecordTrialIndices,t=CL(n.length,e.recordTrialCount);if(t===null)return"";const r=n.length===1?` <button type="button" class="${IL}" ${LL}="${n[0]}"`+(e.cparams===void 0?"":` ${RL}="${K(JSON.stringify(e.cparams))}"`)+`>${hZ}</button>`:"";return`<span class="${TL}">${t}.${r}</span>`}const vZ=256,ft=new Map,Ka=new Map;let _Z=1;function gZ(e){const n=Ht(e),t=ft.get(n);if(t!==void 0)return ft.delete(n),ft.set(n,t),t;const r={token:`mclive-${_Z++}`,activated:!1};for(ft.set(n,r),Ka.set(r.token,r);ft.size>vZ;){const i=ft.keys().next().value;Ka.delete(ft.get(i).token),ft.delete(i)}return r}function bZ(e){const n=Ka.get(e);return n===void 0?!1:(n.activated=!0,!0)}function yZ(){ft.clear(),Ka.clear()}const EZ="no finite mean (the tail is too heavy for one)";function Zi(e,n,t,r,i){return'<div class="result-main">'+(i===""?"":`${i} = `)+`mean ≈ <span class="hl">${Pe(e.mean,n,t,r)}</span>, median ≈ <span class="hl">${Pe(e.median,n,t,r)}</span></div><div class="result-detail">90% interval: [${Pe(e.p5,n,t,r)}, ${Pe(e.p95,n,t,r)}]</div>`}const L_="Mean mixed from stored means";function lv(e,n,t,r){return'<div class="result-main">'+(r===""?"":`${r} = `)+`mean ≈ <span class="hl">${Pe(e,n,t,"monte-carlo")}</span></div>`}function SZ(e,n,t){return{valueHtml:`mean <span class="derived-value">${Pe(e.mean,n,t,"monte-carlo")}</span>, median <span class="derived-value">${Pe(e.median,n,t,"monte-carlo")}</span>`,detailHtml:`<span class="derived-detail">· 90% interval [${Pe(e.p5,n,t,"monte-carlo")}, ${Pe(e.p95,n,t,"monte-carlo")}]</span>`}}function wZ(e,n,t,r){const i=a=>Pe(a,n,t,"deterministic"),o=e.mean===null?`<span class="hl">${EZ}</span>`:`mean = <span class="hl">${i(e.mean)}</span>`;return'<div class="result-main">'+(r===""?"":`${r}: `)+`${o}, median = <span class="hl">${i(e.median)}</span></div><div class="result-detail">90% interval: [${i(e.p5)}, ${i(e.p95)}]</div>`}const AZ=new vn({html:!1,linkify:!0,breaks:!0}),dv="estimator-text";function NL(e){try{return AZ.render(e)}catch{return x(e)}}function kL(e,n){e.innerHTML=NL(n)}function ML(e,n){const t=document.createElement("div");return t.classList.add(dv,n),kL(t,e),t}const PL={specPointerHtml:`<div class="lloads-spec-pointer">Each trial's joint-dependence specification is shown in <a href="#${Fe.ESTIMATION}-section">Estimation</a>.</div>`,couplingIrrelevantNoteHtml:'<div class="code-info">The stated dependence below does not change this view: coupling describes how responses move together, not how any one of them is distributed on its own.</div>'},$Z={specPointerHtml:`<div class="lloads-spec-pointer">Each trial's joint-dependence specification is shown in ReadTrials.</div>`,couplingIrrelevantNoteHtml:'<div class="code-info">The stated dependence does not change this view: coupling describes how responses move together, not how any one of them is distributed on its own.</div>'},TZ="lloads-spec-intro",DL="lloads-spec-help-slot";function IZ(){return`<div class="${TZ}"><span class="${DL}"></span><p>A latent is one shared uncertainty that can move two or more quantities together, or in opposite directions.</p></div>`}function R_(e){for(const n of e.querySelectorAll(`.${DL}`))n.childElementCount>0||n.appendChild(ut(I_))}function C_(e,n,t,r={}){if(e===void 0)return{hasDependence:!1,specHtml:""};const i=n.svar_entries().map(s=>s.bareName);let o,a=!1;if(e===null)o='<div class="lloads-independent-trial">No named latents; sampled independently.</div>';else{const s=Co(e,i);if(s!==null)throw new Error(s);a=zu(e),o=LZ(e,i,n,t,r.offerCopyToYours??!1)}const u=a&&!(r.keepFolded??!1);return{hasDependence:a,specHtml:`<details class="lloads-spec-view"${u?" open":""}><summary>Joint-dependence specification</summary><div class="lloads-spec-body">${IZ()}${o}</div></details>`}}function FL(e,n){const t=n.svar_entries().map(i=>i.bareName);let r=!1;for(const i of e){if(i.lloads===null||i.lloads===void 0)continue;const o=Co(i.lloads,t);if(o!==null)throw new Error(o);r||(r=zu(i.lloads))}return r}function LZ(e,n,t,r,i){const o=ao(t);if(o.length!==n.length)throw new Error(`joint-dependence disclosure has ${n.length} eligible variables but ${o.length} display labels`);const a=new Map(n.map((s,c)=>[s,nt(o[c],r)])),u=e.latents.map(s=>{const c=Object.entries(s.loadings).map(([l,d])=>{const p=a.get(l);if(p===void 0)throw new Error(`joint-dependence disclosure has no display label for loaded variable ${l}`);return`<li><span class="lloads-svar-label">${p}</span>: <span class="lloads-loading">${CZ(d)}</span></li>`}).join("");return`<article class="lloads-latent"><div class="lloads-latent-name ${dv}">${x(s.name)}</div><div class="lloads-latent-description ${dv}">${NL(s.description)}</div><ul class="lloads-loadings">${c}</ul></article>`}).join("");return RZ(e,i)+u}function RZ(e,n){return n?`<div class="lloads-copy-row"><button class="copy-to-yours-btn lloads-copy-to-yours-btn" type="button" data-lloads-spec="${K(JSON.stringify(e))}" title="Copy this joint-dependence specification into your editable Estimate inputs">Copy to Estimate</button></div>`:""}function CZ(e){if(Object.is(e,-0)||e===0)return"0";const n=Math.abs(e).toPrecision(6).replace(/\.?0+$/,"");return e>0?`+${n}`:`−${n}`}function qL(e){switch(e){case"series":return{independent:{color:gJ,bandFill:bJ},joint:{color:gI,bandFill:bI}};case"stored":return{independent:{color:Ga,bandFill:null},joint:{color:Ga,bandFill:yI}};case"live":return{independent:{color:ja,bandFill:null},joint:{color:ja,bandFill:EI}}}}const O_="Independent",N_="Stated joint";function xL(e){const n=(t,r)=>{switch(r){case"series":return t;case"stored":return`${t} (precomputed)`;case"live":return`${t} (live MC)`}};return e.flatMap(t=>{const r=qL(t);return[{label:n(O_,t),color:r.independent.color,dashed:!0},{label:n(N_,t),color:r.joint.color,dashed:!1}]})}function fv(e){const{comparison:n,valueRange:t,statsDisplay:r,targetLabelHtml:i}=e,o=e.canvasId===void 0?"":a_(e.canvasId,e.legend??xL(["series"]));return`<div class="result-label">Joint-dependence comparison (${e.provenanceDetail})</div><div class="dependence-comparison density-result-row"><div class="dependence-comparison-stats density-result-text"><div class="dependence-series-label dependence-series-independent">${O_}</div>`+Zi(n.independent,t,r,"monte-carlo",i)+`<div class="dependence-series-label dependence-series-joint">${N_}</div>`+Zi(n.joint,t,r,"monte-carlo",i)+`</div>${o}</div>`}function OZ(e){const{means:n,valueRange:t,statsDisplay:r,targetLabelHtml:i}=e,o=e.canvasId===void 0?"":a_(e.canvasId,e.legend??[]);return`<div class="result-label">Joint-dependence comparison (${e.provenanceDetail})</div><div class="dependence-comparison density-result-row"><div class="dependence-comparison-stats density-result-text"><div class="dependence-series-label dependence-series-independent">${O_}</div>`+lv(n.independent,t,r,i)+`<div class="dependence-series-label dependence-series-joint">${N_}</div>`+lv(n.joint,t,r,i)+`</div>${o}</div>`}function BL(e){const n=e.box.querySelector(`#${e.canvasId}`);if(n===null)return!1;const t=[];for(const r of e.layers){const i=qL(r.palette),o=_S(r.comparison.independent,i.independent,!0),a=_S(r.comparison.joint,i.joint,!1);if(o===null||a===null)return!1;t.push(o,a)}if(t.length===0)return!1;NI(n,t,e.valueRange,e.axis,{stateHost:e.box,stateKey:e.resizeStateKey});for(const{comparison:r}of e.layers){const{independent:i,joint:o}=r;if(i.mcPoolToken!==o.mcPoolToken)throw new Error("CRN-paired density results do not share one MC pool token");o.mcPoolToken!==null&&fs(n,o.mcPoolToken,o.samples.length,{itersPerTarget:e.mcItersPerClick,targetCount:1},t.length)}return!0}function _S(e,n,t){const r=mI(e);return r===null?null:{source:r,p5:e.p5,p95:e.p95,color:n.color,dashed:t,bandFill:n.bandFill}}const NZ="Precomputed",kZ="Live MC",MZ=["No precomputed plot here.","▶ draws it with live Monte Carlo."];function HL(e,n){return{scale:e.densityScale,statsDisplay:n.statsDisplay}}function UL(e,n){const t=()=>wJ(n,MZ);t(),ss(n,t,{stateHost:e.box,stateKey:e.resizeStateKey})}function GL(e,n,t,r,i,o){if(n!==null&&n.mcPoolToken!==null){fs(e,n.mcPoolToken,n.sampleCount,{itersPerTarget:r.mcItersPerClick,targetCount:1},i);return}t!==null&&mZ(e,t.token,r.mcIters,{itersPerTarget:r.mcItersPerClick},o)}function jL(e,n){if(!e)return null;const t=n.activationKeyParts();return t===null?null:gZ(t)}function wh(e,n){return`<div class="density-result-row"><div class="density-result-text">${e}</div>${n}</div>`}function VL(e,n,t,r,i,o){const{box:a,canvasId:u}=e,s=(r==null?void 0:r.kind)==="pair"?oI(r.pair):null,c=s!==null&&s.independent.storedDistribution!==null&&s.joint.storedDistribution!==null?s:null,l=(r==null?void 0:r.kind)==="means"?r.means:null,d=jL(r!==null,i),m=r===null||((d==null?void 0:d.activated)??!1)?i.run():null,f=[];c!==null&&f.push({comparison:c,palette:"stored"}),m!==null&&f.push({comparison:m,palette:f.length===0?"series":"live"});const h=xL(f.map(g=>g.palette)),v=f.length>0||d!==null,_=[];if(s!==null?_.push(fv({comparison:s,valueRange:n.valueRange,statsDisplay:n.statsDisplay,targetLabelHtml:n.targetLabelHtml,canvasId:v?u:void 0,legend:h,provenanceDetail:`precomputed, ${n.storedTrialsDetail}`})):l!==null&&_.push(OZ({means:l,valueRange:n.valueRange,statsDisplay:n.statsDisplay,targetLabelHtml:n.targetLabelHtml,canvasId:v?u:void 0,legend:h,provenanceDetail:`${L_.toLowerCase()}, ${n.storedTrialsDetail}`})),m!==null&&_.push(fv({comparison:m,valueRange:n.valueRange,statsDisplay:n.statsDisplay,targetLabelHtml:n.targetLabelHtml,canvasId:r===null?u:void 0,legend:h,provenanceDetail:`live Monte Carlo, ${n.liveSampleCountDetail(m.joint)}`})),_.push(o),a.innerHTML=_.join(""),f.length>0&&BL({box:a,canvasId:u,layers:f,valueRange:n.valueRange,axis:HL(e,n),resizeStateKey:e.resizeStateKey,mcItersPerClick:t.mcItersPerClick}),m===null){const g=a.querySelector(`#${u}`);g&&(f.length===0&&UL(e,g),GL(g,null,d,t,f.length*2,c!==null?"curve":l!==null?"mean":"summary"))}}function WL(e,n,t,r,i){const{box:o,canvasId:a}=e,u=n.valueRange,s=(r==null?void 0:r.kind)==="stats"?yJ(r.stats):null,c=jL(r!==null,i),d=r===null||((c==null?void 0:c.activated)??!1)?i.run():null,p=s!==null||d!==null||c!==null,m=s===null||d===null?[]:[{label:NZ,color:Ga,dashed:!1},{label:kZ,color:ja,dashed:!1}],f=m.length===0?`<canvas id="${a}" width="400" height="200"></canvas>`:a_(a,m),h=[];(r==null?void 0:r.kind)==="stats"?h.push(`<div class="result-label">Precomputed (independent, ${n.storedTrialsDetail})</div>`+wh(Zi(r.stats,u,n.statsDisplay,"monte-carlo",n.targetLabelHtml),p?f:"")):(r==null?void 0:r.kind)==="mean"&&h.push(`<div class="result-label">${L_} (independent, ${n.storedTrialsDetail})</div>`+wh(lv(r.mean,u,n.statsDisplay,n.targetLabelHtml),p?f:"")),d!==null&&h.push(`<div class="result-label">Live MC (independent, ${n.liveSampleCountDetail(d)})</div>`+wh(Zi(d,u,n.statsDisplay,"monte-carlo",n.targetLabelHtml),r!==null?"":f)),o.innerHTML=h.join("");const v=o.querySelector(`#${a}`);if(v===null)return;const _=HL(e,n),g={stateHost:o,stateKey:e.resizeStateKey};if(s!==null){const b=[s];d!==null&&b.push({source:d.samples,p5:d.p5,p95:d.p95,color:ja,dashed:!1,bandFill:EI}),NI(v,b,u,_,g)}else d!==null?CI(v,d.samples,d.p5,d.p95,u,_,g):UL(e,v);GL(v,d===null?null:{mcPoolToken:d.mcPoolToken,sampleCount:d.samples.length},c,t,(s===null?0:1)+(d===null?0:1),s!==null?"curve":(r==null?void 0:r.kind)==="mean"?"mean":"summary")}const PZ=1;function XL(e,n){const t=Math.max(1,n),r=i=>Math.max(PZ,Math.floor(i/t));return{mcIters:r(e.mcItersInitialPerPlot),mcItersPerClick:r(e.mcItersPerClickPerPlot)}}function Br(e){return XL(e,1)}const k_="Your beliefs specification yields infinite or undefined values. Consider using non-zero numbers.",DZ="≅",FZ="⫇",KL="The interval computed for this formula from the bounds responses is unbounded on both sides, i.e. carries no information. Point and distribution results are unaffected.";function YL(e,n){return e===-1/0&&n===1/0}function JL(e){return e==="tight"?DZ:FZ}const Ya="from point estimates";function Tr(e){return e.some(Number.isNaN)?"undefined":e.some(n=>!Number.isFinite(n))?"infinite":null}function Ja(){return`<p class="arg-warning">${k_}</p>`}function qZ(e,n,t,r){const i=Gi(e,"floor"),o=Gi(n,"ceil");return`[${Pe(i,t,r)}, ${Pe(o,t,r)}]`}function xZ(e,n,t,r){const i=(e+n)/2;return Number.isNaN(i)?"undefined":Pe(i,t,r)}function za({labelHtml:e,value:n,valueRange:t,statsDisplay:r,labelPrefix:i="",detail:o}){const a=Tr([n]);if(a==="undefined")throw new Error(k_);return`<div class="result-main">${x(i)}${e} = <span class="hl">${Pe(n,t,r)}</span></div>`+(o===void 0?"":`<div class="result-detail">${x(o)}</div>`)+(a==="infinite"?Ja():"")}function M_({labelHtml:e,lo:n,hi:t,tightness:r,valueRange:i,statsDisplay:o,midpointDetailSuffix:a=""}){if(n>t)throw new Error(`Invalid calculated bounds: lo=${n} is greater than hi=${t}`);const u=Tr([n,t]);if(u==="undefined")throw new Error(k_);if(YL(n,t))return`<div class="result-detail">${x(KL)}</div>`;const s=Gi(n,"floor"),c=Gi(t,"ceil"),l=u==="infinite"&&r==="tight";return`<div class="result-main">${e} ${JL(r)} [<span class="hl">${Pe(s,i,o)}</span>, <span class="hl">${Pe(c,i,o)}</span>]</div><div class="result-detail">midpoint: ${xZ(n,t,i,o)}${x(a)}</div>`+(l?Ja():"")}function eo(e,n){if(typeof e!="number"||Number.isNaN(e))throw new Error(`${n}: expected a number, got ${JSON.stringify(e)}`);return e}function pv(e,n){if(!Array.isArray(e)||e.length!==2)throw new Error(`${n}: expected [lo, hi], got ${JSON.stringify(e)}`);const t=eo(e[0],`${n} lo`),r=eo(e[1],`${n} hi`);if(t>r)throw new Error(`${n}: lo=${t} is greater than hi=${r}`);return[t,r]}function zL(e,n){return eo(e.point[n],`Code result point data for ${JSON.stringify(n)}`)}function QL(e,n){return pv(e.bounds[n],`Code result bounds data for ${JSON.stringify(n)}`)}function ZL(e,n,t){var o;const r=(o=e.compform_point_val)==null?void 0:o[n];if(r!==void 0)return eo(r,`Code result computed point value for ${n}`);if(!t)throw new Error(`Code result has no computed point value or form implementation for ${n}`);const i=t.params.map(a=>zL(e,a));return eo(t.point(i),`Directly evaluated code result point value for ${n}`)}function eR(e,n,t){var a,u;const r=(a=e.compform_bounds_val)==null?void 0:a[n];if(r!==void 0){const s=(u=e.compform_bounds_tightness)==null?void 0:u[n];return{interval:pv(r,`Code result computed bounds value for ${n}`),tightness:s==="tight"?"tight":"loose"}}if(!t)throw new Error(`Code result has no computed bounds value or form implementation for ${n}`);if(!t.bounds)return null;if(!t.boundsTightness)throw new Error(`form ${n} has a bounds implementation but no boundsTightness — regenerate form_fns`);const i=t.params.map(s=>QL(e,s)),o=t.bounds(i);return{interval:pv([o.lo,o.hi],`Directly evaluated code result bounds value for ${n}`),tightness:t.boundsTightness}}function oi(e){return e.some(n=>zu(n.lloads))}function ps(e){return new Error(`A record with stated joint dependence must carry both its independence precompute (${an}) and joint precompute (${mn}), or neither for ${e}`)}function ms(e,n){if(e===void 0)return;const t=e[an],r=e[mn];if(!n)return t===void 0?void 0:{stats:t,strengthKey:an};if(!(t===void 0&&r===void 0)){if(t===void 0||r===void 0)throw ps("live evaluation");return{stats:r,strengthKey:mn}}}function nR(e){if(e===void 0)return null;const n=e[an],t=e[mn];if(n===void 0&&t===void 0)return null;if(n===void 0||t===void 0)throw ps("live comparison");return{independent:n,joint:t}}function ai(e,n,t){var r;return t?e.precomputed:(r=e.precomputed_aux_forms)==null?void 0:r[n]}function tR(e,n,t,r){return ms(ai(e,n,n===t),r)}function rR(e,n,t){var r;return t||(r=e.aux_form_means)==null?void 0:r[n]}function iR(e,n,t,r){const i=rR(e,n,t);if(i===void 0)return;const o=i[an],a=i[mn];if(!r)return o===void 0?void 0:{mean:o,strengthKey:an};if(!(o===void 0&&a===void 0)){if(o===void 0||a===void 0)throw ps("explicit sampling");return{mean:a,strengthKey:mn}}}function BZ(e,n,t){const r=rR(e,n,t);if(r===void 0)return null;const i=r[an],o=r[mn];if(i===void 0&&o===void 0)return null;if(i===void 0||o===void 0)throw ps("explicit sampling");return{independent:i,joint:o}}const HZ=5,UZ="rgb(59, 130, 246)",GZ="Dots show each trial's own distribution mean.",jZ="Lines show each trial's own distribution mean.",VZ=" Each comes from joint or independent sampling according to that trial's stated coupling.",mv=2,oR="code-density",hv="code-density-canvas",WZ="code-line",XZ="code-heatmap",gS=["#c44","#44c","#2a9d4a","#c84","#84c","#2aa","#c4c","#888","#ca4"];function KZ(e){return{key:e.id,formEntry:e.formEntry}}function aR(e,n){if(n===null)throw new Error(`Distribution view for ${e.id} has no sample evaluator`);return n}function uR(e,n,t){if(n.formEntry===null)throw new Error(`Distribution view for ${e.id} requires its generated form implementation`);const r=oo(n.formEntry,t);return{paramKeys:r.params,combine:r.point}}function P_(e,n,t){return n.kind==="raw_response"?zL(e,n.bareName):ZL(e,n.id,n.formEntry&&oo(n.formEntry,t))}function YZ(e,n,t){return n.kind==="raw_response"?{interval:QL(e,n.bareName),tightness:"tight"}:eR(e,n.id,n.formEntry&&oo(n.formEntry,t))}function JZ(e,n){if(e.length===0)return null;const t=[...e].sort((i,o)=>i-o),r=i=>{const o=Math.min(t.length-1,Math.max(0,Math.round(i*(t.length-1))));return t[o]};return{count:e.length,mean:Qu(e,n),median:r(.5),p5:r(.05),p95:r(.95)}}function sR(e,n,t){return JZ(n.trials.map(r=>P_(r,t,n.cparams)),ht(e,n.trials))}function _n(e,n){for(const t of e.cparam_combos){let r=!0;for(const i of e.cparam_names)if(t.cparams[i]!==n[i]){r=!1;break}if(r)return t}return null}function D_(e,n,t){const r=new Set;for(const i of e.cparam_combos){const o=i.cparams[n];o!==void 0&&r.add(o)}return t?t.filter(i=>typeof i!="boolean"&&r.has(i)):Array.from(r)}function hs(e,n){return n[e]!==!1}function zZ(e,n){let t=0;for(const r of e)n[r]===!1&&t++;return t}function cR(e,n){return e.filter(t=>n[t]===!1)}function lR(e,n){var t;if(n.kind==="formula")return(t=ms(ai(e,n.id,n.isConclusion),oi(e.trials)))==null?void 0:t.stats}function QZ(e,n){return n.kind!=="formula"?null:nR(ai(e,n.id,n.isConclusion))}function dR(e,n){var t;if(n.kind==="formula")return(t=iR(e,n.id,n.isConclusion,oi(e.trials)))==null?void 0:t.mean}function ZZ(e,n){return n.kind!=="formula"?null:BZ(e,n.id,n.isConclusion)}function eee(e,n){var t;if(n.kind==="formula")return(t=ms(ai(e,n.id,n.isConclusion),oi([e])))==null?void 0:t.stats.mean}function vs(e,n,t){var o;if(((o=n.formEntry)==null?void 0:o.sampleStage)!==void 0)throw new Error(`Distribution view for ${n.id} is not supported for formulas with E[·] barriers (v1)`);const{paramKeys:r,combine:i}=uR(n,t,e.cparams);for(const a of e.trials){const u=r.filter(s=>!JT(a.sample[s]));if(u.length>0)throw new Error(`Code distribution MC for ${t.key}: a trial lacks sample data for parameter(s) ${JSON.stringify(u)}`)}return{key:t.formEntry===null?t.key:gw(t.key,t.formEntry,e.cparams),params:r,valueRange:n.valueRange,point:i,bounds:null,boundsTightness:null}}function fR(e,n,t){const r=Jn([e],[1],"sample",t);if(r.mode!=="sample")throw new Error(`Exact distribution for ${n.bareName} needs sample-mode inputs`);const i=r.trials[0].specs[n.bareName];if(i===void 0)throw new Error(`Exact distribution for ${n.bareName}: a trial has no sample response`);return Vi(i,r.ranges[n.bareName])}function pR(e,n,t,r){return{distribs:n.trials.map(i=>fR(i,t,r)),weights:ht(e,n.trials)}}function nee(e,n){return n.kind==="raw_response"?!0:e.cparam_combos.some(t=>t.trials.some(r=>ai(r,n.id,n.isConclusion)!==void 0))}function tee(e,n,t,r){if(n.kind==="raw_response"){const i=QT(fR(e,n,t));if(i===null){r&&(r.encountered=!0);return}return i}return eee(e,n)}function ree(e,n,t,r,i,o){const a=vs(n,t,r);return zn(a,Jn(n.trials,ht(e,n.trials),"sample",i),{onIncompleteTrial:"error",mcIters:o.mcIters,mcItersPerClick:o.mcItersPerClick})}function iee(e,n,t,r,i,o){const a=vs(n,t,r);return GY(a,Jn(n.trials,ht(e,n.trials),"sample",i),{onIncompleteTrial:"error",mcIters:o.mcIters,mcItersPerClick:o.mcItersPerClick})}function oee(e,n,t,r,i,o,a,u){if(t.kind==="raw_response"){const d=pR(e,n,t,i),p=ZT(d.distribs,d.weights);if(p===null){u&&(u.encountered=!0);return}return{mean:p}}const s=lR(n,t);if(s)return s;const c=dR(n,t);if(c!==void 0)return{mean:c};const l=iee(e,n,t,aR(t,r),i,o);return l.mcPoolToken!==null&&(a==null||a.add(l.mcPoolToken)),l}function mR(e){var n;return e===null?'<div class="code-info">No distribution plot target is available.</div>':e.kind==="formula"&&((n=e.formEntry)==null?void 0:n.sampleStage)!==void 0?'<div class="code-info">Distribution view is not yet supported for formulas containing E[·] aggregation.</div>':null}function hR(e,n,t,r){const i=n.kind==="formula"?KZ(n):null,o=Ew(e.svar_entries()),a=XL(t,r),u=new Set,s={encountered:!1};return{sampleTarget:i,paramRanges:o,statsForCombo:(c,l)=>oee(c,l,n,i,o,a,u,s),trialSampleMeanFor:c=>nee(c,n)?l=>tee(l,n,o,s):void 0,attachFollowUps:c=>{if(u.size>0){const l=c.querySelector("#code-line-canvas, #code-heatmap-canvas");l&&fs(l,iI([...u]),null,{itersPerTarget:a.mcItersPerClick,targetCount:r})}s.encountered&&c.insertAdjacentHTML("beforeend",yee)}}}function vR(e,n,t){let r=t.reduce((i,o)=>i*o,1);for(const i of e)r*=(n.get(i)??[]).length;return r}function _R(e,n){const t=(n==null?void 0:n.valueRange)??e.conclusion_range_or_none(),r=t===null?null:du(t);return{heatmapValueRange:r??void 0,linePlotYRangePaddingPercent:r===null?void 0:HZ}}function ui(e,n,t,r){return A2(n.ui.cparamValues[e],t==null?void 0:t.default_value,r)}function aee(e,n,t){if(zZ(e.cparam_names,t.ui.cparamPinned)>0)return null;const r={};for(const i of e.cparam_names){const o=n.find_cparam(i),a=D_(e,i,o==null?void 0:o.allowed_values);r[i]=ui(i,t,o,a)}return _n(e,r)}function uee(e){if(e.length===0)return;const n=e[0].cparam_names;for(let t=1;t<e.length;t++){const r=e[t].cparam_names;if(r.length!==n.length||!r.every((o,a)=>o===n[a]))throw new Error(`validateRecsCparamCompat: incompatible cparam_names: ${JSON.stringify(n)} vs ${JSON.stringify(r)}. Cannot sweep across published entries with mismatched cparam shapes.`)}}function gR(e,n,t,r,i){const o=new Map;for(let u=0;u<t.length;u++){const s={...r,[n]:t[u]},c=_n(e,s);if(c)for(const l of c.trials){const d=i(l,c);if(d===void 0)continue;const p=Pt(l),m=o.get(p),f={x:u,y:d};m?m.push(f):o.set(p,[f])}}const a=see(e);return{series:[...o.entries()].sort(([u],[s])=>u-s).map(([u,s])=>({points:s,...a.styles.get(u)})),legend:a.legend}}function see(e){const n=new Map,t=[];return b2(e).forEach((r,i)=>{if(r.configuration===null){for(const u of r.trials)n.set(u.recordTrialIndex,{label:`trial ${u.trialNumber}`});return}const o=v2(yn(r.configuration)),a=gS[i%gS.length];t.push({label:o,color:a});for(const u of r.trials)n.set(u.recordTrialIndex,{label:`${o} trial ${u.trialNumber}`,color:a})}),{styles:n,legend:t}}function cee(e){return(n,t)=>P_(n,e,t.cparams)}function bR(e,n,t,r,i,o,a){const u=t.map(String);if(i==="average"){const s=[],c=[];for(let l=0;l<t.length;l++){const d={...r,[n]:t[l]},p=_n(e,d);if(!p)continue;const m=o?o(e,p):p.precomputed[an];if(m&&(s.push({x:l,y:m.mean}),a!==void 0))for(const f of p.trials){const h=a(f,p);h!==void 0&&c.push({x:l,y:h})}}return{series:[{points:s,label:"avg"}],xLabels:u,scatterPoints:c,legend:[]}}if(a===void 0)throw new Error("Separate mode of a distribution sweep needs a per-trial mean source");return{...gR(e,n,t,r,a),xLabels:u,scatterPoints:[]}}function yR(e,n,t,r,i,o,a){const u=t.map(String),s=i.map(String),c=[];for(let l=0;l<i.length;l++){const d=[];for(let p=0;p<t.length;p++){const m={...o,[n]:t[p],[r]:i[l]},f=_n(e,m);if(!f){d.push(null);continue}const h=a?a(e,f):f.precomputed[an];d.push((h==null?void 0:h.mean)??null)}c.push(d)}return{cells:c,xLabels:u,yLabels:s,xAxisLabel:n,yAxisLabel:r}}function lee(e,n,t,r,i,o){const a=t.map(String);if(i==="average"){const u=[];for(let s=0;s<t.length;s++){const c={...r,[n]:t[s]},l=_n(e,c);if(!l)continue;const d=sR(e,l,o);d&&u.push({x:s,y:d.mean})}return{series:[{points:u,label:"avg"}],xLabels:a,scatterPoints:[],legend:[]}}return{...gR(e,n,t,r,cee(o)),xLabels:a,scatterPoints:[]}}function dee(e,n,t,r,i,o,a){const u=t.map(String),s=i.map(String),c=[];for(let l=0;l<i.length;l++){const d=[];for(let p=0;p<t.length;p++){const m={...o,[n]:t[p],[r]:i[l]},f=_n(e,m),h=f?sR(e,f,a):null;d.push((h==null?void 0:h.mean)??null)}c.push(d)}return{cells:c,xLabels:u,yLabels:s,xAxisLabel:n,yAxisLabel:r}}function ER(e,n,t,r,i,o,a){if(!i||!o)return"";const u={};for(const s of e.cparam_names){const c=r.find_cparam(s),l=t.get(s)??[];if(l.length===0)return"";const d=ui(s,n,c,l);if((c!==void 0?fu(c.allowed_values):typeof d=="string"?"string":"number")==="string"){u[s]=d;continue}const m=Number(d);if(!Number.isFinite(m))return"";u[s]=m}return i(u)?"":`<div class="arg-warning">${a(o)}</div>`}const fee="These controls change only this plot.",pee="cparam-controls-scope-note";function mee(e,n,t,r,i,o,a,u,s,c,l){const d=ER(n,r,i,t,s,c,l);let p=nT(t,r,o,a,u);p+=d+'<div class="cparam-controls">';const m=SR(n.cparam_names,t,r,i);p+=m.html,m.rowCount>0&&(p+=`<p class="${pee}">${x(fee)}</p>`),p+="</div>",e.innerHTML=p}function SR(e,n,t,r){let i="",o=0;for(const a of e){const u=n.find_cparam(a),s=r.get(a)??[];if(s.length===0)continue;const c=ui(a,t,u,s),l=s.indexOf(c),d=hs(a,t.ui.cparamPinned),p=(u==null?void 0:u.longname)??a;i+='<div class="cparam-row">',i+=`<label class="cparam-label">${x(p)}</label>`,i+=`<input type="range" class="cparam-slider" data-cparam="${a}" `,i+=`min="0" max="${s.length-1}" step="1" value="${l>=0?l:0}" `,i+=`${d?"":"disabled "}`,i+=`data-values='${x(JSON.stringify(s))}'>`,i+=`<span class="cparam-value-label">${x(String(c))}</span>`,i+='<label class="cparam-pin-label"><input type="checkbox" class="cparam-pin-checkbox" ',i+=`data-cparam="${a}"${d?" checked":""}> pin</label>`,i+="</div>",o++}return{html:i,rowCount:o}}function bS(e){return console.warn(`code viewer controls sync: ${e}; falling back to a full controls rebuild`),!1}function hee(e,n,t,r,i,o,a,u){const s=e.querySelector(".cparam-controls");if(!s)return bS("no existing .cparam-controls block");const c=ER(n,r,i,t,o,a,u),l=e.querySelector(":scope > .arg-warning");c===""?l==null||l.remove():l?l.outerHTML=c:s.insertAdjacentHTML("beforebegin",c);for(const d of n.cparam_names){const p=i.get(d)??[];if(p.length===0)continue;const m=t.find_cparam(d),f=ui(d,r,m,p),h=p.indexOf(f),v=s.querySelector(`.cparam-slider[data-cparam="${d}"]`),_=v==null?void 0:v.closest(".cparam-row"),g=_==null?void 0:_.querySelector(".cparam-value-label"),b=_==null?void 0:_.querySelector(".cparam-pin-checkbox");if(!v||!g||!b)return bS(`cparam row for ${d} is missing expected controls`);const y=hs(d,r.ui.cparamPinned);v.value=String(h>=0?h:0),v.disabled=!y,g.textContent=String(f),b.checked=y}return!0}function vee(e){return`<div class="sweep-mode-toggle"><button class="sweep-mode-btn${e==="average"?" active":""}" data-sweep-mode="average">Average</button><button class="sweep-mode-btn${e==="separate"?" active":""}" data-sweep-mode="separate">Separate</button></div>`}const F_='<div class="code-info">No data for this parameter combination.</div>';function _ee(e,n,t,r,i,o,a){const u=_n(n,t);if(!u){e.innerHTML=F_;return}if(!r){e.innerHTML='<div class="code-info">No point plot target is available.</div>';return}if(u.trials.length===0)throw new Error("Code point result has no trials for the selected parameter combination");const s=u.trials.map(p=>P_(p,r,u.cparams)),c=Qu(s,ht(n,u.trials)),l=r.valueRange,d=s.length===1?Ya:`per trial: ${s.map(p=>Pe(p,l,a.ui.probAsOdds)).join(", ")}`;e.innerHTML=za({labelHtml:So(r,i,o),value:c,valueRange:l,statsDisplay:a.ui.probAsOdds,labelPrefix:s.length===1?"":"mean ",detail:d})}function gee(e,n,t,r,i,o,a){const u=_n(n,t);if(!u){e.innerHTML=F_;return}if(!r){e.innerHTML='<div class="code-info">No bounds plot target is available.</div>';return}if(!c2(n)||u.trials.length!==1)throw new Error(`Code bounds display requires one trial; record count=${n.count}, selected combo trials=${u.trials.length}`);const s=YZ(u.trials[0],r,u.cparams);if(!s){e.innerHTML=`<div class="code-info">${x(Mo)}</div>`;return}const[c,l]=s.interval;e.innerHTML=M_({labelHtml:So(r,i,o),lo:c,hi:l,tightness:s.tightness,valueRange:r.valueRange,statsDisplay:a.ui.probAsOdds})}function yS(e,n,t,r,i,o,a,u,s,c,l){wR(e,n,t,r,i,o,a,u,s,c,l,!1)}function ES(e,n,t,r,i,o,a,u,s,c,l){wR(e,n,t,r,i,o,a,u,s,c,l,!0)}function wR(e,n,t,r,i,o,a,u,s,c,l,d){l2(t);const p=FA(a,t,o.ui.inputMode),m=Z$(r,o,p,s),f=new Map;for(const S of t.cparam_names){const I=r.find_cparam(S),R=D_(t,S,I==null?void 0:I.allowed_values);f.set(S,R)}d&&hee(e,t,r,o,f,c,l,S=>Ge(S,i))||mee(e,t,r,o,f,p,m,s,c,l,S=>Ge(S,i));const v=cR(t.cparam_names,o.ui.cparamPinned),_=v.length,g=o.ui.codeSweepMode,b={};for(const S of t.cparam_names)if(hs(S,o.ui.cparamPinned)){const I=r.find_cparam(S),R=f.get(S)??[];b[S]=ui(S,o,I,R)}const{heatmapValueRange:y,linePlotYRangePaddingPercent:E}=_R(r,m);if(p==="bounds"){_>0?n.innerHTML='<div class="code-info">Pin every axis to display code-response bounds.</div>':gee(n,t,b,m,r,i,o);return}let $=null;if(p==="sample"){const S=mR(m);if(m===null||S!==null){n.innerHTML=S;return}$=hR(r,m,u,vR(v,f,[]))}const T=($==null?void 0:$.sampleTarget)??null,C=($==null?void 0:$.paramRanges)??null,L=$==null?void 0:$.statsForCombo,A=$==null?void 0:$.trialSampleMeanFor(t),w=p;if(_===0)if(p==="point")_ee(n,t,b,m,r,i,o);else{if(m===null||C===null)throw new Error("Sample-mode code density routing has no resolved sample target");wee(n,t,o,u,b,m,T,C,r,So(m,r,i),a)}else if(_===1)$ee(n,t,v[0],f,b,g,E,m,w,L,A);else if(_===2)Tee(n,t,v,f,b,y,m,w,L);else{const S=t.cparam_names.length-mv;n.innerHTML=`<div class="code-info"><p>Pin at least ${S} parameter${S===1?"":"s"} to visualize results.</p><p>Currently ${_} parameter${_===1?"":"s"} unpinned.</p></div>`}$==null||$.attachFollowUps(n)}function bee(e,n,t,r,i,o){return r.formEntry===null?null:[...aI(vs(n,t,r),Jn(n.trials,ht(e,n.trials),"sample",i),{onIncompleteTrial:"error",mcIters:o.mcIters,mcItersPerClick:o.mcItersPerClick}),"target",r.key]}const yee='<div class="code-info">Some points are not plotted: the response there has no finite mean, so there is no value to place on this axis. Its distribution view still shows an exact median and interval.</div>';function Eee(e,n,t,r){const i=e.map(o=>`${Pe(o.x,t,r,"deterministic")} (${o.count} of ${n})`).join(", ");return`<div class="code-info">Point-mass responses: ${x(i)}. Each is drawn as a spike whose height is its share of the responses, not a density.</div>`}function See(e,n,t,r,i,o,a,u,s,c){const{distribs:l,weights:d}=pR(n,t,r,i),p=nI(l,d),m=eI(l,d),f=wI(l,d),h=r.valueRange,v=o.ui.probAsOdds,_=l.length,g=[`<div class="result-label">Exact (${s2(c,_)})</div>`,'<div class="density-result-row"><div class="density-result-text">'+wZ(p,h,v,a)+`</div><canvas id="${hv}" width="400" height="200"></canvas></div>`];m.length>0&&g.push(Eee(m,_,h,v)),u&&(g.push(s.couplingIrrelevantNoteHtml),g.push(s.specPointerHtml)),e.innerHTML=g.join("");const b=e.querySelector(`#${hv}`);if(!b)return;const y=AI(f,h),E=[p.p5,p.p95];kI(b,f,y,h,Vn(o.ui),E,{stateHost:e,stateKey:oR})}function wee(e,n,t,r,i,o,a,u,s,c,l){const d=_n(n,i);if(!d){e.innerHTML=F_;return}AR(e,n,d,t,r,o,a,u,s,c,PL,l);const p=OL({contributingRecordTrialIndices:d.trials.map(Pt),recordTrialCount:n.count,cparams:d.cparams});p!==""&&e.insertAdjacentHTML("afterbegin",`<div class="code-info">${p}</div>`)}function AR(e,n,t,r,i,o,a,u,s,c,l,d){const p=o.valueRange,m=FL(t.trials,s);if(o.kind==="raw_response"){See(e,n,t,o,u,r,c,m,l,d);return}const f=aR(o,a),h=Br(i),v={box:e,canvasId:hv,resizeStateKey:oR,densityScale:r.ui.densityScale},_={valueRange:p,statsDisplay:r.ui.probAsOdds,targetLabelHtml:c,storedTrialsDetail:s2(d,t.trials.length),liveSampleCountDetail:E=>`n=${E.samples.length.toLocaleString()}`},g=()=>bee(n,t,o,f,u,h);if(m){const E=QZ(t,o),$=E===null?ZZ(t,o):null;VL(v,_,h,E!==null?{kind:"pair",pair:E}:$!==null?{kind:"means",means:$}:null,{run:()=>o_(vs(t,o,f),Jn(t.trials,ht(n,t.trials),"sample",u),{onIncompleteTrial:"error",mcIters:h.mcIters,mcItersPerClick:h.mcItersPerClick}),activationKeyParts:g},l.specPointerHtml);return}const b=lR(t,o),y=b===void 0?dR(t,o):void 0;f.formEntry===null&&b===void 0&&y===void 0&&uR(o,f,t.cparams),WL(v,_,h,b!==void 0?{kind:"stats",stats:b}:y!==void 0?{kind:"mean",mean:y}:null,{run:()=>ree(n,t,o,f,u,h),activationKeyParts:g})}function Aee(e){return e.length===0?{}:{scatterOverlay:{points:e,color:UZ}}}function $R(e,n){const t=n.kind==="formula"?VZ:"";return`<div class="code-info" style="margin-top: 6px;">${e}${t}</div>`}function q_(e,n){return e.length===0||n===null?"":$R(GZ,n)}function $ee(e,n,t,r,i,o,a,u,s,c,l){const d=r.get(t)??[],p=s==="sample",m=!p||l!==void 0,f=n.count>1&&m,h=f?o:"average",{series:v,xLabels:_,scatterPoints:g,legend:b}=u===null?{series:[],xLabels:d.map(String),scatterPoints:[],legend:[]}:p?bR(n,t,d,i,h,c,l):lee(n,t,d,i,h,u);let y="";f&&(y+=vee(h),h==="separate"?y+=p&&u!==null?$R(jZ,u):'<div class="code-info" style="margin-top: 6px;">Separate mode shows per-trial point values.</div>':p||(y+='<div class="code-info" style="margin-top: 6px;">Average mode uses point values only.</div>')),y+=q_(g,u),x_(e,{series:v,xLabels:_,scatterPoints:g,legend:b},t,a,y)}function x_(e,{series:n,xLabels:t,scatterPoints:r,legend:i},o,a,u){let s='<div class="code-plot-container">';i.length>0&&(s+=sI(i.map(l=>({...l,dashed:!1})),"Model configuration line colours")),s+='<canvas id="code-line-canvas" class="code-plot-canvas" width="800" height="500"></canvas>',s+=u,s+="</div>",e.innerHTML=s;const c=e.querySelector("#code-line-canvas");if(c){const l={xLabels:t,xAxisLabel:o,...a===void 0?{}:{yRangePaddingPercent:a},...Aee(r)};tS(c,n,l),ss(c,()=>tS(c,n,l),{stateHost:e,stateKey:WZ})}}function Tee(e,n,t,r,i,o,a,u,s){const c=t[0],l=t[1],d=r.get(c)??[],p=r.get(l)??[],m=u==="sample",f=m?yR(n,c,d,l,p,i,s):a?dee(n,c,d,l,p,i,a):{cells:[],xLabels:d.map(String),yLabels:p.map(String),xAxisLabel:c,yAxisLabel:l};Qa(e,f,o,m?"":'<div class="code-info" style="margin-top: 6px;">Cells show average point values.</div>')}function Qa(e,n,t,r){t&&(n.valueRange=t);const{width:i,height:o}=VI(n);let a='<div class="code-plot-container">';a+=`<canvas id="code-heatmap-canvas" class="code-plot-canvas" width="${i}" height="${o}"></canvas>`,a+=r,a+="</div>",e.innerHTML=a;const u=e.querySelector("#code-heatmap-canvas");u&&(aS(u,n),ss(u,()=>aS(u,n),{stateHost:e,stateKey:XZ}))}const Iee=0,SS=new WeakMap;function Lee(e,n){const t=Dt(e);if(!Number.isInteger(n)||n<0||n>=t)throw new Error(`singleTrialRecord: trial ${n} is not one of the record's ${t} trials`);if(t===1)return e;let r=SS.get(e);r===void 0&&(r=new Map,SS.set(e,r));let i=r.get(n);return i===void 0&&(i=bn(e)?Cee(e,n):Ree(e,n),r.set(n,i)),i}function Ree(e,n){const t=e.trials[n],{precomputed_aux_forms:r,...i}=e;return{...i,count:1,trials:[t],precomputed:t.precomputed??{},...t.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:t.precomputed_aux_forms}}}function Cee(e,n){const t=Iu(e,n),r=e.cparam_combos.flatMap(u=>{const s=qA(u.trials,n);return s===void 0?[]:[{cparams:u.cparams,trials:[{...s,trial_index:Iee}],precomputed:s.precomputed??{},...s.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:s.precomputed_aux_forms}}]}),{entry_id:i,result_set:o,...a}=e;return{...a,count:1,cparam_combos:r,model:(t==null?void 0:t.model)??e.model,version:(t==null?void 0:t.version)??e.version,effort:(t==null?void 0:t.effort)===void 0?e.effort:t.effort,trial_metadata:e.trial_metadata===void 0||e.trial_metadata.length===0?e.trial_metadata:[t??{}]}}function B_(e,n){return e>0?Math.max(0,Math.min(n,e-1)):0}function wS(e,n){return e<2?Ui(0):n.kind==="mix"?Ar:Ui(B_(e,n.recordTrialIndex))}function $n(e,n){if(n===void 0||e.interactionMode!=="ReadTrials")return null;const{resultSet:t}=kn(e.readTrials,{presetData:n});return t.kind==="adhoc"?FF(t.entry,n):t.kind==="methodical"?t.record:null}function vt(e,n){const t=IR(e,n),r=ci(e,n);if(r===null)return wS(t,Ar);if(t===0)return Ar;const i=Bq(e.ui.readTrials.trial,e.ui.interactionMode==="ReadTrials"&&e.ui.readTrials.adhoc!==null?"adhoc":"methodical",r);return wS(t,i===null?Ar:Ui(i))}function Mn(e,n){const t=$n(e.ui,n);if(t===null)return null;const r=vt(e,n);return r.kind==="mix"?t:Lee(t,r.recordTrialIndex)}const Oee={point:!1,bounds:!1,sample:!1};function si(e,n){return n!==void 0?Xr(e.ui,{presetData:n}):{kind:"yours",queryMode:e.ui.estimateQueryMode}}function TR(e,n){return e.ui.interactionMode==="Compare"?Oee:PA(Mn(e,n))}function Qn(e,n){return FA(si(e,n).kind,Mn(e,n),e.ui.inputMode)}function ci(e,n){return $n(e.ui,n)}function _s(e,n){return Array.from({length:Dt(e)},(t,r)=>n(r))}function IR(e,n){const t=ci(e,n);return t?Dt(t):0}function LR(e,n){const t=ci(e,n);return t?_s(t,r=>HF(t,r)):[]}function H_(e,n){return LR(e,n).map(t=>t==null?void 0:t.reasoning)}function Nee(e,n){const t=ci(e,n);return t?_s(t,r=>Iu(t,r)):[]}function kee(e,n){const t=Mn(e,n);return t?_s(t,r=>{var i;return(i=Iu(t,r))==null?void 0:i.logical_consistency_outcome}):[]}function RR(e,n,t){return _n(e,ku(n,t))}function CR(e,n){var r;const t=n.yoursCodeRecord;if(po(t))return(r=RR(mo(t),e,n))==null?void 0:r.trials[0]}function U_(e,n,t){const r=$n(n.ui,t);if(!r)return[];if(!bn(r))return r.trials;const i=RR(r,e,n);return Array.from({length:Dt(r)},(o,a)=>i?qA(i.trials,a):void 0)}function G_(e,n){const t=ci(e,n);return t?Zt(t):[]}function OR(e,n){const t=ci(e,n);return t?_s(t,r=>UF(t,r)??{}):void 0}var Ah,AS;function Mee(){if(AS)return Ah;AS=1;function e(O){return O instanceof Map?O.clear=O.delete=O.set=function(){throw new Error("map is read-only")}:O instanceof Set&&(O.add=O.clear=O.delete=function(){throw new Error("set is read-only")}),Object.freeze(O),Object.getOwnPropertyNames(O).forEach(F=>{const W=O[F],le=typeof W;(le==="object"||le==="function")&&!Object.isFrozen(W)&&e(W)}),O}class n{constructor(F){F.data===void 0&&(F.data={}),this.data=F.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(O){return O.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(O,...F){const W=Object.create(null);for(const le in O)W[le]=O[le];return F.forEach(function(le){for(const xe in le)W[xe]=le[xe]}),W}const i="</span>",o=O=>!!O.scope,a=(O,{prefix:F})=>{if(O.startsWith("language:"))return O.replace("language:","language-");if(O.includes(".")){const W=O.split(".");return[`${F}${W.shift()}`,...W.map((le,xe)=>`${le}${"_".repeat(xe+1)}`)].join(" ")}return`${F}${O}`};class u{constructor(F,W){this.buffer="",this.classPrefix=W.classPrefix,F.walk(this)}addText(F){this.buffer+=t(F)}openNode(F){if(!o(F))return;const W=a(F.scope,{prefix:this.classPrefix});this.span(W)}closeNode(F){o(F)&&(this.buffer+=i)}value(){return this.buffer}span(F){this.buffer+=`<span class="${F}">`}}const s=(O={})=>{const F={children:[]};return Object.assign(F,O),F};class c{constructor(){this.rootNode=s(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(F){this.top.children.push(F)}openNode(F){const W=s({scope:F});this.add(W),this.stack.push(W)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(F){return this.constructor._walk(F,this.rootNode)}static _walk(F,W){return typeof W=="string"?F.addText(W):W.children&&(F.openNode(W),W.children.forEach(le=>this._walk(F,le)),F.closeNode(W)),F}static _collapse(F){typeof F!="string"&&F.children&&(F.children.every(W=>typeof W=="string")?F.children=[F.children.join("")]:F.children.forEach(W=>{c._collapse(W)}))}}class l extends c{constructor(F){super(),this.options=F}addText(F){F!==""&&this.add(F)}startScope(F){this.openNode(F)}endScope(){this.closeNode()}__addSublanguage(F,W){const le=F.root;W&&(le.scope=`language:${W}`),this.add(le)}toHTML(){return new u(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function d(O){return O?typeof O=="string"?O:O.source:null}function p(O){return h("(?=",O,")")}function m(O){return h("(?:",O,")*")}function f(O){return h("(?:",O,")?")}function h(...O){return O.map(W=>d(W)).join("")}function v(O){const F=O[O.length-1];return typeof F=="object"&&F.constructor===Object?(O.splice(O.length-1,1),F):{}}function _(...O){return"("+(v(O).capture?"":"?:")+O.map(le=>d(le)).join("|")+")"}function g(O){return new RegExp(O.toString()+"|").exec("").length-1}function b(O,F){const W=O&&O.exec(F);return W&&W.index===0}const y=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function E(O,{joinWith:F}){let W=0;return O.map(le=>{W+=1;const xe=W;let Be=d(le),ee="";for(;Be.length>0;){const J=y.exec(Be);if(!J){ee+=Be;break}ee+=Be.substring(0,J.index),Be=Be.substring(J.index+J[0].length),J[0][0]==="\\"&&J[1]?ee+="\\"+String(Number(J[1])+xe):(ee+=J[0],J[0]==="("&&W++)}return ee}).map(le=>`(${le})`).join(F)}const $=/\b\B/,T="[a-zA-Z]\\w*",C="[a-zA-Z_]\\w*",L="\\b\\d+(\\.\\d+)?",A="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",w="\\b(0b[01]+)",S="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",I=(O={})=>{const F=/^#![ ]*\//;return O.binary&&(O.begin=h(F,/.*\b/,O.binary,/\b.*/)),r({scope:"meta",begin:F,end:/$/,relevance:0,"on:begin":(W,le)=>{W.index!==0&&le.ignoreMatch()}},O)},R={begin:"\\\\[\\s\\S]",relevance:0},P={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[R]},k={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[R]},B={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},D=function(O,F,W={}){const le=r({scope:"comment",begin:O,end:F,contains:[]},W);le.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const xe=_("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return le.contains.push({begin:h(/[ ]+/,"(",xe,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),le},q=D("//","$"),M=D("/\\*","\\*/"),Z=D("#","$"),G={scope:"number",begin:L,relevance:0},z={scope:"number",begin:A,relevance:0},te={scope:"number",begin:w,relevance:0},ae={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[R,{begin:/\[/,end:/\]/,relevance:0,contains:[R]}]},j={scope:"title",begin:T,relevance:0},Y={scope:"title",begin:C,relevance:0},V={begin:"\\.\\s*"+C,relevance:0};var me=Object.freeze({__proto__:null,APOS_STRING_MODE:P,BACKSLASH_ESCAPE:R,BINARY_NUMBER_MODE:te,BINARY_NUMBER_RE:w,COMMENT:D,C_BLOCK_COMMENT_MODE:M,C_LINE_COMMENT_MODE:q,C_NUMBER_MODE:z,C_NUMBER_RE:A,END_SAME_AS_BEGIN:function(O){return Object.assign(O,{"on:begin":(F,W)=>{W.data._beginMatch=F[1]},"on:end":(F,W)=>{W.data._beginMatch!==F[1]&&W.ignoreMatch()}})},HASH_COMMENT_MODE:Z,IDENT_RE:T,MATCH_NOTHING_RE:$,METHOD_GUARD:V,NUMBER_MODE:G,NUMBER_RE:L,PHRASAL_WORDS_MODE:B,QUOTE_STRING_MODE:k,REGEXP_MODE:ae,RE_STARTERS_RE:S,SHEBANG:I,TITLE_MODE:j,UNDERSCORE_IDENT_RE:C,UNDERSCORE_TITLE_MODE:Y});function ne(O,F){O.input[O.index-1]==="."&&F.ignoreMatch()}function se(O,F){O.className!==void 0&&(O.scope=O.className,delete O.className)}function $e(O,F){F&&O.beginKeywords&&(O.begin="\\b("+O.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",O.__beforeBegin=ne,O.keywords=O.keywords||O.beginKeywords,delete O.beginKeywords,O.relevance===void 0&&(O.relevance=0))}function Se(O,F){Array.isArray(O.illegal)&&(O.illegal=_(...O.illegal))}function gt(O,F){if(O.match){if(O.begin||O.end)throw new Error("begin & end are not supported with match");O.begin=O.match,delete O.match}}function un(O,F){O.relevance===void 0&&(O.relevance=1)}const _e=(O,F)=>{if(!O.beforeMatch)return;if(O.starts)throw new Error("beforeMatch cannot be used with starts");const W=Object.assign({},O);Object.keys(O).forEach(le=>{delete O[le]}),O.keywords=W.keywords,O.begin=h(W.beforeMatch,p(W.begin)),O.starts={relevance:0,contains:[Object.assign(W,{endsParent:!0})]},O.relevance=0,delete W.beforeMatch},In=["of","and","for","in","not","or","if","then","parent","list","value"],Je="keyword";function Ln(O,F,W=Je){const le=Object.create(null);return typeof O=="string"?xe(W,O.split(" ")):Array.isArray(O)?xe(W,O):Object.keys(O).forEach(function(Be){Object.assign(le,Ln(O[Be],F,Be))}),le;function xe(Be,ee){F&&(ee=ee.map(J=>J.toLowerCase())),ee.forEach(function(J){const ce=J.split("|");le[ce[0]]=[Be,Ut(ce[0],ce[1])]})}}function Ut(O,F){return F?Number(F):Q(O)?0:1}function Q(O){return In.includes(O.toLowerCase())}const ve={},Rn=O=>{console.error(O)},fi=(O,...F)=>{console.log(`WARN: ${O}`,...F)},st=(O,F)=>{ve[`${O}/${F}`]||(console.log(`Deprecated as of ${O}. ${F}`),ve[`${O}/${F}`]=!0)},bt=new Error;function dr(O,F,{key:W}){let le=0;const xe=O[W],Be={},ee={};for(let J=1;J<=F.length;J++)ee[J+le]=xe[J],Be[J+le]=!0,le+=g(F[J-1]);O[W]=ee,O[W]._emit=Be,O[W]._multi=!0}function pi(O){if(Array.isArray(O.begin)){if(O.skip||O.excludeBegin||O.returnBegin)throw Rn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),bt;if(typeof O.beginScope!="object"||O.beginScope===null)throw Rn("beginScope must be object"),bt;dr(O,O.begin,{key:"beginScope"}),O.begin=E(O.begin,{joinWith:""})}}function mi(O){if(Array.isArray(O.end)){if(O.skip||O.excludeEnd||O.returnEnd)throw Rn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),bt;if(typeof O.endScope!="object"||O.endScope===null)throw Rn("endScope must be object"),bt;dr(O,O.end,{key:"endScope"}),O.end=E(O.end,{joinWith:""})}}function Ho(O){O.scope&&typeof O.scope=="object"&&O.scope!==null&&(O.beginScope=O.scope,delete O.scope)}function ze(O){Ho(O),typeof O.beginScope=="string"&&(O.beginScope={_wrap:O.beginScope}),typeof O.endScope=="string"&&(O.endScope={_wrap:O.endScope}),pi(O),mi(O)}function De(O){function F(ee,J){return new RegExp(d(ee),"m"+(O.case_insensitive?"i":"")+(O.unicodeRegex?"u":"")+(J?"g":""))}class W{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(J,ce){ce.position=this.position++,this.matchIndexes[this.matchAt]=ce,this.regexes.push([ce,J]),this.matchAt+=g(J)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const J=this.regexes.map(ce=>ce[1]);this.matcherRe=F(E(J,{joinWith:"|"}),!0),this.lastIndex=0}exec(J){this.matcherRe.lastIndex=this.lastIndex;const ce=this.matcherRe.exec(J);if(!ce)return null;const We=ce.findIndex((hi,Is)=>Is>0&&hi!==void 0),Ue=this.matchIndexes[We];return ce.splice(0,We),Object.assign(ce,Ue)}}class le{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(J){if(this.multiRegexes[J])return this.multiRegexes[J];const ce=new W;return this.rules.slice(J).forEach(([We,Ue])=>ce.addRule(We,Ue)),ce.compile(),this.multiRegexes[J]=ce,ce}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(J,ce){this.rules.push([J,ce]),ce.type==="begin"&&this.count++}exec(J){const ce=this.getMatcher(this.regexIndex);ce.lastIndex=this.lastIndex;let We=ce.exec(J);if(this.resumingScanAtSamePosition()&&!(We&&We.index===this.lastIndex)){const Ue=this.getMatcher(0);Ue.lastIndex=this.lastIndex+1,We=Ue.exec(J)}return We&&(this.regexIndex+=We.position+1,this.regexIndex===this.count&&this.considerAll()),We}}function xe(ee){const J=new le;return ee.contains.forEach(ce=>J.addRule(ce.begin,{rule:ce,type:"begin"})),ee.terminatorEnd&&J.addRule(ee.terminatorEnd,{type:"end"}),ee.illegal&&J.addRule(ee.illegal,{type:"illegal"}),J}function Be(ee,J){const ce=ee;if(ee.isCompiled)return ce;[se,gt,ze,_e].forEach(Ue=>Ue(ee,J)),O.compilerExtensions.forEach(Ue=>Ue(ee,J)),ee.__beforeBegin=null,[$e,Se,un].forEach(Ue=>Ue(ee,J)),ee.isCompiled=!0;let We=null;return typeof ee.keywords=="object"&&ee.keywords.$pattern&&(ee.keywords=Object.assign({},ee.keywords),We=ee.keywords.$pattern,delete ee.keywords.$pattern),We=We||/\w+/,ee.keywords&&(ee.keywords=Ln(ee.keywords,O.case_insensitive)),ce.keywordPatternRe=F(We,!0),J&&(ee.begin||(ee.begin=/\B|\b/),ce.beginRe=F(ce.begin),!ee.end&&!ee.endsWithParent&&(ee.end=/\B|\b/),ee.end&&(ce.endRe=F(ce.end)),ce.terminatorEnd=d(ce.end)||"",ee.endsWithParent&&J.terminatorEnd&&(ce.terminatorEnd+=(ee.end?"|":"")+J.terminatorEnd)),ee.illegal&&(ce.illegalRe=F(ee.illegal)),ee.contains||(ee.contains=[]),ee.contains=[].concat(...ee.contains.map(function(Ue){return Qe(Ue==="self"?ee:Ue)})),ee.contains.forEach(function(Ue){Be(Ue,ce)}),ee.starts&&Be(ee.starts,J),ce.matcher=xe(ce),ce}if(O.compilerExtensions||(O.compilerExtensions=[]),O.contains&&O.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return O.classNameAliases=r(O.classNameAliases||{}),Be(O)}function fr(O){return O?O.endsWithParent||fr(O.starts):!1}function Qe(O){return O.variants&&!O.cachedVariants&&(O.cachedVariants=O.variants.map(function(F){return r(O,{variants:null},F)})),O.cachedVariants?O.cachedVariants:fr(O)?r(O,{starts:O.starts?r(O.starts):null}):Object.isFrozen(O)?r(O):O}var Cn="11.11.1";class dn extends Error{constructor(F,W){super(F),this.name="HTMLInjectionError",this.html=W}}const Gt=t,pr=r,mr=Symbol("nomatch"),dN=7,C3=function(O){const F=Object.create(null),W=Object.create(null),le=[];let xe=!0;const Be="Could not find the language '{}', did you forget to load/include a language module?",ee={disableAutodetect:!0,name:"Plain text",contains:[]};let J={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:l};function ce(U){return J.noHighlightRe.test(U)}function We(U){let oe=U.className+" ";oe+=U.parentNode?U.parentNode.className:"";const he=J.languageDetectRe.exec(oe);if(he){const Te=yt(he[1]);return Te||(fi(Be.replace("{}",he[1])),fi("Falling back to no-highlight mode for this block.",U)),Te?he[1]:"no-highlight"}return oe.split(/\s+/).find(Te=>ce(Te)||yt(Te))}function Ue(U,oe,he){let Te="",je="";typeof oe=="object"?(Te=U,he=oe.ignoreIllegals,je=oe.language):(st("10.7.0","highlight(lang, code, ...args) has been deprecated."),st("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),je=U,Te=oe),he===void 0&&(he=!0);const On={code:Te,language:je};Go("before:highlight",On);const Et=On.result?On.result:hi(On.language,On.code,he);return Et.code=On.code,Go("after:highlight",Et),Et}function hi(U,oe,he,Te){const je=Object.create(null);function On(X,re){return X.keywords[re]}function Et(){if(!de.keywords){Ze.addText(Ie);return}let X=0;de.keywordPatternRe.lastIndex=0;let re=de.keywordPatternRe.exec(Ie),pe="";for(;re;){pe+=Ie.substring(X,re.index);const Ae=Fn.case_insensitive?re[0].toLowerCase():re[0],en=On(de,Ae);if(en){const[ct,LN]=en;if(Ze.addText(pe),pe="",je[Ae]=(je[Ae]||0)+1,je[Ae]<=dN&&(Wo+=LN),ct.startsWith("_"))pe+=re[0];else{const RN=Fn.classNameAliases[ct]||ct;Dn(re[0],RN)}}else pe+=re[0];X=de.keywordPatternRe.lastIndex,re=de.keywordPatternRe.exec(Ie)}pe+=Ie.substring(X),Ze.addText(pe)}function jo(){if(Ie==="")return;let X=null;if(typeof de.subLanguage=="string"){if(!F[de.subLanguage]){Ze.addText(Ie);return}X=hi(de.subLanguage,Ie,!0,q3[de.subLanguage]),q3[de.subLanguage]=X._top}else X=Ls(Ie,de.subLanguage.length?de.subLanguage:null);de.relevance>0&&(Wo+=X.relevance),Ze.__addSublanguage(X._emitter,X.language)}function fn(){de.subLanguage!=null?jo():Et(),Ie=""}function Dn(X,re){X!==""&&(Ze.startScope(re),Ze.addText(X),Ze.endScope())}function M3(X,re){let pe=1;const Ae=re.length-1;for(;pe<=Ae;){if(!X._emit[pe]){pe++;continue}const en=Fn.classNameAliases[X[pe]]||X[pe],ct=re[pe];en?Dn(ct,en):(Ie=ct,Et(),Ie=""),pe++}}function P3(X,re){return X.scope&&typeof X.scope=="string"&&Ze.openNode(Fn.classNameAliases[X.scope]||X.scope),X.beginScope&&(X.beginScope._wrap?(Dn(Ie,Fn.classNameAliases[X.beginScope._wrap]||X.beginScope._wrap),Ie=""):X.beginScope._multi&&(M3(X.beginScope,re),Ie="")),de=Object.create(X,{parent:{value:de}}),de}function D3(X,re,pe){let Ae=b(X.endRe,pe);if(Ae){if(X["on:end"]){const en=new n(X);X["on:end"](re,en),en.isMatchIgnored&&(Ae=!1)}if(Ae){for(;X.endsParent&&X.parent;)X=X.parent;return X}}if(X.endsWithParent)return D3(X.parent,re,pe)}function wN(X){return de.matcher.regexIndex===0?(Ie+=X[0],1):(Ns=!0,0)}function AN(X){const re=X[0],pe=X.rule,Ae=new n(pe),en=[pe.__beforeBegin,pe["on:begin"]];for(const ct of en)if(ct&&(ct(X,Ae),Ae.isMatchIgnored))return wN(re);return pe.skip?Ie+=re:(pe.excludeBegin&&(Ie+=re),fn(),!pe.returnBegin&&!pe.excludeBegin&&(Ie=re)),P3(pe,X),pe.returnBegin?0:re.length}function $N(X){const re=X[0],pe=oe.substring(X.index),Ae=D3(de,X,pe);if(!Ae)return mr;const en=de;de.endScope&&de.endScope._wrap?(fn(),Dn(re,de.endScope._wrap)):de.endScope&&de.endScope._multi?(fn(),M3(de.endScope,X)):en.skip?Ie+=re:(en.returnEnd||en.excludeEnd||(Ie+=re),fn(),en.excludeEnd&&(Ie=re));do de.scope&&Ze.closeNode(),!de.skip&&!de.subLanguage&&(Wo+=de.relevance),de=de.parent;while(de!==Ae.parent);return Ae.starts&&P3(Ae.starts,X),en.returnEnd?0:re.length}function TN(){const X=[];for(let re=de;re!==Fn;re=re.parent)re.scope&&X.unshift(re.scope);X.forEach(re=>Ze.openNode(re))}let Vo={};function F3(X,re){const pe=re&&re[0];if(Ie+=X,pe==null)return fn(),0;if(Vo.type==="begin"&&re.type==="end"&&Vo.index===re.index&&pe===""){if(Ie+=oe.slice(re.index,re.index+1),!xe){const Ae=new Error(`0 width match regex (${U})`);throw Ae.languageName=U,Ae.badRule=Vo.rule,Ae}return 1}if(Vo=re,re.type==="begin")return AN(re);if(re.type==="illegal"&&!he){const Ae=new Error('Illegal lexeme "'+pe+'" for mode "'+(de.scope||"<unnamed>")+'"');throw Ae.mode=de,Ae}else if(re.type==="end"){const Ae=$N(re);if(Ae!==mr)return Ae}if(re.type==="illegal"&&pe==="")return Ie+=`
`,1;if(Os>1e5&&Os>re.index*3)throw new Error("potential infinite loop, way more iterations than matches");return Ie+=pe,pe.length}const Fn=yt(U);if(!Fn)throw Rn(Be.replace("{}",U)),new Error('Unknown language: "'+U+'"');const IN=De(Fn);let Cs="",de=Te||IN;const q3={},Ze=new J.__emitter(J);TN();let Ie="",Wo=0,jt=0,Os=0,Ns=!1;try{if(Fn.__emitTokens)Fn.__emitTokens(oe,Ze);else{for(de.matcher.considerAll();;){Os++,Ns?Ns=!1:de.matcher.considerAll(),de.matcher.lastIndex=jt;const X=de.matcher.exec(oe);if(!X)break;const re=oe.substring(jt,X.index),pe=F3(re,X);jt=X.index+pe}F3(oe.substring(jt))}return Ze.finalize(),Cs=Ze.toHTML(),{language:U,value:Cs,relevance:Wo,illegal:!1,_emitter:Ze,_top:de}}catch(X){if(X.message&&X.message.includes("Illegal"))return{language:U,value:Gt(oe),illegal:!0,relevance:0,_illegalBy:{message:X.message,index:jt,context:oe.slice(jt-100,jt+100),mode:X.mode,resultSoFar:Cs},_emitter:Ze};if(xe)return{language:U,value:Gt(oe),illegal:!1,relevance:0,errorRaised:X,_emitter:Ze,_top:de};throw X}}function Is(U){const oe={value:Gt(U),illegal:!1,relevance:0,_top:ee,_emitter:new J.__emitter(J)};return oe._emitter.addText(U),oe}function Ls(U,oe){oe=oe||J.languages||Object.keys(F);const he=Is(U),Te=oe.filter(yt).filter(k3).map(fn=>hi(fn,U,!1));Te.unshift(he);const je=Te.sort((fn,Dn)=>{if(fn.relevance!==Dn.relevance)return Dn.relevance-fn.relevance;if(fn.language&&Dn.language){if(yt(fn.language).supersetOf===Dn.language)return 1;if(yt(Dn.language).supersetOf===fn.language)return-1}return 0}),[On,Et]=je,jo=On;return jo.secondBest=Et,jo}function fN(U,oe,he){const Te=oe&&W[oe]||he;U.classList.add("hljs"),U.classList.add(`language-${Te}`)}function Rs(U){let oe=null;const he=We(U);if(ce(he))return;if(Go("before:highlightElement",{el:U,language:he}),U.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",U);return}if(U.children.length>0&&(J.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(U)),J.throwUnescapedHTML))throw new dn("One of your code blocks includes unescaped HTML.",U.innerHTML);oe=U;const Te=oe.textContent,je=he?Ue(Te,{language:he,ignoreIllegals:!0}):Ls(Te);U.innerHTML=je.value,U.dataset.highlighted="yes",fN(U,he,je.language),U.result={language:je.language,re:je.relevance,relevance:je.relevance},je.secondBest&&(U.secondBest={language:je.secondBest.language,relevance:je.secondBest.relevance}),Go("after:highlightElement",{el:U,result:je,text:Te})}function pN(U){J=pr(J,U)}const mN=()=>{Uo(),st("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function hN(){Uo(),st("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let O3=!1;function Uo(){function U(){Uo()}if(document.readyState==="loading"){O3||window.addEventListener("DOMContentLoaded",U,!1),O3=!0;return}document.querySelectorAll(J.cssSelector).forEach(Rs)}function vN(U,oe){let he=null;try{he=oe(O)}catch(Te){if(Rn("Language definition for '{}' could not be registered.".replace("{}",U)),xe)Rn(Te);else throw Te;he=ee}he.name||(he.name=U),F[U]=he,he.rawDefinition=oe.bind(null,O),he.aliases&&N3(he.aliases,{languageName:U})}function _N(U){delete F[U];for(const oe of Object.keys(W))W[oe]===U&&delete W[oe]}function gN(){return Object.keys(F)}function yt(U){return U=(U||"").toLowerCase(),F[U]||F[W[U]]}function N3(U,{languageName:oe}){typeof U=="string"&&(U=[U]),U.forEach(he=>{W[he.toLowerCase()]=oe})}function k3(U){const oe=yt(U);return oe&&!oe.disableAutodetect}function bN(U){U["before:highlightBlock"]&&!U["before:highlightElement"]&&(U["before:highlightElement"]=oe=>{U["before:highlightBlock"](Object.assign({block:oe.el},oe))}),U["after:highlightBlock"]&&!U["after:highlightElement"]&&(U["after:highlightElement"]=oe=>{U["after:highlightBlock"](Object.assign({block:oe.el},oe))})}function yN(U){bN(U),le.push(U)}function EN(U){const oe=le.indexOf(U);oe!==-1&&le.splice(oe,1)}function Go(U,oe){const he=U;le.forEach(function(Te){Te[he]&&Te[he](oe)})}function SN(U){return st("10.7.0","highlightBlock will be removed entirely in v12.0"),st("10.7.0","Please use highlightElement now."),Rs(U)}Object.assign(O,{highlight:Ue,highlightAuto:Ls,highlightAll:Uo,highlightElement:Rs,highlightBlock:SN,configure:pN,initHighlighting:mN,initHighlightingOnLoad:hN,registerLanguage:vN,unregisterLanguage:_N,listLanguages:gN,getLanguage:yt,registerAliases:N3,autoDetection:k3,inherit:pr,addPlugin:yN,removePlugin:EN}),O.debugMode=function(){xe=!1},O.safeMode=function(){xe=!0},O.versionString=Cn,O.regex={concat:h,lookahead:p,either:_,optional:f,anyNumberOfTimes:m};for(const U in me)typeof me[U]=="object"&&e(me[U]);return Object.assign(O,me),O},hr=C3({});return hr.newInstance=()=>C3({}),Ah=hr,hr.HighlightJS=hr,hr.default=hr,Ah}var Pee=Mee();const NR=rt(Pee);function Dee(e){const n=e.regex,t=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),r=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],u={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:r,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},s={className:"meta",begin:/^(>>>|\.\.\.) /},c={className:"subst",begin:/\{/,end:/\}/,keywords:u,illegal:/#/},l={begin:/\{\{/,relevance:0},d={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,s],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,s],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,s,l,c]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,s,l,c]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,l,c]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,l,c]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},p="[0-9](_?[0-9])*",m=`(\\b(${p}))?\\.(${p})|\\b(${p})\\.`,f=`\\b|${r.join("|")}`,h={className:"number",relevance:0,variants:[{begin:`(\\b(${p})|(${m}))[eE][+-]?(${p})[jJ]?(?=${f})`},{begin:`(${m})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${f})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${f})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${f})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${f})`},{begin:`\\b(${p})[jJ](?=${f})`}]},v={className:"comment",begin:n.lookahead(/# type:/),end:/$/,keywords:u,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},_={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:u,contains:["self",s,h,d,e.HASH_COMMENT_MODE]}]};return c.contains=[d,h,s],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:u,illegal:/(<\/|\?)|=>/,contains:[s,h,{scope:"variable.language",match:/\bself\b/},{beginKeywords:"if",relevance:0},{match:/\bor\b/,scope:"keyword"},d,v,e.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,t],scope:{1:"keyword",3:"title.function"},contains:[_]},{variants:[{match:[/\bclass/,/\s+/,t,/\s*/,/\(\s*/,t,/\s*\)/]},{match:[/\bclass/,/\s+/,t]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[h,_,d]}]}}NR.registerLanguage("python",Dee);const $S=NR,kR="agent-code-modal-backdrop",vv="agent-code-view-btn",Fee="agent-code-block",qee="View code";function xee(e){const n=e==null?void 0:e.agent_code;return n!==void 0&&n.trim()!==""?n:void 0}function Bee(e,n){const t=`trial ${n+1} code`;return e===""?t:`${e} — ${t}`}function Hee(e,n,t,r){var s;if($i(),(s=e.querySelector(`:scope > .${vv}`))==null||s.remove(),t.kind==="mix")return;const i=B_(n.length,t.recordTrialIndex),o=xee(n[i]);if(o===void 0)return;const a=Bee(r,i),u=document.createElement("button");u.className=vv,u.textContent=qee,u.addEventListener("click",c=>{c.preventDefault(),c.stopPropagation(),Uee(o,a)}),e.appendChild(u)}function Uee(e,n){$i();const t=document.createElement("div");t.id=kR,t.className="agent-code-backdrop";const r=document.createElement("div");r.className="agent-code-modal";const i=document.createElement("button");i.className="agent-code-close-btn",i.textContent="×",i.title="Close (Esc)",i.addEventListener("click",$i),r.appendChild(i);const o=document.createElement("h2");o.className="agent-code-modal-header",o.textContent=n,r.appendChild(o),r.appendChild(Gee(e)),t.appendChild(r),document.body.appendChild(t),document.addEventListener("keydown",MR),t.addEventListener("click",a=>{a.target===t&&$i()})}function $i(){const e=document.getElementById(kR);e&&(e.remove(),document.removeEventListener("keydown",MR))}function MR(e){e.key==="Escape"&&$i()}function Gee(e){const n=document.createElement("pre");n.className=Fee;const t=document.createElement("code");if($S)try{return t.innerHTML=$S.highlight(e,{language:"python"}).value,n.appendChild(t),n}catch{}return t.textContent=e,n.appendChild(t),n}const PR="trial-selection-suffix",DR="inspected-combination-suffix",TS=[PR,DR];function jee(e,n,t){var o;if((o=e.querySelector(`:scope > .${n}`))==null||o.remove(),t===null)return;const r=document.createElement("span");r.className=n,r.textContent=t;const i=Vee(e,n);i===null?e.appendChild(r):e.insertBefore(r,i)}function FR(e,n,t){for(const r of e){const i=document.getElementById(`${r}-section-header`);i&&jee(i,n,t)}}function Vee(e,n){const t=TS.indexOf(n);if(t===-1)throw new Error(`Unknown section heading suffix: ${n}`);for(const r of TS.slice(t+1)){const i=e.querySelector(`:scope > .${r}`);if(i!==null)return i}return e.querySelector(`:scope > .${vv}`)}const qR="combination-selector",Wee="combination-selector-pair",Xee="combination-selector-param-name",Kee="inspected-cparam-select",Yee="data-inspected-cparam",Jee=".arg-warning",zee=`View your beliefs
at parameters`,Qee=`View responses
at parameters`,Zee="; switch view in side panel",ene=", ";function j_(e,n){return e.has_cparams()&&Wn(tt(n))}function xR(e,n,t){return e!=="Compare"&&j_(n,t)}function nne(e){return e.kind==="yours"?zee:Qee}function tne(e,n,t,r,i={}){if(!j_(n,r)){e.replaceChildren();return}const o=n.get_cparams().map(a=>one(a,T2(a,t))).join("");e.innerHTML=`<div class="${qR}">`+o+HR(n,t,i)+"</div>"}function rne(e,n,t,r){const i=e.querySelector(`.${qR}`);if(i===null)return;const o=HR(n,t,r),a=i.querySelector(`:scope > ${Jee}`);o===""?a==null||a.remove():a?a.outerHTML=o:i.insertAdjacentHTML("beforeend",o)}function ine(e,n,t){return j_(e,t)?`${e.get_cparams().map(i=>`${UR(i)} = ${T2(i,n)}`).join(ene)}${Zee}`:null}function BR(e,n,t){FR([Fe.ESTIMATION],DR,ine(e,n,t))}function HR(e,n,t){return H$(e.get_cparams(),ku(e,n),t.renderDefn??x,t.filter,t.description)}function UR(e){return e.longname??ge(e.id)}function one(e,n){const t=ge(e.id),r=yo(e).map(i=>{const o=String(i),a=o===String(n)?" selected":"";return`<option value="${K(o)}"${a}>${x(o)}</option>`}).join("");return`<span class="${Wee}"><span class="${Xee}">${x(UR(e))}</span><select class="${Kee}" ${Yee}="${K(t)}">${r}</select></span>`}const fe={interactionMode:"imode",queryMode:"query_mode",jtaskGroup:"jtask_group",mixAgentCli:"mix_cli",mixModelVersion:"mix_model_version",mixEffort:"mix_effort",adhocMode:"adhoc_mode",adhocName:"adhoc_name",adhocLabel:"adhoc_label",trialEntry:"trial_entry",trialIndex:"trial_index",comparePinned:"cmp_pinned",compareJtaskGroup:"cmp_jtask_group",compareAgentCli:"cmp_agent_cli",compareModelVersion:"cmp_model_version",compareEffort:"cmp_effort"},V_=Object.values(fe),no="aux_forms",ane=["response_type","prob_as_odds","density_scale","show_framing","srcquotes_view",no,"calc_pin","calc_unpin","calc_value","inspect_value"],GR=[...ane,...V_],une=[...GR,...D2],_v="view",IS="default",sne=V_.filter(e=>e!==fe.interactionMode),jR=[...V_,...D2,Hi],LS="model_effort",gv=":",bv={jtaskGroup:"jtask_group",agentCli:"agent_cli",modelVersion:"model_version",effort:"effort"},yv={jtaskGroup:fe.compareJtaskGroup,agentCli:fe.compareAgentCli,modelVersion:fe.compareModelVersion,effort:fe.compareEffort},Ev={point:"point",bounds:"bounds",distr:"sample"},cne=Object.fromEntries(Object.entries(Ev).map(([e,n])=>[n,e])),RS={inline:!0,glyph:!1},lne="inline",dne="glyph",CS={open:!0,closed:!1},fne="open",pne="closed",OS={true:!0,false:!1},NS=["probability","odds"],kS=["raw","log"],mne="Shared link";function VR(e,n){const t={},r=[],i=[],o=e.get("response_type");if(o!==null){const m=Ev[o];m!==void 0?t.inputMode=m:r.push(`response_type=${JSON.stringify(o)} invalid; expected one of: ${Object.keys(Ev).join(", ")}`)}yne(e,n,t,r,i);const a=e.get("prob_as_odds");a!==null&&(NS.includes(a)?t.probAsOdds=a:r.push(`prob_as_odds=${JSON.stringify(a)} invalid; expected one of: ${NS.join(", ")}`));const u=e.get("density_scale");u!==null&&(kS.includes(u)?t.densityScale=u:r.push(`density_scale=${JSON.stringify(u)} invalid; expected one of: ${kS.join(", ")}`));const s=e.get("show_framing");if(s!==null){const m=OS[s];m===void 0?r.push(`show_framing=${JSON.stringify(s)} invalid; expected one of: ${Object.keys(OS).join(", ")}`):t.showFramingNotes=m}const c=e.get("srcquotes_view");if(c!==null){const m=RS[c];m===void 0?r.push(`srcquotes_view=${JSON.stringify(c)} invalid; expected one of: ${Object.keys(RS).join(", ")}`):t.srcquotesInlinedOverride=m}const l=e.get(no);if(l!==null){const m=CS[l];m===void 0?r.push(`${no}=${JSON.stringify(l)} invalid; expected one of: ${Object.keys(CS).join(", ")}`):t.auxFormsFoldOpen=m}hne(e,n.jprobTemplate,t,r,i);const d=MS(e,"calc_value",n.jprobTemplate,r);d!==null&&(t.cparamValues=d);const p=MS(e,"inspect_value",n.jprobTemplate,r);return p!==null&&(t.inspectedCparamValues=p),{overrides:t,errors:r,readerFacingErrors:i}}function hne(e,n,t,r,i){const o=e.getAll("calc_pin"),a=e.getAll("calc_unpin");if(o.length===0&&a.length===0)return;const u=new Set(n.get_cparam_bare_names()),s=new Set(o.filter(l=>a.includes(l)));for(const l of s)r.push(`${JSON.stringify(l)} appears in both calc_pin and calc_unpin; skipped`);let c=!1;for(const[l,d]of[[o,!0],[a,!1]]){const p=d?"calc_pin":"calc_unpin";for(const m of l)if(!s.has(m)){if(!u.has(m)){if(m===LS){c=!0;continue}r.push(`${p}=${JSON.stringify(m)} is not a parameter of this jprob; expected one of: ${[...u].join(", ")}`);continue}(t.cparamPinned??(t.cparamPinned={}))[m]=d}}c&&i.push(`The link pins or unpins ${LS}, the model/version/effort plot axis, which this view no longer has: Compare's own pin rows replaced it. The rest of the link still applies.`)}function MS(e,n,t,r){const i=e.getAll(n);if(i.length===0)return null;const o=new Map,a=new Set;for(const s of i){const c=s.indexOf(gv);if(c===-1){r.push(`${n}=${JSON.stringify(s)} is not of the form <name>${gv}<value>; skipped`);continue}let l,d;try{l=decodeURIComponent(s.slice(0,c)),d=decodeURIComponent(s.slice(c+1))}catch(p){if(!(p instanceof URIError))throw p;r.push(`${n}=${JSON.stringify(s)} has a malformed %-escape; skipped`);continue}o.has(l)&&a.add(l),o.set(l,d)}const u={};for(const[s,c]of o){if(a.has(s)){r.push(`${n} names ${JSON.stringify(s)} more than once; skipped`);continue}const l=t.find_cparam(s);if(l===void 0){r.push(`${n}=${JSON.stringify(s)} is not a parameter of this jprob; expected one of: ${t.get_cparam_bare_names().join(", ")}`);continue}const d=yo(l),p=d.find(m=>String(m)===c);if(p===void 0){r.push(`${n} value ${JSON.stringify(c)} for ${JSON.stringify(s)} is not one of its allowed values: ${d.join(", ")}`);continue}u[s]=p}return Object.keys(u).length===0?null:u}function PS(e,n){return encodeURIComponent(e)+gv+encodeURIComponent(String(n))}function pa(e,n){const t=e.get(n);return t===null?null:t.split(",").filter(r=>r!=="").map(decodeURIComponent)}function ma(e,n,t){e.set(n,t.map(encodeURIComponent).join(","))}function vne(e){const n=pa(e,fe.mixAgentCli),t=pa(e,fe.mixModelVersion),r=pa(e,fe.mixEffort);return n===null&&t===null&&r===null?null:{agentClis:n??[],modelVersions:t??[],efforts:r??[]}}function _ne(e,n){const t=e.get(fe.trialIndex);if(t===null||t===er)return Yn;if(!/^\d+$/.test(t))return n.push(`${fe.trialIndex}=${JSON.stringify(t)} is neither ${er} nor a non-negative integer`),Yn;const r=Number(t),i=e.get(fe.trialEntry);return i===null?{kind:"adhoc-trial",entryTrialIndex:r}:{kind:"methodical-trial",identity:{entry_id:i,entry_trial_index:r}}}function gne(e,n){const t=e.get(fe.adhocMode),r=e.get(fe.adhocName),i=e.get(fe.adhocLabel);return t===null&&r===null&&i===null?null:t!=="plainnum"&&t!=="plaincode"?(n.push(`${fe.adhocMode}=${JSON.stringify(t)} invalid; expected plainnum or plaincode`),null):r===null||i===null?(n.push(`${fe.adhocMode} requires ${fe.adhocName} and ${fe.adhocLabel}`),null):{nameOrPseudoname:r,queryMode:t,label:i}}function bne(e,n){const t=fe.comparePinned;if(!(e.has(t)||Ot.some(u=>e.has(yv[u]))))return null;const i=pa(e,t),o=Object.values(bv);for(const u of i??[])o.includes(u)||n.push(`${t} names ${JSON.stringify(u)}, which is not one of Compare's rows; expected any of: ${o.join(", ")}`);const a=u=>({pinned:i===null?S2[u].pinned:i.includes(bv[u]),value:e.get(yv[u])});return{jtaskGroup:a("jtaskGroup"),agentCli:a("agentCli"),modelVersion:a("modelVersion"),effort:a("effort")}}function yne(e,n,t,r,i){const o=e.get(fe.interactionMode);if(o===null){Ene(e,n,t,i);return}const a=Ct.find(s=>s===o);if(a===void 0){i.push(`The link names an unknown mode (${JSON.stringify(o)}); showing the default view instead. Expected one of: ${Ct.join(", ")}.`);return}t.interactionMode=a;const u=e.get(fe.queryMode);if(u==="plainnum"||u==="plaincode"?t.estimateQueryMode=u:u!==null&&r.push(`${fe.queryMode}=${JSON.stringify(u)} invalid; expected plainnum or plaincode`),a!=="Estimate"){if(a==="Compare"){const s=bne(e,r);s!==null&&(t.compare=s);return}t.readTrials={jtaskGroupId:e.get(fe.jtaskGroup),mixtureGroupSelection:vne(e),adhoc:gne(e,r),trial:_ne(e,r)}}}function Ene(e,n,t,r){const{identity:i,errors:o}=sB(e);if(r.push(...o),i===null)return;const a=fB(i,n.presetData);t.interactionMode=a.mode,a.estimateQueryMode!==null&&(t.estimateQueryMode=a.estimateQueryMode),a.mode==="ReadTrials"&&(t.readTrials=a.readTrials)}function Sne(e){const n=e.get(_v);return n===null?!1:n===IS?!0:(console.error(`[url_view_overrides] ${_v}=${JSON.stringify(n)} invalid; expected ${IS}`),!1)}function wne(e,n,t){if(typeof window>"u")return{linkAppliedUi:M2(),namedSelection:!1,askedForDefaultView:!1,carriedViewKeys:!1};const r=new URLSearchParams(window.location.search),i=structuredClone(e.ui),o=Sne(r);o&&jh(e.ui,t);const{overrides:a,errors:u,readerFacingErrors:s}=VR(r,n);for(const l of u)console.error(`[url_view_overrides] ${l}`);for(const l of s)Xt(mne,new Error(l));jh(e.ui,a);const c={linkAppliedUi:rB(i,e.ui),namedSelection:r.has(fe.interactionMode)||uB(r)||o&&t.interactionMode!==void 0,askedForDefaultView:o,carriedViewKeys:WR.some(l=>r.has(l))};return o&&Cne(),c}function Ane(e,n){const{ui:t,srcquotesInlined:r}=e,{jprobTemplate:i}=n,o=new URLSearchParams,a=[];if(o.set("response_type",cne[t.inputMode]),o.set("prob_as_odds",t.probAsOdds),o.set("density_scale",t.densityScale),o.set("show_framing",String(t.showFramingNotes)),i.has_srcquotes()&&o.set("srcquotes_view",r?lne:dne),p$(i).length>0){const u=t.foldOpenById[Fr]??d$;o.set(no,u?fne:pne)}return $ne(t,n,o),Lne(t,i,n,o),{params:o,errors:a}}function $ne(e,n,t){if(t.set(fe.interactionMode,e.interactionMode),e.interactionMode==="Estimate"){t.set(fe.queryMode,e.estimateQueryMode);return}if(e.interactionMode==="Compare"){Tne(e.compare,n,t);return}const{resultSet:r}=kn(e.readTrials,n);if(r.kind==="methodical"){t.set(fe.jtaskGroup,r.jtaskGroupId);const{agentClis:o,modelVersions:a,efforts:u}=r.mixtureGroupSelection;ma(t,fe.mixAgentCli,o),ma(t,fe.mixModelVersion,a),ma(t,fe.mixEffort,u)}const i=e.readTrials.adhoc;i!==null&&(t.set(fe.adhocMode,i.queryMode),t.set(fe.adhocName,i.nameOrPseudoname),t.set(fe.adhocLabel,i.label)),Ine(e.readTrials.trial,t)}function Tne(e,n,t){const{rows:r}=w2(e,n.presetData);ma(t,fe.comparePinned,Ot.filter(i=>e[i].pinned).map(i=>bv[i]));for(const i of Ot){const o=e[i].pinned?r[i].value:e[i].value;o!==null&&t.set(yv[i],o)}}function Ine(e,n){if(e.kind==="mix"){n.set(fe.trialIndex,er);return}if(e.kind==="adhoc-trial"){n.set(fe.trialIndex,String(e.entryTrialIndex));return}n.set(fe.trialEntry,e.identity.entry_id),n.set(fe.trialIndex,String(e.identity.entry_trial_index))}function Lne(e,n,t,r){const i=Xr(e,t);if(Wn(tt(i))){for(const o of n.get_cparam_bare_names())r.append(e.cparamPinned[o]!==!1?"calc_pin":"calc_unpin",o);for(const o of n.get_cparams()){const a=ge(o.id);r.append("calc_value",PS(a,Rne(o,e)))}if(xR(e.interactionMode,n,i))for(const[o,a]of Object.entries(ku(n,{ui:e})))r.append("inspect_value",PS(o,a))}}function Rne(e,n){return A2(n.cparamValues[ge(e.id)],e.default_value,yo(e))}const WR=[...une,Hi];function XR(e){if(typeof window>"u")return;const n=new URL(window.location.href);if(!e.some(i=>n.searchParams.has(i)))return;for(const i of e)n.searchParams.delete(i);const t=n.searchParams.toString(),r=`${n.pathname}${t?"?"+t:""}${n.hash}`;window.history.replaceState(null,"",r)}function Ve(e){XR([e])}function Cne(){XR([...WR,_v])}const One="default_view";function Nne(e,n){if(e===void 0)return{overrides:{},errors:[]};const t=[],r=new URLSearchParams(e),i=GR;for(const u of new Set(r.keys()))i.includes(u)||(t.push(`${JSON.stringify(u)} is not a key of the view vocabulary; expected any of: `+i.join(", ")),r.delete(u));if(!r.has(fe.interactionMode)){const u=sne.filter(s=>r.has(s));if(u.length>0){t.push(`${u.join(", ")} say nothing without ${fe.interactionMode}, which names the mode they select in`);for(const s of u)r.delete(s)}}const o=VR(r,n);return t.push(...o.errors,...o.readerFacingErrors),{overrides:kne(o.overrides,n,t),errors:t}}function kne(e,n,t){var a;const r={...e},i=bo(n.presetData);r.interactionMode!==void 0&&!i.includes(r.interactionMode)&&(t.push(`${fe.interactionMode}=${r.interactionMode} is a mode this jprob does not offer with the data it has; it offers: ${i.join(", ")}`),delete r.interactionMode),r.estimateQueryMode==="plaincode"&&!n.jprobTemplate.has_cparams()&&(t.push(`${fe.queryMode}=plaincode needs a jprob with parameters, and this one has none`),delete r.estimateQueryMode);const o=((a=r.readTrials)==null?void 0:a.adhoc)??null;return r.readTrials!==void 0&&o!==null&&HA(o,n.presetData)===null&&(t.push("the adhoc entry it names is not in this jprob's adhoc results: "+Ia(o)),r.readTrials={...r.readTrials,adhoc:null}),r}function Mne(e,n,t){const{overrides:r,errors:i}=Nne(e,n);if(i.length===0)return r;const o=`this jprob's ${One} (${JSON.stringify(e)}) has ${i.length===1?"a part":"parts"} that cannot be honored: ${i.join("; ")}`;return console.error(`[default_view] ${o}`),r}const KR="link-arrival-notice",Pne="link-arrival-notice-text",Dne="link-arrival-notice-close",Fne="×",qne="Close this notice",xne="This link opened the author's chosen view, which differs from your saved view settings.",Bne="This link opened a view that differs from your saved view settings.",Hne="Your settings are kept: reload the page to return to them.",Une='Your settings are kept: to return to them, delete everything after "?" in the address bar, then reload the page.';function Gne(e){const n=e.openedTheDefaultViewAlone?xne:Bne,t=e.viewParamsLeftTheAddressBar?Hne:Une;return`${n} ${t}`}function jne(e,n=document){YR(n);const t=n.createElement("aside");t.id=KR,t.setAttribute("role","status");const r=n.createElement("p");r.className=Pne,r.textContent=Gne(e);const i=n.createElement("button");i.type="button",i.className=Dne,i.setAttribute("aria-label",qne),i.textContent=Fne,i.addEventListener("click",()=>t.remove()),t.append(r,i),n.body.append(t)}function YR(e=document){var n;(n=e.getElementById(KR))==null||n.remove()}function JR(e,n){if(n.length!==e.positions.length)throw new Error(`entry-axis sweep: the ${e.title} axis has ${e.positions.length} positions but was given ${n.length} entries`)}function zR(e,n,t){var i;if(e===null)return null;const r=_n(e,n);return r===null?null:((i=t(e,r))==null?void 0:i.mean)??null}function Vne(e,n){const t=new Map;for(const r of n){const i=e.positions[r.x].segmentKey,o=t.get(i);o?o.push(r):t.set(i,[r])}return Array.from(t,([r,i])=>({points:i,label:r,...hz}))}function Wne(e,n,t,r,i){JR(e,n);const o=[],a=[];return n.forEach((u,s)=>{if(u===null)return;const c=_n(u,t);if(c===null)return;const l=r(u,c);if(l===void 0)return;o.push({x:s,y:l.mean});const d=i==null?void 0:i(u);if(d!==void 0)for(const p of c.trials){const m=d(p,c);m!==void 0&&a.push({x:s,y:m})}}),{series:Vne(e,o),xLabels:e.positions.map(u=>u.tickLabel),scatterPoints:a,legend:[]}}function Xne(e,n,t,r,i,o){return JR(e,n),{cells:n.map(a=>r.map(u=>zR(a,{...i,[t]:u},o))),xLabels:r.map(String),yLabels:e.positions.map(a=>a.tickLabel),xAxisLabel:t,yAxisLabel:e.title}}function Kne(e,n,t){const{jtaskGroupAxis:r,configurationAxis:i,entries:o}=e;return{cells:i.positions.map((a,u)=>r.positions.map((s,c)=>zR(o[c][u],n,t))),xLabels:r.positions.map(a=>a.tickLabel),yLabels:i.positions.map(a=>a.tickLabel),xAxisLabel:r.title,yAxisLabel:i.title}}const Za="data-mixture-row",W_="data-mixture-value",QR="mixture-group-selector",Yne="mixture-group-row",Jne="mixture-group-row-label",zne="mixture-group-box",Qne="mixture-group-box-unavailable",ZR={agentCli:"Agent CLI",modelVersion:"Model",effort:"Effort"},eu="unavailable";function Zne(e,n){e.className=QR,e.innerHTML=Lq.map(t=>ete(t,n.interpretation.rows[t],n.disabled)).join("");for(const t of e.querySelectorAll('input[type="checkbox"]'))t.indeterminate=t.dataset.mixtureState==="partial"}function ete(e,n,t){const r=n.length===0?'<span class="mixture-group-row-empty">none published</span>':n.map(i=>nte(e,i,t)).join("");return`<div class="${Yne}"><span class="${Jne}">${ZR[e]}</span>`+r+"</div>"}function nte(e,n,t){const r=t||n.disabled&&!n.unavailable,i=n.unavailable?` ${Qne}`:"",o=n.unavailable?`${n.hoverText} — ${eu} in this task group`:n.hoverText,a=n.unavailable?`<span class="mixture-group-box-unavailable-mark">(${eu})</span>`:"";return`<label class="${zne}${i}" title="${K(o)}"><input type="checkbox" ${Za}="${e}" ${W_}="${K(n.value)}" data-mixture-state="${n.state}"${n.state==="checked"?" checked":""}${r?" disabled":""}>${x(n.label)}${a}</label>`}function tte(e,n,t){for(const r of e.querySelectorAll(`.${QR} input[${Za}]`))if(r.getAttribute(Za)===n&&r.getAttribute(W_)===t){r.focus({preventScroll:!0});return}}const eC="compare-view",rte="Compare results",DS="compare-plot",ite="compare-unavailable-state",ote="compare-pin-row",ate="compare-pin-row-unavailable",nC="compare-row-slider",tC="compare-row-pin-checkbox",Jt="data-compare-row",ute="compare-jtask-group-list",ste="compare-jtask-group-designator",rC="view-in-read-trials",cte="View in ReadTrials",iC="data-jtask-group",oC="data-configuration",aC="data-combination",Sv="data-trial-identity",lte="compare-view-in-read-trials",FS={jtaskGroup:"Task group",...ZR},dte=`A pinned value is unavailable, so there is nothing to compare. Unpin the row marked "${eu}" to remove it.`,fte="No results are published for the pinned task group and model.",pte="The pinned results have no data for this parameter combination.";function mte(e,n,t){const r=(c,l)=>{if(e!=="jtaskGroup"||t.jtaskGroups.length<2)return l;const d=t.jtaskGroups.find(p=>p.jtaskGroupId===c);return d===void 0?l:`${d.designator}: ${l}`},i=n.unavailable?` ${ate}`:"";let o=`<div class="cparam-row ${ote}${i}" ${Jt}="${e}">`;o+=`<label class="cparam-label">${x(FS[e])}</label>`;const a=n.offered.length>1&&!n.unavailable;if(a){const c=n.offered.findIndex(l=>l.value===n.value);o+=`<input type="range" class="${nC}" ${Jt}="${e}" aria-label="${K(FS[e])}" min="0" max="${n.offered.length-1}" step="1" value="${Math.max(c,0)}" ${n.pinned?"":"disabled "}data-values='${x(JSON.stringify(n.offered.map(l=>l.value)))}'>`}else o+='<span class="compare-row-slider-placeholder"></span>';const u=n.offered.find(c=>c.value===n.value),s=n.value===null?"—":r(n.value,n.valueLabel??n.value);return o+=`<span class="cparam-value-label" title="${K((u==null?void 0:u.hoverText)??n.value??"")}">${x(s)}</span>`,n.unavailable&&(o+=`<span class="compare-pin-row-unavailable-mark">(${eu})</span>`),(a||n.unavailable)&&(o+=`<label class="cparam-pin-label"><input type="checkbox" class="${tC}" ${Jt}="${e}"${n.pinned?" checked":""}> pin</label>`),o+"</div>"}function hte(e,n,t){var i;const r=new Map;for(const o of n){const a=(i=t.find_cparam(o))==null?void 0:i.allowed_values,u=new Set(e.flatMap(c=>D_(c,o,a))),s=(a??[]).filter(c=>u.has(c));r.set(o,a===void 0?[...u]:s)}return r}function X_(e){return`<p class="${ite}">${x(e)}</p>`}function qS(e){const{grid:n}=e;return e.configurationAxisSwept?{axis:n.configurationAxis,entries:n.entries[0]}:{axis:n.jtaskGroupAxis,entries:n.entries.map(t=>t[0])}}function vte(e,n,t,r,i,o){const{jprobTemplate:a,state:u,globalOpts:s}=o,c=cR([...r],u.ui.cparamPinned),l=ox(n,c.length);if(l>mv){const v=l-mv;e.innerHTML=`<div class="code-info"><p>Pin at least ${v} more row${v===1?"":"s"} to visualize results.</p><p>Currently ${l} are unpinned, counting the agent CLI, model and effort rows as one.</p></div>`;return}const d={};for(const v of r)hs(v,u.ui.cparamPinned)&&(d[v]=ui(v,u,a.find_cparam(v),i.get(v)??[]));const p=[...n.jtaskGroupAxisSwept?[n.grid.jtaskGroupAxis.positions.length]:[],...n.configurationAxisSwept?[n.grid.configurationAxis.positions.length]:[]],m=hR(a,t,s,vR(c,i,p)),{heatmapValueRange:f,linePlotYRangePaddingPercent:h}=_R(a,t);if(p.length===0)_te(e,n,t,c,i,d,m,f,h,o);else if(l===1){const{axis:v,entries:_}=qS(n),g=Wne(v,_,d,m.statsForCombo,m.trialSampleMeanFor);x_(e,g,v.title,h,q_(g.scatterPoints,t))}else if(p.length===2)Qa(e,Kne(n.grid,d,m.statsForCombo),f,"");else{const{axis:v,entries:_}=qS(n),g=c[0];Qa(e,Xne(v,_,g,i.get(g)??[],d,m.statsForCombo),f,"")}m.attachFollowUps(e)}function _te(e,n,t,r,i,o,a,u,s,c){var m;const l=((m=n.grid.entries[0])==null?void 0:m[0])??null;if(l===null){e.innerHTML=X_(fte);return}if(r.length===0){gte(e,n,l,t,o,a,c);return}const[d,p]=r;if(p===void 0){const f=bR(l,d,i.get(d)??[],o,"average",a.statsForCombo,a.trialSampleMeanFor(l));x_(e,f,d,s,q_(f.scatterPoints,t));return}Qa(e,yR(l,d,i.get(d)??[],p,i.get(p)??[],o,a.statsForCombo),u,"")}function gte(e,n,t,r,i,o,{jprobTemplate:a,ctx:u,state:s,globalOpts:c}){const l=_n(t,i);if(l===null){e.innerHTML=X_(pte);return}AR(e,t,l,s,c,r,o.sampleTarget,o.paramRanges,a,So(r,a,u),$Z,"methodical");const d=CL(l.trials.length,t.count);d!==null&&e.insertAdjacentHTML("afterbegin",`<div class="code-info"><span class="${TL}">${x(d)}.</span></div>`),e.insertAdjacentHTML("beforeend",bte(n,t,l))}function bte(e,n,t){const r=e.grid.jtaskGroupAxis.positions[0].identity,i=e.grid.configurationAxis.positions[0].identity,o=t.trials.length===1?y2(n,Pt(t.trials[0])):null,a=(u,s)=>` ${u}="${K(JSON.stringify(s))}"`;return`<div class="${lte}"><button type="button" class="${rC}" ${iC}="${K(r)}"`+a(oC,i)+a(aC,t.cparams)+(o===null?"":a(Sv,o))+`>${x(cte)}</button></div>`}function yte(e,{jprobTemplate:n,state:t,presetData:r}){if(e.jtaskGroups.length<2)return"";const i=G$(r),o=e.grid.jtaskGroupAxis.positions.map(a=>{const u=i.find(s=>s.jtaskGroupId===a.identity);if(u===void 0)throw new Error(`Compare: task group ${JSON.stringify(a.identity)} is on the axis but is not a published task group`);return`<li><span class="${ste}">${x(a.tickLabel)}</span>`+j$(u,i,{jprobTemplate:n,jtaskHashGroups:r.jtaskHashGroups,foldOpenById:t.ui.foldOpenById,provenanceFoldId:`${U$}-${a.tickLabel}`})+"</li>"});return`<ul class="${ute}">${o.join("")}</ul>`}const Ete=/^[A-Za-z_][\w-]*$/;function Ste(e){if(!(e instanceof HTMLElement)||e.closest(`.${eC}`)===null)return null;const n=e.classList[0];if(n===void 0||!Ete.test(n))return null;const t=(r,i)=>i===null?"":`[${r}=${JSON.stringify(i)}]`;return`.${n}`+t(Jt,e.getAttribute(Jt))+t("data-cparam",e.getAttribute("data-cparam"))+(e instanceof HTMLInputElement&&e.type==="radio"?t("value",e.value):"")}function wte(e,n){var h,v;const{jprobTemplate:t,state:r,presetData:i,formRegistry:o}=n,a=Ste(document.activeElement),u=w2(r.ui.compare,i),s=Z$(t,r,"sample",o),c=i.richcodeResults.filter(Ou);uee(c);const l=((h=c[0])==null?void 0:h.cparam_names)??[],d=hte(c,l,t),p=Ot.map(_=>mte(_,u.rows[_],u)).join("");e.innerHTML=`<section class="${eC}" aria-labelledby="compare-view-heading"><h2 id="compare-view-heading">${x(rte)}</h2><div class="compare-controls">`+nT(t,r,"sample",s,o)+`<div class="cparam-controls">${p}`+SR(l,t,r,d).html+`</div></div><div class="${DS}"></div>`+yte(u,n)+"</section>";const m=e.querySelector(`.${DS}`),f=mR(s);u.unavailable?m.innerHTML=X_(dte):s===null||f!==null?m.innerHTML=f:vte(m,u,s,l,d,n),a!==null&&((v=e.querySelector(a))==null||v.focus({preventScroll:!0}))}function xS(e,n="",t=""){return{name:n,description:t,loadings:Object.fromEntries(e.map(r=>[r,0]))}}function uC(e,n){const t=new Set(n);return{latents:e.latents.map(r=>{const i=Object.entries(r.loadings).filter(([o,a])=>!t.has(o)&&a!==0);return i.length>0&&console.warn(`joint-dependence draft: dropping loadings on subjective variable(s) ${i.map(([o])=>o).join(", ")}, which this jprob no longer samples`),{...r,loadings:Object.fromEntries(n.map(o=>[o,r.loadings[o]??0]))}})}}function sC(e,n){return e==null?{latents:[]}:uC({latents:e.latents.map(t=>({name:t.name,description:t.description,loadings:{...t.loadings}}))},n)}function Ate(e){return e.latents.length===0?null:{latents:e.latents.map(n=>({name:n.name.trim(),description:n.description.trim(),loadings:Object.fromEntries(Object.entries(n.loadings).filter(t=>t[1]!==null))}))}}function cC(e,n){return Object.fromEntries(n.map(t=>[t,e.latents.reduce((r,i)=>{const o=i.loadings[t]??0;return r+o*o},0)]))}function $te(e,n){return n.map(t=>n.map(r=>t===r?1:e.latents.reduce((i,o)=>i+(o.loadings[t]??0)*(o.loadings[r]??0),0)))}function Tte(e){return e.latents.some(n=>Object.values(n.loadings).some(t=>t!==null&&t!==0))}function lC(e,n,t=[],r={}){const i=c=>r[c]??c,o=[];e.latents.length>Da&&o.push({message:`${e.latents.length} latents exceeds the limit of ${Da}.`});const a=new Set;e.latents.forEach((c,l)=>{const d=`Latent ${l+1}`;c.name.trim()===""&&o.push({message:`${d} needs a short name.`,latentIndex:l,field:"name"}),c.description.trim()===""&&o.push({message:`${d} needs a description saying what its positive direction means.`,latentIndex:l,field:"description"});for(const p of n){const m=c.loadings[p]??null;m===null?(a.add(p),o.push({message:`${d}: no loading given for ${i(p)} — enter a number from −1 to +1 (0 if the latent does not apply to it).`,latentIndex:l,svar:p})):(!Number.isFinite(m)||m<-1||m>1)&&(a.add(p),o.push({message:`${d}: the loading on ${i(p)} must be between −1 and +1.`,latentIndex:l,svar:p}))}});const u=cC(e,n),s=new Set(t);for(const c of n){const l=u[c];!a.has(c)&&l>1+UT&&o.push({message:`The squared loadings on ${i(c)} sum to ${l.toFixed(3)}, over its budget of 1 by ${(l-1).toFixed(3)} — no independent variation is left for it.`,svar:c}),l>0&&s.has(c)&&o.push({message:`${i(c)} has a single-value distribution in this response, so a loading on it has no effect — zero the loading or give it a spread distribution.`,svar:c})}return o}function dC(e,n,t=[]){const r=lC(e,n,t);if(r.length>0)return{kind:"invalid",problems:r};const i=Ate(e),o=Co(i,n,t);if(o!==null)throw new Error("joint-dependence draft passed the editor's checks but not validateLloads: "+o);return{kind:"valid",lloads:i}}const gs="auto-expand",Ite="estimator-text-input",Lte="estimator-text-form",Rte=1;function fC(e){const n=document.createElement("div");n.className=Lte;const t=document.createElement("textarea");t.className=`${Ite} ${e.className} ${gs}`,t.rows=Rte,t.spellcheck=!1,t.setAttribute("aria-label",e.ariaLabel);for(const[r,i]of Object.entries(e.dataset??{}))t.dataset[r]=i;return t.value=e.value,n.appendChild(t),pC(t),n}function pC(e){const n=()=>{e.style.height="auto",e.style.height=`${e.scrollHeight}px`};e.addEventListener("input",n),n()}function mC(e){for(const n of e.querySelectorAll(`textarea.${gs}`))pC(n)}const K_="estimator-reasoning",hC="estimator-reasoning-body",Cte="has-estimator-reasoning",vC="estimator-reasoning-input",_C="reasoningBare",Ote="Your reasoning for ",Nte={containerClass:K_,ownContentSelector:`:scope > .${hC}`};function kte(e,n){const t=e==null?void 0:e[n];return t!==void 0&&t.trim()!==""?t:void 0}function Mte(e,n){const t=document.createElement("div");if(t.className=K_,n.mode==="edit")return t.appendChild(fC({className:vC,value:n.reasoning[e]??"",ariaLabel:`${Ote}${e}`,dataset:{[_C]:e}})),t;const r=kte(n.reasoning,e);return r===void 0?null:(t.appendChild(ML(r,hC)),t)}function gC(e,n,t,r){const i=e.querySelector(`:scope > .${K_}`),o=Mte(n,t);if(e.classList.toggle(Cte,o!==null),o===null){i==null||i.remove();return}i!==null?i.replaceWith(o):r!==null&&r.parentElement===e?r.after(o):e.appendChild(o)}const Pte="root",Y_="framingnote",J_="framing-fold-btn",Dte={containerClass:Y_,ownContentSelector:":scope > .framing-note-summary > .framing-note-content"};function bC(e){return`framing-fgroup-${e}`}const Fte=14;function qte(e,n,t,r){return`<strong>${x(e)}${n}${x(r)}:</strong><div class="framing-note-content">${t}</div>`}function xte(e){return e.referenced?` (${Oi(e.id)})`:""}function z_(e){return e.jprobInstance.enabled_flabels()}function Q_(e){return e.showFramingNotes!==!1}function Z_(e,n){const t=z_(n);return!Q_(n)||!t.length?null:e.get_framing_layout(t)}function yC(e,n,t){var r;return((r=e[n])==null?void 0:r[t])??!0}function EC(e,n,t,r){const i=yC(t,r,e.note.id),o=e.children.map(_=>EC(_,n,t,r)).join(""),a=i?` ${Qt}`:"",u=i?` ${Au}`:"",s=Fte*(e.depth-1),c=x(e.note.flabel),l=Xn(e.note.srcquotes,n),d=vu+Oi(e.note.id),p=l.atStart+Ge(e.note.defn,n,d)+l.atEnd,[m,f]=n.jprobInstance.fgroup_of_flabel(e.note.flabel),h=qte(f.label_prefix,c,p,xte(e.note)),v=K(bC(m));return`<div class="${Y_}${a} ${v}" id="${K(d)}" style="margin-left: ${s}px" data-framing-anchor="${K(r)}" data-framing-id="${K(e.note.id)}"><div class="framing-note-summary"><button class="${J_}${u}" data-framing-anchor="${K(r)}" data-framing-id="${K(e.note.id)}" title="Toggle framing note">&plusmn;</button>`+h+"</div>"+o+"</div>"}function e3(e,n,t,r){return e.layout_nodes.map(i=>EC(i,n,t,r)).join("")}function Bte(e,n,t,r){return e===void 0||e.layout_nodes.length===0?"":"<div>"+e3(e,n,t,r)+"</div>"}function Hte(e,n,t){const r=Z_(e,n),i=document.querySelectorAll(`.${AA}`);for(const o of i){const a=o.getAttribute($A);if(!a)continue;const u=r==null?void 0:r.nonroot_anchor_sections.get(a);o.innerHTML=r&&u?e3(u,n,t.framingFoldState,a):""}}function Ute(e,n,t,r){const i=document.getElementById("framing-notes-root-section"),o=Z_(n,t),a=o===null?"":e3(o.root_section,t,r.framingFoldState,Pte);if(!a){e.innerHTML="",i&&(i.hidden=!0);return}i&&(i.hidden=!1),e.innerHTML=a}function Gte(e,n){const t=n.jprobInstance,r=Th in t.get_fgroups()?t.nonstandard_notes(Th,z_(n)):[];e.innerHTML=r.map(o=>`<div class="estimator-instruction">${Ge(o.defn,n)}</div>`).join("");const i=document.getElementById(Gh);i&&(i.hidden=r.length===0)}function jte(e,n){const t=document.getElementById("framing-notes-explainer-section"),r=new Set(z_(n));if(!Q_(n)||!r.size){e.innerHTML="",t&&(t.hidden=!0);return}const i=[];for(const[o,a]of n.jprobInstance.standard_fgroups_in_order())a.defn&&a.flabels.some(u=>r.has(u))&&i.push(`<div class="framing-explainer ${K(bC(o))}">`+Ge(a.defn,n)+"</div>");t&&(t.hidden=i.length===0),e.innerHTML=i.join("")}const Vte=280,Wte=110,Xte="(no response)",Kte="This trial gave no response for these parameter values",SC="assumption-readonly-no-response",n3="assumption-mixture-caption",Yte="assumption-mixture-stats",wC="svar-group-fold",Jte="svar-group-header",AC="svar-group-filled-count",zte=!1;function Qte(e){return`svargroup-${e.slice(BN.length)}`}function Zte(e,n,t,r){var a;const i=Qte(e.id),o=((a=t.foldOpenById)==null?void 0:a[i])??zte;return`<details id="${K(i)}" class="${wC} ${_t}"${o?" open":""}><summary><span class="${Jte}">${kr(e.defn,t)}</span>`+(r?`<span class="${AC}"></span>`:"")+"</summary>"+n+"</details>"}function t3(e){for(const n of e.querySelectorAll(`.${wC}`)){const t=n.querySelector(`:scope > summary > .${AC}`);if(t===null)continue;const r=[...n.querySelectorAll(".assumption-input")],i=r.filter(o=>o.value.trim()!=="").length;t.textContent=`${i}/${r.length} filled`}}function ere(e,n,t,r){const i=nI(e,n),o=a=>Pe(a,t,r,"deterministic");return`median = ${o(i.median)}, 90% interval [${o(i.p5)}, ${o(i.p95)}]`}function $C(e,n,t){if(t==="point")return String(e.point[n]??"");if(t==="bounds"){const i=e.bounds[n];return i?`${i[0]} ${i[1]}`:""}const r=e.sample[n];return r?typeof r=="string"?r:r.map(([i,o])=>`(${i} ${o})`).join(" "):""}function wv(e){return Ur(e.svar_entries().map(n=>n.decl))}function TC(e,n){return e.svar_entries().map(({bareName:t},r)=>({bareName:t,cardMode:n,inputIndex:r}))}function IC(e,n,t){const r=Nn(n.ui);return r==="plaincode"?[CR(e,n)]:r!==null?[]:U_(e,n,t)}function LC(e,n){return e.map(t=>t&&n.map(r=>$C(t,r.bareName,r.cardMode)))}const nu="data-trial-";function r3(e){return`${nu}${e}`}const RC=0;function nre(e,n){for(const t of e.querySelectorAll(".assumption-readonly")){const r=Number(t.dataset.paramIndex);for(const i of t.getAttributeNames())i.startsWith(nu)&&t.removeAttribute(i);n.forEach((i,o)=>{i!==void 0&&t.setAttribute(r3(o),i[r]??"")})}}function tu(e,n){for(const t of e.querySelectorAll(".assumption-readonly"))tre(t,n)}function tre(e,n){const t=e.getAttribute(r3(n));e.textContent=t??Xte,e.classList.toggle(SC,t===null),t===null?e.title=Kte:e.removeAttribute("title")}function rre(e){return e.classList.contains(SC)?"":e.textContent??""}function ire(e){return e.getAttributeNames().filter(n=>n.startsWith(nu)).map(n=>({recordTrialIndex:Number(n.slice(nu.length)),value:e.getAttribute(n)??""}))}function ore(e){return e.querySelector(":scope > .resizable-canvas-wrapper")??e.querySelector(":scope > .param-density-canvas")??e.querySelector(":scope > .assumption-header")}function Av(e,n){for(const t of e.querySelectorAll(".assumption-card")){const r=t.dataset.svarBare??"";gC(t,r,n,ore(t))}}function are(e,n,t,r,i){var $;const o=document.getElementById(`${Fe.ESTIMATION}-section`),a=Nn(r.ui),u=a==="plaincode",s=Qn(r,i),c=a===null,l=c||u,d=u&&!po(r.yoursCodeRecord),p=n.get_svar_bare_names(),m=Z_(n,t),f=ao(n);if(f.length===0){e.innerHTML="",o&&(o.hidden=!0);return}o&&(o.hidden=!1);const h=TC(n,s),v=LC(IC(n,r,i),h),_=((($=r.yoursRecord.raw_input)==null?void 0:$[s])??"").split(`
`),g=c?'<div class="assumption-preset-hint">preset selected; select Yours in Calculator to edit</div>':"",b=wv(n),y=[];for(let T=0;T<f.length;T++){const C=h[T],L=C.cardMode,A=L==="sample",w=L==="bounds"?" bounds-mode":L==="sample"?" sample-mode":"",S=nt(f[T],t),I=p[T],R=I?n.get_svar(I):void 0,P=I?`isym:${I}`:null,k=P!==null&&n.can_consolidate_isym_svar(P),B=k?n.get_isym(P):void 0,D=(B==null?void 0:B.defn)??(R==null?void 0:R.defn),q=B?B.srcquotes:R==null?void 0:R.srcquotes,M=Xn(q,t),Z=D?M.atStart+Ge(D,t)+M.atEnd:"",G=I?`svar:${I}`:null,z=k?` id="isym-${K(I??"")}"`:"",te=G&&m?Bte(m.nonroot_anchor_sections.get(G),t,r.ui.framingFoldState,G):"",ae=A?`<canvas class="param-density-canvas" data-param-index="${C.inputIndex}" ${OC}="${K(JSON.stringify(b[C.inputIndex]))}" width="${Vte}" height="${Wte}"></canvas>`+(c?`<div class="${n3}" hidden></div>`:""):"";let j;if(l){const Ee=v.flatMap((me,ne)=>me===void 0?[]:[`${r3(ne)}="${K(me[T]??"")}"`]).join(" ");j=`<span class="assumption-readonly${w}" data-param-index="${T}" ${Ee}></span>`}else{const Ee=(_[C.inputIndex]??"").trim();j=`<input class="assumption-input${w}" data-param-index="${C.inputIndex}" data-group="${s}" value="${K(Ee)}" placeholder="${bre(L)}">`}const Y=!l&&L==="sample"?'<span class="assumption-help-slot"></span>':"",V=`<span class="assumption-op">${x(Fw(L))}</span>`;y.push(`<div class="assumption-card${c?" preset-mode":""}"${z} data-svar-bare="${K(I??"")}">`+KD(I??"",`${xv}${I??""}`)+`<div class="assumption-header"><span class="assumption-cond">${S}</span><span class="assumption-input-row"${d?" hidden":""}>`+V+j+Y+"</span></div>"+ae+(Z?`<div id="gloss-${I??""}" class="assumption-narrative">${Z}</div>`:"")+g+te+"</div>")}e.innerHTML=n.svar_card_runs().map(T=>{const C=T.svarIndices.map(L=>y[L]).join("");return T.group===null?C:Zte(T.group,C,t,!l)}).join("");for(const T of e.querySelectorAll(".assumption-help-slot"))T.appendChild(ut(uZ));const E=wv(n);if(c){CC(e,vt(r,i),H_(r,i),Vn(r.ui),G_(r,i),E);return}u?(tu(e,RC),s==="sample"&&ru(e,Vn(r.ui),E)):s==="sample"&&o3(e,Vn(r.ui),E),bs(e,r,E),t3(e),Av(e,{mode:"edit",reasoning:Lu(r,La(r.ui)).reasoning_response})}function ure(e,n,t,r){const i=Qn(t,r),o=Nn(t.ui),a=o==="plaincode";if(o==="plainnum")return;const u=TC(n,i),s=wv(n);nre(e,LC(IC(n,t,r),u));const c=Vn(t.ui);if(a){tu(e,RC),i==="sample"&&ru(e,c,s);return}const l=vt(t,r);l.kind==="trial"&&tu(e,l.recordTrialIndex),i==="sample"&&(l.kind==="trial"?ru(e,c,s):kC(e,c,G_(t,r),s))}function CC(e,n,t,r,i,o){const a=n.kind==="mix";for(const u of e.querySelectorAll(".assumption-input-row"))u.hidden=a;if(a){kC(e,r,i,o),Av(e,{mode:"read",reasoning:void 0});return}tu(e,n.recordTrialIndex),ru(e,r,o),Av(e,{mode:"read",reasoning:t[n.recordTrialIndex]})}const OC="data-value-range",sre={lo:null,hi:null};function NC(e){const n=e.getAttribute(OC);return n===null?void 0:JSON.parse(n)}function cre(e,n,t){const r=NC(e),i=AI(n,r);kI(e,n,i,r,t,null)}function lre(e){const n=e.parentElement;return n!=null&&n.classList.contains("resizable-canvas-wrapper")?n:e}function i3(e,n,t){const r=lre(e);if(!n){r.hidden=!0;return}r.hidden=!1,cre(e,n,t)}function dre(e){const n=e.querySelector(`.${n3}`);if(n===null)throw new Error("preset svar card is missing its mixture caption");return n}function ru(e,n,t){const r=e.querySelectorAll(".param-density-canvas");for(const i of r){const o=i.closest(".assumption-card"),a=o==null?void 0:o.querySelector(".assumption-readonly"),u=a?rre(a):"",s=Number(i.dataset.paramIndex??0);i3(i,MC(u,t==null?void 0:t[s]),n);const c=o==null?void 0:o.querySelector(`.${n3}`);c&&(c.hidden=!0)}}function kC(e,n,t,r){const i=e.querySelectorAll(".param-density-canvas");for(const o of i){const a=o.closest(".assumption-card"),u=a==null?void 0:a.querySelector(".assumption-readonly"),s=Number(o.dataset.paramIndex??0),c=[],l=[],d=[];for(const p of u?ire(u):[]){const m=pre(p.value,r==null?void 0:r[s]),f=t[p.recordTrialIndex];m===null||f===void 0||(c.push(m),l.push(f),d.push(p.recordTrialIndex))}if(i3(o,c.length>0?wI(c,l):null,n),a){const p=dre(a);p.hidden=c.length===0,p.innerHTML=c.length>0?`<span class="${Yte}">`+x(ere(c,l,NC(o)??sre,n.statsDisplay))+"</span> "+OL({contributingRecordTrialIndices:d,recordTrialCount:t.length}):""}}}function fre(e,n,t){var u;const r=n.ui.inputMode,i=((u=n.yoursRecord.raw_input)==null?void 0:u[r])??"",o=i?i.split(`
`):[];e.querySelectorAll(".assumption-input").forEach(s=>{const c=Number(s.dataset.paramIndex),l=(o[c]??"").trim();s.value!==l&&document.activeElement!==s&&(s.value=l)}),r==="sample"&&o3(e,Vn(n.ui),t),bs(e,n,t),t3(e)}function o3(e,n,t){const r=e.querySelectorAll(".param-density-canvas");for(const i of r){const o=i.closest(".assumption-card"),a=o==null?void 0:o.querySelector(".assumption-input"),u=(a==null?void 0:a.value)??"",s=Number(i.dataset.paramIndex??0);i3(i,MC(u,t==null?void 0:t[s]),n)}}function MC(e,n){const t=n??rr,r=PC(e,t);if(r===null)return null;switch(r.kind){case"family":return LJ(n_(r.spec,t.lo,t.hi));case"pairs":return TJ(r.pairs.map(i=>i[0]),r.pairs.map(i=>i[1]))}}function pre(e,n){const t=n??rr,r=PC(e,t);return r===null?null:Vi(r,t)}function PC(e,n){const t=e.trim();if(!t)return null;try{return Zu(t,n)}catch{return null}}function DC(e){return e.trim()}function mre(e,n,t,r){var u;const i=e.ui.inputMode,a=(((u=e.yoursRecord.raw_input)==null?void 0:u[i])??"").split(`
`);for(;a.length<r;)a.push("");return a[n]=i==="sample"?DC(t):t,a.join(`
`)}const hre=" — the saved estimate is still ",BS=48;function vre(e,n,t,r){const i=e.trim();if(!i)return null;try{return n==="point"?KT(i,t):n==="bounds"?YT(i,t):Zu(i,t),null}catch(o){const a=o.message;return r===""?a:a+hre+_re(r)}}function _re(e){return e.length<=BS?e:`${e.slice(0,BS)}…`}function gre(e,n,t){const r=e.yoursRecord.trials[0];return r?$C(r,n,t):""}function bs(e,n,t){const r=n.ui.inputMode,i=e.querySelectorAll(".assumption-card");for(const o of i){const a=o.querySelector(".assumption-input");if(!a)continue;const u=Number(a.dataset.paramIndex),s=o.dataset.svarBare??"",c=vre(a.value,r,t[u]??rr,gre(n,s,r));let l=o.querySelector(".arg-warning");if(c){if(!l){l=document.createElement("p"),l.className="arg-warning";const d=o.querySelector(".resizable-canvas-wrapper")??o.querySelector(".param-density-canvas")??o.querySelector(".assumption-header");d==null||d.after(l)}l.textContent=c}else l&&l.remove()}}function bre(e){switch(e){case"point":return"e.g. .5";case"bounds":return"e.g. .01 1";case"sample":return"e.g. "+FC}}const FC="tri(0, .5, .99)",a3="conclusion-density",to="density-canvas";function qC(e,n){const t={};for(const r of e.get_cparams()){const i=ge(r.id),o=n[i]??r.default_value;typeof o!="object"&&(t[i]=o)}return t}function yre(e,n,t,r,i,o,a){const u=H2(e,t,r,o);if(u===null)return null;if(o&&u.formEntry===null)throw new Error(`Form "${u.id}" not found in form registry`);const s=u.formEntry?i_(u.id,u.formEntry,i,a):{key:`${u.id}-unavailable`,params:[],valueRange:u.valueRange,point:()=>NaN,bounds:null,boundsTightness:null};return{formId:u.id,isConclusion:u.isConclusion,labelHtml:So(u,e,n),valueRange:u.valueRange,formEntry:u.formEntry,evalTarget:s}}function Ere(e,n){return ao(e).map(t=>`<div class="calc-label-row"><span class="label-full">${nt(t,n)}</span></div>`).join("")}function Sre(e,n){const t=x(Fw(n));return Array.from({length:e},()=>`<div class="calc-op-row">${t}</div>`).join("")}function $v(e,n,t,r,i,o,a,u,s,c){var y,E,$;const l=si(i,o),d=Qn(i,o);if(o){const T=Wn(tt(l));if(T&&l.kind!=="yours"){const C=Mn(i,o);if(C&&C.count===0){e.innerHTML="",n.innerHTML=`<div class="${Are}">${wre}</div>`;return}if(C){const L=Ye();yS(e,n,C,t,r,i,l.kind,L,a,s,c);return}}if(T&&l.kind==="yours"){const C=i.yoursCodeRecord;if(e.innerHTML="",po(C)){const L=mo(C),A=Ye();yS(e,n,L,t,r,i,l.kind,A,a,s,c)}else n.innerHTML='<div class="result-detail">Write code below and click Sample to compute results.</div>';return}}const p=((y=i.yoursRecord.raw_input)==null?void 0:y[d])??"",f=ao(t).length,h=l.kind!=="yours",v=Ere(t,r),_=f>0?`<div class="calc-operators">${Sre(f,d)}</div>`:"";let g;if(h)g='<div id="sample-columns"></div>';else{const T=d==="bounds"?" bounds-mode":d==="sample"?" sample-mode":"",C=kre(d,f);g=`<div class="calc-input"><textarea class="calc-textarea${T}" data-group="${d}" rows="${f}" spellcheck="false" placeholder="${C}">${x(p)}</textarea></div>`}const b=NH(t,d,H2(t,i,d,a),a);if(e.innerHTML=`${b}
    <div class="calc-layout">
      <div class="calc-labels">${v}</div>
      ${_}
      ${g}
    </div>
  `,h&&o){const T=e.querySelector("#sample-columns");if(T&&CH(T,t,o,i)&&((E=e.querySelector(".calc-labels"))==null||E.classList.add("has-sample-col-headers"),($=e.querySelector(".calc-operators"))==null||$.classList.add("has-sample-col-headers")),l.kind==="adhoc"&&l.entry.queryMode==="plainnum"){const C=Mn(i,o),L=(C==null?void 0:C.trials.length)===1?C.trials[0]:void 0,A=t.svar_entries().map(w=>w.bareName);L&&BA(L,A).length>0&&e.insertAdjacentHTML("beforeend",`<div class="calc-copy-to-yours"><button class="copy-to-yours-btn" type="button" title="Copy this entry's estimates into your editable Estimate inputs">Copy to Estimate</button></div>`)}}ys(n,t,r,i,o,a,u)}const wre="No model configurations are selected. Check an agent CLI, or a model and effort, under Select result set.",Are="calc-empty-result-set";function $re(e,n,t,r,i,o,a,u,s,c){const l=si(i,o),d=Wn(tt(l)),p=Ye();if(o&&d&&l.kind!=="yours"){const m=Mn(i,o);if(m&&m.count===0){$v(e,n,t,r,i,o,a,u,s,c);return}if(m){ES(e,n,m,t,r,i,l.kind,p,a,s,c);return}}else if(d&&l.kind==="yours"){const m=i.yoursCodeRecord;if(po(m)){const f=mo(m);ES(e,n,f,t,r,i,l.kind,p,a,s,c);return}}console.warn(`Code-control change outside a code result view (viewing ${JSON.stringify(l)}); falling back to a full calculator render`),$v(e,n,t,r,i,o,a,u,s,c)}function ys(e,n,t,r,i,o,a){Mre(e,n,t,r,i,o,a)}function Tre(e,n,t,r,i,o,a,u){const s=o[n];if(!s){e.innerHTML="",console.warn(`derived-form ${n}: not in form registry (cannot compute)`);return}const c=t.form.find(_=>_.id===n);if(!c){e.innerHTML="",console.error(`derived-form ${n}: not found in jprob template form list`);return}const l=Qn(i,u);if(!Aw(c,l)){e.innerHTML="";return}const d=$w(n,c.sexpr),p=Ire(t,d),m=nt(p,r),f=si(i,u).kind!=="yours",h=t.get_svar_bare_names().length;let v;try{v=Ore(n,s,t,i,l,f,h,qC(t,r.displayOptionValues),u,a)}catch(_){e.innerHTML="",console.error(`derived-form ${n}: ${_.message}`);return}switch(v.kind){case"ok":const _=v.valueHtml??`<span class="derived-value">${v.value}</span>`,g=v.detailHtml??(v.detail?` <span class="derived-detail">${v.detail}</span>`:"");e.innerHTML=`<div class="hir-loud-note">${m} ${v.label} ${v.relation??"≈"} `+_+(g?` ${g}`:"")+"</div>"+(v.nonFiniteWarning?Ja():"");return;case"non-finite":e.innerHTML=Ja();return;case"unavailable":e.innerHTML=`<div class="hir-loud-note">${m} — <span class="derived-detail">${x(v.explanation)}</span></div>`;return;case"pending":e.innerHTML="";return;case"missing":e.innerHTML="",console.warn(`derived-form ${n}: ${v.reason}`);return;case"error":e.innerHTML="",console.error(`derived-form ${n}: ${v.message}`);return}}function Ire(e,n){const t=Tw(n);return e.get_display_expr(t)??t}function Hr(e){return Ew(e.svar_entries())}function xC(e,n,t){return e.provenance!=="precomputed"?t:`precomputed, ${n} trial${n===1?"":"s"}`}const Lre={point:()=>Ya,bounds:"from bounds",mc:()=>"MC"};function Rre(e){return{point:n=>n.perTrial.length>1?`mean of ${n.perTrial.length} samples`:"from preset",bounds:"from preset",mc:n=>xC(n,e,n.trialCount>1?`MC of ${n.trialCount} trials`:"MC")}}function Cre(e){return{point:n=>n.perTrial.length>1?`${Ya} (mean of ${n.perTrial.length} trials)`:Ya,bounds:"from bounds",mc:n=>xC(n,e,"MC")}}function Ti(e,n,t,r){switch(e.kind){case"point":{const i=Tr([...e.perTrial,e.value]);return i==="undefined"?{kind:"non-finite"}:{kind:"ok",label:r.point(e),value:Pe(e.value,n,t),nonFiniteWarning:i==="infinite"}}case"bounds":{const i=Tr([e.lo,e.hi]);return i==="undefined"?{kind:"non-finite"}:YL(e.lo,e.hi)?{kind:"unavailable",explanation:KL}:{kind:"ok",label:r.bounds,relation:JL(e.tightness),value:qZ(e.lo,e.hi,n,t),nonFiniteWarning:i==="infinite"&&e.tightness==="tight"}}case"mc":{const i=Tr([e.mean,e.median,e.p5,e.p95]);if(i==="undefined")return{kind:"non-finite"};const o=SZ(e,n,t);return{kind:"ok",label:r.mc(e),value:"",valueHtml:o.valueHtml,detailHtml:o.detailHtml,nonFiniteWarning:i==="infinite"}}}}function Ore(e,n,t,r,i,o,a,u,s,c){var _;const l=t.get_svar_bare_names(),d=n.params.filter(g=>!l.includes(g));if(d.length>0)return{kind:"error",message:`params not in svar_list: ${JSON.stringify(d)} (form.params=${JSON.stringify(n.params)}, svar_list=${JSON.stringify(l)})`};const p=r.ui.probAsOdds,m=si(r,s);if(Wn(tt(m)))return Nre(e,n,t,r,i,m.kind,s,c);const f=i_(e,n,u,c);if(i==="bounds"&&f.bounds===null)return{kind:"unavailable",explanation:Mo};if(o){if(!s)return{kind:"pending"};const g=Mn(r,s);if(!g)return{kind:"pending"};if(m.kind!=="adhoc"||m.entry.queryMode!=="plainnum")return{kind:"pending"};const b=g,y=t.conclusion_form_or_none()??void 0,E=i==="sample"?tR(b,e,y,oi(b.trials)):void 0;try{const $=Br(Ye()),T=zn(f,Jn(b.trials,Zt(b),i,Hr(t)),{onIncompleteTrial:"skip",mcIters:$.mcIters,mcItersPerClick:$.mcItersPerClick,precomputed:E});return Ti(T,n.valueRange,p,Rre(b.trials.length))}catch($){if($ instanceof Xi)return{kind:"missing",reason:`record: ${$.message}`};throw $}}const h=((_=r.yoursRecord.raw_input)==null?void 0:_[i])??"";if(!h.trim())return{kind:"pending"};const v=Es(t,i,h,"tolerant",UC(r));try{const g=Br(Ye()),b=zn(f,v,{onIncompleteTrial:"skip",mcIters:g.mcIters,mcItersPerClick:g.mcItersPerClick});return Ti(b,n.valueRange,p,Lre)}catch(g){if(g instanceof Xi)return{kind:"pending"};throw g}}function Nre(e,n,t,r,i,o,a,u){let s;if(o==="yours"){const v=r.yoursCodeRecord;if(!po(v))return{kind:"pending"};s=mo(v)}else{if(!a)return{kind:"pending"};if(s=Mn(r,a),!s)return{kind:"pending"}}l2(s);const c=aee(s,t,r);if(!c)return{kind:"pending"};if(c.trials.length===0)return{kind:"missing",reason:"no trials for the selected scenario combination"};const l=r.ui.probAsOdds,d=Cre(c.trials.length),p=oo(n,c.cparams);if(i==="point"){const v=c.trials.map(g=>ZL(g,e,p)),_=Qu(v,ht(s,c.trials));return Ti({kind:"point",value:_,perTrial:v,perTrialInputs:[]},n.valueRange,l,d)}if(i==="bounds"){if(!c2(s))throw new Error("code bounds derived-form display reached with a multi-trial record; bounds mode should not have been selectable");const v=eR(c.trials[0],e,p);if(!v)return{kind:"unavailable",explanation:Mo};const[_,g]=v.interval;return Ti({kind:"bounds",lo:_,hi:g,tightness:v.tightness,trialCount:1},n.valueRange,l,d)}const m=t.conclusion_form_or_none()??void 0,f=oi(c.trials),h=tR(c,e,m,f);if(h===void 0){const v=iR(c,e,e===m,f);if(v!==void 0){const _=Tr([v.mean]);return _==="undefined"?{kind:"non-finite"}:{kind:"ok",label:`${L_.toLowerCase()}, ${c.trials.length} trial${c.trials.length===1?"":"s"}`,value:Pe(v.mean,n.valueRange,l,"monte-carlo"),nonFiniteWarning:_==="infinite"}}}try{const v=Br(Ye()),_=zn(i_(e,n,c.cparams,u),Jn(c.trials,ht(s,c.trials),"sample",Hr(t)),{onIncompleteTrial:"skip",mcIters:v.mcIters,mcItersPerClick:v.mcItersPerClick,precomputed:h});return Ti(_,n.valueRange,l,d)}catch(v){if(v instanceof Xi)return{kind:"missing",reason:`combo trials: ${v.message}`};throw v}}function kre(e,n){const t=e==="sample"?FC:e==="bounds"?".01 1":".5";return"e.g. "+Array.from({length:n},()=>t).join(`
`)}function Mre(e,n,t,r,i,o,a){var m;const u=qC(n,t.displayOptionValues),s=Qn(r,i),c=yre(n,t,r,s,u,o,a);if(c===null){e.innerHTML="";return}const l=si(r,i).kind!=="yours",d=Ye();if(l&&i){try{Ure(e,n,r,s,i,c,d)}catch(f){e.innerHTML=`<div class="result-error">${x(f.message)}</div>`}return}const p=((m=r.yoursRecord.raw_input)==null?void 0:m[s])??"";if(!p.trim()){e.innerHTML='<div class="result-detail">Enter probabilities above.</div>';return}try{switch(s){case"point":Pre(e,p,n,c,r.ui.probAsOdds);break;case"bounds":Dre(e,p,n,c,r.ui.probAsOdds);break;case"sample":Hre(e,p,n,r,c,d);break}}catch(f){e.innerHTML=`<div class="result-error">${x(f.message)}</div>`}}function BC(e,n,t){const r=e.trim().split(/\n/).map(i=>i.trim()).filter(i=>i.length>0);if(r.length!==n)throw new Error(`Expected ${n} values, got ${r.length}`);return r.map((i,o)=>{try{return KT(i,(t==null?void 0:t[o])??rr)}catch(a){throw new Error(`Line ${o+1}: ${a.message}`)}})}function HC(){return`<div class="result-detail">${x(Mo)}</div>`}function u3(e,n){for(const t of n.params)if(!e.includes(t))throw new Error(`form param "${t}" is not an input subjective variable`)}const yr=[1];function Es(e,n,t,r,i=null){const o=e.svar_entries(),a=o.map(d=>d.bareName),u=Ur(o.map(d=>d.decl)),s=Hr(e);if(r==="strict"){if(n==="point"){const p=BC(t,a.length,u);return{mode:n,trialWeights:yr,trials:[Object.fromEntries(a.map((m,f)=>[m,p[f]]))]}}if(n==="bounds"){const p=GC(t,a.length,u);return{mode:n,trialWeights:yr,trials:[Object.fromEntries(a.map((m,f)=>[m,p[f]]))]}}const{specs:d}=jC(t,a.length,u);return{mode:"sample",ranges:s,trialWeights:yr,trials:[{specs:Object.fromEntries(a.map((p,m)=>[p,d[m]])),lloads:i}]}}const c=t.trim().split(/\n/).map(d=>d.trim()).filter(d=>d.length>0);if(n==="point"){const d={};return a.forEach((p,m)=>{const f=Number(c[m]);isNaN(f)||(d[p]=f)}),{mode:n,trialWeights:yr,trials:[d]}}if(n==="bounds"){const d={};return a.forEach((p,m)=>{const f=(c[m]??"").split(/\s+/);if(f.length!==2)return;const h=Number(f[0]),v=Number(f[1]);isNaN(h)||isNaN(v)||(d[p]=[h,v])}),{mode:n,trialWeights:yr,trials:[d]}}const l={};return a.forEach((d,p)=>{try{l[d]=Zu(c[p]??"",u[p]??rr)}catch{}}),{mode:"sample",ranges:s,trialWeights:yr,trials:[{specs:l,lloads:i}]}}function UC(e){var n;return((n=e.yoursRecord.trials[0])==null?void 0:n.lloads)??null}function Pre(e,n,t,r,i){const o=t.svar_entries().map(c=>c.bareName);r.formEntry&&u3(o,r.formEntry);const a=Es(t,"point",n,"strict"),u=zn(r.evalTarget,a,{onIncompleteTrial:"error"}),s=a.trials[0];e.innerHTML=za({labelHtml:r.labelHtml,value:u.value,valueRange:r.valueRange,statsDisplay:i,detail:`from: ${o.map(c=>s[c]).join(", ")}`})}function GC(e,n,t){const r=e.trim().split(/\n/).map(i=>i.trim()).filter(i=>i.length>0);if(r.length!==n)throw new Error(`Expected ${n} lines of "lo hi", got ${r.length}`);return r.map((i,o)=>{try{return YT(i,(t==null?void 0:t[o])??rr)}catch(a){throw new Error(`Line ${o+1}: ${a.message}`)}})}function Dre(e,n,t,r,i){const o=t.svar_entries().map(s=>s.bareName);r.formEntry&&u3(o,r.formEntry);const a=Es(t,"bounds",n,"strict");if(r.formEntry&&r.evalTarget.bounds===null){e.innerHTML=HC();return}const u=zn(r.evalTarget,a,{onIncompleteTrial:"error"});e.innerHTML=M_({labelHtml:r.labelHtml,lo:u.lo,hi:u.hi,tightness:u.tightness,valueRange:r.valueRange,statsDisplay:i})}function jC(e,n,t){const r=e.trim().split(/\n/).map(o=>o.trim()).filter(o=>o.length>0);if(r.length!==n)throw new Error(`Expected ${n} lines, got ${r.length}`);return{specs:r.map((o,a)=>{try{return Zu(o,(t==null?void 0:t[a])??rr)}catch(u){throw new Error(`Line ${a+1}: ${u.message}`)}}),warnings:[]}}const Fre="⟦",qre="⟧";function Tv(e){const n=`${HS("n")}=${e.samples.length.toLocaleString()}`;return e.barrierInnerIters===null?n:`${n}, E${Fre}·${qre} ${HS("n")}=${e.barrierInnerIters.toLocaleString()}`}function xre(e,n,t,r){return'<div class="density-result-row"><div class="density-result-text">'+Zi(e,n,t,"monte-carlo",r)+`</div><canvas id="${to}" width="400" height="200"></canvas></div>`}function Bre(e,n,t,r,i){const o=e.querySelector(`#${to}`);if(!o)return;const a=mI(n);a!==null&&(CI(o,a,n.p5,n.p95,t,r,{stateHost:e,stateKey:a3}),n.mcPoolToken!==null&&fs(o,n.mcPoolToken,n.samples.length,{itersPerTarget:i,targetCount:1}))}function Hre(e,n,t,r,i,o){const a=t.svar_entries().map(h=>h.bareName);i.formEntry&&u3(a,i.formEntry);const u=UC(r),s=Es(t,"sample",n,"strict",u),c=i.labelHtml,l=i.valueRange,d=r.ui.probAsOdds,p=i.evalTarget,m=Br(o);if(zu(u)){const h=o_(p,s,{onIncompleteTrial:"error",mcIters:m.mcIters,mcItersPerClick:m.mcItersPerClick});e.innerHTML=fv({comparison:h,valueRange:l,statsDisplay:d,targetLabelHtml:c,canvasId:to,provenanceDetail:`Monte Carlo, ${Tv(h.joint)}`}),BL({box:e,canvasId:to,layers:[{comparison:h,palette:"series"}],valueRange:l,axis:Vn(r.ui),resizeStateKey:a3,mcItersPerClick:m.mcItersPerClick});return}const f=zn(p,s,{onIncompleteTrial:"error",mcIters:m.mcIters,mcItersPerClick:m.mcItersPerClick});e.innerHTML=`<div class="result-label">Monte Carlo (independent, ${Tv(f)})</div>`+xre(f,l,d,c),Bre(e,f,l,Vn(r.ui),m.mcItersPerClick)}function Ure(e,n,t,r,i,o,a){const u=Mn(t,i);if(!u){e.innerHTML='<div class="result-detail">No data for this preset.</div>';return}const s=Xr(t.ui,{presetData:i});if(s.kind==="adhoc"&&s.entry.queryMode==="plainnum"){Gre(e,u,n,t,r,o,a);return}e.innerHTML='<div class="result-detail">Unknown preset source.</div>'}function Gre(e,n,t,r,i,o,a){const u=o.valueRange,s=o.labelHtml,c=r.ui.probAsOdds;if(n.trials.length===0)throw new Error("Plainnum record has no trials to display");const l=o.evalTarget;if(i==="point"){const d=zn(l,Jn(n.trials,Zt(n),"point",Hr(t)),{onIncompleteTrial:"error"});if(d.perTrial.length===1)e.innerHTML=za({labelHtml:s,value:d.perTrial[0],valueRange:u,statsDisplay:c,detail:`from: ${d.perTrialInputs[0].join(", ")}`});else{const p=d.perTrial.map(m=>Pe(m,u,c)).join(", ");e.innerHTML=za({labelHtml:s,value:d.value,valueRange:u,statsDisplay:c,labelPrefix:"mean ",detail:`per sample: ${p}`})}return}if(i==="bounds"){if(o.formEntry&&l.bounds===null){e.innerHTML=HC();return}const d=zn(l,Jn(n.trials,Zt(n),"bounds",Hr(t)),{onIncompleteTrial:"error"});e.innerHTML=M_({labelHtml:s,lo:d.lo,hi:d.hi,tightness:d.tightness,valueRange:u,statsDisplay:c,midpointDetailSuffix:` (envelope of ${d.trialCount} sample${d.trialCount>1?"s":""})`});return}Vre(e,n,o,t,r,a)}function jre(e,n,t){return e.sampleStage===void 0?[...aI(e,n,t),"target",e.key]:["barrier-plainnum",e.key,n,t.mcIters,t.mcItersPerClick]}function Vre(e,n,t,r,i,o){const a=t.evalTarget,u=Br(o),s=Jn(n.trials,Zt(n),"sample",Hr(r)),c={onIncompleteTrial:"error",mcIters:u.mcIters,mcItersPerClick:u.mcItersPerClick},l={box:e,canvasId:to,resizeStateKey:a3,densityScale:i.ui.densityScale},d={valueRange:t.valueRange,statsDisplay:i.ui.probAsOdds,targetLabelHtml:t.labelHtml,storedTrialsDetail:s2("adhoc",n.trials.length),liveSampleCountDetail:Tv},p=()=>jre(a,s,c),m=ai(n,t.formId,t.isConclusion);if(FL(n.trials,r)){const h=nR(m);VL(l,d,u,h===null?null:{kind:"pair",pair:h},{run:()=>o_(a,s,c),activationKeyParts:p},PL.specPointerHtml);return}const f=ms(m,oi(n.trials));WL(l,d,u,f===void 0?null:{kind:"stats",stats:f.stats},{run:()=>zn(a,s,c),activationKeyParts:p})}function HS(e){return`<span class="lc">${e}</span>`}function Wre(e,n,t,r,i){if(!n.trim())return null;try{if(e==="point"){const u=BC(n,t,i),s={};for(let c=0;c<r.length;c++)s[r[c]]=u[c];return s}if(e==="bounds"){const u=GC(n,t,i),s={};for(let c=0;c<r.length;c++)s[r[c]]=u[c];return s}const{specs:o}=jC(n,t,i),a={};for(let u=0;u<r.length;u++){const s=o[u];a[r[u]]=s.kind==="family"?s.spec.text:s.pairs}return a}catch{return null}}function s3(e,n,t,r,i){const o=e.yoursRecord;o.raw_input={...o.raw_input??{},[r]:i};const a=n.svar_entries(),u=a.map(d=>d.bareName),s=u.length,c=Ur(a.map(d=>d.decl)),l=Wre(r,i,s,u,c);if(l!==null){const d=o.trials[0];r==="point"?d.point=l:r==="bounds"?d.bounds=l:d.sample=l}N2(n,t,e.plainnumOptionDictKey,o)}function c3(e,n,t,r,i,o){const a=e.yoursRecord;a.lloads_draft=r;const u=dC(r,i,o);return u.kind==="valid"&&(a.trials[0].lloads=u.lloads),N2(n,t,e.plainnumOptionDictKey,a),u}const VC="response-note-block",WC="response-note-body",Xre="response-note-key",XC="misc",KC="response-note-input",Kre="Your notes about this response",Yre={containerClass:VC,ownContentSelector:`:scope > .${WC}`};function YC(e){return e!==void 0&&e.trim()!==""?e:void 0}function Jre(e){if(e===void 0)return[];const n=[];for(const t of Object.keys(e).sort()){const r=YC(e[t]);r!==void 0&&n.push([t,r])}return n}function JC(e){const n=document.createElement("div");n.className=VC;const t=document.createElement("h3");return t.className=Xre,t.textContent=e,n.appendChild(t),n}function US(e,n){const t=JC(e);return t.appendChild(ML(n,WC)),t}function zre(e){const n=JC(XC);return n.appendChild(fC({className:KC,value:e,ariaLabel:Kre})),n}function Qre(e,n,t){const r=Nn(e.ui);return r!==null?{mode:"edit",misc:Lu(e,r).misc_response}:{mode:"read",freeTextPerTrial:LR(e,n),trialSelection:t}}function Zre(e,n){const t=document.getElementById(`${Fe.RESPONSE_NOTES}-section`);if(e.innerHTML="",n.mode==="edit"){t&&(t.hidden=!1),e.appendChild(zre(n.misc));return}const{freeTextPerTrial:r,trialSelection:i}=n,o=i.kind==="mix"?void 0:r[B_(r.length,i.recordTrialIndex)],a=YC(o==null?void 0:o.misc),u=Jre(o==null?void 0:o.extra);if(a===void 0&&u.length===0){t&&(t.hidden=!0);return}t&&(t.hidden=!1),a!==void 0&&e.appendChild(US(XC,a));for(const[s,c]of u)e.appendChild(US(s,c))}function l3(e,n,t,r,i){r==="plaincode"?(i(e.yoursCodeRecord),L2(n,t,e.codeOptionDictKey,e.yoursCodeRecord)):(i(e.yoursRecord),N2(n,t,e.plainnumOptionDictKey,e.yoursRecord))}function GS(e,n,t,r,i,o){l3(e,n,t,r,a=>{a.trial_choices={...a.trial_choices??{},[i]:o}})}function eie(e,n,t,r,i,o){l3(e,n,t,r,a=>{a.reasoning_response={...a.reasoning_response,[i]:o}})}function nie(e,n,t,r,i){l3(e,n,t,r,o=>{o.misc_response=i})}function tie(e,n,t,r){if(e.classList.contains(vC)){const i=e,o=i.dataset[_C];return o===void 0||o===""?!1:(eie(n,t,r,La(n.ui),o,i.value),!0)}return e.classList.contains(KC)?(nie(n,t,r,La(n.ui),e.value),!0):!1}function rie(e,n){e.addEventListener("input",t=>{const r=t.target;if(r.classList.contains("calc-textarea")){n.persistCalcTextarea(r);return}if(r.classList.contains("assumption-input")){n.persistAssumptionCard(r);return}}),e.addEventListener("change",t=>{const r=t.target;if(r.classList.contains("calc-textarea")){n.recomputeAfterCalcTextarea();return}if(r.classList.contains("assumption-input")){n.recomputeAfterAssumptionCard(r);return}})}function d3(e,n,t,r){const i=e.yoursCodeRecord;i.raw_code_input=r,L2(n,t,e.codeOptionDictKey,i)}function f3(e){const n=`yours_${e}_`,t=[];for(let i=0;i<localStorage.length;i++){const o=localStorage.key(i);o!==null&&o.startsWith(n)&&t.push(o)}const r=[];for(const i of t){const o=localStorage.getItem(i);if(o===null)continue;let a;try{a=JSON.parse(o)}catch{continue}r.push({plainnumOptionDictKey:i.slice(n.length),record:T$(a)})}return r.sort((i,o)=>{const a=i.record.timestamp??"";return(o.record.timestamp??"").localeCompare(a)}),r}function iie(e,n){localStorage.removeItem(Du(e,n))}function oie(e){const n=f3(e).map(i=>({kind:"plainnum",plainnumOptionDictKey:i.plainnumOptionDictKey,record:i.record})),t=R2(e).map(i=>({kind:"plaincode",codeOptionDictKey:i.codeOptionDictKey,record:i.record})),r=[...n,...t];return r.sort((i,o)=>{const a=i.record.timestamp??"";return(o.record.timestamp??"").localeCompare(a)}),r}function aie(e,n,t,r){const i={};for(const[a,u]of Object.entries(r.cparam_values??{}))p3(u)&&(i[a]=u);for(const[a,u]of Object.entries(r.aopts))zC(u)&&(i[a]=u);const o=Pu(n.get_options(),C2(n.get_options(),i));return O2(n.config,o),{...e,optionValues:o,plainnumOptionDictKey:t,yoursRecord:r}}function uie(e,n,t,r){const i={};for(const[a,u]of Object.entries(r.aopts))zC(u)&&(i[a]=u);for(const a of n.get_cparams()){const u=ge(a.id);if(u in e.optionValues){const s=e.optionValues[u];if(!p3(s))throw new Error(`Cparam ${a.id} has a non-scalar state value`);i[u]=s}}const o=Pu(n.get_options(),C2(n.get_options(),i));return O2(n.config,o),{...e,optionValues:o,codeOptionDictKey:t,yoursCodeRecord:r}}function p3(e){const n=typeof e;return n==="string"||n==="number"||n==="boolean"}function zC(e){return p3(e)||Array.isArray(e)&&e.every(n=>typeof n=="string")}function QC(e,n){const t=[];for(const r of e.get_options()){const i=ge(r.id),o=zt(r.id)?n.cparam_values:n.aopts,a=o==null?void 0:o[i];a!==void 0&&(!zt(r.id)&&a===r.default_value||t.push(`${i}=${eO(a)}`))}return t.join(" ")}function ZC(e,n){const t=["code"];for(const r of e.get_aopts()){const i=ge(r.id),o=n.aopts[i];o!==void 0&&o!==r.default_value&&t.push(`${i}=${eO(o)}`)}return t.join(" ")}function eO(e){return typeof e=="boolean"?e?"true":"false":String(e)}function sie(e,n){const t=oie(e.aid),r='<div class="yours-saved-header">Saved estimations</div>';if(t.length===0)return r+'<div class="yours-saved-empty">No saved estimations yet.</div>';const i=t.map(o=>cie(e,n,o)).join("");return r+`<div class="yours-saved-list">${i}</div>`}function cie(e,n,t){const r=Nn(n.ui);if(t.kind==="plainnum"){const u=x(QC(e,t.record)||"(default options)"),s=x(t.plainnumOptionDictKey);return`<div class="yours-saved-row${r==="plainnum"&&t.plainnumOptionDictKey===n.plainnumOptionDictKey?" yours-saved-row-current":""}" data-kind="plainnum" data-key="${s}" role="button" tabindex="0"><span class="yours-saved-label">${u}</span><button class="yours-saved-delete" data-kind="plainnum" data-key="${s}" aria-label="Delete" title="Delete this saved estimation">×</button></div>`}const i=x(ZC(e,t.record)),o=x(t.codeOptionDictKey);return`<div class="yours-saved-row yours-saved-row-code${r==="plaincode"&&t.codeOptionDictKey===n.codeOptionDictKey?" yours-saved-row-current":""}" data-kind="plaincode" data-key="${o}" role="button" tabindex="0"><span class="yours-saved-label">${i}</span><button class="yours-saved-delete" data-kind="plaincode" data-key="${o}" aria-label="Delete" title="Delete this saved estimation">×</button></div>`}function lie(e,n,t){e.innerHTML=sie(n,t)}const die=["tri","uniform","uni","beta","normal","lognormal","loguniform","t","logt","normal_trunc","lognormal_trunc","t_trunc","logt_trunc","trap","clamp","exp","log","log2","log10","sqrt"],fie=`/**
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
`,pie=2,mie=.5;function hie(e){return["  // Optional, used only when sampling distributions: joint dependence","  // between variables at this parameter combination (leave out for independence).",`  // lloads: { latents: [{ name: 'shared_factor', description: 'what they share', loadings: { ${e.slice(0,pie).map(t=>`${t}: ${mie}`).join(", ")} } }] },`]}function vie(e,n){if(e.length===0)return["return {","  point:  {},","  bounds: {},","  sample: {},","};"].join(`
`);const t=e.map(o=>`${o}: 0`).join(", "),r=e.map(o=>`${o}: [0, 1]`).join(", "),i=e.map(o=>`    ${o}: tri(0, 0.4, 1),`).join(`
`);return["return {",`  point:  { ${t} },`,`  bounds: { ${r} },`,"  sample: {",i,"  },",...n===null?[]:hie(n),"};"].join(`
`)}function _ie(e){const n=[];for(const t of e.get_cparams()){const r=t.allowed_values;r===void 0||typeof r=="string"||n.push(t.id.slice(7))}return n}const gie="// code data missing",bie=10;function yie(e,n,t,r){const i=_ie(e),o=e.get_svar_bare_names(),a=`function belief_spec_for_cparam_combo(${i.join(", ")}) {`,u=n.raw_code_input!==""?n.raw_code_input:t==="edit"?vie(o,r):gie,s=t==="view"?" readonly":"",l=`// ${die.join(", ")} are injected helper functions. For details (warning: the literal code with some irrelevant docs): `,d=t==="edit"?'<div class="code-action-row"><button class="code-run-btn" type="button">Run</button><span class="code-status" aria-live="polite"></span></div><div class="code-error-area"></div>':n.raw_code_input===""?"":`<div class="code-action-row"><button class="copy-to-yours-btn" type="button" title="Copy this entry's code into your editable Estimate code">Copy to Estimate</button></div>`;return`<div class="yours-code-input" data-variant="${t}"><div class="code-editor"><pre class="code-signature-line">${x(a)}</pre><pre class="code-helpers-comment"><span class="code-helpers-comment-text">${x(l)}</span><span class="code-helpers-help-slot"></span></pre><textarea class="code-body-input ${gs}" rows="${bie}" spellcheck="false"${s}>${x(u)}</textarea><pre class="code-signature-line">}</pre></div>`+d+"</div>"}function jS(e,n,t,r,i){e.innerHTML=yie(n,t,r,i),mC(e),Eie(e)}function Eie(e){for(const n of e.querySelectorAll(".code-helpers-help-slot"))n.childElementCount>0||n.appendChild(jz(fie))}const Sie=1e-15;function wie(e,n){return n.filter(t=>{const r=e[t];if(typeof r=="string")return t_(r)!==null;if(!Array.isArray(r)||r.length===0)return!1;const i=r[0];return r[r.length-1][0]-i[0]<Sie})}function Aie(e){const n={};for(const t of e){const r=t.id.startsWith("svar:")?t.id.slice(5):t.id;n[r]=Lt(t)}return n}const $ie=.8,VS=.05,Tie="Positive values mean…",Iie=2;function Iv(e,n,t){if(!n||t&&Object.keys(t).length>0)return null;const r=bw(n,e.get_svar_bare_names());return r.length<Iie?null:r}function nO(e,n,t,r){var o;const i=Iv(n,t,r);return i===null?null:{eligibleSvars:i,degenerateSvars:wie(((o=e.yoursRecord.trials[0])==null?void 0:o.sample)??{},i)}}function m3(e,n,t,r){return Nn(e.ui)!=="plainnum"||e.ui.inputMode!=="sample"?null:nO(e,n,t,r)}function h3(e,n){var r;const t=e.yoursRecord;return t.lloads_draft===void 0?sC((r=t.trials[0])==null?void 0:r.lloads,n.eligibleSvars):uC(t.lloads_draft,n.eligibleSvars)}function tO(e,n,t){const r=e.get_svar_bare_names(),i=ao(e);if(i.length!==r.length)throw new Error(`joint-dependence editor has ${r.length} subjective variables but ${i.length} display labels`);const o=new Map(r.map((a,u)=>[a,i[u]]));return new Map(t.map(a=>[a,nt(o.get(a),n)]))}function Lie(e,n,t,r,i,o){const a=m3(n,t,i,o);if(a===null){e.innerHTML="";return}const u=h3(n,a);e.innerHTML=Rie(u,a,tO(t,r,a.eligibleSvars),n.ui.jointDependenceEditorOpen),mC(e);const s=e.querySelector(".jde-help-slot");s&&s.appendChild(ut(I_)),rO(e,u,a),iO(e,u,a,t,r)}function Rie(e,n,t,r){const i=e.latents.length===0?Cie():Oie(e,n,t);return`<details class="joint-dependence-editor"${r?" open":""}><summary class="jde-summary"><span class="jde-summary-title">Joint dependence</span><span class="jde-summary-explainer">Optional named uncertainties shared across your distributions</span><span class="jde-status-pill"></span></summary><div class="jde-body"><div class="jde-intro"><span class="jde-help-slot"></span><p>A latent is one shared uncertainty that can move two or more of your quantities together, or in opposite directions. Describe what it means, then give it signed loadings. Nothing you state here changes the distributions you gave above.</p></div>`+i+"</div></details>"}function Cie(){return'<div class="jde-empty-state"><div class="jde-empty-title">Currently sampled independently</div><p>Add a latent only when the distributions above do not tell the whole joint-belief story.</p><button class="jde-btn jde-add-latent-btn" type="button">Add a shared uncertainty</button></div>'}function Oie(e,n,t){return'<div class="jde-active"><div class="jde-toolbar"><div class="jde-section-title">Shared uncertainties</div><button class="jde-btn jde-add-latent-btn" type="button">+ Add latent</button></div><div class="jde-latent-list">'+e.latents.map(Nie).join("")+`</div><div class="jde-matrix-section"><div class="jde-matrix-heading"><div class="jde-section-title">Signed loadings</div><div class="jde-matrix-hint">−1 falls as the latent rises · +1 rises with it · 0 unaffected</div></div><div class="jde-matrix-scroll">${kie(e,n,t)}</div><div class="jde-banner" role="status"></div></div><div class="jde-bottom-actions"><button class="jde-btn jde-zero-loadings-btn" type="button">Zero all loadings</button><button class="jde-btn jde-remove-all-btn" type="button">Remove all latents</button></div><details class="jde-correlations"><summary>Implied pairwise correlations</summary><p class="jde-correlations-note">Derived from the loadings; feedback, not another input surface. Quantities your latents leave uncoupled are omitted.</p><div class="jde-matrix-scroll">`+Pie(n,t)+'</div></details><div class="jde-artifact"><div class="jde-artifact-caption">What your response discloses:</div><div class="jde-artifact-host"></div></div></div>'}function Nie(e,n){const t=`jde-latent-name-${n}`,r=`jde-latent-description-${n}`;return`<div class="jde-latent-card" data-latent-index="${n}"><div class="jde-latent-header"><span class="jde-latent-number">${n+1}</span><button class="jde-btn jde-remove-latent-btn" type="button" data-latent-index="${n}">Remove</button></div><div class="jde-latent-fields"><div class="jde-field"><label for="${t}">Short name</label><input id="${t}" class="jde-latent-text" type="text" data-latent-index="${n}" data-latent-field="name" placeholder="e.g. shared evidence quality" value="${K(e.name)}"></div><div class="jde-field"><label for="${r}">Meaning and positive direction</label><textarea id="${r}" class="jde-latent-text ${gs}" rows="2" data-latent-index="${n}" data-latent-field="description" placeholder="${K(Tie)}">${x(e.description)}</textarea></div></div></div>`}function kie(e,n,t){const r='<tr><th class="jde-variable-col">Quantity</th>'+e.latents.map((a,u)=>`<th class="jde-loading-col"><span class="jde-matrix-latent-name" data-latent-index="${u}"></span><span class="jde-matrix-latent-hint">−1 to +1</span></th>`).join("")+'<th class="jde-budget-col">Loading budget</th></tr>',i=new Set(n.degenerateSvars),o=n.eligibleSvars.map(a=>{const u=i.has(a),s=t.get(a),c=u?'<span class="jde-svar-note">single value — no dependence possible</span>':"",l=e.latents.map((d,p)=>`<td>${Mie(d.loadings[a]??null,p,a,s,u)}</td>`).join("");return`<tr data-svar="${K(a)}" data-svar-label="${K(oO(s))}"${u?' class="jde-row-ineligible"':""}><th scope="row" class="jde-svar-cell" data-svar="${K(a)}"><span class="jde-svar-label">${s}</span>${c}</th>`+l+`<td><div class="jde-budget-track"><span class="jde-budget-fill" data-svar="${K(a)}"></span></div><div class="jde-budget-copy" data-svar="${K(a)}"></div></td></tr>`}).join("");return`<table class="jde-loading-matrix"><thead>${r}</thead><tbody>${o}</tbody></table>`}function Mie(e,n,t,r,i){const o=K(`Loading of ${oO(r)} on latent ${n+1}`),a=`data-latent-index="${n}" data-svar="${K(t)}"${i?" disabled":""}`,u=e===null?"":aO(e);return`<div class="jde-loading-control"><input class="jde-loading-range" type="range" min="-1" max="1" step="${VS}" value="${e??0}" ${a} aria-label="${o}"><input class="jde-loading-number" type="number" min="-1" max="1" step="${VS}" value="${u}" ${a} aria-label="${o}, numeric"></div>`}function Pie(e,n){const t=e.eligibleSvars,r=t.map(o=>`<th class="jde-svar-cell" data-svar="${K(o)}"><span class="jde-svar-label">${n.get(o)}</span></th>`).join(""),i=t.map(o=>`<tr><th class="jde-svar-cell" data-svar="${K(o)}"><span class="jde-svar-label">${n.get(o)}</span></th>`+t.map(()=>"<td></td>").join("")+"</tr>").join("");return`<table class="jde-correlation-table"><thead><tr><th></th>${r}</tr></thead><tbody>${i}</tbody></table>`}function rO(e,n,t){const r=lC(n,t.eligibleSvars,t.degenerateSvars,Kie(e)),i=Tte(n),o=e.querySelector(".jde-status-pill");o&&(o.className=`jde-status-pill ${Die(r,n,i)}`.trimEnd(),o.textContent=Fie(r,n,i)),qie(e,n),xie(e,r),Bie(e,n),Hie(e,n,t),Uie(e,r,n,i),Gie(e,n,t)}function Die(e,n,t){return e.length>0?"invalid":t?"valid":n.latents.length>0?"warning":""}function Fie(e,n,t){if(e.length>0)return`${e.length} issue${e.length===1?"":"s"}`;const r=n.latents.length;return t?`${r} latent${r===1?"":"s"} · valid`:r>0?`${r} considered · independent`:"Independent"}function qie(e,n){var t;for(const r of e.querySelectorAll(".jde-loading-range, .jde-loading-number")){if(r===document.activeElement)continue;const i=r.dataset.svar;if(i===void 0)continue;const o=((t=n.latents[Number(r.dataset.latentIndex)])==null?void 0:t.loadings[i])??null;o!==null&&(r.value=aO(o))}}function xie(e,n){const t=new Set(n.filter(i=>i.field!==void 0).map(i=>`${i.latentIndex}:${i.field}`));for(const i of e.querySelectorAll(".jde-latent-text"))i.classList.toggle("jde-field-invalid",t.has(`${i.dataset.latentIndex}:${i.dataset.latentField}`));const r=new Set(n.filter(i=>i.svar!==void 0&&i.latentIndex!==void 0).map(i=>`${i.latentIndex}:${i.svar}`));for(const i of e.querySelectorAll(".jde-loading-number"))i.classList.toggle("jde-field-invalid",r.has(`${i.dataset.latentIndex}:${i.dataset.svar}`))}function Bie(e,n){var t;for(const r of e.querySelectorAll(".jde-matrix-latent-name")){const i=Number(r.dataset.latentIndex),o=(t=n.latents[i])==null?void 0:t.name.trim();r.textContent=o||`Latent ${i+1}`,r.title=r.textContent}}function Hie(e,n,t){const r=cC(n,t.eligibleSvars);for(const i of e.querySelectorAll(".jde-budget-fill")){const o=r[i.dataset.svar??""];o!==void 0&&(i.style.width=`${Math.min(100,Math.max(0,o*100))}%`,i.className="jde-budget-fill"+(o>1?" over":o>$ie?" near":""))}for(const i of e.querySelectorAll(".jde-budget-copy")){const o=r[i.dataset.svar??""];if(o===void 0)continue;const a=o>1;i.className=`jde-budget-copy${a?" over":""}`,i.textContent=a?`${o.toFixed(3)} / 1 · over by ${(o-1).toFixed(3)}`:`${o.toFixed(3)} / 1`}}function Uie(e,n,t,r){const i=e.querySelector(".jde-banner");if(i){if(n.length>0){i.className="jde-banner invalid";const o=n.length>1?` (${n.length-1} more)`:"";i.textContent=`${n[0].message}${o} The calculator keeps using your last valid joint specification until this is repaired.`;return}if(!r){i.className="jde-banner warning",i.textContent=t.latents.length>0?"Valid, and exactly independent: the latents you named are disclosed as considered, with every loading at zero.":"Valid: sampled independently.";return}i.className="jde-banner",i.textContent="Valid joint specification. Every quantity is within its loading budget."}}function Gie(e,n,t){const r=e.querySelector(".jde-correlations"),i=e.querySelector(".jde-correlation-table thead tr"),o=e.querySelector(".jde-correlation-table tbody");if(r===null||i===null||o===null)return;const a=$te(n,t.eligibleSvars),u=t.eligibleSvars.map((s,c)=>t.eligibleSvars.some((l,d)=>d!==c&&a[c][d]!==0));r.hidden=u.filter(Boolean).length<2,i.querySelectorAll("th").forEach((s,c)=>{c>0&&(s.hidden=!u[c-1])}),o.querySelectorAll("tr").forEach((s,c)=>{s.hidden=!u[c],s.querySelectorAll("td").forEach((l,d)=>{var p;l.hidden=!u[d],l.textContent=Yie(((p=a[c])==null?void 0:p[d])??NaN)})})}function jie(e,n,t,r,i,o){if(e.querySelector(".joint-dependence-editor")===null)return;const a=m3(n,t,i,o);if(a===null)return;const u=tO(t,r,a.eligibleSvars);for(const s of e.querySelectorAll(".jde-svar-cell")){const c=u.get(s.dataset.svar??""),l=s.querySelector(".jde-svar-label");c!==void 0&&l!==null&&(l.innerHTML=c)}iO(e,h3(n,a),a,t,r)}function iO(e,n,t,r,i){const o=e.querySelector(".jde-artifact-host");if(o===null)return;const a=dC(n,t.eligibleSvars,t.degenerateSvars);o.innerHTML=a.kind==="invalid"?'<div class="jde-artifact-pending">Preview pauses until the issues above are repaired.</div>':C_(a.lloads,r,i,{keepFolded:!0}).specHtml,R_(o)}function WS(e){const n=Number(e.dataset.latentIndex);if(!Number.isInteger(n))return null;if(e.classList.contains("jde-latent-text")){const t=e.dataset.latentField;return t!=="name"&&t!=="description"?null:{kind:"text",latentIndex:n,field:t,value:e.value}}if(e.classList.contains("jde-loading-range")||e.classList.contains("jde-loading-number")){const t=e.dataset.svar;if(t===void 0)return null;const r=e.value.trim(),i=r===""||!Number.isFinite(Number(r))?null:Number(r);return{kind:"loading",latentIndex:n,svar:t,value:i}}return null}function Vie(e,n){return{latents:e.latents.map((t,r)=>r!==n.latentIndex?t:n.kind==="text"?{...t,[n.field]:n.value}:{...t,loadings:{...t.loadings,[n.svar]:n.value}})}}function Wie(e){const n=e.closest("button");if(n===null)return null;if(n.classList.contains("jde-add-latent-btn"))return{kind:"add"};if(n.classList.contains("jde-zero-loadings-btn"))return{kind:"zero-all"};if(n.classList.contains("jde-remove-all-btn"))return{kind:"remove-all"};if(n.classList.contains("jde-remove-latent-btn")){const t=Number(n.dataset.latentIndex);return Number.isInteger(t)?{kind:"remove",latentIndex:t}:null}return null}function Xie(e,n,t){switch(n.kind){case"add":return{latents:[...e.latents,xS(t)]};case"remove":return{latents:e.latents.filter((r,i)=>i!==n.latentIndex)};case"zero-all":return{latents:e.latents.map(r=>({...r,loadings:xS(t).loadings}))};case"remove-all":return{latents:[]}}}function oO(e){return e.replace(/<[^>]*>/g,"").trim()}function Kie(e){const n={};for(const t of e.querySelectorAll("tr[data-svar-label]")){const r=t.dataset.svar;r!==void 0&&(n[r]=t.dataset.svarLabel)}return n}function aO(e){return String(e)}function Yie(e){return Number.isFinite(e)?e===0?"0.000":`${e>0?"+":"−"}${Math.abs(e).toFixed(3)}`:"invalid"}function Jie(e,n,t,r,i,o,a){const u=Nn(n.ui);if(u==="plainnum"){Lie(e,n,t,r,o,a);return}if(u==="plaincode"){Qie(e,n,t,r);return}zie(e,n,t,r,i)}function zie(e,n,t,r,i){if(!i){e.innerHTML="";return}const o=U_(t,n,i),a=vt(n,i);if(o.length===0||a.kind==="mix"){e.innerHTML="";return}const u=o[a.recordTrialIndex];e.innerHTML=u===void 0?"":C_(u.lloads,t,r,{offerCopyToYours:n.ui.interactionMode!=="Estimate"}).specHtml,R_(e)}function Qie(e,n,t,r){const i=CR(t,n);e.innerHTML=i===void 0?"":C_(i.lloads,t,r).specHtml,R_(e)}function v3(e,n){return e??!!(n??!1)}function Zie(e,n){return!v3(e,n)}const eoe=!0;function noe(e){return eoe}async function uO(e,n){return{rdevRichcodeResults:[]}}const sO="execution timed out",Lv="execution aborted";function toe(e,n){const r=(n.workerFactory??roe)();return new Promise((i,o)=>{var l,d;let a=!1;const u=()=>{var p;a=!0,clearTimeout(c),(p=n.signal)==null||p.removeEventListener("abort",s),r.terminate()},s=()=>{a||(u(),o(new Error(Lv)))};if((l=n.signal)!=null&&l.aborted){r.terminate(),o(new Error(Lv));return}(d=n.signal)==null||d.addEventListener("abort",s);const c=setTimeout(()=>{a||(u(),o(new Error(sO)))},n.timeoutMs);r.addEventListener("message",p=>{a||(u(),i(p.data))}),r.addEventListener("error",p=>{a||(u(),o(new Error(p.message||"worker error")))}),r.postMessage(e)})}function roe(){return new Worker(new URL("/hirwebdep/assets/plaincode_eval_worker-CBUJMing.js",import.meta.url),{type:"module"})}function ioe(e,n,t,r){const{html:i}=Ix(n,void 0,t);e.innerHTML=i}const cO="keymap-popover";function ooe(){return cr}function lO(){return document.getElementById(cO)}function aoe(){return lO()!==null}function ha(){var e;(e=lO())==null||e.remove()}function uoe(){aoe()?ha():dO()}function ea(e,n){e.classList.toggle("keymap-row-invalid",n!=="");const t=e.querySelector(".keymap-error");t&&(t.textContent=n)}function soe(e){const n=lr();e.innerHTML="";for(const t of ooe()){const r=document.createElement("div");r.className="keymap-row";const i=document.createElement("label");i.className="keymap-label",i.htmlFor=`keymap-input-${t.id}`,i.textContent=t.description;const o=document.createElement("input");o.id=`keymap-input-${t.id}`,o.className="keymap-input",o.type="text",o.maxLength=1,o.autocomplete="off",o.spellcheck=!1,o.value=n[t.id]??"",o.dataset.shortcutId=t.id,o.setAttribute("aria-label",`${t.description} shortcut key`);const a=document.createElement("div");a.className="keymap-error",o.addEventListener("input",()=>{const u=o.dataset.shortcutId,s=S_(o.value);if(!s.ok){ea(r,s.error??"Invalid shortcut key.");return}const c=eL(u,s.key);if(c){const d=cr.find(p=>p.id===c);ea(r,`Already assigned to "${(d==null?void 0:d.description)??c}".`);return}const l=rQ(u,s.key);if(!l.ok){ea(r,l.error??"Invalid shortcut key.");return}o.value=l.key,ea(r,"")}),r.appendChild(i),r.appendChild(o),r.appendChild(a),e.appendChild(r)}}function dO(){ha();const e=document.createElement("div");e.id=cO,e.className="keymap-popover",e.tabIndex=-1;const n=document.createElement("button");n.className="help-widget-close",n.type="button",n.textContent="×",n.setAttribute("aria-label","Close");const t=document.createElement("h3");t.className="keymap-title",t.textContent="Keymap";const r=document.createElement("div");r.className="keymap-body",soe(r),n.addEventListener("click",ha),e.addEventListener("keydown",i=>{i.key==="Escape"&&ha()}),e.appendChild(n),e.appendChild(t),e.appendChild(r),document.body.appendChild(e),e.focus()}const coe="arg-title-help",loe=20,doe=50,XS=/\b\d+\.\d+\.\d+\b/;function foe(e,n){return XS.test(e)||n!==void 0&&XS.test(n)}function poe(e,n){const t=e.querySelector(".arg-title");if(!t||!foe(t.textContent??"",n))return;const r=ut(tZ,loe,doe);r.classList.add(coe),t.prepend(r)}function moe(e){return Gr.includes(e??"")}function _3(e){var i;const n=e.dataset.isym,t=e.dataset.type;if(!n||!moe(t))return null;const r=((i=e.closest(`.${t2}`))==null?void 0:i.querySelector(`.${r2}.${t}`))??null;return r===null?null:{key:{kind:"exampleList",bareIsymId:n,polarity:t},isOpen:()=>r.classList.contains(Qt),setOpen:o=>{r.classList.toggle(Qt,o),e.classList.toggle(Au,o)}}}function hoe(e){var t;const n=Gr.find(r=>e.classList.contains(r));return n===void 0?null:((t=e.closest(`.${t2}`))==null?void 0:t.querySelector(`.${wu}.${n}`))??null}function fO(e){const n=e.dataset.framingAnchor,t=e.dataset.framingId;if(!n||!t)return null;const r=e.closest(`.${Y_}`);return r===null?null:{key:{kind:"framingNote",anchorKey:n,framingId:t},isOpen:()=>r.classList.contains(Qt),setOpen:i=>{r.classList.toggle(Qt,i),e.classList.toggle(Au,i)}}}function voe(e){return{key:{kind:"proseSection",foldId:e.id},isOpen:()=>e.open,setOpen:n=>{e.open=n}}}function _oe(e){return e!==null}function g3(e){const n=[...e.querySelectorAll(`.${wu}`)].map(_3),t=[...e.querySelectorAll(`.${J_}`)].map(fO),r=[...e.querySelectorAll(`details.${Ta}.${_t}`)].filter(i=>i.id!=="").map(voe);return[...n,...t].filter(_oe).concat(r)}function b3(e){return g3(e).length>0}function goe(e){return g3(e).some(n=>n.key.kind==="exampleList")}function boe(e,n){switch(n.kind){case"exampleList":return Fi(e.exampleFoldState,n.bareIsymId,n.polarity);case"framingNote":return yC(e.framingFoldState,n.anchorKey,n.framingId);case"proseSection":return bA(e.foldOpenById,n.foldId)}}function pO(e,n,t){switch(n.kind){case"exampleList":e.exampleFoldState=xx(e.exampleFoldState,n.bareIsymId,n.polarity,t);return;case"framingNote":e.framingFoldState[n.anchorKey]={...e.framingFoldState[n.anchorKey],[n.framingId]:t};return;case"proseSection":e.foldOpenById[n.foldId]=t;return}}const yoe=["peek","unpeek","open","close"];function Eoe(e){return yoe.includes(e??"")}function Soe(e,n,t){for(const r of g3(e))switch(n){case"open":case"close":{const i=n==="open";r.setOpen(i),pO(t,r.key,i);break}case"peek":r.setOpen(!0);break;case"unpeek":r.setOpen(boe(t,r.key));break}}const y3="global-prose-fold-controls";function mO(e,n){const t=document.getElementById(y3);t&&(t.hidden=!(n&&b3(e)))}function woe(){const e=document.getElementById(y3);return e!==null&&!e.hidden}const KS="calculator-adhoc-meta";function hO(e,n){const t=document.getElementById(KS);if(!n){t==null||t.remove();return}const r=t??(()=>{const o=document.createElement("div");return o.id=KS,e.insertAdjacentElement("beforebegin",o),o})();r.className="adhoc-meta",r.innerHTML="";const i=document.createElement("div");i.className="adhoc-meta-body",kL(i,n),r.appendChild(i)}const Aoe="a[href], button, input, select, textarea, label";function $oe(e){const n=e.closest(`.${_t} > summary`);if(n===null)return null;const t=e.closest(Aoe);if(t!==null&&n.contains(t))return null;const r=n.parentElement;return r instanceof HTMLDetailsElement?{foldId:r.id,open:!r.open}:null}const vO={SVAR_CARDS:wt("ESTIMATION","SVAR_CARDS"),JOINT_DEPENDENCE:wt("ESTIMATION","JOINT_DEPENDENCE"),CALCULATOR_HEADER:wt("CALCULATOR","CALCULATOR_HEADER"),CALCULATOR_INPUT:wt("CALCULATOR","CALCULATOR_INPUT"),CALCULATOR_RESULTS:wt("CALCULATOR","CALCULATOR_RESULTS"),DERIVED_FORMS:Fr,YOURS_CODE_INPUT:wt("CALCULATOR","YOURS_CODE_INPUT"),YOURS_SAVED_LIST:wt("CALCULATOR","YOURS_SAVED_LIST")};function _O(e){return vO[e]}function Toe(e){const n=new Map;for(const i of e){const o=i.kind==="pair"?i.pair:[i.subentry];for(const a of o){if(n.has(a))throw new Error(`Duplicate subentry mount: ${a}`);n.set(a,i)}}for(const i of Object.keys(vO))if(!n.has(i))throw new Error(`Missing subentry mount: ${i}`);function t(i){return document.getElementById(_O(i))}function r(i,o){var a;if(i.visible&&!i.visible(o)){const u=i.kind==="pair"?i.pair:[i.subentry];for(const s of u)(a=t(s))==null||a.replaceChildren();return}if(i.kind==="pair"){const u=t(i.pair[0]),s=t(i.pair[1]);u&&s&&i.render(u,s,o)}else{const u=t(i.subentry);u&&i.render(u,o)}}return{container:t,render(i,o){r(n.get(i),o)},renderAll(i){for(const o of e)r(o,i)}}}function gO(e,n){const t={...e.inspectedCparamValues},r={...e.cparamValues},i={...e.cparamPinned};for(const[o,a]of Object.entries(n))t[o]=a,r[o]=a,i[o]=!0;return{inspectedCparamValues:t,cparamValues:r,cparamPinned:i}}function Ioe(e,n,t){return{...gO(e,t),readTrials:Vq(e.readTrials,n)}}function Loe(e,n){return{...gO(e,n.combination),readTrials:jq(n.jtaskGroupId,n.configuration,n.singleContributingTrial)}}const YS="problem-reconstruction-label",Roe="The problem text on this page is reconstructed from the current problem template, using the options recorded with these results. The wording the trials answered may have differed.";function Coe(e,n){var r;if((r=e.querySelector(`:scope > .${YS}`))==null||r.remove(),!n)return;const t=document.createElement("p");t.className=YS,t.textContent=Roe,t.hidden=!0,e.prepend(t)}const Ss="trial-selector-shell",Ooe="trial-selector",ws="trial-selector-btn",As="data-trial-selection",Noe="trial-selector-group",koe="trial-selector-mix-help",bO="trial-selector-btn-no-response",Moe="showing",yO="This trial gave no response for these parameter values",EO=2,Poe=[Fe.ESTIMATION,Fe.TCHOICE,Fe.RESPONSE_NOTES,Fe.CALCULATOR];function Doe(e,n,t,r){var a;const i=$n(t.ui,r);if(i===null||Dt(i)<EO){e.replaceChildren(),e.hidden=!0;return}e.hidden=!1,e.innerHTML=qoe(b2(i),SO(n,t,r));const o=ut(wL);o.classList.add(koe),(a=e.querySelector(".trial-selector-buttons"))==null||a.after(o),AO(e,vt(t,r))}function SO(e,n,t){const r=new Set;return U_(e,n,t).forEach((i,o)=>{i===void 0&&r.add(o)}),r}function Foe(e,n,t,r){const i=SO(n,t,r);for(const o of e.querySelectorAll(`.${ws}`)){const a=k$(o.getAttribute(As)??""),u=a!==null&&a.kind==="trial"&&i.has(a.recordTrialIndex);o.classList.toggle(bO,u),u?o.title=yO:o.removeAttribute("title")}}function qoe(e,n){const t=JS(er,er,!1),r=a=>a.trials.map(u=>JS(N$({kind:"trial",recordTrialIndex:u.recordTrialIndex}),String(u.trialNumber),n.has(u.recordTrialIndex))).join(""),i=e.length===1?e[0]:null,o=i!==null?`<div class="trial-selector-buttons">${t}${r(i)}</div>`:`<div class="trial-selector-buttons">${t}</div>`+e.map(a=>{const{plotLabel:u,longLabel:s}=wO(a.configuration);return`<div class="${Noe}"><span class="trial-selector-group-label" title="${K(s)}">${x(u)}:</span><div class="trial-selector-buttons">${r(a)}</div></div>`}).join("");return`<div class="${Ooe}"><span class="trial-selector-label">${Moe}</span>`+o+"</div>"}function wO(e){const n=yn(e);return{plotLabel:v2(n),longLabel:h2(n)}}function JS(e,n,t){const r=[ws];t&&r.push(bO);const i=t?` title="${yO}"`:"";return`<button class="${r.join(" ")}"${i} ${As}="${e}">${n}</button>`}function AO(e,n){const t=N$(n);for(const r of e.querySelectorAll(`.${ws}`))r.classList.toggle("active",r.getAttribute(As)===t)}function xoe(e,n){if(n===null)return null;const t=Dt(n);if(t<EO)return null;const r=b2(n);if(e.kind==="mix")return r.length>1?`mixture of ${t} trials from ${r.length} model configurations`:`mixture of ${t} trials`;for(const i of r){const o=i.trials.find(a=>a.recordTrialIndex===e.recordTrialIndex);if(o!==void 0)return i.configuration===null?`trial ${o.trialNumber}`:`${wO(i.configuration).plotLabel} trial ${o.trialNumber}`}throw new Error(`trialSelectionSummary: trial ${e.recordTrialIndex} is not one of the record's ${t} trials`)}function $O(e,n){FR(Poe,PR,xoe(e,n))}const Ir="side-panel",E3="side-panel-tab",zS="side-panel-body",Boe="expanded",Hoe="side-panel-area",Uoe="side-panel-area-title",Goe="side-panel-area-content",joe="⋮︎",QS="View controls",Voe="View controls",TO=280,Woe="--side-panel-max-width",Xoe=720,Koe=TO+Xoe;let Lr=!1;function Yoe(){return window.innerWidth>=Koe}function Joe(){document.documentElement.style.setProperty(Woe,`${TO}px`)}function zoe(e){Lr=e&&Yoe(),iu()}function Qoe(){return Lr=!Lr,iu(),Lr}function Zoe(e){const n=document.getElementById(Ir),t=document.getElementById(zS),r=document.getElementById(E3);if(!(n===null||t===null||r===null)){if(n.setAttribute("aria-label",Voe),r.textContent=joe,r.title=QS,r.setAttribute("aria-label",QS),r.setAttribute("aria-controls",zS),n.hidden=!e.visible,!e.visible){t.replaceChildren(),iu();return}t.replaceChildren(...e.areas.map(eae)),iu()}}function eae(e){const n=document.createElement("section");n.className=Hoe;const t=document.createElement("h3");t.className=Uoe,t.textContent=e.title;const r=document.createElement("div");return r.className=Goe,n.append(t,r),e.render(r),n}function iu(){var e,n;(e=document.getElementById(Ir))==null||e.classList.toggle(Boe,Lr),(n=document.getElementById(E3))==null||n.setAttribute("aria-expanded",String(Lr))}const Rv={refLinkColor:"data-ref-link-color",estimatorTextColor:"data-estimator-text-color"};function nae(e){return Object.hasOwn(Rv,e)}function ZS(e){var t;const n=(t=$u.find(r=>r.id===e))==null?void 0:t.values;if(n===void 0)throw new Error(`Color preference "${e}" has no enum definition in global_options.json`);return n}function IO(e,n=!1){const t=document.documentElement;for(const r of Object.keys(Rv)){const i=e[r],o=ZS(r).includes(i);if(n&&!o)throw new Error(`Color preference "${r}" has value "${i}", not one of ${ZS(r).join(", ")} (global_options.json). A stale saved value: pick another in Settings, or clear localStorage.`);t.setAttribute(Rv[r],o?i:fo[r])}}const ou="long-text-abbreviable",S3="long-text-abbreviated",w3="long-text-abbrev-tail",LO="long-text-abbrev-control",A3="long-text-abbrev-toggle",tae="long-text-abbrev-expand",rae="long-text-abbrev-collapse",iae="more",oae="abbrev",aae="…",uae=20,sae=.5,RO=[Qv],cae=[...RO,Zv,"srcquotes-inline",e2,mA,n2,Ta,hA,vA,_A],lae="a, .ref-popover, .symbol-ref-name, .inline-note-ref, .srcquote-widget",dae=`<span class="${LO} ${tae}">${aae}<button class="${A3}">${iae}</button></span>`,fae=`<button class="${LO} ${A3} ${rae}">${oae}</button>`;function pae(e,{containers:n,thresholdChars:t,startAbbreviated:r}){if(!Number.isFinite(t)||t<1)return;const i=[];for(const o of n)for(const a of e.querySelectorAll(`.${o.containerClass}`)){if(a.classList.contains(ou))continue;const u=a.querySelector(o.ownContentSelector);if(u===null)continue;const{totalChars:s,cut:c}=gae(vae(u),t);c===null||s<=t||s-c.headChars<t*sae||i.push({container:a,content:u,cut:c})}for(const{container:o,content:a,cut:u}of i){const s=yae(u,a);Aae(s,a).insertAdjacentHTML("afterend",dae),$ae(a).insertAdjacentHTML("beforeend",fae),o.classList.add(ou),o.classList.toggle(S3,r)}}function mae(e,n){for(const t of e.querySelectorAll(`.${ou}`))t.classList.toggle(S3,n)}function hae(e){const n=e.closest(`.${ou}`);n!==null&&n.classList.toggle(S3)}function vae(e){const n=[],t=r=>{for(const i of r.childNodes)i.nodeType===Node.TEXT_NODE?n.push(i):i.nodeType===Node.ELEMENT_NODE&&!_ae(i)&&t(i)};return t(e),n}function _ae(e){if(e.hasAttribute("hidden")||e.localName==="svg")return!0;const n=e.parentElement;return n instanceof HTMLDetailsElement&&!n.open&&e.localName!=="summary"?!0:getComputedStyle(e).display==="none"}function gae(e,n){let t=0,r=!0,i=null;for(const o of e)for(let a=0;a<o.data.length;a++){const u=bae(o.data[a]);u&&r||(r=u,t++,i===null&&t===n&&(i={node:o,offset:a+1,headChars:t}))}return{totalChars:t,cut:i}}function bae(e){return e.trim()===""}function yae(e,n){const t=Eae(e.node,n);let r;t!==null?(t.classList.add(w3),r=t):r=CO(e.node.splitText(Sae(e.node.data,e.offset)));let i=r;for(;i.parentNode!==null&&i!==n;){const o=[];for(let a=i.nextSibling;a!==null;a=a.nextSibling)o.push(a);for(const a of o)wae(a);i=i.parentNode}return r}function Eae(e,n){let t=null;for(let r=e.parentElement;r!==null&&r!==n;r=r.parentElement)r.matches(lae)&&(t=r);return t}function Sae(e,n){const t=e.lastIndexOf(" ",n);return t<=0||n-t>uae?n:t}function wae(e){e.nodeType===Node.ELEMENT_NODE?e.classList.add(w3):e.nodeType===Node.TEXT_NODE&&CO(e)}function CO(e){const n=document.createElement("span");return n.className=w3,e.parentNode.insertBefore(n,e),n.appendChild(e),n}function Aae(e,n){let t=e,r=t.parentElement;for(;r!==null&&r!==n&&!Tae(r);)t=r,r=t.parentElement;return t}function $ae(e){const n=e.lastElementChild;return n!==null&&RO.some(t=>n.classList.contains(t))?n:e}function Tae(e){return cae.some(n=>e.classList.contains(n))}const ew="srcquote-explainer",Iae="srcquote-explainer",Lae=`${Fe.SRCQUOTE_EXPLAINER}-section`;function Rae(){const e=F2[ew];if(e===void 0)throw new Error(`shared_text.json is missing section '${ew}' (regenerate via 'just gen')`);return e}function Cae(e,n){const t=document.getElementById(Lae),r=n.renderedSrcquoteIds===void 0||n.renderedSrcquoteIds.size>0;t&&(t.hidden=!r),e.innerHTML=r?`<div class="${Iae}"><blockquote class="${Zv}">`+Ge(Rae(),n)+"</blockquote></div>":""}const Oae="**Reference:** ";function nw(e,n){if(n.kind==="sourcequote")return{kind:"sourcequote",quotes:e.resolve_srcquotes(n.sourcequoteIds)};if(![...Bv(e).values()].some(r=>r.anchor===n.targetId))throw new Error(`Popover target ${JSON.stringify(n.targetId)} is not present in ${e.aid}.`);return{kind:"entity",rawBody:Nae(e).get(n.targetId)??"",anchor:n.targetId}}function Nae(e){const n=new Map;for(const t of e.isym_entries()){const r=t.id.replace(/^isym:/,"");n.set(`#isym-${r}`,t.defn)}for(const t of e.isym_entries())for(const r of Gr)for(const i of t[r]??[])n.set(`#${hu}${pu(i.id)}`,`**${Dv[r]} example of [${t.id}]:** ${i.defn}`);for(const t of Fv(e))n.set(t.anchor,t.defn);for(const t of e.svar_decls()){const r=Ih(t.id);n.set(`#gloss-${r}`,t.defn);const i=`isym:${r}`,o=e.can_consolidate_isym_svar(i)?e.get_isym(i).defn:t.defn,a=[`{expr:${r}}`];o&&a.push(o),n.set(`#${xv}${r}`,a.join(`

`))}for(const t of e.get_display_form_keys())n.set(`#form-${mu(t)}`,e.get_display_form(t));for(const t of e.get_axioms()){const r=e.get_display_ax(t.id);r&&n.set(`#${qv}${Ci(t.id)}`,r)}for(const t of e.get_options())n.set(`#opt-${ge(t.id)}`,t.defn);for(const t of e.get_tchoice_decls())n.set(`#tchoice-${Li(t.id)}`,t.defn);for(const t of e.referenceable_framing_notes()){const[,r]=e.fgroup_of_flabel(t.flabel),i=Oi(t.id);n.set(`#${vu}${i}`,`**${r.label_prefix}${t.flabel} (${i}):** ${t.defn}`)}for(const t of e.bib_entries())n.set(`#${_u(t.id)}`,Pw(`${Oae}${e.bib_full_text(t.id)}`,t));for(const t of e.definedSym){const r=t.id.startsWith("definedSym:")?t.id.slice(11):t.id,i=e.get_display_definedSym_or_none(t.id)??"",o=[];i&&o.push(`:= ${i}`),t.defn&&o.push(t.defn),n.set(`#defsym-${r}`,o.join(" — "))}return n}const tw="hir-popover",kae="hir-popover-rail",Mae="hir-popover-rail-card",Pae="hir-popover-content",rw="hir-popover-close",Dae="ref-popover",vi="srcquote-pinned";function na(e,n){if(!(e instanceof Element))return null;const t=e.closest(n);return t instanceof HTMLButtonElement?t:null}function Fae(e,n){return n instanceof Node&&e.contains(n)}function qae(e){const n=e.devMode??!1,t=new Map,r=[];let i=null;const o=y=>{if(console.error("Failed to open popover.",y),n)throw y},a=()=>(i!=null&&i.isConnected||(i=document.createElement("aside"),i.className=kae,i.setAttribute("aria-label","Open notes"),document.body.append(i)),i),u=y=>{const E=r.indexOf(y);E!==-1&&r.splice(E,1)},s=(y,E=!1)=>{var $;t.delete(y.trigger),u(y),y.popover.remove(),y.trigger.setAttribute("aria-expanded","false"),y.kind==="sourcequote"&&(($=y.trigger.closest(`.${_i}`))==null||$.classList.remove(vi)),E&&y.trigger.isConnected&&y.trigger.focus({preventScroll:!0}),i&&i.childElementCount===0&&(i.remove(),i=null)},c=y=>{for(const E of[...r])E.trigger!==y&&s(E)},l=(y,E)=>{const $=document.createElement(y==="sourcequote"?"span":"section");return $.className=y==="sourcequote"?`${tw} ${JD}`:`${tw} ${Mae}`,$.setAttribute("role","dialog"),$.setAttribute("aria-label",y==="sourcequote"?"Source quotes":"Reference details"),$.innerHTML=`<button type="button" class="${rw}" aria-label="Close popover">×</button><div class="${Pae}">${E}</div>`,$},d=(y,E,$)=>{const T={trigger:y,popover:E,kind:$};return t.set(y,T),r.push(T),y.setAttribute("aria-expanded","true"),T},p=y=>{const E=y.getAttribute(SA);if(E!==null)return jD(E);const $=y.getAttribute(Ea);if($===null)throw new Error("Popover trigger is missing target data.");const T=e.getContext(),C=nw(T.jprobInstance,K3($));if(C.kind!=="entity")throw new Error("A rail trigger must resolve to an entity source.");const L=C.rawBody?Ge(C.rawBody,T):"",A=C.anchor.startsWith(`#${vu}`)&&!Q_(T),w=`#${hu}`,S=C.anchor.startsWith(w)&&!vF(T,C.anchor.slice(w.length)),I=C.anchor.startsWith(`#${Mw}`)&&!T.jprobInstance.cited_bib_ids(T.srcquotesInlined??!1).some(P=>`#${_u(P)}`===C.anchor),R=A||S||I?"":`<a href="${C.anchor}" class="popover-go">go →</a>`;return L+R},m=(y,E)=>{const $=y.firstElementChild;if(!($ instanceof HTMLElement))throw new Error("The rail has no card to reveal.");const T=$.offsetTop,C=Math.max(0,y.scrollHeight-y.clientHeight);y.scrollTop=Math.min(C,E.offsetTop-T)},f=y=>{e.getPersistentPopovers()||c(y);const E=l("rail",p(y)),$=a();$.append(E),d(y,E,"rail"),m($,E)},h=(y,E)=>{const $=y.closest(`.${_i}`);if($===null)throw new Error("Source-quote trigger has no widget parent.");const T=y.getAttribute(Ea);if(T===null)throw new Error("Source-quote trigger is missing target data.");const C=e.getContext(),L=nw(C.jprobInstance,K3(T));if(L.kind!=="sourcequote")throw new Error("A source-quote trigger must resolve to source quotes.");e.getPersistentPopovers()||c(y);const A=rF(L.quotes,C),w=l("sourcequote",A);$.append(w),d(y,w,"sourcequote"),$.classList.toggle(vi,E)},v=y=>{const E=na(y.target,`.${rw}`);if(E){const C=[...t.values()].find(L=>L.popover.contains(E));C&&s(C,!0);return}const $=na(y.target,`.${oa}`);if($){const C=t.get($);if(C){const L=$.closest(`.${_i}`);L!=null&&L.classList.contains(vi)?s(C):L==null||L.classList.add(vi)}else try{h($,!0)}catch(L){o(L)}return}const T=na(y.target,`.${Dae}, .${EA}`);if(T){const C=t.get(T);if(C)s(C);else try{f(T)}catch(L){o(L)}return}!e.getPersistentPopovers()&&!g_(y.target)&&y.target instanceof Node&&!r.some(C=>C.popover.contains(y.target))&&c()},_=y=>{const E=na(y.target,`.${oa}`);if(!(!E||t.has(E)))try{h(E,!1)}catch($){o($)}},g=y=>{const E=y.target,$=E instanceof Element?E.closest(`.${_i}`):null;if(!$||Fae($,y.relatedTarget)||$.classList.contains(vi))return;const T=$.querySelector(`.${oa}`);if(!T)return;const C=t.get(T);C&&s(C)},b=y=>{if(y.key!=="Escape")return;const E=r.at(-1);E&&(y.preventDefault(),s(E,!0))};return document.addEventListener("click",v),document.addEventListener("mouseover",_),document.addEventListener("mouseout",g),document.addEventListener("focusin",_),document.addEventListener("focusout",g),document.addEventListener("keydown",b),{closeDisconnectedTriggers:()=>{for(const y of[...r])y.trigger.isConnected||s(y)},teardown:()=>{document.removeEventListener("click",v),document.removeEventListener("mouseover",_),document.removeEventListener("mouseout",g),document.removeEventListener("focusin",_),document.removeEventListener("focusout",g),document.removeEventListener("keydown",b),c(),i==null||i.remove(),i=null}}}const xae="dag-highlight";function iw(e,n){var o;const t=(o=e.closest(`.${kh}`))==null?void 0:o.getAttribute(Sa);if(!t)return;const r=t.replace(/[\\"]/g,"\\$&"),i=document.querySelectorAll(`[${Sa}="${r}"]`);for(const a of i)a.classList.toggle(xae,n)}function Bae(){const e=n=>{const t=n.target;return t instanceof Element?t.closest(`.${Mh}`):null};document.addEventListener("mouseover",n=>{const t=e(n);t&&iw(t,!0)}),document.addEventListener("mouseout",n=>{const t=e(n);t&&iw(t,!1)})}const Hae="Select result set";function Uae(){return"<p>These controls choose the set of trials whose belief distributions are mixed. Which of them you are reading — the mixture, or one trial — is the <code>mix</code> selector under the sticky bar.</p>"+wL()}const OO="jtask-group-select",NO="adhoc-result-select",kO="",MO=":";function Gae(e){return e.queryMode+MO+e.entryIdx}function jae(e){const[n,t,...r]=e.split(MO);if(r.length>0||t===void 0)return null;const i=Tu.find(o=>o===n);return i===void 0||!/^\d+$/.test(t)?null:{queryMode:i,entryIdx:Number(t)}}const Vae="None",Wae="Select None in Adhoc results to enable methodical selection.",Xae="result-set-area",au="result-set-control",$3="result-set-control-label",Kae="result-set-single-value";function Yae(e,n){e.className=Xae,e.replaceChildren(),e.appendChild(ut(Uae));const t=n.activeAdhocEntry!==null;if(n.selectedJtaskGroupId!==null&&(e.insertAdjacentHTML("beforeend",zae(n,t)),n.mixtureGroupInterpretation!==null)){const r=document.createElement("div");r.className=au,r.insertAdjacentHTML("beforeend",`<span class="${$3}">Model configurations</span>`);const i=document.createElement("div");r.appendChild(i),Zne(i,{interpretation:n.mixtureGroupInterpretation,disabled:t}),e.appendChild(r)}Jae(n.presetData)&&e.insertAdjacentHTML("beforeend",Qae(n)),t&&n.selectedJtaskGroupId!==null&&e.insertAdjacentHTML("beforeend",`<p class="result-set-adhoc-note">${Wae}</p>`)}function Jae(e){return e.adhocPlainnumEntries.length>0||e.adhocPlaincodeEntries.length>0}function zae(e,n){const t=`<span class="${$3}">Task group</span>`,r=u2(e.presetData.richcodeResults);if(e.jtaskGroupIds.length<=1){const a=e.selectedJtaskGroupId??"",u=r.has(a)?i$+a:a;return`<div class="${au}">${t}<span class="${Kae}" title="${K(a)}">${x(u)}</span></div>`}const i=o$(e.jtaskGroupIds,r),o=e.jtaskGroupIds.map((a,u)=>`<option value="${K(a)}" title="${K(a)}"${a===e.selectedJtaskGroupId?" selected":""}>${x(i[u])}</option>`).join("");return`<div class="${au}">${t}<select id="${OO}" class="jtask-group-select"${n?" disabled":""} title="Task group: which prompt version these results answer">${o}</select></div>`}function Qae(e){const n=e.activeAdhocEntry;let t=`<option value="${kO}"${n===null?" selected":""}>${Vae}</option>`;for(const r of Tu){const i=Vr(e.presetData,r);for(let o=0;o<i.length;o++){const a=i[o],u=e.presetData.adhocPresets[a.presetIndex];if(u===void 0)continue;const s=a2(u,r,a);if(s===void 0)continue;const c=n!==null&&n.queryMode===r&&n.entryIdx===o;t+=`<option value="${Gae({queryMode:r,entryIdx:o})}"${c?" selected":""}>${x(RF(u,r,s))}</option>`}}return`<div class="${au}"><span class="${$3}">Adhoc results</span><select id="${NO}" class="adhoc-select">${t}</select></div>`}const Zae=["VISIBLE_AOPTS"],eue={dataAttribute:"data-aopt-body",selectClass:"aopt-body-select",inputClass:"aopt-body-input",textInputClass:"aopt-body-text-input",checkboxClass:"aopt-body-checkbox",checkboxGroupClass:"aopt-body-checkbox-group"};function nue(e,n,t,r=x,i){const o=[];for(const a of e){if(!Ii(a))continue;const u=ge(a.id),s=t[u]??a.default_value,c=(i==null?void 0:i(a))??{atStart:"",atEnd:""};let l=$2(u,a);const d=a.input_type==="MultiStringFromSet",p=d?1:2,m=new Set(d?a.required_values??[]:[]),f=Array.isArray(a.allowed_values)&&a.allowed_values.filter(v=>!m.has(v)).length>=p;if(n&&(f||a.allowed_values===void 0))l+=" = "+Ra(u,a,s,eue,a.input_type);else{const v=Array.isArray(s)?s.join(", "):String(s);l+=` <span class="cparam-or-aopt-value">= ${x(v)}</span>`}o.push(`<div class="cparam-or-aopt" id="opt-${K(u)}"><div class="cparam-or-aopt-header">${l}</div><div class="cparam-or-aopt-defn">${c.atStart}${r(a.defn)}${c.atEnd}</div></div>`)}return o.join("")}function tue(e,n,t,r,i){const o=nue(t.get_aopts(),i.ui.interactionMode==="Estimate",r.displayOptionValues,u=>Ge(u,r),u=>Xn(u.srcquotes,r)),a=document.getElementById(`${Fe[n]}-section`);if(!o){e.innerHTML="",a&&(a.hidden=!0);return}a&&(a.hidden=!1),e.innerHTML=o}const rue=2,iue="(no recorded choice)",PO="data-tchoice-recorded",Cv="data-tchoice-bare",ow={dataAttribute:"data-tchoice-body",selectClass:"tchoice-body-select",inputClass:"tchoice-body-input",checkboxClass:"tchoice-body-checkbox"};function oue(e){return e.input_type==="Bool"||e.allowed_values.length>=rue}function aw(e,n,t){var i;const r=(i=e[n])==null?void 0:i[t];return r===void 0?"":String(r)}function DO(e){return e===""?iue:e}function aue(e,n,t){const r=n.map((a,u)=>`data-trial-${u}="${K(aw(n,u,e))}"`).join(" "),i=aw(n,t,e);return`<span class="tchoice-recorded${i===""?" tchoice-recorded-empty":""}" ${PO}="${K(e)}" ${r}>${x(DO(i))}</span>`}const uue="Any number in",uw="∞";function sue(e){if(Cr(e))return c$(e.allowed_values);const[n]=Ur([e]),t=n.lo===null?`(-${uw}`:`${n.loClosed?"[":"("}${n.lo}`,r=n.hi===null?`${uw})`:`${n.hi}${n.hiClosed?"]":")"}`;return`<div class="${s$}">${uue} ${x(`${t}, ${r}`)}</div>`}function cue(e,n,t,r={}){const{resultChoicesPerTrial:i,trialSelection:o=Ar,processDefn:a=x,renderSrcquotes:u}=r,s=[];for(const c of e){const l=Li(c.id),d=(u==null?void 0:u(c))??{atStart:"",atEnd:""};let p=$2(l,c);const m=ww(c),h=Cr(c)&&oue(c)||m,v=n&&h,_=!n&&h&&o.kind==="trial"&&i!==void 0&&i.some(b=>b[l]!==void 0);let g="";if(v&&m){const b=t[l]??"";p+=" = "+Ra(l,c,b,ow,"Number")}else if(v&&Cr(c)){const b=t[l]??c.default_value;p+=" = "+Ra(l,c,b,ow,c.input_type)}else _?p+=" = "+aue(l,i,o.recordTrialIndex):g=sue(c);s.push(`<div class="cparam-or-aopt" id="tchoice-${K(l)}" ${Cv}="${K(l)}"><div class="cparam-or-aopt-header">${p}</div><div class="cparam-or-aopt-defn">${d.atStart}${a(c.defn)}${d.atEnd}</div>`+g+"</div>")}return s.join("")}function lue(e){const n=Nn(e.ui);return n===null?{}:Lu(e,n).trial_choices??{}}function FO(e,n,t,r,i,o,a){const u=n.get_tchoice_decls(),s=Nn(r.ui),c=s!==null,l=cue(u,c,lue(r),{resultChoicesPerTrial:c?void 0:i,trialSelection:a,processDefn:p=>Ge(p,t),renderSrcquotes:p=>Xn(p.srcquotes,t)}),d=document.getElementById(`${Fe.TCHOICE}-section`);if(!l){e.innerHTML="",d&&(d.hidden=!0);return}d&&(d.hidden=!1),e.innerHTML=l,qO(e,s!==null?{mode:"edit",reasoning:Lu(r,s).reasoning_response}:{mode:"read",reasoning:a.kind==="mix"?void 0:o[a.recordTrialIndex]})}function qO(e,n){for(const t of e.querySelectorAll(`[${Cv}]`)){const r=t.getAttribute(Cv)??"";gC(t,r,n,t.querySelector(":scope > .cparam-or-aopt-header"))}}function due(e,n,t){for(const r of e.querySelectorAll(`[${PO}]`)){const i=r.getAttribute(`data-trial-${n}`)??"";r.textContent=DO(i),r.classList.toggle("tchoice-recorded-empty",i==="")}qO(e,{mode:"read",reasoning:t[n]})}function fue(e,n){if(e.input_type==="Bool"){if(n.type!=="checkbox")throw new Error(`Bool tchoice ${e.id} expected a checkbox control`);return n.checked===!0}if(e.input_type==="Number"){const t=Number(n.value);if(!Number.isFinite(t))throw new Error(`Invalid numeric tchoice value for ${e.id}: ${n.value}`);return t}return n.value}function pue(e,n){if(n.value.trim()==="")return null;const t=Number(n.value);if(!Number.isFinite(t))return null;const[r]=Ur([e]);return Rr(r,t)?t:null}function mue(e,n,t){if(n===void 0)return null;if(n!=="claudecode"&&n!=="codex")return`${t} carries invalid agent_cli ${JSON.stringify(n)}`;if(typeof e!="string")return`${t} carries agent_cli ${JSON.stringify(n)} without a model family`;let r;try{r=xi(e)}catch(i){return`${t} carries agent_cli ${JSON.stringify(n)} for unknown model ${JSON.stringify(e)}: ${String(i)}`}return n!==r?`${t} model ${JSON.stringify(e)} carries agent_cli ${JSON.stringify(n)}; expected ${JSON.stringify(r)}`:null}function hue(e){return mue(e.model,e.agent_cli,"result")}function vue(e,n){const t=[];for(const r of e){const i=hue(r);if(i===null){t.push(r);continue}const o=`methodical provenance mismatch for ${JSON.stringify(r.label)}: ${i}`;console.warn(`omitting ${o}`)}return t}class $s extends Error{}function sw(e,n,t){return JSON.stringify([e,n,t])}function $h(e,n,t){return`adhoc ${n} entry ${JSON.stringify(t)} of ${JSON.stringify(e)}`}function ta(e,n,t){console.warn(`${e}; ${n}`)}const cw="showing the entry without precomputed stats";function ra(e){return e.precomputed!==void 0&&Object.keys(e.precomputed).length>0||e.precomputed_aux_forms!==void 0}function _ue(e,n){if(e==="plainnum"){const t=n;return ra(t)||t.trials.some(ra)}return n.cparam_combos.some(t=>ra(t)||t.trials.some(ra))}function gue(e,n){const t=i=>{const{precomputed:o,precomputed_aux_forms:a,...u}=i;return u};if(e==="plainnum"){const{precomputed_aux_forms:i,...o}=n;return{...o,precomputed:{},trials:o.trials.map(t)}}const r=n;return{...r,cparam_combos:r.cparam_combos.map(i=>{const{precomputed_aux_forms:o,...a}=i;return{...a,precomputed:{},trials:i.trials.map(t)}})}}function xO(e,n){const t=new Map;for(const r of n){const i=r.trial_index;if(!Number.isInteger(i)||i<0||i>=e.length||t.has(i))throw new $s(`stats for trial ${i}, which the entry does not have there`);t.set(i,r)}return e.map((r,i)=>{const o=t.get(i);return o===void 0?r:{...r,...o.precomputed===void 0?{}:{precomputed:o.precomputed},...o.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:o.precomputed_aux_forms}}})}function BO(e){return{precomputed:e.precomputed,...e.precomputed_aux_forms===void 0?{}:{precomputed_aux_forms:e.precomputed_aux_forms}}}function bue(e,n){const[t,...r]=n.cparam_combos,i=Kt(e.cparam_values??{});if(t===void 0||r.length>0||Kt(t.cparams)!==i)throw new $s(`stats for combination(s) ${n.cparam_combos.map(o=>Kt(o.cparams)).join(", ")}; a plainnum entry has exactly its own combination, ${i}`);return{...e,...BO(t),trials:xO(e.trials,t.trials)}}function yue(e,n){const t=new Map;for(const i of n.cparam_combos)t.set(Kt(i.cparams),i);const r=new Set(e.cparam_combos.map(i=>Kt(i.cparams)));for(const i of t.keys())if(!r.has(i))throw new $s(`stats for combination ${i}, which the entry does not answer`);return{...e,cparam_combos:e.cparam_combos.map(i=>{const o=t.get(Kt(i.cparams));return o===void 0?i:{...i,...BO(o),trials:xO(i.trials,o.trials)}})}}function Eue(e,n,t){const r=new Map;for(const o of n){const a=sw(o.name_or_pseudoname,o.query_mode,o.label);if(r.has(a)){ta(`the adhoc precomputed stats name the ${$h(o.name_or_pseudoname,o.query_mode,o.label)} twice`,"using the first");continue}r.set(a,o)}const i=e.map(o=>{const a=(u,s,c)=>s.map(l=>{const d=sw(o.name_or_pseudoname,u,l.label),p=r.get(d);r.delete(d);const m=$h(o.name_or_pseudoname,u,l.label);if(_ue(u,l))return ta(`the ${m} carries inline precomputed stats in adhoc-presets.json, whose stats slots stay empty (stats come from adhoc-precomputed.json)`,cw),gue(u,l);if(p===void 0)return l;try{return c(l,p)}catch(f){if(!(f instanceof $s))throw f;return ta(`the adhoc precomputed stats of the ${m} carry ${f.message}`,cw),l}});return{...o,plaincode:a("plaincode",o.plaincode,yue),plainnum:a("plainnum",o.plainnum,bue)}});for(const o of r.values())ta(`the adhoc precomputed stats name the ${$h(o.name_or_pseudoname,o.query_mode,o.label)}, which no loaded preset has`,"ignoring them");return i}const Sue=["framing-notes-explainer","srcquote-explainer"],wue=Object.values(Fe).filter(e=>!Sue.includes(e)).map(e=>`${e}-section`),HO=2;function UO(e,n){const t=n+HO;let r=null;for(const i of e)i.top>t||(r===null||i.top>r.top)&&(r=i);return r===null?null:r.id}function Aue(e,n,t){const r=[...e].sort((l,d)=>l.top-d.top);if(r.length===0)return null;const i=r[0],o=UO(e,n),a=o===null?-1:r.findIndex(l=>l.id===o),u=r[a+1];return u===void 0?i.id:u.top-n<=t+HO?u.id:i.id}function $ue(e=document){return UO(GO(e),T3(e))}function Tue(e=document){return Aue(GO(e),T3(e),Iue(e))}function T3(e=document){var r;const n=parseFloat(((r=e.defaultView)==null?void 0:r.getComputedStyle(e.documentElement).getPropertyValue(cL))??"");if(Number.isFinite(n))return n;const t=e.getElementById(sL);return t===null?0:t.getBoundingClientRect().bottom}function Iue(e){var t;const n=e.documentElement;return Math.max(0,n.scrollHeight-n.clientHeight-(((t=e.defaultView)==null?void 0:t.scrollY)??0))}function GO(e){const n=[];for(const t of wue){const r=e.getElementById(t);if(r===null)continue;const i=r.getBoundingClientRect();i.width===0&&i.height===0||n.push({id:t,top:i.top})}return n}const Lue="url",Rue="copied ✓",Cue="in address bar",Oue=1200;function Nue(e,n,t){const r=n.toString(),i=t===null?"":`#${encodeURIComponent(t)}`;return`${e.origin}${e.pathname}${r?"?"+r:""}${i}`}function kue(e,n,t=document){const{params:r,errors:i}=Ane(e,n),o=$ue(t);return{href:Nue(new URL(t.location.href),r,o),errors:i}}function lw(e,n){e.textContent=n,setTimeout(()=>{e.textContent=Lue},Oue)}async function Mue(e,n,t){var o;const{href:r,errors:i}=kue(n,t);for(const a of i)console.error(`[view_share_link] ${a}`);window.history.replaceState(null,"",r);try{if(!((o=navigator.clipboard)!=null&&o.writeText))throw new Error("Clipboard access is unavailable in this browser.");await navigator.clipboard.writeText(r),lw(e,Rue)}catch(a){console.error("[view_share_link] copying the view link failed",a),lw(e,Cue)}}function Pue(e,n){for(const t of e.querySelectorAll(`.${kw}`)){const r=t.dataset.bareid,i=t.dataset.mname;if(r===void 0||i===void 0)throw new Error("Toggleable symbol ref is missing data-bareid or data-mname.");t.textContent=n?i:r}}function Due(e){const n=e.getViewedSource();try{e.renderCurrentView();return}catch(t){if(!e.shouldRecover(n))throw t;try{e.switchToSafeYours(n),e.renderSafeYoursView()}catch(r){throw new AggregateError([t,r],`View ${JSON.stringify(n)} failed, and the fail-safe Yours view also failed`)}e.recovered(n,t)}}const Fue=[Dte,Nte,Yre];function uu(e){pae(e,{containers:Fue,thresholdChars:Ye().longTextAbbrevThreshold,startAbbreviated:N.ui.longTextAbbrev})}let H,N,ie,bi,su=M2(),sn,tn,cn,li,Po,qe=null,va=0,Un=null,Ov=null;const dw="calculator-section",que="plainnum",xue="There are no methodical trial results to read for this problem.",Bue="result-set-empty-state";async function Yse(e){const n=await uO();tB(),history.scrollRestoration="manual",Joe(),IO(Ye()),jO(e,n),bse(),Ese();const t=Xue();sQ(t),$Q(t),qe=qae({getContext:Tn,getPersistentPopovers:()=>N.ui.persistentPopovers}),Bae(),window.addEventListener("resize",R3),window.addEventListener("pagehide",()=>{Do(),ke()}),kN(pn)}function jO(e,n){var u,s;va++,Un==null||Un.abort(),Un=null,PY(),HY(),zY(),xY(),yZ(),H=nk(e.jpdefn);const t=Eue(e.adhocPresets??[],hq(e.adhocPrecomputed??[])),r=LF(t);ie={adhocPresets:t,adhocPlainnumEntries:r.plainnum,adhocPlaincodeEntries:r.plaincode,richcodeResults:vue(CF(vq([...e.richcodeResults??[],...n.rdevRichcodeResults]))),jtaskHashGroups:((u=e.jprobWebConfig)==null?void 0:u.jtask_hash_groups)??[]},Hue(),bi={presetData:ie,defaultView:Mne((s=e.jprobWebConfig)==null?void 0:s.default_view,Mt())};const{state:i,readerFacingMessages:o}=Xx(H,bi);N=i,sn=$F(e.jpdefn),tn=e.formRegistry,cn=e.barrierRegistry??{},li=e.cparamComboFilter,Po=e.cparamFilterDescription;const a=wne(N,Mt(),bi.defaultView);if(su=a.linkAppliedUi,!a.namedSelection)for(const c of o)Xt(Ux,new Error(c));YR(),iB(su,S$(bi))&&jne({openedTheDefaultViewAlone:a.askedForDefaultView&&!a.carriedViewKeys,viewParamsLeftTheAddressBar:a.askedForDefaultView}),zoe(N.ui.sidePanelExpanded),Vue(),pn()}function Mt(){return{jprobTemplate:H,presetData:ie}}function En(){return Xr(N.ui,{presetData:ie})}function Nv(){const e=En();return e.kind==="adhoc"?qF(e.entry,ie):null}function ke(){oB(su,N.ui),R$(H.config,aB(N.ui,su),bi)}function Hue(){const e=VF(ie);if(e.length===0)return;const n=`these adhoc entries are not uniquely named, so a link or a remembered view naming one of them shows the first: ${e.join("; ")}`;Xt("Adhoc results",new Error(n))}function Uue(){for(const e of jR)Ve(e)}function VO(){Ve("calc_pin"),Ve("calc_unpin")}function WO(){VO(),Ve("calc_value"),Ve("inspect_value")}const Gue={showFramingNotes:"show_framing"};function kv(e,n){N.ui[e]=n,Mr(e,n),ke();const t=Gue[e];if(t!==void 0&&Ve(t),e==="longTextAbbrev"){ro(()=>{mae(document,n),fw(e,n)});return}if(e==="showGlobalProseFoldControls"){ro(()=>{const r=document.getElementById("main-content");r&&mO(r,n),R3(),fw(e,n)});return}pn()}function fw(e,n){const t=document.getElementById(Wt(e));t instanceof HTMLInputElement&&(t.checked=n)}function jue(){return{ui:N.ui,srcquotesInlined:v3(N.ui.srcquotesInlinedOverride,I3().srcquotes_inlined)}}function Vue(){const e=H.layout.sections.html.find(n=>"chunkid"in n&&n.style===Iw);if(e&&"chunkid"in e){const n=H.find_textchunk_defn(e.chunkid);n&&(document.title=Ek(n))}}async function pw(e){const n=OQ(e);if(!n)throw new Error(`swapJprob: no manifest module for aid '${e}' (looked for ${w_(e)}).`);const t=await n(),r=await uO(t.manifest);Do(),ke();const i=window.location.pathname.replace(/[^/]+\.html$/,`${e}.html`);history.pushState(null,"",i),jO(t.manifest,r)}function XO(e,n){e&&(N.ui.foldOpenById[e]=n,e===Fr&&Ve(no),ke())}function Wue(e){!(e instanceof HTMLDetailsElement)||e.open||(e.open=!0,XO(e.id,!0))}function Xue(){return{toggle_mnames:()=>{N.ui.symbolMnames=!N.ui.symbolMnames,Mr("symbolMnames",N.ui.symbolMnames),ke(),Pue(document,N.ui.symbolMnames)},goto_calculator:YO,goto_top:()=>{window.scrollTo({top:0})},switch_interaction_mode:()=>{const e=Mse();e!==null&&lN(e)},toggle_srcquotes_inlined:()=>{H.has_srcquotes()&&(N.ui.srcquotesInlinedOverride=Zie(N.ui.srcquotesInlinedOverride,I3().srcquotes_inlined),ke(),Ve("srcquotes_view"),pn())},toggle_keymap:uoe,toggle_framing_notes:()=>{kv("showFramingNotes",!N.ui.showFramingNotes)},toggle_long_text_abbrev:()=>{kv("longTextAbbrev",!N.ui.longTextAbbrev)},goto_next_section:()=>{var n;const e=Tue();e!==null&&((n=document.getElementById(e))==null||n.scrollIntoView({block:"start"}))}}}function I3(){if(N.ui.interactionMode==="Estimate")return N.optionValues;const e=$n(N.ui,ie);if(!e)return N.optionValues;const n={...N.optionValues};for(const t of H.get_aopts()){const r=ge(t.id);r in e.aopts&&(n[r]=e.aopts[r])}if("cparam_values"in e&&e.cparam_values)for(const t of H.get_cparams()){const r=ge(t.id);r in e.cparam_values&&(n[r]=e.cparam_values[r])}return n}function Tn(){const e=I3(),n=!!(e.show_typical_examples??Uv),t=v3(N.ui.srcquotesInlinedOverride,e.srcquotes_inlined),r=Bv(H,{symbolMnames:N.ui.symbolMnames}),i=tt(En());return{jprobInstance:Hw(H,Bw(H,e,i),i),showTypical:n,refLookup:r,srcquotesInlined:t,renderedSrcquoteIds:new Set,showFramingNotes:N.ui.showFramingNotes,displayOptionValues:e,showExampleClassification:N.ui.showExampleClassification,showBareIds:noe(N.ui.interactionMode),exampleFoldState:N.ui.exampleFoldState,foldOpenById:N.ui.foldOpenById,popoverAllRefs:N.ui.popoverAllRefs}}const Kue="Keeping your place on the page";function KO(){return{root:document.getElementById("main-content"),viewportTopInsetPx:T3(document)}}function L3(e){try{return e()}catch(n){return Xt(Kue,n),null}}function Do(){const e=Ov;return e===null||e.aid!==H.aid?null:L3(()=>{const n=cx(KO());return N.ui.scrollPositionByInteractionMode[e.interactionMode]=n,n})}function Mv(e){L3(()=>lx(e,KO()))}function YO(){const e=document.getElementById(dw);if(!e)throw new Error(`#${dw} not found.`);Wue(e),e.scrollIntoView({block:"start"})}function ro(e){const n=Do();e(),n!==null&&Mv(n)}function Yue(e,n,t,r){if(e==="landOnCalculator"){L3(YO);return}if(n===null&&window.location.hash!=="")return;const i=n!==null&&n.aid===r.aid;if(i&&n.interactionMode===r.interactionMode){t!==null&&Mv(t);return}const a=N.ui.scrollPositionByInteractionMode[r.interactionMode]??null??(i?t:null);if(a===null){window.scrollTo({top:0});return}Mv(a)}function pn(e="preserveReadingPosition"){const n=Ov,t=Do();Fo(JO);const r={aid:H.aid,interactionMode:N.ui.interactionMode};Ov=r,Yue(e,n,t,r)}function Fo(e){Due({getViewedSource:En,shouldRecover:n=>n.kind!=="yours"||Jue(),renderCurrentView:()=>{zue(),e()},switchToSafeYours:Que,renderSafeYoursView:JO,recovered:Zue})}function Jue(){return ie.adhocPresets.length>0||ie.richcodeResults.length>0}function zue(){if(N.ui.interactionMode==="ReadTrials"&&N.ui.readTrials.adhoc!==null&&$n(N.ui,ie)===null)throw new Error(`The selected adhoc entry ${JSON.stringify(N.ui.readTrials.adhoc)} is missing from the loaded data`)}function Que(e){N.ui.interactionMode="Estimate",N.ui.estimateQueryMode=que,N.ui.readTrials={...N.ui.readTrials,adhoc:null,trial:Yn},N.ui.compare=S2,ie={adhocPresets:[],adhocPlainnumEntries:[],adhocPlaincodeEntries:[],jtaskHashGroups:[],richcodeResults:[]}}function Zue(e,n){try{ke()}catch(r){Xt("Persisting the fail-safe Yours selection",r)}for(const r of jR)try{Ve(r)}catch(i){Xt(`Clearing the failed ${r} URL override`,i)}const t=e.kind==="yours"?"Rendering Yours with loaded result data":`Rendering chosen result ${JSON.stringify(e)}`;Xt(`${t}; switched safely to Yours and disabled loaded result data until reload`,n)}function ese(e){mO(e,N.ui.showGlobalProseFoldControls),JQ({hasCparams:H.has_cparams(),bodyHasProseFolds:b3(e),bodyHasExampleLists:goe(e)})}function JO(){const e=Tn(),n=document.getElementById("main-content"),t=Rse(),r=MQ(H.aid),i=t===null&&N.ui.interactionMode!=="Compare";N.ui.interactionMode==="Compare"?uN(e):t===null?(ioe(n,H,e),poe(n,r==null?void 0:r.version),Coe(n,$n(N.ui,ie)!==null)):n.innerHTML=`<p class="${Bue}">${x(t)}</p>`;const o=TR(N,ie);if(HQ(N,r??{},o,{currentAid:H.aid,currentFamily:uL(H.aid)},{available:bo(ie),active:N.ui.interactionMode},V$(N.ui.interactionMode,H)),tse(),rse(e),i){nse(e,o);const a=document.getElementById(`${Fe.SRCQUOTE_EXPLAINER}-content`);a&&Cae(a,e)}ese(n),R3(),qe==null||qe.closeDisconnectedTriggers(),uu(n)}function nse(e,n){for(const c of Zae){const l=document.getElementById(`${Fe[c]}-content`);l&&tue(l,c,H,e,N)}const t=document.getElementById(`${Fe.TCHOICE}-content`);t&&FO(t,H,e,N,OR(N,ie),H_(N,ie),vt(N,ie));const r=document.getElementById("cparams-content");r&&dH(r,H,e,N,En(),li,Po),QO(e),He.renderAll({ctx:e,availableModes:n});const i=document.getElementById(f$);i&&eQ(i,N,tt(En()),tn,ie),tN(e);const o=document.getElementById(l$);o&&Gte(o,e);const a=document.getElementById("framing-notes-root-content");a&&Ute(a,H,e,N.ui),Hte(H,e,N.ui);const u=document.getElementById("framing-notes-explainer-content");u&&jte(u,e);const s=vt(N,ie);zO(s),ZO(s),$O(s,$n(N.ui,ie))}const He=Toe([{kind:"single",subentry:"CALCULATOR_HEADER",render(e,{availableModes:n}){LH(e,H,ie,N),e.prepend(Kz(()=>sZ(H,En(),Qn(N,ie),Iv(H,tn,cn)!==null),nZ));const t=e.querySelector(`#${x2}`);yL(t,N,n,qQ)}},{kind:"pair",pair:["CALCULATOR_INPUT","CALCULATOR_RESULTS"],render(e,n,{ctx:t}){$v(e,n,H,t,N,ie,tn,cn,li,Po),hO(n,aN(N,ie))}},{kind:"single",subentry:"DERIVED_FORMS",render:(e,{ctx:n})=>hse(e,n)},{kind:"single",subentry:"SVAR_CARDS",render:(e,{ctx:n})=>are(e,H,n,N,ie)},{kind:"single",subentry:"YOURS_SAVED_LIST",render:e=>lie(e,H,N)},{kind:"single",subentry:"JOINT_DEPENDENCE",render:(e,{ctx:n})=>Jie(e,N,H,n,ie,tn,cn)},{kind:"single",subentry:"YOURS_CODE_INPUT",visible:()=>Nn(N.ui)==="plaincode"||Nv()!==null,render(e){const n=Iv(H,tn,cn);if(Nn(N.ui)==="plaincode")jS(e,H,N.yoursCodeRecord,"edit",n);else{const t=Nv();t&&jS(e,H,t,"view",n)}}}]);function qo(e){return{get ctx(){return e??(e=Tn())},get availableModes(){return TR(N,ie)}}}function zO(e){const n=document.getElementById(`${Fe.RESPONSE_NOTES}-content`);n&&(Zre(n,Qre(N,ie,e)),uu(n))}function tse(){const e=document.getElementById(Ss);e&&Doe(e,H,N,ie)}function rse(e){const n=[];N.ui.interactionMode==="ReadTrials"&&n.push({title:Hae,render:ise});const t=En();xR(N.ui.interactionMode,H,t)&&n.push({title:nne(t),render:r=>tne(r,H,N,t,nN(e))}),Zoe({visible:n.length>0,areas:n}),BR(H,N,t)}function ise(e){const n=Mt(),{resultSet:t}=kn(N.ui.readTrials,n),r=kn({...N.ui.readTrials,adhoc:null},n).resultSet;Yae(e,{presetData:ie,jtaskGroupIds:Wr(ie),selectedJtaskGroupId:r.kind==="methodical"?r.jtaskGroupId:null,mixtureGroupInterpretation:r.kind==="methodical"?r.interpretation:null,activeAdhocEntry:t.kind==="adhoc"?t.entry:null})}function QO(e){const n=document.getElementById(D$);n&&iH(n,H,e,En(),kee(N,ie),N.ui.probAsOdds)}function ZO(e){var t;const n=document.getElementById(`${Fe.ESTIMATION}-section-header`);n&&Hee(n,Nee(N,ie),e,((t=$n(N.ui,ie))==null?void 0:t.label)??"")}function ose(e){const n=vt(N,ie),t=Qn(N,ie);if(N.ui.readTrials={...N.ui.readTrials,trial:eN(e)},ke(),Ve("trial_index"),Ve("trial_entry"),Qn(N,ie)!==t){pn();return}ro(()=>ase(n))}function ase(e){const n=vt(N,ie),t=H_(N,ie),r=document.getElementById(Ss);r&&AO(r,n);const i=He.container("SVAR_CARDS");i&&(CC(i,n,t,Vn(N.ui),G_(N,ie),io()),uu(i));const o=Tn(),a=document.getElementById(`${Fe.TCHOICE}-content`);a&&(n.kind==="trial"&&e.kind==="trial"?due(a,n.recordTrialIndex,t):FO(a,H,o,N,OR(N,ie),t,n),uu(a)),zO(n),ZO(n),di(o),QO(o),$O(n,$n(N.ui,ie)),Lse()}function use(e){const n=Number(e.getAttribute(LL));if(!Number.isInteger(n)||n<0||n>=IR(N,ie)){console.warn("Show single trial view: the link names no trial of the viewed record; ignoring");return}const t=e.getAttribute(RL),r=t===null?ku(H,N):JSON.parse(t),i=eN(Ui(n));i.kind!=="mix"&&(Object.assign(N.ui,Ioe(N.ui,i,r)),ke(),Ve("trial_index"),Ve("trial_entry"),WO(),pn())}function sse(e){const n=cse(e);if(n===null){console.warn("View in ReadTrials: the button names no published result set; ignoring");return}const t=Loe(N.ui,n);N.ui.inspectedCparamValues=t.inspectedCparamValues,N.ui.cparamValues=t.cparamValues,N.ui.cparamPinned=t.cparamPinned,WO(),Bo({interactionMode:"ReadTrials",readTrials:t.readTrials},"landOnCalculator")}function cse(e){const n=u=>{const s=e.getAttribute(u);if(s!==null)try{return JSON.parse(s)}catch{return}},t=e.getAttribute(iC),r=n(oC),i=n(aC);if(t===null||!lse(r)||!dse(i))return null;const o=e.getAttribute(Sv),a=n(Sv);return o!==null&&!fse(a)?null:{jtaskGroupId:t,configuration:r,combination:i,singleContributingTrial:o===null?null:a}}function lse(e){if(typeof e!="object"||e===null)return!1;const{model:n,version:t,effort:r}=e;return typeof n=="string"&&typeof t=="string"&&typeof r=="string"}function dse(e){return typeof e!="object"||e===null||Array.isArray(e)?!1:Object.values(e).every(n=>typeof n=="string"||typeof n=="number"||typeof n=="boolean")}function fse(e){if(typeof e!="object"||e===null)return!1;const{entry_id:n,entry_trial_index:t}=e;return typeof n=="string"&&Number.isInteger(t)&&t>=0}function eN(e){if(e.kind==="mix")return Yn;if(N.ui.readTrials.adhoc!==null)return{kind:"adhoc-trial",entryTrialIndex:e.recordTrialIndex};const n=$n(N.ui,ie),t=n===null||!("cparam_combos"in n)?null:y2(n,e.recordTrialIndex);return t===null?(console.warn(`trial selector: record trial ${e.recordTrialIndex} has no stable identity; showing the mixture`),Yn):{kind:"methodical-trial",identity:t}}function nN(e){return{filter:li,description:Po,renderDefn:n=>Ge(n,e)}}function pse(e,n){const t=H.get_cparam(n),r=Uh(t,e,q2);if(typeof r=="boolean")throw new Error(`Cparam ${t.id} produced a boolean value`);N.ui.inspectedCparamValues[n]=r,ke(),Ve("inspect_value"),ro(mse)}function mse(){const e=Tn(),n=He.container("SVAR_CARDS");n&&ure(n,H,N,ie);const t=document.getElementById(Ss);t&&Foe(t,H,N,ie);const r=document.getElementById(Ir);r&&rne(r,H,N,nN(e)),BR(H,N,En()),di(e)}function xo(e){He.render("DERIVED_FORMS",qo(e)),tN(e)}function tN(e){const n=He.container("DERIVED_FORMS"),t=[...document.querySelectorAll(".derived-form")].filter(r=>!(n!=null&&n.contains(r)));rN(t,e)}function rN(e,n){for(const t of e){const r=t.dataset.formId;r&&Tre(t,r,H,n,N,tn,cn,ie)}}function hse(e,n){const t=[...e.querySelectorAll(".derived-form")];rN(t,n),e.hidden=t.every(r=>r.innerHTML==="")}const vse=_O("JOINT_DEPENDENCE");function di(e){He.render("JOINT_DEPENDENCE",qo(e))}function iN(){const e=He.container("JOINT_DEPENDENCE");if(!e)return null;const n=m3(N,H,tn,cn);return n===null?null:{container:e,editorCtx:n,draft:h3(N,n)}}function _se(e,n){c3(N,H,sn,n,e.editorCtx.eligibleSvars,e.editorCtx.degenerateSvars),rO(e.container,n,e.editorCtx)}function oN(e){const n=Tn(),t=He.container("CALCULATOR_RESULTS");if(t&&ys(t,H,n,N,ie,tn,cn),xo(n),e)di(n);else{const r=He.container("JOINT_DEPENDENCE");r&&jie(r,N,H,n,tn,cn)}Ts(),qe==null||qe.closeDisconnectedTriggers()}function gse(e){var r;const n=iN();if(!n)return;const t=Xie(n.draft,e,n.editorCtx.eligibleSvars);c3(N,H,sn,t,n.editorCtx.eligibleSvars,n.editorCtx.degenerateSvars),oN(!0),e.kind==="add"&&((r=document.querySelector(`#${vse} .jde-latent-card:last-child [data-latent-field="name"]`))==null||r.focus({preventScroll:!0}))}function bse(){const e=document.getElementById("sticky-help");e&&e.appendChild(ut(()=>aZ(H,{proseFoldControls:woe(),proseFoldControlsOffInSettings:yse(),interactionModeSelector:GQ(),yoursFixFreeToggle:VQ()})))}function yse(){const e=document.getElementById("main-content");return!N.ui.showGlobalProseFoldControls&&e!==null&&b3(e)}function R3(){const e=document.getElementById(sL);e&&document.documentElement.style.setProperty(cL,`${e.offsetHeight+4}px`)}function Ese(){var n,t,r,i,o,a,u,s,c,l,d,p;document.addEventListener("click",m=>{if(!m.target.closest(`#response-type-toggle, #${x2}`))return;const h=m.target.closest("[data-mode]");if(!h)return;const v=h.dataset.mode;v!==N.ui.inputMode&&(N.ui.inputMode=v,ke(),Ve("response_type"),pn())}),document.addEventListener("change",m=>{const f=m.target;if(f.id!==ov)return;const h=f.value;h!==N.ui.probAsOdds&&(N.ui.probAsOdds=h,ke(),Ve("prob_as_odds"),pn())}),document.addEventListener("click",m=>{const f=m.target.closest(`[${Ki}]`);if(f===null)return;const h=f.getAttribute(Ki);h!==N.ui.densityScale&&(N.ui.densityScale=h,ke(),Ve("density_scale"),oz(document,h))}),document.addEventListener("click",m=>{const f=m.target.closest(".timeline-nav-btn");if(!f)return;const h=f.dataset.timelineTarget;h&&pw(h)}),document.addEventListener("change",m=>{const f=m.target;if(f.id!==mL)return;const h=f.value;if(h===hL){window.location.assign("/hirwebdep/");return}h&&h!==H.aid&&pw(h)}),(n=document.getElementById($_))==null||n.addEventListener("click",m=>{const f=m.target.closest(`[${sv}]`);if(!f)return;const h=Ct.find(v=>v===f.getAttribute(sv));h!==void 0&&lN(h)}),(t=document.getElementById(T_))==null||t.addEventListener("click",m=>{const f=m.target.closest(`.${Vh}`);f&&vw(f)}),(r=document.getElementById(Ss))==null||r.addEventListener("click",m=>{const f=m.target.closest(`.${ws}`);if(!f)return;const h=f.getAttribute(As)??"",v=k$(h);if(v===null){console.warn(`trial selector: unknown selection ${JSON.stringify(h)}; ignoring`);return}ose(v)}),document.addEventListener("click",m=>{const f=m.target.closest(`.${IL}`);f&&use(f)}),document.addEventListener("click",m=>{const f=m.target.closest('a[href^="#"]');if(!f)return;const h=document.getElementById(decodeURIComponent(f.hash.slice(1)));h&&Use(h)}),document.addEventListener("click",m=>{const f=m.target.closest(`.${rC}`);f&&sse(f)}),(i=document.getElementById(Ir))==null||i.addEventListener("click",m=>{m.target.closest(`#${E3}`)!==null&&(N.ui.sidePanelExpanded=Qoe(),ke())}),(o=document.getElementById(Ir))==null||o.addEventListener("change",m=>{const f=m.target;if(f.dataset.inspectedCparam){pse(f,f.dataset.inspectedCparam);return}if(f.id===OO){Ose(f.value);return}if(f.id===NO){kse(f.value);return}const h=f.getAttribute(Za),v=f.getAttribute(W_);if(h!==null&&v!==null){Nse(h,v);const _=document.getElementById(Ir);_&&tte(_,h,v);return}}),(a=document.getElementById(y3))==null||a.addEventListener("click",m=>{const f=m.target.closest("[data-action]");if(!f)return;const h=f.dataset.action;Eoe(h)&&Gse(h)}),(u=document.getElementById("options-controls"))==null||u.addEventListener("change",m=>{const f=m.target;if(f.dataset.pref){kv(f.dataset.pref,f.checked);return}if(f.dataset.prefInt){const h=f.dataset.prefInt,v=parseInt(f.value,10);!isNaN(v)&&v>0&&(Mr(h,v),pn());return}if(f.dataset.prefEnum){const h=f.dataset.prefEnum;Mr(h,f.value),nae(h)?IO(Ye()):pn();return}}),(s=document.getElementById("options-controls"))==null||s.addEventListener("click",m=>{const f=m.target;if(f.id===lL||f.closest(".options-expand-btn")){QQ();return}if(f.id===_L){Mue(f,jue(),Mt());return}if(f.id==="keymap-btn"){fS(),dO();return}if(f.id===vL){MN();return}if(f.id==="save-all-data-btn"){jse();return}if(f.id==="load-all-data-btn"){Vse();return}}),document.addEventListener("click",m=>{const f=m.target,h=document.getElementById("options-controls");!h||h.contains(f)||g_(f)||fS()}),(c=document.getElementById("main-content"))==null||c.addEventListener("input",m=>{const f=m.target;if(f.closest('.yours-code-input[data-variant="view"]'))return;if(f.classList.contains("code-body-input")){d3(N,H,sn,f.value);return}if(tie(f,N,H,sn))return;const h=WS(f);if(h!==null){const v=iN();v&&_se(v,Vie(v.draft,h));return}if(f.classList.contains(nC)){const v=f,_=Ot.find(b=>b===v.getAttribute(Jt)),g=JSON.parse(v.dataset.values??"[]")[parseInt(v.value)];if(_===void 0||g===void 0)return;mw(ix(N.ui.compare,_,g));return}if(f.classList.contains("cparam-slider")){const v=f,_=v.dataset.cparam;if(!_)return;const g=JSON.parse(v.dataset.values??"[]"),b=parseInt(v.value),y=g[b];if(y===void 0)return;N.ui.cparamValues[_]=y,ke(),Ve("calc_value"),hw();return}});const e=document.getElementById("main-content");e&&rie(e,{persistCalcTextarea:Ase,recomputeAfterCalcTextarea:$se,persistAssumptionCard:Tse,recomputeAfterAssumptionCard:Ise}),(l=document.getElementById("main-content"))==null||l.addEventListener("click",m=>{const f=m.target;if(f.classList.contains("code-run-btn")){Dse();return}const h=f.closest(".lloads-copy-to-yours-btn");if(h){Hse(h);return}if(f.classList.contains("copy-to-yours-btn")){Fse();return}const v=f.closest(".jde-summary");if(v){const S=v.closest("details");S&&(N.ui.jointDependenceEditorOpen=!S.open,ke());return}const _=$oe(f);if(_!==null){XO(_.foldId,_.open);return}const g=Wie(f);if(g!==null){gse(g);return}const b=f.closest(".yours-saved-delete");if(b){m.stopPropagation();const S=b.dataset.key,I=b.dataset.kind;S&&Pse(S,I??"plainnum");return}const y=f.closest(".yours-saved-row");if(y){const S=y.dataset.key,I=y.dataset.kind;S&&_w(S,I??"plainnum");return}const E=f.closest(`.${Vh}`);if(E){vw(E);return}const $=f.closest(`.${wu}`);if($){Pv(_3($));return}const T=f.closest(`.${J_}`);if(T){Pv(fO(T));return}const C=f.closest(`.${A3}`);if(C){hae(C);return}const L=f.closest(`.${AL}`);if(L){const S=L.dataset.mcLiveActivationToken;(S===void 0||!bZ(S))&&console.warn(`MC activation: unknown token ${JSON.stringify(S)}; re-rendering without activating`),Er();return}const A=f.closest(`.${Qi}`);if(A){const S=A.dataset.mcPoolToken;(S===void 0||!qY(S))&&console.warn(`MC accumulate: unknown pool token ${JSON.stringify(S)}; re-rendering without accumulating`),Er();return}const w=f.closest(".sweep-mode-btn");if(w){N.ui.codeSweepMode=w.dataset.sweepMode,ke(),Er();return}}),(d=document.getElementById("main-content"))==null||d.addEventListener("keydown",m=>{if(m.key!=="Enter"&&m.key!==" ")return;const f=m.target,h=f.closest(".yours-saved-row");if(!h||f.closest(".yours-saved-delete"))return;m.preventDefault();const v=h.dataset.key,_=h.dataset.kind;v&&_w(v,_??"plainnum")}),(p=document.getElementById("main-content"))==null||p.addEventListener("change",m=>{const f=m.target;if(WS(f)!==null){oN(!1);return}if(f.dataset.aoptBody){const h=f.dataset.aoptBody,v=f,_=H.get_aopt(h);let g;if(_.input_type==="MultiStringFromSet"){const b=f.closest(".cparam-or-aopt");if(b===null)throw new Error(`MultiStringFromSet control for ${h} is outside an option row`);const y=[...b.querySelectorAll("input[data-aopt-body]")].filter(E=>E.dataset.aoptBody===h);if(y.length===0)throw new Error(`MultiStringFromSet option ${h} has no checkbox controls`);g=mx(_,y)}else g=Uh(_,v,_.input_type);h==="srcquotes_inlined"&&N.ui.srcquotesInlinedOverride!==null&&(N.ui.srcquotesInlinedOverride=null,ke(),Ve("srcquotes_view")),N=xg(N,H,h,g),pn();return}if(f.dataset.cparamBody){const h=f.dataset.cparamBody,v=H.get_cparam(h),_=Uh(v,f,q2);N=xg(N,H,h,_),pn();return}if(f.dataset.tchoiceBody){const h=f.dataset.tchoiceBody,v=H.get_tchoice(h),_=La(N.ui);if(ww(v)){const b=pue(v,f);b!==null&&GS(N,H,sn,_,h,b);return}if(!Cr(v))throw new Error(`tchoice "${h}" has unrecognized response_kind`);const g=fue(v,f);GS(N,H,sn,_,h,g);return}if(f.classList.contains(Wh)){const h=f.value;if(h!=="formula"&&h!=="raw_response")return;N.ui.plotTargetKind=h,ke(),Er();return}if(f.classList.contains(Y$)){N.ui.plotTargetKind="formula",N.ui.plotFormulaId=f.value,ke(),Er();return}if(f.classList.contains(J$)){N.ui.plotTargetKind="raw_response",N.ui.plotRawResponseName=f.value,ke(),Er();return}if(f.classList.contains(tC)){const h=f,v=Ot.find(_=>_===h.getAttribute(Jt));if(v===void 0)return;mw(rx(N.ui.compare,ie,v,h.checked));return}if(f.classList.contains("cparam-pin-checkbox")){const h=f.dataset.cparam;if(!h)return;N.ui.cparamPinned[h]=f.checked,ke(),VO(),hw();return}})}function Sse(){var n;const e=document.querySelector(".calc-textarea");if(e&&document.activeElement!==e){const t=e.dataset.group;t&&(e.value=((n=N.yoursRecord.raw_input)==null?void 0:n[t])??"")}}function wse(){const e=He.container("SVAR_CARDS");e&&fre(e,N,io())}function Ts(){He.render("YOURS_SAVED_LIST",qo())}function Ase(e){const n=e.dataset.group;if(!n)return;const t=n==="sample"?e.value.split(`
`).map(r=>DC(r)).join(`
`):e.value;s3(N,H,sn,n,t)}function $se(){const e=Tn(),n=He.container("CALCULATOR_RESULTS");n&&ys(n,H,e,N,ie,tn,cn),xo(e),di(e),wse(),Ts(),qe==null||qe.closeDisconnectedTriggers()}function io(){return Ur(H.svar_entries().map(e=>e.decl))}function Tse(e){const n=e.dataset.paramIndex,t=e.dataset.group;if(n==null||!t)return;const r=H.svar_entries().length,i=mre(N,parseInt(n),e.value,r);s3(N,H,sn,t,i);const o=He.container("SVAR_CARDS");o&&(bs(o,N,io()),t3(o))}function Ise(e){Sse(),Ts();const n=Tn(),t=He.container("CALCULATOR_RESULTS");t&&ys(t,H,n,N,ie,tn,cn),xo(n),di(n);const r=He.container("SVAR_CARDS");r&&(o3(r,Vn(N.ui),io()),bs(r,N,io())),qe==null||qe.closeDisconnectedTriggers()}function aN(e,n){var r;if(!n)return;const t=Xr(e.ui,{presetData:n});return t.kind==="adhoc"?(r=xF(t.entry,n))==null?void 0:r.meta:void 0}function Er(){if(N.ui.interactionMode==="Compare"){sN();return}Fo(cN)}function uN(e){wte(document.getElementById("main-content"),{jprobTemplate:H,ctx:e,state:N,presetData:ie,globalOpts:Ye(),formRegistry:tn})}function sN(){Fo(()=>{uN(Tn()),qe==null||qe.closeDisconnectedTriggers()})}function mw(e){Bo({interactionMode:"Compare",compare:e})}function cN(){const e=Tn();He.render("CALCULATOR_INPUT",qo(e)),xo(e),di(e),qe==null||qe.closeDisconnectedTriggers()}function Lse(){Fo(()=>{const e=Tn(),n=qo(e);bL(N,n.availableModes),He.render("CALCULATOR_HEADER",n),cN()})}function hw(){if(N.ui.interactionMode==="Compare"){sN();return}Fo(()=>{const e=Tn(),n=He.container("CALCULATOR_INPUT"),t=He.container("CALCULATOR_RESULTS");n&&t&&($re(n,t,H,e,N,ie,tn,cn,li,Po),hO(t,aN(N,ie))),xo(e),qe==null||qe.closeDisconnectedTriggers()})}function Bo(e,n="preserveReadingPosition"){const t=N.ui.interactionMode;Do();const r=t==="ReadTrials"?Cse():null;Object.assign(N.ui,e),N.ui.interactionMode==="Compare"&&t!=="Compare"&&(N.ui.compare=ex(N.ui.compare,r)),ke(),Uue(),pn(n)}function lN(e){e!==N.ui.interactionMode&&Bo({interactionMode:e})}function tr(e){Bo({interactionMode:"Estimate",estimateQueryMode:L$(e,H.has_cparams())})}function cu(e){Bo({interactionMode:"ReadTrials",readTrials:Hq(N.ui.readTrials,e,Mt())})}function Rse(){if(N.ui.interactionMode!=="ReadTrials")return null;const{resultSet:e}=kn(N.ui.readTrials,Mt());return e.kind==="no-results"?xue:null}function Cse(){const{resultSet:e}=kn(N.ui.readTrials,Mt());return e.kind==="methodical"?e.jtaskGroupId:null}function Ose(e){cu({...N.ui.readTrials,jtaskGroupId:e})}function Nse(e,n){const{resultSet:t}=kn(N.ui.readTrials,Mt());t.kind==="methodical"&&cu({...N.ui.readTrials,mixtureGroupSelection:Oq(t.mixtureGroupSelection,e,n)})}function kse(e){if(e===kO){cu({...N.ui.readTrials,adhoc:null});return}const n=jae(e),t=n===null?null:f2(n,ie);if(t===null){console.warn(`adhoc results: unknown entry ${JSON.stringify(e)}; ignoring`);return}cu({...N.ui.readTrials,adhoc:t})}function vw(e){const n=IH(e);n!==null&&(N.ui.interactionMode==="Estimate"&&n===N.ui.estimateQueryMode||tr(n))}function Mse(){const e=bo(ie);if(e.length<2)return null;const n=e.indexOf(N.ui.interactionMode);return e[(n+1)%e.length]}function Pse(e,n){if(n==="plaincode"){const t=R2(H.aid).find(i=>i.codeOptionDictKey===e);if(!t)return;const r=ZC(H,t.record);if(!confirm(`Delete saved estimation?
${r}`))return;Ox(H.aid,e)}else{const t=f3(H.aid).find(i=>i.plainnumOptionDictKey===e);if(!t)return;const r=QC(H,t.record)||"(default options)";if(!confirm(`Delete saved estimation?
${r}`))return;iie(H.aid,e)}Ts()}function _w(e,n){if(n==="plaincode"){const t=R2(H.aid).find(r=>r.codeOptionDictKey===e);if(!t)return;N=uie(N,H,e,t.record),tr("plaincode");return}else{const t=f3(H.aid).find(r=>r.plainnumOptionDictKey===e);if(!t)return;N=aie(N,H,e,t.record)}tr("plainnum")}async function Dse(){const e=va,n=He.container("YOURS_CODE_INPUT"),t=n==null?void 0:n.querySelector(".code-error-area"),r=n==null?void 0:n.querySelector(".code-status");t&&(t.innerHTML=""),r&&(r.textContent="Running…");const i=n==null?void 0:n.querySelector(".code-body-input"),o=i?i.value:N.yoursCodeRecord.raw_code_input;i&&o!==N.yoursCodeRecord.raw_code_input&&d3(N,H,sn,o);const{names:a,combinations:u}=Sk(H.get_cparams(),li),s=Aie(H.svar_decls()),c=Ye();try{new Function(...a,o)}catch(_){r&&(r.textContent=""),t&&(t.textContent=`Syntax error: ${_.message}`);return}Un==null||Un.abort();const l=new AbortController;Un=l;let d;try{d=await toe({source:o,cparamNames:a,combinations:u,expectedSvars:H.get_svar_bare_names(),formulaSvars:bw(tn,H.get_svar_bare_names()),hasExpectationBarrier:Object.keys(cn).length>0,paramRanges:s},{timeoutMs:c.plaincodeEvalTimeoutMs,signal:l.signal})}catch(_){if(e!==va||_.message===Lv)return;if(r&&(r.textContent=""),t){const g=_.message;t.textContent=g===sO?`Timed out after ${c.plaincodeEvalTimeoutMs}ms. Possible infinite loop — check your code.`:`Worker error: ${g}`}return}finally{Un===l&&(Un=null)}if(e!==va)return;if(d.compileError){r&&(r.textContent=""),t&&(t.textContent=`Compile error: ${d.compileError}`);return}const p=d.wellformed.map(_=>{const g={trial_index:0,point:_.point,bounds:_.bounds,sample:_.sample};return _.lloads!==void 0&&(g.lloads=_.lloads),{cparams:_.cparams,trials:[g],precomputed:{}}}),m=N.yoursCodeRecord;m.verified_code_input=o,m.cparam_names=a,m.cparam_combos=p,m.count=1,m.timestamp=new Date().toISOString(),L2(H,sn,N.codeOptionDictKey,m),tr("plaincode");const f=He.container("YOURS_CODE_INPUT"),h=f==null?void 0:f.querySelector(".code-status"),v=f==null?void 0:f.querySelector(".code-error-area");if(h&&(h.textContent=""),v&&d.malformed.length>0){const _=d.malformed.slice(0,3).map(g=>`${JSON.stringify(g.cparams)}: ${g.error}`).join(`
`);v.textContent=`${d.wellformed.length}/${d.wellformed.length+d.malformed.length} combinations succeeded. First failures:
${_}`}}function Fse(){const e=En();if(e.kind!=="adhoc")throw new Error(`Copy to Estimate clicked outside an adhoc entry view (viewing ${JSON.stringify(e)})`);e.entry.queryMode==="plaincode"?qse():Bse()}function qse(){const e=Nv();if(!e)throw new Error(`Copy to Estimate clicked outside an adhoc plaincode view (viewing ${JSON.stringify(En())})`);confirm(`Copy this entry's code into your Estimate editor?
Your current Estimate code will be overwritten.`)&&(d3(N,H,sn,e.raw_code_input),tr("plaincode"))}const xse={point:"point",bounds:"bounds",sample:"distribution"};function Bse(){const e=Mn(N,ie),n=(e==null?void 0:e.trials.length)===1?e.trials[0]:void 0;if(!n)throw new Error(`Copy to Estimate clicked without a viewable adhoc plainnum trial (viewing ${JSON.stringify(En())})`);const t=H.svar_entries().map(a=>a.bareName),r=BA(n,t);if(r.length===0)throw new Error("Copy to Estimate clicked for an entry with no complete response group");const i=r.map(a=>xse[a]).join(" + ");if(confirm(`Copy this entry's ${i} estimates into your Estimate inputs?
Your current Estimate ${i} input${r.length>1?"s":""} will be overwritten.`)){for(const a of r)s3(N,H,sn,a,GF(n,a,t));r.includes(N.ui.inputMode)||(N.ui.inputMode=r.includes("sample")?"sample":r.includes("bounds")?"bounds":"point"),tr("plainnum")}}function Hse(e){const n=e.dataset.lloadsSpec;if(n===void 0)throw new Error("Joint-dependence Copy to Estimate button carries no specification");const t=JSON.parse(n),r=nO(N,H,tn,cn);if(r===null)throw new Error("Joint-dependence Copy to Estimate clicked on a jprob with no joint-dependence box");const i=Co(t,r.eligibleSvars);if(i!==null)throw new Error(`Disclosed joint-dependence specification is not valid here: ${i}`);confirm(`Copy this joint-dependence specification into your Estimate inputs?
Your current Estimate latents and loadings will be overwritten.`)&&(c3(N,H,sn,sC(t,r.eligibleSvars),r.eligibleSvars,r.degenerateSvars),N.ui.inputMode="sample",N.ui.jointDependenceEditorOpen=!0,tr("plainnum"))}function Use(e){const n=e.closest(`.${r2}`);if(!n||n.classList.contains(Qt))return;const t=hoe(n);if(t===null){console.warn("example list: no fold button for a collapsed list; leaving it closed");return}Pv(_3(t))}function Pv(e){if(e===null)return;const n=!e.isOpen();e.setOpen(n),pO(N.ui,e.key,n),ke()}function Gse(e){const n=document.getElementById("main-content");n!==null&&(ro(()=>{Soe(n,e,N.ui)}),ke())}function jse(){const e=eB(),n=JSON.stringify(e,null,2),t=new Blob([n],{type:"application/json"}),r=URL.createObjectURL(t),i=document.createElement("a"),o=new Date().toISOString().slice(0,10);i.href=r,i.download=`${H.config.localStorage_prefix}-state-${o}.json`,i.click(),URL.revokeObjectURL(r)}function Vse(){const e=document.createElement("input");e.type="file",e.accept=".json",e.addEventListener("change",()=>{var t;const n=(t=e.files)==null?void 0:t[0];n&&n.text().then(r=>{let i;try{i=JSON.parse(r)}catch(o){alert(`Invalid JSON: ${o}`);return}if(!i||typeof i!="object"){alert("Expected a JSON object");return}nB(i),window.location.reload()})}),e.click()}export{Yse as initApp,pw as swapJprob};
