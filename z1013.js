var g;g||=typeof Module !== 'undefined' ? Module : {};var aa=Object.assign({},g),ba=[],ca="./this.program",da=(a,b)=>{throw b;},ea="object"==typeof window,k="function"==typeof importScripts,fa="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,l="",ha,ia,ja;
if(fa){var fs=require("fs"),ka=require("path");l=k?ka.dirname(l)+"/":__dirname+"/";ha=(a,b)=>{a=la(a)?new URL(a):ka.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};ja=a=>{a=ha(a,!0);a.buffer||(a=new Uint8Array(a));return a};ia=(a,b,c,d=!0)=>{a=la(a)?new URL(a):ka.normalize(a);fs.readFile(a,d?void 0:"utf8",(e,h)=>{e?c(e):b(d?h.buffer:h)})};!g.thisProgram&&1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=g);process.on("uncaughtException",
a=>{if(!("unwind"===a||a instanceof ma||a.context instanceof ma))throw a;});da=(a,b)=>{process.exitCode=a;throw b;};g.inspect=()=>"[Emscripten Module object]"}else if(ea||k)k?l=self.location.href:"undefined"!=typeof document&&document.currentScript&&(l=document.currentScript.src),l=0!==l.indexOf("blob:")?l.substr(0,l.replace(/[?#].*/,"").lastIndexOf("/")+1):"",ha=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},k&&(ja=a=>{var b=new XMLHttpRequest;b.open("GET",a,
!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ia=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};g.print||console.log.bind(console);var q=g.printErr||console.error.bind(console);Object.assign(g,aa);aa=null;g.arguments&&(ba=g.arguments);g.thisProgram&&(ca=g.thisProgram);g.quit&&(da=g.quit);var r;g.wasmBinary&&(r=g.wasmBinary);
"object"!=typeof WebAssembly&&na("no native wasm support detected");var oa,pa=!1,qa,v,ra,sa,w,ta,x,y;function ua(){var a=oa.buffer;g.HEAP8=qa=new Int8Array(a);g.HEAP16=ra=new Int16Array(a);g.HEAPU8=v=new Uint8Array(a);g.HEAPU16=sa=new Uint16Array(a);g.HEAP32=w=new Int32Array(a);g.HEAPU32=ta=new Uint32Array(a);g.HEAPF32=x=new Float32Array(a);g.HEAPF64=y=new Float64Array(a)}var va=[],wa=[],xa=[],ya=[],za=[];function Aa(){var a=g.preRun.shift();va.unshift(a)}var z=0,Ba=null,A=null;
function na(a){g.onAbort?.(a);a="Aborted("+a+")";q(a);pa=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}var Ca=a=>a.startsWith("data:application/octet-stream;base64,"),la=a=>a.startsWith("file://"),B;B="z1013.wasm";if(!Ca(B)){var Da=B;B=g.locateFile?g.locateFile(Da,l):l+Da}function Ea(a){if(a==B&&r)return new Uint8Array(r);if(ja)return ja(a);throw"both async and sync fetching of the wasm failed";}
function Fa(a){if(!r&&(ea||k)){if("function"==typeof fetch&&!la(a))return fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw"failed to load wasm binary file at '"+a+"'";return b.arrayBuffer()}).catch(()=>Ea(a));if(ia)return new Promise((b,c)=>{ia(a,d=>b(new Uint8Array(d)),c)})}return Promise.resolve().then(()=>Ea(a))}function Ga(a,b,c){return Fa(a).then(d=>WebAssembly.instantiate(d,b)).then(d=>d).then(c,d=>{q(`failed to asynchronously prepare wasm: ${d}`);na(d)})}
function Ha(a,b){var c=B;r||"function"!=typeof WebAssembly.instantiateStreaming||Ca(c)||la(c)||fa||"function"!=typeof fetch?Ga(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){q(`wasm streaming compile failed: ${e}`);q("falling back to ArrayBuffer instantiation");return Ga(c,a,b)}))}function ma(a){this.name="ExitStatus";this.message=`Program terminated with exit(${a})`;this.status=a}
var Ia=a=>{for(;0<a.length;)a.shift()(g)},Ja=g.noExitRuntime||!0,Ma=a=>{var b=Ka();a();La(b)},Na=0;function Oa(){for(var a=C.length-1;0<=a;--a)Pa(a);C=[];Qa=[]}var Qa=[];function Ra(){if(navigator.userActivation?navigator.userActivation.isActive:Na&&Sa.sc)for(var a=0;a<Qa.length;++a){var b=Qa[a];Qa.splice(a,1);--a;b.$c.apply(null,b.Sc)}}var C=[];function Pa(a){var b=C[a];b.target.removeEventListener(b.fc,b.Nc,b.hc);C.splice(a,1)}
function D(a){function b(d){++Na;Sa=a;Ra();a.jc(d);Ra();--Na}if(!a.target)return-4;if(a.ic)a.Nc=b,a.target.addEventListener(a.fc,b,a.hc),C.push(a),Ta||(ya.push(Oa),Ta=!0);else for(var c=0;c<C.length;++c)C[c].target==a.target&&C[c].fc==a.fc&&Pa(c--);return 0}function Ua(a){return a?a==window?"#window":a==screen?"#screen":a?.nodeName||"":""}
var Ta,Sa,Va,Wa,Xa,Ya,Za,$a,ab,bb="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,E=(a,b)=>{var c=v,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&bb)return bb.decode(c.subarray(a,b));for(d="";a<b;){var e=c[a++];if(e&128){var h=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var f=c[a++]&63;e=224==(e&240)?(e&15)<<12|h<<6|f:(e&7)<<18|h<<12|f<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d},
cb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0],F=a=>{a=2<a?a?E(a):"":a;return cb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)},db=a=>0>cb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0},eb=[],fb,G=a=>{var b=eb[a];b||(a>=eb.length&&(eb.length=a+1),eb[a]=b=fb.get(a));return b},H=(a,b,c)=>{var d=v;if(!(0<c))return 0;var e=b;c=b+c-1;for(var h=0;h<a.length;++h){var f=a.charCodeAt(h);if(55296<=f&&57343>=f){var m=a.charCodeAt(++h);f=65536+((f&
1023)<<10)|m&1023}if(127>=f){if(b>=c)break;d[b++]=f}else{if(2047>=f){if(b+1>=c)break;d[b++]=192|f>>6}else{if(65535>=f){if(b+2>=c)break;d[b++]=224|f>>12}else{if(b+3>=c)break;d[b++]=240|f>>18;d[b++]=128|f>>12&63}d[b++]=128|f>>6&63}d[b++]=128|f&63}}d[b]=0;return b-e},gb=(a,b,c,d,e,h)=>{Va||=I(256);a={target:F(a),fc:h,ic:d,jc:(f=event)=>{var m=f.target.id?f.target.id:"",n=Va;H(Ua(f.target),n+0,128);H(m,n+128,128);G(d)(e,n,b)&&f.preventDefault()},hc:c};return D(a)},hb=(a,b,c,d,e,h)=>{Wa||=I(176);a={target:F(a),
fc:h,ic:d,jc:f=>{var m=Wa;y[m>>3]=f.timeStamp;var n=m>>2;w[n+2]=f.location;w[n+3]=f.ctrlKey;w[n+4]=f.shiftKey;w[n+5]=f.altKey;w[n+6]=f.metaKey;w[n+7]=f.repeat;w[n+8]=f.charCode;w[n+9]=f.keyCode;w[n+10]=f.which;H(f.key||"",m+44,32);H(f.code||"",m+76,32);H(f.char||"",m+108,32);H(f.locale||"",m+140,32);G(d)(e,m,b)&&f.preventDefault()},hc:c};return D(a)},ib=(a,b,c)=>{y[a>>3]=b.timeStamp;a>>=2;w[a+2]=b.screenX;w[a+3]=b.screenY;w[a+4]=b.clientX;w[a+5]=b.clientY;w[a+6]=b.ctrlKey;w[a+7]=b.shiftKey;w[a+8]=
b.altKey;w[a+9]=b.metaKey;ra[2*a+20]=b.button;ra[2*a+21]=b.buttons;w[a+11]=b.movementX;w[a+12]=b.movementY;c=db(c);w[a+13]=b.clientX-c.left;w[a+14]=b.clientY-c.top},J=(a,b,c,d,e,h)=>{Xa||=I(72);a=F(a);return D({target:a,sc:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,fc:h,ic:d,jc:(f=event)=>{ib(Xa,f,a);G(d)(e,Xa,b)&&f.preventDefault()},hc:c})},jb=(a,b,c,d,e)=>{Ya||=I(260);return D({target:a,fc:e,ic:d,jc:(h=event)=>{var f=Ya,m=document.pointerLockElement||document.lc||document.yc||document.xc;
w[f>>2]=!!m;var n=m?.id||"";H(Ua(m),f+4,128);H(n,f+132,128);G(d)(20,f,b)&&h.preventDefault()},hc:c})},kb=(a,b,c,d,e)=>D({target:a,fc:e,ic:d,jc:(h=event)=>{G(d)(38,0,b)&&h.preventDefault()},hc:c}),lb=(a,b,c,d)=>{Za||=I(36);a=F(a);return D({target:a,fc:"resize",ic:d,jc:(e=event)=>{if(e.target==a){var h=document.body;if(h){var f=Za;w[f>>2]=e.detail;w[f+4>>2]=h.clientWidth;w[f+8>>2]=h.clientHeight;w[f+12>>2]=innerWidth;w[f+16>>2]=innerHeight;w[f+20>>2]=outerWidth;w[f+24>>2]=outerHeight;w[f+28>>2]=pageXOffset;
w[f+32>>2]=pageYOffset;G(d)(10,f,b)&&e.preventDefault()}}},hc:c})},mb=(a,b,c,d,e,h)=>{$a||=I(1696);a=F(a);return D({target:a,sc:"touchstart"==h||"touchend"==h,fc:h,ic:d,jc:f=>{for(var m,n={},p=f.touches,t=0;t<p.length;++t)m=p[t],m.zc=m.Bc=0,n[m.identifier]=m;for(t=0;t<f.changedTouches.length;++t)m=f.changedTouches[t],m.zc=1,n[m.identifier]=m;for(t=0;t<f.targetTouches.length;++t)n[f.targetTouches[t].identifier].Bc=1;p=$a;y[p>>3]=f.timeStamp;var u=p>>2;w[u+3]=f.ctrlKey;w[u+4]=f.shiftKey;w[u+5]=f.altKey;
w[u+6]=f.metaKey;u+=7;var pb=db(a),qb=0;for(t in n)if(m=n[t],w[u]=m.identifier,w[u+1]=m.screenX,w[u+2]=m.screenY,w[u+3]=m.clientX,w[u+4]=m.clientY,w[u+5]=m.pageX,w[u+6]=m.pageY,w[u+7]=m.zc,w[u+8]=m.Bc,w[u+9]=m.clientX-pb.left,w[u+10]=m.clientY-pb.top,u+=13,31<++qb)break;w[p+8>>2]=qb;G(d)(e,p,b)&&f.preventDefault()},hc:c})},nb=a=>{var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=(c,d)=>b.vertexAttribDivisorANGLE(c,d),a.drawArraysInstanced=(c,d,e,h)=>b.drawArraysInstancedANGLE(c,
d,e,h),a.drawElementsInstanced=(c,d,e,h,f)=>b.drawElementsInstancedANGLE(c,d,e,h,f))},ob=a=>{var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=()=>b.createVertexArrayOES(),a.deleteVertexArray=c=>b.deleteVertexArrayOES(c),a.bindVertexArray=c=>b.bindVertexArrayOES(c),a.isVertexArray=c=>b.isVertexArrayOES(c))},rb=a=>{var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=(c,d)=>b.drawBuffersWEBGL(c,d))},sb=a=>{a.Uc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")},
tb=a=>{a.Vc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")},ub=1,vb=[],K=[],wb=[],L=[],M=[],N=[],xb=[],yb=[],O=[],zb={},Ab=4;function P(a){Bb||=a}
var Cb=a=>{for(var b=ub++,c=a.length;c<b;c++)a[c]=null;return b},Eb=(a,b)=>{a.lc||(a.lc=a.getContext,a.getContext=function(d,e){e=a.lc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Ac?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Db(c,b):0},Db=(a,b)=>{var c=Cb(yb),d={handle:c,attributes:b,version:b.Ac,rc:a};a.canvas&&(a.canvas.Rc=d);yb[c]=d;("undefined"==typeof b.wc||b.wc)&&Fb(d);return c},Fb=a=>{a||=Q;if(!a.Pc){a.Pc=!0;var b=a.rc;nb(b);ob(b);rb(b);sb(b);
tb(b);2<=a.version&&(b.vc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.vc)b.vc=b.getExtension("EXT_disjoint_timer_query");b.Qc=b.getExtension("WEBGL_multi_draw");(b.getSupportedExtensions()||[]).forEach(c=>{c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}};function Gb(){var a=R.getSupportedExtensions()||[];return a=a.concat(a.map(b=>"GL_"+b))}
for(var Bb,Q,Hb=(a,b,c,d,e,h)=>{a={target:F(a),fc:h,ic:d,jc:(f=event)=>{G(d)(e,0,b)&&f.preventDefault()},hc:c};D(a)},Ib=(a,b,c,d)=>{ab||=I(104);return D({target:a,sc:!0,fc:"wheel",ic:d,jc:(e=event)=>{var h=ab;ib(h,e,a);y[h+72>>3]=e.deltaX;y[h+80>>3]=e.deltaY;y[h+88>>3]=e.deltaZ;w[h+96>>2]=e.deltaMode;G(d)(9,h,b)&&e.preventDefault()},hc:c})},Jb=["default","low-power","high-performance"],Kb=[],S=(a,b,c,d)=>{for(var e=0;e<a;e++){var h=R[c](),f=h&&Cb(d);h?(h.name=f,d[f]=h):P(1282);w[b+4*e>>2]=f}},Lb=
(a,b)=>{if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=R.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>Q.version){P(1282);return}c=2*(R.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>Q.version){P(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=R.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":P(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:P(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)w[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){P(1280);q(`GL_INVALID_ENUM in glGet${0}v: Unknown object returned from WebGL getParameter(${a})! (error: ${e})`);return}}break;default:P(1280);q(`GL_INVALID_ENUM in glGet${0}v: Native code calling glGet${0}v(${a}) and it returns ${d} of type ${typeof d}!`);return}w[b>>2]=c}else P(1281)},Mb=a=>
{for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b},Nb=a=>"]"==a.slice(-1)&&a.lastIndexOf("["),T=a=>{a-=5120;return 0==a?qa:1==a?v:2==a?ra:4==a?w:6==a?x:5==a||28922==a||28520==a||30779==a||30782==a?ta:sa},Ob=(a,b,c,d,e)=>{a=T(a);var h=31-Math.clz32(a.BYTES_PER_ELEMENT),f=Ab;return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+f-1&-f)>>h)},U=a=>{var b=R.Mc;if(b){var c=
b.nc[a];"number"==typeof c&&(b.nc[a]=c=R.getUniformLocation(b,b.Jc[a]+(0<c?`[${c}]`:"")));return c}P(1282)},V=[],W=[],Pb=a=>{Ja||(g.onExit?.(a),pa=!0);da(a,new ma(a))},X=a=>{var b=Mb(a)+1,c=Qb(b);H(a,c,b);return c},R,Y=0;32>Y;++Y)Kb.push(Array(Y));var Rb=new Float32Array(288);for(Y=0;288>Y;++Y)V[Y]=Rb.subarray(0,Y+1);var Sb=new Int32Array(288);for(Y=0;288>Y;++Y)W[Y]=Sb.subarray(0,Y+1);
var dc={h:()=>{na("")},ga:()=>"number"==typeof devicePixelRatio&&devicePixelRatio||1,ha:(a,b,c)=>{a=F(a);if(!a)return-4;a=db(a);y[b>>3]=a.width;y[c>>3]=a.height;return 0},y:()=>performance.now(),cb:(a,b,c)=>v.copyWithin(a,b,b+c),_a:(a,b)=>{function c(d){G(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},bb:a=>{var b=v.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math;d=Math.max(a,d);a:{e=(e.min.call(e,2147483648,d+
(65536-d%65536)%65536)-oa.buffer.byteLength+65535)/65536;try{oa.grow(e);ua();var h=1;break a}catch(f){}h=void 0}if(h)return!0}return!1},Q:(a,b,c,d)=>gb(a,b,c,d,12,"blur"),fa:(a,b,c)=>{a=F(a);if(!a)return-4;a.width=b;a.height=c;return 0},R:(a,b,c,d)=>gb(a,b,c,d,13,"focus"),_:(a,b,c,d)=>hb(a,b,c,d,2,"keydown"),Y:(a,b,c,d)=>hb(a,b,c,d,1,"keypress"),Z:(a,b,c,d)=>hb(a,b,c,d,3,"keyup"),ea:(a,b,c,d)=>J(a,b,c,d,5,"mousedown"),ba:(a,b,c,d)=>J(a,b,c,d,33,"mouseenter"),aa:(a,b,c,d)=>J(a,b,c,d,34,"mouseleave"),
ca:(a,b,c,d)=>J(a,b,c,d,8,"mousemove"),da:(a,b,c,d)=>J(a,b,c,d,6,"mouseup"),T:(a,b,c,d)=>{if(!document||!document.body||!(document.body.requestPointerLock||document.body.lc||document.body.yc||document.body.xc))return-1;a=F(a);if(!a)return-4;jb(a,b,c,d,"mozpointerlockchange");jb(a,b,c,d,"webkitpointerlockchange");jb(a,b,c,d,"mspointerlockchange");return jb(a,b,c,d,"pointerlockchange")},S:(a,b,c,d)=>{if(!document||!(document.body.requestPointerLock||document.body.lc||document.body.yc||document.body.xc))return-1;
a=F(a);if(!a)return-4;kb(a,b,c,d,"mozpointerlockerror");kb(a,b,c,d,"webkitpointerlockerror");kb(a,b,c,d,"mspointerlockerror");return kb(a,b,c,d,"pointerlockerror")},$a:(a,b,c,d)=>lb(a,b,c,d),U:(a,b,c,d)=>mb(a,b,c,d,25,"touchcancel"),V:(a,b,c,d)=>mb(a,b,c,d,23,"touchend"),W:(a,b,c,d)=>mb(a,b,c,d,24,"touchmove"),X:(a,b,c,d)=>mb(a,b,c,d,22,"touchstart"),P:(a,b,c,d)=>{Hb(a,b,c,d,31,"webglcontextlost");return 0},O:(a,b,c,d)=>{Hb(a,b,c,d,32,"webglcontextrestored");return 0},$:(a,b,c,d)=>(a=F(a))?"undefined"!=
typeof a.onwheel?Ib(a,b,c,d):-1:-4,Ya:(a,b)=>{b>>=2;b={alpha:!!w[b],depth:!!w[b+1],stencil:!!w[b+2],antialias:!!w[b+3],premultipliedAlpha:!!w[b+4],preserveDrawingBuffer:!!w[b+5],powerPreference:Jb[w[b+6]],failIfMajorPerformanceCaveat:!!w[b+7],Ac:w[b+8],Wc:w[b+9],wc:w[b+10],Oc:w[b+11],Xc:w[b+12],Yc:w[b+13]};a=F(a);return!a||b.Oc?0:Eb(a,b)},Wa:(a,b)=>{a=yb[a];b=b?E(b):"";b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&nb(R);"OES_vertex_array_object"==b&&ob(R);"WEBGL_draw_buffers"==
b&&rb(R);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&sb(R);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&tb(R);"WEBGL_multi_draw"==b&&(R.Qc=R.getExtension("WEBGL_multi_draw"));return!!a.rc.getExtension(b)},Za:a=>{a>>=2;for(var b=0;14>b;++b)w[a+b]=0;w[a]=w[a+1]=w[a+3]=w[a+4]=w[a+8]=w[a+10]=1},Xa:a=>{Q=yb[a];g.Tc=R=Q?.rc;return!a||R?0:-5},j:function(a){R.activeTexture(a)},B:(a,b)=>{R.attachShader(K[a],N[b])},a:(a,b)=>{35051==a?R.uc=b:35052==a&&(R.kc=b);R.bindBuffer(a,vb[b])},i:(a,
b)=>{R.bindFramebuffer(a,wb[b])},Fa:(a,b)=>{R.bindRenderbuffer(a,L[b])},k:(a,b)=>{R.bindSampler(a,O[b])},c:(a,b)=>{R.bindTexture(a,M[b])},K:a=>{R.bindVertexArray(xb[a])},G:function(a,b,c,d){R.blendColor(a,b,c,d)},H:function(a,b){R.blendEquationSeparate(a,b)},I:function(a,b,c,d){R.blendFuncSeparate(a,b,c,d)},hb:function(a,b,c,d,e,h,f,m,n,p){R.blitFramebuffer(a,b,c,d,e,h,f,m,n,p)},Ha:(a,b,c,d)=>{2<=Q.version?c&&b?R.bufferData(a,v,d,c,b):R.bufferData(a,b,d):R.bufferData(a,c?v.subarray(c,c+b):b,d)},o:(a,
b,c,d)=>{2<=Q.version?c&&R.bufferSubData(a,b,v,d,c):R.bufferSubData(a,b,v.subarray(d,d+c))},pa:function(a){return R.checkFramebufferStatus(a)},Bb:function(a,b,c,d){R.clearBufferfi(a,b,c,d)},ma:(a,b,c)=>{R.clearBufferfv(a,b,x,c>>2)},Ab:(a,b,c)=>{R.clearBufferiv(a,b,w,c>>2)},m:(a,b,c,d)=>{R.colorMask(!!a,!!b,!!c,!!d)},Fb:a=>{R.compileShader(N[a])},Ba:(a,b,c,d,e,h,f,m)=>{2<=Q.version?R.kc||!f?R.compressedTexImage2D(a,b,c,d,e,h,f,m):R.compressedTexImage2D(a,b,c,d,e,h,v,m,f):R.compressedTexImage2D(a,b,
c,d,e,h,m?v.subarray(m,m+f):null)},za:(a,b,c,d,e,h,f,m,n)=>{R.kc?R.compressedTexImage3D(a,b,c,d,e,h,f,m,n):R.compressedTexImage3D(a,b,c,d,e,h,f,v,n,m)},wa:()=>{var a=Cb(K),b=R.createProgram();b.name=a;b.qc=b.oc=b.pc=0;b.tc=1;K[a]=b;return a},Hb:a=>{var b=Cb(N);N[b]=R.createShader(a);return b},D:function(a){R.cullFace(a)},Sa:(a,b)=>{for(var c=0;c<a;c++){var d=w[b+4*c>>2],e=vb[d];e&&(R.deleteBuffer(e),e.name=0,vb[d]=null,d==R.uc&&(R.uc=0),d==R.kc&&(R.kc=0))}},e:(a,b)=>{for(var c=0;c<a;++c){var d=w[b+
4*c>>2],e=wb[d];e&&(R.deleteFramebuffer(e),e.name=0,wb[d]=null)}},w:a=>{if(a){var b=K[a];b?(R.deleteProgram(b),b.name=0,K[a]=null):P(1281)}},M:(a,b)=>{for(var c=0;c<a;c++){var d=w[b+4*c>>2],e=L[d];e&&(R.deleteRenderbuffer(e),e.name=0,L[d]=null)}},L:(a,b)=>{for(var c=0;c<a;c++){var d=w[b+4*c>>2],e=O[d];e&&(R.deleteSampler(e),e.name=0,O[d]=null)}},r:a=>{if(a){var b=N[a];b?(R.deleteShader(b),N[a]=null):P(1281)}},N:(a,b)=>{for(var c=0;c<a;c++){var d=w[b+4*c>>2],e=M[d];e&&(R.deleteTexture(e),e.name=0,
M[d]=null)}},Pa:(a,b)=>{for(var c=0;c<a;c++){var d=w[b+4*c>>2];R.deleteVertexArray(xb[d]);xb[d]=null}},v:function(a){R.depthFunc(a)},u:a=>{R.depthMask(!!a)},d:function(a){R.disable(a)},J:a=>{R.disableVertexAttribArray(a)},jb:(a,b,c)=>{R.drawArrays(a,b,c)},kb:(a,b,c,d)=>{R.drawArraysInstanced(a,b,c,d)},oa:(a,b)=>{for(var c=Kb[a],d=0;d<a;d++)c[d]=w[b+4*d>>2];R.drawBuffers(c)},lb:(a,b,c,d)=>{R.drawElements(a,b,c,d)},mb:(a,b,c,d,e)=>{R.drawElementsInstanced(a,b,c,d,e)},g:function(a){R.enable(a)},xb:a=>
{R.enableVertexAttribArray(a)},qa:(a,b,c,d)=>{R.framebufferRenderbuffer(a,b,c,L[d])},l:(a,b,c,d,e)=>{R.framebufferTexture2D(a,b,c,M[d],e)},z:(a,b,c,d,e)=>{R.framebufferTextureLayer(a,b,M[c],d,e)},E:function(a){R.frontFace(a)},Ja:(a,b)=>{S(a,b,"createBuffer",vb)},ra:(a,b)=>{S(a,b,"createFramebuffer",wb)},Ga:(a,b)=>{S(a,b,"createRenderbuffer",L)},xa:(a,b)=>{S(a,b,"createSampler",O)},Da:(a,b)=>{S(a,b,"createTexture",M)},Oa:function(a,b){S(a,b,"createVertexArray",xb)},Db:(a,b)=>R.getAttribLocation(K[a],
b?E(b):""),b:(a,b)=>Lb(a,b),ua:(a,b,c,d)=>{a=R.getProgramInfoLog(K[a]);null===a&&(a="(unknown error)");b=0<b&&d?H(a,d,b):0;c&&(w[c>>2]=b)},A:(a,b,c)=>{if(c)if(a>=ub)P(1281);else if(a=K[a],35716==b)a=R.getProgramInfoLog(a),null===a&&(a="(unknown error)"),w[c>>2]=a.length+1;else if(35719==b){if(!a.qc)for(b=0;b<R.getProgramParameter(a,35718);++b)a.qc=Math.max(a.qc,R.getActiveUniform(a,b).name.length+1);w[c>>2]=a.qc}else if(35722==b){if(!a.oc)for(b=0;b<R.getProgramParameter(a,35721);++b)a.oc=Math.max(a.oc,
R.getActiveAttrib(a,b).name.length+1);w[c>>2]=a.oc}else if(35381==b){if(!a.pc)for(b=0;b<R.getProgramParameter(a,35382);++b)a.pc=Math.max(a.pc,R.getActiveUniformBlockName(a,b).length+1);w[c>>2]=a.pc}else w[c>>2]=R.getProgramParameter(a,b);else P(1281)},Eb:(a,b,c,d)=>{a=R.getShaderInfoLog(N[a]);null===a&&(a="(unknown error)");b=0<b&&d?H(a,d,b):0;c&&(w[c>>2]=b)},sa:(a,b,c)=>{c?35716==b?(a=R.getShaderInfoLog(N[a]),null===a&&(a="(unknown error)"),w[c>>2]=a?a.length+1:0):35720==b?(a=R.getShaderSource(N[a]),
w[c>>2]=a?a.length+1:0):w[c>>2]=R.getShaderParameter(N[a],b):P(1281)},Ta:(a,b)=>{if(2>Q.version)return P(1282),0;var c=zb[a];if(c)return 0>b||b>=c.length?(P(1281),0):c[b];switch(a){case 7939:return c=Gb().map(d=>{var e=Mb(d)+1,h=I(e);h&&H(d,h,e);return h}),c=zb[a]=c,0>b||b>=c.length?(P(1281),0):c[b];default:return P(1280),0}},q:(a,b)=>{b=b?E(b):"";if(a=K[a]){var c=a,d=c.nc,e=c.Kc,h;if(!d)for(c.nc=d={},c.Jc={},h=0;h<R.getProgramParameter(c,35718);++h){var f=R.getActiveUniform(c,h);var m=f.name;f=f.size;
var n=Nb(m);n=0<n?m.slice(0,n):m;var p=c.tc;c.tc+=f;e[n]=[f,p];for(m=0;m<f;++m)d[p]=m,c.Jc[p++]=n}c=a.nc;d=0;e=b;h=Nb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.Kc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||R.getUniformLocation(a,b)))return d}else P(1281);return-1},fb:(a,b,c)=>{for(var d=Kb[b],e=0;e<b;e++)d[e]=w[c+4*e>>2];R.invalidateFramebuffer(a,d)},va:a=>{a=K[a];R.linkProgram(a);a.nc=0;a.Kc={}},Na:(a,b)=>{3317==a&&(Ab=b);R.pixelStorei(a,b)},F:function(a,b){R.polygonOffset(a,b)},ib:function(a){R.readBuffer(a)},
Ea:function(a,b,c,d,e){R.renderbufferStorageMultisample(a,b,c,d,e)},C:(a,b,c)=>{R.samplerParameterf(O[a],b,c)},f:(a,b,c)=>{R.samplerParameteri(O[a],b,c)},na:function(a,b,c,d){R.scissor(a,b,c,d)},Gb:(a,b,c,d)=>{for(var e="",h=0;h<b;++h){var f=d?w[d+4*h>>2]:-1,m=w[c+4*h>>2];f=m?E(m,0>f?void 0:f):"";e+=f}R.shaderSource(N[a],e)},Ma:function(a,b,c){R.stencilFunc(a,b,c)},la:function(a,b,c,d){R.stencilFuncSeparate(a,b,c,d)},t:function(a){R.stencilMask(a)},Ka:function(a,b,c){R.stencilOp(a,b,c)},ka:function(a,
b,c,d){R.stencilOpSeparate(a,b,c,d)},Aa:(a,b,c,d,e,h,f,m,n)=>{if(2<=Q.version)if(R.kc)R.texImage2D(a,b,c,d,e,h,f,m,n);else if(n){var p=T(m);R.texImage2D(a,b,c,d,e,h,f,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else R.texImage2D(a,b,c,d,e,h,f,m,null);else R.texImage2D(a,b,c,d,e,h,f,m,n?Ob(m,f,d,e,n):null)},ya:(a,b,c,d,e,h,f,m,n,p)=>{if(R.kc)R.texImage3D(a,b,c,d,e,h,f,m,n,p);else if(p){var t=T(n);R.texImage3D(a,b,c,d,e,h,f,m,n,t,p>>31-Math.clz32(t.BYTES_PER_ELEMENT))}else R.texImage3D(a,b,c,d,e,h,f,
m,n,null)},Ca:function(a,b,c){R.texParameteri(a,b,c)},eb:(a,b,c,d,e,h,f,m,n)=>{if(2<=Q.version)if(R.kc)R.texSubImage2D(a,b,c,d,e,h,f,m,n);else if(n){var p=T(m);R.texSubImage2D(a,b,c,d,e,h,f,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else R.texSubImage2D(a,b,c,d,e,h,f,m,null);else p=null,n&&(p=Ob(m,f,e,h,n)),R.texSubImage2D(a,b,c,d,e,h,f,m,p)},db:(a,b,c,d,e,h,f,m,n,p,t)=>{if(R.kc)R.texSubImage3D(a,b,c,d,e,h,f,m,n,p,t);else if(t){var u=T(p);R.texSubImage3D(a,b,c,d,e,h,f,m,n,p,u,t>>31-Math.clz32(u.BYTES_PER_ELEMENT))}else R.texSubImage3D(a,
b,c,d,e,h,f,m,n,p,null)},wb:(a,b,c)=>{if(2<=Q.version)b&&R.uniform1fv(U(a),x,c>>2,b);else{if(288>=b)for(var d=V[b-1],e=0;e<b;++e)d[e]=x[c+4*e>>2];else d=x.subarray(c>>2,c+4*b>>2);R.uniform1fv(U(a),d)}},ta:(a,b)=>{R.uniform1i(U(a),b)},sb:(a,b,c)=>{if(2<=Q.version)b&&R.uniform1iv(U(a),w,c>>2,b);else{if(288>=b)for(var d=W[b-1],e=0;e<b;++e)d[e]=w[c+4*e>>2];else d=w.subarray(c>>2,c+4*b>>2);R.uniform1iv(U(a),d)}},vb:(a,b,c)=>{if(2<=Q.version)b&&R.uniform2fv(U(a),x,c>>2,2*b);else{if(144>=b)for(var d=V[2*
b-1],e=0;e<2*b;e+=2)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2];else d=x.subarray(c>>2,c+8*b>>2);R.uniform2fv(U(a),d)}},qb:(a,b,c)=>{if(2<=Q.version)b&&R.uniform2iv(U(a),w,c>>2,2*b);else{if(144>=b)for(var d=W[2*b-1],e=0;e<2*b;e+=2)d[e]=w[c+4*e>>2],d[e+1]=w[c+(4*e+4)>>2];else d=w.subarray(c>>2,c+8*b>>2);R.uniform2iv(U(a),d)}},ub:(a,b,c)=>{if(2<=Q.version)b&&R.uniform3fv(U(a),x,c>>2,3*b);else{if(96>=b)for(var d=V[3*b-1],e=0;e<3*b;e+=3)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2],d[e+2]=x[c+(4*e+8)>>2];else d=
x.subarray(c>>2,c+12*b>>2);R.uniform3fv(U(a),d)}},pb:(a,b,c)=>{if(2<=Q.version)b&&R.uniform3iv(U(a),w,c>>2,3*b);else{if(96>=b)for(var d=W[3*b-1],e=0;e<3*b;e+=3)d[e]=w[c+4*e>>2],d[e+1]=w[c+(4*e+4)>>2],d[e+2]=w[c+(4*e+8)>>2];else d=w.subarray(c>>2,c+12*b>>2);R.uniform3iv(U(a),d)}},tb:(a,b,c)=>{if(2<=Q.version)b&&R.uniform4fv(U(a),x,c>>2,4*b);else{if(72>=b){var d=V[4*b-1],e=x;c>>=2;for(var h=0;h<4*b;h+=4){var f=c+h;d[h]=e[f];d[h+1]=e[f+1];d[h+2]=e[f+2];d[h+3]=e[f+3]}}else d=x.subarray(c>>2,c+16*b>>2);
R.uniform4fv(U(a),d)}},ob:(a,b,c)=>{if(2<=Q.version)b&&R.uniform4iv(U(a),w,c>>2,4*b);else{if(72>=b)for(var d=W[4*b-1],e=0;e<4*b;e+=4)d[e]=w[c+4*e>>2],d[e+1]=w[c+(4*e+4)>>2],d[e+2]=w[c+(4*e+8)>>2],d[e+3]=w[c+(4*e+12)>>2];else d=w.subarray(c>>2,c+16*b>>2);R.uniform4iv(U(a),d)}},nb:(a,b,c,d)=>{if(2<=Q.version)b&&R.uniformMatrix4fv(U(a),!!c,x,d>>2,16*b);else{if(18>=b){var e=V[16*b-1],h=x;d>>=2;for(var f=0;f<16*b;f+=16){var m=d+f;e[f]=h[m];e[f+1]=h[m+1];e[f+2]=h[m+2];e[f+3]=h[m+3];e[f+4]=h[m+4];e[f+5]=
h[m+5];e[f+6]=h[m+6];e[f+7]=h[m+7];e[f+8]=h[m+8];e[f+9]=h[m+9];e[f+10]=h[m+10];e[f+11]=h[m+11];e[f+12]=h[m+12];e[f+13]=h[m+13];e[f+14]=h[m+14];e[f+15]=h[m+15]}}else e=x.subarray(d>>2,d+64*b>>2);R.uniformMatrix4fv(U(a),!!c,e)}},n:a=>{a=K[a];R.useProgram(a);R.Mc=a},yb:(a,b)=>{R.vertexAttribDivisor(a,b)},zb:(a,b,c,d,e,h)=>{R.vertexAttribPointer(a,b,c,!!d,e,h)},p:function(a,b,c,d){R.viewport(a,b,c,d)},Kb:function(){g.Cc=a=>{0!=Tb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",
g.Cc)},ab:function(){g.Ic=a=>{const b=a.clipboardData.getData("text");Ma(()=>{const c=X(b);Ub(c)})};window.addEventListener("paste",g.Ic)},Ua:function(a){g.Zc=[];a=a?E(a):"";a=document.getElementById(a);g.Dc=b=>{b.stopPropagation();b.preventDefault()};g.Ec=b=>{b.stopPropagation();b.preventDefault()};g.Fc=b=>{b.stopPropagation();b.preventDefault()};g.Gc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;g.Hc=c;Vb(c.length);for(let e=0;e<c.length;e++)Ma(()=>{const h=X(c[e].name);
Wb(e,h)});let d=0;b.shiftKey&&(d|=1);b.ctrlKey&&(d|=2);b.altKey&&(d|=4);b.metaKey&&(d|=8);Xb(b.clientX,b.clientY,d)};a.addEventListener("dragenter",g.Dc,!1);a.addEventListener("dragleave",g.Ec,!1);a.addEventListener("dragover",g.Fc,!1);a.addEventListener("drop",g.Gc,!1)},Ib:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},Ra:function(a){const b=g.Hc;return 0>a||a>=b.length?0:b[a].size},Qa:function(a,b,c,d,e){const h=new FileReader;h.onload=f=>{f=f.target.result;
f.byteLength>d?Yb(a,0,1,b,0,c,d,e):(v.set(new Uint8Array(f),c),Yb(a,1,0,b,f.byteLength,c,d,e))};h.onerror=()=>{Yb(a,0,2,b,0,c,d,e)};h.readAsArrayBuffer(g.Hc[a])},Ia:function(a){a=a?E(a):"";g.mc=document.getElementById(a);g.mc||console.log("sokol_app.h: invalid target:"+a);g.mc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Jb:function(){window.removeEventListener("beforeunload",g.Cc)},Va:function(){window.removeEventListener("paste",g.Ic)},La:function(a){a=
a?E(a):"";a=document.getElementById(a);a.removeEventListener("dragenter",g.Dc);a.removeEventListener("dragleave",g.Ec);a.removeEventListener("dragover",g.Fc);a.removeEventListener("drop",g.Gc)},s:function(){g.mc&&g.mc.requestPointerLock&&g.mc.requestPointerLock()},Cb:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(v.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";
a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},gb:function(){const a=(new URLSearchParams(window.location.search)).entries();for(let b=a.next();!b.done;b=a.next()){const c=b.value[0],d=b.value[1];Ma(()=>{const e=X(c),h=X(d);Zb(e,h)})}},rb:function(){if(g.Lc)return"suspended"===g.Lc.state?1:0},x:function(a,b,c,d,e,h){b=b?E(b):"";const f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";const m=0<d;m&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=
function(){if(f.readyState==XMLHttpRequest.DONE)if(206==f.status||200==f.status&&!m){const n=new Uint8Array(f.response),p=n.length;p<=h?(v.set(n,e),$b(a,d,p)):ac(a)}else bc(a,f.status)};f.send()},ja:function(a,b){b=b?E(b):"";const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==c.status){const d=c.getResponseHeader("Content-Length");cc(a,d)}else bc(a,c.status)};c.send()},ia:function(a,b){b=b?E(b):"";switch(a){case 0:console.error(b);
break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}},Z=function(){function a(c){Z=c.exports;oa=Z.Lb;ua();fb=Z.bc;wa.unshift(Z.Mb);z--;g.monitorRunDependencies?.(z);0==z&&(null!==Ba&&(clearInterval(Ba),Ba=null),A&&(c=A,A=null,c()));return Z}var b={a:dc};z++;g.monitorRunDependencies?.(z);if(g.instantiateWasm)try{return g.instantiateWasm(b,a)}catch(c){return q(`Module.instantiateWasm callback failed with error: ${c}`),!1}Ha(b,function(c){a(c.instance)});return{}}();
g._fs_emsc_alloc=a=>(g._fs_emsc_alloc=Z.Nb)(a);var I=a=>(I=Z.Ob)(a);g._fs_emsc_load_snapshot_callback=(a,b,c)=>(g._fs_emsc_load_snapshot_callback=Z.Pb)(a,b,c);
var Ub=g.__sapp_emsc_onpaste=a=>(Ub=g.__sapp_emsc_onpaste=Z.Qb)(a),Tb=g.__sapp_html5_get_ask_leave_site=()=>(Tb=g.__sapp_html5_get_ask_leave_site=Z.Rb)(),Vb=g.__sapp_emsc_begin_drop=a=>(Vb=g.__sapp_emsc_begin_drop=Z.Sb)(a),Wb=g.__sapp_emsc_drop=(a,b)=>(Wb=g.__sapp_emsc_drop=Z.Tb)(a,b),Xb=g.__sapp_emsc_end_drop=(a,b,c)=>(Xb=g.__sapp_emsc_end_drop=Z.Ub)(a,b,c),Yb=g.__sapp_emsc_invoke_fetch_cb=(a,b,c,d,e,h,f,m)=>(Yb=g.__sapp_emsc_invoke_fetch_cb=Z.Vb)(a,b,c,d,e,h,f,m),ec=g._main=(a,b)=>(ec=g._main=Z.Wb)(a,
b);g.__saudio_emsc_pull=a=>(g.__saudio_emsc_pull=Z.Xb)(a);
var Zb=g.__sargs_add_kvp=(a,b)=>(Zb=g.__sargs_add_kvp=Z.Yb)(a,b),cc=g.__sfetch_emsc_head_response=(a,b)=>(cc=g.__sfetch_emsc_head_response=Z.Zb)(a,b),$b=g.__sfetch_emsc_get_response=(a,b,c)=>($b=g.__sfetch_emsc_get_response=Z._b)(a,b,c),bc=g.__sfetch_emsc_failed_http_status=(a,b)=>(bc=g.__sfetch_emsc_failed_http_status=Z.$b)(a,b),ac=g.__sfetch_emsc_failed_buffer_too_small=a=>(ac=g.__sfetch_emsc_failed_buffer_too_small=Z.ac)(a),Ka=()=>(Ka=Z.cc)(),La=a=>(La=Z.dc)(a),Qb=a=>(Qb=Z.ec)(a);
g.___start_em_js=21776;g.___stop_em_js=34234;var fc;A=function gc(){fc||hc();fc||(A=gc)};function ic(a=[]){var b=ec;a.unshift(ca);var c=a.length,d=Qb(4*(c+1)),e=d;a.forEach(f=>{ta[e>>2]=X(f);e+=4});ta[e>>2]=0;try{var h=b(c,d);Pb(h)}catch(f){f instanceof ma||"unwind"==f||da(1,f)}}
function hc(){var a=ba;function b(){if(!fc&&(fc=!0,g.calledRun=!0,!pa)){Ia(wa);Ia(xa);if(g.onRuntimeInitialized)g.onRuntimeInitialized();jc&&ic(a);if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var c=g.postRun.shift();za.unshift(c)}Ia(za)}}if(!(0<z)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Aa();Ia(va);0<z||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},
1)):b())}}if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var jc=!0;g.noInitialRun&&(jc=!1);hc();
