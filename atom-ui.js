var e;e||(e=typeof Module !== 'undefined' ? Module : {});var h={},k;for(k in e)e.hasOwnProperty(k)&&(h[k]=e[k]);var n=[],aa="./this.program";function t(a,b){throw b;}var u=!1,v=!1,ba=!1,ca=!1,da=!1;u="object"===typeof window;v="function"===typeof importScripts;ba=(ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!u&&!v;da=!u&&!ba&&!v;var x="",ea,y,fa,ha;
if(ba)x=__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},y=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),n=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",ja),t=function(a){process.exit(a)},
e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),y=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?n=scriptArgs:"undefined"!=typeof arguments&&(n=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=
console.error="undefined"!==typeof printErr?printErr:print);else if(u||v)v?x=self.location.href:document.currentScript&&(x=document.currentScript.src),x=0!==x.indexOf("blob:")?x.substr(0,x.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(y=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ka=e.print||console.log.bind(console),z=e.printErr||console.warn.bind(console);for(k in h)h.hasOwnProperty(k)&&(e[k]=h[k]);h=null;e.arguments&&(n=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var A;e.wasmBinary&&(A=e.wasmBinary);var B;e.noExitRuntime&&(B=e.noExitRuntime);"object"!==typeof WebAssembly&&z("no native wasm support detected");var C,la=new WebAssembly.Table({initial:54,maximum:54,element:"anyfunc"}),ma=!1;function assert(a,b){a||ja("Assertion failed: "+b)}
function na(a){var b=e["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function oa(a,b,c,d){var f={string:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=pa(c);D(a,E,b,c)}return b},array:function(a){var b=pa(a.length);qa.set(a,b);return b}},g=na(a),l=[];a=0;if(d)for(var m=0;m<d.length;m++){var q=f[c[m]];q?(0===a&&(a=ra()),l[m]=q(d[m])):l[m]=d[m]}c=g.apply(null,l);c=function(a){return"string"===b?F(a):"boolean"===b?!!a:a}(c);0!==a&&sa(a);return c}var ta="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function F(a,b){if(a){var c=E,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ta)a=ta.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var g=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|g);else{var l=c[a++]&63;f=224==(f&240)?(f&15)<<12|g<<6|l:(f&7)<<18|g<<12|l<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function D(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var g=0;g<a.length;++g){var l=a.charCodeAt(g);if(55296<=l&&57343>=l){var m=a.charCodeAt(++g);l=65536+((l&1023)<<10)|m&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-f}
function ua(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function va(a){var b=ua(a)+1,c=pa(b);D(a,qa,c,b);return c}function wa(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,qa,E,xa,ya,G,za,H,I;
function Aa(a){buffer=a;e.HEAP8=qa=new Int8Array(a);e.HEAP16=xa=new Int16Array(a);e.HEAP32=G=new Int32Array(a);e.HEAPU8=E=new Uint8Array(a);e.HEAPU16=ya=new Uint16Array(a);e.HEAPU32=za=new Uint32Array(a);e.HEAPF32=H=new Float32Array(a);e.HEAPF64=I=new Float64Array(a)}var Ba=e.TOTAL_MEMORY||33554432;e.wasmMemory?C=e.wasmMemory:C=new WebAssembly.Memory({initial:Ba/65536});C&&(buffer=C.buffer);Ba=buffer.byteLength;Aa(buffer);G[1710848]=12086432;
function Ca(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.bc;"number"===typeof c?void 0===b.Vb?e.dynCall_v(c):e.dynCall_vi(c,b.Vb):c(void 0===b.Vb?null:b.Vb)}}}var Da=[],Ea=[],Fa=[],Ga=[],Ha=[];function Ia(){var a=e.preRun.shift();Da.unshift(a)}var J=0,Ja=null,K=null;e.preloadedImages={};e.preloadedAudios={};function ja(a){if(e.onAbort)e.onAbort(a);ka(a);z(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ka(){var a=L;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var L="atom-ui.wasm";if(!Ka()){var La=L;L=e.locateFile?e.locateFile(La,x):x+La}function Na(){try{if(A)return new Uint8Array(A);if(y)return y(L);throw"both async and sync fetching of the wasm failed";}catch(a){ja(a)}}
function Oa(){return A||!u&&!v||"function"!==typeof fetch?new Promise(function(a){a(Na())}):fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Na()})}Ea.push({bc:function(){Pa()}});var Qa=0,Ra=0,M=0,Sa=0,Ta=0,Ua=null,Va=null,Wa=!1;function Xa(){for(var a=N.length-1;0<=a;--a)Ya(a);N=[];Za=[]}var Za=[];
function $a(){if(ab&&bb.Ob)for(var a=0;a<Za.length;++a){var b=Za[a];Za.splice(a,1);--a;b.nc.apply(this,b.hc)}}var ab=0,bb=null,N=[];function Ya(a){var b=N[a];b.target.removeEventListener(b.Mb,b.$b,b.Nb);N.splice(a,1)}function O(a){function b(b){++ab;bb=a;$a();a.Qb(b);$a();--ab}if(a.Pb)a.$b=b,a.target.addEventListener(a.Mb,b,a.Nb),N.push(a),Wa||(Ga.push(Xa),Wa=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].Mb==a.Mb&&Ya(c--)}function cb(a){return a===a+0?F(a):a}
var db=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function P(a){return db[a]||("undefined"!==typeof document?document.querySelector(cb(a)):void 0)}
function eb(a,b,c,d,f,g){Qa||(Qa=Q(164));a={target:P(a),Ob:!0,Mb:g,Pb:d,Qb:function(a){a=a||event;var c=Qa;D(a.key?a.key:"",E,c+0,32);D(a.code?a.code:"",E,c+32,32);G[c+64>>2]=a.location;G[c+68>>2]=a.ctrlKey;G[c+72>>2]=a.shiftKey;G[c+76>>2]=a.altKey;G[c+80>>2]=a.metaKey;G[c+84>>2]=a.repeat;D(a.locale?a.locale:"",E,c+88,32);D(a.char?a.char:"",E,c+120,32);G[c+152>>2]=a.charCode;G[c+156>>2]=a.keyCode;G[c+160>>2]=a.which;R(d,f,c,b)&&a.preventDefault()},Nb:c};O(a)}
function fb(a,b,c){G[a>>2]=b.screenX;G[a+4>>2]=b.screenY;G[a+8>>2]=b.clientX;G[a+12>>2]=b.clientY;G[a+16>>2]=b.ctrlKey;G[a+20>>2]=b.shiftKey;G[a+24>>2]=b.altKey;G[a+28>>2]=b.metaKey;xa[a+32>>1]=b.button;xa[a+34>>1]=b.buttons;var d=b.movementY||b.screenY-Va;G[a+36>>2]=b.movementX||b.screenX-Ua;G[a+40>>2]=d;c=0>db.indexOf(c)?c.getBoundingClientRect():{left:0,top:0};G[a+44>>2]=b.clientX-c.left;G[a+48>>2]=b.clientY-c.top;"wheel"!==b.type&&"mousewheel"!==b.type&&(Ua=b.screenX,Va=b.screenY)}
function S(a,b,c,d,f,g){Ra||(Ra=Q(64));a=P(a);O({target:a,Ob:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,Mb:g,Pb:d,Qb:function(c){c=c||event;fb(Ra,c,a);R(d,f,Ra,b)&&c.preventDefault()},Nb:c})}
function gb(a,b,c,d){Sa||(Sa=Q(36));a=P(a);O({target:a,Ob:!1,Mb:"resize",Pb:d,Qb:function(c){c=c||event;if(c.target==a){var f=Sa,l=document.body;G[f>>2]=c.detail;G[f+4>>2]=l.clientWidth;G[f+8>>2]=l.clientHeight;G[f+12>>2]=innerWidth;G[f+16>>2]=innerHeight;G[f+20>>2]=outerWidth;G[f+24>>2]=outerHeight;G[f+28>>2]=pageXOffset;G[f+32>>2]=pageYOffset;R(d,10,f,b)&&c.preventDefault()}},Nb:c})}
function ib(a,b,c,d,f,g){Ta||(Ta=Q(1684));a=P(a);O({target:a,Ob:"touchstart"==g||"touchend"==g,Mb:g,Pb:d,Qb:function(c){c=c||event;for(var g={},l=0;l<c.touches.length;++l){var p=c.touches[l];p.Xb=!1;g[p.identifier]=p}for(l=0;l<c.changedTouches.length;++l)p=c.changedTouches[l],g[p.identifier]=p,p.Xb=!0;for(l=0;l<c.targetTouches.length;++l)p=c.targetTouches[l],g[p.identifier].ec=!0;var r=p=Ta;G[r+4>>2]=c.ctrlKey;G[r+8>>2]=c.shiftKey;G[r+12>>2]=c.altKey;G[r+16>>2]=c.metaKey;r+=20;var Ma=a.getBoundingClientRect(),
hb=0;for(l in g){var w=g[l];G[r>>2]=w.identifier;G[r+4>>2]=w.screenX;G[r+8>>2]=w.screenY;G[r+12>>2]=w.clientX;G[r+16>>2]=w.clientY;G[r+20>>2]=w.pageX;G[r+24>>2]=w.pageY;G[r+28>>2]=w.Xb;G[r+32>>2]=w.ec;G[r+36>>2]=w.clientX-Ma.left;G[r+40>>2]=w.clientY-Ma.top;r+=52;if(32<=++hb)break}G[p>>2]=hb;R(d,f,p,b)&&c.preventDefault()},Nb:c})}function jb(a,b,c,d,f,g){a={target:P(a),Ob:!1,Mb:g,Pb:d,Qb:function(a){a=a||event;R(d,f,0,b)&&a.preventDefault()},Nb:c};O(a)}
function kb(a,b,c,d,f){function g(c){c=c||event;fb(M,c,a);I[M+64>>3]=c.wheelDeltaX||0;I[M+72>>3]=-(c.wheelDeltaY||c.wheelDelta);I[M+80>>3]=0;G[M+88>>2]=0;R(d,9,M,b)&&c.preventDefault()}function l(c){c=c||event;var f=M;fb(f,c,a);I[f+64>>3]=c.deltaX;I[f+72>>3]=c.deltaY;I[f+80>>3]=c.deltaZ;G[f+88>>2]=c.deltaMode;R(d,9,f,b)&&c.preventDefault()}M||(M=Q(96));O({target:a,Ob:!0,Mb:f,Pb:d,Qb:"wheel"==f?l:g,Nb:c})}
var lb=["default","low-power","high-performance"],mb=1,nb=0,ob=[],T=[],pb=[],qb=[],rb=[],U=[],V=[],sb={},tb=null,ub={},vb={};function W(a){nb||(nb=a)}function wb(a){for(var b=mb++,c=a.length;c<b;c++)a[c]=null;return b}var X=[0];
function xb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(a,d){b.vertexAttribDivisorANGLE(a,d)},a.drawArraysInstanced=function(a,d,f,g){b.drawArraysInstancedANGLE(a,d,f,g)},a.drawElementsInstanced=function(a,d,f,g,l){b.drawElementsInstancedANGLE(a,d,f,g,l)})}
function yb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(a){b.deleteVertexArrayOES(a)},a.bindVertexArray=function(a){b.bindVertexArrayOES(a)},a.isVertexArray=function(a){return b.isVertexArrayOES(a)})}function zb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(a,d){b.drawBuffersWEBGL(a,d)})}
function Ab(a){a||(a=tb);if(!a.cc){a.cc=!0;var b=a.Ub;2>a.version&&(xb(b),yb(b),zb(b));b.jc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");
(b.getSupportedExtensions()||[]).forEach(function(a){-1!=c.indexOf(a)&&b.getExtension(a)})}}var Bb,Cb;function Db(a,b,c,d){for(var f=0;f<a;f++){var g=Y[c](),l=g&&wb(d);g?(g.name=l,d[l]=g):W(1282);G[b+4*f>>2]=l}}
function Eb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){W(1280);z("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:W(1280);z("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else W(1281)}function Fb(a){var b=ua(a)+1,c=Q(b);D(a,E,c,b);return c}
function Gb(a,b,c,d,f){a-=5120;a=1==a?E:4==a?G:6==a?H:5==a||28922==a?za:ya;var g=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>g,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<g)+4-1&-4)>>g)}for(var Y,Hb=new Float32Array(256),Z=0;256>Z;Z++)X[Z]=Hb.subarray(0,Z+1);for(Z=0;256>Z;Z++);
var Mb={eb:function(){console.log("fs.h: registering Module['ccall']");e.ccall=oa},fb:function(a){var b=F(a),c=new XMLHttpRequest;c.open("GET",b);c.responseType="arraybuffer";c.onload=function(){var a=new Uint8Array(c.response);oa("emsc_load_data","int",["string","array","number"],[b,a,a.length])};c.send()},P:function(){return devicePixelRatio||1},X:function(a,b,c){a=P(a);if(!a)return-4;a=a.getBoundingClientRect();I[b>>3]=a.width;I[c>>3]=a.height;return 0},Va:function(a,b,c){E.set(E.subarray(b,b+
c),a)},Fa:function(a,b){function c(d){Ib(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Wa:function(a){if(2147418112<a)return!1;for(var b=Math.max(qa.length,16777216);b<a;)536870912>=b?b=wa(2*b):b=Math.min(wa((3*b+2147483648)/4),2147418112);a:{try{C.grow(b-buffer.byteLength+65535>>16);Aa(C.buffer);var c=1;break a}catch(d){}c=void 0}return c?!0:!1},N:function(a,b,c){a=P(a);if(!a)return-4;a.width=b;a.height=c;return 0},Pa:function(a,b,c,d){eb(a,b,c,d,2,"keydown");return 0},Na:function(a,
b,c,d){eb(a,b,c,d,1,"keypress");return 0},Oa:function(a,b,c,d){eb(a,b,c,d,3,"keyup");return 0},Ya:function(a,b,c,d){S(a,b,c,d,5,"mousedown");return 0},Sa:function(a,b,c,d){S(a,b,c,d,33,"mouseenter");return 0},Ra:function(a,b,c,d){S(a,b,c,d,34,"mouseleave");return 0},Ta:function(a,b,c,d){S(a,b,c,d,8,"mousemove");return 0},Ua:function(a,b,c,d){S(a,b,c,d,6,"mouseup");return 0},za:function(a,b,c,d){gb(a,b,c,d);return 0},Ia:function(a,b,c,d){ib(a,b,c,d,25,"touchcancel");return 0},Ja:function(a,b,c,d){ib(a,
b,c,d,23,"touchend");return 0},Ka:function(a,b,c,d){ib(a,b,c,d,24,"touchmove");return 0},La:function(a,b,c,d){ib(a,b,c,d,22,"touchstart");return 0},Ha:function(a,b,c,d){jb(a,b,c,d,31,"webglcontextlost");return 0},Ga:function(a,b,c,d){jb(a,b,c,d,32,"webglcontextrestored");return 0},Qa:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(kb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(kb(a,b,c,d,"mousewheel"),0):-1},E:function(a,b){var c={};b>>=2;c.alpha=!!G[b];c.depth=!!G[b+1];
c.stencil=!!G[b+2];c.antialias=!!G[b+3];c.premultipliedAlpha=!!G[b+4];c.preserveDrawingBuffer=!!G[b+5];c.powerPreference=lb[G[b+6]];c.failIfMajorPerformanceCaveat=!!G[b+7];c.dc=G[b+8];c.kc=G[b+9];c.Yb=G[b+10];c.ac=G[b+11];c.lc=G[b+12];c.mc=G[b+13];a=P(a);if(!a||c.ac)c=0;else if(a=a.getContext("webgl",c)){b=Q(8);var d={handle:b,attributes:c,version:c.dc,Ub:a};a.canvas&&(a.canvas.fc=d);sb[b]=d;("undefined"===typeof c.Yb||c.Yb)&&Ab(d);c=b}else c=0;return c},db:function(a,b){a=sb[a];b=F(b);0==b.indexOf("GL_")&&
(b=b.substr(3));"ANGLE_instanced_arrays"==b?xb(Y):"OES_vertex_array_object"==b?yb(Y):"WEBGL_draw_buffers"==b&&zb(Y);return!!a.Ub.getExtension(b)},pa:function(a){a>>=2;for(var b=0;14>b;++b)G[a+b]=0;G[a]=G[a+1]=G[a+3]=G[a+4]=G[a+8]=G[a+10]=1},ga:function(a){tb=sb[a];e.ic=Y=tb&&tb.Ub;return!a||Y?0:-5},g:function(a){Y.activeTexture(a)},Q:function(a,b){Y.attachShader(T[a],V[b])},b:function(a,b){Y.bindBuffer(a,ob[b])},f:function(a,b){Y.bindFramebuffer(a,pb[b])},ya:function(a,b){Y.bindRenderbuffer(a,qb[b])},
a:function(a,b){Y.bindTexture(a,rb[b])},G:function(a,b,c,d){Y.blendColor(a,b,c,d)},H:function(a,b){Y.blendEquationSeparate(a,b)},I:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},T:function(a,b,c,d){Y.bufferData(a,c?E.subarray(c,c+b):b,d)},q:function(a,b,c,d){Y.bufferSubData(a,b,E.subarray(d,d+c))},m:function(a){return Y.checkFramebufferStatus(a)},na:function(a){Y.clear(a)},ra:function(a,b,c,d){Y.clearColor(a,b,c,d)},qa:function(a){Y.clearDepth(a)},oa:function(a){Y.clearStencil(a)},y:function(a,b,
c,d){Y.colorMask(!!a,!!b,!!c,!!d)},_a:function(a){Y.compileShader(V[a])},S:function(a,b,c,d,f,g,l,m){Y.compressedTexImage2D(a,b,c,d,f,g,m?E.subarray(m,m+l):null)},va:function(){var a=wb(T),b=Y.createProgram();b.name=a;T[a]=b;return a},ab:function(a){var b=wb(V);V[b]=Y.createShader(a);return b},F:function(a){Y.cullFace(a)},Ba:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=ob[d];f&&(Y.deleteBuffer(f),f.name=0,ob[d]=null,d==Bb&&(Bb=0),d==Cb&&(Cb=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=
G[b+4*c>>2],f=pb[d];f&&(Y.deleteFramebuffer(f),f.name=0,pb[d]=null)}},V:function(a){if(a){var b=T[a];b?(Y.deleteProgram(b),b.name=0,T[a]=null,ub[a]=null):W(1281)}},r:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=qb[d];f&&(Y.deleteRenderbuffer(f),f.name=0,qb[d]=null)}},z:function(a){if(a){var b=V[a];b?(Y.deleteShader(b),V[a]=null):W(1281)}},W:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=rb[d];f&&(Y.deleteTexture(f),f.name=0,rb[d]=null)}},w:function(a){Y.depthFunc(a)},x:function(a){Y.depthMask(!!a)},
d:function(a){Y.disable(a)},A:function(a){Y.disableVertexAttribArray(a)},ca:function(a,b,c){Y.drawArrays(a,b,c)},da:function(a,b,c,d){Y.drawElements(a,b,c,d)},e:function(a){Y.enable(a)},ka:function(a){Y.enableVertexAttribArray(a)},k:function(a,b,c,d){Y.framebufferRenderbuffer(a,b,c,qb[d])},c:function(a,b,c,d,f){Y.framebufferTexture2D(a,b,c,rb[d],f)},D:function(a){Y.frontFace(a)},U:function(a,b){Db(a,b,"createBuffer",ob)},n:function(a,b){Db(a,b,"createFramebuffer",pb)},Aa:function(a,b){Db(a,b,"createRenderbuffer",
qb)},wa:function(a,b){Db(a,b,"createTexture",rb)},sa:function(a,b){return Y.getAttribLocation(T[a],F(b))},i:function(a,b){Eb(a,b)},ta:function(a,b,c,d){a=Y.getProgramInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(G[c>>2]=b)},O:function(a,b,c){if(c)if(a>=mb)W(1281);else{var d=ub[a];if(d)if(35716==b)a=Y.getProgramInfoLog(T[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1;else if(35719==b)G[c>>2]=d.Wb;else if(35722==b){if(-1==d.Sb){a=T[a];var f=Y.getProgramParameter(a,
35721);for(b=d.Sb=0;b<f;++b)d.Sb=Math.max(d.Sb,Y.getActiveAttrib(a,b).name.length+1)}G[c>>2]=d.Sb}else if(35381==b){if(-1==d.Tb)for(a=T[a],f=Y.getProgramParameter(a,35382),b=d.Tb=0;b<f;++b)d.Tb=Math.max(d.Tb,Y.getActiveUniformBlockName(a,b).length+1);G[c>>2]=d.Tb}else G[c>>2]=Y.getProgramParameter(T[a],b);else W(1282)}else W(1281)},Za:function(a,b,c,d){a=Y.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(G[c>>2]=b)},Z:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(V[a]),
null===a&&(a="(unknown error)"),G[c>>2]=a.length+1):35720==b?(a=Y.getShaderSource(V[a]),G[c>>2]=null===a||0==a.length?0:a.length+1):G[c>>2]=Y.getShaderParameter(V[a],b):W(1281)},Ca:function(a){if(vb[a])return vb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(a){return"GL_"+a}));b=Fb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||W(1280);b=Fb(b);break;case 7938:b=Fb("OpenGL ES 2.0 ("+Y.getParameter(Y.VERSION)+")");break;case 35724:b=
Y.getParameter(Y.SHADING_LANGUAGE_VERSION);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Fb(b);break;default:return W(1280),0}return vb[a]=b},l:function(a,b){b=F(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=ub[a]&&ub[a].Zb[b])&&0<=c&&c<a[0]?a[1]+c:-1},ua:function(a){Y.linkProgram(T[a]);var b=T[a];a=ub[a]={Zb:{},Wb:0,Sb:-1,Tb:-1};
for(var c=a.Zb,d=Y.getProgramParameter(b,35718),f=0;f<d;++f){var g=Y.getActiveUniform(b,f),l=g.name;a.Wb=Math.max(a.Wb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var m=Y.getUniformLocation(b,l);if(m){var q=wb(U);c[l]=[g.size,q];U[q]=m;for(var p=1;p<g.size;++p)m=Y.getUniformLocation(b,l+"["+p+"]"),q=wb(U),U[q]=m}}},C:function(a,b){Y.polygonOffset(a,b)},xa:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},L:function(a,b,c,d){Y.scissor(a,b,c,d)},$a:function(a,b,c,d){for(var f="",
g=0;g<b;++g){var l=d?G[d+4*g>>2]:-1;f+=F(G[c+4*g>>2],0>l?void 0:l)}Y.shaderSource(V[a],f)},ba:function(a,b,c){Y.stencilFunc(a,b,c)},K:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},v:function(a){Y.stencilMask(a)},aa:function(a,b,c){Y.stencilOp(a,b,c)},J:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},R:function(a,b,c,d,f,g,l,m,q){Y.texImage2D(a,b,c,d,f,g,l,m,q?Gb(m,l,d,f,q):null)},h:function(a,b,c){Y.texParameteri(a,b,c)},p:function(a,b,c,d,f,g,l,m,q){var p=null;q&&(p=Gb(m,l,f,g,q));Y.texSubImage2D(a,
b,c,d,f,g,l,m,p)},ja:function(a,b,c){if(256>=b)for(var d=X[b-1],f=0;f<b;++f)d[f]=H[c+4*f>>2];else d=H.subarray(c>>2,c+4*b>>2);Y.uniform1fv(U[a],d)},B:function(a,b){Y.uniform1i(U[a],b)},ia:function(a,b,c){if(256>=2*b)for(var d=X[2*b-1],f=0;f<2*b;f+=2)d[f]=H[c+4*f>>2],d[f+1]=H[c+(4*f+4)>>2];else d=H.subarray(c>>2,c+8*b>>2);Y.uniform2fv(U[a],d)},ha:function(a,b,c){if(256>=3*b)for(var d=X[3*b-1],f=0;f<3*b;f+=3)d[f]=H[c+4*f>>2],d[f+1]=H[c+(4*f+4)>>2],d[f+2]=H[c+(4*f+8)>>2];else d=H.subarray(c>>2,c+12*
b>>2);Y.uniform3fv(U[a],d)},fa:function(a,b,c){if(256>=4*b)for(var d=X[4*b-1],f=0;f<4*b;f+=4)d[f]=H[c+4*f>>2],d[f+1]=H[c+(4*f+4)>>2],d[f+2]=H[c+(4*f+8)>>2],d[f+3]=H[c+(4*f+12)>>2];else d=H.subarray(c>>2,c+16*b>>2);Y.uniform4fv(U[a],d)},ea:function(a,b,c,d){if(256>=16*b)for(var f=X[16*b-1],g=0;g<16*b;g+=16)f[g]=H[d+4*g>>2],f[g+1]=H[d+(4*g+4)>>2],f[g+2]=H[d+(4*g+8)>>2],f[g+3]=H[d+(4*g+12)>>2],f[g+4]=H[d+(4*g+16)>>2],f[g+5]=H[d+(4*g+20)>>2],f[g+6]=H[d+(4*g+24)>>2],f[g+7]=H[d+(4*g+28)>>2],f[g+8]=H[d+
(4*g+32)>>2],f[g+9]=H[d+(4*g+36)>>2],f[g+10]=H[d+(4*g+40)>>2],f[g+11]=H[d+(4*g+44)>>2],f[g+12]=H[d+(4*g+48)>>2],f[g+13]=H[d+(4*g+52)>>2],f[g+14]=H[d+(4*g+56)>>2],f[g+15]=H[d+(4*g+60)>>2];else f=H.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(U[a],!!c,f)},ma:function(a){Y.useProgram(T[a])},Xa:function(a,b){Y.vertexAttribDivisor(a,b)},la:function(a,b,c,d,f,g){Y.vertexAttribPointer(a,b,c,!!d,f,g)},M:function(a,b,c,d){Y.viewport(a,b,c,d)},memory:C,u:function(){var a=document.createElement("input");a.type=
"text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Jb()});document.body.append(a)},t:function(){document.getElementById("_sokol_app_input_element").focus()},Ea:function(){window.addEventListener("beforeunload",function(a){0!=Kb()&&(a.preventDefault(),a.returnValue=" ")})},Ma:function(){window.addEventListener("paste",function(a){a=a.clipboardData.getData("text");oa("_sapp_emsc_onpaste","void",["string"],[a])})},s:function(){document.getElementById("_sokol_app_input_element").blur()},
Da:function(a){a=F(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},bb:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=a.next())oa("_sargs_add_kvp",
"void",["string","string"],[b.value[0],b.value[1]])},cb:function(){return e.Rb?e.Rb.bufferSize:0},$:function(a,b,c){e.Lb=null;e.Rb=null;"undefined"!==typeof AudioContext?(e.Lb=new AudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created AudioContext")):"undefined"!==typeof webkitAudioContext?(e.Lb=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created webkitAudioContext")):(e.Lb=null,console.log("sokol_audio.h: no WebAudio support"));
return e.Lb?(console.log("sokol_audio.h: sample rate ",e.Lb.sampleRate),e.Rb=e.Lb.createScriptProcessor(c,0,b),e.Rb.onaudioprocess=function(a){var b=a.outputBuffer.length,c=Lb(b);if(c)for(var d=a.outputBuffer.numberOfChannels,m=0;m<d;m++)for(var q=a.outputBuffer.getChannelData(m),p=0;p<b;p++)q[p]=H[(c>>2)+(d*p+m)]},e.Rb.connect(e.Lb.destination),a=function(){e.Lb&&"suspended"===e.Lb.state&&e.Lb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),
document.addEventListener("keydown",a,{once:!0}),1):0},_:function(){return e.Lb?e.Lb.sampleRate:0},Y:function(){return navigator.userAgent.includes("Macintosh")?1:0},o:function(){return performance.now()},table:la},Nb=function(){function a(a){e.asm=a.exports;J--;e.monitorRunDependencies&&e.monitorRunDependencies(J);0==J&&(null!==Ja&&(clearInterval(Ja),Ja=null),K&&(a=K,K=null,a()))}function b(b){a(b.instance)}function c(a){return Oa().then(function(a){return WebAssembly.instantiate(a,d)}).then(a,function(a){z("failed to asynchronously prepare wasm: "+
a);ja(a)})}var d={env:Mb,wasi_snapshot_preview1:Mb};J++;e.monitorRunDependencies&&e.monitorRunDependencies(J);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return z("Module.instantiateWasm callback failed with error: "+f),!1}(function(){if(A||"function"!==typeof WebAssembly.instantiateStreaming||Ka()||"function"!==typeof fetch)return c(b);fetch(L,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,d).then(b,function(a){z("wasm streaming compile failed: "+
a);z("falling back to ArrayBuffer instantiation");c(b)})})})();return{}}();e.asm=Nb;var Pa=e.___wasm_call_ctors=function(){return e.asm.gb.apply(null,arguments)};e._emsc_load_data=function(){return e.asm.hb.apply(null,arguments)};e.___em_js__emsc_fs_init=function(){return e.asm.ib.apply(null,arguments)};e.___em_js__emsc_load_file=function(){return e.asm.jb.apply(null,arguments)};var Jb=e.__sapp_emsc_notify_keyboard_hidden=function(){return e.asm.kb.apply(null,arguments)};
e.___em_js__sapp_js_create_textfield=function(){return e.asm.lb.apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return e.asm.mb.apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return e.asm.nb.apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return e.asm.ob.apply(null,arguments)};var Kb=e.__sapp_html5_get_ask_leave_site=function(){return e.asm.pb.apply(null,arguments)};e.___em_js__sapp_js_hook_beforeunload=function(){return e.asm.qb.apply(null,arguments)};
e.___em_js__sapp_js_init_clipboard=function(){return e.asm.rb.apply(null,arguments)};e.___em_js__sapp_js_write_clipboard=function(){return e.asm.sb.apply(null,arguments)};e._main=function(){return e.asm.tb.apply(null,arguments)};var Q=e._malloc=function(){return e.asm.ub.apply(null,arguments)};e._free=function(){return e.asm.vb.apply(null,arguments)};e.___em_js__stm_js_perfnow=function(){return e.asm.wb.apply(null,arguments)};var Lb=e.__saudio_emsc_pull=function(){return e.asm.xb.apply(null,arguments)};
e.___em_js__saudio_js_init=function(){return e.asm.yb.apply(null,arguments)};e.___em_js__saudio_js_sample_rate=function(){return e.asm.zb.apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return e.asm.Ab.apply(null,arguments)};e.__sargs_add_kvp=function(){return e.asm.Bb.apply(null,arguments)};e.___em_js__sargs_js_parse_url=function(){return e.asm.Cb.apply(null,arguments)};e.___em_js__simgui_js_is_osx=function(){return e.asm.Db.apply(null,arguments)};
var ra=e.stackSave=function(){return e.asm.Eb.apply(null,arguments)},pa=e.stackAlloc=function(){return e.asm.Fb.apply(null,arguments)},sa=e.stackRestore=function(){return e.asm.Gb.apply(null,arguments)};e.dynCall_vi=function(){return e.asm.Hb.apply(null,arguments)};e.dynCall_v=function(){return e.asm.Ib.apply(null,arguments)};var R=e.dynCall_iiii=function(){return e.asm.Jb.apply(null,arguments)},Ib=e.dynCall_idi=function(){return e.asm.Kb.apply(null,arguments)};e.asm=Nb;var Ob;
function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}K=function Pb(){Ob||Qb();Ob||(K=Pb)};
function Qb(a){function b(){if(!Ob&&(Ob=!0,!ma)){Ca(Ea);Ca(Fa);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Rb){var b=a,d=e._main;b=b||[];var f=b.length+1,g=pa(4*(f+1));G[g>>2]=va(aa);for(var l=1;l<f;l++)G[(g>>2)+l]=va(b[l-1]);G[(g>>2)+f]=0;try{var m=d(f,g);if(!B||0!==m){if(!B&&(ma=!0,e.onExit))e.onExit(m);t(m,new ia(m))}}catch(q){q instanceof ia||("unwind"==q?B=!0:((b=q)&&"object"===typeof q&&q.stack&&(b=[q,q.stack]),z("exception thrown: "+b),t(1,q)))}finally{}}if(e.postRun)for("function"==
typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)b=e.postRun.shift(),Ha.unshift(b);Ca(Ha)}}a=a||n;if(!(0<J)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ia();Ca(Da);0<J||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Qb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Rb=!0;e.noInitialRun&&(Rb=!1);B=!0;Qb();
