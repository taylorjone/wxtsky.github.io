import{r as a,d as q,B as ae,_ as F,c as z,f as L,F as le,G as se,H as de,I as ce,R as V,E as ue,g as fe,m as be,K as ge,a as H,k as X,C as G,a0 as pe,$ as he}from"./index-02b61a1a.js";import{T as ve}from"./motion-a25d12c1.js";import{K as Y}from"./slide-b195a0bf.js";import{w as Ce,d as me}from"./index-b03ee216.js";import{g as ye}from"./EllipsisOutlined-d703fb41.js";import{a as ke}from"./useMergedState-5e374978.js";import{g as Se}from"./getDataOrAriaProps-cf91de79.js";import{b as xe}from"./index-b0217399.js";var M={adjustX:1,adjustY:1},N=[0,0],we={topLeft:{points:["bl","tl"],overflow:M,offset:[0,-4],targetOffset:N},topCenter:{points:["bc","tc"],overflow:M,offset:[0,-4],targetOffset:N},topRight:{points:["br","tr"],overflow:M,offset:[0,-4],targetOffset:N},bottomLeft:{points:["tl","bl"],overflow:M,offset:[0,4],targetOffset:N},bottomCenter:{points:["tc","bc"],overflow:M,offset:[0,4],targetOffset:N},bottomRight:{points:["tr","br"],overflow:M,offset:[0,4],targetOffset:N}},$e=Y.ESC,Oe=Y.TAB;function Re(e){var i=e.visible,n=e.setTriggerVisible,t=e.triggerRef,o=e.onVisibleChange,r=e.autoFocus,l=a.useRef(!1),S=function(){if(i&&t.current){var d,s,u,v;(d=t.current)===null||d===void 0||(s=d.triggerRef)===null||s===void 0||(u=s.current)===null||u===void 0||(v=u.focus)===null||v===void 0||v.call(u),n(!1),typeof o=="function"&&o(!1)}},h=function(){var d,s,u,v,$=ye((d=t.current)===null||d===void 0||(s=d.popupRef)===null||s===void 0||(u=s.current)===null||u===void 0||(v=u.getElement)===null||v===void 0?void 0:v.call(u)),c=$[0];return c!=null&&c.focus?(c.focus(),l.current=!0,!0):!1},m=function(d){switch(d.keyCode){case $e:S();break;case Oe:{var s=!1;l.current||(s=h()),s?d.preventDefault():S();break}}};a.useEffect(function(){return i?(window.addEventListener("keydown",m),r&&Ce(h,3),function(){window.removeEventListener("keydown",m),l.current=!1}):function(){l.current=!1}},[i])}var Ee=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"];function Be(e,i){var n=e.arrow,t=n===void 0?!1:n,o=e.prefixCls,r=o===void 0?"rc-dropdown":o,l=e.transitionName,S=e.animation,h=e.align,m=e.placement,y=m===void 0?"bottomLeft":m,d=e.placements,s=d===void 0?we:d,u=e.getPopupContainer,v=e.showAction,$=e.hideAction,c=e.overlayClassName,k=e.overlayStyle,x=e.visible,C=e.trigger,b=C===void 0?["hover"]:C,f=e.autoFocus,w=q(e,Ee),E=a.useState(),O=ae(E,2),R=O[0],B=O[1],I="visible"in e?x:R,g=a.useRef(null);a.useImperativeHandle(i,function(){return g.current}),Re({visible:I,setTriggerVisible:B,triggerRef:g,onVisibleChange:e.onVisibleChange,autoFocus:f});var P=function(){var p=e.overlay,D;return typeof p=="function"?D=p():D=p,D},j=function(p){var D=e.onOverlayClick;B(!1),D&&D(p)},_=function(p){var D=e.onVisibleChange;B(p),typeof D=="function"&&D(p)},U=function(){var p=P();return a.createElement(a.Fragment,null,t&&a.createElement("div",{className:"".concat(r,"-arrow")}),p)},oe=function(){var p=e.overlay;return typeof p=="function"?U:U()},te=function(){var p=e.minOverlayWidthMatchTrigger,D=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?p:!D},re=function(){var p=e.openClassName;return p!==void 0?p:"".concat(r,"-open")},ne=function(){var p=e.children,D=p.props?p.props:{},ie=z(D.className,re());return I&&p?a.cloneElement(p,{className:ie}):p},W=$;return!W&&b.indexOf("contextMenu")!==-1&&(W=["click"]),a.createElement(ve,F(F({builtinPlacements:s},w),{},{prefixCls:r,ref:g,popupClassName:z(c,L({},"".concat(r,"-show-arrow"),t)),popupStyle:k,action:b,showAction:v,hideAction:W||[],popupPlacement:y,popupAlign:h,popupTransitionName:l,popupAnimation:S,popupVisible:I,stretch:te()?"minWidth":"",popup:oe(),onPopupVisibleChange:_,onPopupClick:j,getPopupContainer:u}),ne())}const Qe=a.forwardRef(Be),J=a.createContext(null),Pe=J.Provider,Q=a.createContext(null),De=Q.Provider;var Z=function(e){le(n,e);var i=se(n);function n(t){var o;de(this,n),o=i.call(this,t),o.handleChange=function(l){var S=o.props,h=S.disabled,m=S.onChange;h||("checked"in o.props||o.setState({checked:l.target.checked}),m&&m({target:F(F({},o.props),{},{checked:l.target.checked}),stopPropagation:function(){l.stopPropagation()},preventDefault:function(){l.preventDefault()},nativeEvent:l.nativeEvent}))},o.saveInput=function(l){o.input=l};var r="checked"in t?t.checked:t.defaultChecked;return o.state={checked:r},o}return ce(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var o,r=this.props,l=r.prefixCls,S=r.className,h=r.style,m=r.name,y=r.id,d=r.type,s=r.disabled,u=r.readOnly,v=r.tabIndex,$=r.onClick,c=r.onFocus,k=r.onBlur,x=r.onKeyDown,C=r.onKeyPress,b=r.onKeyUp,f=r.autoFocus,w=r.value,E=r.required,O=q(r,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),R=Object.keys(O).reduce(function(g,P){return(P.substr(0,5)==="aria-"||P.substr(0,5)==="data-"||P==="role")&&(g[P]=O[P]),g},{}),B=this.state.checked,I=z(l,S,(o={},L(o,"".concat(l,"-checked"),B),L(o,"".concat(l,"-disabled"),s),o));return V.createElement("span",{className:I,style:h},V.createElement("input",ue({name:m,id:y,type:d,required:E,readOnly:u,disabled:s,tabIndex:v,className:"".concat(l,"-input"),checked:!!B,onClick:$,onFocus:c,onBlur:k,onKeyUp:b,onKeyDown:x,onKeyPress:C,onChange:this.handleChange,autoFocus:f,ref:this.saveInput,value:w},R)),V.createElement("span",{className:"".concat(l,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(o,r){return"checked"in o?F(F({},r),{},{checked:o.checked}):null}}]),n}(a.Component);Z.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const Ie=new ge("antRadioEffect",{"0%":{transform:"scale(1)",opacity:.5},"100%":{transform:"scale(1.6)",opacity:0}}),Te=e=>{const{componentCls:i,antCls:n}=e,t=`${i}-group`;return{[t]:Object.assign(Object.assign({},H(e)),{display:"inline-block",fontSize:0,[`&${t}-rtl`]:{direction:"rtl"},[`${n}-badge ${n}-badge-count`]:{zIndex:1},[`> ${n}-badge:not(:first-child) > ${n}-button-wrapper`]:{borderInlineStart:"none"}})}},Me=e=>{const{componentCls:i,radioWrapperMarginRight:n,radioCheckedColor:t,radioSize:o,motionDurationSlow:r,motionDurationMid:l,motionEaseInOut:S,motionEaseInOutCirc:h,radioButtonBg:m,colorBorder:y,lineWidth:d,radioDotSize:s,colorBgContainerDisabled:u,colorTextDisabled:v,paddingXS:$,radioDotDisabledColor:c,lineType:k,radioDotDisabledSize:x,wireframe:C,colorWhite:b}=e,f=`${i}-inner`;return{[`${i}-wrapper`]:Object.assign(Object.assign({},H(e)),{position:"relative",display:"inline-flex",alignItems:"baseline",marginInlineStart:0,marginInlineEnd:n,cursor:"pointer",[`&${i}-wrapper-rtl`]:{direction:"rtl"},"&-disabled":{cursor:"not-allowed",color:e.colorTextDisabled},"&::after":{display:"inline-block",width:0,overflow:"hidden",content:'"\\a0"'},[`${i}-checked::after`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:"100%",height:"100%",border:`${d}px ${k} ${t}`,borderRadius:"50%",visibility:"hidden",animationName:Ie,animationDuration:r,animationTimingFunction:S,animationFillMode:"both",content:'""'},[i]:Object.assign(Object.assign({},H(e)),{position:"relative",display:"inline-block",outline:"none",cursor:"pointer",alignSelf:"center"}),[`${i}-wrapper:hover &,
        &:hover ${f}`]:{borderColor:t},[`${i}-input:focus-visible + ${f}`]:Object.assign({},X(e)),[`${i}:hover::after, ${i}-wrapper:hover &::after`]:{visibility:"visible"},[`${i}-inner`]:{"&::after":{boxSizing:"border-box",position:"absolute",insetBlockStart:"50%",insetInlineStart:"50%",display:"block",width:o,height:o,marginBlockStart:o/-2,marginInlineStart:o/-2,backgroundColor:C?t:b,borderBlockStart:0,borderInlineStart:0,borderRadius:o,transform:"scale(0)",opacity:0,transition:`all ${r} ${h}`,content:'""'},boxSizing:"border-box",position:"relative",insetBlockStart:0,insetInlineStart:0,display:"block",width:o,height:o,backgroundColor:m,borderColor:y,borderStyle:"solid",borderWidth:d,borderRadius:"50%",transition:`all ${l}`},[`${i}-input`]:{position:"absolute",insetBlockStart:0,insetInlineEnd:0,insetBlockEnd:0,insetInlineStart:0,zIndex:1,cursor:"pointer",opacity:0},[`${i}-checked`]:{[f]:{borderColor:t,backgroundColor:C?m:t,"&::after":{transform:`scale(${s/o})`,opacity:1,transition:`all ${r} ${h}`}}},[`${i}-disabled`]:{cursor:"not-allowed",[f]:{backgroundColor:u,borderColor:y,cursor:"not-allowed","&::after":{backgroundColor:c}},[`${i}-input`]:{cursor:"not-allowed"},[`${i}-disabled + span`]:{color:v,cursor:"not-allowed"},[`&${i}-checked`]:{[f]:{"&::after":{transform:`scale(${x/o})`}}}},[`span${i} + *`]:{paddingInlineStart:$,paddingInlineEnd:$}})}},Ne=e=>{const{radioButtonColor:i,controlHeight:n,componentCls:t,lineWidth:o,lineType:r,colorBorder:l,motionDurationSlow:S,motionDurationMid:h,radioButtonPaddingHorizontal:m,fontSize:y,radioButtonBg:d,fontSizeLG:s,controlHeightLG:u,controlHeightSM:v,paddingXS:$,borderRadius:c,borderRadiusSM:k,borderRadiusLG:x,radioCheckedColor:C,radioButtonCheckedBg:b,radioButtonHoverColor:f,radioButtonActiveColor:w,radioSolidCheckedColor:E,colorTextDisabled:O,colorBgContainerDisabled:R,radioDisabledButtonCheckedColor:B,radioDisabledButtonCheckedBg:I}=e;return{[`${t}-button-wrapper`]:{position:"relative",display:"inline-block",height:n,margin:0,paddingInline:m,paddingBlock:0,color:i,fontSize:y,lineHeight:`${n-o*2}px`,background:d,border:`${o}px ${r} ${l}`,borderBlockStartWidth:o+.02,borderInlineStartWidth:0,borderInlineEndWidth:o,cursor:"pointer",transition:[`color ${h}`,`background ${h}`,`border-color ${h}`,`box-shadow ${h}`].join(","),a:{color:i},[`> ${t}-button`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:-1,width:"100%",height:"100%"},"&:not(:first-child)":{"&::before":{position:"absolute",insetBlockStart:-o,insetInlineStart:-o,display:"block",boxSizing:"content-box",width:1,height:"100%",paddingBlock:o,paddingInline:0,backgroundColor:l,transition:`background-color ${S}`,content:'""'}},"&:first-child":{borderInlineStart:`${o}px ${r} ${l}`,borderStartStartRadius:c,borderEndStartRadius:c},"&:last-child":{borderStartEndRadius:c,borderEndEndRadius:c},"&:first-child:last-child":{borderRadius:c},[`${t}-group-large &`]:{height:u,fontSize:s,lineHeight:`${u-o*2}px`,"&:first-child":{borderStartStartRadius:x,borderEndStartRadius:x},"&:last-child":{borderStartEndRadius:x,borderEndEndRadius:x}},[`${t}-group-small &`]:{height:v,paddingInline:$-o,paddingBlock:0,lineHeight:`${v-o*2}px`,"&:first-child":{borderStartStartRadius:k,borderEndStartRadius:k},"&:last-child":{borderStartEndRadius:k,borderEndEndRadius:k}},"&:hover":{position:"relative",color:C},"&:has(:focus-visible)":Object.assign({},X(e)),[`${t}-inner, input[type='checkbox'], input[type='radio']`]:{width:0,height:0,opacity:0,pointerEvents:"none"},[`&-checked:not(${t}-button-wrapper-disabled)`]:{zIndex:1,color:C,background:b,borderColor:C,"&::before":{backgroundColor:C},"&:first-child":{borderColor:C},"&:hover":{color:f,borderColor:f,"&::before":{backgroundColor:f}},"&:active":{color:w,borderColor:w,"&::before":{backgroundColor:w}}},[`${t}-group-solid &-checked:not(${t}-button-wrapper-disabled)`]:{color:E,background:C,borderColor:C,"&:hover":{color:E,background:f,borderColor:f},"&:active":{color:E,background:w,borderColor:w}},"&-disabled":{color:O,backgroundColor:R,borderColor:l,cursor:"not-allowed","&:first-child, &:hover":{color:O,backgroundColor:R,borderColor:l}},[`&-disabled${t}-button-wrapper-checked`]:{color:B,backgroundColor:I,borderColor:l,boxShadow:"none"}}}},ee=fe("Radio",e=>{const{padding:i,lineWidth:n,controlItemBgActiveDisabled:t,colorTextDisabled:o,colorBgContainer:r,fontSizeLG:l,controlOutline:S,colorPrimaryHover:h,colorPrimaryActive:m,colorText:y,colorPrimary:d,marginXS:s,controlOutlineWidth:u,colorTextLightSolid:v,wireframe:$}=e,c=`0 0 0 ${u}px ${S}`,k=c,x=l,C=4,b=x-C*2,f=$?b:x-(C+n)*2,w=d,E=y,O=h,R=m,B=i-n,P=be(e,{radioFocusShadow:c,radioButtonFocusShadow:k,radioSize:x,radioDotSize:f,radioDotDisabledSize:b,radioCheckedColor:w,radioDotDisabledColor:o,radioSolidCheckedColor:v,radioButtonBg:r,radioButtonCheckedBg:r,radioButtonColor:E,radioButtonHoverColor:O,radioButtonActiveColor:R,radioButtonPaddingHorizontal:B,radioDisabledButtonCheckedBg:t,radioDisabledButtonCheckedColor:o,radioWrapperMarginRight:s});return[Te(P),Me(P),Ne(P)]});var Fe=globalThis&&globalThis.__rest||function(e,i){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]]);return n};const ze=(e,i)=>{const n=a.useContext(J),t=a.useContext(Q),{getPrefixCls:o,direction:r}=a.useContext(G),l=a.useRef(),S=me(i,l),{isFormItemInput:h}=a.useContext(xe),m=E=>{var O,R;(O=e.onChange)===null||O===void 0||O.call(e,E),(R=n==null?void 0:n.onChange)===null||R===void 0||R.call(n,E)},{prefixCls:y,className:d,children:s,style:u,disabled:v}=e,$=Fe(e,["prefixCls","className","children","style","disabled"]),c=o("radio",y),k=((n==null?void 0:n.optionType)||t)==="button"?`${c}-button`:c,[x,C]=ee(c),b=Object.assign({},$),f=a.useContext(pe);b.disabled=v||f,n&&(b.name=n.name,b.onChange=m,b.checked=e.value===n.value,b.disabled=b.disabled||n.disabled);const w=z(`${k}-wrapper`,{[`${k}-wrapper-checked`]:b.checked,[`${k}-wrapper-disabled`]:b.disabled,[`${k}-wrapper-rtl`]:r==="rtl",[`${k}-wrapper-in-form-item`]:h},d,C);return x(a.createElement("label",{className:w,style:u,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},a.createElement(Z,Object.assign({},b,{type:"radio",prefixCls:k,ref:S})),s!==void 0?a.createElement("span",null,s):null))},je=a.forwardRef(ze),A=je,_e=a.forwardRef((e,i)=>{const{getPrefixCls:n,direction:t}=a.useContext(G),o=a.useContext(he),[r,l]=ke(e.defaultValue,{value:e.value}),S=g=>{const P=r,j=g.target.value;"value"in e||l(j);const{onChange:_}=e;_&&j!==P&&_(g)},{prefixCls:h,className:m="",options:y,buttonStyle:d="outline",disabled:s,children:u,size:v,style:$,id:c,onMouseEnter:k,onMouseLeave:x,onFocus:C,onBlur:b}=e,f=n("radio",h),w=`${f}-group`,[E,O]=ee(f);let R=u;y&&y.length>0&&(R=y.map(g=>typeof g=="string"||typeof g=="number"?a.createElement(A,{key:g.toString(),prefixCls:f,disabled:s,value:g,checked:r===g},g):a.createElement(A,{key:`radio-group-value-options-${g.value}`,prefixCls:f,disabled:g.disabled||s,value:g.value,checked:r===g.value,style:g.style},g.label)));const B=v||o,I=z(w,`${w}-${d}`,{[`${w}-${B}`]:B,[`${w}-rtl`]:t==="rtl"},m,O);return E(a.createElement("div",Object.assign({},Se(e),{className:I,style:$,onMouseEnter:k,onMouseLeave:x,onFocus:C,onBlur:b,id:c,ref:i}),a.createElement(Pe,{value:{onChange:S,value:r,disabled:e.disabled,name:e.name,optionType:e.optionType}},R)))}),Ae=a.memo(_e);var Ke=globalThis&&globalThis.__rest||function(e,i){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)i.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]]);return n};const We=(e,i)=>{const{getPrefixCls:n}=a.useContext(G),{prefixCls:t}=e,o=Ke(e,["prefixCls"]),r=n("radio",t);return a.createElement(De,{value:"button"},a.createElement(A,Object.assign({prefixCls:r},o,{type:"radio",ref:i})))},Ve=a.forwardRef(We),K=A;K.Button=Ve;K.Group=Ae;K.__ANT_RADIO=!0;const Ze=K;export{Z as C,Qe as D,Ze as R};