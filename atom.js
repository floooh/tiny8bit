
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign,ba=aa({},e),ca=[],da="./this.program";function k(a,b){throw b;}var ea="object"===typeof window,l="function"===typeof importScripts,fa="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node,q="",ha,u,v,fs,ia,ja;
if(fa)q=l?require("path").dirname(q)+"/":__dirname+"/",ja=function(){fs||(fs=require("fs"),ia=require("path"))},ha=function(a,b){ja();a=ia.normalize(a);return fs.readFileSync(a,b?null:"utf8")},v=function(a){a=ha(a,!0);a.buffer||(a=new Uint8Array(a));return a},u=function(a,b,c){ja();a=ia.normalize(a);fs.readFile(a,function(d,f){d?c(d):b(f.buffer)})},1<process.argv.length&&(da=process.argv[1].replace(/\\/g,"/")),ca=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",
function(a){if(!(a instanceof w))throw a;}),process.on("unhandledRejection",function(a){throw a;}),k=function(a,b){if(noExitRuntime||0<ka)throw process.exitCode=a,b;b instanceof w||x("exiting due to exception: "+b);process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(ea||l)l?q=self.location.href:"undefined"!==typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",ha=function(a){var b=
new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(v=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),u=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};e.print||console.log.bind(console);var x=e.printErr||console.warn.bind(console);aa(e,ba);
ba=null;e.arguments&&(ca=e.arguments);e.thisProgram&&(da=e.thisProgram);e.quit&&(k=e.quit);var y;e.wasmBinary&&(y=e.wasmBinary);var noExitRuntime=e.noExitRuntime||!0;"object"!==typeof WebAssembly&&la("no native wasm support detected");var ma,na=!1;
function oa(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var t=(n.length<<2)+1;p=z(t);A(n,B,p,t)}return p},array:function(n){var p=z(n.length);pa.set(n,p);return p}};a=e["_"+a];var f=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=qa()),f[g]=m(c[g])):f[g]=c[g]}b=a.apply(null,f);b=function(n){0!==h&&ra(h);return n}(b)}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function C(a,b){if(a){var c=B,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&sa)a=sa.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var h=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var g=c[a++]&63;f=224==(f&240)?(f&15)<<12|h<<6|g:(f&7)<<18|h<<12|g<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function A(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ua(a){var b=ta(a)+1,c=z(b);A(a,pa,c,b);return c}var va,pa,B,wa,xa,D,ya,E,F;
function za(){var a=ma.buffer;va=a;e.HEAP8=pa=new Int8Array(a);e.HEAP16=wa=new Int16Array(a);e.HEAP32=D=new Int32Array(a);e.HEAPU8=B=new Uint8Array(a);e.HEAPU16=xa=new Uint16Array(a);e.HEAPU32=ya=new Uint32Array(a);e.HEAPF32=E=new Float32Array(a);e.HEAPF64=F=new Float64Array(a)}var Aa,Ba=[],Ca=[],Da=[],Ea=[],Fa=[],ka=0;function Ga(){var a=e.preRun.shift();Ba.unshift(a)}var G=0,Ha=null,H=null;e.preloadedImages={};e.preloadedAudios={};
function la(a){if(e.onAbort)e.onAbort(a);a="Aborted("+a+")";x(a);na=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function Ia(){return I.startsWith("data:application/octet-stream;base64,")}var I;I="atom.wasm";if(!Ia()){var Ja=I;I=e.locateFile?e.locateFile(Ja,q):q+Ja}function Ka(){var a=I;try{if(a==I&&y)return new Uint8Array(y);if(v)return v(a);throw"both async and sync fetching of the wasm failed";}catch(b){la(b)}}
function La(){if(!y&&(ea||l)){if("function"===typeof fetch&&!I.startsWith("file://"))return fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return Ka()});if(u)return new Promise(function(a,b){u(I,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ka()})}
function J(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.Fc;"number"===typeof c?void 0===b.dc?K(c)():K(c)(b.dc):c(void 0===b.dc?null:b.dc)}}}var L=[];function K(a){var b=L[a];b||(a>=L.length&&(L.length=a+1),L[a]=b=Aa.get(a));return b}var Ma=0;function Na(){for(var a=M.length-1;0<=a;--a)Oa(a);M=[];N=[]}var N=[];function Pa(){if(Ma&&Qa.Zb)for(var a=0;a<N.length;++a){var b=N[a];N.splice(a,1);--a;b.Mc.apply(null,b.Cc)}}var M=[];
function Oa(a){var b=M[a];b.target.removeEventListener(b.Sb,b.xc,b.Tb);M.splice(a,1)}function O(a){function b(d){++Ma;Qa=a;Pa();a.Vb(d);Pa();--Ma}if(a.Ub)a.xc=b,a.target.addEventListener(a.Sb,b,a.Tb),M.push(a),Ra||(Ea.push(Na),Ra=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].Sb==a.Sb&&Oa(c--)}function Sa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Ra,Qa,Ta,Ua,Va,Wa,Xa,Ya,Za,$a=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function P(a){a=2<a?C(a):a;return $a[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function ab(a){return 0>$a.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var bb;bb=fa?function(){var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:function(){return performance.now()};
function cb(a,b,c,d,f,h){Ta||(Ta=Q(256));a={target:P(a),Sb:h,Ub:d,Vb:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Ta;A(Sa(g.target),B,n+0,128);A(m,B,n+128,128);K(d)(f,n,b)&&g.preventDefault()},Tb:c};O(a)}
function db(a,b,c,d,f,h){Ua||(Ua=Q(176));a={target:P(a),Zb:!0,Sb:h,Ub:d,Vb:function(g){var m=Ua;F[m>>3]=g.timeStamp;var n=m>>2;D[n+2]=g.location;D[n+3]=g.ctrlKey;D[n+4]=g.shiftKey;D[n+5]=g.altKey;D[n+6]=g.metaKey;D[n+7]=g.repeat;D[n+8]=g.charCode;D[n+9]=g.keyCode;D[n+10]=g.which;A(g.key||"",B,m+44,32);A(g.code||"",B,m+76,32);A(g.char||"",B,m+108,32);A(g.locale||"",B,m+140,32);K(d)(f,m,b)&&g.preventDefault()},Tb:c};O(a)}
function eb(a,b,c){F[a>>3]=b.timeStamp;a>>=2;D[a+2]=b.screenX;D[a+3]=b.screenY;D[a+4]=b.clientX;D[a+5]=b.clientY;D[a+6]=b.ctrlKey;D[a+7]=b.shiftKey;D[a+8]=b.altKey;D[a+9]=b.metaKey;wa[2*a+20]=b.button;wa[2*a+21]=b.buttons;D[a+11]=b.movementX;D[a+12]=b.movementY;c=ab(c);D[a+13]=b.clientX-c.left;D[a+14]=b.clientY-c.top}
function R(a,b,c,d,f,h){Va||(Va=Q(72));a=P(a);O({target:a,Zb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Sb:h,Ub:d,Vb:function(g){g=g||event;eb(Va,g,a);K(d)(f,Va,b)&&g.preventDefault()},Tb:c})}function fb(a,b,c,d,f){Wa||(Wa=Q(260));O({target:a,Sb:f,Ub:d,Vb:function(h){h=h||event;var g=Wa,m=document.pointerLockElement||document.hc||document.jc||document.ic;D[g>>2]=!!m;var n=m&&m.id?m.id:"";A(Sa(m),B,g+4,128);A(n,B,g+132,128);K(d)(20,g,b)&&h.preventDefault()},Tb:c})}
function gb(a,b,c,d,f){O({target:a,Sb:f,Ub:d,Vb:function(h){h=h||event;K(d)(38,0,b)&&h.preventDefault()},Tb:c})}
function hb(a,b,c,d){Xa||(Xa=Q(36));a=P(a);O({target:a,Sb:"resize",Ub:d,Vb:function(f){f=f||event;if(f.target==a){var h=document.body;if(h){var g=Xa;D[g>>2]=f.detail;D[g+4>>2]=h.clientWidth;D[g+8>>2]=h.clientHeight;D[g+12>>2]=innerWidth;D[g+16>>2]=innerHeight;D[g+20>>2]=outerWidth;D[g+24>>2]=outerHeight;D[g+28>>2]=pageXOffset;D[g+32>>2]=pageYOffset;K(d)(10,g,b)&&f.preventDefault()}}},Tb:c})}
function ib(a,b,c,d,f,h){Ya||(Ya=Q(1696));a=P(a);O({target:a,Zb:"touchstart"==h||"touchend"==h,Sb:h,Ub:d,Vb:function(g){for(var m,n={},p=g.touches,t=0;t<p.length;++t)m=p[t],m.mc=m.nc=0,n[m.identifier]=m;for(t=0;t<g.changedTouches.length;++t)m=g.changedTouches[t],m.mc=1,n[m.identifier]=m;for(t=0;t<g.targetTouches.length;++t)n[g.targetTouches[t].identifier].nc=1;p=Ya;F[p>>3]=g.timeStamp;var r=p>>2;D[r+3]=g.ctrlKey;D[r+4]=g.shiftKey;D[r+5]=g.altKey;D[r+6]=g.metaKey;r+=7;var pb=ab(a),qb=0;for(t in n)if(m=
n[t],D[r]=m.identifier,D[r+1]=m.screenX,D[r+2]=m.screenY,D[r+3]=m.clientX,D[r+4]=m.clientY,D[r+5]=m.pageX,D[r+6]=m.pageY,D[r+7]=m.mc,D[r+8]=m.nc,D[r+9]=m.clientX-pb.left,D[r+10]=m.clientY-pb.top,r+=13,31<++qb)break;D[p+8>>2]=qb;K(d)(f,p,b)&&g.preventDefault()},Tb:c})}function jb(a,b,c,d,f,h){a={target:P(a),Sb:h,Ub:d,Vb:function(g){g=g||event;K(d)(f,0,b)&&g.preventDefault()},Tb:c};O(a)}
function kb(a,b,c,d){Za||(Za=Q(104));O({target:a,Zb:!0,Sb:"wheel",Ub:d,Vb:function(f){f=f||event;var h=Za;eb(h,f,a);F[h+72>>3]=f.deltaX;F[h+80>>3]=f.deltaY;F[h+88>>3]=f.deltaZ;D[h+96>>2]=f.deltaMode;K(d)(9,h,b)&&f.preventDefault()},Tb:c})}
function lb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,h){b.drawArraysInstancedANGLE(c,d,f,h)},a.drawElementsInstanced=function(c,d,f,h,g){b.drawElementsInstancedANGLE(c,d,f,h,g)})}
function mb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function nb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}function ob(a){a.Ic=a.getExtension("WEBGL_multi_draw")}
var rb=1,sb=[],S=[],tb=[],T=[],U=[],V=[],ub=[],vb={};function W(a){wb||(wb=a)}function xb(a){for(var b=rb++,c=a.length;c<b;c++)a[c]=null;return b}function yb(a,b){a.lc||(a.lc=a.getContext,a.getContext=function(d,f){f=a.lc(d,f);return"webgl"==d==f instanceof WebGLRenderingContext?f:null});var c=a.getContext("webgl",b);return c?zb(c,b):0}function zb(a,b){var c=xb(ub),d={Gc:c,attributes:b,version:b.Ac,cc:a};a.canvas&&(a.canvas.Bc=d);ub[c]=d;("undefined"===typeof b.kc||b.kc)&&Ab(d);return c}
function Ab(a){a||(a=Bb);if(!a.zc){a.zc=!0;var b=a.cc;lb(b);mb(b);nb(b);b.Ec=b.getExtension("EXT_disjoint_timer_query");ob(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var wb,Bb,Cb=["default","low-power","high-performance"];function Db(a,b,c,d){for(var f=0;f<a;f++){var h=X[c](),g=h&&xb(d);h?(h.name=g,d[g]=h):W(1282);D[b+4*f>>2]=g}}
function Eb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=X.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=X.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)D[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){W(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:W(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}D[b>>2]=c}else W(1281)}function Fb(a){var b=ta(a)+1,c=Q(b);A(a,B,c,b);return c}
function Gb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Hb(a,b,c,d,f){a-=5120;a=1==a?B:4==a?D:6==a?E:5==a||28922==a?ya:xa;var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>h,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}function Y(a){var b=X.wc;if(b){var c=b.Yb[a];"number"===typeof c&&(b.Yb[a]=c=X.getUniformLocation(b,b.uc[a]+(0<c?"["+c+"]":"")));return c}W(1282)}for(var Z=[],X,Ib=new Float32Array(288),Jb=0;288>Jb;++Jb)Z[Jb]=Ib.subarray(0,Jb+1);
var Ub={F:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},L:function(a,b,c){a=P(a);if(!a)return-4;a=ab(a);F[b>>3]=a.width;F[c>>3]=a.height;return 0},p:bb,Za:function(a,b,c){B.copyWithin(a,b,b+c)},qb:function(a,b){function c(d){K(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},_a:function(a){var b=B.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ma.grow(Math.min(2147483648,
d)-va.byteLength+65535>>>16);za();var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},T:function(a,b,c,d){cb(a,b,c,d,12,"blur");return 0},pa:function(a,b,c){a=P(a);if(!a)return-4;a.width=b;a.height=c;return 0},U:function(a,b,c,d){cb(a,b,c,d,13,"focus");return 0},ba:function(a,b,c,d){db(a,b,c,d,2,"keydown");return 0},$:function(a,b,c,d){db(a,b,c,d,1,"keypress");return 0},aa:function(a,b,c,d){db(a,b,c,d,3,"keyup");return 0},ha:function(a,b,c,d){R(a,b,c,d,5,"mousedown");return 0},ea:function(a,
b,c,d){R(a,b,c,d,33,"mouseenter");return 0},da:function(a,b,c,d){R(a,b,c,d,34,"mouseleave");return 0},fa:function(a,b,c,d){R(a,b,c,d,8,"mousemove");return 0},ga:function(a,b,c,d){R(a,b,c,d,6,"mouseup");return 0},W:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.hc||document.body.jc||document.body.ic))return-1;a=P(a);if(!a)return-4;fb(a,b,c,d,"pointerlockchange");fb(a,b,c,d,"mozpointerlockchange");fb(a,b,c,d,"webkitpointerlockchange");fb(a,b,c,d,"mspointerlockchange");
return 0},V:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.hc||document.body.jc||document.body.ic))return-1;a=P(a);if(!a)return-4;gb(a,b,c,d,"pointerlockerror");gb(a,b,c,d,"mozpointerlockerror");gb(a,b,c,d,"webkitpointerlockerror");gb(a,b,c,d,"mspointerlockerror");return 0},Aa:function(a,b,c,d){hb(a,b,c,d);return 0},X:function(a,b,c,d){ib(a,b,c,d,25,"touchcancel");return 0},Y:function(a,b,c,d){ib(a,b,c,d,23,"touchend");return 0},Z:function(a,b,c,d){ib(a,b,c,d,24,
"touchmove");return 0},_:function(a,b,c,d){ib(a,b,c,d,22,"touchstart");return 0},S:function(a,b,c,d){jb(a,b,c,d,31,"webglcontextlost");return 0},R:function(a,b,c,d){jb(a,b,c,d,32,"webglcontextrestored");return 0},ca:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(kb(a,b,c,d),0):-1},ia:function(a,b){b>>=2;b={alpha:!!D[b],depth:!!D[b+1],stencil:!!D[b+2],antialias:!!D[b+3],premultipliedAlpha:!!D[b+4],preserveDrawingBuffer:!!D[b+5],powerPreference:Cb[D[b+6]],failIfMajorPerformanceCaveat:!!D[b+
7],Ac:D[b+8],Hc:D[b+9],kc:D[b+10],yc:D[b+11],Jc:D[b+12],Kc:D[b+13]};a=P(a);return!a||b.yc?0:yb(a,b)},Xa:function(a,b){a=ub[a];b=C(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&lb(X);"OES_vertex_array_object"==b&&mb(X);"WEBGL_draw_buffers"==b&&nb(X);"WEBGL_multi_draw"==b&&ob(X);return!!a.cc.getExtension(b)},fb:function(a){a>>=2;for(var b=0;14>b;++b)D[a+b]=0;D[a]=D[a+1]=D[a+3]=D[a+4]=D[a+8]=D[a+10]=1},Ya:function(a){Bb=ub[a];e.Dc=X=Bb&&Bb.cc;return!a||X?0:-5},b:function(a){X.activeTexture(a)},
H:function(a,b){X.attachShader(S[a],V[b])},c:function(a,b){X.bindBuffer(a,sb[b])},g:function(a,b){X.bindFramebuffer(a,tb[b])},Da:function(a,b){X.bindRenderbuffer(a,T[b])},a:function(a,b){X.bindTexture(a,U[b])},M:function(a,b,c,d){X.blendColor(a,b,c,d)},N:function(a,b){X.blendEquationSeparate(a,b)},O:function(a,b,c,d){X.blendFuncSeparate(a,b,c,d)},Fa:function(a,b,c,d){X.bufferData(a,c?B.subarray(c,c+b):b,d)},k:function(a,b,c,d){X.bufferSubData(a,b,B.subarray(d,d+c))},q:function(a){return X.checkFramebufferStatus(a)},
rb:function(a){X.clear(a)},tb:function(a,b,c,d){X.clearColor(a,b,c,d)},na:function(a){X.clearDepth(a)},sb:function(a){X.clearStencil(a)},o:function(a,b,c,d){X.colorMask(!!a,!!b,!!c,!!d)},sa:function(a){X.compileShader(V[a])},za:function(a,b,c,d,f,h,g,m){X.compressedTexImage2D(a,b,c,d,f,h,m?B.subarray(m,m+g):null)},xa:function(){var a=xb(S),b=X.createProgram();b.name=a;b.bc=b.$b=b.ac=0;b.fc=1;S[a]=b;return a},ua:function(a){var b=xb(V);V[b]=X.createShader(a);return b},I:function(a){X.cullFace(a)},
La:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],f=sb[d];f&&(X.deleteBuffer(f),f.name=0,sb[d]=null)}},d:function(a,b){for(var c=0;c<a;++c){var d=D[b+4*c>>2],f=tb[d];f&&(X.deleteFramebuffer(f),f.name=0,tb[d]=null)}},s:function(a){if(a){var b=S[a];b?(X.deleteProgram(b),b.name=0,S[a]=null):W(1281)}},Q:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],f=T[d];f&&(X.deleteRenderbuffer(f),f.name=0,T[d]=null)}},x:function(a){if(a){var b=V[a];b?(X.deleteShader(b),V[a]=null):W(1281)}},Ka:function(a,
b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],f=U[d];f&&(X.deleteTexture(f),f.name=0,U[d]=null)}},A:function(a){X.depthFunc(a)},z:function(a){X.depthMask(!!a)},e:function(a){X.disable(a)},P:function(a){X.disableVertexAttribArray(a)},db:function(a,b,c){X.drawArrays(a,b,c)},eb:function(a,b,c,d){X.drawArraysInstanced(a,b,c,d)},gb:function(a,b,c,d){X.drawElements(a,b,c,d)},hb:function(a,b,c,d,f){X.drawElementsInstanced(a,b,c,d,f)},i:function(a){X.enable(a)},nb:function(a){X.enableVertexAttribArray(a)},l:function(a,
b,c,d){X.framebufferRenderbuffer(a,b,c,T[d])},h:function(a,b,c,d,f){X.framebufferTexture2D(a,b,c,U[d],f)},J:function(a){X.frontFace(a)},Ga:function(a,b){Db(a,b,"createBuffer",sb)},n:function(a,b){Db(a,b,"createFramebuffer",tb)},Ea:function(a,b){Db(a,b,"createRenderbuffer",T)},Ba:function(a,b){Db(a,b,"createTexture",U)},qa:function(a,b){return X.getAttribLocation(S[a],C(b))},f:function(a,b){Eb(a,b)},va:function(a,b,c,d){a=X.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,B,d,b):
0;c&&(D[c>>2]=b)},G:function(a,b,c){if(c)if(a>=rb)W(1281);else if(a=S[a],35716==b)a=X.getProgramInfoLog(a),null===a&&(a="(unknown error)"),D[c>>2]=a.length+1;else if(35719==b){if(!a.bc)for(b=0;b<X.getProgramParameter(a,35718);++b)a.bc=Math.max(a.bc,X.getActiveUniform(a,b).name.length+1);D[c>>2]=a.bc}else if(35722==b){if(!a.$b)for(b=0;b<X.getProgramParameter(a,35721);++b)a.$b=Math.max(a.$b,X.getActiveAttrib(a,b).name.length+1);D[c>>2]=a.$b}else if(35381==b){if(!a.ac)for(b=0;b<X.getProgramParameter(a,
35382);++b)a.ac=Math.max(a.ac,X.getActiveUniformBlockName(a,b).length+1);D[c>>2]=a.ac}else D[c>>2]=X.getProgramParameter(a,b);else W(1281)},ra:function(a,b,c,d){a=X.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,B,d,b):0;c&&(D[c>>2]=b)},D:function(a,b,c){c?35716==b?(a=X.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),D[c>>2]=a?a.length+1:0):35720==b?(a=X.getShaderSource(V[a]),D[c>>2]=a?a.length+1:0):D[c>>2]=X.getShaderParameter(V[a],b):W(1281)},Ma:function(a){var b=vb[a];
if(!b){switch(a){case 7939:b=X.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Fb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=X.getParameter(a))||W(1280);b=b&&Fb(b);break;case 7938:b=Fb("OpenGL ES 2.0 ("+X.getParameter(7938)+")");break;case 35724:b=X.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Fb(b);break;default:W(1280)}vb[a]=b}return b},
r:function(a,b){b=C(b);if(a=S[a]){var c=a,d=c.Yb,f=c.vc,h;if(!d)for(c.Yb=d={},c.uc={},h=0;h<X.getProgramParameter(c,35718);++h){var g=X.getActiveUniform(c,h);var m=g.name;g=g.size;var n=Gb(m);n=0<n?m.slice(0,n):m;var p=c.fc;c.fc+=g;f[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.uc[p++]=n}c=a.Yb;d=0;f=b;h=Gb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,f=b.slice(0,h));if((f=a.vc[f])&&d<f[0]&&(d+=f[1],c[d]=c[d]||X.getUniformLocation(a,b)))return d}else W(1281);return-1},wa:function(a){a=S[a];X.linkProgram(a);a.Yb=0;
a.vc={}},K:function(a,b){X.polygonOffset(a,b)},Ca:function(a,b,c,d){X.renderbufferStorage(a,b,c,d)},oa:function(a,b,c,d){X.scissor(a,b,c,d)},ta:function(a,b,c,d){for(var f="",h=0;h<b;++h){var g=d?D[d+4*h>>2]:-1;f+=C(D[c+4*h>>2],0>g?void 0:g)}X.shaderSource(V[a],f)},Ia:function(a,b,c){X.stencilFunc(a,b,c)},ma:function(a,b,c,d){X.stencilFuncSeparate(a,b,c,d)},y:function(a){X.stencilMask(a)},Ha:function(a,b,c){X.stencilOp(a,b,c)},la:function(a,b,c,d){X.stencilOpSeparate(a,b,c,d)},ya:function(a,b,c,d,
f,h,g,m,n){X.texImage2D(a,b,c,d,f,h,g,m,n?Hb(m,g,d,f,n):null)},j:function(a,b,c){X.texParameteri(a,b,c)},cb:function(a,b,c,d,f,h,g,m,n){var p=null;n&&(p=Hb(m,g,f,h,n));X.texSubImage2D(a,b,c,d,f,h,g,m,p)},mb:function(a,b,c){if(288>=b)for(var d=Z[b-1],f=0;f<b;++f)d[f]=E[c+4*f>>2];else d=E.subarray(c>>2,c+4*b>>2);X.uniform1fv(Y(a),d)},E:function(a,b){X.uniform1i(Y(a),b)},lb:function(a,b,c){if(144>=b)for(var d=Z[2*b-1],f=0;f<2*b;f+=2)d[f]=E[c+4*f>>2],d[f+1]=E[c+(4*f+4)>>2];else d=E.subarray(c>>2,c+8*
b>>2);X.uniform2fv(Y(a),d)},kb:function(a,b,c){if(96>=b)for(var d=Z[3*b-1],f=0;f<3*b;f+=3)d[f]=E[c+4*f>>2],d[f+1]=E[c+(4*f+4)>>2],d[f+2]=E[c+(4*f+8)>>2];else d=E.subarray(c>>2,c+12*b>>2);X.uniform3fv(Y(a),d)},jb:function(a,b,c){if(72>=b){var d=Z[4*b-1],f=E;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=f[g];d[h+1]=f[g+1];d[h+2]=f[g+2];d[h+3]=f[g+3]}}else d=E.subarray(c>>2,c+16*b>>2);X.uniform4fv(Y(a),d)},ib:function(a,b,c,d){if(18>=b){var f=Z[16*b-1],h=E;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;f[g]=
h[m];f[g+1]=h[m+1];f[g+2]=h[m+2];f[g+3]=h[m+3];f[g+4]=h[m+4];f[g+5]=h[m+5];f[g+6]=h[m+6];f[g+7]=h[m+7];f[g+8]=h[m+8];f[g+9]=h[m+9];f[g+10]=h[m+10];f[g+11]=h[m+11];f[g+12]=h[m+12];f[g+13]=h[m+13];f[g+14]=h[m+14];f[g+15]=h[m+15]}}else f=E.subarray(d>>2,d+64*b>>2);X.uniformMatrix4fv(Y(a),!!c,f)},m:function(a){a=S[a];X.useProgram(a);X.wc=a},ob:function(a,b){X.vertexAttribDivisor(a,b)},pb:function(a,b,c,d,f,h){X.vertexAttribPointer(a,b,c,!!d,f,h)},w:function(a,b,c,d){X.viewport(a,b,c,d)},Va:function(){e.oc=
function(a){0!=Kb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.oc)},Ua:function(){e.tc=function(a){a=a.clipboardData.getData("text");oa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",e.tc)},Ta:function(a){e.Lc=[];a=C(a);a=document.getElementById(a);e.pc=function(b){b.stopPropagation();b.preventDefault()};e.qc=function(b){b.stopPropagation();b.preventDefault()};e.rc=function(b){b.stopPropagation();b.preventDefault()};e.sc=function(b){b.stopPropagation();
b.preventDefault();var c=b.dataTransfer.files;e.ec=c;Lb(c.length);var d;for(d=0;d<c.length;d++)oa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Mb(b.clientX,b.clientY)};a.addEventListener("dragenter",e.pc,!1);a.addEventListener("dragleave",e.qc,!1);a.addEventListener("dragover",e.rc,!1);a.addEventListener("drop",e.sc,!1)},Oa:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},v:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";
a.autocapitalize="none";a.addEventListener("focusout",function(){Nb()});document.body.append(a)},vb:function(a){return 0>a||a>=e.ec.length?0:e.ec[a].size},ub:function(a,b,c,d,f){var h=new FileReader;h.onload=function(g){g=g.target.result;g.byteLength>d?Ob(a,0,1,b,0,c,d,f):(B.set(new Uint8Array(g),c),Ob(a,1,0,b,g.byteLength,c,d,f))};h.onerror=function(){Ob(a,0,2,b,0,c,d,f)};h.readAsArrayBuffer(e.ec[a])},u:function(){document.getElementById("_sokol_app_input_element").focus()},Ja:function(a){a=C(a);
e.Xb=document.getElementById(a);e.Xb||console.log("sokol_app.h: invalid target:"+a);e.Xb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ra:function(){window.removeEventListener("beforeunload",e.oc)},Qa:function(){window.removeEventListener("paste",e.tc)},Pa:function(a){a=C(a);a=document.getElementById(a);a.removeEventListener("dragenter",e.pc);a.removeEventListener("dragleave",e.qc);a.removeEventListener("dragover",e.rc);a.removeEventListener("drop",
e.sc)},C:function(){e.Xb&&e.Xb.requestPointerLock&&e.Xb.requestPointerLock()},Na:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var f=d.getContext("2d"),h=f.createImageData(a,b);h.data.set(B.subarray(c,c+a*b*4));f.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},t:function(){document.getElementById("_sokol_app_input_element").blur()},Sa:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),
b=a.next();!b.done;b=a.next())oa("_sargs_add_kvp",["string","string"],[b.value[0],b.value[1]])},$a:function(){return e.Wb?e.Wb.bufferSize:0},bb:function(a,b,c){e.Rb=null;e.Wb=null;"undefined"!==typeof AudioContext?e.Rb=new AudioContext({sampleRate:a,latencyHint:"interactive"}):"undefined"!==typeof webkitAudioContext?e.Rb=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}):(e.Rb=null,console.log("sokol_audio.h: no WebAudio support"));return e.Rb?(console.log("sokol_audio.h: sample rate ",
e.Rb.sampleRate),e.Wb=e.Rb.createScriptProcessor(c,0,b),e.Wb.onaudioprocess=function(d){var f=d.outputBuffer.length,h=Pb(f);if(h)for(var g=d.outputBuffer.numberOfChannels,m=0;m<g;m++)for(var n=d.outputBuffer.getChannelData(m),p=0;p<f;p++)n[p]=E[(h>>2)+(g*p+m)]},e.Wb.connect(e.Rb.destination),a=function(){e.Rb&&"suspended"===e.Rb.state&&e.Rb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),
1):0},ab:function(){return e.Rb?e.Rb.sampleRate:0},ka:function(){null!==e.Rb&&(e.Wb&&e.Wb.disconnect(),e.Rb.close(),e.Rb=null,e.Wb=null)},Wa:function(){if(e.Rb)return"suspended"===e.Rb.state?1:0},B:function(a,b,c,d,f,h){b=C(b);var g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";var m=0<d;m&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));g.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!m){var n=new Uint8Array(g.response),p=
n.length;p<=h?(B.set(n,f),Qb(a,d,p)):Rb(a)}else Sb(a,this.status)};g.send()},ja:function(a,b){b=C(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");Tb(a,d)}else Sb(a,this.status)};c.send()}};
(function(){function a(f){e.asm=f.exports;ma=e.asm.wb;za();Aa=e.asm.Qb;Ca.unshift(e.asm.xb);G--;e.monitorRunDependencies&&e.monitorRunDependencies(G);0==G&&(null!==Ha&&(clearInterval(Ha),Ha=null),H&&(f=H,H=null,f()))}function b(f){a(f.instance)}function c(f){return La().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(f,function(h){x("failed to asynchronously prepare wasm: "+h);la(h)})}var d={a:Ub};G++;e.monitorRunDependencies&&e.monitorRunDependencies(G);if(e.instantiateWasm)try{return e.instantiateWasm(d,
a)}catch(f){return x("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return y||"function"!==typeof WebAssembly.instantiateStreaming||Ia()||I.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(I,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(h){x("wasm streaming compile failed: "+h);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.xb).apply(null,arguments)};var Nb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Nb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.yb).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.zb).apply(null,arguments)};
var Kb=e.__sapp_html5_get_ask_leave_site=function(){return(Kb=e.__sapp_html5_get_ask_leave_site=e.asm.Ab).apply(null,arguments)},Lb=e.__sapp_emsc_begin_drop=function(){return(Lb=e.__sapp_emsc_begin_drop=e.asm.Bb).apply(null,arguments)};e.__sapp_emsc_drop=function(){return(e.__sapp_emsc_drop=e.asm.Cb).apply(null,arguments)};
var Mb=e.__sapp_emsc_end_drop=function(){return(Mb=e.__sapp_emsc_end_drop=e.asm.Db).apply(null,arguments)},Ob=e.__sapp_emsc_invoke_fetch_cb=function(){return(Ob=e.__sapp_emsc_invoke_fetch_cb=e.asm.Eb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.Fb).apply(null,arguments)};var Pb=e.__saudio_emsc_pull=function(){return(Pb=e.__saudio_emsc_pull=e.asm.Gb).apply(null,arguments)};e.__sargs_add_kvp=function(){return(e.__sargs_add_kvp=e.asm.Hb).apply(null,arguments)};
var Tb=e.__sfetch_emsc_head_response=function(){return(Tb=e.__sfetch_emsc_head_response=e.asm.Ib).apply(null,arguments)},Qb=e.__sfetch_emsc_get_response=function(){return(Qb=e.__sfetch_emsc_get_response=e.asm.Jb).apply(null,arguments)},Sb=e.__sfetch_emsc_failed_http_status=function(){return(Sb=e.__sfetch_emsc_failed_http_status=e.asm.Kb).apply(null,arguments)},Rb=e.__sfetch_emsc_failed_buffer_too_small=function(){return(Rb=e.__sfetch_emsc_failed_buffer_too_small=e.asm.Lb).apply(null,arguments)},Q=
e._malloc=function(){return(Q=e._malloc=e.asm.Mb).apply(null,arguments)},qa=e.stackSave=function(){return(qa=e.stackSave=e.asm.Nb).apply(null,arguments)},ra=e.stackRestore=function(){return(ra=e.stackRestore=e.asm.Ob).apply(null,arguments)},z=e.stackAlloc=function(){return(z=e.stackAlloc=e.asm.Pb).apply(null,arguments)},Vb;function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}H=function Wb(){Vb||Xb();Vb||(H=Wb)};
function Xb(a){function b(){if(!Vb&&(Vb=!0,e.calledRun=!0,!na)){J(Ca);J(Da);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Yb){var c=a,d=e._main;c=c||[];var f=c.length+1,h=z(4*(f+1));D[h>>2]=ua(da);for(var g=1;g<f;g++)D[(h>>2)+g]=ua(c[g-1]);D[(h>>2)+f]=0;try{var m=d(f,h);if(!(noExitRuntime||0<ka)){if(e.onExit)e.onExit(m);na=!0}k(m,new w(m))}catch(n){n instanceof w||"unwind"==n||k(1,n)}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),
Fa.unshift(c);J(Fa)}}a=a||ca;if(!(0<G)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ga();J(Ba);0<G||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Xb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Yb=!0;e.noInitialRun&&(Yb=!1);Xb();
