var e;e||(e=typeof Module !== 'undefined' ? Module : {});var g={},h;for(h in e)e.hasOwnProperty(h)&&(g[h]=e[h]);var r=[],aa="./this.program";function t(a,b){throw b;}var u=!1,w=!1,ba=!1,ca=!1,da=!1;u="object"===typeof window;w="function"===typeof importScripts;ba=(ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!u&&!w;da=!u&&!ba&&!w;var x="",ea,y,fa,ha;
if(ba)x=__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},y=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",ja),t=function(a){process.exit(a)},
e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),y=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=
console.error="undefined"!==typeof printErr?printErr:print);else if(u||w)w?x=self.location.href:document.currentScript&&(x=document.currentScript.src),x=0!==x.indexOf("blob:")?x.substr(0,x.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},w&&(y=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ka=e.print||console.log.bind(console),z=e.printErr||console.warn.bind(console);for(h in g)g.hasOwnProperty(h)&&(e[h]=g[h]);g=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var A;e.wasmBinary&&(A=e.wasmBinary);var B;e.noExitRuntime&&(B=e.noExitRuntime);"object"!==typeof WebAssembly&&z("no native wasm support detected");var C,la=new WebAssembly.Table({initial:19,maximum:19,element:"anyfunc"}),ma=!1;function assert(a,b){a||ja("Assertion failed: "+b)}
function na(a){var b=e["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function oa(a,b,c,d){var f={string:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=pa(c);D(a,E,b,c)}return b},array:function(a){var b=pa(a.length);qa.set(a,b);return b}},l=na(a),k=[];a=0;if(d)for(var m=0;m<d.length;m++){var n=f[c[m]];n?(0===a&&(a=ra()),k[m]=n(d[m])):k[m]=d[m]}c=l.apply(null,k);c=function(a){return"string"===b?F(a):"boolean"===b?!!a:a}(c);0!==a&&sa(a);return c}var ta="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function F(a,b){if(a){var c=E,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ta)a=ta.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var l=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|l);else{var k=c[a++]&63;f=224==(f&240)?(f&15)<<12|l<<6|k:(f&7)<<18|l<<12|k<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function D(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var l=0;l<a.length;++l){var k=a.charCodeAt(l);if(55296<=k&&57343>=k){var m=a.charCodeAt(++l);k=65536+((k&1023)<<10)|m&1023}if(127>=k){if(c>=d)break;b[c++]=k}else{if(2047>=k){if(c+1>=d)break;b[c++]=192|k>>6}else{if(65535>=k){if(c+2>=d)break;b[c++]=224|k>>12}else{if(c+3>=d)break;b[c++]=240|k>>18;b[c++]=128|k>>12&63}b[c++]=128|k>>6&63}b[c++]=128|k&63}}b[c]=0;return c-f}
function ua(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function va(a){var b=ua(a)+1,c=pa(b);D(a,qa,c,b);return c}function wa(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,qa,E,xa,ya,G,za,Aa,H;
function Ba(a){buffer=a;e.HEAP8=qa=new Int8Array(a);e.HEAP16=xa=new Int16Array(a);e.HEAP32=G=new Int32Array(a);e.HEAPU8=E=new Uint8Array(a);e.HEAPU16=ya=new Uint16Array(a);e.HEAPU32=za=new Uint32Array(a);e.HEAPF32=Aa=new Float32Array(a);e.HEAPF64=H=new Float64Array(a)}var Ca=e.TOTAL_MEMORY||33554432;e.wasmMemory?C=e.wasmMemory:C=new WebAssembly.Memory({initial:Ca/65536});C&&(buffer=C.buffer);Ca=buffer.byteLength;Ba(buffer);G[1353812]=10658288;
function Da(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Pb;"number"===typeof c?void 0===b.Ib?e.dynCall_v(c):e.dynCall_vi(c,b.Ib):c(void 0===b.Ib?null:b.Ib)}}}var Ea=[],Fa=[],Ga=[],Ha=[],Ia=[];function Ja(){var a=e.preRun.shift();Ea.unshift(a)}var I=0,La=null,J=null;e.preloadedImages={};e.preloadedAudios={};function ja(a){if(e.onAbort)e.onAbort(a);ka(a);z(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ma(){var a=K;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var K="z1013.wasm";if(!Ma()){var Na=K;K=e.locateFile?e.locateFile(Na,x):x+Na}function Oa(){try{if(A)return new Uint8Array(A);if(y)return y(K);throw"both async and sync fetching of the wasm failed";}catch(a){ja(a)}}
function Pa(){return A||!u&&!w||"function"!==typeof fetch?new Promise(function(a){a(Oa())}):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Oa()})}Fa.push({Pb:function(){Qa()}});var Ra=0,Sa=0,L=0,Ta=0,Ua=0,Va=null,Wa=null,Xa=!1;function Ya(){for(var a=M.length-1;0<=a;--a)Za(a);M=[];$a=[]}var $a=[];
function ab(){if(bb&&cb.Cb)for(var a=0;a<$a.length;++a){var b=$a[a];$a.splice(a,1);--a;b.$b.apply(this,b.Ub)}}var bb=0,cb=null,M=[];function Za(a){var b=M[a];b.target.removeEventListener(b.Ab,b.Nb,b.Bb);M.splice(a,1)}function N(a){function b(b){++bb;cb=a;ab();a.Eb(b);ab();--bb}if(a.Db)a.Nb=b,a.target.addEventListener(a.Ab,b,a.Bb),M.push(a),Xa||(Ha.push(Ya),Xa=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].Ab==a.Ab&&Za(c--)}function db(a){return a===a+0?F(a):a}
var eb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function O(a){return eb[a]||("undefined"!==typeof document?document.querySelector(db(a)):void 0)}
function fb(a,b,c,d,f,l){Ra||(Ra=P(164));a={target:O(a),Cb:!0,Ab:l,Db:d,Eb:function(a){a=a||event;var c=Ra;D(a.key?a.key:"",E,c+0,32);D(a.code?a.code:"",E,c+32,32);G[c+64>>2]=a.location;G[c+68>>2]=a.ctrlKey;G[c+72>>2]=a.shiftKey;G[c+76>>2]=a.altKey;G[c+80>>2]=a.metaKey;G[c+84>>2]=a.repeat;D(a.locale?a.locale:"",E,c+88,32);D(a.char?a.char:"",E,c+120,32);G[c+152>>2]=a.charCode;G[c+156>>2]=a.keyCode;G[c+160>>2]=a.which;Q(d,f,c,b)&&a.preventDefault()},Bb:c};N(a)}
function hb(a,b,c){G[a>>2]=b.screenX;G[a+4>>2]=b.screenY;G[a+8>>2]=b.clientX;G[a+12>>2]=b.clientY;G[a+16>>2]=b.ctrlKey;G[a+20>>2]=b.shiftKey;G[a+24>>2]=b.altKey;G[a+28>>2]=b.metaKey;xa[a+32>>1]=b.button;xa[a+34>>1]=b.buttons;var d=b.movementY||b.screenY-Wa;G[a+36>>2]=b.movementX||b.screenX-Va;G[a+40>>2]=d;c=0>eb.indexOf(c)?c.getBoundingClientRect():{left:0,top:0};G[a+44>>2]=b.clientX-c.left;G[a+48>>2]=b.clientY-c.top;"wheel"!==b.type&&"mousewheel"!==b.type&&(Va=b.screenX,Wa=b.screenY)}
function R(a,b,c,d,f,l){Sa||(Sa=P(64));a=O(a);N({target:a,Cb:"mousemove"!=l&&"mouseenter"!=l&&"mouseleave"!=l,Ab:l,Db:d,Eb:function(c){c=c||event;hb(Sa,c,a);Q(d,f,Sa,b)&&c.preventDefault()},Bb:c})}
function ib(a,b,c,d){Ta||(Ta=P(36));a=O(a);N({target:a,Cb:!1,Ab:"resize",Db:d,Eb:function(c){c=c||event;if(c.target==a){var f=Ta,k=document.body;G[f>>2]=c.detail;G[f+4>>2]=k.clientWidth;G[f+8>>2]=k.clientHeight;G[f+12>>2]=innerWidth;G[f+16>>2]=innerHeight;G[f+20>>2]=outerWidth;G[f+24>>2]=outerHeight;G[f+28>>2]=pageXOffset;G[f+32>>2]=pageYOffset;Q(d,10,f,b)&&c.preventDefault()}},Bb:c})}
function jb(a,b,c,d,f,l){Ua||(Ua=P(1684));a=O(a);N({target:a,Cb:"touchstart"==l||"touchend"==l,Ab:l,Db:d,Eb:function(c){c=c||event;for(var l={},k=0;k<c.touches.length;++k){var p=c.touches[k];p.Kb=!1;l[p.identifier]=p}for(k=0;k<c.changedTouches.length;++k)p=c.changedTouches[k],l[p.identifier]=p,p.Kb=!0;for(k=0;k<c.targetTouches.length;++k)p=c.targetTouches[k],l[p.identifier].Sb=!0;var q=p=Ua;G[q+4>>2]=c.ctrlKey;G[q+8>>2]=c.shiftKey;G[q+12>>2]=c.altKey;G[q+16>>2]=c.metaKey;q+=20;var Ka=a.getBoundingClientRect(),
gb=0;for(k in l){var v=l[k];G[q>>2]=v.identifier;G[q+4>>2]=v.screenX;G[q+8>>2]=v.screenY;G[q+12>>2]=v.clientX;G[q+16>>2]=v.clientY;G[q+20>>2]=v.pageX;G[q+24>>2]=v.pageY;G[q+28>>2]=v.Kb;G[q+32>>2]=v.Sb;G[q+36>>2]=v.clientX-Ka.left;G[q+40>>2]=v.clientY-Ka.top;q+=52;if(32<=++gb)break}G[p>>2]=gb;Q(d,f,p,b)&&c.preventDefault()},Bb:c})}function kb(a,b,c,d,f,l){a={target:O(a),Cb:!1,Ab:l,Db:d,Eb:function(a){a=a||event;Q(d,f,0,b)&&a.preventDefault()},Bb:c};N(a)}
function lb(a,b,c,d,f){function l(c){c=c||event;hb(L,c,a);H[L+64>>3]=c.wheelDeltaX||0;H[L+72>>3]=-(c.wheelDeltaY||c.wheelDelta);H[L+80>>3]=0;G[L+88>>2]=0;Q(d,9,L,b)&&c.preventDefault()}function k(c){c=c||event;var f=L;hb(f,c,a);H[f+64>>3]=c.deltaX;H[f+72>>3]=c.deltaY;H[f+80>>3]=c.deltaZ;G[f+88>>2]=c.deltaMode;Q(d,9,f,b)&&c.preventDefault()}L||(L=P(96));N({target:a,Cb:!0,Ab:f,Db:d,Eb:"wheel"==f?k:l,Bb:c})}
var mb=["default","low-power","high-performance"],nb=1,ob=0,pb=[],S=[],qb=[],T=[],U=[],V=[],W=[],rb={},sb=null,X={},tb={};function Y(a){ob||(ob=a)}function ub(a){for(var b=nb++,c=a.length;c<b;c++)a[c]=null;return b}
function vb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(a,d){b.vertexAttribDivisorANGLE(a,d)},a.drawArraysInstanced=function(a,d,f,l){b.drawArraysInstancedANGLE(a,d,f,l)},a.drawElementsInstanced=function(a,d,f,l,k){b.drawElementsInstancedANGLE(a,d,f,l,k)})}
function wb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(a){b.deleteVertexArrayOES(a)},a.bindVertexArray=function(a){b.bindVertexArrayOES(a)},a.isVertexArray=function(a){return b.isVertexArrayOES(a)})}function xb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(a,d){b.drawBuffersWEBGL(a,d)})}
function yb(a){a||(a=sb);if(!a.Qb){a.Qb=!0;var b=a.Hb;2>a.version&&(vb(b),wb(b),xb(b));b.Wb=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");
(b.getSupportedExtensions()||[]).forEach(function(a){-1!=c.indexOf(a)&&b.getExtension(a)})}}var zb,Ab;function Bb(a,b,c,d){for(var f=0;f<a;f++){var l=Z[c](),k=l&&ub(d);l?(l.name=k,d[k]=l):Y(1282);G[b+4*f>>2]=k}}
function Cb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":Y(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:Y(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){Y(1280);z("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:Y(1280);z("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else Y(1281)}function Db(a){var b=ua(a)+1,c=P(b);D(a,E,c,b);return c}
function Eb(a,b,c,d,f){a-=5120;a=1==a?E:4==a?G:6==a?Aa:5==a||28922==a?za:ya;var l=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>l,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<l)+4-1&-4)>>l)}for(var Z,Fb=0;256>Fb;Fb++);for(Fb=0;256>Fb;Fb++);
var Jb={Wa:function(){console.log("fs.h: registering Module['ccall']");e.ccall=oa},Xa:function(a){var b=F(a),c=new XMLHttpRequest;c.open("GET",b);c.responseType="arraybuffer";c.onload=function(){var a=new Uint8Array(c.response);oa("emsc_load_data","int",["string","array","number"],[b,a,a.length])};c.send()},O:function(){return devicePixelRatio||1},X:function(a,b,c){a=O(a);if(!a)return-4;a=a.getBoundingClientRect();H[b>>3]=a.width;H[c>>3]=a.height;return 0},Ra:function(a,b,c){E.set(E.subarray(b,b+
c),a)},Aa:function(a,b){function c(d){Gb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Sa:function(a){if(2147418112<a)return!1;for(var b=Math.max(qa.length,16777216);b<a;)536870912>=b?b=wa(2*b):b=Math.min(wa((3*b+2147483648)/4),2147418112);a:{try{C.grow(b-buffer.byteLength+65535>>16);Ba(C.buffer);var c=1;break a}catch(d){}c=void 0}return c?!0:!1},M:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=c;return 0},Ka:function(a,b,c,d){fb(a,b,c,d,2,"keydown");return 0},Ia:function(a,
b,c,d){fb(a,b,c,d,1,"keypress");return 0},Ja:function(a,b,c,d){fb(a,b,c,d,3,"keyup");return 0},Qa:function(a,b,c,d){R(a,b,c,d,5,"mousedown");return 0},Na:function(a,b,c,d){R(a,b,c,d,33,"mouseenter");return 0},Ma:function(a,b,c,d){R(a,b,c,d,34,"mouseleave");return 0},Oa:function(a,b,c,d){R(a,b,c,d,8,"mousemove");return 0},Pa:function(a,b,c,d){R(a,b,c,d,6,"mouseup");return 0},ua:function(a,b,c,d){ib(a,b,c,d);return 0},Da:function(a,b,c,d){jb(a,b,c,d,25,"touchcancel");return 0},Ea:function(a,b,c,d){jb(a,
b,c,d,23,"touchend");return 0},Fa:function(a,b,c,d){jb(a,b,c,d,24,"touchmove");return 0},Ga:function(a,b,c,d){jb(a,b,c,d,22,"touchstart");return 0},Ca:function(a,b,c,d){kb(a,b,c,d,31,"webglcontextlost");return 0},Ba:function(a,b,c,d){kb(a,b,c,d,32,"webglcontextrestored");return 0},La:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(lb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(lb(a,b,c,d,"mousewheel"),0):-1},D:function(a,b){var c={};b>>=2;c.alpha=!!G[b];c.depth=!!G[b+1];
c.stencil=!!G[b+2];c.antialias=!!G[b+3];c.premultipliedAlpha=!!G[b+4];c.preserveDrawingBuffer=!!G[b+5];c.powerPreference=mb[G[b+6]];c.failIfMajorPerformanceCaveat=!!G[b+7];c.Rb=G[b+8];c.Xb=G[b+9];c.Lb=G[b+10];c.Ob=G[b+11];c.Yb=G[b+12];c.Zb=G[b+13];a=O(a);if(!a||c.Ob)c=0;else if(a=a.getContext("webgl",c)){b=P(8);var d={handle:b,attributes:c,version:c.Rb,Hb:a};a.canvas&&(a.canvas.Tb=d);rb[b]=d;("undefined"===typeof c.Lb||c.Lb)&&yb(d);c=b}else c=0;return c},Va:function(a,b){a=rb[a];b=F(b);0==b.indexOf("GL_")&&
(b=b.substr(3));"ANGLE_instanced_arrays"==b?vb(Z):"OES_vertex_array_object"==b?wb(Z):"WEBGL_draw_buffers"==b&&xb(Z);return!!a.Hb.getExtension(b)},ja:function(a){a>>=2;for(var b=0;14>b;++b)G[a+b]=0;G[a]=G[a+1]=G[a+3]=G[a+4]=G[a+8]=G[a+10]=1},aa:function(a){sb=rb[a];e.Vb=Z=sb&&sb.Hb;return!a||Z?0:-5},g:function(a){Z.activeTexture(a)},P:function(a,b){Z.attachShader(S[a],W[b])},d:function(a,b){Z.bindBuffer(a,pb[b])},f:function(a,b){Z.bindFramebuffer(a,qb[b])},va:function(a,b){Z.bindRenderbuffer(a,T[b])},
a:function(a,b){Z.bindTexture(a,U[b])},G:function(a,b,c,d){Z.blendColor(a,b,c,d)},H:function(a,b){Z.blendEquationSeparate(a,b)},I:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},T:function(a,b,c,d){Z.bufferData(a,c?E.subarray(c,c+b):b,d)},S:function(a,b,c,d){Z.bufferSubData(a,b,E.subarray(d,d+c))},m:function(a){return Z.checkFramebufferStatus(a)},ia:function(a){Z.clear(a)},ma:function(a,b,c,d){Z.clearColor(a,b,c,d)},la:function(a){Z.clearDepth(a)},ka:function(a){Z.clearStencil(a)},x:function(a,b,
c,d){Z.colorMask(!!a,!!b,!!c,!!d)},Y:function(a){Z.compileShader(W[a])},R:function(a,b,c,d,f,l,k,m){Z.compressedTexImage2D(a,b,c,d,f,l,m?E.subarray(m,m+k):null)},ra:function(){var a=ub(S),b=Z.createProgram();b.name=a;S[a]=b;return a},_:function(a){var b=ub(W);W[b]=Z.createShader(a);return b},F:function(a){Z.cullFace(a)},xa:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=pb[d];f&&(Z.deleteBuffer(f),f.name=0,pb[d]=null,d==zb&&(zb=0),d==Ab&&(Ab=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=
G[b+4*c>>2],f=qb[d];f&&(Z.deleteFramebuffer(f),f.name=0,qb[d]=null)}},V:function(a){if(a){var b=S[a];b?(Z.deleteProgram(b),b.name=0,S[a]=null,X[a]=null):Y(1281)}},s:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=T[d];f&&(Z.deleteRenderbuffer(f),f.name=0,T[d]=null)}},y:function(a){if(a){var b=W[a];b?(Z.deleteShader(b),W[a]=null):Y(1281)}},W:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=U[d];f&&(Z.deleteTexture(f),f.name=0,U[d]=null)}},v:function(a){Z.depthFunc(a)},w:function(a){Z.depthMask(!!a)},
c:function(a){Z.disable(a)},A:function(a){Z.disableVertexAttribArray(a)},da:function(a,b,c){Z.drawArrays(a,b,c)},ea:function(a,b,c,d){Z.drawElements(a,b,c,d)},e:function(a){Z.enable(a)},fa:function(a){Z.enableVertexAttribArray(a)},k:function(a,b,c,d){Z.framebufferRenderbuffer(a,b,c,T[d])},b:function(a,b,c,d,f){Z.framebufferTexture2D(a,b,c,U[d],f)},E:function(a){Z.frontFace(a)},U:function(a,b){Bb(a,b,"createBuffer",pb)},n:function(a,b){Bb(a,b,"createFramebuffer",qb)},wa:function(a,b){Bb(a,b,"createRenderbuffer",
T)},sa:function(a,b){Bb(a,b,"createTexture",U)},oa:function(a,b){return Z.getAttribLocation(S[a],F(b))},i:function(a,b){Cb(a,b)},pa:function(a,b,c,d){a=Z.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(G[c>>2]=b)},N:function(a,b,c){if(c)if(a>=nb)Y(1281);else{var d=X[a];if(d)if(35716==b)a=Z.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1;else if(35719==b)G[c>>2]=d.Jb;else if(35722==b){if(-1==d.Fb){a=S[a];var f=Z.getProgramParameter(a,35721);
for(b=d.Fb=0;b<f;++b)d.Fb=Math.max(d.Fb,Z.getActiveAttrib(a,b).name.length+1)}G[c>>2]=d.Fb}else if(35381==b){if(-1==d.Gb)for(a=S[a],f=Z.getProgramParameter(a,35382),b=d.Gb=0;b<f;++b)d.Gb=Math.max(d.Gb,Z.getActiveUniformBlockName(a,b).length+1);G[c>>2]=d.Gb}else G[c>>2]=Z.getProgramParameter(S[a],b);else Y(1282)}else Y(1281)},Ua:function(a,b,c,d){a=Z.getShaderInfoLog(W[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(G[c>>2]=b)},z:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(W[a]),
null===a&&(a="(unknown error)"),G[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(W[a]),G[c>>2]=null===a||0==a.length?0:a.length+1):G[c>>2]=Z.getShaderParameter(W[a],b):Y(1281)},ya:function(a){if(tb[a])return tb[a];switch(a){case 7939:var b=Z.getSupportedExtensions()||[];b=b.concat(b.map(function(a){return"GL_"+a}));b=Db(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||Y(1280);b=Db(b);break;case 7938:b=Db("OpenGL ES 2.0 ("+Z.getParameter(Z.VERSION)+")");break;case 35724:b=
Z.getParameter(Z.SHADING_LANGUAGE_VERSION);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Db(b);break;default:return Y(1280),0}return tb[a]=b},l:function(a,b){b=F(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=X[a]&&X[a].Mb[b])&&0<=c&&c<a[0]?a[1]+c:-1},qa:function(a){Z.linkProgram(S[a]);var b=S[a];a=X[a]={Mb:{},Jb:0,Fb:-1,Gb:-1};
for(var c=a.Mb,d=Z.getProgramParameter(b,35718),f=0;f<d;++f){var l=Z.getActiveUniform(b,f),k=l.name;a.Jb=Math.max(a.Jb,k.length+1);"]"==k.slice(-1)&&(k=k.slice(0,k.lastIndexOf("[")));var m=Z.getUniformLocation(b,k);if(m){var n=ub(V);c[k]=[l.size,n];V[n]=m;for(var p=1;p<l.size;++p)m=Z.getUniformLocation(b,k+"["+p+"]"),n=ub(V),V[n]=m}}},C:function(a,b){Z.polygonOffset(a,b)},ta:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},na:function(a,b,c,d){Z.scissor(a,b,c,d)},Z:function(a,b,c,d){for(var f="",
l=0;l<b;++l){var k=d?G[d+4*l>>2]:-1;f+=F(G[c+4*l>>2],0>k?void 0:k)}Z.shaderSource(W[a],f)},ca:function(a,b,c){Z.stencilFunc(a,b,c)},K:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},u:function(a){Z.stencilMask(a)},ba:function(a,b,c){Z.stencilOp(a,b,c)},J:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},Q:function(a,b,c,d,f,l,k,m,n){Z.texImage2D(a,b,c,d,f,l,k,m,n?Eb(m,k,d,f,n):null)},h:function(a,b,c){Z.texParameteri(a,b,c)},r:function(a,b,c,d,f,l,k,m,n){var p=null;n&&(p=Eb(m,k,f,l,n));Z.texSubImage2D(a,
b,c,d,f,l,k,m,p)},B:function(a,b){Z.uniform1i(V[a],b)},ha:function(a){Z.useProgram(S[a])},Ta:function(a,b){Z.vertexAttribDivisor(a,b)},ga:function(a,b,c,d,f,l){Z.vertexAttribPointer(a,b,c,!!d,f,l)},L:function(a,b,c,d){Z.viewport(a,b,c,d)},memory:C,q:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Hb()});document.body.append(a)},p:function(){document.getElementById("_sokol_app_input_element").focus()},
za:function(){window.addEventListener("beforeunload",function(a){0!=Ib()&&(a.preventDefault(),a.returnValue=" ")})},Ha:function(){window.addEventListener("paste",function(a){a=a.clipboardData.getData("text");oa("_sapp_emsc_onpaste","void",["string"],[a])})},o:function(){document.getElementById("_sokol_app_input_element").blur()},$:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=a.next())oa("_sargs_add_kvp","void",["string","string"],[b.value[0],b.value[1]])},
t:function(){return performance.now()},table:la},Kb=function(){function a(a){e.asm=a.exports;I--;e.monitorRunDependencies&&e.monitorRunDependencies(I);0==I&&(null!==La&&(clearInterval(La),La=null),J&&(a=J,J=null,a()))}function b(b){a(b.instance)}function c(a){return Pa().then(function(a){return WebAssembly.instantiate(a,d)}).then(a,function(a){z("failed to asynchronously prepare wasm: "+a);ja(a)})}var d={env:Jb,wasi_snapshot_preview1:Jb};I++;e.monitorRunDependencies&&e.monitorRunDependencies(I);if(e.instantiateWasm)try{return e.instantiateWasm(d,
a)}catch(f){return z("Module.instantiateWasm callback failed with error: "+f),!1}(function(){if(A||"function"!==typeof WebAssembly.instantiateStreaming||Ma()||"function"!==typeof fetch)return c(b);fetch(K,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,d).then(b,function(a){z("wasm streaming compile failed: "+a);z("falling back to ArrayBuffer instantiation");c(b)})})})();return{}}();e.asm=Kb;
var Qa=e.___wasm_call_ctors=function(){return e.asm.Ya.apply(null,arguments)};e._emsc_load_data=function(){return e.asm.Za.apply(null,arguments)};e.___em_js__emsc_fs_init=function(){return e.asm._a.apply(null,arguments)};e.___em_js__emsc_load_file=function(){return e.asm.$a.apply(null,arguments)};var Hb=e.__sapp_emsc_notify_keyboard_hidden=function(){return e.asm.ab.apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return e.asm.bb.apply(null,arguments)};
e.___em_js__sapp_js_focus_textfield=function(){return e.asm.cb.apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return e.asm.db.apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return e.asm.eb.apply(null,arguments)};var Ib=e.__sapp_html5_get_ask_leave_site=function(){return e.asm.fb.apply(null,arguments)};e.___em_js__sapp_js_hook_beforeunload=function(){return e.asm.gb.apply(null,arguments)};e.___em_js__sapp_js_init_clipboard=function(){return e.asm.hb.apply(null,arguments)};
e.___em_js__sapp_js_write_clipboard=function(){return e.asm.ib.apply(null,arguments)};e._main=function(){return e.asm.jb.apply(null,arguments)};var P=e._malloc=function(){return e.asm.kb.apply(null,arguments)};e._free=function(){return e.asm.lb.apply(null,arguments)};e.___em_js__stm_js_perfnow=function(){return e.asm.mb.apply(null,arguments)};e.__saudio_emsc_pull=function(){return e.asm.nb.apply(null,arguments)};e.___em_js__saudio_js_init=function(){return e.asm.ob.apply(null,arguments)};
e.___em_js__saudio_js_sample_rate=function(){return e.asm.pb.apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return e.asm.qb.apply(null,arguments)};e.__sargs_add_kvp=function(){return e.asm.rb.apply(null,arguments)};e.___em_js__sargs_js_parse_url=function(){return e.asm.sb.apply(null,arguments)};
var ra=e.stackSave=function(){return e.asm.tb.apply(null,arguments)},pa=e.stackAlloc=function(){return e.asm.ub.apply(null,arguments)},sa=e.stackRestore=function(){return e.asm.vb.apply(null,arguments)};e.dynCall_vi=function(){return e.asm.wb.apply(null,arguments)};e.dynCall_v=function(){return e.asm.xb.apply(null,arguments)};var Q=e.dynCall_iiii=function(){return e.asm.yb.apply(null,arguments)},Gb=e.dynCall_idi=function(){return e.asm.zb.apply(null,arguments)};e.asm=Kb;var Lb;
function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}J=function Mb(){Lb||Nb();Lb||(J=Mb)};
function Nb(a){function b(){if(!Lb&&(Lb=!0,!ma)){Da(Fa);Da(Ga);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Ob){var b=a,d=e._main;b=b||[];var f=b.length+1,l=pa(4*(f+1));G[l>>2]=va(aa);for(var k=1;k<f;k++)G[(l>>2)+k]=va(b[k-1]);G[(l>>2)+f]=0;try{var m=d(f,l);if(!B||0!==m){if(!B&&(ma=!0,e.onExit))e.onExit(m);t(m,new ia(m))}}catch(n){n instanceof ia||("unwind"==n?B=!0:((b=n)&&"object"===typeof n&&n.stack&&(b=[n,n.stack]),z("exception thrown: "+b),t(1,n)))}finally{}}if(e.postRun)for("function"==
typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)b=e.postRun.shift(),Ia.unshift(b);Da(Ia)}}a=a||r;if(!(0<I)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ja();Da(Ea);0<I||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Nb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Ob=!0;e.noInitialRun&&(Ob=!1);B=!0;Nb();
