var f,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ba;if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={ha:!0},ea={};try{ea.__proto__=da;ca=ea.ha;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;
function g(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ma=b.prototype}var k="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function ja(){ja=function(){};k.Symbol||(k.Symbol=ka)}var ka=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();function la(){ja();var a=k.Symbol.iterator;a||(a=k.Symbol.iterator=k.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ha(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ma(this)}});la=function(){}}function ma(a){var b=0;return na(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}
function na(a){la();a={next:a};a[k.Symbol.iterator]=function(){return this};return a}function oa(){var a=[];if(!(a instanceof Array)){la();var b=a[Symbol.iterator];a=b?b.call(a):ma(a);for(var c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a};function pa(a,b,c){return Object.prototype.hasOwnProperty.call(a,b)?a[b]:a[b]=c(b)};function qa(a){return pa(a.prototype,"$$generatedClassName",function(){return"Class$obf_"+{valueOf:function(){return++ra}}})}var ra=1E3;function l(){}l.prototype.m=function(a){return m(this,a)};l.prototype.v=function(){return sa(this)};l.prototype.toString=function(){return p(ta(q(this.constructor)))+"@"+p((this.v()>>>0).toString(16))};function ua(){this.b=this.a=!1}g(ua,l);function va(){var a=new ua,b=r;a.c=Math.random()+"";a.f=b;return a};function wa(a,b){this.b=a;this.a=b}g(wa,l);function ta(a){var b=qa(a.b);0!=a.a&&(b="L"+p(b)+";");a=a.a;for(var c="",d=0;d<a;d++)c=p(c)+"[";return p(c)+p(b)}wa.prototype.toString=function(){return"class "+p(ta(this))};function q(a,b){var c=b||0;return pa(a.prototype,"$$class/"+c,function(){return new wa(a,c)})};function xa(){this.a=!1}g(xa,l);function ya(a){var b;null==a.c?b=null:b=a.c.replace(/\n/g,"\u200b\n");b=za(a,b);b=a.f(b);if(!("stack"in b))try{throw b;}catch(c){}Aa(a,b)}xa.prototype.f=function(a){return Error(a)};function Aa(a,b){a.b=b;if(null!=b)try{b.ga=a}catch(c){}}function Ba(a){a.a&&("__noinit__"===a.b||ya(a))}xa.prototype.toString=function(){return za(this,this.c)};function za(a,b){a=ta(q(a.constructor));return null==b?a:p(a)+": "+p(b)}function Ca(a){a.a=!0;a.b="__noinit__"};function Da(){this.a=!1}g(Da,xa);function Ea(){this.a=!1}g(Ea,Da);function Fa(){this.a=!1}g(Fa,Ea);function Ga(a){var b=new Fa;Ca(b);b.c=a;Ba(b);ya(b);return b};function Ha(a){this.a=a}g(Ha,l);Ha.prototype.f=function(a){var b=this.a;b(a)};function t(a,b){this.b=a|0;this.a=b|0}var Ja={};function Ka(a){return pa(Ja,a,function(a){return new t(a,0>a?-1:0)})}function La(a){a|=0;return-128<=a&&128>a?Ka(a):new t(a,0>a?-1:0)}function Ma(a){return 0<a?0x7fffffffffffffff<=a?Na:new t(a,a/4294967296):0>a?-9223372036854775808>=a?Oa:u(new t(-a,-a/4294967296)):Pa}function x(a,b){return new t(a,b)}var Pa=x(0,0),Qa=x(1,0),Ra=x(-1,-1),Na=x(4294967295,2147483647),Oa=x(0,2147483648);function Sa(a){return 4294967296*a.a+(a.b>>>0)}f=t.prototype;
f.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);var b=this.a>>21;if(0==b||-1==b&&(0!=this.b||-2097152!=this.a))return b=Sa(this),10==a?""+b:b.toString(a);b=14-(a>>2);var c=Math.pow(a,b),d=x(c,c/4294967296);c=y(this,d);d=Math.abs(Sa(this.add(u(Ta(c,d)))));var e=10==a?""+d:d.toString(a);e.length<b&&(e="0000000000000".substr(e.length-b)+e);d=Sa(c);return(10==a?d:d.toString(a))+e};function Ua(a){return 0==a.b&&0==a.a}f.m=function(a){return this.b==a.b&&this.a==a.a};
function Va(a,b){return a.a==b.a?a.b==b.b?0:a.b>>>0>b.b>>>0?1:-1:a.a>b.a?1:-1}function u(a){var b=~a.b+1|0;return x(b,~a.a+!b|0)}f.add=function(a){var b=this.a>>>16,c=this.a&65535,d=this.b>>>16,e=a.a>>>16,h=a.a&65535,n=a.b>>>16;a=(this.b&65535)+(a.b&65535);n=(a>>>16)+(d+n);d=n>>>16;d+=c+h;b=(d>>>16)+(b+e)&65535;return x((n&65535)<<16|a&65535,b<<16|d&65535)};
function Ta(a,b){if(Ua(a))return a;if(Ua(b))return b;var c=a.a>>>16,d=a.a&65535,e=a.b>>>16;a=a.b&65535;var h=b.a>>>16,n=b.a&65535,v=b.b>>>16;b=b.b&65535;var w=a*b;var ia=(w>>>16)+e*b;var C=ia>>>16;ia=(ia&65535)+a*v;C+=ia>>>16;C+=d*b;var Ia=C>>>16;C=(C&65535)+e*v;Ia+=C>>>16;C=(C&65535)+a*n;Ia=Ia+(C>>>16)+(c*b+d*v+e*n+a*h)&65535;return x((ia&65535)<<16|w&65535,Ia<<16|C&65535)}
function y(a,b){if(Ua(b))throw Error("division by zero");if(0>a.a){if(a.m(Oa)){if(b.m(Qa)||b.m(Ra))return Oa;if(b.m(Oa))return Qa;var c=1;if(0==c)c=a;else{var d=a.a;c=32>c?x(a.b>>>c|d<<32-c,d>>c):x(d>>c-32,0<=d?0:-1)}c=y(c,b);d=1;if(0!=d){var e=c.b;c=32>d?x(e<<d,c.a<<d|e>>>32-d):x(0,e<<d-32)}if(c.m(Pa))return 0>b.a?Qa:Ra;a=a.add(u(Ta(b,c)));return c.add(y(a,b))}return 0>b.a?y(u(a),u(b)):u(y(u(a),b))}if(Ua(a))return Pa;if(0>b.a)return b.m(Oa)?Pa:u(y(a,u(b)));for(d=Pa;0<=Va(a,b);){c=Math.max(1,Math.floor(Sa(a)/
Sa(b)));e=Math.ceil(Math.log(c)/Math.LN2);e=48>=e?1:Math.pow(2,e-48);for(var h=Ma(c),n=Ta(h,b);0>n.a||0<Va(n,a);)c-=e,h=Ma(c),n=Ta(h,b);Ua(h)&&(h=Qa);d=d.add(h);a=a.add(u(n))}return d}f.and=function(a){return x(this.b&a.b,this.a&a.a)};f.or=function(a){return x(this.b|a.b,this.a|a.a)};f.xor=function(a){return x(this.b^a.b,this.a^a.a)};function m(a,b){return a===b||null==a&&null==b};function Wa(){}g(Wa,l);function z(a){return Math.max(Math.min(a,2147483647),-2147483648)|0};function Xa(){}g(Xa,l);function sa(a){return a.S||(Object.defineProperties(a,{S:{value:++Ya,enumerable:!1}}),a.S)}var Ya=0;function Za(a,b){a.M=b;if(1<b.P){b=$a(b.U,b.ja,b.ia,b.P-1);for(var c=0;c<a.length;c++){var d=a[c];d&&Za(d,b)}}}function ab(a){return(a=a.M)?q(a.U,a.P):q(l,1)}function $a(a,b,c,d){return{U:a,ja:b,ia:c,P:d}};function bb(a){this.a=a}g(bb,l);function cb(){this.a=!1}g(cb,Ea);var db=x(-1,2147483647);function eb(){return new fb(function(a){return a})};function fb(a){this.a=a}g(fb,l);function gb(a,b){var c;return c=a.a,c(b)};function A(a,b){for(;a.a();)b.f(a.b())};function B(){this.b=0;this.c=La(0)}g(B,l);B.prototype.j=function(){return this.b};B.prototype.h=function(){return this.c};function D(){this.b=0;this.c=La(0)}g(D,l);function hb(a,b){var c=new D;c.g=a;c.b=0==(b&4096)?b|16448:b;return c}D.prototype.j=function(){return this.b};D.prototype.h=function(){ib(this);return this.c};D.prototype.o=function(a){ib(this);this.a.c(a)};D.prototype.f=function(a){ib(this);return this.a.a()?(a.f(this.a.b()),!0):!1};function ib(a){null==a.a&&(a.a=a.g.i(),a.c=La(a.g.l()|0))};function jb(a){var b=new D;b.a=a;b.b=0;b.c=db;return b};function kb(){this.a=!1}g(kb,Ea);function lb(){this.a=!1}g(lb,kb);lb.prototype.f=function(a){return new TypeError(a)};function mb(a){this.a=a}g(mb,l);function nb(a){var b;return b=a.a,b()};function E(a,b){var c;!(c=m(a,b))&&(c=null!=a)&&(c=a.m?a.m(b):a===b);return c}function F(a){return null!=a?ob(a):0};function pb(a){this.a=a}g(pb,l);function qb(){this.g=this.f=0}g(qb,l);qb.prototype.a=function(){return this.f<this.h.a.length};qb.prototype.b=function(){this.a();this.g=this.f++;return this.h.a[this.g]};qb.prototype.c=function(a){A(this,a)};function rb(a,b){a.M=b.M;return a};function sb(){}g(sb,l);f=sb.prototype;f.add=function(){throw Ga("Add not supported on this collection").b;};f.X=function(a){var b=!1;for(a=a.i();a.a();){var c=a.b();b=!!(+b|+this.add(c))}};f.K=function(a){a:{for(var b=this.i();b.a();){var c=b.b();if(E(a,c)){a=!0;break a}}a=!1}return a};f.A=function(){return 0==this.l()};f.Z=function(){return this.W(Array(this.l()))};
f.W=function(a){var b=this.l();a.length<b&&(a=rb(Array(b),a));for(var c=a,d=this.i(),e=0;e<b;++e){var h=d.b();c[e]=h}a.length>b&&(a[b]=null);return a};f.toString=function(){for(var a=tb("[","]"),b=this.i();b.a();){var c=b.b();ub(a,m(c,this)?"(this Collection)":p(c))}return a.toString()};function vb(){}g(vb,sb);f=vb.prototype;f.add=function(a){this.H(this.l(),a);return!0};f.H=function(){throw Ga("Add not supported on this list").b;};f.m=function(a){if(m(a,this))return!0;if(null==a||!a.N||this.l()!=a.l())return!1;a=a.i();for(var b=this.i();b.a();){var c=b.b(),d=a.b();if(!E(c,d))return!1}return!0};f.v=function(){for(var a=1,b=this.i();b.a();){var c=b.b();a=31*a+F(c);a|=0}return a};f.indexOf=function(a){for(var b=0,c=this.l();b<c;++b)if(E(a,this.D(b)))return b;return-1};
f.i=function(){var a=new G;a.h=this;a.f=0;a.g=-1;return a};f.lastIndexOf=function(a){for(var b=this.l()-1;-1<b;--b)if(E(a,this.D(b)))return b;return-1};f.ka=function(){return this.I(0)};f.I=function(a){var b=new wb;b.o=this;b.h=this;b.g=-1;b.f=a;return b};f.N=!0;function xb(){}g(xb,vb);function yb(){var a=new xb;a.a=[];return a}f=xb.prototype;f.add=function(a){this.a[this.a.length]=a;return!0};f.H=function(a,b){this.a.splice(a,0,b)};f.X=function(a){var b=a.Z();if(0!=b.length){a=b;var c=this.a,d=this.a.length;b=b.length;var e=0;m(a,c)&&(a=a.slice(e,e+b),e=0);var h=e;for(e+=b;h<e;){var n=Math.min(h+1E4,e);b=n-h;h=a.slice(h,n);h.splice(0,0,d,0);Array.prototype.splice.apply(c,h);h=n;d+=b}}};f.K=function(a){return-1!=this.indexOf(a)};f.D=function(a){return this.a[a]};
f.indexOf=function(a){a:{for(var b=0;b<this.a.length;++b)if(E(a,this.a[b])){a=b;break a}a=-1}return a};f.i=function(){var a=new qb;a.h=this;a.f=0;a.g=-1;return a};f.A=function(){return 0==this.a.length};f.lastIndexOf=function(a){a:{for(var b=this.l()-1;0<=b;--b)if(E(a,this.a[b])){a=b;break a}a=-1}return a};f.l=function(){return this.a.length};f.Z=function(){var a=this.a;return rb(a.slice(0,this.a.length),a)};
f.W=function(a){var b=this.a.length;a.length<b&&(a=rb(Array(b),a));for(var c=0;c<b;++c)a[c]=this.a[c];a.length>b&&(a[b]=null);return a};f.w=function(){return hb(this,16)};f.J=function(){return zb(null,this.w())};f.N=!0;function Ab(a){this.a=a}g(Ab,l);function Bb(a){this.b=a}g(Bb,l);Bb.prototype.a=function(a,b){var c;return c=this.b,c(a,b)};function Cb(){}g(Cb,sb);Cb.prototype.m=function(a){if(m(a,this))return!0;if(null==a||!a.ca)return!1;if(a.l()!=this.l())a=!1;else a:{for(a=a.i();a.a();){var b=a.b();if(!this.K(b)){a=!1;break a}}a=!0}return a};Cb.prototype.v=function(){return Db(this)};Cb.prototype.ca=!0;function Eb(){}g(Eb,l);Eb.prototype.a=function(){return this.f.a()};Eb.prototype.b=function(){return this.f.b().s()};Eb.prototype.c=function(a){A(this,a)};function Fb(){}g(Fb,sb);f=Fb.prototype;f.K=function(a){return this.a.T(a)};f.i=function(){var a=this.a.C().i(),b=new Eb;b.f=a;return b};f.l=function(){return this.a.F()};f.w=function(){return hb(this,0)};f.J=function(){return zb(null,this.w())};function Gb(){}g(Gb,l);f=Gb.prototype;f.u=function(){return this.b};f.s=function(){return this.a};f.V=function(a){this.a=a};f.m=function(a){return null!=a&&a.G?E(this.b,a.u())&&E(this.a,a.s()):!1};f.v=function(){return F(this.b)^F(this.a)};f.toString=function(){return p(this.b)+"="+p(this.a)};f.G=!0;function Hb(){}g(Hb,Gb);function Ib(){}g(Ib,l);Ib.prototype.toString=function(){return this.a};function Jb(){}g(Jb,Ib);function Kb(){}g(Kb,l);function tb(a,b){var c=new Kb;c.f=", ".toString();c.c=a.toString();c.b=b.toString();c.g=p(c.c)+p(c.b);return c}function ub(a,b){if(null==a.a){var c=new Jb;c.a=a.c;a.a=c}else{c=a.a;var d=a.f;c.a=p(c.a)+p(d)}a=a.a;a.a=p(a.a)+p(b)}Kb.prototype.toString=function(){return null==this.a?this.g:0==this.b.length?this.a.toString():p(this.a.toString())+p(this.b)};function Lb(){}g(Lb,l);f=Lb.prototype;f.O=function(a){return null!=Mb(this,a)};f.T=function(a){for(var b=this.C().i();b.a();){var c=b.b().s();if(E(a,c))return!0}return!1};function Nb(a,b){var c=b.u();b=b.s();var d=a.get(c);return!E(b,d)||null==d&&!a.O(c)?!1:!0}f.m=function(a){if(m(a,this))return!0;if(null==a||!a.ba||this.F()!=a.F())return!1;for(a=a.C().i();a.a();){var b=a.b();if(!Nb(this,b))return!1}return!0};f.get=function(a){return Ob(Mb(this,a))};f.v=function(){return Db(this.C())};
f.R=function(){throw Ga("Put not supported on this map").b;};f.F=function(){return this.C().l()};f.toString=function(){for(var a=tb("{","}"),b=this.C().i();b.a();){var c=b.b();c=p(Pb(this,c.u()))+"="+p(Pb(this,c.s()));ub(a,c)}return a.toString()};function Pb(a,b){return m(b,a)?"(this Map)":p(b)}f.values=function(){var a=new Fb;a.a=this;return a};function Ob(a){return null==a?null:a.s()}function Mb(a,b){for(a=a.C().i();a.a();){var c=a.b();if(E(b,c.u()))return c}return null}f.ba=!0;function Qb(){this.g=!1}g(Qb,l);Qb.prototype.a=function(){return this.g};function Rb(a){if(a.f.a())return!0;if(!m(a.f,a.j))return!1;a.f=a.h.a.i();return a.f.a()}Qb.prototype.b=function(){this.a();var a=this.f.b();this.g=Rb(this);return a};Qb.prototype.c=function(a){A(this,a)};function Sb(){}g(Sb,Cb);f=Sb.prototype;f.K=function(a){return null!=a&&a.G?Nb(this.a,a):!1};f.i=function(){var a=new Qb;a.h=this.a;a.j=a.h.b.i();a.f=a.j;a.g=Rb(a);return a};f.l=function(){return this.a.F()};f.w=function(){return hb(this,1)};f.J=function(){return zb(null,this.w())};function Tb(){this.f=0}g(Tb,l);Tb.prototype.a=function(){if(this.f<this.g.length)return!0;var a=this.o.next();return a.done?!1:(this.g=a.value[1],this.f=0,!0)};Tb.prototype.b=function(){return this.h=this.g[this.f++]};Tb.prototype.c=function(a){A(this,a)};function Ub(){this.b=0}g(Ub,l);function Vb(a,b,c){var d=Wb(b),e=Xb(a,d);if(0==e.length)a.a.set(d,e);else if(d=Yb(b,e),null!=d){d.V(c);return}d=e.length;var h=new Hb;h.b=b;h.a=c;e[d]=h;a.b++}function Yb(a,b){for(var c=0;c<b.length;c++){var d=b[c];if(E(a,d.u()))return d}return null}Ub.prototype.i=function(){var a=new Tb;a.j=this;a.o=a.j.a.entries();a.f=0;a.g=[];a.h=null;return a};function Xb(a,b){a=a.a.get(b);return null==a?[]:a}function Wb(a){var b;null==a?b=0:b=ob(a)|0;return b}Ub.prototype.w=function(){return jb(this.i())};function Zb(){}g(Zb,l);Zb.prototype.a=function(){return!this.g.done};Zb.prototype.b=function(){this.j=this.g;this.g=this.h.next();var a=new $b,b=this.j,c=this.f.b;a.b=this.f;a.a=b;a.c=c;return a};Zb.prototype.c=function(a){A(this,a)};function H(){}g(H,l);H.prototype.m=function(a){return null!=a&&a.G?E(this.u(),a.u())&&E(this.s(),a.s()):!1};H.prototype.v=function(){return F(this.u())^F(this.s())};H.prototype.toString=function(){return p(this.u())+"="+p(this.s())};H.prototype.G=!0;function $b(){this.c=0}g($b,H);$b.prototype.u=function(){return this.a.value[0]};$b.prototype.s=function(){return this.b.b!=this.c?this.b.a.get(this.a.value[0]):this.a.value[1]};$b.prototype.V=function(a){ac(this.b,this.a.value[0],a)};function bc(){this.b=this.c=0}g(bc,l);function ac(a,b,c){var d=a.a.get(b);a.a.set(b,void 0===c?null:c);void 0===d?a.c++:a.b++}bc.prototype.i=function(){var a=new Zb;a.f=this;a.h=a.f.a.entries();a.g=a.h.next();return a};bc.prototype.w=function(){return jb(this.i())};function cc(){}g(cc,Lb);f=cc.prototype;f.O=function(a){var b;"string"===typeof a?b=null==a?null!=Yb(null,Xb(this.a,Wb(null))):void 0!==this.b.a.get(a):b=null!=Yb(a,Xb(this.a,Wb(a)));return b};f.T=function(a){return dc(a,this.b)||dc(a,this.a)};function dc(a,b){for(b=b.i();b.a();){var c=b.b().s();if(E(a,c))return!0}return!1}f.C=function(){var a=new Sb;a.a=this;return a};
f.get=function(a){var b;"string"===typeof a?b=null==a?Ob(Yb(null,Xb(this.a,Wb(null)))):this.b.a.get(a):b=Ob(Yb(a,Xb(this.a,Wb(a))));return b};f.R=function(a,b){"string"===typeof a?null==a?Vb(this.a,null,b):ac(this.b,a,b):Vb(this.a,a,b)};f.F=function(){return this.a.b+this.b.c};function ec(){}g(ec,cc);function fc(){var a=new ec,b=new Ub;b.a=new Map;b.c=a;a.a=b;b=new bc;b.a=new Map;b.f=a;a.b=b;return a};function Db(a){var b=0;for(a=a.i();a.a();){var c=a.b();b+=F(c);b|=0}return b};function gc(a){this.b=a}g(gc,l);gc.prototype.a=function(a,b){var c;return c=this.b,c(a,b)};function I(){this.a=0}g(I,l);I.prototype.name=function(){return null!=this.b?this.b:""+this.a};I.prototype.toString=function(){return this.name()};function J(){this.a=0}var hc;g(J,I);function ic(){var a=new J;a.b="IDENTITY_FINISH";a.a=1;return a}function jc(){jc=function(){};hc=ic()}function kc(a){return a instanceof J}function lc(a){return null!=a&&(a==J||a.prototype instanceof J)};function mc(a,b,c){var d=[(jc(),hc)];Za(d,$a(J,kc,lc,1));d=new nc;var e=eb();d.c=a;d.a=b;d.f=c;d.b=e;return d};function nc(){}g(nc,l);function oc(){this.b=!1}g(oc,l);function pc(a){if(null!=a.a)pc(a.a);else if(a.b)throw a=new cb,Ca(a),a.c="Stream already terminated, can't be modified or used",Ba(a),ya(a),a.b;}function qc(a){null==a.a?(pc(a),a.b=!0):qc(a.a)};function rc(){B.call(this)}g(rc,B);function sc(a){return mc(a,new Ab(function(a,c){a.add(c)}),new gc(function(a,c){a.X(c);return a}))}function tc(){return sc(new mb(function(){return yb()}))};function uc(){B.call(this);this.a=!1}g(uc,rc);uc.prototype.f=function(a){var b=this;for(this.a=!1;!this.a&&this.B.f(new Ha(function(c){var d;if(d=b.g.a,d(c))b.a=!0,a.f(c)})););return this.a};uc.prototype.o=function(a){for(;this.f(a););};function vc(){}g(vc,l);vc.prototype.f=function(a){this.a=a};function wc(){this.b=!1}g(wc,oc);function zb(a,b){var c=new wc;c.b=!1;null==a?c.a=null:c.a=a;c.c=b;return c}function xc(a){var b=tc();return gb(b.b,yc(a,nb(b.c),new Bb(function(a,d){var c=b.a.a;c(a,d);return a})))}function yc(a,b,c){qc(a);var d=new vc;d.a=b;a.c.o(new Ha(function(a){d.f(c.a(d.a,a))}));return d.a}function zc(a,b){pc(a);var c=new uc,d=a.c,e=d.h(),h=d.j()&-16449;c.c=e;c.b=0!=(h&64)?h|16384:h;c.g=b;c.B=d;return zb(a,c)};function G(){this.g=this.f=0}g(G,l);G.prototype.a=function(){return this.f<this.h.l()};G.prototype.b=function(){this.a();return this.h.D(this.g=this.f++)};G.prototype.c=function(a){A(this,a)};function wb(){G.call(this)}g(wb,G);wb.prototype.j=function(a){this.o.H(this.f,a);this.f++;this.g=-1};wb.prototype.c=function(a){A(this,a)};function Ac(){};function Bc(){}g(Bc,Xa);function Cc(){};function ob(a){if(a.v)return a.v();var b=typeof a;if("number"==b)b=z(a);else if("boolean"==b)b=a?1231:1237;else if("string"==b){Dc();b=":"+p(a);var c=Ec[b];if(null!=c)b=z(c);else{c=Fc[b];if(null==c){var d=0;c=a.length;for(var e=c-4,h=0;h<e;)d=a.charCodeAt(h+3)+31*(a.charCodeAt(h+2)+31*(a.charCodeAt(h+1)+31*(a.charCodeAt(h)+31*d))),d|=0,h+=4;for(;h<c;)d*=31,e=h++,d+=a.charCodeAt(e);a=d|0}else a=z(c);256==Gc&&(Fc=Ec,Ec=new l,Gc=0);++Gc;b=Ec[b]=a}}else b=sa(a);return b}
function Hc(a){var b=typeof a;if("number"==b)return q(Bc);if("boolean"==b)return q(Wa);if("string"==b)return q(Ic);if(a instanceof Array)return ab(a);if(a instanceof l)return q(a.constructor);if(a)return q("function"==b?Ac:Cc);throw new TypeError("null.getClass");};var Ec,Fc;function Dc(){Dc=function(){};Fc=new l;Gc=0;Ec=new l}var Gc=0;function Ic(){}g(Ic,l);function p(a){if(null==a)a="null";else{var b;a instanceof Array?b=ta(ab(a))+"@"+(sa(a)>>>0).toString(16):b=a.toString();a=b}return a};var K,L,Jc,Kc,r;
function Lc(){var a=M.c.clientWidth,b=M.c.clientHeight;Mc();null==N&&(N="entry");O(0,0,a,b,P(245,245,245));Q(R(175,47,47,38));Nc(100);Oc(a);a=(a-550)/2|0;b=66;for(var c=K.i();c.a();){var d=c.b();if("done"!==L||!d.a)if("not done"!==L||d.a)b+=59}c=M.b;Q(Jc);Pc(c,a,130,550,b+(K.A()?0:40),5+(K.A()?0:10),25);K.A()||(Q(Kc),Pc(c,a+6,b+140,538,40,1,6),O(a+6,b+140,538,40,(S(),Qc)),Q(Kc),Pc(c,a+3,b+135,544,40,1,6),O(a+3,b+135,544,40,Qc));Q(Kc);Pc(c,a,130,550,b+(K.A()?0:40),1,6);b=Rc(Sc(Tc(Uc(Vc(Wc(Xc("entry",a,
130,66)),!1))),r,P(77,77,77)));if(!K.A()&&(Nc(30),T(U(V(W(a+6,138,45,45),"\u2714"),(S(),Yc))).a))for(c=!K.D(0).a,d=K.i();d.a();)d.b().a=c;b.b?r=b.c:0!=r.length&&"Enter"===b.f&&(K.add(va()),r="");b=196;c=0;for(d=K.i();d.a();){var e=d.b();c+=e.a?0:1;if("done"!==L||!e.a)if("not done"!==L||e.a){e.a&&m(N,e.c)&&(N=null);var h=Rc(Sc(Uc(Vc(Wc(Xc(e.c,a,b,59)),e.a)),e.f,e.a?(S(),Zc):P(77,77,77)));h.b&&(e.f=h.c);O(a,b,550,1,(S(),$c));Nc(30);T(ad(bd(cd(U(V(W(a+6,b+8,45,45),e.a?"\u2714":"\u25ef"),e.a?Zc:dd)),
null))).a&&(e.a=!e.a);ed(a,b,550,59)&&T(U(V(W(a+550-59+14,b+15,29,29),"\u2718"),P(192,128,128))).a&&(e.b=!0);b+=59}}K.A()||(d=X(.6000000238418579,.30000001192092896,.30000001192092896),e=(S(),fd),O(a,b,550,40,Qc),Q($c),O(a,b,550,1,$c),Q(e),Nc(14),gd(a+13,b,550,40,c+" item"+String(1<c?"s":"")+" left"),c=hd,T(ad(bd(cd(U(V(W(a+200,b+3,30,34),"All"),"all"===L?d:e)),c))).a&&(L="all"),T(ad(bd(cd(U(V(W(a+240,b+3,50,34),"Active"),"done"===L?d:e)),c))).a&&(L="done"),T(ad(bd(cd(U(V(W(a+300,b+3,80,34),"Completed"),
"not done"===L?d:e)),c))).a&&(L="not done"));K=xc(zc(K.J(),new pb(function(a){return!a.b})))}function Mc(){Mc=function(){};Kc=R(96,96,96,76);Jc=R(225,225,225,255);r="";K=yb();L="all"};function id(){this.a=this.b=this.c=this.f=0}var Qc,Yc,Zc,$c,dd,fd,hd;g(id,l);function X(a,b,c){S();var d=new id;d.f=z(256*a);d.c=z(256*b);d.b=z(256*c);d.a=255;return d}function P(a,b,c){S();var d=new id;d.f=a;d.c=b;d.b=c;d.a=255;return d}function R(a,b,c,d){S();var e=new id;e.f=a;e.c=b;e.b=c;e.a=d;return e}
function S(){S=function(){};P(0,0,0);P(128,128,128);X(.10000000149011612,.10000000149011612,.10000000149011612);X(.20000000298023224,.20000000298023224,.20000000298023224);fd=X(.30000001192092896,.30000001192092896,.30000001192092896);X(.4000000059604645,.4000000059604645,.4000000059604645);X(.5,.5,.5);X(.6000000238418579,.6000000238418579,.6000000238418579);Zc=X(.699999988079071,.699999988079071,.699999988079071);Yc=X(.800000011920929,.800000011920929,.800000011920929);dd=X(.8999999761581421,.8999999761581421,
.8999999761581421);hd=X(.949999988079071,.949999988079071,.949999988079071);Qc=P(255,255,255);P(255,255,0);R(0,0,0,64);R(0,0,0,32);$c=R(0,0,0,16)};function jd(){this.a=0}var kd;g(jd,I);function ld(){var a=new jd;a.b="PLAIN";a.a=2;a.c="normal";return a}function md(){md=function(){};kd=ld()};function nd(){this.a=this.b=0}g(nd,l);function od(a,b){var c=new nd;c.b=a;c.a=b;return c}nd.prototype.v=function(){var a=31+this.b;return a=31*a+this.a};nd.prototype.m=function(a){return m(this,a)?!0:null!=a&&m(q(this.constructor),Hc(a))?this.b!=a.b||this.a!=a.a?!1:!0:!1};function pd(a,b,c,d){var e=(qd(),rd);return null!=M.f&&m(M.f.b,e)&&ed(a,b,c,d)}function ed(a,b,c,d){var e=M.o;return null!=e&&e.b>=a&&e.a>=b&&e.b<a+c&&e.a<b+d};var M;function sd(){this.b=!1}var td;g(sd,l);function ud(){ud=function(){};td=fc();td.R("ArrowLeft","Left");td.R("ArrowRight","Right")};function vd(){this.a=0}var wd,rd,xd,yd;g(vd,I);function zd(a,b){var c=new vd;c.b=a;c.a=b;return c}function qd(){qd=function(){};wd=zd("UP",0);rd=zd("DOWN",1);xd=zd("MOVE",3);yd=zd("DRAG",4)};function Ad(){}g(Ad,l);var N;function O(a,b,c,d,e){Y(M.b,e);M.b.a.fillRect(a,b,c,d)}function Oc(a){var b=M.b;a=(a/2|0)-(Bd(M.b,"todos").b/2|0);b.a.fillText("todos",a,103);if(b.f){var c=Bd(b,"todos");b.a.fillRect(a,103-Ma(Math.round(.25*c.a)).b,c.b,z(Math.ceil(b.c/9|0)))}}function gd(a,b,c,d,e){var h=Bd(M.b,e);Cd(e,a,b+(d/2|0)+(h.a/2|0)-z(Math.round(h.a/6)),a,c)}function Q(a){Y(M.b,a)}function Nc(a){var b=(md(),kd),c=M.b;c.c=a;c.f=!1;c.a.font=p(b.c)+" "+a+"px Helvetica"}
function W(a,b,c,d){var e=new Dd;e.c=a;e.f=b;e.b=c;e.a=d;return e}function Xc(a,b,c,d){var e=new Ed;e.o=a;e.b=b;e.g=c;e.f=550;e.c=d;return e};function Dd(){this.a=this.b=this.f=this.c=0}g(Dd,l);function V(a,b){a.o=b;return a}function U(a,b){a.B=b;return a}function cd(a){a.g=null;return a}function bd(a,b){a.h=b;return a}function ad(a){a.j=null;return a}
function T(a){var b=M.b;null!=a.g&&(Y(b,a.g),b.a.fillRect(a.c,a.f,a.b,a.a));null!=a.h&&ed(a.c,a.f,a.b,a.a)&&(Y(b,a.h),b.a.fillRect(a.c,a.f,a.b,a.a));null!=a.j&&(Y(b,a.j),b.a.fillRect(a.c,a.f,a.b,a.a));if(null!=a.o){Y(b,a.B);b=a.c;var c=a.b,d=a.o,e=Bd(M.b,d);Cd(d,b+(c/2|0)-(e.b/2|0),a.f+(a.a/2|0)+(e.a/2|0)-z(Math.round(e.a/6)),b,c)}a=pd(a.c,a.f,a.b,a.a);b=new Fd;b.a=a;return b};function Fd(){this.b=this.a=!1}g(Fd,l);function Ed(){this.L=this.g=this.b=this.f=this.h=this.c=0;this.Y=!1}g(Ed,l);function Wc(a){var b=(S(),Qc);a.j=b;return a}function Uc(a){a.h=60;return a}function Tc(a){var b=P(230,230,230);a.aa="What needs to be done?";a.$=b;return a}
function Rc(a){pd(a.b,a.g,a.f,a.c)&&(N=a.o,M.a=a.a.length);var b=M.b;null!=a.j&&(Y(b,a.j),b.a.fillRect(a.b,a.g,a.f,a.c));if(null!=a.la){Y(b,a.la);var c=b.a;var d=p(b.a.fillStyle)+" 0px";c.strokeStyle=d;b.a.strokeRect(a.b,a.g,a.f-1,a.c-1)}null!=a.fa&&(Y(b,a.fa),b.a.fillRect(a.b,a.g+a.c-1,a.f,1));if(null!=a.B){c=a.B;d=a.da;var e=a.L,h=a.Y;b.c=e;b.f=h;b.a.font=p(d.c)+" "+e+"px "+p(c)}null!=a.a&&0!=a.a.length||null==a.aa||null==a.$||(Y(b,a.$),gd(a.b+a.h,a.g,a.f-a.h,a.c,a.aa));d=!1;c=null;Y(b,a.ea);if(m(N,
a.o)){e=M.j;null!=e&&("Left"===e.a?--M.a:"Right"===e.a&&(M.a+=1));M.a=Math.min(M.a,a.a.length);M.a=Math.max(M.a,0);if(null!=e){h="Delete"===e.a;var n="Backspace"===e.a;c=e.a;if(e.b&&"Enter"!==e.a||h||n){var v=0<M.a?a.a.substr(0,M.a):"",w;M.a<a.a.length?w=a.a.substr(M.a):w="";h&&M.a<a.a.length?(d=p(v),a.a=d+p(w.substr(1)),d=!0):n&&0<M.a?(a.a=p(v.substr(0,v.length-1))+p(w),--M.a,d=!0):e.b&&(a.a=p(v)+p(e.c)+p(w),M.a+=1,d=!0)}}w=Bd(M.b,a.a.substr(0,M.a));e=a.b+a.h+w.b;e<a.b+a.f&&b.a.fillRect(e,a.g+((a.c-
w.a)/2|0),2,w.a)}gd(a.b+a.h,a.g,a.f-a.h,a.c,a.a);a=a.a;b=new Fd;b.b=d;b.c=a;b.f=c;return b}function Sc(a,b,c){a.a=b;a.ea=c;return a}function Vc(a,b){var c=(md(),kd);a.B="Helvetica";a.da=c;a.L=24;a.Y=b;return a};function Gd(){this.c=0;this.f=!1}g(Gd,l);function Hd(a){var b=new Gd;b.a=a;return b}function Cd(a,b,c,d,e){var h=M.b;h.a.fillText(a,b,c,d+e-b);h.f&&(a=Bd(h,a),h.a.fillRect(b,c-Ma(Math.round(.25*a.a)).b,a.b,z(Math.ceil(h.c/9|0))))}function Bd(a,b){return od(z(a.a.measureText(b).width),z(Math.round(a.c/.800000011920929)))}function Y(a,b){a.b=b;Id(a)}function Id(a){var b=a.b.f,c=a.b.c,d=a.b.b,e=a.b.a;a.a.fillStyle=255==e?"rgb("+b+", "+c+", "+d+")":"rgb("+b+", "+c+", "+d+", "+e/255+")"}
function Pc(a,b,c,d,e,h,n){a.a.shadowColor="rgb("+a.b.f+", "+a.b.c+", "+a.b.b+", "+a.b.a/255+")";a.a.shadowBlur=n;a.a.shadowOffsetX=0;a.a.shadowOffsetY=h;a.a.fillStyle="rgb(0, 0, 0, 1.0)";a.a.fillRect(b,c,d,e);Id(a);a.a.shadowColor=null;a.a.shadowBlur=0;a.a.shadowOffsetX=0;a.a.shadowOffsetY=0};function Jd(a){this.a=a}g(Jd,l);Jd.prototype.handleEvent=function(a){var b=this.a;b(a)};function Kd(a){this.a=a}g(Kd,l);Kd.prototype.handleEvent=function(a){var b=this.a;b(a)};function Ld(a){this.a=a}g(Ld,l);Ld.prototype.handleEvent=function(a){var b=this.a;b(a)};function Md(a){this.a=a}g(Md,l);Md.prototype.handleEvent=function(a){var b=this.a;b(a)};function Nd(a){this.a=a}g(Nd,l);Nd.prototype.handleEvent=function(a){var b=this.a;b(a)};function Od(){this.a=0}g(Od,l);function Pd(a,b,c){var d=a.h,e=new Ad;e.a=od(z(b.clientX),z(b.clientY));e.b=c;Qd(d,e);Z(a);Z(a)}function Rd(a){a.c.height=window.window.innerHeight;a.c.width=window.window.innerWidth}function Z(a){if(!a.h.A()){var b=Sd(a.h);a.f=b;a.o=a.f.a}a.g.A()||(b=Sd(a.g),a.j=b);b=a.L.a;b();a.f=null;a.j=null}function Td(a){a.g=Ud();a.h=Ud();a.o=od(0,0)};var Vd;function Wd(a){Xd();window.setTimeout.apply(window,[a,1E3].concat(oa()))}function Xd(){Xd=function(){};Vd=window.document};function Yd(){}g(Yd,vb);Yd.prototype.H=function(a,b){this.I(a).j(b)};Yd.prototype.D=function(a){a=this.I(a);try{return a.b()}catch(c){a:{a=c;if(null!=a){var b=a.ga;if(null!=b){c=b;break a}}a instanceof TypeError?(b=new lb,Ca(b),Ba(b),Aa(b,a),b.c=p(a),a=b):(b=new kb,Ca(b),Ba(b),Aa(b,a),b.c=p(a),a=b);c=a}throw c.b;}};Yd.prototype.i=function(){return this.ka()};function Zd(){}g(Zd,l);Zd.prototype.j=function(a){$d(this.h,a,this.f.b,this.f);this.g=null};Zd.prototype.a=function(){return!m(this.f,this.h.a)};Zd.prototype.b=function(){this.a();this.g=this.f;this.f=this.f.a;return this.g.c};Zd.prototype.c=function(a){A(this,a)};function ae(){}g(ae,l);function be(){this.b=0}g(be,Yd);function Ud(){var a=new be;a.c=new ae;a.a=new ae;a.c.a=a.a;a.a.b=a.c;a.c.b=a.a.a=null;a.b=0;return a}f=be.prototype;f.add=function(a){Qd(this,a);return!0};function Qd(a,b){$d(a,b,a.a.b,a.a)}f.I=function(a){if(a>=this.b>>1){var b=this.a;for(var c=this.b;c>a;--c)b=b.b}else for(b=this.c.a,c=0;c<a;++c)b=b.a;a=new Zd;a.h=this;a.g=null;a.f=b;return a};function Sd(a){var b=a.c.a,c=b.c;b.a.b=b.b;b.b.a=b.a;b.a=b.b=null;b.c=null;--a.b;return c}f.l=function(){return this.b};
function $d(a,b,c,d){var e=new ae;e.c=b;e.b=c;e.a=d;d.b=c.a=e;++a.b}f.w=function(){return hb(this,16)};f.J=function(){return zb(null,this.w())};f.N=!0;var ce;ce=(Xd(),Vd).getElementById("todomvc-canvas");var de=new Od;
(function(a,b){Td(a);a.c=b;a.B=b.getContext("2d");a.b=Hd(a.B);Rd(a);Wd(function(b){for(var c=0;c<arguments.length;++c);Z(a)});Vd.addEventListener("keydown",new Jd(function(b){var c=a.g,e=b.key,h=b.code;b=1==b.key.length;ud();var n=new sd;n.c=e;var v;td.O(h)?v=td.get(h):v=h;n.a=v;n.b=b;Qd(c,n);Z(a);Z(a)}));window.window.addEventListener("resize",new Kd(function(){Rd(a);Z(a)}));b.addEventListener("mousedown",new Ld(function(b){Pd(a,b,(qd(),rd))}));b.addEventListener("mouseup",new Md(function(b){Pd(a,
b,(qd(),wd))}));b.addEventListener("mousemove",new Nd(function(b){Pd(a,b,0<b.buttons?(qd(),yd):(qd(),xd))}))})(de,ce);var ee=M=de;ee.L=new bb(function(){Lc()});Z(ee);