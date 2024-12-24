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
[];addEventListener("message",d=>{if("setimmediate"===d.data||"setimmediate"===d.data.target)d.stopPropagation(),c.shift()()},!0);Sa=d=>{c.push(d);if(ba){let e;(e=h).setImmediates??(e.setImmediates=[]);h.setImmediates.push(d);postMessage({target:"setimmediate"})}else postMessage("setimmediate","*")}}else Sa=setImmediate;E=function(){Sa(F)}}},bb=(a,b,c,d,e)=>{function g(){return f<Ua?(La(),!1):!0}D=a;Va=d;var f=Ua;Pa=!1;F=function(){if(!q)if(0<Wa.length){var l=Wa.shift();l.Md(l.Dd);if(Xa){var m=Xa,
p=0==m%1?m-1:Math.floor(m);Xa=l.Fd?p:(8*m+(p+.5))/9}h.setStatus&&(l=h.statusMessage||"Please wait...",m=Xa??0,p=Ya.Kd??0,m?m<p?h.setStatus("{message} ({expected - remaining}/{expected})"):h.setStatus(l):h.setStatus(""));g()&&setTimeout(F,0)}else if(g())if(Za=Za+1|0,1==Na&&1<Oa&&0!=Za%Oa)E();else{0==Na&&(Qa=performance.now());a:if(!q){for(l of $a)if(!1===l())break a;Ma(a);for(m of ab)m()}g()&&E()}};e||(b&&0<b?Ta(0,1E3/b):Ta(1,1),E());if(c)throw"unwind";},Pa=!1,E=null,Ua=0,D=null,Va=0,Na=0,Oa=0,Za=
0,Wa=[],$a=[],ab=[];function cb(){E=null;Ua++}var H=0;function Ra(a){if("function"==typeof requestAnimationFrame)requestAnimationFrame(a);else{var b=Date.now();if(0===H)H=b+1E3/60;else for(;b+2>=H;)H+=1E3/60;setTimeout(a,Math.max(H-b,0))}}var Ya={},Qa,F,Sa,Xa;function db(a){var b=I.Bc[a];b.target.removeEventListener(b.Ac,b.gd,b.Cc);I.Bc.splice(a,1)}function eb(){if(navigator.userActivation?navigator.userActivation.isActive:I.Sc&&I.ud.Qc){var a=I.Ic;I.Ic=[];for(var b of a)b.Vc(...b.bd)}}
function J(a){if(!a.target)return-4;if(a.Dc)a.gd=function(c){++I.Sc;I.ud=a;eb();a.Ec(c);eb();--I.Sc},a.target.addEventListener(a.Ac,a.gd,a.Cc),I.Bc.push(a);else for(var b=0;b<I.Bc.length;++b)I.Bc[b].target==a.target&&I.Bc[b].Ac==a.Ac&&db(b--);return 0}function fb(a){return a?a==window?"#window":a==screen?"#screen":a?.nodeName||"":""}
var I={Ed:0,Nd:0,Tc:0,Oc:0,Zc:0,Xc:0,Rc:0,Id:0,Rd:0,Hd:0,Ld:0,Uc:0,$d:0,Wc:0,Pd(a,b,c){r.set(r.subarray(b,b+c),a)},Td(){for(;I.Bc.length;)db(I.Bc.length-1);I.Ic=[]},Sc:0,Ic:[],Gd(a,b,c){function d(g,f){if(g.length!=f.length)return!1;for(var l in g)if(g[l]!=f[l])return!1;return!0}for(var e of I.Ic)if(e.Vc==a&&d(e.bd,c))return;I.Ic.push({Vc:a,ld:b,bd:c});I.Ic.sort((g,f)=>g.ld<f.ld)},Vd(a){I.Ic=I.Ic.filter(b=>b.Vc!=a)},Bc:[],Ud:(a,b)=>{for(var c=0;c<I.Bc.length;++c)I.Bc[c].target!=a||b&&b!=I.Bc[c].Ac||
db(c--)},fullscreenEnabled(){return document.fullscreenEnabled||document.webkitFullscreenEnabled}},gb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0],K=a=>{a=2<a?a?B(t,a):"":a;return gb[a]||("undefined"!=typeof document?document.querySelector(a):null)},hb=a=>0>gb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0},ib=[],jb,L=a=>{var b=ib[a];b||(a>=ib.length&&(ib.length=a+1),ib[a]=b=jb.get(a));return b},M=(a,b,c)=>{var d=t;if(!(0<c))return 0;var e=b;c=b+c-1;for(var g=
0;g<a.length;++g){var f=a.charCodeAt(g);if(55296<=f&&57343>=f){var l=a.charCodeAt(++g);f=65536+((f&1023)<<10)|l&1023}if(127>=f){if(b>=c)break;d[b++]=f}else{if(2047>=f){if(b+1>=c)break;d[b++]=192|f>>6}else{if(65535>=f){if(b+2>=c)break;d[b++]=224|f>>12}else{if(b+3>=c)break;d[b++]=240|f>>18;d[b++]=128|f>>12&63}d[b++]=128|f>>6&63}d[b++]=128|f&63}}d[b]=0;return b-e},kb=(a,b,c,d,e,g)=>{I.Rc||(I.Rc=N(256));a={target:K(a),Ac:g,Dc:d,Ec:(f=event)=>{var l=f.target.id?f.target.id:"",m=I.Rc;M(fb(f.target),m+0,
128);M(l,m+128,128);L(d)(e,m,b)&&f.preventDefault()},Cc:c};return J(a)},lb=(a,b,c,d,e,g)=>{I.Tc||(I.Tc=N(160));a={target:K(a),Ac:g,Dc:d,Ec:f=>{var l=I.Tc;y[l>>3]=f.timeStamp;var m=l>>2;u[m+2]=f.location;r[l+12]=f.ctrlKey;r[l+13]=f.shiftKey;r[l+14]=f.altKey;r[l+15]=f.metaKey;r[l+16]=f.repeat;u[m+5]=f.charCode;u[m+6]=f.keyCode;u[m+7]=f.which;M(f.key||"",l+32,32);M(f.code||"",l+64,32);M(f.char||"",l+96,32);M(f.locale||"",l+128,32);L(d)(e,l,b)&&f.preventDefault()},Cc:c};return J(a)},mb=(a,b,c)=>{y[a>>
3]=b.timeStamp;var d=a>>2;u[d+2]=b.screenX;u[d+3]=b.screenY;u[d+4]=b.clientX;u[d+5]=b.clientY;r[a+24]=b.ctrlKey;r[a+25]=b.shiftKey;r[a+26]=b.altKey;r[a+27]=b.metaKey;pa[2*d+14]=b.button;pa[2*d+15]=b.buttons;u[d+8]=b.movementX;u[d+9]=b.movementY;a=hb(c);u[d+10]=b.clientX-(a.left|0);u[d+11]=b.clientY-(a.top|0)},O=(a,b,c,d,e,g)=>{I.Oc||(I.Oc=N(64));a=K(a);return J({target:a,Qc:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,Ac:g,Dc:d,Ec:(f=event)=>{mb(I.Oc,f,a);L(d)(e,I.Oc,b)&&f.preventDefault()},Cc:c})},
nb=(a,b,c,d,e)=>{I.Uc||(I.Uc=N(257));return J({target:a,Ac:e,Dc:d,Ec:(g=event)=>{var f=I.Uc,l=document.pointerLockElement||document.Kc||document.ad||document.$c;r[f]=!!l;var m=l?.id||"";M(fb(l),f+1,128);M(m,f+129,128);L(d)(20,f,b)&&g.preventDefault()},Cc:c})},ob=(a,b,c,d,e)=>J({target:a,Ac:e,Dc:d,Ec:(g=event)=>{L(d)(38,0,b)&&g.preventDefault()},Cc:c}),pb=(a,b,c,d)=>{I.Xc||(I.Xc=N(36));a=K(a);return J({target:a,Ac:"resize",Dc:d,Ec:(e=event)=>{if(e.target==a){var g=document.body;if(g){var f=I.Xc;u[f>>
2]=0;u[f+4>>2]=g.clientWidth;u[f+8>>2]=g.clientHeight;u[f+12>>2]=innerWidth;u[f+16>>2]=innerHeight;u[f+20>>2]=outerWidth;u[f+24>>2]=outerHeight;u[f+28>>2]=pageXOffset|0;u[f+32>>2]=pageYOffset|0;L(d)(10,f,b)&&e.preventDefault()}}},Cc:c})},qb=(a,b,c,d,e,g)=>{I.Wc||(I.Wc=N(1552));a=K(a);return J({target:a,Qc:"touchstart"==g||"touchend"==g,Ac:g,Dc:d,Ec:f=>{var l={},m=f.touches;for(var p of m)p.hd=p.kd=0,l[p.identifier]=p;for(var v of f.changedTouches)v.hd=1,l[v.identifier]=v;for(var Q of f.targetTouches)l[Q.identifier].kd=
1;m=I.Wc;y[m>>3]=f.timeStamp;r[m+12]=f.ctrlKey;r[m+13]=f.shiftKey;r[m+14]=f.altKey;r[m+15]=f.metaKey;p=m+16;v=hb(a);Q=0;for(let G of Object.values(l))if(l=p>>2,u[l]=G.identifier,u[l+1]=G.screenX,u[l+2]=G.screenY,u[l+3]=G.clientX,u[l+4]=G.clientY,u[l+5]=G.pageX,u[l+6]=G.pageY,r[p+28]=G.hd,r[p+29]=G.kd,u[l+8]=G.clientX-(v.left|0),u[l+9]=G.clientY-(v.top|0),p+=48,31<++Q)break;u[m+8>>2]=Q;L(d)(e,m,b)&&f.preventDefault()},Cc:c})},P,rb=a=>{var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=
(c,d)=>b.vertexAttribDivisorANGLE(c,d),a.drawArraysInstanced=(c,d,e,g)=>b.drawArraysInstancedANGLE(c,d,e,g),a.drawElementsInstanced=(c,d,e,g,f)=>b.drawElementsInstancedANGLE(c,d,e,g,f))},sb=a=>{var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=()=>b.createVertexArrayOES(),a.deleteVertexArray=c=>b.deleteVertexArrayOES(c),a.bindVertexArray=c=>b.bindVertexArrayOES(c),a.isVertexArray=c=>b.isVertexArrayOES(c))},tb=a=>{var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=(c,
d)=>b.drawBuffersWEBGL(c,d))},ub=a=>{a.Jd=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")},vb=a=>{a.Od=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")},wb=a=>{var b="ANGLE_instanced_arrays EXT_blend_minmax EXT_disjoint_timer_query EXT_frag_depth EXT_shader_texture_lod EXT_sRGB OES_element_index_uint OES_fbo_render_mipmap OES_standard_derivatives OES_texture_float OES_texture_half_float OES_texture_half_float_linear OES_vertex_array_object WEBGL_color_buffer_float WEBGL_depth_texture WEBGL_draw_buffers EXT_color_buffer_float EXT_conservative_depth EXT_disjoint_timer_query_webgl2 EXT_texture_norm16 NV_shader_noperspective_interpolation WEBGL_clip_cull_distance EXT_clip_control EXT_color_buffer_half_float EXT_depth_clamp EXT_float_blend EXT_polygon_offset_clamp EXT_texture_compression_bptc EXT_texture_compression_rgtc EXT_texture_filter_anisotropic KHR_parallel_shader_compile OES_texture_float_linear WEBGL_blend_func_extended WEBGL_compressed_texture_astc WEBGL_compressed_texture_etc WEBGL_compressed_texture_etc1 WEBGL_compressed_texture_s3tc WEBGL_compressed_texture_s3tc_srgb WEBGL_debug_renderer_info WEBGL_debug_shaders WEBGL_lose_context WEBGL_multi_draw WEBGL_polygon_mode".split(" ");
return(a.getSupportedExtensions()||[]).filter(c=>b.includes(c))},xb=1,yb=[],R=[],zb=[],Ab=[],Bb=[],S=[],Cb=[],Db=[],T=[],Eb={},Fb=4,Gb=0,Hb=a=>{for(var b=xb++,c=a.length;c<b;c++)a[c]=null;return b},Ib=(a,b,c,d)=>{for(var e=0;e<a;e++){var g=P[c](),f=g&&Hb(d);g?(g.name=f,d[f]=g):U||=1282;u[b+4*e>>2]=f}},Kb=(a,b)=>{a.Kc||(a.Kc=a.getContext,a.getContext=function(d,e){e=a.Kc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.jd?a.getContext("webgl2",b):a.getContext("webgl",b);
return c?Jb(c,b):0},Jb=(a,b)=>{var c=Hb(Db),d={handle:c,attributes:b,version:b.jd,Pc:a};a.canvas&&(a.canvas.Cd=d);Db[c]=d;("undefined"==typeof b.ed||b.ed)&&Lb(d);return c},Lb=a=>{a||=V;if(!a.zd){a.zd=!0;var b=a.Pc;b.Ad=b.getExtension("WEBGL_multi_draw");b.yd=b.getExtension("EXT_polygon_offset_clamp");b.xd=b.getExtension("EXT_clip_control");b.Bd=b.getExtension("WEBGL_polygon_mode");rb(b);sb(b);tb(b);ub(b);vb(b);2<=a.version&&(b.dd=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||
!b.dd)b.dd=b.getExtension("EXT_disjoint_timer_query");wb(b).forEach(c=>{c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}},U,V,Mb=(a,b,c,d,e,g)=>{a={target:K(a),Ac:g,Dc:d,Ec:(f=event)=>{L(d)(e,0,b)&&f.preventDefault()},Cc:c};J(a)},Nb=(a,b,c,d)=>{I.Zc||(I.Zc=N(96));return J({target:a,Qc:!0,Ac:"wheel",Dc:d,Ec:(e=event)=>{var g=I.Zc;mb(g,e,a);y[g+64>>3]=e.deltaX;y[g+72>>3]=e.deltaY;y[g+80>>3]=e.deltaZ;u[g+88>>2]=e.deltaMode;L(d)(9,g,b)&&e.preventDefault()},Cc:c})},Ob=["default","low-power",
"high-performance"],Pb={},Rb=()=>{if(!Qb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:fa||"./this.program"},b;for(b in Pb)void 0===Pb[b]?delete a[b]:a[b]=Pb[b];var c=[];for(b in a)c.push(`${b}=${a[b]}`);Qb=c}return Qb},Qb,Sb=[null,[],[]],Tb=()=>{var a=wb(P);return a=a.concat(a.map(b=>"GL_"+b))},Ub=(a,b)=>{if(b){var c=void 0;switch(a){case 36346:c=1;break;
case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=P.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){U||=1282;return}c=Tb().length;break;case 33307:case 33308:if(2>V.version){U||=1280;return}c=33307==a?3:0}if(void 0===c)switch(d=P.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U||=1280;return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:U||=1280;return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)u[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){U||=1280;n(`GL_INVALID_ENUM in glGet${0}v: Unknown object returned from WebGL getParameter(${a})! (error: ${e})`);return}}break;default:U||=1280;n(`GL_INVALID_ENUM in glGet${0}v: Native code calling glGet${0}v(${a}) and it returns ${d} of type ${typeof d}!`);return}u[b>>2]=c}else U||=1281},Vb=
a=>{for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b},Wb=a=>{var b=Vb(a)+1,c=N(b);c&&M(a,c,b);return c},Xb=a=>"]"==a.slice(-1)&&a.lastIndexOf("["),Yb=[],Zb=a=>{a-=5120;return 0==a?r:1==a?t:2==a?pa:4==a?u:6==a?x:5==a||28922==a||28520==a||30779==a||30782==a?w:qa},$b=(a,b,c,d,e)=>{a=Zb(a);b=d*((Gb||c)*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*a.BYTES_PER_ELEMENT+Fb-1&-Fb);return a.subarray(e>>>31-
Math.clz32(a.BYTES_PER_ELEMENT),e+b>>>31-Math.clz32(a.BYTES_PER_ELEMENT))},W=a=>{var b=P.vd;if(b){var c=b.Jc[a];"number"==typeof c&&(b.Jc[a]=c=P.getUniformLocation(b,b.sd[a]+(0<c?`[${c}]`:"")));return c}U||=1282},X=[],ac=[],cc=a=>{var b=Vb(a)+1,c=bc(b);M(a,c,b);return c},fc=a=>{var b=dc();a();ec(b)};h.requestAnimationFrame=Ra;h.pauseMainLoop=cb;h.resumeMainLoop=function(){Ua++;var a=Na,b=Oa,c=D;D=null;bb(c,0,!1,Va,!0);Ta(a,b);E()};h.preMainLoop&&$a.push(h.preMainLoop);h.postMainLoop&&ab.push(h.postMainLoop);
for(var Y=0;32>Y;++Y)Yb.push(Array(Y));var gc=new Float32Array(288);for(Y=0;288>=Y;++Y)X[Y]=gc.subarray(0,Y);var hc=new Int32Array(288);for(Y=0;288>=Y;++Y)ac[Y]=hc.subarray(0,Y);
var wc={ja:function(){return 0},ib:function(){return 0},jb:function(){},ob:()=>xa(""),mb:(a,b,c)=>t.copyWithin(a,b,b+c),cb:()=>{Fa=!1;Ha=0},db:(a,b)=>{C[a]&&(clearTimeout(C[a].id),delete C[a]);if(!b)return 0;var c=setTimeout(()=>{delete C[a];Ma(()=>ic(a,performance.now()))},b);C[a]={id:c,Zd:b};return 0},_a:function(a){if(void 0===window.localStorage)return 0;a=a?B(t,a):"";return(a=window.localStorage.getItem(a))?Wb(a):0},bc:function(a,b){void 0!==window.localStorage&&(a=a?B(t,a):"",b=b?B(t,b):"",
window.localStorage.setItem(a,b))},Oa:()=>{cb();D=null},ca:()=>"number"==typeof devicePixelRatio&&devicePixelRatio||1,ea:(a,b,c)=>{a=K(a);if(!a)return-4;a=hb(a);y[b>>3]=a.width;y[c>>3]=a.height;return 0},w:()=>performance.now(),Pa:()=>performance.now(),Ua:(a,b)=>{function c(d){L(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},fb:a=>{var b=t.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);a:{d=(Math.min(2147483648,65536*Math.ceil(Math.max(a,
d)/65536))-na.buffer.byteLength+65535)/65536|0;try{na.grow(d);ra();var e=1;break a}catch(g){}e=void 0}if(e)return!0}return!1},M:(a,b,c,d)=>kb(a,b,c,d,12,"blur"),ba:(a,b,c)=>{a=K(a);if(!a)return-4;a.width=b;a.height=c;return 0},N:(a,b,c,d)=>kb(a,b,c,d,13,"focus"),W:(a,b,c,d)=>lb(a,b,c,d,2,"keydown"),U:(a,b,c,d)=>lb(a,b,c,d,1,"keypress"),V:(a,b,c,d)=>lb(a,b,c,d,3,"keyup"),Va:(a,b,c)=>{a=L(a);bb(a,b,c)},aa:(a,b,c,d)=>O(a,b,c,d,5,"mousedown"),Z:(a,b,c,d)=>O(a,b,c,d,33,"mouseenter"),Y:(a,b,c,d)=>O(a,b,
c,d,34,"mouseleave"),_:(a,b,c,d)=>O(a,b,c,d,8,"mousemove"),$:(a,b,c,d)=>O(a,b,c,d,6,"mouseup"),P:(a,b,c,d)=>{if(!document||!document.body||!(document.body.requestPointerLock||document.body.Kc||document.body.ad||document.body.$c))return-1;a=K(a);if(!a)return-4;nb(a,b,c,d,"mozpointerlockchange");nb(a,b,c,d,"webkitpointerlockchange");nb(a,b,c,d,"mspointerlockchange");return nb(a,b,c,d,"pointerlockchange")},O:(a,b,c,d)=>{if(!document||!(document.body.requestPointerLock||document.body.Kc||document.body.ad||
document.body.$c))return-1;a=K(a);if(!a)return-4;ob(a,b,c,d,"mozpointerlockerror");ob(a,b,c,d,"webkitpointerlockerror");ob(a,b,c,d,"mspointerlockerror");return ob(a,b,c,d,"pointerlockerror")},da:(a,b,c,d)=>pb(a,b,c,d),Q:(a,b,c,d)=>qb(a,b,c,d,25,"touchcancel"),R:(a,b,c,d)=>qb(a,b,c,d,23,"touchend"),S:(a,b,c,d)=>qb(a,b,c,d,24,"touchmove"),T:(a,b,c,d)=>qb(a,b,c,d,22,"touchstart"),L:(a,b,c,d)=>{Mb(a,b,c,d,31,"webglcontextlost");return 0},K:(a,b,c,d)=>{Mb(a,b,c,d,32,"webglcontextrestored");return 0},X:(a,
b,c,d)=>(a=K(a))?"undefined"!=typeof a.onwheel?Nb(a,b,c,d):-1:-4,Ta:(a,b)=>{var c=b>>2;b={alpha:!!r[b+0],depth:!!r[b+1],stencil:!!r[b+2],antialias:!!r[b+3],premultipliedAlpha:!!r[b+4],preserveDrawingBuffer:!!r[b+5],powerPreference:Ob[u[c+2]],failIfMajorPerformanceCaveat:!!r[b+12],jd:u[c+4],Qd:u[c+5],ed:r[b+24],wd:r[b+25],Sd:u[c+7],Wd:r[b+32]};a=K(a);return!a||b.wd?0:Kb(a,b)},Ra:(a,b)=>{a=Db[a];b=b?B(t,b):"";b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&rb(P);"OES_vertex_array_object"==
b&&sb(P);"WEBGL_draw_buffers"==b&&tb(P);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&ub(P);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&vb(P);"WEBGL_multi_draw"==b&&(P.Ad=P.getExtension("WEBGL_multi_draw"));"EXT_polygon_offset_clamp"==b&&(P.yd=P.getExtension("EXT_polygon_offset_clamp"));"EXT_clip_control"==b&&(P.xd=P.getExtension("EXT_clip_control"));"WEBGL_polygon_mode"==b&&(P.Bd=P.getExtension("WEBGL_polygon_mode"));return!!a.Pc.getExtension(b)},Sa:a=>{V=Db[a];h.ctx=P=V?.Pc;
return!a||P?0:-5},kb:(a,b)=>{var c=0;Rb().forEach((d,e)=>{var g=b+c;e=w[a+4*e>>2]=g;for(g=0;g<d.length;++g)r[e++]=d.charCodeAt(g);r[e]=0;c+=d.length+1});return 0},lb:(a,b)=>{var c=Rb();w[a>>2]=c.length;var d=0;c.forEach(e=>d+=e.length+1);w[b>>2]=d;return 0},ia:()=>52,hb:()=>52,ab:function(){return 70},gb:(a,b,c,d)=>{for(var e=0,g=0;g<c;g++){var f=w[b>>2],l=w[b+4>>2];b+=8;for(var m=0;m<l;m++){var p=t[f+m],v=Sb[a];0===p||10===p?((1===a?la:n)(B(v)),v.length=0):v.push(p)}e+=l}w[d>>2]=e;return 0},h:function(a,
b,c){const d=a?B(t,a):"";let e;try{e=window.indexedDB.open("chips",1)}catch(g){console.log("fs_js_load_snapshot: failed to open IndexedDB with "+g)}e.onupgradeneeded=()=>{console.log("fs_js_load_snapshot: creating db");e.result.createObjectStore("store")};e.onsuccess=()=>{var g=e.result;let f;try{f=g.transaction(["store"],"readwrite")}catch(p){console.log("fs_js_load_snapshot: db.transaction failed with",p);return}g=f.objectStore("store");const l=d+"_"+b,m=g.get(l);m.onsuccess=()=>{if(void 0!==m.result){const p=
m.result.length;console.log("fs_js_load_snapshot:",l,"successfully loaded",p,"bytes");const v=jc(p);t.set(m.result,v);kc(c,v,p)}else kc(c,0,0)};m.onerror=()=>{console.log("fs_js_load_snapshot: FAILED loading",l)};f.onerror=()=>{console.log("fs_js_load_snapshot: transaction onerror")}};e.onerror=()=>{console.log("fs_js_load_snapshot: open_request onerror")}},Wa:function(a,b,c,d){const e=a?B(t,a):"";console.log("fs_js_save_snapshot: called with",e,b);let g;try{g=window.indexedDB.open("chips",1)}catch(f){console.log("fs_js_save_snapshot: failed to open IndexedDB with "+
f);return}g.onupgradeneeded=()=>{console.log("fs_js_save_snapshot: creating db");g.result.createObjectStore("store")};g.onsuccess=()=>{console.log("fs_js_save_snapshot: onsuccess");const f=g.result.transaction(["store"],"readwrite");var l=f.objectStore("store");const m=e+"_"+b;l=l.put(t.subarray(c,c+d),m);l.onsuccess=()=>{console.log("fs_js_save_snapshot:",m,"successfully stored")};l.onerror=()=>{console.log("fs_js_save_snapshot: FAILED to store",m)};f.onerror=()=>{console.log("fs_js_save_snapshot: transaction onerror")}};
g.onerror=()=>{console.log("fs_js_save_snapshot: open_request onerror")}},l:a=>P.activeTexture(a),qa:(a,b)=>{P.attachShader(R[a],S[b])},b:(a,b)=>{35051==a?P.cd=b:35052==a&&(P.Hc=b);P.bindBuffer(a,yb[b])},a:(a,b,c)=>{P.bindBufferBase(a,b,yb[c])},p:(a,b)=>{P.bindFramebuffer(a,zb[b])},za:(a,b)=>{P.bindRenderbuffer(a,Ab[b])},k:(a,b)=>{P.bindSampler(a,T[b])},c:(a,b)=>{P.bindTexture(a,Bb[b])},J:a=>{P.bindVertexArray(Cb[a])},F:(a,b,c,d)=>P.blendColor(a,b,c,d),G:(a,b)=>P.blendEquationSeparate(a,b),H:(a,b,
c,d)=>P.blendFuncSeparate(a,b,c,d),sb:(a,b,c,d,e,g,f,l,m,p)=>P.blitFramebuffer(a,b,c,d,e,g,f,l,m,p),Ba:(a,b,c,d)=>{2<=V.version?c&&b?P.bufferData(a,t,d,c,b):P.bufferData(a,b,d):P.bufferData(a,c?t.subarray(c,c+b):b,d)},z:(a,b,c,d)=>{2<=V.version?c&&P.bufferSubData(a,b,t,d,c):P.bufferSubData(a,b,t.subarray(d,d+c))},Mb:(a,b,c,d)=>P.clearBufferfi(a,b,c,d),ma:(a,b,c)=>{P.clearBufferfv(a,b,x,c>>2)},Lb:(a,b,c)=>{P.clearBufferiv(a,b,u,c>>2)},m:(a,b,c,d)=>{P.colorMask(!!a,!!b,!!c,!!d)},Qb:a=>{P.compileShader(S[a])},
ta:(a,b,c,d,e,g,f,l)=>{2<=V.version?P.Hc||!f?P.compressedTexImage2D(a,b,c,d,e,g,f,l):P.compressedTexImage2D(a,b,c,d,e,g,t,l,f):P.compressedTexImage2D(a,b,c,d,e,g,t.subarray(l,l+f))},_b:(a,b,c,d,e,g,f,l,m)=>{P.Hc?P.compressedTexImage3D(a,b,c,d,e,g,f,l,m):P.compressedTexImage3D(a,b,c,d,e,g,f,t,m,l)},Xb:()=>{var a=Hb(R),b=P.createProgram();b.name=a;b.Nc=b.Lc=b.Mc=0;b.Yc=1;R[a]=b;return a},Sb:a=>{var b=Hb(S);S[b]=P.createShader(a);return b},C:a=>P.cullFace(a),Fa:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+
4*c>>2],e=yb[d];e&&(P.deleteBuffer(e),e.name=0,yb[d]=null,d==P.cd&&(P.cd=0),d==P.Hc&&(P.Hc=0))}},i:(a,b)=>{for(var c=0;c<a;++c){var d=u[b+4*c>>2],e=zb[d];e&&(P.deleteFramebuffer(e),e.name=0,zb[d]=null)}},q:a=>{if(a){var b=R[a];b?(P.deleteProgram(b),b.name=0,R[a]=null):U||=1281}},A:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=Ab[d];e&&(P.deleteRenderbuffer(e),e.name=0,Ab[d]=null)}},r:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=T[d];e&&(P.deleteSampler(e),e.name=0,T[d]=null)}},y:a=>{if(a){var b=
S[a];b?(P.deleteShader(b),S[a]=null):U||=1281}},B:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=Bb[d];e&&(P.deleteTexture(e),e.name=0,Bb[d]=null)}},Ea:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2];P.deleteVertexArray(Cb[d]);Cb[d]=null}},u:a=>P.depthFunc(a),t:a=>{P.depthMask(!!a)},e:a=>P.disable(a),I:a=>{P.disableVertexAttribArray(a)},ub:(a,b,c)=>{P.drawArrays(a,b,c)},vb:(a,b,c,d)=>{P.drawArraysInstanced(a,b,c,d)},wb:(a,b,c,d)=>{P.drawElements(a,b,c,d)},xb:(a,b,c,d,e)=>{P.drawElementsInstanced(a,
b,c,d,e)},g:a=>P.enable(a),Ib:a=>{P.enableVertexAttribArray(a)},D:a=>P.frontFace(a),Da:(a,b)=>{Ib(a,b,"createBuffer",yb)},Aa:(a,b)=>{Ib(a,b,"createRenderbuffer",Ab)},Yb:(a,b)=>{Ib(a,b,"createSampler",T)},xa:(a,b)=>{Ib(a,b,"createTexture",Bb)},Na:(a,b)=>{Ib(a,b,"createVertexArray",Cb)},Ob:(a,b)=>P.getAttribLocation(R[a],b?B(t,b):""),d:(a,b)=>Ub(a,b),Ub:(a,b,c,d)=>{a=P.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?M(a,d,b):0;c&&(u[c>>2]=b)},pa:(a,b,c)=>{if(c)if(a>=xb)U||=1281;else if(a=
R[a],35716==b)a=P.getProgramInfoLog(a),null===a&&(a="(unknown error)"),u[c>>2]=a.length+1;else if(35719==b){if(!a.Nc){var d=P.getProgramParameter(a,35718);for(b=0;b<d;++b)a.Nc=Math.max(a.Nc,P.getActiveUniform(a,b).name.length+1)}u[c>>2]=a.Nc}else if(35722==b){if(!a.Lc)for(d=P.getProgramParameter(a,35721),b=0;b<d;++b)a.Lc=Math.max(a.Lc,P.getActiveAttrib(a,b).name.length+1);u[c>>2]=a.Lc}else if(35381==b){if(!a.Mc)for(d=P.getProgramParameter(a,35382),b=0;b<d;++b)a.Mc=Math.max(a.Mc,P.getActiveUniformBlockName(a,
b).length+1);u[c>>2]=a.Mc}else u[c>>2]=P.getProgramParameter(a,b);else U||=1281},Pb:(a,b,c,d)=>{a=P.getShaderInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?M(a,d,b):0;c&&(u[c>>2]=b)},na:(a,b,c)=>{c?35716==b?(a=P.getShaderInfoLog(S[a]),null===a&&(a="(unknown error)"),u[c>>2]=a?a.length+1:0):35720==b?(a=P.getShaderSource(S[a]),u[c>>2]=a?a.length+1:0):u[c>>2]=P.getShaderParameter(S[a],b):U||=1281},Ka:(a,b)=>{if(2>V.version)return U||=1282,0;var c=Eb[a];if(c)return 0>b||b>=c.length?(U||=1281,
0):c[b];switch(a){case 7939:return c=Tb().map(Wb),c=Eb[a]=c,0>b||b>=c.length?(U||=1281,0):c[b];default:return U||=1280,0}},oa:(a,b)=>{b=b?B(t,b):"";if(a=R[a]){var c=a,d=c.Jc,e=c.td,g;if(!d){c.Jc=d={};c.sd={};var f=P.getProgramParameter(c,35718);for(g=0;g<f;++g){var l=P.getActiveUniform(c,g);var m=l.name;l=l.size;var p=Xb(m);p=0<p?m.slice(0,p):m;var v=c.Yc;c.Yc+=l;e[p]=[l,v];for(m=0;m<l;++m)d[v]=m,c.sd[v++]=p}}c=a.Jc;d=0;e=b;g=Xb(b);0<g&&(d=parseInt(b.slice(g+1))>>>0,e=b.slice(0,g));if((e=a.td[e])&&
d<e[0]&&(d+=e[1],c[d]=c[d]||P.getUniformLocation(a,b)))return d}else U||=1281;return-1},rb:(a,b,c)=>{for(var d=Yb[b],e=0;e<b;e++)d[e]=u[c+4*e>>2];P.invalidateFramebuffer(a,d)},Wb:a=>{a=R[a];P.linkProgram(a);a.Jc=0;a.td={}},Ma:(a,b)=>{3317==a?Fb=b:3314==a&&(Gb=b);P.pixelStorei(a,b)},E:(a,b)=>P.polygonOffset(a,b),tb:a=>P.readBuffer(a),ya:(a,b,c,d,e)=>P.renderbufferStorageMultisample(a,b,c,d,e),ra:(a,b,c)=>{P.samplerParameterf(T[a],b,c)},f:(a,b,c)=>{P.samplerParameteri(T[a],b,c)},n:(a,b,c,d)=>P.scissor(a,
b,c,d),Rb:(a,b,c,d)=>{for(var e="",g=0;g<b;++g){var f=(f=w[c+4*g>>2])?B(t,f,d?w[d+4*g>>2]:void 0):"";e+=f}P.shaderSource(S[a],e)},Ja:(a,b,c)=>P.stencilFunc(a,b,c),la:(a,b,c,d)=>P.stencilFuncSeparate(a,b,c,d),s:a=>P.stencilMask(a),Ia:(a,b,c)=>P.stencilOp(a,b,c),ka:(a,b,c,d)=>P.stencilOpSeparate(a,b,c,d),$b:(a,b,c,d,e,g,f,l,m)=>{if(2<=V.version){if(P.Hc){P.texImage2D(a,b,c,d,e,g,f,l,m);return}if(m){var p=Zb(l);m>>>=31-Math.clz32(p.BYTES_PER_ELEMENT);P.texImage2D(a,b,c,d,e,g,f,l,p,m);return}}p=m?$b(l,
f,d,e,m):null;P.texImage2D(a,b,c,d,e,g,f,l,p)},Zb:(a,b,c,d,e,g,f,l,m,p)=>{if(P.Hc)P.texImage3D(a,b,c,d,e,g,f,l,m,p);else if(p){var v=Zb(m);P.texImage3D(a,b,c,d,e,g,f,l,m,v,p>>>31-Math.clz32(v.BYTES_PER_ELEMENT))}else P.texImage3D(a,b,c,d,e,g,f,l,m,null)},wa:(a,b,c)=>P.texParameteri(a,b,c),va:(a,b,c,d,e)=>P.texStorage2D(a,b,c,d,e),ua:(a,b,c,d,e,g)=>P.texStorage3D(a,b,c,d,e,g),qb:(a,b,c,d,e,g,f,l,m)=>{if(2<=V.version){if(P.Hc){P.texSubImage2D(a,b,c,d,e,g,f,l,m);return}if(m){var p=Zb(l);P.texSubImage2D(a,
b,c,d,e,g,f,l,p,m>>>31-Math.clz32(p.BYTES_PER_ELEMENT));return}}m=m?$b(l,f,e,g,m):null;P.texSubImage2D(a,b,c,d,e,g,f,l,m)},pb:(a,b,c,d,e,g,f,l,m,p,v)=>{if(P.Hc)P.texSubImage3D(a,b,c,d,e,g,f,l,m,p,v);else if(v){var Q=Zb(p);P.texSubImage3D(a,b,c,d,e,g,f,l,m,p,Q,v>>>31-Math.clz32(Q.BYTES_PER_ELEMENT))}else P.texSubImage3D(a,b,c,d,e,g,f,l,m,p,null)},Hb:(a,b,c)=>{if(2<=V.version)b&&P.uniform1fv(W(a),x,c>>2,b);else{if(288>=b)for(var d=X[b],e=0;e<b;++e)d[e]=x[c+4*e>>2];else d=x.subarray(c>>2,c+4*b>>2);P.uniform1fv(W(a),
d)}},Tb:(a,b)=>{P.uniform1i(W(a),b)},Db:(a,b,c)=>{if(2<=V.version)b&&P.uniform1iv(W(a),u,c>>2,b);else{if(288>=b)for(var d=ac[b],e=0;e<b;++e)d[e]=u[c+4*e>>2];else d=u.subarray(c>>2,c+4*b>>2);P.uniform1iv(W(a),d)}},Gb:(a,b,c)=>{if(2<=V.version)b&&P.uniform2fv(W(a),x,c>>2,2*b);else{if(144>=b){b*=2;for(var d=X[b],e=0;e<b;e+=2)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2]}else d=x.subarray(c>>2,c+8*b>>2);P.uniform2fv(W(a),d)}},Cb:(a,b,c)=>{if(2<=V.version)b&&P.uniform2iv(W(a),u,c>>2,2*b);else{if(144>=b){b*=
2;for(var d=ac[b],e=0;e<b;e+=2)d[e]=u[c+4*e>>2],d[e+1]=u[c+(4*e+4)>>2]}else d=u.subarray(c>>2,c+8*b>>2);P.uniform2iv(W(a),d)}},Fb:(a,b,c)=>{if(2<=V.version)b&&P.uniform3fv(W(a),x,c>>2,3*b);else{if(96>=b){b*=3;for(var d=X[b],e=0;e<b;e+=3)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2],d[e+2]=x[c+(4*e+8)>>2]}else d=x.subarray(c>>2,c+12*b>>2);P.uniform3fv(W(a),d)}},Bb:(a,b,c)=>{if(2<=V.version)b&&P.uniform3iv(W(a),u,c>>2,3*b);else{if(96>=b){b*=3;for(var d=ac[b],e=0;e<b;e+=3)d[e]=u[c+4*e>>2],d[e+1]=u[c+(4*e+
4)>>2],d[e+2]=u[c+(4*e+8)>>2]}else d=u.subarray(c>>2,c+12*b>>2);P.uniform3iv(W(a),d)}},Eb:(a,b,c)=>{if(2<=V.version)b&&P.uniform4fv(W(a),x,c>>2,4*b);else{if(72>=b){var d=X[4*b],e=x;c>>=2;b*=4;for(var g=0;g<b;g+=4){var f=c+g;d[g]=e[f];d[g+1]=e[f+1];d[g+2]=e[f+2];d[g+3]=e[f+3]}}else d=x.subarray(c>>2,c+16*b>>2);P.uniform4fv(W(a),d)}},Ab:(a,b,c)=>{if(2<=V.version)b&&P.uniform4iv(W(a),u,c>>2,4*b);else{if(72>=b){b*=4;for(var d=ac[b],e=0;e<b;e+=4)d[e]=u[c+4*e>>2],d[e+1]=u[c+(4*e+4)>>2],d[e+2]=u[c+(4*e+
8)>>2],d[e+3]=u[c+(4*e+12)>>2]}else d=u.subarray(c>>2,c+16*b>>2);P.uniform4iv(W(a),d)}},zb:(a,b,c,d)=>{if(2<=V.version)b&&P.uniformMatrix4fv(W(a),!!c,x,d>>2,16*b);else{if(18>=b){var e=X[16*b],g=x;d>>=2;b*=16;for(var f=0;f<b;f+=16){var l=d+f;e[f]=g[l];e[f+1]=g[l+1];e[f+2]=g[l+2];e[f+3]=g[l+3];e[f+4]=g[l+4];e[f+5]=g[l+5];e[f+6]=g[l+6];e[f+7]=g[l+7];e[f+8]=g[l+8];e[f+9]=g[l+9];e[f+10]=g[l+10];e[f+11]=g[l+11];e[f+12]=g[l+12];e[f+13]=g[l+13];e[f+14]=g[l+14];e[f+15]=g[l+15]}}else e=x.subarray(d>>2,d+64*
b>>2);P.uniformMatrix4fv(W(a),!!c,e)}},j:a=>{a=R[a];P.useProgram(a);P.vd=a},Jb:(a,b)=>{P.vertexAttribDivisor(a,b)},Kb:(a,b,c,d,e,g)=>{P.vertexAttribPointer(a,b,c,!!d,e,g)},o:(a,b,c,d)=>P.viewport(a,b,c,d),bb:Ja,Qa:function(){h.md=a=>{0!=lc()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",h.md)},Ha:function(){h.rd=a=>{const b=a.clipboardData.getData("text");fc(()=>{const c=cc(b);mc(c)})};window.addEventListener("paste",h.rd)},ac:function(){h.Xd=[];h.nd=b=>{b.stopPropagation();
b.preventDefault()};h.od=b=>{b.stopPropagation();b.preventDefault()};h.pd=b=>{b.stopPropagation();b.preventDefault()};h.qd=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;h.Yd=c;nc(c.length);for(let e=0;e<c.length;e++)fc(()=>{const g=cc(c[e].name);oc(e,g)});let d=0;b.shiftKey&&(d|=1);b.ctrlKey&&(d|=2);b.altKey&&(d|=4);b.metaKey&&(d|=8);pc(b.clientX,b.clientY,d)};const a=h.Fc;a.addEventListener("dragenter",h.nd,!1);a.addEventListener("dragleave",h.od,!1);a.addEventListener("dragover",
h.pd,!1);a.addEventListener("drop",h.qd,!1)},nb:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},Nb:function(a){a=a?B(t,a):"";void 0!==h.canvas&&("object"===typeof h.canvas?gb[a]=h.canvas:console.warn("sokol_app.h: Module['canvas'] is set but is not an object"));h.Fc=K(a);h.Fc||console.warn("sokol_app.h: can't find html5_canvas_selector ",a);h.Fc.requestPointerLock||console.warn("sokol_app.h: target doesn't support requestPointerLock: ",a)},La:function(){window.removeEventListener("beforeunload",
h.md)},Ga:function(){window.removeEventListener("paste",h.rd)},Vb:function(){const a=h.Fc;a.removeEventListener("dragenter",h.nd);a.removeEventListener("dragleave",h.od);a.removeEventListener("dragover",h.pd);a.removeEventListener("drop",h.qd)},x:function(){h.Fc&&h.Fc.requestPointerLock&&h.Fc.requestPointerLock()},yb:function(a,b){if(h.Fc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a=
"ew-resize";break;case 6:a="ns-resize";break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";break;case 10:a="not-allowed";break;default:a="auto"}h.Fc.style.cursor=a}},eb:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),g=e.createImageData(a,b);g.data.set(t.subarray(c,c+a*b*4));e.putImageData(g,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},
Ca:function(a){a=a?B(t,a):"";const b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},Xa:function(){const a=(new URLSearchParams(window.location.search)).entries();for(let b=a.next();!b.done;b=
a.next()){const c=b.value[0],d=b.value[1];fc(()=>{const e=cc(c),g=cc(d);qc(e,g)})}},Ya:function(){return h.Gc?h.Gc.bufferSize:0},$a:function(a,b,c){h.zc=null;h.Gc=null;"undefined"!==typeof AudioContext?h.zc=new AudioContext({sampleRate:a,latencyHint:"interactive"}):(h.zc=null,console.log("sokol_audio.h: no WebAudio support"));return h.zc?(console.log("sokol_audio.h: sample rate ",h.zc.sampleRate),h.Gc=h.zc.createScriptProcessor(c,0,b),h.Gc.onaudioprocess=d=>{const e=d.outputBuffer.length,g=rc(e);
if(g){const f=d.outputBuffer.numberOfChannels;for(let l=0;l<f;l++){const m=d.outputBuffer.getChannelData(l);for(let p=0;p<e;p++)m[p]=x[(g>>2)+(f*p+l)]}}},h.Gc.connect(h.zc.destination),a=()=>{h.zc&&"suspended"===h.zc.state&&h.zc.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchend",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},Za:function(){return h.zc?h.zc.sampleRate:0},ha:function(){const a=h.zc;null!==a&&(h.Gc&&h.Gc.disconnect(),a.close(),
h.zc=null,h.Gc=null)},v:function(a,b,c,d,e,g){b=b?B(t,b):"";const f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";const l=0<d;l&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(f.readyState==XMLHttpRequest.DONE)if(206==f.status||200==f.status&&!l){const m=new Uint8Array(f.response),p=m.length;p<=g?(t.set(m,e),sc(a,d,p)):tc(a)}else uc(a,f.status)};f.send()},ga:function(a,b){b=b?B(t,b):"";const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=
function(){if(c.readyState==XMLHttpRequest.DONE)if(200==c.status){const d=c.getResponseHeader("Content-Length");vc(a,d)}else uc(a,c.status)};c.send()},sa:function(){return navigator.userAgent.includes("Macintosh")?1:0},fa:function(a,b){b=b?B(t,b):"";switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}},Z;
(async function(){function a(c){Z=c.exports;na=Z.cc;ra();jb=Z.uc;ta.unshift(Z.dc);z--;h.monitorRunDependencies?.(z);0==z&&A&&(c=A,A=null,c());return Z}z++;h.monitorRunDependencies?.(z);var b={a:wc};if(h.instantiateWasm)try{return h.instantiateWasm(b,a)}catch(c){return n(`Module.instantiateWasm callback failed with error: ${c}`),!1}za??=ya("lc80.wasm")?"lc80.wasm":h.locateFile?h.locateFile("lc80.wasm",k):k+"lc80.wasm";b=await Ca(b);a(b.instance);return b})();
var N=a=>(N=Z.ec)(a),jc=h._fs_emsc_alloc=a=>(jc=h._fs_emsc_alloc=Z.fc)(a),kc=h._fs_emsc_load_snapshot_callback=(a,b,c)=>(kc=h._fs_emsc_load_snapshot_callback=Z.gc)(a,b,c),mc=h.__sapp_emsc_onpaste=a=>(mc=h.__sapp_emsc_onpaste=Z.hc)(a),lc=h.__sapp_html5_get_ask_leave_site=()=>(lc=h.__sapp_html5_get_ask_leave_site=Z.ic)(),nc=h.__sapp_emsc_begin_drop=a=>(nc=h.__sapp_emsc_begin_drop=Z.jc)(a),oc=h.__sapp_emsc_drop=(a,b)=>(oc=h.__sapp_emsc_drop=Z.kc)(a,b),pc=h.__sapp_emsc_end_drop=(a,b,c)=>(pc=h.__sapp_emsc_end_drop=
Z.lc)(a,b,c);h.__sapp_emsc_invoke_fetch_cb=(a,b,c,d,e,g,f,l)=>(h.__sapp_emsc_invoke_fetch_cb=Z.mc)(a,b,c,d,e,g,f,l);
var xc=h._main=(a,b)=>(xc=h._main=Z.nc)(a,b),rc=h.__saudio_emsc_pull=a=>(rc=h.__saudio_emsc_pull=Z.oc)(a),qc=h.__sargs_add_kvp=(a,b)=>(qc=h.__sargs_add_kvp=Z.pc)(a,b),vc=h.__sfetch_emsc_head_response=(a,b)=>(vc=h.__sfetch_emsc_head_response=Z.qc)(a,b),sc=h.__sfetch_emsc_get_response=(a,b,c)=>(sc=h.__sfetch_emsc_get_response=Z.rc)(a,b,c),uc=h.__sfetch_emsc_failed_http_status=(a,b)=>(uc=h.__sfetch_emsc_failed_http_status=Z.sc)(a,b),tc=h.__sfetch_emsc_failed_buffer_too_small=a=>(tc=h.__sfetch_emsc_failed_buffer_too_small=
Z.tc)(a),ic=(a,b)=>(ic=Z.vc)(a,b),ec=a=>(ec=Z.wc)(a),bc=a=>(bc=Z.xc)(a),dc=()=>(dc=Z.yc)(),yc;A=function zc(){yc||Ac();yc||(A=zc)};function Bc(a=[]){var b=xc;a.unshift(fa);var c=a.length,d=bc(4*(c+1)),e=d;a.forEach(f=>{w[e>>2]=cc(f);e+=4});w[e>>2]=0;try{var g=b(c,d);Ka(g)}catch(f){Ia(f)}}
function Ac(){var a=ea;function b(){if(!yc&&(yc=!0,h.calledRun=!0,!q)){Ea(ta);Ea(ua);h.onRuntimeInitialized?.();Cc&&Bc(a);if(h.postRun)for("function"==typeof h.postRun&&(h.postRun=[h.postRun]);h.postRun.length;){var c=h.postRun.shift();va.unshift(c)}Ea(va)}}if(!(0<z)){if(h.preRun)for("function"==typeof h.preRun&&(h.preRun=[h.preRun]);h.preRun.length;)wa();Ea(sa);0<z||(h.setStatus?(h.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>h.setStatus(""),1);b()},1)):b())}}
if(h.preInit)for("function"==typeof h.preInit&&(h.preInit=[h.preInit]);0<h.preInit.length;)h.preInit.pop()();var Cc=!0;h.noInitialRun&&(Cc=!1);Ac();
