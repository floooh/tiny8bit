var f;f||=typeof Module !== 'undefined' ? Module : {};var aa=Object.assign({},f),ba=[],ca="./this.program",da=(a,b)=>{throw b;},ea="object"==typeof window,k="function"==typeof importScripts,fa="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,m="",ha,ia,ja;
if(fa){var fs=require("fs"),ka=require("path");m=k?ka.dirname(m)+"/":__dirname+"/";ha=(a,b)=>{a=la(a)?new URL(a):ka.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};ja=a=>{a=ha(a,!0);a.buffer||(a=new Uint8Array(a));return a};ia=(a,b,c,d=!0)=>{a=la(a)?new URL(a):ka.normalize(a);fs.readFile(a,d?void 0:"utf8",(e,h)=>{e?c(e):b(d?h.buffer:h)})};!f.thisProgram&&1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=f);process.on("uncaughtException",
a=>{if(!("unwind"===a||a instanceof ma||a.context instanceof ma))throw a;});da=(a,b)=>{process.exitCode=a;throw b;}}else if(ea||k)k?m=self.location.href:"undefined"!=typeof document&&document.currentScript&&(m=document.currentScript.src),m=m.startsWith("blob:")?"":m.substr(0,m.replace(/[?#].*/,"").lastIndexOf("/")+1),ha=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},k&&(ja=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);
return new Uint8Array(b.response)}),ia=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};f.print||console.log.bind(console);var q=f.printErr||console.error.bind(console);Object.assign(f,aa);aa=null;f.arguments&&(ba=f.arguments);f.thisProgram&&(ca=f.thisProgram);f.quit&&(da=f.quit);var r;f.wasmBinary&&(r=f.wasmBinary);"object"!=typeof WebAssembly&&na("no native wasm support detected");
var oa,v=!1,w,pa,x,qa,ra,y,z,A,B;function sa(){var a=oa.buffer;f.HEAP8=pa=new Int8Array(a);f.HEAP16=qa=new Int16Array(a);f.HEAPU8=x=new Uint8Array(a);f.HEAPU16=ra=new Uint16Array(a);f.HEAP32=y=new Int32Array(a);f.HEAPU32=z=new Uint32Array(a);f.HEAPF32=A=new Float32Array(a);f.HEAPF64=B=new Float64Array(a)}var ta=[],ua=[],va=[],wa=[];function xa(){var a=f.preRun.shift();ta.unshift(a)}var C=0,ya=null,za=null;
function na(a){f.onAbort?.(a);a="Aborted("+a+")";q(a);v=!0;w=1;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}var Aa=a=>a.startsWith("data:application/octet-stream;base64,"),la=a=>a.startsWith("file://"),D;D="z9001.wasm";if(!Aa(D)){var Ba=D;D=f.locateFile?f.locateFile(Ba,m):m+Ba}function Ca(a){if(a==D&&r)return new Uint8Array(r);if(ja)return ja(a);throw"both async and sync fetching of the wasm failed";}
function Da(a){if(!r&&(ea||k)){if("function"==typeof fetch&&!la(a))return fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw`failed to load wasm binary file at '${a}'`;return b.arrayBuffer()}).catch(()=>Ca(a));if(ia)return new Promise((b,c)=>{ia(a,d=>b(new Uint8Array(d)),c)})}return Promise.resolve().then(()=>Ca(a))}function Ea(a,b,c){return Da(a).then(d=>WebAssembly.instantiate(d,b)).then(c,d=>{q(`failed to asynchronously prepare wasm: ${d}`);na(d)})}
function Fa(a,b){var c=D;r||"function"!=typeof WebAssembly.instantiateStreaming||Aa(c)||la(c)||fa||"function"!=typeof fetch?Ea(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){q(`wasm streaming compile failed: ${e}`);q("falling back to ArrayBuffer instantiation");return Ea(c,a,b)}))}function ma(a){this.name="ExitStatus";this.message=`Program terminated with exit(${a})`;this.status=a}
var Ga=a=>{for(;0<a.length;)a.shift()(f)},Ha=f.noExitRuntime||!0,Ra=(a,b)=>{Ia=a;Ja=b;if(Ka)if(La||=!0,0==a)E=function(){var d=Math.max(0,Ma+b-Na())|0;setTimeout(Oa,d)};else if(1==a)E=function(){Pa(Oa)};else if(2==a){if("undefined"==typeof Qa)if("undefined"==typeof setImmediate){var c=[];addEventListener("message",d=>{if("setimmediate"===d.data||"setimmediate"===d.data.target)d.stopPropagation(),c.shift()()},!0);Qa=function(d){c.push(d);k?(void 0===f.setImmediates&&(f.setImmediates=[]),f.setImmediates.push(d),
postMessage({target:"setimmediate"})):postMessage("setimmediate","*")}}else Qa=setImmediate;E=function(){Qa(Oa)}}},Na;Na=()=>performance.now();
var Za=(a,b,c,d,e)=>{Ka=a;Sa=d;var h=F;La=!1;Oa=function(){if(!v)if(0<Ta.length){var g=Ta.shift();g.gd(g.ad);if(Ua){var l=Ua,n=0==l%1?l-1:Math.floor(l);Ua=g.cd?n:(8*l+(n+.5))/9}f.setStatus&&(g=f.statusMessage||"Please wait...",l=Ua,n=Va.ed,l?l<n?f.setStatus("{message} ({expected - remaining}/{expected})"):f.setStatus(g):f.setStatus(""));h<F||setTimeout(Oa,0)}else if(!(h<F))if(Wa=Wa+1|0,1==Ia&&1<Ja&&0!=Wa%Ja)E();else{0==Ia&&(Ma=Na());if(!(v||f.preMainLoop&&!1===f.preMainLoop())){if(!v)try{if(a(),!Ha)try{w=
g=w,Xa(g)}catch(p){Ya(p)}}catch(p){Ya(p)}f.postMainLoop?.()}h<F||("object"==typeof SDL&&SDL.audio?.ld?.(),E())}};e||(b&&0<b?Ra(0,1E3/b):Ra(1,1),E());if(c)throw"unwind";},Ya=a=>{a instanceof ma||"unwind"==a||da(1,a)},Xa=a=>{w=a;Ha||(f.onExit?.(a),v=!0);da(a,new ma(a))},$a=a=>{w=a;Xa(a)},La=!1,E=null,F=0,Ka=null,Sa=0,Ia=0,Ja=0,Wa=0,Ta=[];function ab(){E=null;F++}var Va={},Ma,Oa,Ua,bb=!1,cb=!1,db=[];
function eb(){function a(){cb=document.pointerLockElement===f.canvas||document.mozPointerLockElement===f.canvas||document.webkitPointerLockElement===f.canvas||document.msPointerLockElement===f.canvas}if(!fb){fb=!0;var b=f.canvas;b&&(b.requestPointerLock=b.requestPointerLock||b.mozRequestPointerLock||b.webkitRequestPointerLock||b.msRequestPointerLock||(()=>{}),b.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||document.msExitPointerLock||(()=>{}),
b.exitPointerLock=b.exitPointerLock.bind(document),document.addEventListener("pointerlockchange",a,!1),document.addEventListener("mozpointerlockchange",a,!1),document.addEventListener("webkitpointerlockchange",a,!1),document.addEventListener("mspointerlockchange",a,!1),f.elementPointerLock&&b.addEventListener("click",c=>{!cb&&f.canvas.requestPointerLock&&(f.canvas.requestPointerLock(),c.preventDefault())},!1))}}var gb=!1,hb=void 0,G=void 0;
function ib(){if(!bb)return!1;(document.exitFullscreen||document.cancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.webkitCancelFullScreen||(()=>{})).apply(document,[]);return!0}var jb=0;function Pa(a){if("function"==typeof requestAnimationFrame)requestAnimationFrame(a);else{var b=Date.now();if(0===jb)jb=b+1E3/60;else for(;b+2>=jb;)jb+=1E3/60;setTimeout(a,Math.max(jb-b,0))}}var kb=[];function lb(){var a=f.canvas;kb.forEach(b=>b(a.width,a.height))}
function mb(a,b,c){b&&c?(a.Zc=b,a.Wc=c):(b=a.Zc,c=a.Wc);var d=b,e=c;f.forcedAspectRatio&&0<f.forcedAspectRatio&&(d/e<f.forcedAspectRatio?d=Math.round(e*f.forcedAspectRatio):e=Math.round(d/f.forcedAspectRatio));if((document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===a.parentNode&&"undefined"!=typeof screen){var h=Math.min(screen.width/d,screen.height/e);d=Math.round(d*h);e=Math.round(e*
h)}G?(a.width!=d&&(a.width=d),a.height!=e&&(a.height=e),"undefined"!=typeof a.style&&(a.style.removeProperty("width"),a.style.removeProperty("height"))):(a.width!=b&&(a.width=b),a.height!=c&&(a.height=c),"undefined"!=typeof a.style&&(d!=b||e!=c?(a.style.setProperty("width",d+"px","important"),a.style.setProperty("height",e+"px","important")):(a.style.removeProperty("width"),a.style.removeProperty("height"))))}var Qa,fb,pb=a=>{var b=nb();a();ob(b)},qb=0,rb=[];
function sb(){if(navigator.userActivation?navigator.userActivation.isActive:qb&&tb.zc)for(var a=0;a<rb.length;++a){var b=rb[a];rb.splice(a,1);--a;b.od(...b.bd)}}var H=[];function ub(a){var b=H[a];b.target.removeEventListener(b.mc,b.Gc,b.nc);H.splice(a,1)}function I(a){if(!a.target)return-4;if(a.oc)a.Gc=function(c){++qb;tb=a;sb();a.pc(c);sb();--qb},a.target.addEventListener(a.mc,a.Gc,a.nc),H.push(a);else for(var b=0;b<H.length;++b)H[b].target==a.target&&H[b].mc==a.mc&&ub(b--);return 0}
function vb(a){return a?a==window?"#window":a==screen?"#screen":a?.nodeName||"":""}
var tb,wb,xb,yb,zb,Ab,Bb,Cb,Db="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,J=(a,b)=>{var c=x,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&Db)return Db.decode(c.subarray(a,b));for(d="";a<b;){var e=c[a++];if(e&128){var h=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d},
Eb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0],K=a=>{a=2<a?a?J(a):"":a;return Eb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)},Fb=a=>0>Eb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0},Gb=[],Hb,L=a=>{var b=Gb[a];b||(a>=Gb.length&&(Gb.length=a+1),Gb[a]=b=Hb.get(a));return b},M=(a,b,c)=>{var d=x;if(!(0<c))return 0;var e=b;c=b+c-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var l=a.charCodeAt(++h);g=65536+((g&
1023)<<10)|l&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0;return b-e},Ib=(a,b,c,d,e,h)=>{wb||=N(256);a={target:K(a),mc:h,oc:d,pc:(g=event)=>{var l=g.target.id?g.target.id:"",n=wb;M(vb(g.target),n+0,128);M(l,n+128,128);L(d)(e,n,b)&&g.preventDefault()},nc:c};return I(a)},Jb=(a,b,c,d,e,h)=>{xb||=N(176);a={target:K(a),
mc:h,oc:d,pc:g=>{var l=xb;B[l>>3]=g.timeStamp;var n=l>>2;y[n+2]=g.location;y[n+3]=g.ctrlKey;y[n+4]=g.shiftKey;y[n+5]=g.altKey;y[n+6]=g.metaKey;y[n+7]=g.repeat;y[n+8]=g.charCode;y[n+9]=g.keyCode;y[n+10]=g.which;M(g.key||"",l+44,32);M(g.code||"",l+76,32);M(g.char||"",l+108,32);M(g.locale||"",l+140,32);L(d)(e,l,b)&&g.preventDefault()},nc:c};return I(a)},Kb=(a,b,c)=>{B[a>>3]=b.timeStamp;a>>=2;y[a+2]=b.screenX;y[a+3]=b.screenY;y[a+4]=b.clientX;y[a+5]=b.clientY;y[a+6]=b.ctrlKey;y[a+7]=b.shiftKey;y[a+8]=
b.altKey;y[a+9]=b.metaKey;qa[2*a+20]=b.button;qa[2*a+21]=b.buttons;y[a+11]=b.movementX;y[a+12]=b.movementY;c=Fb(c);y[a+13]=b.clientX-(c.left|0);y[a+14]=b.clientY-(c.top|0)},Lb=(a,b,c,d,e,h)=>{yb||=N(72);a=K(a);return I({target:a,zc:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,mc:h,oc:d,pc:(g=event)=>{Kb(yb,g,a);L(d)(e,yb,b)&&g.preventDefault()},nc:c})},Mb=(a,b,c,d,e)=>{zb||=N(260);return I({target:a,mc:e,oc:d,pc:(h=event)=>{var g=zb,l=document.pointerLockElement||document.sc||document.Jc||document.Ic;
y[g>>2]=!!l;var n=l?.id||"";M(vb(l),g+4,128);M(n,g+132,128);L(d)(20,g,b)&&h.preventDefault()},nc:c})},Nb=(a,b,c,d,e)=>I({target:a,mc:e,oc:d,pc:(h=event)=>{L(d)(38,0,b)&&h.preventDefault()},nc:c}),Ob=(a,b,c,d)=>{Ab||=N(36);a=K(a);return I({target:a,mc:"resize",oc:d,pc:(e=event)=>{if(e.target==a){var h=document.body;if(h){var g=Ab;y[g>>2]=0;y[g+4>>2]=h.clientWidth;y[g+8>>2]=h.clientHeight;y[g+12>>2]=innerWidth;y[g+16>>2]=innerHeight;y[g+20>>2]=outerWidth;y[g+24>>2]=outerHeight;y[g+28>>2]=pageXOffset|
0;y[g+32>>2]=pageYOffset|0;L(d)(10,g,b)&&e.preventDefault()}}},nc:c})},Pb=(a,b,c,d,e,h)=>{Bb||=N(1696);a=K(a);return I({target:a,zc:"touchstart"==h||"touchend"==h,mc:h,oc:d,pc:g=>{for(var l,n={},p=g.touches,t=0;t<p.length;++t)l=p[t],l.Hc=l.Kc=0,n[l.identifier]=l;for(t=0;t<g.changedTouches.length;++t)l=g.changedTouches[t],l.Hc=1,n[l.identifier]=l;for(t=0;t<g.targetTouches.length;++t)n[g.targetTouches[t].identifier].Kc=1;p=Bb;B[p>>3]=g.timeStamp;var u=p>>2;y[u+3]=g.ctrlKey;y[u+4]=g.shiftKey;y[u+5]=
g.altKey;y[u+6]=g.metaKey;u+=7;var Sb=Fb(a),Tb=0;for(t in n)if(l=n[t],y[u]=l.identifier,y[u+1]=l.screenX,y[u+2]=l.screenY,y[u+3]=l.clientX,y[u+4]=l.clientY,y[u+5]=l.pageX,y[u+6]=l.pageY,y[u+7]=l.Hc,y[u+8]=l.Kc,y[u+9]=l.clientX-(Sb.left|0),y[u+10]=l.clientY-(Sb.top|0),u+=13,31<++Tb)break;y[p+8>>2]=Tb;L(d)(e,p,b)&&g.preventDefault()},nc:c})},Qb=a=>{var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=(c,d)=>b.vertexAttribDivisorANGLE(c,d),a.drawArraysInstanced=(c,d,e,h)=>b.drawArraysInstancedANGLE(c,
d,e,h),a.drawElementsInstanced=(c,d,e,h,g)=>b.drawElementsInstancedANGLE(c,d,e,h,g))},Rb=a=>{var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=()=>b.createVertexArrayOES(),a.deleteVertexArray=c=>b.deleteVertexArrayOES(c),a.bindVertexArray=c=>b.bindVertexArrayOES(c),a.isVertexArray=c=>b.isVertexArrayOES(c))},Ub=a=>{var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=(c,d)=>b.drawBuffersWEBGL(c,d))},Vb=a=>{a.dd=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")},
Wb=a=>{a.hd=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")},Xb=a=>{var b="ANGLE_instanced_arrays EXT_blend_minmax EXT_disjoint_timer_query EXT_frag_depth EXT_shader_texture_lod EXT_sRGB OES_element_index_uint OES_fbo_render_mipmap OES_standard_derivatives OES_texture_float OES_texture_half_float OES_texture_half_float_linear OES_vertex_array_object WEBGL_color_buffer_float WEBGL_depth_texture WEBGL_draw_buffers EXT_color_buffer_float EXT_conservative_depth EXT_disjoint_timer_query_webgl2 EXT_texture_norm16 NV_shader_noperspective_interpolation WEBGL_clip_cull_distance EXT_color_buffer_half_float EXT_depth_clamp EXT_float_blend EXT_texture_compression_bptc EXT_texture_compression_rgtc EXT_texture_filter_anisotropic KHR_parallel_shader_compile OES_texture_float_linear WEBGL_blend_func_extended WEBGL_compressed_texture_astc WEBGL_compressed_texture_etc WEBGL_compressed_texture_etc1 WEBGL_compressed_texture_s3tc WEBGL_compressed_texture_s3tc_srgb WEBGL_debug_renderer_info WEBGL_debug_shaders WEBGL_lose_context WEBGL_multi_draw".split(" ");
return(a.getSupportedExtensions()||[]).filter(c=>b.includes(c))},Yb=1,Zb=[],O=[],$b=[],ac=[],P=[],Q=[],bc=[],cc=[],R=[],dc={},ec=4,fc=a=>{for(var b=Yb++,c=a.length;c<b;c++)a[c]=null;return b},U=(a,b,c,d)=>{for(var e=0;e<a;e++){var h=S[c](),g=h&&fc(d);h?(h.name=g,d[g]=h):T||=1282;y[b+4*e>>2]=g}},hc=(a,b)=>{a.sc||(a.sc=a.getContext,a.getContext=function(d,e){e=a.sc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Bc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?
gc(c,b):0},gc=(a,b)=>{var c=fc(cc),d={handle:c,attributes:b,version:b.Bc,vc:a};a.canvas&&(a.canvas.$c=d);cc[c]=d;("undefined"==typeof b.Fc||b.Fc)&&ic(d);return c},jc=a=>{V=cc[a];f.Ac=S=V?.vc;return!(a&&!S)},ic=a=>{a||=V;if(!a.Xc){a.Xc=!0;var b=a.vc;Qb(b);Rb(b);Ub(b);Vb(b);Wb(b);2<=a.version&&(b.Ec=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Ec)b.Ec=b.getExtension("EXT_disjoint_timer_query");b.Yc=b.getExtension("WEBGL_multi_draw");Xb(b).forEach(c=>{c.includes("lose_context")||
c.includes("debug")||b.getExtension(c)})}},kc={},T,V,lc=(a,b,c,d,e,h)=>{a={target:K(a),mc:h,oc:d,pc:(g=event)=>{L(d)(e,0,b)&&g.preventDefault()},nc:c};I(a)},mc=(a,b,c,d)=>{Cb||=N(104);return I({target:a,zc:!0,mc:"wheel",oc:d,pc:(e=event)=>{var h=Cb;Kb(h,e,a);B[h+72>>3]=e.deltaX;B[h+80>>3]=e.deltaY;B[h+88>>3]=e.deltaZ;y[h+96>>2]=e.deltaMode;L(d)(9,h,b)&&e.preventDefault()},nc:c})},nc=["default","low-power","high-performance"],oc=[];function pc(){var a=Xb(S);return a=a.concat(a.map(b=>"GL_"+b))}
var qc=(a,b)=>{if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=S.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){T||=1282;return}c=pc().length;break;case 33307:case 33308:if(2>V.version){T||=1280;return}c=33307==a?3:0}if(void 0===c)switch(d=S.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":T||=1280;return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:T||=1280;return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)y[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){T||=1280;q(`GL_INVALID_ENUM in glGet${0}v: Unknown object returned from WebGL getParameter(${a})! (error: ${e})`);return}}break;default:T||=1280;q(`GL_INVALID_ENUM in glGet${0}v: Native code calling glGet${0}v(${a}) and it returns ${d} of type ${typeof d}!`);return}y[b>>2]=c}else T||=1281},rc=
a=>{for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b},sc=a=>{var b=rc(a)+1,c=N(b);c&&M(a,c,b);return c},tc=a=>"]"==a.slice(-1)&&a.lastIndexOf("["),uc=a=>{a-=5120;return 0==a?pa:1==a?x:2==a?qa:4==a?y:6==a?A:5==a||28922==a||28520==a||30779==a||30782==a?z:ra},vc=(a,b,c,d,e)=>{a=uc(a);var h=ec;b=d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*a.BYTES_PER_ELEMENT+h-1&-h);return a.subarray(e>>>31-Math.clz32(a.BYTES_PER_ELEMENT),
e+b>>>31-Math.clz32(a.BYTES_PER_ELEMENT))},W=a=>{var b=S.Uc;if(b){var c=b.uc[a];"number"==typeof c&&(b.uc[a]=c=S.getUniformLocation(b,b.Sc[a]+(0<c?`[${c}]`:"")));return c}T||=1282},X=[],wc=[],yc=a=>{var b=rc(a)+1,c=xc(b);M(a,c,b);return c};
f.requestFullscreen=function(a,b){function c(){bb=!1;var h=d.parentNode;(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===h?(d.exitFullscreen=ib,hb&&d.requestPointerLock(),bb=!0,G?("undefined"!=typeof SDL&&(y[SDL.screen>>2]=z[SDL.screen>>2]|8388608),mb(f.canvas),lb()):mb(d)):(h.parentNode.insertBefore(d,h),h.parentNode.removeChild(h),G?("undefined"!=typeof SDL&&(y[SDL.screen>>2]=z[SDL.screen>>
2]&-8388609),mb(f.canvas),lb()):mb(d));f.onFullScreen?.(bb);f.onFullscreen?.(bb)}hb=a;G=b;"undefined"==typeof hb&&(hb=!0);"undefined"==typeof G&&(G=!1);var d=f.canvas;gb||(gb=!0,document.addEventListener("fullscreenchange",c,!1),document.addEventListener("mozfullscreenchange",c,!1),document.addEventListener("webkitfullscreenchange",c,!1),document.addEventListener("MSFullscreenChange",c,!1));var e=document.createElement("div");d.parentNode.insertBefore(e,d);e.appendChild(d);e.requestFullscreen=e.requestFullscreen||
e.mozRequestFullScreen||e.msRequestFullscreen||(e.webkitRequestFullscreen?()=>e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):null)||(e.webkitRequestFullScreen?()=>e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):null);e.requestFullscreen()};f.requestAnimationFrame=Pa;f.setCanvasSize=function(a,b,c){mb(f.canvas,a,b);c||lb()};f.pauseMainLoop=ab;f.resumeMainLoop=function(){F++;var a=Ia,b=Ja,c=Ka;Ka=null;Za(c,0,!1,Sa,!0);Ra(a,b);E()};
f.getUserMedia=function(a){let b;(b=window).getUserMedia||(b.getUserMedia=navigator.getUserMedia||navigator.mozGetUserMedia);window.getUserMedia(a)};f.createContext=function(a,b,c,d){if(b&&f.Ac&&a==f.canvas)return f.Ac;var e;if(b){var h={antialias:!1,alpha:!1,Bc:"undefined"!=typeof WebGL2RenderingContext?2:1};if(d)for(var g in d)h[g]=d[g];if("undefined"!=typeof kc&&(e=hc(a,h)))var l=cc[e].vc}else l=a.getContext("2d");if(!l)return null;c&&(f.Ac=l,b&&jc(e),f.pd=b,db.forEach(n=>n()),eb());return l};
for(var S,Y=0;32>Y;++Y)oc.push(Array(Y));var zc=new Float32Array(288);for(Y=0;288>Y;++Y)X[Y]=zc.subarray(0,Y+1);var Ac=new Int32Array(288);for(Y=0;288>Y;++Y)wc[Y]=Ac.subarray(0,Y+1);
var Nc={h:()=>{na("")},Sa:()=>{ab();Ka=null},ea:()=>"number"==typeof devicePixelRatio&&devicePixelRatio||1,ga:(a,b,c)=>{a=K(a);if(!a)return-4;a=Fb(a);B[b>>3]=a.width;B[c>>3]=a.height;return 0},z:Na,gb:(a,b,c)=>x.copyWithin(a,b,b+c),Ta:()=>performance.now(),_a:(a,b)=>{function c(d){L(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},eb:a=>{var b=x.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math;d=Math.max(a,d);a:{e=
(e.min.call(e,2147483648,d+(65536-d%65536)%65536)-oa.buffer.byteLength+65535)/65536;try{oa.grow(e);sa();var h=1;break a}catch(g){}h=void 0}if(h)return!0}return!1},O:(a,b,c,d)=>Ib(a,b,c,d,12,"blur"),da:(a,b,c)=>{a=K(a);if(!a)return-4;a.width=b;a.height=c;return 0},P:(a,b,c,d)=>Ib(a,b,c,d,13,"focus"),Y:(a,b,c,d)=>Jb(a,b,c,d,2,"keydown"),W:(a,b,c,d)=>Jb(a,b,c,d,1,"keypress"),X:(a,b,c,d)=>Jb(a,b,c,d,3,"keyup"),$a:(a,b,c)=>{a=L(a);Za(a,b,c)},ca:(a,b,c,d)=>Lb(a,b,c,d,5,"mousedown"),$:(a,b,c,d)=>Lb(a,b,
c,d,33,"mouseenter"),_:(a,b,c,d)=>Lb(a,b,c,d,34,"mouseleave"),aa:(a,b,c,d)=>Lb(a,b,c,d,8,"mousemove"),ba:(a,b,c,d)=>Lb(a,b,c,d,6,"mouseup"),R:(a,b,c,d)=>{if(!document||!document.body||!(document.body.requestPointerLock||document.body.sc||document.body.Jc||document.body.Ic))return-1;a=K(a);if(!a)return-4;Mb(a,b,c,d,"mozpointerlockchange");Mb(a,b,c,d,"webkitpointerlockchange");Mb(a,b,c,d,"mspointerlockchange");return Mb(a,b,c,d,"pointerlockchange")},Q:(a,b,c,d)=>{if(!document||!(document.body.requestPointerLock||
document.body.sc||document.body.Jc||document.body.Ic))return-1;a=K(a);if(!a)return-4;Nb(a,b,c,d,"mozpointerlockerror");Nb(a,b,c,d,"webkitpointerlockerror");Nb(a,b,c,d,"mspointerlockerror");return Nb(a,b,c,d,"pointerlockerror")},fa:(a,b,c,d)=>Ob(a,b,c,d),S:(a,b,c,d)=>Pb(a,b,c,d,25,"touchcancel"),T:(a,b,c,d)=>Pb(a,b,c,d,23,"touchend"),U:(a,b,c,d)=>Pb(a,b,c,d,24,"touchmove"),V:(a,b,c,d)=>Pb(a,b,c,d,22,"touchstart"),N:(a,b,c,d)=>{lc(a,b,c,d,31,"webglcontextlost");return 0},M:(a,b,c,d)=>{lc(a,b,c,d,32,
"webglcontextrestored");return 0},Z:(a,b,c,d)=>(a=K(a))?"undefined"!=typeof a.onwheel?mc(a,b,c,d):-1:-4,Za:(a,b)=>{b>>=2;b={alpha:!!y[b],depth:!!y[b+1],stencil:!!y[b+2],antialias:!!y[b+3],premultipliedAlpha:!!y[b+4],preserveDrawingBuffer:!!y[b+5],powerPreference:nc[y[b+6]],failIfMajorPerformanceCaveat:!!y[b+7],Bc:y[b+8],jd:y[b+9],Fc:y[b+10],Vc:y[b+11],kd:y[b+12],md:y[b+13]};a=K(a);return!a||b.Vc?0:hc(a,b)},Wa:(a,b)=>{a=cc[a];b=b?J(b):"";b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==
b&&Qb(S);"OES_vertex_array_object"==b&&Rb(S);"WEBGL_draw_buffers"==b&&Ub(S);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&Vb(S);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&Wb(S);"WEBGL_multi_draw"==b&&(S.Yc=S.getExtension("WEBGL_multi_draw"));return!!a.vc.getExtension(b)},Xa:a=>jc(a)?0:-5,l:a=>S.activeTexture(a),va:(a,b)=>{S.attachShader(O[a],Q[b])},a:(a,b)=>{35051==a?S.Dc=b:35052==a&&(S.rc=b);S.bindBuffer(a,Zb[b])},i:(a,b)=>{S.bindFramebuffer(a,$b[b])},Ea:(a,b)=>{S.bindRenderbuffer(a,
ac[b])},k:(a,b)=>{S.bindSampler(a,R[b])},c:(a,b)=>{S.bindTexture(a,P[b])},L:a=>{S.bindVertexArray(bc[a])},H:(a,b,c,d)=>S.blendColor(a,b,c,d),I:(a,b)=>S.blendEquationSeparate(a,b),J:(a,b,c,d)=>S.blendFuncSeparate(a,b,c,d),kb:(a,b,c,d,e,h,g,l,n,p)=>S.blitFramebuffer(a,b,c,d,e,h,g,l,n,p),Ga:(a,b,c,d)=>{2<=V.version?c&&b?S.bufferData(a,x,d,c,b):S.bufferData(a,b,d):S.bufferData(a,c?x.subarray(c,c+b):b,d)},p:(a,b,c,d)=>{2<=V.version?c&&S.bufferSubData(a,b,x,d,c):S.bufferSubData(a,b,x.subarray(d,d+c))},
pa:a=>S.checkFramebufferStatus(a),Eb:(a,b,c,d)=>S.clearBufferfi(a,b,c,d),ma:(a,b,c)=>{S.clearBufferfv(a,b,A,c>>2)},Db:(a,b,c)=>{S.clearBufferiv(a,b,y,c>>2)},o:(a,b,c,d)=>{S.colorMask(!!a,!!b,!!c,!!d)},Hb:a=>{S.compileShader(Q[a])},Aa:(a,b,c,d,e,h,g,l)=>{2<=V.version?S.rc||!g?S.compressedTexImage2D(a,b,c,d,e,h,g,l):S.compressedTexImage2D(a,b,c,d,e,h,x,l,g):S.compressedTexImage2D(a,b,c,d,e,h,l?x.subarray(l,l+g):null)},ya:(a,b,c,d,e,h,g,l,n)=>{S.rc?S.compressedTexImage3D(a,b,c,d,e,h,g,l,n):S.compressedTexImage3D(a,
b,c,d,e,h,g,x,n,l)},Nb:()=>{var a=fc(O),b=S.createProgram();b.name=a;b.yc=b.wc=b.xc=0;b.Cc=1;O[a]=b;return a},Kb:a=>{var b=fc(Q);Q[b]=S.createShader(a);return b},E:a=>S.cullFace(a),Ka:(a,b)=>{for(var c=0;c<a;c++){var d=y[b+4*c>>2],e=Zb[d];e&&(S.deleteBuffer(e),e.name=0,Zb[d]=null,d==S.Dc&&(S.Dc=0),d==S.rc&&(S.rc=0))}},e:(a,b)=>{for(var c=0;c<a;++c){var d=y[b+4*c>>2],e=$b[d];e&&(S.deleteFramebuffer(e),e.name=0,$b[d]=null)}},q:a=>{if(a){var b=O[a];b?(S.deleteProgram(b),b.name=0,O[a]=null):T||=1281}},
C:(a,b)=>{for(var c=0;c<a;c++){var d=y[b+4*c>>2],e=ac[d];e&&(S.deleteRenderbuffer(e),e.name=0,ac[d]=null)}},n:(a,b)=>{for(var c=0;c<a;c++){var d=y[b+4*c>>2],e=R[d];e&&(S.deleteSampler(e),e.name=0,R[d]=null)}},A:a=>{if(a){var b=Q[a];b?(S.deleteShader(b),Q[a]=null):T||=1281}},D:(a,b)=>{for(var c=0;c<a;c++){var d=y[b+4*c>>2],e=P[d];e&&(S.deleteTexture(e),e.name=0,P[d]=null)}},Ia:(a,b)=>{for(var c=0;c<a;c++){var d=y[b+4*c>>2];S.deleteVertexArray(bc[d]);bc[d]=null}},w:a=>S.depthFunc(a),v:a=>{S.depthMask(!!a)},
d:a=>S.disable(a),K:a=>{S.disableVertexAttribArray(a)},mb:(a,b,c)=>{S.drawArrays(a,b,c)},nb:(a,b,c,d)=>{S.drawArraysInstanced(a,b,c,d)},oa:(a,b)=>{for(var c=oc[a],d=0;d<a;d++)c[d]=y[b+4*d>>2];S.drawBuffers(c)},ob:(a,b,c,d)=>{S.drawElements(a,b,c,d)},pb:(a,b,c,d,e)=>{S.drawElementsInstanced(a,b,c,d,e)},g:a=>S.enable(a),zb:a=>{S.enableVertexAttribArray(a)},qa:(a,b,c,d)=>{S.framebufferRenderbuffer(a,b,c,ac[d])},m:(a,b,c,d,e)=>{S.framebufferTexture2D(a,b,c,P[d],e)},y:(a,b,c,d,e)=>{S.framebufferTextureLayer(a,
b,P[c],d,e)},F:a=>S.frontFace(a),Ha:(a,b)=>{U(a,b,"createBuffer",Zb)},ra:(a,b)=>{U(a,b,"createFramebuffer",$b)},Fa:(a,b)=>{U(a,b,"createRenderbuffer",ac)},wa:(a,b)=>{U(a,b,"createSampler",R)},Ca:(a,b)=>{U(a,b,"createTexture",P)},Ra:(a,b)=>{U(a,b,"createVertexArray",bc)},Fb:(a,b)=>S.getAttribLocation(O[a],b?J(b):""),b:(a,b)=>qc(a,b),Lb:(a,b,c,d)=>{a=S.getProgramInfoLog(O[a]);null===a&&(a="(unknown error)");b=0<b&&d?M(a,d,b):0;c&&(y[c>>2]=b)},ua:(a,b,c)=>{if(c)if(a>=Yb)T||=1281;else if(a=O[a],35716==
b)a=S.getProgramInfoLog(a),null===a&&(a="(unknown error)"),y[c>>2]=a.length+1;else if(35719==b){if(!a.yc)for(b=0;b<S.getProgramParameter(a,35718);++b)a.yc=Math.max(a.yc,S.getActiveUniform(a,b).name.length+1);y[c>>2]=a.yc}else if(35722==b){if(!a.wc)for(b=0;b<S.getProgramParameter(a,35721);++b)a.wc=Math.max(a.wc,S.getActiveAttrib(a,b).name.length+1);y[c>>2]=a.wc}else if(35381==b){if(!a.xc)for(b=0;b<S.getProgramParameter(a,35382);++b)a.xc=Math.max(a.xc,S.getActiveUniformBlockName(a,b).length+1);y[c>>
2]=a.xc}else y[c>>2]=S.getProgramParameter(a,b);else T||=1281},Gb:(a,b,c,d)=>{a=S.getShaderInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?M(a,d,b):0;c&&(y[c>>2]=b)},sa:(a,b,c)=>{c?35716==b?(a=S.getShaderInfoLog(Q[a]),null===a&&(a="(unknown error)"),y[c>>2]=a?a.length+1:0):35720==b?(a=S.getShaderSource(Q[a]),y[c>>2]=a?a.length+1:0):y[c>>2]=S.getShaderParameter(Q[a],b):T||=1281},Pa:(a,b)=>{if(2>V.version)return T||=1282,0;var c=dc[a];if(c)return 0>b||b>=c.length?(T||=1281,0):c[b];switch(a){case 7939:return c=
pc().map(sc),c=dc[a]=c,0>b||b>=c.length?(T||=1281,0):c[b];default:return T||=1280,0}},s:(a,b)=>{b=b?J(b):"";if(a=O[a]){var c=a,d=c.uc,e=c.Tc,h;if(!d)for(c.uc=d={},c.Sc={},h=0;h<S.getProgramParameter(c,35718);++h){var g=S.getActiveUniform(c,h);var l=g.name;g=g.size;var n=tc(l);n=0<n?l.slice(0,n):l;var p=c.Cc;c.Cc+=g;e[n]=[g,p];for(l=0;l<g;++l)d[p]=l,c.Sc[p++]=n}c=a.uc;d=0;e=b;h=tc(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.Tc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||S.getUniformLocation(a,
b)))return d}else T||=1281;return-1},jb:(a,b,c)=>{for(var d=oc[b],e=0;e<b;e++)d[e]=y[c+4*e>>2];S.invalidateFramebuffer(a,d)},Mb:a=>{a=O[a];S.linkProgram(a);a.uc=0;a.Tc={}},Qa:(a,b)=>{3317==a&&(ec=b);S.pixelStorei(a,b)},G:(a,b)=>S.polygonOffset(a,b),lb:a=>S.readBuffer(a),Da:(a,b,c,d,e)=>S.renderbufferStorageMultisample(a,b,c,d,e),B:(a,b,c)=>{S.samplerParameterf(R[a],b,c)},f:(a,b,c)=>{S.samplerParameteri(R[a],b,c)},na:(a,b,c,d)=>S.scissor(a,b,c,d),Jb:(a,b,c,d)=>{for(var e="",h=0;h<b;++h){var g=(g=z[c+
4*h>>2])?J(g,d?z[d+4*h>>2]:void 0):"";e+=g}S.shaderSource(Q[a],e)},Na:(a,b,c)=>S.stencilFunc(a,b,c),la:(a,b,c,d)=>S.stencilFuncSeparate(a,b,c,d),u:a=>S.stencilMask(a),Ma:(a,b,c)=>S.stencilOp(a,b,c),ka:(a,b,c,d)=>S.stencilOpSeparate(a,b,c,d),za:(a,b,c,d,e,h,g,l,n)=>{if(2<=V.version)if(S.rc)S.texImage2D(a,b,c,d,e,h,g,l,n);else if(n){var p=uc(l);S.texImage2D(a,b,c,d,e,h,g,l,p,n>>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else S.texImage2D(a,b,c,d,e,h,g,l,null);else S.texImage2D(a,b,c,d,e,h,g,l,n?vc(l,g,d,
e,n):null)},xa:(a,b,c,d,e,h,g,l,n,p)=>{if(S.rc)S.texImage3D(a,b,c,d,e,h,g,l,n,p);else if(p){var t=uc(n);S.texImage3D(a,b,c,d,e,h,g,l,n,t,p>>>31-Math.clz32(t.BYTES_PER_ELEMENT))}else S.texImage3D(a,b,c,d,e,h,g,l,n,null)},Ba:(a,b,c)=>S.texParameteri(a,b,c),ib:(a,b,c,d,e,h,g,l,n)=>{if(2<=V.version)if(S.rc)S.texSubImage2D(a,b,c,d,e,h,g,l,n);else if(n){var p=uc(l);S.texSubImage2D(a,b,c,d,e,h,g,l,p,n>>>31-Math.clz32(p.BYTES_PER_ELEMENT));return}n=n?vc(l,g,e,h,n):null;S.texSubImage2D(a,b,c,d,e,h,g,l,n)},
hb:(a,b,c,d,e,h,g,l,n,p,t)=>{if(S.rc)S.texSubImage3D(a,b,c,d,e,h,g,l,n,p,t);else if(t){var u=uc(p);S.texSubImage3D(a,b,c,d,e,h,g,l,n,p,u,t>>>31-Math.clz32(u.BYTES_PER_ELEMENT))}else S.texSubImage3D(a,b,c,d,e,h,g,l,n,p,null)},yb:(a,b,c)=>{if(2<=V.version)b&&S.uniform1fv(W(a),A,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=A[c+4*e>>2];else d=A.subarray(c>>2,c+4*b>>2);S.uniform1fv(W(a),d)}},ta:(a,b)=>{S.uniform1i(W(a),b)},ub:(a,b,c)=>{if(2<=V.version)b&&S.uniform1iv(W(a),y,c>>2,b);else{if(288>=
b)for(var d=wc[b-1],e=0;e<b;++e)d[e]=y[c+4*e>>2];else d=y.subarray(c>>2,c+4*b>>2);S.uniform1iv(W(a),d)}},xb:(a,b,c)=>{if(2<=V.version)b&&S.uniform2fv(W(a),A,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2];else d=A.subarray(c>>2,c+8*b>>2);S.uniform2fv(W(a),d)}},tb:(a,b,c)=>{if(2<=V.version)b&&S.uniform2iv(W(a),y,c>>2,2*b);else{if(144>=b)for(var d=wc[2*b-1],e=0;e<2*b;e+=2)d[e]=y[c+4*e>>2],d[e+1]=y[c+(4*e+4)>>2];else d=y.subarray(c>>2,c+8*b>>2);S.uniform2iv(W(a),
d)}},wb:(a,b,c)=>{if(2<=V.version)b&&S.uniform3fv(W(a),A,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2],d[e+2]=A[c+(4*e+8)>>2];else d=A.subarray(c>>2,c+12*b>>2);S.uniform3fv(W(a),d)}},sb:(a,b,c)=>{if(2<=V.version)b&&S.uniform3iv(W(a),y,c>>2,3*b);else{if(96>=b)for(var d=wc[3*b-1],e=0;e<3*b;e+=3)d[e]=y[c+4*e>>2],d[e+1]=y[c+(4*e+4)>>2],d[e+2]=y[c+(4*e+8)>>2];else d=y.subarray(c>>2,c+12*b>>2);S.uniform3iv(W(a),d)}},vb:(a,b,c)=>{if(2<=V.version)b&&S.uniform4fv(W(a),
A,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=A;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=A.subarray(c>>2,c+16*b>>2);S.uniform4fv(W(a),d)}},rb:(a,b,c)=>{if(2<=V.version)b&&S.uniform4iv(W(a),y,c>>2,4*b);else{if(72>=b)for(var d=wc[4*b-1],e=0;e<4*b;e+=4)d[e]=y[c+4*e>>2],d[e+1]=y[c+(4*e+4)>>2],d[e+2]=y[c+(4*e+8)>>2],d[e+3]=y[c+(4*e+12)>>2];else d=y.subarray(c>>2,c+16*b>>2);S.uniform4iv(W(a),d)}},qb:(a,b,c,d)=>{if(2<=V.version)b&&S.uniformMatrix4fv(W(a),
!!c,A,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],h=A;d>>=2;for(var g=0;g<16*b;g+=16){var l=d+g;e[g]=h[l];e[g+1]=h[l+1];e[g+2]=h[l+2];e[g+3]=h[l+3];e[g+4]=h[l+4];e[g+5]=h[l+5];e[g+6]=h[l+6];e[g+7]=h[l+7];e[g+8]=h[l+8];e[g+9]=h[l+9];e[g+10]=h[l+10];e[g+11]=h[l+11];e[g+12]=h[l+12];e[g+13]=h[l+13];e[g+14]=h[l+14];e[g+15]=h[l+15]}}else e=A.subarray(d>>2,d+64*b>>2);S.uniformMatrix4fv(W(a),!!c,e)}},j:a=>{a=O[a];S.useProgram(a);S.Uc=a},Bb:(a,b)=>{S.vertexAttribDivisor(a,b)},Cb:(a,b,c,d,e,h)=>{S.vertexAttribPointer(a,
b,c,!!d,e,h)},r:(a,b,c,d)=>S.viewport(a,b,c,d),Qb:function(){f.Lc=a=>{0!=Bc()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.Lc)},ab:function(){f.Rc=a=>{const b=a.clipboardData.getData("text");pb(()=>{const c=yc(b);Cc(c)})};window.addEventListener("paste",f.Rc)},Va:function(a){f.nd=[];a=a?J(a):"";a=document.getElementById(a);f.Mc=b=>{b.stopPropagation();b.preventDefault()};f.Nc=b=>{b.stopPropagation();b.preventDefault()};f.Oc=b=>{b.stopPropagation();b.preventDefault()};
f.Pc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;f.Qc=c;Dc(c.length);for(let e=0;e<c.length;e++)pb(()=>{const h=yc(c[e].name);Ec(e,h)});let d=0;b.shiftKey&&(d|=1);b.ctrlKey&&(d|=2);b.altKey&&(d|=4);b.metaKey&&(d|=8);Fc(b.clientX,b.clientY,d)};a.addEventListener("dragenter",f.Mc,!1);a.addEventListener("dragleave",f.Nc,!1);a.addEventListener("dragover",f.Oc,!1);a.addEventListener("drop",f.Pc,!1)},Ob:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},
Ua:function(a){const b=f.Qc;return 0>a||a>=b.length?0:b[a].size},Oa:function(a,b,c,d,e){const h=new FileReader;h.onload=g=>{g=g.target.result;g.byteLength>d?Gc(a,0,1,b,0,c,d,e):(x.set(new Uint8Array(g),c),Gc(a,1,0,b,g.byteLength,c,d,e))};h.onerror=()=>{Gc(a,0,2,b,0,c,d,e)};h.readAsArrayBuffer(f.Qc[a])},Ja:function(a){a=a?J(a):"";f.tc=document.getElementById(a);f.tc||console.log("sokol_app.h: invalid target:"+a);f.tc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+
a)},Pb:function(){window.removeEventListener("beforeunload",f.Lc)},Ya:function(){window.removeEventListener("paste",f.Rc)},La:function(a){a=a?J(a):"";a=document.getElementById(a);a.removeEventListener("dragenter",f.Mc);a.removeEventListener("dragleave",f.Nc);a.removeEventListener("dragover",f.Oc);a.removeEventListener("drop",f.Pc)},t:function(){f.tc&&f.tc.requestPointerLock&&f.tc.requestPointerLock()},Ib:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),
h=e.createImageData(a,b);h.data.set(x.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},bb:function(){const a=(new URLSearchParams(window.location.search)).entries();for(let b=a.next();!b.done;b=a.next()){const c=b.value[0],d=b.value[1];pb(()=>{const e=yc(c),h=yc(d);Hc(e,h)})}},db:function(){return f.qc?f.qc.bufferSize:0},Ab:function(a,b,c){f.lc=null;f.qc=null;"undefined"!==
typeof AudioContext?f.lc=new AudioContext({sampleRate:a,latencyHint:"interactive"}):(f.lc=null,console.log("sokol_audio.h: no WebAudio support"));return f.lc?(console.log("sokol_audio.h: sample rate ",f.lc.sampleRate),f.qc=f.lc.createScriptProcessor(c,0,b),f.qc.onaudioprocess=d=>{const e=d.outputBuffer.length,h=Ic(e);if(h){const g=d.outputBuffer.numberOfChannels;for(let l=0;l<g;l++){const n=d.outputBuffer.getChannelData(l);for(let p=0;p<e;p++)n[p]=A[(h>>2)+(g*p+l)]}}},f.qc.connect(f.lc.destination),
a=()=>{f.lc&&"suspended"===f.lc.state&&f.lc.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchend",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},fb:function(){return f.lc?f.lc.sampleRate:0},ja:function(){const a=f.lc;null!==a&&(f.qc&&f.qc.disconnect(),a.close(),f.lc=null,f.qc=null)},cb:function(){if(f.lc)return"suspended"===f.lc.state?1:0},x:function(a,b,c,d,e,h){b=b?J(b):"";const g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";
const l=0<d;l&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));g.onreadystatechange=function(){if(g.readyState==XMLHttpRequest.DONE)if(206==g.status||200==g.status&&!l){const n=new Uint8Array(g.response),p=n.length;p<=h?(x.set(n,e),Jc(a,d,p)):Kc(a)}else Lc(a,g.status)};g.send()},ia:function(a,b){b=b?J(b):"";const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==c.status){const d=c.getResponseHeader("Content-Length");Mc(a,d)}else Lc(a,
c.status)};c.send()},ha:function(a,b){b=b?J(b):"";switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}},Z=function(){function a(c){Z=c.exports;oa=Z.Rb;sa();Hb=Z.hc;ua.unshift(Z.Sb);C--;f.monitorRunDependencies?.(C);0==C&&(null!==ya&&(clearInterval(ya),ya=null),za&&(c=za,za=null,c()));return Z}var b={a:Nc};C++;f.monitorRunDependencies?.(C);if(f.instantiateWasm)try{return f.instantiateWasm(b,a)}catch(c){return q(`Module.instantiateWasm callback failed with error: ${c}`),
!1}Fa(b,function(c){a(c.instance)});return{}}();f._fs_emsc_alloc=a=>(f._fs_emsc_alloc=Z.Tb)(a);var N=a=>(N=Z.Ub)(a);f._fs_emsc_load_snapshot_callback=(a,b,c)=>(f._fs_emsc_load_snapshot_callback=Z.Vb)(a,b,c);
var Cc=f.__sapp_emsc_onpaste=a=>(Cc=f.__sapp_emsc_onpaste=Z.Wb)(a),Bc=f.__sapp_html5_get_ask_leave_site=()=>(Bc=f.__sapp_html5_get_ask_leave_site=Z.Xb)(),Dc=f.__sapp_emsc_begin_drop=a=>(Dc=f.__sapp_emsc_begin_drop=Z.Yb)(a),Ec=f.__sapp_emsc_drop=(a,b)=>(Ec=f.__sapp_emsc_drop=Z.Zb)(a,b),Fc=f.__sapp_emsc_end_drop=(a,b,c)=>(Fc=f.__sapp_emsc_end_drop=Z._b)(a,b,c),Gc=f.__sapp_emsc_invoke_fetch_cb=(a,b,c,d,e,h,g,l)=>(Gc=f.__sapp_emsc_invoke_fetch_cb=Z.$b)(a,b,c,d,e,h,g,l),Oc=f._main=(a,b)=>(Oc=f._main=Z.ac)(a,
b),Ic=f.__saudio_emsc_pull=a=>(Ic=f.__saudio_emsc_pull=Z.bc)(a),Hc=f.__sargs_add_kvp=(a,b)=>(Hc=f.__sargs_add_kvp=Z.cc)(a,b),Mc=f.__sfetch_emsc_head_response=(a,b)=>(Mc=f.__sfetch_emsc_head_response=Z.dc)(a,b),Jc=f.__sfetch_emsc_get_response=(a,b,c)=>(Jc=f.__sfetch_emsc_get_response=Z.ec)(a,b,c),Lc=f.__sfetch_emsc_failed_http_status=(a,b)=>(Lc=f.__sfetch_emsc_failed_http_status=Z.fc)(a,b),Kc=f.__sfetch_emsc_failed_buffer_too_small=a=>(Kc=f.__sfetch_emsc_failed_buffer_too_small=Z.gc)(a),nb=()=>(nb=
Z.ic)(),ob=a=>(ob=Z.jc)(a),xc=a=>(xc=Z.kc)(a);f.___start_em_js=50400;f.___stop_em_js=62858;var Pc;za=function Qc(){Pc||Rc();Pc||(za=Qc)};function Sc(a=[]){var b=Oc;a.unshift(ca);var c=a.length,d=xc(4*(c+1)),e=d;a.forEach(g=>{z[e>>2]=yc(g);e+=4});z[e>>2]=0;try{var h=b(c,d);$a(h)}catch(g){Ya(g)}}
function Rc(){var a=ba;function b(){if(!Pc&&(Pc=!0,f.calledRun=!0,!v)){Ga(ua);Ga(va);if(f.onRuntimeInitialized)f.onRuntimeInitialized();Tc&&Sc(a);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var c=f.postRun.shift();wa.unshift(c)}Ga(wa)}}if(!(0<C)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)xa();Ga(ta);0<C||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},
1)):b())}}if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Tc=!0;f.noInitialRun&&(Tc=!1);Rc();
