var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],ca="./this.program",da=(a,b)=>{throw b;},ea="object"==typeof window,h="function"==typeof importScripts,fa="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,l="",ha,ia,ja;
if(fa){var fs=require("fs"),ka=require("path");l=h?ka.dirname(l)+"/":__dirname+"/";ha=(a,b)=>{a=a.startsWith("file://")?new URL(a):ka.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};ja=a=>{a=ha(a,!0);a.buffer||(a=new Uint8Array(a));return a};ia=(a,b,c,d=!0)=>{a=a.startsWith("file://")?new URL(a):ka.normalize(a);fs.readFile(a,d?void 0:"utf8",(e,k)=>{e?c(e):b(d?k.buffer:k)})};!f.thisProgram&&1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=
typeof module&&(module.exports=f);process.on("uncaughtException",a=>{if(!("unwind"===a||a instanceof la||a.context instanceof la))throw a;});da=(a,b)=>{process.exitCode=a;throw b;};f.inspect=()=>"[Emscripten Module object]"}else if(ea||h)h?l=self.location.href:"undefined"!=typeof document&&document.currentScript&&(l=document.currentScript.src),l=0!==l.indexOf("blob:")?l.substr(0,l.replace(/[?#].*/,"").lastIndexOf("/")+1):"",ha=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},
h&&(ja=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ia=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};f.print||console.log.bind(console);var q=f.printErr||console.error.bind(console);Object.assign(f,aa);aa=null;f.arguments&&(ba=f.arguments);f.thisProgram&&(ca=f.thisProgram);
f.quit&&(da=f.quit);var r;f.wasmBinary&&(r=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&ma("no native wasm support detected");var na,oa=!1,pa,v,qa,ra,w,sa,x,y;function ta(){var a=na.buffer;f.HEAP8=pa=new Int8Array(a);f.HEAP16=qa=new Int16Array(a);f.HEAP32=w=new Int32Array(a);f.HEAPU8=v=new Uint8Array(a);f.HEAPU16=ra=new Uint16Array(a);f.HEAPU32=sa=new Uint32Array(a);f.HEAPF32=x=new Float32Array(a);f.HEAPF64=y=new Float64Array(a)}
var ua,va=[],wa=[],xa=[],ya=[],za=[];function Aa(){var a=f.preRun.shift();va.unshift(a)}var z=0,Ba=null,A=null;function ma(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";q(a);oa=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Ca(a){return a.startsWith("data:application/octet-stream;base64,")}var B;B="c64.wasm";if(!Ca(B)){var Da=B;B=f.locateFile?f.locateFile(Da,l):l+Da}
function Ea(a){if(a==B&&r)return new Uint8Array(r);if(ja)return ja(a);throw"both async and sync fetching of the wasm failed";}function Fa(a){if(!r&&(ea||h)){if("function"==typeof fetch&&!a.startsWith("file://"))return fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw"failed to load wasm binary file at '"+a+"'";return b.arrayBuffer()}).catch(()=>Ea(a));if(ia)return new Promise((b,c)=>{ia(a,d=>b(new Uint8Array(d)),c)})}return Promise.resolve().then(()=>Ea(a))}
function Ga(a,b,c){return Fa(a).then(d=>WebAssembly.instantiate(d,b)).then(d=>d).then(c,d=>{q("failed to asynchronously prepare wasm: "+d);ma(d)})}
function Ha(a,b){var c=B;r||"function"!=typeof WebAssembly.instantiateStreaming||Ca(c)||c.startsWith("file://")||fa||"function"!=typeof fetch?Ga(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){q("wasm streaming compile failed: "+e);q("falling back to ArrayBuffer instantiation");return Ga(c,a,b)}))}function la(a){this.name="ExitStatus";this.message=`Program terminated with exit(${a})`;this.status=a}
var Ia=a=>{for(;0<a.length;)a.shift()(f)},La=a=>{var b=Ja();a();Ka(b)},Ma=0;function Na(){for(var a=C.length-1;0<=a;--a)Oa(a);C=[];Pa=[]}var Pa=[];function Qa(){if(navigator.userActivation?navigator.userActivation.isActive:Ma&&Ra.wc)for(var a=0;a<Pa.length;++a){var b=Pa[a];Pa.splice(a,1);--a;b.hd.apply(null,b.Yc)}}var C=[];function Oa(a){var b=C[a];b.target.removeEventListener(b.nc,b.Uc,b.oc);C.splice(a,1)}
function D(a){function b(d){++Ma;Ra=a;Qa();a.qc(d);Qa();--Ma}if(!a.target)return-4;if(a.pc)a.Uc=b,a.target.addEventListener(a.nc,b,a.oc),C.push(a),Sa||(ya.push(Na),Sa=!0);else for(var c=0;c<C.length;++c)C[c].target==a.target&&C[c].nc==a.nc&&Oa(c--);return 0}function Ta(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Sa,Ra,Ua,Va,Wa,Xa,Ya,Za,$a,ab="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,E=(a,b)=>{var c=v,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&ab)return ab.decode(c.subarray(a,b));for(d="";a<b;){var e=c[a++];if(e&128){var k=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|k<<6|g:(e&7)<<18|k<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d},
bb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function F(a){a=2<a?a?E(a):"":a;return bb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function cb(a){return 0>bb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
var db=[],G=a=>{var b=db[a];b||(a>=db.length&&(db.length=a+1),db[a]=b=ua.get(a));return b},H=(a,b,c)=>{var d=v;if(!(0<c))return 0;var e=b;c=b+c-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=
0;return b-e};function eb(a,b,c,d,e,k){Ua||(Ua=I(256));a={target:F(a),nc:k,pc:d,qc:function(g=event){var m=g.target.id?g.target.id:"",n=Ua;H(Ta(g.target),n+0,128);H(m,n+128,128);G(d)(e,n,b)&&g.preventDefault()},oc:c};return D(a)}
function fb(a,b,c,d,e,k){Va||(Va=I(176));a={target:F(a),wc:!0,nc:k,pc:d,qc:function(g){var m=Va;y[m>>3]=g.timeStamp;var n=m>>2;w[n+2]=g.location;w[n+3]=g.ctrlKey;w[n+4]=g.shiftKey;w[n+5]=g.altKey;w[n+6]=g.metaKey;w[n+7]=g.repeat;w[n+8]=g.charCode;w[n+9]=g.keyCode;w[n+10]=g.which;H(g.key||"",m+44,32);H(g.code||"",m+76,32);H(g.char||"",m+108,32);H(g.locale||"",m+140,32);G(d)(e,m,b)&&g.preventDefault()},oc:c};return D(a)}
function gb(a,b,c){y[a>>3]=b.timeStamp;a>>=2;w[a+2]=b.screenX;w[a+3]=b.screenY;w[a+4]=b.clientX;w[a+5]=b.clientY;w[a+6]=b.ctrlKey;w[a+7]=b.shiftKey;w[a+8]=b.altKey;w[a+9]=b.metaKey;qa[2*a+20]=b.button;qa[2*a+21]=b.buttons;w[a+11]=b.movementX;w[a+12]=b.movementY;c=cb(c);w[a+13]=b.clientX-c.left;w[a+14]=b.clientY-c.top}
function J(a,b,c,d,e,k){Wa||(Wa=I(72));a=F(a);return D({target:a,wc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,nc:k,pc:d,qc:function(g=event){gb(Wa,g,a);G(d)(e,Wa,b)&&g.preventDefault()},oc:c})}function hb(a,b,c,d,e){Xa||(Xa=I(260));return D({target:a,nc:e,pc:d,qc:function(k=event){var g=Xa,m=document.pointerLockElement||document.tc||document.Ic||document.Hc;w[g>>2]=!!m;var n=m&&m.id?m.id:"";H(Ta(m),g+4,128);H(n,g+132,128);G(d)(20,g,b)&&k.preventDefault()},oc:c})}
function ib(a,b,c,d,e){return D({target:a,nc:e,pc:d,qc:function(k=event){G(d)(38,0,b)&&k.preventDefault()},oc:c})}
function jb(a,b,c,d){Ya||(Ya=I(36));a=F(a);return D({target:a,nc:"resize",pc:d,qc:function(e=event){if(e.target==a){var k=document.body;if(k){var g=Ya;w[g>>2]=e.detail;w[g+4>>2]=k.clientWidth;w[g+8>>2]=k.clientHeight;w[g+12>>2]=innerWidth;w[g+16>>2]=innerHeight;w[g+20>>2]=outerWidth;w[g+24>>2]=outerHeight;w[g+28>>2]=pageXOffset;w[g+32>>2]=pageYOffset;G(d)(10,g,b)&&e.preventDefault()}}},oc:c})}
function kb(a,b,c,d,e,k){Za||(Za=I(1696));a=F(a);return D({target:a,wc:"touchstart"==k||"touchend"==k,nc:k,pc:d,qc:function(g){for(var m,n={},p=g.touches,t=0;t<p.length;++t)m=p[t],m.Fc=m.Jc=0,n[m.identifier]=m;for(t=0;t<g.changedTouches.length;++t)m=g.changedTouches[t],m.Fc=1,n[m.identifier]=m;for(t=0;t<g.targetTouches.length;++t)n[g.targetTouches[t].identifier].Jc=1;p=Za;y[p>>3]=g.timeStamp;var u=p>>2;w[u+3]=g.ctrlKey;w[u+4]=g.shiftKey;w[u+5]=g.altKey;w[u+6]=g.metaKey;u+=7;var ob=cb(a),pb=0;for(t in n)if(m=
n[t],w[u]=m.identifier,w[u+1]=m.screenX,w[u+2]=m.screenY,w[u+3]=m.clientX,w[u+4]=m.clientY,w[u+5]=m.pageX,w[u+6]=m.pageY,w[u+7]=m.Fc,w[u+8]=m.Jc,w[u+9]=m.clientX-ob.left,w[u+10]=m.clientY-ob.top,u+=13,31<++pb)break;w[p+8>>2]=pb;G(d)(e,p,b)&&g.preventDefault()},oc:c})}
function lb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,g){b.drawElementsInstancedANGLE(c,d,e,k,g)})}
function mb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function nb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function qb(a){a.$c=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function rb(a){a.ad=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function sb(a){a.cd=a.getExtension("WEBGL_multi_draw")}var tb=1,ub=[],K=[],vb=[],L=[],M=[],N=[],wb=[],xb=[],O=[],yb={},zb=4;function P(a){Ab||(Ab=a)}function Bb(a){for(var b=tb++,c=a.length;c<b;c++)a[c]=null;return b}
function Cb(a,b){a.tc||(a.tc=a.getContext,a.getContext=function(d,e){e=a.tc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Gc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Db(c,b):0}function Db(a,b){var c=Bb(xb),d={handle:c,attributes:b,version:b.Gc,Ac:a};a.canvas&&(a.canvas.Xc=d);xb[c]=d;("undefined"==typeof b.Ec||b.Ec)&&Eb(d);return c}
function Eb(a){a||(a=Q);if(!a.Wc){a.Wc=!0;var b=a.Ac;lb(b);mb(b);nb(b);qb(b);rb(b);2<=a.version&&(b.Dc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Dc)b.Dc=b.getExtension("EXT_disjoint_timer_query");sb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Ab,Q;function Fb(a,b,c,d,e,k){a={target:F(a),nc:k,pc:d,qc:(g=event)=>{G(d)(e,0,b)&&g.preventDefault()},oc:c};D(a)}
function Gb(a,b,c,d){$a||($a=I(104));return D({target:a,wc:!0,nc:"wheel",pc:d,qc:function(e=event){var k=$a;gb(k,e,a);y[k+72>>3]=e.deltaX;y[k+80>>3]=e.deltaY;y[k+88>>3]=e.deltaZ;w[k+96>>2]=e.deltaMode;G(d)(9,k,b)&&e.preventDefault()},oc:c})}var Hb=["default","low-power","high-performance"],Ib=[];function R(a,b,c,d){for(var e=0;e<a;e++){var k=S[c](),g=k&&Bb(d);k?(k.name=g,d[g]=k):P(1282);w[b+4*e>>2]=g}}
function Jb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=S.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>Q.version){P(1282);return}c=2*(S.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>Q.version){P(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=S.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":P(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:P(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)w[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){P(1280);q("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:P(1280);q("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}w[b>>2]=c}else P(1281)}
var Kb=a=>{for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b};function Lb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function T(a){a-=5120;return 0==a?pa:1==a?v:2==a?qa:4==a?w:6==a?x:5==a||28922==a||28520==a||30779==a||30782==a?sa:ra}function U(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}
function Mb(a,b,c,d,e){a=T(a);var k=U(a),g=zb;return a.subarray(e>>k,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<k)+g-1&-g)>>k)}function V(a){var b=S.Tc;if(b){var c=b.vc[a];"number"==typeof c&&(b.vc[a]=c=S.getUniformLocation(b,b.Rc[a]+(0<c?"["+c+"]":"")));return c}P(1282)}for(var W=[],X=[],Nb=a=>{if(!noExitRuntime){if(f.onExit)f.onExit(a);oa=!0}da(a,new la(a))},Y=a=>{var b=Kb(a)+1,c=Ob(b);H(a,c,b);return c},S,Z=0;32>Z;++Z)Ib.push(Array(Z));var Pb=new Float32Array(288);
for(Z=0;288>Z;++Z)W[Z]=Pb.subarray(0,Z+1);var Qb=new Int32Array(288);for(Z=0;288>Z;++Z)X[Z]=Qb.subarray(0,Z+1);
var dc={k:()=>{ma("")},fa:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ga:function(a,b,c){a=F(a);if(!a)return-4;a=cb(a);y[b>>3]=a.width;y[c>>3]=a.height;return 0},z:()=>performance.now(),hb:(a,b,c)=>v.copyWithin(a,b,b+c),_a:function(a,b){function c(d){G(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},gb:a=>{var b=v.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math;d=Math.max(a,d);a:{e=
e.min.call(e,2147483648,d+(65536-d%65536)%65536)-na.buffer.byteLength+65535>>>16;try{na.grow(e);ta();var k=1;break a}catch(g){}k=void 0}if(k)return!0}return!1},P:function(a,b,c,d){return eb(a,b,c,d,12,"blur")},ea:function(a,b,c){a=F(a);if(!a)return-4;a.width=b;a.height=c;return 0},Q:function(a,b,c,d){return eb(a,b,c,d,13,"focus")},Z:function(a,b,c,d){return fb(a,b,c,d,2,"keydown")},X:function(a,b,c,d){return fb(a,b,c,d,1,"keypress")},Y:function(a,b,c,d){return fb(a,b,c,d,3,"keyup")},da:function(a,
b,c,d){return J(a,b,c,d,5,"mousedown")},aa:function(a,b,c,d){return J(a,b,c,d,33,"mouseenter")},$:function(a,b,c,d){return J(a,b,c,d,34,"mouseleave")},ba:function(a,b,c,d){return J(a,b,c,d,8,"mousemove")},ca:function(a,b,c,d){return J(a,b,c,d,6,"mouseup")},S:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.tc||document.body.Ic||document.body.Hc))return-1;a=F(a);if(!a)return-4;hb(a,b,c,d,"mozpointerlockchange");hb(a,b,c,d,"webkitpointerlockchange");
hb(a,b,c,d,"mspointerlockchange");return hb(a,b,c,d,"pointerlockchange")},R:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.tc||document.body.Ic||document.body.Hc))return-1;a=F(a);if(!a)return-4;ib(a,b,c,d,"mozpointerlockerror");ib(a,b,c,d,"webkitpointerlockerror");ib(a,b,c,d,"mspointerlockerror");return ib(a,b,c,d,"pointerlockerror")},ab:function(a,b,c,d){return jb(a,b,c,d)},T:function(a,b,c,d){return kb(a,b,c,d,25,"touchcancel")},U:function(a,b,c,d){return kb(a,
b,c,d,23,"touchend")},V:function(a,b,c,d){return kb(a,b,c,d,24,"touchmove")},W:function(a,b,c,d){return kb(a,b,c,d,22,"touchstart")},O:function(a,b,c,d){Fb(a,b,c,d,31,"webglcontextlost");return 0},N:function(a,b,c,d){Fb(a,b,c,d,32,"webglcontextrestored");return 0},_:function(a,b,c,d){return(a=F(a))?"undefined"!=typeof a.onwheel?Gb(a,b,c,d):-1:-4},Ya:function(a,b){b>>=2;b={alpha:!!w[b],depth:!!w[b+1],stencil:!!w[b+2],antialias:!!w[b+3],premultipliedAlpha:!!w[b+4],preserveDrawingBuffer:!!w[b+5],powerPreference:Hb[w[b+
6]],failIfMajorPerformanceCaveat:!!w[b+7],Gc:w[b+8],bd:w[b+9],Ec:w[b+10],Vc:w[b+11],dd:w[b+12],ed:w[b+13]};a=F(a);return!a||b.Vc?0:Cb(a,b)},Wa:function(a,b){a=xb[a];b=b?E(b):"";b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&lb(S);"OES_vertex_array_object"==b&&mb(S);"WEBGL_draw_buffers"==b&&nb(S);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&qb(S);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&rb(S);"WEBGL_multi_draw"==b&&sb(S);return!!a.Ac.getExtension(b)},Za:function(a){a>>=
2;for(var b=0;14>b;++b)w[a+b]=0;w[a]=w[a+1]=w[a+3]=w[a+4]=w[a+8]=w[a+10]=1},Xa:function(a){Q=xb[a];f.Zc=S=Q&&Q.Ac;return!a||S?0:-5},f:function(a){S.activeTexture(a)},va:function(a,b){S.attachShader(K[a],N[b])},b:function(a,b){35051==a?S.Cc=b:35052==a&&(S.sc=b);S.bindBuffer(a,ub[b])},i:function(a,b){S.bindFramebuffer(a,vb[b])},Da:function(a,b){S.bindRenderbuffer(a,L[b])},g:function(a,b){S.bindSampler(a,O[b])},a:function(a,b){S.bindTexture(a,M[b])},L:function(a){S.bindVertexArray(wb[a])},H:function(a,
b,c,d){S.blendColor(a,b,c,d)},I:function(a,b){S.blendEquationSeparate(a,b)},J:function(a,b,c,d){S.blendFuncSeparate(a,b,c,d)},lb:function(a,b,c,d,e,k,g,m,n,p){S.blitFramebuffer(a,b,c,d,e,k,g,m,n,p)},Ga:function(a,b,c,d){2<=Q.version?c&&b?S.bufferData(a,v,d,c,b):S.bufferData(a,b,d):S.bufferData(a,c?v.subarray(c,c+b):b,d)},o:function(a,b,c,d){2<=Q.version?c&&S.bufferSubData(a,b,v,d,c):S.bufferSubData(a,b,v.subarray(d,d+c))},pa:function(a){return S.checkFramebufferStatus(a)},Gb:function(a,b,c,d){S.clearBufferfi(a,
b,c,d)},ma:function(a,b,c){S.clearBufferfv(a,b,x,c>>2)},Fb:function(a,b,c){S.clearBufferiv(a,b,w,c>>2)},m:function(a,b,c,d){S.colorMask(!!a,!!b,!!c,!!d)},Jb:function(a){S.compileShader(N[a])},Aa:function(a,b,c,d,e,k,g,m){2<=Q.version?S.sc||!g?S.compressedTexImage2D(a,b,c,d,e,k,g,m):S.compressedTexImage2D(a,b,c,d,e,k,v,m,g):S.compressedTexImage2D(a,b,c,d,e,k,m?v.subarray(m,m+g):null)},ya:function(a,b,c,d,e,k,g,m,n){S.sc?S.compressedTexImage3D(a,b,c,d,e,k,g,m,n):S.compressedTexImage3D(a,b,c,d,e,k,g,
v,n,m)},Pb:function(){var a=Bb(K),b=S.createProgram();b.name=a;b.zc=b.xc=b.yc=0;b.Bc=1;K[a]=b;return a},Mb:function(a){var b=Bb(N);N[b]=S.createShader(a);return b},E:function(a){S.cullFace(a)},Sa:function(a,b){for(var c=0;c<a;c++){var d=w[b+4*c>>2],e=ub[d];e&&(S.deleteBuffer(e),e.name=0,ub[d]=null,d==S.Cc&&(S.Cc=0),d==S.sc&&(S.sc=0))}},e:function(a,b){for(var c=0;c<a;++c){var d=w[b+4*c>>2],e=vb[d];e&&(S.deleteFramebuffer(e),e.name=0,vb[d]=null)}},x:function(a){if(a){var b=K[a];b?(S.deleteProgram(b),
b.name=0,K[a]=null):P(1281)}},Qa:function(a,b){for(var c=0;c<a;c++){var d=w[b+4*c>>2],e=L[d];e&&(S.deleteRenderbuffer(e),e.name=0,L[d]=null)}},M:function(a,b){for(var c=0;c<a;c++){var d=w[b+4*c>>2],e=O[d];e&&(S.deleteSampler(e),e.name=0,O[d]=null)}},C:function(a){if(a){var b=N[a];b?(S.deleteShader(b),N[a]=null):P(1281)}},Ra:function(a,b){for(var c=0;c<a;c++){var d=w[b+4*c>>2],e=M[d];e&&(S.deleteTexture(e),e.name=0,M[d]=null)}},Oa:function(a,b){for(var c=0;c<a;c++){var d=w[b+4*c>>2];S.deleteVertexArray(wb[d]);
wb[d]=null}},w:function(a){S.depthFunc(a)},v:function(a){S.depthMask(!!a)},d:function(a){S.disable(a)},K:function(a){S.disableVertexAttribArray(a)},nb:function(a,b,c){S.drawArrays(a,b,c)},ob:function(a,b,c,d){S.drawArraysInstanced(a,b,c,d)},oa:function(a,b){for(var c=Ib[a],d=0;d<a;d++)c[d]=w[b+4*d>>2];S.drawBuffers(c)},pb:function(a,b,c,d){S.drawElements(a,b,c,d)},qb:function(a,b,c,d,e){S.drawElementsInstanced(a,b,c,d,e)},j:function(a){S.enable(a)},Bb:function(a){S.enableVertexAttribArray(a)},qa:function(a,
b,c,d){S.framebufferRenderbuffer(a,b,c,L[d])},l:function(a,b,c,d,e){S.framebufferTexture2D(a,b,c,M[d],e)},A:function(a,b,c,d,e){S.framebufferTextureLayer(a,b,M[c],d,e)},F:function(a){S.frontFace(a)},Ha:function(a,b){R(a,b,"createBuffer",ub)},ra:function(a,b){R(a,b,"createFramebuffer",vb)},Fa:function(a,b){R(a,b,"createRenderbuffer",L)},wa:function(a,b){R(a,b,"createSampler",O)},Ba:function(a,b){R(a,b,"createTexture",M)},Na:function(a,b){R(a,b,"createVertexArray",wb)},Hb:function(a,b){return S.getAttribLocation(K[a],
b?E(b):"")},c:function(a,b){Jb(a,b)},Nb:function(a,b,c,d){a=S.getProgramInfoLog(K[a]);null===a&&(a="(unknown error)");b=0<b&&d?H(a,d,b):0;c&&(w[c>>2]=b)},ua:function(a,b,c){if(c)if(a>=tb)P(1281);else if(a=K[a],35716==b)a=S.getProgramInfoLog(a),null===a&&(a="(unknown error)"),w[c>>2]=a.length+1;else if(35719==b){if(!a.zc)for(b=0;b<S.getProgramParameter(a,35718);++b)a.zc=Math.max(a.zc,S.getActiveUniform(a,b).name.length+1);w[c>>2]=a.zc}else if(35722==b){if(!a.xc)for(b=0;b<S.getProgramParameter(a,35721);++b)a.xc=
Math.max(a.xc,S.getActiveAttrib(a,b).name.length+1);w[c>>2]=a.xc}else if(35381==b){if(!a.yc)for(b=0;b<S.getProgramParameter(a,35382);++b)a.yc=Math.max(a.yc,S.getActiveUniformBlockName(a,b).length+1);w[c>>2]=a.yc}else w[c>>2]=S.getProgramParameter(a,b);else P(1281)},Ib:function(a,b,c,d){a=S.getShaderInfoLog(N[a]);null===a&&(a="(unknown error)");b=0<b&&d?H(a,d,b):0;c&&(w[c>>2]=b)},sa:function(a,b,c){c?35716==b?(a=S.getShaderInfoLog(N[a]),null===a&&(a="(unknown error)"),w[c>>2]=a?a.length+1:0):35720==
b?(a=S.getShaderSource(N[a]),w[c>>2]=a?a.length+1:0):w[c>>2]=S.getShaderParameter(N[a],b):P(1281)},Ta:function(a,b){if(2>Q.version)return P(1282),0;var c=yb[a];if(c)return 0>b||b>=c.length?(P(1281),0):c[b];switch(a){case 7939:return c=S.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){var e=Kb(d)+1,k=I(e);k&&H(d,k,e);return k}),c=yb[a]=c,0>b||b>=c.length?(P(1281),0):c[b];default:return P(1280),0}},r:function(a,b){b=b?E(b):"";if(a=K[a]){var c=a,d=c.vc,
e=c.Sc,k;if(!d)for(c.vc=d={},c.Rc={},k=0;k<S.getProgramParameter(c,35718);++k){var g=S.getActiveUniform(c,k);var m=g.name;g=g.size;var n=Lb(m);n=0<n?m.slice(0,n):m;var p=c.Bc;c.Bc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.Rc[p++]=n}c=a.vc;d=0;e=b;k=Lb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.Sc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||S.getUniformLocation(a,b)))return d}else P(1281);return-1},kb:function(a,b,c){for(var d=Ib[b],e=0;e<b;e++)d[e]=w[c+4*e>>2];S.invalidateFramebuffer(a,d)},Ob:function(a){a=
K[a];S.linkProgram(a);a.vc=0;a.Sc={}},La:function(a,b){3317==a&&(zb=b);S.pixelStorei(a,b)},G:function(a,b){S.polygonOffset(a,b)},mb:function(a){S.readBuffer(a)},Ca:function(a,b,c,d,e){S.renderbufferStorageMultisample(a,b,c,d,e)},D:function(a,b,c){S.samplerParameterf(O[a],b,c)},h:function(a,b,c){S.samplerParameteri(O[a],b,c)},na:function(a,b,c,d){S.scissor(a,b,c,d)},Lb:function(a,b,c,d){for(var e="",k=0;k<b;++k){var g=d?w[d+4*k>>2]:-1,m=w[c+4*k>>2];g=m?E(m,0>g?void 0:g):"";e+=g}S.shaderSource(N[a],
e)},Ka:function(a,b,c){S.stencilFunc(a,b,c)},la:function(a,b,c,d){S.stencilFuncSeparate(a,b,c,d)},u:function(a){S.stencilMask(a)},Ja:function(a,b,c){S.stencilOp(a,b,c)},ka:function(a,b,c,d){S.stencilOpSeparate(a,b,c,d)},za:function(a,b,c,d,e,k,g,m,n){if(2<=Q.version)if(S.sc)S.texImage2D(a,b,c,d,e,k,g,m,n);else if(n){var p=T(m);S.texImage2D(a,b,c,d,e,k,g,m,p,n>>U(p))}else S.texImage2D(a,b,c,d,e,k,g,m,null);else S.texImage2D(a,b,c,d,e,k,g,m,n?Mb(m,g,d,e,n):null)},xa:function(a,b,c,d,e,k,g,m,n,p){if(S.sc)S.texImage3D(a,
b,c,d,e,k,g,m,n,p);else if(p){var t=T(n);S.texImage3D(a,b,c,d,e,k,g,m,n,t,p>>U(t))}else S.texImage3D(a,b,c,d,e,k,g,m,n,null)},jb:function(a,b,c,d,e,k,g,m,n){if(2<=Q.version)if(S.sc)S.texSubImage2D(a,b,c,d,e,k,g,m,n);else if(n){var p=T(m);S.texSubImage2D(a,b,c,d,e,k,g,m,p,n>>U(p))}else S.texSubImage2D(a,b,c,d,e,k,g,m,null);else p=null,n&&(p=Mb(m,g,e,k,n)),S.texSubImage2D(a,b,c,d,e,k,g,m,p)},ib:function(a,b,c,d,e,k,g,m,n,p,t){if(S.sc)S.texSubImage3D(a,b,c,d,e,k,g,m,n,p,t);else if(t){var u=T(p);S.texSubImage3D(a,
b,c,d,e,k,g,m,n,p,u,t>>U(u))}else S.texSubImage3D(a,b,c,d,e,k,g,m,n,p,null)},Ab:function(a,b,c){if(2<=Q.version)b&&S.uniform1fv(V(a),x,c>>2,b);else{if(288>=b)for(var d=W[b-1],e=0;e<b;++e)d[e]=x[c+4*e>>2];else d=x.subarray(c>>2,c+4*b>>2);S.uniform1fv(V(a),d)}},ta:function(a,b){S.uniform1i(V(a),b)},wb:function(a,b,c){if(2<=Q.version)b&&S.uniform1iv(V(a),w,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=w[c+4*e>>2];else d=w.subarray(c>>2,c+4*b>>2);S.uniform1iv(V(a),d)}},zb:function(a,b,c){if(2<=
Q.version)b&&S.uniform2fv(V(a),x,c>>2,2*b);else{if(144>=b)for(var d=W[2*b-1],e=0;e<2*b;e+=2)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2];else d=x.subarray(c>>2,c+8*b>>2);S.uniform2fv(V(a),d)}},vb:function(a,b,c){if(2<=Q.version)b&&S.uniform2iv(V(a),w,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=w[c+4*e>>2],d[e+1]=w[c+(4*e+4)>>2];else d=w.subarray(c>>2,c+8*b>>2);S.uniform2iv(V(a),d)}},yb:function(a,b,c){if(2<=Q.version)b&&S.uniform3fv(V(a),x,c>>2,3*b);else{if(96>=b)for(var d=W[3*b-1],
e=0;e<3*b;e+=3)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2],d[e+2]=x[c+(4*e+8)>>2];else d=x.subarray(c>>2,c+12*b>>2);S.uniform3fv(V(a),d)}},ub:function(a,b,c){if(2<=Q.version)b&&S.uniform3iv(V(a),w,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=w[c+4*e>>2],d[e+1]=w[c+(4*e+4)>>2],d[e+2]=w[c+(4*e+8)>>2];else d=w.subarray(c>>2,c+12*b>>2);S.uniform3iv(V(a),d)}},xb:function(a,b,c){if(2<=Q.version)b&&S.uniform4fv(V(a),x,c>>2,4*b);else{if(72>=b){var d=W[4*b-1],e=x;c>>=2;for(var k=0;k<4*b;k+=4){var g=
c+k;d[k]=e[g];d[k+1]=e[g+1];d[k+2]=e[g+2];d[k+3]=e[g+3]}}else d=x.subarray(c>>2,c+16*b>>2);S.uniform4fv(V(a),d)}},tb:function(a,b,c){if(2<=Q.version)b&&S.uniform4iv(V(a),w,c>>2,4*b);else{if(72>=b)for(var d=X[4*b-1],e=0;e<4*b;e+=4)d[e]=w[c+4*e>>2],d[e+1]=w[c+(4*e+4)>>2],d[e+2]=w[c+(4*e+8)>>2],d[e+3]=w[c+(4*e+12)>>2];else d=w.subarray(c>>2,c+16*b>>2);S.uniform4iv(V(a),d)}},sb:function(a,b,c,d){if(2<=Q.version)b&&S.uniformMatrix4fv(V(a),!!c,x,d>>2,16*b);else{if(18>=b){var e=W[16*b-1],k=x;d>>=2;for(var g=
0;g<16*b;g+=16){var m=d+g;e[g]=k[m];e[g+1]=k[m+1];e[g+2]=k[m+2];e[g+3]=k[m+3];e[g+4]=k[m+4];e[g+5]=k[m+5];e[g+6]=k[m+6];e[g+7]=k[m+7];e[g+8]=k[m+8];e[g+9]=k[m+9];e[g+10]=k[m+10];e[g+11]=k[m+11];e[g+12]=k[m+12];e[g+13]=k[m+13];e[g+14]=k[m+14];e[g+15]=k[m+15]}}else e=x.subarray(d>>2,d+64*b>>2);S.uniformMatrix4fv(V(a),!!c,e)}},n:function(a){a=K[a];S.useProgram(a);S.Tc=a},Db:function(a,b){S.vertexAttribDivisor(a,b)},Eb:function(a,b,c,d,e,k){S.vertexAttribPointer(a,b,c,!!d,e,k)},q:function(a,b,c,d){S.viewport(a,
b,c,d)},$a:function(){f.Kc=a=>{0!=Rb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.Kc)},Ua:function(){f.Qc=a=>{const b=a.clipboardData.getData("text");La(()=>{const c=Y(b);Sb(c)})};window.addEventListener("paste",f.Qc)},Ma:function(a){f.gd=[];a=a?E(a):"";a=document.getElementById(a);f.Lc=b=>{b.stopPropagation();b.preventDefault()};f.Mc=b=>{b.stopPropagation();b.preventDefault()};f.Nc=b=>{b.stopPropagation();b.preventDefault()};f.Oc=b=>{b.stopPropagation();b.preventDefault();
const c=b.dataTransfer.files;f.Pc=c;Tb(c.length);for(let e=0;e<c.length;e++)La(()=>{const k=Y(c[e].name);Ub(e,k)});let d=0;b.shiftKey&&(d|=1);b.ctrlKey&&(d|=2);b.altKey&&(d|=4);b.metaKey&&(d|=8);Vb(b.clientX,b.clientY,d)};a.addEventListener("dragenter",f.Lc,!1);a.addEventListener("dragleave",f.Mc,!1);a.addEventListener("dragover",f.Nc,!1);a.addEventListener("drop",f.Oc,!1)},Cb:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},t:function(){const a=document.createElement("input");
a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Wb()});document.body.append(a)},Ia:function(a){const b=f.Pc;return 0>a||a>=b.length?0:b[a].size},Ea:function(a,b,c,d,e){const k=new FileReader;k.onload=g=>{g=g.target.result;g.byteLength>d?Xb(a,0,1,b,0,c,d,e):(v.set(new Uint8Array(g),c),Xb(a,1,0,b,g.byteLength,c,d,e))};k.onerror=()=>{Xb(a,0,2,b,0,c,d,e)};k.readAsArrayBuffer(f.Pc[a])},s:function(){document.getElementById("_sokol_app_input_element").focus()},
Kb:function(a){a=a?E(a):"";f.uc=document.getElementById(a);f.uc||console.log("sokol_app.h: invalid target:"+a);f.uc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Va:function(){window.removeEventListener("beforeunload",f.Kc)},Pa:function(){window.removeEventListener("paste",f.Qc)},Qb:function(a){a=a?E(a):"";a=document.getElementById(a);a.removeEventListener("dragenter",f.Lc);a.removeEventListener("dragleave",f.Mc);a.removeEventListener("dragover",f.Nc);
a.removeEventListener("drop",f.Oc)},B:function(){f.uc&&f.uc.requestPointerLock&&f.uc.requestPointerLock()},rb:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(v.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},p:function(){document.getElementById("_sokol_app_input_element").blur()},bb:function(){const a=
(new URLSearchParams(window.location.search)).entries();for(let b=a.next();!b.done;b=a.next()){const c=b.value[0],d=b.value[1];La(()=>{const e=Y(c),k=Y(d);Yb(e,k)})}},db:function(){return f.rc?f.rc.bufferSize:0},fb:function(a,b,c){f.mc=null;f.rc=null;"undefined"!==typeof AudioContext?f.mc=new AudioContext({sampleRate:a,latencyHint:"interactive"}):(f.mc=null,console.log("sokol_audio.h: no WebAudio support"));return f.mc?(console.log("sokol_audio.h: sample rate ",f.mc.sampleRate),f.rc=f.mc.createScriptProcessor(c,
0,b),f.rc.onaudioprocess=d=>{const e=d.outputBuffer.length,k=Zb(e);if(k){const g=d.outputBuffer.numberOfChannels;for(let m=0;m<g;m++){const n=d.outputBuffer.getChannelData(m);for(let p=0;p<e;p++)n[p]=x[(k>>2)+(g*p+m)]}}},f.rc.connect(f.mc.destination),a=()=>{f.mc&&"suspended"===f.mc.state&&f.mc.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchend",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},eb:function(){return f.mc?f.mc.sampleRate:0},
ja:function(){const a=f.mc;null!==a&&(f.rc&&f.rc.disconnect(),a.close(),f.mc=null,f.rc=null)},cb:function(){if(f.mc)return"suspended"===f.mc.state?1:0},y:function(a,b,c,d,e,k){b=b?E(b):"";const g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";const m=0<d;m&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));g.onreadystatechange=function(){if(g.readyState==XMLHttpRequest.DONE)if(206==g.status||200==g.status&&!m){const n=new Uint8Array(g.response),p=n.length;p<=k?(v.set(n,e),$b(a,d,
p)):ac(a)}else bc(a,g.status)};g.send()},ia:function(a,b){b=b?E(b):"";const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==c.status){const d=c.getResponseHeader("Content-Length");cc(a,d)}else bc(a,c.status)};c.send()},ha:function(a,b){b=b?E(b):"";switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}};
(function(){function a(c){c=c.exports;f.asm=c;na=f.asm.Rb;ta();ua=f.asm.ic;wa.unshift(f.asm.Sb);z--;f.monitorRunDependencies&&f.monitorRunDependencies(z);if(0==z&&(null!==Ba&&(clearInterval(Ba),Ba=null),A)){var d=A;A=null;d()}return c}var b={a:dc};z++;f.monitorRunDependencies&&f.monitorRunDependencies(z);if(f.instantiateWasm)try{return f.instantiateWasm(b,a)}catch(c){return q("Module.instantiateWasm callback failed with error: "+c),!1}Ha(b,function(c){a(c.instance)});return{}})();
f._fs_emsc_alloc=function(){return(f._fs_emsc_alloc=f.asm.Tb).apply(null,arguments)};function I(){return(I=f.asm.Ub).apply(null,arguments)}f._fs_emsc_load_snapshot_callback=function(){return(f._fs_emsc_load_snapshot_callback=f.asm.Vb).apply(null,arguments)};
var Wb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Wb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Wb).apply(null,arguments)},Sb=f.__sapp_emsc_onpaste=function(){return(Sb=f.__sapp_emsc_onpaste=f.asm.Xb).apply(null,arguments)},Rb=f.__sapp_html5_get_ask_leave_site=function(){return(Rb=f.__sapp_html5_get_ask_leave_site=f.asm.Yb).apply(null,arguments)},Tb=f.__sapp_emsc_begin_drop=function(){return(Tb=f.__sapp_emsc_begin_drop=f.asm.Zb).apply(null,arguments)},Ub=f.__sapp_emsc_drop=function(){return(Ub=
f.__sapp_emsc_drop=f.asm._b).apply(null,arguments)},Vb=f.__sapp_emsc_end_drop=function(){return(Vb=f.__sapp_emsc_end_drop=f.asm.$b).apply(null,arguments)},Xb=f.__sapp_emsc_invoke_fetch_cb=function(){return(Xb=f.__sapp_emsc_invoke_fetch_cb=f.asm.ac).apply(null,arguments)},ec=f._main=function(){return(ec=f._main=f.asm.bc).apply(null,arguments)},Zb=f.__saudio_emsc_pull=function(){return(Zb=f.__saudio_emsc_pull=f.asm.cc).apply(null,arguments)},Yb=f.__sargs_add_kvp=function(){return(Yb=f.__sargs_add_kvp=
f.asm.dc).apply(null,arguments)},cc=f.__sfetch_emsc_head_response=function(){return(cc=f.__sfetch_emsc_head_response=f.asm.ec).apply(null,arguments)},$b=f.__sfetch_emsc_get_response=function(){return($b=f.__sfetch_emsc_get_response=f.asm.fc).apply(null,arguments)},bc=f.__sfetch_emsc_failed_http_status=function(){return(bc=f.__sfetch_emsc_failed_http_status=f.asm.gc).apply(null,arguments)},ac=f.__sfetch_emsc_failed_buffer_too_small=function(){return(ac=f.__sfetch_emsc_failed_buffer_too_small=f.asm.hc).apply(null,
arguments)};function Ja(){return(Ja=f.asm.jc).apply(null,arguments)}function Ka(){return(Ka=f.asm.kc).apply(null,arguments)}function Ob(){return(Ob=f.asm.lc).apply(null,arguments)}f.___start_em_js=51216;f.___stop_em_js=64266;var fc;A=function gc(){fc||hc();fc||(A=gc)};function ic(a=[]){var b=ec;a.unshift(ca);var c=a.length,d=Ob(4*(c+1)),e=d>>2;a.forEach(g=>{w[e++]=Y(g)});w[e]=0;try{var k=b(c,d);Nb(k)}catch(g){g instanceof la||"unwind"==g||da(1,g)}}
function hc(){var a=ba;function b(){if(!fc&&(fc=!0,f.calledRun=!0,!oa)){Ia(wa);Ia(xa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();jc&&ic(a);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var c=f.postRun.shift();za.unshift(c)}Ia(za)}}if(!(0<z)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Aa();Ia(va);0<z||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},
1)):b())}}if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var jc=!0;f.noInitialRun&&(jc=!1);hc();
