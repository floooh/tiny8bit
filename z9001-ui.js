
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in f)f.hasOwnProperty(l)&&(k[l]=f[l]);var aa=[],ba="./this.program";function ca(a,b){throw b;}var da="object"===typeof window,r="function"===typeof importScripts,t="",ea,fa,ha,u,v;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)t=r?require("path").dirname(t)+"/":__dirname+"/",ea=function(a,b){u||(u=require("fs"));v||(v=require("path"));a=v.normalize(a);return u.readFileSync(a,b?null:"utf8")},ha=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||w("Assertion failed: undefined");return a},fa=function(a,b,c){u||(u=require("fs"));v||(v=require("path"));a=v.normalize(a);u.readFile(a,function(d,e){d?c(d):b(e.buffer)})},
1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/")),aa=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",w),ca=function(a,b){if(noExitRuntime||0<ja)throw process.exitCode=a,b;process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da||r)r?t=self.location.href:"undefined"!==typeof document&&document.currentScript&&(t=document.currentScript.src),
t=0!==t.indexOf("blob:")?t.substr(0,t.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},r&&(ha=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),fa=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
var ka=f.print||console.log.bind(console),x=f.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(f[l]=k[l]);k=null;f.arguments&&(aa=f.arguments);f.thisProgram&&(ba=f.thisProgram);f.quit&&(ca=f.quit);var y;f.wasmBinary&&(y=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!==typeof WebAssembly&&w("no native wasm support detected");var la,ma=!1;
function na(a){var b=f["_"+a];b||w("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}
function z(a,b,c,d){var e={string:function(p){var q=0;if(null!==p&&void 0!==p&&0!==p){var U=(p.length<<2)+1;q=B(U);C(p,D,q,U)}return q},array:function(p){var q=B(p.length);oa.set(p,q);return q}};a=na(a);var h=[],g=0;if(d)for(var m=0;m<d.length;m++){var n=e[c[m]];n?(0===g&&(g=pa()),h[m]=n(d[m])):h[m]=d[m]}c=a.apply(null,h);return c=function(p){0!==g&&qa(g);return"string"===b?E(p):"boolean"===b?!!p:p}(c)}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function sa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ra)return ra.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function E(a,b){return a?sa(D,a,b):""}
function C(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ua(a){var b=ta(a)+1,c=B(b);C(a,oa,c,b);return c}var va,oa,D,wa,xa,F,ya,G,H;
function za(){var a=la.buffer;va=a;f.HEAP8=oa=new Int8Array(a);f.HEAP16=wa=new Int16Array(a);f.HEAP32=F=new Int32Array(a);f.HEAPU8=D=new Uint8Array(a);f.HEAPU16=xa=new Uint16Array(a);f.HEAPU32=ya=new Uint32Array(a);f.HEAPF32=G=new Float32Array(a);f.HEAPF64=H=new Float64Array(a)}var I,Aa=[],Ba=[],Ca=[],Da=[],Ea=[],ja=0;function Fa(){var a=f.preRun.shift();Aa.unshift(a)}var J=0,Ga=null,K=null;f.preloadedImages={};f.preloadedAudios={};
function w(a){if(f.onAbort)f.onAbort(a);x(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ha(){return L.startsWith("data:application/octet-stream;base64,")}var L;L="z9001-ui.wasm";if(!Ha()){var Ia=L;L=f.locateFile?f.locateFile(Ia,t):t+Ia}function Ja(){var a=L;try{if(a==L&&y)return new Uint8Array(y);if(ha)return ha(a);throw"both async and sync fetching of the wasm failed";}catch(b){w(b)}}
function Ka(){if(!y&&(da||r)){if("function"===typeof fetch&&!L.startsWith("file://"))return fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Ja()});if(fa)return new Promise(function(a,b){fa(L,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ja()})}
function La(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Hc;"number"===typeof c?void 0===b.fc?I.get(c)():I.get(c)(b.fc):c(void 0===b.fc?null:b.fc)}}}var Ma=[null,[],[]],Na={},Oa=0;function Pa(){for(var a=M.length-1;0<=a;--a)Qa(a);M=[];Ra=[]}var Ra=[];function Sa(){if(Oa&&Ta.ac)for(var a=0;a<Ra.length;++a){var b=Ra[a];Ra.splice(a,1);--a;b.Qc.apply(null,b.Dc)}}var M=[];function Qa(a){var b=M[a];b.target.removeEventListener(b.Ub,b.wc,b.Vb);M.splice(a,1)}
function N(a){function b(d){++Oa;Ta=a;Sa();a.Xb(d);Sa();--Oa}if(a.Wb)a.wc=b,a.target.addEventListener(a.Ub,b,a.Vb),M.push(a),Ua||(Da.push(Pa),Ua=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].Ub==a.Ub&&Qa(c--)}function Va(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ua,Ta,Wa,Xa,Ya,Za,$a,ab,bb,cb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function O(a){a=2<a?E(a):a;return cb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function db(a){return 0>cb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function eb(a,b,c,d,e,h){Wa||(Wa=P(256));a={target:O(a),Ub:h,Wb:d,Xb:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Wa;C(Va(g.target),D,n+0,128);C(m,D,n+128,128);I.get(d)(e,n,b)&&g.preventDefault()},Vb:c};N(a)}
function fb(a,b,c,d,e,h){Xa||(Xa=P(176));a={target:O(a),ac:!0,Ub:h,Wb:d,Xb:function(g){var m=Xa;H[m>>3]=g.timeStamp;var n=m>>2;F[n+2]=g.location;F[n+3]=g.ctrlKey;F[n+4]=g.shiftKey;F[n+5]=g.altKey;F[n+6]=g.metaKey;F[n+7]=g.repeat;F[n+8]=g.charCode;F[n+9]=g.keyCode;F[n+10]=g.which;C(g.key||"",D,m+44,32);C(g.code||"",D,m+76,32);C(g.char||"",D,m+108,32);C(g.locale||"",D,m+140,32);I.get(d)(e,m,b)&&g.preventDefault()},Vb:c};N(a)}
function gb(a,b,c){H[a>>3]=b.timeStamp;a>>=2;F[a+2]=b.screenX;F[a+3]=b.screenY;F[a+4]=b.clientX;F[a+5]=b.clientY;F[a+6]=b.ctrlKey;F[a+7]=b.shiftKey;F[a+8]=b.altKey;F[a+9]=b.metaKey;wa[2*a+20]=b.button;wa[2*a+21]=b.buttons;F[a+11]=b.movementX;F[a+12]=b.movementY;c=db(c);F[a+13]=b.clientX-c.left;F[a+14]=b.clientY-c.top}
function Q(a,b,c,d,e,h){Ya||(Ya=P(72));a=O(a);N({target:a,ac:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Ub:h,Wb:d,Xb:function(g){g=g||event;gb(Ya,g,a);I.get(d)(e,Ya,b)&&g.preventDefault()},Vb:c})}function hb(a,b,c,d,e){Za||(Za=P(260));N({target:a,Ub:e,Wb:d,Xb:function(h){h=h||event;var g=Za,m=document.pointerLockElement||document.ic||document.kc||document.jc;F[g>>2]=!!m;var n=m&&m.id?m.id:"";C(Va(m),D,g+4,128);C(n,D,g+132,128);I.get(d)(20,g,b)&&h.preventDefault()},Vb:c})}
function ib(a,b,c,d,e){N({target:a,Ub:e,Wb:d,Xb:function(h){h=h||event;I.get(d)(38,0,b)&&h.preventDefault()},Vb:c})}
function jb(a,b,c,d){$a||($a=P(36));a=O(a);N({target:a,Ub:"resize",Wb:d,Xb:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=$a;F[g>>2]=e.detail;F[g+4>>2]=h.clientWidth;F[g+8>>2]=h.clientHeight;F[g+12>>2]=innerWidth;F[g+16>>2]=innerHeight;F[g+20>>2]=outerWidth;F[g+24>>2]=outerHeight;F[g+28>>2]=pageXOffset;F[g+32>>2]=pageYOffset;I.get(d)(10,g,b)&&e.preventDefault()}}},Vb:c})}
function kb(a,b,c,d,e,h){ab||(ab=P(1696));a=O(a);N({target:a,ac:"touchstart"==h||"touchend"==h,Ub:h,Wb:d,Xb:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.zc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].Bc=1;n=ab;H[n>>3]=g.timeStamp;q=n>>2;F[q+3]=g.ctrlKey;F[q+4]=g.shiftKey;F[q+5]=g.altKey;F[q+6]=g.metaKey;q+=7;var U=db(a),mb=0;for(p in m){var A=m[p];F[q]=A.identifier;F[q+1]=
A.screenX;F[q+2]=A.screenY;F[q+3]=A.clientX;F[q+4]=A.clientY;F[q+5]=A.pageX;F[q+6]=A.pageY;F[q+7]=A.zc;F[q+8]=A.Bc;F[q+9]=A.clientX-U.left;F[q+10]=A.clientY-U.top;q+=13;if(31<++mb)break}F[n+8>>2]=mb;I.get(d)(e,n,b)&&g.preventDefault()},Vb:c})}function lb(a,b,c,d,e,h){a={target:O(a),Ub:h,Wb:d,Xb:function(g){g=g||event;I.get(d)(e,0,b)&&g.preventDefault()},Vb:c};N(a)}
function nb(a,b,c,d){bb||(bb=P(104));N({target:a,ac:!0,Ub:"wheel",Wb:d,Xb:function(e){e=e||event;var h=bb;gb(h,e,a);H[h+72>>3]=e.deltaX;H[h+80>>3]=e.deltaY;H[h+88>>3]=e.deltaZ;F[h+96>>2]=e.deltaMode;I.get(d)(9,h,b)&&e.preventDefault()},Vb:c})}
function ob(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function pb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function qb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}function rb(a){a.Lc=a.getExtension("WEBGL_multi_draw")}
var sb=1,tb=[],R=[],ub=[],S=[],T=[],V=[],vb=[],wb={};function W(a){xb||(xb=a)}function yb(a){for(var b=sb++,c=a.length;c<b;c++)a[c]=null;return b}function zb(a,b){a.mc||(a.mc=a.getContext,a.getContext=function(d,e){e=a.mc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=a.getContext("webgl",b);return c?Ab(c,b):0}function Ab(a,b){var c=yb(vb),d={Jc:c,attributes:b,version:b.Ac,ec:a};a.canvas&&(a.canvas.Cc=d);vb[c]=d;("undefined"===typeof b.lc||b.lc)&&Bb(d);return c}
function Bb(a){a||(a=Cb);if(!a.yc){a.yc=!0;var b=a.ec;ob(b);pb(b);qb(b);b.Fc=b.getExtension("EXT_disjoint_timer_query");rb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var xb,Cb,Db=["default","low-power","high-performance"];function Eb(a,b,c,d){for(var e=0;e<a;e++){var h=X[c](),g=h&&yb(d);h?(h.name=g,d[g]=h):W(1282);F[b+4*e>>2]=g}}
function Fb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=X.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=X.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){W(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:W(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}F[b>>2]=c}else W(1281)}function Gb(a){var b=ta(a)+1,c=P(b);C(a,D,c,b);return c}
function Hb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Ib(a,b,c,d,e){a-=5120;a=1==a?D:4==a?F:6==a?G:5==a||28922==a?ya:xa;var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}function Y(a){var b=X.vc;if(b){var c=b.$b[a];"number"===typeof c&&(b.$b[a]=c=X.getUniformLocation(b,b.tc[a]+(0<c?"["+c+"]":"")));return c}W(1282)}for(var Z=[],X,Jb=new Float32Array(288),Kb=0;288>Kb;++Kb)Z[Kb]=Jb.subarray(0,Kb+1);
var Qb={la:function(){return 0},eb:function(){return 0},gb:function(){},bb:function(){w()},zb:function(){console.log("fs.h: registering Module['ccall']");f.ccall=z},Ab:function(a){var b=E(a),c=new XMLHttpRequest;c.open("GET",b);c.responseType="arraybuffer";c.onload=function(){var d=new Uint8Array(c.response);z("emsc_load_data","int",["string","array","number"],[b,d,d.length])};c.send()},L:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},T:function(a,b,c){a=O(a);if(!a)return-4;
a=db(a);H[b>>3]=a.width;H[c>>3]=a.height;return 0},$a:function(a,b,c){D.copyWithin(a,b,b+c)},xa:function(a,b){function c(d){I.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},ab:function(a){var b=D.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{la.grow(Math.min(2147483648,d)-va.byteLength+65535>>>16);za();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},W:function(a,
b,c,d){eb(a,b,c,d,12,"blur");return 0},H:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=c;return 0},X:function(a,b,c,d){eb(a,b,c,d,13,"focus");return 0},ea:function(a,b,c,d){fb(a,b,c,d,2,"keydown");return 0},ca:function(a,b,c,d){fb(a,b,c,d,1,"keypress");return 0},da:function(a,b,c,d){fb(a,b,c,d,3,"keyup");return 0},ka:function(a,b,c,d){Q(a,b,c,d,5,"mousedown");return 0},ha:function(a,b,c,d){Q(a,b,c,d,33,"mouseenter");return 0},ga:function(a,b,c,d){Q(a,b,c,d,34,"mouseleave");return 0},ia:function(a,
b,c,d){Q(a,b,c,d,8,"mousemove");return 0},ja:function(a,b,c,d){Q(a,b,c,d,6,"mouseup");return 0},Z:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.ic||document.body.kc||document.body.jc))return-1;a=O(a);if(!a)return-4;hb(a,b,c,d,"pointerlockchange");hb(a,b,c,d,"mozpointerlockchange");hb(a,b,c,d,"webkitpointerlockchange");hb(a,b,c,d,"mspointerlockchange");return 0},Y:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.ic||
document.body.kc||document.body.jc))return-1;a=O(a);if(!a)return-4;ib(a,b,c,d,"pointerlockerror");ib(a,b,c,d,"mozpointerlockerror");ib(a,b,c,d,"webkitpointerlockerror");ib(a,b,c,d,"mspointerlockerror");return 0},La:function(a,b,c,d){jb(a,b,c,d);return 0},_:function(a,b,c,d){kb(a,b,c,d,25,"touchcancel");return 0},$:function(a,b,c,d){kb(a,b,c,d,23,"touchend");return 0},aa:function(a,b,c,d){kb(a,b,c,d,24,"touchmove");return 0},ba:function(a,b,c,d){kb(a,b,c,d,22,"touchstart");return 0},V:function(a,b,
c,d){lb(a,b,c,d,31,"webglcontextlost");return 0},U:function(a,b,c,d){lb(a,b,c,d,32,"webglcontextrestored");return 0},fa:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(nb(a,b,c,d),0):-1},pa:function(a,b){b>>=2;b={alpha:!!F[b],depth:!!F[b+1],stencil:!!F[b+2],antialias:!!F[b+3],premultipliedAlpha:!!F[b+4],preserveDrawingBuffer:!!F[b+5],powerPreference:Db[F[b+6]],failIfMajorPerformanceCaveat:!!F[b+7],Ac:F[b+8],Kc:F[b+9],lc:F[b+10],xc:F[b+11],Mc:F[b+12],Nc:F[b+13]};a=O(a);return!a||b.xc?
0:zb(a,b)},db:function(a,b){a=vb[a];b=E(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&ob(X);"OES_vertex_array_object"==b&&pb(X);"WEBGL_draw_buffers"==b&&qb(X);"WEBGL_multi_draw"==b&&rb(X);return!!a.ec.getExtension(b)},yb:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},kb:function(a){Cb=vb[a];f.Ec=X=Cb&&Cb.ec;return!a||X?0:-5},ma:function(){return 0},cb:function(a,b,c,d){a=Na.Ic(a);b=Na.Gc(a,b,c);F[d>>2]=b;return 0},_a:function(){},
fb:function(a,b,c,d){for(var e=0,h=0;h<c;h++){for(var g=F[b+8*h>>2],m=F[b+(8*h+4)>>2],n=0;n<m;n++){var p=D[g+n],q=Ma[a];0===p||10===p?((1===a?ka:x)(sa(q,0)),q.length=0):q.push(p)}e+=m}F[d>>2]=e;return 0},b:function(a){X.activeTexture(a)},G:function(a,b){X.attachShader(R[a],V[b])},c:function(a,b){X.bindBuffer(a,tb[b])},h:function(a,b){X.bindFramebuffer(a,ub[b])},Fa:function(a,b){X.bindRenderbuffer(a,S[b])},a:function(a,b){X.bindTexture(a,T[b])},N:function(a,b,c,d){X.blendColor(a,b,c,d)},O:function(a,
b){X.blendEquationSeparate(a,b)},P:function(a,b,c,d){X.blendFuncSeparate(a,b,c,d)},Ha:function(a,b,c,d){X.bufferData(a,c?D.subarray(c,c+b):b,d)},I:function(a,b,c,d){X.bufferSubData(a,b,D.subarray(d,d+c))},p:function(a){return X.checkFramebufferStatus(a)},ub:function(a){X.clear(a)},xb:function(a,b,c,d){X.clearColor(a,b,c,d)},wb:function(a){X.clearDepth(a)},vb:function(a){X.clearStencil(a)},o:function(a,b,c,d){X.colorMask(!!a,!!b,!!c,!!d)},ua:function(a){X.compileShader(V[a])},Ca:function(a,b,c,d,e,
h,g,m){X.compressedTexImage2D(a,b,c,d,e,h,m?D.subarray(m,m+g):null)},Aa:function(){var a=yb(R),b=X.createProgram();b.name=a;b.dc=b.bc=b.cc=0;b.hc=1;R[a]=b;return a},wa:function(a){var b=yb(V);V[b]=X.createShader(a);return b},J:function(a){X.cullFace(a)},Na:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=tb[d];e&&(X.deleteBuffer(e),e.name=0,tb[d]=null)}},d:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],e=ub[d];e&&(X.deleteFramebuffer(e),e.name=0,ub[d]=null)}},R:function(a){if(a){var b=
R[a];b?(X.deleteProgram(b),b.name=0,R[a]=null):W(1281)}},S:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=S[d];e&&(X.deleteRenderbuffer(e),e.name=0,S[d]=null)}},w:function(a){if(a){var b=V[a];b?(X.deleteShader(b),V[a]=null):W(1281)}},Ma:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=T[d];e&&(X.deleteTexture(e),e.name=0,T[d]=null)}},z:function(a){X.depthFunc(a)},y:function(a){X.depthMask(!!a)},e:function(a){X.disable(a)},Q:function(a){X.disableVertexAttribArray(a)},B:function(a,b,c){X.drawArrays(a,
b,c)},C:function(a,b,c,d){X.drawElements(a,b,c,d)},i:function(a){X.enable(a)},rb:function(a){X.enableVertexAttribArray(a)},k:function(a,b,c,d){X.framebufferRenderbuffer(a,b,c,S[d])},g:function(a,b,c,d,e){X.framebufferTexture2D(a,b,c,T[d],e)},K:function(a){X.frontFace(a)},Ia:function(a,b){Eb(a,b,"createBuffer",tb)},n:function(a,b){Eb(a,b,"createFramebuffer",ub)},Ga:function(a,b){Eb(a,b,"createRenderbuffer",S)},Da:function(a,b){Eb(a,b,"createTexture",T)},sa:function(a,b){return X.getAttribLocation(R[a],
E(b))},f:function(a,b){Fb(a,b)},ya:function(a,b,c,d){a=X.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},F:function(a,b,c){if(c)if(a>=sb)W(1281);else if(a=R[a],35716==b)a=X.getProgramInfoLog(a),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b){if(!a.dc)for(b=0;b<X.getProgramParameter(a,35718);++b)a.dc=Math.max(a.dc,X.getActiveUniform(a,b).name.length+1);F[c>>2]=a.dc}else if(35722==b){if(!a.bc)for(b=0;b<X.getProgramParameter(a,35721);++b)a.bc=
Math.max(a.bc,X.getActiveAttrib(a,b).name.length+1);F[c>>2]=a.bc}else if(35381==b){if(!a.cc)for(b=0;b<X.getProgramParameter(a,35382);++b)a.cc=Math.max(a.cc,X.getActiveUniformBlockName(a,b).length+1);F[c>>2]=a.cc}else F[c>>2]=X.getProgramParameter(a,b);else W(1281)},ta:function(a,b,c,d){a=X.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},D:function(a,b,c){c?35716==b?(a=X.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),F[c>>2]=a?a.length+1:0):35720==
b?(a=X.getShaderSource(V[a]),F[c>>2]=a?a.length+1:0):F[c>>2]=X.getShaderParameter(V[a],b):W(1281)},Oa:function(a){var b=wb[a];if(!b){switch(a){case 7939:b=X.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Gb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=X.getParameter(a))||W(1280);b=b&&Gb(b);break;case 7938:b=Gb("OpenGL ES 2.0 ("+X.getParameter(7938)+")");break;case 35724:b=X.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Gb(b);break;default:W(1280)}wb[a]=b}return b},q:function(a,b){b=E(b);if(a=R[a]){var c=a,d=c.$b,e=c.uc,h;if(!d)for(c.$b=d={},c.tc={},h=0;h<X.getProgramParameter(c,35718);++h){var g=X.getActiveUniform(c,h);var m=g.name;g=g.size;var n=Hb(m);n=0<n?m.slice(0,n):m;var p=c.hc;c.hc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.tc[p++]=n}c=a.$b;d=0;e=b;h=Hb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.uc[e])&&d<e[0]&&
(d+=e[1],c[d]=c[d]||X.getUniformLocation(a,b)))return d}else W(1281);return-1},za:function(a){a=R[a];X.linkProgram(a);a.$b=0;a.uc={}},M:function(a,b){X.polygonOffset(a,b)},Ea:function(a,b,c,d){X.renderbufferStorage(a,b,c,d)},v:function(a,b,c,d){X.scissor(a,b,c,d)},va:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?F[d+4*h>>2]:-1;e+=E(F[c+4*h>>2],0>g?void 0:g)}X.shaderSource(V[a],e)},Ka:function(a,b,c){X.stencilFunc(a,b,c)},ra:function(a,b,c,d){X.stencilFuncSeparate(a,b,c,d)},x:function(a){X.stencilMask(a)},
Ja:function(a,b,c){X.stencilOp(a,b,c)},qa:function(a,b,c,d){X.stencilOpSeparate(a,b,c,d)},Ba:function(a,b,c,d,e,h,g,m,n){X.texImage2D(a,b,c,d,e,h,g,m,n?Ib(m,g,d,e,n):null)},j:function(a,b,c){X.texParameteri(a,b,c)},lb:function(a,b,c,d,e,h,g,m,n){var p=null;n&&(p=Ib(m,g,e,h,n));X.texSubImage2D(a,b,c,d,e,h,g,m,p)},qb:function(a,b,c){if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=G[c+4*e>>2];else d=G.subarray(c>>2,c+4*b>>2);X.uniform1fv(Y(a),d)},E:function(a,b){X.uniform1i(Y(a),b)},pb:function(a,b,c){if(144>=
b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2];else d=G.subarray(c>>2,c+8*b>>2);X.uniform2fv(Y(a),d)},ob:function(a,b,c){if(96>=b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2],d[e+2]=G[c+(4*e+8)>>2];else d=G.subarray(c>>2,c+12*b>>2);X.uniform3fv(Y(a),d)},nb:function(a,b,c){if(72>=b){var d=Z[4*b-1],e=G;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=G.subarray(c>>2,c+16*b>>2);X.uniform4fv(Y(a),
d)},mb:function(a,b,c,d){if(18>=b){var e=Z[16*b-1],h=G;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=G.subarray(d>>2,d+64*b>>2);X.uniformMatrix4fv(Y(a),!!c,e)},r:function(a){a=R[a];X.useProgram(a);X.vc=a},sb:function(a,b){X.vertexAttribDivisor(a,b)},tb:function(a,b,
c,d,e,h){X.vertexAttribPointer(a,b,c,!!d,e,h)},m:function(a,b,c,d){X.viewport(a,b,c,d)},Ya:function(){f.nc=function(a){0!=Lb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.nc)},Xa:function(){f.sc=function(a){a=a.clipboardData.getData("text");z("_sapp_emsc_onpaste","void",["string"],[a])};window.addEventListener("paste",f.sc)},Wa:function(a){f.Oc=[];a=E(a);a=document.getElementById(a);f.oc=function(b){b.stopPropagation();b.preventDefault()};f.pc=function(b){b.stopPropagation();
b.preventDefault()};f.qc=function(b){b.stopPropagation();b.preventDefault()};f.rc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.Pc=c;Mb(c.length);var d;for(d=0;d<c.length;d++)z("_sapp_emsc_drop","void",["number","string"],[d,c[d].name]);Nb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.oc,!1);a.addEventListener("dragleave",f.pc,!1);a.addEventListener("dragover",f.qc,!1);a.addEventListener("drop",f.rc,!1)},Qa:function(){var a=document.getElementById("sokol-app-favicon");
a&&document.head.removeChild(a)},u:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ob()});document.body.append(a)},t:function(){document.getElementById("_sokol_app_input_element").focus()},Va:function(a){a=E(a);f.Zb=document.getElementById(a);f.Zb||console.log("sokol_app.h: invalid target:"+a);f.Zb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+
a)},Ua:function(){window.removeEventListener("beforeunload",f.nc)},Ta:function(){window.removeEventListener("paste",f.sc)},Sa:function(a){a=E(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.oc);a.removeEventListener("dragleave",f.pc);a.removeEventListener("dragover",f.qc);a.removeEventListener("drop",f.rc)},A:function(){f.Zb&&f.Zb.requestPointerLock&&f.Zb.requestPointerLock()},Pa:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),
h=e.createImageData(a,b);h.data.set(D.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},s:function(){document.getElementById("_sokol_app_input_element").blur()},Ra:function(a){a=E(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left=
"-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},Za:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=a.next())z("_sargs_add_kvp","void",["string","string"],[b.value[0],b.value[1]])},hb:function(){return f.Yb?f.Yb.bufferSize:0},jb:function(a,b,c){f.Tb=null;f.Yb=null;"undefined"!==typeof AudioContext?f.Tb=new AudioContext({sampleRate:a,
latencyHint:"interactive"}):"undefined"!==typeof webkitAudioContext?f.Tb=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}):(f.Tb=null,console.log("sokol_audio.h: no WebAudio support"));return f.Tb?(console.log("sokol_audio.h: sample rate ",f.Tb.sampleRate),f.Yb=f.Tb.createScriptProcessor(c,0,b),f.Yb.onaudioprocess=function(d){var e=d.outputBuffer.length,h=Pb(e);if(h)for(var g=d.outputBuffer.numberOfChannels,m=0;m<g;m++)for(var n=d.outputBuffer.getChannelData(m),p=0;p<e;p++)n[p]=G[(h>>
2)+(g*p+m)]},f.Yb.connect(f.Tb.destination),a=function(){f.Tb&&"suspended"===f.Tb.state&&f.Tb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},ib:function(){return f.Tb?f.Tb.sampleRate:0},oa:function(){null!==f.Tb&&(f.Yb&&f.Yb.disconnect(),f.Tb.close(),f.Tb=null,f.Yb=null)},na:function(){return navigator.userAgent.includes("Macintosh")?1:0},l:function(){return performance.now()}};
(function(){function a(e){f.asm=e.exports;la=f.asm.Bb;za();I=f.asm.Sb;Ba.unshift(f.asm.Cb);J--;f.monitorRunDependencies&&f.monitorRunDependencies(J);0==J&&(null!==Ga&&(clearInterval(Ga),Ga=null),K&&(e=K,K=null,e()))}function b(e){a(e.instance)}function c(e){return Ka().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){x("failed to asynchronously prepare wasm: "+h);w(h)})}var d={a:Qb};J++;f.monitorRunDependencies&&f.monitorRunDependencies(J);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return x("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return y||"function"!==typeof WebAssembly.instantiateStreaming||Ha()||L.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(L,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){x("wasm streaming compile failed: "+h);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Cb).apply(null,arguments)};f._emsc_load_data=function(){return(f._emsc_load_data=f.asm.Db).apply(null,arguments)};var Ob=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Ob=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Eb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.Fb).apply(null,arguments)};
var Lb=f.__sapp_html5_get_ask_leave_site=function(){return(Lb=f.__sapp_html5_get_ask_leave_site=f.asm.Gb).apply(null,arguments)},Mb=f.__sapp_emsc_begin_drop=function(){return(Mb=f.__sapp_emsc_begin_drop=f.asm.Hb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Ib).apply(null,arguments)};var Nb=f.__sapp_emsc_end_drop=function(){return(Nb=f.__sapp_emsc_end_drop=f.asm.Jb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Kb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Lb).apply(null,arguments)};var Pb=f.__saudio_emsc_pull=function(){return(Pb=f.__saudio_emsc_pull=f.asm.Mb).apply(null,arguments)};f.__sargs_add_kvp=function(){return(f.__sargs_add_kvp=f.asm.Nb).apply(null,arguments)};
var P=f._malloc=function(){return(P=f._malloc=f.asm.Ob).apply(null,arguments)},pa=f.stackSave=function(){return(pa=f.stackSave=f.asm.Pb).apply(null,arguments)},qa=f.stackRestore=function(){return(qa=f.stackRestore=f.asm.Qb).apply(null,arguments)},B=f.stackAlloc=function(){return(B=f.stackAlloc=f.asm.Rb).apply(null,arguments)},Rb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}K=function Sb(){Rb||Tb();Rb||(K=Sb)};
function Tb(a){function b(){if(!Rb&&(Rb=!0,f.calledRun=!0,!ma)){La(Ba);La(Ca);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Ub){var c=a,d=f._main;c=c||[];var e=c.length+1,h=B(4*(e+1));F[h>>2]=ua(ba);for(var g=1;g<e;g++)F[(h>>2)+g]=ua(c[g-1]);F[(h>>2)+e]=0;try{var m=d(e,h);if(!(noExitRuntime||0<ja)){if(f.onExit)f.onExit(m);ma=!0}ca(m,new ia(m))}catch(n){c=n,c instanceof ia||"unwind"==c||(x("exception thrown: "+c),ca(1,c))}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=
[f.postRun]);f.postRun.length;)c=f.postRun.shift(),Ea.unshift(c);La(Ea)}}a=a||aa;if(!(0<J)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Fa();La(Aa);0<J||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Tb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Ub=!0;f.noInitialRun&&(Ub=!1);Tb();
