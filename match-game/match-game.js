function ddm_MatchGame(){var Jb='',Kb=0,Lb='gwt.codesvr=',Mb='gwt.hosted=',Nb='gwt.hybrid',Ob='ddm.MatchGame',Pb='__gwt_marker_ddm.MatchGame',Qb='<script id="',Rb='"><\/script>',Sb='SCRIPT',Tb='#',Ub='?',Vb='/',Wb=1,Xb='base',Yb='img',Zb='clear.cache.gif',$b='meta',_b='name',ac='gwt:property',bc='content',cc='=',dc='gwt:onPropertyErrorFn',ec='Bad handler "',fc='" for "gwt:onPropertyErrorFn"',gc='gwt:onLoadErrorFn',hc='" for "gwt:onLoadErrorFn"',ic='user.agent',jc='webkit',kc='safari',lc='msie',mc=10,nc=11,oc='ie10',pc=9,qc='ie9',rc=8,sc='ie8',tc='gecko',uc='gecko1_8',vc=2,wc=3,xc=4,yc='Single-script hosted mode not yet implemented. See issue ',zc='http://code.google.com/p/google-web-toolkit/issues/detail?id=2079',Ac='FA5636CF3E89ABA97B2CBCEF2314C61F',Bc=':1',Cc=':2',Dc=':3',Ec=':4',Fc=':',Gc='DOMContentLoaded',Hc=50;var k=Jb,l=Kb,m=Lb,n=Mb,o=Nb,p=Ob,q=Pb,r=Qb,s=Rb,t=Sb,u=Tb,v=Ub,w=Vb,A=Wb,B=Xb,C=Yb,D=Zb,F=$b,G=_b,H=ac,I=bc,J=cc,K=dc,L=ec,M=fc,N=gc,O=hc,P=ic,Q=jc,R=kc,S=lc,T=mc,U=nc,V=oc,W=pc,X=qc,Y=rc,Z=sc,$=tc,_=uc,ab=vc,bb=wc,cb=xc,db=yc,eb=zc,fb=Ac,gb=Bc,hb=Cc,ib=Dc,jb=Ec,kb=Fc,lb=Gc,mb=Hc;var nb=window,ob=document,pb,qb,rb=k,sb={},tb=[],ub=[],vb=[],wb=l,xb,yb;if(!nb.__gwt_stylesLoaded){nb.__gwt_stylesLoaded={}}if(!nb.__gwt_scriptsLoaded){nb.__gwt_scriptsLoaded={}}function zb(){var b=false;try{var c=nb.location.search;return (c.indexOf(m)!=-1||(c.indexOf(n)!=-1||nb.external&&nb.external.gwtOnLoad))&&c.indexOf(o)==-1}catch(a){}zb=function(){return b};return b}
function Ab(){if(pb&&qb){pb(xb,p,rb,wb)}}
function Bb(){var e,f=q,g;ob.write(r+f+s);g=ob.getElementById(f);e=g&&g.previousSibling;while(e&&e.tagName!=t){e=e.previousSibling}function h(a){var b=a.lastIndexOf(u);if(b==-1){b=a.length}var c=a.indexOf(v);if(c==-1){c=a.length}var d=a.lastIndexOf(w,Math.min(c,b));return d>=l?a.substring(l,d+A):k}
;if(e&&e.src){rb=h(e.src)}if(rb==k){var i=ob.getElementsByTagName(B);if(i.length>l){rb=i[i.length-A].href}else{rb=h(ob.location.href)}}else if(rb.match(/^\w+:\/\//)){}else{var j=ob.createElement(C);j.src=rb+D;rb=h(j.src)}if(g){g.parentNode.removeChild(g)}}
function Cb(){var b=document.getElementsByTagName(F);for(var c=l,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(G),g;if(f){if(f==H){g=e.getAttribute(I);if(g){var h,i=g.indexOf(J);if(i>=l){f=g.substring(l,i);h=g.substring(i+A)}else{f=g;h=k}sb[f]=h}}else if(f==K){g=e.getAttribute(I);if(g){try{yb=eval(g)}catch(a){alert(L+g+M)}}}else if(f==N){g=e.getAttribute(I);if(g){try{xb=eval(g)}catch(a){alert(L+g+O)}}}}}}
__gwt_isKnownPropertyValue=function(a,b){return b in tb[a]};__gwt_getMetaProperty=function(a){var b=sb[a];return b==null?null:b};function Db(a,b){var c=vb;for(var d=l,e=a.length-A;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function Eb(a){var b=ub[a](),c=tb[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(yb){yb(a,d,b)}throw null}
ub[P]=function(){var a=navigator.userAgent.toLowerCase();var b=ob.documentMode;if(function(){return a.indexOf(Q)!=-1}())return R;if(function(){return a.indexOf(S)!=-1&&(b>=T&&b<U)}())return V;if(function(){return a.indexOf(S)!=-1&&(b>=W&&b<U)}())return X;if(function(){return a.indexOf(S)!=-1&&(b>=Y&&b<U)}())return Z;if(function(){return a.indexOf($)!=-1||b>=U}())return _;return k};tb[P]={'gecko1_8':l,'ie10':A,'ie8':ab,'ie9':bb,'safari':cb};ddm_MatchGame.onScriptLoad=function(a){ddm_MatchGame=null;pb=a;Ab()};if(zb()){alert(db+eb);return}Bb();Cb();try{var Fb;Db([_],fb);Db([V],fb+gb);Db([Z],fb+hb);Db([X],fb+ib);Db([R],fb+jb);Fb=vb[Eb(P)];var Gb=Fb.indexOf(kb);if(Gb!=-1){wb=Number(Fb.substring(Gb+A))}}catch(a){return}var Hb;function Ib(){if(!qb){qb=true;Ab();if(ob.removeEventListener){ob.removeEventListener(lb,Ib,false)}if(Hb){clearInterval(Hb)}}}
if(ob.addEventListener){ob.addEventListener(lb,function(){Ib()},false)}var Hb=setInterval(function(){if(/loaded|complete/.test(ob.readyState)){Ib()}},mb)}
ddm_MatchGame();(function () {var $gwt_version = "2.8.2";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {$wnd.__gwtStatsEvent(a)} : null;var $strongName = 'FA5636CF3E89ABA97B2CBCEF2314C61F';function m(){}
function Y(){}
function od(){}
function ld(){}
function ud(){}
function xd(){}
function Ad(){}
function Dd(){}
function Gd(){}
function fb(){}
function ib(){}
function Kg(){}
function Sh(){}
function Jh(a,b){}
function Sd(){Sd=ld}
function Sf(){Me(this)}
function bf(a){this.b=a}
function ff(a){this.a=a}
function kf(a){this.a=a}
function oe(a){this.a=a}
function Qe(a){this.a=a}
function Zh(a){this.a=a}
function fi(a){this.a=a}
function hi(a){this.a=a}
function ji(a){this.a=a}
function li(a){this.a=a}
function ni(a){this.a=a}
function Ff(a){this.c=a}
function Rh(a){Yh(lh.d,a)}
function cb(a){bb();ab.q(a)}
function D(){D=ld;C=new m}
function V(){V=ld;U=new Y}
function Vf(){this.a=new Sf}
function xh(a,b,c){this.a=c}
function bd(a){return a.b}
function me(){B.call(this)}
function ue(){B.call(this)}
function Qf(){B.call(this)}
function Lg(){B.call(this)}
function ye(a){ne.call(this,a)}
function B(){t(this);this.o()}
function hg(){hg=ld;gg=jg()}
function Nf(){Nf=ld;Mf=new Ug}
function L(){L=ld;!!(bb(),ab)}
function T(){I!=0&&(I=0);K=-1}
function ed(){cd==null&&(cd=[])}
function Vd(a){Ud(a);return a.j}
function lg(){hg();return new gg}
function jb(a,b){return be(a,b)}
function Uf(a,b){return He(a.a,b)}
function ng(a,b){return a.a.get(b)}
function Ne(a){return a.a.c+a.b.c}
function Fe(a){return !a?null:a.L()}
function zb(a){return a==null?null:a}
function Ng(a){return a!=null?s(a):0}
function xe(a,b){return Yg(a),a===b}
function sf(a,b){this.a=a;this.b=b}
function Ch(a,b){this.a=a;this.b=b}
function Lh(a,b){this.a=a;this.b=b}
function bg(a){this.a=lg();this.b=a}
function pg(a){this.a=lg();this.b=a}
function sd(a){this.c=a;t(this);this.o()}
function ne(a){this.c=a;t(this);this.o()}
function Af(){this.a=mb(dc,ti,1,0,5,1)}
function S(a){$wnd.clearTimeout(a)}
function zg(a,b){Ag(a,b,a.c.b,a.c)}
function vb(a,b){return a!=null&&tb(a,b)}
function bh(a){return a.$H||(a.$H=++ah)}
function xb(a){return typeof a==='number'}
function yb(a){return typeof a==='string'}
function wb(a){return typeof a==='boolean'}
function Vg(a){if(!a){throw bd(new me)}}
function Wg(a){if(!a){throw bd(new Lg)}}
function gh(){gh=ld;dh=new m;fh=new m}
function Th(a){var b;b=new Sh;b.a=a;return b}
function t(a){a.d&&a.b!==qi&&a.o();return a}
function Zd(a){var b;b=Yd(a);je(a,b);return b}
function Ud(a){if(a.j!=null){return}fe(a)}
function Bg(a){Wg(a.b!=0);return Cg(a,a.a.a)}
function u(a,b){a.b=b;b!=null&&_g(b,ri,a)}
function Uh(a,b,c,d){a.a.fillText(b,c,d)}
function Vh(a,b,c,d,e){a.a.fillRect(b,c,d,e)}
function M(a,b,c){return a.apply(b,c);var d}
function kh(a,b){return new Lh(b.a-a.a,b.b-a.b)}
function Qh(a,b,c){Xh(lh.d,c);Vh(lh.d,0,0,a,b)}
function Hg(a,b,c){this.d=a;this.b=c;this.a=b}
function vg(a,b,c){this.a=a;this.b=b;this.c=c}
function _g(b,c,d){try{b[c]=d}catch(a){}}
function Bh(a){Ah();Je(zh,a)?Ie(zh,a):a}
function te(){te=ld;se=mb(_b,ti,17,256,0,1)}
function kb(a,b,c,d,e,f){return lb(a,b,c,d,e,0,f)}
function He(a,b){return yb(b)?Je(a,b):!!_f(a.a,b)}
function mg(a,b){return !(a.a.get(b)===undefined)}
function ob(a){return Array.isArray(a)&&a.P===od}
function ub(a){return !Array.isArray(a)&&a.P===od}
function Ke(a,b,c){return yb(b)?Le(a,b,c):ag(a.a,b,c)}
function Me(a){a.a=new bg(a);a.b=new pg(a);Pf(a)}
function Eg(){this.a=new Kg;this.c=new Kg;Dg(this)}
function Yg(a){if(a==null){throw bd(new ue)}return a}
function jh(){if(eh==256){dh=fh;fh=new m;eh=0}++eh}
function _d(a){var b;b=Yd(a);b.i=a;b.e=1;return b}
function $d(a,b){var c;c=Yd(a);je(a,c);c.e=b?8:0;return c}
function Tf(a,b){var c;c=Ke(a.a,b,a);return c==null}
function xf(a,b){a.a[a.a.length]=b;return true}
function Z(a,b){!a&&(a=[]);a[a.length]=b;return a}
function we(a,b){$g(b,a.length);return a.charCodeAt(b)}
function ef(a,b){bf.call(this,a);Zg(b,a.F());this.a=b}
function Rf(a,b){return zb(a)===zb(b)||a!=null&&o(a,b)}
function Mg(a,b){return zb(a)===zb(b)||a!=null&&o(a,b)}
function Je(a,b){return b==null?!!_f(a.a,null):mg(a.b,b)}
function Ie(a,b){return b==null?Fe(_f(a.a,null)):ng(a.b,b)}
function de(a){if(a.B()){return null}var b=a.i;return hd[b]}
function Dg(a){a.a.a=a.c;a.c.b=a.a;a.a.b=a.c.a=null;a.b=0}
function Yh(a,b){a.b=20;a.a.font=b.a+' '+20+'px '+'Arial'}
function Zg(a,b){if(a<0||a>b){throw bd(new ne(Oi+a+Pi+b))}}
function Xg(a,b){if(a<0||a>=b){throw bd(new ne(Oi+a+Pi+b))}}
function $g(a,b){if(a<0||a>=b){throw bd(new ye(Oi+a+Pi+b))}}
function be(a,b){var c=a.a=a.a||[];return c[b]||(c[b]=a.t(b))}
function $f(a,b){var c;c=a.a.get(b);return c==null?new Array:c}
function P(a,b,c){var d;d=N();try{return M(a,b,c)}finally{Q(d)}}
function Le(a,b,c){return b==null?ag(a.a,null,c):og(a.b,b,c)}
function yh(){wh();return pb(jb(Nc,1),ti,24,0,[th,uh,vh])}
function Kh(){Ih();return pb(jb(Pc,1),ti,14,0,[Hh,Eh,Dh,Gh,Fh])}
function _f(a,b){var c;return Zf(b,$f(a,b==null?0:(c=s(b),c|0)))}
function Pf(a){var b,c;c=a;b=c.$modCount|0;c.$modCount=b+1}
function Of(a,b){if(b.$modCount!=a.$modCount){throw bd(new Qf)}}
function R(a){L();$wnd.setTimeout(function(){throw a},0)}
function bb(){bb=ld;var a,b;b=!eb();a=new ib;ab=b?new fb:a}
function dg(a){this.e=a;this.b=this.e.a.entries();this.a=new Array}
function sh(a,b,c){qh();this.d=a;this.c=b;this.b=c;this.a=255}
function Ag(a,b,c,d){var e;e=new Kg;e.c=b;e.b=c;e.a=d;d.b=c.a=e;++a.b}
function Oh(a,b,c,d,e){return !!e&&e.a>=a&&e.b>=b&&e.a<=a+c&&e.b<=b+d}
function zf(a,b,c){var d;d=(Xg(b,a.a.length),a.a[b]);a.a[b]=c;return d}
function Ve(a){var b;Of(a.d,a);Wg(a.b);b=a.a.H();a.b=Ue(a);return b}
function md(a){function b(){}
;b.prototype=a||{};return new b}
function w(b){if(!('stack' in b)){try{throw b}catch(a){}}return b}
function O(b){L();return function(){return P(b,this,arguments);var a}}
function H(){if(Date.now){return Date.now()}return (new Date).getTime()}
function ug(a){if(a.a.d!=a.c){return ng(a.a,a.b.value[0])}return a.b.value[1]}
function di(a){if(a.g.b!=0){a.f=Bg(a.g);a.h=a.f.a}a.e.b==0||Bg(a.e)}
function Q(a){a&&X((V(),U));--I;if(a){if(K!=-1){S(K);K=-1}}}
function Kf(a,b){var c;for(c=a.a.length-1;c>=1;c--){Lf(a,c,Sg(b,c+1))}}
function yf(a,b,c){for(;c<a.a.length;++c){if(Mg(b,a.a[c])){return c}}return -1}
function mb(a,b,c,d,e,f){var g;g=nb(e,d);e!=10&&pb(jb(a,f),b,c,e,g);return g}
function rh(a,b,c){this.d=Ab(a*256);this.c=Ab(b*256);this.b=Ab(c*256);this.a=255}
function rg(a){this.d=a;this.b=this.d.a.entries();this.a=this.b.next()}
function Ab(a){return Math.max(Math.min(a,2147483647),-2147483648)|0}
function _h(a,b){var c,d;c=b;zg(a.e,new Bh((d=c.code,c.key.length==1,d)));$h(a)}
function Cg(a,b){var c;c=b.c;b.a.b=b.b;b.b.a=b.a;b.a=b.b=null;b.c=null;--a.b;return c}
function X(a){var b,c;if(a.b){c=null;do{b=a.b;a.b=null;c=$(b,c)}while(a.b);a.b=c}}
function W(a){var b,c;if(a.a){c=null;do{b=a.a;a.a=null;c=$(b,c)}while(a.a);a.a=c}}
function rd(){var a,b,c;b=_c();a=b.r();c=b.s();if(!xe(a,c)){throw bd(new td(a,c))}}
function ad(a){var b;if(vb(a,4)){return a}b=a&&a[ri];if(!b){b=new F(a);cb(b)}return b}
function je(a,b){var c;if(!a){return}b.i=a;var d=de(b);if(!d){hd[a]=[b];return}d.N=b}
function Be(a,b){var c,d;Yg(b);for(d=b.C();d.G();){c=d.H();if(!a.D(c)){return false}}return true}
function If(a){var b,c,d;d=0;for(c=a.C();c.G();){b=c.H();d=d+(b!=null?s(b):0);d=d|0}return d}
function Jf(a){var b,c,d;d=1;for(c=a.C();c.G();){b=c.H();d=31*d+(b!=null?s(b):0);d=d|0}return d}
function Yd(a){var b;b=new Wd;b.j='Class$'+(a?'S'+a:''+b.g);b.b=b.j;b.h=b.j;return b}
function Ah(){Ah=ld;zh=new Sf;Le(zh,'ArrowLeft','Left');Le(zh,'ArrowRight','Right')}
function $h(a){di(a);Od();Qd(lh.a.clientWidth,lh.a.clientHeight);a.f=null;Dg(a.b)}
function dd(){ed();var a=cd;for(var b=0;b<arguments.length;b++){a.push(arguments[b])}}
function F(a){D();t(this);this.b=a;a!=null&&_g(a,ri,this);this.c=a==null?'null':nd(a);this.a=a}
function We(a){this.d=a;this.c=new rg(this.d.b);this.a=this.c;this.b=Ue(this);this.$modCount=a.$modCount}
function Wd(){this.g=Td++;this.j=null;this.h=null;this.f=null;this.d=null;this.b=null;this.i=null;this.a=null}
function Od(){Od=ld;Ld=(qh(),nh);Nd=kb(Cb,[ti,ti],[125,36],15,[Jd,Jd],2);Kd=new Vf;Md=new Vf}
function wh(){wh=ld;th=new xh('BOLD',0,'bold');uh=new xh('ITALIC',1,'italic');vh=new xh('PLAIN',2,'normal')}
function Ue(a){if(a.a.G()){return true}if(a.a!=a.c){return false}a.a=new dg(a.d.a);return a.a.G()}
function Zf(a,b){var c,d,e;for(d=0,e=b.length;d<e;++d){c=b[d];if(Rf(a,c.K())){return c}}return null}
function Ae(a,b){var c,d;for(d=a.C();d.G();){c=d.H();if(zb(b)===zb(c)||b!=null&&o(b,c)){return true}}return false}
function re(a){var b,c;if(a>-129&&a<128){b=a+128;c=(te(),se)[b];!c&&(c=se[b]=new oe(a));return c}return new oe(a)}
function db(a){var b=/function(?:\s+([\w$]+))?\s*\(/;var c=b.exec(a);return c&&c[1]||'anonymous'}
function q(a){return yb(a)?gc:xb(a)?Vb:wb(a)?Tb:ub(a)?a.N:ob(a)?a.N:a.N||Array.isArray(a)&&jb(Eb,1)||Eb}
function Wh(a,b){return new Lh(Ab(a.a.measureText(b).width),Ab($wnd.Math.round(a.b/1.3329999446868896)))}
function gd(a,b){typeof window==='object'&&typeof window['$gwt']==='object'&&(window['$gwt'][a]=b)}
function pb(a,b,c,d,e){e.N=a;e.O=b;e.P=od;e.__elementTypeId$=c;e.__elementTypeCategory$=d;return e}
function og(a,b,c){var d;d=a.a.get(b);a.a.set(b,c===undefined?null:c);if(d===undefined){++a.c;Pf(a.b)}else{++a.d}return d}
function Lf(a,b,c){var d;d=(Xg(b,a.a.length),a.a[b]);zf(a,b,(Xg(c,a.a.length),a.a[c]));Xg(c,a.a.length);a.a[c]=d}
function ai(a,b){var c,d,e;d=b;e=new Lh(Ab(d.clientX),Ab(d.clientY));zg(a.g,new Ch(e,(c=(Ih(),Eh),kh(a.h,e),c)));$h(a)}
function bi(a,b){var c,d,e;d=b;e=new Lh(Ab(d.clientX),Ab(d.clientY));zg(a.g,new Ch(e,(c=(Ih(),Hh),kh(a.h,e),c)));$h(a)}
function Ug(){Rg();var a,b,c;c=Qg+++Date.now();a=Ab($wnd.Math.floor(c*Mi))&16777215;b=Ab(c-a*Ni);this.a=a^1502;this.b=b^Li}
function N(){var a;if(I!=0){a=H();if(a-J>2000){J=a;K=$wnd.setTimeout(T,10)}}if(I++==0){W((V(),U));return true}return false}
function nd(a){var b;if(Array.isArray(a)&&a.P===od){return Vd(q(a))+'@'+(b=s(a)>>>0,b.toString(16))}return a.toString()}
function _c(){switch($c){case 1:return new xd;case 4:return new Gd;case 0:return new ud;case 2:return new Ad;}return new Dd}
function tb(a,b){if(yb(a)){return !!sb[b]}else if(a.O){return !!a.O[b]}else if(xb(a)){return !!rb[b]}else if(wb(a)){return !!qb[b]}return false}
function Ih(){Ih=ld;Hh=new Jh('UP',0);Eh=new Jh('DOWN',1);Dh=new Jh('CLICK',2);Gh=new Jh('MOVE',3);Fh=new Jh('DRAG',4)}
function ie(a,b){var c=0;while(!b[c]||b[c]==''){c++}var d=b[c++];for(;c<b.length;c++){if(!b[c]||b[c]==''){continue}d+=a+b[c]}return d}
function eb(){if(Error.stackTraceLimit>0){$wnd.Error.stackTraceLimit=Error.stackTraceLimit=64;return true}return 'stack' in new Error}
function Sg(a,b){var c,d;Vg(b>0);if((b&-b)==b){return Ab(b*Tg(a)*4.6566128730773926E-10)}do{c=Tg(a);d=c%b}while(c-d+(b-1)<0);return Ab(d)}
function ih(a){gh();var b,c,d;c=':'+a;d=fh[c];if(d!=null){return Ab((Yg(d),d))}d=dh[c];b=d==null?hh(a):Ab((Yg(d),d));jh();fh[c]=b;return b}
function s(a){return yb(a)?ih(a):xb(a)?Ab((Yg(a),a)):wb(a)?(Yg(a),a)?1231:1237:ub(a)?a.m():ob(a)?bh(a):!!a&&!!a.hashCode?a.hashCode():bh(a)}
function o(a,b){return yb(a)?xe(a,b):xb(a)?(Yg(a),a===b):wb(a)?(Yg(a),a===b):ub(a)?a.k(b):ob(a)?a===b:!!a&&!!a.equals?a.equals(b):zb(a)===zb(b)}
function ci(a,b){var c,d,e;c=b;d=new Lh(Ab(c.clientX),Ab(c.clientY));e=c.buttons>0?(Ih(),Fh):(Ih(),Gh);zg(a.g,new Ch(d,(kh(a.h,d),e)));$h(a)}
function nb(a,b){var c=new Array(b);var d;switch(a){case 14:case 15:d=0;break;case 16:d=false;break;default:return c;}for(var e=0;e<b;++e){c[e]=d}return c}
function td(a,b){var c;sd.call(this,(c=vi+a+') '+wi+b+xi+yi==null?'null':nd(vi+a+') '+wi+b+xi+yi),vb(vi+a+') '+wi+b+xi+yi,4)?vi+a+') '+wi+b+xi+yi:null,c))}
function Xh(a,b){var c,d,e,f;f=b.d;e=b.c;d=b.b;c=b.a;c==255?(a.a.fillStyle='rgb('+f+', '+e+', '+d+')'):(a.a.fillStyle='rgb('+f+', '+e+', '+d+', '+c/255+')')}
function fd(b,c,d,e){ed();var f=cd;$moduleName=c;$moduleBase=d;$c=e;function g(){for(var a=0;a<f.length;a++){f[a]()}}
if(b){try{pi(g)()}catch(a){b(c,a)}}else{pi(g)()}}
function ze(a,b){var c,d,e,f,g,h;Yg(b);c=false;for(e=(h=new We((new Qe((new ff(b.a)).a)).a),new kf(h));e.a.b;){d=(f=Ve(e.a),f.K());c=c|(g=Ke(a.a,d,a),g==null)}return c}
function Pd(){var a,b,c,d,e,f;if(Ne(Md.a)!=2){return}e=(f=new We((new Qe((new ff(Md.a)).a)).a),new kf(f));a=(d=Ve(e.a),d.K());b=(c=Ve(e.a),c.K());if(Nd[a.a][a.b]===Nd[b.a][b.b]){ze(Kd,Md);Me(Md.a)}}
function lb(a,b,c,d,e,f,g){var h,i,j,k,l;k=e[f];j=f==g-1;h=j?d:0;l=nb(h,k);d!=10&&pb(jb(a,g-f),b[f],c[f],h,l);if(!j){++f;for(i=0;i<k;++i){l[i]=lb(a,b,c,d,e,f,g)}}return l}
function Rg(){Rg=ld;var a,b,c,d;Og=mb(Bb,ti,36,25,15,1);Pg=mb(Bb,ti,36,33,15,1);d=1.52587890625E-5;for(b=32;b>=0;b--){Pg[b]=d;d*=0.5}c=1;for(a=24;a>=0;a--){Og[a]=c;c*=0.5}}
function jg(){function b(){try{return (new Map).entries().next().done}catch(a){return false}}
if(typeof Map==='function'&&Map.prototype.entries&&b()){return Map}else{return kg()}}
function $(b,c){var d,e,f,g;for(e=0,f=b.length;e<f;e++){g=b[e];try{g[1]?g[0].Q()&&(c=Z(c,g)):g[0].Q()}catch(a){a=ad(a);if(vb(a,4)){d=a;L();R(vb(d,21)?d.p():d)}else throw bd(a)}}return c}
function jd(){hd={};!Array.isArray&&(Array.isArray=function(a){return Object.prototype.toString.call(a)==='[object Array]'});function b(){return (new Date).getTime()}
!Date.now&&(Date.now=b)}
function Rd(){var a,b,c,d,e;d=new Af;for(b=0;b<Jd*Jd;b++){xf(d,re(1+(b/2|0)))}Kf(d,(Nf(),Mf));for(a=0;a<Jd;a++){for(c=0;c<Jd;c++){Nd[a][c]=(e=(Xg(0,d.a.length),d.a[0]),d.a.splice(0,1),e).a}}}
function De(a,b){var c,d,e;c=b.K();e=b.L();d=yb(c)?Ie(a,c):Fe(_f(a.a,c));if(!(zb(e)===zb(d)||e!=null&&o(e,d))){return false}if(d==null&&!(yb(c)?Je(a,c):!!_f(a.a,c))){return false}return true}
function Tg(a){var b,c,d,e,f,g;e=a.a*Li+a.b*1502;g=a.b*Li+11;b=$wnd.Math.floor(g*Mi);e+=b;g-=b*Ni;e%=Ni;a.a=e;a.b=g;d=a.a*128;f=$wnd.Math.floor(a.b*Pg[31]);c=d+f;c>=2147483648&&(c-=4294967296);return c}
function ag(a,b,c){var d,e,f,g,h;h=b==null?0:(g=s(b),g|0);e=(d=a.a.get(h),d==null?new Array:d);if(e.length==0){a.a.set(h,e)}else{f=Zf(b,e);if(f){return f.M(c)}}e[e.length]=new sf(b,c);++a.c;Pf(a.b);return null}
function pd(){$wnd.setTimeout(pi(rd));qd();Od();Rd();Ld=new sh(128+Ab($wnd.Math.random()*128),128+Ab($wnd.Math.random()*128),128+Ab($wnd.Math.random()*128));lh=new ei($wnd.window.document.getElementById('matchgame-canvas'));$h(lh)}
function kd(a,b,c){var d=hd,h;var e=d[a];var f=e instanceof Array?e[0]:null;if(e&&!f){_=e}else{_=(h=b&&b.prototype,!h&&(h=hd[b]),md(h));_.O=c;!b&&(_.P=od);d[a]=_}for(var g=3;g<arguments.length;++g){arguments[g].prototype=_}f&&(_.N=f)}
function fe(a){if(a.A()){var b=a.c;b.B()?(a.j='['+b.i):!b.A()?(a.j='[L'+b.v()+';'):(a.j='['+b.v());a.b=b.u()+'[]';a.h=b.w()+'[]';return}var c=a.f;var d=a.d;d=d.split('/');a.j=ie('.',[c,ie('$',d)]);a.b=ie('.',[c,ie('.',d)]);a.h=d[d.length-1]}
function Ph(a,b,c,d,e,f,g,h){var i;if(g){Xh(lh.d,g);Vh(lh.d,a,b,c,d)}if(!!h&&Oh(a,b,c,d,lh.h)){Xh(lh.d,h);Vh(lh.d,a,b,c,d)}Xh(lh.d,f);i=Wh(lh.d,e);Uh(lh.d,e,a+(c/2|0)-(i.a/2|0),b+(d/2|0)+(i.b/2|0));return Th(!!lh.f&&lh.f.b==(Ih(),Eh)&&Oh(a,b,c,d,lh.f.a))}
function qh(){qh=ld;new sh(0,0,0);new sh(128,128,128);mh=new rh(Qi,Qi,Qi);new rh(Ri,Ri,Ri);new rh(Si,Si,Si);new rh(Ti,Ti,Ti);new rh(0.5,0.5,0.5);nh=new rh(Ui,Ui,Ui);new rh(Vi,Vi,Vi);oh=new rh(Wi,Wi,Wi);new rh(Xi,Xi,Xi);ph=new rh(Yi,Yi,Yi);new sh(255,255,255);new sh(255,255,0)}
function hh(a){var b,c,d,e;b=0;d=a.length;e=d-4;c=0;while(c<e){b=($g(c+3,a.length),a.charCodeAt(c+3)+($g(c+2,a.length),31*(a.charCodeAt(c+2)+($g(c+1,a.length),31*(a.charCodeAt(c+1)+($g(c,a.length),31*(a.charCodeAt(c)+31*b)))))));b=b|0;c+=4}while(c<d){b=b*31+we(a,c++)}b=b|0;return b}
function ig(){if(!Object.create||!Object.getOwnPropertyNames){return false}var a='__proto__';var b=Object.create(null);if(b[a]!==undefined){return false}var c=Object.getOwnPropertyNames(b);if(c.length!=0){return false}b[a]=42;if(b[a]!==42){return false}if(Object.getOwnPropertyNames(b).length==0){return false}return true}
function ei(a){this.b=new Eg;this.e=new Eg;this.g=new Eg;this.h=new Lh(0,0);this.a=a;this.c=a.getContext('2d');this.d=new Zh(this.c);$wnd.window.document.addEventListener('keydown',new fi(this));$wnd.window.window.addEventListener('resize',new hi(this));a.addEventListener('mousedown',new ji(this));a.addEventListener('mouseup',new li(this));a.addEventListener('mousemove',new ni(this))}
function Qd(a,b){Od();var c,d,e,f,g,h,i,j,k,l;Qh(a,b,(qh(),ph));Rh((wh(),th));k=$wnd.Math.min(a,b);for(f=0;f<Jd;f++){for(i=0;i<Jd;i++){e='';d=new Lh(f,i);g=Uf(Kd,d);h=Nd[f][i]==1+(Jd*Jd/2|0);(Uf(Md,d)||g)&&(e=Nd[f][i]+'');h&&(e='Reset');c=h||g?Ld:nh;j=h||g?Ld:oh;l=(k-10*(Jd+1))/Jd|0;if(Ph(10+f*(10+l),10+i*(10+l),l,l,e,mh,c,j).a){Ld=new sh(128+Ab($wnd.Math.random()*128),128+Ab($wnd.Math.random()*128),128+Ab($wnd.Math.random()*128));if(h){Me(Md.a)}else{Ne(Md.a)==2&&Me(Md.a);Tf(Md,d);Pd()}}}}}
function kg(){function e(){this.obj=this.createObject()}
;e.prototype.createObject=function(a){return Object.create(null)};e.prototype.get=function(a){return this.obj[a]};e.prototype.set=function(a,b){this.obj[a]=b};e.prototype['delete']=function(a){delete this.obj[a]};e.prototype.keys=function(){return Object.getOwnPropertyNames(this.obj)};e.prototype.entries=function(){var b=this.keys();var c=this;var d=0;return {next:function(){if(d>=b.length)return {done:true};var a=b[d++];return {value:[a,c.get(a)],done:false}}}};if(!ig()){e.prototype.createObject=function(){return {}};e.prototype.get=function(a){return this.obj[':'+a]};e.prototype.set=function(a,b){this.obj[':'+a]=b};e.prototype['delete']=function(a){delete this.obj[':'+a]};e.prototype.keys=function(){var a=[];for(var b in this.obj){b.charCodeAt(0)==58&&a.push(b.substring(1))}return a}}return e}
function qd(){var a,b,c;b=$doc.compatMode;a=pb(jb(gc,1),ti,2,6,[ui]);for(c=0;c<a.length;c++){if(xe(a[c],b)){return}}a.length==1&&xe(ui,a[0])&&xe('BackCompat',b)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\""+b+'"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' "+b+"').<br>Modify your application's host HTML page doctype, or update your custom "+"'document.compatMode' configuration property settings."}
var qi='__noinit__',ri='__java$exception',si={3:1,4:1},ti={3:1},ui='CSS1Compat',vi='Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (',wi='does not match the runtime user.agent value (',xi=').\n',yi='Expect more errors.',zi={34:1},Ai='gecko1_8',Bi='webkit',Ci='safari',Di='msie',Ei='ie10',Fi='ie9',Gi='ie8',Hi='gecko',Ii='unknown',Ji={3:1,15:1},Ki={18:1},Li=15525485,Mi=5.9604644775390625E-8,Ni=16777216,Oi='Index: ',Pi=', Size: ',Qi=0.10000000149011612,Ri=0.20000000298023224,Si=0.30000001192092896,Ti=0.4000000059604645,Ui=0.6000000238418579,Vi=0.699999988079071,Wi=0.800000011920929,Xi=0.8999999761581421,Yi=0.949999988079071,Zi='locale',$i='default',_i='user.agent';var _,hd,cd,$c=-1;jd();kd(1,null,{},m);_.k=function n(a){return this===a};_.l=function p(){return this.N};_.m=function r(){return bh(this)};_.equals=function(a){return this.k(a)};_.hashCode=function(){return this.m()};var qb,rb,sb;kd(39,1,{},Wd);_.t=function Xd(a){var b;b=new Wd;b.e=4;a>1?(b.c=be(this,a-1)):(b.c=this);return b};_.u=function ae(){Ud(this);return this.b};_.v=function ce(){return Vd(this)};_.w=function ee(){Ud(this);return this.h};_.A=function ge(){return (this.e&4)!=0};_.B=function he(){return (this.e&1)!=0};_.e=0;_.g=0;var Td=1;var dc=Zd(1);var Ub=Zd(39);kd(4,1,si);_.n=function v(a){return new Error(a)};_.o=function A(){var a,b,c;c=this.c==null?null:this.c.replace(new RegExp('\n','g'),' ');b=(a=Vd(this.N),c==null?a:a+': '+c);u(this,w(this.n(b)));cb(this)};_.b=qi;_.d=true;var hc=Zd(4);kd(29,4,si);var Yb=Zd(29);kd(12,29,si);var ec=Zd(12);kd(41,12,si);var ac=Zd(41);kd(55,41,si);var Gb=Zd(55);kd(21,55,{21:1,3:1,4:1},F);_.p=function G(){return zb(this.a)===zb(C)?null:this.a};var C;var Db=Zd(21);var Eb=Zd(0);kd(86,1,{});var Fb=Zd(86);var I=0,J=0,K=-1;kd(71,86,{},Y);var U;var Hb=Zd(71);var ab;kd(101,1,{});var Lb=Zd(101);kd(56,101,{},fb);_.q=function gb(a){var b={},j;var c=[];a['fnStack']=c;var d=arguments.callee.caller;while(d){var e=(bb(),d.name||(d.name=db(d.toString())));c.push(e);var f=':'+e;var g=b[f];if(g){var h,i;for(h=0,i=g.length;h<i;h++){if(g[h]===d){return}}}(g||(b[f]=[])).push(d);d=d.caller}};var Ib=Zd(56);kd(102,101,{});_.q=function hb(a){};var Kb=Zd(102);kd(57,102,{},ib);var Jb=Zd(57);kd(26,4,si);var Xb=Zd(26);kd(7,26,si);var Sb=Zd(7);kd(46,7,si,td);var Mb=Zd(46);kd(75,1,zi,ud);_.r=function vd(){return Ai};_.s=function wd(){var a=navigator.userAgent.toLowerCase();var b=$doc.documentMode;if(function(){return a.indexOf(Bi)!=-1}())return Ci;if(function(){return a.indexOf(Di)!=-1&&b>=10&&b<11}())return Ei;if(function(){return a.indexOf(Di)!=-1&&b>=9&&b<11}())return Fi;if(function(){return a.indexOf(Di)!=-1&&b>=8&&b<11}())return Gi;if(function(){return a.indexOf(Hi)!=-1||b>=11}())return Ai;return Ii};var Nb=Zd(75);kd(73,1,zi,xd);_.r=function yd(){return Ei};_.s=function zd(){var a=navigator.userAgent.toLowerCase();var b=$doc.documentMode;if(function(){return a.indexOf(Bi)!=-1}())return Ci;if(function(){return a.indexOf(Di)!=-1&&b>=10&&b<11}())return Ei;if(function(){return a.indexOf(Di)!=-1&&b>=9&&b<11}())return Fi;if(function(){return a.indexOf(Di)!=-1&&b>=8&&b<11}())return Gi;if(function(){return a.indexOf(Hi)!=-1||b>=11}())return Ai;return Ii};var Ob=Zd(73);kd(76,1,zi,Ad);_.r=function Bd(){return Gi};_.s=function Cd(){var a=navigator.userAgent.toLowerCase();var b=$doc.documentMode;if(function(){return a.indexOf(Bi)!=-1}())return Ci;if(function(){return a.indexOf(Di)!=-1&&b>=10&&b<11}())return Ei;if(function(){return a.indexOf(Di)!=-1&&b>=9&&b<11}())return Fi;if(function(){return a.indexOf(Di)!=-1&&b>=8&&b<11}())return Gi;if(function(){return a.indexOf(Hi)!=-1||b>=11}())return Ai;return Ii};var Pb=Zd(76);kd(72,1,zi,Dd);_.r=function Ed(){return Fi};_.s=function Fd(){var a=navigator.userAgent.toLowerCase();var b=$doc.documentMode;if(function(){return a.indexOf(Bi)!=-1}())return Ci;if(function(){return a.indexOf(Di)!=-1&&b>=10&&b<11}())return Ei;if(function(){return a.indexOf(Di)!=-1&&b>=9&&b<11}())return Fi;if(function(){return a.indexOf(Di)!=-1&&b>=8&&b<11}())return Gi;if(function(){return a.indexOf(Hi)!=-1||b>=11}())return Ai;return Ii};var Qb=Zd(72);kd(74,1,zi,Gd);_.r=function Hd(){return Ci};_.s=function Id(){var a=navigator.userAgent.toLowerCase();var b=$doc.documentMode;if(function(){return a.indexOf(Bi)!=-1}())return Ci;if(function(){return a.indexOf(Di)!=-1&&b>=10&&b<11}())return Ei;if(function(){return a.indexOf(Di)!=-1&&b>=9&&b<11}())return Fi;if(function(){return a.indexOf(Di)!=-1&&b>=8&&b<11}())return Gi;if(function(){return a.indexOf(Hi)!=-1||b>=11}())return Ai;return Ii};var Rb=Zd(74);var Jd=7,Kd,Ld,Md,Nd;qb=Ji;var Tb=Zd(96);kd(97,1,ti);var cc=Zd(97);rb=Ji;var Vb=Zd(98);kd(35,1,Ji);_.k=function ke(a){return this===a};_.m=function le(){return bh(this)};var Wb=Zd(35);kd(51,12,si,me);var Zb=Zd(51);kd(22,12,si,ne);var $b=Zd(22);kd(17,97,{3:1,15:1,17:1},oe);_.k=function pe(a){return vb(a,17)&&a.a==this.a};_.m=function qe(){return this.a};_.a=0;var _b=Zd(17);var se;kd(511,1,{});kd(59,41,si,ue);_.n=function ve(a){return new TypeError(a)};var bc=Zd(59);sb={3:1,47:1,15:1,2:1};var gc=Zd(2);kd(58,22,si,ye);var fc=Zd(58);kd(515,1,{});kd(99,1,{});_.D=function Ce(a){return Ae(this,a)};var ic=Zd(99);kd(104,1,{85:1});_.k=function Ee(a){var b,c,d;if(a===this){return true}if(!vb(a,23)){return false}d=a;if(this.a.c+this.b.c!=d.a.c+d.b.c){return false}for(c=new We((new Qe(d)).a);c.b;){b=Ve(c);if(!De(this,b)){return false}}return true};_.m=function Ge(){return If(new Qe(this))};var uc=Zd(104);kd(68,104,{85:1});var lc=Zd(68);kd(103,99,{33:1});_.k=function Oe(a){var b;if(a===this){return true}if(!vb(a,33)){return false}b=a;if(b.F()!=this.F()){return false}return Be(this,b)};_.m=function Pe(){return If(this)};var wc=Zd(103);kd(10,103,{33:1},Qe);_.D=function Re(a){if(vb(a,18)){return De(this.a,a)}return false};_.C=function Se(){return new We(this.a)};_.F=function Te(){return Ne(this.a)};var kc=Zd(10);kd(11,1,{},We);_.H=function Ye(){return Ve(this)};_.G=function Xe(){return this.b};_.b=false;var jc=Zd(11);kd(100,99,{28:1});_.k=function Ze(a){var b,c,d,e,f;if(a===this){return true}if(!vb(a,28)){return false}f=a;if(this.F()!=f.F()){return false}e=f.C();for(c=this.C();c.G();){b=c.H();d=e.H();if(!(zb(b)===zb(d)||b!=null&&o(b,d))){return false}}return true};_.m=function $e(){return Jf(this)};_.C=function _e(){return new bf(this)};_.J=function af(a){return new ef(this,a)};var oc=Zd(100);kd(40,1,{},bf);_.G=function cf(){return this.a<this.b.F()};_.H=function df(){Wg(this.a<this.b.F());return this.b.I(this.a++)};_.a=0;var mc=Zd(40);kd(54,40,{},ef);var nc=Zd(54);kd(27,103,{33:1},ff);_.D=function gf(a){return He(this.a,a)};_.C=function hf(){var a;return a=new We((new Qe(this.a)).a),new kf(a)};_.F=function jf(){return Ne(this.a)};var qc=Zd(27);kd(19,1,{},kf);_.G=function lf(){return this.a.b};_.H=function mf(){var a;return a=Ve(this.a),a.K()};var pc=Zd(19);kd(66,1,Ki);_.k=function nf(a){var b;if(!vb(a,18)){return false}b=a;return Mg(this.a,b.K())&&Mg(this.b,b.L())};_.K=function of(){return this.a};_.L=function pf(){return this.b};_.m=function qf(){return Ng(this.a)^Ng(this.b)};_.M=function rf(a){var b;b=this.b;this.b=a;return b};var rc=Zd(66);kd(67,66,Ki,sf);var sc=Zd(67);kd(106,1,Ki);_.k=function tf(a){var b;if(!vb(a,18)){return false}b=a;return Mg(this.b.value[0],b.K())&&Mg(ug(this),b.L())};_.m=function uf(){return Ng(this.b.value[0])^Ng(ug(this))};var tc=Zd(106);kd(105,100,{28:1});_.I=function vf(b){var c;c=this.J(b);try{return c.H()}catch(a){a=ad(a);if(vb(a,32)){throw bd(new ne("Can't get element "+b))}else throw bd(a)}};_.C=function wf(){return this.J(0)};var vc=Zd(105);kd(48,100,{3:1,28:1},Af);_.D=function Bf(a){return yf(this,a,0)!=-1};_.I=function Cf(a){return Xg(a,this.a.length),this.a[a]};_.C=function Df(){return new Ff(this)};_.F=function Ef(){return this.a.length};var yc=Zd(48);kd(69,1,{},Ff);_.G=function Gf(){return this.a<this.c.a.length};_.H=function Hf(){Wg(this.a<this.c.a.length);this.b=this.a++;return this.c.a[this.b]};_.a=0;_.b=-1;var xc=Zd(69);var Mf;kd(83,12,si,Qf);var zc=Zd(83);kd(23,68,{3:1,23:1,85:1},Sf);var Ac=Zd(23);kd(37,103,{3:1,33:1},Vf);_.D=function Wf(a){return Uf(this,a)};_.C=function Xf(){var a;return a=new We((new Qe((new ff(this.a)).a)).a),new kf(a)};_.F=function Yf(){return Ne(this.a)};var Bc=Zd(37);kd(79,1,{},bg);_.C=function cg(){return new dg(this)};_.c=0;var Dc=Zd(79);kd(43,1,{},dg);_.H=function fg(){return this.d=this.a[this.c++],this.d};_.G=function eg(){var a;if(this.c<this.a.length){return true}a=this.b.next();if(!a.done){this.a=a.value[1];this.c=0;return true}return false};_.c=0;_.d=null;var Cc=Zd(43);var gg;kd(80,1,{},pg);_.C=function qg(){return new rg(this)};_.c=0;_.d=0;var Gc=Zd(80);kd(44,1,{},rg);_.H=function tg(){return this.c=this.a,this.a=this.b.next(),new vg(this.d,this.c,this.d.d)};_.G=function sg(){return !this.a.done};var Ec=Zd(44);kd(81,106,Ki,vg);_.K=function wg(){return this.b.value[0]};_.L=function xg(){return ug(this)};_.M=function yg(a){return og(this.a,this.b.value[0],a)};_.c=0;var Fc=Zd(81);kd(30,105,{3:1,28:1},Eg);_.J=function Fg(a){var b,c;Zg(a,this.b);if(a>=this.b>>1){c=this.c;for(b=this.b;b>a;--b){c=c.b}}else{c=this.a.a;for(b=0;b<a;++b){c=c.a}}return new Hg(this,a,c)};_.F=function Gg(){return this.b};_.b=0;var Jc=Zd(30);kd(78,1,{},Hg);_.G=function Ig(){return this.b!=this.d.c};_.H=function Jg(){Wg(this.b!=this.d.c);this.c=this.b;this.b=this.b.a;++this.a;return this.c.c};_.a=0;_.c=null;var Hc=Zd(78);kd(31,1,{},Kg);var Ic=Zd(31);kd(32,12,{3:1,4:1,32:1},Lg);var Kc=Zd(32);kd(77,1,{},Ug);_.a=0;_.b=0;var Og,Pg,Qg=0;var Lc=Zd(77);kd(513,1,{});kd(502,1,{});var ah=0;var dh,eh=0,fh;kd(504,1,{});var lh;kd(5,1,{},rh,sh);_.a=0;_.b=0;_.c=0;_.d=0;var mh,nh,oh,ph;var Mc=Zd(5);kd(24,35,Ji,xh);var th,uh,vh;var Nc=$d(24,yh);kd(45,1,{45:1},Bh);var zh;var Oc=Zd(45);kd(25,1,{25:1},Ch);var Qc=Zd(25);kd(14,35,Ji,Jh);var Dh,Eh,Fh,Gh,Hh;var Pc=$d(14,Kh);kd(9,1,{9:1},Lh);_.k=function Mh(a){var b;if(this===a)return true;if(a==null)return false;if(Rc!=q(a))return false;b=a;if(this.a!=b.a)return false;if(this.b!=b.b)return false;return true};_.m=function Nh(){var a;a=31+this.a;a=31*a+this.b;return a};_.a=0;_.b=0;var Rc=Zd(9);kd(82,1,{},Sh);_.a=false;var Sc=Zd(82);kd(70,1,{},Zh);_.b=0;var Tc=Zd(70);kd(49,1,{},ei);var Zc=Zd(49);kd(60,1,{},fi);_.handleEvent=function gi(a){_h(this.a,a)};var Uc=Zd(60);kd(61,1,{},hi);_.handleEvent=function ii(a){$h(this.a)};var Vc=Zd(61);kd(62,1,{},ji);_.handleEvent=function ki(a){ai(this.a,a)};var Wc=Zd(62);kd(63,1,{},li);_.handleEvent=function mi(a){bi(this.a,a)};var Xc=Zd(63);kd(64,1,{},ni);_.handleEvent=function oi(a){ci(this.a,a)};var Yc=Zd(64);var Cb=_d('I');var Bb=_d('D');var pi=(L(),O);var gwtOnLoad=gwtOnLoad=fd;dd(pd);gd('permProps',[[[Zi,$i],[_i,Ai]],[[Zi,$i],[_i,Ei]],[[Zi,$i],[_i,Gi]],[[Zi,$i],[_i,Fi]],[[Zi,$i],[_i,Ci]]]);if (ddm_MatchGame) ddm_MatchGame.onScriptLoad(gwtOnLoad);})();