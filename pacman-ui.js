var h;h||=typeof Module != 'undefined' ? Module : {};var aa="object"==typeof window,ba="undefined"!=typeof WorkerGlobalScope,ca="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node&&"renderer"!=process.type,da=Object.assign({},h),ea=[],fa="./this.program",ha=(a,b)=>{throw b;},k="",ia,ja;
if(ca){var fs=require("fs"),ka=require("path");k=__dirname+"/";ja=a=>{a=la(a)?new URL(a):ka.normalize(a);return fs.readFileSync(a)};ia=a=>{a=la(a)?new URL(a):ka.normalize(a);return new Promise((b,c)=>{fs.readFile(a,void 0,(d,e)=>{d?c(d):b(e.buffer)})})};!h.thisProgram&&1<process.argv.length&&(fa=process.argv[1].replace(/\\/g,"/"));ea=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=h);ha=(a,b)=>{process.exitCode=a;throw b;}}else if(aa||ba)ba?k=self.location.href:"undefined"!=typeof document&&
document.currentScript&&(k=document.currentScript.src),k=k.startsWith("blob:")?"":k.substr(0,k.replace(/[?#].*/,"").lastIndexOf("/")+1),ba&&(ja=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ia=a=>la(a)?new Promise((b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c(d.status)};d.onerror=c;d.send(null)}):fetch(a,{credentials:"same-origin"}).then(b=>
b.ok?b.arrayBuffer():Promise.reject(Error(b.status+" : "+b.url)));var ma=h.print||console.log.bind(console),n=h.printErr||console.error.bind(console);Object.assign(h,da);da=null;h.arguments&&(ea=h.arguments);h.thisProgram&&(fa=h.thisProgram);var na=h.wasmBinary,oa,q=!1,pa,r,t,qa,ra,u,w,x,y;
function sa(){var a=oa.buffer;h.HEAP8=r=new Int8Array(a);h.HEAP16=qa=new Int16Array(a);h.HEAPU8=t=new Uint8Array(a);h.HEAPU16=ra=new Uint16Array(a);h.HEAP32=u=new Int32Array(a);h.HEAPU32=w=new Uint32Array(a);h.HEAPF32=x=new Float32Array(a);h.HEAPF64=y=new Float64Array(a)}var ta=[],ua=[],va=[],wa=[];function xa(){var a=h.preRun.shift();ta.unshift(a)}var z=0,ya=null,A=null;
function za(a){h.onAbort?.(a);a="Aborted("+a+")";n(a);q=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}var Aa=a=>a.startsWith("data:application/octet-stream;base64,"),la=a=>a.startsWith("file://"),Ba;function Ca(a){if(a==Ba&&na)return new Uint8Array(na);if(ja)return ja(a);throw"both async and sync fetching of the wasm failed";}function Da(a){return na?Promise.resolve().then(()=>Ca(a)):ia(a).then(b=>new Uint8Array(b),()=>Ca(a))}
function Ea(a,b,c){return Da(a).then(d=>WebAssembly.instantiate(d,b)).then(c,d=>{n(`failed to asynchronously prepare wasm: ${d}`);za(d)})}function Fa(a,b){var c=Ba;na||"function"!=typeof WebAssembly.instantiateStreaming||Aa(c)||la(c)||ca||"function"!=typeof fetch?Ea(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){n(`wasm streaming compile failed: ${e}`);n("falling back to ArrayBuffer instantiation");return Ea(c,a,b)}))}
class Ga{name="ExitStatus";constructor(a){this.message=`Program terminated with exit(${a})`;this.status=a}}
var Ha=a=>{for(;0<a.length;)a.shift()(h)},Ia=h.noExitRuntime||!0,Ja="undefined"!=typeof TextDecoder?new TextDecoder:void 0,B=(a,b=0,c=NaN)=>{var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&Ja)return Ja.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var g=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|g<<6|f:(e&7)<<18|g<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>
10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d},Ka=0,C={},La=a=>{a instanceof Ga||"unwind"==a||ha(1,a)},Ma=a=>{pa=a;Ia||0<Ka||(h.onExit?.(a),q=!0);ha(a,new Ga(a))},Na=a=>{pa=a;Ma(a)},Oa=()=>{if(!(Ia||0<Ka))try{var a=pa;pa=a;Ma(a)}catch(b){La(b)}},Pa=a=>{if(!q)try{a(),Oa()}catch(b){La(b)}},Wa=(a,b)=>{Qa=a;Ra=b;if(D)if(Sa||=!0,0==a)E=function(){setTimeout(F,Math.max(0,Ta+b-performance.now())|0)};else if(1==a)E=function(){Ua(F)};else if(2==a){if("undefined"==typeof Va)if("undefined"==typeof setImmediate){var c=
[];addEventListener("message",d=>{if("setimmediate"===d.data||"setimmediate"===d.data.target)d.stopPropagation(),c.shift()()},!0);Va=d=>{c.push(d);if(ba){let e;(e=h).setImmediates??(e.setImmediates=[]);h.setImmediates.push(d);postMessage({target:"setimmediate"})}else postMessage("setimmediate","*")}}else Va=setImmediate;E=function(){Va(F)}}},eb=(a,b,c,d,e)=>{function g(){return f<Xa?(Oa(),!1):!0}D=a;Ya=d;var f=Xa;Sa=!1;F=function(){if(!q)if(0<Za.length){var l=Za.shift();l.Sd(l.Id);if($a){var m=$a,
p=0==m%1?m-1:Math.floor(m);$a=l.Kd?p:(8*m+(p+.5))/9}h.setStatus&&(l=h.statusMessage||"Please wait...",m=$a??0,p=ab.Qd??0,m?m<p?h.setStatus("{message} ({expected - remaining}/{expected})"):h.setStatus(l):h.setStatus(""));g()&&setTimeout(F,0)}else if(g())if(bb=bb+1|0,1==Qa&&1<Ra&&0!=bb%Ra)E();else{0==Qa&&(Ta=performance.now());a:if(!q){for(l of cb)if(!1===l())break a;Pa(a);for(m of db)m()}g()&&E()}};e||(b&&0<b?Wa(0,1E3/b):Wa(1,1),E());if(c)throw"unwind";},Sa=!1,E=null,Xa=0,D=null,Ya=0,Qa=0,Ra=0,bb=
0,Za=[],cb=[],db=[];function fb(){E=null;Xa++}var gb=0;function Ua(a){if("function"==typeof requestAnimationFrame)requestAnimationFrame(a);else{var b=Date.now();if(0===gb)gb=b+1E3/60;else for(;b+2>=gb;)gb+=1E3/60;setTimeout(a,Math.max(gb-b,0))}}var ab={},Ta,F,Va,$a;function hb(a){var b=H.Gc[a];b.target.removeEventListener(b.Fc,b.md,b.Hc);H.Gc.splice(a,1)}function ib(){if(navigator.userActivation?navigator.userActivation.isActive:H.Xc&&H.zd.Vc){var a=H.Nc;H.Nc=[];for(var b of a)b.$c(...b.hd)}}
function I(a){if(!a.target)return-4;if(a.Ic)a.md=function(c){++H.Xc;H.zd=a;ib();a.Jc(c);ib();--H.Xc},a.target.addEventListener(a.Fc,a.md,a.Hc),H.Gc.push(a);else for(var b=0;b<H.Gc.length;++b)H.Gc[b].target==a.target&&H.Gc[b].Fc==a.Fc&&hb(b--);return 0}function jb(a){return a?a==window?"#window":a==screen?"#screen":a?.nodeName||"":""}
var H={Jd:0,Td:0,Yc:0,Tc:0,dd:0,bd:0,Wc:0,Od:0,Xd:0,Nd:0,Rd:0,Zc:0,fe:0,ad:0,Vd(a,b,c){r.set(r.subarray(b,b+c),a)},Zd(){for(;H.Gc.length;)hb(H.Gc.length-1);H.Nc=[]},Xc:0,Nc:[],Md(a,b,c){function d(g,f){if(g.length!=f.length)return!1;for(var l in g)if(g[l]!=f[l])return!1;return!0}for(var e of H.Nc)if(e.$c==a&&d(e.hd,c))return;H.Nc.push({$c:a,qd:b,hd:c});H.Nc.sort((g,f)=>g.qd<f.qd)},ae(a){H.Nc=H.Nc.filter(b=>b.$c!=a)},Gc:[],$d:(a,b)=>{for(var c=0;c<H.Gc.length;++c)H.Gc[c].target!=a||b&&b!=H.Gc[c].Fc||
hb(c--)},fullscreenEnabled(){return document.fullscreenEnabled||document.webkitFullscreenEnabled}},kb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0],J=a=>{a=2<a?a?B(t,a):"":a;return kb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)},lb=a=>0>kb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0},mb=[],nb,K=a=>{var b=mb[a];b||(a>=mb.length&&(mb.length=a+1),mb[a]=b=nb.get(a));return b},L=(a,b,c)=>{var d=t;if(!(0<c))return 0;var e=b;c=b+c-1;for(var g=
0;g<a.length;++g){var f=a.charCodeAt(g);if(55296<=f&&57343>=f){var l=a.charCodeAt(++g);f=65536+((f&1023)<<10)|l&1023}if(127>=f){if(b>=c)break;d[b++]=f}else{if(2047>=f){if(b+1>=c)break;d[b++]=192|f>>6}else{if(65535>=f){if(b+2>=c)break;d[b++]=224|f>>12}else{if(b+3>=c)break;d[b++]=240|f>>18;d[b++]=128|f>>12&63}d[b++]=128|f>>6&63}d[b++]=128|f&63}}d[b]=0;return b-e},ob=(a,b,c,d,e,g)=>{H.Wc||(H.Wc=M(256));a={target:J(a),Fc:g,Ic:d,Jc:(f=event)=>{var l=f.target.id?f.target.id:"",m=H.Wc;L(jb(f.target),m+0,
128);L(l,m+128,128);K(d)(e,m,b)&&f.preventDefault()},Hc:c};return I(a)},pb=(a,b,c,d,e,g)=>{H.Yc||(H.Yc=M(160));a={target:J(a),Fc:g,Ic:d,Jc:f=>{var l=H.Yc;y[l>>3]=f.timeStamp;var m=l>>2;u[m+2]=f.location;r[l+12]=f.ctrlKey;r[l+13]=f.shiftKey;r[l+14]=f.altKey;r[l+15]=f.metaKey;r[l+16]=f.repeat;u[m+5]=f.charCode;u[m+6]=f.keyCode;u[m+7]=f.which;L(f.key||"",l+32,32);L(f.code||"",l+64,32);L(f.char||"",l+96,32);L(f.locale||"",l+128,32);K(d)(e,l,b)&&f.preventDefault()},Hc:c};return I(a)},qb=(a,b,c)=>{y[a>>
3]=b.timeStamp;var d=a>>2;u[d+2]=b.screenX;u[d+3]=b.screenY;u[d+4]=b.clientX;u[d+5]=b.clientY;r[a+24]=b.ctrlKey;r[a+25]=b.shiftKey;r[a+26]=b.altKey;r[a+27]=b.metaKey;qa[2*d+14]=b.button;qa[2*d+15]=b.buttons;u[d+8]=b.movementX;u[d+9]=b.movementY;a=lb(c);u[d+10]=b.clientX-(a.left|0);u[d+11]=b.clientY-(a.top|0)},rb=(a,b,c,d,e,g)=>{H.Tc||(H.Tc=M(64));a=J(a);return I({target:a,Vc:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,Fc:g,Ic:d,Jc:(f=event)=>{qb(H.Tc,f,a);K(d)(e,H.Tc,b)&&f.preventDefault()},
Hc:c})},sb=(a,b,c,d,e)=>{H.Zc||(H.Zc=M(257));return I({target:a,Fc:e,Ic:d,Jc:(g=event)=>{var f=H.Zc,l=document.pointerLockElement||document.Oc||document.gd||document.ed;r[f]=!!l;var m=l?.id||"";L(jb(l),f+1,128);L(m,f+129,128);K(d)(20,f,b)&&g.preventDefault()},Hc:c})},tb=(a,b,c,d,e)=>I({target:a,Fc:e,Ic:d,Jc:(g=event)=>{K(d)(38,0,b)&&g.preventDefault()},Hc:c}),ub=(a,b,c,d)=>{H.bd||(H.bd=M(36));a=J(a);return I({target:a,Fc:"resize",Ic:d,Jc:(e=event)=>{if(e.target==a){var g=document.body;if(g){var f=
H.bd;u[f>>2]=0;u[f+4>>2]=g.clientWidth;u[f+8>>2]=g.clientHeight;u[f+12>>2]=innerWidth;u[f+16>>2]=innerHeight;u[f+20>>2]=outerWidth;u[f+24>>2]=outerHeight;u[f+28>>2]=pageXOffset|0;u[f+32>>2]=pageYOffset|0;K(d)(10,f,b)&&e.preventDefault()}}},Hc:c})},vb=(a,b,c,d,e,g)=>{H.ad||(H.ad=M(1552));a=J(a);return I({target:a,Vc:"touchstart"==g||"touchend"==g,Fc:g,Ic:d,Jc:f=>{var l={},m=f.touches;for(var p of m)p.nd=p.pd=0,l[p.identifier]=p;for(var v of f.changedTouches)v.nd=1,l[v.identifier]=v;for(var Q of f.targetTouches)l[Q.identifier].pd=
1;m=H.ad;y[m>>3]=f.timeStamp;r[m+12]=f.ctrlKey;r[m+13]=f.shiftKey;r[m+14]=f.altKey;r[m+15]=f.metaKey;p=m+16;v=lb(a);Q=0;for(let G of Object.values(l))if(l=p>>2,u[l]=G.identifier,u[l+1]=G.screenX,u[l+2]=G.screenY,u[l+3]=G.clientX,u[l+4]=G.clientY,u[l+5]=G.pageX,u[l+6]=G.pageY,r[p+28]=G.nd,r[p+29]=G.pd,u[l+8]=G.clientX-(v.left|0),u[l+9]=G.clientY-(v.top|0),p+=48,31<++Q)break;u[m+8>>2]=Q;K(d)(e,m,b)&&f.preventDefault()},Hc:c})},N,wb=a=>{var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=
(c,d)=>b.vertexAttribDivisorANGLE(c,d),a.drawArraysInstanced=(c,d,e,g)=>b.drawArraysInstancedANGLE(c,d,e,g),a.drawElementsInstanced=(c,d,e,g,f)=>b.drawElementsInstancedANGLE(c,d,e,g,f))},xb=a=>{var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=()=>b.createVertexArrayOES(),a.deleteVertexArray=c=>b.deleteVertexArrayOES(c),a.bindVertexArray=c=>b.bindVertexArrayOES(c),a.isVertexArray=c=>b.isVertexArrayOES(c))},yb=a=>{var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=(c,
d)=>b.drawBuffersWEBGL(c,d))},zb=a=>{a.Pd=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")},Ab=a=>{a.Ud=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")},Bb=a=>{var b="ANGLE_instanced_arrays EXT_blend_minmax EXT_disjoint_timer_query EXT_frag_depth EXT_shader_texture_lod EXT_sRGB OES_element_index_uint OES_fbo_render_mipmap OES_standard_derivatives OES_texture_float OES_texture_half_float OES_texture_half_float_linear OES_vertex_array_object WEBGL_color_buffer_float WEBGL_depth_texture WEBGL_draw_buffers EXT_color_buffer_float EXT_conservative_depth EXT_disjoint_timer_query_webgl2 EXT_texture_norm16 NV_shader_noperspective_interpolation WEBGL_clip_cull_distance EXT_clip_control EXT_color_buffer_half_float EXT_depth_clamp EXT_float_blend EXT_polygon_offset_clamp EXT_texture_compression_bptc EXT_texture_compression_rgtc EXT_texture_filter_anisotropic KHR_parallel_shader_compile OES_texture_float_linear WEBGL_blend_func_extended WEBGL_compressed_texture_astc WEBGL_compressed_texture_etc WEBGL_compressed_texture_etc1 WEBGL_compressed_texture_s3tc WEBGL_compressed_texture_s3tc_srgb WEBGL_debug_renderer_info WEBGL_debug_shaders WEBGL_lose_context WEBGL_multi_draw WEBGL_polygon_mode".split(" ");
return(a.getSupportedExtensions()||[]).filter(c=>b.includes(c))},Cb=1,Db=[],O=[],Eb=[],Fb=[],P=[],R=[],Gb=[],Hb=[],S=[],Ib={},Jb=4,Kb=0,Lb=a=>{for(var b=Cb++,c=a.length;c<b;c++)a[c]=null;return b},U=(a,b,c,d)=>{for(var e=0;e<a;e++){var g=N[c](),f=g&&Lb(d);g?(g.name=f,d[f]=g):T||=1282;u[b+4*e>>2]=f}},Nb=(a,b)=>{a.Oc||(a.Oc=a.getContext,a.getContext=function(d,e){e=a.Oc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.od?a.getContext("webgl2",b):a.getContext("webgl",b);return c?
Mb(c,b):0},Mb=(a,b)=>{var c=Lb(Hb),d={handle:c,attributes:b,version:b.od,Uc:a};a.canvas&&(a.canvas.Hd=d);Hb[c]=d;("undefined"==typeof b.ld||b.ld)&&Ob(d);return c},Ob=a=>{a||=V;if(!a.Ed){a.Ed=!0;var b=a.Uc;b.Fd=b.getExtension("WEBGL_multi_draw");b.Dd=b.getExtension("EXT_polygon_offset_clamp");b.Cd=b.getExtension("EXT_clip_control");b.Gd=b.getExtension("WEBGL_polygon_mode");wb(b);xb(b);yb(b);zb(b);Ab(b);2<=a.version&&(b.kd=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.kd)b.kd=
b.getExtension("EXT_disjoint_timer_query");Bb(b).forEach(c=>{c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}},T,V,Pb=(a,b,c,d,e,g)=>{a={target:J(a),Fc:g,Ic:d,Jc:(f=event)=>{K(d)(e,0,b)&&f.preventDefault()},Hc:c};I(a)},Qb=(a,b,c,d)=>{H.dd||(H.dd=M(96));return I({target:a,Vc:!0,Fc:"wheel",Ic:d,Jc:(e=event)=>{var g=H.dd;qb(g,e,a);y[g+64>>3]=e.deltaX;y[g+72>>3]=e.deltaY;y[g+80>>3]=e.deltaZ;u[g+88>>2]=e.deltaMode;K(d)(9,g,b)&&e.preventDefault()},Hc:c})},Rb=["default","low-power",
"high-performance"],Sb={},Ub=()=>{if(!Tb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:fa||"./this.program"},b;for(b in Sb)void 0===Sb[b]?delete a[b]:a[b]=Sb[b];var c=[];for(b in a)c.push(`${b}=${a[b]}`);Tb=c}return Tb},Tb,Vb=[null,[],[]],Wb=[];function Xb(){var a=Bb(N);return a=a.concat(a.map(b=>"GL_"+b))}
var Yb=(a,b)=>{if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=N.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){T||=1282;return}c=Xb().length;break;case 33307:case 33308:if(2>V.version){T||=1280;return}c=33307==a?3:0}if(void 0===c)switch(d=N.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":T||=1280;return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:T||=1280;return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)u[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){T||=1280;n(`GL_INVALID_ENUM in glGet${0}v: Unknown object returned from WebGL getParameter(${a})! (error: ${e})`);return}}break;default:T||=1280;n(`GL_INVALID_ENUM in glGet${0}v: Native code calling glGet${0}v(${a}) and it returns ${d} of type ${typeof d}!`);return}u[b>>2]=c}else T||=1281},Zb=
a=>{for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b},$b=a=>{var b=Zb(a)+1,c=M(b);c&&L(a,c,b);return c},ac=a=>"]"==a.slice(-1)&&a.lastIndexOf("["),bc=a=>{a-=5120;return 0==a?r:1==a?t:2==a?qa:4==a?u:6==a?x:5==a||28922==a||28520==a||30779==a||30782==a?w:ra},cc=(a,b,c,d,e)=>{a=bc(a);b=d*((Kb||c)*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*a.BYTES_PER_ELEMENT+Jb-1&-Jb);return a.subarray(e>>>31-Math.clz32(a.BYTES_PER_ELEMENT),
e+b>>>31-Math.clz32(a.BYTES_PER_ELEMENT))},W=a=>{var b=N.Ad;if(b){var c=b.Pc[a];"number"==typeof c&&(b.Pc[a]=c=N.getUniformLocation(b,b.xd[a]+(0<c?`[${c}]`:"")));return c}T||=1282},X=[],dc=[],fc=a=>{var b=Zb(a)+1,c=ec(b);L(a,c,b);return c},ic=a=>{var b=gc();a();hc(b)};h.requestAnimationFrame=Ua;h.pauseMainLoop=fb;h.resumeMainLoop=function(){Xa++;var a=Qa,b=Ra,c=D;D=null;eb(c,0,!1,Ya,!0);Wa(a,b);E()};h.preMainLoop&&cb.push(h.preMainLoop);h.postMainLoop&&db.push(h.postMainLoop);for(var Y=0;32>Y;++Y)Wb.push(Array(Y));
var jc=new Float32Array(288);for(Y=0;288>=Y;++Y)X[Y]=jc.subarray(0,Y);var kc=new Int32Array(288);for(Y=0;288>=Y;++Y)dc[Y]=kc.subarray(0,Y);
var zc={la:function(){return 0},ob:function(){return 0},qb:function(){},ub:()=>{za("")},tb:(a,b,c)=>t.copyWithin(a,b,b+c),jb:()=>{Ia=!1;Ka=0},kb:(a,b)=>{C[a]&&(clearTimeout(C[a].id),delete C[a]);if(!b)return 0;var c=setTimeout(()=>{delete C[a];Pa(()=>lc(a,performance.now()))},b);C[a]={id:c,ee:b};return 0},Va:()=>{fb();D=null},ea:()=>"number"==typeof devicePixelRatio&&devicePixelRatio||1,ga:(a,b,c)=>{a=J(a);if(!a)return-4;a=lb(a);y[b>>3]=a.width;y[c>>3]=a.height;return 0},x:()=>performance.now(),Wa:()=>
performance.now(),ab:(a,b)=>{function c(d){K(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},lb:a=>{var b=t.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);a:{d=(Math.min(2147483648,65536*Math.ceil(Math.max(a,d)/65536))-oa.buffer.byteLength+65535)/65536|0;try{oa.grow(d);sa();var e=1;break a}catch(g){}e=void 0}if(e)return!0}return!1},O:(a,b,c,d)=>ob(a,b,c,d,12,"blur"),da:(a,b,c)=>{a=J(a);if(!a)return-4;a.width=b;a.height=c;
return 0},P:(a,b,c,d)=>ob(a,b,c,d,13,"focus"),Y:(a,b,c,d)=>pb(a,b,c,d,2,"keydown"),W:(a,b,c,d)=>pb(a,b,c,d,1,"keypress"),X:(a,b,c,d)=>pb(a,b,c,d,3,"keyup"),cb:(a,b,c)=>{a=K(a);eb(a,b,c)},ca:(a,b,c,d)=>rb(a,b,c,d,5,"mousedown"),$:(a,b,c,d)=>rb(a,b,c,d,33,"mouseenter"),_:(a,b,c,d)=>rb(a,b,c,d,34,"mouseleave"),aa:(a,b,c,d)=>rb(a,b,c,d,8,"mousemove"),ba:(a,b,c,d)=>rb(a,b,c,d,6,"mouseup"),R:(a,b,c,d)=>{if(!document||!document.body||!(document.body.requestPointerLock||document.body.Oc||document.body.gd||
document.body.ed))return-1;a=J(a);if(!a)return-4;sb(a,b,c,d,"mozpointerlockchange");sb(a,b,c,d,"webkitpointerlockchange");sb(a,b,c,d,"mspointerlockchange");return sb(a,b,c,d,"pointerlockchange")},Q:(a,b,c,d)=>{if(!document||!(document.body.requestPointerLock||document.body.Oc||document.body.gd||document.body.ed))return-1;a=J(a);if(!a)return-4;tb(a,b,c,d,"mozpointerlockerror");tb(a,b,c,d,"webkitpointerlockerror");tb(a,b,c,d,"mspointerlockerror");return tb(a,b,c,d,"pointerlockerror")},fa:(a,b,c,d)=>
ub(a,b,c,d),S:(a,b,c,d)=>vb(a,b,c,d,25,"touchcancel"),T:(a,b,c,d)=>vb(a,b,c,d,23,"touchend"),U:(a,b,c,d)=>vb(a,b,c,d,24,"touchmove"),V:(a,b,c,d)=>vb(a,b,c,d,22,"touchstart"),N:(a,b,c,d)=>{Pb(a,b,c,d,31,"webglcontextlost");return 0},M:(a,b,c,d)=>{Pb(a,b,c,d,32,"webglcontextrestored");return 0},Z:(a,b,c,d)=>(a=J(a))?"undefined"!=typeof a.onwheel?Qb(a,b,c,d):-1:-4,$a:(a,b)=>{var c=b>>2;b={alpha:!!r[b+0],depth:!!r[b+1],stencil:!!r[b+2],antialias:!!r[b+3],premultipliedAlpha:!!r[b+4],preserveDrawingBuffer:!!r[b+
5],powerPreference:Rb[u[c+2]],failIfMajorPerformanceCaveat:!!r[b+12],od:u[c+4],Wd:u[c+5],ld:r[b+24],Bd:r[b+25],Yd:u[c+7],be:r[b+32]};a=J(a);return!a||b.Bd?0:Nb(a,b)},Za:(a,b)=>{a=Hb[a];b=b?B(t,b):"";b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&wb(N);"OES_vertex_array_object"==b&&xb(N);"WEBGL_draw_buffers"==b&&yb(N);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&zb(N);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&Ab(N);"WEBGL_multi_draw"==b&&(N.Fd=N.getExtension("WEBGL_multi_draw"));
"EXT_polygon_offset_clamp"==b&&(N.Dd=N.getExtension("EXT_polygon_offset_clamp"));"EXT_clip_control"==b&&(N.Cd=N.getExtension("EXT_clip_control"));"WEBGL_polygon_mode"==b&&(N.Gd=N.getExtension("WEBGL_polygon_mode"));return!!a.Uc.getExtension(b)},_a:a=>{V=Hb[a];h.Ld=N=V?.Uc;return!a||N?0:-5},rb:(a,b)=>{var c=0;Ub().forEach((d,e)=>{var g=b+c;e=w[a+4*e>>2]=g;for(g=0;g<d.length;++g)r[e++]=d.charCodeAt(g);r[e]=0;c+=d.length+1});return 0},sb:(a,b)=>{var c=Ub();w[a>>2]=c.length;var d=0;c.forEach(e=>d+=e.length+
1);w[b>>2]=d;return 0},ka:()=>52,nb:()=>52,hb:function(){return 70},mb:(a,b,c,d)=>{for(var e=0,g=0;g<c;g++){var f=w[b>>2],l=w[b+4>>2];b+=8;for(var m=0;m<l;m++){var p=t[f+m],v=Vb[a];0===p||10===p?((1===a?ma:n)(B(v)),v.length=0):v.push(p)}e+=l}w[d>>2]=e;return 0},k:function(a,b,c){const d=a?B(t,a):"";let e;try{e=window.indexedDB.open("chips",1)}catch(g){console.log("fs_js_load_snapshot: failed to open IndexedDB with "+g)}e.onupgradeneeded=()=>{console.log("fs_js_load_snapshot: creating db");e.result.createObjectStore("store")};
e.onsuccess=()=>{var g=e.result;let f;try{f=g.transaction(["store"],"readwrite")}catch(p){console.log("fs_js_load_snapshot: db.transaction failed with",p);return}g=f.objectStore("store");let l=d+"_"+b,m=g.get(l);m.onsuccess=()=>{if(void 0!==m.result){let p=m.result.length;console.log("fs_js_load_snapshot:",l,"successfully loaded",p,"bytes");let v=mc(p);t.set(m.result,v);nc(c,v,p)}else nc(c,0,0)};m.onerror=()=>{console.log("fs_js_load_snapshot: FAILED loading",l)};f.onerror=()=>{console.log("fs_js_load_snapshot: transaction onerror")}};
e.onerror=()=>{console.log("fs_js_load_snapshot: open_request onerror")}},gc:function(a,b,c,d){const e=a?B(t,a):"";console.log("fs_js_save_snapshot: called with",e,b);let g;try{g=window.indexedDB.open("chips",1)}catch(f){console.log("fs_js_save_snapshot: failed to open IndexedDB with "+f);return}g.onupgradeneeded=()=>{console.log("fs_js_save_snapshot: creating db");g.result.createObjectStore("store")};g.onsuccess=()=>{console.log("fs_js_save_snapshot: onsuccess");let f=g.result.transaction(["store"],
"readwrite");var l=f.objectStore("store");let m=e+"_"+b;l=l.put(t.subarray(c,c+d),m);l.onsuccess=()=>{console.log("fs_js_save_snapshot:",m,"successfully stored")};l.onerror=()=>{console.log("fs_js_save_snapshot: FAILED to store",m)};f.onerror=()=>{console.log("fs_js_save_snapshot: transaction onerror")}};g.onerror=()=>{console.log("fs_js_save_snapshot: open_request onerror")}},q:a=>N.activeTexture(a),wa:(a,b)=>{N.attachShader(O[a],R[b])},b:(a,b)=>{35051==a?N.jd=b:35052==a&&(N.Mc=b);N.bindBuffer(a,
Db[b])},a:(a,b,c)=>{N.bindBufferBase(a,b,Db[c])},m:(a,b)=>{N.bindFramebuffer(a,Eb[b])},Ga:(a,b)=>{N.bindRenderbuffer(a,Fb[b])},p:(a,b)=>{N.bindSampler(a,S[b])},d:(a,b)=>{N.bindTexture(a,P[b])},L:a=>{N.bindVertexArray(Gb[a])},H:(a,b,c,d)=>N.blendColor(a,b,c,d),I:(a,b)=>N.blendEquationSeparate(a,b),J:(a,b,c,d)=>N.blendFuncSeparate(a,b,c,d),yb:(a,b,c,d,e,g,f,l,m,p)=>N.blitFramebuffer(a,b,c,d,e,g,f,l,m,p),Ja:(a,b,c,d)=>{2<=V.version?c&&b?N.bufferData(a,t,d,c,b):N.bufferData(a,b,d):N.bufferData(a,c?t.subarray(c,
c+b):b,d)},B:(a,b,c,d)=>{2<=V.version?c&&N.bufferSubData(a,b,t,d,c):N.bufferSubData(a,b,t.subarray(d,d+c))},qa:a=>N.checkFramebufferStatus(a),Tb:(a,b,c,d)=>N.clearBufferfi(a,b,c,d),oa:(a,b,c)=>{N.clearBufferfv(a,b,x,c>>2)},Rb:(a,b,c)=>{N.clearBufferiv(a,b,u,c>>2)},r:(a,b,c,d)=>{N.colorMask(!!a,!!b,!!c,!!d)},Xb:a=>{N.compileShader(R[a])},Aa:(a,b,c,d,e,g,f,l)=>{2<=V.version?N.Mc||!f?N.compressedTexImage2D(a,b,c,d,e,g,f,l):N.compressedTexImage2D(a,b,c,d,e,g,t,l,f):N.compressedTexImage2D(a,b,c,d,e,g,
t.subarray(l,l+f))},ec:(a,b,c,d,e,g,f,l,m)=>{N.Mc?N.compressedTexImage3D(a,b,c,d,e,g,f,l,m):N.compressedTexImage3D(a,b,c,d,e,g,f,t,m,l)},bc:()=>{var a=Lb(O),b=N.createProgram();b.name=a;b.Sc=b.Qc=b.Rc=0;b.cd=1;O[a]=b;return a},Zb:a=>{var b=Lb(R);R[b]=N.createShader(a);return b},E:a=>N.cullFace(a),Ma:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=Db[d];e&&(N.deleteBuffer(e),e.name=0,Db[d]=null,d==N.jd&&(N.jd=0),d==N.Mc&&(N.Mc=0))}},f:(a,b)=>{for(var c=0;c<a;++c){var d=u[b+4*c>>2],e=Eb[d];e&&(N.deleteFramebuffer(e),
e.name=0,Eb[d]=null)}},n:a=>{if(a){var b=O[a];b?(N.deleteProgram(b),b.name=0,O[a]=null):T||=1281}},C:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=Fb[d];e&&(N.deleteRenderbuffer(e),e.name=0,Fb[d]=null)}},g:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=S[d];e&&(N.deleteSampler(e),e.name=0,S[d]=null)}},A:a=>{if(a){var b=R[a];b?(N.deleteShader(b),R[a]=null):T||=1281}},D:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=P[d];e&&(N.deleteTexture(e),e.name=0,P[d]=null)}},La:(a,b)=>{for(var c=0;c<a;c++){var d=
u[b+4*c>>2];N.deleteVertexArray(Gb[d]);Gb[d]=null}},v:a=>N.depthFunc(a),u:a=>{N.depthMask(!!a)},e:a=>N.disable(a),K:a=>{N.disableVertexAttribArray(a)},Ab:(a,b,c)=>{N.drawArrays(a,b,c)},Bb:(a,b,c,d)=>{N.drawArraysInstanced(a,b,c,d)},pa:(a,b)=>{for(var c=Wb[a],d=0;d<a;d++)c[d]=u[b+4*d>>2];N.drawBuffers(c)},Cb:(a,b,c,d)=>{N.drawElements(a,b,c,d)},Db:(a,b,c,d,e)=>{N.drawElementsInstanced(a,b,c,d,e)},j:a=>N.enable(a),Ob:a=>{N.enableVertexAttribArray(a)},ra:(a,b,c,d)=>{N.framebufferRenderbuffer(a,b,c,Fb[d])},
o:(a,b,c,d,e)=>{N.framebufferTexture2D(a,b,c,P[d],e)},y:(a,b,c,d,e)=>{N.framebufferTextureLayer(a,b,P[c],d,e)},F:a=>N.frontFace(a),Ka:(a,b)=>{U(a,b,"createBuffer",Db)},sa:(a,b)=>{U(a,b,"createFramebuffer",Eb)},Ha:(a,b)=>{U(a,b,"createRenderbuffer",Fb)},cc:(a,b)=>{U(a,b,"createSampler",S)},Ea:(a,b)=>{U(a,b,"createTexture",P)},Ua:(a,b)=>{U(a,b,"createVertexArray",Gb)},Vb:(a,b)=>N.getAttribLocation(O[a],b?B(t,b):""),c:(a,b)=>Yb(a,b),$b:(a,b,c,d)=>{a=N.getProgramInfoLog(O[a]);null===a&&(a="(unknown error)");
b=0<b&&d?L(a,d,b):0;c&&(u[c>>2]=b)},va:(a,b,c)=>{if(c)if(a>=Cb)T||=1281;else if(a=O[a],35716==b)a=N.getProgramInfoLog(a),null===a&&(a="(unknown error)"),u[c>>2]=a.length+1;else if(35719==b){if(!a.Sc){var d=N.getProgramParameter(a,35718);for(b=0;b<d;++b)a.Sc=Math.max(a.Sc,N.getActiveUniform(a,b).name.length+1)}u[c>>2]=a.Sc}else if(35722==b){if(!a.Qc)for(d=N.getProgramParameter(a,35721),b=0;b<d;++b)a.Qc=Math.max(a.Qc,N.getActiveAttrib(a,b).name.length+1);u[c>>2]=a.Qc}else if(35381==b){if(!a.Rc)for(d=
N.getProgramParameter(a,35382),b=0;b<d;++b)a.Rc=Math.max(a.Rc,N.getActiveUniformBlockName(a,b).length+1);u[c>>2]=a.Rc}else u[c>>2]=N.getProgramParameter(a,b);else T||=1281},Wb:(a,b,c,d)=>{a=N.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?L(a,d,b):0;c&&(u[c>>2]=b)},ta:(a,b,c)=>{c?35716==b?(a=N.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),u[c>>2]=a?a.length+1:0):35720==b?(a=N.getShaderSource(R[a]),u[c>>2]=a?a.length+1:0):u[c>>2]=N.getShaderParameter(R[a],b):T||=1281},Sa:(a,
b)=>{if(2>V.version)return T||=1282,0;var c=Ib[a];if(c)return 0>b||b>=c.length?(T||=1281,0):c[b];switch(a){case 7939:return c=Xb().map($b),c=Ib[a]=c,0>b||b>=c.length?(T||=1281,0):c[b];default:return T||=1280,0}},ua:(a,b)=>{b=b?B(t,b):"";if(a=O[a]){var c=a,d=c.Pc,e=c.yd,g;if(!d){c.Pc=d={};c.xd={};var f=N.getProgramParameter(c,35718);for(g=0;g<f;++g){var l=N.getActiveUniform(c,g);var m=l.name;l=l.size;var p=ac(m);p=0<p?m.slice(0,p):m;var v=c.cd;c.cd+=l;e[p]=[l,v];for(m=0;m<l;++m)d[v]=m,c.xd[v++]=p}}c=
a.Pc;d=0;e=b;g=ac(b);0<g&&(d=parseInt(b.slice(g+1))>>>0,e=b.slice(0,g));if((e=a.yd[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||N.getUniformLocation(a,b)))return d}else T||=1281;return-1},xb:(a,b,c)=>{for(var d=Wb[b],e=0;e<b;e++)d[e]=u[c+4*e>>2];N.invalidateFramebuffer(a,d)},ac:a=>{a=O[a];N.linkProgram(a);a.Pc=0;a.yd={}},Ta:(a,b)=>{3317==a?Jb=b:3314==a&&(Kb=b);N.pixelStorei(a,b)},G:(a,b)=>N.polygonOffset(a,b),zb:a=>N.readBuffer(a),Fa:(a,b,c,d,e)=>N.renderbufferStorageMultisample(a,b,c,d,e),xa:(a,b,c)=>{N.samplerParameterf(S[a],
b,c)},h:(a,b,c)=>{N.samplerParameteri(S[a],b,c)},s:(a,b,c,d)=>N.scissor(a,b,c,d),Yb:(a,b,c,d)=>{for(var e="",g=0;g<b;++g){var f=(f=w[c+4*g>>2])?B(t,f,d?w[d+4*g>>2]:void 0):"";e+=f}N.shaderSource(R[a],e)},Qa:(a,b,c)=>N.stencilFunc(a,b,c),na:(a,b,c,d)=>N.stencilFuncSeparate(a,b,c,d),t:a=>N.stencilMask(a),Pa:(a,b,c)=>N.stencilOp(a,b,c),ma:(a,b,c,d)=>N.stencilOpSeparate(a,b,c,d),za:(a,b,c,d,e,g,f,l,m)=>{if(2<=V.version){if(N.Mc){N.texImage2D(a,b,c,d,e,g,f,l,m);return}if(m){var p=bc(l);m>>>=31-Math.clz32(p.BYTES_PER_ELEMENT);
N.texImage2D(a,b,c,d,e,g,f,l,p,m);return}}p=m?cc(l,f,d,e,m):null;N.texImage2D(a,b,c,d,e,g,f,l,p)},dc:(a,b,c,d,e,g,f,l,m,p)=>{if(N.Mc)N.texImage3D(a,b,c,d,e,g,f,l,m,p);else if(p){var v=bc(m);N.texImage3D(a,b,c,d,e,g,f,l,m,v,p>>>31-Math.clz32(v.BYTES_PER_ELEMENT))}else N.texImage3D(a,b,c,d,e,g,f,l,m,null)},Da:(a,b,c)=>N.texParameteri(a,b,c),Ca:(a,b,c,d,e)=>N.texStorage2D(a,b,c,d,e),Ba:(a,b,c,d,e,g)=>N.texStorage3D(a,b,c,d,e,g),wb:(a,b,c,d,e,g,f,l,m)=>{if(2<=V.version){if(N.Mc){N.texSubImage2D(a,b,c,
d,e,g,f,l,m);return}if(m){var p=bc(l);N.texSubImage2D(a,b,c,d,e,g,f,l,p,m>>>31-Math.clz32(p.BYTES_PER_ELEMENT));return}}m=m?cc(l,f,e,g,m):null;N.texSubImage2D(a,b,c,d,e,g,f,l,m)},vb:(a,b,c,d,e,g,f,l,m,p,v)=>{if(N.Mc)N.texSubImage3D(a,b,c,d,e,g,f,l,m,p,v);else if(v){var Q=bc(p);N.texSubImage3D(a,b,c,d,e,g,f,l,m,p,Q,v>>>31-Math.clz32(Q.BYTES_PER_ELEMENT))}else N.texSubImage3D(a,b,c,d,e,g,f,l,m,p,null)},Nb:(a,b,c)=>{if(2<=V.version)b&&N.uniform1fv(W(a),x,c>>2,b);else{if(288>=b)for(var d=X[b],e=0;e<b;++e)d[e]=
x[c+4*e>>2];else d=x.subarray(c>>2,c+4*b>>2);N.uniform1fv(W(a),d)}},_b:(a,b)=>{N.uniform1i(W(a),b)},Ib:(a,b,c)=>{if(2<=V.version)b&&N.uniform1iv(W(a),u,c>>2,b);else{if(288>=b)for(var d=dc[b],e=0;e<b;++e)d[e]=u[c+4*e>>2];else d=u.subarray(c>>2,c+4*b>>2);N.uniform1iv(W(a),d)}},Mb:(a,b,c)=>{if(2<=V.version)b&&N.uniform2fv(W(a),x,c>>2,2*b);else{if(144>=b){b*=2;for(var d=X[b],e=0;e<b;e+=2)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2]}else d=x.subarray(c>>2,c+8*b>>2);N.uniform2fv(W(a),d)}},Hb:(a,b,c)=>{if(2<=
V.version)b&&N.uniform2iv(W(a),u,c>>2,2*b);else{if(144>=b){b*=2;for(var d=dc[b],e=0;e<b;e+=2)d[e]=u[c+4*e>>2],d[e+1]=u[c+(4*e+4)>>2]}else d=u.subarray(c>>2,c+8*b>>2);N.uniform2iv(W(a),d)}},Lb:(a,b,c)=>{if(2<=V.version)b&&N.uniform3fv(W(a),x,c>>2,3*b);else{if(96>=b){b*=3;for(var d=X[b],e=0;e<b;e+=3)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2],d[e+2]=x[c+(4*e+8)>>2]}else d=x.subarray(c>>2,c+12*b>>2);N.uniform3fv(W(a),d)}},Gb:(a,b,c)=>{if(2<=V.version)b&&N.uniform3iv(W(a),u,c>>2,3*b);else{if(96>=b){b*=3;
for(var d=dc[b],e=0;e<b;e+=3)d[e]=u[c+4*e>>2],d[e+1]=u[c+(4*e+4)>>2],d[e+2]=u[c+(4*e+8)>>2]}else d=u.subarray(c>>2,c+12*b>>2);N.uniform3iv(W(a),d)}},Kb:(a,b,c)=>{if(2<=V.version)b&&N.uniform4fv(W(a),x,c>>2,4*b);else{if(72>=b){var d=X[4*b],e=x;c>>=2;b*=4;for(var g=0;g<b;g+=4){var f=c+g;d[g]=e[f];d[g+1]=e[f+1];d[g+2]=e[f+2];d[g+3]=e[f+3]}}else d=x.subarray(c>>2,c+16*b>>2);N.uniform4fv(W(a),d)}},Fb:(a,b,c)=>{if(2<=V.version)b&&N.uniform4iv(W(a),u,c>>2,4*b);else{if(72>=b){b*=4;for(var d=dc[b],e=0;e<b;e+=
4)d[e]=u[c+4*e>>2],d[e+1]=u[c+(4*e+4)>>2],d[e+2]=u[c+(4*e+8)>>2],d[e+3]=u[c+(4*e+12)>>2]}else d=u.subarray(c>>2,c+16*b>>2);N.uniform4iv(W(a),d)}},Eb:(a,b,c,d)=>{if(2<=V.version)b&&N.uniformMatrix4fv(W(a),!!c,x,d>>2,16*b);else{if(18>=b){var e=X[16*b],g=x;d>>=2;b*=16;for(var f=0;f<b;f+=16){var l=d+f;e[f]=g[l];e[f+1]=g[l+1];e[f+2]=g[l+2];e[f+3]=g[l+3];e[f+4]=g[l+4];e[f+5]=g[l+5];e[f+6]=g[l+6];e[f+7]=g[l+7];e[f+8]=g[l+8];e[f+9]=g[l+9];e[f+10]=g[l+10];e[f+11]=g[l+11];e[f+12]=g[l+12];e[f+13]=g[l+13];e[f+
14]=g[l+14];e[f+15]=g[l+15]}}else e=x.subarray(d>>2,d+64*b>>2);N.uniformMatrix4fv(W(a),!!c,e)}},i:a=>{a=O[a];N.useProgram(a);N.Ad=a},Pb:(a,b)=>{N.vertexAttribDivisor(a,b)},Qb:(a,b,c,d,e,g)=>{N.vertexAttribPointer(a,b,c,!!d,e,g)},l:(a,b,c,d)=>N.viewport(a,b,c,d),ib:Ma,bb:function(){h.rd=a=>{0!=oc()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",h.rd)},Xa:function(){h.wd=a=>{const b=a.clipboardData.getData("text");ic(()=>{const c=fc(b);pc(c)})};window.addEventListener("paste",
h.wd)},Na:function(){h.ce=[];h.sd=b=>{b.stopPropagation();b.preventDefault()};h.td=b=>{b.stopPropagation();b.preventDefault()};h.ud=b=>{b.stopPropagation();b.preventDefault()};h.vd=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;h.de=c;qc(c.length);for(let e=0;e<c.length;e++)ic(()=>{const g=fc(c[e].name);rc(e,g)});let d=0;b.shiftKey&&(d|=1);b.ctrlKey&&(d|=2);b.altKey&&(d|=4);b.metaKey&&(d|=8);sc(b.clientX,b.clientY,d)};const a=h.Kc;a.addEventListener("dragenter",h.sd,!1);a.addEventListener("dragleave",
h.td,!1);a.addEventListener("dragover",h.ud,!1);a.addEventListener("drop",h.vd,!1)},Sb:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},fc:function(a){a=a?B(t,a):"";void 0!==h.canvas&&("object"===typeof h.canvas?kb[a]=h.canvas:console.warn("sokol_app.h: Module['canvas'] is set but is not an object"));h.Kc=J(a);h.Kc||console.warn("sokol_app.h: can't find html5_canvas_selector ",a);h.Kc.requestPointerLock||console.warn("sokol_app.h: target doesn't support requestPointerLock: ",
a)},Ya:function(){window.removeEventListener("beforeunload",h.rd)},Ra:function(){window.removeEventListener("paste",h.wd)},Ia:function(){const a=h.Kc;a.removeEventListener("dragenter",h.sd);a.removeEventListener("dragleave",h.td);a.removeEventListener("dragover",h.ud);a.removeEventListener("drop",h.vd)},z:function(){h.Kc&&h.Kc.requestPointerLock&&h.Kc.requestPointerLock()},Ub:function(a,b){if(h.Kc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;
case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";break;case 10:a="not-allowed";break;default:a="auto"}h.Kc.style.cursor=a}},Jb:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),g=e.createImageData(a,b);g.data.set(t.subarray(c,c+a*b*4));e.putImageData(g,0,0);a=document.createElement("link");a.id="sokol-app-favicon";
a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},Oa:function(a){a=a?B(t,a):"";const b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},db:function(){const a=
(new URLSearchParams(window.location.search)).entries();for(let b=a.next();!b.done;b=a.next()){const c=b.value[0],d=b.value[1];ic(()=>{const e=fc(c),g=fc(d);tc(e,g)})}},fb:function(){return h.Lc?h.Lc.bufferSize:0},pb:function(a,b,c){h.Ec=null;h.Lc=null;"undefined"!==typeof AudioContext?h.Ec=new AudioContext({sampleRate:a,latencyHint:"interactive"}):(h.Ec=null,console.log("sokol_audio.h: no WebAudio support"));return h.Ec?(console.log("sokol_audio.h: sample rate ",h.Ec.sampleRate),h.Lc=h.Ec.createScriptProcessor(c,
0,b),h.Lc.onaudioprocess=d=>{const e=d.outputBuffer.length,g=uc(e);if(g){const f=d.outputBuffer.numberOfChannels;for(let l=0;l<f;l++){const m=d.outputBuffer.getChannelData(l);for(let p=0;p<e;p++)m[p]=x[(g>>2)+(f*p+l)]}}},h.Lc.connect(h.Ec.destination),a=()=>{h.Ec&&"suspended"===h.Ec.state&&h.Ec.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchend",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},gb:function(){return h.Ec?h.Ec.sampleRate:0},
ja:function(){const a=h.Ec;null!==a&&(h.Lc&&h.Lc.disconnect(),a.close(),h.Ec=null,h.Lc=null)},eb:function(){if(h.Ec)return"suspended"===h.Ec.state?1:0},w:function(a,b,c,d,e,g){b=b?B(t,b):"";const f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";const l=0<d;l&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(f.readyState==XMLHttpRequest.DONE)if(206==f.status||200==f.status&&!l){const m=new Uint8Array(f.response),p=m.length;p<=g?(t.set(m,e),vc(a,
d,p)):wc(a)}else xc(a,f.status)};f.send()},ia:function(a,b){b=b?B(t,b):"";const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==c.status){const d=c.getResponseHeader("Content-Length");yc(a,d)}else xc(a,c.status)};c.send()},ya:function(){return navigator.userAgent.includes("Macintosh")?1:0},ha:function(a,b){b=b?B(t,b):"";switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}},
Z=function(){function a(c){Z=c.exports;oa=Z.hc;sa();nb=Z.zc;ua.unshift(Z.ic);z--;h.monitorRunDependencies?.(z);0==z&&(null!==ya&&(clearInterval(ya),ya=null),A&&(c=A,A=null,c()));return Z}z++;h.monitorRunDependencies?.(z);var b={a:zc};if(h.instantiateWasm)try{return h.instantiateWasm(b,a)}catch(c){return n(`Module.instantiateWasm callback failed with error: ${c}`),!1}Ba??=Aa("pacman-ui.wasm")?"pacman-ui.wasm":h.locateFile?h.locateFile("pacman-ui.wasm",k):k+"pacman-ui.wasm";Fa(b,function(c){a(c.instance)});
return{}}(),M=a=>(M=Z.jc)(a),mc=h._fs_emsc_alloc=a=>(mc=h._fs_emsc_alloc=Z.kc)(a),nc=h._fs_emsc_load_snapshot_callback=(a,b,c)=>(nc=h._fs_emsc_load_snapshot_callback=Z.lc)(a,b,c),pc=h.__sapp_emsc_onpaste=a=>(pc=h.__sapp_emsc_onpaste=Z.mc)(a),oc=h.__sapp_html5_get_ask_leave_site=()=>(oc=h.__sapp_html5_get_ask_leave_site=Z.nc)(),qc=h.__sapp_emsc_begin_drop=a=>(qc=h.__sapp_emsc_begin_drop=Z.oc)(a),rc=h.__sapp_emsc_drop=(a,b)=>(rc=h.__sapp_emsc_drop=Z.pc)(a,b),sc=h.__sapp_emsc_end_drop=(a,b,c)=>(sc=h.__sapp_emsc_end_drop=
Z.qc)(a,b,c);h.__sapp_emsc_invoke_fetch_cb=(a,b,c,d,e,g,f,l)=>(h.__sapp_emsc_invoke_fetch_cb=Z.rc)(a,b,c,d,e,g,f,l);
var Ac=h._main=(a,b)=>(Ac=h._main=Z.sc)(a,b),uc=h.__saudio_emsc_pull=a=>(uc=h.__saudio_emsc_pull=Z.tc)(a),tc=h.__sargs_add_kvp=(a,b)=>(tc=h.__sargs_add_kvp=Z.uc)(a,b),yc=h.__sfetch_emsc_head_response=(a,b)=>(yc=h.__sfetch_emsc_head_response=Z.vc)(a,b),vc=h.__sfetch_emsc_get_response=(a,b,c)=>(vc=h.__sfetch_emsc_get_response=Z.wc)(a,b,c),xc=h.__sfetch_emsc_failed_http_status=(a,b)=>(xc=h.__sfetch_emsc_failed_http_status=Z.xc)(a,b),wc=h.__sfetch_emsc_failed_buffer_too_small=a=>(wc=h.__sfetch_emsc_failed_buffer_too_small=
Z.yc)(a),lc=(a,b)=>(lc=Z.Ac)(a,b),hc=a=>(hc=Z.Bc)(a),ec=a=>(ec=Z.Cc)(a),gc=()=>(gc=Z.Dc)(),Bc;A=function Cc(){Bc||Dc();Bc||(A=Cc)};function Ec(a=[]){var b=Ac;a.unshift(fa);var c=a.length,d=ec(4*(c+1)),e=d;a.forEach(f=>{w[e>>2]=fc(f);e+=4});w[e>>2]=0;try{var g=b(c,d);Na(g)}catch(f){La(f)}}
function Dc(){var a=ea;function b(){if(!Bc&&(Bc=!0,h.calledRun=!0,!q)){Ha(ua);Ha(va);h.onRuntimeInitialized?.();Fc&&Ec(a);if(h.postRun)for("function"==typeof h.postRun&&(h.postRun=[h.postRun]);h.postRun.length;){var c=h.postRun.shift();wa.unshift(c)}Ha(wa)}}if(!(0<z)){if(h.preRun)for("function"==typeof h.preRun&&(h.preRun=[h.preRun]);h.preRun.length;)xa();Ha(ta);0<z||(h.setStatus?(h.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>h.setStatus(""),1);b()},1)):b())}}
if(h.preInit)for("function"==typeof h.preInit&&(h.preInit=[h.preInit]);0<h.preInit.length;)h.preInit.pop()();var Fc=!0;h.noInitialRun&&(Fc=!1);Dc();
