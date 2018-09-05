
function ddm_MatchGame(){var Jb='',Kb=0,Lb='gwt.codesvr=',Mb='gwt.hosted=',Nb='gwt.hybrid',Ob='ddm.MatchGame',Pb='__gwt_marker_ddm.MatchGame',Qb='<script id="',Rb='"><\/script>',Sb='SCRIPT',Tb='#',Ub='?',Vb='/',Wb=1,Xb='base',Yb='img',Zb='clear.cache.gif',$b='meta',_b='name',ac='gwt:property',bc='content',cc='=',dc='gwt:onPropertyErrorFn',ec='Bad handler "',fc='" for "gwt:onPropertyErrorFn"',gc='gwt:onLoadErrorFn',hc='" for "gwt:onLoadErrorFn"',ic='user.agent',jc='webkit',kc='safari',lc='msie',mc=10,nc=11,oc='ie10',pc=9,qc='ie9',rc=8,sc='ie8',tc='gecko',uc='gecko1_8',vc=2,wc=3,xc=4,yc='Single-script hosted mode not yet implemented. See issue ',zc='http://code.google.com/p/google-web-toolkit/issues/detail?id=2079',Ac='154CF843BA6578DC39A710A4F46C1680',Bc=':1',Cc=':2',Dc=':3',Ec=':4',Fc=':',Gc='DOMContentLoaded',Hc=50;var k=Jb,l=Kb,m=Lb,n=Mb,o=Nb,p=Ob,q=Pb,r=Qb,s=Rb,t=Sb,u=Tb,v=Ub,w=Vb,A=Wb,B=Xb,C=Yb,D=Zb,F=$b,G=_b,H=ac,I=bc,J=cc,K=dc,L=ec,M=fc,N=gc,O=hc,P=ic,Q=jc,R=kc,S=lc,T=mc,U=nc,V=oc,W=pc,X=qc,Y=rc,Z=sc,$=tc,_=uc,ab=vc,bb=wc,cb=xc,db=yc,eb=zc,fb=Ac,gb=Bc,hb=Cc,ib=Dc,jb=Ec,kb=Fc,lb=Gc,mb=Hc;var nb=window,ob=document,pb,qb,rb=k,sb={},tb=[],ub=[],vb=[],wb=l,xb,yb;if(!nb.__gwt_stylesLoaded){nb.__gwt_stylesLoaded={}}if(!nb.__gwt_scriptsLoaded){nb.__gwt_scriptsLoaded={}}function zb(){var b=false;try{var c=nb.location.search;return (c.indexOf(m)!=-1||(c.indexOf(n)!=-1||nb.external&&nb.external.gwtOnLoad))&&c.indexOf(o)==-1}catch(a){}zb=function(){return b};return b}
function Ab(){if(pb&&qb){pb(xb,p,rb,wb)}}
function Bb(){var e,f=q,g;ob.write(r+f+s);g=ob.getElementById(f);e=g&&g.previousSibling;while(e&&e.tagName!=t){e=e.previousSibling}function h(a){var b=a.lastIndexOf(u);if(b==-1){b=a.length}var c=a.indexOf(v);if(c==-1){c=a.length}var d=a.lastIndexOf(w,Math.min(c,b));return d>=l?a.substring(l,d+A):k}
;if(e&&e.src){rb=h(e.src)}if(rb==k){var i=ob.getElementsByTagName(B);if(i.length>l){rb=i[i.length-A].href}else{rb=h(ob.location.href)}}else if(rb.match(/^\w+:\/\//)){}else{var j=ob.createElement(C);j.src=rb+D;rb=h(j.src)}if(g){g.parentNode.removeChild(g)}}
function Cb(){var b=document.getElementsByTagName(F);for(var c=l,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(G),g;if(f){if(f==H){g=e.getAttribute(I);if(g){var h,i=g.indexOf(J);if(i>=l){f=g.substring(l,i);h=g.substring(i+A)}else{f=g;h=k}sb[f]=h}}else if(f==K){g=e.getAttribute(I);if(g){try{yb=eval(g)}catch(a){alert(L+g+M)}}}else if(f==N){g=e.getAttribute(I);if(g){try{xb=eval(g)}catch(a){alert(L+g+O)}}}}}}
__gwt_isKnownPropertyValue=function(a,b){return b in tb[a]};__gwt_getMetaProperty=function(a){var b=sb[a];return b==null?null:b};function Db(a,b){var c=vb;for(var d=l,e=a.length-A;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function Eb(a){var b=ub[a](),c=tb[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(yb){yb(a,d,b)}throw null}
ub[P]=function(){var a=navigator.userAgent.toLowerCase();var b=ob.documentMode;if(function(){return a.indexOf(Q)!=-1}())return R;if(function(){return a.indexOf(S)!=-1&&(b>=T&&b<U)}())return V;if(function(){return a.indexOf(S)!=-1&&(b>=W&&b<U)}())return X;if(function(){return a.indexOf(S)!=-1&&(b>=Y&&b<U)}())return Z;if(function(){return a.indexOf($)!=-1||b>=U}())return _;return k};tb[P]={'gecko1_8':l,'ie10':A,'ie8':ab,'ie9':bb,'safari':cb};ddm_MatchGame.onScriptLoad=function(a){ddm_MatchGame=null;pb=a;Ab()};if(zb()){alert(db+eb);return}Bb();Cb();try{var Fb;Db([_],fb);Db([V],fb+gb);Db([Z],fb+hb);Db([X],fb+ib);Db([R],fb+jb);Fb=vb[Eb(P)];var Gb=Fb.indexOf(kb);if(Gb!=-1){wb=Number(Fb.substring(Gb+A))}}catch(a){return}var Hb;function Ib(){if(!qb){qb=true;Ab();if(ob.removeEventListener){ob.removeEventListener(lb,Ib,false)}if(Hb){clearInterval(Hb)}}}
if(ob.addEventListener){ob.addEventListener(lb,function(){Ib()},false)}var Hb=setInterval(function(){if(/loaded|complete/.test(ob.readyState)){Ib()}},mb)}
ddm_MatchGame();(function () {var $gwt_version = "2.8.2";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {$wnd.__gwtStatsEvent(a)} : null;var $strongName = '154CF843BA6578DC39A710A4F46C1680';function m(){}
function Y(){}
function qd(){}
function md(){}
function wd(){}
function zd(){}
function Cd(){}
function Fd(){}
function Id(){}
function fb(){}
function ib(){}
function Og(){}
function Xh(){}
function Oh(a,b){}
function Wd(){Wd=md}
function Wf(){Qe(this)}
function ff(a){this.b=a}
function kf(a){this.a=a}
function of(a){this.a=a}
function oi(a){this.a=a}
function ci(a){this.a=a}
function ki(a){this.a=a}
function mi(a){this.a=a}
function qi(a){this.a=a}
function si(a){this.a=a}
function se(a){this.a=a}
function Ue(a){this.a=a}
function ui(a){this.a=a}
function wi(a){this.a=a}
function Jf(a){this.c=a}
function Zf(){this.a=new Wf}
function D(){D=md;C=new m}
function V(){V=md;U=new Y}
function lg(){lg=md;kg=ng()}
function Pg(){B.call(this)}
function qe(){B.call(this)}
function ye(){B.call(this)}
function Uf(){B.call(this)}
function Ce(a){re.call(this,a)}
function Ch(a,b,c){this.a=c}
function cd(a){return a.b}
function Zd(a){Yd(a);return a.j}
function pg(){lg();return new kg}
function jb(a,b){return fe(a,b)}
function Yf(a,b){return Le(a.a,b)}
function Re(a){return a.a.c+a.b.c}
function rg(a,b){return a.a.get(b)}
function Dg(a,b){Eg(a,b,a.c.b,a.c)}
function Wh(a,b,c){bi(ph.d,a,b,c)}
function cb(a){bb();ab.q(a)}
function B(){t(this);this.o()}
function wf(a,b){this.a=a;this.b=b}
function Hh(a,b){this.a=a;this.b=b}
function Qh(a,b){this.a=a;this.b=b}
function fg(a){this.a=pg();this.b=a}
function tg(a){this.a=pg();this.b=a}
function zb(a){return a==null?null:a}
function Rg(a){return a!=null?s(a):0}
function Je(a){return !a?null:a.M()}
function Be(a,b){return ah(a),a===b}
function gh(a){return a.$H||(a.$H=++fh)}
function fd(){dd==null&&(dd=[])}
function L(){L=md;!!(bb(),ab)}
function Rf(){Rf=md;Qf=new Yg}
function T(){I!=0&&(I=0);K=-1}
function kh(){kh=md;hh=new m;jh=new m}
function Zg(a){if(!a){throw cd(new qe)}}
function $g(a){if(!a){throw cd(new Pg)}}
function S(a){$wnd.clearTimeout(a)}
function Yd(a){if(a.j!=null){return}je(a)}
function u(a,b){a.b=b;b!=null&&eh(b,Ai,a)}
function vb(a,b){return a!=null&&tb(a,b)}
function xb(a){return typeof a==='number'}
function yb(a){return typeof a==='string'}
function wb(a){return typeof a==='boolean'}
function M(a,b,c){return a.apply(b,c);var d}
function Zh(a,b,c,d){a.a.fillText(b,c,d)}
function $h(a,b,c,d,e){a.a.fillRect(b,c,d,e)}
function eh(b,c,d){try{b[c]=d}catch(a){}}
function Gh(a){Fh();Ne(Eh,a)?Me(Eh,a):a}
function Ef(){this.a=mb(dc,Ci,1,0,5,1)}
function xe(){xe=md;we=mb(_b,Ci,17,256,0,1)}
function re(a){this.c=a;t(this);this.o()}
function ud(a){this.c=a;t(this);this.o()}
function zg(a,b,c){this.a=a;this.b=b;this.c=c}
function Lg(a,b,c){this.d=a;this.b=c;this.a=b}
function Vh(a,b,c){ai(ph.d,c);$h(ph.d,0,0,a,b)}
function oh(a,b){return new Qh(b.a-a.a,b.b-a.b)}
function Yh(a){var b;b=new Xh;b.a=a;return b}
function be(a){var b;b=ae(a);ne(a,b);return b}
function de(a){var b;b=ae(a);b.i=a;b.e=1;return b}
function t(a){a.d&&a.b!==zi&&a.o();return a}
function Bf(a,b){a.a[a.a.length]=b;return true}
function Z(a,b){!a&&(a=[]);a[a.length]=b;return a}
function qg(a,b){return !(a.a.get(b)===undefined)}
function Le(a,b){return yb(b)?Ne(a,b):!!dg(a.a,b)}
function Oe(a,b,c){return yb(b)?Pe(a,b,c):eg(a.a,b,c)}
function kb(a,b,c,d,e,f){return lb(a,b,c,d,e,0,f)}
function Fg(a){$g(a.b!=0);return Gg(a,a.a.a)}
function Qe(a){a.a=new fg(a);a.b=new tg(a);Tf(a)}
function Ig(){this.a=new Og;this.c=new Og;Hg(this)}
function ah(a){if(a==null){throw cd(new ye)}return a}
function nh(){if(ih==256){hh=jh;jh=new m;ih=0}++ih}
function ob(a){return Array.isArray(a)&&a.Q===qd}
function ub(a){return !Array.isArray(a)&&a.Q===qd}
function Vf(a,b){return zb(a)===zb(b)||a!=null&&o(a,b)}
function Qg(a,b){return zb(a)===zb(b)||a!=null&&o(a,b)}
function Ne(a,b){return b==null?!!dg(a.a,null):qg(a.b,b)}
function Me(a,b){return b==null?Je(dg(a.a,null)):rg(a.b,b)}
function Xf(a,b){var c;c=Oe(a.a,b,a);return c==null}
function ce(a,b){var c;c=ae(a);ne(a,c);c.e=b?8:0;return c}
function jf(a,b){ff.call(this,a);bh(b,a.G());this.a=b}
function Ae(a,b){dh(b,a.length);return a.charCodeAt(b)}
function bh(a,b){if(a<0||a>b){throw cd(new re(Xi+a+Yi+b))}}
function _g(a,b){if(a<0||a>=b){throw cd(new re(Xi+a+Yi+b))}}
function dh(a,b){if(a<0||a>=b){throw cd(new Ce(Xi+a+Yi+b))}}
function bi(a,b,c,d){a.b=d;a.a.font=c.a+' '+d+'px '+b}
function Hg(a){a.a.a=a.c;a.c.b=a.a;a.a.b=a.c.a=null;a.b=0}
function Tf(a){var b,c;c=a;b=c.$modCount|0;c.$modCount=b+1}
function fe(a,b){var c=a.a=a.a||[];return c[b]||(c[b]=a.u(b))}
function cg(a,b){var c;c=a.a.get(b);return c==null?new Array:c}
function P(a,b,c){var d;d=N();try{return M(a,b,c)}finally{Q(d)}}
function Pe(a,b,c){return b==null?eg(a.a,null,c):sg(a.b,b,c)}
function dg(a,b){var c;return bg(b,cg(a,b==null?0:(c=s(b),c|0)))}
function Dh(){Bh();return pb(jb(Nc,1),Ci,23,0,[yh,zh,Ah])}
function Ph(){Nh();return pb(jb(Pc,1),Ci,14,0,[Mh,Jh,Ih,Lh,Kh])}
function R(a){L();$wnd.setTimeout(function(){throw a},0)}
function Sf(a,b){if(b.$modCount!=a.$modCount){throw cd(new Uf)}}
function he(a){if(a.C()){return null}var b=a.i;return jd[b]}
function od(a){function b(){}
;b.prototype=a||{};return new b}
function w(b){if(!('stack' in b)){try{throw b}catch(a){}}return b}
function Ze(a){var b;Sf(a.d,a);$g(a.b);b=a.a.I();a.b=Ye(a);return b}
function Df(a,b,c){var d;d=(_g(b,a.a.length),a.a[b]);a.a[b]=c;return d}
function Of(a,b){var c;for(c=a.a.length-1;c>=1;c--){Pf(a,c,Wg(b,c+1))}}
function xh(a,b,c){vh();this.d=a;this.c=b;this.b=c;this.a=255}
function hg(a){this.e=a;this.b=this.e.a.entries();this.a=new Array}
function vg(a){this.d=a;this.b=this.d.a.entries();this.a=this.b.next()}
function bb(){bb=md;var a,b;b=!eb();a=new ib;ab=b?new fb:a}
function Eg(a,b,c,d){var e;e=new Og;e.c=b;e.b=c;e.a=d;d.b=c.a=e;++a.b}
function Th(a,b,c,d,e){return !!e&&e.a>=a&&e.b>=b&&e.a<=a+c&&e.b<=b+d}
function H(){if(Date.now){return Date.now()}return (new Date).getTime()}
function O(b){L();return function(){return P(b,this,arguments);var a}}
function Ab(a){return Math.max(Math.min(a,2147483647),-2147483648)|0}
function Q(a){a&&X((V(),U));--I;if(a){if(K!=-1){S(K);K=-1}}}
function ii(a){if(a.g.b!=0){a.f=Fg(a.g);a.h=a.f.a}a.e.b==0||Fg(a.e)}
function yg(a){if(a.a.d!=a.c){return rg(a.a,a.b.value[0])}return a.b.value[1]}
function Cf(a,b,c){for(;c<a.a.length;++c){if(Qg(b,a.a[c])){return c}}return -1}
function mb(a,b,c,d,e,f){var g;g=nb(e,d);e!=10&&pb(jb(a,f),b,c,e,g);return g}
function wh(a,b,c){this.d=Ab(a*256);this.c=Ab(b*256);this.b=Ab(c*256);this.a=255}
function di(a){ii(a);Ud(ph.a.clientWidth,ph.a.clientHeight);a.f=null;Hg(a.b)}
function ei(a,b){var c,d;c=b;Dg(a.e,new Gh((d=c.code,c.key.length==1,d)));di(a)}
function Gg(a,b){var c;c=b.c;b.a.b=b.b;b.b.a=b.a;b.a=b.b=null;b.c=null;--a.b;return c}
function X(a){var b,c;if(a.b){c=null;do{b=a.b;a.b=null;c=$(b,c)}while(a.b);a.b=c}}
function W(a){var b,c;if(a.a){c=null;do{b=a.a;a.a=null;c=$(b,c)}while(a.a);a.a=c}}
function td(){var a,b,c;b=ad();a=b.r();c=b.s();if(!Be(a,c)){throw cd(new vd(a,c))}}
function bd(a){var b;if(vb(a,4)){return a}b=a&&a[Ai];if(!b){b=new F(a);cb(b)}return b}
function ne(a,b){var c;if(!a){return}b.i=a;var d=he(b);if(!d){jd[a]=[b];return}d.O=b}
function nd(a,b,c){var d=function(){return a.apply(d,arguments)};b.apply(d,c);return d}
function ae(a){var b;b=new $d;b.j='Class$'+(a?'S'+a:''+b.g);b.b=b.j;b.h=b.j;return b}
function Mf(a){var b,c,d;d=0;for(c=a.D();c.H();){b=c.I();d=d+(b!=null?s(b):0);d=d|0}return d}
function Nf(a){var b,c,d;d=1;for(c=a.D();c.H();){b=c.I();d=31*d+(b!=null?s(b):0);d=d|0}return d}
function Fe(a,b){var c,d;ah(b);for(d=b.D();d.H();){c=d.I();if(!a.F(c)){return false}}return true}
function bg(a,b){var c,d,e;for(d=0,e=b.length;d<e;++d){c=b[d];if(Vf(a,c.L())){return c}}return null}
function ed(){fd();var a=dd;for(var b=0;b<arguments.length;b++){a.push(arguments[b])}}
function Fh(){Fh=md;Eh=new Wf;Pe(Eh,'ArrowLeft','Left');Pe(Eh,'ArrowRight','Right')}
function Bh(){Bh=md;yh=new Ch('BOLD',0,'bold');zh=new Ch('ITALIC',1,'italic');Ah=new Ch('PLAIN',2,'normal')}
function $e(a){this.d=a;this.c=new vg(this.d.b);this.a=this.c;this.b=Ye(this);this.$modCount=a.$modCount}
function $d(){this.g=Xd++;this.j=null;this.h=null;this.f=null;this.d=null;this.b=null;this.i=null;this.a=null}
function F(a){D();t(this);this.b=a;a!=null&&eh(a,Ai,this);this.c=a==null?'null':pd(a);this.a=a}
function Ye(a){if(a.a.H()){return true}if(a.a!=a.c){return false}a.a=new hg(a.d.a);return a.a.H()}
function db(a){var b=/function(?:\s+([\w$]+))?\s*\(/;var c=b.exec(a);return c&&c[1]||'anonymous'}
function ve(a){var b,c;if(a>-129&&a<128){b=a+128;c=(xe(),we)[b];!c&&(c=we[b]=new se(a));return c}return new se(a)}
function Ee(a,b){var c,d;for(d=a.D();d.H();){c=d.I();if(zb(b)===zb(c)||b!=null&&o(b,c)){return true}}return false}
function pb(a,b,c,d,e){e.O=a;e.P=b;e.Q=qd;e.__elementTypeId$=c;e.__elementTypeCategory$=d;return e}
function hd(a,b){typeof window==='object'&&typeof window['$gwt']==='object'&&(window['$gwt'][a]=b)}
function _h(a,b){return new Qh(Ab(a.a.measureText(b).width),Ab($wnd.Math.round(a.b/1.3329999446868896)))}
function q(a){return yb(a)?gc:xb(a)?Vb:wb(a)?Tb:ub(a)?a.O:ob(a)?a.O:a.O||Array.isArray(a)&&jb(Eb,1)||Eb}
function Pf(a,b,c){var d;d=(_g(b,a.a.length),a.a[b]);Df(a,b,(_g(c,a.a.length),a.a[c]));_g(c,a.a.length);a.a[c]=d}
function sg(a,b,c){var d;d=a.a.get(b);a.a.set(b,c===undefined?null:c);if(d===undefined){++a.c;Tf(a.b)}else{++a.d}return d}
function fi(a,b){var c,d,e;d=b;e=new Qh(Ab(d.clientX),Ab(d.clientY));Dg(a.g,new Hh(e,(c=(Nh(),Jh),oh(a.h,e),c)));di(a)}
function gi(a,b){var c,d,e;d=b;e=new Qh(Ab(d.clientX),Ab(d.clientY));Dg(a.g,new Hh(e,(c=(Nh(),Mh),oh(a.h,e),c)));di(a)}
function rd(){$wnd.setTimeout(yi(td));sd();ph=new ji($wnd.window.document.getElementById('matchgame-canvas'));di(ph)}
function Nh(){Nh=md;Mh=new Oh('UP',0);Jh=new Oh('DOWN',1);Ih=new Oh('CLICK',2);Lh=new Oh('MOVE',3);Kh=new Oh('DRAG',4)}
function ad(){switch(_c){case 1:return new zd;case 4:return new Id;case 0:return new wd;case 2:return new Cd;}return new Fd}
function N(){var a;if(I!=0){a=H();if(a-J>2000){J=a;K=$wnd.setTimeout(T,10)}}if(I++==0){W((V(),U));return true}return false}
function pd(a){var b;if(Array.isArray(a)&&a.Q===qd){return Zd(q(a))+'@'+(b=s(a)>>>0,b.toString(16))}return a.toString()}
function Yg(){Vg();var a,b,c;c=Ug+++Date.now();a=Ab($wnd.Math.floor(c*Vi))&16777215;b=Ab(c-a*Wi);this.a=a^1502;this.b=b^Ui}
function me(a,b){var c=0;while(!b[c]||b[c]==''){c++}var d=b[c++];for(;c<b.length;c++){if(!b[c]||b[c]==''){continue}d+=a+b[c]}return d}
function eb(){if(Error.stackTraceLimit>0){$wnd.Error.stackTraceLimit=Error.stackTraceLimit=64;return true}return 'stack' in new Error}
function Wg(a,b){var c,d;Zg(b>0);if((b&-b)==b){return Ab(b*Xg(a)*4.6566128730773926E-10)}do{c=Xg(a);d=c%b}while(c-d+(b-1)<0);return Ab(d)}
function mh(a){kh();var b,c,d;c=':'+a;d=jh[c];if(d!=null){return Ab((ah(d),d))}d=hh[c];b=d==null?lh(a):Ab((ah(d),d));nh();jh[c]=b;return b}
function s(a){return yb(a)?mh(a):xb(a)?Ab((ah(a),a)):wb(a)?(ah(a),a)?1231:1237:ub(a)?a.m():ob(a)?gh(a):!!a&&!!a.hashCode?a.hashCode():gh(a)}
function o(a,b){return yb(a)?Be(a,b):xb(a)?(ah(a),a===b):wb(a)?(ah(a),a===b):ub(a)?a.k(b):ob(a)?a===b:!!a&&!!a.equals?a.equals(b):zb(a)===zb(b)}
function hi(a,b){var c,d,e;c=b;d=new Qh(Ab(c.clientX),Ab(c.clientY));e=c.buttons>0?(Nh(),Kh):(Nh(),Lh);Dg(a.g,new Hh(d,(oh(a.h,d),e)));di(a)}
function tb(a,b){if(yb(a)){return !!sb[b]}else if(a.P){return !!a.P[b]}else if(xb(a)){return !!rb[b]}else if(wb(a)){return !!qb[b]}return false}
function nb(a,b){var c=new Array(b);var d;switch(a){case 14:case 15:d=0;break;case 16:d=false;break;default:return c;}for(var e=0;e<b;++e){c[e]=d}return c}
function vd(a,b){var c;ud.call(this,(c=Ei+a+') '+Fi+b+Gi+Hi==null?'null':pd(Ei+a+') '+Fi+b+Gi+Hi),vb(Ei+a+') '+Fi+b+Gi+Hi,4)?Ei+a+') '+Fi+b+Gi+Hi:null,c))}
function ai(a,b){var c,d,e,f;f=b.d;e=b.c;d=b.b;c=b.a;c==255?(a.a.fillStyle='rgb('+f+', '+e+', '+d+')'):(a.a.fillStyle='rgb('+f+', '+e+', '+d+', '+c/255+')')}
function gd(b,c,d,e){fd();var f=dd;$moduleName=c;$moduleBase=d;_c=e;function g(){for(var a=0;a<f.length;a++){f[a]()}}
if(b){try{yi(g)()}catch(a){b(c,a)}}else{yi(g)()}}
function De(a,b){var c,d,e,f,g,h;ah(b);c=false;for(e=(h=new $e((new Ue((new kf(b.a)).a)).a),new of(h));e.a.b;){d=(f=Ze(e.a),f.L());c=c|(g=Oe(a.a,d,a),g==null)}return c}
function Td(){var a,b,c,d,e,f;if(Re(Qd.a)!=2){return}e=(f=new $e((new Ue((new kf(Qd.a)).a)).a),new of(f));a=(d=Ze(e.a),d.L());b=(c=Ze(e.a),c.L());if(Rd[a.a][a.b]===Rd[b.a][b.b]){De(Od,Qd);Qe(Qd.a)}}
function lb(a,b,c,d,e,f,g){var h,i,j,k,l;k=e[f];j=f==g-1;h=j?d:0;l=nb(h,k);d!=10&&pb(jb(a,g-f),b[f],c[f],h,l);if(!j){++f;for(i=0;i<k;++i){l[i]=lb(a,b,c,d,e,f,g)}}return l}
function Vg(){Vg=md;var a,b,c,d;Sg=mb(Bb,Ci,45,25,15,1);Tg=mb(Bb,Ci,45,33,15,1);d=1.52587890625E-5;for(b=32;b>=0;b--){Tg[b]=d;d*=0.5}c=1;for(a=24;a>=0;a--){Sg[a]=c;c*=0.5}}
function ng(){function b(){try{return (new Map).entries().next().done}catch(a){return false}}
if(typeof Map==='function'&&Map.prototype.entries&&b()){return Map}else{return og()}}
function $(b,c){var d,e,f,g;for(e=0,f=b.length;e<f;e++){g=b[e];try{g[1]?g[0].R()&&(c=Z(c,g)):g[0].R()}catch(a){a=bd(a);if(vb(a,4)){d=a;L();R(vb(d,20)?d.p():d)}else throw cd(a)}}return c}
function kd(){jd={};!Array.isArray&&(Array.isArray=function(a){return Object.prototype.toString.call(a)==='[object Array]'});function b(){return (new Date).getTime()}
!Date.now&&(Date.now=b)}
function Vd(){var a,b,c,d,e;d=new Ef;for(b=0;b<Nd*Nd;b++){Bf(d,ve(1+(b/2|0)))}Of(d,(Rf(),Qf));for(a=0;a<Nd;a++){for(c=0;c<Nd;c++){Rd[a][c]=(e=(_g(0,d.a.length),d.a[0]),d.a.splice(0,1),e).a}}}
function He(a,b){var c,d,e;c=b.L();e=b.M();d=yb(c)?Me(a,c):Je(dg(a.a,c));if(!(zb(e)===zb(d)||e!=null&&o(e,d))){return false}if(d==null&&!(yb(c)?Ne(a,c):!!dg(a.a,c))){return false}return true}
function Sd(){Sd=md;Pd=(vh(),sh);Rd=kb(Cb,[Ci,Ci],[653,45],15,[Nd,Nd],2);Od=new Zf;Qd=new Zf;Vd();Pd=new xh(196+Ab($wnd.Math.random()*64),196+Ab($wnd.Math.random()*64),196+Ab($wnd.Math.random()*64))}
function Xg(a){var b,c,d,e,f,g;e=a.a*Ui+a.b*1502;g=a.b*Ui+11;b=$wnd.Math.floor(g*Vi);e+=b;g-=b*Wi;e%=Wi;a.a=e;a.b=g;d=a.a*128;f=$wnd.Math.floor(a.b*Tg[31]);c=d+f;c>=2147483648&&(c-=4294967296);return c}
function eg(a,b,c){var d,e,f,g,h;h=b==null?0:(g=s(b),g|0);e=(d=a.a.get(h),d==null?new Array:d);if(e.length==0){a.a.set(h,e)}else{f=bg(b,e);if(f){return f.N(c)}}e[e.length]=new wf(b,c);++a.c;Tf(a.b);return null}
function ld(a,b,c){var d=jd,h;var e=d[a];var f=e instanceof Array?e[0]:null;if(e&&!f){_=e}else{_=(h=b&&b.prototype,!h&&(h=jd[b]),od(h));_.P=c;!b&&(_.Q=qd);d[a]=_}for(var g=3;g<arguments.length;++g){arguments[g].prototype=_}f&&(_.O=f)}
function je(a){if(a.B()){var b=a.c;b.C()?(a.j='['+b.i):!b.B()?(a.j='[L'+b.w()+';'):(a.j='['+b.w());a.b=b.v()+'[]';a.h=b.A()+'[]';return}var c=a.f;var d=a.d;d=d.split('/');a.j=me('.',[c,me('$',d)]);a.b=me('.',[c,me('.',d)]);a.h=d[d.length-1]}
function Uh(a,b,c,d,e,f,g,h){var i;if(g){ai(ph.d,g);$h(ph.d,a,b,c,d)}if(!!h&&Th(a,b,c,d,ph.h)){ai(ph.d,h);$h(ph.d,a,b,c,d)}ai(ph.d,f);i=_h(ph.d,e);Zh(ph.d,e,a+(c/2|0)-(i.a/2|0),b+(d/2|0)+(i.b/2|0));return Yh(!!ph.f&&ph.f.b==(Nh(),Jh)&&Th(a,b,c,d,ph.f.a))}
function vh(){vh=md;qh=new xh(0,0,0);new xh(128,128,128);rh=new wh(Zi,Zi,Zi);new wh($i,$i,$i);new wh(_i,_i,_i);new wh(aj,aj,aj);new wh(0.5,0.5,0.5);sh=new wh(bj,bj,bj);new wh(cj,cj,cj);th=new wh(dj,dj,dj);new wh(ej,ej,ej);uh=new wh(fj,fj,fj);new xh(255,255,255);new xh(255,255,0)}
function lh(a){var b,c,d,e;b=0;d=a.length;e=d-4;c=0;while(c<e){b=(dh(c+3,a.length),a.charCodeAt(c+3)+(dh(c+2,a.length),31*(a.charCodeAt(c+2)+(dh(c+1,a.length),31*(a.charCodeAt(c+1)+(dh(c,a.length),31*(a.charCodeAt(c)+31*b)))))));b=b|0;c+=4}while(c<d){b=b*31+Ae(a,c++)}b=b|0;return b}
function mg(){if(!Object.create||!Object.getOwnPropertyNames){return false}var a='__proto__';var b=Object.create(null);if(b[a]!==undefined){return false}var c=Object.getOwnPropertyNames(b);if(c.length!=0){return false}b[a]=42;if(b[a]!==42){return false}if(Object.getOwnPropertyNames(b).length==0){return false}return true}
function ji(a){this.b=new Ig;this.e=new Ig;this.g=new Ig;this.h=new Qh(0,0);this.a=a;this.c=a.getContext('2d');this.d=new ci(this.c);$wnd.window.setTimeout(nd(ki.prototype.t,ki,[this]),1);$wnd.window.document.addEventListener('keydown',new mi(this));$wnd.window.window.addEventListener('onload',new oi(this));$wnd.window.window.addEventListener('resize',new qi(this));a.addEventListener('mousedown',new si(this));a.addEventListener('mouseup',new ui(this));a.addEventListener('mousemove',new wi(this))}
function Ud(a,b){Sd();var c,d,e,f,g,h,i,j,k,l;Vh(a,b,(vh(),uh));Wh('Arial',(Bh(),yh),20);k=$wnd.Math.min(a,b);l=(k-10*(Nd+1))/Nd|0;for(f=0;f<Nd;f++){for(i=0;i<Nd;i++){e='';d=new Qh(f,i);g=Yf(Od,d);h=Rd[f][i]==1+(Nd*Nd/2|0);(Yf(Qd,d)||g)&&(e=Rd[f][i]+'');h&&(e='Reset');c=h||g?Pd:sh;j=h||g?Pd:th;if(Uh(10+f*(10+l),10+i*(10+l),l,l,e,rh,c,j).a){if(Md){continue}Pd=new xh(196+Ab($wnd.Math.random()*64),196+Ab($wnd.Math.random()*64),196+Ab($wnd.Math.random()*64));if(h){Md=true}else{++Ld;Re(Qd.a)==2&&Qe(Qd.a);Xf(Qd,d);Td()}}}}Wh('Impact',Ah,l/2|0);Uh(b<a?k:20+l,b<a?20+l:k,l*5/2|0,l,'Clicks: '+Ld,qh,new xh(196,196,255),null);if(Md){Wh('Arial',yh,20);if(Uh(b<a?k:10,b<a?10:k,l,l,'Yes',qh,Pd,null).a){Md=false;Qe(Qd.a);Qe(Od.a);Ld=0}Uh(b<a?k+10+l:10,b<a?10:k+10+l,l,l,'No',qh,Pd,null).a&&(Md=false)}}
function og(){function e(){this.obj=this.createObject()}
;e.prototype.createObject=function(a){return Object.create(null)};e.prototype.get=function(a){return this.obj[a]};e.prototype.set=function(a,b){this.obj[a]=b};e.prototype['delete']=function(a){delete this.obj[a]};e.prototype.keys=function(){return Object.getOwnPropertyNames(this.obj)};e.prototype.entries=function(){var b=this.keys();var c=this;var d=0;return {next:function(){if(d>=b.length)return {done:true};var a=b[d++];return {value:[a,c.get(a)],done:false}}}};if(!mg()){e.prototype.createObject=function(){return {}};e.prototype.get=function(a){return this.obj[':'+a]};e.prototype.set=function(a,b){this.obj[':'+a]=b};e.prototype['delete']=function(a){delete this.obj[':'+a]};e.prototype.keys=function(){var a=[];for(var b in this.obj){b.charCodeAt(0)==58&&a.push(b.substring(1))}return a}}return e}
function sd(){var a,b,c;b=$doc.compatMode;a=pb(jb(gc,1),Ci,2,6,[Di]);for(c=0;c<a.length;c++){if(Be(a[c],b)){return}}a.length==1&&Be(Di,a[0])&&Be('BackCompat',b)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\""+b+'"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' "+b+"').<br>Modify your application's host HTML page doctype, or update your custom "+"'document.compatMode' configuration property settings."}
var zi='__noinit__',Ai='__java$exception',Bi={3:1,4:1},Ci={3:1},Di='CSS1Compat',Ei='Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (',Fi='does not match the runtime user.agent value (',Gi=').\n',Hi='Expect more errors.',Ii={34:1},Ji='gecko1_8',Ki='webkit',Li='safari',Mi='msie',Ni='ie10',Oi='ie9',Pi='ie8',Qi='gecko',Ri='unknown',Si={3:1,15:1},Ti={18:1},Ui=15525485,Vi=5.9604644775390625E-8,Wi=16777216,Xi='Index: ',Yi=', Size: ',Zi=0.10000000149011612,$i=0.20000000298023224,_i=0.30000001192092896,aj=0.4000000059604645,bj=0.6000000238418579,cj=0.699999988079071,dj=0.800000011920929,ej=0.8999999761581421,fj=0.949999988079071,gj='locale',hj='default',ij='user.agent';var _,jd,dd,_c=-1;kd();ld(1,null,{},m);_.k=function n(a){return this===a};_.l=function p(){return this.O};_.m=function r(){return gh(this)};_.equals=function(a){return this.k(a)};_.hashCode=function(){return this.m()};var qb,rb,sb;ld(37,1,{},$d);_.u=function _d(a){var b;b=new $d;b.e=4;a>1?(b.c=fe(this,a-1)):(b.c=this);return b};_.v=function ee(){Yd(this);return this.b};_.w=function ge(){return Zd(this)};_.A=function ie(){Yd(this);return this.h};_.B=function ke(){return (this.e&4)!=0};_.C=function le(){return (this.e&1)!=0};_.e=0;_.g=0;var Xd=1;var dc=be(1);var Ub=be(37);ld(4,1,Bi);_.n=function v(a){return new Error(a)};_.o=function A(){var a,b,c;c=this.c==null?null:this.c.replace(new RegExp('\n','g'),' ');b=(a=Zd(this.O),c==null?a:a+': '+c);u(this,w(this.n(b)));cb(this)};_.b=zi;_.d=true;var hc=be(4);ld(28,4,Bi);var Yb=be(28);ld(10,28,Bi);var ec=be(10);ld(39,10,Bi);var ac=be(39);ld(54,39,Bi);var Gb=be(54);ld(20,54,{20:1,3:1,4:1},F);_.p=function G(){return zb(this.a)===zb(C)?null:this.a};var C;var Db=be(20);var Eb=be(0);ld(87,1,{});var Fb=be(87);var I=0,J=0,K=-1;ld(69,87,{},Y);var U;var Hb=be(69);var ab;ld(102,1,{});var Lb=be(102);ld(55,102,{},fb);_.q=function gb(a){var b={},j;var c=[];a['fnStack']=c;var d=arguments.callee.caller;while(d){var e=(bb(),d.name||(d.name=db(d.toString())));c.push(e);var f=':'+e;var g=b[f];if(g){var h,i;for(h=0,i=g.length;h<i;h++){if(g[h]===d){return}}}(g||(b[f]=[])).push(d);d=d.caller}};var Ib=be(55);ld(103,102,{});_.q=function hb(a){};var Kb=be(103);ld(56,103,{},ib);var Jb=be(56);ld(26,4,Bi);var Xb=be(26);ld(7,26,Bi);var Sb=be(7);ld(47,7,Bi,vd);var Mb=be(47);ld(73,1,Ii,wd);_.r=function xd(){return Ji};_.s=function yd(){var a=navigator.userAgent.toLowerCase();var b=$doc.documentMode;if(function(){return a.indexOf(Ki)!=-1}())return Li;if(function(){return a.indexOf(Mi)!=-1&&b>=10&&b<11}())return Ni;if(function(){return a.indexOf(Mi)!=-1&&b>=9&&b<11}())return Oi;if(function(){return a.indexOf(Mi)!=-1&&b>=8&&b<11}())return Pi;if(function(){return a.indexOf(Qi)!=-1||b>=11}())return Ji;return Ri};var Nb=be(73);ld(71,1,Ii,zd);_.r=function Ad(){return Ni};_.s=function Bd(){var a=navigator.userAgent.toLowerCase();var b=$doc.documentMode;if(function(){return a.indexOf(Ki)!=-1}())return Li;if(function(){return a.indexOf(Mi)!=-1&&b>=10&&b<11}())return Ni;if(function(){return a.indexOf(Mi)!=-1&&b>=9&&b<11}())return Oi;if(function(){return a.indexOf(Mi)!=-1&&b>=8&&b<11}())return Pi;if(function(){return a.indexOf(Qi)!=-1||b>=11}())return Ji;return Ri};var Ob=be(71);ld(74,1,Ii,Cd);_.r=function Dd(){return Pi};_.s=function Ed(){var a=navigator.userAgent.toLowerCase();var b=$doc.documentMode;if(function(){return a.indexOf(Ki)!=-1}())return Li;if(function(){return a.indexOf(Mi)!=-1&&b>=10&&b<11}())return Ni;if(function(){return a.indexOf(Mi)!=-1&&b>=9&&b<11}())return Oi;if(function(){return a.indexOf(Mi)!=-1&&b>=8&&b<11}())return Pi;if(function(){return a.indexOf(Qi)!=-1||b>=11}())return Ji;return Ri};var Pb=be(74);ld(70,1,Ii,Fd);_.r=function Gd(){return Oi};_.s=function Hd(){var a=navigator.userAgent.toLowerCase();var b=$doc.documentMode;if(function(){return a.indexOf(Ki)!=-1}())return Li;if(function(){return a.indexOf(Mi)!=-1&&b>=10&&b<11}())return Ni;if(function(){return a.indexOf(Mi)!=-1&&b>=9&&b<11}())return Oi;if(function(){return a.indexOf(Mi)!=-1&&b>=8&&b<11}())return Pi;if(function(){return a.indexOf(Qi)!=-1||b>=11}())return Ji;return Ri};var Qb=be(70);ld(72,1,Ii,Id);_.r=function Jd(){return Li};_.s=function Kd(){var a=navigator.userAgent.toLowerCase();var b=$doc.documentMode;if(function(){return a.indexOf(Ki)!=-1}())return Li;if(function(){return a.indexOf(Mi)!=-1&&b>=10&&b<11}())return Ni;if(function(){return a.indexOf(Mi)!=-1&&b>=9&&b<11}())return Oi;if(function(){return a.indexOf(Mi)!=-1&&b>=8&&b<11}())return Pi;if(function(){return a.indexOf(Qi)!=-1||b>=11}())return Ji;return Ri};var Rb=be(72);var Ld=0,Md=false,Nd=7,Od,Pd,Qd,Rd;qb=Si;var Tb=be(97);ld(98,1,Ci);var cc=be(98);rb=Si;var Vb=be(99);ld(35,1,Si);_.k=function oe(a){return this===a};_.m=function pe(){return gh(this)};var Wb=be(35);ld(50,10,Bi,qe);var Zb=be(50);ld(21,10,Bi,re);var $b=be(21);ld(17,98,{3:1,15:1,17:1},se);_.k=function te(a){return vb(a,17)&&a.a==this.a};_.m=function ue(){return this.a};_.a=0;var _b=be(17);var we;ld(512,1,{});ld(58,39,Bi,ye);_.n=function ze(a){return new TypeError(a)};var bc=be(58);sb={3:1,48:1,15:1,2:1};var gc=be(2);ld(57,21,Bi,Ce);var fc=be(57);ld(516,1,{});ld(100,1,{});_.F=function Ge(a){return Ee(this,a)};var ic=be(100);ld(105,1,{86:1});_.k=function Ie(a){var b,c,d;if(a===this){return true}if(!vb(a,25)){return false}d=a;if(this.a.c+this.b.c!=d.a.c+d.b.c){return false}for(c=new $e((new Ue(d)).a);c.b;){b=Ze(c);if(!He(this,b)){return false}}return true};_.m=function Ke(){return Mf(new Ue(this))};var uc=be(105);ld(76,105,{86:1});var lc=be(76);ld(104,100,{33:1});_.k=function Se(a){var b;if(a===this){return true}if(!vb(a,33)){return false}b=a;if(b.G()!=this.G()){return false}return Fe(this,b)};_.m=function Te(){return Mf(this)};var wc=be(104);ld(11,104,{33:1},Ue);_.F=function Ve(a){if(vb(a,18)){return He(this.a,a)}return false};_.D=function We(){return new $e(this.a)};_.G=function Xe(){return Re(this.a)};var kc=be(11);ld(12,1,{},$e);_.I=function af(){return Ze(this)};_.H=function _e(){return this.b};_.b=false;var jc=be(12);ld(101,100,{27:1});_.k=function bf(a){var b,c,d,e,f;if(a===this){return true}if(!vb(a,27)){return false}f=a;if(this.G()!=f.G()){return false}e=f.D();for(c=this.D();c.H();){b=c.I();d=e.I();if(!(zb(b)===zb(d)||b!=null&&o(b,d))){return false}}return true};_.m=function cf(){return Nf(this)};_.D=function df(){return new ff(this)};_.K=function ef(a){return new jf(this,a)};var oc=be(101);ld(38,1,{},ff);_.H=function gf(){return this.a<this.b.G()};_.I=function hf(){$g(this.a<this.b.G());return this.b.J(this.a++)};_.a=0;var mc=be(38);ld(53,38,{},jf);var nc=be(53);ld(29,104,{33:1},kf);_.F=function lf(a){return Le(this.a,a)};_.D=function mf(){var a;return a=new $e((new Ue(this.a)).a),new of(a)};_.G=function nf(){return Re(this.a)};var qc=be(29);ld(22,1,{},of);_.H=function pf(){return this.a.b};_.I=function qf(){var a;return a=Ze(this.a),a.L()};var pc=be(22);ld(66,1,Ti);_.k=function rf(a){var b;if(!vb(a,18)){return false}b=a;return Qg(this.a,b.L())&&Qg(this.b,b.M())};_.L=function sf(){return this.a};_.M=function tf(){return this.b};_.m=function uf(){return Rg(this.a)^Rg(this.b)};_.N=function vf(a){var b;b=this.b;this.b=a;return b};var rc=be(66);ld(67,66,Ti,wf);var sc=be(67);ld(107,1,Ti);_.k=function xf(a){var b;if(!vb(a,18)){return false}b=a;return Qg(this.b.value[0],b.L())&&Qg(yg(this),b.M())};_.m=function yf(){return Rg(this.b.value[0])^Rg(yg(this))};var tc=be(107);ld(106,101,{27:1});_.J=function zf(b){var c;c=this.K(b);try{return c.I()}catch(a){a=bd(a);if(vb(a,32)){throw cd(new re("Can't get element "+b))}else throw cd(a)}};_.D=function Af(){return this.K(0)};var vc=be(106);ld(78,101,{3:1,27:1},Ef);_.F=function Ff(a){return Cf(this,a,0)!=-1};_.J=function Gf(a){return _g(a,this.a.length),this.a[a]};_.D=function Hf(){return new Jf(this)};_.G=function If(){return this.a.length};var yc=be(78);ld(79,1,{},Jf);_.H=function Kf(){return this.a<this.c.a.length};_.I=function Lf(){$g(this.a<this.c.a.length);this.b=this.a++;return this.c.a[this.b]};_.a=0;_.b=-1;var xc=be(79);var Qf;ld(84,10,Bi,Uf);var zc=be(84);ld(25,76,{3:1,25:1,86:1},Wf);var Ac=be(25);ld(42,104,{3:1,33:1},Zf);_.F=function $f(a){return Yf(this,a)};_.D=function _f(){var a;return a=new $e((new Ue((new kf(this.a)).a)).a),new of(a)};_.G=function ag(){return Re(this.a)};var Bc=be(42);ld(82,1,{},fg);_.D=function gg(){return new hg(this)};_.c=0;var Dc=be(82);ld(44,1,{},hg);_.I=function jg(){return this.d=this.a[this.c++],this.d};_.H=function ig(){var a;if(this.c<this.a.length){return true}a=this.b.next();if(!a.done){this.a=a.value[1];this.c=0;return true}return false};_.c=0;_.d=null;var Cc=be(44);var kg;ld(80,1,{},tg);_.D=function ug(){return new vg(this)};_.c=0;_.d=0;var Gc=be(80);ld(43,1,{},vg);_.I=function xg(){return this.c=this.a,this.a=this.b.next(),new zg(this.d,this.c,this.d.d)};_.H=function wg(){return !this.a.done};var Ec=be(43);ld(81,107,Ti,zg);_.L=function Ag(){return this.b.value[0]};_.M=function Bg(){return yg(this)};_.N=function Cg(a){return sg(this.a,this.b.value[0],a)};_.c=0;var Fc=be(81);ld(30,106,{3:1,27:1},Ig);_.K=function Jg(a){var b,c;bh(a,this.b);if(a>=this.b>>1){c=this.c;for(b=this.b;b>a;--b){c=c.b}}else{c=this.a.a;for(b=0;b<a;++b){c=c.a}}return new Lg(this,a,c)};_.G=function Kg(){return this.b};_.b=0;var Jc=be(30);ld(75,1,{},Lg);_.H=function Mg(){return this.b!=this.d.c};_.I=function Ng(){$g(this.b!=this.d.c);this.c=this.b;this.b=this.b.a;++this.a;return this.c.c};_.a=0;_.c=null;var Hc=be(75);ld(31,1,{},Og);var Ic=be(31);ld(32,10,{3:1,4:1,32:1},Pg);var Kc=be(32);ld(83,1,{},Yg);_.a=0;_.b=0;var Sg,Tg,Ug=0;var Lc=be(83);ld(514,1,{});ld(503,1,{});var fh=0;var hh,ih=0,jh;ld(505,1,{});var ph;ld(5,1,{},wh,xh);_.a=0;_.b=0;_.c=0;_.d=0;var qh,rh,sh,th,uh;var Mc=be(5);ld(23,35,Si,Ch);var yh,zh,Ah;var Nc=ce(23,Dh);ld(41,1,{41:1},Gh);var Eh;var Oc=be(41);ld(24,1,{24:1},Hh);var Qc=be(24);ld(14,35,Si,Oh);var Ih,Jh,Kh,Lh,Mh;var Pc=ce(14,Ph);ld(9,1,{9:1},Qh);_.k=function Rh(a){var b;if(this===a)return true;if(a==null)return false;if(Rc!=q(a))return false;b=a;if(this.a!=b.a)return false;if(this.b!=b.b)return false;return true};_.m=function Sh(){var a;a=31+this.a;a=31*a+this.b;return a};_.a=0;_.b=0;var Rc=be(9);ld(77,1,{},Xh);_.a=false;var Sc=be(77);ld(68,1,{},ci);_.b=0;var Tc=be(68);ld(46,1,{},ji);var $c=be(46);ld(120,$wnd.Function,{},ki);_.t=function li(a){di(this.a)};ld(59,1,{},mi);_.handleEvent=function ni(a){ei(this.a,a)};var Uc=be(59);ld(60,1,{},oi);_.handleEvent=function pi(a){di(this.a)};var Vc=be(60);ld(61,1,{},qi);_.handleEvent=function ri(a){di(this.a)};var Wc=be(61);ld(62,1,{},si);_.handleEvent=function ti(a){fi(this.a,a)};var Xc=be(62);ld(63,1,{},ui);_.handleEvent=function vi(a){gi(this.a,a)};var Yc=be(63);ld(64,1,{},wi);_.handleEvent=function xi(a){hi(this.a,a)};var Zc=be(64);var Cb=de('I');var Bb=de('D');var yi=(L(),O);var gwtOnLoad=gwtOnLoad=gd;ed(rd);hd('permProps',[[[gj,hj],[ij,Ji]],[[gj,hj],[ij,Ni]],[[gj,hj],[ij,Pi]],[[gj,hj],[ij,Oi]],[[gj,hj],[ij,Li]]]);if (ddm_MatchGame) ddm_MatchGame.onScriptLoad(gwtOnLoad);})();