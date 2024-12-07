var g;g||=typeof Module != 'undefined' ? Module : {};var aa="object"==typeof window,ba="undefined"!=typeof WorkerGlobalScope,ca="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node&&"renderer"!=process.type,da=Object.assign({},g),ea=[],fa="./this.program",ha=(a,b)=>{throw b;},h="",ia,ja;
if(ca){var fs=require("fs"),ka=require("path");h=__dirname+"/";ja=a=>{a=la(a)?new URL(a):ka.normalize(a);return fs.readFileSync(a)};ia=a=>{a=la(a)?new URL(a):ka.normalize(a);return new Promise((b,c)=>{fs.readFile(a,void 0,(d,e)=>{d?c(d):b(e.buffer)})})};!g.thisProgram&&1<process.argv.length&&(fa=process.argv[1].replace(/\\/g,"/"));ea=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=g);ha=(a,b)=>{process.exitCode=a;throw b;}}else if(aa||ba)ba?h=self.location.href:"undefined"!=typeof document&&
document.currentScript&&(h=document.currentScript.src),h=h.startsWith("blob:")?"":h.substr(0,h.replace(/[?#].*/,"").lastIndexOf("/")+1),ba&&(ja=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ia=a=>la(a)?new Promise((b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c(d.status)};d.onerror=c;d.send(null)}):fetch(a,{credentials:"same-origin"}).then(b=>
b.ok?b.arrayBuffer():Promise.reject(Error(b.status+" : "+b.url)));g.print||console.log.bind(console);var m=g.printErr||console.error.bind(console);Object.assign(g,da);da=null;g.arguments&&(ea=g.arguments);g.thisProgram&&(fa=g.thisProgram);var ma=g.wasmBinary,na,q=!1,oa,r,t,pa,qa,u,v,w,x;
function ra(){var a=na.buffer;g.HEAP8=r=new Int8Array(a);g.HEAP16=pa=new Int16Array(a);g.HEAPU8=t=new Uint8Array(a);g.HEAPU16=qa=new Uint16Array(a);g.HEAP32=u=new Int32Array(a);g.HEAPU32=v=new Uint32Array(a);g.HEAPF32=w=new Float32Array(a);g.HEAPF64=x=new Float64Array(a)}var sa=[],ta=[],ua=[],va=[];function wa(){var a=g.preRun.shift();sa.unshift(a)}var z=0,xa=null,A=null;
function ya(a){g.onAbort?.(a);a="Aborted("+a+")";m(a);q=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}var za=a=>a.startsWith("data:application/octet-stream;base64,"),la=a=>a.startsWith("file://"),Aa;function Ba(a){if(a==Aa&&ma)return new Uint8Array(ma);if(ja)return ja(a);throw"both async and sync fetching of the wasm failed";}function Ca(a){return ma?Promise.resolve().then(()=>Ba(a)):ia(a).then(b=>new Uint8Array(b),()=>Ba(a))}
function Da(a,b,c){return Ca(a).then(d=>WebAssembly.instantiate(d,b)).then(c,d=>{m(`failed to asynchronously prepare wasm: ${d}`);ya(d)})}function Ea(a,b){var c=Aa;ma||"function"!=typeof WebAssembly.instantiateStreaming||za(c)||la(c)||ca||"function"!=typeof fetch?Da(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){m(`wasm streaming compile failed: ${e}`);m("falling back to ArrayBuffer instantiation");return Da(c,a,b)}))}
class Fa{name="ExitStatus";constructor(a){this.message=`Program terminated with exit(${a})`;this.status=a}}
var Ga=a=>{for(;0<a.length;)a.shift()(g)},Ha=g.noExitRuntime||!0,Ia=0,B={},Ja=a=>{a instanceof Fa||"unwind"==a||ha(1,a)},Ka=a=>{oa=a;Ha||0<Ia||(g.onExit?.(a),q=!0);ha(a,new Fa(a))},La=a=>{oa=a;Ka(a)},Ma=()=>{if(!(Ha||0<Ia))try{var a=oa;oa=a;Ka(a)}catch(b){Ja(b)}},Na=a=>{if(!q)try{a(),Ma()}catch(b){Ja(b)}},Ua=(a,b)=>{Oa=a;Pa=b;if(C)if(Qa||=!0,0==a)D=function(){setTimeout(F,Math.max(0,Ra+b-performance.now())|0)};else if(1==a)D=function(){Sa(F)};else if(2==a){if("undefined"==typeof Ta)if("undefined"==
typeof setImmediate){var c=[];addEventListener("message",d=>{if("setimmediate"===d.data||"setimmediate"===d.data.target)d.stopPropagation(),c.shift()()},!0);Ta=d=>{c.push(d);if(ba){let e;(e=g).setImmediates??(e.setImmediates=[]);g.setImmediates.push(d);postMessage({target:"setimmediate"})}else postMessage("setimmediate","*")}}else Ta=setImmediate;D=function(){Ta(F)}}},cb=(a,b,c,d,e)=>{function k(){return f<Va?(Ma(),!1):!0}C=a;Wa=d;var f=Va;Qa=!1;F=function(){if(!q)if(0<Xa.length){var l=Xa.shift();
l.Gd(l.xd);if(Ya){var n=Ya,p=0==n%1?n-1:Math.floor(n);Ya=l.zd?p:(8*n+(p+.5))/9}g.setStatus&&(l=g.statusMessage||"Please wait...",n=Ya??0,p=Za.Ed??0,n?n<p?g.setStatus("{message} ({expected - remaining}/{expected})"):g.setStatus(l):g.setStatus(""));k()&&setTimeout(F,0)}else if(k())if($a=$a+1|0,1==Oa&&1<Pa&&0!=$a%Pa)D();else{0==Oa&&(Ra=performance.now());a:if(!q){for(l of ab)if(!1===l())break a;Na(a);for(n of bb)n()}k()&&D()}};e||(b&&0<b?Ua(0,1E3/b):Ua(1,1),D());if(c)throw"unwind";},Qa=!1,D=null,Va=
0,C=null,Wa=0,Oa=0,Pa=0,$a=0,Xa=[],ab=[],bb=[];function db(){D=null;Va++}var eb=0;function Sa(a){if("function"==typeof requestAnimationFrame)requestAnimationFrame(a);else{var b=Date.now();if(0===eb)eb=b+1E3/60;else for(;b+2>=eb;)eb+=1E3/60;setTimeout(a,Math.max(eb-b,0))}}var Za={},Ra,F,Ta,Ya;function fb(a){var b=G.uc[a];b.target.removeEventListener(b.tc,b.Xc,b.vc);G.uc.splice(a,1)}
function gb(){if(navigator.userActivation?navigator.userActivation.isActive:G.Lc&&G.od.Jc){var a=G.Ac;G.Ac=[];for(var b of a)b.Oc(...b.Tc)}}function H(a){if(!a.target)return-4;if(a.wc)a.Xc=function(c){++G.Lc;G.od=a;gb();a.xc(c);gb();--G.Lc},a.target.addEventListener(a.tc,a.Xc,a.vc),G.uc.push(a);else for(var b=0;b<G.uc.length;++b)G.uc[b].target==a.target&&G.uc[b].tc==a.tc&&fb(b--);return 0}function hb(a){return a?a==window?"#window":a==screen?"#screen":a?.nodeName||"":""}
var G={yd:0,Hd:0,Mc:0,Hc:0,Sc:0,Qc:0,Kc:0,Cd:0,Ld:0,Bd:0,Fd:0,Nc:0,Td:0,Pc:0,Jd(a,b,c){r.set(r.subarray(b,b+c),a)},Nd(){for(;G.uc.length;)fb(G.uc.length-1);G.Ac=[]},Lc:0,Ac:[],Ad(a,b,c){function d(k,f){if(k.length!=f.length)return!1;for(var l in k)if(k[l]!=f[l])return!1;return!0}for(var e of G.Ac)if(e.Oc==a&&d(e.Tc,c))return;G.Ac.push({Oc:a,ad:b,Tc:c});G.Ac.sort((k,f)=>k.ad<f.ad)},Pd(a){G.Ac=G.Ac.filter(b=>b.Oc!=a)},uc:[],Od:(a,b)=>{for(var c=0;c<G.uc.length;++c)G.uc[c].target!=a||b&&b!=G.uc[c].tc||
fb(c--)},fullscreenEnabled(){return document.fullscreenEnabled||document.webkitFullscreenEnabled}},ib="undefined"!=typeof TextDecoder?new TextDecoder:void 0,I=(a=0,b=NaN)=>{var c=t,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&ib)return ib.decode(c.subarray(a,b));for(d="";a<b;){var e=c[a++];if(e&128){var k=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var f=c[a++]&63;e=224==(e&240)?(e&15)<<12|k<<6|f:(e&7)<<18|k<<12|f<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=
65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d},jb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0],J=a=>{a=2<a?a?I(a):"":a;return jb[a]||("undefined"!=typeof document?document.querySelector(a):null)},kb=a=>0>jb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0},lb=[],mb,K=a=>{var b=lb[a];b||(a>=lb.length&&(lb.length=a+1),lb[a]=b=mb.get(a));return b},L=(a,b,c)=>{var d=t;if(!(0<c))return 0;var e=b;c=b+c-1;for(var k=0;k<
a.length;++k){var f=a.charCodeAt(k);if(55296<=f&&57343>=f){var l=a.charCodeAt(++k);f=65536+((f&1023)<<10)|l&1023}if(127>=f){if(b>=c)break;d[b++]=f}else{if(2047>=f){if(b+1>=c)break;d[b++]=192|f>>6}else{if(65535>=f){if(b+2>=c)break;d[b++]=224|f>>12}else{if(b+3>=c)break;d[b++]=240|f>>18;d[b++]=128|f>>12&63}d[b++]=128|f>>6&63}d[b++]=128|f&63}}d[b]=0;return b-e},nb=(a,b,c,d,e,k)=>{G.Kc||(G.Kc=M(256));a={target:J(a),tc:k,wc:d,xc:(f=event)=>{var l=f.target.id?f.target.id:"",n=G.Kc;L(hb(f.target),n+0,128);
L(l,n+128,128);K(d)(e,n,b)&&f.preventDefault()},vc:c};return H(a)},ob=(a,b,c,d,e,k)=>{G.Mc||(G.Mc=M(160));a={target:J(a),tc:k,wc:d,xc:f=>{var l=G.Mc;x[l>>3]=f.timeStamp;var n=l>>2;u[n+2]=f.location;r[l+12]=f.ctrlKey;r[l+13]=f.shiftKey;r[l+14]=f.altKey;r[l+15]=f.metaKey;r[l+16]=f.repeat;u[n+5]=f.charCode;u[n+6]=f.keyCode;u[n+7]=f.which;L(f.key||"",l+32,32);L(f.code||"",l+64,32);L(f.char||"",l+96,32);L(f.locale||"",l+128,32);K(d)(e,l,b)&&f.preventDefault()},vc:c};return H(a)},pb=(a,b,c)=>{x[a>>3]=b.timeStamp;
var d=a>>2;u[d+2]=b.screenX;u[d+3]=b.screenY;u[d+4]=b.clientX;u[d+5]=b.clientY;r[a+24]=b.ctrlKey;r[a+25]=b.shiftKey;r[a+26]=b.altKey;r[a+27]=b.metaKey;pa[2*d+14]=b.button;pa[2*d+15]=b.buttons;u[d+8]=b.movementX;u[d+9]=b.movementY;a=kb(c);u[d+10]=b.clientX-(a.left|0);u[d+11]=b.clientY-(a.top|0)},qb=(a,b,c,d,e,k)=>{G.Hc||(G.Hc=M(64));a=J(a);return H({target:a,Jc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,tc:k,wc:d,xc:(f=event)=>{pb(G.Hc,f,a);K(d)(e,G.Hc,b)&&f.preventDefault()},vc:c})},rb=(a,b,
c,d,e)=>{G.Nc||(G.Nc=M(257));return H({target:a,tc:e,wc:d,xc:(k=event)=>{var f=G.Nc,l=document.pointerLockElement||document.Cc||document.ld||document.kd;r[f]=!!l;var n=l?.id||"";L(hb(l),f+1,128);L(n,f+129,128);K(d)(20,f,b)&&k.preventDefault()},vc:c})},sb=(a,b,c,d,e)=>H({target:a,tc:e,wc:d,xc:(k=event)=>{K(d)(38,0,b)&&k.preventDefault()},vc:c}),tb=(a,b,c,d)=>{G.Qc||(G.Qc=M(36));a=J(a);return H({target:a,tc:"resize",wc:d,xc:(e=event)=>{if(e.target==a){var k=document.body;if(k){var f=G.Qc;u[f>>2]=0;
u[f+4>>2]=k.clientWidth;u[f+8>>2]=k.clientHeight;u[f+12>>2]=innerWidth;u[f+16>>2]=innerHeight;u[f+20>>2]=outerWidth;u[f+24>>2]=outerHeight;u[f+28>>2]=pageXOffset|0;u[f+32>>2]=pageYOffset|0;K(d)(10,f,b)&&e.preventDefault()}}},vc:c})},ub=(a,b,c,d,e,k)=>{G.Pc||(G.Pc=M(1552));a=J(a);return H({target:a,Jc:"touchstart"==k||"touchend"==k,tc:k,wc:d,xc:f=>{var l={},n=f.touches;for(var p of n)p.Yc=p.$c=0,l[p.identifier]=p;for(var y of f.changedTouches)y.Yc=1,l[y.identifier]=y;for(var P of f.targetTouches)l[P.identifier].$c=
1;n=G.Pc;x[n>>3]=f.timeStamp;r[n+12]=f.ctrlKey;r[n+13]=f.shiftKey;r[n+14]=f.altKey;r[n+15]=f.metaKey;p=n+16;y=kb(a);P=0;for(let E of Object.values(l))if(l=p>>2,u[l]=E.identifier,u[l+1]=E.screenX,u[l+2]=E.screenY,u[l+3]=E.clientX,u[l+4]=E.clientY,u[l+5]=E.pageX,u[l+6]=E.pageY,r[p+28]=E.Yc,r[p+29]=E.$c,u[l+8]=E.clientX-(y.left|0),u[l+9]=E.clientY-(y.top|0),p+=48,31<++P)break;u[n+8>>2]=P;K(d)(e,n,b)&&f.preventDefault()},vc:c})},N,vb=a=>{var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=
(c,d)=>b.vertexAttribDivisorANGLE(c,d),a.drawArraysInstanced=(c,d,e,k)=>b.drawArraysInstancedANGLE(c,d,e,k),a.drawElementsInstanced=(c,d,e,k,f)=>b.drawElementsInstancedANGLE(c,d,e,k,f))},wb=a=>{var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=()=>b.createVertexArrayOES(),a.deleteVertexArray=c=>b.deleteVertexArrayOES(c),a.bindVertexArray=c=>b.bindVertexArrayOES(c),a.isVertexArray=c=>b.isVertexArrayOES(c))},xb=a=>{var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=(c,
d)=>b.drawBuffersWEBGL(c,d))},yb=a=>{a.Dd=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")},zb=a=>{a.Id=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")},Ab=a=>{var b="ANGLE_instanced_arrays EXT_blend_minmax EXT_disjoint_timer_query EXT_frag_depth EXT_shader_texture_lod EXT_sRGB OES_element_index_uint OES_fbo_render_mipmap OES_standard_derivatives OES_texture_float OES_texture_half_float OES_texture_half_float_linear OES_vertex_array_object WEBGL_color_buffer_float WEBGL_depth_texture WEBGL_draw_buffers EXT_color_buffer_float EXT_conservative_depth EXT_disjoint_timer_query_webgl2 EXT_texture_norm16 NV_shader_noperspective_interpolation WEBGL_clip_cull_distance EXT_clip_control EXT_color_buffer_half_float EXT_depth_clamp EXT_float_blend EXT_polygon_offset_clamp EXT_texture_compression_bptc EXT_texture_compression_rgtc EXT_texture_filter_anisotropic KHR_parallel_shader_compile OES_texture_float_linear WEBGL_blend_func_extended WEBGL_compressed_texture_astc WEBGL_compressed_texture_etc WEBGL_compressed_texture_etc1 WEBGL_compressed_texture_s3tc WEBGL_compressed_texture_s3tc_srgb WEBGL_debug_renderer_info WEBGL_debug_shaders WEBGL_lose_context WEBGL_multi_draw WEBGL_polygon_mode".split(" ");
return(a.getSupportedExtensions()||[]).filter(c=>b.includes(c))},Bb=1,Cb=[],O=[],Db=[],Eb=[],Q=[],R=[],Fb=[],Gb=[],S=[],Hb={},Ib=4,Jb=0,Kb=a=>{for(var b=Bb++,c=a.length;c<b;c++)a[c]=null;return b},U=(a,b,c,d)=>{for(var e=0;e<a;e++){var k=N[c](),f=k&&Kb(d);k?(k.name=f,d[f]=k):T||=1282;u[b+4*e>>2]=f}},Mb=(a,b)=>{a.Cc||(a.Cc=a.getContext,a.getContext=function(d,e){e=a.Cc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Zc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?
Lb(c,b):0},Lb=(a,b)=>{var c=Kb(Gb),d={handle:c,attributes:b,version:b.Zc,Ic:a};a.canvas&&(a.canvas.wd=d);Gb[c]=d;("undefined"==typeof b.Wc||b.Wc)&&Nb(d);return c},Nb=a=>{a||=V;if(!a.td){a.td=!0;var b=a.Ic;b.ud=b.getExtension("WEBGL_multi_draw");b.sd=b.getExtension("EXT_polygon_offset_clamp");b.rd=b.getExtension("EXT_clip_control");b.vd=b.getExtension("WEBGL_polygon_mode");vb(b);wb(b);xb(b);yb(b);zb(b);2<=a.version&&(b.Vc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Vc)b.Vc=
b.getExtension("EXT_disjoint_timer_query");Ab(b).forEach(c=>{c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}},T,V,Ob=(a,b,c,d,e,k)=>{a={target:J(a),tc:k,wc:d,xc:(f=event)=>{K(d)(e,0,b)&&f.preventDefault()},vc:c};H(a)},Pb=(a,b,c,d)=>{G.Sc||(G.Sc=M(96));return H({target:a,Jc:!0,tc:"wheel",wc:d,xc:(e=event)=>{var k=G.Sc;pb(k,e,a);x[k+64>>3]=e.deltaX;x[k+72>>3]=e.deltaY;x[k+80>>3]=e.deltaZ;u[k+88>>2]=e.deltaMode;K(d)(9,k,b)&&e.preventDefault()},vc:c})},Qb=["default","low-power",
"high-performance"],Rb=[],Sb=()=>{var a=Ab(N);return a=a.concat(a.map(b=>"GL_"+b))},Tb=(a,b)=>{if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=N.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){T||=1282;return}c=Sb().length;break;case 33307:case 33308:if(2>V.version){T||=1280;return}c=33307==a?3:0}if(void 0===c)switch(d=N.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":T||=
1280;return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=0;break;default:T||=1280;return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)u[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){T||=1280;m(`GL_INVALID_ENUM in glGet${0}v: Unknown object returned from WebGL getParameter(${a})! (error: ${e})`);
return}}break;default:T||=1280;m(`GL_INVALID_ENUM in glGet${0}v: Native code calling glGet${0}v(${a}) and it returns ${d} of type ${typeof d}!`);return}u[b>>2]=c}else T||=1281},Ub=a=>{for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b},Vb=a=>{var b=Ub(a)+1,c=M(b);c&&L(a,c,b);return c},Wb=a=>"]"==a.slice(-1)&&a.lastIndexOf("["),Xb=a=>{a-=5120;return 0==a?r:1==a?t:2==a?pa:4==a?u:6==a?w:5==a||28922==a||28520==a||30779==a||30782==
a?v:qa},Yb=(a,b,c,d,e)=>{a=Xb(a);b=d*((Jb||c)*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*a.BYTES_PER_ELEMENT+Ib-1&-Ib);return a.subarray(e>>>31-Math.clz32(a.BYTES_PER_ELEMENT),e+b>>>31-Math.clz32(a.BYTES_PER_ELEMENT))},W=a=>{var b=N.pd;if(b){var c=b.Dc[a];"number"==typeof c&&(b.Dc[a]=c=N.getUniformLocation(b,b.md[a]+(0<c?`[${c}]`:"")));return c}T||=1282},X=[],Zb=[],ac=a=>{var b=Ub(a)+1,c=$b(b);L(a,c,b);return c},dc=a=>{var b=bc();a();cc(b)};
g.requestAnimationFrame=Sa;g.pauseMainLoop=db;g.resumeMainLoop=function(){Va++;var a=Oa,b=Pa,c=C;C=null;cb(c,0,!1,Wa,!0);Ua(a,b);D()};g.preMainLoop&&ab.push(g.preMainLoop);g.postMainLoop&&bb.push(g.postMainLoop);for(var Y=0;32>Y;++Y)Rb.push(Array(Y));var ec=new Float32Array(288);for(Y=0;288>=Y;++Y)X[Y]=ec.subarray(0,Y);var fc=new Int32Array(288);for(Y=0;288>=Y;++Y)Zb[Y]=fc.subarray(0,Y);
var tc={kb:()=>ya(""),jb:(a,b,c)=>t.copyWithin(a,b,b+c),gb:()=>{Ha=!1;Ia=0},hb:(a,b)=>{B[a]&&(clearTimeout(B[a].id),delete B[a]);if(!b)return 0;var c=setTimeout(()=>{delete B[a];Na(()=>gc(a,performance.now()))},b);B[a]={id:c,Sd:b};return 0},Ta:()=>{db();C=null},ca:()=>"number"==typeof devicePixelRatio&&devicePixelRatio||1,ea:(a,b,c)=>{a=J(a);if(!a)return-4;a=kb(a);x[b>>3]=a.width;x[c>>3]=a.height;return 0},x:()=>performance.now(),Ua:()=>performance.now(),$a:(a,b)=>{function c(d){K(a)(d,b)&&requestAnimationFrame(c)}
return requestAnimationFrame(c)},ib:a=>{var b=t.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);a:{d=(Math.min(2147483648,65536*Math.ceil(Math.max(a,d)/65536))-na.buffer.byteLength+65535)/65536|0;try{na.grow(d);ra();var e=1;break a}catch(k){}e=void 0}if(e)return!0}return!1},M:(a,b,c,d)=>nb(a,b,c,d,12,"blur"),ba:(a,b,c)=>{a=J(a);if(!a)return-4;a.width=b;a.height=c;return 0},N:(a,b,c,d)=>nb(a,b,c,d,13,"focus"),W:(a,b,c,d)=>ob(a,b,c,d,2,"keydown"),
U:(a,b,c,d)=>ob(a,b,c,d,1,"keypress"),V:(a,b,c,d)=>ob(a,b,c,d,3,"keyup"),ab:(a,b,c)=>{a=K(a);cb(a,b,c)},aa:(a,b,c,d)=>qb(a,b,c,d,5,"mousedown"),Z:(a,b,c,d)=>qb(a,b,c,d,33,"mouseenter"),Y:(a,b,c,d)=>qb(a,b,c,d,34,"mouseleave"),_:(a,b,c,d)=>qb(a,b,c,d,8,"mousemove"),$:(a,b,c,d)=>qb(a,b,c,d,6,"mouseup"),P:(a,b,c,d)=>{if(!document||!document.body||!(document.body.requestPointerLock||document.body.Cc||document.body.ld||document.body.kd))return-1;a=J(a);if(!a)return-4;rb(a,b,c,d,"mozpointerlockchange");
rb(a,b,c,d,"webkitpointerlockchange");rb(a,b,c,d,"mspointerlockchange");return rb(a,b,c,d,"pointerlockchange")},O:(a,b,c,d)=>{if(!document||!(document.body.requestPointerLock||document.body.Cc||document.body.ld||document.body.kd))return-1;a=J(a);if(!a)return-4;sb(a,b,c,d,"mozpointerlockerror");sb(a,b,c,d,"webkitpointerlockerror");sb(a,b,c,d,"mspointerlockerror");return sb(a,b,c,d,"pointerlockerror")},da:(a,b,c,d)=>tb(a,b,c,d),Q:(a,b,c,d)=>ub(a,b,c,d,25,"touchcancel"),R:(a,b,c,d)=>ub(a,b,c,d,23,"touchend"),
S:(a,b,c,d)=>ub(a,b,c,d,24,"touchmove"),T:(a,b,c,d)=>ub(a,b,c,d,22,"touchstart"),L:(a,b,c,d)=>{Ob(a,b,c,d,31,"webglcontextlost");return 0},K:(a,b,c,d)=>{Ob(a,b,c,d,32,"webglcontextrestored");return 0},X:(a,b,c,d)=>(a=J(a))?"undefined"!=typeof a.onwheel?Pb(a,b,c,d):-1:-4,_a:(a,b)=>{var c=b>>2;b={alpha:!!r[b+0],depth:!!r[b+1],stencil:!!r[b+2],antialias:!!r[b+3],premultipliedAlpha:!!r[b+4],preserveDrawingBuffer:!!r[b+5],powerPreference:Qb[u[c+2]],failIfMajorPerformanceCaveat:!!r[b+12],Zc:u[c+4],Kd:u[c+
5],Wc:r[b+24],qd:r[b+25],Md:u[c+7],Qd:r[b+32]};a=J(a);return!a||b.qd?0:Mb(a,b)},Xa:(a,b)=>{a=Gb[a];b=b?I(b):"";b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&vb(N);"OES_vertex_array_object"==b&&wb(N);"WEBGL_draw_buffers"==b&&xb(N);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&yb(N);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&zb(N);"WEBGL_multi_draw"==b&&(N.ud=N.getExtension("WEBGL_multi_draw"));"EXT_polygon_offset_clamp"==b&&(N.sd=N.getExtension("EXT_polygon_offset_clamp"));
"EXT_clip_control"==b&&(N.rd=N.getExtension("EXT_clip_control"));"WEBGL_polygon_mode"==b&&(N.vd=N.getExtension("WEBGL_polygon_mode"));return!!a.Ic.getExtension(b)},Za:a=>{V=Gb[a];g.ctx=N=V?.Ic;return!a||N?0:-5},n:a=>N.activeTexture(a),ta:(a,b)=>{N.attachShader(O[a],R[b])},b:(a,b)=>{35051==a?N.Uc=b:35052==a&&(N.zc=b);N.bindBuffer(a,Cb[b])},a:(a,b,c)=>{N.bindBufferBase(a,b,Cb[c])},i:(a,b)=>{N.bindFramebuffer(a,Db[b])},Fa:(a,b)=>{N.bindRenderbuffer(a,Eb[b])},m:(a,b)=>{N.bindSampler(a,S[b])},d:(a,b)=>
{N.bindTexture(a,Q[b])},J:a=>{N.bindVertexArray(Fb[a])},F:(a,b,c,d)=>N.blendColor(a,b,c,d),G:(a,b)=>N.blendEquationSeparate(a,b),H:(a,b,c,d)=>N.blendFuncSeparate(a,b,c,d),pb:(a,b,c,d,e,k,f,l,n,p)=>N.blitFramebuffer(a,b,c,d,e,k,f,l,n,p),Ha:(a,b,c,d)=>{2<=V.version?c&&b?N.bufferData(a,t,d,c,b):N.bufferData(a,b,d):N.bufferData(a,c?t.subarray(c,c+b):b,d)},z:(a,b,c,d)=>{2<=V.version?c&&N.bufferSubData(a,b,t,d,c):N.bufferSubData(a,b,t.subarray(d,d+c))},na:a=>N.checkFramebufferStatus(a),Jb:(a,b,c,d)=>N.clearBufferfi(a,
b,c,d),ka:(a,b,c)=>{N.clearBufferfv(a,b,w,c>>2)},Ib:(a,b,c)=>{N.clearBufferiv(a,b,u,c>>2)},o:(a,b,c,d)=>{N.colorMask(!!a,!!b,!!c,!!d)},Mb:a=>{N.compileShader(R[a])},za:(a,b,c,d,e,k,f,l)=>{2<=V.version?N.zc||!f?N.compressedTexImage2D(a,b,c,d,e,k,f,l):N.compressedTexImage2D(a,b,c,d,e,k,t,l,f):N.compressedTexImage2D(a,b,c,d,e,k,t.subarray(l,l+f))},xa:(a,b,c,d,e,k,f,l,n)=>{N.zc?N.compressedTexImage3D(a,b,c,d,e,k,f,l,n):N.compressedTexImage3D(a,b,c,d,e,k,f,t,n,l)},Tb:()=>{var a=Kb(O),b=N.createProgram();
b.name=a;b.Gc=b.Ec=b.Fc=0;b.Rc=1;O[a]=b;return a},Ob:a=>{var b=Kb(R);R[b]=N.createShader(a);return b},C:a=>N.cullFace(a),La:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=Cb[d];e&&(N.deleteBuffer(e),e.name=0,Cb[d]=null,d==N.Uc&&(N.Uc=0),d==N.zc&&(N.zc=0))}},f:(a,b)=>{for(var c=0;c<a;++c){var d=u[b+4*c>>2],e=Db[d];e&&(N.deleteFramebuffer(e),e.name=0,Db[d]=null)}},p:a=>{if(a){var b=O[a];b?(N.deleteProgram(b),b.name=0,O[a]=null):T||=1281}},A:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=Eb[d];e&&
(N.deleteRenderbuffer(e),e.name=0,Eb[d]=null)}},l:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=S[d];e&&(N.deleteSampler(e),e.name=0,S[d]=null)}},y:a=>{if(a){var b=R[a];b?(N.deleteShader(b),R[a]=null):T||=1281}},B:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=Q[d];e&&(N.deleteTexture(e),e.name=0,Q[d]=null)}},Ja:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2];N.deleteVertexArray(Fb[d]);Fb[d]=null}},u:a=>N.depthFunc(a),t:a=>{N.depthMask(!!a)},e:a=>N.disable(a),I:a=>{N.disableVertexAttribArray(a)},
rb:(a,b,c)=>{N.drawArrays(a,b,c)},sb:(a,b,c,d)=>{N.drawArraysInstanced(a,b,c,d)},ma:(a,b)=>{for(var c=Rb[a],d=0;d<a;d++)c[d]=u[b+4*d>>2];N.drawBuffers(c)},tb:(a,b,c,d)=>{N.drawElements(a,b,c,d)},ub:(a,b,c,d,e)=>{N.drawElementsInstanced(a,b,c,d,e)},h:a=>N.enable(a),Eb:a=>{N.enableVertexAttribArray(a)},oa:(a,b,c,d)=>{N.framebufferRenderbuffer(a,b,c,Eb[d])},k:(a,b,c,d,e)=>{N.framebufferTexture2D(a,b,c,Q[d],e)},w:(a,b,c,d,e)=>{N.framebufferTextureLayer(a,b,Q[c],d,e)},D:a=>N.frontFace(a),Ia:(a,b)=>{U(a,
b,"createBuffer",Cb)},pa:(a,b)=>{U(a,b,"createFramebuffer",Db)},Ga:(a,b)=>{U(a,b,"createRenderbuffer",Eb)},va:(a,b)=>{U(a,b,"createSampler",S)},Da:(a,b)=>{U(a,b,"createTexture",Q)},Sa:(a,b)=>{U(a,b,"createVertexArray",Fb)},Kb:(a,b)=>N.getAttribLocation(O[a],b?I(b):""),c:(a,b)=>Tb(a,b),Rb:(a,b,c,d)=>{a=N.getProgramInfoLog(O[a]);null===a&&(a="(unknown error)");b=0<b&&d?L(a,d,b):0;c&&(u[c>>2]=b)},sa:(a,b,c)=>{if(c)if(a>=Bb)T||=1281;else if(a=O[a],35716==b)a=N.getProgramInfoLog(a),null===a&&(a="(unknown error)"),
u[c>>2]=a.length+1;else if(35719==b){if(!a.Gc){var d=N.getProgramParameter(a,35718);for(b=0;b<d;++b)a.Gc=Math.max(a.Gc,N.getActiveUniform(a,b).name.length+1)}u[c>>2]=a.Gc}else if(35722==b){if(!a.Ec)for(d=N.getProgramParameter(a,35721),b=0;b<d;++b)a.Ec=Math.max(a.Ec,N.getActiveAttrib(a,b).name.length+1);u[c>>2]=a.Ec}else if(35381==b){if(!a.Fc)for(d=N.getProgramParameter(a,35382),b=0;b<d;++b)a.Fc=Math.max(a.Fc,N.getActiveUniformBlockName(a,b).length+1);u[c>>2]=a.Fc}else u[c>>2]=N.getProgramParameter(a,
b);else T||=1281},Lb:(a,b,c,d)=>{a=N.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?L(a,d,b):0;c&&(u[c>>2]=b)},qa:(a,b,c)=>{c?35716==b?(a=N.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),u[c>>2]=a?a.length+1:0):35720==b?(a=N.getShaderSource(R[a]),u[c>>2]=a?a.length+1:0):u[c>>2]=N.getShaderParameter(R[a],b):T||=1281},Qa:(a,b)=>{if(2>V.version)return T||=1282,0;var c=Hb[a];if(c)return 0>b||b>=c.length?(T||=1281,0):c[b];switch(a){case 7939:return c=Sb().map(Vb),c=Hb[a]=c,0>b||
b>=c.length?(T||=1281,0):c[b];default:return T||=1280,0}},ra:(a,b)=>{b=b?I(b):"";if(a=O[a]){var c=a,d=c.Dc,e=c.nd,k;if(!d){c.Dc=d={};c.md={};var f=N.getProgramParameter(c,35718);for(k=0;k<f;++k){var l=N.getActiveUniform(c,k);var n=l.name;l=l.size;var p=Wb(n);p=0<p?n.slice(0,p):n;var y=c.Rc;c.Rc+=l;e[p]=[l,y];for(n=0;n<l;++n)d[y]=n,c.md[y++]=p}}c=a.Dc;d=0;e=b;k=Wb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.nd[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||N.getUniformLocation(a,b)))return d}else T||=
1281;return-1},ob:(a,b,c)=>{for(var d=Rb[b],e=0;e<b;e++)d[e]=u[c+4*e>>2];N.invalidateFramebuffer(a,d)},Sb:a=>{a=O[a];N.linkProgram(a);a.Dc=0;a.nd={}},Ra:(a,b)=>{3317==a?Ib=b:3314==a&&(Jb=b);N.pixelStorei(a,b)},E:(a,b)=>N.polygonOffset(a,b),qb:a=>N.readBuffer(a),Ea:(a,b,c,d,e)=>N.renderbufferStorageMultisample(a,b,c,d,e),ua:(a,b,c)=>{N.samplerParameterf(S[a],b,c)},g:(a,b,c)=>{N.samplerParameteri(S[a],b,c)},la:(a,b,c,d)=>N.scissor(a,b,c,d),Nb:(a,b,c,d)=>{for(var e="",k=0;k<b;++k){var f=(f=v[c+4*k>>
2])?I(f,d?v[d+4*k>>2]:void 0):"";e+=f}N.shaderSource(R[a],e)},Oa:(a,b,c)=>N.stencilFunc(a,b,c),ja:(a,b,c,d)=>N.stencilFuncSeparate(a,b,c,d),s:a=>N.stencilMask(a),Na:(a,b,c)=>N.stencilOp(a,b,c),ia:(a,b,c,d)=>N.stencilOpSeparate(a,b,c,d),ya:(a,b,c,d,e,k,f,l,n)=>{if(2<=V.version){if(N.zc){N.texImage2D(a,b,c,d,e,k,f,l,n);return}if(n){var p=Xb(l);n>>>=31-Math.clz32(p.BYTES_PER_ELEMENT);N.texImage2D(a,b,c,d,e,k,f,l,p,n);return}}p=n?Yb(l,f,d,e,n):null;N.texImage2D(a,b,c,d,e,k,f,l,p)},wa:(a,b,c,d,e,k,f,l,
n,p)=>{if(N.zc)N.texImage3D(a,b,c,d,e,k,f,l,n,p);else if(p){var y=Xb(n);N.texImage3D(a,b,c,d,e,k,f,l,n,y,p>>>31-Math.clz32(y.BYTES_PER_ELEMENT))}else N.texImage3D(a,b,c,d,e,k,f,l,n,null)},Ca:(a,b,c)=>N.texParameteri(a,b,c),Ba:(a,b,c,d,e)=>N.texStorage2D(a,b,c,d,e),Aa:(a,b,c,d,e,k)=>N.texStorage3D(a,b,c,d,e,k),nb:(a,b,c,d,e,k,f,l,n)=>{if(2<=V.version){if(N.zc){N.texSubImage2D(a,b,c,d,e,k,f,l,n);return}if(n){var p=Xb(l);N.texSubImage2D(a,b,c,d,e,k,f,l,p,n>>>31-Math.clz32(p.BYTES_PER_ELEMENT));return}}n=
n?Yb(l,f,e,k,n):null;N.texSubImage2D(a,b,c,d,e,k,f,l,n)},lb:(a,b,c,d,e,k,f,l,n,p,y)=>{if(N.zc)N.texSubImage3D(a,b,c,d,e,k,f,l,n,p,y);else if(y){var P=Xb(p);N.texSubImage3D(a,b,c,d,e,k,f,l,n,p,P,y>>>31-Math.clz32(P.BYTES_PER_ELEMENT))}else N.texSubImage3D(a,b,c,d,e,k,f,l,n,p,null)},Db:(a,b,c)=>{if(2<=V.version)b&&N.uniform1fv(W(a),w,c>>2,b);else{if(288>=b)for(var d=X[b],e=0;e<b;++e)d[e]=w[c+4*e>>2];else d=w.subarray(c>>2,c+4*b>>2);N.uniform1fv(W(a),d)}},Qb:(a,b)=>{N.uniform1i(W(a),b)},zb:(a,b,c)=>
{if(2<=V.version)b&&N.uniform1iv(W(a),u,c>>2,b);else{if(288>=b)for(var d=Zb[b],e=0;e<b;++e)d[e]=u[c+4*e>>2];else d=u.subarray(c>>2,c+4*b>>2);N.uniform1iv(W(a),d)}},Cb:(a,b,c)=>{if(2<=V.version)b&&N.uniform2fv(W(a),w,c>>2,2*b);else{if(144>=b){b*=2;for(var d=X[b],e=0;e<b;e+=2)d[e]=w[c+4*e>>2],d[e+1]=w[c+(4*e+4)>>2]}else d=w.subarray(c>>2,c+8*b>>2);N.uniform2fv(W(a),d)}},yb:(a,b,c)=>{if(2<=V.version)b&&N.uniform2iv(W(a),u,c>>2,2*b);else{if(144>=b){b*=2;for(var d=Zb[b],e=0;e<b;e+=2)d[e]=u[c+4*e>>2],d[e+
1]=u[c+(4*e+4)>>2]}else d=u.subarray(c>>2,c+8*b>>2);N.uniform2iv(W(a),d)}},Bb:(a,b,c)=>{if(2<=V.version)b&&N.uniform3fv(W(a),w,c>>2,3*b);else{if(96>=b){b*=3;for(var d=X[b],e=0;e<b;e+=3)d[e]=w[c+4*e>>2],d[e+1]=w[c+(4*e+4)>>2],d[e+2]=w[c+(4*e+8)>>2]}else d=w.subarray(c>>2,c+12*b>>2);N.uniform3fv(W(a),d)}},xb:(a,b,c)=>{if(2<=V.version)b&&N.uniform3iv(W(a),u,c>>2,3*b);else{if(96>=b){b*=3;for(var d=Zb[b],e=0;e<b;e+=3)d[e]=u[c+4*e>>2],d[e+1]=u[c+(4*e+4)>>2],d[e+2]=u[c+(4*e+8)>>2]}else d=u.subarray(c>>2,
c+12*b>>2);N.uniform3iv(W(a),d)}},Ab:(a,b,c)=>{if(2<=V.version)b&&N.uniform4fv(W(a),w,c>>2,4*b);else{if(72>=b){var d=X[4*b],e=w;c>>=2;b*=4;for(var k=0;k<b;k+=4){var f=c+k;d[k]=e[f];d[k+1]=e[f+1];d[k+2]=e[f+2];d[k+3]=e[f+3]}}else d=w.subarray(c>>2,c+16*b>>2);N.uniform4fv(W(a),d)}},wb:(a,b,c)=>{if(2<=V.version)b&&N.uniform4iv(W(a),u,c>>2,4*b);else{if(72>=b){b*=4;for(var d=Zb[b],e=0;e<b;e+=4)d[e]=u[c+4*e>>2],d[e+1]=u[c+(4*e+4)>>2],d[e+2]=u[c+(4*e+8)>>2],d[e+3]=u[c+(4*e+12)>>2]}else d=u.subarray(c>>2,
c+16*b>>2);N.uniform4iv(W(a),d)}},vb:(a,b,c,d)=>{if(2<=V.version)b&&N.uniformMatrix4fv(W(a),!!c,w,d>>2,16*b);else{if(18>=b){var e=X[16*b],k=w;d>>=2;b*=16;for(var f=0;f<b;f+=16){var l=d+f;e[f]=k[l];e[f+1]=k[l+1];e[f+2]=k[l+2];e[f+3]=k[l+3];e[f+4]=k[l+4];e[f+5]=k[l+5];e[f+6]=k[l+6];e[f+7]=k[l+7];e[f+8]=k[l+8];e[f+9]=k[l+9];e[f+10]=k[l+10];e[f+11]=k[l+11];e[f+12]=k[l+12];e[f+13]=k[l+13];e[f+14]=k[l+14];e[f+15]=k[l+15]}}else e=w.subarray(d>>2,d+64*b>>2);N.uniformMatrix4fv(W(a),!!c,e)}},j:a=>{a=O[a];N.useProgram(a);
N.pd=a},Fb:(a,b)=>{N.vertexAttribDivisor(a,b)},Gb:(a,b,c,d,e,k)=>{N.vertexAttribPointer(a,b,c,!!d,e,k)},q:(a,b,c,d)=>N.viewport(a,b,c,d),fb:Ka,Wb:function(){g.bd=a=>{0!=hc()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",g.bd)},bb:function(){g.jd=a=>{const b=a.clipboardData.getData("text");dc(()=>{const c=ac(b);ic(c)})};window.addEventListener("paste",g.jd)},Wa:function(){g.Rd=[];g.cd=b=>{b.stopPropagation();b.preventDefault()};g.dd=b=>{b.stopPropagation();b.preventDefault()};
g.ed=b=>{b.stopPropagation();b.preventDefault()};g.gd=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;g.hd=c;jc(c.length);for(let e=0;e<c.length;e++)dc(()=>{const k=ac(c[e].name);kc(e,k)});let d=0;b.shiftKey&&(d|=1);b.ctrlKey&&(d|=2);b.altKey&&(d|=4);b.metaKey&&(d|=8);lc(b.clientX,b.clientY,d)};const a=g.Bc;a.addEventListener("dragenter",g.cd,!1);a.addEventListener("dragleave",g.dd,!1);a.addEventListener("dragover",g.ed,!1);a.addEventListener("drop",g.gd,!1)},Ub:function(){const a=
document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},Va:function(a){const b=g.hd;return 0>a||a>=b.length?0:b[a].size},Pa:function(a,b,c,d,e){const k=new FileReader;k.onload=f=>{f=f.target.result;f.byteLength>d?mc(a,0,1,b,0,c,d,e):(t.set(new Uint8Array(f),c),mc(a,1,0,b,f.byteLength,c,d,e))};k.onerror=()=>{mc(a,0,2,b,0,c,d,e)};k.readAsArrayBuffer(g.hd[a])},Ka:function(a){a=a?I(a):"";void 0!==g.canvas&&("object"===typeof g.canvas?jb[a]=g.canvas:console.warn("sokol_app.h: Module['canvas'] is set but is not an object"));
g.Bc=J(a);g.Bc||console.warn("sokol_app.h: can't find html5_canvas_selector ",a);g.Bc.requestPointerLock||console.warn("sokol_app.h: target doesn't support requestPointerLock: ",a)},Vb:function(){window.removeEventListener("beforeunload",g.bd)},Ya:function(){window.removeEventListener("paste",g.jd)},Ma:function(){const a=g.Bc;a.removeEventListener("dragenter",g.cd);a.removeEventListener("dragleave",g.dd);a.removeEventListener("dragover",g.ed);a.removeEventListener("drop",g.gd)},r:function(){g.Bc&&
g.Bc.requestPointerLock&&g.Bc.requestPointerLock()},Pb:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(t.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},cb:function(){const a=(new URLSearchParams(window.location.search)).entries();for(let b=a.next();!b.done;b=a.next()){const c=b.value[0],
d=b.value[1];dc(()=>{const e=ac(c),k=ac(d);nc(e,k)})}},eb:function(){return g.yc?g.yc.bufferSize:0},Hb:function(a,b,c){g.sc=null;g.yc=null;"undefined"!==typeof AudioContext?g.sc=new AudioContext({sampleRate:a,latencyHint:"interactive"}):(g.sc=null,console.log("sokol_audio.h: no WebAudio support"));return g.sc?(console.log("sokol_audio.h: sample rate ",g.sc.sampleRate),g.yc=g.sc.createScriptProcessor(c,0,b),g.yc.onaudioprocess=d=>{const e=d.outputBuffer.length,k=oc(e);if(k){const f=d.outputBuffer.numberOfChannels;
for(let l=0;l<f;l++){const n=d.outputBuffer.getChannelData(l);for(let p=0;p<e;p++)n[p]=w[(k>>2)+(f*p+l)]}}},g.yc.connect(g.sc.destination),a=()=>{g.sc&&"suspended"===g.sc.state&&g.sc.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchend",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},mb:function(){return g.sc?g.sc.sampleRate:0},ha:function(){const a=g.sc;null!==a&&(g.yc&&g.yc.disconnect(),a.close(),g.sc=null,g.yc=null)},db:function(){if(g.sc)return"suspended"===
g.sc.state?1:0},v:function(a,b,c,d,e,k){b=b?I(b):"";const f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";const l=0<d;l&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(f.readyState==XMLHttpRequest.DONE)if(206==f.status||200==f.status&&!l){const n=new Uint8Array(f.response),p=n.length;p<=k?(t.set(n,e),pc(a,d,p)):qc(a)}else rc(a,f.status)};f.send()},ga:function(a,b){b=b?I(b):"";const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=
function(){if(c.readyState==XMLHttpRequest.DONE)if(200==c.status){const d=c.getResponseHeader("Content-Length");sc(a,d)}else rc(a,c.status)};c.send()},fa:function(a,b){b=b?I(b):"";switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}},Z=function(){function a(c){Z=c.exports;na=Z.Xb;ra();mb=Z.oc;ta.unshift(Z.Yb);z--;g.monitorRunDependencies?.(z);0==z&&(null!==xa&&(clearInterval(xa),xa=null),A&&(c=A,A=null,c()));return Z}z++;g.monitorRunDependencies?.(z);
var b={a:tc};if(g.instantiateWasm)try{return g.instantiateWasm(b,a)}catch(c){return m(`Module.instantiateWasm callback failed with error: ${c}`),!1}Aa??=za("cpc.wasm")?"cpc.wasm":g.locateFile?g.locateFile("cpc.wasm",h):h+"cpc.wasm";Ea(b,function(c){a(c.instance)});return{}}();g._fs_emsc_alloc=a=>(g._fs_emsc_alloc=Z.Zb)(a);var M=a=>(M=Z._b)(a);g._fs_emsc_load_snapshot_callback=(a,b,c)=>(g._fs_emsc_load_snapshot_callback=Z.$b)(a,b,c);
var ic=g.__sapp_emsc_onpaste=a=>(ic=g.__sapp_emsc_onpaste=Z.ac)(a),hc=g.__sapp_html5_get_ask_leave_site=()=>(hc=g.__sapp_html5_get_ask_leave_site=Z.bc)(),jc=g.__sapp_emsc_begin_drop=a=>(jc=g.__sapp_emsc_begin_drop=Z.cc)(a),kc=g.__sapp_emsc_drop=(a,b)=>(kc=g.__sapp_emsc_drop=Z.dc)(a,b),lc=g.__sapp_emsc_end_drop=(a,b,c)=>(lc=g.__sapp_emsc_end_drop=Z.ec)(a,b,c),mc=g.__sapp_emsc_invoke_fetch_cb=(a,b,c,d,e,k,f,l)=>(mc=g.__sapp_emsc_invoke_fetch_cb=Z.fc)(a,b,c,d,e,k,f,l),uc=g._main=(a,b)=>(uc=g._main=Z.gc)(a,
b),oc=g.__saudio_emsc_pull=a=>(oc=g.__saudio_emsc_pull=Z.hc)(a),nc=g.__sargs_add_kvp=(a,b)=>(nc=g.__sargs_add_kvp=Z.ic)(a,b),sc=g.__sfetch_emsc_head_response=(a,b)=>(sc=g.__sfetch_emsc_head_response=Z.jc)(a,b),pc=g.__sfetch_emsc_get_response=(a,b,c)=>(pc=g.__sfetch_emsc_get_response=Z.kc)(a,b,c),rc=g.__sfetch_emsc_failed_http_status=(a,b)=>(rc=g.__sfetch_emsc_failed_http_status=Z.lc)(a,b),qc=g.__sfetch_emsc_failed_buffer_too_small=a=>(qc=g.__sfetch_emsc_failed_buffer_too_small=Z.mc)(a),gc=(a,b)=>
(gc=Z.nc)(a,b),cc=a=>(cc=Z.pc)(a),$b=a=>($b=Z.qc)(a),bc=()=>(bc=Z.rc)(),vc;A=function wc(){vc||xc();vc||(A=wc)};function yc(a=[]){var b=uc;a.unshift(fa);var c=a.length,d=$b(4*(c+1)),e=d;a.forEach(f=>{v[e>>2]=ac(f);e+=4});v[e>>2]=0;try{var k=b(c,d);La(k)}catch(f){Ja(f)}}
function xc(){var a=ea;function b(){if(!vc&&(vc=!0,g.calledRun=!0,!q)){Ga(ta);Ga(ua);g.onRuntimeInitialized?.();zc&&yc(a);if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var c=g.postRun.shift();va.unshift(c)}Ga(va)}}if(!(0<z)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)wa();Ga(sa);0<z||(g.setStatus?(g.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>g.setStatus(""),1);b()},1)):b())}}
if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var zc=!0;g.noInitialRun&&(zc=!1);xc();
