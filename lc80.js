
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in f)f.hasOwnProperty(l)&&(k[l]=f[l]);var aa=[],ba="./this.program";function r(a,b){throw b;}var ca="object"===typeof window,t="function"===typeof importScripts,u="",da,v,w,x,y;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)u=t?require("path").dirname(u)+"/":__dirname+"/",da=function(a,b){x||(x=require("fs"));y||(y=require("path"));a=y.normalize(a);return x.readFileSync(a,b?null:"utf8")},w=function(a){a=da(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||A("Assertion failed: undefined");return a},v=function(a,b,c){x||(x=require("fs"));y||(y=require("path"));a=y.normalize(a);x.readFile(a,function(d,e){d?c(d):b(e.buffer)})},
1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/")),aa=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ea))throw a;}),process.on("unhandledRejection",A),r=function(a,b){if(noExitRuntime||0<fa)throw process.exitCode=a,b;process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(ca||t)t?u=self.location.href:"undefined"!==typeof document&&document.currentScript&&(u=document.currentScript.src),
u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",da=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},t&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),v=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
var ha=f.print||console.log.bind(console),B=f.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(f[l]=k[l]);k=null;f.arguments&&(aa=f.arguments);f.thisProgram&&(ba=f.thisProgram);f.quit&&(r=f.quit);var C;f.wasmBinary&&(C=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!==typeof WebAssembly&&A("no native wasm support detected");var ia,ja=!1;
function ka(a){var b=f["_"+a];b||A("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}function la(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=D(q);E(n,F,p,q)}return p},array:function(n){var p=D(n.length);ma.set(n,p);return p}};a=ka(a);var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=na()),e[g]=m(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==h&&oa(h);return n}(b)}
var pa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function qa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&pa)return pa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function G(a,b){return a?qa(F,a,b):""}
function E(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function ra(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function sa(a){var b=ra(a)+1,c=D(b);E(a,ma,c,b);return c}var ta,ma,F,ua,va,H,wa,I,J;
function xa(){var a=ia.buffer;ta=a;f.HEAP8=ma=new Int8Array(a);f.HEAP16=ua=new Int16Array(a);f.HEAP32=H=new Int32Array(a);f.HEAPU8=F=new Uint8Array(a);f.HEAPU16=va=new Uint16Array(a);f.HEAPU32=wa=new Uint32Array(a);f.HEAPF32=I=new Float32Array(a);f.HEAPF64=J=new Float64Array(a)}var K,ya=[],za=[],Aa=[],Ba=[],Ca=[],fa=0;function Da(){var a=f.preRun.shift();ya.unshift(a)}var L=0,Ea=null,M=null;f.preloadedImages={};f.preloadedAudios={};
function A(a){if(f.onAbort)f.onAbort(a);B(a);ja=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Fa(){return N.startsWith("data:application/octet-stream;base64,")}var N;N="lc80.wasm";if(!Fa()){var Ga=N;N=f.locateFile?f.locateFile(Ga,u):u+Ga}function Ha(){var a=N;try{if(a==N&&C)return new Uint8Array(C);if(w)return w(a);throw"both async and sync fetching of the wasm failed";}catch(b){A(b)}}
function Ia(){if(!C&&(ca||t)){if("function"===typeof fetch&&!N.startsWith("file://"))return fetch(N,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+N+"'";return a.arrayBuffer()}).catch(function(){return Ha()});if(v)return new Promise(function(a,b){v(N,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ha()})}
function O(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Bc;"number"===typeof c?void 0===b.$b?K.get(c)():K.get(c)(b.$b):c(void 0===b.$b?null:b.$b)}}}var Ja=[null,[],[]],Ka={},La=0;function Ma(){for(var a=P.length-1;0<=a;--a)Na(a);P=[];Oa=[]}var Oa=[];function Pa(){if(La&&Qa.Vb)for(var a=0;a<Oa.length;++a){var b=Oa[a];Oa.splice(a,1);--a;b.Kc.apply(null,b.xc)}}var P=[];function Na(a){var b=P[a];b.target.removeEventListener(b.Ob,b.qc,b.Pb);P.splice(a,1)}
function Q(a){function b(d){++La;Qa=a;Pa();a.Rb(d);Pa();--La}if(a.Qb)a.qc=b,a.target.addEventListener(a.Ob,b,a.Pb),P.push(a),Ra||(Ba.push(Ma),Ra=!0);else for(var c=0;c<P.length;++c)P[c].target==a.target&&P[c].Ob==a.Ob&&Na(c--)}function Sa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ra,Qa,Ta,Ua,Va,Wa,Xa,Ya,Za,$a=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function R(a){a=2<a?G(a):a;return $a[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function ab(a){return 0>$a.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function bb(a,b,c,d,e,h){Ta||(Ta=S(256));a={target:R(a),Ob:h,Qb:d,Rb:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Ta;E(Sa(g.target),F,n+0,128);E(m,F,n+128,128);K.get(d)(e,n,b)&&g.preventDefault()},Pb:c};Q(a)}
function cb(a,b,c,d,e,h){Ua||(Ua=S(176));a={target:R(a),Vb:!0,Ob:h,Qb:d,Rb:function(g){var m=Ua;J[m>>3]=g.timeStamp;var n=m>>2;H[n+2]=g.location;H[n+3]=g.ctrlKey;H[n+4]=g.shiftKey;H[n+5]=g.altKey;H[n+6]=g.metaKey;H[n+7]=g.repeat;H[n+8]=g.charCode;H[n+9]=g.keyCode;H[n+10]=g.which;E(g.key||"",F,m+44,32);E(g.code||"",F,m+76,32);E(g.char||"",F,m+108,32);E(g.locale||"",F,m+140,32);K.get(d)(e,m,b)&&g.preventDefault()},Pb:c};Q(a)}
function db(a,b,c){J[a>>3]=b.timeStamp;a>>=2;H[a+2]=b.screenX;H[a+3]=b.screenY;H[a+4]=b.clientX;H[a+5]=b.clientY;H[a+6]=b.ctrlKey;H[a+7]=b.shiftKey;H[a+8]=b.altKey;H[a+9]=b.metaKey;ua[2*a+20]=b.button;ua[2*a+21]=b.buttons;H[a+11]=b.movementX;H[a+12]=b.movementY;c=ab(c);H[a+13]=b.clientX-c.left;H[a+14]=b.clientY-c.top}
function T(a,b,c,d,e,h){Va||(Va=S(72));a=R(a);Q({target:a,Vb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Ob:h,Qb:d,Rb:function(g){g=g||event;db(Va,g,a);K.get(d)(e,Va,b)&&g.preventDefault()},Pb:c})}function eb(a,b,c,d,e){Wa||(Wa=S(260));Q({target:a,Ob:e,Qb:d,Rb:function(h){h=h||event;var g=Wa,m=document.pointerLockElement||document.bc||document.dc||document.cc;H[g>>2]=!!m;var n=m&&m.id?m.id:"";E(Sa(m),F,g+4,128);E(n,F,g+132,128);K.get(d)(20,g,b)&&h.preventDefault()},Pb:c})}
function fb(a,b,c,d,e){Q({target:a,Ob:e,Qb:d,Rb:function(h){h=h||event;K.get(d)(38,0,b)&&h.preventDefault()},Pb:c})}
function gb(a,b,c,d){Xa||(Xa=S(36));a=R(a);Q({target:a,Ob:"resize",Qb:d,Rb:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=Xa;H[g>>2]=e.detail;H[g+4>>2]=h.clientWidth;H[g+8>>2]=h.clientHeight;H[g+12>>2]=innerWidth;H[g+16>>2]=innerHeight;H[g+20>>2]=outerWidth;H[g+24>>2]=outerHeight;H[g+28>>2]=pageXOffset;H[g+32>>2]=pageYOffset;K.get(d)(10,g,b)&&e.preventDefault()}}},Pb:c})}
function hb(a,b,c,d,e,h){Ya||(Ya=S(1696));a=R(a);Q({target:a,Vb:"touchstart"==h||"touchend"==h,Ob:h,Qb:d,Rb:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.tc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].vc=1;n=Ya;J[n>>3]=g.timeStamp;q=n>>2;H[q+3]=g.ctrlKey;H[q+4]=g.shiftKey;H[q+5]=g.altKey;H[q+6]=g.metaKey;q+=7;var lb=ab(a),mb=0;for(p in m){var z=m[p];H[q]=z.identifier;H[q+
1]=z.screenX;H[q+2]=z.screenY;H[q+3]=z.clientX;H[q+4]=z.clientY;H[q+5]=z.pageX;H[q+6]=z.pageY;H[q+7]=z.tc;H[q+8]=z.vc;H[q+9]=z.clientX-lb.left;H[q+10]=z.clientY-lb.top;q+=13;if(31<++mb)break}H[n+8>>2]=mb;K.get(d)(e,n,b)&&g.preventDefault()},Pb:c})}function ib(a,b,c,d,e,h){a={target:R(a),Ob:h,Qb:d,Rb:function(g){g=g||event;K.get(d)(e,0,b)&&g.preventDefault()},Pb:c};Q(a)}
function jb(a,b,c,d){Za||(Za=S(104));Q({target:a,Vb:!0,Ob:"wheel",Qb:d,Rb:function(e){e=e||event;var h=Za;db(h,e,a);J[h+72>>3]=e.deltaX;J[h+80>>3]=e.deltaY;J[h+88>>3]=e.deltaZ;H[h+96>>2]=e.deltaMode;K.get(d)(9,h,b)&&e.preventDefault()},Pb:c})}
function kb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function nb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ob(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}function pb(a){a.Fc=a.getExtension("WEBGL_multi_draw")}
var qb=1,rb=[],U=[],sb=[],tb=[],ub=[],V=[],vb=[],wb={};function W(a){xb||(xb=a)}function yb(a){for(var b=qb++,c=a.length;c<b;c++)a[c]=null;return b}function zb(a,b){a.fc||(a.fc=a.getContext,a.getContext=function(d,e){e=a.fc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=a.getContext("webgl",b);return c?Ab(c,b):0}function Ab(a,b){var c=yb(vb),d={Dc:c,attributes:b,version:b.uc,Zb:a};a.canvas&&(a.canvas.wc=d);vb[c]=d;("undefined"===typeof b.ec||b.ec)&&Bb(d);return c}
function Bb(a){a||(a=Cb);if(!a.sc){a.sc=!0;var b=a.Zb;kb(b);nb(b);ob(b);b.zc=b.getExtension("EXT_disjoint_timer_query");pb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var xb,Cb,Db=["default","low-power","high-performance"];function Eb(a,b,c,d){for(var e=0;e<a;e++){var h=X[c](),g=h&&yb(d);h?(h.name=g,d[g]=h):W(1282);H[b+4*e>>2]=g}}
function Fb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=X.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=X.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){W(1280);B("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:W(1280);B("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else W(1281)}function Gb(a){var b=ra(a)+1,c=S(b);E(a,F,c,b);return c}
function Hb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Ib(a,b,c,d,e){a-=5120;a=1==a?F:4==a?H:6==a?I:5==a||28922==a?wa:va;var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}function Y(a){var b=X.pc;if(b){var c=b.Ub[a];"number"===typeof c&&(b.Ub[a]=c=X.getUniformLocation(b,b.nc[a]+(0<c?"["+c+"]":"")));return c}W(1282)}for(var Z=[],X,Jb=new Float32Array(288),Kb=0;288>Kb;++Kb)Z[Kb]=Jb.subarray(0,Kb+1);
var Qb={fa:function(){return 0},ab:function(){return 0},cb:function(){},_a:function(){A()},M:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},Q:function(a,b,c){a=R(a);if(!a)return-4;a=ab(a);J[b>>3]=a.width;J[c>>3]=a.height;return 0},Ya:function(a,b,c){F.copyWithin(a,b,b+c)},Ga:function(a,b){function c(d){K.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Za:function(a){var b=F.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/
c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ia.grow(Math.min(2147483648,d)-ta.byteLength+65535>>>16);xa();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},R:function(a,b,c,d){bb(a,b,c,d,12,"blur");return 0},J:function(a,b,c){a=R(a);if(!a)return-4;a.width=b;a.height=c;return 0},S:function(a,b,c,d){bb(a,b,c,d,13,"focus");return 0},$:function(a,b,c,d){cb(a,b,c,d,2,"keydown");return 0},Z:function(a,b,c,d){cb(a,b,c,d,1,"keypress");return 0},_:function(a,
b,c,d){cb(a,b,c,d,3,"keyup");return 0},ha:function(a,b,c,d){T(a,b,c,d,5,"mousedown");return 0},ca:function(a,b,c,d){T(a,b,c,d,33,"mouseenter");return 0},ba:function(a,b,c,d){T(a,b,c,d,34,"mouseleave");return 0},da:function(a,b,c,d){T(a,b,c,d,8,"mousemove");return 0},ea:function(a,b,c,d){T(a,b,c,d,6,"mouseup");return 0},U:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.bc||document.body.dc||document.body.cc))return-1;a=R(a);if(!a)return-4;eb(a,b,c,
d,"pointerlockchange");eb(a,b,c,d,"mozpointerlockchange");eb(a,b,c,d,"webkitpointerlockchange");eb(a,b,c,d,"mspointerlockchange");return 0},T:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.bc||document.body.dc||document.body.cc))return-1;a=R(a);if(!a)return-4;fb(a,b,c,d,"pointerlockerror");fb(a,b,c,d,"mozpointerlockerror");fb(a,b,c,d,"webkitpointerlockerror");fb(a,b,c,d,"mspointerlockerror");return 0},Qa:function(a,b,c,d){gb(a,b,c,d);return 0},V:function(a,b,c,d){hb(a,
b,c,d,25,"touchcancel");return 0},W:function(a,b,c,d){hb(a,b,c,d,23,"touchend");return 0},X:function(a,b,c,d){hb(a,b,c,d,24,"touchmove");return 0},Y:function(a,b,c,d){hb(a,b,c,d,22,"touchstart");return 0},P:function(a,b,c,d){ib(a,b,c,d,31,"webglcontextlost");return 0},O:function(a,b,c,d){ib(a,b,c,d,32,"webglcontextrestored");return 0},aa:function(a,b,c,d){a=R(a);return"undefined"!==typeof a.onwheel?(jb(a,b,c,d),0):-1},y:function(a,b){b>>=2;b={alpha:!!H[b],depth:!!H[b+1],stencil:!!H[b+2],antialias:!!H[b+
3],premultipliedAlpha:!!H[b+4],preserveDrawingBuffer:!!H[b+5],powerPreference:Db[H[b+6]],failIfMajorPerformanceCaveat:!!H[b+7],uc:H[b+8],Ec:H[b+9],ec:H[b+10],rc:H[b+11],Gc:H[b+12],Hc:H[b+13]};a=R(a);return!a||b.rc?0:zb(a,b)},kb:function(a,b){a=vb[a];b=G(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&kb(X);"OES_vertex_array_object"==b&&nb(X);"WEBGL_draw_buffers"==b&&ob(X);"WEBGL_multi_draw"==b&&pb(X);return!!a.Zb.getExtension(b)},xa:function(a){a>>=2;for(var b=0;14>b;++b)H[a+
b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},tb:function(a){Cb=vb[a];f.yc=X=Cb&&Cb.Zb;return!a||X?0:-5},ga:function(){return 0},$a:function(a,b,c,d){a=Ka.Cc(a);b=Ka.Ac(a,b,c);H[d>>2]=b;return 0},Xa:function(){},bb:function(a,b,c,d){for(var e=0,h=0;h<c;h++){for(var g=H[b+8*h>>2],m=H[b+(8*h+4)>>2],n=0;n<m;n++){var p=F[g+n],q=Ja[a];0===p||10===p?((1===a?ha:B)(qa(q,0)),q.length=0):q.push(p)}e+=m}H[d>>2]=e;return 0},b:function(a){X.activeTexture(a)},B:function(a,b){X.attachShader(U[a],V[b])},c:function(a,
b){X.bindBuffer(a,rb[b])},w:function(a,b){X.bindFramebuffer(a,sb[b])},Ca:function(a,b){X.bindRenderbuffer(a,tb[b])},a:function(a,b){X.bindTexture(a,ub[b])},G:function(a,b,c,d){X.blendColor(a,b,c,d)},H:function(a,b){X.blendEquationSeparate(a,b)},I:function(a,b,c,d){X.blendFuncSeparate(a,b,c,d)},Ea:function(a,b,c,d){X.bufferData(a,c?F.subarray(c,c+b):b,d)},C:function(a,b,c,d){X.bufferSubData(a,b,F.subarray(d,d+c))},sb:function(a){X.clear(a)},oa:function(a,b,c,d){X.clearColor(a,b,c,d)},na:function(a){X.clearDepth(a)},
ma:function(a){X.clearStencil(a)},m:function(a,b,c,d){X.colorMask(!!a,!!b,!!c,!!d)},ra:function(a){X.compileShader(V[a])},za:function(a,b,c,d,e,h,g,m){X.compressedTexImage2D(a,b,c,d,e,h,m?F.subarray(m,m+g):null)},wa:function(){var a=yb(U),b=X.createProgram();b.name=a;b.Yb=b.Wb=b.Xb=0;b.ac=1;U[a]=b;return a},ta:function(a){var b=yb(V);V[b]=X.createShader(a);return b},D:function(a){X.cullFace(a)},Ka:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=rb[d];e&&(X.deleteBuffer(e),e.name=0,rb[d]=null)}},
h:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],e=sb[d];e&&(X.deleteFramebuffer(e),e.name=0,sb[d]=null)}},L:function(a){if(a){var b=U[a];b?(X.deleteProgram(b),b.name=0,U[a]=null):W(1281)}},N:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=tb[d];e&&(X.deleteRenderbuffer(e),e.name=0,tb[d]=null)}},r:function(a){if(a){var b=V[a];b?(X.deleteShader(b),V[a]=null):W(1281)}},Ja:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=ub[d];e&&(X.deleteTexture(e),e.name=0,ub[d]=null)}},u:function(a){X.depthFunc(a)},
t:function(a){X.depthMask(!!a)},d:function(a){X.disable(a)},K:function(a){X.disableVertexAttribArray(a)},hb:function(a,b,c){X.drawArrays(a,b,c)},ib:function(a,b,c,d){X.drawElements(a,b,c,d)},f:function(a){X.enable(a)},pb:function(a){X.enableVertexAttribArray(a)},E:function(a){X.frontFace(a)},Fa:function(a,b){Eb(a,b,"createBuffer",rb)},Da:function(a,b){Eb(a,b,"createRenderbuffer",tb)},Aa:function(a,b){Eb(a,b,"createTexture",ub)},pa:function(a,b){return X.getAttribLocation(U[a],G(b))},e:function(a,
b){Fb(a,b)},ua:function(a,b,c,d){a=X.getProgramInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,F,d,b):0;c&&(H[c>>2]=b)},A:function(a,b,c){if(c)if(a>=qb)W(1281);else if(a=U[a],35716==b)a=X.getProgramInfoLog(a),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1;else if(35719==b){if(!a.Yb)for(b=0;b<X.getProgramParameter(a,35718);++b)a.Yb=Math.max(a.Yb,X.getActiveUniform(a,b).name.length+1);H[c>>2]=a.Yb}else if(35722==b){if(!a.Wb)for(b=0;b<X.getProgramParameter(a,35721);++b)a.Wb=Math.max(a.Wb,
X.getActiveAttrib(a,b).name.length+1);H[c>>2]=a.Wb}else if(35381==b){if(!a.Xb)for(b=0;b<X.getProgramParameter(a,35382);++b)a.Xb=Math.max(a.Xb,X.getActiveUniformBlockName(a,b).length+1);H[c>>2]=a.Xb}else H[c>>2]=X.getProgramParameter(a,b);else W(1281)},qa:function(a,b,c,d){a=X.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,F,d,b):0;c&&(H[c>>2]=b)},x:function(a,b,c){c?35716==b?(a=X.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),H[c>>2]=a?a.length+1:0):35720==b?(a=X.getShaderSource(V[a]),
H[c>>2]=a?a.length+1:0):H[c>>2]=X.getShaderParameter(V[a],b):W(1281)},La:function(a){var b=wb[a];if(!b){switch(a){case 7939:b=X.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Gb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=X.getParameter(a))||W(1280);b=b&&Gb(b);break;case 7938:b=Gb("OpenGL ES 2.0 ("+X.getParameter(7938)+")");break;case 35724:b=X.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&
(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Gb(b);break;default:W(1280)}wb[a]=b}return b},l:function(a,b){b=G(b);if(a=U[a]){var c=a,d=c.Ub,e=c.oc,h;if(!d)for(c.Ub=d={},c.nc={},h=0;h<X.getProgramParameter(c,35718);++h){var g=X.getActiveUniform(c,h);var m=g.name;g=g.size;var n=Hb(m);n=0<n?m.slice(0,n):m;var p=c.ac;c.ac+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.nc[p++]=n}c=a.Ub;d=0;e=b;h=Hb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.oc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||X.getUniformLocation(a,
b)))return d}else W(1281);return-1},va:function(a){a=U[a];X.linkProgram(a);a.Ub=0;a.oc={}},F:function(a,b){X.polygonOffset(a,b)},Ba:function(a,b,c,d){X.renderbufferStorage(a,b,c,d)},j:function(a,b,c,d){X.scissor(a,b,c,d)},sa:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?H[d+4*h>>2]:-1;e+=G(H[c+4*h>>2],0>g?void 0:g)}X.shaderSource(V[a],e)},Ia:function(a,b,c){X.stencilFunc(a,b,c)},la:function(a,b,c,d){X.stencilFuncSeparate(a,b,c,d)},s:function(a){X.stencilMask(a)},Ha:function(a,b,c){X.stencilOp(a,
b,c)},ka:function(a,b,c,d){X.stencilOpSeparate(a,b,c,d)},ya:function(a,b,c,d,e,h,g,m,n){X.texImage2D(a,b,c,d,e,h,g,m,n?Ib(m,g,d,e,n):null)},g:function(a,b,c){X.texParameteri(a,b,c)},gb:function(a,b,c,d,e,h,g,m,n){var p=null;n&&(p=Ib(m,g,e,h,n));X.texSubImage2D(a,b,c,d,e,h,g,m,p)},ob:function(a,b,c){if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=I[c+4*e>>2];else d=I.subarray(c>>2,c+4*b>>2);X.uniform1fv(Y(a),d)},z:function(a,b){X.uniform1i(Y(a),b)},nb:function(a,b,c){if(144>=b)for(var d=Z[2*b-1],e=0;e<
2*b;e+=2)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2];else d=I.subarray(c>>2,c+8*b>>2);X.uniform2fv(Y(a),d)},mb:function(a,b,c){if(96>=b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2],d[e+2]=I[c+(4*e+8)>>2];else d=I.subarray(c>>2,c+12*b>>2);X.uniform3fv(Y(a),d)},lb:function(a,b,c){if(72>=b){var d=Z[4*b-1],e=I;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=I.subarray(c>>2,c+16*b>>2);X.uniform4fv(Y(a),d)},jb:function(a,b,c,d){if(18>=
b){var e=Z[16*b-1],h=I;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=I.subarray(d>>2,d+64*b>>2);X.uniformMatrix4fv(Y(a),!!c,e)},n:function(a){a=U[a];X.useProgram(a);X.pc=a},qb:function(a,b){X.vertexAttribDivisor(a,b)},rb:function(a,b,c,d,e,h){X.vertexAttribPointer(a,
b,c,!!d,e,h)},k:function(a,b,c,d){X.viewport(a,b,c,d)},Va:function(){f.hc=function(a){0!=Lb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.hc)},Ua:function(){f.mc=function(a){a=a.clipboardData.getData("text");la("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.mc)},Ta:function(a){f.Ic=[];a=G(a);a=document.getElementById(a);f.ic=function(b){b.stopPropagation();b.preventDefault()};f.jc=function(b){b.stopPropagation();b.preventDefault()};f.kc=
function(b){b.stopPropagation();b.preventDefault()};f.lc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.Jc=c;Mb(c.length);var d;for(d=0;d<c.length;d++)la("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Nb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.ic,!1);a.addEventListener("dragleave",f.jc,!1);a.addEventListener("dragover",f.kc,!1);a.addEventListener("drop",f.lc,!1)},Na:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},
q:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ob()});document.body.append(a)},p:function(){document.getElementById("_sokol_app_input_element").focus()},Wa:function(a){a=G(a);f.Tb=document.getElementById(a);f.Tb||console.log("sokol_app.h: invalid target:"+a);f.Tb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Sa:function(){window.removeEventListener("beforeunload",
f.hc)},Ra:function(){window.removeEventListener("paste",f.mc)},Pa:function(a){a=G(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.ic);a.removeEventListener("dragleave",f.jc);a.removeEventListener("dragover",f.kc);a.removeEventListener("drop",f.lc)},v:function(){f.Tb&&f.Tb.requestPointerLock&&f.Tb.requestPointerLock()},Ma:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(F.subarray(c,c+a*b*4));
e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},o:function(){document.getElementById("_sokol_app_input_element").blur()},Oa:function(a){a=G(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=
1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},ub:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=a.next())la("_sargs_add_kvp",["string","string"],[b.value[0],b.value[1]])},db:function(){return f.Sb?f.Sb.bufferSize:0},fb:function(a,b,c){f.Nb=null;f.Sb=null;"undefined"!==typeof AudioContext?f.Nb=new AudioContext({sampleRate:a,latencyHint:"interactive"}):"undefined"!==typeof webkitAudioContext?
f.Nb=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}):(f.Nb=null,console.log("sokol_audio.h: no WebAudio support"));return f.Nb?(console.log("sokol_audio.h: sample rate ",f.Nb.sampleRate),f.Sb=f.Nb.createScriptProcessor(c,0,b),f.Sb.onaudioprocess=function(d){var e=d.outputBuffer.length,h=Pb(e);if(h)for(var g=d.outputBuffer.numberOfChannels,m=0;m<g;m++)for(var n=d.outputBuffer.getChannelData(m),p=0;p<e;p++)n[p]=I[(h>>2)+(g*p+m)]},f.Sb.connect(f.Nb.destination),a=function(){f.Nb&&"suspended"===
f.Nb.state&&f.Nb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},eb:function(){return f.Nb?f.Nb.sampleRate:0},ja:function(){null!==f.Nb&&(f.Sb&&f.Sb.disconnect(),f.Nb.close(),f.Nb=null,f.Sb=null)},ia:function(){return navigator.userAgent.includes("Macintosh")?1:0},i:function(){return performance.now()}};
(function(){function a(e){f.asm=e.exports;ia=f.asm.vb;xa();K=f.asm.Mb;za.unshift(f.asm.wb);L--;f.monitorRunDependencies&&f.monitorRunDependencies(L);0==L&&(null!==Ea&&(clearInterval(Ea),Ea=null),M&&(e=M,M=null,e()))}function b(e){a(e.instance)}function c(e){return Ia().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){B("failed to asynchronously prepare wasm: "+h);A(h)})}var d={a:Qb};L++;f.monitorRunDependencies&&f.monitorRunDependencies(L);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return B("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return C||"function"!==typeof WebAssembly.instantiateStreaming||Fa()||N.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(N,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){B("wasm streaming compile failed: "+h);B("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.wb).apply(null,arguments)};f._emsc_load_data=function(){return(f._emsc_load_data=f.asm.xb).apply(null,arguments)};var Ob=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Ob=f.__sapp_emsc_notify_keyboard_hidden=f.asm.yb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.zb).apply(null,arguments)};
var Lb=f.__sapp_html5_get_ask_leave_site=function(){return(Lb=f.__sapp_html5_get_ask_leave_site=f.asm.Ab).apply(null,arguments)},Mb=f.__sapp_emsc_begin_drop=function(){return(Mb=f.__sapp_emsc_begin_drop=f.asm.Bb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Cb).apply(null,arguments)};var Nb=f.__sapp_emsc_end_drop=function(){return(Nb=f.__sapp_emsc_end_drop=f.asm.Db).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Eb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Fb).apply(null,arguments)};var Pb=f.__saudio_emsc_pull=function(){return(Pb=f.__saudio_emsc_pull=f.asm.Gb).apply(null,arguments)};f.__sargs_add_kvp=function(){return(f.__sargs_add_kvp=f.asm.Hb).apply(null,arguments)};
var S=f._malloc=function(){return(S=f._malloc=f.asm.Ib).apply(null,arguments)},na=f.stackSave=function(){return(na=f.stackSave=f.asm.Jb).apply(null,arguments)},oa=f.stackRestore=function(){return(oa=f.stackRestore=f.asm.Kb).apply(null,arguments)},D=f.stackAlloc=function(){return(D=f.stackAlloc=f.asm.Lb).apply(null,arguments)},Rb;function ea(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}M=function Sb(){Rb||Tb();Rb||(M=Sb)};
function Tb(a){function b(){if(!Rb&&(Rb=!0,f.calledRun=!0,!ja)){O(za);O(Aa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Ub){var c=a,d=f._main;c=c||[];var e=c.length+1,h=D(4*(e+1));H[h>>2]=sa(ba);for(var g=1;g<e;g++)H[(h>>2)+g]=sa(c[g-1]);H[(h>>2)+e]=0;try{var m=d(e,h);if(!(noExitRuntime||0<fa)){if(f.onExit)f.onExit(m);ja=!0}r(m,new ea(m))}catch(n){c=n,c instanceof ea||"unwind"==c||(B("exception thrown: "+c),r(1,c))}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=
f.postRun.shift(),Ca.unshift(c);O(Ca)}}a=a||aa;if(!(0<L)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Da();O(ya);0<L||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Tb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Ub=!0;f.noInitialRun&&(Ub=!1);Tb();
