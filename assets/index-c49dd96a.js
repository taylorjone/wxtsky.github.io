import{J as G,M as dt,y as mt,R as de,N as pt,P as he,r as o,B as D,f as T,_ as p,F as Fe,G as Ue,H as $e,I as je,c as Re,Q as Ne,d as Me,E as Et,S as St,g as gt,U as yt,V as Ke,W as re,C as ht}from"./index-30ca824a.js";function Be(e,t){typeof e=="function"?e(t):G(e)==="object"&&e&&"current"in e&&(e.current=t)}function ze(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.filter(function(a){return a});return r.length<=1?r[0]:function(a){t.forEach(function(s){Be(s,a)})}}function un(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return mt(function(){return ze.apply(void 0,t)},t,function(r,a){return r.length===a.length&&r.every(function(s,i){return s===a[i]})})}function He(e){var t,n,r=dt.isMemo(e)?e.type.type:e.type;return!(typeof r=="function"&&!((t=r.prototype)!==null&&t!==void 0&&t.render)||typeof e=="function"&&!((n=e.prototype)!==null&&n!==void 0&&n.render))}function Rt(e){return e instanceof HTMLElement?e:e instanceof de.Component?pt.findDOMNode(e):null}var Qe=function(t){return+setTimeout(t,16)},Ge=function(t){return clearTimeout(t)};typeof window<"u"&&"requestAnimationFrame"in window&&(Qe=function(t){return window.requestAnimationFrame(t)},Ge=function(t){return window.cancelAnimationFrame(t)});var ke=0,be=new Map;function qe(e){be.delete(e)}var Q=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;ke+=1;var r=ke;function a(s){if(s===0)qe(r),t();else{var i=Qe(function(){a(s-1)});be.set(r,i)}}return a(n),r};Q.cancel=function(e){var t=be.get(e);return qe(t),Ge(t)};function Pe(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit".concat(e)]="webkit".concat(t),n["Moz".concat(e)]="moz".concat(t),n["ms".concat(e)]="MS".concat(t),n["O".concat(e)]="o".concat(t.toLowerCase()),n}function bt(e,t){var n={animationend:Pe("Animation","AnimationEnd"),transitionend:Pe("Transition","TransitionEnd")};return e&&("AnimationEvent"in t||delete n.animationend.animation,"TransitionEvent"in t||delete n.transitionend.transition),n}var At=bt(he(),typeof window<"u"?window:{}),Ye={};if(he()){var Ct=document.createElement("div");Ye=Ct.style}var X={};function Je(e){if(X[e])return X[e];var t=At[e];if(t)for(var n=Object.keys(t),r=n.length,a=0;a<r;a+=1){var s=n[a];if(Object.prototype.hasOwnProperty.call(t,s)&&s in Ye)return X[e]=t[s],X[e]}return""}var Xe=Je("animationend"),Ze=Je("transitionend"),et=!!(Xe&&Ze),xe=Xe||"animationend",Oe=Ze||"transitionend";function De(e,t){if(!e)return null;if(G(e)==="object"){var n=t.replace(/-\w/g,function(r){return r[1].toUpperCase()});return e[n]}return"".concat(e,"-").concat(t)}var $="none",Z="appear",ee="enter",te="leave",Ie="none",O="prepare",j="start",K="active",Ae="end";function ne(e){var t=o.useRef(!1),n=o.useState(e),r=D(n,2),a=r[0],s=r[1];o.useEffect(function(){return t.current=!1,function(){t.current=!0}},[]);function i(l,E){E&&t.current||s(l)}return[a,i]}const Tt=function(){var e=o.useRef(null);function t(){Q.cancel(e.current)}function n(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;t();var s=Q(function(){a<=1?r({isCanceled:function(){return s!==e.current}}):n(r,a-1)});e.current=s}return o.useEffect(function(){return function(){t()}},[]),[n,t]};var tt=he()?o.useLayoutEffect:o.useEffect,We=[O,j,K,Ae],nt=!1,_t=!0;function rt(e){return e===K||e===Ae}const Lt=function(e,t){var n=ne(Ie),r=D(n,2),a=r[0],s=r[1],i=Tt(),l=D(i,2),E=l[0],u=l[1];function c(){s(O,!0)}return tt(function(){if(a!==Ie&&a!==Ae){var f=We.indexOf(a),v=We[f+1],d=t(a);d===nt?s(v,!0):E(function(R){function N(){R.isCanceled()||s(v,!0)}d===!0?N():Promise.resolve(d).then(N)})}},[e,a]),o.useEffect(function(){return function(){u()}},[]),[c,a]},wt=function(e){var t=o.useRef(),n=o.useRef(e);n.current=e;var r=o.useCallback(function(i){n.current(i)},[]);function a(i){i&&(i.removeEventListener(Oe,r),i.removeEventListener(xe,r))}function s(i){t.current&&t.current!==i&&a(t.current),i&&i!==t.current&&(i.addEventListener(Oe,r),i.addEventListener(xe,r),t.current=i)}return o.useEffect(function(){return function(){a(t.current)}},[]),[s,a]};function Nt(e,t,n,r){var a=r.motionEnter,s=a===void 0?!0:a,i=r.motionAppear,l=i===void 0?!0:i,E=r.motionLeave,u=E===void 0?!0:E,c=r.motionDeadline,f=r.motionLeaveImmediately,v=r.onAppearPrepare,d=r.onEnterPrepare,R=r.onLeavePrepare,N=r.onAppearStart,M=r.onEnterStart,_=r.onLeaveStart,x=r.onAppearActive,k=r.onEnterActive,g=r.onLeaveActive,S=r.onAppearEnd,b=r.onEnterEnd,L=r.onLeaveEnd,w=r.onVisibleChanged,V=ne(),P=D(V,2),m=P[0],I=P[1],F=ne($),W=D(F,2),A=W[0],B=W[1],z=ne(null),Ce=D(z,2),it=Ce[0],Te=Ce[1],ie=o.useRef(!1),ue=o.useRef(null);function Y(){return n()}var _e=o.useRef(!1);function Le(y){var h=Y();if(!(y&&!y.deadline&&y.target!==h)){var C=_e.current,J;A===Z&&C?J=S==null?void 0:S(h,y):A===ee&&C?J=b==null?void 0:b(h,y):A===te&&C&&(J=L==null?void 0:L(h,y)),A!==$&&C&&J!==!1&&(B($,!0),Te(null,!0))}}var ut=wt(Le),st=D(ut,1),ct=st[0],H=o.useMemo(function(){var y,h,C;switch(A){case Z:return y={},T(y,O,v),T(y,j,N),T(y,K,x),y;case ee:return h={},T(h,O,d),T(h,j,M),T(h,K,k),h;case te:return C={},T(C,O,R),T(C,j,_),T(C,K,g),C;default:return{}}},[A]),ft=Lt(A,function(y){if(y===O){var h=H[O];return h?h(Y()):nt}if(U in H){var C;Te(((C=H[U])===null||C===void 0?void 0:C.call(H,Y(),null))||null)}return U===K&&(ct(Y()),c>0&&(clearTimeout(ue.current),ue.current=setTimeout(function(){Le({deadline:!0})},c))),_t}),we=D(ft,2),lt=we[0],U=we[1],vt=rt(U);_e.current=vt,tt(function(){I(t);var y=ie.current;if(ie.current=!0,!!e){var h;!y&&t&&l&&(h=Z),y&&t&&s&&(h=ee),(y&&!t&&u||!y&&f&&!t&&u)&&(h=te),h&&(B(h),lt())}},[t]),o.useEffect(function(){(A===Z&&!l||A===ee&&!s||A===te&&!u)&&B($)},[l,s,u]),o.useEffect(function(){return function(){ie.current=!1,clearTimeout(ue.current)}},[]);var se=o.useRef(!1);o.useEffect(function(){m&&(se.current=!0),m!==void 0&&A===$&&((se.current||m)&&(w==null||w(m)),se.current=!0)},[m,A]);var ce=it;return H[O]&&U===j&&(ce=p({transition:"none"},ce)),[A,U,ce,m??t]}var Mt=function(e){Fe(n,e);var t=Ue(n);function n(){return $e(this,n),t.apply(this,arguments)}return je(n,[{key:"render",value:function(){return this.props.children}}]),n}(o.Component);function kt(e){var t=e;G(e)==="object"&&(t=e.transitionSupport);function n(a){return!!(a.motionName&&t)}var r=o.forwardRef(function(a,s){var i=a.visible,l=i===void 0?!0:i,E=a.removeOnLeave,u=E===void 0?!0:E,c=a.forceRender,f=a.children,v=a.motionName,d=a.leavedClassName,R=a.eventProps,N=n(a),M=o.useRef(),_=o.useRef();function x(){try{return M.current instanceof HTMLElement?M.current:Rt(_.current)}catch{return null}}var k=Nt(N,l,x,a),g=D(k,4),S=g[0],b=g[1],L=g[2],w=g[3],V=o.useRef(w);w&&(V.current=!0);var P=o.useCallback(function(z){M.current=z,Be(s,z)},[s]),m,I=p(p({},R),{},{visible:l});if(!f)m=null;else if(S===$||!n(a))w?m=f(p({},I),P):!u&&V.current&&d?m=f(p(p({},I),{},{className:d}),P):c||!u&&!d?m=f(p(p({},I),{},{style:{display:"none"}}),P):m=null;else{var F,W;b===O?W="prepare":rt(b)?W="active":b===j&&(W="start"),m=f(p(p({},I),{},{className:Re(De(v,S),(F={},T(F,De(v,"".concat(S,"-").concat(W)),W),T(F,v,typeof v=="string"),F)),style:L}),P)}if(o.isValidElement(m)&&He(m)){var A=m,B=A.ref;B||(m=o.cloneElement(m,{ref:P}))}return o.createElement(Mt,{ref:_},m)});return r.displayName="CSSMotion",r}const at=kt(et);var me="add",pe="keep",Ee="remove",fe="removed";function Pt(e){var t;return e&&G(e)==="object"&&"key"in e?t=e:t={key:e},p(p({},t),{},{key:String(t.key)})}function Se(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return e.map(Pt)}function xt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=[],r=0,a=t.length,s=Se(e),i=Se(t);s.forEach(function(u){for(var c=!1,f=r;f<a;f+=1){var v=i[f];if(v.key===u.key){r<f&&(n=n.concat(i.slice(r,f).map(function(d){return p(p({},d),{},{status:me})})),r=f),n.push(p(p({},v),{},{status:pe})),r+=1,c=!0;break}}c||n.push(p(p({},u),{},{status:Ee}))}),r<a&&(n=n.concat(i.slice(r).map(function(u){return p(p({},u),{},{status:me})})));var l={};n.forEach(function(u){var c=u.key;l[c]=(l[c]||0)+1});var E=Object.keys(l).filter(function(u){return l[u]>1});return E.forEach(function(u){n=n.filter(function(c){var f=c.key,v=c.status;return f!==u||v!==Ee}),n.forEach(function(c){c.key===u&&(c.status=pe)})}),n}var Ot=["component","children","onVisibleChanged","onAllRemoved"],Dt=["status"],It=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function Wt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:at,n=function(r){Fe(s,r);var a=Ue(s);function s(){var i;$e(this,s);for(var l=arguments.length,E=new Array(l),u=0;u<l;u++)E[u]=arguments[u];return i=a.call.apply(a,[this].concat(E)),T(Ne(i),"state",{keyEntities:[]}),T(Ne(i),"removeKey",function(c){var f=i.state.keyEntities,v=f.map(function(d){return d.key!==c?d:p(p({},d),{},{status:fe})});return i.setState({keyEntities:v}),v.filter(function(d){var R=d.status;return R!==fe}).length}),i}return je(s,[{key:"render",value:function(){var l=this,E=this.state.keyEntities,u=this.props,c=u.component,f=u.children,v=u.onVisibleChanged,d=u.onAllRemoved,R=Me(u,Ot),N=c||o.Fragment,M={};return It.forEach(function(_){M[_]=R[_],delete R[_]}),delete R.keys,o.createElement(N,R,E.map(function(_){var x=_.status,k=Me(_,Dt),g=x===me||x===pe;return o.createElement(t,Et({},M,{key:k.key,visible:g,eventProps:k,onVisibleChanged:function(b){if(v==null||v(b,{key:k.key}),!b){var L=l.removeKey(k.key);L===0&&d&&d()}}}),f)}))}}],[{key:"getDerivedStateFromProps",value:function(l,E){var u=l.keys,c=E.keyEntities,f=Se(u),v=xt(c,f);return{keyEntities:v.filter(function(d){var R=c.find(function(N){var M=N.key;return d.key===M});return!(R&&R.status===fe&&d.status===Ee)})}}}]),s}(o.Component);return T(n,"defaultProps",{component:"div"}),n}const sn=Wt(et),{isValidElement:ot}=St;function cn(e){return e&&ot(e)&&e.type===o.Fragment}function Vt(e,t,n){return ot(e)?o.cloneElement(e,typeof n=="function"?n(e.props||{}):n):t}function Ft(e,t){return Vt(e,e,t)}const Ut=function(e){if(!e)return!1;if(e instanceof HTMLElement&&e.offsetParent)return!0;if(e instanceof SVGGraphicsElement&&e.getBBox){var t=e.getBBox(),n=t.width,r=t.height;if(n||r)return!0}if(e instanceof HTMLElement&&e.getBoundingClientRect){var a=e.getBoundingClientRect(),s=a.width,i=a.height;if(s||i)return!0}return!1},$t=e=>{const{componentCls:t,colorPrimary:n}=e;return{[t]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:`var(--wave-color, ${n})`,boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:[`box-shadow 0.4s ${e.motionEaseOutCirc}`,`opacity 2s ${e.motionEaseOutCirc}`].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0}}}}},jt=gt("Wave",e=>[$t(e)]);var q=p({},yt),Kt=q.version,Bt=q.render,zt=q.unmountComponentAtNode,oe;try{var Ht=Number((Kt||"").split(".")[0]);Ht>=18&&(oe=q.createRoot)}catch{}function Ve(e){var t=q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;t&&G(t)==="object"&&(t.usingClientEntryPoint=e)}var ae="__rc_react_root__";function Qt(e,t){Ve(!0);var n=t[ae]||oe(t);Ve(!1),n.render(e),t[ae]=n}function Gt(e,t){Bt(e,t)}function qt(e,t){if(oe){Qt(e,t);return}Gt(e,t)}function Yt(e){return ge.apply(this,arguments)}function ge(){return ge=Ke(re().mark(function e(t){return re().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Promise.resolve().then(function(){var a;(a=t[ae])===null||a===void 0||a.unmount(),delete t[ae]}));case 1:case"end":return r.stop()}},e)})),ge.apply(this,arguments)}function Jt(e){zt(e)}function Xt(e){return ye.apply(this,arguments)}function ye(){return ye=Ke(re().mark(function e(t){return re().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(oe===void 0){r.next=2;break}return r.abrupt("return",Yt(t));case 2:Jt(t);case 3:case"end":return r.stop()}},e)})),ye.apply(this,arguments)}function Zt(e){const t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return t&&t[1]&&t[2]&&t[3]?!(t[1]===t[2]&&t[2]===t[3]):!0}function le(e){return e&&e!=="#fff"&&e!=="#ffffff"&&e!=="rgb(255, 255, 255)"&&e!=="rgba(255, 255, 255, 1)"&&Zt(e)&&!/rgba\((?:\d*, ){3}0\)/.test(e)&&e!=="transparent"}function en(e){const{borderTopColor:t,borderColor:n,backgroundColor:r}=getComputedStyle(e);return le(t)?t:le(n)?n:le(r)?r:null}function ve(e){return Number.isNaN(e)?0:e}const tn=e=>{const{className:t,target:n}=e,r=o.useRef(null),[a,s]=o.useState(null),[i,l]=o.useState([]),[E,u]=o.useState(0),[c,f]=o.useState(0),[v,d]=o.useState(0),[R,N]=o.useState(0),[M,_]=o.useState(!1),x={left:E,top:c,width:v,height:R,borderRadius:i.map(g=>`${g}px`).join(" ")};a&&(x["--wave-color"]=a);function k(){const g=getComputedStyle(n);s(en(n));const S=g.position==="static",{borderLeftWidth:b,borderTopWidth:L}=g;u(S?n.offsetLeft:ve(-parseFloat(b))),f(S?n.offsetTop:ve(-parseFloat(L))),d(n.offsetWidth),N(n.offsetHeight);const{borderTopLeftRadius:w,borderTopRightRadius:V,borderBottomLeftRadius:P,borderBottomRightRadius:m}=g;l([w,V,m,P].map(I=>ve(parseFloat(I))))}return o.useEffect(()=>{if(n){const g=Q(()=>{k(),_(!0)});let S;return typeof ResizeObserver<"u"&&(S=new ResizeObserver(k),S.observe(n)),()=>{Q.cancel(g),S==null||S.disconnect()}}},[]),M?o.createElement(at,{visible:!0,motionAppear:!0,motionName:"wave-motion",motionDeadline:5e3,onAppearEnd:(g,S)=>{var b;if(S.deadline||S.propertyName==="opacity"){const L=(b=r.current)===null||b===void 0?void 0:b.parentElement;Xt(L).then(()=>{var w;(w=L.parentElement)===null||w===void 0||w.removeChild(L)})}return!1}},g=>{let{className:S}=g;return o.createElement("div",{ref:r,className:Re(t,S),style:x})}):null};function nn(e,t){const n=document.createElement("div");n.style.position="absolute",n.style.left="0px",n.style.top="0px",e==null||e.insertBefore(n,e==null?void 0:e.firstChild),qt(o.createElement(tn,{target:e,className:t}),n)}function rn(e,t){function n(){const r=e.current;nn(r,t)}return n}const an=e=>{const{children:t,disabled:n}=e,{getPrefixCls:r}=o.useContext(ht),a=o.useRef(null),s=r("wave"),[,i]=jt(s),l=rn(a,Re(s,i));if(de.useEffect(()=>{const u=a.current;if(!u||u.nodeType!==1||n)return;const c=f=>{f.target.tagName==="INPUT"||!Ut(f.target)||!u.getAttribute||u.getAttribute("disabled")||u.disabled||u.className.includes("disabled")||u.className.includes("-leave")||l()};return u.addEventListener("click",c,!0),()=>{u.removeEventListener("click",c,!0)}},[n]),!de.isValidElement(t))return t??null;const E=He(t)?ze(t.ref,a):a;return Ft(t,{ref:E})},fn=an;export{at as C,fn as W,Ut as a,cn as b,Ft as c,ze as d,sn as e,Rt as f,un as g,Xt as h,ot as i,Be as j,Vt as k,qt as r,He as s,ne as u,Q as w};