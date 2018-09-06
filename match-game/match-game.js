function ddm_MatchGame(){var Jb='',Kb=0,Lb='gwt.codesvr=',Mb='gwt.hosted=',Nb='gwt.hybrid',Ob='ddm.MatchGame',Pb='__gwt_marker_ddm.MatchGame',Qb='<script id="',Rb='"><\/script>',Sb='SCRIPT',Tb='#',Ub='?',Vb='/',Wb=1,Xb='base',Yb='img',Zb='clear.cache.gif',$b='meta',_b='name',ac='gwt:property',bc='content',cc='=',dc='gwt:onPropertyErrorFn',ec='Bad handler "',fc='" for "gwt:onPropertyErrorFn"',gc='gwt:onLoadErrorFn',hc='" for "gwt:onLoadErrorFn"',ic='user.agent',jc='webkit',kc='safari',lc='msie',mc=10,nc=11,oc='ie10',pc=9,qc='ie9',rc=8,sc='ie8',tc='gecko',uc='gecko1_8',vc=2,wc=3,xc=4,yc='Single-script hosted mode not yet implemented. See issue ',zc='http://code.google.com/p/google-web-toolkit/issues/detail?id=2079',Ac='E7199E00F2FE1F80FE9E450952429EB6',Bc=':1',Cc=':2',Dc=':3',Ec=':4',Fc=':',Gc='DOMContentLoaded',Hc=50;var k=Jb,l=Kb,m=Lb,n=Mb,o=Nb,p=Ob,q=Pb,r=Qb,s=Rb,t=Sb,u=Tb,v=Ub,w=Vb,A=Wb,B=Xb,C=Yb,D=Zb,F=$b,G=_b,H=ac,I=bc,J=cc,K=dc,L=ec,M=fc,N=gc,O=hc,P=ic,Q=jc,R=kc,S=lc,T=mc,U=nc,V=oc,W=pc,X=qc,Y=rc,Z=sc,$=tc,_=uc,ab=vc,bb=wc,cb=xc,db=yc,eb=zc,fb=Ac,gb=Bc,hb=Cc,ib=Dc,jb=Ec,kb=Fc,lb=Gc,mb=Hc;var nb=window,ob=document,pb,qb,rb=k,sb={},tb=[],ub=[],vb=[],wb=l,xb,yb;if(!nb.__gwt_stylesLoaded){nb.__gwt_stylesLoaded={}}if(!nb.__gwt_scriptsLoaded){nb.__gwt_scriptsLoaded={}}function zb(){var b=false;try{var c=nb.location.search;return (c.indexOf(m)!=-1||(c.indexOf(n)!=-1||nb.external&&nb.external.gwtOnLoad))&&c.indexOf(o)==-1}catch(a){}zb=function(){return b};return b}
function Ab(){if(pb&&qb){pb(xb,p,rb,wb)}}
function Bb(){var e,f=q,g;ob.write(r+f+s);g=ob.getElementById(f);e=g&&g.previousSibling;while(e&&e.tagName!=t){e=e.previousSibling}function h(a){var b=a.lastIndexOf(u);if(b==-1){b=a.length}var c=a.indexOf(v);if(c==-1){c=a.length}var d=a.lastIndexOf(w,Math.min(c,b));return d>=l?a.substring(l,d+A):k}
;if(e&&e.src){rb=h(e.src)}if(rb==k){var i=ob.getElementsByTagName(B);if(i.length>l){rb=i[i.length-A].href}else{rb=h(ob.location.href)}}else if(rb.match(/^\w+:\/\//)){}else{var j=ob.createElement(C);j.src=rb+D;rb=h(j.src)}if(g){g.parentNode.removeChild(g)}}
function Cb(){var b=document.getElementsByTagName(F);for(var c=l,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(G),g;if(f){if(f==H){g=e.getAttribute(I);if(g){var h,i=g.indexOf(J);if(i>=l){f=g.substring(l,i);h=g.substring(i+A)}else{f=g;h=k}sb[f]=h}}else if(f==K){g=e.getAttribute(I);if(g){try{yb=eval(g)}catch(a){alert(L+g+M)}}}else if(f==N){g=e.getAttribute(I);if(g){try{xb=eval(g)}catch(a){alert(L+g+O)}}}}}}
__gwt_isKnownPropertyValue=function(a,b){return b in tb[a]};__gwt_getMetaProperty=function(a){var b=sb[a];return b==null?null:b};function Db(a,b){var c=vb;for(var d=l,e=a.length-A;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function Eb(a){var b=ub[a](),c=tb[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(yb){yb(a,d,b)}throw null}
ub[P]=function(){var a=navigator.userAgent.toLowerCase();var b=ob.documentMode;if(function(){return a.indexOf(Q)!=-1}())return R;if(function(){return a.indexOf(S)!=-1&&(b>=T&&b<U)}())return V;if(function(){return a.indexOf(S)!=-1&&(b>=W&&b<U)}())return X;if(function(){return a.indexOf(S)!=-1&&(b>=Y&&b<U)}())return Z;if(function(){return a.indexOf($)!=-1||b>=U}())return _;return k};tb[P]={'gecko1_8':l,'ie10':A,'ie8':ab,'ie9':bb,'safari':cb};ddm_MatchGame.onScriptLoad=function(a){ddm_MatchGame=null;pb=a;Ab()};if(zb()){alert(db+eb);return}Bb();Cb();try{var Fb;Db([_],fb);Db([V],fb+gb);Db([Z],fb+hb);Db([X],fb+ib);Db([R],fb+jb);Fb=vb[Eb(P)];var Gb=Fb.indexOf(kb);if(Gb!=-1){wb=Number(Fb.substring(Gb+A))}}catch(a){return}var Hb;function Ib(){if(!qb){qb=true;Ab();if(ob.removeEventListener){ob.removeEventListener(lb,Ib,false)}if(Hb){clearInterval(Hb)}}}
if(ob.addEventListener){ob.addEventListener(lb,function(){Ib()},false)}var Hb=setInterval(function(){if(/loaded|complete/.test(ob.readyState)){Ib()}},mb)}
ddm_MatchGame();(function () {var $gwt_version = "2.8.2";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {$wnd.__gwtStatsEvent(a)} : null;var $strongName = 'E7199E00F2FE1F80FE9E450952429EB6';function m(){}
function Y(){}
function pd(){}
function ld(){}
function vd(){}
function yd(){}
function Bd(){}
function Ed(){}
function Hd(){}
function fb(){}
function ib(){}
function Pg(){}
function Yh(){}
function Ph(a,b){}
function Xd(){Xd=ld}
function Xf(){Re(this)}
function gf(a){this.b=a}
function lf(a){this.a=a}
function pf(a){this.a=a}
function te(a){this.a=a}
function Ve(a){this.a=a}
function di(a){this.a=a}
function mi(a){this.a=a}
function oi(a){this.a=a}
function qi(a){this.a=a}
function si(a){this.a=a}
function ui(a){this.a=a}
function wi(a){this.a=a}
function Kf(a){this.c=a}
function $f(){this.a=new Xf}
function D(){D=ld;C=new m}
function V(){V=ld;U=new Y}
function mg(){mg=ld;lg=og()}
function Qg(){B.call(this)}
function re(){B.call(this)}
function ze(){B.call(this)}
function Vf(){B.call(this)}
function De(a){se.call(this,a)}
function Dh(a,b,c){this.a=c}
function bd(a){return a.b}
function $d(a){Zd(a);return a.j}
function qg(){mg();return new lg}
function jb(a,b){return ge(a,b)}
function Zf(a,b){return Me(a.a,b)}
function Se(a){return a.a.c+a.b.c}
function sg(a,b){return a.a.get(b)}
function Eg(a,b){Fg(a,b,a.c.b,a.c)}
function Xh(a,b,c){ci(qh.d,a,b,c)}
function cb(a){bb();ab.q(a)}
function B(){t(this);this.o()}
function xf(a,b){this.a=a;this.b=b}
function Ih(a,b){this.a=a;this.b=b}
function Rh(a,b){this.a=a;this.b=b}
function gg(a){this.a=qg();this.b=a}
function ug(a){this.a=qg();this.b=a}
function zb(a){return a==null?null:a}
function Sg(a){return a!=null?s(a):0}
function Ke(a){return !a?null:a.M()}
function Ce(a,b){return bh(a),a===b}
function hh(a){return a.$H||(a.$H=++gh)}
function ed(){cd==null&&(cd=[])}
function L(){L=ld;!!(bb(),ab)}
function Sf(){Sf=ld;Rf=new Zg}
function T(){I!=0&&(I=0);K=-1}
function lh(){lh=ld;ih=new m;kh=new m}
function $g(a){if(!a){throw bd(new re)}}
function _g(a){if(!a){throw bd(new Qg)}}
function S(a){$wnd.clearTimeout(a)}
function Zd(a){if(a.j!=null){return}ke(a)}
function u(a,b){a.b=b;b!=null&&fh(b,Ai,a)}
function vb(a,b){return a!=null&&tb(a,b)}
function xb(a){return typeof a==='number'}
function yb(a){return typeof a==='string'}
function wb(a){return typeof a==='boolean'}
function M(a,b,c){return a.apply(b,c);var d}
function $h(a,b,c,d){a.a.fillText(b,c,d)}
function fh(b,c,d){try{b[c]=d}catch(a){}}
function Hh(a){Gh();Oe(Fh,a)?Ne(Fh,a):a}
function Ff(){this.a=mb(dc,Ci,1,0,5,1)}
function ye(){ye=ld;xe=mb(_b,Ci,17,256,0,1)}
function Wd(){Wd=ld;Vd=$wnd.window.document}
function td(a){this.c=a;t(this);this.o()}
function se(a){this.c=a;t(this);this.o()}
function Ag(a,b,c){this.a=a;this.b=b;this.c=c}
function Mg(a,b,c){this.d=a;this.b=c;this.a=b}
function Wh(a,b,c){bi(qh.d,c);_h(qh.d,0,0,a,b)}
function _h(a,b,c,d,e){a.a.fillRect(b,c,d,e)}
function Gg(a){_g(a.b!=0);return Hg(a,a.a.a)}
function t(a){a.d&&a.b!==zi&&a.o();return a}
function ce(a){var b;b=be(a);oe(a,b);return b}
function ee(a){var b;b=be(a);b.i=a;b.e=1;return b}
function Zh(a){var b;b=new Yh;b.a=a;return b}
function ph(a,b){return new Rh(b.a-a.a,b.b-a.b)}
function Me(a,b){return yb(b)?Oe(a,b):!!eg(a.a,b)}
function rg(a,b){return !(a.a.get(b)===undefined)}
function ob(a){return Array.isArray(a)&&a.Q===pd}
function ub(a){return !Array.isArray(a)&&a.Q===pd}
function Pe(a,b,c){return yb(b)?Qe(a,b,c):fg(a.a,b,c)}
function kb(a,b,c,d,e,f){return lb(a,b,c,d,e,0,f)}
function Be(a,b){eh(b,a.length);return a.charCodeAt(b)}
function Cf(a,b){a.a[a.a.length]=b;return true}
function Z(a,b){!a&&(a=[]);a[a.length]=b;return a}
function Yf(a,b){var c;c=Pe(a.a,b,a);return c==null}
function Re(a){a.a=new gg(a);a.b=new ug(a);Uf(a)}
function Jg(){this.a=new Pg;this.c=new Pg;Ig(this)}
function oh(){if(jh==256){ih=kh;kh=new m;jh=0}++jh}
function bh(a){if(a==null){throw bd(new ze)}return a}
function de(a,b){var c;c=be(a);oe(a,c);c.e=b?8:0;return c}
function Wf(a,b){return zb(a)===zb(b)||a!=null&&o(a,b)}
function Rg(a,b){return zb(a)===zb(b)||a!=null&&o(a,b)}
function Oe(a,b){return b==null?!!eg(a.a,null):rg(a.b,b)}
function Ne(a,b){return b==null?Ke(eg(a.a,null)):sg(a.b,b)}
function kf(a,b){gf.call(this,a);dh(b,a.G());this.a=b}
function ci(a,b,c,d){a.b=d;a.a.font=c.a+' '+d+'px '+b}
function Ig(a){a.a.a=a.c;a.c.b=a.a;a.a.b=a.c.a=null;a.b=0}
function Uf(a){var b,c;c=a;b=c.$modCount|0;c.$modCount=b+1}
function R(a){L();$wnd.setTimeout(function(){throw a},0)}
function ie(a){if(a.C()){return null}var b=a.i;return hd[b]}
function nd(a){function b(){}
;b.prototype=a||{};return new b}
function bb(){bb=ld;var a,b;b=!eb();a=new ib;ab=b?new fb:a}
function dg(a,b){var c;c=a.a.get(b);return c==null?new Array:c}
function ge(a,b){var c=a.a=a.a||[];return c[b]||(c[b]=a.u(b))}
function P(a,b,c){var d;d=N();try{return M(a,b,c)}finally{Q(d)}}
function Qe(a,b,c){return b==null?fg(a.a,null,c):tg(a.b,b,c)}
function eg(a,b){var c;return cg(b,dg(a,b==null?0:(c=s(b),c|0)))}
function Eh(){Ch();return pb(jb(Nc,1),Ci,23,0,[zh,Ah,Bh])}
function Qh(){Oh();return pb(jb(Pc,1),Ci,14,0,[Nh,Kh,Jh,Mh,Lh])}
function yh(a,b,c){wh();this.d=a;this.c=b;this.b=c;this.a=255}
function ig(a){this.e=a;this.b=this.e.a.entries();this.a=new Array}
function Tf(a,b){if(b.$modCount!=a.$modCount){throw bd(new Vf)}}
function dh(a,b){if(a<0||a>b){throw bd(new se(Xi+a+Yi+b))}}
function ah(a,b){if(a<0||a>=b){throw bd(new se(Xi+a+Yi+b))}}
function eh(a,b){if(a<0||a>=b){throw bd(new De(Xi+a+Yi+b))}}
function w(b){if(!('stack' in b)){try{throw b}catch(a){}}return b}
function $e(a){var b;Tf(a.d,a);_g(a.b);b=a.a.I();a.b=Ze(a);return b}
function Ef(a,b,c){var d;d=(ah(b,a.a.length),a.a[b]);a.a[b]=c;return d}
function Pf(a,b){var c;for(c=a.a.length-1;c>=1;c--){Qf(a,c,Xg(b,c+1))}}
function Fg(a,b,c,d){var e;e=new Pg;e.c=b;e.b=c;e.a=d;d.b=c.a=e;++a.b}
function Uh(a,b,c,d,e){return !!e&&e.a>=a&&e.b>=b&&e.a<=a+c&&e.b<=b+d}
function H(){if(Date.now){return Date.now()}return (new Date).getTime()}
function O(b){L();return function(){return P(b,this,arguments);var a}}
function wg(a){this.d=a;this.b=this.d.a.entries();this.a=this.b.next()}
function xh(a,b,c){this.d=Ab(a*256);this.c=Ab(b*256);this.b=Ab(c*256);this.a=255}
function ki(a){if(a.g.b!=0){a.f=Gg(a.g);a.h=a.f.a}a.e.b==0||Gg(a.e)}
function zg(a){if(a.a.d!=a.c){return sg(a.a,a.b.value[0])}return a.b.value[1]}
function Df(a,b,c){for(;c<a.a.length;++c){if(Rg(b,a.a[c])){return c}}return -1}
function mb(a,b,c,d,e,f){var g;g=nb(e,d);e!=10&&pb(jb(a,f),b,c,e,g);return g}
function Q(a){a&&X((V(),U));--I;if(a){if(K!=-1){S(K);K=-1}}}
function Ab(a){return Math.max(Math.min(a,2147483647),-2147483648)|0}
function ei(a){ki(a);Td(qh.a.clientWidth,qh.a.clientHeight);a.f=null;Ig(a.b)}
function fi(a,b){var c,d;c=b;Eg(a.e,new Hh((d=c.code,c.key.length==1,d)));ei(a)}
function Hg(a,b){var c;c=b.c;b.a.b=b.b;b.b.a=b.a;b.a=b.b=null;b.c=null;--a.b;return c}
function X(a){var b,c;if(a.b){c=null;do{b=a.b;a.b=null;c=$(b,c)}while(a.b);a.b=c}}
function W(a){var b,c;if(a.a){c=null;do{b=a.a;a.a=null;c=$(b,c)}while(a.a);a.a=c}}
function sd(){var a,b,c;b=_c();a=b.r();c=b.s();if(!Ce(a,c)){throw bd(new ud(a,c))}}
function oe(a,b){var c;if(!a){return}b.i=a;var d=ie(b);if(!d){hd[a]=[b];return}d.O=b}
function ad(a){var b;if(vb(a,4)){return a}b=a&&a[Ai];if(!b){b=new F(a);cb(b)}return b}
function md(a,b,c){var d=function(){return a.apply(d,arguments)};b.apply(d,c);return d}
function be(a){var b;b=new _d;b.j='Class$'+(a?'S'+a:''+b.g);b.b=b.j;b.h=b.j;return b}
function Nf(a){var b,c,d;d=0;for(c=a.D();c.H();){b=c.I();d=d+(b!=null?s(b):0);d=d|0}return d}
function Of(a){var b,c,d;d=1;for(c=a.D();c.H();){b=c.I();d=31*d+(b!=null?s(b):0);d=d|0}return d}
function Ge(a,b){var c,d;bh(b);for(d=b.D();d.H();){c=d.I();if(!a.F(c)){return false}}return true}
function cg(a,b){var c,d,e;for(d=0,e=b.length;d<e;++d){c=b[d];if(Wf(a,c.L())){return c}}return null}
function db(a){var b=/function(?:\s+([\w$]+))?\s*\(/;var c=b.exec(a);return c&&c[1]||'anonymous'}
function dd(){ed();var a=cd;for(var b=0;b<arguments.length;b++){a.push(arguments[b])}}
function Gh(){Gh=ld;Fh=new Xf;Qe(Fh,'ArrowLeft','Left');Qe(Fh,'ArrowRight','Right')}
function Ch(){Ch=ld;zh=new Dh('BOLD',0,'bold');Ah=new Dh('ITALIC',1,'italic');Bh=new Dh('PLAIN',2,'normal')}
function _e(a){this.d=a;this.c=new wg(this.d.b);this.a=this.c;this.b=Ze(this);this.$modCount=a.$modCount}
function _d(){this.g=Yd++;this.j=null;this.h=null;this.f=null;this.d=null;this.b=null;this.i=null;this.a=null}
function F(a){D();t(this);this.b=a;a!=null&&fh(a,Ai,this);this.c=a==null?'null':od(a);this.a=a}
function Ze(a){if(a.a.H()){return true}if(a.a!=a.c){return false}a.a=new ig(a.d.a);return a.a.H()}
function ai(a,b){return new Rh(Ab(a.a.measureText(b).width),Ab($wnd.Math.round(a.b/1.3329999446868896)))}
function q(a){return yb(a)?gc:xb(a)?Vb:wb(a)?Tb:ub(a)?a.O:ob(a)?a.O:a.O||Array.isArray(a)&&jb(Eb,1)||Eb}
function Qf(a,b,c){var d;d=(ah(b,a.a.length),a.a[b]);Ef(a,b,(ah(c,a.a.length),a.a[c]));ah(c,a.a.length);a.a[c]=d}
function Fe(a,b){var c,d;for(d=a.D();d.H();){c=d.I();if(zb(b)===zb(c)||b!=null&&o(b,c)){return true}}return false}
function we(a){var b,c;if(a>-129&&a<128){b=a+128;c=(ye(),xe)[b];!c&&(c=xe[b]=new te(a));return c}return new te(a)}
function N(){var a;if(I!=0){a=H();if(a-J>2000){J=a;K=$wnd.setTimeout(T,10)}}if(I++==0){W((V(),U));return true}return false}
function od(a){var b;if(Array.isArray(a)&&a.Q===pd){return $d(q(a))+'@'+(b=s(a)>>>0,b.toString(16))}return a.toString()}
function gi(a){a.a.height=(Wd(),$wnd.window.window).innerHeight;a.a.width=$wnd.window.window.innerWidth;ei(a)}
function gd(a,b){typeof window==='object'&&typeof window['$gwt']==='object'&&(window['$gwt'][a]=b)}
function pb(a,b,c,d,e){e.O=a;e.P=b;e.Q=pd;e.__elementTypeId$=c;e.__elementTypeCategory$=d;return e}
function tg(a,b,c){var d;d=a.a.get(b);a.a.set(b,c===undefined?null:c);if(d===undefined){++a.c;Uf(a.b)}else{++a.d}return d}
function hi(a,b){var c,d,e;d=b;e=new Rh(Ab(d.clientX),Ab(d.clientY));Eg(a.g,new Ih(e,(c=(Oh(),Kh),ph(a.h,e),c)));ei(a)}
function ii(a,b){var c,d,e;d=b;e=new Rh(Ab(d.clientX),Ab(d.clientY));Eg(a.g,new Ih(e,(c=(Oh(),Nh),ph(a.h,e),c)));ei(a)}
function ji(a,b){var c,d,e;c=b;d=new Rh(Ab(c.clientX),Ab(c.clientY));e=c.buttons>0?(Oh(),Lh):(Oh(),Mh);Eg(a.g,new Ih(d,(ph(a.h,d),e)));ei(a)}
function qd(){$wnd.setTimeout(yi(sd));rd();qh=new li($wnd.window.document.getElementById('matchgame-canvas'));ei(qh)}
function Oh(){Oh=ld;Nh=new Ph('UP',0);Kh=new Ph('DOWN',1);Jh=new Ph('CLICK',2);Mh=new Ph('MOVE',3);Lh=new Ph('DRAG',4)}
function _c(){switch($c){case 1:return new yd;case 4:return new Hd;case 0:return new vd;case 2:return new Bd;}return new Ed}
function tb(a,b){if(yb(a)){return !!sb[b]}else if(a.P){return !!a.P[b]}else if(xb(a)){return !!rb[b]}else if(wb(a)){return !!qb[b]}return false}
function Zg(){Wg();var a,b,c;c=Vg+++Date.now();a=Ab($wnd.Math.floor(c*Vi))&16777215;b=Ab(c-a*Wi);this.a=a^1502;this.b=b^Ui}
function ne(a,b){var c=0;while(!b[c]||b[c]==''){c++}var d=b[c++];for(;c<b.length;c++){if(!b[c]||b[c]==''){continue}d+=a+b[c]}return d}
function eb(){if(Error.stackTraceLimit>0){$wnd.Error.stackTraceLimit=Error.stackTraceLimit=64;return true}return 'stack' in new Error}
function Xg(a,b){var c,d;$g(b>0);if((b&-b)==b){return Ab(b*Yg(a)*4.6566128730773926E-10)}do{c=Yg(a);d=c%b}while(c-d+(b-1)<0);return Ab(d)}
function nh(a){lh();var b,c,d;c=':'+a;d=kh[c];if(d!=null){return Ab((bh(d),d))}d=ih[c];b=d==null?mh(a):Ab((bh(d),d));oh();kh[c]=b;return b}
function s(a){return yb(a)?nh(a):xb(a)?Ab((bh(a),a)):wb(a)?(bh(a),a)?1231:1237:ub(a)?a.m():ob(a)?hh(a):!!a&&!!a.hashCode?a.hashCode():hh(a)}
function o(a,b){return yb(a)?Ce(a,b):xb(a)?(bh(a),a===b):wb(a)?(bh(a),a===b):ub(a)?a.k(b):ob(a)?a===b:!!a&&!!a.equals?a.equals(b):zb(a)===zb(b)}
function nb(a,b){var c=new Array(b);var d;switch(a){case 14:case 15:d=0;break;case 16:d=false;break;default:return c;}for(var e=0;e<b;++e){c[e]=d}return c}
function ud(a,b){var c;td.call(this,(c=Ei+a+') '+Fi+b+Gi+Hi==null?'null':od(Ei+a+') '+Fi+b+Gi+Hi),vb(Ei+a+') '+Fi+b+Gi+Hi,4)?Ei+a+') '+Fi+b+Gi+Hi:null,c))}
function bi(a,b){var c,d,e,f;f=b.d;e=b.c;d=b.b;c=b.a;c==255?(a.a.fillStyle='rgb('+f+', '+e+', '+d+')'):(a.a.fillStyle='rgb('+f+', '+e+', '+d+', '+c/255+')')}
function fd(b,c,d,e){ed();var f=cd;$moduleName=c;$moduleBase=d;$c=e;function g(){for(var a=0;a<f.length;a++){f[a]()}}
if(b){try{yi(g)()}catch(a){b(c,a)}}else{yi(g)()}}
function Ee(a,b){var c,d,e,f,g,h;bh(b);c=false;for(e=(h=new _e((new Ve((new lf(b.a)).a)).a),new pf(h));e.a.b;){d=(f=$e(e.a),f.L());c=c|(g=Pe(a.a,d,a),g==null)}return c}
function Sd(){var a,b,c,d,e,f;if(Se(Pd.a)!=2){return}e=(f=new _e((new Ve((new lf(Pd.a)).a)).a),new pf(f));a=(d=$e(e.a),d.L());b=(c=$e(e.a),c.L());if(Qd[a.a][a.b]===Qd[b.a][b.b]){Ee(Nd,Pd);Re(Pd.a)}}
function lb(a,b,c,d,e,f,g){var h,i,j,k,l;k=e[f];j=f==g-1;h=j?d:0;l=nb(h,k);d!=10&&pb(jb(a,g-f),b[f],c[f],h,l);if(!j){++f;for(i=0;i<k;++i){l[i]=lb(a,b,c,d,e,f,g)}}return l}
function Wg(){Wg=ld;var a,b,c,d;Tg=mb(Bb,Ci,45,25,15,1);Ug=mb(Bb,Ci,45,33,15,1);d=1.52587890625E-5;for(b=32;b>=0;b--){Ug[b]=d;d*=0.5}c=1;for(a=24;a>=0;a--){Tg[a]=c;c*=0.5}}
function og(){function b(){try{return (new Map).entries().next().done}catch(a){return false}}
if(typeof Map==='function'&&Map.prototype.entries&&b()){return Map}else{return pg()}}
function $(b,c){var d,e,f,g;for(e=0,f=b.length;e<f;e++){g=b[e];try{g[1]?g[0].R()&&(c=Z(c,g)):g[0].R()}catch(a){a=ad(a);if(vb(a,4)){d=a;L();R(vb(d,20)?d.p():d)}else throw bd(a)}}return c}
function jd(){hd={};!Array.isArray&&(Array.isArray=function(a){return Object.prototype.toString.call(a)==='[object Array]'});function b(){return (new Date).getTime()}
!Date.now&&(Date.now=b)}
function Ud(){var a,b,c,d,e;d=new Ff;for(b=0;b<Md*Md;b++){Cf(d,we(1+(b/2|0)))}Pf(d,(Sf(),Rf));for(a=0;a<Md;a++){for(c=0;c<Md;c++){Qd[a][c]=(e=(ah(0,d.a.length),d.a[0]),d.a.splice(0,1),e).a}}}
function Ie(a,b){var c,d,e;c=b.L();e=b.M();d=yb(c)?Ne(a,c):Ke(eg(a.a,c));if(!(zb(e)===zb(d)||e!=null&&o(e,d))){return false}if(d==null&&!(yb(c)?Oe(a,c):!!eg(a.a,c))){return false}return true}
function Rd(){Rd=ld;Od=(wh(),th);Qd=kb(Cb,[Ci,Ci],[651,45],15,[Md,Md],2);Nd=new $f;Pd=new $f;Ud();Od=new yh(196+Ab($wnd.Math.random()*64),196+Ab($wnd.Math.random()*64),196+Ab($wnd.Math.random()*64))}
function Yg(a){var b,c,d,e,f,g;e=a.a*Ui+a.b*1502;g=a.b*Ui+11;b=$wnd.Math.floor(g*Vi);e+=b;g-=b*Wi;e%=Wi;a.a=e;a.b=g;d=a.a*128;f=$wnd.Math.floor(a.b*Ug[31]);c=d+f;c>=2147483648&&(c-=4294967296);return c}
function fg(a,b,c){var d,e,f,g,h;h=b==null?0:(g=s(b),g|0);e=(d=a.a.get(h),d==null?new Array:d);if(e.length==0){a.a.set(h,e)}else{f=cg(b,e);if(f){return f.N(c)}}e[e.length]=new xf(b,c);++a.c;Uf(a.b);return null}
function kd(a,b,c){var d=hd,h;var e=d[a];var f=e instanceof Array?e[0]:null;if(e&&!f){_=e}else{_=(h=b&&b.prototype,!h&&(h=hd[b]),nd(h));_.P=c;!b&&(_.Q=pd);d[a]=_}for(var g=3;g<arguments.length;++g){arguments[g].prototype=_}f&&(_.O=f)}
function ke(a){if(a.B()){var b=a.c;b.C()?(a.j='['+b.i):!b.B()?(a.j='[L'+b.w()+';'):(a.j='['+b.w());a.b=b.v()+'[]';a.h=b.A()+'[]';return}var c=a.f;var d=a.d;d=d.split('/');a.j=ne('.',[c,ne('$',d)]);a.b=ne('.',[c,ne('.',d)]);a.h=d[d.length-1]}
function Vh(a,b,c,d,e,f,g,h){var i;if(g){bi(qh.d,g);_h(qh.d,a,b,c,d)}if(!!h&&Uh(a,b,c,d,qh.h)){bi(qh.d,h);_h(qh.d,a,b,c,d)}bi(qh.d,f);i=ai(qh.d,e);$h(qh.d,e,a+(c/2|0)-(i.a/2|0),b+(d/2|0)+(i.b/2|0));return Zh(!!qh.f&&qh.f.b==(Oh(),Kh)&&Uh(a,b,c,d,qh.f.a))}
function wh(){wh=ld;rh=new yh(0,0,0);new yh(128,128,128);sh=new xh(Zi,Zi,Zi);new xh($i,$i,$i);new xh(_i,_i,_i);new xh(aj,aj,aj);new xh(0.5,0.5,0.5);th=new xh(bj,bj,bj);new xh(cj,cj,cj);uh=new xh(dj,dj,dj);new xh(ej,ej,ej);vh=new xh(fj,fj,fj);new yh(255,255,255);new yh(255,255,0)}
function mh(a){var b,c,d,e;b=0;d=a.length;e=d-4;c=0;while(c<e){b=(eh(c+3,a.length),a.charCodeAt(c+3)+(eh(c+2,a.length),31*(a.charCodeAt(c+2)+(eh(c+1,a.length),31*(a.charCodeAt(c+1)+(eh(c,a.length),31*(a.charCodeAt(c)+31*b)))))));b=b|0;c+=4}while(c<d){b=b*31+Be(a,c++)}b=b|0;return b}
function ng(){if(!Object.create||!Object.getOwnPropertyNames){return false}var a='__proto__';var b=Object.create(null);if(b[a]!==undefined){return false}var c=Object.getOwnPropertyNames(b);if(c.length!=0){return false}b[a]=42;if(b[a]!==42){return false}if(Object.getOwnPropertyNames(b).length==0){return false}return true}
function li(a){this.b=new Jg;this.e=new Jg;this.g=new Jg;this.h=new Rh(0,0);this.a=a;this.c=a.getContext('2d');this.d=new di(this.c);this.a.height=(Wd(),$wnd.window.window).innerHeight;this.a.width=$wnd.window.window.innerWidth;$wnd.window.setTimeout(md(mi.prototype.t,mi,[this]),1000);Vd.addEventListener('keydown',new oi(this));$wnd.window.window.addEventListener('resize',new qi(this));a.addEventListener('mousedown',new si(this));a.addEventListener('mouseup',new ui(this));a.addEventListener('mousemove',new wi(this))}
function Td(a,b){Rd();var c,d,e,f,g,h,i,j,k,l;Wh(a,b,(wh(),vh));Xh('Arial',(Ch(),zh),20);k=$wnd.Math.min(a,b);l=(k-10*(Md+1))/Md|0;for(f=0;f<Md;f++){for(i=0;i<Md;i++){e='';d=new Rh(f,i);g=Zf(Nd,d);h=Qd[f][i]==1+(Md*Md/2|0);(Zf(Pd,d)||g)&&(e=Qd[f][i]+'');h&&(e='Reset');c=h||g?Od:th;j=h||g?Od:uh;if(Vh(10+f*(10+l),10+i*(10+l),l,l,e,sh,c,j).a){if(Ld){continue}Od=new yh(196+Ab($wnd.Math.random()*64),196+Ab($wnd.Math.random()*64),196+Ab($wnd.Math.random()*64));if(h){Ld=true}else{++Kd;Se(Pd.a)==2&&Re(Pd.a);Yf(Pd,d);Sd()}}}}Xh('Impact',Bh,l/2|0);Vh(b<a?k:20+l,b<a?20+l:k,l*5/2|0,l,'Clicks: '+Kd,rh,new yh(196,196,255),null);if(Ld){Xh('Arial',zh,20);if(Vh(b<a?k:10,b<a?10:k,l,l,'Yes',rh,Od,null).a){Ld=false;Re(Pd.a);Re(Nd.a);Kd=0}Vh(b<a?k+10+l:10,b<a?10:k+10+l,l,l,'No',rh,Od,null).a&&(Ld=false)}}
function pg(){function e(){this.obj=this.createObject()}
;e.prototype.createObject=function(a){return Object.create(null)};e.prototype.get=function(a){return this.obj[a]};e.prototype.set=function(a,b){this.obj[a]=b};e.prototype['delete']=function(a){delete this.obj[a]};e.prototype.keys=function(){return Object.getOwnPropertyNames(this.obj)};e.prototype.entries=function(){var b=this.keys();var c=this;var d=0;return {next:function(){if(d>=b.length)return {done:true};var a=b[d++];return {value:[a,c.get(a)],done:false}}}};if(!ng()){e.prototype.createObject=function(){return {}};e.prototype.get=function(a){return this.obj[':'+a]};e.prototype.set=function(a,b){this.obj[':'+a]=b};e.prototype['delete']=function(a){delete this.obj[':'+a]};e.prototype.keys=function(){var a=[];for(var b in this.obj){b.charCodeAt(0)==58&&a.push(b.substring(1))}return a}}return e}
function rd(){var a,b,c;b=$doc.compatMode;a=pb(jb(gc,1),Ci,2,6,[Di]);for(c=0;c<a.length;c++){if(Ce(a[c],b)){return}}a.length==1&&Ce(Di,a[0])&&Ce('BackCompat',b)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\""+b+'"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' "+b+"').<br>Modify your application's host HTML page doctype, or update your custom "+"'document.compatMode' configuration property settings."}
var zi='__noinit__',Ai='__java$exception',Bi={3:1,4:1},Ci={3:1},Di='CSS1Compat',Ei='Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (',Fi='does not match the runtime user.agent value (',Gi=').\n',Hi='Expect more errors.',Ii={34:1},Ji='gecko1_8',Ki='webkit',Li='safari',Mi='msie',Ni='ie10',Oi='ie9',Pi='ie8',Qi='gecko',Ri='unknown',Si={3:1,15:1},Ti={18:1},Ui=15525485,Vi=5.9604644775390625E-8,Wi=16777216,Xi='Index: ',Yi=', Size: ',Zi=0.10000000149011612,$i=0.20000000298023224,_i=0.30000001192092896,aj=0.4000000059604645,bj=0.6000000238418579,cj=0.699999988079071,dj=0.800000011920929,ej=0.8999999761581421,fj=0.949999988079071,gj='locale',hj='default',ij='user.agent';var _,hd,cd,$c=-1;jd();kd(1,null,{},m);_.k=function n(a){return this===a};_.l=function p(){return this.O};_.m=function r(){return hh(this)};_.equals=function(a){return this.k(a)};_.hashCode=function(){return this.m()};var qb,rb,sb;kd(37,1,{},_d);_.u=function ae(a){var b;b=new _d;b.e=4;a>1?(b.c=ge(this,a-1)):(b.c=this);return b};_.v=function fe(){Zd(this);return this.b};_.w=function he(){return $d(this)};_.A=function je(){Zd(this);return this.h};_.B=function le(){return (this.e&4)!=0};_.C=function me(){return (this.e&1)!=0};_.e=0;_.g=0;var Yd=1;var dc=ce(1);var Ub=ce(37);kd(4,1,Bi);_.n=function v(a){return new Error(a)};_.o=function A(){var a,b,c;c=this.c==null?null:this.c.replace(new RegExp('\n','g'),' ');b=(a=$d(this.O),c==null?a:a+': '+c);u(this,w(this.n(b)));cb(this)};_.b=zi;_.d=true;var hc=ce(4);kd(28,4,Bi);var Yb=ce(28);kd(10,28,Bi);var ec=ce(10);kd(39,10,Bi);var ac=ce(39);kd(54,39,Bi);var Gb=ce(54);kd(20,54,{20:1,3:1,4:1},F);_.p=function G(){return zb(this.a)===zb(C)?null:this.a};var C;var Db=ce(20);var Eb=ce(0);kd(86,1,{});var Fb=ce(86);var I=0,J=0,K=-1;kd(68,86,{},Y);var U;var Hb=ce(68);var ab;kd(101,1,{});var Lb=ce(101);kd(55,101,{},fb);_.q=function gb(a){var b={},j;var c=[];a['fnStack']=c;var d=arguments.callee.caller;while(d){var e=(bb(),d.name||(d.name=db(d.toString())));c.push(e);var f=':'+e;var g=b[f];if(g){var h,i;for(h=0,i=g.length;h<i;h++){if(g[h]===d){return}}}(g||(b[f]=[])).push(d);d=d.caller}};var Ib=ce(55);kd(102,101,{});_.q=function hb(a){};var Kb=ce(102);kd(56,102,{},ib);var Jb=ce(56);kd(26,4,Bi);var Xb=ce(26);kd(7,26,Bi);var Sb=ce(7);kd(47,7,Bi,ud);var Mb=ce(47);kd(72,1,Ii,vd);_.r=function wd(){return Ji};_.s=function xd(){var a=navigator.userAgent.toLowerCase();var b=$doc.documentMode;if(function(){return a.indexOf(Ki)!=-1}())return Li;if(function(){return a.indexOf(Mi)!=-1&&b>=10&&b<11}())return Ni;if(function(){return a.indexOf(Mi)!=-1&&b>=9&&b<11}())return Oi;if(function(){return a.indexOf(Mi)!=-1&&b>=8&&b<11}())return Pi;if(function(){return a.indexOf(Qi)!=-1||b>=11}())return Ji;return Ri};var Nb=ce(72);kd(70,1,Ii,yd);_.r=function zd(){return Ni};_.s=function Ad(){var a=navigator.userAgent.toLowerCase();var b=$doc.documentMode;if(function(){return a.indexOf(Ki)!=-1}())return Li;if(function(){return a.indexOf(Mi)!=-1&&b>=10&&b<11}())return Ni;if(function(){return a.indexOf(Mi)!=-1&&b>=9&&b<11}())return Oi;if(function(){return a.indexOf(Mi)!=-1&&b>=8&&b<11}())return Pi;if(function(){return a.indexOf(Qi)!=-1||b>=11}())return Ji;return Ri};var Ob=ce(70);kd(73,1,Ii,Bd);_.r=function Cd(){return Pi};_.s=function Dd(){var a=navigator.userAgent.toLowerCase();var b=$doc.documentMode;if(function(){return a.indexOf(Ki)!=-1}())return Li;if(function(){return a.indexOf(Mi)!=-1&&b>=10&&b<11}())return Ni;if(function(){return a.indexOf(Mi)!=-1&&b>=9&&b<11}())return Oi;if(function(){return a.indexOf(Mi)!=-1&&b>=8&&b<11}())return Pi;if(function(){return a.indexOf(Qi)!=-1||b>=11}())return Ji;return Ri};var Pb=ce(73);kd(69,1,Ii,Ed);_.r=function Fd(){return Oi};_.s=function Gd(){var a=navigator.userAgent.toLowerCase();var b=$doc.documentMode;if(function(){return a.indexOf(Ki)!=-1}())return Li;if(function(){return a.indexOf(Mi)!=-1&&b>=10&&b<11}())return Ni;if(function(){return a.indexOf(Mi)!=-1&&b>=9&&b<11}())return Oi;if(function(){return a.indexOf(Mi)!=-1&&b>=8&&b<11}())return Pi;if(function(){return a.indexOf(Qi)!=-1||b>=11}())return Ji;return Ri};var Qb=ce(69);kd(71,1,Ii,Hd);_.r=function Id(){return Li};_.s=function Jd(){var a=navigator.userAgent.toLowerCase();var b=$doc.documentMode;if(function(){return a.indexOf(Ki)!=-1}())return Li;if(function(){return a.indexOf(Mi)!=-1&&b>=10&&b<11}())return Ni;if(function(){return a.indexOf(Mi)!=-1&&b>=9&&b<11}())return Oi;if(function(){return a.indexOf(Mi)!=-1&&b>=8&&b<11}())return Pi;if(function(){return a.indexOf(Qi)!=-1||b>=11}())return Ji;return Ri};var Rb=ce(71);var Kd=0,Ld=false,Md=7,Nd,Od,Pd,Qd;var Vd;qb=Si;var Tb=ce(96);kd(97,1,Ci);var cc=ce(97);rb=Si;var Vb=ce(98);kd(35,1,Si);_.k=function pe(a){return this===a};_.m=function qe(){return hh(this)};var Wb=ce(35);kd(50,10,Bi,re);var Zb=ce(50);kd(21,10,Bi,se);var $b=ce(21);kd(17,97,{3:1,15:1,17:1},te);_.k=function ue(a){return vb(a,17)&&a.a==this.a};_.m=function ve(){return this.a};_.a=0;var _b=ce(17);var xe;kd(511,1,{});kd(58,39,Bi,ze);_.n=function Ae(a){return new TypeError(a)};var bc=ce(58);sb={3:1,48:1,15:1,2:1};var gc=ce(2);kd(57,21,Bi,De);var fc=ce(57);kd(515,1,{});kd(99,1,{});_.F=function He(a){return Fe(this,a)};var ic=ce(99);kd(104,1,{85:1});_.k=function Je(a){var b,c,d;if(a===this){return true}if(!vb(a,25)){return false}d=a;if(this.a.c+this.b.c!=d.a.c+d.b.c){return false}for(c=new _e((new Ve(d)).a);c.b;){b=$e(c);if(!Ie(this,b)){return false}}return true};_.m=function Le(){return Nf(new Ve(this))};var uc=ce(104);kd(75,104,{85:1});var lc=ce(75);kd(103,99,{33:1});_.k=function Te(a){var b;if(a===this){return true}if(!vb(a,33)){return false}b=a;if(b.G()!=this.G()){return false}return Ge(this,b)};_.m=function Ue(){return Nf(this)};var wc=ce(103);kd(11,103,{33:1},Ve);_.F=function We(a){if(vb(a,18)){return Ie(this.a,a)}return false};_.D=function Xe(){return new _e(this.a)};_.G=function Ye(){return Se(this.a)};var kc=ce(11);kd(12,1,{},_e);_.I=function bf(){return $e(this)};_.H=function af(){return this.b};_.b=false;var jc=ce(12);kd(100,99,{27:1});_.k=function cf(a){var b,c,d,e,f;if(a===this){return true}if(!vb(a,27)){return false}f=a;if(this.G()!=f.G()){return false}e=f.D();for(c=this.D();c.H();){b=c.I();d=e.I();if(!(zb(b)===zb(d)||b!=null&&o(b,d))){return false}}return true};_.m=function df(){return Of(this)};_.D=function ef(){return new gf(this)};_.K=function ff(a){return new kf(this,a)};var oc=ce(100);kd(38,1,{},gf);_.H=function hf(){return this.a<this.b.G()};_.I=function jf(){_g(this.a<this.b.G());return this.b.J(this.a++)};_.a=0;var mc=ce(38);kd(53,38,{},kf);var nc=ce(53);kd(29,103,{33:1},lf);_.F=function mf(a){return Me(this.a,a)};_.D=function nf(){var a;return a=new _e((new Ve(this.a)).a),new pf(a)};_.G=function of(){return Se(this.a)};var qc=ce(29);kd(22,1,{},pf);_.H=function qf(){return this.a.b};_.I=function rf(){var a;return a=$e(this.a),a.L()};var pc=ce(22);kd(65,1,Ti);_.k=function sf(a){var b;if(!vb(a,18)){return false}b=a;return Rg(this.a,b.L())&&Rg(this.b,b.M())};_.L=function tf(){return this.a};_.M=function uf(){return this.b};_.m=function vf(){return Sg(this.a)^Sg(this.b)};_.N=function wf(a){var b;b=this.b;this.b=a;return b};var rc=ce(65);kd(66,65,Ti,xf);var sc=ce(66);kd(106,1,Ti);_.k=function yf(a){var b;if(!vb(a,18)){return false}b=a;return Rg(this.b.value[0],b.L())&&Rg(zg(this),b.M())};_.m=function zf(){return Sg(this.b.value[0])^Sg(zg(this))};var tc=ce(106);kd(105,100,{27:1});_.J=function Af(b){var c;c=this.K(b);try{return c.I()}catch(a){a=ad(a);if(vb(a,32)){throw bd(new se("Can't get element "+b))}else throw bd(a)}};_.D=function Bf(){return this.K(0)};var vc=ce(105);kd(77,100,{3:1,27:1},Ff);_.F=function Gf(a){return Df(this,a,0)!=-1};_.J=function Hf(a){return ah(a,this.a.length),this.a[a]};_.D=function If(){return new Kf(this)};_.G=function Jf(){return this.a.length};var yc=ce(77);kd(78,1,{},Kf);_.H=function Lf(){return this.a<this.c.a.length};_.I=function Mf(){_g(this.a<this.c.a.length);this.b=this.a++;return this.c.a[this.b]};_.a=0;_.b=-1;var xc=ce(78);var Rf;kd(83,10,Bi,Vf);var zc=ce(83);kd(25,75,{3:1,25:1,85:1},Xf);var Ac=ce(25);kd(42,103,{3:1,33:1},$f);_.F=function _f(a){return Zf(this,a)};_.D=function ag(){var a;return a=new _e((new Ve((new lf(this.a)).a)).a),new pf(a)};_.G=function bg(){return Se(this.a)};var Bc=ce(42);kd(81,1,{},gg);_.D=function hg(){return new ig(this)};_.c=0;var Dc=ce(81);kd(44,1,{},ig);_.I=function kg(){return this.d=this.a[this.c++],this.d};_.H=function jg(){var a;if(this.c<this.a.length){return true}a=this.b.next();if(!a.done){this.a=a.value[1];this.c=0;return true}return false};_.c=0;_.d=null;var Cc=ce(44);var lg;kd(79,1,{},ug);_.D=function vg(){return new wg(this)};_.c=0;_.d=0;var Gc=ce(79);kd(43,1,{},wg);_.I=function yg(){return this.c=this.a,this.a=this.b.next(),new Ag(this.d,this.c,this.d.d)};_.H=function xg(){return !this.a.done};var Ec=ce(43);kd(80,106,Ti,Ag);_.L=function Bg(){return this.b.value[0]};_.M=function Cg(){return zg(this)};_.N=function Dg(a){return tg(this.a,this.b.value[0],a)};_.c=0;var Fc=ce(80);kd(30,105,{3:1,27:1},Jg);_.K=function Kg(a){var b,c;dh(a,this.b);if(a>=this.b>>1){c=this.c;for(b=this.b;b>a;--b){c=c.b}}else{c=this.a.a;for(b=0;b<a;++b){c=c.a}}return new Mg(this,a,c)};_.G=function Lg(){return this.b};_.b=0;var Jc=ce(30);kd(74,1,{},Mg);_.H=function Ng(){return this.b!=this.d.c};_.I=function Og(){_g(this.b!=this.d.c);this.c=this.b;this.b=this.b.a;++this.a;return this.c.c};_.a=0;_.c=null;var Hc=ce(74);kd(31,1,{},Pg);var Ic=ce(31);kd(32,10,{3:1,4:1,32:1},Qg);var Kc=ce(32);kd(82,1,{},Zg);_.a=0;_.b=0;var Tg,Ug,Vg=0;var Lc=ce(82);kd(513,1,{});kd(502,1,{});var gh=0;var ih,jh=0,kh;kd(504,1,{});var qh;kd(5,1,{},xh,yh);_.a=0;_.b=0;_.c=0;_.d=0;var rh,sh,th,uh,vh;var Mc=ce(5);kd(23,35,Si,Dh);var zh,Ah,Bh;var Nc=de(23,Eh);kd(41,1,{41:1},Hh);var Fh;var Oc=ce(41);kd(24,1,{24:1},Ih);var Qc=ce(24);kd(14,35,Si,Ph);var Jh,Kh,Lh,Mh,Nh;var Pc=de(14,Qh);kd(9,1,{9:1},Rh);_.k=function Sh(a){var b;if(this===a)return true;if(a==null)return false;if(Rc!=q(a))return false;b=a;if(this.a!=b.a)return false;if(this.b!=b.b)return false;return true};_.m=function Th(){var a;a=31+this.a;a=31*a+this.b;return a};_.a=0;_.b=0;var Rc=ce(9);kd(76,1,{},Yh);_.a=false;var Sc=ce(76);kd(67,1,{},di);_.b=0;var Tc=ce(67);kd(46,1,{},li);var Zc=ce(46);kd(119,$wnd.Function,{},mi);_.t=function ni(a){ei(this.a)};kd(59,1,{},oi);_.handleEvent=function pi(a){fi(this.a,a)};var Uc=ce(59);kd(60,1,{},qi);_.handleEvent=function ri(a){gi(this.a)};var Vc=ce(60);kd(61,1,{},si);_.handleEvent=function ti(a){hi(this.a,a)};var Wc=ce(61);kd(62,1,{},ui);_.handleEvent=function vi(a){ii(this.a,a)};var Xc=ce(62);kd(63,1,{},wi);_.handleEvent=function xi(a){ji(this.a,a)};var Yc=ce(63);var Cb=ee('I');var Bb=ee('D');var yi=(L(),O);var gwtOnLoad=gwtOnLoad=fd;dd(qd);gd('permProps',[[[gj,hj],[ij,Ji]],[[gj,hj],[ij,Ni]],[[gj,hj],[ij,Pi]],[[gj,hj],[ij,Oi]],[[gj,hj],[ij,Li]]]);if (ddm_MatchGame) ddm_MatchGame.onScriptLoad(gwtOnLoad);})();