var f;f||=typeof Module != 'undefined' ? Module : {};var aa="object"==typeof window,ba="undefined"!=typeof WorkerGlobalScope,ca="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node&&"renderer"!=process.type,da={...f},ea=[],fa="./this.program",ha=(a,b)=>{throw b;},k="",ia,ja;
if(ca){var fs=require("fs");require("path");k=__dirname+"/";ja=a=>{a=ka(a)?new URL(a):a;return fs.readFileSync(a)};ia=async a=>{a=ka(a)?new URL(a):a;return fs.readFileSync(a,void 0)};!f.thisProgram&&1<process.argv.length&&(fa=process.argv[1].replace(/\\/g,"/"));ea=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=f);ha=(a,b)=>{process.exitCode=a;throw b;}}else if(aa||ba)ba?k=self.location.href:"undefined"!=typeof document&&document.currentScript&&(k=document.currentScript.src),k=k.startsWith("blob:")?
"":k.slice(0,k.replace(/[?#].*/,"").lastIndexOf("/")+1),ba&&(ja=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ia=async a=>{if(ka(a))return new Promise((c,d)=>{var e=new XMLHttpRequest;e.open("GET",a,!0);e.responseType="arraybuffer";e.onload=()=>{200==e.status||0==e.status&&e.response?c(e.response):d(e.status)};e.onerror=d;e.send(null)});var b=await fetch(a,{credentials:"same-origin"});if(b.ok)return b.arrayBuffer();throw Error(b.status+
" : "+b.url);};f.print||console.log.bind(console);var m=f.printErr||console.error.bind(console);Object.assign(f,da);da=null;f.arguments&&(ea=f.arguments);f.thisProgram&&(fa=f.thisProgram);var la=f.wasmBinary,ma,p=!1,na,r,t,oa,pa,u,v,w,x,ka=a=>a.startsWith("file://");
function qa(){var a=ma.buffer;f.HEAP8=r=new Int8Array(a);f.HEAP16=oa=new Int16Array(a);f.HEAPU8=t=new Uint8Array(a);f.HEAPU16=pa=new Uint16Array(a);f.HEAP32=u=new Int32Array(a);f.HEAPU32=v=new Uint32Array(a);f.HEAPF32=w=new Float32Array(a);f.HEAPF64=x=new Float64Array(a);f.HEAP64=new BigInt64Array(a);f.HEAPU64=new BigUint64Array(a)}var z=0,A=null;function ra(a){f.onAbort?.(a);a="Aborted("+a+")";m(a);p=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}var sa;
async function ta(a){if(!la)try{var b=await ia(a);return new Uint8Array(b)}catch{}if(a==sa&&la)a=new Uint8Array(la);else if(ja)a=ja(a);else throw"both async and sync fetching of the wasm failed";return a}async function ua(a,b){try{var c=await ta(a);return await WebAssembly.instantiate(c,b)}catch(d){m(`failed to asynchronously prepare wasm: ${d}`),ra(d)}}
async function va(a){var b=sa;if(!la&&"function"==typeof WebAssembly.instantiateStreaming&&!ka(b)&&!ca)try{var c=fetch(b,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(c,a)}catch(d){m(`wasm streaming compile failed: ${d}`),m("falling back to ArrayBuffer instantiation")}return ua(b,a)}class wa{name="ExitStatus";constructor(a){this.message=`Program terminated with exit(${a})`;this.status=a}}
var xa=a=>{for(;0<a.length;)a.shift()(f)},ya=[],za=[],Aa=()=>{var a=f.preRun.shift();za.unshift(a)},Ba=f.noExitRuntime||!0,Ca=0,B={},Da=a=>{a instanceof wa||"unwind"==a||ha(1,a)},Ea=a=>{na=a;Ba||0<Ca||(f.onExit?.(a),p=!0);ha(a,new wa(a))},Fa=a=>{na=a;Ea(a)},Ga=()=>{if(!(Ba||0<Ca))try{var a=na;na=a;Ea(a)}catch(b){Da(b)}},Ha=a=>{if(!p)try{a(),Ga()}catch(b){Da(b)}},Oa=(a,b)=>{Ia=a;Ja=b;if(C)if(Ka||=!0,0==a)E=function(){setTimeout(F,Math.max(0,La+b-performance.now())|0)};else if(1==a)E=function(){Ma(F)};
else if(2==a){if("undefined"==typeof Na)if("undefined"==typeof setImmediate){var c=[];addEventListener("message",d=>{if("setimmediate"===d.data||"setimmediate"===d.data.target)d.stopPropagation(),c.shift()()},!0);Na=d=>{c.push(d);if(ba){let e;(e=f).setImmediates??(e.setImmediates=[]);f.setImmediates.push(d);postMessage({target:"setimmediate"})}else postMessage("setimmediate","*")}}else Na=setImmediate;E=function(){Na(F)}}},Xa=(a,b,c,d,e)=>{function h(){return g<Pa?(Ga(),!1):!0}C=a;Qa=d;var g=Pa;Ka=
!1;F=function(){if(!p)if(0<Ra.length){var l=Ra.shift();l.Ed(l.td);if(Sa){var n=Sa,q=0==n%1?n-1:Math.floor(n);Sa=l.vd?q:(8*n+(q+.5))/9}f.setStatus&&(l=f.statusMessage||"Please wait...",n=Sa??0,q=Ta.Ad??0,n?n<q?f.setStatus("{message} ({expected - remaining}/{expected})"):f.setStatus(l):f.setStatus(""));h()&&setTimeout(F,0)}else if(h())if(Ua=Ua+1|0,1==Ia&&1<Ja&&0!=Ua%Ja)E();else{0==Ia&&(La=performance.now());a:if(!p){for(l of Va)if(!1===l())break a;Ha(a);for(n of Wa)n()}h()&&E()}};e||(0<b?Oa(0,1E3/b):
Oa(1,1),E());if(c)throw"unwind";},Ka=!1,E=null,Pa=0,C=null,Qa=0,Ia=0,Ja=0,Ua=0,Ra=[],Va=[],Wa=[];function Ya(){E=null;Pa++}var Za=0;function Ma(a){if("function"==typeof requestAnimationFrame)requestAnimationFrame(a);else{var b=Date.now();if(0===Za)Za=b+1E3/60;else for(;b+2>=Za;)Za+=1E3/60;setTimeout(a,Math.max(Za-b,0))}}
var Ta={},La,F,Na,Sa,$a="undefined"!=typeof TextDecoder?new TextDecoder:void 0,G=(a=0,b=NaN)=>{var c=t,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&$a)return $a.decode(c.subarray(a,b));for(d="";a<b;){var e=c[a++];if(e&128){var h=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d},
ab=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0],H=a=>{a=2<a?a?G(a):"":a;return ab[a]||("undefined"!=typeof document?document.querySelector(a):null)},bb=a=>0>ab.indexOf(a)?a.getBoundingClientRect():{left:0,top:0},cb=[],db,I=a=>{var b=cb[a];b||(cb[a]=b=db.get(a));return b};function eb(a){var b=J.uc[a];b.target.removeEventListener(b.tc,b.Xc,b.vc);J.uc.splice(a,1)}
function fb(){if(navigator.userActivation?navigator.userActivation.isActive:J.Kc&&J.od.Ic){var a=J.Ac;J.Ac=[];for(var b of a)b.Nc(...b.Tc)}}function K(a){if(!a.target)return-4;if(a.wc)a.Xc=function(c){++J.Kc;J.od=a;fb();a.xc(c);fb();--J.Kc},a.target.addEventListener(a.tc,a.Xc,a.vc),J.uc.push(a);else for(var b=0;b<J.uc.length;++b)J.uc[b].target==a.target&&J.uc[b].tc==a.tc&&eb(b--);return 0}function gb(a){return a?a==window?"#window":a==screen?"#screen":a?.nodeName||"":""}
var J={ud:0,Fd:0,Lc:0,Hc:0,Rc:0,Pc:0,Jc:0,yd:0,Kd:0,xd:0,Dd:0,Mc:0,Sd:0,Oc:0,Hd(a,b,c){r.set(r.subarray(b,b+c),a)},Md(){for(;J.uc.length;)eb(J.uc.length-1);J.Ac=[]},Kc:0,Ac:[],wd(a,b,c){function d(h,g){if(h.length!=g.length)return!1;for(var l in h)if(h[l]!=g[l])return!1;return!0}for(var e of J.Ac)if(e.Nc==a&&d(e.Tc,c))return;J.Ac.push({Nc:a,ad:b,Tc:c});J.Ac.sort((h,g)=>h.ad<g.ad)},Od(a){J.Ac=J.Ac.filter(b=>b.Nc!=a)},uc:[],Nd:(a,b)=>{for(var c=0;c<J.uc.length;++c)J.uc[c].target!=a||b&&b!=J.uc[c].tc||
eb(c--)},fullscreenEnabled(){return document.fullscreenEnabled||document.webkitFullscreenEnabled}},L=(a,b,c)=>{var d=t;if(!(0<c))return 0;var e=b;c=b+c-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var l=a.charCodeAt(++h);g=65536+((g&1023)<<10)|l&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|
g&63}}d[b]=0;return b-e},hb=(a,b,c,d,e,h)=>{J.Jc||(J.Jc=M(256));a={target:H(a),tc:h,wc:d,xc:(g=event)=>{var l=g.target.id?g.target.id:"",n=J.Jc;L(gb(g.target),n+0,128);L(l,n+128,128);I(d)(e,n,b)&&g.preventDefault()},vc:c};return K(a)},ib=(a,b,c,d,e,h)=>{J.Lc||(J.Lc=M(160));a={target:H(a),tc:h,wc:d,xc:g=>{var l=J.Lc;x[l>>3]=g.timeStamp;var n=l>>2;u[n+2]=g.location;r[l+12]=g.ctrlKey;r[l+13]=g.shiftKey;r[l+14]=g.altKey;r[l+15]=g.metaKey;r[l+16]=g.repeat;u[n+5]=g.charCode;u[n+6]=g.keyCode;u[n+7]=g.which;
L(g.key||"",l+32,32);L(g.code||"",l+64,32);L(g.char||"",l+96,32);L(g.locale||"",l+128,32);I(d)(e,l,b)&&g.preventDefault()},vc:c};return K(a)},jb=(a,b,c)=>{x[a>>3]=b.timeStamp;var d=a>>2;u[d+2]=b.screenX;u[d+3]=b.screenY;u[d+4]=b.clientX;u[d+5]=b.clientY;r[a+24]=b.ctrlKey;r[a+25]=b.shiftKey;r[a+26]=b.altKey;r[a+27]=b.metaKey;oa[2*d+14]=b.button;oa[2*d+15]=b.buttons;u[d+8]=b.movementX;u[d+9]=b.movementY;a=bb(c);u[d+10]=b.clientX-(a.left|0);u[d+11]=b.clientY-(a.top|0)},kb=(a,b,c,d,e,h)=>{J.Hc||(J.Hc=
M(64));a=H(a);return K({target:a,Ic:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,tc:h,wc:d,xc:(g=event)=>{jb(J.Hc,g,a);I(d)(e,J.Hc,b)&&g.preventDefault()},vc:c})},lb=(a,b,c,d,e)=>{J.Mc||(J.Mc=M(257));return K({target:a,tc:e,wc:d,xc:(h=event)=>{var g=J.Mc,l=document.pointerLockElement||document.Cc||document.ld||document.kd;r[g]=!!l;var n=l?.id||"";L(gb(l),g+1,128);L(n,g+129,128);I(d)(20,g,b)&&h.preventDefault()},vc:c})},mb=(a,b,c,d,e)=>K({target:a,tc:e,wc:d,xc:(h=event)=>{I(d)(38,0,b)&&h.preventDefault()},
vc:c}),nb=(a,b,c,d)=>{J.Pc||(J.Pc=M(36));a=H(a);return K({target:a,tc:"resize",wc:d,xc:(e=event)=>{if(e.target==a){var h=document.body;if(h){var g=J.Pc;u[g>>2]=0;u[g+4>>2]=h.clientWidth;u[g+8>>2]=h.clientHeight;u[g+12>>2]=innerWidth;u[g+16>>2]=innerHeight;u[g+20>>2]=outerWidth;u[g+24>>2]=outerHeight;u[g+28>>2]=pageXOffset|0;u[g+32>>2]=pageYOffset|0;I(d)(10,g,b)&&e.preventDefault()}}},vc:c})},ob=(a,b,c,d,e,h)=>{J.Oc||(J.Oc=M(1552));a=H(a);return K({target:a,Ic:"touchstart"==h||"touchend"==h,tc:h,wc:d,
xc:g=>{var l={},n=g.touches;for(var q of n)q.Yc=q.$c=0,l[q.identifier]=q;for(var y of g.changedTouches)y.Yc=1,l[y.identifier]=y;for(var O of g.targetTouches)l[O.identifier].$c=1;n=J.Oc;x[n>>3]=g.timeStamp;r[n+12]=g.ctrlKey;r[n+13]=g.shiftKey;r[n+14]=g.altKey;r[n+15]=g.metaKey;q=n+16;y=bb(a);O=0;for(let D of Object.values(l))if(l=q>>2,u[l]=D.identifier,u[l+1]=D.screenX,u[l+2]=D.screenY,u[l+3]=D.clientX,u[l+4]=D.clientY,u[l+5]=D.pageX,u[l+6]=D.pageY,r[q+28]=D.Yc,r[q+29]=D.$c,u[l+8]=D.clientX-(y.left|
0),u[l+9]=D.clientY-(y.top|0),q+=48,31<++O)break;u[n+8>>2]=O;I(d)(e,n,b)&&g.preventDefault()},vc:c})},N,pb=a=>{var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=(c,d)=>b.vertexAttribDivisorANGLE(c,d),a.drawArraysInstanced=(c,d,e,h)=>b.drawArraysInstancedANGLE(c,d,e,h),a.drawElementsInstanced=(c,d,e,h,g)=>b.drawElementsInstancedANGLE(c,d,e,h,g))},qb=a=>{var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=()=>b.createVertexArrayOES(),a.deleteVertexArray=c=>
b.deleteVertexArrayOES(c),a.bindVertexArray=c=>b.bindVertexArrayOES(c),a.isVertexArray=c=>b.isVertexArrayOES(c))},rb=a=>{var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=(c,d)=>b.drawBuffersWEBGL(c,d))},sb=a=>{var b="ANGLE_instanced_arrays EXT_blend_minmax EXT_disjoint_timer_query EXT_frag_depth EXT_shader_texture_lod EXT_sRGB OES_element_index_uint OES_fbo_render_mipmap OES_standard_derivatives OES_texture_float OES_texture_half_float OES_texture_half_float_linear OES_vertex_array_object WEBGL_color_buffer_float WEBGL_depth_texture WEBGL_draw_buffers EXT_color_buffer_float EXT_conservative_depth EXT_disjoint_timer_query_webgl2 EXT_texture_norm16 NV_shader_noperspective_interpolation WEBGL_clip_cull_distance EXT_clip_control EXT_color_buffer_half_float EXT_depth_clamp EXT_float_blend EXT_polygon_offset_clamp EXT_texture_compression_bptc EXT_texture_compression_rgtc EXT_texture_filter_anisotropic KHR_parallel_shader_compile OES_texture_float_linear WEBGL_blend_func_extended WEBGL_compressed_texture_astc WEBGL_compressed_texture_etc WEBGL_compressed_texture_etc1 WEBGL_compressed_texture_s3tc WEBGL_compressed_texture_s3tc_srgb WEBGL_debug_renderer_info WEBGL_debug_shaders WEBGL_lose_context WEBGL_multi_draw WEBGL_polygon_mode".split(" ");
return(a.getSupportedExtensions()||[]).filter(c=>b.includes(c))},tb=1,ub=[],P=[],vb=[],wb=[],Q=[],R=[],xb=[],yb=[],S=[],zb={},Ab=4,Bb=0,Cb=a=>{for(var b=tb++,c=a.length;c<b;c++)a[c]=null;return b},U=(a,b,c,d)=>{for(var e=0;e<a;e++){var h=N[c](),g=h&&Cb(d);h?(h.name=g,d[g]=h):T||=1282;u[b+4*e>>2]=g}},Eb=(a,b)=>{a.Cc||(a.Cc=a.getContext,a.getContext=function(d,e){e=a.Cc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Zc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?
Db(c,b):0},Db=(a,b)=>{var c=Cb(yb),d={handle:c,attributes:b,version:b.Zc,Sc:a};a.canvas&&(a.canvas.sd=d);yb[c]=d;("undefined"==typeof b.Wc||b.Wc)&&Fb(d);return c},Fb=a=>{a||=V;if(!a.rd){a.rd=!0;var b=a.Sc;b.Jd=b.getExtension("WEBGL_multi_draw");b.Cd=b.getExtension("EXT_polygon_offset_clamp");b.Bd=b.getExtension("EXT_clip_control");b.Td=b.getExtension("WEBGL_polygon_mode");pb(b);qb(b);rb(b);b.zd=b.getExtension("WEBGL_draw_instanced_base_vertex_base_instance");b.Gd=b.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance");
2<=a.version&&(b.Vc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Vc)b.Vc=b.getExtension("EXT_disjoint_timer_query");sb(b).forEach(c=>{c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}},T,V,Gb=(a,b,c,d,e,h)=>{a={target:H(a),tc:h,wc:d,xc:(g=event)=>{I(d)(e,0,b)&&g.preventDefault()},vc:c};K(a)},Hb=(a,b,c,d)=>{J.Rc||(J.Rc=M(96));return K({target:a,Ic:!0,tc:"wheel",wc:d,xc:(e=event)=>{var h=J.Rc;jb(h,e,a);x[h+64>>3]=e.deltaX;x[h+72>>3]=e.deltaY;x[h+80>>3]=e.deltaZ;
u[h+88>>2]=e.deltaMode;I(d)(9,h,b)&&e.preventDefault()},vc:c})},Ib=["default","low-power","high-performance"],Jb=[],Kb=()=>{var a=sb(N);return a=a.concat(a.map(b=>"GL_"+b))},Lb=(a,b)=>{if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=N.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){T||=1282;return}c=Kb().length;break;case 33307:case 33308:if(2>V.version){T||=1280;return}c=33307==a?3:0}if(void 0===c)switch(d=N.getParameter(a),
typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":T||=1280;return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=0;break;default:T||=1280;return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)u[b+
4*a>>2]=d[a];return}try{c=d.name|0}catch(e){T||=1280;m(`GL_INVALID_ENUM in glGet${0}v: Unknown object returned from WebGL getParameter(${a})! (error: ${e})`);return}}break;default:T||=1280;m(`GL_INVALID_ENUM in glGet${0}v: Native code calling glGet${0}v(${a}) and it returns ${d} of type ${typeof d}!`);return}u[b>>2]=c}else T||=1281},Mb=a=>{for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b},Nb=a=>{var b=Mb(a)+1,c=M(b);c&&L(a,c,
b);return c},Ob=a=>"]"==a.slice(-1)&&a.lastIndexOf("["),Pb=a=>{a-=5120;return 0==a?r:1==a?t:2==a?oa:4==a?u:6==a?w:5==a||28922==a||28520==a||30779==a||30782==a?v:pa},Qb=(a,b,c,d,e)=>{a=Pb(a);b=d*((Bb||c)*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*a.BYTES_PER_ELEMENT+Ab-1&-Ab);return a.subarray(e>>>31-Math.clz32(a.BYTES_PER_ELEMENT),e+b>>>31-Math.clz32(a.BYTES_PER_ELEMENT))},W=a=>{var b=N.pd;if(b){var c=b.Dc[a];"number"==typeof c&&(b.Dc[a]=c=N.getUniformLocation(b,b.md[a]+
(0<c?`[${c}]`:"")));return c}T||=1282},X=[],Rb=[],Tb=a=>{var b=Mb(a)+1,c=Sb(b);L(a,c,b);return c},Wb=a=>{var b=Ub();a();Vb(b)};f.requestAnimationFrame=Ma;f.pauseMainLoop=Ya;f.resumeMainLoop=function(){Pa++;var a=Ia,b=Ja,c=C;C=null;Xa(c,0,!1,Qa,!0);Oa(a,b);E()};f.preMainLoop&&Va.push(f.preMainLoop);f.postMainLoop&&Wa.push(f.postMainLoop);for(let a=0;32>a;++a)Jb.push(Array(a));for(var Xb=new Float32Array(288),Y=0;288>=Y;++Y)X[Y]=Xb.subarray(0,Y);var Yb=new Int32Array(288);
for(Y=0;288>=Y;++Y)Rb[Y]=Yb.subarray(0,Y);
var mc={jb:()=>ra(""),gb:()=>{Ba=!1;Ca=0},hb:(a,b)=>{B[a]&&(clearTimeout(B[a].id),delete B[a]);if(!b)return 0;var c=setTimeout(()=>{delete B[a];Ha(()=>Zb(a,performance.now()))},b);B[a]={id:c,Rd:b};return 0},Ua:()=>{Ya();C=null},da:()=>"number"==typeof devicePixelRatio&&devicePixelRatio||1,fa:(a,b,c)=>{a=H(a);if(!a)return-4;a=bb(a);x[b>>3]=a.width;x[c>>3]=a.height;return 0},y:()=>performance.now(),Va:()=>performance.now(),$a:(a,b)=>{function c(d){I(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},
ib:a=>{var b=t.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);a:{d=(Math.min(2147483648,65536*Math.ceil(Math.max(a,d)/65536))-ma.buffer.byteLength+65535)/65536|0;try{ma.grow(d);qa();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},N:(a,b,c,d)=>hb(a,b,c,d,12,"blur"),ca:(a,b,c)=>{a=H(a);if(!a)return-4;a.width=b;a.height=c;return 0},O:(a,b,c,d)=>hb(a,b,c,d,13,"focus"),X:(a,b,c,d)=>ib(a,b,c,d,2,"keydown"),V:(a,b,c,d)=>ib(a,b,c,d,1,"keypress"),
W:(a,b,c,d)=>ib(a,b,c,d,3,"keyup"),ab:(a,b,c)=>{a=I(a);Xa(a,b,c)},ba:(a,b,c,d)=>kb(a,b,c,d,5,"mousedown"),_:(a,b,c,d)=>kb(a,b,c,d,33,"mouseenter"),Z:(a,b,c,d)=>kb(a,b,c,d,34,"mouseleave"),$:(a,b,c,d)=>kb(a,b,c,d,8,"mousemove"),aa:(a,b,c,d)=>kb(a,b,c,d,6,"mouseup"),Q:(a,b,c,d)=>{if(!document||!document.body||!(document.body.requestPointerLock||document.body.Cc||document.body.ld||document.body.kd))return-1;a=H(a);if(!a)return-4;lb(a,b,c,d,"mozpointerlockchange");lb(a,b,c,d,"webkitpointerlockchange");
lb(a,b,c,d,"mspointerlockchange");return lb(a,b,c,d,"pointerlockchange")},P:(a,b,c,d)=>{if(!document||!(document.body.requestPointerLock||document.body.Cc||document.body.ld||document.body.kd))return-1;a=H(a);if(!a)return-4;mb(a,b,c,d,"mozpointerlockerror");mb(a,b,c,d,"webkitpointerlockerror");mb(a,b,c,d,"mspointerlockerror");return mb(a,b,c,d,"pointerlockerror")},ea:(a,b,c,d)=>nb(a,b,c,d),R:(a,b,c,d)=>ob(a,b,c,d,25,"touchcancel"),S:(a,b,c,d)=>ob(a,b,c,d,23,"touchend"),T:(a,b,c,d)=>ob(a,b,c,d,24,"touchmove"),
U:(a,b,c,d)=>ob(a,b,c,d,22,"touchstart"),M:(a,b,c,d)=>{Gb(a,b,c,d,31,"webglcontextlost");return 0},L:(a,b,c,d)=>{Gb(a,b,c,d,32,"webglcontextrestored");return 0},Y:(a,b,c,d)=>(a=H(a))?"undefined"!=typeof a.onwheel?Hb(a,b,c,d):-1:-4,_a:(a,b)=>{var c=b>>2;b={alpha:!!r[b+0],depth:!!r[b+1],stencil:!!r[b+2],antialias:!!r[b+3],premultipliedAlpha:!!r[b+4],preserveDrawingBuffer:!!r[b+5],powerPreference:Ib[u[c+2]],failIfMajorPerformanceCaveat:!!r[b+12],Zc:u[c+4],Id:u[c+5],Wc:r[b+24],qd:r[b+25],Ld:u[c+7],Pd:r[b+
32]};a=H(a);return!a||b.qd?0:Eb(a,b)},Za:a=>{V=yb[a];f.ctx=N=V?.Sc;return!a||N?0:-5},o:a=>N.activeTexture(a),z:(a,b)=>{N.attachShader(P[a],R[b])},b:(a,b)=>{35051==a?N.Uc=b:35052==a&&(N.zc=b);N.bindBuffer(a,ub[b])},a:(a,b,c)=>{N.bindBufferBase(a,b,ub[c])},i:(a,b)=>{N.bindFramebuffer(a,vb[b])},Ga:(a,b)=>{N.bindRenderbuffer(a,wb[b])},n:(a,b)=>{N.bindSampler(a,S[b])},d:(a,b)=>{N.bindTexture(a,Q[b])},K:a=>{N.bindVertexArray(xb[a])},G:(a,b,c,d)=>N.blendColor(a,b,c,d),H:(a,b)=>N.blendEquationSeparate(a,
b),I:(a,b,c,d)=>N.blendFuncSeparate(a,b,c,d),ob:(a,b,c,d,e,h,g,l,n,q)=>N.blitFramebuffer(a,b,c,d,e,h,g,l,n,q),Ia:(a,b,c,d)=>{2<=V.version?c&&b?N.bufferData(a,t,d,c,b):N.bufferData(a,b,d):N.bufferData(a,c?t.subarray(c,c+b):b,d)},A:(a,b,c,d)=>{2<=V.version?c&&N.bufferSubData(a,b,t,d,c):N.bufferSubData(a,b,t.subarray(d,d+c))},oa:a=>N.checkFramebufferStatus(a),Jb:(a,b,c,d)=>N.clearBufferfi(a,b,c,d),la:(a,b,c)=>{N.clearBufferfv(a,b,w,c>>2)},Ib:(a,b,c)=>{N.clearBufferiv(a,b,u,c>>2)},p:(a,b,c,d)=>{N.colorMask(!!a,
!!b,!!c,!!d)},Mb:a=>{N.compileShader(R[a])},Aa:(a,b,c,d,e,h,g,l)=>{2<=V.version?N.zc||!g?N.compressedTexImage2D(a,b,c,d,e,h,g,l):N.compressedTexImage2D(a,b,c,d,e,h,t,l,g):N.compressedTexImage2D(a,b,c,d,e,h,t.subarray(l,l+g))},ya:(a,b,c,d,e,h,g,l,n)=>{N.zc?N.compressedTexImage3D(a,b,c,d,e,h,g,l,n):N.compressedTexImage3D(a,b,c,d,e,h,g,t,n,l)},Sb:()=>{var a=Cb(P),b=N.createProgram();b.name=a;b.Gc=b.Ec=b.Fc=0;b.Qc=1;P[a]=b;return a},Pb:a=>{var b=Cb(R);R[b]=N.createShader(a);return b},D:a=>N.cullFace(a),
Ma:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=ub[d];e&&(N.deleteBuffer(e),e.name=0,ub[d]=null,d==N.Uc&&(N.Uc=0),d==N.zc&&(N.zc=0))}},f:(a,b)=>{for(var c=0;c<a;++c){var d=u[b+4*c>>2],e=vb[d];e&&(N.deleteFramebuffer(e),e.name=0,vb[d]=null)}},k:a=>{if(a){var b=P[a];b?(N.deleteProgram(b),b.name=0,P[a]=null):T||=1281}},B:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=wb[d];e&&(N.deleteRenderbuffer(e),e.name=0,wb[d]=null)}},m:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=S[d];e&&(N.deleteSampler(e),
e.name=0,S[d]=null)}},q:a=>{if(a){var b=R[a];b?(N.deleteShader(b),R[a]=null):T||=1281}},C:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=Q[d];e&&(N.deleteTexture(e),e.name=0,Q[d]=null)}},Ka:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2];N.deleteVertexArray(xb[d]);xb[d]=null}},v:a=>N.depthFunc(a),u:a=>{N.depthMask(!!a)},e:a=>N.disable(a),J:a=>{N.disableVertexAttribArray(a)},qb:(a,b,c)=>{N.drawArrays(a,b,c)},rb:(a,b,c,d)=>{N.drawArraysInstanced(a,b,c,d)},na:(a,b)=>{for(var c=Jb[a],d=0;d<a;d++)c[d]=
u[b+4*d>>2];N.drawBuffers(c)},sb:(a,b,c,d)=>{N.drawElements(a,b,c,d)},tb:(a,b,c,d,e)=>{N.drawElementsInstanced(a,b,c,d,e)},h:a=>N.enable(a),Db:a=>{N.enableVertexAttribArray(a)},pa:(a,b,c,d)=>{N.framebufferRenderbuffer(a,b,c,wb[d])},l:(a,b,c,d,e)=>{N.framebufferTexture2D(a,b,c,Q[d],e)},x:(a,b,c,d,e)=>{N.framebufferTextureLayer(a,b,Q[c],d,e)},E:a=>N.frontFace(a),Ja:(a,b)=>{U(a,b,"createBuffer",ub)},qa:(a,b)=>{U(a,b,"createFramebuffer",vb)},Ha:(a,b)=>{U(a,b,"createRenderbuffer",wb)},wa:(a,b)=>{U(a,b,
"createSampler",S)},Ea:(a,b)=>{U(a,b,"createTexture",Q)},Ta:(a,b)=>{U(a,b,"createVertexArray",xb)},Kb:(a,b)=>N.getAttribLocation(P[a],b?G(b):""),c:(a,b)=>Lb(a,b),Rb:(a,b,c,d)=>{a=N.getProgramInfoLog(P[a]);null===a&&(a="(unknown error)");b=0<b&&d?L(a,d,b):0;c&&(u[c>>2]=b)},ta:(a,b,c)=>{if(c)if(a>=tb)T||=1281;else if(a=P[a],35716==b)a=N.getProgramInfoLog(a),null===a&&(a="(unknown error)"),u[c>>2]=a.length+1;else if(35719==b){if(!a.Gc){var d=N.getProgramParameter(a,35718);for(b=0;b<d;++b)a.Gc=Math.max(a.Gc,
N.getActiveUniform(a,b).name.length+1)}u[c>>2]=a.Gc}else if(35722==b){if(!a.Ec)for(d=N.getProgramParameter(a,35721),b=0;b<d;++b)a.Ec=Math.max(a.Ec,N.getActiveAttrib(a,b).name.length+1);u[c>>2]=a.Ec}else if(35381==b){if(!a.Fc)for(d=N.getProgramParameter(a,35382),b=0;b<d;++b)a.Fc=Math.max(a.Fc,N.getActiveUniformBlockName(a,b).length+1);u[c>>2]=a.Fc}else u[c>>2]=N.getProgramParameter(a,b);else T||=1281},Lb:(a,b,c,d)=>{a=N.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?L(a,d,b):0;c&&
(u[c>>2]=b)},ra:(a,b,c)=>{c?35716==b?(a=N.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),u[c>>2]=a?a.length+1:0):35720==b?(a=N.getShaderSource(R[a]),u[c>>2]=a?a.length+1:0):u[c>>2]=N.getShaderParameter(R[a],b):T||=1281},Ra:(a,b)=>{if(2>V.version)return T||=1282,0;var c=zb[a];if(c)return 0>b||b>=c.length?(T||=1281,0):c[b];switch(a){case 7939:return c=Kb().map(Nb),c=zb[a]=c,0>b||b>=c.length?(T||=1281,0):c[b];default:return T||=1280,0}},sa:(a,b)=>{b=b?G(b):"";if(a=P[a]){var c=a,d=c.Dc,e=c.nd,
h;if(!d){c.Dc=d={};c.md={};var g=N.getProgramParameter(c,35718);for(h=0;h<g;++h){var l=N.getActiveUniform(c,h);var n=l.name;l=l.size;var q=Ob(n);q=0<q?n.slice(0,q):n;var y=c.Qc;c.Qc+=l;e[q]=[l,y];for(n=0;n<l;++n)d[y]=n,c.md[y++]=q}}c=a.Dc;d=0;e=b;h=Ob(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.nd[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||N.getUniformLocation(a,b)))return d}else T||=1281;return-1},nb:(a,b,c)=>{for(var d=Jb[b],e=0;e<b;e++)d[e]=u[c+4*e>>2];N.invalidateFramebuffer(a,d)},ua:a=>
{a=P[a];N.linkProgram(a);a.Dc=0;a.nd={}},Sa:(a,b)=>{3317==a?Ab=b:3314==a&&(Bb=b);N.pixelStorei(a,b)},F:(a,b)=>N.polygonOffset(a,b),pb:a=>N.readBuffer(a),Fa:(a,b,c,d,e)=>N.renderbufferStorageMultisample(a,b,c,d,e),va:(a,b,c)=>{N.samplerParameterf(S[a],b,c)},g:(a,b,c)=>{N.samplerParameteri(S[a],b,c)},ma:(a,b,c,d)=>N.scissor(a,b,c,d),Nb:(a,b,c,d)=>{for(var e="",h=0;h<b;++h){var g=(g=v[c+4*h>>2])?G(g,d?v[d+4*h>>2]:void 0):"";e+=g}N.shaderSource(R[a],e)},Pa:(a,b,c)=>N.stencilFunc(a,b,c),ka:(a,b,c,d)=>
N.stencilFuncSeparate(a,b,c,d),t:a=>N.stencilMask(a),Oa:(a,b,c)=>N.stencilOp(a,b,c),ja:(a,b,c,d)=>N.stencilOpSeparate(a,b,c,d),za:(a,b,c,d,e,h,g,l,n)=>{if(2<=V.version){if(N.zc){N.texImage2D(a,b,c,d,e,h,g,l,n);return}if(n){var q=Pb(l);n>>>=31-Math.clz32(q.BYTES_PER_ELEMENT);N.texImage2D(a,b,c,d,e,h,g,l,q,n);return}}q=n?Qb(l,g,d,e,n):null;N.texImage2D(a,b,c,d,e,h,g,l,q)},xa:(a,b,c,d,e,h,g,l,n,q)=>{if(N.zc)N.texImage3D(a,b,c,d,e,h,g,l,n,q);else if(q){var y=Pb(n);N.texImage3D(a,b,c,d,e,h,g,l,n,y,q>>>
31-Math.clz32(y.BYTES_PER_ELEMENT))}else N.texImage3D(a,b,c,d,e,h,g,l,n,null)},Da:(a,b,c)=>N.texParameteri(a,b,c),Ca:(a,b,c,d,e)=>N.texStorage2D(a,b,c,d,e),Ba:(a,b,c,d,e,h)=>N.texStorage3D(a,b,c,d,e,h),mb:(a,b,c,d,e,h,g,l,n)=>{if(2<=V.version){if(N.zc){N.texSubImage2D(a,b,c,d,e,h,g,l,n);return}if(n){var q=Pb(l);N.texSubImage2D(a,b,c,d,e,h,g,l,q,n>>>31-Math.clz32(q.BYTES_PER_ELEMENT));return}}n=n?Qb(l,g,e,h,n):null;N.texSubImage2D(a,b,c,d,e,h,g,l,n)},kb:(a,b,c,d,e,h,g,l,n,q,y)=>{if(N.zc)N.texSubImage3D(a,
b,c,d,e,h,g,l,n,q,y);else if(y){var O=Pb(q);N.texSubImage3D(a,b,c,d,e,h,g,l,n,q,O,y>>>31-Math.clz32(O.BYTES_PER_ELEMENT))}else N.texSubImage3D(a,b,c,d,e,h,g,l,n,q,null)},Cb:(a,b,c)=>{if(2<=V.version)b&&N.uniform1fv(W(a),w,c>>2,b);else{if(288>=b)for(var d=X[b],e=0;e<b;++e)d[e]=w[c+4*e>>2];else d=w.subarray(c>>2,c+4*b>>2);N.uniform1fv(W(a),d)}},Qb:(a,b)=>{N.uniform1i(W(a),b)},yb:(a,b,c)=>{if(2<=V.version)b&&N.uniform1iv(W(a),u,c>>2,b);else{if(288>=b)for(var d=Rb[b],e=0;e<b;++e)d[e]=u[c+4*e>>2];else d=
u.subarray(c>>2,c+4*b>>2);N.uniform1iv(W(a),d)}},Bb:(a,b,c)=>{if(2<=V.version)b&&N.uniform2fv(W(a),w,c>>2,2*b);else{if(144>=b){b*=2;for(var d=X[b],e=0;e<b;e+=2)d[e]=w[c+4*e>>2],d[e+1]=w[c+(4*e+4)>>2]}else d=w.subarray(c>>2,c+8*b>>2);N.uniform2fv(W(a),d)}},xb:(a,b,c)=>{if(2<=V.version)b&&N.uniform2iv(W(a),u,c>>2,2*b);else{if(144>=b){b*=2;for(var d=Rb[b],e=0;e<b;e+=2)d[e]=u[c+4*e>>2],d[e+1]=u[c+(4*e+4)>>2]}else d=u.subarray(c>>2,c+8*b>>2);N.uniform2iv(W(a),d)}},Ab:(a,b,c)=>{if(2<=V.version)b&&N.uniform3fv(W(a),
w,c>>2,3*b);else{if(96>=b){b*=3;for(var d=X[b],e=0;e<b;e+=3)d[e]=w[c+4*e>>2],d[e+1]=w[c+(4*e+4)>>2],d[e+2]=w[c+(4*e+8)>>2]}else d=w.subarray(c>>2,c+12*b>>2);N.uniform3fv(W(a),d)}},wb:(a,b,c)=>{if(2<=V.version)b&&N.uniform3iv(W(a),u,c>>2,3*b);else{if(96>=b){b*=3;for(var d=Rb[b],e=0;e<b;e+=3)d[e]=u[c+4*e>>2],d[e+1]=u[c+(4*e+4)>>2],d[e+2]=u[c+(4*e+8)>>2]}else d=u.subarray(c>>2,c+12*b>>2);N.uniform3iv(W(a),d)}},zb:(a,b,c)=>{if(2<=V.version)b&&N.uniform4fv(W(a),w,c>>2,4*b);else{if(72>=b){var d=X[4*b],
e=w;c>>=2;b*=4;for(var h=0;h<b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=w.subarray(c>>2,c+16*b>>2);N.uniform4fv(W(a),d)}},vb:(a,b,c)=>{if(2<=V.version)b&&N.uniform4iv(W(a),u,c>>2,4*b);else{if(72>=b){b*=4;for(var d=Rb[b],e=0;e<b;e+=4)d[e]=u[c+4*e>>2],d[e+1]=u[c+(4*e+4)>>2],d[e+2]=u[c+(4*e+8)>>2],d[e+3]=u[c+(4*e+12)>>2]}else d=u.subarray(c>>2,c+16*b>>2);N.uniform4iv(W(a),d)}},ub:(a,b,c,d)=>{if(2<=V.version)b&&N.uniformMatrix4fv(W(a),!!c,w,d>>2,16*b);else{if(18>=b){var e=
X[16*b],h=w;d>>=2;b*=16;for(var g=0;g<b;g+=16){var l=d+g;e[g]=h[l];e[g+1]=h[l+1];e[g+2]=h[l+2];e[g+3]=h[l+3];e[g+4]=h[l+4];e[g+5]=h[l+5];e[g+6]=h[l+6];e[g+7]=h[l+7];e[g+8]=h[l+8];e[g+9]=h[l+9];e[g+10]=h[l+10];e[g+11]=h[l+11];e[g+12]=h[l+12];e[g+13]=h[l+13];e[g+14]=h[l+14];e[g+15]=h[l+15]}}else e=w.subarray(d>>2,d+64*b>>2);N.uniformMatrix4fv(W(a),!!c,e)}},j:a=>{a=P[a];N.useProgram(a);N.pd=a},Eb:(a,b)=>{N.vertexAttribDivisor(a,b)},Fb:(a,b,c,d,e)=>{N.vertexAttribIPointer(a,b,c,d,e)},Hb:(a,b,c,d,e,h)=>
{N.vertexAttribPointer(a,b,c,!!d,e,h)},r:(a,b,c,d)=>N.viewport(a,b,c,d),fb:Ea,Vb:function(){f.bd=a=>{0!=$b()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.bd)},bb:function(){f.jd=a=>{const b=a.clipboardData.getData("text");Wb(()=>{const c=Tb(b);ac(c)})};window.addEventListener("paste",f.jd)},Xa:function(){f.Qd=[];f.cd=b=>{b.stopPropagation();b.preventDefault()};f.dd=b=>{b.stopPropagation();b.preventDefault()};f.ed=b=>{b.stopPropagation();b.preventDefault()};f.gd=
b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;f.hd=c;bc(c.length);for(let e=0;e<c.length;e++)Wb(()=>{const h=Tb(c[e].name);cc(e,h)});let d=0;b.shiftKey&&(d|=1);b.ctrlKey&&(d|=2);b.altKey&&(d|=4);b.metaKey&&(d|=8);dc(b.clientX,b.clientY,d)};const a=f.Bc;a.addEventListener("dragenter",f.cd,!1);a.addEventListener("dragleave",f.dd,!1);a.addEventListener("dragover",f.ed,!1);a.addEventListener("drop",f.gd,!1)},Tb:function(){const a=document.getElementById("sokol-app-favicon");
a&&document.head.removeChild(a)},Wa:function(a){const b=f.hd;return 0>a||a>=b.length?0:b[a].size},Qa:function(a,b,c,d,e){const h=new FileReader;h.onload=g=>{g=g.target.result;g.byteLength>d?ec(a,0,1,b,0,c,d,e):(t.set(new Uint8Array(g),c),ec(a,1,0,b,g.byteLength,c,d,e))};h.onerror=()=>{ec(a,0,2,b,0,c,d,e)};h.readAsArrayBuffer(f.hd[a])},La:function(a,b){0!==b&&(document.title=b?G(b):"");a=a?G(a):"";void 0!==f.canvas&&("object"===typeof f.canvas?ab[a]=f.canvas:console.warn("sokol_app.h: Module['canvas'] is set but is not an object"));
f.Bc=H(a);f.Bc||console.warn("sokol_app.h: can't find html5_canvas_selector ",a);f.Bc.requestPointerLock||console.warn("sokol_app.h: target doesn't support requestPointerLock: ",a)},Ub:function(){window.removeEventListener("beforeunload",f.bd)},Ya:function(){window.removeEventListener("paste",f.jd)},Na:function(){const a=f.Bc;a.removeEventListener("dragenter",f.cd);a.removeEventListener("dragleave",f.dd);a.removeEventListener("dragover",f.ed);a.removeEventListener("drop",f.gd)},s:function(){f.Bc&&
f.Bc.requestPointerLock&&f.Bc.requestPointerLock()},Ob:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(t.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},cb:function(){const a=(new URLSearchParams(window.location.search)).entries();for(let b=a.next();!b.done;b=a.next()){const c=b.value[0],
d=b.value[1];Wb(()=>{const e=Tb(c),h=Tb(d);fc(e,h)})}},eb:function(){return f.yc?f.yc.bufferSize:0},Gb:function(a,b,c){f.sc=null;f.yc=null;"undefined"!==typeof AudioContext?f.sc=new AudioContext({sampleRate:a,latencyHint:"interactive"}):(f.sc=null,console.log("sokol_audio.h: no WebAudio support"));return f.sc?(console.log("sokol_audio.h: sample rate ",f.sc.sampleRate),f.yc=f.sc.createScriptProcessor(c,0,b),f.yc.onaudioprocess=d=>{const e=d.outputBuffer.length,h=gc(e);if(h){const g=d.outputBuffer.numberOfChannels;
for(let l=0;l<g;l++){const n=d.outputBuffer.getChannelData(l);for(let q=0;q<e;q++)n[q]=w[(h>>2)+(g*q+l)]}}},f.yc.connect(f.sc.destination),a=()=>{f.sc&&"suspended"===f.sc.state&&f.sc.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchend",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},lb:function(){return f.sc?f.sc.sampleRate:0},ia:function(){const a=f.sc;null!==a&&(f.yc&&f.yc.disconnect(),a.close(),f.sc=null,f.yc=null)},db:function(){if(f.sc)return"suspended"===
f.sc.state?1:0},w:function(a,b,c,d,e,h){const g=b?G(b):"";b=new Headers;0<d&&b.append("Range",`bytes=${c}-${c+d-1}`);fetch(g,{method:"GET",headers:b}).then(l=>{l.ok?l.arrayBuffer().then(n=>{n=new Uint8Array(n);n.length<=h?(t.set(n,e),hc(a,d,n.length)):ic(a)}).catch(n=>{console.error(`sokol_fetch.h: GET ${g} failed with: `,n);jc(a)}):kc(a,l.status)}).catch(l=>{console.error(`sokol_fetch.h: GET ${g} failed with: `,l);jc(a)})},ha:function(a,b){const c=b?G(b):"";fetch(c,{method:"HEAD"}).then(d=>{d.ok?
(d=d.headers.get("Content-Length"),null===d?(console.warn(`sokol_fetch.h: HEAD ${c} response has no Content-Length`),jc(a)):lc(a,Number(d))):kc(a,d.status)}).catch(d=>{console.error(`sokol_fetch.h: HEAD ${c} failed with: `,d);jc(a)})},ga:function(a,b){b=b?G(b):"";switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}},Z;
(async function(){function a(c){Z=c.exports;ma=Z.Wb;qa();db=Z.oc;z--;f.monitorRunDependencies?.(z);0==z&&A&&(c=A,A=null,c());return Z}z++;f.monitorRunDependencies?.(z);var b={a:mc};if(f.instantiateWasm)return new Promise(c=>{f.instantiateWasm(b,(d,e)=>{a(d,e);c(d.exports)})});sa??=f.locateFile?f.locateFile("kc852.wasm",k):k+"kc852.wasm";return a((await va(b)).instance)})();f._fs_emsc_alloc=a=>(f._fs_emsc_alloc=Z.Yb)(a);var M=a=>(M=Z.Zb)(a);
f._fs_emsc_load_snapshot_callback=(a,b,c)=>(f._fs_emsc_load_snapshot_callback=Z._b)(a,b,c);
var ac=f.__sapp_emsc_onpaste=a=>(ac=f.__sapp_emsc_onpaste=Z.$b)(a),$b=f.__sapp_html5_get_ask_leave_site=()=>($b=f.__sapp_html5_get_ask_leave_site=Z.ac)(),bc=f.__sapp_emsc_begin_drop=a=>(bc=f.__sapp_emsc_begin_drop=Z.bc)(a),cc=f.__sapp_emsc_drop=(a,b)=>(cc=f.__sapp_emsc_drop=Z.cc)(a,b),dc=f.__sapp_emsc_end_drop=(a,b,c)=>(dc=f.__sapp_emsc_end_drop=Z.dc)(a,b,c),ec=f.__sapp_emsc_invoke_fetch_cb=(a,b,c,d,e,h,g,l)=>(ec=f.__sapp_emsc_invoke_fetch_cb=Z.ec)(a,b,c,d,e,h,g,l),nc=f._main=(a,b)=>(nc=f._main=Z.fc)(a,
b),gc=f.__saudio_emsc_pull=a=>(gc=f.__saudio_emsc_pull=Z.gc)(a),fc=f.__sargs_add_kvp=(a,b)=>(fc=f.__sargs_add_kvp=Z.hc)(a,b),lc=f.__sfetch_emsc_head_response=(a,b)=>(lc=f.__sfetch_emsc_head_response=Z.ic)(a,b),hc=f.__sfetch_emsc_get_response=(a,b,c)=>(hc=f.__sfetch_emsc_get_response=Z.jc)(a,b,c),kc=f.__sfetch_emsc_failed_http_status=(a,b)=>(kc=f.__sfetch_emsc_failed_http_status=Z.kc)(a,b),ic=f.__sfetch_emsc_failed_buffer_too_small=a=>(ic=f.__sfetch_emsc_failed_buffer_too_small=Z.lc)(a),jc=f.__sfetch_emsc_failed_other=
a=>(jc=f.__sfetch_emsc_failed_other=Z.mc)(a),Zb=(a,b)=>(Zb=Z.nc)(a,b),Vb=a=>(Vb=Z.pc)(a),Sb=a=>(Sb=Z.qc)(a),Ub=()=>(Ub=Z.rc)();function oc(a=[]){var b=nc;a.unshift(fa);var c=a.length,d=Sb(4*(c+1)),e=d;a.forEach(g=>{v[e>>2]=Tb(g);e+=4});v[e>>2]=0;try{var h=b(c,d);Fa(h)}catch(g){Da(g)}}
function pc(a=ea){function b(){f.calledRun=!0;if(!p){Z.Xb();f.onRuntimeInitialized?.();f.noInitialRun||oc(a);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var c=f.postRun.shift();ya.unshift(c)}xa(ya)}}if(0<z)A=pc;else{if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Aa();xa(za);0<z?A=pc:f.setStatus?(f.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>f.setStatus(""),1);b()},1)):b()}}
if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();pc();
