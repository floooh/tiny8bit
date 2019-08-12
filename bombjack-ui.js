var f;f||(f=typeof Module !== 'undefined' ? Module : {});var g={},k;for(k in f)f.hasOwnProperty(k)&&(g[k]=f[k]);var n=[],aa="./this.program";function r(a,b){throw b;}var u=!1,v=!1,ba=!1,ca=!1,da=!1;u="object"===typeof window;v="function"===typeof importScripts;ba=(ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!u&&!v;da=!u&&!ba&&!v;var x="",ea,y;
if(ba){x=__dirname+"/";var fa,ha;ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);a=fa.readFileSync(a);return b?a:a.toString()};y=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||z("Assertion failed: undefined");return a};1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/"));n=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=f);process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;});process.on("unhandledRejection",
z);r=function(a){process.exit(a)};f.inspect=function(){return"[Emscripten Module object]"}}else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),y=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||z("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?n=scriptArgs:"undefined"!=typeof arguments&&(n=arguments),"function"===typeof quit&&(r=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===
typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(u||v)v?x=self.location.href:document.currentScript&&(x=document.currentScript.src),x=0!==x.indexOf("blob:")?x.substr(0,x.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(y=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ja=f.print||console.log.bind(console),A=f.printErr||console.warn.bind(console);for(k in g)g.hasOwnProperty(k)&&(f[k]=g[k]);g=null;f.arguments&&(n=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(r=f.quit);var B;f.wasmBinary&&(B=f.wasmBinary);"object"!==typeof WebAssembly&&A("no native wasm support detected");var C,ka=!1,la="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ma(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&la)return la.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var l=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|l:(e&7)<<18|h<<12|l<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function D(a,b){return a?ma(E,a,b):""}
function F(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var l=a.charCodeAt(h);if(55296<=l&&57343>=l){var m=a.charCodeAt(++h);l=65536+((l&1023)<<10)|m&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function na(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function oa(a){var b=na(a)+1,c=pa(b);F(a,qa,c,b);return c}function ra(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,qa,E,sa,ta,G,ua,H,I;
function va(){f.HEAP8=qa=new Int8Array(buffer);f.HEAP16=sa=new Int16Array(buffer);f.HEAP32=G=new Int32Array(buffer);f.HEAPU8=E=new Uint8Array(buffer);f.HEAPU16=ta=new Uint16Array(buffer);f.HEAPU32=ua=new Uint32Array(buffer);f.HEAPF32=H=new Float32Array(buffer);f.HEAPF64=I=new Float64Array(buffer)}var wa=f.TOTAL_MEMORY||33554432;f.wasmMemory?C=f.wasmMemory:C=new WebAssembly.Memory({initial:wa/65536});C&&(buffer=C.buffer);wa=buffer.byteLength;va();G[2047520]=13432976;
function xa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Vb;"number"===typeof c?void 0===b.Nb?f.dynCall_v(c):f.dynCall_vi(c,b.Nb):c(void 0===b.Nb?null:b.Nb)}}}var ya=[],za=[],Aa=[],Ba=[],Ca=[];function Da(){var a=f.preRun.shift();ya.unshift(a)}var Ea=Math.abs,Fa=Math.sqrt,Ga=Math.floor,J=0,Ha=null,K=null;f.preloadedImages={};f.preloadedAudios={};
function Ia(){var a=L;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var L="bombjack-ui.wasm";if(!Ia()){var Ka=L;L=f.locateFile?f.locateFile(Ka,x):x+Ka}function La(){try{if(B)return new Uint8Array(B);if(y)return y(L);throw"both async and sync fetching of the wasm failed";}catch(a){z(a)}}
function Ma(){return B||!u&&!v||"function"!==typeof fetch?new Promise(function(a){a(La())}):fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return La()})}
function Na(a){function b(a){f.asm=a.exports;J--;f.monitorRunDependencies&&f.monitorRunDependencies(J);0==J&&(null!==Ha&&(clearInterval(Ha),Ha=null),K&&(a=K,K=null,a()))}function c(a){b(a.instance)}function d(a){return Ma().then(function(a){return WebAssembly.instantiate(a,e)}).then(a,function(a){A("failed to asynchronously prepare wasm: "+a);z(a)})}var e={env:a};J++;f.monitorRunDependencies&&f.monitorRunDependencies(J);if(f.instantiateWasm)try{return f.instantiateWasm(e,b)}catch(h){return A("Module.instantiateWasm callback failed with error: "+
h),!1}(function(){if(B||"function"!==typeof WebAssembly.instantiateStreaming||Ia()||"function"!==typeof fetch)return d(c);fetch(L,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,e).then(c,function(a){A("wasm streaming compile failed: "+a);A("falling back to ArrayBuffer instantiation");d(c)})})})();return{}}f.asm=function(a,b){b.memory=C;b.table=new WebAssembly.Table({initial:53,maximum:53,element:"anyfunc"});return Na(b)};za.push({Vb:function(){Oa()}});
var Pa=[null,[],[]],M=0;function N(){M+=4;return G[M-4>>2]}var Qa={};function Ra(){f.___errno_location&&(G[f.___errno_location()>>2]=12)}var Sa=0,Ta=0,O=0,Ua=0,Va=0,Wa=null,Xa=null,Ya=!1;function Za(){for(var a=P.length-1;0<=a;--a)$a(a);P=[];ab=[]}var ab=[];function bb(){if(cb&&db.Eb)for(var a=0;a<ab.length;++a){var b=ab[a];ab.splice(a,1);--a;b.hc.apply(this,b.$b)}}var cb=0,db=null,P=[];function eb(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}
function $a(a){var b=P[a];b.target.removeEventListener(b.Db,b.Tb,b.Fb);P.splice(a,1)}function Q(a){function b(b){++cb;db=a;bb();a.Hb(b);bb();--cb}if(a.Gb)a.Tb=b,a.target.addEventListener(a.Db,b,a.Fb),P.push(a),Ya||(Ba.push(Za),Ya=!0);else for(var c=0;c<P.length;++c)P[c].target==a.target&&P[c].Db==a.Db&&$a(c--)}var fb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function R(a){try{if(!a)return window;"number"===typeof a&&(a=fb[a]||D(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?f.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function gb(a){"number"===typeof a&&(a=D(a));return a&&"#canvas"!==a?"undefined"!==typeof hb&&ib[a]?ib[a]:R(a):"undefined"!==typeof hb&&ib.canvas?ib.canvas:f.canvas}
function jb(a,b,c,d,e,h){Sa||(Sa=S(164));a={target:R(a),Eb:eb()?!1:!0,Db:h,Gb:d,Hb:function(a){a=a||event;var c=Sa;F(a.key?a.key:"",E,c+0,32);F(a.code?a.code:"",E,c+32,32);G[c+64>>2]=a.location;G[c+68>>2]=a.ctrlKey;G[c+72>>2]=a.shiftKey;G[c+76>>2]=a.altKey;G[c+80>>2]=a.metaKey;G[c+84>>2]=a.repeat;F(a.locale?a.locale:"",E,c+88,32);F(a.char?a.char:"",E,c+120,32);G[c+152>>2]=a.charCode;G[c+156>>2]=a.keyCode;G[c+160>>2]=a.which;T(d,e,c,b)&&a.preventDefault()},Fb:c};Q(a)}
function kb(a,b,c){I[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();G[a+8>>2]=b.screenX;G[a+12>>2]=b.screenY;G[a+16>>2]=b.clientX;G[a+20>>2]=b.clientY;G[a+24>>2]=b.ctrlKey;G[a+28>>2]=b.shiftKey;G[a+32>>2]=b.altKey;G[a+36>>2]=b.metaKey;sa[a+40>>1]=b.button;sa[a+42>>1]=b.buttons;G[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Wa;G[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Xa;if(f.canvas){var d=f.canvas.getBoundingClientRect();
G[a+60>>2]=b.clientX-d.left;G[a+64>>2]=b.clientY-d.top}else G[a+60>>2]=0,G[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},G[a+52>>2]=b.clientX-d.left,G[a+56>>2]=b.clientY-d.top):(G[a+52>>2]=0,G[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Wa=b.screenX,Xa=b.screenY)}
function lb(a,b,c,d,e,h){Ta||(Ta=S(72));a=R(a);c={target:a,Eb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Db:h,Gb:d,Hb:function(c){c=c||event;kb(Ta,c,a);T(d,e,Ta,b)&&c.preventDefault()},Fb:c};eb()&&"mousedown"==h&&(c.Eb=!1);Q(c)}
function mb(a,b,c,d){Ua||(Ua=S(36));a=R(a);Q({target:a,Eb:!1,Db:"resize",Gb:d,Hb:function(c){c=c||event;if(c.target==a){var e=0<pageXOffset||0<pageYOffset?[pageXOffset,pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Ua;G[l>>2]=c.detail;G[l+4>>2]=document.body.clientWidth;G[l+8>>2]=document.body.clientHeight;
G[l+12>>2]=innerWidth;G[l+16>>2]=innerHeight;G[l+20>>2]=outerWidth;G[l+24>>2]=outerHeight;G[l+28>>2]=e[0];G[l+32>>2]=e[1];T(d,10,l,b)&&c.preventDefault()}},Fb:c})}
function nb(a,b,c,d,e,h){Va||(Va=S(1684));a=R(a);Q({target:a,Eb:"touchstart"==h||"touchend"==h,Db:h,Gb:d,Hb:function(c){c=c||event;for(var h={},l=0;l<c.touches.length;++l){var p=c.touches[l];p.Pb=!1;h[p.identifier]=p}for(l=0;l<c.changedTouches.length;++l)p=c.changedTouches[l],h[p.identifier]=p,p.Pb=!0;for(l=0;l<c.targetTouches.length;++l)p=c.targetTouches[l],h[p.identifier].Yb=!0;var q=p=Va;G[q+4>>2]=c.ctrlKey;G[q+8>>2]=c.shiftKey;G[q+12>>2]=c.altKey;G[q+16>>2]=c.metaKey;q+=20;var Ja=f.canvas?f.canvas.getBoundingClientRect():
void 0,pb=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},qb=0;for(l in h){var w=h[l];G[q>>2]=w.identifier;G[q+4>>2]=w.screenX;G[q+8>>2]=w.screenY;G[q+12>>2]=w.clientX;G[q+16>>2]=w.clientY;G[q+20>>2]=w.pageX;G[q+24>>2]=w.pageY;G[q+28>>2]=w.Pb;G[q+32>>2]=w.Yb;Ja?(G[q+44>>2]=w.clientX-Ja.left,G[q+48>>2]=w.clientY-Ja.top):(G[q+44>>2]=0,G[q+48>>2]=0);G[q+36>>2]=w.clientX-pb.left;G[q+40>>2]=w.clientY-pb.top;q+=52;if(32<=++qb)break}G[p>>2]=qb;T(d,e,p,b)&&c.preventDefault()},Fb:c})}
function ob(a,b,c,d,e,h){a||(a=f.canvas);a={target:R(a),Eb:!1,Db:h,Gb:d,Hb:function(a){a=a||event;T(d,e,0,b)&&a.preventDefault()},Fb:c};Q(a)}
function rb(a,b,c,d,e){function h(c){c=c||event;kb(O,c,a);I[O+72>>3]=c.wheelDeltaX||0;I[O+80>>3]=-(c.wheelDeltaY||c.wheelDelta);I[O+88>>3]=0;G[O+96>>2]=0;T(d,9,O,b)&&c.preventDefault()}function l(c){c=c||event;var e=O;kb(e,c,a);I[e+72>>3]=c.deltaX;I[e+80>>3]=c.deltaY;I[e+88>>3]=c.deltaZ;G[e+96>>2]=c.deltaMode;T(d,9,e,b)&&c.preventDefault()}O||(O=S(104));Q({target:a,Eb:!0,Db:e,Gb:d,Hb:"wheel"==e?l:h,Fb:c})}var sb=1,tb=0,ub=[],U=[],vb=[],wb=[],xb=[],V=[],W=[],yb={},zb=null,ib={},Ab={},Bb={};
function X(a){tb||(tb=a)}function Cb(a){for(var b=sb++,c=a.length;c<b;c++)a[c]=null;return b}var Db=null,Y=[0];function Eb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(a,d){b.vertexAttribDivisorANGLE(a,d)},a.drawArraysInstanced=function(a,d,e,h){b.drawArraysInstancedANGLE(a,d,e,h)},a.drawElementsInstanced=function(a,d,e,h,l){b.drawElementsInstancedANGLE(a,d,e,h,l)})}
function Fb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(a){b.deleteVertexArrayOES(a)},a.bindVertexArray=function(a){b.bindVertexArrayOES(a)},a.isVertexArray=function(a){return b.isVertexArrayOES(a)})}function Gb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(a,d){b.drawBuffersWEBGL(a,d)})}
function Hb(a){a||(a=zb);if(!a.Wb){a.Wb=!0;var b=a.Mb;2>a.version&&(Eb(b),Fb(b),Gb(b));b.bc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=c.indexOf(a)&&b.getExtension(a)})}}var hb={},Ib,Jb,Kb=["default","low-power","high-performance"];function Lb(a,b,c,d){for(var e=0;e<a;e++){var h=Z[c](),l=h&&Cb(d);h?(h.name=l,d[l]=h):X(1282);G[b+4*e>>2]=l}}
function Mb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){X(1280);A("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:X(1280);A("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else X(1281)}function Nb(a){var b=na(a)+1,c=S(b);F(a,E,c,b);return c}
var Ob={6402:1,6406:1,6407:3,6408:4,6409:1,6410:2,35904:3,35906:4},Pb={5121:1,5123:2,5125:4,5126:4,32819:2,32820:2,33635:2,34042:4,36193:2};function Qb(a,b,c,d,e){if(b=Ob[b]*Pb[a])switch(c=e+d*(c*b+4-1&-4),a){case 5121:return E.subarray(e,c);case 5126:return H.subarray(e>>2,c>>2);case 5125:case 34042:return ua.subarray(e>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:return ta.subarray(e>>1,c>>1);default:X(1280)}else X(1280)}
function Rb(a){a=ra(a);var b=buffer.byteLength;try{return-1!==C.grow((a-b)/65536)?(buffer=C.buffer,!0):!1}catch(c){return!1}}var Z;Db=new Float32Array(256);for(var Sb=0;256>Sb;Sb++)Y[Sb]=Db.subarray(0,Sb+1);
var Xb=f.asm({},{db:function(){},gb:function(a,b){M=b;try{return Qa.Rb(),N(),N(),N(),N(),0}catch(c){return z(c),-c.Lb}},eb:function(a,b){M=b;try{var c=Qa.Rb(),d=N(),e=N();return Qa.cc(c,d,e)}catch(h){return z(h),-h.Lb}},ba:function(a,b){M=b;try{var c=N(),d=N(),e=N();for(b=a=0;b<e;b++){for(var h=G[d+8*b>>2],l=G[d+(8*b+4)>>2],m=0;m<l;m++){var t=E[h+m],p=Pa[c];0===t||10===t?((1===c?ja:A)(ma(p,0)),p.length=0):p.push(t)}a+=l}return a}catch(q){return z(q),-q.Lb}},x:function(a,b){M=b;return 0},hb:function(a,
b){M=b;try{var c=D(N()),d=N(),e=N();return(void 0).open(c,d,e).fd}catch(h){return z(h),-h.Lb}},ca:function(a,b){M=b;return 0},aa:function(a,b){M=b;try{return Qa.Rb(),0}catch(c){return z(c),-c.Lb}},E:function(){},_:function(){return devicePixelRatio||1},ea:function(a,b,c){a=a?R(a):f.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),I[b>>3]=a.right-a.left,I[c>>3]=a.bottom-a.top):(I[b>>3]=a.clientWidth,I[c>>3]=a.clientHeight);return 0},Ya:function(a,b,c){E.set(E.subarray(b,b+
c),a)},Na:function(a,b){function c(d){Tb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},X:function(a,b,c){a=gb(a);if(!a)return-4;a.width=b;a.height=c;return 0},Wa:function(a,b,c,d){jb(a,b,c,d,2,"keydown");return 0},Ua:function(a,b,c,d){jb(a,b,c,d,1,"keypress");return 0},Va:function(a,b,c,d){jb(a,b,c,d,3,"keyup");return 0},ua:function(a,b,c,d){lb(a,b,c,d,5,"mousedown");return 0},fb:function(a,b,c,d){lb(a,b,c,d,33,"mouseenter");return 0},Za:function(a,b,c,d){lb(a,b,c,d,34,"mouseleave");
return 0},mb:function(a,b,c,d){lb(a,b,c,d,8,"mousemove");return 0},ka:function(a,b,c,d){lb(a,b,c,d,6,"mouseup");return 0},nb:function(a,b,c,d){mb(a,b,c,d);return 0},Qa:function(a,b,c,d){nb(a,b,c,d,25,"touchcancel");return 0},Ra:function(a,b,c,d){nb(a,b,c,d,23,"touchend");return 0},Sa:function(a,b,c,d){nb(a,b,c,d,24,"touchmove");return 0},Ta:function(a,b,c,d){nb(a,b,c,d,22,"touchstart");return 0},Pa:function(a,b,c,d){ob(a,b,c,d,31,"webglcontextlost");return 0},Oa:function(a,b,c,d){ob(a,b,c,d,32,"webglcontextrestored");
return 0},Xa:function(a,b,c,d){a=R(a);return"undefined"!==typeof a.onwheel?(rb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(rb(a,b,c,d,"mousewheel"),0):-1},Q:function(a,b){var c={};b>>=2;c.alpha=!!G[b];c.depth=!!G[b+1];c.stencil=!!G[b+2];c.antialias=!!G[b+3];c.premultipliedAlpha=!!G[b+4];c.preserveDrawingBuffer=!!G[b+5];c.powerPreference=Kb[G[b+6]];c.failIfMajorPerformanceCaveat=!!G[b+7];c.Xb=G[b+8];c.dc=G[b+9];c.Qb=G[b+10];c.Ub=G[b+11];c.ec=G[b+12];c.fc=G[b+13];a=gb(a);if(!a||c.Ub)c=
0;else if(a=a.getContext("webgl",c)||a.getContext("experimental-webgl",c)){b=S(8);var d={handle:b,attributes:c,version:c.Xb,Mb:a};a.canvas&&(a.canvas.Zb=d);yb[b]=d;("undefined"===typeof c.Qb||c.Qb)&&Hb(d);c=b}else c=0;return c},wa:function(a,b){a=yb[a];b=D(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b?Eb(Z):"OES_vertex_array_object"==b?Fb(Z):"WEBGL_draw_buffers"==b&&Gb(Z);return!!a.Mb.getExtension(b)},Ga:function(a){a>>=2;for(var b=0;14>b;++b)G[a+b]=0;G[a]=G[a+1]=G[a+3]=G[a+
4]=G[a+8]=G[a+10]=1},Ba:function(a){zb=yb[a];f.ac=Z=zb&&zb.Mb;return!a||Z?0:-5},$:Ea,ab:Ea,cb:Ga,h:function(a){Z.activeTexture(a)},S:function(a,b){Z.attachShader(U[a],W[b])},c:function(a,b){Z.bindBuffer(a,ub[b])},g:function(a,b){Z.bindFramebuffer(a,vb[b])},Ja:function(a,b){Z.bindRenderbuffer(a,wb[b])},b:function(a,b){Z.bindTexture(a,xb[b])},J:function(a,b,c,d){Z.blendColor(a,b,c,d)},K:function(a,b){Z.blendEquationSeparate(a,b)},L:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},V:function(a,b,c,d){Z.bufferData(a,
c?E.subarray(c,c+b):b,d)},u:function(a,b,c,d){Z.bufferSubData(a,b,E.subarray(d,d+c))},n:function(a){return Z.checkFramebufferStatus(a)},xa:function(a){Z.clear(a)},Aa:function(a,b,c,d){Z.clearColor(a,b,c,d)},za:function(a){Z.clearDepth(a)},ya:function(a){Z.clearStencil(a)},B:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},jb:function(a){Z.compileShader(W[a])},U:function(a,b,c,d,e,h,l,m){Z.compressedTexImage2D(a,b,c,d,e,h,m?E.subarray(m,m+l):null)},Fa:function(){var a=Cb(U),b=Z.createProgram();b.name=
a;U[a]=b;return a},lb:function(a){var b=Cb(W);W[b]=Z.createShader(a);return b},I:function(a){Z.cullFace(a)},Z:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],e=ub[d];e&&(Z.deleteBuffer(e),e.name=0,ub[d]=null,d==Ib&&(Ib=0),d==Jb&&(Jb=0))}},k:function(a,b){for(var c=0;c<a;++c){var d=G[b+4*c>>2],e=vb[d];e&&(Z.deleteFramebuffer(e),e.name=0,vb[d]=null)}},D:function(a){if(a){var b=U[a];b?(Z.deleteProgram(b),b.name=0,U[a]=null,Ab[a]=null):X(1281)}},v:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>
2],e=wb[d];e&&(Z.deleteRenderbuffer(e),e.name=0,wb[d]=null)}},C:function(a){if(a){var b=W[a];b?(Z.deleteShader(b),W[a]=null):X(1281)}},Y:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],e=xb[d];e&&(Z.deleteTexture(e),e.name=0,xb[d]=null)}},z:function(a){Z.depthFunc(a)},A:function(a){Z.depthMask(!!a)},e:function(a){Z.disable(a)},a:function(a){Z.disableVertexAttribArray(a)},la:function(a,b,c){Z.drawArrays(a,b,c)},ma:function(a,b,c,d){Z.drawElements(a,b,c,d)},f:function(a){Z.enable(a)},sa:function(a){Z.enableVertexAttribArray(a)},
l:function(a,b,c,d){Z.framebufferRenderbuffer(a,b,c,wb[d])},d:function(a,b,c,d,e){Z.framebufferTexture2D(a,b,c,xb[d],e)},H:function(a){Z.frontFace(a)},W:function(a,b){Lb(a,b,"createBuffer",ub)},o:function(a,b){Lb(a,b,"createFramebuffer",vb)},Ka:function(a,b){Lb(a,b,"createRenderbuffer",wb)},Ha:function(a,b){Lb(a,b,"createTexture",xb)},Ca:function(a,b){return Z.getAttribLocation(U[a],D(b))},w:function(a,b){Mb(a,b)},Da:function(a,b,c,d){a=Z.getProgramInfoLog(U[a]);null===a&&(a="(unknown error)");b=
0<b&&d?F(a,E,d,b):0;c&&(G[c>>2]=b)},R:function(a,b,c){if(c)if(a>=sb)X(1281);else{var d=Ab[a];if(d)if(35716==b)a=Z.getProgramInfoLog(U[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1;else if(35719==b)G[c>>2]=d.Ob;else if(35722==b){if(-1==d.Jb){a=U[a];var e=Z.getProgramParameter(a,35721);for(b=d.Jb=0;b<e;++b)d.Jb=Math.max(d.Jb,Z.getActiveAttrib(a,b).name.length+1)}G[c>>2]=d.Jb}else if(35381==b){if(-1==d.Kb)for(a=U[a],e=Z.getProgramParameter(a,35382),b=d.Kb=0;b<e;++b)d.Kb=Math.max(d.Kb,Z.getActiveUniformBlockName(a,
b).length+1);G[c>>2]=d.Kb}else G[c>>2]=Z.getProgramParameter(U[a],b);else X(1282)}else X(1281)},ib:function(a,b,c,d){a=Z.getShaderInfoLog(W[a]);null===a&&(a="(unknown error)");b=0<b&&d?F(a,E,d,b):0;c&&(G[c>>2]=b)},da:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(W[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(W[a]),G[c>>2]=null===a||0==a.length?0:a.length+1):G[c>>2]=Z.getShaderParameter(W[a],b):X(1281)},La:function(a){if(Bb[a])return Bb[a];switch(a){case 7939:var b=
Z.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);b=Nb(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=Nb(b);break;case 7938:b=Nb("OpenGL ES 2.0 ("+Z.getParameter(Z.VERSION)+")");break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Nb(b);break;default:return X(1280),
0}return Bb[a]=b},m:function(a,b){b=D(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=Ab[a]&&Ab[a].Sb[b])&&0<=c&&c<a[0]?a[1]+c:-1},Ea:function(a){Z.linkProgram(U[a]);var b=U[a];a=Ab[a]={Sb:{},Ob:0,Jb:-1,Kb:-1};for(var c=a.Sb,d=Z.getProgramParameter(b,35718),e=0;e<d;++e){var h=Z.getActiveUniform(b,e),l=h.name;a.Ob=Math.max(a.Ob,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var m=Z.getUniformLocation(b,l);if(m){var t=
Cb(V);c[l]=[h.size,t];V[t]=m;for(var p=1;p<h.size;++p)m=Z.getUniformLocation(b,l+"["+p+"]"),t=Cb(V),V[t]=m}}},G:function(a,b){Z.polygonOffset(a,b)},Ia:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},O:function(a,b,c,d){Z.scissor(a,b,c,d)},kb:function(a,b,c,d){for(var e="",h=0;h<b;++h){var l=d?G[d+4*h>>2]:-1;e+=D(G[c+4*h>>2],0>l?void 0:l)}Z.shaderSource(W[a],e)},ja:function(a,b,c){Z.stencilFunc(a,b,c)},N:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},y:function(a){Z.stencilMask(a)},ia:function(a,
b,c){Z.stencilOp(a,b,c)},M:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},T:function(a,b,c,d,e,h,l,m,t){Z.texImage2D(a,b,c,d,e,h,l,m,t?Qb(m,l,d,e,t):null)},i:function(a,b,c){Z.texParameteri(a,b,c)},t:function(a,b,c,d,e,h,l,m,t){var p=null;t&&(p=Qb(m,l,e,h,t));Z.texSubImage2D(a,b,c,d,e,h,l,m,p)},ra:function(a,b,c){if(256>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=H[c+4*e>>2];else d=H.subarray(c>>2,c+4*b>>2);Z.uniform1fv(V[a],d)},F:function(a,b){Z.uniform1i(V[a],b)},qa:function(a,b,c){if(256>=2*b)for(var d=
Y[2*b-1],e=0;e<2*b;e+=2)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2];else d=H.subarray(c>>2,c+8*b>>2);Z.uniform2fv(V[a],d)},pa:function(a,b,c){if(256>=3*b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2],d[e+2]=H[c+(4*e+8)>>2];else d=H.subarray(c>>2,c+12*b>>2);Z.uniform3fv(V[a],d)},oa:function(a,b,c){if(256>=4*b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2],d[e+2]=H[c+(4*e+8)>>2],d[e+3]=H[c+(4*e+12)>>2];else d=H.subarray(c>>2,c+16*b>>2);Z.uniform4fv(V[a],
d)},na:function(a,b,c,d){if(256>=16*b)for(var e=Y[16*b-1],h=0;h<16*b;h+=16)e[h]=H[d+4*h>>2],e[h+1]=H[d+(4*h+4)>>2],e[h+2]=H[d+(4*h+8)>>2],e[h+3]=H[d+(4*h+12)>>2],e[h+4]=H[d+(4*h+16)>>2],e[h+5]=H[d+(4*h+20)>>2],e[h+6]=H[d+(4*h+24)>>2],e[h+7]=H[d+(4*h+28)>>2],e[h+8]=H[d+(4*h+32)>>2],e[h+9]=H[d+(4*h+36)>>2],e[h+10]=H[d+(4*h+40)>>2],e[h+11]=H[d+(4*h+44)>>2],e[h+12]=H[d+(4*h+48)>>2],e[h+13]=H[d+(4*h+52)>>2],e[h+14]=H[d+(4*h+56)>>2],e[h+15]=H[d+(4*h+60)>>2];else e=H.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(V[a],
!!c,e)},va:function(a){Z.useProgram(U[a])},_a:function(a,b){Z.vertexAttribDivisor(a,b)},ta:function(a,b,c,d,e,h){Z.vertexAttribPointer(a,b,c,!!d,e,h)},P:function(a,b,c,d){Z.viewport(a,b,c,d)},r:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ub()});document.body.append(a)},q:function(){document.getElementById("_sokol_app_input_element").focus()},Ma:function(){window.addEventListener("beforeunload",
function(a){0!=Vb()&&(a.preventDefault(),a.returnValue=" ")})},p:function(){document.getElementById("_sokol_app_input_element").blur()},fa:function(){return f.Ib?f.Ib.bufferSize:0},ha:function(a,b,c){f.Cb=null;f.Ib=null;"undefined"!==typeof AudioContext?(f.Cb=new AudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created AudioContext")):"undefined"!==typeof webkitAudioContext?(f.Cb=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}),console.log("sokol_audio.h: created webkitAudioContext")):
(f.Cb=null,console.log("sokol_audio.h: no WebAudio support"));return f.Cb?(console.log("sokol_audio.h: sample rate ",f.Cb.sampleRate),f.Ib=f.Cb.createScriptProcessor(c,0,b),f.Ib.onaudioprocess=function(a){var b=a.outputBuffer.length,c=Wb(b);if(c)for(var d=a.outputBuffer.numberOfChannels,m=0;m<d;m++)for(var t=a.outputBuffer.getChannelData(m),p=0;p<b;p++)t[p]=H[(c>>2)+(d*p+m)]},f.Ib.connect(f.Cb.destination),a=function(){f.Cb&&"suspended"===f.Cb.state&&f.Cb.resume()},document.addEventListener("click",
a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},ga:function(){return f.Cb?f.Cb.sampleRate:0},j:function(a){a|=0;var b=qa.length|0;var c=G[2047520]|0;var d=c+a|0;if(0<(a|0)&(d|0)<(c|0)|0>(d|0))return z("OOM"),0,Ra(),-1;if(a=(d|0)>(b|0)){a=d|0;if(2147418112<a)a=!1;else{for(b=Math.max(qa.length,16777216);b<a;)536870912>=b?b=ra(2*b):b=Math.min(ra((3*b+2147483648)/4),2147418112);Rb(b)?(va(),a=!0):a=!1}a=!(a|0)}if(a)return Ra(),-1;
G[2047520]=d|0;return c|0},$a:Fa,bb:Fa,s:function(){return performance.now()}},buffer);f.asm=Xb;var Oa=f.___wasm_call_ctors=function(){return f.asm.ob.apply(null,arguments)};f._emsc_load_data=function(){return f.asm.pb.apply(null,arguments)};var Ub=f.__sapp_emsc_notify_keyboard_hidden=function(){return f.asm.qb.apply(null,arguments)},Vb=f.__sapp_html5_get_ask_leave_site=function(){return f.asm.rb.apply(null,arguments)};f._main=function(){return f.asm.sb.apply(null,arguments)};
var S=f._malloc=function(){return f.asm.tb.apply(null,arguments)};f._free=function(){return f.asm.ub.apply(null,arguments)};var Wb=f.__saudio_emsc_pull=function(){return f.asm.vb.apply(null,arguments)};f.__sargs_add_kvp=function(){return f.asm.wb.apply(null,arguments)};var pa=f.stackAlloc=function(){return f.asm.xb.apply(null,arguments)};f.dynCall_vi=function(){return f.asm.yb.apply(null,arguments)};f.dynCall_v=function(){return f.asm.zb.apply(null,arguments)};
var T=f.dynCall_iiii=function(){return f.asm.Ab.apply(null,arguments)},Tb=f.dynCall_idi=function(){return f.asm.Bb.apply(null,arguments)};f.asm=Xb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}K=function Yb(){f.calledRun||Zb();f.calledRun||(K=Yb)};
function Zb(a){function b(){if(!f.calledRun&&(f.calledRun=!0,!ka)){xa(za);xa(Aa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if($b){var b=a;b=b||[];var d=b.length+1,e=pa(4*(d+1));G[e>>2]=oa(aa);for(var h=1;h<d;h++)G[(e>>2)+h]=oa(b[h-1]);G[(e>>2)+d]=0;try{var l=f._main(d,e);if(!f.noExitRuntime||0!==l){if(!f.noExitRuntime&&(ka=!0,f.onExit))f.onExit(l);r(l,new ia(l))}}catch(m){m instanceof ia||("SimulateInfiniteLoop"==m?f.noExitRuntime=!0:((b=m)&&"object"===typeof m&&m.stack&&(b=[m,m.stack]),
A("exception thrown: "+b),r(1,m)))}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)b=f.postRun.shift(),Ca.unshift(b);xa(Ca)}}a=a||n;if(!(0<J)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Da();xa(ya);0<J||f.calledRun||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Zb;
function z(a){if(f.onAbort)f.onAbort(a);ja(a);A(a);ka=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}f.abort=z;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var $b=!0;f.noInitialRun&&($b=!1);f.noExitRuntime=!0;Zb();
