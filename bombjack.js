var f;f||=typeof Module != 'undefined' ? Module : {};var aa="object"==typeof window,ba="function"==typeof importScripts,ca="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,da=Object.assign({},f),ea=[],fa="./this.program",ha=(a,b)=>{throw b;},h="",ia,ja;
if(ca){var fs=require("fs"),ka=require("path");h=__dirname+"/";ja=a=>{a=la(a)?new URL(a):ka.normalize(a);return fs.readFileSync(a)};ia=a=>{a=la(a)?new URL(a):ka.normalize(a);return new Promise((b,c)=>{fs.readFile(a,void 0,(d,e)=>{d?c(d):b(e.buffer)})})};!f.thisProgram&&1<process.argv.length&&(fa=process.argv[1].replace(/\\/g,"/"));ea=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=f);process.on("uncaughtException",a=>{if(!("unwind"===a||a instanceof ma||a.context instanceof ma))throw a;
});ha=(a,b)=>{process.exitCode=a;throw b;}}else if(aa||ba)ba?h=self.location.href:"undefined"!=typeof document&&document.currentScript&&(h=document.currentScript.src),h=h.startsWith("blob:")?"":h.substr(0,h.replace(/[?#].*/,"").lastIndexOf("/")+1),ba&&(ja=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ia=a=>la(a)?new Promise((b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{(200==
d.status||0==d.status&&d.response)&&c(d.response);b(d.status)};d.onerror=b;d.send(null)}):fetch(a,{credentials:"same-origin"}).then(b=>b.ok?b.arrayBuffer():Promise.reject(Error(b.status+" : "+b.url)));f.print||console.log.bind(console);var m=f.printErr||console.error.bind(console);Object.assign(f,da);da=null;f.arguments&&(ea=f.arguments);f.thisProgram&&(fa=f.thisProgram);f.quit&&(ha=f.quit);var q;f.wasmBinary&&(q=f.wasmBinary);var na,r=!1,t,w,x,oa,pa,y,z,A,B;
function qa(){var a=na.buffer;f.HEAP8=w=new Int8Array(a);f.HEAP16=oa=new Int16Array(a);f.HEAPU8=x=new Uint8Array(a);f.HEAPU16=pa=new Uint16Array(a);f.HEAP32=y=new Int32Array(a);f.HEAPU32=z=new Uint32Array(a);f.HEAPF32=A=new Float32Array(a);f.HEAPF64=B=new Float64Array(a)}var ra=[],sa=[],ta=[],ua=[];function va(){var a=f.preRun.shift();ra.unshift(a)}var C=0,wa=null,D=null;
function xa(a){f.onAbort?.(a);a="Aborted("+a+")";m(a);r=!0;t=1;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}var ya=a=>a.startsWith("data:application/octet-stream;base64,"),la=a=>a.startsWith("file://"),za;function Aa(a){if(a==za&&q)return new Uint8Array(q);if(ja)return ja(a);throw"both async and sync fetching of the wasm failed";}function Ba(a){return q?Promise.resolve().then(()=>Aa(a)):ia(a).then(b=>new Uint8Array(b),()=>Aa(a))}
function Ca(a,b,c){return Ba(a).then(d=>WebAssembly.instantiate(d,b)).then(c,d=>{m(`failed to asynchronously prepare wasm: ${d}`);xa(d)})}function Da(a,b){var c=za;q||"function"!=typeof WebAssembly.instantiateStreaming||ya(c)||la(c)||ca||"function"!=typeof fetch?Ca(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){m(`wasm streaming compile failed: ${e}`);m("falling back to ArrayBuffer instantiation");return Ca(c,a,b)}))}
function ma(a){this.name="ExitStatus";this.message=`Program terminated with exit(${a})`;this.status=a}
var Ea=a=>{for(;0<a.length;)a.shift()(f)},Fa=f.noExitRuntime||!0,Pa=(a,b)=>{Ga=a;Ha=b;if(Ia)if(Ja||=!0,0==a)E=function(){var d=Math.max(0,Ka+b-La())|0;setTimeout(Ma,d)};else if(1==a)E=function(){Na(Ma)};else if(2==a){if("undefined"==typeof Oa)if("undefined"==typeof setImmediate){var c=[];addEventListener("message",d=>{if("setimmediate"===d.data||"setimmediate"===d.data.target)d.stopPropagation(),c.shift()()},!0);Oa=function(d){c.push(d);if(ba){let e;(e=f).setImmediates??(e.setImmediates=[]);f.setImmediates.push(d);
postMessage({target:"setimmediate"})}else postMessage("setimmediate","*")}}else Oa=setImmediate;E=function(){Oa(Ma)}}},La;La=()=>performance.now();
var Xa=(a,b,c,d,e)=>{Ia=a;Qa=d;var k=F;Ja=!1;Ma=function(){if(!r)if(0<Ra.length){var g=Ra.shift();g.dd(g.Zc);if(Sa){var l=Sa,n=0==l%1?l-1:Math.floor(l);Sa=g.ad?n:(8*l+(n+.5))/9}f.setStatus&&(g=f.statusMessage||"Please wait...",l=Sa,n=Ta.cd,l?l<n?f.setStatus("{message} ({expected - remaining}/{expected})"):f.setStatus(g):f.setStatus(""));k<F||setTimeout(Ma,0)}else if(!(k<F))if(Ua=Ua+1|0,1==Ga&&1<Ha&&0!=Ua%Ha)E();else{0==Ga&&(Ka=La());if(!(r||f.preMainLoop&&!1===f.preMainLoop())){if(!r)try{if(a(),!Fa)try{t=
g=t,Va(g)}catch(p){Wa(p)}}catch(p){Wa(p)}f.postMainLoop?.()}k<F||("object"==typeof SDL&&SDL.audio?.jd?.(),E())}};e||(b&&0<b?Pa(0,1E3/b):Pa(1,1),E());if(c)throw"unwind";},Wa=a=>{a instanceof ma||"unwind"==a||ha(1,a)},Va=a=>{t=a;Fa||(f.onExit?.(a),r=!0);ha(a,new ma(a))},Ya=a=>{t=a;Va(a)},Ja=!1,E=null,F=0,Ia=null,Qa=0,Ga=0,Ha=0,Ua=0,Ra=[];function Za(){E=null;F++}var Ta={},Ka,Ma,Sa,$a=!1,ab=!1,bb=[];
function cb(){function a(){ab=document.pointerLockElement===f.canvas||document.mozPointerLockElement===f.canvas||document.webkitPointerLockElement===f.canvas||document.msPointerLockElement===f.canvas}if(!db){db=!0;var b=f.canvas;b&&(b.requestPointerLock=b.requestPointerLock||b.mozRequestPointerLock||b.webkitRequestPointerLock||b.msRequestPointerLock||(()=>{}),b.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||document.msExitPointerLock||(()=>{}),
b.exitPointerLock=b.exitPointerLock.bind(document),document.addEventListener("pointerlockchange",a,!1),document.addEventListener("mozpointerlockchange",a,!1),document.addEventListener("webkitpointerlockchange",a,!1),document.addEventListener("mspointerlockchange",a,!1),f.elementPointerLock&&b.addEventListener("click",c=>{!ab&&f.canvas.requestPointerLock&&(f.canvas.requestPointerLock(),c.preventDefault())},!1))}}var eb=!1,fb=void 0,G=void 0;
function gb(){if(!$a)return!1;(document.exitFullscreen||document.cancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.webkitCancelFullScreen||(()=>{})).apply(document,[]);return!0}var hb=0;function Na(a){if("function"==typeof requestAnimationFrame)requestAnimationFrame(a);else{var b=Date.now();if(0===hb)hb=b+1E3/60;else for(;b+2>=hb;)hb+=1E3/60;setTimeout(a,Math.max(hb-b,0))}}var ib=[];function jb(){var a=f.canvas;ib.forEach(b=>b(a.width,a.height))}
function kb(a,b,c){b&&c?(a.Xc=b,a.Uc=c):(b=a.Xc,c=a.Uc);var d=b,e=c;f.forcedAspectRatio&&0<f.forcedAspectRatio&&(d/e<f.forcedAspectRatio?d=Math.round(e*f.forcedAspectRatio):e=Math.round(d/f.forcedAspectRatio));if((document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===a.parentNode&&"undefined"!=typeof screen){var k=Math.min(screen.width/d,screen.height/e);d=Math.round(d*k);e=Math.round(e*
k)}G?(a.width!=d&&(a.width=d),a.height!=e&&(a.height=e),"undefined"!=typeof a.style&&(a.style.removeProperty("width"),a.style.removeProperty("height"))):(a.width!=b&&(a.width=b),a.height!=c&&(a.height=c),"undefined"!=typeof a.style&&(d!=b||e!=c?(a.style.setProperty("width",d+"px","important"),a.style.setProperty("height",e+"px","important")):(a.style.removeProperty("width"),a.style.removeProperty("height"))))}var Oa,db,lb=0,mb=[];
function nb(){if(navigator.userActivation?navigator.userActivation.isActive:lb&&ob.yc)for(var a=0;a<mb.length;++a){var b=mb[a];mb.splice(a,1);--a;b.nd(...b.$c)}}var H=[];function pb(a){var b=H[a];b.target.removeEventListener(b.lc,b.Fc,b.mc);H.splice(a,1)}function I(a){if(!a.target)return-4;if(a.nc)a.Fc=function(c){++lb;ob=a;nb();a.oc(c);nb();--lb},a.target.addEventListener(a.lc,a.Fc,a.mc),H.push(a);else for(var b=0;b<H.length;++b)H[b].target==a.target&&H[b].lc==a.lc&&pb(b--);return 0}
function qb(a){return a?a==window?"#window":a==screen?"#screen":a?.nodeName||"":""}
var ob,rb,sb,tb,ub,vb,wb,xb,yb="undefined"!=typeof TextDecoder?new TextDecoder:void 0,J=(a,b)=>{var c=x,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&yb)return yb.decode(c.subarray(a,b));for(d="";a<b;){var e=c[a++];if(e&128){var k=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|k<<6|g:(e&7)<<18|k<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d},
zb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0],K=a=>{a=2<a?a?J(a):"":a;return zb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)},Ab=a=>0>zb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0},Bb=[],Cb,L=a=>{var b=Bb[a];b||(a>=Bb.length&&(Bb.length=a+1),Bb[a]=b=Cb.get(a));return b},M=(a,b,c)=>{var d=x;if(!(0<c))return 0;var e=b;c=b+c-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var l=a.charCodeAt(++k);g=65536+((g&
1023)<<10)|l&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0;return b-e},Db=(a,b,c,d,e,k)=>{rb||=N(256);a={target:K(a),lc:k,nc:d,oc:(g=event)=>{var l=g.target.id?g.target.id:"",n=rb;M(qb(g.target),n+0,128);M(l,n+128,128);L(d)(e,n,b)&&g.preventDefault()},mc:c};return I(a)},Eb=(a,b,c,d,e,k)=>{sb||=N(160);a={target:K(a),
lc:k,nc:d,oc:g=>{var l=sb;B[l>>3]=g.timeStamp;var n=l>>2;y[n+2]=g.location;w[n+12]=g.ctrlKey;w[n+13]=g.shiftKey;w[n+14]=g.altKey;w[n+15]=g.metaKey;w[n+16]=g.repeat;y[n+5]=g.charCode;y[n+6]=g.keyCode;y[n+7]=g.which;M(g.key||"",l+32,32);M(g.code||"",l+64,32);M(g.char||"",l+96,32);M(g.locale||"",l+128,32);L(d)(e,l,b)&&g.preventDefault()},mc:c};return I(a)},Fb=(a,b,c)=>{B[a>>3]=b.timeStamp;a>>=2;y[a+2]=b.screenX;y[a+3]=b.screenY;y[a+4]=b.clientX;y[a+5]=b.clientY;w[a+24]=b.ctrlKey;w[a+25]=b.shiftKey;w[a+
26]=b.altKey;w[a+27]=b.metaKey;oa[2*a+14]=b.button;oa[2*a+15]=b.buttons;y[a+8]=b.movementX;y[a+9]=b.movementY;c=Ab(c);y[a+10]=b.clientX-(c.left|0);y[a+11]=b.clientY-(c.top|0)},Gb=(a,b,c,d,e,k)=>{tb||=N(64);a=K(a);return I({target:a,yc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,lc:k,nc:d,oc:(g=event)=>{Fb(tb,g,a);L(d)(e,tb,b)&&g.preventDefault()},mc:c})},Hb=(a,b,c,d,e)=>{ub||=N(257);return I({target:a,lc:e,nc:d,oc:(k=event)=>{var g=ub,l=document.pointerLockElement||document.rc||document.Ic||
document.Hc;w[g]=!!l;var n=l?.id||"";M(qb(l),g+1,128);M(n,g+129,128);L(d)(20,g,b)&&k.preventDefault()},mc:c})},Ib=(a,b,c,d,e)=>I({target:a,lc:e,nc:d,oc:(k=event)=>{L(d)(38,0,b)&&k.preventDefault()},mc:c}),Jb=(a,b,c,d)=>{vb||=N(36);a=K(a);return I({target:a,lc:"resize",nc:d,oc:(e=event)=>{if(e.target==a){var k=document.body;if(k){var g=vb;y[g>>2]=0;y[g+4>>2]=k.clientWidth;y[g+8>>2]=k.clientHeight;y[g+12>>2]=innerWidth;y[g+16>>2]=innerHeight;y[g+20>>2]=outerWidth;y[g+24>>2]=outerHeight;y[g+28>>2]=pageXOffset|
0;y[g+32>>2]=pageYOffset|0;L(d)(10,g,b)&&e.preventDefault()}}},mc:c})},Kb=(a,b,c,d,e,k)=>{wb||=N(1552);a=K(a);return I({target:a,yc:"touchstart"==k||"touchend"==k,lc:k,nc:d,oc:g=>{for(var l,n={},p=g.touches,u=0;u<p.length;++u)l=p[u],l.Gc=l.Jc=0,n[l.identifier]=l;for(u=0;u<g.changedTouches.length;++u)l=g.changedTouches[u],l.Gc=1,n[l.identifier]=l;for(u=0;u<g.targetTouches.length;++u)n[g.targetTouches[u].identifier].Jc=1;p=wb;B[p>>3]=g.timeStamp;var v=p>>2;w[v+12]=g.ctrlKey;w[v+13]=g.shiftKey;w[v+14]=
g.altKey;w[v+15]=g.metaKey;v+=4;var Nb=Ab(a),Ob=0;for(u in n)if(l=n[u],y[v]=l.identifier,y[v+1]=l.screenX,y[v+2]=l.screenY,y[v+3]=l.clientX,y[v+4]=l.clientY,y[v+5]=l.pageX,y[v+6]=l.pageY,w[v+28]=l.Gc,w[v+29]=l.Jc,y[v+8]=l.clientX-(Nb.left|0),y[v+9]=l.clientY-(Nb.top|0),v+=12,31<++Ob)break;y[p+8>>2]=Ob;L(d)(e,p,b)&&g.preventDefault()},mc:c})},Lb=a=>{var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=(c,d)=>b.vertexAttribDivisorANGLE(c,d),a.drawArraysInstanced=(c,d,e,k)=>b.drawArraysInstancedANGLE(c,
d,e,k),a.drawElementsInstanced=(c,d,e,k,g)=>b.drawElementsInstancedANGLE(c,d,e,k,g))},Mb=a=>{var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=()=>b.createVertexArrayOES(),a.deleteVertexArray=c=>b.deleteVertexArrayOES(c),a.bindVertexArray=c=>b.bindVertexArrayOES(c),a.isVertexArray=c=>b.isVertexArrayOES(c))},Pb=a=>{var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=(c,d)=>b.drawBuffersWEBGL(c,d))},Qb=a=>{a.bd=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")},
Rb=a=>{a.ed=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")},Sb=a=>{var b="ANGLE_instanced_arrays EXT_blend_minmax EXT_disjoint_timer_query EXT_frag_depth EXT_shader_texture_lod EXT_sRGB OES_element_index_uint OES_fbo_render_mipmap OES_standard_derivatives OES_texture_float OES_texture_half_float OES_texture_half_float_linear OES_vertex_array_object WEBGL_color_buffer_float WEBGL_depth_texture WEBGL_draw_buffers EXT_color_buffer_float EXT_conservative_depth EXT_disjoint_timer_query_webgl2 EXT_texture_norm16 NV_shader_noperspective_interpolation WEBGL_clip_cull_distance EXT_color_buffer_half_float EXT_depth_clamp EXT_float_blend EXT_texture_compression_bptc EXT_texture_compression_rgtc EXT_texture_filter_anisotropic KHR_parallel_shader_compile OES_texture_float_linear WEBGL_blend_func_extended WEBGL_compressed_texture_astc WEBGL_compressed_texture_etc WEBGL_compressed_texture_etc1 WEBGL_compressed_texture_s3tc WEBGL_compressed_texture_s3tc_srgb WEBGL_debug_renderer_info WEBGL_debug_shaders WEBGL_lose_context WEBGL_multi_draw".split(" ");
return(a.getSupportedExtensions()||[]).filter(c=>b.includes(c))},Tb=1,Ub=[],O=[],Vb=[],Wb=[],P=[],Q=[],Xb=[],Yb=[],R=[],Zb={},$b=4,ac=0,bc=a=>{for(var b=Tb++,c=a.length;c<b;c++)a[c]=null;return b},U=(a,b,c,d)=>{for(var e=0;e<a;e++){var k=S[c](),g=k&&bc(d);k?(k.name=g,d[g]=k):T||=1282;y[b+4*e>>2]=g}},dc=(a,b)=>{a.rc||(a.rc=a.getContext,a.getContext=function(d,e){e=a.rc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Ac?a.getContext("webgl2",b):a.getContext("webgl",b);return c?
cc(c,b):0},cc=(a,b)=>{var c=bc(Yb),d={handle:c,attributes:b,version:b.Ac,uc:a};a.canvas&&(a.canvas.Yc=d);Yb[c]=d;("undefined"==typeof b.Ec||b.Ec)&&ec(d);return c},fc=a=>{V=Yb[a];f.zc=S=V?.uc;return!(a&&!S)},ec=a=>{a||=V;if(!a.Vc){a.Vc=!0;var b=a.uc;Lb(b);Mb(b);Pb(b);Qb(b);Rb(b);2<=a.version&&(b.Dc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Dc)b.Dc=b.getExtension("EXT_disjoint_timer_query");b.Wc=b.getExtension("WEBGL_multi_draw");Sb(b).forEach(c=>{c.includes("lose_context")||
c.includes("debug")||b.getExtension(c)})}},gc={},T,V,hc=(a,b,c,d,e,k)=>{a={target:K(a),lc:k,nc:d,oc:(g=event)=>{L(d)(e,0,b)&&g.preventDefault()},mc:c};I(a)},ic=(a,b,c,d)=>{xb||=N(96);return I({target:a,yc:!0,lc:"wheel",nc:d,oc:(e=event)=>{var k=xb;Fb(k,e,a);B[k+64>>3]=e.deltaX;B[k+72>>3]=e.deltaY;B[k+80>>3]=e.deltaZ;y[k+88>>2]=e.deltaMode;L(d)(9,k,b)&&e.preventDefault()},mc:c})},jc=["default","low-power","high-performance"],kc=[];function lc(){var a=Sb(S);return a=a.concat(a.map(b=>"GL_"+b))}
var mc=(a,b)=>{if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=S.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){T||=1282;return}c=lc().length;break;case 33307:case 33308:if(2>V.version){T||=1280;return}c=33307==a?3:0}if(void 0===c)switch(d=S.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":T||=1280;return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:T||=1280;return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)y[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){T||=1280;m(`GL_INVALID_ENUM in glGet${0}v: Unknown object returned from WebGL getParameter(${a})! (error: ${e})`);return}}break;default:T||=1280;m(`GL_INVALID_ENUM in glGet${0}v: Native code calling glGet${0}v(${a}) and it returns ${d} of type ${typeof d}!`);return}y[b>>2]=c}else T||=1281},nc=
a=>{for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b},oc=a=>{var b=nc(a)+1,c=N(b);c&&M(a,c,b);return c},pc=a=>"]"==a.slice(-1)&&a.lastIndexOf("["),qc=a=>{a-=5120;return 0==a?w:1==a?x:2==a?oa:4==a?y:6==a?A:5==a||28922==a||28520==a||30779==a||30782==a?z:pa},rc=(a,b,c,d,e)=>{a=qc(a);b=d*((ac||c)*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*a.BYTES_PER_ELEMENT+$b-1&-$b);return a.subarray(e>>>31-Math.clz32(a.BYTES_PER_ELEMENT),
e+b>>>31-Math.clz32(a.BYTES_PER_ELEMENT))},W=a=>{var b=S.Sc;if(b){var c=b.tc[a];"number"==typeof c&&(b.tc[a]=c=S.getUniformLocation(b,b.Qc[a]+(0<c?`[${c}]`:"")));return c}T||=1282},X=[],sc=[],uc=a=>{var b=nc(a)+1,c=tc(b);M(a,c,b);return c},xc=a=>{var b=vc();a();wc(b)};
f.requestFullscreen=function(a,b){function c(){$a=!1;var k=d.parentNode;(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===k?(d.exitFullscreen=gb,fb&&d.requestPointerLock(),$a=!0,G?("undefined"!=typeof SDL&&(y[SDL.screen>>2]=z[SDL.screen>>2]|8388608),kb(f.canvas),jb()):kb(d)):(k.parentNode.insertBefore(d,k),k.parentNode.removeChild(k),G?("undefined"!=typeof SDL&&(y[SDL.screen>>2]=z[SDL.screen>>
2]&-8388609),kb(f.canvas),jb()):kb(d));f.onFullScreen?.($a);f.onFullscreen?.($a)}fb=a;G=b;"undefined"==typeof fb&&(fb=!0);"undefined"==typeof G&&(G=!1);var d=f.canvas;eb||(eb=!0,document.addEventListener("fullscreenchange",c,!1),document.addEventListener("mozfullscreenchange",c,!1),document.addEventListener("webkitfullscreenchange",c,!1),document.addEventListener("MSFullscreenChange",c,!1));var e=document.createElement("div");d.parentNode.insertBefore(e,d);e.appendChild(d);e.requestFullscreen=e.requestFullscreen||
e.mozRequestFullScreen||e.msRequestFullscreen||(e.webkitRequestFullscreen?()=>e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):null)||(e.webkitRequestFullScreen?()=>e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):null);e.requestFullscreen()};f.requestAnimationFrame=Na;f.setCanvasSize=function(a,b,c){kb(f.canvas,a,b);c||jb()};f.pauseMainLoop=Za;f.resumeMainLoop=function(){F++;var a=Ga,b=Ha,c=Ia;Ia=null;Xa(c,0,!1,Qa,!0);Pa(a,b);E()};
f.getUserMedia=function(a){let b;(b=window).getUserMedia||(b.getUserMedia=navigator.getUserMedia||navigator.mozGetUserMedia);window.getUserMedia(a)};f.createContext=function(a,b,c,d){if(b&&f.zc&&a==f.canvas)return f.zc;var e;if(b){var k={antialias:!1,alpha:!1,Ac:"undefined"!=typeof WebGL2RenderingContext?2:1};if(d)for(var g in d)k[g]=d[g];if("undefined"!=typeof gc&&(e=dc(a,k)))var l=Yb[e].uc}else l=a.getContext("2d");if(!l)return null;c&&(f.zc=l,b&&fc(e),f.od=b,bb.forEach(n=>n()),cb());return l};
for(var S,Y=0;32>Y;++Y)kc.push(Array(Y));var yc=new Float32Array(288);for(Y=0;288>=Y;++Y)X[Y]=yc.subarray(0,Y);var zc=new Int32Array(288);for(Y=0;288>=Y;++Y)sc[Y]=zc.subarray(0,Y);
var Lc={gb:()=>{xa("")},fb:(a,b,c)=>x.copyWithin(a,b,b+c),Ta:()=>{Za();Ia=null},fa:()=>"number"==typeof devicePixelRatio&&devicePixelRatio||1,ha:(a,b,c)=>{a=K(a);if(!a)return-4;a=Ab(a);B[b>>3]=a.width;B[c>>3]=a.height;return 0},z:La,Va:()=>performance.now(),$a:(a,b)=>{function c(d){L(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},eb:a=>{var b=x.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math;d=Math.max(a,d);a:{e=
(e.min.call(e,2147483648,d+(65536-d%65536)%65536)-na.buffer.byteLength+65535)/65536;try{na.grow(e);qa();var k=1;break a}catch(g){}k=void 0}if(k)return!0}return!1},P:(a,b,c,d)=>Db(a,b,c,d,12,"blur"),ea:(a,b,c)=>{a=K(a);if(!a)return-4;a.width=b;a.height=c;return 0},Q:(a,b,c,d)=>Db(a,b,c,d,13,"focus"),Z:(a,b,c,d)=>Eb(a,b,c,d,2,"keydown"),X:(a,b,c,d)=>Eb(a,b,c,d,1,"keypress"),Y:(a,b,c,d)=>Eb(a,b,c,d,3,"keyup"),ab:(a,b,c)=>{a=L(a);Xa(a,b,c)},da:(a,b,c,d)=>Gb(a,b,c,d,5,"mousedown"),aa:(a,b,c,d)=>Gb(a,b,
c,d,33,"mouseenter"),$:(a,b,c,d)=>Gb(a,b,c,d,34,"mouseleave"),ba:(a,b,c,d)=>Gb(a,b,c,d,8,"mousemove"),ca:(a,b,c,d)=>Gb(a,b,c,d,6,"mouseup"),S:(a,b,c,d)=>{if(!document||!document.body||!(document.body.requestPointerLock||document.body.rc||document.body.Ic||document.body.Hc))return-1;a=K(a);if(!a)return-4;Hb(a,b,c,d,"mozpointerlockchange");Hb(a,b,c,d,"webkitpointerlockchange");Hb(a,b,c,d,"mspointerlockchange");return Hb(a,b,c,d,"pointerlockchange")},R:(a,b,c,d)=>{if(!document||!(document.body.requestPointerLock||
document.body.rc||document.body.Ic||document.body.Hc))return-1;a=K(a);if(!a)return-4;Ib(a,b,c,d,"mozpointerlockerror");Ib(a,b,c,d,"webkitpointerlockerror");Ib(a,b,c,d,"mspointerlockerror");return Ib(a,b,c,d,"pointerlockerror")},ga:(a,b,c,d)=>Jb(a,b,c,d),T:(a,b,c,d)=>Kb(a,b,c,d,25,"touchcancel"),U:(a,b,c,d)=>Kb(a,b,c,d,23,"touchend"),V:(a,b,c,d)=>Kb(a,b,c,d,24,"touchmove"),W:(a,b,c,d)=>Kb(a,b,c,d,22,"touchstart"),O:(a,b,c,d)=>{hc(a,b,c,d,31,"webglcontextlost");return 0},N:(a,b,c,d)=>{hc(a,b,c,d,32,
"webglcontextrestored");return 0},_:(a,b,c,d)=>(a=K(a))?"undefined"!=typeof a.onwheel?ic(a,b,c,d):-1:-4,_a:(a,b)=>{var c=b>>2;b={alpha:!!w[b+0],depth:!!w[b+1],stencil:!!w[b+2],antialias:!!w[b+3],premultipliedAlpha:!!w[b+4],preserveDrawingBuffer:!!w[b+5],powerPreference:jc[y[c+2]],failIfMajorPerformanceCaveat:!!w[b+12],Ac:y[c+4],gd:y[c+5],Ec:w[b+24],Tc:w[b+25],hd:y[c+7],kd:w[b+32]};a=K(a);return!a||b.Tc?0:dc(a,b)},Ya:(a,b)=>{a=Yb[a];b=b?J(b):"";b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==
b&&Lb(S);"OES_vertex_array_object"==b&&Mb(S);"WEBGL_draw_buffers"==b&&Pb(S);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&Qb(S);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&Rb(S);"WEBGL_multi_draw"==b&&(S.Wc=S.getExtension("WEBGL_multi_draw"));return!!a.uc.getExtension(b)},Za:a=>fc(a)?0:-5,j:a=>S.activeTexture(a),A:(a,b)=>{S.attachShader(O[a],Q[b])},b:(a,b)=>{35051==a?S.Cc=b:35052==a&&(S.qc=b);S.bindBuffer(a,Ub[b])},a:(a,b,c)=>{S.bindBufferBase(a,b,Ub[c])},k:(a,b)=>{S.bindFramebuffer(a,
Vb[b])},Ga:(a,b)=>{S.bindRenderbuffer(a,Wb[b])},i:(a,b)=>{S.bindSampler(a,R[b])},c:(a,b)=>{S.bindTexture(a,P[b])},M:a=>{S.bindVertexArray(Xb[a])},I:(a,b,c,d)=>S.blendColor(a,b,c,d),J:(a,b)=>S.blendEquationSeparate(a,b),K:(a,b,c,d)=>S.blendFuncSeparate(a,b,c,d),kb:(a,b,c,d,e,k,g,l,n,p)=>S.blitFramebuffer(a,b,c,d,e,k,g,l,n,p),Ia:(a,b,c,d)=>{2<=V.version?c&&b?S.bufferData(a,x,d,c,b):S.bufferData(a,b,d):S.bufferData(a,c?x.subarray(c,c+b):b,d)},C:(a,b,c,d)=>{2<=V.version?c&&S.bufferSubData(a,b,x,d,c):
S.bufferSubData(a,b,x.subarray(d,d+c))},qa:a=>S.checkFramebufferStatus(a),Fb:(a,b,c,d)=>S.clearBufferfi(a,b,c,d),ma:(a,b,c)=>{S.clearBufferfv(a,b,A,c>>2)},Eb:(a,b,c)=>{S.clearBufferiv(a,b,y,c>>2)},o:(a,b,c,d)=>{S.colorMask(!!a,!!b,!!c,!!d)},Jb:a=>{S.compileShader(Q[a])},Ba:(a,b,c,d,e,k,g,l)=>{2<=V.version?S.qc||!g?S.compressedTexImage2D(a,b,c,d,e,k,g,l):S.compressedTexImage2D(a,b,c,d,e,k,x,l,g):S.compressedTexImage2D(a,b,c,d,e,k,l?x.subarray(l,l+g):null)},za:(a,b,c,d,e,k,g,l,n)=>{S.qc?S.compressedTexImage3D(a,
b,c,d,e,k,g,l,n):S.compressedTexImage3D(a,b,c,d,e,k,g,x,n,l)},wa:()=>{var a=bc(O),b=S.createProgram();b.name=a;b.xc=b.vc=b.wc=0;b.Bc=1;O[a]=b;return a},Lb:a=>{var b=bc(Q);Q[b]=S.createShader(a);return b},F:a=>S.cullFace(a),Ma:(a,b)=>{for(var c=0;c<a;c++){var d=y[b+4*c>>2],e=Ub[d];e&&(S.deleteBuffer(e),e.name=0,Ub[d]=null,d==S.Cc&&(S.Cc=0),d==S.qc&&(S.qc=0))}},f:(a,b)=>{for(var c=0;c<a;++c){var d=y[b+4*c>>2],e=Vb[d];e&&(S.deleteFramebuffer(e),e.name=0,Vb[d]=null)}},p:a=>{if(a){var b=O[a];b?(S.deleteProgram(b),
b.name=0,O[a]=null):T||=1281}},D:(a,b)=>{for(var c=0;c<a;c++){var d=y[b+4*c>>2],e=Wb[d];e&&(S.deleteRenderbuffer(e),e.name=0,Wb[d]=null)}},n:(a,b)=>{for(var c=0;c<a;c++){var d=y[b+4*c>>2],e=R[d];e&&(S.deleteSampler(e),e.name=0,R[d]=null)}},y:a=>{if(a){var b=Q[a];b?(S.deleteShader(b),Q[a]=null):T||=1281}},E:(a,b)=>{for(var c=0;c<a;c++){var d=y[b+4*c>>2],e=P[d];e&&(S.deleteTexture(e),e.name=0,P[d]=null)}},Ka:(a,b)=>{for(var c=0;c<a;c++){var d=y[b+4*c>>2];S.deleteVertexArray(Xb[d]);Xb[d]=null}},v:a=>
S.depthFunc(a),u:a=>{S.depthMask(!!a)},e:a=>S.disable(a),L:a=>{S.disableVertexAttribArray(a)},mb:(a,b,c)=>{S.drawArrays(a,b,c)},nb:(a,b,c,d)=>{S.drawArraysInstanced(a,b,c,d)},pa:(a,b)=>{for(var c=kc[a],d=0;d<a;d++)c[d]=y[b+4*d>>2];S.drawBuffers(c)},pb:(a,b,c,d)=>{S.drawElements(a,b,c,d)},qb:(a,b,c,d,e)=>{S.drawElementsInstanced(a,b,c,d,e)},h:a=>S.enable(a),Bb:a=>{S.enableVertexAttribArray(a)},ra:(a,b,c,d)=>{S.framebufferRenderbuffer(a,b,c,Wb[d])},m:(a,b,c,d,e)=>{S.framebufferTexture2D(a,b,c,P[d],
e)},x:(a,b,c,d,e)=>{S.framebufferTextureLayer(a,b,P[c],d,e)},G:a=>S.frontFace(a),Ja:(a,b)=>{U(a,b,"createBuffer",Ub)},sa:(a,b)=>{U(a,b,"createFramebuffer",Vb)},Ha:(a,b)=>{U(a,b,"createRenderbuffer",Wb)},xa:(a,b)=>{U(a,b,"createSampler",R)},Ea:(a,b)=>{U(a,b,"createTexture",P)},Sa:(a,b)=>{U(a,b,"createVertexArray",Xb)},Gb:(a,b)=>S.getAttribLocation(O[a],b?J(b):""),d:(a,b)=>mc(a,b),Mb:(a,b,c,d)=>{a=S.getProgramInfoLog(O[a]);null===a&&(a="(unknown error)");b=0<b&&d?M(a,d,b):0;c&&(y[c>>2]=b)},va:(a,b,
c)=>{if(c)if(a>=Tb)T||=1281;else if(a=O[a],35716==b)a=S.getProgramInfoLog(a),null===a&&(a="(unknown error)"),y[c>>2]=a.length+1;else if(35719==b){if(!a.xc)for(b=0;b<S.getProgramParameter(a,35718);++b)a.xc=Math.max(a.xc,S.getActiveUniform(a,b).name.length+1);y[c>>2]=a.xc}else if(35722==b){if(!a.vc)for(b=0;b<S.getProgramParameter(a,35721);++b)a.vc=Math.max(a.vc,S.getActiveAttrib(a,b).name.length+1);y[c>>2]=a.vc}else if(35381==b){if(!a.wc)for(b=0;b<S.getProgramParameter(a,35382);++b)a.wc=Math.max(a.wc,
S.getActiveUniformBlockName(a,b).length+1);y[c>>2]=a.wc}else y[c>>2]=S.getProgramParameter(a,b);else T||=1281},Hb:(a,b,c,d)=>{a=S.getShaderInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?M(a,d,b):0;c&&(y[c>>2]=b)},ta:(a,b,c)=>{c?35716==b?(a=S.getShaderInfoLog(Q[a]),null===a&&(a="(unknown error)"),y[c>>2]=a?a.length+1:0):35720==b?(a=S.getShaderSource(Q[a]),y[c>>2]=a?a.length+1:0):y[c>>2]=S.getShaderParameter(Q[a],b):T||=1281},Qa:(a,b)=>{if(2>V.version)return T||=1282,0;var c=Zb[a];if(c)return 0>
b||b>=c.length?(T||=1281,0):c[b];switch(a){case 7939:return c=lc().map(oc),c=Zb[a]=c,0>b||b>=c.length?(T||=1281,0):c[b];default:return T||=1280,0}},r:(a,b)=>{b=b?J(b):"";if(a=O[a]){var c=a,d=c.tc,e=c.Rc,k;if(!d)for(c.tc=d={},c.Qc={},k=0;k<S.getProgramParameter(c,35718);++k){var g=S.getActiveUniform(c,k);var l=g.name;g=g.size;var n=pc(l);n=0<n?l.slice(0,n):l;var p=c.Bc;c.Bc+=g;e[n]=[g,p];for(l=0;l<g;++l)d[p]=l,c.Qc[p++]=n}c=a.tc;d=0;e=b;k=pc(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=
a.Rc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||S.getUniformLocation(a,b)))return d}else T||=1281;return-1},jb:(a,b,c)=>{for(var d=kc[b],e=0;e<b;e++)d[e]=y[c+4*e>>2];S.invalidateFramebuffer(a,d)},Nb:a=>{a=O[a];S.linkProgram(a);a.tc=0;a.Rc={}},Ra:(a,b)=>{3317==a?$b=b:3314==a&&(ac=b);S.pixelStorei(a,b)},H:(a,b)=>S.polygonOffset(a,b),lb:a=>S.readBuffer(a),Fa:(a,b,c,d,e)=>S.renderbufferStorageMultisample(a,b,c,d,e),B:(a,b,c)=>{S.samplerParameterf(R[a],b,c)},g:(a,b,c)=>{S.samplerParameteri(R[a],b,c)},na:(a,b,c,
d)=>S.scissor(a,b,c,d),Kb:(a,b,c,d)=>{for(var e="",k=0;k<b;++k){var g=(g=z[c+4*k>>2])?J(g,d?z[d+4*k>>2]:void 0):"";e+=g}S.shaderSource(Q[a],e)},Oa:(a,b,c)=>S.stencilFunc(a,b,c),la:(a,b,c,d)=>S.stencilFuncSeparate(a,b,c,d),t:a=>S.stencilMask(a),Na:(a,b,c)=>S.stencilOp(a,b,c),ka:(a,b,c,d)=>S.stencilOpSeparate(a,b,c,d),Aa:(a,b,c,d,e,k,g,l,n)=>{if(2<=V.version){if(S.qc){S.texImage2D(a,b,c,d,e,k,g,l,n);return}if(n){var p=qc(l);n>>>=31-Math.clz32(p.BYTES_PER_ELEMENT);S.texImage2D(a,b,c,d,e,k,g,l,p,n);return}}p=
n?rc(l,g,d,e,n):null;S.texImage2D(a,b,c,d,e,k,g,l,p)},ya:(a,b,c,d,e,k,g,l,n,p)=>{if(S.qc)S.texImage3D(a,b,c,d,e,k,g,l,n,p);else if(p){var u=qc(n);S.texImage3D(a,b,c,d,e,k,g,l,n,u,p>>>31-Math.clz32(u.BYTES_PER_ELEMENT))}else S.texImage3D(a,b,c,d,e,k,g,l,n,null)},Ca:(a,b,c)=>S.texParameteri(a,b,c),ib:(a,b,c,d,e,k,g,l,n)=>{if(2<=V.version){if(S.qc){S.texSubImage2D(a,b,c,d,e,k,g,l,n);return}if(n){var p=qc(l);S.texSubImage2D(a,b,c,d,e,k,g,l,p,n>>>31-Math.clz32(p.BYTES_PER_ELEMENT));return}}n=n?rc(l,g,
e,k,n):null;S.texSubImage2D(a,b,c,d,e,k,g,l,n)},hb:(a,b,c,d,e,k,g,l,n,p,u)=>{if(S.qc)S.texSubImage3D(a,b,c,d,e,k,g,l,n,p,u);else if(u){var v=qc(p);S.texSubImage3D(a,b,c,d,e,k,g,l,n,p,v,u>>>31-Math.clz32(v.BYTES_PER_ELEMENT))}else S.texSubImage3D(a,b,c,d,e,k,g,l,n,p,null)},Ab:(a,b,c)=>{if(2<=V.version)b&&S.uniform1fv(W(a),A,c>>2,b);else{if(288>=b)for(var d=X[b],e=0;e<b;++e)d[e]=A[c+4*e>>2];else d=A.subarray(c>>2,c+4*b>>2);S.uniform1fv(W(a),d)}},ua:(a,b)=>{S.uniform1i(W(a),b)},vb:(a,b,c)=>{if(2<=V.version)b&&
S.uniform1iv(W(a),y,c>>2,b);else{if(288>=b)for(var d=sc[b],e=0;e<b;++e)d[e]=y[c+4*e>>2];else d=y.subarray(c>>2,c+4*b>>2);S.uniform1iv(W(a),d)}},yb:(a,b,c)=>{if(2<=V.version)b&&S.uniform2fv(W(a),A,c>>2,2*b);else{if(144>=b)for(var d=X[2*b],e=0;e<2*b;e+=2)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2];else d=A.subarray(c>>2,c+8*b>>2);S.uniform2fv(W(a),d)}},ub:(a,b,c)=>{if(2<=V.version)b&&S.uniform2iv(W(a),y,c>>2,2*b);else{if(144>=b)for(var d=sc[2*b],e=0;e<2*b;e+=2)d[e]=y[c+4*e>>2],d[e+1]=y[c+(4*e+4)>>2];else d=
y.subarray(c>>2,c+8*b>>2);S.uniform2iv(W(a),d)}},xb:(a,b,c)=>{if(2<=V.version)b&&S.uniform3fv(W(a),A,c>>2,3*b);else{if(96>=b)for(var d=X[3*b],e=0;e<3*b;e+=3)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2],d[e+2]=A[c+(4*e+8)>>2];else d=A.subarray(c>>2,c+12*b>>2);S.uniform3fv(W(a),d)}},tb:(a,b,c)=>{if(2<=V.version)b&&S.uniform3iv(W(a),y,c>>2,3*b);else{if(96>=b)for(var d=sc[3*b],e=0;e<3*b;e+=3)d[e]=y[c+4*e>>2],d[e+1]=y[c+(4*e+4)>>2],d[e+2]=y[c+(4*e+8)>>2];else d=y.subarray(c>>2,c+12*b>>2);S.uniform3iv(W(a),
d)}},wb:(a,b,c)=>{if(2<=V.version)b&&S.uniform4fv(W(a),A,c>>2,4*b);else{if(72>=b){var d=X[4*b],e=A;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=e[g];d[k+1]=e[g+1];d[k+2]=e[g+2];d[k+3]=e[g+3]}}else d=A.subarray(c>>2,c+16*b>>2);S.uniform4fv(W(a),d)}},sb:(a,b,c)=>{if(2<=V.version)b&&S.uniform4iv(W(a),y,c>>2,4*b);else{if(72>=b)for(var d=sc[4*b],e=0;e<4*b;e+=4)d[e]=y[c+4*e>>2],d[e+1]=y[c+(4*e+4)>>2],d[e+2]=y[c+(4*e+8)>>2],d[e+3]=y[c+(4*e+12)>>2];else d=y.subarray(c>>2,c+16*b>>2);S.uniform4iv(W(a),d)}},
rb:(a,b,c,d)=>{if(2<=V.version)b&&S.uniformMatrix4fv(W(a),!!c,A,d>>2,16*b);else{if(18>=b){var e=X[16*b],k=A;d>>=2;for(var g=0;g<16*b;g+=16){var l=d+g;e[g]=k[l];e[g+1]=k[l+1];e[g+2]=k[l+2];e[g+3]=k[l+3];e[g+4]=k[l+4];e[g+5]=k[l+5];e[g+6]=k[l+6];e[g+7]=k[l+7];e[g+8]=k[l+8];e[g+9]=k[l+9];e[g+10]=k[l+10];e[g+11]=k[l+11];e[g+12]=k[l+12];e[g+13]=k[l+13];e[g+14]=k[l+14];e[g+15]=k[l+15]}}else e=A.subarray(d>>2,d+64*b>>2);S.uniformMatrix4fv(W(a),!!c,e)}},l:a=>{a=O[a];S.useProgram(a);S.Sc=a},Cb:(a,b)=>{S.vertexAttribDivisor(a,
b)},Db:(a,b,c,d,e,k)=>{S.vertexAttribPointer(a,b,c,!!d,e,k)},q:(a,b,c,d)=>S.viewport(a,b,c,d),Pb:function(){f.Kc=a=>{0!=Ac()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.Kc)},bb:function(){f.Pc=a=>{const b=a.clipboardData.getData("text");xc(()=>{const c=uc(b);Bc(c)})};window.addEventListener("paste",f.Pc)},Wa:function(a){f.ld=[];a=a?J(a):"";a=document.getElementById(a);f.Lc=b=>{b.stopPropagation();b.preventDefault()};f.Mc=b=>{b.stopPropagation();b.preventDefault()};
f.Nc=b=>{b.stopPropagation();b.preventDefault()};f.Oc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;f.md=c;Cc(c.length);for(let e=0;e<c.length;e++)xc(()=>{const k=uc(c[e].name);Dc(e,k)});let d=0;b.shiftKey&&(d|=1);b.ctrlKey&&(d|=2);b.altKey&&(d|=4);b.metaKey&&(d|=8);Ec(b.clientX,b.clientY,d)};a.addEventListener("dragenter",f.Lc,!1);a.addEventListener("dragleave",f.Mc,!1);a.addEventListener("dragover",f.Nc,!1);a.addEventListener("drop",f.Oc,!1)},La:function(){const a=document.getElementById("sokol-app-favicon");
a&&document.head.removeChild(a)},Pa:function(a){a=a?J(a):"";f.sc=document.getElementById(a);f.sc||console.log("sokol_app.h: invalid target:"+a);f.sc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ob:function(){window.removeEventListener("beforeunload",f.Kc)},Xa:function(){window.removeEventListener("paste",f.Pc)},Ua:function(a){a=a?J(a):"";a=document.getElementById(a);a.removeEventListener("dragenter",f.Lc);a.removeEventListener("dragleave",f.Mc);a.removeEventListener("dragover",
f.Nc);a.removeEventListener("drop",f.Oc)},s:function(){f.sc&&f.sc.requestPointerLock&&f.sc.requestPointerLock()},Da:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(x.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},cb:function(){const a=(new URLSearchParams(window.location.search)).entries();
for(let b=a.next();!b.done;b=a.next()){const c=b.value[0],d=b.value[1];xc(()=>{const e=uc(c),k=uc(d);Fc(e,k)})}},ob:function(){return f.pc?f.pc.bufferSize:0},Ib:function(a,b,c){f.kc=null;f.pc=null;"undefined"!==typeof AudioContext?f.kc=new AudioContext({sampleRate:a,latencyHint:"interactive"}):(f.kc=null,console.log("sokol_audio.h: no WebAudio support"));return f.kc?(console.log("sokol_audio.h: sample rate ",f.kc.sampleRate),f.pc=f.kc.createScriptProcessor(c,0,b),f.pc.onaudioprocess=d=>{const e=d.outputBuffer.length,
k=Gc(e);if(k){const g=d.outputBuffer.numberOfChannels;for(let l=0;l<g;l++){const n=d.outputBuffer.getChannelData(l);for(let p=0;p<e;p++)n[p]=A[(k>>2)+(g*p+l)]}}},f.pc.connect(f.kc.destination),a=()=>{f.kc&&"suspended"===f.kc.state&&f.kc.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchend",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},zb:function(){return f.kc?f.kc.sampleRate:0},oa:function(){const a=f.kc;null!==a&&(f.pc&&f.pc.disconnect(),
a.close(),f.kc=null,f.pc=null)},db:function(){if(f.kc)return"suspended"===f.kc.state?1:0},w:function(a,b,c,d,e,k){b=b?J(b):"";const g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";const l=0<d;l&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));g.onreadystatechange=function(){if(g.readyState==XMLHttpRequest.DONE)if(206==g.status||200==g.status&&!l){const n=new Uint8Array(g.response),p=n.length;p<=k?(x.set(n,e),Hc(a,d,p)):Ic(a)}else Jc(a,g.status)};g.send()},ja:function(a,b){b=b?
J(b):"";const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==c.status){const d=c.getResponseHeader("Content-Length");Kc(a,d)}else Jc(a,c.status)};c.send()},ia:function(a,b){b=b?J(b):"";switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}},Z=function(){function a(c){Z=c.exports;na=Z.Qb;qa();Cb=Z.gc;sa.unshift(Z.Rb);C--;f.monitorRunDependencies?.(C);0==C&&(null!==
wa&&(clearInterval(wa),wa=null),D&&(c=D,D=null,c()));return Z}var b={a:Lc};C++;f.monitorRunDependencies?.(C);if(f.instantiateWasm)try{return f.instantiateWasm(b,a)}catch(c){return m(`Module.instantiateWasm callback failed with error: ${c}`),!1}za||=ya("bombjack.wasm")?"bombjack.wasm":f.locateFile?f.locateFile("bombjack.wasm",h):h+"bombjack.wasm";Da(b,function(c){a(c.instance)});return{}}();f._fs_emsc_alloc=a=>(f._fs_emsc_alloc=Z.Sb)(a);var N=a=>(N=Z.Tb)(a);
f._fs_emsc_load_snapshot_callback=(a,b,c)=>(f._fs_emsc_load_snapshot_callback=Z.Ub)(a,b,c);var Bc=f.__sapp_emsc_onpaste=a=>(Bc=f.__sapp_emsc_onpaste=Z.Vb)(a),Ac=f.__sapp_html5_get_ask_leave_site=()=>(Ac=f.__sapp_html5_get_ask_leave_site=Z.Wb)(),Cc=f.__sapp_emsc_begin_drop=a=>(Cc=f.__sapp_emsc_begin_drop=Z.Xb)(a),Dc=f.__sapp_emsc_drop=(a,b)=>(Dc=f.__sapp_emsc_drop=Z.Yb)(a,b),Ec=f.__sapp_emsc_end_drop=(a,b,c)=>(Ec=f.__sapp_emsc_end_drop=Z.Zb)(a,b,c);
f.__sapp_emsc_invoke_fetch_cb=(a,b,c,d,e,k,g,l)=>(f.__sapp_emsc_invoke_fetch_cb=Z._b)(a,b,c,d,e,k,g,l);
var Mc=f._main=(a,b)=>(Mc=f._main=Z.$b)(a,b),Gc=f.__saudio_emsc_pull=a=>(Gc=f.__saudio_emsc_pull=Z.ac)(a),Fc=f.__sargs_add_kvp=(a,b)=>(Fc=f.__sargs_add_kvp=Z.bc)(a,b),Kc=f.__sfetch_emsc_head_response=(a,b)=>(Kc=f.__sfetch_emsc_head_response=Z.cc)(a,b),Hc=f.__sfetch_emsc_get_response=(a,b,c)=>(Hc=f.__sfetch_emsc_get_response=Z.dc)(a,b,c),Jc=f.__sfetch_emsc_failed_http_status=(a,b)=>(Jc=f.__sfetch_emsc_failed_http_status=Z.ec)(a,b),Ic=f.__sfetch_emsc_failed_buffer_too_small=a=>(Ic=f.__sfetch_emsc_failed_buffer_too_small=
Z.fc)(a),wc=a=>(wc=Z.hc)(a),tc=a=>(tc=Z.ic)(a),vc=()=>(vc=Z.jc)(),Nc;D=function Oc(){Nc||Pc();Nc||(D=Oc)};function Qc(a=[]){var b=Mc;a.unshift(fa);var c=a.length,d=tc(4*(c+1)),e=d;a.forEach(g=>{z[e>>2]=uc(g);e+=4});z[e>>2]=0;try{var k=b(c,d);Ya(k)}catch(g){Wa(g)}}
function Pc(){var a=ea;function b(){if(!Nc&&(Nc=!0,f.calledRun=!0,!r)){Ea(sa);Ea(ta);f.onRuntimeInitialized?.();Rc&&Qc(a);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var c=f.postRun.shift();ua.unshift(c)}Ea(ua)}}if(!(0<C)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)va();Ea(ra);0<C||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}
if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Rc=!0;f.noInitialRun&&(Rc=!1);Pc();
