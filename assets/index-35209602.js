import{r as l,c as w,g as q,m as J,a as K,t as le,C as _,b as ie,A as ae,_ as x,d as Q,w as U,u as se,e as ce,f as de,s as me,j as C,h as B,i as ue,O as pe}from"./index-0d81f36f.js";import{B as X}from"./index-d0e23e70.js";import{c as ge,W as fe}from"./index-6ec23b91.js";import{u as be,r as k}from"./responsiveObserver-abd4cbbd.js";import{C as he,a as G}from"./index-25073e35.js";import{g as ye,i as Ce,a as xe}from"./index-cc8777d0.js";import{M as ve}from"./index-5ee1957e.js";import{F as Se,H as $e}from"./HomeTwoTone-bcfcf918.js";import"./useMergedState-4984f5cf.js";import"./fade-d6f29317.js";const we=e=>{let{children:t}=e;return t},Pe=we;function O(e){return e!=null}const Ee=e=>{let{itemPrefixCls:t,component:o,span:n,className:r,style:i,labelStyle:c,contentStyle:a,bordered:m,label:d,content:s,colon:p}=e;const g=o;return m?l.createElement(g,{className:w({[`${t}-item-label`]:O(d),[`${t}-item-content`]:O(s)},r),style:i,colSpan:n},O(d)&&l.createElement("span",{style:c},d),O(s)&&l.createElement("span",{style:a},s)):l.createElement(g,{className:w(`${t}-item`,r),style:i,colSpan:n},l.createElement("div",{className:`${t}-item-container`},(d||d===0)&&l.createElement("span",{className:w(`${t}-item-label`,{[`${t}-item-no-colon`]:!p}),style:c},d),(s||s===0)&&l.createElement("span",{className:w(`${t}-item-content`),style:a},s)))},H=Ee;function F(e,t,o){let{colon:n,prefixCls:r,bordered:i}=t,{component:c,type:a,showLabel:m,showContent:d,labelStyle:s,contentStyle:p}=o;return e.map((g,b)=>{let{props:{label:f,children:h,prefixCls:u=r,className:S,style:y,labelStyle:P,contentStyle:v,span:E=1},key:$}=g;return typeof c=="string"?l.createElement(H,{key:`${a}-${$||b}`,className:S,style:y,labelStyle:Object.assign(Object.assign({},s),P),contentStyle:Object.assign(Object.assign({},p),v),span:E,colon:n,component:c,itemPrefixCls:u,bordered:i,label:m?f:null,content:d?h:null}):[l.createElement(H,{key:`label-${$||b}`,className:S,style:Object.assign(Object.assign(Object.assign({},s),y),P),span:1,colon:n,component:c[0],itemPrefixCls:u,bordered:i,label:f}),l.createElement(H,{key:`content-${$||b}`,className:S,style:Object.assign(Object.assign(Object.assign({},p),y),v),span:E*2-1,component:c[1],itemPrefixCls:u,bordered:i,content:h})]})}const Ie=e=>{const t=l.useContext(Y),{prefixCls:o,vertical:n,row:r,index:i,bordered:c}=e;return n?l.createElement(l.Fragment,null,l.createElement("tr",{key:`label-${i}`,className:`${o}-row`},F(r,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),l.createElement("tr",{key:`content-${i}`,className:`${o}-row`},F(r,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):l.createElement("tr",{key:i,className:`${o}-row`},F(r,e,Object.assign({component:c?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},Ne=Ie,Be=e=>{const{componentCls:t,descriptionsSmallPadding:o,descriptionsDefaultPadding:n,descriptionsMiddlePadding:r,descriptionsBg:i}=e;return{[`&${t}-bordered`]:{[`${t}-view`]:{border:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto",borderCollapse:"collapse"}},[`${t}-item-label, ${t}-item-content`]:{padding:n,borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`${t}-item-label`]:{backgroundColor:i,"&::after":{display:"none"}},[`${t}-row`]:{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"}},[`&${t}-middle`]:{[`${t}-item-label, ${t}-item-content`]:{padding:r}},[`&${t}-small`]:{[`${t}-item-label, ${t}-item-content`]:{padding:o}}}}},Oe=e=>{const{componentCls:t,descriptionsExtraColor:o,descriptionItemPaddingBottom:n,descriptionsItemLabelColonMarginRight:r,descriptionsItemLabelColonMarginLeft:i,descriptionsTitleMarginBottom:c}=e;return{[t]:Object.assign(Object.assign(Object.assign({},K(e)),Be(e)),{["&-rtl"]:{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:c},[`${t}-title`]:Object.assign(Object.assign({},le),{flex:"auto",color:e.colorText,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:o,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}},[`${t}-row`]:{"> th, > td":{paddingBottom:n},"&:last-child":{borderBottom:"none"}},[`${t}-item-label`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${i}px ${r}px`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},Te=q("Descriptions",e=>{const t=e.colorFillAlter,o=e.fontSizeSM*e.lineHeightSM,n=e.colorText,r=`${e.paddingXS}px ${e.padding}px`,i=`${e.padding}px ${e.paddingLG}px`,c=`${e.paddingSM}px ${e.paddingLG}px`,a=e.padding,m=e.marginXS,d=e.marginXXS/2,s=J(e,{descriptionsBg:t,descriptionsTitleMarginBottom:o,descriptionsExtraColor:n,descriptionItemPaddingBottom:a,descriptionsSmallPadding:r,descriptionsDefaultPadding:i,descriptionsMiddlePadding:c,descriptionsItemLabelColonMarginRight:m,descriptionsItemLabelColonMarginLeft:d});return[Oe(s)]}),Y=l.createContext({}),Z={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function je(e,t){if(typeof e=="number")return e;if(typeof e=="object")for(let o=0;o<k.length;o++){const n=k[o];if(t[n]&&e[n]!==void 0)return e[n]||Z[n]}return 3}function V(e,t,o){let n=e;return(o===void 0||o>t)&&(n=ge(e,{span:t})),n}function Ae(e,t){const o=ie(e).filter(c=>c),n=[];let r=[],i=t;return o.forEach((c,a)=>{var m;const d=(m=c.props)===null||m===void 0?void 0:m.span,s=d||1;if(a===o.length-1){r.push(V(c,i,d)),n.push(r);return}s<i?(i-=s,r.push(c)):(r.push(V(c,i,s)),n.push(r),i=t,r=[])}),n}function z(e){let{prefixCls:t,title:o,extra:n,column:r=Z,colon:i=!0,bordered:c,layout:a,children:m,className:d,style:s,size:p,labelStyle:g,contentStyle:b}=e;const{getPrefixCls:f,direction:h}=l.useContext(_),u=f("descriptions",t),[S,y]=l.useState({}),P=je(r,S),[v,E]=Te(u),$=be();l.useEffect(()=>{const I=$.subscribe(N=>{typeof r=="object"&&y(N)});return()=>{$.unsubscribe(I)}},[]);const R=Ae(m,P),M=l.useMemo(()=>({labelStyle:g,contentStyle:b}),[g,b]);return v(l.createElement(Y.Provider,{value:M},l.createElement("div",{className:w(u,{[`${u}-${p}`]:p&&p!=="default",[`${u}-bordered`]:!!c,[`${u}-rtl`]:h==="rtl"},d,E),style:s},(o||n)&&l.createElement("div",{className:`${u}-header`},o&&l.createElement("div",{className:`${u}-title`},o),n&&l.createElement("div",{className:`${u}-extra`},n)),l.createElement("div",{className:`${u}-view`},l.createElement("table",null,l.createElement("tbody",null,R.map((I,N)=>l.createElement(Ne,{key:N,index:N,colon:i,prefixCls:u,vertical:a==="vertical",bordered:c,row:I}))))))))}z.Item=Pe;function ze(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const T=(e,t,o)=>{const n=ze(o);return{[`${e.componentCls}-${t}`]:{color:e[`color${o}`],background:e[`color${n}Bg`],borderColor:e[`color${n}Border`]}}},Le=e=>ye(e,(t,o)=>{let{textColor:n,lightBorderColor:r,lightColor:i,darkColor:c}=o;return{[`${e.componentCls}-${t}`]:{color:n,background:i,borderColor:r,"&-inverse":{color:e.colorTextLightSolid,background:c,borderColor:c}}}}),Re=e=>{const{paddingXXS:t,lineWidth:o,tagPaddingHorizontal:n,componentCls:r}=e,i=n-o,c=t-o;return{[r]:Object.assign(Object.assign({},K(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:i,fontSize:e.tagFontSize,lineHeight:`${e.tagLineHeight}px`,whiteSpace:"nowrap",background:e.tagDefaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.tagDefaultColor},[`${r}-close-icon`]:{marginInlineStart:c,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:i}})}},ee=q("Tag",e=>{const{fontSize:t,lineHeight:o,lineWidth:n,fontSizeIcon:r}=e,i=Math.round(t*o),c=e.fontSizeSM,a=i-n*2,m=e.colorFillAlter,d=e.colorText,s=J(e,{tagFontSize:c,tagLineHeight:a,tagDefaultBg:m,tagDefaultColor:d,tagIconSize:r-2*n,tagPaddingHorizontal:8});return[Re(s),Le(s),T(s,"success","Success"),T(s,"processing","Info"),T(s,"error","Error"),T(s,"warning","Warning")]});var Me=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};const De=e=>{var{prefixCls:t,className:o,checked:n,onChange:r,onClick:i}=e,c=Me(e,["prefixCls","className","checked","onChange","onClick"]);const{getPrefixCls:a}=l.useContext(_),m=b=>{r==null||r(!n),i==null||i(b)},d=a("tag",t),[s,p]=ee(d),g=w(d,{[`${d}-checkable`]:!0,[`${d}-checkable-checked`]:n},o,p);return s(l.createElement("span",Object.assign({},c,{className:g,onClick:m})))},He=De;var Fe=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};const _e=(e,t)=>{var{prefixCls:o,className:n,style:r,children:i,icon:c,color:a,onClose:m,closeIcon:d,closable:s=!1}=e,p=Fe(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]);const{getPrefixCls:g,direction:b}=l.useContext(_),[f,h]=l.useState(!0);l.useEffect(()=>{"visible"in p&&h(p.visible)},[p.visible]);const u=Ce(a)||xe(a),S=Object.assign({backgroundColor:a&&!u?a:void 0},r),y=g("tag",o),[P,v]=ee(y),E=w(y,{[`${y}-${a}`]:u,[`${y}-has-color`]:a&&!u,[`${y}-hidden`]:!f,[`${y}-rtl`]:b==="rtl"},n,v),$=D=>{D.stopPropagation(),m==null||m(D),!D.defaultPrevented&&h(!1)},R=()=>s?d?l.createElement("span",{className:`${y}-close-icon`,onClick:$},d):l.createElement(he,{className:`${y}-close-icon`,onClick:$}):null,M=typeof p.onClick=="function"||i&&i.type==="a",I=c||null,N=I?l.createElement(l.Fragment,null,I,l.createElement("span",null,i)):i,W=l.createElement("span",Object.assign({},p,{ref:t,className:E,style:S}),N,R());return P(M?l.createElement(fe,null,W):W)},te=l.forwardRef(_e);te.CheckableTag=He;const j=te;var We={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"};const Ue=We;var ne=function(t,o){return l.createElement(ae,x(x({},t),{},{ref:o,icon:Ue}))};ne.displayName="SyncOutlined";const Xe=l.forwardRef(ne);var ke=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],oe=l.forwardRef(function(e,t){var o=e.className,n=e.component,r=e.viewBox,i=e.spin,c=e.rotate,a=e.tabIndex,m=e.onClick,d=e.children,s=Q(e,ke);U(Boolean(n||d),"Should have `component` prop or `children`."),se();var p=l.useContext(ce),g=p.prefixCls,b=g===void 0?"anticon":g,f=p.rootClassName,h=w(f,b,o),u=w(de({},"".concat(b,"-spin"),!!i)),S=c?{msTransform:"rotate(".concat(c,"deg)"),transform:"rotate(".concat(c,"deg)")}:void 0,y=x(x({},me),{},{className:u,style:S,viewBox:r});r||delete y.viewBox;var P=function(){return n?l.createElement(n,x({},y),d):d?(U(Boolean(r)||l.Children.count(d)===1&&l.isValidElement(d)&&l.Children.only(d).type==="use","Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),l.createElement("svg",x(x({},y),{},{viewBox:r}),d)):null},v=a;return v===void 0&&m&&(v=-1),l.createElement("span",x(x({role:"img"},s),{},{ref:t,tabIndex:v,onClick:m,className:h}),P())});oe.displayName="AntdIcon";const Ge=oe;var Ve=["type","children"],re=new Set;function qe(e){return Boolean(typeof e=="string"&&e.length&&!re.has(e))}function L(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=e[t];if(qe(o)){var n=document.createElement("script");n.setAttribute("src",o),n.setAttribute("data-namespace",o),e.length>t+1&&(n.onload=function(){L(e,t+1)},n.onerror=function(){L(e,t+1)}),re.add(o),document.body.appendChild(n)}}function Je(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.scriptUrl,o=e.extraCommonProps,n=o===void 0?{}:o;t&&typeof document<"u"&&typeof window<"u"&&typeof document.createElement=="function"&&(Array.isArray(t)?L(t.reverse()):L([t]));var r=l.forwardRef(function(i,c){var a=i.type,m=i.children,d=Q(i,Ve),s=null;return i.type&&(s=l.createElement("use",{xlinkHref:"#".concat(a)})),m&&(s=m),l.createElement(Ge,x(x(x({},n),d),{},{ref:c}),s)});return r.displayName="Iconfont",r}function Ke(){const e=X(a=>a.BEP20TokenInfo),[t,o]=l.useState("请先导入代币"),{Provider:n}=X(a=>({Provider:a.Provider})),r="0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",i=async()=>{const a=new G(r,["function getPair(address tokenA, address tokenB) external view returns (address pair)"],n),m=e.address,d="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",s="0x55d398326f99059ff775485246999027b3197955",p="0xe9e7cea3dedca5984780bafc599bd69add087d56",g={};let b,f,h;return await a.getPair(m,d).then(u=>{u.toString().toUpperCase()!=="0X0000000000000000000000000000000000000000"&&(b=u)}),await a.getPair(m,s).then(u=>{u.toString().toUpperCase()!=="0X0000000000000000000000000000000000000000"&&(f=u)}),await a.getPair(m,p).then(u=>{u.toString().toUpperCase()!=="0X0000000000000000000000000000000000000000"&&(h=u)}),b&&(g.WBNB=b),f&&(g.USDT=f),h&&(g.BUSD=h),g},c=async a=>{try{const m=[];for(let s in a)if(a[s]!=="0x0000000000000000000000000000000000000000"){const p=new G(a[s],["function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)","function token0() external view returns (address)","function token1() external view returns (address)"],n);let g,b;await p.token0().then(f=>{g=f.toUpperCase()}),await p.token1().then(f=>{b=f.toUpperCase()}),await p.getReserves().then(f=>{if(g.toString().toUpperCase()===e.address.toString().toUpperCase()){const h=Number(f[0])/10**e.decimals,u=Number(f[1])/10**18;m.push([s,Number(h).toFixed(3),Number(u).toFixed(3),Number(u/h).toFixed(3)])}else if(b.toString().toUpperCase()===e.address.toString().toUpperCase()){const h=Number(f[0])/1e18,u=Number(f[1])/10**e.decimals;m.push([s,Number(u).toFixed(3),Number(h).toFixed(3),Number(h/u).toFixed(3)])}})}return o(m),new Date().getTime().toString()+"获取价格成功"}catch(m){console.log(m),o("获取价格失败")}};return l.useEffect(()=>{let a;return(async()=>{e.address&&n!==null?a=setInterval(async()=>{let d=await i();if(JSON.stringify(d)==="{}")o("暂未获取到池子,正在获取");else{const s=await c(d);console.log(s)}},2e3):o("请先导入代币")})(),()=>{clearInterval(a),o("请先导入代币")}},[e]),C("div",{style:{textAlign:"center",marginTop:"0.5%",marginBottom:"0.5%"},children:C(z,{bordered:!0,size:"small",style:{width:"90%",marginLeft:"5%",marginRight:"5%"},children:typeof t=="object"?t.map((a,m)=>B(z.Item,{label:C(j,{color:"default",icon:C(Xe,{spin:!0}),children:a[0]}),span:3,children:[B(j,{color:"default",style:{marginRight:"1%"},children:[a[0],":",a[2]]}),B(j,{color:"default",style:{marginRight:"1%"},children:[e.symbol,":",a[1]]}),B(j,{color:"default",style:{marginRight:"1%"},children:["Price: 1 ",e.symbol,"=",a[3]," ",a[0]]})]},m)):C(z.Item,{label:"提示",span:3,children:t})})})}const A=Je({scriptUrl:"//at.alicdn.com/t/c/font_3874886_obi3bq8gb.js"}),Qe=[{label:"个人",key:"personInfo",icon:C(A,{type:"icon-gerenxinxi"}),style:{width:"24%",textAlign:"center"}},{label:"钱包",key:"walletInfo",icon:C(A,{type:"icon-qianbao"}),style:{width:"25%",textAlign:"center"}},{label:"买入",key:"buyCoin",icon:C(A,{type:"icon-mairu"}),style:{width:"25%",textAlign:"center"}},{label:"卖出",key:"sellCoin",icon:C(A,{type:"icon-maichu"}),style:{width:"24%",textAlign:"center"}}],st=()=>{const[e,t]=l.useState("personInfo"),o=ue();return l.useEffect(()=>{o("/batchBuyCoin/personInfo",{replace:!0})},[]),B("div",{children:[C(ve,{onClick:r=>{console.log("click ",r),t(r.key),o(`/batchBuyCoin/${r.key}`,{replace:!0})},selectedKeys:[e],mode:"horizontal",items:Qe}),C(Ke,{}),C(pe,{}),C(Se,{onClick:()=>o("/"),style:{position:"fixed"},type:"default",shape:"square",icon:C($e,{})})]})};export{st as default};
