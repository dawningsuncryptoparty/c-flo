(function() {function g(a){throw a;}var i=void 0,k=!0,l=null,o=!1,p,q=this;
function r(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function aa(a){var b=r(a);return"array"==b||"object"==b&&"number"==typeof a.length}function s(a){return"string"==typeof a}function ba(a){a=r(a);return"object"==a||"array"==a||"function"==a}function u(a){return a[ca]||(a[ca]=++da)}var ca="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36),da=0;function ea(a,b,c){return a.call.apply(a.bind,arguments)}
function fa(a,b,c){a||g(Error());if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function ga(a,b,c){ga=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return ga.apply(l,arguments)}var v=Date.now||function(){return+new Date};
function w(a,b){function c(){}c.prototype=b.prototype;a.t=b.prototype;a.prototype=new c}function x(a,b){return Array(b+1).join(a)}function z(a){var a=""+a,b=a.indexOf(".");-1==b&&(b=a.length);return x("0",Math.max(0,2-b))+a}var A,ha,C,ia;function ja(){return q.navigator?q.navigator.userAgent:l}ia=C=ha=A=o;var D;if(D=ja()){var ka=q.navigator;A=0==D.indexOf("Opera");ha=!A&&-1!=D.indexOf("MSIE");C=!A&&-1!=D.indexOf("WebKit");ia=!A&&!C&&"Gecko"==ka.product}var E=ha,la=ia,ma=C,na;
a:{var F="",G;if(A&&q.opera)var oa=q.opera.version,F="function"==typeof oa?oa():oa;else if(la?G=/rv\:([^\);]+)(\)|;)/:E?G=/MSIE\s+([^\);]+)(\)|;)/:ma&&(G=/WebKit\/(\S+)/),G)var pa=G.exec(ja()),F=pa?pa[1]:"";if(E){var qa,ra=q.document;qa=ra?ra.documentMode:i;if(qa>parseFloat(F)){na=""+qa;break a}}na=F}var sa={},ta={};function ua(){return ta[9]||(ta[9]=E&&document.documentMode&&9<=document.documentMode)}function va(a){var b=H,c;for(c in b)a.call(i,b[c],c,b)}var wa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function xa(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var e=0;e<wa.length;e++)c=wa[e],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
var I=Array.prototype,ya=I.indexOf?function(a,b,c){return I.indexOf.call(a,b,c)}:function(a,b,c){c=c==l?0:0>c?Math.max(0,a.length+c):c;if(s(a))return!s(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},za=I.forEach?function(a,b,c){I.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=s(a)?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)},J="StopIteration"in q?q.StopIteration:Error("StopIteration");function K(){}K.prototype.next=function(){g(J)};
K.prototype.w=function(){return this};function Aa(a){if(a instanceof K)return a;if("function"==typeof a.w)return a.w(o);if(aa(a)){var b=0,c=new K;c.next=function(){for(;;){b>=a.length&&g(J);if(b in a)return a[b++];b++}};return c}g(Error("Not implemented"))}function Ba(a,b){if(aa(a))try{za(a,b,i)}catch(c){c!==J&&g(c)}else{a=Aa(a);try{for(;;)b.call(i,a.next(),i,a)}catch(d){d!==J&&g(d)}}}
function L(a,b){this.g={};this.S={};var c=arguments.length;if(1<c){c%2&&g(Error("Uneven number of arguments"));for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){var f;if(a instanceof L){f=Ca(a);var d=[],e;for(e in a.g)":"==e.charAt(0)&&d.push(a.g[e])}else{e=[];c=0;for(f in a)e[c++]=f;f=e;e=[];c=0;for(d in a)e[c++]=a[d];d=e}for(e=0;e<f.length;e++)this.set(f[e],d[e])}}p=L.prototype;p.b=0;p.G=0;
function Ca(a){var b=[],c;for(c in a.g)if(":"==c.charAt(0)){var d=c.substring(1);b.push(a.S[c]?Number(d):d)}return b}p.get=function(a,b){var c=":"+a;return c in this.g?this.g[c]:b};p.set=function(a,b){var c=":"+a;c in this.g||(this.G++,this.b++,"number"==typeof a&&(this.S[c]=k));this.g[c]=b};
p.w=function(a){var b=0,c=Ca(this),d=this.g,f=this.G,e=this,h=new K;h.next=function(){for(;;){f!=e.G&&g(Error("The map has changed since the iterator was created"));b>=c.length&&g(J);var h=c[b++];return a?h:d[":"+h]}};return h};function M(){}M.prototype.M=o;M.prototype.j=function(){this.M||(this.M=k,this.e())};M.prototype.e=function(){this.Y&&Da.apply(l,this.Y)};function Da(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];aa(d)?Da.apply(l,d):d&&"function"==typeof d.j&&d.j()}}
function N(a,b){this.$=b;this.B=[];a>this.$&&g(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));for(var c=0;c<a;c++)this.B.push(this.n())}w(N,M);p=N.prototype;p.I=l;p.L=l;p.n=function(){return this.I?this.I():{}};p.K=function(a){if(this.L)this.L(a);else if(ba(a))if("function"==r(a.j))a.j();else for(var b in a)delete a[b]};p.e=function(){N.t.e.call(this);for(var a=this.B;a.length;)this.K(a.pop());delete this.B};
function Ea(){this.O=[];this.T=new L;this.ga=this.ha=this.ia=this.ba=0;this.U=new L;this.X=this.fa=0;this.aa=1;this.Z=new N(0,4E3);this.Z.n=function(){return new Fa};this.ca=new N(0,50);this.ca.n=function(){return new Ga};var a=this;this.P=new N(0,2E3);this.P.n=function(){return""+a.aa++};this.P.K=function(){}}function Ga(){this.V=this.time=this.count=0}
Ga.prototype.toString=function(){var a=[];a.push(this.type," ",this.count," (",Math.round(10*this.time)/10," ms)");this.V&&a.push(" [VarAlloc = ",this.V,"]");return a.join("")};function Fa(){}function Ha(a,b,c,d){var f=[];-1==c?f.push("    "):f.push(Ia(a.N-c));f.push(" ",Ja(a.N-b));0==a.A?f.push(" Start        "):1==a.A?(f.push(" Done "),f.push(Ia(a.ja-a.startTime)," ms ")):f.push(" Comment      ");f.push(d,a);0<a.ea&&f.push("[VarAlloc ",a.ea,"] ");return f.join("")}
Fa.prototype.toString=function(){return this.type==l?this.W:"["+this.type+"] "+this.W};
Ea.prototype.toString=function(){for(var a=[],b=-1,c=[],d=0;d<this.O.length;d++){var f=this.O[d];1==f.A&&c.pop();a.push(" ",Ha(f,this.ba,b,c.join("")));b=f.N;a.push("\n");0==f.A&&c.push("|  ")}if(0!=this.T.b){var e=v();a.push(" Unstopped timers:\n");Ba(this.T,function(b){a.push("  ",b," (",e-b.startTime," ms, started at ",Ja(b.startTime),")\n")})}b=Ca(this.U);for(d=0;d<b.length;d++)c=this.U.get(b[d]),1<c.count&&a.push(" TOTAL ",c,"\n");a.push("Total tracers created ",this.fa,"\n","Total comments created ",
this.X,"\n","Overhead start: ",this.ia," ms\n","Overhead end: ",this.ha," ms\n","Overhead comment: ",this.ga," ms\n");return a.join("")};function Ia(a){var a=Math.round(a),b="";1E3>a&&(b=" ");100>a&&(b="  ");10>a&&(b="   ");return b+a}function Ja(a){a=Math.round(a);return(""+(100+a/1E3%60)).substring(1,3)+"."+(""+(1E3+a%1E3)).substring(1,4)}new Ea;function Ka(){}var La=0;p=Ka.prototype;p.key=0;p.removed=o;p.H=o;
p.o=function(a,b,c,d,f,e){"function"==r(a)?this.Q=k:a&&a.handleEvent&&"function"==r(a.handleEvent)?this.Q=o:g(Error("Invalid listener argument"));this.l=a;this.proxy=b;this.src=c;this.type=d;this.capture=!!f;this.C=e;this.H=o;this.key=++La;this.removed=o};p.handleEvent=function(a){return this.Q?this.l.call(this.C||this.src,a):this.l.handleEvent.call(this.l,a)};!E||ua();var Ma=!E||ua();
if(E&&!sa["8"]){for(var O=0,Na=(""+na).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),Oa="8".replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),Pa=Math.max(Na.length,Oa.length),P=0;0==O&&P<Pa;P++){var Qa=Na[P]||"",Ra=Oa[P]||"",Sa=RegExp("(\\d*)(\\D*)","g"),Ta=RegExp("(\\d*)(\\D*)","g");do{var Q=Sa.exec(Qa)||["","",""],R=Ta.exec(Ra)||["","",""];if(0==Q[0].length&&0==R[0].length)break;O=((0==Q[1].length?0:parseInt(Q[1],10))<(0==R[1].length?0:parseInt(R[1],10))?-1:(0==Q[1].length?0:parseInt(Q[1],10))>
(0==R[1].length?0:parseInt(R[1],10))?1:0)||((0==Q[2].length)<(0==R[2].length)?-1:(0==Q[2].length)>(0==R[2].length)?1:0)||(Q[2]<R[2]?-1:Q[2]>R[2]?1:0)}while(0==O)}sa["8"]=0<=O}function S(a,b){this.type=a;this.currentTarget=this.target=b}w(S,M);S.prototype.e=function(){delete this.type;delete this.target;delete this.currentTarget};S.prototype.k=o;S.prototype.r=k;function Ua(a){Ua[" "](a);return a}Ua[" "]=function(){};function T(a,b){a&&this.o(a,b)}w(T,S);p=T.prototype;p.target=l;p.relatedTarget=l;
p.offsetX=0;p.offsetY=0;p.clientX=0;p.clientY=0;p.screenX=0;p.screenY=0;p.button=0;p.keyCode=0;p.charCode=0;p.ctrlKey=o;p.altKey=o;p.shiftKey=o;p.metaKey=o;
p.o=function(a,b){var c=this.type=a.type;S.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(la){var f;a:{try{Ua(d.nodeName);f=k;break a}catch(e){}f=o}f||(d=l)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=a.offsetX!==i?a.offsetX:a.layerX;this.offsetY=a.offsetY!==i?a.offsetY:a.layerY;this.clientX=a.clientX!==i?a.clientX:a.pageX;this.clientY=a.clientY!==i?a.clientY:a.pageY;this.screenX=a.screenX||
0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;delete this.r;delete this.k};p.e=function(){T.t.e.call(this);this.relatedTarget=this.currentTarget=this.target=l};var U={},V={},H={},W={};
function Va(a,b,c,d,f){if(b)if("array"==r(b))for(var e=0;e<b.length;e++)Va(a,b[e],c,d,f);else{var d=!!d,h=V;b in h||(h[b]={b:0,c:0});h=h[b];d in h||(h[d]={b:0,c:0},h.b++);var h=h[d],j=u(a),m;h.c++;if(h[j]){m=h[j];for(e=0;e<m.length;e++)if(h=m[e],h.l==c&&h.C==f){if(h.removed)break;return}}else m=h[j]=[],h.b++;e=Wa();e.src=a;h=new Ka;h.o(c,e,a,b,d,f);c=h.key;e.key=c;m.push(h);U[c]=h;H[j]||(H[j]=[]);H[j].push(h);a.addEventListener?(a==q||!a.J)&&a.addEventListener(b,e,d):a.attachEvent(b in W?W[b]:W[b]=
"on"+b,e)}else g(Error("Invalid event type"))}function Wa(){var a=Xa,b=Ma?function(c){return a.call(b.src,b.key,c)}:function(c){c=a.call(b.src,b.key,c);if(!c)return c};return b}function Ya(a,b,c,d,f){if("array"==r(b))for(var e=0;e<b.length;e++)Ya(a,b[e],c,d,f);else{d=!!d;a:{e=V;if(b in e&&(e=e[b],d in e&&(e=e[d],a=u(a),e[a]))){a=e[a];break a}a=l}if(a)for(e=0;e<a.length;e++)if(a[e].l==c&&a[e].capture==d&&a[e].C==f){Za(a[e].key);break}}}
function Za(a){if(U[a]){var b=U[a];if(!b.removed){var c=b.src,d=b.type,f=b.proxy,e=b.capture;c.removeEventListener?(c==q||!c.J)&&c.removeEventListener(d,f,e):c.detachEvent&&c.detachEvent(d in W?W[d]:W[d]="on"+d,f);c=u(c);f=V[d][e][c];if(H[c]){var h=H[c],j=ya(h,b);0<=j&&I.splice.call(h,j,1);0==h.length&&delete H[c]}b.removed=k;f.R=k;$a(d,e,c,f);delete U[a]}}}
function $a(a,b,c,d){if(!d.q&&d.R){for(var f=0,e=0;f<d.length;f++)d[f].removed?d[f].proxy.src=l:(f!=e&&(d[e]=d[f]),e++);d.length=e;d.R=o;0==e&&(delete V[a][b][c],V[a][b].b--,0==V[a][b].b&&(delete V[a][b],V[a].b--),0==V[a].b&&delete V[a])}}function ab(a){var b,c=0,d=b==l;b=!!b;if(a==l)va(function(a){for(var e=a.length-1;0<=e;e--){var f=a[e];if(d||b==f.capture)Za(f.key),c++}});else if(a=u(a),H[a])for(var a=H[a],f=a.length-1;0<=f;f--){var e=a[f];if(d||b==e.capture)Za(e.key),c++}}
function X(a,b,c,d,f){var e=1,b=u(b);if(a[b]){a.c--;a=a[b];a.q?a.q++:a.q=1;try{for(var h=a.length,j=0;j<h;j++){var m=a[j];m&&!m.removed&&(e&=bb(m,f)!==o)}}finally{a.q--,$a(c,d,b,a)}}return Boolean(e)}function bb(a,b){var c=a.handleEvent(b);a.H&&Za(a.key);return c}
function Xa(a,b){if(!U[a])return k;var c=U[a],d=c.type,f=V;if(!(d in f))return k;var f=f[d],e,h;if(!Ma){var j;if(!(j=b))a:{j=["window","event"];for(var m=q;e=j.shift();)if(m[e]!=l)m=m[e];else{j=l;break a}j=m}e=j;j=k in f;m=o in f;if(j){if(0>e.keyCode||e.returnValue!=i)return k;a:{var n=o;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(nb){n=k}if(n||e.returnValue==i)e.returnValue=k}}n=new T;n.o(e,this);e=k;try{if(j){for(var t=[],B=n.currentTarget;B;B=B.parentNode)t.push(B);h=f[k];h.c=h.b;for(var y=
t.length-1;!n.k&&0<=y&&h.c;y--)n.currentTarget=t[y],e&=X(h,t[y],d,k,n);if(m){h=f[o];h.c=h.b;for(y=0;!n.k&&y<t.length&&h.c;y++)n.currentTarget=t[y],e&=X(h,t[y],d,o,n)}}else e=bb(c,n)}finally{t&&(t.length=0),n.j()}return e}d=new T(b,this);try{e=bb(c,d)}finally{d.j()}return e}function cb(){}w(cb,M);p=cb.prototype;p.J=k;p.F=l;p.addEventListener=function(a,b,c,d){Va(this,a,b,c,d)};p.removeEventListener=function(a,b,c,d){Ya(this,a,b,c,d)};
p.dispatchEvent=function(a){var b=a.type||a,c=V;if(b in c){if(s(a))a=new S(a,this);else if(a instanceof S)a.target=a.target||this;else{var d=a,a=new S(b,this);xa(a,d)}var d=1,f,c=c[b],b=k in c,e;if(b){f=[];for(e=this;e;e=e.F)f.push(e);e=c[k];e.c=e.b;for(var h=f.length-1;!a.k&&0<=h&&e.c;h--)a.currentTarget=f[h],d&=X(e,f[h],a.type,k,a)&&a.r!=o}if(o in c)if(e=c[o],e.c=e.b,b)for(h=0;!a.k&&h<f.length&&e.c;h++)a.currentTarget=f[h],d&=X(e,f[h],a.type,o,a)&&a.r!=o;else for(f=this;!a.k&&f&&e.c;f=f.F)a.currentTarget=
f,d&=X(e,f,a.type,o,a)&&a.r!=o;a=Boolean(d)}else a=k;return a};p.e=function(){cb.t.e.call(this);ab(this);this.F=l};function Y(a,b){this.p=a||1;this.m=b||db;this.z=ga(this.da,this);this.D=v()}w(Y,cb);Y.prototype.enabled=o;var db=q.window;p=Y.prototype;p.h=l;p.da=function(){if(this.enabled){var a=v()-this.D;0<a&&a<0.8*this.p?this.h=this.m.setTimeout(this.z,this.p-a):(this.dispatchEvent(eb),this.enabled&&(this.h=this.m.setTimeout(this.z,this.p),this.D=v()))}};
p.start=function(){this.enabled=k;this.h||(this.h=this.m.setTimeout(this.z,this.p),this.D=v())};p.stop=function(){this.enabled=o;this.h&&(this.m.clearTimeout(this.h),this.h=l)};p.e=function(){Y.t.e.call(this);this.stop();delete this.m};var eb="tick";
function fb(a,b){var c=Array.prototype.slice.call(arguments),d=c.shift();"undefined"==typeof d&&g(Error("[goog.string.format] Template required"));return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g,function(a,b,d,j,m,n,nb,t){if("%"==n)return"%";var B=c.shift();"undefined"==typeof B&&g(Error("[goog.string.format] Not enough arguments"));arguments[0]=B;return Z[n].apply(l,arguments)})}
var Z={s:function(a,b,c){return isNaN(c)||""==c||a.length>=c?a:a=-1<b.indexOf("-",0)?a+x(" ",c-a.length):x(" ",c-a.length)+a},f:function(a,b,c,d,f){d=a.toString();isNaN(f)||""==f||(d=a.toFixed(f));var e;e=0>a?"-":0<=b.indexOf("+")?"+":0<=b.indexOf(" ")?" ":"";0<=a&&(d=e+d);if(isNaN(c)||d.length>=c)return d;d=isNaN(f)?Math.abs(a).toString():Math.abs(a).toFixed(f);a=c-d.length-e.length;return d=0<=b.indexOf("-",0)?e+d+x(" ",a):e+x(0<=b.indexOf("0",0)?"0":" ",a)+d},d:function(a,b,c,d,f,e,h,j){return Z.f(parseInt(a,
10),b,c,d,0,e,h,j)}};Z.i=Z.d;Z.u=Z.d;function gb(a,b,c){"number"==typeof a?(this.a=new Date(a,b||0,c||1),hb(this,c||1)):ba(a)?(this.a=new Date(a.getFullYear(),a.getMonth(),a.getDate()),hb(this,a.getDate())):(this.a=new Date,this.a.setHours(0),this.a.setMinutes(0),this.a.setSeconds(0),this.a.setMilliseconds(0))}p=gb.prototype;p.getFullYear=function(){return this.a.getFullYear()};p.getMonth=function(){return this.a.getMonth()};p.getDate=function(){return this.a.getDate()};p.getTime=function(){return this.a.getTime()};
p.getUTCHours=function(){return this.a.getUTCHours()};p.getTimezoneOffset=function(){return this.a.getTimezoneOffset()};function ib(a){a=a.getTimezoneOffset();if(0==a)a="Z";else var b=Math.abs(a)/60,c=Math.floor(b),b=60*(b-c),a=(0<a?"-":"+")+z(c)+":"+z(b);return a}p.set=function(a){this.a=new Date(a.getFullYear(),a.getMonth(),a.getDate())};p.v=function(a,b){return[this.getFullYear(),z(this.getMonth()+1),z(this.getDate())].join(a?"-":"")+(b?ib(this):"")};p.toString=function(){return this.v()};
function hb(a,b){a.getDate()!=b&&a.a.setUTCHours(a.a.getUTCHours()+(a.getDate()<b?1:-1))}p.valueOf=function(){return this.a.valueOf()};function jb(a,b,c,d,f,e,h){this.a="number"==typeof a?new Date(a,b||0,c||1,d||0,f||0,e||0,h||0):new Date(a?a.getTime():v())}w(jb,gb);p=jb.prototype;p.getHours=function(){return this.a.getHours()};p.getMinutes=function(){return this.a.getMinutes()};p.getSeconds=function(){return this.a.getSeconds()};p.getUTCHours=function(){return this.a.getUTCHours()};p.setHours=function(a){this.a.setHours(a)};
p.setMinutes=function(a){this.a.setMinutes(a)};p.setSeconds=function(a){this.a.setSeconds(a)};p.setMilliseconds=function(a){this.a.setMilliseconds(a)};p.setUTCHours=function(a){this.a.setUTCHours(a)};p.v=function(a,b){var c=gb.prototype.v.call(this,a);return a?c+" "+z(this.getHours())+":"+z(this.getMinutes())+":"+z(this.getSeconds())+(b?ib(this):""):c+"T"+z(this.getHours())+z(this.getMinutes())+z(this.getSeconds())+(b?ib(this):"")};p.toString=function(){return this.v()};var kb=new Y(500),$=window.localStorage;
function lb(a){chrome.tabs.create({url:"http://enjoy.your-clock.com"+a})}chrome.browserAction.onClicked.addListener(function(){lb("/?s=ext_toolbar")});function mb(){var a=$.cext_badge_bgcolor;a!==i&&chrome.browserAction.setBadgeBackgroundColor({color:a});a=$.cext_badge_icon_filename;a!==i&&chrome.browserAction.setIcon({path:"/toolbar_icons/"+a});ob()}
function ob(){var a,b,c;a=new jb;c=a.getHours();"true"===$["12h"]&&(12<c&&(c-=12),0===c&&(c=12));b=fb("%d:%02d",c,a.getMinutes());a=4>=b.length?b:fb("%d%02d",c,a.getMinutes());chrome.browserAction.setBadgeText({text:a})}Va(kb,eb,ob);chrome.extension.onRequest.addListener(function(a){$["12h"]=a.is_12_hour_mode;za(["cext_badge_bgcolor","cext_badge_icon_filename"],function(b){$[b]=a[b]});mb()});!("12h"in $)&&!("already_ran"in $)&&($["12h"]="0",lb("/thanks"));$.already_ran="1";mb();kb.start();})();
