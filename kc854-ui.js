var g;g||(g=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},g),ba=[],ca="./this.program",da=(a,b)=>{throw b;},ea="object"==typeof window,k="function"==typeof importScripts,fa="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,m="",ha,ia,ja;
if(fa){var fs=require("fs"),ka=require("path");m=k?ka.dirname(m)+"/":__dirname+"/";ha=(a,b)=>{a=a.startsWith("file://")?new URL(a):ka.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};ja=a=>{a=ha(a,!0);a.buffer||(a=new Uint8Array(a));return a};ia=(a,b,c,d=!0)=>{a=a.startsWith("file://")?new URL(a):ka.normalize(a);fs.readFile(a,d?void 0:"utf8",(e,h)=>{e?c(e):b(d?h.buffer:h)})};!g.thisProgram&&1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=
typeof module&&(module.exports=g);process.on("uncaughtException",a=>{if(!("unwind"===a||a instanceof la||a.context instanceof la))throw a;});da=(a,b)=>{process.exitCode=a;throw b;};g.inspect=()=>"[Emscripten Module object]"}else if(ea||k)k?m=self.location.href:"undefined"!=typeof document&&document.currentScript&&(m=document.currentScript.src),m=0!==m.indexOf("blob:")?m.substr(0,m.replace(/[?#].*/,"").lastIndexOf("/")+1):"",ha=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},
k&&(ja=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ia=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ma=g.print||console.log.bind(console),q=g.printErr||console.error.bind(console);Object.assign(g,aa);aa=null;g.arguments&&(ba=g.arguments);g.thisProgram&&(ca=g.thisProgram);
g.quit&&(da=g.quit);var t;g.wasmBinary&&(t=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!=typeof WebAssembly&&na("no native wasm support detected");var oa,pa=!1,qa,u,ra,sa,w,x,y,z;function ta(){var a=oa.buffer;g.HEAP8=qa=new Int8Array(a);g.HEAP16=ra=new Int16Array(a);g.HEAP32=w=new Int32Array(a);g.HEAPU8=u=new Uint8Array(a);g.HEAPU16=sa=new Uint16Array(a);g.HEAPU32=x=new Uint32Array(a);g.HEAPF32=y=new Float32Array(a);g.HEAPF64=z=new Float64Array(a)}
var ua,va=[],wa=[],xa=[],ya=[],za=[];function Aa(){var a=g.preRun.shift();va.unshift(a)}var A=0,Ba=null,B=null;function na(a){if(g.onAbort)g.onAbort(a);a="Aborted("+a+")";q(a);pa=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Ca(a){return a.startsWith("data:application/octet-stream;base64,")}var C;C="kc854-ui.wasm";if(!Ca(C)){var Da=C;C=g.locateFile?g.locateFile(Da,m):m+Da}
function Ea(a){if(a==C&&t)return new Uint8Array(t);if(ja)return ja(a);throw"both async and sync fetching of the wasm failed";}function Fa(a){if(!t&&(ea||k)){if("function"==typeof fetch&&!a.startsWith("file://"))return fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw"failed to load wasm binary file at '"+a+"'";return b.arrayBuffer()}).catch(()=>Ea(a));if(ia)return new Promise((b,c)=>{ia(a,d=>b(new Uint8Array(d)),c)})}return Promise.resolve().then(()=>Ea(a))}
function Ga(a,b,c){return Fa(a).then(d=>WebAssembly.instantiate(d,b)).then(d=>d).then(c,d=>{q("failed to asynchronously prepare wasm: "+d);na(d)})}
function Ha(a,b){var c=C;t||"function"!=typeof WebAssembly.instantiateStreaming||Ca(c)||c.startsWith("file://")||fa||"function"!=typeof fetch?Ga(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){q("wasm streaming compile failed: "+e);q("falling back to ArrayBuffer instantiation");return Ga(c,a,b)}))}function la(a){this.name="ExitStatus";this.message=`Program terminated with exit(${a})`;this.status=a}
var Ia=a=>{for(;0<a.length;)a.shift()(g)},Ja="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,D=(a,b,c)=>{var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&Ja)return Ja.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|f:(e&7)<<18|h<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=
String.fromCharCode(e)}return d},Ma=a=>{var b=Ka();a();La(b)},Na=0;function Oa(){for(var a=E.length-1;0<=a;--a)Pa(a);E=[];Qa=[]}var Qa=[];function Ra(){if(navigator.userActivation?navigator.userActivation.isActive:Na&&Sa.Ic)for(var a=0;a<Qa.length;++a){var b=Qa[a];Qa.splice(a,1);--a;b.ud.apply(null,b.ld)}}var E=[];function Pa(a){var b=E[a];b.target.removeEventListener(b.zc,b.gd,b.Ac);E.splice(a,1)}
function F(a){function b(d){++Na;Sa=a;Ra();a.Cc(d);Ra();--Na}if(!a.target)return-4;if(a.Bc)a.gd=b,a.target.addEventListener(a.zc,b,a.Ac),E.push(a),Ta||(ya.push(Oa),Ta=!0);else for(var c=0;c<E.length;++c)E[c].target==a.target&&E[c].zc==a.zc&&Pa(c--);return 0}function Ua(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ta,Sa,Va,Wa,Xa,Ya,Za,$a,ab,bb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function G(a){a=2<a?a?D(u,a):"":a;return bb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function cb(a){return 0>bb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
var db=[],H=a=>{var b=db[a];b||(a>=db.length&&(db.length=a+1),db[a]=b=ua.get(a));return b},I=(a,b,c)=>{var d=u;if(!(0<c))return 0;var e=b;c=b+c-1;for(var h=0;h<a.length;++h){var f=a.charCodeAt(h);if(55296<=f&&57343>=f){var l=a.charCodeAt(++h);f=65536+((f&1023)<<10)|l&1023}if(127>=f){if(b>=c)break;d[b++]=f}else{if(2047>=f){if(b+1>=c)break;d[b++]=192|f>>6}else{if(65535>=f){if(b+2>=c)break;d[b++]=224|f>>12}else{if(b+3>=c)break;d[b++]=240|f>>18;d[b++]=128|f>>12&63}d[b++]=128|f>>6&63}d[b++]=128|f&63}}d[b]=
0;return b-e};function eb(a,b,c,d,e,h){Va||(Va=J(256));a={target:G(a),zc:h,Bc:d,Cc:function(f=event){var l=f.target.id?f.target.id:"",n=Va;I(Ua(f.target),n+0,128);I(l,n+128,128);H(d)(e,n,b)&&f.preventDefault()},Ac:c};return F(a)}
function fb(a,b,c,d,e,h){Wa||(Wa=J(176));a={target:G(a),Ic:!0,zc:h,Bc:d,Cc:function(f){var l=Wa;z[l>>3]=f.timeStamp;var n=l>>2;w[n+2]=f.location;w[n+3]=f.ctrlKey;w[n+4]=f.shiftKey;w[n+5]=f.altKey;w[n+6]=f.metaKey;w[n+7]=f.repeat;w[n+8]=f.charCode;w[n+9]=f.keyCode;w[n+10]=f.which;I(f.key||"",l+44,32);I(f.code||"",l+76,32);I(f.char||"",l+108,32);I(f.locale||"",l+140,32);H(d)(e,l,b)&&f.preventDefault()},Ac:c};return F(a)}
function gb(a,b,c){z[a>>3]=b.timeStamp;a>>=2;w[a+2]=b.screenX;w[a+3]=b.screenY;w[a+4]=b.clientX;w[a+5]=b.clientY;w[a+6]=b.ctrlKey;w[a+7]=b.shiftKey;w[a+8]=b.altKey;w[a+9]=b.metaKey;ra[2*a+20]=b.button;ra[2*a+21]=b.buttons;w[a+11]=b.movementX;w[a+12]=b.movementY;c=cb(c);w[a+13]=b.clientX-c.left;w[a+14]=b.clientY-c.top}
function K(a,b,c,d,e,h){Xa||(Xa=J(72));a=G(a);return F({target:a,Ic:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,zc:h,Bc:d,Cc:function(f=event){gb(Xa,f,a);H(d)(e,Xa,b)&&f.preventDefault()},Ac:c})}function hb(a,b,c,d,e){Ya||(Ya=J(260));return F({target:a,zc:e,Bc:d,Cc:function(h=event){var f=Ya,l=document.pointerLockElement||document.Hc||document.Oc||document.dd;w[f>>2]=!!l;var n=l&&l.id?l.id:"";I(Ua(l),f+4,128);I(n,f+132,128);H(d)(20,f,b)&&h.preventDefault()},Ac:c})}
function ib(a,b,c,d,e){return F({target:a,zc:e,Bc:d,Cc:function(h=event){H(d)(38,0,b)&&h.preventDefault()},Ac:c})}
function jb(a,b,c,d){Za||(Za=J(36));a=G(a);return F({target:a,zc:"resize",Bc:d,Cc:function(e=event){if(e.target==a){var h=document.body;if(h){var f=Za;w[f>>2]=e.detail;w[f+4>>2]=h.clientWidth;w[f+8>>2]=h.clientHeight;w[f+12>>2]=innerWidth;w[f+16>>2]=innerHeight;w[f+20>>2]=outerWidth;w[f+24>>2]=outerHeight;w[f+28>>2]=pageXOffset;w[f+32>>2]=pageYOffset;H(d)(10,f,b)&&e.preventDefault()}}},Ac:c})}
function kb(a,b,c,d,e,h){$a||($a=J(1696));a=G(a);return F({target:a,Ic:"touchstart"==h||"touchend"==h,zc:h,Bc:d,Cc:function(f){for(var l,n={},p=f.touches,r=0;r<p.length;++r)l=p[r],l.Sc=l.Uc=0,n[l.identifier]=l;for(r=0;r<f.changedTouches.length;++r)l=f.changedTouches[r],l.Sc=1,n[l.identifier]=l;for(r=0;r<f.targetTouches.length;++r)n[f.targetTouches[r].identifier].Uc=1;p=$a;z[p>>3]=f.timeStamp;var v=p>>2;w[v+3]=f.ctrlKey;w[v+4]=f.shiftKey;w[v+5]=f.altKey;w[v+6]=f.metaKey;v+=7;var pb=cb(a),qb=0;for(r in n)if(l=
n[r],w[v]=l.identifier,w[v+1]=l.screenX,w[v+2]=l.screenY,w[v+3]=l.clientX,w[v+4]=l.clientY,w[v+5]=l.pageX,w[v+6]=l.pageY,w[v+7]=l.Sc,w[v+8]=l.Uc,w[v+9]=l.clientX-pb.left,w[v+10]=l.clientY-pb.top,v+=13,31<++qb)break;w[p+8>>2]=qb;H(d)(e,p,b)&&f.preventDefault()},Ac:c})}
function lb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,f){b.drawElementsInstancedANGLE(c,d,e,h,f)})}
function mb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function nb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function ob(a){a.nd=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function rb(a){a.od=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function sb(a){a.qd=a.getExtension("WEBGL_multi_draw")}var tb=1,ub=[],L=[],vb=[],M=[],N=[],O=[],wb=[],xb=[],P=[],yb={},zb=4;function Q(a){Ab||(Ab=a)}function Bb(a){for(var b=tb++,c=a.length;c<b;c++)a[c]=null;return b}
function Cb(a,b){a.Hc||(a.Hc=a.getContext,a.getContext=function(d,e){e=a.Hc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Tc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Db(c,b):0}function Db(a,b){var c=Bb(xb),d={handle:c,attributes:b,version:b.Tc,Mc:a};a.canvas&&(a.canvas.kd=d);xb[c]=d;("undefined"==typeof b.Rc||b.Rc)&&Eb(d);return c}
function Eb(a){a||(a=R);if(!a.jd){a.jd=!0;var b=a.Mc;lb(b);mb(b);nb(b);ob(b);rb(b);2<=a.version&&(b.Qc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Qc)b.Qc=b.getExtension("EXT_disjoint_timer_query");sb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Ab,R;function Fb(a,b,c,d,e,h){a={target:G(a),zc:h,Bc:d,Cc:(f=event)=>{H(d)(e,0,b)&&f.preventDefault()},Ac:c};F(a)}
function Gb(a,b,c,d){ab||(ab=J(104));return F({target:a,Ic:!0,zc:"wheel",Bc:d,Cc:function(e=event){var h=ab;gb(h,e,a);z[h+72>>3]=e.deltaX;z[h+80>>3]=e.deltaY;z[h+88>>3]=e.deltaZ;w[h+96>>2]=e.deltaMode;H(d)(9,h,b)&&e.preventDefault()},Ac:c})}var Hb=["default","low-power","high-performance"],Ib=[null,[],[]],Jb=[];function S(a,b,c,d){for(var e=0;e<a;e++){var h=T[c](),f=h&&Bb(d);h?(h.name=f,d[f]=h):Q(1282);w[b+4*e>>2]=f}}
function Kb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=T.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>R.version){Q(1282);return}c=2*(T.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>R.version){Q(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=T.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":Q(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:Q(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)w[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){Q(1280);q("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:Q(1280);q("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}w[b>>2]=c}else Q(1281)}
var Lb=a=>{for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b};function Mb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function U(a){a-=5120;return 0==a?qa:1==a?u:2==a?ra:4==a?w:6==a?y:5==a||28922==a||28520==a||30779==a||30782==a?x:sa}function V(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}
function Nb(a,b,c,d,e){a=U(a);var h=V(a),f=zb;return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+f-1&-f)>>h)}function W(a){var b=T.ed;if(b){var c=b.Gc[a];"number"==typeof c&&(b.Gc[a]=c=T.getUniformLocation(b,b.bd[a]+(0<c?"["+c+"]":"")));return c}Q(1282)}for(var X=[],Y=[],Ob=a=>{if(!noExitRuntime){if(g.onExit)g.onExit(a);pa=!0}da(a,new la(a))},Qb=a=>{var b=Lb(a)+1,c=Pb(b);I(a,c,b);return c},T,Z=0;32>Z;++Z)Jb.push(Array(Z));var Rb=new Float32Array(288);
for(Z=0;288>Z;++Z)X[Z]=Rb.subarray(0,Z+1);var Sb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Sb.subarray(0,Z+1);
var hc={ma:function(){return 0},ob:function(){return 0},pb:function(){},h:()=>{na("")},ga:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ha:function(a,b,c){a=G(a);if(!a)return-4;a=cb(a);z[b>>3]=a.width;z[c>>3]=a.height;return 0},B:()=>performance.now(),kb:(a,b,c)=>u.copyWithin(a,b,b+c),$a:function(a,b){function c(d){H(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},jb:a=>{var b=u.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+
.2/c);d=Math.min(d,a+100663296);var e=Math;d=Math.max(a,d);a:{e=e.min.call(e,2147483648,d+(65536-d%65536)%65536)-oa.buffer.byteLength+65535>>>16;try{oa.grow(e);ta();var h=1;break a}catch(f){}h=void 0}if(h)return!0}return!1},Q:function(a,b,c,d){return eb(a,b,c,d,12,"blur")},fa:function(a,b,c){a=G(a);if(!a)return-4;a.width=b;a.height=c;return 0},R:function(a,b,c,d){return eb(a,b,c,d,13,"focus")},_:function(a,b,c,d){return fb(a,b,c,d,2,"keydown")},Y:function(a,b,c,d){return fb(a,b,c,d,1,"keypress")},
Z:function(a,b,c,d){return fb(a,b,c,d,3,"keyup")},ea:function(a,b,c,d){return K(a,b,c,d,5,"mousedown")},ba:function(a,b,c,d){return K(a,b,c,d,33,"mouseenter")},aa:function(a,b,c,d){return K(a,b,c,d,34,"mouseleave")},ca:function(a,b,c,d){return K(a,b,c,d,8,"mousemove")},da:function(a,b,c,d){return K(a,b,c,d,6,"mouseup")},T:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Hc||document.body.Oc||document.body.dd))return-1;a=G(a);if(!a)return-4;hb(a,b,c,
d,"mozpointerlockchange");hb(a,b,c,d,"webkitpointerlockchange");hb(a,b,c,d,"mspointerlockchange");return hb(a,b,c,d,"pointerlockchange")},S:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Hc||document.body.Oc||document.body.dd))return-1;a=G(a);if(!a)return-4;ib(a,b,c,d,"mozpointerlockerror");ib(a,b,c,d,"webkitpointerlockerror");ib(a,b,c,d,"mspointerlockerror");return ib(a,b,c,d,"pointerlockerror")},ab:function(a,b,c,d){return jb(a,b,c,d)},U:function(a,b,c,d){return kb(a,
b,c,d,25,"touchcancel")},V:function(a,b,c,d){return kb(a,b,c,d,23,"touchend")},W:function(a,b,c,d){return kb(a,b,c,d,24,"touchmove")},X:function(a,b,c,d){return kb(a,b,c,d,22,"touchstart")},P:function(a,b,c,d){Fb(a,b,c,d,31,"webglcontextlost");return 0},O:function(a,b,c,d){Fb(a,b,c,d,32,"webglcontextrestored");return 0},$:function(a,b,c,d){return(a=G(a))?"undefined"!=typeof a.onwheel?Gb(a,b,c,d):-1:-4},Za:function(a,b){b>>=2;b={alpha:!!w[b],depth:!!w[b+1],stencil:!!w[b+2],antialias:!!w[b+3],premultipliedAlpha:!!w[b+
4],preserveDrawingBuffer:!!w[b+5],powerPreference:Hb[w[b+6]],failIfMajorPerformanceCaveat:!!w[b+7],Tc:w[b+8],pd:w[b+9],Rc:w[b+10],hd:w[b+11],rd:w[b+12],sd:w[b+13]};a=G(a);return!a||b.hd?0:Cb(a,b)},Xa:function(a,b){a=xb[a];b=b?D(u,b):"";b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&lb(T);"OES_vertex_array_object"==b&&mb(T);"WEBGL_draw_buffers"==b&&nb(T);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&ob(T);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&rb(T);"WEBGL_multi_draw"==
b&&sb(T);return!!a.Mc.getExtension(b)},_a:function(a){a>>=2;for(var b=0;14>b;++b)w[a+b]=0;w[a]=w[a+1]=w[a+3]=w[a+4]=w[a+8]=w[a+10]=1},Ya:function(a){R=xb[a];g.md=T=R&&R.Mc;return!a||T?0:-5},la:()=>52,nb:()=>52,ib:function(){return 70},mb:(a,b,c,d)=>{for(var e=0,h=0;h<c;h++){var f=x[b>>2],l=x[b+4>>2];b+=8;for(var n=0;n<l;n++){var p=u[f+n],r=Ib[a];0===p||10===p?((1===a?ma:q)(D(r,0)),r.length=0):r.push(p)}e+=l}x[d>>2]=e;return 0},l:function(a,b,c){const d=a?D(u,a):"";console.log("fs_js_load_snapshot: called with",
d,b);let e;try{e=window.indexedDB.open("chips",1)}catch(h){console.log("fs_js_load_snapshot: failed to open IndexedDB with "+h)}e.onupgradeneeded=()=>{console.log("fs_js_load_snapshot: creating db");e.result.createObjectStore("store")};e.onsuccess=()=>{var h=e.result;let f;try{f=h.transaction(["store"],"readwrite")}catch(p){console.log("fs_js_load_snapshot: db.transaction failed with",p);return}h=f.objectStore("store");let l=d+"_"+b,n=h.get(l);n.onsuccess=()=>{if(void 0!==n.result){let p=n.result.length;
console.log("fs_js_load_snapshot:",l,"successfully loaded",p,"bytes");let r=Tb(p);u.set(n.result,r);Ub(c,r,p)}else console.log("fs_js_load_snapshot:",l,"does not exist"),Ub(c,0,0)};n.onerror=()=>{console.log("fs_js_load_snapshot: FAILED loading",l)};f.onerror=()=>{console.log("fs_js_load_snapshot: transaction onerror")}};e.onerror=()=>{console.log("fs_js_load_snapshot: open_request onerror")}},ac:function(a,b,c,d){const e=a?D(u,a):"";console.log("fs_js_save_snapshot: called with",e,b);let h;try{h=
window.indexedDB.open("chips",1)}catch(f){console.log("fs_js_save_snapshot: failed to open IndexedDB with "+f);return}h.onupgradeneeded=()=>{console.log("fs_js_save_snapshot: creating db");h.result.createObjectStore("store")};h.onsuccess=()=>{console.log("fs_js_save_snapshot: onsuccess");let f=h.result.transaction(["store"],"readwrite");var l=f.objectStore("store");let n=e+"_"+b;l=l.put(u.subarray(c,c+d),n);l.onsuccess=()=>{console.log("fs_js_save_snapshot:",n,"successfully stored")};l.onerror=()=>
{console.log("fs_js_save_snapshot: FAILED to store",n)};f.onerror=()=>{console.log("fs_js_save_snapshot: transaction onerror")}};h.onerror=()=>{console.log("fs_js_save_snapshot: open_request onerror")}},f:function(a){T.activeTexture(a)},ya:function(a,b){T.attachShader(L[a],O[b])},b:function(a,b){35051==a?T.Pc=b:35052==a&&(T.Ec=b);T.bindBuffer(a,ub[b])},i:function(a,b){T.bindFramebuffer(a,vb[b])},Fa:function(a,b){T.bindRenderbuffer(a,M[b])},g:function(a,b){T.bindSampler(a,P[b])},a:function(a,b){T.bindTexture(a,
N[b])},M:function(a){T.bindVertexArray(wb[a])},I:function(a,b,c,d){T.blendColor(a,b,c,d)},J:function(a,b){T.blendEquationSeparate(a,b)},K:function(a,b,c,d){T.blendFuncSeparate(a,b,c,d)},tb:function(a,b,c,d,e,h,f,l,n,p){T.blitFramebuffer(a,b,c,d,e,h,f,l,n,p)},Ha:function(a,b,c,d){2<=R.version?c&&b?T.bufferData(a,u,d,c,b):T.bufferData(a,b,d):T.bufferData(a,c?u.subarray(c,c+b):b,d)},r:function(a,b,c,d){2<=R.version?c&&T.bufferSubData(a,b,u,d,c):T.bufferSubData(a,b,u.subarray(d,d+c))},sa:function(a){return T.checkFramebufferStatus(a)},
Ob:function(a,b,c,d){T.clearBufferfi(a,b,c,d)},qa:function(a,b,c){T.clearBufferfv(a,b,y,c>>2)},Nb:function(a,b,c){T.clearBufferiv(a,b,w,c>>2)},o:function(a,b,c,d){T.colorMask(!!a,!!b,!!c,!!d)},Sb:function(a){T.compileShader(O[a])},Ca:function(a,b,c,d,e,h,f,l){2<=R.version?T.Ec||!f?T.compressedTexImage2D(a,b,c,d,e,h,f,l):T.compressedTexImage2D(a,b,c,d,e,h,u,l,f):T.compressedTexImage2D(a,b,c,d,e,h,l?u.subarray(l,l+f):null)},Aa:function(a,b,c,d,e,h,f,l,n){T.Ec?T.compressedTexImage3D(a,b,c,d,e,h,f,l,
n):T.compressedTexImage3D(a,b,c,d,e,h,f,u,n,l)},Yb:function(){var a=Bb(L),b=T.createProgram();b.name=a;b.Lc=b.Jc=b.Kc=0;b.Nc=1;L[a]=b;return a},Ub:function(a){var b=Bb(O);O[b]=T.createShader(a);return b},F:function(a){T.cullFace(a)},Ta:function(a,b){for(var c=0;c<a;c++){var d=w[b+4*c>>2],e=ub[d];e&&(T.deleteBuffer(e),e.name=0,ub[d]=null,d==T.Pc&&(T.Pc=0),d==T.Ec&&(T.Ec=0))}},e:function(a,b){for(var c=0;c<a;++c){var d=w[b+4*c>>2],e=vb[d];e&&(T.deleteFramebuffer(e),e.name=0,vb[d]=null)}},z:function(a){if(a){var b=
L[a];b?(T.deleteProgram(b),b.name=0,L[a]=null):Q(1281)}},Ra:function(a,b){for(var c=0;c<a;c++){var d=w[b+4*c>>2],e=M[d];e&&(T.deleteRenderbuffer(e),e.name=0,M[d]=null)}},N:function(a,b){for(var c=0;c<a;c++){var d=w[b+4*c>>2],e=P[d];e&&(T.deleteSampler(e),e.name=0,P[d]=null)}},E:function(a){if(a){var b=O[a];b?(T.deleteShader(b),O[a]=null):Q(1281)}},Sa:function(a,b){for(var c=0;c<a;c++){var d=w[b+4*c>>2],e=N[d];e&&(T.deleteTexture(e),e.name=0,N[d]=null)}},Pa:function(a,b){for(var c=0;c<a;c++){var d=
w[b+4*c>>2];T.deleteVertexArray(wb[d]);wb[d]=null}},y:function(a){T.depthFunc(a)},x:function(a){T.depthMask(!!a)},d:function(a){T.disable(a)},L:function(a){T.disableVertexAttribArray(a)},vb:function(a,b,c){T.drawArrays(a,b,c)},wb:function(a,b,c,d){T.drawArraysInstanced(a,b,c,d)},ra:function(a,b){for(var c=Jb[a],d=0;d<a;d++)c[d]=w[b+4*d>>2];T.drawBuffers(c)},xb:function(a,b,c,d){T.drawElements(a,b,c,d)},yb:function(a,b,c,d,e){T.drawElementsInstanced(a,b,c,d,e)},k:function(a){T.enable(a)},Jb:function(a){T.enableVertexAttribArray(a)},
ta:function(a,b,c,d){T.framebufferRenderbuffer(a,b,c,M[d])},n:function(a,b,c,d,e){T.framebufferTexture2D(a,b,c,N[d],e)},D:function(a,b,c,d,e){T.framebufferTextureLayer(a,b,N[c],d,e)},G:function(a){T.frontFace(a)},Ia:function(a,b){S(a,b,"createBuffer",ub)},ua:function(a,b){S(a,b,"createFramebuffer",vb)},Ga:function(a,b){S(a,b,"createRenderbuffer",M)},Zb:function(a,b){S(a,b,"createSampler",P)},Da:function(a,b){S(a,b,"createTexture",N)},Oa:function(a,b){S(a,b,"createVertexArray",wb)},Qb:function(a,b){return T.getAttribLocation(L[a],
b?D(u,b):"")},c:function(a,b){Kb(a,b)},Wb:function(a,b,c,d){a=T.getProgramInfoLog(L[a]);null===a&&(a="(unknown error)");b=0<b&&d?I(a,d,b):0;c&&(w[c>>2]=b)},xa:function(a,b,c){if(c)if(a>=tb)Q(1281);else if(a=L[a],35716==b)a=T.getProgramInfoLog(a),null===a&&(a="(unknown error)"),w[c>>2]=a.length+1;else if(35719==b){if(!a.Lc)for(b=0;b<T.getProgramParameter(a,35718);++b)a.Lc=Math.max(a.Lc,T.getActiveUniform(a,b).name.length+1);w[c>>2]=a.Lc}else if(35722==b){if(!a.Jc)for(b=0;b<T.getProgramParameter(a,
35721);++b)a.Jc=Math.max(a.Jc,T.getActiveAttrib(a,b).name.length+1);w[c>>2]=a.Jc}else if(35381==b){if(!a.Kc)for(b=0;b<T.getProgramParameter(a,35382);++b)a.Kc=Math.max(a.Kc,T.getActiveUniformBlockName(a,b).length+1);w[c>>2]=a.Kc}else w[c>>2]=T.getProgramParameter(a,b);else Q(1281)},Rb:function(a,b,c,d){a=T.getShaderInfoLog(O[a]);null===a&&(a="(unknown error)");b=0<b&&d?I(a,d,b):0;c&&(w[c>>2]=b)},va:function(a,b,c){c?35716==b?(a=T.getShaderInfoLog(O[a]),null===a&&(a="(unknown error)"),w[c>>2]=a?a.length+
1:0):35720==b?(a=T.getShaderSource(O[a]),w[c>>2]=a?a.length+1:0):w[c>>2]=T.getShaderParameter(O[a],b):Q(1281)},Va:function(a,b){if(2>R.version)return Q(1282),0;var c=yb[a];if(c)return 0>b||b>=c.length?(Q(1281),0):c[b];switch(a){case 7939:return c=T.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){var e=Lb(d)+1,h=J(e);h&&I(d,h,e);return h}),c=yb[a]=c,0>b||b>=c.length?(Q(1281),0):c[b];default:return Q(1280),0}},v:function(a,b){b=b?D(u,b):"";if(a=L[a]){var c=
a,d=c.Gc,e=c.cd,h;if(!d)for(c.Gc=d={},c.bd={},h=0;h<T.getProgramParameter(c,35718);++h){var f=T.getActiveUniform(c,h);var l=f.name;f=f.size;var n=Mb(l);n=0<n?l.slice(0,n):l;var p=c.Nc;c.Nc+=f;e[n]=[f,p];for(l=0;l<f;++l)d[p]=l,c.bd[p++]=n}c=a.Gc;d=0;e=b;h=Mb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.cd[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||T.getUniformLocation(a,b)))return d}else Q(1281);return-1},sb:function(a,b,c){for(var d=Jb[b],e=0;e<b;e++)d[e]=w[c+4*e>>2];T.invalidateFramebuffer(a,
d)},Xb:function(a){a=L[a];T.linkProgram(a);a.Gc=0;a.cd={}},Na:function(a,b){3317==a&&(zb=b);T.pixelStorei(a,b)},H:function(a,b){T.polygonOffset(a,b)},ub:function(a){T.readBuffer(a)},Ea:function(a,b,c,d,e){T.renderbufferStorageMultisample(a,b,c,d,e)},za:function(a,b,c){T.samplerParameterf(P[a],b,c)},j:function(a,b,c){T.samplerParameteri(P[a],b,c)},q:function(a,b,c,d){T.scissor(a,b,c,d)},Tb:function(a,b,c,d){for(var e="",h=0;h<b;++h){var f=d?w[d+4*h>>2]:-1,l=w[c+4*h>>2];f=l?D(u,l,0>f?void 0:f):"";e+=
f}T.shaderSource(O[a],e)},La:function(a,b,c){T.stencilFunc(a,b,c)},pa:function(a,b,c,d){T.stencilFuncSeparate(a,b,c,d)},w:function(a){T.stencilMask(a)},Ka:function(a,b,c){T.stencilOp(a,b,c)},oa:function(a,b,c,d){T.stencilOpSeparate(a,b,c,d)},Ba:function(a,b,c,d,e,h,f,l,n){if(2<=R.version)if(T.Ec)T.texImage2D(a,b,c,d,e,h,f,l,n);else if(n){var p=U(l);T.texImage2D(a,b,c,d,e,h,f,l,p,n>>V(p))}else T.texImage2D(a,b,c,d,e,h,f,l,null);else T.texImage2D(a,b,c,d,e,h,f,l,n?Nb(l,f,d,e,n):null)},_b:function(a,
b,c,d,e,h,f,l,n,p){if(T.Ec)T.texImage3D(a,b,c,d,e,h,f,l,n,p);else if(p){var r=U(n);T.texImage3D(a,b,c,d,e,h,f,l,n,r,p>>V(r))}else T.texImage3D(a,b,c,d,e,h,f,l,n,null)},rb:function(a,b,c,d,e,h,f,l,n){if(2<=R.version)if(T.Ec)T.texSubImage2D(a,b,c,d,e,h,f,l,n);else if(n){var p=U(l);T.texSubImage2D(a,b,c,d,e,h,f,l,p,n>>V(p))}else T.texSubImage2D(a,b,c,d,e,h,f,l,null);else p=null,n&&(p=Nb(l,f,e,h,n)),T.texSubImage2D(a,b,c,d,e,h,f,l,p)},qb:function(a,b,c,d,e,h,f,l,n,p,r){if(T.Ec)T.texSubImage3D(a,b,c,d,
e,h,f,l,n,p,r);else if(r){var v=U(p);T.texSubImage3D(a,b,c,d,e,h,f,l,n,p,v,r>>V(v))}else T.texSubImage3D(a,b,c,d,e,h,f,l,n,p,null)},Ib:function(a,b,c){if(2<=R.version)b&&T.uniform1fv(W(a),y,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=y[c+4*e>>2];else d=y.subarray(c>>2,c+4*b>>2);T.uniform1fv(W(a),d)}},wa:function(a,b){T.uniform1i(W(a),b)},Eb:function(a,b,c){if(2<=R.version)b&&T.uniform1iv(W(a),w,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=w[c+4*e>>2];else d=w.subarray(c>>
2,c+4*b>>2);T.uniform1iv(W(a),d)}},Hb:function(a,b,c){if(2<=R.version)b&&T.uniform2fv(W(a),y,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=y[c+4*e>>2],d[e+1]=y[c+(4*e+4)>>2];else d=y.subarray(c>>2,c+8*b>>2);T.uniform2fv(W(a),d)}},Cb:function(a,b,c){if(2<=R.version)b&&T.uniform2iv(W(a),w,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=w[c+4*e>>2],d[e+1]=w[c+(4*e+4)>>2];else d=w.subarray(c>>2,c+8*b>>2);T.uniform2iv(W(a),d)}},Gb:function(a,b,c){if(2<=R.version)b&&T.uniform3fv(W(a),
y,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=y[c+4*e>>2],d[e+1]=y[c+(4*e+4)>>2],d[e+2]=y[c+(4*e+8)>>2];else d=y.subarray(c>>2,c+12*b>>2);T.uniform3fv(W(a),d)}},Bb:function(a,b,c){if(2<=R.version)b&&T.uniform3iv(W(a),w,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=w[c+4*e>>2],d[e+1]=w[c+(4*e+4)>>2],d[e+2]=w[c+(4*e+8)>>2];else d=w.subarray(c>>2,c+12*b>>2);T.uniform3iv(W(a),d)}},Fb:function(a,b,c){if(2<=R.version)b&&T.uniform4fv(W(a),y,c>>2,4*b);else{if(72>=b){var d=
X[4*b-1],e=y;c>>=2;for(var h=0;h<4*b;h+=4){var f=c+h;d[h]=e[f];d[h+1]=e[f+1];d[h+2]=e[f+2];d[h+3]=e[f+3]}}else d=y.subarray(c>>2,c+16*b>>2);T.uniform4fv(W(a),d)}},Ab:function(a,b,c){if(2<=R.version)b&&T.uniform4iv(W(a),w,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=w[c+4*e>>2],d[e+1]=w[c+(4*e+4)>>2],d[e+2]=w[c+(4*e+8)>>2],d[e+3]=w[c+(4*e+12)>>2];else d=w.subarray(c>>2,c+16*b>>2);T.uniform4iv(W(a),d)}},zb:function(a,b,c,d){if(2<=R.version)b&&T.uniformMatrix4fv(W(a),!!c,y,d>>2,16*
b);else{if(18>=b){var e=X[16*b-1],h=y;d>>=2;for(var f=0;f<16*b;f+=16){var l=d+f;e[f]=h[l];e[f+1]=h[l+1];e[f+2]=h[l+2];e[f+3]=h[l+3];e[f+4]=h[l+4];e[f+5]=h[l+5];e[f+6]=h[l+6];e[f+7]=h[l+7];e[f+8]=h[l+8];e[f+9]=h[l+9];e[f+10]=h[l+10];e[f+11]=h[l+11];e[f+12]=h[l+12];e[f+13]=h[l+13];e[f+14]=h[l+14];e[f+15]=h[l+15]}}else e=y.subarray(d>>2,d+64*b>>2);T.uniformMatrix4fv(W(a),!!c,e)}},p:function(a){a=L[a];T.useProgram(a);T.ed=a},Kb:function(a,b){T.vertexAttribDivisor(a,b)},Lb:function(a,b,c,d,e,h){T.vertexAttribPointer(a,
b,c,!!d,e,h)},m:function(a,b,c,d){T.viewport(a,b,c,d)},Wa:function(){g.Vc=a=>{0!=Vb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",g.Vc)},Qa:function(){g.ad=a=>{const b=a.clipboardData.getData("text");Ma(()=>{const c=Qb(b);Wb(c)})};window.addEventListener("paste",g.ad)},$b:function(a){g.td=[];a=a?D(u,a):"";a=document.getElementById(a);g.Wc=b=>{b.stopPropagation();b.preventDefault()};g.Xc=b=>{b.stopPropagation();b.preventDefault()};g.Yc=b=>{b.stopPropagation();b.preventDefault()};
g.Zc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;g.$c=c;Xb(c.length);for(let e=0;e<c.length;e++)Ma(()=>{const h=Qb(c[e].name);Yb(e,h)});let d=0;b.shiftKey&&(d|=1);b.ctrlKey&&(d|=2);b.altKey&&(d|=4);b.metaKey&&(d|=8);Zb(b.clientX,b.clientY,d)};a.addEventListener("dragenter",g.Wc,!1);a.addEventListener("dragleave",g.Xc,!1);a.addEventListener("dragover",g.Yc,!1);a.addEventListener("drop",g.Zc,!1)},hb:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},
u:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){$b()});document.body.append(a)},Vb:function(a){const b=g.$c;return 0>a||a>=b.length?0:b[a].size},Pb:function(a,b,c,d,e){const h=new FileReader;h.onload=f=>{f=f.target.result;f.byteLength>d?ac(a,0,1,b,0,c,d,e):(u.set(new Uint8Array(f),c),ac(a,1,0,b,f.byteLength,c,d,e))};h.onerror=()=>{ac(a,0,2,b,0,c,d,e)};h.readAsArrayBuffer(g.$c[a])},t:function(){document.getElementById("_sokol_app_input_element").focus()},
Db:function(a){a=a?D(u,a):"";g.Fc=document.getElementById(a);g.Fc||console.log("sokol_app.h: invalid target:"+a);g.Fc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ua:function(){window.removeEventListener("beforeunload",g.Vc)},Ma:function(){window.removeEventListener("paste",g.ad)},Mb:function(a){a=a?D(u,a):"";a=document.getElementById(a);a.removeEventListener("dragenter",g.Wc);a.removeEventListener("dragleave",g.Xc);a.removeEventListener("dragover",
g.Yc);a.removeEventListener("drop",g.Zc)},C:function(){g.Fc&&g.Fc.requestPointerLock&&g.Fc.requestPointerLock()},lb:function(a,b){if(g.Fc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";break;case 10:a="not-allowed";break;default:a="auto"}g.Fc.style.cursor=a}},
gb:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(u.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},s:function(){document.getElementById("_sokol_app_input_element").blur()},Ja:function(a){a=a?D(u,a):"";const b=document.createElement("textarea");b.setAttribute("autocomplete","off");
b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},bb:function(){const a=(new URLSearchParams(window.location.search)).entries();for(let b=a.next();!b.done;b=a.next()){const c=b.value[0],d=b.value[1];Ma(()=>{const e=Qb(c),h=Qb(d);bc(e,h)})}},db:function(){return g.Dc?
g.Dc.bufferSize:0},fb:function(a,b,c){g.yc=null;g.Dc=null;"undefined"!==typeof AudioContext?g.yc=new AudioContext({sampleRate:a,latencyHint:"interactive"}):(g.yc=null,console.log("sokol_audio.h: no WebAudio support"));return g.yc?(console.log("sokol_audio.h: sample rate ",g.yc.sampleRate),g.Dc=g.yc.createScriptProcessor(c,0,b),g.Dc.onaudioprocess=d=>{const e=d.outputBuffer.length,h=cc(e);if(h){const f=d.outputBuffer.numberOfChannels;for(let l=0;l<f;l++){const n=d.outputBuffer.getChannelData(l);for(let p=
0;p<e;p++)n[p]=y[(h>>2)+(f*p+l)]}}},g.Dc.connect(g.yc.destination),a=()=>{g.yc&&"suspended"===g.yc.state&&g.yc.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchend",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},eb:function(){return g.yc?g.yc.sampleRate:0},ka:function(){const a=g.yc;null!==a&&(g.Dc&&g.Dc.disconnect(),a.close(),g.yc=null,g.Dc=null)},cb:function(){if(g.yc)return"suspended"===g.yc.state?1:0},A:function(a,b,c,d,e,h){b=b?D(u,
b):"";const f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";const l=0<d;l&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(f.readyState==XMLHttpRequest.DONE)if(206==f.status||200==f.status&&!l){const n=new Uint8Array(f.response),p=n.length;p<=h?(u.set(n,e),dc(a,d,p)):ec(a)}else fc(a,f.status)};f.send()},ja:function(a,b){b=b?D(u,b):"";const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==
c.status){const d=c.getResponseHeader("Content-Length");gc(a,d)}else fc(a,c.status)};c.send()},na:function(){return navigator.userAgent.includes("Macintosh")?1:0},ia:function(a,b){b=b?D(u,b):"";switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}};
(function(){function a(c){c=c.exports;g.asm=c;oa=g.asm.bc;ta();ua=g.asm.uc;wa.unshift(g.asm.cc);A--;g.monitorRunDependencies&&g.monitorRunDependencies(A);if(0==A&&(null!==Ba&&(clearInterval(Ba),Ba=null),B)){var d=B;B=null;d()}return c}var b={a:hc};A++;g.monitorRunDependencies&&g.monitorRunDependencies(A);if(g.instantiateWasm)try{return g.instantiateWasm(b,a)}catch(c){return q("Module.instantiateWasm callback failed with error: "+c),!1}Ha(b,function(c){a(c.instance)});return{}})();
var Tb=g._fs_emsc_alloc=function(){return(Tb=g._fs_emsc_alloc=g.asm.dc).apply(null,arguments)};function J(){return(J=g.asm.ec).apply(null,arguments)}
var Ub=g._fs_emsc_load_snapshot_callback=function(){return(Ub=g._fs_emsc_load_snapshot_callback=g.asm.fc).apply(null,arguments)},$b=g.__sapp_emsc_notify_keyboard_hidden=function(){return($b=g.__sapp_emsc_notify_keyboard_hidden=g.asm.gc).apply(null,arguments)},Wb=g.__sapp_emsc_onpaste=function(){return(Wb=g.__sapp_emsc_onpaste=g.asm.hc).apply(null,arguments)},Vb=g.__sapp_html5_get_ask_leave_site=function(){return(Vb=g.__sapp_html5_get_ask_leave_site=g.asm.ic).apply(null,arguments)},Xb=g.__sapp_emsc_begin_drop=
function(){return(Xb=g.__sapp_emsc_begin_drop=g.asm.jc).apply(null,arguments)},Yb=g.__sapp_emsc_drop=function(){return(Yb=g.__sapp_emsc_drop=g.asm.kc).apply(null,arguments)},Zb=g.__sapp_emsc_end_drop=function(){return(Zb=g.__sapp_emsc_end_drop=g.asm.lc).apply(null,arguments)},ac=g.__sapp_emsc_invoke_fetch_cb=function(){return(ac=g.__sapp_emsc_invoke_fetch_cb=g.asm.mc).apply(null,arguments)},ic=g._main=function(){return(ic=g._main=g.asm.nc).apply(null,arguments)},cc=g.__saudio_emsc_pull=function(){return(cc=
g.__saudio_emsc_pull=g.asm.oc).apply(null,arguments)},bc=g.__sargs_add_kvp=function(){return(bc=g.__sargs_add_kvp=g.asm.pc).apply(null,arguments)},gc=g.__sfetch_emsc_head_response=function(){return(gc=g.__sfetch_emsc_head_response=g.asm.qc).apply(null,arguments)},dc=g.__sfetch_emsc_get_response=function(){return(dc=g.__sfetch_emsc_get_response=g.asm.rc).apply(null,arguments)},fc=g.__sfetch_emsc_failed_http_status=function(){return(fc=g.__sfetch_emsc_failed_http_status=g.asm.sc).apply(null,arguments)},
ec=g.__sfetch_emsc_failed_buffer_too_small=function(){return(ec=g.__sfetch_emsc_failed_buffer_too_small=g.asm.tc).apply(null,arguments)};function Ka(){return(Ka=g.asm.vc).apply(null,arguments)}function La(){return(La=g.asm.wc).apply(null,arguments)}function Pb(){return(Pb=g.asm.xc).apply(null,arguments)}g.___start_em_js=67844;g.___stop_em_js=80988;var jc;B=function kc(){jc||lc();jc||(B=kc)};
function mc(a=[]){var b=ic;a.unshift(ca);var c=a.length,d=Pb(4*(c+1)),e=d>>2;a.forEach(f=>{w[e++]=Qb(f)});w[e]=0;try{var h=b(c,d);Ob(h)}catch(f){f instanceof la||"unwind"==f||da(1,f)}}
function lc(){var a=ba;function b(){if(!jc&&(jc=!0,g.calledRun=!0,!pa)){Ia(wa);Ia(xa);if(g.onRuntimeInitialized)g.onRuntimeInitialized();nc&&mc(a);if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var c=g.postRun.shift();za.unshift(c)}Ia(za)}}if(!(0<A)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Aa();Ia(va);0<A||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},
1)):b())}}if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var nc=!0;g.noInitialRun&&(nc=!1);lc();
