
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],ca="./this.program",k=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",fa,u,v,fs,w,ha;
if(ea)q=l?require("path").dirname(q)+"/":__dirname+"/",ha=()=>{w||(fs=require("fs"),w=require("path"))},fa=function(a,b){ha();a=w.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")},v=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a},u=(a,b,c)=>{ha();a=w.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/")),ba=process.argv.slice(2),"undefined"!=typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof
x))throw a;}),process.on("unhandledRejection",function(a){throw a;}),k=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof x||y("exiting due to exception: "+b);process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);
b.send(null);return b.responseText},l&&(v=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),u=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ia=f.print||console.log.bind(console),y=f.printErr||console.warn.bind(console);Object.assign(f,aa);aa=null;f.arguments&&(ba=f.arguments);
f.thisProgram&&(ca=f.thisProgram);f.quit&&(k=f.quit);var z;f.wasmBinary&&(z=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&A("no native wasm support detected");var ja,ka=!1;
function la(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var r=(n.length<<2)+1;p=B(r);C(n,D,p,r)}return p},array:function(n){var p=B(n.length);ma.set(n,p);return p}};a=f["_"+a];var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=na()),e[g]=m(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==h&&oa(h);return n}(b)}var pa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function qa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&pa)return pa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function E(a,b){return a?qa(D,a,b):""}
function C(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function ra(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function sa(a){var b=ra(a)+1,c=B(b);C(a,ma,c,b);return c}var ta,ma,D,ua,va,F,G,H,I;
function wa(){var a=ja.buffer;ta=a;f.HEAP8=ma=new Int8Array(a);f.HEAP16=ua=new Int16Array(a);f.HEAP32=F=new Int32Array(a);f.HEAPU8=D=new Uint8Array(a);f.HEAPU16=va=new Uint16Array(a);f.HEAPU32=G=new Uint32Array(a);f.HEAPF32=H=new Float32Array(a);f.HEAPF64=I=new Float64Array(a)}var xa,ya=[],za=[],Aa=[],Ba=[],Ca=[];function Da(){var a=f.preRun.shift();ya.unshift(a)}var J=0,Ea=null,K=null;
function A(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";y(a);ka=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Fa(){return L.startsWith("data:application/octet-stream;base64,")}var L;L="lc80.wasm";if(!Fa()){var Ga=L;L=f.locateFile?f.locateFile(Ga,q):q+Ga}function Ha(){var a=L;try{if(a==L&&z)return new Uint8Array(z);if(v)return v(a);throw"both async and sync fetching of the wasm failed";}catch(b){A(b)}}
function Ia(){if(!z&&(da||l)){if("function"==typeof fetch&&!L.startsWith("file://"))return fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Ha()});if(u)return new Promise(function(a,b){u(L,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ha()})}
function Ja(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Ic;"number"==typeof c?void 0===b.kc?M(c)():M(c)(b.kc):c(void 0===b.kc?null:b.kc)}}}var Ka=[];function M(a){var b=Ka[a];b||(a>=Ka.length&&(Ka.length=a+1),Ka[a]=b=xa.get(a));return b}var La=0;function Ma(){for(var a=N.length-1;0<=a;--a)Na(a);N=[];Oa=[]}var Oa=[];function Pa(){if(La&&Qa.ec)for(var a=0;a<Oa.length;++a){var b=Oa[a];Oa.splice(a,1);--a;b.Qc.apply(null,b.Fc)}}var N=[];
function Na(a){var b=N[a];b.target.removeEventListener(b.Xb,b.Ac,b.Yb);N.splice(a,1)}function O(a){function b(d){++La;Qa=a;Pa();a.$b(d);Pa();--La}if(a.Zb)a.Ac=b,a.target.addEventListener(a.Xb,b,a.Yb),N.push(a),Ra||(Ba.push(Ma),Ra=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].Xb==a.Xb&&Na(c--)}function Sa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Ra,Qa,Ta,Ua,Va,Wa,Xa,Ya,Za,$a=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function P(a){a=2<a?E(a):a;return $a[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function ab(a){return 0>$a.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var bb;bb=ea?()=>{var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:()=>performance.now();
function cb(a,b,c,d,e,h){Ta||(Ta=Q(256));a={target:P(a),Xb:h,Zb:d,$b:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Ta;C(Sa(g.target),D,n+0,128);C(m,D,n+128,128);M(d)(e,n,b)&&g.preventDefault()},Yb:c};O(a)}
function db(a,b,c,d,e,h){Ua||(Ua=Q(176));a={target:P(a),ec:!0,Xb:h,Zb:d,$b:function(g){var m=Ua;I[m>>3]=g.timeStamp;var n=m>>2;F[n+2]=g.location;F[n+3]=g.ctrlKey;F[n+4]=g.shiftKey;F[n+5]=g.altKey;F[n+6]=g.metaKey;F[n+7]=g.repeat;F[n+8]=g.charCode;F[n+9]=g.keyCode;F[n+10]=g.which;C(g.key||"",D,m+44,32);C(g.code||"",D,m+76,32);C(g.char||"",D,m+108,32);C(g.locale||"",D,m+140,32);M(d)(e,m,b)&&g.preventDefault()},Yb:c};O(a)}
function eb(a,b,c){I[a>>3]=b.timeStamp;a>>=2;F[a+2]=b.screenX;F[a+3]=b.screenY;F[a+4]=b.clientX;F[a+5]=b.clientY;F[a+6]=b.ctrlKey;F[a+7]=b.shiftKey;F[a+8]=b.altKey;F[a+9]=b.metaKey;ua[2*a+20]=b.button;ua[2*a+21]=b.buttons;F[a+11]=b.movementX;F[a+12]=b.movementY;c=ab(c);F[a+13]=b.clientX-c.left;F[a+14]=b.clientY-c.top}
function R(a,b,c,d,e,h){Va||(Va=Q(72));a=P(a);O({target:a,ec:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Xb:h,Zb:d,$b:function(g){g=g||event;eb(Va,g,a);M(d)(e,Va,b)&&g.preventDefault()},Yb:c})}function fb(a,b,c,d,e){Wa||(Wa=Q(260));O({target:a,Xb:e,Zb:d,$b:function(h){h=h||event;var g=Wa,m=document.pointerLockElement||document.bc||document.nc||document.mc;F[g>>2]=!!m;var n=m&&m.id?m.id:"";C(Sa(m),D,g+4,128);C(n,D,g+132,128);M(d)(20,g,b)&&h.preventDefault()},Yb:c})}
function gb(a,b,c,d,e){O({target:a,Xb:e,Zb:d,$b:function(h){h=h||event;M(d)(38,0,b)&&h.preventDefault()},Yb:c})}
function hb(a,b,c,d){Xa||(Xa=Q(36));a=P(a);O({target:a,Xb:"resize",Zb:d,$b:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=Xa;F[g>>2]=e.detail;F[g+4>>2]=h.clientWidth;F[g+8>>2]=h.clientHeight;F[g+12>>2]=innerWidth;F[g+16>>2]=innerHeight;F[g+20>>2]=outerWidth;F[g+24>>2]=outerHeight;F[g+28>>2]=pageXOffset;F[g+32>>2]=pageYOffset;M(d)(10,g,b)&&e.preventDefault()}}},Yb:c})}
function ib(a,b,c,d,e,h){Ya||(Ya=Q(1696));a=P(a);O({target:a,ec:"touchstart"==h||"touchend"==h,Xb:h,Zb:d,$b:function(g){for(var m,n={},p=g.touches,r=0;r<p.length;++r)m=p[r],m.pc=m.qc=0,n[m.identifier]=m;for(r=0;r<g.changedTouches.length;++r)m=g.changedTouches[r],m.pc=1,n[m.identifier]=m;for(r=0;r<g.targetTouches.length;++r)n[g.targetTouches[r].identifier].qc=1;p=Ya;I[p>>3]=g.timeStamp;var t=p>>2;F[t+3]=g.ctrlKey;F[t+4]=g.shiftKey;F[t+5]=g.altKey;F[t+6]=g.metaKey;t+=7;var nb=ab(a),ob=0;for(r in n)if(m=
n[r],F[t]=m.identifier,F[t+1]=m.screenX,F[t+2]=m.screenY,F[t+3]=m.clientX,F[t+4]=m.clientY,F[t+5]=m.pageX,F[t+6]=m.pageY,F[t+7]=m.pc,F[t+8]=m.qc,F[t+9]=m.clientX-nb.left,F[t+10]=m.clientY-nb.top,t+=13,31<++ob)break;F[p+8>>2]=ob;M(d)(e,p,b)&&g.preventDefault()},Yb:c})}function jb(a,b,c,d,e,h){a={target:P(a),Xb:h,Zb:d,$b:function(g){g=g||event;M(d)(e,0,b)&&g.preventDefault()},Yb:c};O(a)}
function kb(a,b,c,d){Za||(Za=Q(104));O({target:a,ec:!0,Xb:"wheel",Zb:d,$b:function(e){e=e||event;var h=Za;eb(h,e,a);I[h+72>>3]=e.deltaX;I[h+80>>3]=e.deltaY;I[h+88>>3]=e.deltaZ;F[h+96>>2]=e.deltaMode;M(d)(9,h,b)&&e.preventDefault()},Yb:c})}
function lb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function mb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function pb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}function qb(a){a.Lc=a.getExtension("WEBGL_multi_draw")}
var rb=1,sb=[],S=[],tb=[],ub=[],vb=[],T=[],wb=[],xb={};function U(a){yb||(yb=a)}function zb(a){for(var b=rb++,c=a.length;c<b;c++)a[c]=null;return b}function Ab(a,b){a.bc||(a.bc=a.getContext,a.getContext=function(d,e){e=a.bc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=a.getContext("webgl",b);return c?Bb(c,b):0}function Bb(a,b){var c=zb(wb),d={Jc:c,attributes:b,version:b.Dc,jc:a};a.canvas&&(a.canvas.Ec=d);wb[c]=d;("undefined"==typeof b.oc||b.oc)&&Cb(d);return c}
function Cb(a){a||(a=Db);if(!a.Cc){a.Cc=!0;var b=a.jc;lb(b);mb(b);pb(b);b.Hc=b.getExtension("EXT_disjoint_timer_query");qb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var yb,Db,Eb=["default","low-power","high-performance"],Fb=[null,[],[]];function Gb(a,b,c,d){for(var e=0;e<a;e++){var h=V[c](),g=h&&zb(d);h?(h.name=g,d[g]=h):U(1282);F[b+4*e>>2]=g}}
function Hb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=V.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=V.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:U(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){U(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:U(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}F[b>>2]=c}else U(1281)}function Ib(a){var b=ra(a)+1,c=Q(b);C(a,D,c,b);return c}
function Jb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Kb(a,b,c,d,e){a-=5120;a=1==a?D:4==a?F:6==a?H:5==a||28922==a?G:va;var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}function W(a){var b=V.zc;if(b){var c=b.dc[a];"number"==typeof c&&(b.dc[a]=c=V.getUniformLocation(b,b.xc[a]+(0<c?"["+c+"]":"")));return c}U(1282)}for(var X=[],Y=[],V,Lb=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=Lb.subarray(0,Z+1);var Mb=new Int32Array(288);
for(Z=0;288>Z;++Z)Y[Z]=Mb.subarray(0,Z+1);
var Sb={ga:function(){return 0},bb:function(){return 0},cb:function(){},Ya:function(){A("")},M:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},Q:function(a,b,c){a=P(a);if(!a)return-4;a=ab(a);I[b>>3]=a.width;I[c>>3]=a.height;return 0},x:bb,_a:function(a,b,c){D.copyWithin(a,b,b+c)},Ga:function(a,b){function c(d){M(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Za:function(a){var b=D.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+
.2/c);d=Math.min(d,a+100663296);var e=Math;d=Math.max(a,d);e=e.min.call(e,2147483648,d+(65536-d%65536)%65536);a:{try{ja.grow(e-ta.byteLength+65535>>>16);wa();var h=1;break a}catch(g){}h=void 0}if(h)return!0}return!1},R:function(a,b,c,d){cb(a,b,c,d,12,"blur");return 0},K:function(a,b,c){a=P(a);if(!a)return-4;a.width=b;a.height=c;return 0},S:function(a,b,c,d){cb(a,b,c,d,13,"focus");return 0},$:function(a,b,c,d){db(a,b,c,d,2,"keydown");return 0},Z:function(a,b,c,d){db(a,b,c,d,1,"keypress");return 0},
_:function(a,b,c,d){db(a,b,c,d,3,"keyup");return 0},ja:function(a,b,c,d){R(a,b,c,d,5,"mousedown");return 0},ca:function(a,b,c,d){R(a,b,c,d,33,"mouseenter");return 0},ba:function(a,b,c,d){R(a,b,c,d,34,"mouseleave");return 0},da:function(a,b,c,d){R(a,b,c,d,8,"mousemove");return 0},fa:function(a,b,c,d){R(a,b,c,d,6,"mouseup");return 0},U:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.bc||document.body.nc||document.body.mc))return-1;a=P(a);if(!a)return-4;
fb(a,b,c,d,"pointerlockchange");fb(a,b,c,d,"mozpointerlockchange");fb(a,b,c,d,"webkitpointerlockchange");fb(a,b,c,d,"mspointerlockchange");return 0},T:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.bc||document.body.nc||document.body.mc))return-1;a=P(a);if(!a)return-4;gb(a,b,c,d,"pointerlockerror");gb(a,b,c,d,"mozpointerlockerror");gb(a,b,c,d,"webkitpointerlockerror");gb(a,b,c,d,"mspointerlockerror");return 0},Qa:function(a,b,c,d){hb(a,b,c,d);return 0},V:function(a,
b,c,d){ib(a,b,c,d,25,"touchcancel");return 0},W:function(a,b,c,d){ib(a,b,c,d,23,"touchend");return 0},X:function(a,b,c,d){ib(a,b,c,d,24,"touchmove");return 0},Y:function(a,b,c,d){ib(a,b,c,d,22,"touchstart");return 0},P:function(a,b,c,d){jb(a,b,c,d,31,"webglcontextlost");return 0},O:function(a,b,c,d){jb(a,b,c,d,32,"webglcontextrestored");return 0},aa:function(a,b,c,d){a=P(a);return"undefined"!=typeof a.onwheel?(kb(a,b,c,d),0):-1},A:function(a,b){b>>=2;b={alpha:!!F[b],depth:!!F[b+1],stencil:!!F[b+2],
antialias:!!F[b+3],premultipliedAlpha:!!F[b+4],preserveDrawingBuffer:!!F[b+5],powerPreference:Eb[F[b+6]],failIfMajorPerformanceCaveat:!!F[b+7],Dc:F[b+8],Kc:F[b+9],oc:F[b+10],Bc:F[b+11],Mc:F[b+12],Nc:F[b+13]};a=P(a);return!a||b.Bc?0:Ab(a,b)},qb:function(a,b){a=wb[a];b=E(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&lb(V);"OES_vertex_array_object"==b&&mb(V);"WEBGL_draw_buffers"==b&&pb(V);"WEBGL_multi_draw"==b&&qb(V);return!!a.jc.getExtension(b)},xa:function(a){a>>=2;for(var b=
0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},zb:function(a){Db=wb[a];f.Gc=V=Db&&Db.jc;return!a||V?0:-5},ea:function(){return 52},ab:function(){return 52},Xa:function(){return 70},$a:function(a,b,c,d){for(var e=0,h=0;h<c;h++){var g=G[b>>2],m=G[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=D[g+n],r=Fb[a];0===p||10===p?((1===a?ia:y)(qa(r,0)),r.length=0):r.push(p)}e+=m}F[d>>2]=e;return 0},b:function(a){V.activeTexture(a)},D:function(a,b){V.attachShader(S[a],T[b])},c:function(a,b){V.bindBuffer(a,
sb[b])},y:function(a,b){V.bindFramebuffer(a,tb[b])},Ca:function(a,b){V.bindRenderbuffer(a,ub[b])},a:function(a,b){V.bindTexture(a,vb[b])},H:function(a,b,c,d){V.blendColor(a,b,c,d)},I:function(a,b){V.blendEquationSeparate(a,b)},J:function(a,b,c,d){V.blendFuncSeparate(a,b,c,d)},Ea:function(a,b,c,d){V.bufferData(a,c?D.subarray(c,c+b):b,d)},i:function(a,b,c,d){V.bufferSubData(a,b,D.subarray(d,d+c))},yb:function(a){V.clear(a)},oa:function(a,b,c,d){V.clearColor(a,b,c,d)},na:function(a){V.clearDepth(a)},
ma:function(a){V.clearStencil(a)},n:function(a,b,c,d){V.colorMask(!!a,!!b,!!c,!!d)},ra:function(a){V.compileShader(T[a])},za:function(a,b,c,d,e,h,g,m){V.compressedTexImage2D(a,b,c,d,e,h,m?D.subarray(m,m+g):null)},wa:function(){var a=zb(S),b=V.createProgram();b.name=a;b.ic=b.fc=b.hc=0;b.lc=1;S[a]=b;return a},ta:function(a){var b=zb(T);T[b]=V.createShader(a);return b},E:function(a){V.cullFace(a)},Ka:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=sb[d];e&&(V.deleteBuffer(e),e.name=0,sb[d]=null)}},
h:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],e=tb[d];e&&(V.deleteFramebuffer(e),e.name=0,tb[d]=null)}},v:function(a){if(a){var b=S[a];b?(V.deleteProgram(b),b.name=0,S[a]=null):U(1281)}},N:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=ub[d];e&&(V.deleteRenderbuffer(e),e.name=0,ub[d]=null)}},r:function(a){if(a){var b=T[a];b?(V.deleteShader(b),T[a]=null):U(1281)}},Ja:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=vb[d];e&&(V.deleteTexture(e),e.name=0,vb[d]=null)}},u:function(a){V.depthFunc(a)},
t:function(a){V.depthMask(!!a)},d:function(a){V.disable(a)},L:function(a){V.disableVertexAttribArray(a)},hb:function(a,b,c){V.drawArrays(a,b,c)},ib:function(a,b,c,d){V.drawArraysInstanced(a,b,c,d)},jb:function(a,b,c,d){V.drawElements(a,b,c,d)},kb:function(a,b,c,d,e){V.drawElementsInstanced(a,b,c,d,e)},f:function(a){V.enable(a)},vb:function(a){V.enableVertexAttribArray(a)},F:function(a){V.frontFace(a)},Fa:function(a,b){Gb(a,b,"createBuffer",sb)},Da:function(a,b){Gb(a,b,"createRenderbuffer",ub)},Aa:function(a,
b){Gb(a,b,"createTexture",vb)},pa:function(a,b){return V.getAttribLocation(S[a],E(b))},e:function(a,b){Hb(a,b)},ua:function(a,b,c,d){a=V.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},C:function(a,b,c){if(c)if(a>=rb)U(1281);else if(a=S[a],35716==b)a=V.getProgramInfoLog(a),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b){if(!a.ic)for(b=0;b<V.getProgramParameter(a,35718);++b)a.ic=Math.max(a.ic,V.getActiveUniform(a,b).name.length+1);
F[c>>2]=a.ic}else if(35722==b){if(!a.fc)for(b=0;b<V.getProgramParameter(a,35721);++b)a.fc=Math.max(a.fc,V.getActiveAttrib(a,b).name.length+1);F[c>>2]=a.fc}else if(35381==b){if(!a.hc)for(b=0;b<V.getProgramParameter(a,35382);++b)a.hc=Math.max(a.hc,V.getActiveUniformBlockName(a,b).length+1);F[c>>2]=a.hc}else F[c>>2]=V.getProgramParameter(a,b);else U(1281)},qa:function(a,b,c,d){a=V.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},z:function(a,b,c){c?35716==
b?(a=V.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),F[c>>2]=a?a.length+1:0):35720==b?(a=V.getShaderSource(T[a]),F[c>>2]=a?a.length+1:0):F[c>>2]=V.getShaderParameter(T[a],b):U(1281)},La:function(a){var b=xb[a];if(!b){switch(a){case 7939:b=V.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Ib(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=V.getParameter(a))||U(1280);b=b&&Ib(b);break;case 7938:b=Ib("OpenGL ES 2.0 ("+V.getParameter(7938)+")");break;
case 35724:b=V.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Ib(b);break;default:U(1280)}xb[a]=b}return b},m:function(a,b){b=E(b);if(a=S[a]){var c=a,d=c.dc,e=c.yc,h;if(!d)for(c.dc=d={},c.xc={},h=0;h<V.getProgramParameter(c,35718);++h){var g=V.getActiveUniform(c,h);var m=g.name;g=g.size;var n=Jb(m);n=0<n?m.slice(0,n):m;var p=c.lc;c.lc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.xc[p++]=n}c=
a.dc;d=0;e=b;h=Jb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.yc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||V.getUniformLocation(a,b)))return d}else U(1281);return-1},va:function(a){a=S[a];V.linkProgram(a);a.dc=0;a.yc={}},G:function(a,b){V.polygonOffset(a,b)},Ba:function(a,b,c,d){V.renderbufferStorage(a,b,c,d)},k:function(a,b,c,d){V.scissor(a,b,c,d)},sa:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?F[d+4*h>>2]:-1;e+=E(F[c+4*h>>2],0>g?void 0:g)}V.shaderSource(T[a],e)},Ia:function(a,b,
c){V.stencilFunc(a,b,c)},la:function(a,b,c,d){V.stencilFuncSeparate(a,b,c,d)},s:function(a){V.stencilMask(a)},Ha:function(a,b,c){V.stencilOp(a,b,c)},ka:function(a,b,c,d){V.stencilOpSeparate(a,b,c,d)},ya:function(a,b,c,d,e,h,g,m,n){V.texImage2D(a,b,c,d,e,h,g,m,n?Kb(m,g,d,e,n):null)},g:function(a,b,c){V.texParameteri(a,b,c)},gb:function(a,b,c,d,e,h,g,m,n){var p=null;n&&(p=Kb(m,g,e,h,n));V.texSubImage2D(a,b,c,d,e,h,g,m,p)},ub:function(a,b,c){if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=H[c+4*e>>2];else d=
H.subarray(c>>2,c+4*b>>2);V.uniform1fv(W(a),d)},B:function(a,b){V.uniform1i(W(a),b)},pb:function(a,b,c){if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>2];else d=F.subarray(c>>2,c+4*b>>2);V.uniform1iv(W(a),d)},tb:function(a,b,c){if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2];else d=H.subarray(c>>2,c+8*b>>2);V.uniform2fv(W(a),d)},ob:function(a,b,c){if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,c+
8*b>>2);V.uniform2iv(W(a),d)},sb:function(a,b,c){if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2],d[e+2]=H[c+(4*e+8)>>2];else d=H.subarray(c>>2,c+12*b>>2);V.uniform3fv(W(a),d)},nb:function(a,b,c){if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2];else d=F.subarray(c>>2,c+12*b>>2);V.uniform3iv(W(a),d)},rb:function(a,b,c){if(72>=b){var d=X[4*b-1],e=H;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+
1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=H.subarray(c>>2,c+16*b>>2);V.uniform4fv(W(a),d)},mb:function(a,b,c){if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2],d[e+3]=F[c+(4*e+12)>>2];else d=F.subarray(c>>2,c+16*b>>2);V.uniform4iv(W(a),d)},lb:function(a,b,c,d){if(18>=b){var e=X[16*b-1],h=H;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=
h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=H.subarray(d>>2,d+64*b>>2);V.uniformMatrix4fv(W(a),!!c,e)},j:function(a){a=S[a];V.useProgram(a);V.zc=a},wb:function(a,b){V.vertexAttribDivisor(a,b)},xb:function(a,b,c,d,e,h){V.vertexAttribPointer(a,b,c,!!d,e,h)},l:function(a,b,c,d){V.viewport(a,b,c,d)},Va:function(){f.rc=function(a){0!=Nb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.rc)},
Ua:function(){f.wc=function(a){a=a.clipboardData.getData("text");la("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.wc)},Ta:function(a){f.Oc=[];a=E(a);a=document.getElementById(a);f.sc=function(b){b.stopPropagation();b.preventDefault()};f.tc=function(b){b.stopPropagation();b.preventDefault()};f.uc=function(b){b.stopPropagation();b.preventDefault()};f.vc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.Pc=c;Ob(c.length);var d;for(d=0;d<c.length;d++)la("_sapp_emsc_drop",
["number","string"],[d,c[d].name]);Pb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.sc,!1);a.addEventListener("dragleave",f.tc,!1);a.addEventListener("dragover",f.uc,!1);a.addEventListener("drop",f.vc,!1)},Na:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},q:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Qb()});document.body.append(a)},
p:function(){document.getElementById("_sokol_app_input_element").focus()},Wa:function(a){a=E(a);f.cc=document.getElementById(a);f.cc||console.log("sokol_app.h: invalid target:"+a);f.cc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Sa:function(){window.removeEventListener("beforeunload",f.rc)},Ra:function(){window.removeEventListener("paste",f.wc)},Pa:function(a){a=E(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.sc);a.removeEventListener("dragleave",
f.tc);a.removeEventListener("dragover",f.uc);a.removeEventListener("drop",f.vc)},w:function(){f.cc&&f.cc.requestPointerLock&&f.cc.requestPointerLock()},Ma:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(D.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},o:function(){document.getElementById("_sokol_app_input_element").blur()},
Oa:function(a){a=E(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},Ab:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),b=a.next();!b.done;b=a.next())la("_sargs_add_kvp",
["string","string"],[b.value[0],b.value[1]])},db:function(){return f.ac?f.ac.bufferSize:0},fb:function(a,b,c){f.Wb=null;f.ac=null;"undefined"!==typeof AudioContext?f.Wb=new AudioContext({sampleRate:a,latencyHint:"interactive"}):"undefined"!==typeof webkitAudioContext?f.Wb=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}):(f.Wb=null,console.log("sokol_audio.h: no WebAudio support"));return f.Wb?(console.log("sokol_audio.h: sample rate ",f.Wb.sampleRate),f.ac=f.Wb.createScriptProcessor(c,
0,b),f.ac.onaudioprocess=function(d){var e=d.outputBuffer.length,h=Rb(e);if(h)for(var g=d.outputBuffer.numberOfChannels,m=0;m<g;m++)for(var n=d.outputBuffer.getChannelData(m),p=0;p<e;p++)n[p]=H[(h>>2)+(g*p+m)]},f.ac.connect(f.Wb.destination),a=function(){f.Wb&&"suspended"===f.Wb.state&&f.Wb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},eb:function(){return f.Wb?f.Wb.sampleRate:0},
ia:function(){null!==f.Wb&&(f.ac&&f.ac.disconnect(),f.Wb.close(),f.Wb=null,f.ac=null)},ha:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){f.asm=e.exports;ja=f.asm.Bb;wa();xa=f.asm.Sb;za.unshift(f.asm.Cb);J--;f.monitorRunDependencies&&f.monitorRunDependencies(J);0==J&&(null!==Ea&&(clearInterval(Ea),Ea=null),K&&(e=K,K=null,e()))}function b(e){a(e.instance)}function c(e){return Ia().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){y("failed to asynchronously prepare wasm: "+h);A(h)})}var d={a:Sb};J++;f.monitorRunDependencies&&f.monitorRunDependencies(J);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return y("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return z||"function"!=typeof WebAssembly.instantiateStreaming||Fa()||L.startsWith("file://")||"function"!=typeof fetch?c(b):fetch(L,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){y("wasm streaming compile failed: "+h);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Cb).apply(null,arguments)};var Qb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Qb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Db).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.Eb).apply(null,arguments)};
var Nb=f.__sapp_html5_get_ask_leave_site=function(){return(Nb=f.__sapp_html5_get_ask_leave_site=f.asm.Fb).apply(null,arguments)},Ob=f.__sapp_emsc_begin_drop=function(){return(Ob=f.__sapp_emsc_begin_drop=f.asm.Gb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Hb).apply(null,arguments)};var Pb=f.__sapp_emsc_end_drop=function(){return(Pb=f.__sapp_emsc_end_drop=f.asm.Ib).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Jb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Kb).apply(null,arguments)};var Rb=f.__saudio_emsc_pull=function(){return(Rb=f.__saudio_emsc_pull=f.asm.Lb).apply(null,arguments)};f.__sargs_add_kvp=function(){return(f.__sargs_add_kvp=f.asm.Mb).apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Nb).apply(null,arguments)};
f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Ob).apply(null,arguments)};f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Pb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Qb).apply(null,arguments)};
var Q=f._malloc=function(){return(Q=f._malloc=f.asm.Rb).apply(null,arguments)},na=f.stackSave=function(){return(na=f.stackSave=f.asm.Tb).apply(null,arguments)},oa=f.stackRestore=function(){return(oa=f.stackRestore=f.asm.Ub).apply(null,arguments)},B=f.stackAlloc=function(){return(B=f.stackAlloc=f.asm.Vb).apply(null,arguments)},Tb;function x(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}K=function Ub(){Tb||Vb();Tb||(K=Ub)};
function Vb(a){function b(){if(!Tb&&(Tb=!0,f.calledRun=!0,!ka)){Ja(za);Ja(Aa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Wb){var c=a,d=f._main;c=c||[];var e=c.length+1,h=B(4*(e+1));F[h>>2]=sa(ca);for(var g=1;g<e;g++)F[(h>>2)+g]=sa(c[g-1]);F[(h>>2)+e]=0;try{var m=d(e,h);if(!noExitRuntime){if(f.onExit)f.onExit(m);ka=!0}k(m,new x(m))}catch(n){n instanceof x||"unwind"==n||k(1,n)}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),
Ca.unshift(c);Ja(Ca)}}a=a||ba;if(!(0<J)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Da();Ja(ya);0<J||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Vb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Wb=!0;f.noInitialRun&&(Wb=!1);Vb();
