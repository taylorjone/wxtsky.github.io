import{D as ce,M as me,u as de,S as ue,a as Q,E as pe,b as ge}from"./EllipsisOutlined-d703fb41.js";import{k as $e,t as be,g as fe,m as L,T as X,l as G,a as he,n as ve,r as l,C as U,c as I,b as xe,o as R}from"./index-02b61a1a.js";import{u as Ie}from"./useMergedState-5e374978.js";import{i as ye}from"./motion-a25d12c1.js";import{c as W,i as P}from"./index-b03ee216.js";import{i as Y}from"./slide-b195a0bf.js";import{i as Se,T as Oe}from"./index-25427908.js";import{g as Ce}from"./collapse-97de76d4.js";const we=r=>{const{componentCls:t,motionDurationSlow:e,menuHorizontalHeight:o,colorSplit:n,lineWidth:i,lineType:a,menuItemPaddingInline:s}=r;return{[`${t}-horizontal`]:{lineHeight:`${o}px`,border:0,borderBottom:`${i}px ${a} ${n}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${t}-item, ${t}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:s},[`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${t}-item, ${t}-submenu-title`]:{transition:[`border-color ${e}`,`background ${e}`].join(",")},[`${t}-submenu-arrow`]:{display:"none"}}}},Te=we,je=r=>{let{componentCls:t,menuArrowOffset:e}=r;return{[`${t}-rtl`]:{direction:"rtl"},[`${t}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${t}-rtl${t}-vertical,
    ${t}-submenu-rtl ${t}-vertical`]:{[`${t}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(-${e})`},"&::after":{transform:`rotate(45deg) translateY(${e})`}}}}},Be=je,F=r=>Object.assign({},$e(r)),Ee=(r,t)=>{const{componentCls:e,colorItemText:o,colorItemTextSelected:n,colorGroupTitle:i,colorItemBg:a,colorSubItemBg:s,colorItemBgSelected:c,colorActiveBarHeight:d,colorActiveBarWidth:p,colorActiveBarBorderSize:u,motionDurationSlow:g,motionEaseInOut:$,motionEaseOut:m,menuItemPaddingInline:b,motionDurationMid:f,colorItemTextHover:h,lineType:v,colorSplit:S,colorItemTextDisabled:B,colorDangerItemText:O,colorDangerItemTextHover:C,colorDangerItemTextSelected:E,colorDangerItemBgActive:k,colorDangerItemBgSelected:D,colorItemBgHover:M,menuSubMenuBg:H,colorItemTextSelectedHorizontal:w,colorItemBgSelectedHorizontal:T}=r;return{[`${e}-${t}`]:{color:o,background:a,[`&${e}-root:focus-visible`]:Object.assign({},F(r)),[`${e}-item-group-title`]:{color:i},[`${e}-submenu-selected`]:{[`> ${e}-submenu-title`]:{color:n}},[`${e}-item-disabled, ${e}-submenu-disabled`]:{color:`${B} !important`},[`${e}-item:hover, ${e}-submenu-title:hover`]:{[`&:not(${e}-item-selected):not(${e}-submenu-selected)`]:{color:h}},[`&:not(${e}-horizontal)`]:{[`${e}-item:not(${e}-item-selected)`]:{"&:hover":{backgroundColor:M},"&:active":{backgroundColor:c}},[`${e}-submenu-title`]:{"&:hover":{backgroundColor:M},"&:active":{backgroundColor:c}}},[`${e}-item-danger`]:{color:O,[`&${e}-item:hover`]:{[`&:not(${e}-item-selected):not(${e}-submenu-selected)`]:{color:C}},[`&${e}-item:active`]:{background:k}},[`${e}-item a`]:{"&, &:hover":{color:"inherit"}},[`${e}-item-selected`]:{color:n,[`&${e}-item-danger`]:{color:E},["a, a:hover"]:{color:"inherit"}},[`& ${e}-item-selected`]:{backgroundColor:c,[`&${e}-item-danger`]:{backgroundColor:D}},[`${e}-item, ${e}-submenu-title`]:{[`&:not(${e}-item-disabled):focus-visible`]:Object.assign({},F(r))},[`&${e}-submenu > ${e}`]:{backgroundColor:H},[`&${e}-popup > ${e}`]:{backgroundColor:a},[`&${e}-horizontal`]:Object.assign(Object.assign({},t==="dark"?{borderBottom:0}:{}),{[`> ${e}-item, > ${e}-submenu`]:{top:u,marginTop:-u,marginBottom:0,borderRadius:0,"&::after":{position:"absolute",insetInline:b,bottom:0,borderBottom:`${d}px solid transparent`,transition:`border-color ${g} ${$}`,content:'""'},["&:hover, &-active, &-open"]:{"&::after":{borderBottomWidth:d,borderBottomColor:w}},["&-selected"]:{color:w,backgroundColor:T,"&::after":{borderBottomWidth:d,borderBottomColor:w}}}}),[`&${e}-root`]:{[`&${e}-inline, &${e}-vertical`]:{borderInlineEnd:`${u}px ${v} ${S}`}},[`&${e}-inline`]:{[`${e}-sub${e}-inline`]:{background:s},[`${e}-item, ${e}-submenu-title`]:u&&p?{width:`calc(100% + ${u}px)`}:{},[`${e}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${p}px solid ${n}`,transform:"scaleY(0.0001)",opacity:0,transition:[`transform ${f} ${m}`,`opacity ${f} ${m}`].join(","),content:'""'},[`&${e}-item-danger`]:{"&::after":{borderInlineEndColor:E}}},[`${e}-selected, ${e}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:[`transform ${f} ${$}`,`opacity ${f} ${$}`].join(",")}}}}}},V=Ee,K=r=>{const{componentCls:t,menuItemHeight:e,itemMarginInline:o,padding:n,menuArrowSize:i,marginXS:a,marginXXS:s}=r,c=n+i+a;return{[`${t}-item`]:{position:"relative"},[`${t}-item, ${t}-submenu-title`]:{height:e,lineHeight:`${e}px`,paddingInline:n,overflow:"hidden",textOverflow:"ellipsis",marginInline:o,marginBlock:s,width:`calc(100% - ${o*2}px)`},[`${t}-submenu`]:{paddingBottom:.02},[`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]:{height:e,lineHeight:`${e}px`},[`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]:{paddingInlineEnd:c}}},Me=r=>{const{componentCls:t,iconCls:e,menuItemHeight:o,colorTextLightSolid:n,dropdownWidth:i,controlHeightLG:a,motionDurationMid:s,motionEaseOut:c,paddingXL:d,fontSizeSM:p,fontSizeLG:u,motionDurationSlow:g,paddingXS:$,boxShadowSecondary:m}=r,b={height:o,lineHeight:`${o}px`,listStylePosition:"inside",listStyleType:"disc"};return[{[t]:{["&-inline, &-vertical"]:Object.assign({[`&${t}-root`]:{boxShadow:"none"}},K(r))},[`${t}-submenu-popup`]:{[`${t}-vertical`]:Object.assign(Object.assign({},K(r)),{boxShadow:m})}},{[`${t}-submenu-popup ${t}-vertical${t}-sub`]:{minWidth:i,maxHeight:`calc(100vh - ${a*2.5}px)`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${t}-inline`]:{width:"100%",[`&${t}-root`]:{[`${t}-item, ${t}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${g}`,`background ${g}`,`padding ${s} ${c}`].join(","),[`> ${t}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${t}-sub${t}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${t}-submenu > ${t}-submenu-title`]:b,[`& ${t}-item-group-title`]:{paddingInlineStart:d}},[`${t}-item`]:b}},{[`${t}-inline-collapsed`]:{width:o*2,[`&${t}-root`]:{[`${t}-item, ${t}-submenu ${t}-submenu-title`]:{[`> ${t}-inline-collapsed-noicon`]:{fontSize:u,textAlign:"center"}}},[`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${p}px)`,textOverflow:"clip",[`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]:{opacity:0},[`${t}-item-icon, ${e}`]:{margin:0,fontSize:u,lineHeight:`${o}px`,"+ span":{display:"inline-block",opacity:0}}},[`${t}-item-icon, ${e}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${t}-item-icon, ${e}`]:{display:"none"},"a, a:hover":{color:n}},[`${t}-item-group-title`]:Object.assign(Object.assign({},be),{paddingInline:$})}}]},He=Me,Z=r=>{const{componentCls:t,fontSize:e,motionDurationSlow:o,motionDurationMid:n,motionEaseInOut:i,motionEaseOut:a,iconCls:s,controlHeightSM:c}=r;return{[`${t}-item, ${t}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${o}`,`background ${o}`,`padding ${o} ${i}`].join(","),[`${t}-item-icon, ${s}`]:{minWidth:e,fontSize:e,transition:[`font-size ${n} ${a}`,`margin ${o} ${i}`,`color ${o}`].join(","),"+ span":{marginInlineStart:c-e,opacity:1,transition:[`opacity ${o} ${i}`,`margin ${o}`,`color ${o}`].join(",")}},[`${t}-item-icon`]:Object.assign({},ve()),[`&${t}-item-only-child`]:{[`> ${s}, > ${t}-item-icon`]:{marginInlineEnd:0}}},[`${t}-item-disabled, ${t}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},[`> ${t}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},q=r=>{const{componentCls:t,motionDurationSlow:e,motionEaseInOut:o,borderRadius:n,menuArrowSize:i,menuArrowOffset:a}=r;return{[`${t}-submenu`]:{["&-expand-icon, &-arrow"]:{position:"absolute",top:"50%",insetInlineEnd:r.margin,width:i,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${e} ${o}, opacity ${e}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:i*.6,height:i*.15,backgroundColor:"currentcolor",borderRadius:n,transition:[`background ${e} ${o}`,`transform ${e} ${o}`,`top ${e} ${o}`,`color ${e} ${o}`].join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(-${a})`},"&::after":{transform:`rotate(-45deg) translateY(${a})`}}}}},Pe=r=>{const{antCls:t,componentCls:e,fontSize:o,motionDurationSlow:n,motionDurationMid:i,motionEaseInOut:a,lineHeight:s,paddingXS:c,padding:d,colorSplit:p,lineWidth:u,zIndexPopup:g,borderRadiusLG:$,radiusSubMenuItem:m,menuArrowSize:b,menuArrowOffset:f,lineType:h,menuPanelMaskInset:v}=r;return[{"":{[`${e}`]:Object.assign(Object.assign({},G()),{["&-hidden"]:{display:"none"}})},[`${e}-submenu-hidden`]:{display:"none"}},{[e]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},he(r)),G()),{marginBottom:0,paddingInlineStart:0,fontSize:o,lineHeight:0,listStyle:"none",outline:"none",transition:[`background ${n}`,`width ${n} cubic-bezier(0.2, 0, 0, 1) 0s`].join(","),["ul, ol"]:{margin:0,padding:0,listStyle:"none"},["&-overflow"]:{display:"flex",[`${e}-item`]:{flex:"none"}},[`${e}-item, ${e}-submenu, ${e}-submenu-title`]:{borderRadius:r.radiusItem},[`${e}-item-group-title`]:{padding:`${c}px ${d}px`,fontSize:o,lineHeight:s,transition:`all ${n}`},[`&-horizontal ${e}-submenu`]:{transition:[`border-color ${n} ${a}`,`background ${n} ${a}`].join(",")},[`${e}-submenu, ${e}-submenu-inline`]:{transition:[`border-color ${n} ${a}`,`background ${n} ${a}`,`padding ${i} ${a}`].join(",")},[`${e}-submenu ${e}-sub`]:{cursor:"initial",transition:[`background ${n} ${a}`,`padding ${n} ${a}`].join(",")},[`${e}-title-content`]:{transition:`color ${n}`},[`${e}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${e}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:p,borderStyle:h,borderWidth:0,borderTopWidth:u,marginBlock:u,padding:0,"&-dashed":{borderStyle:"dashed"}}}),Z(r)),{[`${e}-item-group`]:{[`${e}-item-group-list`]:{margin:0,padding:0,[`${e}-item, ${e}-submenu-title`]:{paddingInline:`${o*2}px ${d}px`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:g,background:"transparent",borderRadius:$,boxShadow:"none",transformOrigin:"0 0","&::before":{position:"absolute",inset:`${v}px 0 0`,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'}},"&-placement-rightTop::before":{top:0,insetInlineStart:v},[`> ${e}`]:Object.assign(Object.assign(Object.assign({borderRadius:$},Z(r)),q(r)),{[`${e}-item, ${e}-submenu > ${e}-submenu-title`]:{borderRadius:m},[`${e}-submenu-title::after`]:{transition:`transform ${n} ${a}`}})}}),q(r)),{[`&-inline-collapsed ${e}-submenu-arrow,
        &-inline ${e}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${f})`},"&::after":{transform:`rotate(45deg) translateX(-${f})`}},[`${e}-submenu-open${e}-submenu-inline > ${e}-submenu-title > ${e}-submenu-arrow`]:{transform:`translateY(-${b*.2}px)`,"&::after":{transform:`rotate(-45deg) translateX(-${f})`},"&::before":{transform:`rotate(45deg) translateX(${f})`}}})},{[`${t}-layout-header`]:{[e]:{lineHeight:"inherit"}}}]},ze=(r,t)=>fe("Menu",(o,n)=>{let{overrideComponentToken:i}=n;if(t===!1)return[];const{colorBgElevated:a,colorPrimary:s,colorError:c,colorErrorHover:d,colorTextLightSolid:p}=o,{controlHeightLG:u,fontSize:g}=o,$=g/7*5,m=L(o,{menuItemHeight:u,menuItemPaddingInline:o.margin,menuArrowSize:$,menuHorizontalHeight:u*1.15,menuArrowOffset:`${$*.25}px`,menuPanelMaskInset:-7,menuSubMenuBg:a}),b=new X(p).setAlpha(.65).toRgbString(),f=L(m,{colorItemText:b,colorItemTextHover:p,colorGroupTitle:b,colorItemTextSelected:p,colorItemBg:"#001529",colorSubItemBg:"#000c17",colorItemBgActive:"transparent",colorItemBgSelected:s,colorActiveBarWidth:0,colorActiveBarHeight:0,colorActiveBarBorderSize:0,colorItemTextDisabled:new X(p).setAlpha(.25).toRgbString(),colorDangerItemText:c,colorDangerItemTextHover:d,colorDangerItemTextSelected:p,colorDangerItemBgActive:c,colorDangerItemBgSelected:c,menuSubMenuBg:"#001529",colorItemTextSelectedHorizontal:p,colorItemBgSelectedHorizontal:s},Object.assign({},i));return[Pe(m),Te(m),He(m),V(m,"light"),V(f,"dark"),Be(m),Ce(m),Y(m,"slide-up"),Y(m,"slide-down"),Se(m,"zoom-big")]},o=>{const{colorPrimary:n,colorError:i,colorTextDisabled:a,colorErrorBg:s,colorText:c,colorTextDescription:d,colorBgContainer:p,colorFillAlter:u,colorFillContent:g,lineWidth:$,lineWidthBold:m,controlItemBgActive:b,colorBgTextHover:f}=o;return{dropdownWidth:160,zIndexPopup:o.zIndexPopupBase+50,radiusItem:o.borderRadiusLG,radiusSubMenuItem:o.borderRadiusSM,colorItemText:c,colorItemTextHover:c,colorItemTextHoverHorizontal:n,colorGroupTitle:d,colorItemTextSelected:n,colorItemTextSelectedHorizontal:n,colorItemBg:p,colorItemBgHover:f,colorItemBgActive:g,colorSubItemBg:u,colorItemBgSelected:b,colorItemBgSelectedHorizontal:"transparent",colorActiveBarWidth:0,colorActiveBarHeight:m,colorActiveBarBorderSize:$,colorItemTextDisabled:a,colorDangerItemText:i,colorDangerItemTextHover:i,colorDangerItemTextSelected:i,colorDangerItemBgActive:s,colorDangerItemBgSelected:s,itemMarginInline:o.marginXXS}})(r);var ke=globalThis&&globalThis.__rest||function(r,t){var e={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&t.indexOf(o)<0&&(e[o]=r[o]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(r);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(r,o[n])&&(e[o[n]]=r[o[n]]);return e};const A=l.createContext(null),et=r=>{const{children:t}=r,e=ke(r,["children"]),o=l.useContext(A),n=l.useMemo(()=>Object.assign(Object.assign({},o),e),[o,e.prefixCls,e.mode,e.selectable]);return l.createElement(A.Provider,{value:n},t)},J=A;var De=globalThis&&globalThis.__rest||function(r,t){var e={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&t.indexOf(o)<0&&(e[o]=r[o]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(r);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(r,o[n])&&(e[o[n]]=r[o[n]]);return e};const Ne=r=>{const{prefixCls:t,className:e,dashed:o}=r,n=De(r,["prefixCls","className","dashed"]),{getPrefixCls:i}=l.useContext(U),a=i("menu",t),s=I({[`${a}-item-divider-dashed`]:!!o},e);return l.createElement(ce,Object.assign({className:s},n))},ee=Ne;globalThis&&globalThis.__rest;const te=l.createContext({}),Ae=l.createContext({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),z=Ae,_e=r=>{var t;const{className:e,children:o,icon:n,title:i,danger:a}=r,{prefixCls:s,firstLevel:c,direction:d,disableMenuItemTitleTooltip:p,inlineCollapsed:u}=l.useContext(z),g=v=>{const S=l.createElement("span",{className:`${s}-title-content`},o);return(!n||P(o)&&o.type==="span")&&o&&v&&c&&typeof o=="string"?l.createElement("div",{className:`${s}-inline-collapsed-noicon`},o.charAt(0)):S},{siderCollapsed:$}=l.useContext(te);let m=i;typeof i>"u"?m=c?o:"":i===!1&&(m="");const b={title:m};!$&&!u&&(b.title=null,b.open=!1);const f=xe(o).length;let h=l.createElement(me,Object.assign({},R(r,["title","icon","danger"]),{className:I({[`${s}-item-danger`]:a,[`${s}-item-only-child`]:(n?f+1:f)===1},e),title:typeof i=="string"?i:void 0}),W(n,{className:I(P(n)?(t=n.props)===null||t===void 0?void 0:t.className:"",`${s}-item-icon`)}),g(u));return p||(h=l.createElement(Oe,Object.assign({},b,{placement:d==="rtl"?"left":"right",overlayClassName:`${s}-inline-collapsed-tooltip`}),h)),h},oe=_e,Re=r=>{var t;const{popupClassName:e,icon:o,title:n,theme:i}=r,a=l.useContext(z),{prefixCls:s,inlineCollapsed:c,theme:d,mode:p}=a,u=de();let g;if(!o)g=c&&!u.length&&n&&typeof n=="string"?l.createElement("div",{className:`${s}-inline-collapsed-noicon`},n.charAt(0)):l.createElement("span",{className:`${s}-title-content`},n);else{const b=P(n)&&n.type==="span";g=l.createElement(l.Fragment,null,W(o,{className:I(P(o)?(t=o.props)===null||t===void 0?void 0:t.className:"",`${s}-item-icon`)}),b?n:l.createElement("span",{className:`${s}-title-content`},n))}const $=l.useMemo(()=>Object.assign(Object.assign({},a),{firstLevel:!1}),[a]),m=p==="horizontal"?[0,8]:[10,0];return l.createElement(z.Provider,{value:$},l.createElement(ue,Object.assign({popupOffset:m},R(r,["icon"]),{title:g,popupClassName:I(s,e,`${s}-${i||d}`)})))},ne=Re;var We=globalThis&&globalThis.__rest||function(r,t){var e={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&t.indexOf(o)<0&&(e[o]=r[o]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(r);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(r,o[n])&&(e[o[n]]=r[o[n]]);return e};function _(r){return(r||[]).map((t,e)=>{if(t&&typeof t=="object"){const o=t,{label:n,children:i,key:a,type:s}=o,c=We(o,["label","children","key","type"]),d=a??`tmp-${e}`;return i||s==="group"?s==="group"?l.createElement(Q,Object.assign({key:d},c,{title:n}),_(i)):l.createElement(ne,Object.assign({key:d},c,{title:n}),_(i)):s==="divider"?l.createElement(ee,Object.assign({key:d},c)):l.createElement(oe,Object.assign({key:d},c),n)}return null}).filter(t=>t)}function Le(r){return l.useMemo(()=>r&&_(r),[r])}var Xe=globalThis&&globalThis.__rest||function(r,t){var e={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&t.indexOf(o)<0&&(e[o]=r[o]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(r);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(r,o[n])&&(e[o[n]]=r[o[n]]);return e};const Ge=l.forwardRef((r,t)=>{var e,o;const n=l.useContext(J),i=n||{},{getPrefixCls:a,getPopupContainer:s,direction:c}=l.useContext(U),d=a(),{prefixCls:p,className:u,theme:g="light",expandIcon:$,_internalDisableMenuItemTitleTooltip:m,inlineCollapsed:b,siderCollapsed:f,items:h,children:v,rootClassName:S,mode:B,selectable:O,onClick:C}=r,E=Xe(r,["prefixCls","className","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","items","children","rootClassName","mode","selectable","onClick"]),k=R(E,["collapsedWidth"]),D=Le(h)||v;(e=i.validator)===null||e===void 0||e.call(i,{mode:B});const M=Ie(function(){var x;C==null||C.apply(void 0,arguments),(x=i.onClick)===null||x===void 0||x.call(i)}),H=i.mode||B,w=O??i.selectable,T=l.useMemo(()=>f!==void 0?f:b,[b,f]),re={horizontal:{motionName:`${d}-slide-up`},inline:ye(d),other:{motionName:`${d}-zoom-big`}},y=a("menu",p||i.prefixCls),[ie,le]=ze(y,!n),ae=I(`${y}-${g}`,u);let N;if(typeof $=="function")N=$;else{const x=$||i.expandIcon;N=W(x,{className:I(`${y}-submenu-expand-icon`,(o=x==null?void 0:x.props)===null||o===void 0?void 0:o.className)})}const se=l.useMemo(()=>({prefixCls:y,inlineCollapsed:T||!1,direction:c,firstLevel:!0,theme:g,mode:H,disableMenuItemTitleTooltip:m}),[y,T,c,m,g]);return ie(l.createElement(J.Provider,{value:null},l.createElement(z.Provider,{value:se},l.createElement(pe,Object.assign({getPopupContainer:s,overflowedIndicator:l.createElement(ge,null),overflowedIndicatorPopupClassName:`${y}-${g}`,mode:H,selectable:w,onClick:M},k,{inlineCollapsed:T,className:ae,prefixCls:y,direction:c,defaultMotions:re,expandIcon:N,ref:t,rootClassName:I(S,le)}),D))))}),Ye=Ge,j=l.forwardRef((r,t)=>{const e=l.useRef(null),o=l.useContext(te);return l.useImperativeHandle(t,()=>({menu:e.current,focus:n=>{var i;(i=e.current)===null||i===void 0||i.focus(n)}})),l.createElement(Ye,Object.assign({ref:e},r,o))});j.Item=oe;j.SubMenu=ne;j.Divider=ee;j.ItemGroup=Q;const tt=j;export{tt as M,et as O};