
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign,ba=aa({},f),ca=[],da="./this.program",k=(a,b)=>{throw b;},ea="object"===typeof window,l="function"===typeof importScripts,fa="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node,q="",ha,u,v,fs,w,ia;
if(fa)q=l?require("path").dirname(q)+"/":__dirname+"/",ia=function(){w||(fs=require("fs"),w=require("path"))},ha=function(a,b){ia();a=w.normalize(a);return fs.readFileSync(a,b?null:"utf8")},v=function(a){a=ha(a,!0);a.buffer||(a=new Uint8Array(a));return a},u=function(a,b,c){ia();a=w.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(da=process.argv[1].replace(/\\/g,"/")),ca=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",
function(a){if(!(a instanceof x))throw a;}),process.on("unhandledRejection",function(a){throw a;}),k=(a,b)=>{if(noExitRuntime||0<ja)throw process.exitCode=a,b;b instanceof x||y("exiting due to exception: "+b);process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(ea||l)l?q=self.location.href:"undefined"!==typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",ha=function(a){var b=
new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(v=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),u=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};f.print||console.log.bind(console);var y=f.printErr||console.warn.bind(console);aa(f,ba);
ba=null;f.arguments&&(ca=f.arguments);f.thisProgram&&(da=f.thisProgram);f.quit&&(k=f.quit);var z;f.wasmBinary&&(z=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!==typeof WebAssembly&&ka("no native wasm support detected");var la,ma=!1;
function na(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var t=(n.length<<2)+1;p=A(t);B(n,C,p,t)}return p},array:function(n){var p=A(n.length);oa.set(n,p);return p}};a=f["_"+a];var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=pa()),e[g]=m(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==h&&qa(h);return n}(b)}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function D(a,b){if(a){var c=C,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ra)a=ra.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var h=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function B(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ta(a){var b=sa(a)+1,c=A(b);B(a,oa,c,b);return c}var ua,oa,C,va,wa,E,xa,F,G;
function ya(){var a=la.buffer;ua=a;f.HEAP8=oa=new Int8Array(a);f.HEAP16=va=new Int16Array(a);f.HEAP32=E=new Int32Array(a);f.HEAPU8=C=new Uint8Array(a);f.HEAPU16=wa=new Uint16Array(a);f.HEAPU32=xa=new Uint32Array(a);f.HEAPF32=F=new Float32Array(a);f.HEAPF64=G=new Float64Array(a)}var za,Aa=[],Ba=[],Ca=[],Da=[],Ea=[],ja=0;function Fa(){var a=f.preRun.shift();Aa.unshift(a)}var H=0,Ga=null,I=null;f.preloadedImages={};f.preloadedAudios={};
function ka(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";y(a);ma=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function Ha(){return J.startsWith("data:application/octet-stream;base64,")}var J;J="z1013.wasm";if(!Ha()){var Ia=J;J=f.locateFile?f.locateFile(Ia,q):q+Ia}function Ja(){var a=J;try{if(a==J&&z)return new Uint8Array(z);if(v)return v(a);throw"both async and sync fetching of the wasm failed";}catch(b){ka(b)}}
function Ka(){if(!z&&(ea||l)){if("function"===typeof fetch&&!J.startsWith("file://"))return fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return Ja()});if(u)return new Promise(function(a,b){u(J,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ja()})}
function K(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Ac;"number"===typeof c?void 0===b.Yb?L(c)():L(c)(b.Yb):c(void 0===b.Yb?null:b.Yb)}}}var M=[];function L(a){var b=M[a];b||(a>=M.length&&(M.length=a+1),M[a]=b=za.get(a));return b}var La=0;function Ma(){for(var a=N.length-1;0<=a;--a)Na(a);N=[];Oa=[]}var Oa=[];function Pa(){if(La&&Qa.Tb)for(var a=0;a<Oa.length;++a){var b=Oa[a];Oa.splice(a,1);--a;b.Hc.apply(null,b.xc)}}var N=[];
function Na(a){var b=N[a];b.target.removeEventListener(b.Nb,b.sc,b.Ob);N.splice(a,1)}function O(a){function b(d){++La;Qa=a;Pa();a.Qb(d);Pa();--La}if(a.Pb)a.sc=b,a.target.addEventListener(a.Nb,b,a.Ob),N.push(a),Ra||(Da.push(Ma),Ra=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].Nb==a.Nb&&Na(c--)}function Sa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Ra,Qa,Ta,Ua,Va,Wa,Xa,Ya,Za,$a=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function P(a){a=2<a?D(a):a;return $a[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function ab(a){return 0>$a.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var bb;bb=fa?()=>{var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:()=>performance.now();
function cb(a,b,c,d,e,h){Ta||(Ta=Q(256));a={target:P(a),Nb:h,Pb:d,Qb:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Ta;B(Sa(g.target),C,n+0,128);B(m,C,n+128,128);L(d)(e,n,b)&&g.preventDefault()},Ob:c};O(a)}
function db(a,b,c,d,e,h){Ua||(Ua=Q(176));a={target:P(a),Tb:!0,Nb:h,Pb:d,Qb:function(g){var m=Ua;G[m>>3]=g.timeStamp;var n=m>>2;E[n+2]=g.location;E[n+3]=g.ctrlKey;E[n+4]=g.shiftKey;E[n+5]=g.altKey;E[n+6]=g.metaKey;E[n+7]=g.repeat;E[n+8]=g.charCode;E[n+9]=g.keyCode;E[n+10]=g.which;B(g.key||"",C,m+44,32);B(g.code||"",C,m+76,32);B(g.char||"",C,m+108,32);B(g.locale||"",C,m+140,32);L(d)(e,m,b)&&g.preventDefault()},Ob:c};O(a)}
function eb(a,b,c){G[a>>3]=b.timeStamp;a>>=2;E[a+2]=b.screenX;E[a+3]=b.screenY;E[a+4]=b.clientX;E[a+5]=b.clientY;E[a+6]=b.ctrlKey;E[a+7]=b.shiftKey;E[a+8]=b.altKey;E[a+9]=b.metaKey;va[2*a+20]=b.button;va[2*a+21]=b.buttons;E[a+11]=b.movementX;E[a+12]=b.movementY;c=ab(c);E[a+13]=b.clientX-c.left;E[a+14]=b.clientY-c.top}
function R(a,b,c,d,e,h){Va||(Va=Q(72));a=P(a);O({target:a,Tb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Nb:h,Pb:d,Qb:function(g){g=g||event;eb(Va,g,a);L(d)(e,Va,b)&&g.preventDefault()},Ob:c})}function fb(a,b,c,d,e){Wa||(Wa=Q(260));O({target:a,Nb:e,Pb:d,Qb:function(h){h=h||event;var g=Wa,m=document.pointerLockElement||document.ac||document.cc||document.bc;E[g>>2]=!!m;var n=m&&m.id?m.id:"";B(Sa(m),C,g+4,128);B(n,C,g+132,128);L(d)(20,g,b)&&h.preventDefault()},Ob:c})}
function gb(a,b,c,d,e){O({target:a,Nb:e,Pb:d,Qb:function(h){h=h||event;L(d)(38,0,b)&&h.preventDefault()},Ob:c})}
function hb(a,b,c,d){Xa||(Xa=Q(36));a=P(a);O({target:a,Nb:"resize",Pb:d,Qb:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=Xa;E[g>>2]=e.detail;E[g+4>>2]=h.clientWidth;E[g+8>>2]=h.clientHeight;E[g+12>>2]=innerWidth;E[g+16>>2]=innerHeight;E[g+20>>2]=outerWidth;E[g+24>>2]=outerHeight;E[g+28>>2]=pageXOffset;E[g+32>>2]=pageYOffset;L(d)(10,g,b)&&e.preventDefault()}}},Ob:c})}
function ib(a,b,c,d,e,h){Ya||(Ya=Q(1696));a=P(a);O({target:a,Tb:"touchstart"==h||"touchend"==h,Nb:h,Pb:d,Qb:function(g){for(var m,n={},p=g.touches,t=0;t<p.length;++t)m=p[t],m.fc=m.hc=0,n[m.identifier]=m;for(t=0;t<g.changedTouches.length;++t)m=g.changedTouches[t],m.fc=1,n[m.identifier]=m;for(t=0;t<g.targetTouches.length;++t)n[g.targetTouches[t].identifier].hc=1;p=Ya;G[p>>3]=g.timeStamp;var r=p>>2;E[r+3]=g.ctrlKey;E[r+4]=g.shiftKey;E[r+5]=g.altKey;E[r+6]=g.metaKey;r+=7;var pb=ab(a),qb=0;for(t in n)if(m=
n[t],E[r]=m.identifier,E[r+1]=m.screenX,E[r+2]=m.screenY,E[r+3]=m.clientX,E[r+4]=m.clientY,E[r+5]=m.pageX,E[r+6]=m.pageY,E[r+7]=m.fc,E[r+8]=m.hc,E[r+9]=m.clientX-pb.left,E[r+10]=m.clientY-pb.top,r+=13,31<++qb)break;E[p+8>>2]=qb;L(d)(e,p,b)&&g.preventDefault()},Ob:c})}function jb(a,b,c,d,e,h){a={target:P(a),Nb:h,Pb:d,Qb:function(g){g=g||event;L(d)(e,0,b)&&g.preventDefault()},Ob:c};O(a)}
function kb(a,b,c,d){Za||(Za=Q(104));O({target:a,Tb:!0,Nb:"wheel",Pb:d,Qb:function(e){e=e||event;var h=Za;eb(h,e,a);G[h+72>>3]=e.deltaX;G[h+80>>3]=e.deltaY;G[h+88>>3]=e.deltaZ;E[h+96>>2]=e.deltaMode;L(d)(9,h,b)&&e.preventDefault()},Ob:c})}
function lb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function mb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function nb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}function ob(a){a.Dc=a.getExtension("WEBGL_multi_draw")}
var rb=1,sb=[],S=[],tb=[],T=[],U=[],V=[],ub=[],vb={};function W(a){wb||(wb=a)}function xb(a){for(var b=rb++,c=a.length;c<b;c++)a[c]=null;return b}function yb(a,b){a.ec||(a.ec=a.getContext,a.getContext=function(d,e){e=a.ec(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=a.getContext("webgl",b);return c?zb(c,b):0}function zb(a,b){var c=xb(ub),d={Bc:c,attributes:b,version:b.vc,Xb:a};a.canvas&&(a.canvas.wc=d);ub[c]=d;("undefined"===typeof b.dc||b.dc)&&Ab(d);return c}
function Ab(a){a||(a=Bb);if(!a.uc){a.uc=!0;var b=a.Xb;lb(b);mb(b);nb(b);b.zc=b.getExtension("EXT_disjoint_timer_query");ob(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var wb,Bb,Cb=["default","low-power","high-performance"];function Db(a,b,c,d){for(var e=0;e<a;e++){var h=X[c](),g=h&&xb(d);h?(h.name=g,d[g]=h):W(1282);E[b+4*e>>2]=g}}
function Eb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=X.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=X.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)E[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){W(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:W(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}E[b>>2]=c}else W(1281)}function Fb(a){var b=sa(a)+1,c=Q(b);B(a,C,c,b);return c}
function Gb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Hb(a,b,c,d,e){a-=5120;a=1==a?C:4==a?E:6==a?F:5==a||28922==a?xa:wa;var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}function Y(a){var b=X.rc;if(b){var c=b.Sb[a];"number"===typeof c&&(b.Sb[a]=c=X.getUniformLocation(b,b.oc[a]+(0<c?"["+c+"]":"")));return c}W(1282)}for(var Z=[],X,Ib=new Float32Array(288),Jb=0;288>Jb;++Jb)Z[Jb]=Ib.subarray(0,Jb+1);
var Tb={F:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},L:function(a,b,c){a=P(a);if(!a)return-4;a=ab(a);G[b>>3]=a.width;G[c>>3]=a.height;return 0},C:bb,Ya:function(a,b,c){C.copyWithin(a,b,b+c)},mb:function(a,b){function c(d){L(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Za:function(a){var b=C.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{la.grow(Math.min(2147483648,
d)-ua.byteLength+65535>>>16);ya();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},T:function(a,b,c,d){cb(a,b,c,d,12,"blur");return 0},oa:function(a,b,c){a=P(a);if(!a)return-4;a.width=b;a.height=c;return 0},U:function(a,b,c,d){cb(a,b,c,d,13,"focus");return 0},ba:function(a,b,c,d){db(a,b,c,d,2,"keydown");return 0},$:function(a,b,c,d){db(a,b,c,d,1,"keypress");return 0},aa:function(a,b,c,d){db(a,b,c,d,3,"keyup");return 0},ha:function(a,b,c,d){R(a,b,c,d,5,"mousedown");return 0},ea:function(a,
b,c,d){R(a,b,c,d,33,"mouseenter");return 0},da:function(a,b,c,d){R(a,b,c,d,34,"mouseleave");return 0},fa:function(a,b,c,d){R(a,b,c,d,8,"mousemove");return 0},ga:function(a,b,c,d){R(a,b,c,d,6,"mouseup");return 0},W:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.ac||document.body.cc||document.body.bc))return-1;a=P(a);if(!a)return-4;fb(a,b,c,d,"pointerlockchange");fb(a,b,c,d,"mozpointerlockchange");fb(a,b,c,d,"webkitpointerlockchange");fb(a,b,c,d,"mspointerlockchange");
return 0},V:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.ac||document.body.cc||document.body.bc))return-1;a=P(a);if(!a)return-4;gb(a,b,c,d,"pointerlockerror");gb(a,b,c,d,"mozpointerlockerror");gb(a,b,c,d,"webkitpointerlockerror");gb(a,b,c,d,"mspointerlockerror");return 0},za:function(a,b,c,d){hb(a,b,c,d);return 0},X:function(a,b,c,d){ib(a,b,c,d,25,"touchcancel");return 0},Y:function(a,b,c,d){ib(a,b,c,d,23,"touchend");return 0},Z:function(a,b,c,d){ib(a,b,c,d,24,
"touchmove");return 0},_:function(a,b,c,d){ib(a,b,c,d,22,"touchstart");return 0},S:function(a,b,c,d){jb(a,b,c,d,31,"webglcontextlost");return 0},R:function(a,b,c,d){jb(a,b,c,d,32,"webglcontextrestored");return 0},ca:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(kb(a,b,c,d),0):-1},ia:function(a,b){b>>=2;b={alpha:!!E[b],depth:!!E[b+1],stencil:!!E[b+2],antialias:!!E[b+3],premultipliedAlpha:!!E[b+4],preserveDrawingBuffer:!!E[b+5],powerPreference:Cb[E[b+6]],failIfMajorPerformanceCaveat:!!E[b+
7],vc:E[b+8],Cc:E[b+9],dc:E[b+10],tc:E[b+11],Ec:E[b+12],Fc:E[b+13]};a=P(a);return!a||b.tc?0:yb(a,b)},Wa:function(a,b){a=ub[a];b=D(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&lb(X);"OES_vertex_array_object"==b&&mb(X);"WEBGL_draw_buffers"==b&&nb(X);"WEBGL_multi_draw"==b&&ob(X);return!!a.Xb.getExtension(b)},bb:function(a){a>>=2;for(var b=0;14>b;++b)E[a+b]=0;E[a]=E[a+1]=E[a+3]=E[a+4]=E[a+8]=E[a+10]=1},Xa:function(a){Bb=ub[a];f.yc=X=Bb&&Bb.Xb;return!a||X?0:-5},b:function(a){X.activeTexture(a)},
H:function(a,b){X.attachShader(S[a],V[b])},c:function(a,b){X.bindBuffer(a,sb[b])},g:function(a,b){X.bindFramebuffer(a,tb[b])},Ca:function(a,b){X.bindRenderbuffer(a,T[b])},a:function(a,b){X.bindTexture(a,U[b])},M:function(a,b,c,d){X.blendColor(a,b,c,d)},N:function(a,b){X.blendEquationSeparate(a,b)},O:function(a,b,c,d){X.blendFuncSeparate(a,b,c,d)},Ea:function(a,b,c,d){X.bufferData(a,c?C.subarray(c,c+b):b,d)},k:function(a,b,c,d){X.bufferSubData(a,b,C.subarray(d,d+c))},p:function(a){return X.checkFramebufferStatus(a)},
nb:function(a){X.clear(a)},pb:function(a,b,c,d){X.clearColor(a,b,c,d)},ma:function(a){X.clearDepth(a)},ob:function(a){X.clearStencil(a)},o:function(a,b,c,d){X.colorMask(!!a,!!b,!!c,!!d)},ra:function(a){X.compileShader(V[a])},ya:function(a,b,c,d,e,h,g,m){X.compressedTexImage2D(a,b,c,d,e,h,m?C.subarray(m,m+g):null)},wa:function(){var a=xb(S),b=X.createProgram();b.name=a;b.Wb=b.Ub=b.Vb=0;b.$b=1;S[a]=b;return a},ta:function(a){var b=xb(V);V[b]=X.createShader(a);return b},I:function(a){X.cullFace(a)},
Ka:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=sb[d];e&&(X.deleteBuffer(e),e.name=0,sb[d]=null)}},d:function(a,b){for(var c=0;c<a;++c){var d=E[b+4*c>>2],e=tb[d];e&&(X.deleteFramebuffer(e),e.name=0,tb[d]=null)}},r:function(a){if(a){var b=S[a];b?(X.deleteProgram(b),b.name=0,S[a]=null):W(1281)}},Q:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=T[d];e&&(X.deleteRenderbuffer(e),e.name=0,T[d]=null)}},w:function(a){if(a){var b=V[a];b?(X.deleteShader(b),V[a]=null):W(1281)}},Ja:function(a,
b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=U[d];e&&(X.deleteTexture(e),e.name=0,U[d]=null)}},z:function(a){X.depthFunc(a)},y:function(a){X.depthMask(!!a)},e:function(a){X.disable(a)},P:function(a){X.disableVertexAttribArray(a)},$a:function(a,b,c){X.drawArrays(a,b,c)},ab:function(a,b,c,d){X.drawArraysInstanced(a,b,c,d)},cb:function(a,b,c,d){X.drawElements(a,b,c,d)},db:function(a,b,c,d,e){X.drawElementsInstanced(a,b,c,d,e)},i:function(a){X.enable(a)},jb:function(a){X.enableVertexAttribArray(a)},l:function(a,
b,c,d){X.framebufferRenderbuffer(a,b,c,T[d])},h:function(a,b,c,d,e){X.framebufferTexture2D(a,b,c,U[d],e)},J:function(a){X.frontFace(a)},Fa:function(a,b){Db(a,b,"createBuffer",sb)},n:function(a,b){Db(a,b,"createFramebuffer",tb)},Da:function(a,b){Db(a,b,"createRenderbuffer",T)},Aa:function(a,b){Db(a,b,"createTexture",U)},pa:function(a,b){return X.getAttribLocation(S[a],D(b))},f:function(a,b){Eb(a,b)},ua:function(a,b,c,d){a=X.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):
0;c&&(E[c>>2]=b)},G:function(a,b,c){if(c)if(a>=rb)W(1281);else if(a=S[a],35716==b)a=X.getProgramInfoLog(a),null===a&&(a="(unknown error)"),E[c>>2]=a.length+1;else if(35719==b){if(!a.Wb)for(b=0;b<X.getProgramParameter(a,35718);++b)a.Wb=Math.max(a.Wb,X.getActiveUniform(a,b).name.length+1);E[c>>2]=a.Wb}else if(35722==b){if(!a.Ub)for(b=0;b<X.getProgramParameter(a,35721);++b)a.Ub=Math.max(a.Ub,X.getActiveAttrib(a,b).name.length+1);E[c>>2]=a.Ub}else if(35381==b){if(!a.Vb)for(b=0;b<X.getProgramParameter(a,
35382);++b)a.Vb=Math.max(a.Vb,X.getActiveUniformBlockName(a,b).length+1);E[c>>2]=a.Vb}else E[c>>2]=X.getProgramParameter(a,b);else W(1281)},qa:function(a,b,c,d){a=X.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(E[c>>2]=b)},D:function(a,b,c){c?35716==b?(a=X.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),E[c>>2]=a?a.length+1:0):35720==b?(a=X.getShaderSource(V[a]),E[c>>2]=a?a.length+1:0):E[c>>2]=X.getShaderParameter(V[a],b):W(1281)},La:function(a){var b=vb[a];
if(!b){switch(a){case 7939:b=X.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Fb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=X.getParameter(a))||W(1280);b=b&&Fb(b);break;case 7938:b=Fb("OpenGL ES 2.0 ("+X.getParameter(7938)+")");break;case 35724:b=X.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Fb(b);break;default:W(1280)}vb[a]=b}return b},
q:function(a,b){b=D(b);if(a=S[a]){var c=a,d=c.Sb,e=c.pc,h;if(!d)for(c.Sb=d={},c.oc={},h=0;h<X.getProgramParameter(c,35718);++h){var g=X.getActiveUniform(c,h);var m=g.name;g=g.size;var n=Gb(m);n=0<n?m.slice(0,n):m;var p=c.$b;c.$b+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.oc[p++]=n}c=a.Sb;d=0;e=b;h=Gb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.pc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||X.getUniformLocation(a,b)))return d}else W(1281);return-1},va:function(a){a=S[a];X.linkProgram(a);a.Sb=0;
a.pc={}},K:function(a,b){X.polygonOffset(a,b)},Ba:function(a,b,c,d){X.renderbufferStorage(a,b,c,d)},na:function(a,b,c,d){X.scissor(a,b,c,d)},sa:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?E[d+4*h>>2]:-1;e+=D(E[c+4*h>>2],0>g?void 0:g)}X.shaderSource(V[a],e)},Ha:function(a,b,c){X.stencilFunc(a,b,c)},la:function(a,b,c,d){X.stencilFuncSeparate(a,b,c,d)},x:function(a){X.stencilMask(a)},Ga:function(a,b,c){X.stencilOp(a,b,c)},ka:function(a,b,c,d){X.stencilOpSeparate(a,b,c,d)},xa:function(a,b,c,d,
e,h,g,m,n){X.texImage2D(a,b,c,d,e,h,g,m,n?Hb(m,g,d,e,n):null)},j:function(a,b,c){X.texParameteri(a,b,c)},_a:function(a,b,c,d,e,h,g,m,n){var p=null;n&&(p=Hb(m,g,e,h,n));X.texSubImage2D(a,b,c,d,e,h,g,m,p)},ib:function(a,b,c){if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>2];else d=F.subarray(c>>2,c+4*b>>2);X.uniform1fv(Y(a),d)},E:function(a,b){X.uniform1i(Y(a),b)},hb:function(a,b,c){if(144>=b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,c+8*
b>>2);X.uniform2fv(Y(a),d)},gb:function(a,b,c){if(96>=b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2];else d=F.subarray(c>>2,c+12*b>>2);X.uniform3fv(Y(a),d)},fb:function(a,b,c){if(72>=b){var d=Z[4*b-1],e=F;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=F.subarray(c>>2,c+16*b>>2);X.uniform4fv(Y(a),d)},eb:function(a,b,c,d){if(18>=b){var e=Z[16*b-1],h=F;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=
h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=F.subarray(d>>2,d+64*b>>2);X.uniformMatrix4fv(Y(a),!!c,e)},m:function(a){a=S[a];X.useProgram(a);X.rc=a},kb:function(a,b){X.vertexAttribDivisor(a,b)},lb:function(a,b,c,d,e,h){X.vertexAttribPointer(a,b,c,!!d,e,h)},v:function(a,b,c,d){X.viewport(a,b,c,d)},Ua:function(){f.ic=
function(a){0!=Kb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.ic)},Ta:function(){f.nc=function(a){a=a.clipboardData.getData("text");na("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.nc)},Sa:function(a){f.Gc=[];a=D(a);a=document.getElementById(a);f.jc=function(b){b.stopPropagation();b.preventDefault()};f.kc=function(b){b.stopPropagation();b.preventDefault()};f.lc=function(b){b.stopPropagation();b.preventDefault()};f.mc=function(b){b.stopPropagation();
b.preventDefault();var c=b.dataTransfer.files;f.Zb=c;Lb(c.length);var d;for(d=0;d<c.length;d++)na("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Mb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.jc,!1);a.addEventListener("dragleave",f.kc,!1);a.addEventListener("dragover",f.lc,!1);a.addEventListener("drop",f.mc,!1)},Na:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},u:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";
a.autocapitalize="none";a.addEventListener("focusout",function(){Nb()});document.body.append(a)},rb:function(a){return 0>a||a>=f.Zb.length?0:f.Zb[a].size},qb:function(a,b,c,d,e){var h=new FileReader;h.onload=function(g){g=g.target.result;g.byteLength>d?Ob(a,0,1,b,0,c,d,e):(C.set(new Uint8Array(g),c),Ob(a,1,0,b,g.byteLength,c,d,e))};h.onerror=function(){Ob(a,0,2,b,0,c,d,e)};h.readAsArrayBuffer(f.Zb[a])},t:function(){document.getElementById("_sokol_app_input_element").focus()},Ia:function(a){a=D(a);
f.Rb=document.getElementById(a);f.Rb||console.log("sokol_app.h: invalid target:"+a);f.Rb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Qa:function(){window.removeEventListener("beforeunload",f.ic)},Pa:function(){window.removeEventListener("paste",f.nc)},Oa:function(a){a=D(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.jc);a.removeEventListener("dragleave",f.kc);a.removeEventListener("dragover",f.lc);a.removeEventListener("drop",
f.mc)},B:function(){f.Rb&&f.Rb.requestPointerLock&&f.Rb.requestPointerLock()},Ma:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(C.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},s:function(){document.getElementById("_sokol_app_input_element").blur()},Ra:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),
b=a.next();!b.done;b=a.next())na("_sargs_add_kvp",["string","string"],[b.value[0],b.value[1]])},Va:function(){if(f.qc)return"suspended"===f.qc.state?1:0},A:function(a,b,c,d,e,h){b=D(b);var g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";var m=0<d;m&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));g.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!m){var n=new Uint8Array(g.response),p=n.length;p<=h?(C.set(n,e),Pb(a,d,p)):Qb(a)}else Rb(a,
this.status)};g.send()},ja:function(a,b){b=D(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");Sb(a,d)}else Rb(a,this.status)};c.send()}};
(function(){function a(e){f.asm=e.exports;la=f.asm.sb;ya();za=f.asm.Mb;Ba.unshift(f.asm.tb);H--;f.monitorRunDependencies&&f.monitorRunDependencies(H);0==H&&(null!==Ga&&(clearInterval(Ga),Ga=null),I&&(e=I,I=null,e()))}function b(e){a(e.instance)}function c(e){return Ka().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){y("failed to asynchronously prepare wasm: "+h);ka(h)})}var d={a:Tb};H++;f.monitorRunDependencies&&f.monitorRunDependencies(H);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return y("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Ha()||J.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(J,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){y("wasm streaming compile failed: "+h);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.tb).apply(null,arguments)};var Nb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Nb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.ub).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.vb).apply(null,arguments)};
var Kb=f.__sapp_html5_get_ask_leave_site=function(){return(Kb=f.__sapp_html5_get_ask_leave_site=f.asm.wb).apply(null,arguments)},Lb=f.__sapp_emsc_begin_drop=function(){return(Lb=f.__sapp_emsc_begin_drop=f.asm.xb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.yb).apply(null,arguments)};
var Mb=f.__sapp_emsc_end_drop=function(){return(Mb=f.__sapp_emsc_end_drop=f.asm.zb).apply(null,arguments)},Ob=f.__sapp_emsc_invoke_fetch_cb=function(){return(Ob=f.__sapp_emsc_invoke_fetch_cb=f.asm.Ab).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Bb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Cb).apply(null,arguments)};f.__sargs_add_kvp=function(){return(f.__sargs_add_kvp=f.asm.Db).apply(null,arguments)};
var Sb=f.__sfetch_emsc_head_response=function(){return(Sb=f.__sfetch_emsc_head_response=f.asm.Eb).apply(null,arguments)},Pb=f.__sfetch_emsc_get_response=function(){return(Pb=f.__sfetch_emsc_get_response=f.asm.Fb).apply(null,arguments)},Rb=f.__sfetch_emsc_failed_http_status=function(){return(Rb=f.__sfetch_emsc_failed_http_status=f.asm.Gb).apply(null,arguments)},Qb=f.__sfetch_emsc_failed_buffer_too_small=function(){return(Qb=f.__sfetch_emsc_failed_buffer_too_small=f.asm.Hb).apply(null,arguments)},Q=
f._malloc=function(){return(Q=f._malloc=f.asm.Ib).apply(null,arguments)},pa=f.stackSave=function(){return(pa=f.stackSave=f.asm.Jb).apply(null,arguments)},qa=f.stackRestore=function(){return(qa=f.stackRestore=f.asm.Kb).apply(null,arguments)},A=f.stackAlloc=function(){return(A=f.stackAlloc=f.asm.Lb).apply(null,arguments)},Ub;function x(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}I=function Vb(){Ub||Wb();Ub||(I=Vb)};
function Wb(a){function b(){if(!Ub&&(Ub=!0,f.calledRun=!0,!ma)){K(Ba);K(Ca);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Xb){var c=a,d=f._main;c=c||[];var e=c.length+1,h=A(4*(e+1));E[h>>2]=ta(da);for(var g=1;g<e;g++)E[(h>>2)+g]=ta(c[g-1]);E[(h>>2)+e]=0;try{var m=d(e,h);if(!(noExitRuntime||0<ja)){if(f.onExit)f.onExit(m);ma=!0}k(m,new x(m))}catch(n){n instanceof x||"unwind"==n||k(1,n)}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),
Ea.unshift(c);K(Ea)}}a=a||ca;if(!(0<H)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Fa();K(Aa);0<H||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Wb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Xb=!0;f.noInitialRun&&(Xb=!1);Wb();
