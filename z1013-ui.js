var h;h||=typeof Module != 'undefined' ? Module : {};var aa="object"==typeof window,ba="function"==typeof importScripts,ca="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,da=Object.assign({},h),ea=[],fa="./this.program",ha=(a,b)=>{throw b;},k="",ia,ja;
if(ca){var fs=require("fs"),ka=require("path");k=__dirname+"/";ja=a=>{a=la(a)?new URL(a):ka.normalize(a);return fs.readFileSync(a)};ia=a=>{a=la(a)?new URL(a):ka.normalize(a);return new Promise((b,c)=>{fs.readFile(a,void 0,(d,e)=>{d?c(d):b(e.buffer)})})};!h.thisProgram&&1<process.argv.length&&(fa=process.argv[1].replace(/\\/g,"/"));ea=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=h);process.on("uncaughtException",a=>{if(!("unwind"===a||a instanceof ma||a.context instanceof ma))throw a;
});ha=(a,b)=>{process.exitCode=a;throw b;}}else if(aa||ba)ba?k=self.location.href:"undefined"!=typeof document&&document.currentScript&&(k=document.currentScript.src),k=k.startsWith("blob:")?"":k.substr(0,k.replace(/[?#].*/,"").lastIndexOf("/")+1),ba&&(ja=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ia=a=>la(a)?new Promise((b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{(200==
d.status||0==d.status&&d.response)&&c(d.response);b(d.status)};d.onerror=b;d.send(null)}):fetch(a,{credentials:"same-origin"}).then(b=>b.ok?b.arrayBuffer():Promise.reject(Error(b.status+" : "+b.url)));var na=h.print||console.log.bind(console),m=h.printErr||console.error.bind(console);Object.assign(h,da);da=null;h.arguments&&(ea=h.arguments);h.thisProgram&&(fa=h.thisProgram);h.quit&&(ha=h.quit);var q;h.wasmBinary&&(q=h.wasmBinary);var oa,r=!1,t,u,w,pa,qa,x,y,z,A;
function ra(){var a=oa.buffer;h.HEAP8=u=new Int8Array(a);h.HEAP16=pa=new Int16Array(a);h.HEAPU8=w=new Uint8Array(a);h.HEAPU16=qa=new Uint16Array(a);h.HEAP32=x=new Int32Array(a);h.HEAPU32=y=new Uint32Array(a);h.HEAPF32=z=new Float32Array(a);h.HEAPF64=A=new Float64Array(a)}var sa=[],ta=[],ua=[],va=[];function wa(){var a=h.preRun.shift();sa.unshift(a)}var B=0,xa=null,ya=null;
function za(a){h.onAbort?.(a);a="Aborted("+a+")";m(a);r=!0;t=1;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}var Aa=a=>a.startsWith("data:application/octet-stream;base64,"),la=a=>a.startsWith("file://"),Ba;function Ca(a){if(a==Ba&&q)return new Uint8Array(q);if(ja)return ja(a);throw"both async and sync fetching of the wasm failed";}function Da(a){return q?Promise.resolve().then(()=>Ca(a)):ia(a).then(b=>new Uint8Array(b),()=>Ca(a))}
function Ea(a,b,c){return Da(a).then(d=>WebAssembly.instantiate(d,b)).then(c,d=>{m(`failed to asynchronously prepare wasm: ${d}`);za(d)})}function Fa(a,b){var c=Ba;q||"function"!=typeof WebAssembly.instantiateStreaming||Aa(c)||la(c)||ca||"function"!=typeof fetch?Ea(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){m(`wasm streaming compile failed: ${e}`);m("falling back to ArrayBuffer instantiation");return Ea(c,a,b)}))}
function ma(a){this.name="ExitStatus";this.message=`Program terminated with exit(${a})`;this.status=a}
var Ga=a=>{for(;0<a.length;)a.shift()(h)},Ha=h.noExitRuntime||!0,Ia="undefined"!=typeof TextDecoder?new TextDecoder:void 0,C=(a,b,c)=>{var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&Ia)return Ia.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var g=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|g<<6|f:(e&7)<<18|g<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|
e&1023))}}else d+=String.fromCharCode(e)}return d},Sa=(a,b)=>{Ja=a;Ka=b;if(La)if(Ma||=!0,0==a)D=function(){var d=Math.max(0,Na+b-Oa())|0;setTimeout(Pa,d)};else if(1==a)D=function(){Qa(Pa)};else if(2==a){if("undefined"==typeof Ra)if("undefined"==typeof setImmediate){var c=[];addEventListener("message",d=>{if("setimmediate"===d.data||"setimmediate"===d.data.target)d.stopPropagation(),c.shift()()},!0);Ra=function(d){c.push(d);if(ba){let e;(e=h).setImmediates??(e.setImmediates=[]);h.setImmediates.push(d);
postMessage({target:"setimmediate"})}else postMessage("setimmediate","*")}}else Ra=setImmediate;D=function(){Ra(Pa)}}},Oa;Oa=()=>performance.now();
var $a=(a,b,c,d,e)=>{La=a;Ta=d;var g=E;Ma=!1;Pa=function(){if(!r)if(0<Ua.length){var f=Ua.shift();f.rd(f.md);if(Va){var l=Va,n=0==l%1?l-1:Math.floor(l);Va=f.od?n:(8*l+(n+.5))/9}h.setStatus&&(f=h.statusMessage||"Please wait...",l=Va,n=Wa.qd,l?l<n?h.setStatus("{message} ({expected - remaining}/{expected})"):h.setStatus(f):h.setStatus(""));g<E||setTimeout(Pa,0)}else if(!(g<E))if(Xa=Xa+1|0,1==Ja&&1<Ka&&0!=Xa%Ka)D();else{0==Ja&&(Na=Oa());if(!(r||h.preMainLoop&&!1===h.preMainLoop())){if(!r)try{if(a(),!Ha)try{t=
f=t,Ya(f)}catch(p){Za(p)}}catch(p){Za(p)}h.postMainLoop?.()}g<E||("object"==typeof SDL&&SDL.audio?.vd?.(),D())}};e||(b&&0<b?Sa(0,1E3/b):Sa(1,1),D());if(c)throw"unwind";},Za=a=>{a instanceof ma||"unwind"==a||ha(1,a)},Ya=a=>{t=a;Ha||(h.onExit?.(a),r=!0);ha(a,new ma(a))},ab=a=>{t=a;Ya(a)},Ma=!1,D=null,E=0,La=null,Ta=0,Ja=0,Ka=0,Xa=0,Ua=[];function bb(){D=null;E++}var Wa={},Na,Pa,Va,cb=!1,db=!1,eb=[];
function fb(){function a(){db=document.pointerLockElement===h.canvas||document.mozPointerLockElement===h.canvas||document.webkitPointerLockElement===h.canvas||document.msPointerLockElement===h.canvas}if(!gb){gb=!0;var b=h.canvas;b&&(b.requestPointerLock=b.requestPointerLock||b.mozRequestPointerLock||b.webkitRequestPointerLock||b.msRequestPointerLock||(()=>{}),b.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||document.msExitPointerLock||(()=>{}),
b.exitPointerLock=b.exitPointerLock.bind(document),document.addEventListener("pointerlockchange",a,!1),document.addEventListener("mozpointerlockchange",a,!1),document.addEventListener("webkitpointerlockchange",a,!1),document.addEventListener("mspointerlockchange",a,!1),h.elementPointerLock&&b.addEventListener("click",c=>{!db&&h.canvas.requestPointerLock&&(h.canvas.requestPointerLock(),c.preventDefault())},!1))}}var hb=!1,ib=void 0,G=void 0;
function jb(){if(!cb)return!1;(document.exitFullscreen||document.cancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.webkitCancelFullScreen||(()=>{})).apply(document,[]);return!0}var kb=0;function Qa(a){if("function"==typeof requestAnimationFrame)requestAnimationFrame(a);else{var b=Date.now();if(0===kb)kb=b+1E3/60;else for(;b+2>=kb;)kb+=1E3/60;setTimeout(a,Math.max(kb-b,0))}}var lb=[];function mb(){var a=h.canvas;lb.forEach(b=>b(a.width,a.height))}
function nb(a,b,c){b&&c?(a.kd=b,a.gd=c):(b=a.kd,c=a.gd);var d=b,e=c;h.forcedAspectRatio&&0<h.forcedAspectRatio&&(d/e<h.forcedAspectRatio?d=Math.round(e*h.forcedAspectRatio):e=Math.round(d/h.forcedAspectRatio));if((document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===a.parentNode&&"undefined"!=typeof screen){var g=Math.min(screen.width/d,screen.height/e);d=Math.round(d*g);e=Math.round(e*
g)}G?(a.width!=d&&(a.width=d),a.height!=e&&(a.height=e),"undefined"!=typeof a.style&&(a.style.removeProperty("width"),a.style.removeProperty("height"))):(a.width!=b&&(a.width=b),a.height!=c&&(a.height=c),"undefined"!=typeof a.style&&(d!=b||e!=c?(a.style.setProperty("width",d+"px","important"),a.style.setProperty("height",e+"px","important")):(a.style.removeProperty("width"),a.style.removeProperty("height"))))}var Ra,gb,ob=0,pb=[];
function qb(){if(navigator.userActivation?navigator.userActivation.isActive:ob&&rb.Ic){var a=pb;pb=[];for(var b of a)b.yd(...b.nd)}}var H=[];function sb(a){var b=H[a];b.target.removeEventListener(b.wc,b.Pc,b.xc);H.splice(a,1)}function I(a){if(!a.target)return-4;if(a.yc)a.Pc=function(c){++ob;rb=a;qb();a.zc(c);qb();--ob},a.target.addEventListener(a.wc,a.Pc,a.xc),H.push(a);else for(var b=0;b<H.length;++b)H[b].target==a.target&&H[b].wc==a.wc&&sb(b--);return 0}
function tb(a){return a?a==window?"#window":a==screen?"#screen":a?.nodeName||"":""}
var rb,ub,vb,wb,xb,yb,zb,Ab,Bb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0],J=a=>{a=2<a?a?C(w,a):"":a;return Bb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)},Cb=a=>0>Bb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0},Db=[],Eb,K=a=>{var b=Db[a];b||(a>=Db.length&&(Db.length=a+1),Db[a]=b=Eb.get(a));return b},L=(a,b,c)=>{var d=w;if(!(0<c))return 0;var e=b;c=b+c-1;for(var g=0;g<a.length;++g){var f=a.charCodeAt(g);if(55296<=f&&57343>=f){var l=
a.charCodeAt(++g);f=65536+((f&1023)<<10)|l&1023}if(127>=f){if(b>=c)break;d[b++]=f}else{if(2047>=f){if(b+1>=c)break;d[b++]=192|f>>6}else{if(65535>=f){if(b+2>=c)break;d[b++]=224|f>>12}else{if(b+3>=c)break;d[b++]=240|f>>18;d[b++]=128|f>>12&63}d[b++]=128|f>>6&63}d[b++]=128|f&63}}d[b]=0;return b-e},Fb=(a,b,c,d,e,g)=>{ub||=M(256);a={target:J(a),wc:g,yc:d,zc:(f=event)=>{var l=f.target.id?f.target.id:"",n=ub;L(tb(f.target),n+0,128);L(l,n+128,128);K(d)(e,n,b)&&f.preventDefault()},xc:c};return I(a)},Gb=(a,
b,c,d,e,g)=>{vb||=M(160);a={target:J(a),wc:g,yc:d,zc:f=>{var l=vb;A[l>>3]=f.timeStamp;var n=l>>2;x[n+2]=f.location;u[l+12]=f.ctrlKey;u[l+13]=f.shiftKey;u[l+14]=f.altKey;u[l+15]=f.metaKey;u[l+16]=f.repeat;x[n+5]=f.charCode;x[n+6]=f.keyCode;x[n+7]=f.which;L(f.key||"",l+32,32);L(f.code||"",l+64,32);L(f.char||"",l+96,32);L(f.locale||"",l+128,32);K(d)(e,l,b)&&f.preventDefault()},xc:c};return I(a)},Hb=(a,b,c)=>{A[a>>3]=b.timeStamp;var d=a>>2;x[d+2]=b.screenX;x[d+3]=b.screenY;x[d+4]=b.clientX;x[d+5]=b.clientY;
u[a+24]=b.ctrlKey;u[a+25]=b.shiftKey;u[a+26]=b.altKey;u[a+27]=b.metaKey;pa[2*d+14]=b.button;pa[2*d+15]=b.buttons;x[d+8]=b.movementX;x[d+9]=b.movementY;a=Cb(c);x[d+10]=b.clientX-(a.left|0);x[d+11]=b.clientY-(a.top|0)},Ib=(a,b,c,d,e,g)=>{wb||=M(64);a=J(a);return I({target:a,Ic:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,wc:g,yc:d,zc:(f=event)=>{Hb(wb,f,a);K(d)(e,wb,b)&&f.preventDefault()},xc:c})},Jb=(a,b,c,d,e)=>{xb||=M(257);return I({target:a,wc:e,yc:d,zc:(g=event)=>{var f=xb,l=document.pointerLockElement||
document.Dc||document.bd||document.ad;u[f]=!!l;var n=l?.id||"";L(tb(l),f+1,128);L(n,f+129,128);K(d)(20,f,b)&&g.preventDefault()},xc:c})},Kb=(a,b,c,d,e)=>I({target:a,wc:e,yc:d,zc:(g=event)=>{K(d)(38,0,b)&&g.preventDefault()},xc:c}),Lb=(a,b,c,d)=>{yb||=M(36);a=J(a);return I({target:a,wc:"resize",yc:d,zc:(e=event)=>{if(e.target==a){var g=document.body;if(g){var f=yb;x[f>>2]=0;x[f+4>>2]=g.clientWidth;x[f+8>>2]=g.clientHeight;x[f+12>>2]=innerWidth;x[f+16>>2]=innerHeight;x[f+20>>2]=outerWidth;x[f+24>>2]=
outerHeight;x[f+28>>2]=pageXOffset|0;x[f+32>>2]=pageYOffset|0;K(d)(10,f,b)&&e.preventDefault()}}},xc:c})},Mb=(a,b,c,d,e,g)=>{zb||=M(1552);a=J(a);return I({target:a,Ic:"touchstart"==g||"touchend"==g,wc:g,yc:d,zc:f=>{var l={},n=f.touches;for(var p of n)p.Qc=p.Rc=0,l[p.identifier]=p;for(var v of f.changedTouches)v.Qc=1,l[v.identifier]=v;for(var P of f.targetTouches)l[P.identifier].Rc=1;n=zb;A[n>>3]=f.timeStamp;u[n+12]=f.ctrlKey;u[n+13]=f.shiftKey;u[n+14]=f.altKey;u[n+15]=f.metaKey;p=n+16;v=Cb(a);P=0;
for(let F of Object.values(l))if(l=p>>2,x[l]=F.identifier,x[l+1]=F.screenX,x[l+2]=F.screenY,x[l+3]=F.clientX,x[l+4]=F.clientY,x[l+5]=F.pageX,x[l+6]=F.pageY,u[p+28]=F.Qc,u[p+29]=F.Rc,x[l+8]=F.clientX-(v.left|0),x[l+9]=F.clientY-(v.top|0),p+=48,31<++P)break;x[n+8>>2]=P;K(d)(e,n,b)&&f.preventDefault()},xc:c})},Nb=a=>{var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=(c,d)=>b.vertexAttribDivisorANGLE(c,d),a.drawArraysInstanced=(c,d,e,g)=>b.drawArraysInstancedANGLE(c,d,e,g),a.drawElementsInstanced=
(c,d,e,g,f)=>b.drawElementsInstancedANGLE(c,d,e,g,f))},Ob=a=>{var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=()=>b.createVertexArrayOES(),a.deleteVertexArray=c=>b.deleteVertexArrayOES(c),a.bindVertexArray=c=>b.bindVertexArrayOES(c),a.isVertexArray=c=>b.isVertexArrayOES(c))},Pb=a=>{var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=(c,d)=>b.drawBuffersWEBGL(c,d))},Qb=a=>{a.pd=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")},Rb=a=>{a.sd=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")},
Sb=a=>{var b="ANGLE_instanced_arrays EXT_blend_minmax EXT_disjoint_timer_query EXT_frag_depth EXT_shader_texture_lod EXT_sRGB OES_element_index_uint OES_fbo_render_mipmap OES_standard_derivatives OES_texture_float OES_texture_half_float OES_texture_half_float_linear OES_vertex_array_object WEBGL_color_buffer_float WEBGL_depth_texture WEBGL_draw_buffers EXT_color_buffer_float EXT_conservative_depth EXT_disjoint_timer_query_webgl2 EXT_texture_norm16 NV_shader_noperspective_interpolation WEBGL_clip_cull_distance EXT_color_buffer_half_float EXT_depth_clamp EXT_float_blend EXT_texture_compression_bptc EXT_texture_compression_rgtc EXT_texture_filter_anisotropic KHR_parallel_shader_compile OES_texture_float_linear WEBGL_blend_func_extended WEBGL_compressed_texture_astc WEBGL_compressed_texture_etc WEBGL_compressed_texture_etc1 WEBGL_compressed_texture_s3tc WEBGL_compressed_texture_s3tc_srgb WEBGL_debug_renderer_info WEBGL_debug_shaders WEBGL_lose_context WEBGL_multi_draw".split(" ");
return(a.getSupportedExtensions()||[]).filter(c=>b.includes(c))},Tb=1,Ub=[],N=[],Vb=[],Wb=[],O=[],Q=[],Xb=[],Yb=[],R=[],Zb={},$b=4,ac=0,bc=a=>{for(var b=Tb++,c=a.length;c<b;c++)a[c]=null;return b},U=(a,b,c,d)=>{for(var e=0;e<a;e++){var g=S[c](),f=g&&bc(d);g?(g.name=f,d[f]=g):T||=1282;x[b+4*e>>2]=f}},dc=(a,b)=>{a.Dc||(a.Dc=a.getContext,a.getContext=function(d,e){e=a.Dc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Kc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?
cc(c,b):0},cc=(a,b)=>{var c=bc(Yb),d={handle:c,attributes:b,version:b.Kc,Ec:a};a.canvas&&(a.canvas.ld=d);Yb[c]=d;("undefined"==typeof b.Oc||b.Oc)&&ec(d);return c},fc=a=>{V=Yb[a];h.Jc=S=V?.Ec;return!(a&&!S)},ec=a=>{a||=V;if(!a.hd){a.hd=!0;var b=a.Ec;Nb(b);Ob(b);Pb(b);Qb(b);Rb(b);2<=a.version&&(b.Nc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Nc)b.Nc=b.getExtension("EXT_disjoint_timer_query");b.jd=b.getExtension("WEBGL_multi_draw");Sb(b).forEach(c=>{c.includes("lose_context")||
c.includes("debug")||b.getExtension(c)})}},gc={},T,V,hc=(a,b,c,d,e,g)=>{a={target:J(a),wc:g,yc:d,zc:(f=event)=>{K(d)(e,0,b)&&f.preventDefault()},xc:c};I(a)},ic=(a,b,c,d)=>{Ab||=M(96);return I({target:a,Ic:!0,wc:"wheel",yc:d,zc:(e=event)=>{var g=Ab;Hb(g,e,a);A[g+64>>3]=e.deltaX;A[g+72>>3]=e.deltaY;A[g+80>>3]=e.deltaZ;x[g+88>>2]=e.deltaMode;K(d)(9,g,b)&&e.preventDefault()},xc:c})},jc=["default","low-power","high-performance"],kc=[null,[],[]],lc=[];
function mc(){var a=Sb(S);return a=a.concat(a.map(b=>"GL_"+b))}
var nc=(a,b)=>{if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=S.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){T||=1282;return}c=mc().length;break;case 33307:case 33308:if(2>V.version){T||=1280;return}c=33307==a?3:0}if(void 0===c)switch(d=S.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":T||=1280;return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:T||=1280;return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)x[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){T||=1280;m(`GL_INVALID_ENUM in glGet${0}v: Unknown object returned from WebGL getParameter(${a})! (error: ${e})`);return}}break;default:T||=1280;m(`GL_INVALID_ENUM in glGet${0}v: Native code calling glGet${0}v(${a}) and it returns ${d} of type ${typeof d}!`);return}x[b>>2]=c}else T||=1281},oc=
a=>{for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b},pc=a=>{var b=oc(a)+1,c=M(b);c&&L(a,c,b);return c},qc=a=>"]"==a.slice(-1)&&a.lastIndexOf("["),rc=a=>{a-=5120;return 0==a?u:1==a?w:2==a?pa:4==a?x:6==a?z:5==a||28922==a||28520==a||30779==a||30782==a?y:qa},sc=(a,b,c,d,e)=>{a=rc(a);b=d*((ac||c)*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*a.BYTES_PER_ELEMENT+$b-1&-$b);return a.subarray(e>>>31-Math.clz32(a.BYTES_PER_ELEMENT),
e+b>>>31-Math.clz32(a.BYTES_PER_ELEMENT))},W=a=>{var b=S.dd;if(b){var c=b.Cc[a];"number"==typeof c&&(b.Cc[a]=c=S.getUniformLocation(b,b.Zc[a]+(0<c?`[${c}]`:"")));return c}T||=1282},X=[],tc=[],vc=a=>{var b=oc(a)+1,c=uc(b);L(a,c,b);return c},yc=a=>{var b=wc();a();xc(b)};
h.requestFullscreen=function(a,b){function c(){cb=!1;var g=d.parentNode;(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===g?(d.exitFullscreen=jb,ib&&d.requestPointerLock(),cb=!0,G?("undefined"!=typeof SDL&&(x[SDL.screen>>2]=y[SDL.screen>>2]|8388608),nb(h.canvas),mb()):nb(d)):(g.parentNode.insertBefore(d,g),g.parentNode.removeChild(g),G?("undefined"!=typeof SDL&&(x[SDL.screen>>2]=y[SDL.screen>>
2]&-8388609),nb(h.canvas),mb()):nb(d));h.onFullScreen?.(cb);h.onFullscreen?.(cb)}ib=a;G=b;"undefined"==typeof ib&&(ib=!0);"undefined"==typeof G&&(G=!1);var d=h.canvas;hb||(hb=!0,document.addEventListener("fullscreenchange",c,!1),document.addEventListener("mozfullscreenchange",c,!1),document.addEventListener("webkitfullscreenchange",c,!1),document.addEventListener("MSFullscreenChange",c,!1));var e=document.createElement("div");d.parentNode.insertBefore(e,d);e.appendChild(d);e.requestFullscreen=e.requestFullscreen||
e.mozRequestFullScreen||e.msRequestFullscreen||(e.webkitRequestFullscreen?()=>e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):null)||(e.webkitRequestFullScreen?()=>e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):null);e.requestFullscreen()};h.requestAnimationFrame=Qa;h.setCanvasSize=function(a,b,c){nb(h.canvas,a,b);c||mb()};h.pauseMainLoop=bb;h.resumeMainLoop=function(){E++;var a=Ja,b=Ka,c=La;La=null;$a(c,0,!1,Ta,!0);Sa(a,b);D()};
h.getUserMedia=function(a){let b;(b=window).getUserMedia||(b.getUserMedia=navigator.getUserMedia||navigator.mozGetUserMedia);window.getUserMedia(a)};h.createContext=function(a,b,c,d){if(b&&h.Jc&&a==h.canvas)return h.Jc;var e;if(b){var g={antialias:!1,alpha:!1,Kc:"undefined"!=typeof WebGL2RenderingContext?2:1};if(d)for(var f in d)g[f]=d[f];if("undefined"!=typeof gc&&(e=dc(a,g)))var l=Yb[e].Ec}else l=a.getContext("2d");if(!l)return null;c&&(h.Jc=l,b&&fc(e),h.zd=b,eb.forEach(n=>n()),fb());return l};
for(var S,Y=0;32>Y;++Y)lc.push(Array(Y));var zc=new Float32Array(288);for(Y=0;288>=Y;++Y)X[Y]=zc.subarray(0,Y);var Ac=new Int32Array(288);for(Y=0;288>=Y;++Y)tc[Y]=Ac.subarray(0,Y);
var Oc={la:function(){return 0},nb:function(){return 0},ob:function(){},pb:()=>{za("")},kb:(a,b,c)=>w.copyWithin(a,b,b+c),Xa:()=>{bb();La=null},fa:()=>"number"==typeof devicePixelRatio&&devicePixelRatio||1,ha:(a,b,c)=>{a=J(a);if(!a)return-4;a=Cb(a);A[b>>3]=a.width;A[c>>3]=a.height;return 0},y:Oa,Ya:()=>performance.now(),db:(a,b)=>{function c(d){K(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},ib:a=>{var b=w.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*
(1+.2/c);d=Math.min(d,a+100663296);var e=Math;d=Math.max(a,d);a:{e=(e.min.call(e,2147483648,d+(65536-d%65536)%65536)-oa.buffer.byteLength+65535)/65536;try{oa.grow(e);ra();var g=1;break a}catch(f){}g=void 0}if(g)return!0}return!1},P:(a,b,c,d)=>Fb(a,b,c,d,12,"blur"),ea:(a,b,c)=>{a=J(a);if(!a)return-4;a.width=b;a.height=c;return 0},Q:(a,b,c,d)=>Fb(a,b,c,d,13,"focus"),Z:(a,b,c,d)=>Gb(a,b,c,d,2,"keydown"),X:(a,b,c,d)=>Gb(a,b,c,d,1,"keypress"),Y:(a,b,c,d)=>Gb(a,b,c,d,3,"keyup"),eb:(a,b,c)=>{a=K(a);$a(a,
b,c)},da:(a,b,c,d)=>Ib(a,b,c,d,5,"mousedown"),aa:(a,b,c,d)=>Ib(a,b,c,d,33,"mouseenter"),$:(a,b,c,d)=>Ib(a,b,c,d,34,"mouseleave"),ba:(a,b,c,d)=>Ib(a,b,c,d,8,"mousemove"),ca:(a,b,c,d)=>Ib(a,b,c,d,6,"mouseup"),S:(a,b,c,d)=>{if(!document||!document.body||!(document.body.requestPointerLock||document.body.Dc||document.body.bd||document.body.ad))return-1;a=J(a);if(!a)return-4;Jb(a,b,c,d,"mozpointerlockchange");Jb(a,b,c,d,"webkitpointerlockchange");Jb(a,b,c,d,"mspointerlockchange");return Jb(a,b,c,d,"pointerlockchange")},
R:(a,b,c,d)=>{if(!document||!(document.body.requestPointerLock||document.body.Dc||document.body.bd||document.body.ad))return-1;a=J(a);if(!a)return-4;Kb(a,b,c,d,"mozpointerlockerror");Kb(a,b,c,d,"webkitpointerlockerror");Kb(a,b,c,d,"mspointerlockerror");return Kb(a,b,c,d,"pointerlockerror")},ga:(a,b,c,d)=>Lb(a,b,c,d),T:(a,b,c,d)=>Mb(a,b,c,d,25,"touchcancel"),U:(a,b,c,d)=>Mb(a,b,c,d,23,"touchend"),V:(a,b,c,d)=>Mb(a,b,c,d,24,"touchmove"),W:(a,b,c,d)=>Mb(a,b,c,d,22,"touchstart"),O:(a,b,c,d)=>{hc(a,b,
c,d,31,"webglcontextlost");return 0},N:(a,b,c,d)=>{hc(a,b,c,d,32,"webglcontextrestored");return 0},_:(a,b,c,d)=>(a=J(a))?"undefined"!=typeof a.onwheel?ic(a,b,c,d):-1:-4,cb:(a,b)=>{var c=b>>2;b={alpha:!!u[b+0],depth:!!u[b+1],stencil:!!u[b+2],antialias:!!u[b+3],premultipliedAlpha:!!u[b+4],preserveDrawingBuffer:!!u[b+5],powerPreference:jc[x[c+2]],failIfMajorPerformanceCaveat:!!u[b+12],Kc:x[c+4],td:x[c+5],Oc:u[b+24],ed:u[b+25],ud:x[c+7],wd:u[b+32]};a=J(a);return!a||b.ed?0:dc(a,b)},$a:(a,b)=>{a=Yb[a];
b=b?C(w,b):"";b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&Nb(S);"OES_vertex_array_object"==b&&Ob(S);"WEBGL_draw_buffers"==b&&Pb(S);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&Qb(S);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&Rb(S);"WEBGL_multi_draw"==b&&(S.jd=S.getExtension("WEBGL_multi_draw"));return!!a.Ec.getExtension(b)},ab:a=>fc(a)?0:-5,ka:()=>52,mb:()=>52,hb:function(){return 70},lb:(a,b,c,d)=>{for(var e=0,g=0;g<c;g++){var f=y[b>>2],l=y[b+4>>2];b+=
8;for(var n=0;n<l;n++){var p=w[f+n],v=kc[a];0===p||10===p?((1===a?na:m)(C(v,0)),v.length=0):v.push(p)}e+=l}y[d>>2]=e;return 0},k:function(a,b,c){const d=a?C(w,a):"";let e;try{e=window.indexedDB.open("chips",1)}catch(g){console.log("fs_js_load_snapshot: failed to open IndexedDB with "+g)}e.onupgradeneeded=()=>{console.log("fs_js_load_snapshot: creating db");e.result.createObjectStore("store")};e.onsuccess=()=>{var g=e.result;let f;try{f=g.transaction(["store"],"readwrite")}catch(p){console.log("fs_js_load_snapshot: db.transaction failed with",
p);return}g=f.objectStore("store");let l=d+"_"+b,n=g.get(l);n.onsuccess=()=>{if(void 0!==n.result){let p=n.result.length;console.log("fs_js_load_snapshot:",l,"successfully loaded",p,"bytes");let v=Bc(p);w.set(n.result,v);Cc(c,v,p)}else Cc(c,0,0)};n.onerror=()=>{console.log("fs_js_load_snapshot: FAILED loading",l)};f.onerror=()=>{console.log("fs_js_load_snapshot: transaction onerror")}};e.onerror=()=>{console.log("fs_js_load_snapshot: open_request onerror")}},$b:function(a,b,c,d){const e=a?C(w,a):
"";console.log("fs_js_save_snapshot: called with",e,b);let g;try{g=window.indexedDB.open("chips",1)}catch(f){console.log("fs_js_save_snapshot: failed to open IndexedDB with "+f);return}g.onupgradeneeded=()=>{console.log("fs_js_save_snapshot: creating db");g.result.createObjectStore("store")};g.onsuccess=()=>{console.log("fs_js_save_snapshot: onsuccess");let f=g.result.transaction(["store"],"readwrite");var l=f.objectStore("store");let n=e+"_"+b;l=l.put(w.subarray(c,c+d),n);l.onsuccess=()=>{console.log("fs_js_save_snapshot:",
n,"successfully stored")};l.onerror=()=>{console.log("fs_js_save_snapshot: FAILED to store",n)};f.onerror=()=>{console.log("fs_js_save_snapshot: transaction onerror")}};g.onerror=()=>{console.log("fs_js_save_snapshot: open_request onerror")}},m:a=>S.activeTexture(a),wa:(a,b)=>{S.attachShader(N[a],Q[b])},b:(a,b)=>{35051==a?S.Mc=b:35052==a&&(S.Ac=b);S.bindBuffer(a,Ub[b])},a:(a,b,c)=>{S.bindBufferBase(a,b,Ub[c])},o:(a,b)=>{S.bindFramebuffer(a,Vb[b])},Ia:(a,b)=>{S.bindRenderbuffer(a,Wb[b])},l:(a,b)=>
{S.bindSampler(a,R[b])},c:(a,b)=>{S.bindTexture(a,O[b])},M:a=>{S.bindVertexArray(Xb[a])},I:(a,b,c,d)=>S.blendColor(a,b,c,d),J:(a,b)=>S.blendEquationSeparate(a,b),K:(a,b,c,d)=>S.blendFuncSeparate(a,b,c,d),ub:(a,b,c,d,e,g,f,l,n,p)=>S.blitFramebuffer(a,b,c,d,e,g,f,l,n,p),La:(a,b,c,d)=>{2<=V.version?c&&b?S.bufferData(a,w,d,c,b):S.bufferData(a,b,d):S.bufferData(a,c?w.subarray(c,c+b):b,d)},C:(a,b,c,d)=>{2<=V.version?c&&S.bufferSubData(a,b,w,d,c):S.bufferSubData(a,b,w.subarray(d,d+c))},qa:a=>S.checkFramebufferStatus(a),
Ob:(a,b,c,d)=>S.clearBufferfi(a,b,c,d),oa:(a,b,c)=>{S.clearBufferfv(a,b,z,c>>2)},Nb:(a,b,c)=>{S.clearBufferiv(a,b,x,c>>2)},r:(a,b,c,d)=>{S.colorMask(!!a,!!b,!!c,!!d)},Sb:a=>{S.compileShader(Q[a])},Ca:(a,b,c,d,e,g,f,l)=>{2<=V.version?S.Ac||!f?S.compressedTexImage2D(a,b,c,d,e,g,f,l):S.compressedTexImage2D(a,b,c,d,e,g,w,l,f):S.compressedTexImage2D(a,b,c,d,e,g,l?w.subarray(l,l+f):null)},Aa:(a,b,c,d,e,g,f,l,n)=>{S.Ac?S.compressedTexImage3D(a,b,c,d,e,g,f,l,n):S.compressedTexImage3D(a,b,c,d,e,g,f,w,n,l)},
Yb:()=>{var a=bc(N),b=S.createProgram();b.name=a;b.Hc=b.Fc=b.Gc=0;b.Lc=1;N[a]=b;return a},Ub:a=>{var b=bc(Q);Q[b]=S.createShader(a);return b},F:a=>S.cullFace(a),Pa:(a,b)=>{for(var c=0;c<a;c++){var d=x[b+4*c>>2],e=Ub[d];e&&(S.deleteBuffer(e),e.name=0,Ub[d]=null,d==S.Mc&&(S.Mc=0),d==S.Ac&&(S.Ac=0))}},f:(a,b)=>{for(var c=0;c<a;++c){var d=x[b+4*c>>2],e=Vb[d];e&&(S.deleteFramebuffer(e),e.name=0,Vb[d]=null)}},p:a=>{if(a){var b=N[a];b?(S.deleteProgram(b),b.name=0,N[a]=null):T||=1281}},D:(a,b)=>{for(var c=
0;c<a;c++){var d=x[b+4*c>>2],e=Wb[d];e&&(S.deleteRenderbuffer(e),e.name=0,Wb[d]=null)}},g:(a,b)=>{for(var c=0;c<a;c++){var d=x[b+4*c>>2],e=R[d];e&&(S.deleteSampler(e),e.name=0,R[d]=null)}},B:a=>{if(a){var b=Q[a];b?(S.deleteShader(b),Q[a]=null):T||=1281}},E:(a,b)=>{for(var c=0;c<a;c++){var d=x[b+4*c>>2],e=O[d];e&&(S.deleteTexture(e),e.name=0,O[d]=null)}},Na:(a,b)=>{for(var c=0;c<a;c++){var d=x[b+4*c>>2];S.deleteVertexArray(Xb[d]);Xb[d]=null}},w:a=>S.depthFunc(a),v:a=>{S.depthMask(!!a)},e:a=>S.disable(a),
L:a=>{S.disableVertexAttribArray(a)},wb:(a,b,c)=>{S.drawArrays(a,b,c)},xb:(a,b,c,d)=>{S.drawArraysInstanced(a,b,c,d)},pa:(a,b)=>{for(var c=lc[a],d=0;d<a;d++)c[d]=x[b+4*d>>2];S.drawBuffers(c)},yb:(a,b,c,d)=>{S.drawElements(a,b,c,d)},zb:(a,b,c,d,e)=>{S.drawElementsInstanced(a,b,c,d,e)},j:a=>S.enable(a),Kb:a=>{S.enableVertexAttribArray(a)},ra:(a,b,c,d)=>{S.framebufferRenderbuffer(a,b,c,Wb[d])},q:(a,b,c,d,e)=>{S.framebufferTexture2D(a,b,c,O[d],e)},A:(a,b,c,d,e)=>{S.framebufferTextureLayer(a,b,O[c],d,
e)},G:a=>S.frontFace(a),Ma:(a,b)=>{U(a,b,"createBuffer",Ub)},sa:(a,b)=>{U(a,b,"createFramebuffer",Vb)},Ka:(a,b)=>{U(a,b,"createRenderbuffer",Wb)},Zb:(a,b)=>{U(a,b,"createSampler",R)},Ga:(a,b)=>{U(a,b,"createTexture",O)},Wa:(a,b)=>{U(a,b,"createVertexArray",Xb)},Qb:(a,b)=>S.getAttribLocation(N[a],b?C(w,b):""),d:(a,b)=>nc(a,b),Wb:(a,b,c,d)=>{a=S.getProgramInfoLog(N[a]);null===a&&(a="(unknown error)");b=0<b&&d?L(a,d,b):0;c&&(x[c>>2]=b)},va:(a,b,c)=>{if(c)if(a>=Tb)T||=1281;else if(a=N[a],35716==b)a=S.getProgramInfoLog(a),
null===a&&(a="(unknown error)"),x[c>>2]=a.length+1;else if(35719==b){if(!a.Hc)for(b=0;b<S.getProgramParameter(a,35718);++b)a.Hc=Math.max(a.Hc,S.getActiveUniform(a,b).name.length+1);x[c>>2]=a.Hc}else if(35722==b){if(!a.Fc)for(b=0;b<S.getProgramParameter(a,35721);++b)a.Fc=Math.max(a.Fc,S.getActiveAttrib(a,b).name.length+1);x[c>>2]=a.Fc}else if(35381==b){if(!a.Gc)for(b=0;b<S.getProgramParameter(a,35382);++b)a.Gc=Math.max(a.Gc,S.getActiveUniformBlockName(a,b).length+1);x[c>>2]=a.Gc}else x[c>>2]=S.getProgramParameter(a,
b);else T||=1281},Rb:(a,b,c,d)=>{a=S.getShaderInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?L(a,d,b):0;c&&(x[c>>2]=b)},ta:(a,b,c)=>{c?35716==b?(a=S.getShaderInfoLog(Q[a]),null===a&&(a="(unknown error)"),x[c>>2]=a?a.length+1:0):35720==b?(a=S.getShaderSource(Q[a]),x[c>>2]=a?a.length+1:0):x[c>>2]=S.getShaderParameter(Q[a],b):T||=1281},Ua:(a,b)=>{if(2>V.version)return T||=1282,0;var c=Zb[a];if(c)return 0>b||b>=c.length?(T||=1281,0):c[b];switch(a){case 7939:return c=mc().map(pc),c=Zb[a]=c,0>b||
b>=c.length?(T||=1281,0):c[b];default:return T||=1280,0}},t:(a,b)=>{b=b?C(w,b):"";if(a=N[a]){var c=a,d=c.Cc,e=c.$c,g;if(!d)for(c.Cc=d={},c.Zc={},g=0;g<S.getProgramParameter(c,35718);++g){var f=S.getActiveUniform(c,g);var l=f.name;f=f.size;var n=qc(l);n=0<n?l.slice(0,n):l;var p=c.Lc;c.Lc+=f;e[n]=[f,p];for(l=0;l<f;++l)d[p]=l,c.Zc[p++]=n}c=a.Cc;d=0;e=b;g=qc(b);0<g&&(d=parseInt(b.slice(g+1))>>>0,e=b.slice(0,g));if((e=a.$c[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||S.getUniformLocation(a,b)))return d}else T||=1281;
return-1},tb:(a,b,c)=>{for(var d=lc[b],e=0;e<b;e++)d[e]=x[c+4*e>>2];S.invalidateFramebuffer(a,d)},Xb:a=>{a=N[a];S.linkProgram(a);a.Cc=0;a.$c={}},Va:(a,b)=>{3317==a?$b=b:3314==a&&(ac=b);S.pixelStorei(a,b)},H:(a,b)=>S.polygonOffset(a,b),vb:a=>S.readBuffer(a),Ha:(a,b,c,d,e)=>S.renderbufferStorageMultisample(a,b,c,d,e),xa:(a,b,c)=>{S.samplerParameterf(R[a],b,c)},h:(a,b,c)=>{S.samplerParameteri(R[a],b,c)},s:(a,b,c,d)=>S.scissor(a,b,c,d),Tb:(a,b,c,d)=>{for(var e="",g=0;g<b;++g){var f=(f=y[c+4*g>>2])?C(w,
f,d?y[d+4*g>>2]:void 0):"";e+=f}S.shaderSource(Q[a],e)},Sa:(a,b,c)=>S.stencilFunc(a,b,c),na:(a,b,c,d)=>S.stencilFuncSeparate(a,b,c,d),u:a=>S.stencilMask(a),Ra:(a,b,c)=>S.stencilOp(a,b,c),ma:(a,b,c,d)=>S.stencilOpSeparate(a,b,c,d),Ba:(a,b,c,d,e,g,f,l,n)=>{if(2<=V.version){if(S.Ac){S.texImage2D(a,b,c,d,e,g,f,l,n);return}if(n){var p=rc(l);n>>>=31-Math.clz32(p.BYTES_PER_ELEMENT);S.texImage2D(a,b,c,d,e,g,f,l,p,n);return}}p=n?sc(l,f,d,e,n):null;S.texImage2D(a,b,c,d,e,g,f,l,p)},za:(a,b,c,d,e,g,f,l,n,p)=>
{if(S.Ac)S.texImage3D(a,b,c,d,e,g,f,l,n,p);else if(p){var v=rc(n);S.texImage3D(a,b,c,d,e,g,f,l,n,v,p>>>31-Math.clz32(v.BYTES_PER_ELEMENT))}else S.texImage3D(a,b,c,d,e,g,f,l,n,null)},Fa:(a,b,c)=>S.texParameteri(a,b,c),Ea:(a,b,c,d,e)=>S.texStorage2D(a,b,c,d,e),Da:(a,b,c,d,e,g)=>S.texStorage3D(a,b,c,d,e,g),rb:(a,b,c,d,e,g,f,l,n)=>{if(2<=V.version){if(S.Ac){S.texSubImage2D(a,b,c,d,e,g,f,l,n);return}if(n){var p=rc(l);S.texSubImage2D(a,b,c,d,e,g,f,l,p,n>>>31-Math.clz32(p.BYTES_PER_ELEMENT));return}}n=n?
sc(l,f,e,g,n):null;S.texSubImage2D(a,b,c,d,e,g,f,l,n)},qb:(a,b,c,d,e,g,f,l,n,p,v)=>{if(S.Ac)S.texSubImage3D(a,b,c,d,e,g,f,l,n,p,v);else if(v){var P=rc(p);S.texSubImage3D(a,b,c,d,e,g,f,l,n,p,P,v>>>31-Math.clz32(P.BYTES_PER_ELEMENT))}else S.texSubImage3D(a,b,c,d,e,g,f,l,n,p,null)},Jb:(a,b,c)=>{if(2<=V.version)b&&S.uniform1fv(W(a),z,c>>2,b);else{if(288>=b)for(var d=X[b],e=0;e<b;++e)d[e]=z[c+4*e>>2];else d=z.subarray(c>>2,c+4*b>>2);S.uniform1fv(W(a),d)}},ua:(a,b)=>{S.uniform1i(W(a),b)},Fb:(a,b,c)=>{if(2<=
V.version)b&&S.uniform1iv(W(a),x,c>>2,b);else{if(288>=b)for(var d=tc[b],e=0;e<b;++e)d[e]=x[c+4*e>>2];else d=x.subarray(c>>2,c+4*b>>2);S.uniform1iv(W(a),d)}},Ib:(a,b,c)=>{if(2<=V.version)b&&S.uniform2fv(W(a),z,c>>2,2*b);else{if(144>=b)for(var d=X[2*b],e=0;e<2*b;e+=2)d[e]=z[c+4*e>>2],d[e+1]=z[c+(4*e+4)>>2];else d=z.subarray(c>>2,c+8*b>>2);S.uniform2fv(W(a),d)}},Eb:(a,b,c)=>{if(2<=V.version)b&&S.uniform2iv(W(a),x,c>>2,2*b);else{if(144>=b)for(var d=tc[2*b],e=0;e<2*b;e+=2)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*
e+4)>>2];else d=x.subarray(c>>2,c+8*b>>2);S.uniform2iv(W(a),d)}},Hb:(a,b,c)=>{if(2<=V.version)b&&S.uniform3fv(W(a),z,c>>2,3*b);else{if(96>=b)for(var d=X[3*b],e=0;e<3*b;e+=3)d[e]=z[c+4*e>>2],d[e+1]=z[c+(4*e+4)>>2],d[e+2]=z[c+(4*e+8)>>2];else d=z.subarray(c>>2,c+12*b>>2);S.uniform3fv(W(a),d)}},Cb:(a,b,c)=>{if(2<=V.version)b&&S.uniform3iv(W(a),x,c>>2,3*b);else{if(96>=b)for(var d=tc[3*b],e=0;e<3*b;e+=3)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2],d[e+2]=x[c+(4*e+8)>>2];else d=x.subarray(c>>2,c+12*b>>2);S.uniform3iv(W(a),
d)}},Gb:(a,b,c)=>{if(2<=V.version)b&&S.uniform4fv(W(a),z,c>>2,4*b);else{if(72>=b){var d=X[4*b],e=z;c>>=2;for(var g=0;g<4*b;g+=4){var f=c+g;d[g]=e[f];d[g+1]=e[f+1];d[g+2]=e[f+2];d[g+3]=e[f+3]}}else d=z.subarray(c>>2,c+16*b>>2);S.uniform4fv(W(a),d)}},Bb:(a,b,c)=>{if(2<=V.version)b&&S.uniform4iv(W(a),x,c>>2,4*b);else{if(72>=b)for(var d=tc[4*b],e=0;e<4*b;e+=4)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2],d[e+2]=x[c+(4*e+8)>>2],d[e+3]=x[c+(4*e+12)>>2];else d=x.subarray(c>>2,c+16*b>>2);S.uniform4iv(W(a),d)}},
Ab:(a,b,c,d)=>{if(2<=V.version)b&&S.uniformMatrix4fv(W(a),!!c,z,d>>2,16*b);else{if(18>=b){var e=X[16*b],g=z;d>>=2;for(var f=0;f<16*b;f+=16){var l=d+f;e[f]=g[l];e[f+1]=g[l+1];e[f+2]=g[l+2];e[f+3]=g[l+3];e[f+4]=g[l+4];e[f+5]=g[l+5];e[f+6]=g[l+6];e[f+7]=g[l+7];e[f+8]=g[l+8];e[f+9]=g[l+9];e[f+10]=g[l+10];e[f+11]=g[l+11];e[f+12]=g[l+12];e[f+13]=g[l+13];e[f+14]=g[l+14];e[f+15]=g[l+15]}}else e=z.subarray(d>>2,d+64*b>>2);S.uniformMatrix4fv(W(a),!!c,e)}},i:a=>{a=N[a];S.useProgram(a);S.dd=a},Lb:(a,b)=>{S.vertexAttribDivisor(a,
b)},Mb:(a,b,c,d,e,g)=>{S.vertexAttribPointer(a,b,c,!!d,e,g)},n:(a,b,c,d)=>S.viewport(a,b,c,d),bb:function(){h.Sc=a=>{0!=Dc()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",h.Sc)},Za:function(){h.Yc=a=>{const b=a.clipboardData.getData("text");yc(()=>{const c=vc(b);Ec(c)})};window.addEventListener("paste",h.Yc)},Oa:function(a){h.xd=[];a=a?C(w,a):"";a=document.getElementById(a);h.Tc=b=>{b.stopPropagation();b.preventDefault()};h.Uc=b=>{b.stopPropagation();b.preventDefault()};
h.Vc=b=>{b.stopPropagation();b.preventDefault()};h.Wc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;h.Xc=c;Fc(c.length);for(let e=0;e<c.length;e++)yc(()=>{const g=vc(c[e].name);Gc(e,g)});let d=0;b.shiftKey&&(d|=1);b.ctrlKey&&(d|=2);b.altKey&&(d|=4);b.metaKey&&(d|=8);Hc(b.clientX,b.clientY,d)};a.addEventListener("dragenter",h.Tc,!1);a.addEventListener("dragleave",h.Uc,!1);a.addEventListener("dragover",h.Vc,!1);a.addEventListener("drop",h.Wc,!1)},sb:function(){const a=document.getElementById("sokol-app-favicon");
a&&document.head.removeChild(a)},Ja:function(a){const b=h.Xc;return 0>a||a>=b.length?0:b[a].size},_b:function(a,b,c,d,e){const g=new FileReader;g.onload=f=>{f=f.target.result;f.byteLength>d?Ic(a,0,1,b,0,c,d,e):(w.set(new Uint8Array(f),c),Ic(a,1,0,b,f.byteLength,c,d,e))};g.onerror=()=>{Ic(a,0,2,b,0,c,d,e)};g.readAsArrayBuffer(h.Xc[a])},Pb:function(a){a=a?C(w,a):"";h.Bc=document.getElementById(a);h.Bc||console.log("sokol_app.h: invalid target:"+a);h.Bc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+
a)},_a:function(){window.removeEventListener("beforeunload",h.Sc)},Ta:function(){window.removeEventListener("paste",h.Yc)},Vb:function(a){a=a?C(w,a):"";a=document.getElementById(a);a.removeEventListener("dragenter",h.Tc);a.removeEventListener("dragleave",h.Uc);a.removeEventListener("dragover",h.Vc);a.removeEventListener("drop",h.Wc)},z:function(){h.Bc&&h.Bc.requestPointerLock&&h.Bc.requestPointerLock()},Db:function(a,b){if(h.Bc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";
break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";break;case 10:a="not-allowed";break;default:a="auto"}h.Bc.style.cursor=a}},jb:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),g=e.createImageData(a,b);g.data.set(w.subarray(c,c+a*b*4));e.putImageData(g,0,0);a=document.createElement("link");
a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},Qa:function(a){a=a?C(w,a):"";const b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},
fb:function(){const a=(new URLSearchParams(window.location.search)).entries();for(let b=a.next();!b.done;b=a.next()){const c=b.value[0],d=b.value[1];yc(()=>{const e=vc(c),g=vc(d);Jc(e,g)})}},gb:function(){if(h.cd)return"suspended"===h.cd.state?1:0},x:function(a,b,c,d,e,g){b=b?C(w,b):"";const f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";const l=0<d;l&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(f.readyState==XMLHttpRequest.DONE)if(206==
f.status||200==f.status&&!l){const n=new Uint8Array(f.response),p=n.length;p<=g?(w.set(n,e),Kc(a,d,p)):Lc(a)}else Mc(a,f.status)};f.send()},ja:function(a,b){b=b?C(w,b):"";const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==c.status){const d=c.getResponseHeader("Content-Length");Nc(a,d)}else Mc(a,c.status)};c.send()},ya:function(){return navigator.userAgent.includes("Macintosh")?1:0},ia:function(a,b){b=b?C(w,b):"";switch(a){case 0:console.error(b);
break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}},Z=function(){function a(c){Z=c.exports;oa=Z.ac;ra();Eb=Z.sc;ta.unshift(Z.bc);B--;h.monitorRunDependencies?.(B);0==B&&(null!==xa&&(clearInterval(xa),xa=null),ya&&(c=ya,ya=null,c()));return Z}var b={a:Oc};B++;h.monitorRunDependencies?.(B);if(h.instantiateWasm)try{return h.instantiateWasm(b,a)}catch(c){return m(`Module.instantiateWasm callback failed with error: ${c}`),!1}Ba||=Aa("z1013-ui.wasm")?"z1013-ui.wasm":
h.locateFile?h.locateFile("z1013-ui.wasm",k):k+"z1013-ui.wasm";Fa(b,function(c){a(c.instance)});return{}}(),M=a=>(M=Z.cc)(a),Bc=h._fs_emsc_alloc=a=>(Bc=h._fs_emsc_alloc=Z.dc)(a),Cc=h._fs_emsc_load_snapshot_callback=(a,b,c)=>(Cc=h._fs_emsc_load_snapshot_callback=Z.ec)(a,b,c),Ec=h.__sapp_emsc_onpaste=a=>(Ec=h.__sapp_emsc_onpaste=Z.fc)(a),Dc=h.__sapp_html5_get_ask_leave_site=()=>(Dc=h.__sapp_html5_get_ask_leave_site=Z.gc)(),Fc=h.__sapp_emsc_begin_drop=a=>(Fc=h.__sapp_emsc_begin_drop=Z.hc)(a),Gc=h.__sapp_emsc_drop=
(a,b)=>(Gc=h.__sapp_emsc_drop=Z.ic)(a,b),Hc=h.__sapp_emsc_end_drop=(a,b,c)=>(Hc=h.__sapp_emsc_end_drop=Z.jc)(a,b,c),Ic=h.__sapp_emsc_invoke_fetch_cb=(a,b,c,d,e,g,f,l)=>(Ic=h.__sapp_emsc_invoke_fetch_cb=Z.kc)(a,b,c,d,e,g,f,l),Pc=h._main=(a,b)=>(Pc=h._main=Z.lc)(a,b);h.__saudio_emsc_pull=a=>(h.__saudio_emsc_pull=Z.mc)(a);
var Jc=h.__sargs_add_kvp=(a,b)=>(Jc=h.__sargs_add_kvp=Z.nc)(a,b),Nc=h.__sfetch_emsc_head_response=(a,b)=>(Nc=h.__sfetch_emsc_head_response=Z.oc)(a,b),Kc=h.__sfetch_emsc_get_response=(a,b,c)=>(Kc=h.__sfetch_emsc_get_response=Z.pc)(a,b,c),Mc=h.__sfetch_emsc_failed_http_status=(a,b)=>(Mc=h.__sfetch_emsc_failed_http_status=Z.qc)(a,b),Lc=h.__sfetch_emsc_failed_buffer_too_small=a=>(Lc=h.__sfetch_emsc_failed_buffer_too_small=Z.rc)(a),xc=a=>(xc=Z.tc)(a),uc=a=>(uc=Z.uc)(a),wc=()=>(wc=Z.vc)(),Qc;
ya=function Rc(){Qc||Sc();Qc||(ya=Rc)};function Tc(a=[]){var b=Pc;a.unshift(fa);var c=a.length,d=uc(4*(c+1)),e=d;a.forEach(f=>{y[e>>2]=vc(f);e+=4});y[e>>2]=0;try{var g=b(c,d);ab(g)}catch(f){Za(f)}}
function Sc(){var a=ea;function b(){if(!Qc&&(Qc=!0,h.calledRun=!0,!r)){Ga(ta);Ga(ua);h.onRuntimeInitialized?.();Uc&&Tc(a);if(h.postRun)for("function"==typeof h.postRun&&(h.postRun=[h.postRun]);h.postRun.length;){var c=h.postRun.shift();va.unshift(c)}Ga(va)}}if(!(0<B)){if(h.preRun)for("function"==typeof h.preRun&&(h.preRun=[h.preRun]);h.preRun.length;)wa();Ga(sa);0<B||(h.setStatus?(h.setStatus("Running..."),setTimeout(function(){setTimeout(function(){h.setStatus("")},1);b()},1)):b())}}
if(h.preInit)for("function"==typeof h.preInit&&(h.preInit=[h.preInit]);0<h.preInit.length;)h.preInit.pop()();var Uc=!0;h.noInitialRun&&(Uc=!1);Sc();
