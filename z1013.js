
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],ca="./this.program",k=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",fa,u,v,fs,w,ha;
if(ea)q=l?require("path").dirname(q)+"/":__dirname+"/",ha=()=>{w||(fs=require("fs"),w=require("path"))},fa=function(a,b){ha();a=w.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")},v=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a},u=(a,b,c)=>{ha();a=w.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/")),ba=process.argv.slice(2),"undefined"!=typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof
x))throw a;}),process.on("unhandledRejection",function(a){throw a;}),k=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof x||y("exiting due to exception: "+b);process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);
b.send(null);return b.responseText},l&&(v=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),u=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};f.print||console.log.bind(console);var y=f.printErr||console.warn.bind(console);Object.assign(f,aa);aa=null;f.arguments&&(ba=f.arguments);
f.thisProgram&&(ca=f.thisProgram);f.quit&&(k=f.quit);var z;f.wasmBinary&&(z=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&ia("no native wasm support detected");var ja,ka=!1;
function la(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var t=(n.length<<2)+1;p=A(t);B(n,C,p,t)}return p},array:function(n){var p=A(n.length);ma.set(n,p);return p}};a=f["_"+a];var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=na()),e[g]=m(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==h&&oa(h);return n}(b)}var pa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function D(a,b){if(a){var c=C,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&pa)a=pa.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var h=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function B(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function qa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ra(a){var b=qa(a)+1,c=A(b);B(a,ma,c,b);return c}var sa,ma,C,ta,ua,E,va,F,G;
function wa(){var a=ja.buffer;sa=a;f.HEAP8=ma=new Int8Array(a);f.HEAP16=ta=new Int16Array(a);f.HEAP32=E=new Int32Array(a);f.HEAPU8=C=new Uint8Array(a);f.HEAPU16=ua=new Uint16Array(a);f.HEAPU32=va=new Uint32Array(a);f.HEAPF32=F=new Float32Array(a);f.HEAPF64=G=new Float64Array(a)}var xa,ya=[],za=[],Aa=[],Ba=[],Ca=[];function Da(){var a=f.preRun.shift();ya.unshift(a)}var H=0,Ea=null,I=null;
function ia(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";y(a);ka=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Fa(){return J.startsWith("data:application/octet-stream;base64,")}var J;J="z1013.wasm";if(!Fa()){var Ga=J;J=f.locateFile?f.locateFile(Ga,q):q+Ga}function Ha(){var a=J;try{if(a==J&&z)return new Uint8Array(z);if(v)return v(a);throw"both async and sync fetching of the wasm failed";}catch(b){ia(b)}}
function Ia(){if(!z&&(da||l)){if("function"==typeof fetch&&!J.startsWith("file://"))return fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return Ha()});if(u)return new Promise(function(a,b){u(J,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ha()})}
function Ja(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Dc;"number"==typeof c?void 0===b.cc?K(c)():K(c)(b.cc):c(void 0===b.cc?null:b.cc)}}}var Ka=[];function K(a){var b=Ka[a];b||(a>=Ka.length&&(Ka.length=a+1),Ka[a]=b=xa.get(a));return b}var La=0;function Ma(){for(var a=L.length-1;0<=a;--a)Na(a);L=[];Oa=[]}var Oa=[];function Pa(){if(La&&Qa.Yb)for(var a=0;a<Oa.length;++a){var b=Oa[a];Oa.splice(a,1);--a;b.Kc.apply(null,b.Ac)}}var L=[];
function Na(a){var b=L[a];b.target.removeEventListener(b.Rb,b.vc,b.Sb);L.splice(a,1)}function M(a){function b(d){++La;Qa=a;Pa();a.Ub(d);Pa();--La}if(a.Tb)a.vc=b,a.target.addEventListener(a.Rb,b,a.Sb),L.push(a),Ra||(Ba.push(Ma),Ra=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].Rb==a.Rb&&Na(c--)}function Sa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Ra,Qa,Ta,Ua,Va,Wa,Xa,Ya,Za,$a=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function N(a){a=2<a?D(a):a;return $a[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function ab(a){return 0>$a.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var bb;bb=ea?()=>{var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:()=>performance.now();
function cb(a,b,c,d,e,h){Ta||(Ta=O(256));a={target:N(a),Rb:h,Tb:d,Ub:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Ta;B(Sa(g.target),C,n+0,128);B(m,C,n+128,128);K(d)(e,n,b)&&g.preventDefault()},Sb:c};M(a)}
function db(a,b,c,d,e,h){Ua||(Ua=O(176));a={target:N(a),Yb:!0,Rb:h,Tb:d,Ub:function(g){var m=Ua;G[m>>3]=g.timeStamp;var n=m>>2;E[n+2]=g.location;E[n+3]=g.ctrlKey;E[n+4]=g.shiftKey;E[n+5]=g.altKey;E[n+6]=g.metaKey;E[n+7]=g.repeat;E[n+8]=g.charCode;E[n+9]=g.keyCode;E[n+10]=g.which;B(g.key||"",C,m+44,32);B(g.code||"",C,m+76,32);B(g.char||"",C,m+108,32);B(g.locale||"",C,m+140,32);K(d)(e,m,b)&&g.preventDefault()},Sb:c};M(a)}
function eb(a,b,c){G[a>>3]=b.timeStamp;a>>=2;E[a+2]=b.screenX;E[a+3]=b.screenY;E[a+4]=b.clientX;E[a+5]=b.clientY;E[a+6]=b.ctrlKey;E[a+7]=b.shiftKey;E[a+8]=b.altKey;E[a+9]=b.metaKey;ta[2*a+20]=b.button;ta[2*a+21]=b.buttons;E[a+11]=b.movementX;E[a+12]=b.movementY;c=ab(c);E[a+13]=b.clientX-c.left;E[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,h){Va||(Va=O(72));a=N(a);M({target:a,Yb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Rb:h,Tb:d,Ub:function(g){g=g||event;eb(Va,g,a);K(d)(e,Va,b)&&g.preventDefault()},Sb:c})}function fb(a,b,c,d,e){Wa||(Wa=O(260));M({target:a,Rb:e,Tb:d,Ub:function(h){h=h||event;var g=Wa,m=document.pointerLockElement||document.Vb||document.hc||document.fc;E[g>>2]=!!m;var n=m&&m.id?m.id:"";B(Sa(m),C,g+4,128);B(n,C,g+132,128);K(d)(20,g,b)&&h.preventDefault()},Sb:c})}
function gb(a,b,c,d,e){M({target:a,Rb:e,Tb:d,Ub:function(h){h=h||event;K(d)(38,0,b)&&h.preventDefault()},Sb:c})}
function hb(a,b,c,d){Xa||(Xa=O(36));a=N(a);M({target:a,Rb:"resize",Tb:d,Ub:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=Xa;E[g>>2]=e.detail;E[g+4>>2]=h.clientWidth;E[g+8>>2]=h.clientHeight;E[g+12>>2]=innerWidth;E[g+16>>2]=innerHeight;E[g+20>>2]=outerWidth;E[g+24>>2]=outerHeight;E[g+28>>2]=pageXOffset;E[g+32>>2]=pageYOffset;K(d)(10,g,b)&&e.preventDefault()}}},Sb:c})}
function ib(a,b,c,d,e,h){Ya||(Ya=O(1696));a=N(a);M({target:a,Yb:"touchstart"==h||"touchend"==h,Rb:h,Tb:d,Ub:function(g){for(var m,n={},p=g.touches,t=0;t<p.length;++t)m=p[t],m.jc=m.kc=0,n[m.identifier]=m;for(t=0;t<g.changedTouches.length;++t)m=g.changedTouches[t],m.jc=1,n[m.identifier]=m;for(t=0;t<g.targetTouches.length;++t)n[g.targetTouches[t].identifier].kc=1;p=Ya;G[p>>3]=g.timeStamp;var r=p>>2;E[r+3]=g.ctrlKey;E[r+4]=g.shiftKey;E[r+5]=g.altKey;E[r+6]=g.metaKey;r+=7;var ob=ab(a),pb=0;for(t in n)if(m=
n[t],E[r]=m.identifier,E[r+1]=m.screenX,E[r+2]=m.screenY,E[r+3]=m.clientX,E[r+4]=m.clientY,E[r+5]=m.pageX,E[r+6]=m.pageY,E[r+7]=m.jc,E[r+8]=m.kc,E[r+9]=m.clientX-ob.left,E[r+10]=m.clientY-ob.top,r+=13,31<++pb)break;E[p+8>>2]=pb;K(d)(e,p,b)&&g.preventDefault()},Sb:c})}function jb(a,b,c,d,e,h){a={target:N(a),Rb:h,Tb:d,Ub:function(g){g=g||event;K(d)(e,0,b)&&g.preventDefault()},Sb:c};M(a)}
function kb(a,b,c,d){Za||(Za=O(104));M({target:a,Yb:!0,Rb:"wheel",Tb:d,Ub:function(e){e=e||event;var h=Za;eb(h,e,a);G[h+72>>3]=e.deltaX;G[h+80>>3]=e.deltaY;G[h+88>>3]=e.deltaZ;E[h+96>>2]=e.deltaMode;K(d)(9,h,b)&&e.preventDefault()},Sb:c})}
function lb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function mb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function nb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}function qb(a){a.Gc=a.getExtension("WEBGL_multi_draw")}
var rb=1,sb=[],Q=[],tb=[],R=[],S=[],T=[],ub=[],vb={};function U(a){wb||(wb=a)}function xb(a){for(var b=rb++,c=a.length;c<b;c++)a[c]=null;return b}function yb(a,b){a.Vb||(a.Vb=a.getContext,a.getContext=function(d,e){e=a.Vb(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=a.getContext("webgl",b);return c?zb(c,b):0}function zb(a,b){var c=xb(ub),d={Ec:c,attributes:b,version:b.yc,bc:a};a.canvas&&(a.canvas.zc=d);ub[c]=d;("undefined"==typeof b.ic||b.ic)&&Ab(d);return c}
function Ab(a){a||(a=Bb);if(!a.xc){a.xc=!0;var b=a.bc;lb(b);mb(b);nb(b);b.Cc=b.getExtension("EXT_disjoint_timer_query");qb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var wb,Bb,Cb=["default","low-power","high-performance"];function Db(a,b,c,d){for(var e=0;e<a;e++){var h=V[c](),g=h&&xb(d);h?(h.name=g,d[g]=h):U(1282);E[b+4*e>>2]=g}}
function Eb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=V.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=V.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:U(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)E[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){U(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:U(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}E[b>>2]=c}else U(1281)}function Fb(a){var b=qa(a)+1,c=O(b);B(a,C,c,b);return c}
function Gb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Hb(a,b,c,d,e){a-=5120;a=1==a?C:4==a?E:6==a?F:5==a||28922==a?va:ua;var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}function W(a){var b=V.uc;if(b){var c=b.Xb[a];"number"==typeof c&&(b.Xb[a]=c=V.getUniformLocation(b,b.rc[a]+(0<c?"["+c+"]":"")));return c}U(1282)}for(var X=[],Y=[],V,Ib=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=Ib.subarray(0,Z+1);
var Jb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Jb.subarray(0,Z+1);
var Tb={F:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},L:function(a,b,c){a=N(a);if(!a)return-4;a=ab(a);G[b>>3]=a.width;G[c>>3]=a.height;return 0},C:bb,Za:function(a,b,c){C.copyWithin(a,b,b+c)},qb:function(a,b){function c(d){K(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Ya:function(a){var b=C.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math;d=Math.max(a,d);e=e.min.call(e,2147483648,
d+(65536-d%65536)%65536);a:{try{ja.grow(e-sa.byteLength+65535>>>16);wa();var h=1;break a}catch(g){}h=void 0}if(h)return!0}return!1},T:function(a,b,c,d){cb(a,b,c,d,12,"blur");return 0},oa:function(a,b,c){a=N(a);if(!a)return-4;a.width=b;a.height=c;return 0},U:function(a,b,c,d){cb(a,b,c,d,13,"focus");return 0},ba:function(a,b,c,d){db(a,b,c,d,2,"keydown");return 0},$:function(a,b,c,d){db(a,b,c,d,1,"keypress");return 0},aa:function(a,b,c,d){db(a,b,c,d,3,"keyup");return 0},ha:function(a,b,c,d){P(a,b,c,
d,5,"mousedown");return 0},ea:function(a,b,c,d){P(a,b,c,d,33,"mouseenter");return 0},da:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},fa:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},ga:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},W:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Vb||document.body.hc||document.body.fc))return-1;a=N(a);if(!a)return-4;fb(a,b,c,d,"pointerlockchange");fb(a,b,c,d,"mozpointerlockchange");fb(a,b,c,d,
"webkitpointerlockchange");fb(a,b,c,d,"mspointerlockchange");return 0},V:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Vb||document.body.hc||document.body.fc))return-1;a=N(a);if(!a)return-4;gb(a,b,c,d,"pointerlockerror");gb(a,b,c,d,"mozpointerlockerror");gb(a,b,c,d,"webkitpointerlockerror");gb(a,b,c,d,"mspointerlockerror");return 0},za:function(a,b,c,d){hb(a,b,c,d);return 0},X:function(a,b,c,d){ib(a,b,c,d,25,"touchcancel");return 0},Y:function(a,b,c,d){ib(a,b,c,
d,23,"touchend");return 0},Z:function(a,b,c,d){ib(a,b,c,d,24,"touchmove");return 0},_:function(a,b,c,d){ib(a,b,c,d,22,"touchstart");return 0},S:function(a,b,c,d){jb(a,b,c,d,31,"webglcontextlost");return 0},R:function(a,b,c,d){jb(a,b,c,d,32,"webglcontextrestored");return 0},ca:function(a,b,c,d){a=N(a);return"undefined"!=typeof a.onwheel?(kb(a,b,c,d),0):-1},ia:function(a,b){b>>=2;b={alpha:!!E[b],depth:!!E[b+1],stencil:!!E[b+2],antialias:!!E[b+3],premultipliedAlpha:!!E[b+4],preserveDrawingBuffer:!!E[b+
5],powerPreference:Cb[E[b+6]],failIfMajorPerformanceCaveat:!!E[b+7],yc:E[b+8],Fc:E[b+9],ic:E[b+10],wc:E[b+11],Hc:E[b+12],Ic:E[b+13]};a=N(a);return!a||b.wc?0:yb(a,b)},Wa:function(a,b){a=ub[a];b=D(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&lb(V);"OES_vertex_array_object"==b&&mb(V);"WEBGL_draw_buffers"==b&&nb(V);"WEBGL_multi_draw"==b&&qb(V);return!!a.bc.getExtension(b)},fb:function(a){a>>=2;for(var b=0;14>b;++b)E[a+b]=0;E[a]=E[a+1]=E[a+3]=E[a+4]=E[a+8]=E[a+10]=1},Xa:function(a){Bb=
ub[a];f.Bc=V=Bb&&Bb.bc;return!a||V?0:-5},b:function(a){V.activeTexture(a)},H:function(a,b){V.attachShader(Q[a],T[b])},c:function(a,b){V.bindBuffer(a,sb[b])},g:function(a,b){V.bindFramebuffer(a,tb[b])},Ca:function(a,b){V.bindRenderbuffer(a,R[b])},a:function(a,b){V.bindTexture(a,S[b])},M:function(a,b,c,d){V.blendColor(a,b,c,d)},N:function(a,b){V.blendEquationSeparate(a,b)},O:function(a,b,c,d){V.blendFuncSeparate(a,b,c,d)},Ea:function(a,b,c,d){V.bufferData(a,c?C.subarray(c,c+b):b,d)},n:function(a,b,
c,d){V.bufferSubData(a,b,C.subarray(d,d+c))},p:function(a){return V.checkFramebufferStatus(a)},rb:function(a){V.clear(a)},tb:function(a,b,c,d){V.clearColor(a,b,c,d)},ma:function(a){V.clearDepth(a)},sb:function(a){V.clearStencil(a)},o:function(a,b,c,d){V.colorMask(!!a,!!b,!!c,!!d)},ra:function(a){V.compileShader(T[a])},ya:function(a,b,c,d,e,h,g,m){V.compressedTexImage2D(a,b,c,d,e,h,m?C.subarray(m,m+g):null)},wa:function(){var a=xb(Q),b=V.createProgram();b.name=a;b.ac=b.Zb=b.$b=0;b.ec=1;Q[a]=b;return a},
ta:function(a){var b=xb(T);T[b]=V.createShader(a);return b},I:function(a){V.cullFace(a)},Ka:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=sb[d];e&&(V.deleteBuffer(e),e.name=0,sb[d]=null)}},d:function(a,b){for(var c=0;c<a;++c){var d=E[b+4*c>>2],e=tb[d];e&&(V.deleteFramebuffer(e),e.name=0,tb[d]=null)}},r:function(a){if(a){var b=Q[a];b?(V.deleteProgram(b),b.name=0,Q[a]=null):U(1281)}},Q:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=R[d];e&&(V.deleteRenderbuffer(e),e.name=0,R[d]=null)}},
w:function(a){if(a){var b=T[a];b?(V.deleteShader(b),T[a]=null):U(1281)}},Ja:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=S[d];e&&(V.deleteTexture(e),e.name=0,S[d]=null)}},z:function(a){V.depthFunc(a)},y:function(a){V.depthMask(!!a)},e:function(a){V.disable(a)},P:function(a){V.disableVertexAttribArray(a)},$a:function(a,b,c){V.drawArrays(a,b,c)},ab:function(a,b,c,d){V.drawArraysInstanced(a,b,c,d)},bb:function(a,b,c,d){V.drawElements(a,b,c,d)},cb:function(a,b,c,d,e){V.drawElementsInstanced(a,
b,c,d,e)},i:function(a){V.enable(a)},nb:function(a){V.enableVertexAttribArray(a)},k:function(a,b,c,d){V.framebufferRenderbuffer(a,b,c,R[d])},h:function(a,b,c,d,e){V.framebufferTexture2D(a,b,c,S[d],e)},J:function(a){V.frontFace(a)},Fa:function(a,b){Db(a,b,"createBuffer",sb)},m:function(a,b){Db(a,b,"createFramebuffer",tb)},Da:function(a,b){Db(a,b,"createRenderbuffer",R)},Aa:function(a,b){Db(a,b,"createTexture",S)},pa:function(a,b){return V.getAttribLocation(Q[a],D(b))},f:function(a,b){Eb(a,b)},ua:function(a,
b,c,d){a=V.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(E[c>>2]=b)},G:function(a,b,c){if(c)if(a>=rb)U(1281);else if(a=Q[a],35716==b)a=V.getProgramInfoLog(a),null===a&&(a="(unknown error)"),E[c>>2]=a.length+1;else if(35719==b){if(!a.ac)for(b=0;b<V.getProgramParameter(a,35718);++b)a.ac=Math.max(a.ac,V.getActiveUniform(a,b).name.length+1);E[c>>2]=a.ac}else if(35722==b){if(!a.Zb)for(b=0;b<V.getProgramParameter(a,35721);++b)a.Zb=Math.max(a.Zb,V.getActiveAttrib(a,b).name.length+
1);E[c>>2]=a.Zb}else if(35381==b){if(!a.$b)for(b=0;b<V.getProgramParameter(a,35382);++b)a.$b=Math.max(a.$b,V.getActiveUniformBlockName(a,b).length+1);E[c>>2]=a.$b}else E[c>>2]=V.getProgramParameter(a,b);else U(1281)},qa:function(a,b,c,d){a=V.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(E[c>>2]=b)},D:function(a,b,c){c?35716==b?(a=V.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),E[c>>2]=a?a.length+1:0):35720==b?(a=V.getShaderSource(T[a]),E[c>>2]=a?a.length+
1:0):E[c>>2]=V.getShaderParameter(T[a],b):U(1281)},La:function(a){var b=vb[a];if(!b){switch(a){case 7939:b=V.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Fb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=V.getParameter(a))||U(1280);b=b&&Fb(b);break;case 7938:b=Fb("OpenGL ES 2.0 ("+V.getParameter(7938)+")");break;case 35724:b=V.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b=
"OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Fb(b);break;default:U(1280)}vb[a]=b}return b},q:function(a,b){b=D(b);if(a=Q[a]){var c=a,d=c.Xb,e=c.sc,h;if(!d)for(c.Xb=d={},c.rc={},h=0;h<V.getProgramParameter(c,35718);++h){var g=V.getActiveUniform(c,h);var m=g.name;g=g.size;var n=Gb(m);n=0<n?m.slice(0,n):m;var p=c.ec;c.ec+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.rc[p++]=n}c=a.Xb;d=0;e=b;h=Gb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.sc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||V.getUniformLocation(a,
b)))return d}else U(1281);return-1},va:function(a){a=Q[a];V.linkProgram(a);a.Xb=0;a.sc={}},K:function(a,b){V.polygonOffset(a,b)},Ba:function(a,b,c,d){V.renderbufferStorage(a,b,c,d)},na:function(a,b,c,d){V.scissor(a,b,c,d)},sa:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?E[d+4*h>>2]:-1;e+=D(E[c+4*h>>2],0>g?void 0:g)}V.shaderSource(T[a],e)},Ha:function(a,b,c){V.stencilFunc(a,b,c)},la:function(a,b,c,d){V.stencilFuncSeparate(a,b,c,d)},x:function(a){V.stencilMask(a)},Ga:function(a,b,c){V.stencilOp(a,
b,c)},ka:function(a,b,c,d){V.stencilOpSeparate(a,b,c,d)},xa:function(a,b,c,d,e,h,g,m,n){V.texImage2D(a,b,c,d,e,h,g,m,n?Hb(m,g,d,e,n):null)},j:function(a,b,c){V.texParameteri(a,b,c)},_a:function(a,b,c,d,e,h,g,m,n){var p=null;n&&(p=Hb(m,g,e,h,n));V.texSubImage2D(a,b,c,d,e,h,g,m,p)},mb:function(a,b,c){if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>2];else d=F.subarray(c>>2,c+4*b>>2);V.uniform1fv(W(a),d)},E:function(a,b){V.uniform1i(W(a),b)},ib:function(a,b,c){if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=
E[c+4*e>>2];else d=E.subarray(c>>2,c+4*b>>2);V.uniform1iv(W(a),d)},lb:function(a,b,c){if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,c+8*b>>2);V.uniform2fv(W(a),d)},hb:function(a,b,c){if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2];else d=E.subarray(c>>2,c+8*b>>2);V.uniform2iv(W(a),d)},kb:function(a,b,c){if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+
8)>>2];else d=F.subarray(c>>2,c+12*b>>2);V.uniform3fv(W(a),d)},gb:function(a,b,c){if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2];else d=E.subarray(c>>2,c+12*b>>2);V.uniform3iv(W(a),d)},jb:function(a,b,c){if(72>=b){var d=X[4*b-1],e=F;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=F.subarray(c>>2,c+16*b>>2);V.uniform4fv(W(a),d)},eb:function(a,b,c){if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=
4)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2],d[e+3]=E[c+(4*e+12)>>2];else d=E.subarray(c>>2,c+16*b>>2);V.uniform4iv(W(a),d)},db:function(a,b,c,d){if(18>=b){var e=X[16*b-1],h=F;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=F.subarray(d>>2,d+64*b>>
2);V.uniformMatrix4fv(W(a),!!c,e)},l:function(a){a=Q[a];V.useProgram(a);V.uc=a},ob:function(a,b){V.vertexAttribDivisor(a,b)},pb:function(a,b,c,d,e,h){V.vertexAttribPointer(a,b,c,!!d,e,h)},v:function(a,b,c,d){V.viewport(a,b,c,d)},Ua:function(){f.lc=function(a){0!=Kb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.lc)},Ta:function(){f.qc=function(a){a=a.clipboardData.getData("text");la("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.qc)},Sa:function(a){f.Jc=
[];a=D(a);a=document.getElementById(a);f.mc=function(b){b.stopPropagation();b.preventDefault()};f.nc=function(b){b.stopPropagation();b.preventDefault()};f.oc=function(b){b.stopPropagation();b.preventDefault()};f.pc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.dc=c;Lb(c.length);var d;for(d=0;d<c.length;d++)la("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Mb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.mc,!1);a.addEventListener("dragleave",f.nc,!1);
a.addEventListener("dragover",f.oc,!1);a.addEventListener("drop",f.pc,!1)},Na:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},u:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Nb()});document.body.append(a)},vb:function(a){return 0>a||a>=f.dc.length?0:f.dc[a].size},ub:function(a,b,c,d,e){var h=new FileReader;h.onload=function(g){g=g.target.result;
g.byteLength>d?Ob(a,0,1,b,0,c,d,e):(C.set(new Uint8Array(g),c),Ob(a,1,0,b,g.byteLength,c,d,e))};h.onerror=function(){Ob(a,0,2,b,0,c,d,e)};h.readAsArrayBuffer(f.dc[a])},t:function(){document.getElementById("_sokol_app_input_element").focus()},Ia:function(a){a=D(a);f.Wb=document.getElementById(a);f.Wb||console.log("sokol_app.h: invalid target:"+a);f.Wb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Qa:function(){window.removeEventListener("beforeunload",
f.lc)},Pa:function(){window.removeEventListener("paste",f.qc)},Oa:function(a){a=D(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.mc);a.removeEventListener("dragleave",f.nc);a.removeEventListener("dragover",f.oc);a.removeEventListener("drop",f.pc)},B:function(){f.Wb&&f.Wb.requestPointerLock&&f.Wb.requestPointerLock()},Ma:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(C.subarray(c,c+a*b*4));
e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},s:function(){document.getElementById("_sokol_app_input_element").blur()},Ra:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=a.next())la("_sargs_add_kvp",["string","string"],[b.value[0],b.value[1]])},Va:function(){if(f.tc)return"suspended"===f.tc.state?1:0},A:function(a,b,c,d,e,h){b=D(b);var g=new XMLHttpRequest;
g.open("GET",b);g.responseType="arraybuffer";var m=0<d;m&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));g.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!m){var n=new Uint8Array(g.response),p=n.length;p<=h?(C.set(n,e),Pb(a,d,p)):Qb(a)}else Rb(a,this.status)};g.send()},ja:function(a,b){b=D(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");
Sb(a,d)}else Rb(a,this.status)};c.send()}};
(function(){function a(e){f.asm=e.exports;ja=f.asm.wb;wa();xa=f.asm.Nb;za.unshift(f.asm.xb);H--;f.monitorRunDependencies&&f.monitorRunDependencies(H);0==H&&(null!==Ea&&(clearInterval(Ea),Ea=null),I&&(e=I,I=null,e()))}function b(e){a(e.instance)}function c(e){return Ia().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){y("failed to asynchronously prepare wasm: "+h);ia(h)})}var d={a:Tb};H++;f.monitorRunDependencies&&f.monitorRunDependencies(H);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return y("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return z||"function"!=typeof WebAssembly.instantiateStreaming||Fa()||J.startsWith("file://")||"function"!=typeof fetch?c(b):fetch(J,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){y("wasm streaming compile failed: "+h);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.xb).apply(null,arguments)};var Nb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Nb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.yb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.zb).apply(null,arguments)};
var Kb=f.__sapp_html5_get_ask_leave_site=function(){return(Kb=f.__sapp_html5_get_ask_leave_site=f.asm.Ab).apply(null,arguments)},Lb=f.__sapp_emsc_begin_drop=function(){return(Lb=f.__sapp_emsc_begin_drop=f.asm.Bb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Cb).apply(null,arguments)};
var Mb=f.__sapp_emsc_end_drop=function(){return(Mb=f.__sapp_emsc_end_drop=f.asm.Db).apply(null,arguments)},Ob=f.__sapp_emsc_invoke_fetch_cb=function(){return(Ob=f.__sapp_emsc_invoke_fetch_cb=f.asm.Eb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Fb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Gb).apply(null,arguments)};f.__sargs_add_kvp=function(){return(f.__sargs_add_kvp=f.asm.Hb).apply(null,arguments)};
var Sb=f.__sfetch_emsc_head_response=function(){return(Sb=f.__sfetch_emsc_head_response=f.asm.Ib).apply(null,arguments)},Pb=f.__sfetch_emsc_get_response=function(){return(Pb=f.__sfetch_emsc_get_response=f.asm.Jb).apply(null,arguments)},Rb=f.__sfetch_emsc_failed_http_status=function(){return(Rb=f.__sfetch_emsc_failed_http_status=f.asm.Kb).apply(null,arguments)},Qb=f.__sfetch_emsc_failed_buffer_too_small=function(){return(Qb=f.__sfetch_emsc_failed_buffer_too_small=f.asm.Lb).apply(null,arguments)},O=
f._malloc=function(){return(O=f._malloc=f.asm.Mb).apply(null,arguments)},na=f.stackSave=function(){return(na=f.stackSave=f.asm.Ob).apply(null,arguments)},oa=f.stackRestore=function(){return(oa=f.stackRestore=f.asm.Pb).apply(null,arguments)},A=f.stackAlloc=function(){return(A=f.stackAlloc=f.asm.Qb).apply(null,arguments)},Ub;function x(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}I=function Vb(){Ub||Wb();Ub||(I=Vb)};
function Wb(a){function b(){if(!Ub&&(Ub=!0,f.calledRun=!0,!ka)){Ja(za);Ja(Aa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Xb){var c=a,d=f._main;c=c||[];var e=c.length+1,h=A(4*(e+1));E[h>>2]=ra(ca);for(var g=1;g<e;g++)E[(h>>2)+g]=ra(c[g-1]);E[(h>>2)+e]=0;try{var m=d(e,h);if(!noExitRuntime){if(f.onExit)f.onExit(m);ka=!0}k(m,new x(m))}catch(n){n instanceof x||"unwind"==n||k(1,n)}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),
Ca.unshift(c);Ja(Ca)}}a=a||ba;if(!(0<H)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Da();Ja(ya);0<H||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Wb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Xb=!0;f.noInitialRun&&(Xb=!1);Wb();
