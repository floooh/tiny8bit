var f;f||(f=typeof Module !== 'undefined' ? Module : {});var g={},k;for(k in f)f.hasOwnProperty(k)&&(g[k]=f[k]);var m=[],aa="./this.program";function r(a,b){throw b;}var t=!1,u=!1,ba=!1,ca=!1,da=!1;t="object"===typeof window;u="function"===typeof importScripts;ba=(ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!t&&!u;da=!t&&!ba&&!u;var w="",ea,y;
if(ba){w=__dirname+"/";var fa,ha;ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);a=fa.readFileSync(a);return b?a:a.toString()};y=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||z("Assertion failed: undefined");return a};1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/"));m=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=f);process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;});process.on("unhandledRejection",
z);r=function(a){process.exit(a)};f.inspect=function(){return"[Emscripten Module object]"}}else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),y=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||z("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?m=scriptArgs:"undefined"!=typeof arguments&&(m=arguments),"function"===typeof quit&&(r=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===
typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(t||u)u?w=self.location.href:document.currentScript&&(w=document.currentScript.src),w=0!==w.indexOf("blob:")?w.substr(0,w.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(y=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ja=f.print||console.log.bind(console),A=f.printErr||console.warn.bind(console);for(k in g)g.hasOwnProperty(k)&&(f[k]=g[k]);g=null;f.arguments&&(m=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(r=f.quit);var B;f.wasmBinary&&(B=f.wasmBinary);"object"!==typeof WebAssembly&&A("no native wasm support detected");var C,ka=!1,la="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function D(a,b){if(a){var c=E,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&la)a=la.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var h=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var l=c[a++]&63;e=224==(e&240)?(e&15)<<12|h<<6|l:(e&7)<<18|h<<12|l<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function F(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var l=a.charCodeAt(h);if(55296<=l&&57343>=l){var n=a.charCodeAt(++h);l=65536+((l&1023)<<10)|n&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function ma(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function na(a){var b=ma(a)+1,c=oa(b);F(a,pa,c,b);return c}function qa(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,pa,E,ra,sa,G,ta,H,I;
function ua(){f.HEAP8=pa=new Int8Array(buffer);f.HEAP16=ra=new Int16Array(buffer);f.HEAP32=G=new Int32Array(buffer);f.HEAPU8=E=new Uint8Array(buffer);f.HEAPU16=sa=new Uint16Array(buffer);f.HEAPU32=ta=new Uint32Array(buffer);f.HEAPF32=H=new Float32Array(buffer);f.HEAPF64=I=new Float64Array(buffer)}var va=f.TOTAL_MEMORY||33554432;f.wasmMemory?C=f.wasmMemory:C=new WebAssembly.Memory({initial:va/65536});C&&(buffer=C.buffer);va=buffer.byteLength;ua();G[1379896]=10762480;
function wa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Fb;"number"===typeof c?void 0===b.yb?f.dynCall_v(c):f.dynCall_vi(c,b.yb):c(void 0===b.yb?null:b.yb)}}}var xa=[],ya=[],za=[],Aa=[],Ba=[];function Ca(){var a=f.preRun.shift();xa.unshift(a)}var J=0,Da=null,K=null;f.preloadedImages={};f.preloadedAudios={};
function Ea(){var a=L;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var L="bombjack.wasm";if(!Ea()){var Fa=L;L=f.locateFile?f.locateFile(Fa,w):w+Fa}function Ha(){try{if(B)return new Uint8Array(B);if(y)return y(L);throw"both async and sync fetching of the wasm failed";}catch(a){z(a)}}
function Ia(){return B||!t&&!u||"function"!==typeof fetch?new Promise(function(a){a(Ha())}):fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Ha()})}
function Ja(a){function b(a){f.asm=a.exports;J--;f.monitorRunDependencies&&f.monitorRunDependencies(J);0==J&&(null!==Da&&(clearInterval(Da),Da=null),K&&(a=K,K=null,a()))}function c(a){b(a.instance)}function d(a){return Ia().then(function(a){return WebAssembly.instantiate(a,e)}).then(a,function(a){A("failed to asynchronously prepare wasm: "+a);z(a)})}var e={env:a};J++;f.monitorRunDependencies&&f.monitorRunDependencies(J);if(f.instantiateWasm)try{return f.instantiateWasm(e,b)}catch(h){return A("Module.instantiateWasm callback failed with error: "+
h),!1}(function(){if(B||"function"!==typeof WebAssembly.instantiateStreaming||Ea()||"function"!==typeof fetch)return d(c);fetch(L,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,e).then(c,function(a){A("wasm streaming compile failed: "+a);A("falling back to ArrayBuffer instantiation");d(c)})})})();return{}}f.asm=function(a,b){b.memory=C;b.table=new WebAssembly.Table({initial:19,maximum:19,element:"anyfunc"});return Ja(b)};ya.push({Fb:function(){Ka()}});
var La=0,Ma=0,M=0,Na=0,Oa=0,Pa=null,Qa=null,Ra=!1;function Sa(){for(var a=N.length-1;0<=a;--a)Ta(a);N=[];Ua=[]}var Ua=[];function Va(){if(Wa&&Xa.qb)for(var a=0;a<Ua.length;++a){var b=Ua[a];Ua.splice(a,1);--a;b.Qb.apply(this,b.Kb)}}var Wa=0,Xa=null,N=[];function Ya(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Ta(a){var b=N[a];b.target.removeEventListener(b.pb,b.Db,b.rb);N.splice(a,1)}
function O(a){function b(b){++Wa;Xa=a;Va();a.tb(b);Va();--Wa}if(a.sb)a.Db=b,a.target.addEventListener(a.pb,b,a.rb),N.push(a),Ra||(Aa.push(Sa),Ra=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].pb==a.pb&&Ta(c--)}var Za=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function P(a){try{if(!a)return window;"number"===typeof a&&(a=Za[a]||D(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?f.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function $a(a){"number"===typeof a&&(a=D(a));return a&&"#canvas"!==a?"undefined"!==typeof ab&&bb[a]?bb[a]:P(a):"undefined"!==typeof ab&&bb.canvas?bb.canvas:f.canvas}
function cb(a,b,c,d,e,h){La||(La=Q(164));a={target:P(a),qb:Ya()?!1:!0,pb:h,sb:d,tb:function(a){a=a||event;var c=La;F(a.key?a.key:"",E,c+0,32);F(a.code?a.code:"",E,c+32,32);G[c+64>>2]=a.location;G[c+68>>2]=a.ctrlKey;G[c+72>>2]=a.shiftKey;G[c+76>>2]=a.altKey;G[c+80>>2]=a.metaKey;G[c+84>>2]=a.repeat;F(a.locale?a.locale:"",E,c+88,32);F(a.char?a.char:"",E,c+120,32);G[c+152>>2]=a.charCode;G[c+156>>2]=a.keyCode;G[c+160>>2]=a.which;R(d,e,c,b)&&a.preventDefault()},rb:c};O(a)}
function db(a,b,c){I[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();G[a+8>>2]=b.screenX;G[a+12>>2]=b.screenY;G[a+16>>2]=b.clientX;G[a+20>>2]=b.clientY;G[a+24>>2]=b.ctrlKey;G[a+28>>2]=b.shiftKey;G[a+32>>2]=b.altKey;G[a+36>>2]=b.metaKey;ra[a+40>>1]=b.button;ra[a+42>>1]=b.buttons;G[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Pa;G[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Qa;if(f.canvas){var d=f.canvas.getBoundingClientRect();
G[a+60>>2]=b.clientX-d.left;G[a+64>>2]=b.clientY-d.top}else G[a+60>>2]=0,G[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},G[a+52>>2]=b.clientX-d.left,G[a+56>>2]=b.clientY-d.top):(G[a+52>>2]=0,G[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Pa=b.screenX,Qa=b.screenY)}
function S(a,b,c,d,e,h){Ma||(Ma=Q(72));a=P(a);c={target:a,qb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,pb:h,sb:d,tb:function(c){c=c||event;db(Ma,c,a);R(d,e,Ma,b)&&c.preventDefault()},rb:c};Ya()&&"mousedown"==h&&(c.qb=!1);O(c)}
function eb(a,b,c,d){Na||(Na=Q(36));a=P(a);O({target:a,qb:!1,pb:"resize",sb:d,tb:function(c){c=c||event;if(c.target==a){var e=0<pageXOffset||0<pageYOffset?[pageXOffset,pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Na;G[l>>2]=c.detail;G[l+4>>2]=document.body.clientWidth;G[l+8>>2]=document.body.clientHeight;
G[l+12>>2]=innerWidth;G[l+16>>2]=innerHeight;G[l+20>>2]=outerWidth;G[l+24>>2]=outerHeight;G[l+28>>2]=e[0];G[l+32>>2]=e[1];R(d,10,l,b)&&c.preventDefault()}},rb:c})}
function fb(a,b,c,d,e,h){Oa||(Oa=Q(1684));a=P(a);O({target:a,qb:"touchstart"==h||"touchend"==h,pb:h,sb:d,tb:function(c){c=c||event;for(var h={},l=0;l<c.touches.length;++l){var p=c.touches[l];p.Ab=!1;h[p.identifier]=p}for(l=0;l<c.changedTouches.length;++l)p=c.changedTouches[l],h[p.identifier]=p,p.Ab=!0;for(l=0;l<c.targetTouches.length;++l)p=c.targetTouches[l],h[p.identifier].Ib=!0;var q=p=Oa;G[q+4>>2]=c.ctrlKey;G[q+8>>2]=c.shiftKey;G[q+12>>2]=c.altKey;G[q+16>>2]=c.metaKey;q+=20;var Ga=f.canvas?f.canvas.getBoundingClientRect():
void 0,hb=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},ib=0;for(l in h){var v=h[l];G[q>>2]=v.identifier;G[q+4>>2]=v.screenX;G[q+8>>2]=v.screenY;G[q+12>>2]=v.clientX;G[q+16>>2]=v.clientY;G[q+20>>2]=v.pageX;G[q+24>>2]=v.pageY;G[q+28>>2]=v.Ab;G[q+32>>2]=v.Ib;Ga?(G[q+44>>2]=v.clientX-Ga.left,G[q+48>>2]=v.clientY-Ga.top):(G[q+44>>2]=0,G[q+48>>2]=0);G[q+36>>2]=v.clientX-hb.left;G[q+40>>2]=v.clientY-hb.top;q+=52;if(32<=++ib)break}G[p>>2]=ib;R(d,e,p,b)&&c.preventDefault()},rb:c})}
function gb(a,b,c,d,e,h){a||(a=f.canvas);a={target:P(a),qb:!1,pb:h,sb:d,tb:function(a){a=a||event;R(d,e,0,b)&&a.preventDefault()},rb:c};O(a)}
function jb(a,b,c,d,e){function h(c){c=c||event;db(M,c,a);I[M+72>>3]=c.wheelDeltaX||0;I[M+80>>3]=-(c.wheelDeltaY||c.wheelDelta);I[M+88>>3]=0;G[M+96>>2]=0;R(d,9,M,b)&&c.preventDefault()}function l(c){c=c||event;var e=M;db(e,c,a);I[e+72>>3]=c.deltaX;I[e+80>>3]=c.deltaY;I[e+88>>3]=c.deltaZ;G[e+96>>2]=c.deltaMode;R(d,9,e,b)&&c.preventDefault()}M||(M=Q(104));O({target:a,qb:!0,pb:e,sb:d,tb:"wheel"==e?l:h,rb:c})}var kb=1,lb=0,mb=[],T=[],nb=[],U=[],ob=[],V=[],W=[],pb={},qb=null,bb={},rb={},sb={};
function X(a){lb||(lb=a)}function tb(a){for(var b=kb++,c=a.length;c<b;c++)a[c]=null;return b}var ub=null,Y=[0];function vb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(a,d){b.vertexAttribDivisorANGLE(a,d)},a.drawArraysInstanced=function(a,d,e,h){b.drawArraysInstancedANGLE(a,d,e,h)},a.drawElementsInstanced=function(a,d,e,h,l){b.drawElementsInstancedANGLE(a,d,e,h,l)})}
function wb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(a){b.deleteVertexArrayOES(a)},a.bindVertexArray=function(a){b.bindVertexArrayOES(a)},a.isVertexArray=function(a){return b.isVertexArrayOES(a)})}function xb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(a,d){b.drawBuffersWEBGL(a,d)})}
function yb(a){a||(a=qb);if(!a.Gb){a.Gb=!0;var b=a.xb;2>a.version&&(vb(b),wb(b),xb(b));b.Mb=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=c.indexOf(a)&&b.getExtension(a)})}}var ab={},zb,Ab,Bb=["default","low-power","high-performance"];function Cb(a,b,c,d){for(var e=0;e<a;e++){var h=Z[c](),l=h&&tb(d);h?(h.name=l,d[l]=h):X(1282);G[b+4*e>>2]=l}}
function Db(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){X(1280);A("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:X(1280);A("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else X(1281)}function Eb(a){var b=ma(a)+1,c=Q(b);F(a,E,c,b);return c}
var Fb={6402:1,6406:1,6407:3,6408:4,6409:1,6410:2,35904:3,35906:4},Gb={5121:1,5123:2,5125:4,5126:4,32819:2,32820:2,33635:2,34042:4,36193:2};function Hb(a,b,c,d,e){if(b=Fb[b]*Gb[a])switch(c=e+d*(c*b+4-1&-4),a){case 5121:return E.subarray(e,c);case 5126:return H.subarray(e>>2,c>>2);case 5125:case 34042:return ta.subarray(e>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:return sa.subarray(e>>1,c>>1);default:X(1280)}else X(1280)}
function Ib(){f.___errno_location&&(G[f.___errno_location()>>2]=12)}function Jb(a){a=qa(a);var b=buffer.byteLength;try{return-1!==C.grow((a-b)/65536)?(buffer=C.buffer,!0):!1}catch(c){return!1}}var Z;ub=new Float32Array(256);for(var Kb=0;256>Kb;Kb++)Y[Kb]=ub.subarray(0,Kb+1);
var Pb=f.asm({},{W:function(){return devicePixelRatio||1},Y:function(a,b,c){a=a?P(a):f.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),I[b>>3]=a.right-a.left,I[c>>3]=a.bottom-a.top):(I[b>>3]=a.clientWidth,I[c>>3]=a.clientHeight);return 0},Ua:function(a,b,c){E.set(E.subarray(b,b+c),a)},Ha:function(a,b){function c(d){Lb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},U:function(a,b,c){a=$a(a);if(!a)return-4;a.width=b;a.height=c;return 0},Qa:function(a,b,
c,d){cb(a,b,c,d,2,"keydown");return 0},Oa:function(a,b,c,d){cb(a,b,c,d,1,"keypress");return 0},Pa:function(a,b,c,d){cb(a,b,c,d,3,"keyup");return 0},ma:function(a,b,c,d){S(a,b,c,d,5,"mousedown");return 0},Ta:function(a,b,c,d){S(a,b,c,d,33,"mouseenter");return 0},Sa:function(a,b,c,d){S(a,b,c,d,34,"mouseleave");return 0},_a:function(a,b,c,d){S(a,b,c,d,8,"mousemove");return 0},ca:function(a,b,c,d){S(a,b,c,d,6,"mouseup");return 0},$a:function(a,b,c,d){eb(a,b,c,d);return 0},Ka:function(a,b,c,d){fb(a,b,
c,d,25,"touchcancel");return 0},La:function(a,b,c,d){fb(a,b,c,d,23,"touchend");return 0},Ma:function(a,b,c,d){fb(a,b,c,d,24,"touchmove");return 0},Na:function(a,b,c,d){fb(a,b,c,d,22,"touchstart");return 0},Ja:function(a,b,c,d){gb(a,b,c,d,31,"webglcontextlost");return 0},Ia:function(a,b,c,d){gb(a,b,c,d,32,"webglcontextrestored");return 0},Ra:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(jb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(jb(a,b,c,d,"mousewheel"),0):-1},L:function(a,
b){var c={};b>>=2;c.alpha=!!G[b];c.depth=!!G[b+1];c.stencil=!!G[b+2];c.antialias=!!G[b+3];c.premultipliedAlpha=!!G[b+4];c.preserveDrawingBuffer=!!G[b+5];c.powerPreference=Bb[G[b+6]];c.failIfMajorPerformanceCaveat=!!G[b+7];c.Hb=G[b+8];c.Nb=G[b+9];c.Bb=G[b+10];c.Eb=G[b+11];c.Ob=G[b+12];c.Pb=G[b+13];a=$a(a);if(!a||c.Eb)c=0;else if(a=a.getContext("webgl",c)||a.getContext("experimental-webgl",c)){b=Q(8);var d={handle:b,attributes:c,version:c.Hb,xb:a};a.canvas&&(a.canvas.Jb=d);pb[b]=d;("undefined"===typeof c.Bb||
c.Bb)&&yb(d);c=b}else c=0;return c},oa:function(a,b){a=pb[a];b=D(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b?vb(Z):"OES_vertex_array_object"==b?wb(Z):"WEBGL_draw_buffers"==b&&xb(Z);return!!a.xb.getExtension(b)},za:function(a){a>>=2;for(var b=0;14>b;++b)G[a+b]=0;G[a]=G[a+1]=G[a+3]=G[a+4]=G[a+8]=G[a+10]=1},ta:function(a){qb=pb[a];f.Lb=Z=qb&&qb.xb;return!a||Z?0:-5},h:function(a){Z.activeTexture(a)},N:function(a,b){Z.attachShader(T[a],W[b])},e:function(a,b){Z.bindBuffer(a,mb[b])},
g:function(a,b){Z.bindFramebuffer(a,nb[b])},Ca:function(a,b){Z.bindRenderbuffer(a,U[b])},b:function(a,b){Z.bindTexture(a,ob[b])},F:function(a,b,c,d){Z.blendColor(a,b,c,d)},G:function(a,b){Z.blendEquationSeparate(a,b)},H:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},R:function(a,b,c,d){Z.bufferData(a,c?E.subarray(c,c+b):b,d)},Q:function(a,b,c,d){Z.bufferSubData(a,b,E.subarray(d,d+c))},m:function(a){return Z.checkFramebufferStatus(a)},pa:function(a){Z.clear(a)},sa:function(a,b,c,d){Z.clearColor(a,
b,c,d)},ra:function(a){Z.clearDepth(a)},qa:function(a){Z.clearStencil(a)},y:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},Xa:function(a){Z.compileShader(W[a])},P:function(a,b,c,d,e,h,l,n){Z.compressedTexImage2D(a,b,c,d,e,h,n?E.subarray(n,n+l):null)},ya:function(){var a=tb(T),b=Z.createProgram();b.name=a;T[a]=b;return a},Za:function(a){var b=tb(W);W[b]=Z.createShader(a);return b},E:function(a){Z.cullFace(a)},Ea:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],e=mb[d];e&&(Z.deleteBuffer(e),e.name=
0,mb[d]=null,d==zb&&(zb=0),d==Ab&&(Ab=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=G[b+4*c>>2],e=nb[d];e&&(Z.deleteFramebuffer(e),e.name=0,nb[d]=null)}},T:function(a){if(a){var b=T[a];b?(Z.deleteProgram(b),b.name=0,T[a]=null,rb[a]=null):X(1281)}},s:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],e=U[d];e&&(Z.deleteRenderbuffer(e),e.name=0,U[d]=null)}},z:function(a){if(a){var b=W[a];b?(Z.deleteShader(b),W[a]=null):X(1281)}},V:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],e=ob[d];e&&
(Z.deleteTexture(e),e.name=0,ob[d]=null)}},w:function(a){Z.depthFunc(a)},x:function(a){Z.depthMask(!!a)},d:function(a){Z.disable(a)},a:function(a){Z.disableVertexAttribArray(a)},da:function(a,b,c){Z.drawArrays(a,b,c)},ea:function(a,b,c,d){Z.drawElements(a,b,c,d)},f:function(a){Z.enable(a)},ka:function(a){Z.enableVertexAttribArray(a)},k:function(a,b,c,d){Z.framebufferRenderbuffer(a,b,c,U[d])},c:function(a,b,c,d,e){Z.framebufferTexture2D(a,b,c,ob[d],e)},D:function(a){Z.frontFace(a)},S:function(a,b){Cb(a,
b,"createBuffer",mb)},n:function(a,b){Cb(a,b,"createFramebuffer",nb)},Da:function(a,b){Cb(a,b,"createRenderbuffer",U)},Aa:function(a,b){Cb(a,b,"createTexture",ob)},va:function(a,b){return Z.getAttribLocation(T[a],D(b))},t:function(a,b){Db(a,b)},wa:function(a,b,c,d){a=Z.getProgramInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?F(a,E,d,b):0;c&&(G[c>>2]=b)},M:function(a,b,c){if(c)if(a>=kb)X(1281);else{var d=rb[a];if(d)if(35716==b)a=Z.getProgramInfoLog(T[a]),null===a&&(a="(unknown error)"),G[c>>
2]=a.length+1;else if(35719==b)G[c>>2]=d.zb;else if(35722==b){if(-1==d.vb){a=T[a];var e=Z.getProgramParameter(a,35721);for(b=d.vb=0;b<e;++b)d.vb=Math.max(d.vb,Z.getActiveAttrib(a,b).name.length+1)}G[c>>2]=d.vb}else if(35381==b){if(-1==d.wb)for(a=T[a],e=Z.getProgramParameter(a,35382),b=d.wb=0;b<e;++b)d.wb=Math.max(d.wb,Z.getActiveUniformBlockName(a,b).length+1);G[c>>2]=d.wb}else G[c>>2]=Z.getProgramParameter(T[a],b);else X(1282)}else X(1281)},Wa:function(a,b,c,d){a=Z.getShaderInfoLog(W[a]);null===
a&&(a="(unknown error)");b=0<b&&d?F(a,E,d,b):0;c&&(G[c>>2]=b)},X:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(W[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(W[a]),G[c>>2]=null===a||0==a.length?0:a.length+1):G[c>>2]=Z.getShaderParameter(W[a],b):X(1281)},Fa:function(a){if(sb[a])return sb[a];switch(a){case 7939:var b=Z.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);b=Eb(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=
Z.getParameter(a))||X(1280);b=Eb(b);break;case 7938:b=Eb("OpenGL ES 2.0 ("+Z.getParameter(Z.VERSION)+")");break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Eb(b);break;default:return X(1280),0}return sb[a]=b},l:function(a,b){b=D(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=
rb[a]&&rb[a].Cb[b])&&0<=c&&c<a[0]?a[1]+c:-1},xa:function(a){Z.linkProgram(T[a]);var b=T[a];a=rb[a]={Cb:{},zb:0,vb:-1,wb:-1};for(var c=a.Cb,d=Z.getProgramParameter(b,35718),e=0;e<d;++e){var h=Z.getActiveUniform(b,e),l=h.name;a.zb=Math.max(a.zb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var n=Z.getUniformLocation(b,l);if(n){var x=tb(V);c[l]=[h.size,x];V[x]=n;for(var p=1;p<h.size;++p)n=Z.getUniformLocation(b,l+"["+p+"]"),x=tb(V),V[x]=n}}},C:function(a,b){Z.polygonOffset(a,b)},Ba:function(a,
b,c,d){Z.renderbufferStorage(a,b,c,d)},ua:function(a,b,c,d){Z.scissor(a,b,c,d)},Ya:function(a,b,c,d){for(var e="",h=0;h<b;++h){var l=d?G[d+4*h>>2]:-1;e+=D(G[c+4*h>>2],0>l?void 0:l)}Z.shaderSource(W[a],e)},ba:function(a,b,c){Z.stencilFunc(a,b,c)},J:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},v:function(a){Z.stencilMask(a)},aa:function(a,b,c){Z.stencilOp(a,b,c)},I:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},O:function(a,b,c,d,e,h,l,n,x){Z.texImage2D(a,b,c,d,e,h,l,n,x?Hb(n,l,d,e,x):null)},
i:function(a,b,c){Z.texParameteri(a,b,c)},r:function(a,b,c,d,e,h,l,n,x){var p=null;x&&(p=Hb(n,l,e,h,x));Z.texSubImage2D(a,b,c,d,e,h,l,n,p)},ja:function(a,b,c){if(256>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=H[c+4*e>>2];else d=H.subarray(c>>2,c+4*b>>2);Z.uniform1fv(V[a],d)},B:function(a,b){Z.uniform1i(V[a],b)},ia:function(a,b,c){if(256>=2*b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2];else d=H.subarray(c>>2,c+8*b>>2);Z.uniform2fv(V[a],d)},ha:function(a,b,c){if(256>=3*b)for(var d=
Y[3*b-1],e=0;e<3*b;e+=3)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2],d[e+2]=H[c+(4*e+8)>>2];else d=H.subarray(c>>2,c+12*b>>2);Z.uniform3fv(V[a],d)},ga:function(a,b,c){if(256>=4*b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2],d[e+2]=H[c+(4*e+8)>>2],d[e+3]=H[c+(4*e+12)>>2];else d=H.subarray(c>>2,c+16*b>>2);Z.uniform4fv(V[a],d)},fa:function(a,b,c,d){if(256>=16*b)for(var e=Y[16*b-1],h=0;h<16*b;h+=16)e[h]=H[d+4*h>>2],e[h+1]=H[d+(4*h+4)>>2],e[h+2]=H[d+(4*h+8)>>2],e[h+3]=H[d+(4*h+
12)>>2],e[h+4]=H[d+(4*h+16)>>2],e[h+5]=H[d+(4*h+20)>>2],e[h+6]=H[d+(4*h+24)>>2],e[h+7]=H[d+(4*h+28)>>2],e[h+8]=H[d+(4*h+32)>>2],e[h+9]=H[d+(4*h+36)>>2],e[h+10]=H[d+(4*h+40)>>2],e[h+11]=H[d+(4*h+44)>>2],e[h+12]=H[d+(4*h+48)>>2],e[h+13]=H[d+(4*h+52)>>2],e[h+14]=H[d+(4*h+56)>>2],e[h+15]=H[d+(4*h+60)>>2];else e=H.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(V[a],!!c,e)},na:function(a){Z.useProgram(T[a])},Va:function(a,b){Z.vertexAttribDivisor(a,b)},la:function(a,b,c,d,e,h){Z.vertexAttribPointer(a,b,c,
!!d,e,h)},K:function(a,b,c,d){Z.viewport(a,b,c,d)},q:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Mb()});document.body.append(a)},p:function(){document.getElementById("_sokol_app_input_element").focus()},Ga:function(){window.addEventListener("beforeunload",function(a){0!=Nb()&&(a.preventDefault(),a.returnValue=" ")})},o:function(){document.getElementById("_sokol_app_input_element").blur()},
Z:function(){return f.ub?f.ub.bufferSize:0},$:function(a,b,c){f.ob=null;f.ub=null;"undefined"!==typeof AudioContext?(f.ob=new AudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created AudioContext")):"undefined"!==typeof webkitAudioContext?(f.ob=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created webkitAudioContext")):(f.ob=null,console.log("sokol_audio.h: no WebAudio support"));return f.ob?(console.log("sokol_audio.h: sample rate ",
f.ob.sampleRate),f.ub=f.ob.createScriptProcessor(c,0,b),f.ub.onaudioprocess=function(a){var b=a.outputBuffer.length,c=Ob(b);if(c)for(var d=a.outputBuffer.numberOfChannels,n=0;n<d;n++)for(var x=a.outputBuffer.getChannelData(n),p=0;p<b;p++)x[p]=H[(c>>2)+(d*p+n)]},f.ub.connect(f.ob.destination),a=function(){f.ob&&"suspended"===f.ob.state&&f.ob.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),
1):0},_:function(){return f.ob?f.ob.sampleRate:0},A:function(a){a|=0;var b=pa.length|0;var c=G[1379896]|0;var d=c+a|0;if(0<(a|0)&(d|0)<(c|0)|0>(d|0))return z("OOM"),0,Ib(),-1;if(a=(d|0)>(b|0)){a=d|0;if(2147418112<a)a=!1;else{for(b=Math.max(pa.length,16777216);b<a;)536870912>=b?b=qa(2*b):b=Math.min(qa((3*b+2147483648)/4),2147418112);Jb(b)?(ua(),a=!0):a=!1}a=!(a|0)}if(a)return Ib(),-1;G[1379896]=d|0;return c|0},u:function(){return performance.now()}},buffer);f.asm=Pb;
var Ka=f.___wasm_call_ctors=function(){return f.asm.ab.apply(null,arguments)};f._emsc_load_data=function(){return f.asm.bb.apply(null,arguments)};var Mb=f.__sapp_emsc_notify_keyboard_hidden=function(){return f.asm.cb.apply(null,arguments)},Nb=f.__sapp_html5_get_ask_leave_site=function(){return f.asm.db.apply(null,arguments)};f._main=function(){return f.asm.eb.apply(null,arguments)};var Q=f._malloc=function(){return f.asm.fb.apply(null,arguments)};f._free=function(){return f.asm.gb.apply(null,arguments)};
var Ob=f.__saudio_emsc_pull=function(){return f.asm.hb.apply(null,arguments)};f.__sargs_add_kvp=function(){return f.asm.ib.apply(null,arguments)};var oa=f.stackAlloc=function(){return f.asm.jb.apply(null,arguments)};f.dynCall_vi=function(){return f.asm.kb.apply(null,arguments)};f.dynCall_v=function(){return f.asm.lb.apply(null,arguments)};var R=f.dynCall_iiii=function(){return f.asm.mb.apply(null,arguments)},Lb=f.dynCall_idi=function(){return f.asm.nb.apply(null,arguments)};f.asm=Pb;
function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}K=function Qb(){f.calledRun||Rb();f.calledRun||(K=Qb)};
function Rb(a){function b(){if(!f.calledRun&&(f.calledRun=!0,!ka)){wa(ya);wa(za);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Sb){var b=a;b=b||[];var d=b.length+1,e=oa(4*(d+1));G[e>>2]=na(aa);for(var h=1;h<d;h++)G[(e>>2)+h]=na(b[h-1]);G[(e>>2)+d]=0;try{var l=f._main(d,e);if(!f.noExitRuntime||0!==l){if(!f.noExitRuntime&&(ka=!0,f.onExit))f.onExit(l);r(l,new ia(l))}}catch(n){n instanceof ia||("SimulateInfiniteLoop"==n?f.noExitRuntime=!0:((b=n)&&"object"===typeof n&&n.stack&&(b=[n,n.stack]),
A("exception thrown: "+b),r(1,n)))}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)b=f.postRun.shift(),Ba.unshift(b);wa(Ba)}}a=a||m;if(!(0<J)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ca();wa(xa);0<J||f.calledRun||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Rb;
function z(a){if(f.onAbort)f.onAbort(a);ja(a);A(a);ka=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}f.abort=z;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Sb=!0;f.noInitialRun&&(Sb=!1);f.noExitRuntime=!0;Rb();
