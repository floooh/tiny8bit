var h;h||=typeof Module != 'undefined' ? Module : {};var aa="object"==typeof window,ba="undefined"!=typeof WorkerGlobalScope,ca="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node&&"renderer"!=process.type,da=Object.assign({},h),ea=[],fa="./this.program",ha=(a,b)=>{throw b;},k="",ia,ja;
if(ca){var fs=require("fs");require("path");k=__dirname+"/";ja=a=>{a=ka(a)?new URL(a):a;return fs.readFileSync(a)};ia=async a=>{a=ka(a)?new URL(a):a;return fs.readFileSync(a,void 0)};!h.thisProgram&&1<process.argv.length&&(fa=process.argv[1].replace(/\\/g,"/"));ea=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=h);ha=(a,b)=>{process.exitCode=a;throw b;}}else if(aa||ba)ba?k=self.location.href:"undefined"!=typeof document&&document.currentScript&&(k=document.currentScript.src),k=k.startsWith("blob:")?
"":k.substr(0,k.replace(/[?#].*/,"").lastIndexOf("/")+1),ba&&(ja=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ia=async a=>{if(ka(a))return new Promise((c,d)=>{var e=new XMLHttpRequest;e.open("GET",a,!0);e.responseType="arraybuffer";e.onload=()=>{200==e.status||0==e.status&&e.response?c(e.response):d(e.status)};e.onerror=d;e.send(null)});var b=await fetch(a,{credentials:"same-origin"});if(b.ok)return b.arrayBuffer();throw Error(b.status+
" : "+b.url);};var la=h.print||console.log.bind(console),n=h.printErr||console.error.bind(console);Object.assign(h,da);da=null;h.arguments&&(ea=h.arguments);h.thisProgram&&(fa=h.thisProgram);var ma=h.wasmBinary,na,q=!1,oa,r,t,pa,qa,u,w,x,y;
function ra(){var a=na.buffer;h.HEAP8=r=new Int8Array(a);h.HEAP16=pa=new Int16Array(a);h.HEAPU8=t=new Uint8Array(a);h.HEAPU16=qa=new Uint16Array(a);h.HEAP32=u=new Int32Array(a);h.HEAPU32=w=new Uint32Array(a);h.HEAPF32=x=new Float32Array(a);h.HEAPF64=y=new Float64Array(a)}var sa=[],ta=[],ua=[],va=[];function wa(){var a=h.preRun.shift();sa.unshift(a)}var z=0,A=null;
function xa(a){h.onAbort?.(a);a="Aborted("+a+")";n(a);q=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}var ya=a=>a.startsWith("data:application/octet-stream;base64,"),ka=a=>a.startsWith("file://"),za;async function Aa(a){if(!ma)try{var b=await ia(a);return new Uint8Array(b)}catch{}if(a==za&&ma)a=new Uint8Array(ma);else if(ja)a=ja(a);else throw"both async and sync fetching of the wasm failed";return a}
async function Ba(a,b){try{var c=await Aa(a);return await WebAssembly.instantiate(c,b)}catch(d){n(`failed to asynchronously prepare wasm: ${d}`),xa(d)}}async function Ca(a){var b=za;if(!(ma||"function"!=typeof WebAssembly.instantiateStreaming||ya(b)||ka(b)||ca)&&"function"==typeof fetch)try{var c=fetch(b,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(c,a)}catch(d){n(`wasm streaming compile failed: ${d}`),n("falling back to ArrayBuffer instantiation")}return Ba(b,a)}
class Da{name="ExitStatus";constructor(a){this.message=`Program terminated with exit(${a})`;this.status=a}}
var Ea=a=>{for(;0<a.length;)a.shift()(h)},Fa=h.noExitRuntime||!0,Ga="undefined"!=typeof TextDecoder?new TextDecoder:void 0,B=(a,b=0,c=NaN)=>{var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&Ga)return Ga.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var g=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|g<<6|f:(e&7)<<18|g<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>
10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d},Ha=0,C={},Ia=a=>{a instanceof Da||"unwind"==a||ha(1,a)},Ja=a=>{oa=a;Fa||0<Ha||(h.onExit?.(a),q=!0);ha(a,new Da(a))},Ka=a=>{oa=a;Ja(a)},La=()=>{if(!(Fa||0<Ha))try{var a=oa;oa=a;Ja(a)}catch(b){Ia(b)}},Ma=a=>{if(!q)try{a(),La()}catch(b){Ia(b)}},Ta=(a,b)=>{Na=a;Oa=b;if(D)if(Pa||=!0,0==a)E=function(){setTimeout(F,Math.max(0,Qa+b-performance.now())|0)};else if(1==a)E=function(){Ra(F)};else if(2==a){if("undefined"==typeof Sa)if("undefined"==typeof setImmediate){var c=
[];addEventListener("message",d=>{if("setimmediate"===d.data||"setimmediate"===d.data.target)d.stopPropagation(),c.shift()()},!0);Sa=d=>{c.push(d);if(ba){let e;(e=h).setImmediates??(e.setImmediates=[]);h.setImmediates.push(d);postMessage({target:"setimmediate"})}else postMessage("setimmediate","*")}}else Sa=setImmediate;E=function(){Sa(F)}}},bb=(a,b,c,d,e)=>{function g(){return f<Ua?(La(),!1):!0}D=a;Va=d;var f=Ua;Pa=!1;F=function(){if(!q)if(0<Wa.length){var l=Wa.shift();l.Td(l.Kd);if(Xa){var m=Xa,
p=0==m%1?m-1:Math.floor(m);Xa=l.Md?p:(8*m+(p+.5))/9}h.setStatus&&(l=h.statusMessage||"Please wait...",m=Xa??0,p=Ya.Rd??0,m?m<p?h.setStatus("{message} ({expected - remaining}/{expected})"):h.setStatus(l):h.setStatus(""));g()&&setTimeout(F,0)}else if(g())if(Za=Za+1|0,1==Na&&1<Oa&&0!=Za%Oa)E();else{0==Na&&(Qa=performance.now());a:if(!q){for(l of $a)if(!1===l())break a;Ma(a);for(m of ab)m()}g()&&E()}};e||(b&&0<b?Ta(0,1E3/b):Ta(1,1),E());if(c)throw"unwind";},Pa=!1,E=null,Ua=0,D=null,Va=0,Na=0,Oa=0,Za=
0,Wa=[],$a=[],ab=[];function cb(){E=null;Ua++}var db=0;function Ra(a){if("function"==typeof requestAnimationFrame)requestAnimationFrame(a);else{var b=Date.now();if(0===db)db=b+1E3/60;else for(;b+2>=db;)db+=1E3/60;setTimeout(a,Math.max(db-b,0))}}var Ya={},Qa,F,Sa,Xa;function eb(a){var b=H.Ic[a];b.target.removeEventListener(b.Hc,b.od,b.Jc);H.Ic.splice(a,1)}function fb(){if(navigator.userActivation?navigator.userActivation.isActive:H.Zc&&H.Bd.Xc){var a=H.Pc;H.Pc=[];for(var b of a)b.bd(...b.kd)}}
function I(a){if(!a.target)return-4;if(a.Kc)a.od=function(c){++H.Zc;H.Bd=a;fb();a.Lc(c);fb();--H.Zc},a.target.addEventListener(a.Hc,a.od,a.Jc),H.Ic.push(a);else for(var b=0;b<H.Ic.length;++b)H.Ic[b].target==a.target&&H.Ic[b].Hc==a.Hc&&eb(b--);return 0}function gb(a){return a?a==window?"#window":a==screen?"#screen":a?.nodeName||"":""}
var H={Ld:0,Ud:0,$c:0,Vc:0,gd:0,dd:0,Yc:0,Pd:0,Yd:0,Od:0,Sd:0,ad:0,ge:0,cd:0,Wd(a,b,c){r.set(r.subarray(b,b+c),a)},$d(){for(;H.Ic.length;)eb(H.Ic.length-1);H.Pc=[]},Zc:0,Pc:[],Nd(a,b,c){function d(g,f){if(g.length!=f.length)return!1;for(var l in g)if(g[l]!=f[l])return!1;return!0}for(var e of H.Pc)if(e.bd==a&&d(e.kd,c))return;H.Pc.push({bd:a,sd:b,kd:c});H.Pc.sort((g,f)=>g.sd<f.sd)},be(a){H.Pc=H.Pc.filter(b=>b.bd!=a)},Ic:[],ae:(a,b)=>{for(var c=0;c<H.Ic.length;++c)H.Ic[c].target!=a||b&&b!=H.Ic[c].Hc||
eb(c--)},fullscreenEnabled(){return document.fullscreenEnabled||document.webkitFullscreenEnabled}},hb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0],J=a=>{a=2<a?a?B(t,a):"":a;return hb[a]||("undefined"!=typeof document?document.querySelector(a):null)},ib=a=>0>hb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0},jb=[],kb,K=a=>{var b=jb[a];b||(a>=jb.length&&(jb.length=a+1),jb[a]=b=kb.get(a));return b},L=(a,b,c)=>{var d=t;if(!(0<c))return 0;var e=b;c=b+c-1;for(var g=
0;g<a.length;++g){var f=a.charCodeAt(g);if(55296<=f&&57343>=f){var l=a.charCodeAt(++g);f=65536+((f&1023)<<10)|l&1023}if(127>=f){if(b>=c)break;d[b++]=f}else{if(2047>=f){if(b+1>=c)break;d[b++]=192|f>>6}else{if(65535>=f){if(b+2>=c)break;d[b++]=224|f>>12}else{if(b+3>=c)break;d[b++]=240|f>>18;d[b++]=128|f>>12&63}d[b++]=128|f>>6&63}d[b++]=128|f&63}}d[b]=0;return b-e},lb=(a,b,c,d,e,g)=>{H.Yc||(H.Yc=M(256));a={target:J(a),Hc:g,Kc:d,Lc:(f=event)=>{var l=f.target.id?f.target.id:"",m=H.Yc;L(gb(f.target),m+0,
128);L(l,m+128,128);K(d)(e,m,b)&&f.preventDefault()},Jc:c};return I(a)},mb=(a,b,c,d,e,g)=>{H.$c||(H.$c=M(160));a={target:J(a),Hc:g,Kc:d,Lc:f=>{var l=H.$c;y[l>>3]=f.timeStamp;var m=l>>2;u[m+2]=f.location;r[l+12]=f.ctrlKey;r[l+13]=f.shiftKey;r[l+14]=f.altKey;r[l+15]=f.metaKey;r[l+16]=f.repeat;u[m+5]=f.charCode;u[m+6]=f.keyCode;u[m+7]=f.which;L(f.key||"",l+32,32);L(f.code||"",l+64,32);L(f.char||"",l+96,32);L(f.locale||"",l+128,32);K(d)(e,l,b)&&f.preventDefault()},Jc:c};return I(a)},nb=(a,b,c)=>{y[a>>
3]=b.timeStamp;var d=a>>2;u[d+2]=b.screenX;u[d+3]=b.screenY;u[d+4]=b.clientX;u[d+5]=b.clientY;r[a+24]=b.ctrlKey;r[a+25]=b.shiftKey;r[a+26]=b.altKey;r[a+27]=b.metaKey;pa[2*d+14]=b.button;pa[2*d+15]=b.buttons;u[d+8]=b.movementX;u[d+9]=b.movementY;a=ib(c);u[d+10]=b.clientX-(a.left|0);u[d+11]=b.clientY-(a.top|0)},ob=(a,b,c,d,e,g)=>{H.Vc||(H.Vc=M(64));a=J(a);return I({target:a,Xc:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,Hc:g,Kc:d,Lc:(f=event)=>{nb(H.Vc,f,a);K(d)(e,H.Vc,b)&&f.preventDefault()},
Jc:c})},pb=(a,b,c,d,e)=>{H.ad||(H.ad=M(257));return I({target:a,Hc:e,Kc:d,Lc:(g=event)=>{var f=H.ad,l=document.pointerLockElement||document.Qc||document.jd||document.hd;r[f]=!!l;var m=l?.id||"";L(gb(l),f+1,128);L(m,f+129,128);K(d)(20,f,b)&&g.preventDefault()},Jc:c})},qb=(a,b,c,d,e)=>I({target:a,Hc:e,Kc:d,Lc:(g=event)=>{K(d)(38,0,b)&&g.preventDefault()},Jc:c}),rb=(a,b,c,d)=>{H.dd||(H.dd=M(36));a=J(a);return I({target:a,Hc:"resize",Kc:d,Lc:(e=event)=>{if(e.target==a){var g=document.body;if(g){var f=
H.dd;u[f>>2]=0;u[f+4>>2]=g.clientWidth;u[f+8>>2]=g.clientHeight;u[f+12>>2]=innerWidth;u[f+16>>2]=innerHeight;u[f+20>>2]=outerWidth;u[f+24>>2]=outerHeight;u[f+28>>2]=pageXOffset|0;u[f+32>>2]=pageYOffset|0;K(d)(10,f,b)&&e.preventDefault()}}},Jc:c})},sb=(a,b,c,d,e,g)=>{H.cd||(H.cd=M(1552));a=J(a);return I({target:a,Xc:"touchstart"==g||"touchend"==g,Hc:g,Kc:d,Lc:f=>{var l={},m=f.touches;for(var p of m)p.pd=p.rd=0,l[p.identifier]=p;for(var v of f.changedTouches)v.pd=1,l[v.identifier]=v;for(var Q of f.targetTouches)l[Q.identifier].rd=
1;m=H.cd;y[m>>3]=f.timeStamp;r[m+12]=f.ctrlKey;r[m+13]=f.shiftKey;r[m+14]=f.altKey;r[m+15]=f.metaKey;p=m+16;v=ib(a);Q=0;for(let G of Object.values(l))if(l=p>>2,u[l]=G.identifier,u[l+1]=G.screenX,u[l+2]=G.screenY,u[l+3]=G.clientX,u[l+4]=G.clientY,u[l+5]=G.pageX,u[l+6]=G.pageY,r[p+28]=G.pd,r[p+29]=G.rd,u[l+8]=G.clientX-(v.left|0),u[l+9]=G.clientY-(v.top|0),p+=48,31<++Q)break;u[m+8>>2]=Q;K(d)(e,m,b)&&f.preventDefault()},Jc:c})},N,tb=a=>{var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=
(c,d)=>b.vertexAttribDivisorANGLE(c,d),a.drawArraysInstanced=(c,d,e,g)=>b.drawArraysInstancedANGLE(c,d,e,g),a.drawElementsInstanced=(c,d,e,g,f)=>b.drawElementsInstancedANGLE(c,d,e,g,f))},ub=a=>{var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=()=>b.createVertexArrayOES(),a.deleteVertexArray=c=>b.deleteVertexArrayOES(c),a.bindVertexArray=c=>b.bindVertexArrayOES(c),a.isVertexArray=c=>b.isVertexArrayOES(c))},vb=a=>{var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=(c,
d)=>b.drawBuffersWEBGL(c,d))},wb=a=>{a.Qd=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")},xb=a=>{a.Vd=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")},yb=a=>{var b="ANGLE_instanced_arrays EXT_blend_minmax EXT_disjoint_timer_query EXT_frag_depth EXT_shader_texture_lod EXT_sRGB OES_element_index_uint OES_fbo_render_mipmap OES_standard_derivatives OES_texture_float OES_texture_half_float OES_texture_half_float_linear OES_vertex_array_object WEBGL_color_buffer_float WEBGL_depth_texture WEBGL_draw_buffers EXT_color_buffer_float EXT_conservative_depth EXT_disjoint_timer_query_webgl2 EXT_texture_norm16 NV_shader_noperspective_interpolation WEBGL_clip_cull_distance EXT_clip_control EXT_color_buffer_half_float EXT_depth_clamp EXT_float_blend EXT_polygon_offset_clamp EXT_texture_compression_bptc EXT_texture_compression_rgtc EXT_texture_filter_anisotropic KHR_parallel_shader_compile OES_texture_float_linear WEBGL_blend_func_extended WEBGL_compressed_texture_astc WEBGL_compressed_texture_etc WEBGL_compressed_texture_etc1 WEBGL_compressed_texture_s3tc WEBGL_compressed_texture_s3tc_srgb WEBGL_debug_renderer_info WEBGL_debug_shaders WEBGL_lose_context WEBGL_multi_draw WEBGL_polygon_mode".split(" ");
return(a.getSupportedExtensions()||[]).filter(c=>b.includes(c))},zb=1,Ab=[],O=[],Bb=[],Cb=[],P=[],R=[],Db=[],Eb=[],S=[],Fb={},Gb=4,Hb=0,Ib=a=>{for(var b=zb++,c=a.length;c<b;c++)a[c]=null;return b},U=(a,b,c,d)=>{for(var e=0;e<a;e++){var g=N[c](),f=g&&Ib(d);g?(g.name=f,d[f]=g):T||=1282;u[b+4*e>>2]=f}},Kb=(a,b)=>{a.Qc||(a.Qc=a.getContext,a.getContext=function(d,e){e=a.Qc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.qd?a.getContext("webgl2",b):a.getContext("webgl",b);return c?
Jb(c,b):0},Jb=(a,b)=>{var c=Ib(Eb),d={handle:c,attributes:b,version:b.qd,Wc:a};a.canvas&&(a.canvas.Jd=d);Eb[c]=d;("undefined"==typeof b.nd||b.nd)&&Lb(d);return c},Lb=a=>{a||=V;if(!a.Gd){a.Gd=!0;var b=a.Wc;b.Hd=b.getExtension("WEBGL_multi_draw");b.Fd=b.getExtension("EXT_polygon_offset_clamp");b.Ed=b.getExtension("EXT_clip_control");b.Id=b.getExtension("WEBGL_polygon_mode");tb(b);ub(b);vb(b);wb(b);xb(b);2<=a.version&&(b.md=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.md)b.md=
b.getExtension("EXT_disjoint_timer_query");yb(b).forEach(c=>{c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}},T,V,Mb=(a,b,c,d,e,g)=>{a={target:J(a),Hc:g,Kc:d,Lc:(f=event)=>{K(d)(e,0,b)&&f.preventDefault()},Jc:c};I(a)},Nb=(a,b,c,d)=>{H.gd||(H.gd=M(96));return I({target:a,Xc:!0,Hc:"wheel",Kc:d,Lc:(e=event)=>{var g=H.gd;nb(g,e,a);y[g+64>>3]=e.deltaX;y[g+72>>3]=e.deltaY;y[g+80>>3]=e.deltaZ;u[g+88>>2]=e.deltaMode;K(d)(9,g,b)&&e.preventDefault()},Jc:c})},Ob=["default","low-power",
"high-performance"],Pb={},Rb=()=>{if(!Qb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:fa||"./this.program"},b;for(b in Pb)void 0===Pb[b]?delete a[b]:a[b]=Pb[b];var c=[];for(b in a)c.push(`${b}=${a[b]}`);Qb=c}return Qb},Qb,Sb=[null,[],[]],Tb=[],Ub=()=>{var a=yb(N);return a=a.concat(a.map(b=>"GL_"+b))},Vb=(a,b)=>{if(b){var c=void 0;switch(a){case 36346:c=
1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=N.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){T||=1282;return}c=Ub().length;break;case 33307:case 33308:if(2>V.version){T||=1280;return}c=33307==a?3:0}if(void 0===c)switch(d=N.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":T||=1280;return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:T||=1280;return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)u[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){T||=1280;n(`GL_INVALID_ENUM in glGet${0}v: Unknown object returned from WebGL getParameter(${a})! (error: ${e})`);return}}break;default:T||=1280;n(`GL_INVALID_ENUM in glGet${0}v: Native code calling glGet${0}v(${a}) and it returns ${d} of type ${typeof d}!`);return}u[b>>2]=c}else T||=1281},Wb=
a=>{for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b},Xb=a=>{var b=Wb(a)+1,c=M(b);c&&L(a,c,b);return c},Yb=a=>"]"==a.slice(-1)&&a.lastIndexOf("["),Zb=a=>{a-=5120;return 0==a?r:1==a?t:2==a?pa:4==a?u:6==a?x:5==a||28922==a||28520==a||30779==a||30782==a?w:qa},$b=(a,b,c,d,e)=>{a=Zb(a);b=d*((Hb||c)*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*a.BYTES_PER_ELEMENT+Gb-1&-Gb);return a.subarray(e>>>31-Math.clz32(a.BYTES_PER_ELEMENT),
e+b>>>31-Math.clz32(a.BYTES_PER_ELEMENT))},W=a=>{var b=N.Cd;if(b){var c=b.Rc[a];"number"==typeof c&&(b.Rc[a]=c=N.getUniformLocation(b,b.zd[a]+(0<c?`[${c}]`:"")));return c}T||=1282},X=[],ac=[],cc=a=>{var b=Wb(a)+1,c=bc(b);L(a,c,b);return c},fc=a=>{var b=dc();a();ec(b)};h.requestAnimationFrame=Ra;h.pauseMainLoop=cb;h.resumeMainLoop=function(){Ua++;var a=Na,b=Oa,c=D;D=null;bb(c,0,!1,Va,!0);Ta(a,b);E()};h.preMainLoop&&$a.push(h.preMainLoop);h.postMainLoop&&ab.push(h.postMainLoop);for(var Y=0;32>Y;++Y)Tb.push(Array(Y));
var gc=new Float32Array(288);for(Y=0;288>=Y;++Y)X[Y]=gc.subarray(0,Y);var hc=new Int32Array(288);for(Y=0;288>=Y;++Y)ac[Y]=hc.subarray(0,Y);
var wc={la:function(){return 0},nb:function(){return 0},ob:function(){},tb:()=>xa(""),sb:(a,b,c)=>t.copyWithin(a,b,b+c),ib:()=>{Fa=!1;Ha=0},jb:(a,b)=>{C[a]&&(clearTimeout(C[a].id),delete C[a]);if(!b)return 0;var c=setTimeout(()=>{delete C[a];Ma(()=>ic(a,performance.now()))},b);C[a]={id:c,fe:b};return 0},eb:function(a){if(void 0===window.localStorage)return 0;a=a?B(t,a):"";return(a=window.localStorage.getItem(a))?Xb(a):0},ic:function(a,b){void 0!==window.localStorage&&(a=a?B(t,a):"",b=b?B(t,b):"",
window.localStorage.setItem(a,b))},Ta:()=>{cb();D=null},ea:()=>"number"==typeof devicePixelRatio&&devicePixelRatio||1,ga:(a,b,c)=>{a=J(a);if(!a)return-4;a=ib(a);y[b>>3]=a.width;y[c>>3]=a.height;return 0},x:()=>performance.now(),Ua:()=>performance.now(),Za:(a,b)=>{function c(d){K(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},kb:a=>{var b=t.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);a:{d=(Math.min(2147483648,65536*Math.ceil(Math.max(a,
d)/65536))-na.buffer.byteLength+65535)/65536|0;try{na.grow(d);ra();var e=1;break a}catch(g){}e=void 0}if(e)return!0}return!1},O:(a,b,c,d)=>lb(a,b,c,d,12,"blur"),da:(a,b,c)=>{a=J(a);if(!a)return-4;a.width=b;a.height=c;return 0},P:(a,b,c,d)=>lb(a,b,c,d,13,"focus"),Y:(a,b,c,d)=>mb(a,b,c,d,2,"keydown"),W:(a,b,c,d)=>mb(a,b,c,d,1,"keypress"),X:(a,b,c,d)=>mb(a,b,c,d,3,"keyup"),_a:(a,b,c)=>{a=K(a);bb(a,b,c)},ca:(a,b,c,d)=>ob(a,b,c,d,5,"mousedown"),$:(a,b,c,d)=>ob(a,b,c,d,33,"mouseenter"),_:(a,b,c,d)=>ob(a,
b,c,d,34,"mouseleave"),aa:(a,b,c,d)=>ob(a,b,c,d,8,"mousemove"),ba:(a,b,c,d)=>ob(a,b,c,d,6,"mouseup"),R:(a,b,c,d)=>{if(!document||!document.body||!(document.body.requestPointerLock||document.body.Qc||document.body.jd||document.body.hd))return-1;a=J(a);if(!a)return-4;pb(a,b,c,d,"mozpointerlockchange");pb(a,b,c,d,"webkitpointerlockchange");pb(a,b,c,d,"mspointerlockchange");return pb(a,b,c,d,"pointerlockchange")},Q:(a,b,c,d)=>{if(!document||!(document.body.requestPointerLock||document.body.Qc||document.body.jd||
document.body.hd))return-1;a=J(a);if(!a)return-4;qb(a,b,c,d,"mozpointerlockerror");qb(a,b,c,d,"webkitpointerlockerror");qb(a,b,c,d,"mspointerlockerror");return qb(a,b,c,d,"pointerlockerror")},fa:(a,b,c,d)=>rb(a,b,c,d),S:(a,b,c,d)=>sb(a,b,c,d,25,"touchcancel"),T:(a,b,c,d)=>sb(a,b,c,d,23,"touchend"),U:(a,b,c,d)=>sb(a,b,c,d,24,"touchmove"),V:(a,b,c,d)=>sb(a,b,c,d,22,"touchstart"),N:(a,b,c,d)=>{Mb(a,b,c,d,31,"webglcontextlost");return 0},M:(a,b,c,d)=>{Mb(a,b,c,d,32,"webglcontextrestored");return 0},Z:(a,
b,c,d)=>(a=J(a))?"undefined"!=typeof a.onwheel?Nb(a,b,c,d):-1:-4,Ya:(a,b)=>{var c=b>>2;b={alpha:!!r[b+0],depth:!!r[b+1],stencil:!!r[b+2],antialias:!!r[b+3],premultipliedAlpha:!!r[b+4],preserveDrawingBuffer:!!r[b+5],powerPreference:Ob[u[c+2]],failIfMajorPerformanceCaveat:!!r[b+12],qd:u[c+4],Xd:u[c+5],nd:r[b+24],Dd:r[b+25],Zd:u[c+7],ce:r[b+32]};a=J(a);return!a||b.Dd?0:Kb(a,b)},Wa:(a,b)=>{a=Eb[a];b=b?B(t,b):"";b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&tb(N);"OES_vertex_array_object"==
b&&ub(N);"WEBGL_draw_buffers"==b&&vb(N);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&wb(N);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&xb(N);"WEBGL_multi_draw"==b&&(N.Hd=N.getExtension("WEBGL_multi_draw"));"EXT_polygon_offset_clamp"==b&&(N.Fd=N.getExtension("EXT_polygon_offset_clamp"));"EXT_clip_control"==b&&(N.Ed=N.getExtension("EXT_clip_control"));"WEBGL_polygon_mode"==b&&(N.Id=N.getExtension("WEBGL_polygon_mode"));return!!a.Wc.getExtension(b)},Xa:a=>{V=Eb[a];h.ctx=N=V?.Wc;
return!a||N?0:-5},qb:(a,b)=>{var c=0;Rb().forEach((d,e)=>{var g=b+c;e=w[a+4*e>>2]=g;for(g=0;g<d.length;++g)r[e++]=d.charCodeAt(g);r[e]=0;c+=d.length+1});return 0},rb:(a,b)=>{var c=Rb();w[a>>2]=c.length;var d=0;c.forEach(e=>d+=e.length+1);w[b>>2]=d;return 0},ka:()=>52,mb:()=>52,gb:function(){return 70},lb:(a,b,c,d)=>{for(var e=0,g=0;g<c;g++){var f=w[b>>2],l=w[b+4>>2];b+=8;for(var m=0;m<l;m++){var p=t[f+m],v=Sb[a];0===p||10===p?((1===a?la:n)(B(v)),v.length=0):v.push(p)}e+=l}w[d>>2]=e;return 0},k:function(a,
b,c){const d=a?B(t,a):"";let e;try{e=window.indexedDB.open("chips",1)}catch(g){console.log("fs_js_load_snapshot: failed to open IndexedDB with "+g)}e.onupgradeneeded=()=>{console.log("fs_js_load_snapshot: creating db");e.result.createObjectStore("store")};e.onsuccess=()=>{var g=e.result;let f;try{f=g.transaction(["store"],"readwrite")}catch(p){console.log("fs_js_load_snapshot: db.transaction failed with",p);return}g=f.objectStore("store");const l=d+"_"+b,m=g.get(l);m.onsuccess=()=>{if(void 0!==m.result){const p=
m.result.length;console.log("fs_js_load_snapshot:",l,"successfully loaded",p,"bytes");const v=jc(p);t.set(m.result,v);kc(c,v,p)}else kc(c,0,0)};m.onerror=()=>{console.log("fs_js_load_snapshot: FAILED loading",l)};f.onerror=()=>{console.log("fs_js_load_snapshot: transaction onerror")}};e.onerror=()=>{console.log("fs_js_load_snapshot: open_request onerror")}},$a:function(a,b,c,d){const e=a?B(t,a):"";console.log("fs_js_save_snapshot: called with",e,b);let g;try{g=window.indexedDB.open("chips",1)}catch(f){console.log("fs_js_save_snapshot: failed to open IndexedDB with "+
f);return}g.onupgradeneeded=()=>{console.log("fs_js_save_snapshot: creating db");g.result.createObjectStore("store")};g.onsuccess=()=>{console.log("fs_js_save_snapshot: onsuccess");const f=g.result.transaction(["store"],"readwrite");var l=f.objectStore("store");const m=e+"_"+b;l=l.put(t.subarray(c,c+d),m);l.onsuccess=()=>{console.log("fs_js_save_snapshot:",m,"successfully stored")};l.onerror=()=>{console.log("fs_js_save_snapshot: FAILED to store",m)};f.onerror=()=>{console.log("fs_js_save_snapshot: transaction onerror")}};
g.onerror=()=>{console.log("fs_js_save_snapshot: open_request onerror")}},q:a=>N.activeTexture(a),wa:(a,b)=>{N.attachShader(O[a],R[b])},b:(a,b)=>{35051==a?N.ld=b:35052==a&&(N.Oc=b);N.bindBuffer(a,Ab[b])},a:(a,b,c)=>{N.bindBufferBase(a,b,Ab[c])},m:(a,b)=>{N.bindFramebuffer(a,Bb[b])},Ea:(a,b)=>{N.bindRenderbuffer(a,Cb[b])},p:(a,b)=>{N.bindSampler(a,S[b])},d:(a,b)=>{N.bindTexture(a,P[b])},L:a=>{N.bindVertexArray(Db[a])},H:(a,b,c,d)=>N.blendColor(a,b,c,d),I:(a,b)=>N.blendEquationSeparate(a,b),J:(a,b,
c,d)=>N.blendFuncSeparate(a,b,c,d),xb:(a,b,c,d,e,g,f,l,m,p)=>N.blitFramebuffer(a,b,c,d,e,g,f,l,m,p),Ga:(a,b,c,d)=>{2<=V.version?c&&b?N.bufferData(a,t,d,c,b):N.bufferData(a,b,d):N.bufferData(a,c?t.subarray(c,c+b):b,d)},B:(a,b,c,d)=>{2<=V.version?c&&N.bufferSubData(a,b,t,d,c):N.bufferSubData(a,b,t.subarray(d,d+c))},qa:a=>N.checkFramebufferStatus(a),Sb:(a,b,c,d)=>N.clearBufferfi(a,b,c,d),oa:(a,b,c)=>{N.clearBufferfv(a,b,x,c>>2)},Rb:(a,b,c)=>{N.clearBufferiv(a,b,u,c>>2)},r:(a,b,c,d)=>{N.colorMask(!!a,
!!b,!!c,!!d)},Wb:a=>{N.compileShader(R[a])},gc:(a,b,c,d,e,g,f,l)=>{2<=V.version?N.Oc||!f?N.compressedTexImage2D(a,b,c,d,e,g,f,l):N.compressedTexImage2D(a,b,c,d,e,g,t,l,f):N.compressedTexImage2D(a,b,c,d,e,g,t.subarray(l,l+f))},ec:(a,b,c,d,e,g,f,l,m)=>{N.Oc?N.compressedTexImage3D(a,b,c,d,e,g,f,l,m):N.compressedTexImage3D(a,b,c,d,e,g,f,t,m,l)},bc:()=>{var a=Ib(O),b=N.createProgram();b.name=a;b.Uc=b.Sc=b.Tc=0;b.ed=1;O[a]=b;return a},Yb:a=>{var b=Ib(R);R[b]=N.createShader(a);return b},E:a=>N.cullFace(a),
Ka:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=Ab[d];e&&(N.deleteBuffer(e),e.name=0,Ab[d]=null,d==N.ld&&(N.ld=0),d==N.Oc&&(N.Oc=0))}},f:(a,b)=>{for(var c=0;c<a;++c){var d=u[b+4*c>>2],e=Bb[d];e&&(N.deleteFramebuffer(e),e.name=0,Bb[d]=null)}},n:a=>{if(a){var b=O[a];b?(N.deleteProgram(b),b.name=0,O[a]=null):T||=1281}},C:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=Cb[d];e&&(N.deleteRenderbuffer(e),e.name=0,Cb[d]=null)}},g:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=S[d];e&&(N.deleteSampler(e),
e.name=0,S[d]=null)}},A:a=>{if(a){var b=R[a];b?(N.deleteShader(b),R[a]=null):T||=1281}},D:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=P[d];e&&(N.deleteTexture(e),e.name=0,P[d]=null)}},Ja:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2];N.deleteVertexArray(Db[d]);Db[d]=null}},v:a=>N.depthFunc(a),u:a=>{N.depthMask(!!a)},e:a=>N.disable(a),K:a=>{N.disableVertexAttribArray(a)},zb:(a,b,c)=>{N.drawArrays(a,b,c)},Bb:(a,b,c,d)=>{N.drawArraysInstanced(a,b,c,d)},pa:(a,b)=>{for(var c=Tb[a],d=0;d<a;d++)c[d]=
u[b+4*d>>2];N.drawBuffers(c)},Cb:(a,b,c,d)=>{N.drawElements(a,b,c,d)},Db:(a,b,c,d,e)=>{N.drawElementsInstanced(a,b,c,d,e)},j:a=>N.enable(a),Ob:a=>{N.enableVertexAttribArray(a)},ra:(a,b,c,d)=>{N.framebufferRenderbuffer(a,b,c,Cb[d])},o:(a,b,c,d,e)=>{N.framebufferTexture2D(a,b,c,P[d],e)},z:(a,b,c,d,e)=>{N.framebufferTextureLayer(a,b,P[c],d,e)},F:a=>N.frontFace(a),Ha:(a,b)=>{U(a,b,"createBuffer",Ab)},sa:(a,b)=>{U(a,b,"createFramebuffer",Bb)},Fa:(a,b)=>{U(a,b,"createRenderbuffer",Cb)},cc:(a,b)=>{U(a,b,
"createSampler",S)},Ca:(a,b)=>{U(a,b,"createTexture",P)},Sa:(a,b)=>{U(a,b,"createVertexArray",Db)},Tb:(a,b)=>N.getAttribLocation(O[a],b?B(t,b):""),c:(a,b)=>Vb(a,b),_b:(a,b,c,d)=>{a=N.getProgramInfoLog(O[a]);null===a&&(a="(unknown error)");b=0<b&&d?L(a,d,b):0;c&&(u[c>>2]=b)},va:(a,b,c)=>{if(c)if(a>=zb)T||=1281;else if(a=O[a],35716==b)a=N.getProgramInfoLog(a),null===a&&(a="(unknown error)"),u[c>>2]=a.length+1;else if(35719==b){if(!a.Uc){var d=N.getProgramParameter(a,35718);for(b=0;b<d;++b)a.Uc=Math.max(a.Uc,
N.getActiveUniform(a,b).name.length+1)}u[c>>2]=a.Uc}else if(35722==b){if(!a.Sc)for(d=N.getProgramParameter(a,35721),b=0;b<d;++b)a.Sc=Math.max(a.Sc,N.getActiveAttrib(a,b).name.length+1);u[c>>2]=a.Sc}else if(35381==b){if(!a.Tc)for(d=N.getProgramParameter(a,35382),b=0;b<d;++b)a.Tc=Math.max(a.Tc,N.getActiveUniformBlockName(a,b).length+1);u[c>>2]=a.Tc}else u[c>>2]=N.getProgramParameter(a,b);else T||=1281},Vb:(a,b,c,d)=>{a=N.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?L(a,d,b):0;c&&
(u[c>>2]=b)},ta:(a,b,c)=>{c?35716==b?(a=N.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),u[c>>2]=a?a.length+1:0):35720==b?(a=N.getShaderSource(R[a]),u[c>>2]=a?a.length+1:0):u[c>>2]=N.getShaderParameter(R[a],b):T||=1281},Pa:(a,b)=>{if(2>V.version)return T||=1282,0;var c=Fb[a];if(c)return 0>b||b>=c.length?(T||=1281,0):c[b];switch(a){case 7939:return c=Ub().map(Xb),c=Fb[a]=c,0>b||b>=c.length?(T||=1281,0):c[b];default:return T||=1280,0}},ua:(a,b)=>{b=b?B(t,b):"";if(a=O[a]){var c=a,d=c.Rc,e=c.Ad,
g;if(!d){c.Rc=d={};c.zd={};var f=N.getProgramParameter(c,35718);for(g=0;g<f;++g){var l=N.getActiveUniform(c,g);var m=l.name;l=l.size;var p=Yb(m);p=0<p?m.slice(0,p):m;var v=c.ed;c.ed+=l;e[p]=[l,v];for(m=0;m<l;++m)d[v]=m,c.zd[v++]=p}}c=a.Rc;d=0;e=b;g=Yb(b);0<g&&(d=parseInt(b.slice(g+1))>>>0,e=b.slice(0,g));if((e=a.Ad[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||N.getUniformLocation(a,b)))return d}else T||=1281;return-1},wb:(a,b,c)=>{for(var d=Tb[b],e=0;e<b;e++)d[e]=u[c+4*e>>2];N.invalidateFramebuffer(a,d)},ac:a=>
{a=O[a];N.linkProgram(a);a.Rc=0;a.Ad={}},Qa:(a,b)=>{3317==a?Gb=b:3314==a&&(Hb=b);N.pixelStorei(a,b)},G:(a,b)=>N.polygonOffset(a,b),yb:a=>N.readBuffer(a),Da:(a,b,c,d,e)=>N.renderbufferStorageMultisample(a,b,c,d,e),xa:(a,b,c)=>{N.samplerParameterf(S[a],b,c)},h:(a,b,c)=>{N.samplerParameteri(S[a],b,c)},s:(a,b,c,d)=>N.scissor(a,b,c,d),Xb:(a,b,c,d)=>{for(var e="",g=0;g<b;++g){var f=(f=w[c+4*g>>2])?B(t,f,d?w[d+4*g>>2]:void 0):"";e+=f}N.shaderSource(R[a],e)},Oa:(a,b,c)=>N.stencilFunc(a,b,c),na:(a,b,c,d)=>
N.stencilFuncSeparate(a,b,c,d),t:a=>N.stencilMask(a),Na:(a,b,c)=>N.stencilOp(a,b,c),ma:(a,b,c,d)=>N.stencilOpSeparate(a,b,c,d),fc:(a,b,c,d,e,g,f,l,m)=>{if(2<=V.version){if(N.Oc){N.texImage2D(a,b,c,d,e,g,f,l,m);return}if(m){var p=Zb(l);m>>>=31-Math.clz32(p.BYTES_PER_ELEMENT);N.texImage2D(a,b,c,d,e,g,f,l,p,m);return}}p=m?$b(l,f,d,e,m):null;N.texImage2D(a,b,c,d,e,g,f,l,p)},dc:(a,b,c,d,e,g,f,l,m,p)=>{if(N.Oc)N.texImage3D(a,b,c,d,e,g,f,l,m,p);else if(p){var v=Zb(m);N.texImage3D(a,b,c,d,e,g,f,l,m,v,p>>>
31-Math.clz32(v.BYTES_PER_ELEMENT))}else N.texImage3D(a,b,c,d,e,g,f,l,m,null)},Ba:(a,b,c)=>N.texParameteri(a,b,c),Aa:(a,b,c,d,e)=>N.texStorage2D(a,b,c,d,e),za:(a,b,c,d,e,g)=>N.texStorage3D(a,b,c,d,e,g),vb:(a,b,c,d,e,g,f,l,m)=>{if(2<=V.version){if(N.Oc){N.texSubImage2D(a,b,c,d,e,g,f,l,m);return}if(m){var p=Zb(l);N.texSubImage2D(a,b,c,d,e,g,f,l,p,m>>>31-Math.clz32(p.BYTES_PER_ELEMENT));return}}m=m?$b(l,f,e,g,m):null;N.texSubImage2D(a,b,c,d,e,g,f,l,m)},ub:(a,b,c,d,e,g,f,l,m,p,v)=>{if(N.Oc)N.texSubImage3D(a,
b,c,d,e,g,f,l,m,p,v);else if(v){var Q=Zb(p);N.texSubImage3D(a,b,c,d,e,g,f,l,m,p,Q,v>>>31-Math.clz32(Q.BYTES_PER_ELEMENT))}else N.texSubImage3D(a,b,c,d,e,g,f,l,m,p,null)},Nb:(a,b,c)=>{if(2<=V.version)b&&N.uniform1fv(W(a),x,c>>2,b);else{if(288>=b)for(var d=X[b],e=0;e<b;++e)d[e]=x[c+4*e>>2];else d=x.subarray(c>>2,c+4*b>>2);N.uniform1fv(W(a),d)}},Zb:(a,b)=>{N.uniform1i(W(a),b)},Ib:(a,b,c)=>{if(2<=V.version)b&&N.uniform1iv(W(a),u,c>>2,b);else{if(288>=b)for(var d=ac[b],e=0;e<b;++e)d[e]=u[c+4*e>>2];else d=
u.subarray(c>>2,c+4*b>>2);N.uniform1iv(W(a),d)}},Mb:(a,b,c)=>{if(2<=V.version)b&&N.uniform2fv(W(a),x,c>>2,2*b);else{if(144>=b){b*=2;for(var d=X[b],e=0;e<b;e+=2)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2]}else d=x.subarray(c>>2,c+8*b>>2);N.uniform2fv(W(a),d)}},Hb:(a,b,c)=>{if(2<=V.version)b&&N.uniform2iv(W(a),u,c>>2,2*b);else{if(144>=b){b*=2;for(var d=ac[b],e=0;e<b;e+=2)d[e]=u[c+4*e>>2],d[e+1]=u[c+(4*e+4)>>2]}else d=u.subarray(c>>2,c+8*b>>2);N.uniform2iv(W(a),d)}},Kb:(a,b,c)=>{if(2<=V.version)b&&N.uniform3fv(W(a),
x,c>>2,3*b);else{if(96>=b){b*=3;for(var d=X[b],e=0;e<b;e+=3)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2],d[e+2]=x[c+(4*e+8)>>2]}else d=x.subarray(c>>2,c+12*b>>2);N.uniform3fv(W(a),d)}},Gb:(a,b,c)=>{if(2<=V.version)b&&N.uniform3iv(W(a),u,c>>2,3*b);else{if(96>=b){b*=3;for(var d=ac[b],e=0;e<b;e+=3)d[e]=u[c+4*e>>2],d[e+1]=u[c+(4*e+4)>>2],d[e+2]=u[c+(4*e+8)>>2]}else d=u.subarray(c>>2,c+12*b>>2);N.uniform3iv(W(a),d)}},Jb:(a,b,c)=>{if(2<=V.version)b&&N.uniform4fv(W(a),x,c>>2,4*b);else{if(72>=b){var d=X[4*b],
e=x;c>>=2;b*=4;for(var g=0;g<b;g+=4){var f=c+g;d[g]=e[f];d[g+1]=e[f+1];d[g+2]=e[f+2];d[g+3]=e[f+3]}}else d=x.subarray(c>>2,c+16*b>>2);N.uniform4fv(W(a),d)}},Fb:(a,b,c)=>{if(2<=V.version)b&&N.uniform4iv(W(a),u,c>>2,4*b);else{if(72>=b){b*=4;for(var d=ac[b],e=0;e<b;e+=4)d[e]=u[c+4*e>>2],d[e+1]=u[c+(4*e+4)>>2],d[e+2]=u[c+(4*e+8)>>2],d[e+3]=u[c+(4*e+12)>>2]}else d=u.subarray(c>>2,c+16*b>>2);N.uniform4iv(W(a),d)}},Eb:(a,b,c,d)=>{if(2<=V.version)b&&N.uniformMatrix4fv(W(a),!!c,x,d>>2,16*b);else{if(18>=b){var e=
X[16*b],g=x;d>>=2;b*=16;for(var f=0;f<b;f+=16){var l=d+f;e[f]=g[l];e[f+1]=g[l+1];e[f+2]=g[l+2];e[f+3]=g[l+3];e[f+4]=g[l+4];e[f+5]=g[l+5];e[f+6]=g[l+6];e[f+7]=g[l+7];e[f+8]=g[l+8];e[f+9]=g[l+9];e[f+10]=g[l+10];e[f+11]=g[l+11];e[f+12]=g[l+12];e[f+13]=g[l+13];e[f+14]=g[l+14];e[f+15]=g[l+15]}}else e=x.subarray(d>>2,d+64*b>>2);N.uniformMatrix4fv(W(a),!!c,e)}},i:a=>{a=O[a];N.useProgram(a);N.Cd=a},Pb:(a,b)=>{N.vertexAttribDivisor(a,b)},Qb:(a,b,c,d,e,g)=>{N.vertexAttribPointer(a,b,c,!!d,e,g)},l:(a,b,c,d)=>
N.viewport(a,b,c,d),hb:Ja,Va:function(){h.td=a=>{0!=lc()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",h.td)},Ma:function(){h.yd=a=>{const b=a.clipboardData.getData("text");fc(()=>{const c=cc(b);mc(c)})};window.addEventListener("paste",h.yd)},hc:function(){h.de=[];h.ud=b=>{b.stopPropagation();b.preventDefault()};h.vd=b=>{b.stopPropagation();b.preventDefault()};h.wd=b=>{b.stopPropagation();b.preventDefault()};h.xd=b=>{b.stopPropagation();b.preventDefault();const c=
b.dataTransfer.files;h.ee=c;nc(c.length);for(let e=0;e<c.length;e++)fc(()=>{const g=cc(c[e].name);oc(e,g)});let d=0;b.shiftKey&&(d|=1);b.ctrlKey&&(d|=2);b.altKey&&(d|=4);b.metaKey&&(d|=8);pc(b.clientX,b.clientY,d)};const a=h.Mc;a.addEventListener("dragenter",h.ud,!1);a.addEventListener("dragleave",h.vd,!1);a.addEventListener("dragover",h.wd,!1);a.addEventListener("drop",h.xd,!1)},Ab:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},Ub:function(a){a=a?
B(t,a):"";void 0!==h.canvas&&("object"===typeof h.canvas?hb[a]=h.canvas:console.warn("sokol_app.h: Module['canvas'] is set but is not an object"));h.Mc=J(a);h.Mc||console.warn("sokol_app.h: can't find html5_canvas_selector ",a);h.Mc.requestPointerLock||console.warn("sokol_app.h: target doesn't support requestPointerLock: ",a)},Ra:function(){window.removeEventListener("beforeunload",h.td)},La:function(){window.removeEventListener("paste",h.yd)},$b:function(){const a=h.Mc;a.removeEventListener("dragenter",
h.ud);a.removeEventListener("dragleave",h.vd);a.removeEventListener("dragover",h.wd);a.removeEventListener("drop",h.xd)},y:function(){h.Mc&&h.Mc.requestPointerLock&&h.Mc.requestPointerLock()},Lb:function(a,b){if(h.Mc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";
break;case 10:a="not-allowed";break;default:a="auto"}h.Mc.style.cursor=a}},pb:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),g=e.createImageData(a,b);g.data.set(t.subarray(c,c+a*b*4));e.putImageData(g,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},Ia:function(a){a=a?B(t,a):"";const b=document.createElement("textarea");b.setAttribute("autocomplete","off");
b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},ab:function(){const a=(new URLSearchParams(window.location.search)).entries();for(let b=a.next();!b.done;b=a.next()){const c=b.value[0],d=b.value[1];fc(()=>{const e=cc(c),g=cc(d);qc(e,g)})}},cb:function(){return h.Nc?
h.Nc.bufferSize:0},fb:function(a,b,c){h.Gc=null;h.Nc=null;"undefined"!==typeof AudioContext?h.Gc=new AudioContext({sampleRate:a,latencyHint:"interactive"}):(h.Gc=null,console.log("sokol_audio.h: no WebAudio support"));return h.Gc?(console.log("sokol_audio.h: sample rate ",h.Gc.sampleRate),h.Nc=h.Gc.createScriptProcessor(c,0,b),h.Nc.onaudioprocess=d=>{const e=d.outputBuffer.length,g=rc(e);if(g){const f=d.outputBuffer.numberOfChannels;for(let l=0;l<f;l++){const m=d.outputBuffer.getChannelData(l);for(let p=
0;p<e;p++)m[p]=x[(g>>2)+(f*p+l)]}}},h.Nc.connect(h.Gc.destination),a=()=>{h.Gc&&"suspended"===h.Gc.state&&h.Gc.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchend",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},db:function(){return h.Gc?h.Gc.sampleRate:0},ja:function(){const a=h.Gc;null!==a&&(h.Nc&&h.Nc.disconnect(),a.close(),h.Gc=null,h.Nc=null)},bb:function(){if(h.Gc)return"suspended"===h.Gc.state?1:0},w:function(a,b,c,d,e,g){b=b?B(t,
b):"";const f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";const l=0<d;l&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(f.readyState==XMLHttpRequest.DONE)if(206==f.status||200==f.status&&!l){const m=new Uint8Array(f.response),p=m.length;p<=g?(t.set(m,e),sc(a,d,p)):tc(a)}else uc(a,f.status)};f.send()},ia:function(a,b){b=b?B(t,b):"";const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==
c.status){const d=c.getResponseHeader("Content-Length");vc(a,d)}else uc(a,c.status)};c.send()},ya:function(){return navigator.userAgent.includes("Macintosh")?1:0},ha:function(a,b){b=b?B(t,b):"";switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}},Z;
(async function(){function a(c){Z=c.exports;na=Z.jc;ra();kb=Z.Bc;ta.unshift(Z.kc);z--;h.monitorRunDependencies?.(z);0==z&&A&&(c=A,A=null,c());return Z}z++;h.monitorRunDependencies?.(z);var b={a:wc};if(h.instantiateWasm)try{return h.instantiateWasm(b,a)}catch(c){return n(`Module.instantiateWasm callback failed with error: ${c}`),!1}za??=ya("pacman-ui.wasm")?"pacman-ui.wasm":h.locateFile?h.locateFile("pacman-ui.wasm",k):k+"pacman-ui.wasm";b=await Ca(b);a(b.instance);return b})();
var M=a=>(M=Z.lc)(a),jc=h._fs_emsc_alloc=a=>(jc=h._fs_emsc_alloc=Z.mc)(a),kc=h._fs_emsc_load_snapshot_callback=(a,b,c)=>(kc=h._fs_emsc_load_snapshot_callback=Z.nc)(a,b,c),mc=h.__sapp_emsc_onpaste=a=>(mc=h.__sapp_emsc_onpaste=Z.oc)(a),lc=h.__sapp_html5_get_ask_leave_site=()=>(lc=h.__sapp_html5_get_ask_leave_site=Z.pc)(),nc=h.__sapp_emsc_begin_drop=a=>(nc=h.__sapp_emsc_begin_drop=Z.qc)(a),oc=h.__sapp_emsc_drop=(a,b)=>(oc=h.__sapp_emsc_drop=Z.rc)(a,b),pc=h.__sapp_emsc_end_drop=(a,b,c)=>(pc=h.__sapp_emsc_end_drop=
Z.sc)(a,b,c);h.__sapp_emsc_invoke_fetch_cb=(a,b,c,d,e,g,f,l)=>(h.__sapp_emsc_invoke_fetch_cb=Z.tc)(a,b,c,d,e,g,f,l);
var xc=h._main=(a,b)=>(xc=h._main=Z.uc)(a,b),rc=h.__saudio_emsc_pull=a=>(rc=h.__saudio_emsc_pull=Z.vc)(a),qc=h.__sargs_add_kvp=(a,b)=>(qc=h.__sargs_add_kvp=Z.wc)(a,b),vc=h.__sfetch_emsc_head_response=(a,b)=>(vc=h.__sfetch_emsc_head_response=Z.xc)(a,b),sc=h.__sfetch_emsc_get_response=(a,b,c)=>(sc=h.__sfetch_emsc_get_response=Z.yc)(a,b,c),uc=h.__sfetch_emsc_failed_http_status=(a,b)=>(uc=h.__sfetch_emsc_failed_http_status=Z.zc)(a,b),tc=h.__sfetch_emsc_failed_buffer_too_small=a=>(tc=h.__sfetch_emsc_failed_buffer_too_small=
Z.Ac)(a),ic=(a,b)=>(ic=Z.Cc)(a,b),ec=a=>(ec=Z.Dc)(a),bc=a=>(bc=Z.Ec)(a),dc=()=>(dc=Z.Fc)(),yc;A=function zc(){yc||Ac();yc||(A=zc)};function Bc(a=[]){var b=xc;a.unshift(fa);var c=a.length,d=bc(4*(c+1)),e=d;a.forEach(f=>{w[e>>2]=cc(f);e+=4});w[e>>2]=0;try{var g=b(c,d);Ka(g)}catch(f){Ia(f)}}
function Ac(){var a=ea;function b(){if(!yc&&(yc=!0,h.calledRun=!0,!q)){Ea(ta);Ea(ua);h.onRuntimeInitialized?.();Cc&&Bc(a);if(h.postRun)for("function"==typeof h.postRun&&(h.postRun=[h.postRun]);h.postRun.length;){var c=h.postRun.shift();va.unshift(c)}Ea(va)}}if(!(0<z)){if(h.preRun)for("function"==typeof h.preRun&&(h.preRun=[h.preRun]);h.preRun.length;)wa();Ea(sa);0<z||(h.setStatus?(h.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>h.setStatus(""),1);b()},1)):b())}}
if(h.preInit)for("function"==typeof h.preInit&&(h.preInit=[h.preInit]);0<h.preInit.length;)h.preInit.pop()();var Cc=!0;h.noInitialRun&&(Cc=!1);Ac();
