var f;f||(f=typeof Module !== 'undefined' ? Module : {});var h={},k;for(k in f)f.hasOwnProperty(k)&&(h[k]=f[k]);f.arguments=[];f.thisProgram="./this.program";f.quit=function(a,b){throw b;};f.preRun=[];f.postRun=[];var m=!1,r=!1,aa=!1,ba=!1,ca=!1;m="object"===typeof window;r="function"===typeof importScripts;aa=(ba="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!m&&!r;ca=!m&&!aa&&!r;var u="";
if(aa){u=__dirname+"/";var da,ea;f.read=function(a,b){da||(da=require("fs"));ea||(ea=require("path"));a=ea.normalize(a);a=da.readFileSync(a);return b?a:a.toString()};f.readBinary=function(a){a=f.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(f.thisProgram=process.argv[1].replace(/\\/g,"/"));f.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=f);process.on("uncaughtException",function(a){if(!(a instanceof v))throw a;});process.on("unhandledRejection",
x);f.quit=function(a){process.exit(a)};f.inspect=function(){return"[Emscripten Module object]"}}else if(ca)"undefined"!=typeof read&&(f.read=function(a){return read(a)}),f.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?f.arguments=scriptArgs:"undefined"!=typeof arguments&&(f.arguments=arguments),"function"===typeof quit&&(f.quit=function(a){quit(a)});else if(m||r)r?
u=self.location.href:document.currentScript&&(u=document.currentScript.src),u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",f.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},r&&(f.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),f.readAsync=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==
d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},f.setWindowTitle=function(a){document.title=a};var fa=f.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),y=f.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||fa);for(k in h)h.hasOwnProperty(k)&&(f[k]=h[k]);h=void 0;"object"!==typeof WebAssembly&&y("no native wasm support detected");var z,ha=!1;
function assert(a,b){a||x("Assertion failed: "+b)}function ia(a){var b=f["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function ja(a,b,c,d){var e={string:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=ka(c);A(a,B,b,c)}return b},array:function(a){var b=ka(a.length);C.set(a,b);return b}},g=ia(a),l=[];a=0;if(d)for(var n=0;n<d.length;n++){var t=e[c[n]];t?(0===a&&(a=la()),l[n]=t(d[n])):l[n]=d[n]}c=g.apply(null,l);c=function(a){return"string"===b?D(a):"boolean"===b?!!a:a}(c);0!==a&&ma(a);return c}var na="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function oa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&na)return na.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var g=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var l=a[b++]&63;e=224==(e&240)?(e&15)<<12|g<<6|l:(e&7)<<18|g<<12|l<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function D(a,b){return a?oa(B,a,b):""}
function A(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var g=0;g<a.length;++g){var l=a.charCodeAt(g);if(55296<=l&&57343>=l){var n=a.charCodeAt(++g);l=65536+((l&1023)<<10)|n&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function pa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function qa(a){var b=pa(a)+1,c=ka(b);A(a,C,c,b);return c}function ra(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,C,B,sa,ta,E,ua,F,G;
function va(){f.HEAP8=C=new Int8Array(buffer);f.HEAP16=sa=new Int16Array(buffer);f.HEAP32=E=new Int32Array(buffer);f.HEAPU8=B=new Uint8Array(buffer);f.HEAPU16=ta=new Uint16Array(buffer);f.HEAPU32=ua=new Uint32Array(buffer);f.HEAPF32=F=new Float32Array(buffer);f.HEAPF64=G=new Float64Array(buffer)}var wa=f.TOTAL_MEMORY||33554432;5242880>wa&&y("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+wa+"! (TOTAL_STACK=5242880)");f.wasmMemory?z=f.wasmMemory:z=new WebAssembly.Memory({initial:wa/65536});
z&&(buffer=z.buffer);wa=buffer.byteLength;va();E[1690844]=12006288;function xa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Vb;"number"===typeof c?void 0===b.Nb?f.dynCall_v(c):f.dynCall_vi(c,b.Nb):c(void 0===b.Nb?null:b.Nb)}}}var za=[],Aa=[],Ba=[],Ca=[],Da=[];function Ea(){var a=f.preRun.shift();za.unshift(a)}var Fa=Math.abs,Ga=Math.sqrt,Ha=Math.floor,H=0,Ia=null,I=null;f.preloadedImages={};f.preloadedAudios={};
function Ja(){var a=J;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var J="z1013-ui.wasm";if(!Ja()){var Ka=J;J=f.locateFile?f.locateFile(Ka,u):u+Ka}function La(){try{if(f.wasmBinary)return new Uint8Array(f.wasmBinary);if(f.readBinary)return f.readBinary(J);throw"both async and sync fetching of the wasm failed";}catch(a){x(a)}}
function Ma(){return f.wasmBinary||!m&&!r||"function"!==typeof fetch?new Promise(function(a){a(La())}):fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return La()})}
function Na(a){function b(a){f.asm=a.exports;H--;f.monitorRunDependencies&&f.monitorRunDependencies(H);0==H&&(null!==Ia&&(clearInterval(Ia),Ia=null),I&&(a=I,I=null,a()))}function c(a){b(a.instance)}function d(a){return Ma().then(function(a){return WebAssembly.instantiate(a,e)}).then(a,function(a){y("failed to asynchronously prepare wasm: "+a);x(a)})}var e={env:a};H++;f.monitorRunDependencies&&f.monitorRunDependencies(H);if(f.instantiateWasm)try{return f.instantiateWasm(e,b)}catch(g){return y("Module.instantiateWasm callback failed with error: "+
g),!1}(function(){if(f.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||Ja()||"function"!==typeof fetch)return d(c);fetch(J,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,e).then(c,function(a){y("wasm streaming compile failed: "+a);y("falling back to ArrayBuffer instantiation");d(c)})})})();return{}}f.asm=function(a,b){b.memory=z;b.table=new WebAssembly.Table({initial:53,maximum:53,element:"anyfunc"});return Na(b)};Aa.push({Vb:function(){Oa()}});
var Pa=[null,[],[]],K=0;function L(){K+=4;return E[K-4>>2]}var Qa={};function Ra(){f.___errno_location&&(E[f.___errno_location()>>2]=12)}var Sa=0,Ta=0,M=0,Ua=0,Va=0,Wa=null,Xa=null,Ya=!1;function Za(){for(var a=N.length-1;0<=a;--a)$a(a);N=[];ab=[]}var ab=[];function bb(){if(cb&&db.Fb)for(var a=0;a<ab.length;++a){var b=ab[a];ab.splice(a,1);--a;b.hc.apply(this,b.$b)}}var cb=0,db=null,N=[];function eb(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}
function $a(a){var b=N[a];b.target.removeEventListener(b.Eb,b.Tb,b.Gb);N.splice(a,1)}function O(a){function b(b){++cb;db=a;bb();a.Ib(b);bb();--cb}if(a.Hb)a.Tb=b,a.target.addEventListener(a.Eb,b,a.Gb),N.push(a),Ya||(Ca.push(Za),Ya=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].Eb==a.Eb&&$a(c--)}var fb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function P(a){try{if(!a)return window;"number"===typeof a&&(a=fb[a]||D(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?f.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function gb(a){"number"===typeof a&&(a=D(a));return a&&"#canvas"!==a?"undefined"!==typeof hb&&ib[a]?ib[a]:P(a):"undefined"!==typeof hb&&ib.canvas?ib.canvas:f.canvas}
function jb(a,b,c,d,e,g){Sa||(Sa=Q(164));a={target:P(a),Fb:eb()?!1:!0,Eb:g,Hb:d,Ib:function(a){a=a||window.event;var c=Sa;A(a.key?a.key:"",B,c+0,32);A(a.code?a.code:"",B,c+32,32);E[c+64>>2]=a.location;E[c+68>>2]=a.ctrlKey;E[c+72>>2]=a.shiftKey;E[c+76>>2]=a.altKey;E[c+80>>2]=a.metaKey;E[c+84>>2]=a.repeat;A(a.locale?a.locale:"",B,c+88,32);A(a.char?a.char:"",B,c+120,32);E[c+152>>2]=a.charCode;E[c+156>>2]=a.keyCode;E[c+160>>2]=a.which;R(d,e,c,b)&&a.preventDefault()},Gb:c};O(a)}
function mb(a,b,c){G[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();E[a+8>>2]=b.screenX;E[a+12>>2]=b.screenY;E[a+16>>2]=b.clientX;E[a+20>>2]=b.clientY;E[a+24>>2]=b.ctrlKey;E[a+28>>2]=b.shiftKey;E[a+32>>2]=b.altKey;E[a+36>>2]=b.metaKey;sa[a+40>>1]=b.button;sa[a+42>>1]=b.buttons;E[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Wa;E[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Xa;if(f.canvas){var d=f.canvas.getBoundingClientRect();
E[a+60>>2]=b.clientX-d.left;E[a+64>>2]=b.clientY-d.top}else E[a+60>>2]=0,E[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},E[a+52>>2]=b.clientX-d.left,E[a+56>>2]=b.clientY-d.top):(E[a+52>>2]=0,E[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Wa=b.screenX,Xa=b.screenY)}
function S(a,b,c,d,e,g){Ta||(Ta=Q(72));a=P(a);c={target:a,Fb:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,Eb:g,Hb:d,Ib:function(c){c=c||window.event;mb(Ta,c,a);R(d,e,Ta,b)&&c.preventDefault()},Gb:c};eb()&&"mousedown"==g&&(c.Fb=!1);O(c)}
function nb(a,b,c,d){Ua||(Ua=Q(36));a=P(a);O({target:a,Fb:!1,Eb:"resize",Hb:d,Ib:function(c){c=c||window.event;if(c.target==a){var e=0<window.pageXOffset||0<window.pageYOffset?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Ua;E[l>>2]=c.detail;E[l+4>>2]=document.body.clientWidth;
E[l+8>>2]=document.body.clientHeight;E[l+12>>2]=window.innerWidth;E[l+16>>2]=window.innerHeight;E[l+20>>2]=window.outerWidth;E[l+24>>2]=window.outerHeight;E[l+28>>2]=e[0];E[l+32>>2]=e[1];R(d,10,l,b)&&c.preventDefault()}},Gb:c})}
function ob(a,b,c,d,e,g){Va||(Va=Q(1684));a=P(a);O({target:a,Fb:"touchstart"==g||"touchend"==g,Eb:g,Hb:d,Ib:function(c){c=c||window.event;for(var g={},l=0;l<c.touches.length;++l){var q=c.touches[l];q.Pb=!1;g[q.identifier]=q}for(l=0;l<c.changedTouches.length;++l)q=c.changedTouches[l],g[q.identifier]=q,q.Pb=!0;for(l=0;l<c.targetTouches.length;++l)q=c.targetTouches[l],g[q.identifier].Yb=!0;var p=q=Va;E[p+4>>2]=c.ctrlKey;E[p+8>>2]=c.shiftKey;E[p+12>>2]=c.altKey;E[p+16>>2]=c.metaKey;p+=20;var ya=f.canvas?
f.canvas.getBoundingClientRect():void 0,kb=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},lb=0;for(l in g){var w=g[l];E[p>>2]=w.identifier;E[p+4>>2]=w.screenX;E[p+8>>2]=w.screenY;E[p+12>>2]=w.clientX;E[p+16>>2]=w.clientY;E[p+20>>2]=w.pageX;E[p+24>>2]=w.pageY;E[p+28>>2]=w.Pb;E[p+32>>2]=w.Yb;ya?(E[p+44>>2]=w.clientX-ya.left,E[p+48>>2]=w.clientY-ya.top):(E[p+44>>2]=0,E[p+48>>2]=0);E[p+36>>2]=w.clientX-kb.left;E[p+40>>2]=w.clientY-kb.top;p+=52;if(32<=++lb)break}E[q>>2]=lb;R(d,e,q,b)&&
c.preventDefault()},Gb:c})}function pb(a,b,c,d,e,g){a||(a=f.canvas);a={target:P(a),Fb:!1,Eb:g,Hb:d,Ib:function(a){a=a||window.event;R(d,e,0,b)&&a.preventDefault()},Gb:c};O(a)}
function qb(a,b,c,d,e){function g(c){c=c||window.event;mb(M,c,a);G[M+72>>3]=c.wheelDeltaX||0;G[M+80>>3]=-(c.wheelDeltaY?c.wheelDeltaY:c.wheelDelta);G[M+88>>3]=0;E[M+96>>2]=0;R(d,9,M,b)&&c.preventDefault()}function l(c){c=c||window.event;var e=M;mb(e,c,a);G[e+72>>3]=c.deltaX;G[e+80>>3]=c.deltaY;G[e+88>>3]=c.deltaZ;E[e+96>>2]=c.deltaMode;R(d,9,e,b)&&c.preventDefault()}M||(M=Q(104));O({target:a,Fb:!0,Eb:e,Hb:d,Ib:"wheel"==e?l:g,Gb:c})}
var rb=1,sb=0,tb=[],T=[],ub=[],U=[],vb=[],V=[],W=[],wb={},xb=null,ib={},yb={},zb={};function X(a){sb||(sb=a)}function Ab(a){for(var b=rb++,c=a.length;c<b;c++)a[c]=null;return b}var Bb=null,Y=[0];
function Cb(a){a||(a=xb);if(!a.Wb){a.Wb=!0;var b=a.Mb;if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,d,e){c.drawArraysInstancedANGLE(a,b,d,e)},b.drawElementsInstanced=function(a,b,d,e,g){c.drawElementsInstancedANGLE(a,b,d,e,g)});var d=b.getExtension("OES_vertex_array_object");d&&(b.createVertexArray=function(){return d.createVertexArrayOES()},b.deleteVertexArray=function(a){d.deleteVertexArrayOES(a)},
b.bindVertexArray=function(a){d.bindVertexArrayOES(a)},b.isVertexArray=function(a){return d.isVertexArrayOES(a)});var e=b.getExtension("WEBGL_draw_buffers");e&&(b.drawBuffers=function(a,b){e.drawBuffersWEBGL(a,b)})}b.bc=b.getExtension("EXT_disjoint_timer_query");var g="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=g.indexOf(a)&&b.getExtension(a)})}}var hb={},Db,Eb,Fb=["default","low-power","high-performance"];function Gb(a,b,c,d){for(var e=0;e<a;e++){var g=Z[c](),l=g&&Ab(d);g?(g.name=l,d[l]=g):X(1282);E[b+4*e>>2]=l}}
function Hb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)E[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){X(1280);y("GL_INVALID_ENUM in glGetIntegerv: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:X(1280);return}E[b>>2]=c}else X(1281)}function Ib(a){var b=pa(a)+1,c=Q(b);A(a,B,c,b);return c}var Jb={6402:1,6406:1,6407:3,6408:4,6409:1,6410:2,35904:3,35906:4},Kb={5121:1,5123:2,5125:4,5126:4,32819:2,32820:2,33635:2,34042:4,36193:2};
function Lb(a,b,c,d,e){if(b=Jb[b]*Kb[a])switch(c=e+d*(c*b+4-1&-4),a){case 5121:return B.subarray(e,c);case 5126:return F.subarray(e>>2,c>>2);case 5125:case 34042:return ua.subarray(e>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:return ta.subarray(e>>1,c>>1);default:X(1280)}else X(1280)}function Mb(a){a=ra(a);var b=buffer.byteLength;try{return-1!==z.grow((a-b)/65536)?(buffer=z.buffer,!0):!1}catch(c){return!1}}var Z;Bb=new Float32Array(256);
for(var Nb=0;256>Nb;Nb++)Y[Nb]=Bb.subarray(0,Nb+1);
var Rb=f.asm({},{cb:function(){},fb:function(a,b){K=b;try{return Qa.Rb(),L(),L(),L(),L(),0}catch(c){return x(c),-c.Lb}},db:function(a,b){K=b;try{var c=Qa.Rb(),d=L(),e=L();return Qa.cc(c,d,e)}catch(g){return x(g),-g.Lb}},ba:function(a,b){K=b;try{var c=L(),d=L(),e=L();for(b=a=0;b<e;b++){for(var g=E[d+8*b>>2],l=E[d+(8*b+4)>>2],n=0;n<l;n++){var t=B[g+n],q=Pa[c];0===t||10===t?((1===c?fa:y)(oa(q,0)),q.length=0):q.push(t)}a+=l}return a}catch(p){return x(p),-p.Lb}},x:function(a,b){K=b;return 0},gb:function(a,
b){K=b;try{var c=D(L()),d=L(),e=L();return(void 0).open(c,d,e).fd}catch(g){return x(g),-g.Lb}},ca:function(a,b){K=b;return 0},aa:function(a,b){K=b;try{return Qa.Rb(),0}catch(c){return x(c),-c.Lb}},D:function(){},mb:function(){console.log("fs.h: registering Module['ccall']");f.ccall=ja},nb:function(a){var b=D(a),c=new XMLHttpRequest;c.open("GET",b);c.responseType="arraybuffer";c.onload=function(){var a=new Uint8Array(c.response);ja("emsc_load_data","int",["string","array","number"],[b,a,a.length])};
c.send()},V:function(){return window.devicePixelRatio||1},_:function(a,b,c){a=a?P(a):f.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),G[b>>3]=a.right-a.left,G[c>>3]=a.bottom-a.top):(G[b>>3]=a.clientWidth,G[c>>3]=a.clientHeight);return 0},Xa:function(a,b,c){B.set(B.subarray(b,b+c),a)},Ka:function(a,b){function c(d){Ob(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},R:function(a,b,c){a=gb(a);if(!a)return-4;a.width=b;a.height=c;return 0},Ta:function(a,b,
c,d){jb(a,b,c,d,2,"keydown");return 0},Ra:function(a,b,c,d){jb(a,b,c,d,1,"keypress");return 0},Sa:function(a,b,c,d){jb(a,b,c,d,3,"keyup");return 0},lb:function(a,b,c,d){S(a,b,c,d,5,"mousedown");return 0},Wa:function(a,b,c,d){S(a,b,c,d,33,"mouseenter");return 0},Va:function(a,b,c,d){S(a,b,c,d,34,"mouseleave");return 0},Ya:function(a,b,c,d){S(a,b,c,d,8,"mousemove");return 0},eb:function(a,b,c,d){S(a,b,c,d,6,"mouseup");return 0},Ga:function(a,b,c,d){nb(a,b,c,d);return 0},Na:function(a,b,c,d){ob(a,b,
c,d,25,"touchcancel");return 0},Oa:function(a,b,c,d){ob(a,b,c,d,23,"touchend");return 0},Pa:function(a,b,c,d){ob(a,b,c,d,24,"touchmove");return 0},Qa:function(a,b,c,d){ob(a,b,c,d,22,"touchstart");return 0},Ma:function(a,b,c,d){pb(a,b,c,d,31,"webglcontextlost");return 0},La:function(a,b,c,d){pb(a,b,c,d,32,"webglcontextrestored");return 0},Ua:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(qb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(qb(a,b,c,d,"mousewheel"),0):-1},N:function(a,
b){var c={};b>>=2;c.alpha=!!E[b];c.depth=!!E[b+1];c.stencil=!!E[b+2];c.antialias=!!E[b+3];c.premultipliedAlpha=!!E[b+4];c.preserveDrawingBuffer=!!E[b+5];c.powerPreference=Fb[E[b+6]];c.failIfMajorPerformanceCaveat=!!E[b+7];c.Xb=E[b+8];c.dc=E[b+9];c.Qb=E[b+10];c.Ub=E[b+11];c.ec=E[b+12];c.fc=E[b+13];a=gb(a);if(!a||c.Ub)c=0;else if(a=a.getContext("webgl",c)||a.getContext("experimental-webgl",c)){b=Q(8);var d={handle:b,attributes:c,version:c.Xb,Mb:a};a.canvas&&(a.canvas.Zb=d);wb[b]=d;("undefined"===typeof c.Qb||
c.Qb)&&Cb(d);c=b}else c=0;return c},ja:function(a,b){a=wb[a];b=D(b);0==b.indexOf("GL_")&&(b=b.substr(3));return!!a.Mb.getExtension(b)},xa:function(a){a>>=2;for(var b=0;14>b;++b)E[a+b]=0;E[a]=E[a+1]=E[a+3]=E[a+4]=E[a+8]=E[a+10]=1},sa:function(a){xb=wb[a];f.ac=Z=xb&&xb.Mb;return!a||Z?0:-5},$:Fa,$a:Fa,bb:Ha,i:function(a){Z.activeTexture(a)},S:function(a,b){Z.attachShader(T[a],W[b])},c:function(a,b){Z.bindBuffer(a,tb[b])},h:function(a,b){Z.bindFramebuffer(a,ub[b])},Ea:function(a,b){Z.bindRenderbuffer(a,
U[b])},b:function(a,b){Z.bindTexture(a,vb[b])},I:function(a,b,c,d){Z.blendColor(a,b,c,d)},J:function(a,b){Z.blendEquationSeparate(a,b)},K:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},W:function(a,b,c,d){Z.bufferData(a,c?B.subarray(c,c+b):b,d)},u:function(a,b,c,d){Z.bufferSubData(a,b,B.subarray(d,d+c))},n:function(a){return Z.checkFramebufferStatus(a)},ta:function(a){Z.clear(a)},wa:function(a,b,c,d){Z.clearColor(a,b,c,d)},va:function(a){Z.clearDepth(a)},ua:function(a){Z.clearStencil(a)},B:function(a,
b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},ib:function(a){Z.compileShader(W[a])},U:function(a,b,c,d,e,g,l,n){Z.compressedTexImage2D(a,b,c,d,e,g,n?B.subarray(n,n+l):null)},Ba:function(){var a=Ab(T),b=Z.createProgram();b.name=a;T[a]=b;return a},kb:function(a){var b=Ab(W);W[b]=Z.createShader(a);return b},H:function(a){Z.cullFace(a)},Ha:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=tb[d];e&&(Z.deleteBuffer(e),e.name=0,tb[d]=null,d==Db&&(Db=0),d==Eb&&(Eb=0))}},k:function(a,b){for(var c=0;c<a;++c){var d=
E[b+4*c>>2],e=ub[d];e&&(Z.deleteFramebuffer(e),e.name=0,ub[d]=null)}},Y:function(a){if(a){var b=T[a];b?(Z.deleteProgram(b),b.name=0,T[a]=null,yb[a]=null):X(1281)}},v:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=U[d];e&&(Z.deleteRenderbuffer(e),e.name=0,U[d]=null)}},C:function(a){if(a){var b=W[a];b?(Z.deleteShader(b),W[a]=null):X(1281)}},Z:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=vb[d];e&&(Z.deleteTexture(e),e.name=0,vb[d]=null)}},z:function(a){Z.depthFunc(a)},A:function(a){Z.depthMask(!!a)},
e:function(a){Z.disable(a)},a:function(a){Z.disableVertexAttribArray(a)},ha:function(a,b,c){Z.drawArrays(a,b,c)},ia:function(a,b,c,d){Z.drawElements(a,b,c,d)},g:function(a){Z.enable(a)},pa:function(a){Z.enableVertexAttribArray(a)},l:function(a,b,c,d){Z.framebufferRenderbuffer(a,b,c,U[d])},d:function(a,b,c,d,e){Z.framebufferTexture2D(a,b,c,vb[d],e)},G:function(a){Z.frontFace(a)},X:function(a,b){Gb(a,b,"createBuffer",tb)},o:function(a,b){Gb(a,b,"createFramebuffer",ub)},Fa:function(a,b){Gb(a,b,"createRenderbuffer",
U)},Ca:function(a,b){Gb(a,b,"createTexture",vb)},ya:function(a,b){return Z.getAttribLocation(T[a],D(b))},w:function(a,b){Hb(a,b)},za:function(a,b,c,d){a=Z.getProgramInfoLog(T[a]);null===a&&(a="(unknown error)");0<b&&d?(b=A(a,B,d,b),c&&(E[c>>2]=b)):c&&(E[c>>2]=0)},Q:function(a,b,c){if(c)if(a>=rb)X(1281);else{var d=yb[a];if(d)if(35716==b)a=Z.getProgramInfoLog(T[a]),null===a&&(a="(unknown error)"),E[c>>2]=a.length+1;else if(35719==b)E[c>>2]=d.Ob;else if(35722==b){if(-1==d.Jb){a=T[a];var e=Z.getProgramParameter(a,
35721);for(b=d.Jb=0;b<e;++b)d.Jb=Math.max(d.Jb,Z.getActiveAttrib(a,b).name.length+1)}E[c>>2]=d.Jb}else if(35381==b){if(-1==d.Kb)for(a=T[a],e=Z.getProgramParameter(a,35382),b=d.Kb=0;b<e;++b)d.Kb=Math.max(d.Kb,Z.getActiveUniformBlockName(a,b).length+1);E[c>>2]=d.Kb}else E[c>>2]=Z.getProgramParameter(T[a],b);else X(1282)}else X(1281)},hb:function(a,b,c,d){a=Z.getShaderInfoLog(W[a]);null===a&&(a="(unknown error)");0<b&&d?(b=A(a,B,d,b),c&&(E[c>>2]=b)):c&&(E[c>>2]=0)},da:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(W[a]),
null===a&&(a="(unknown error)"),E[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(W[a]),E[c>>2]=null===a||0==a.length?0:a.length+1):E[c>>2]=Z.getShaderParameter(W[a],b):X(1281)},Ia:function(a){if(zb[a])return zb[a];switch(a){case 7939:var b=Z.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);b=Ib(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=Ib(b);break;case 7938:b=Ib("OpenGL ES 2.0 ("+Z.getParameter(Z.VERSION)+
")");break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Ib(b);break;default:return X(1280),0}return zb[a]=b},m:function(a,b){b=D(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=yb[a]&&yb[a].Sb[b])&&0<=c&&c<a[0]?a[1]+c:-1},Aa:function(a){Z.linkProgram(T[a]);var b=T[a];a=yb[a]={Sb:{},
Ob:0,Jb:-1,Kb:-1};for(var c=a.Sb,d=Z.getProgramParameter(b,35718),e=0;e<d;++e){var g=Z.getActiveUniform(b,e),l=g.name;a.Ob=Math.max(a.Ob,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var n=Z.getUniformLocation(b,l);if(n){var t=Ab(V);c[l]=[g.size,t];V[t]=n;for(var q=1;q<g.size;++q)n=Z.getUniformLocation(b,l+"["+q+"]"),t=Ab(V),V[t]=n}}},F:function(a,b){Z.polygonOffset(a,b)},Da:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},O:function(a,b,c,d){Z.scissor(a,b,c,d)},jb:function(a,b,
c,d){for(var e="",g=0;g<b;++g){var l=d?E[d+4*g>>2]:-1;e+=D(E[c+4*g>>2],0>l?void 0:l)}Z.shaderSource(W[a],e)},ga:function(a,b,c){Z.stencilFunc(a,b,c)},M:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},y:function(a){Z.stencilMask(a)},fa:function(a,b,c){Z.stencilOp(a,b,c)},L:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},T:function(a,b,c,d,e,g,l,n,t){Z.texImage2D(a,b,c,d,e,g,l,n,t?Lb(n,l,d,e,t):null)},j:function(a,b,c){Z.texParameteri(a,b,c)},t:function(a,b,c,d,e,g,l,n,t){var q=null;t&&(q=Lb(n,l,
e,g,t));Z.texSubImage2D(a,b,c,d,e,g,l,n,q)},oa:function(a,b,c){if(256>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>2];else d=F.subarray(c>>2,c+4*b>>2);Z.uniform1fv(V[a],d)},E:function(a,b){Z.uniform1i(V[a],b)},na:function(a,b,c){if(256>=2*b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,c+8*b>>2);Z.uniform2fv(V[a],d)},ma:function(a,b,c){if(256>=3*b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2];else d=
F.subarray(c>>2,c+12*b>>2);Z.uniform3fv(V[a],d)},la:function(a,b,c){if(256>=4*b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2],d[e+3]=F[c+(4*e+12)>>2];else d=F.subarray(c>>2,c+16*b>>2);Z.uniform4fv(V[a],d)},ka:function(a,b,c,d){if(256>=16*b)for(var e=Y[16*b-1],g=0;g<16*b;g+=16)e[g]=F[d+4*g>>2],e[g+1]=F[d+(4*g+4)>>2],e[g+2]=F[d+(4*g+8)>>2],e[g+3]=F[d+(4*g+12)>>2],e[g+4]=F[d+(4*g+16)>>2],e[g+5]=F[d+(4*g+20)>>2],e[g+6]=F[d+(4*g+24)>>2],e[g+7]=F[d+(4*
g+28)>>2],e[g+8]=F[d+(4*g+32)>>2],e[g+9]=F[d+(4*g+36)>>2],e[g+10]=F[d+(4*g+40)>>2],e[g+11]=F[d+(4*g+44)>>2],e[g+12]=F[d+(4*g+48)>>2],e[g+13]=F[d+(4*g+52)>>2],e[g+14]=F[d+(4*g+56)>>2],e[g+15]=F[d+(4*g+60)>>2];else e=F.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(V[a],!!c,e)},ra:function(a){Z.useProgram(T[a])},Za:function(a,b){Z.vertexAttribDivisor(a,b)},qa:function(a,b,c,d,e,g){Z.vertexAttribPointer(a,b,c,!!d,e,g)},P:function(a,b,c,d){Z.viewport(a,b,c,d)},r:function(){var a=document.createElement("input");
a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Pb()});document.body.append(a)},q:function(){document.getElementById("_sokol_app_input_element").focus()},Ja:function(){window.addEventListener("beforeunload",function(a){0!=Qb()&&(a.preventDefault(),a.returnValue=" ")})},p:function(){document.getElementById("_sokol_app_input_element").blur()},ea:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=
a.next())ja("_sargs_add_kvp","void",["string","string"],[b.value[0],b.value[1]])},f:function(a){a|=0;var b=C.length|0;var c=E[1690844]|0;var d=c+a|0;if(0<(a|0)&(d|0)<(c|0)|0>(d|0))return x("OOM"),0,Ra(),-1;if(a=(d|0)>(b|0)){a=d|0;if(2147418112<a)a=!1;else{for(b=Math.max(C.length,16777216);b<a;)536870912>=b?b=ra(2*b):b=Math.min(ra((3*b+2147483648)/4),2147418112);Mb(b)?(va(),a=!0):a=!1}a=!(a|0)}if(a)return Ra(),-1;E[1690844]=d|0;return c|0},_a:Ga,ab:Ga,s:function(){return performance.now()}},buffer);
f.asm=Rb;var Oa=f.___wasm_call_ctors=function(){return f.asm.ob.apply(null,arguments)};f._emsc_load_data=function(){return f.asm.pb.apply(null,arguments)};var Pb=f.__sapp_emsc_notify_keyboard_hidden=function(){return f.asm.qb.apply(null,arguments)},Qb=f.__sapp_html5_get_ask_leave_site=function(){return f.asm.rb.apply(null,arguments)};f._main=function(){return f.asm.sb.apply(null,arguments)};var Q=f._malloc=function(){return f.asm.tb.apply(null,arguments)};
f._free=function(){return f.asm.ub.apply(null,arguments)};f.__saudio_emsc_pull=function(){return f.asm.vb.apply(null,arguments)};f.__sargs_add_kvp=function(){return f.asm.wb.apply(null,arguments)};var la=f.stackSave=function(){return f.asm.xb.apply(null,arguments)},ka=f.stackAlloc=function(){return f.asm.yb.apply(null,arguments)},ma=f.stackRestore=function(){return f.asm.zb.apply(null,arguments)};f.dynCall_vi=function(){return f.asm.Ab.apply(null,arguments)};
f.dynCall_v=function(){return f.asm.Bb.apply(null,arguments)};var R=f.dynCall_iiii=function(){return f.asm.Cb.apply(null,arguments)},Ob=f.dynCall_idi=function(){return f.asm.Db.apply(null,arguments)};f.asm=Rb;function v(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}v.prototype=Error();v.prototype.constructor=v;I=function Sb(){f.calledRun||Tb();f.calledRun||(I=Sb)};
f.callMain=function(a){a=a||[];var b=a.length+1,c=ka(4*(b+1));E[c>>2]=qa(f.thisProgram);for(var d=1;d<b;d++)E[(c>>2)+d]=qa(a[d-1]);E[(c>>2)+b]=0;try{var e=f._main(b,c,0);if(!f.noExitRuntime||0!==e){if(!f.noExitRuntime&&(ha=!0,f.onExit))f.onExit(e);f.quit(e,new v(e))}}catch(g){g instanceof v||("SimulateInfiniteLoop"==g?f.noExitRuntime=!0:((a=g)&&"object"===typeof g&&g.stack&&(a=[g,g.stack]),y("exception thrown: "+a),f.quit(1,g)))}finally{}};
function Tb(a){function b(){if(!f.calledRun&&(f.calledRun=!0,!ha)){xa(Aa);xa(Ba);if(f.onRuntimeInitialized)f.onRuntimeInitialized();f._main&&Ub&&f.callMain(a);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var b=f.postRun.shift();Da.unshift(b)}xa(Da)}}a=a||f.arguments;if(!(0<H)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ea();xa(za);0<H||f.calledRun||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},
1);b()},1)):b())}}f.run=Tb;function x(a){if(f.onAbort)f.onAbort(a);void 0!==a?(fa(a),y(a),a='"'+a+'"'):a="";ha=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}f.abort=x;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Ub=!0;f.noInitialRun&&(Ub=!1);f.noExitRuntime=!0;Tb();
