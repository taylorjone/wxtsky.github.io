import{r as o,c as $,g as K,m as Q,a as Y,t as Z,C as ee,b as te,A as ne,_ as x,d as H,w as z,u as oe,e as re,f as ie,s as ae,j as h,h as N,i as se,O as le}from"./index-02b61a1a.js";import{B as D}from"./index-2341704d.js";import{c as ce}from"./index-b03ee216.js";import{u as de,r as U}from"./responsiveObserver-4ffafcab.js";import{T as I}from"./index-9acd0c69.js";import{C as F}from"./index-7d0886ff.js";import{M as me}from"./index-d655db55.js";import{F as pe,H as ue}from"./HomeTwoTone-411ac33e.js";import"./motion-a25d12c1.js";import"./useMergedState-5e374978.js";import"./colors-f59df799.js";import"./EllipsisOutlined-d703fb41.js";import"./slide-b195a0bf.js";import"./index-ebbec8ae.js";import"./index-25427908.js";import"./collapse-97de76d4.js";import"./fade-54b293d0.js";const fe=e=>{let{children:t}=e;return t},ge=fe;function O(e){return e!=null}const be=e=>{let{itemPrefixCls:t,component:n,span:r,className:i,style:s,labelStyle:c,contentStyle:a,bordered:p,label:d,content:l,colon:g}=e;const f=n;return p?o.createElement(f,{className:$({[`${t}-item-label`]:O(d),[`${t}-item-content`]:O(l)},i),style:s,colSpan:r},O(d)&&o.createElement("span",{style:c},d),O(l)&&o.createElement("span",{style:a},l)):o.createElement(f,{className:$(`${t}-item`,i),style:s,colSpan:r},o.createElement("div",{className:`${t}-item-container`},(d||d===0)&&o.createElement("span",{className:$(`${t}-item-label`,{[`${t}-item-no-colon`]:!g}),style:c},d),(l||l===0)&&o.createElement("span",{className:$(`${t}-item-content`),style:a},l)))},R=be;function M(e,t,n){let{colon:r,prefixCls:i,bordered:s}=t,{component:c,type:a,showLabel:p,showContent:d,labelStyle:l,contentStyle:g}=n;return e.map((f,b)=>{let{props:{label:u,children:y,prefixCls:m=i,className:S,style:C,labelStyle:w,contentStyle:v,span:E=1},key:B}=f;return typeof c=="string"?o.createElement(R,{key:`${a}-${B||b}`,className:S,style:C,labelStyle:Object.assign(Object.assign({},l),w),contentStyle:Object.assign(Object.assign({},g),v),span:E,colon:r,component:c,itemPrefixCls:m,bordered:s,label:p?u:null,content:d?y:null}):[o.createElement(R,{key:`label-${B||b}`,className:S,style:Object.assign(Object.assign(Object.assign({},l),C),w),span:1,colon:r,component:c[0],itemPrefixCls:m,bordered:s,label:u}),o.createElement(R,{key:`content-${B||b}`,className:S,style:Object.assign(Object.assign(Object.assign({},g),C),v),span:E*2-1,component:c[1],itemPrefixCls:m,bordered:s,content:y})]})}const ye=e=>{const t=o.useContext(W),{prefixCls:n,vertical:r,row:i,index:s,bordered:c}=e;return r?o.createElement(o.Fragment,null,o.createElement("tr",{key:`label-${s}`,className:`${n}-row`},M(i,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),o.createElement("tr",{key:`content-${s}`,className:`${n}-row`},M(i,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):o.createElement("tr",{key:s,className:`${n}-row`},M(i,e,Object.assign({component:c?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},he=ye,xe=e=>{const{componentCls:t,descriptionsSmallPadding:n,descriptionsDefaultPadding:r,descriptionsMiddlePadding:i,descriptionsBg:s}=e;return{[`&${t}-bordered`]:{[`${t}-view`]:{border:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto",borderCollapse:"collapse"}},[`${t}-item-label, ${t}-item-content`]:{padding:r,borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`${t}-item-label`]:{backgroundColor:s,"&::after":{display:"none"}},[`${t}-row`]:{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"}},[`&${t}-middle`]:{[`${t}-item-label, ${t}-item-content`]:{padding:i}},[`&${t}-small`]:{[`${t}-item-label, ${t}-item-content`]:{padding:n}}}}},Ce=e=>{const{componentCls:t,descriptionsExtraColor:n,descriptionItemPaddingBottom:r,descriptionsItemLabelColonMarginRight:i,descriptionsItemLabelColonMarginLeft:s,descriptionsTitleMarginBottom:c}=e;return{[t]:Object.assign(Object.assign(Object.assign({},Y(e)),xe(e)),{["&-rtl"]:{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:c},[`${t}-title`]:Object.assign(Object.assign({},Z),{flex:"auto",color:e.colorText,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:n,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}},[`${t}-row`]:{"> th, > td":{paddingBottom:r},"&:last-child":{borderBottom:"none"}},[`${t}-item-label`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${s}px ${i}px`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},ve=K("Descriptions",e=>{const t=e.colorFillAlter,n=e.fontSizeSM*e.lineHeightSM,r=e.colorText,i=`${e.paddingXS}px ${e.padding}px`,s=`${e.padding}px ${e.paddingLG}px`,c=`${e.paddingSM}px ${e.paddingLG}px`,a=e.padding,p=e.marginXS,d=e.marginXXS/2,l=Q(e,{descriptionsBg:t,descriptionsTitleMarginBottom:n,descriptionsExtraColor:r,descriptionItemPaddingBottom:a,descriptionsSmallPadding:i,descriptionsDefaultPadding:s,descriptionsMiddlePadding:c,descriptionsItemLabelColonMarginRight:p,descriptionsItemLabelColonMarginLeft:d});return[Ce(l)]}),W=o.createContext({}),X={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function Se(e,t){if(typeof e=="number")return e;if(typeof e=="object")for(let n=0;n<U.length;n++){const r=U[n];if(t[r]&&e[r]!==void 0)return e[r]||X[r]}return 3}function _(e,t,n){let r=e;return(n===void 0||n>t)&&(r=ce(e,{span:t})),r}function $e(e,t){const n=te(e).filter(c=>c),r=[];let i=[],s=t;return n.forEach((c,a)=>{var p;const d=(p=c.props)===null||p===void 0?void 0:p.span,l=d||1;if(a===n.length-1){i.push(_(c,s,d)),r.push(i);return}l<s?(s-=l,i.push(c)):(i.push(_(c,s,l)),r.push(i),s=t,i=[])}),r}function j(e){let{prefixCls:t,title:n,extra:r,column:i=X,colon:s=!0,bordered:c,layout:a,children:p,className:d,style:l,size:g,labelStyle:f,contentStyle:b}=e;const{getPrefixCls:u,direction:y}=o.useContext(ee),m=u("descriptions",t),[S,C]=o.useState({}),w=Se(i,S),[v,E]=ve(m),B=de();o.useEffect(()=>{const L=B.subscribe(P=>{typeof i=="object"&&C(P)});return()=>{B.unsubscribe(L)}},[]);const V=$e(p,w),J=o.useMemo(()=>({labelStyle:f,contentStyle:b}),[f,b]);return v(o.createElement(W.Provider,{value:J},o.createElement("div",{className:$(m,{[`${m}-${g}`]:g&&g!=="default",[`${m}-bordered`]:!!c,[`${m}-rtl`]:y==="rtl"},d,E),style:l},(n||r)&&o.createElement("div",{className:`${m}-header`},n&&o.createElement("div",{className:`${m}-title`},n),r&&o.createElement("div",{className:`${m}-extra`},r)),o.createElement("div",{className:`${m}-view`},o.createElement("table",null,o.createElement("tbody",null,V.map((L,P)=>o.createElement(he,{key:P,index:P,colon:s,prefixCls:m,vertical:a==="vertical",bordered:c,row:L}))))))))}j.Item=ge;var we={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"};const Be=we;var k=function(t,n){return o.createElement(ne,x(x({},t),{},{ref:n,icon:Be}))};k.displayName="SyncOutlined";const Ee=o.forwardRef(k);var Ne=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],G=o.forwardRef(function(e,t){var n=e.className,r=e.component,i=e.viewBox,s=e.spin,c=e.rotate,a=e.tabIndex,p=e.onClick,d=e.children,l=H(e,Ne);z(Boolean(r||d),"Should have `component` prop or `children`."),oe();var g=o.useContext(re),f=g.prefixCls,b=f===void 0?"anticon":f,u=g.rootClassName,y=$(u,b,n),m=$(ie({},"".concat(b,"-spin"),!!s)),S=c?{msTransform:"rotate(".concat(c,"deg)"),transform:"rotate(".concat(c,"deg)")}:void 0,C=x(x({},ae),{},{className:m,style:S,viewBox:i});i||delete C.viewBox;var w=function(){return r?o.createElement(r,x({},C),d):d?(z(Boolean(i)||o.Children.count(d)===1&&o.isValidElement(d)&&o.Children.only(d).type==="use","Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),o.createElement("svg",x(x({},C),{},{viewBox:i}),d)):null},v=a;return v===void 0&&p&&(v=-1),o.createElement("span",x(x({role:"img"},l),{},{ref:t,tabIndex:v,onClick:p,className:y}),w())});G.displayName="AntdIcon";const Pe=G;var Ie=["type","children"],q=new Set;function Oe(e){return Boolean(typeof e=="string"&&e.length&&!q.has(e))}function T(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=e[t];if(Oe(n)){var r=document.createElement("script");r.setAttribute("src",n),r.setAttribute("data-namespace",n),e.length>t+1&&(r.onload=function(){T(e,t+1)},r.onerror=function(){T(e,t+1)}),q.add(n),document.body.appendChild(r)}}function Ae(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.scriptUrl,n=e.extraCommonProps,r=n===void 0?{}:n;t&&typeof document<"u"&&typeof window<"u"&&typeof document.createElement=="function"&&(Array.isArray(t)?T(t.reverse()):T([t]));var i=o.forwardRef(function(s,c){var a=s.type,p=s.children,d=H(s,Ie),l=null;return s.type&&(l=o.createElement("use",{xlinkHref:"#".concat(a)})),p&&(l=p),o.createElement(Pe,x(x(x({},r),d),{},{ref:c}),l)});return i.displayName="Iconfont",i}function je(){const e=D(a=>a.BEP20TokenInfo),[t,n]=o.useState("请先导入代币"),{Provider:r}=D(a=>({Provider:a.Provider})),i="0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",s=async()=>{const a=new F(i,["function getPair(address tokenA, address tokenB) external view returns (address pair)"],r),p=e.address,d="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",l="0x55d398326f99059ff775485246999027b3197955",g="0xe9e7cea3dedca5984780bafc599bd69add087d56",f={};let b,u,y;return await a.getPair(p,d).then(m=>{m.toString().toUpperCase()!=="0X0000000000000000000000000000000000000000"&&(b=m)}),await a.getPair(p,l).then(m=>{m.toString().toUpperCase()!=="0X0000000000000000000000000000000000000000"&&(u=m)}),await a.getPair(p,g).then(m=>{m.toString().toUpperCase()!=="0X0000000000000000000000000000000000000000"&&(y=m)}),b&&(f.WBNB=b),u&&(f.USDT=u),y&&(f.BUSD=y),f},c=async a=>{try{const p=[];for(let l in a)if(a[l]!=="0x0000000000000000000000000000000000000000"){const g=new F(a[l],["function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)","function token0() external view returns (address)","function token1() external view returns (address)"],r);let f,b;await g.token0().then(u=>{f=u.toUpperCase()}),await g.token1().then(u=>{b=u.toUpperCase()}),await g.getReserves().then(u=>{if(f.toString().toUpperCase()===e.address.toString().toUpperCase()){const y=Number(u[0])/10**e.decimals,m=Number(u[1])/10**18;p.push([l,Number(y).toFixed(3),Number(m).toFixed(3),Number(m/y).toFixed(3)])}else if(b.toString().toUpperCase()===e.address.toString().toUpperCase()){const y=Number(u[0])/1e18,m=Number(u[1])/10**e.decimals;p.push([l,Number(m).toFixed(3),Number(y).toFixed(3),Number(y/m).toFixed(3)])}})}return n(p),new Date().getTime().toString()+"获取价格成功"}catch(p){console.log(p),n("获取价格失败")}};return o.useEffect(()=>{let a;return(async()=>{e.address&&r!==null?a=setInterval(async()=>{let d=await s();if(JSON.stringify(d)==="{}")n("暂未获取到池子,正在获取");else{const l=await c(d);console.log(l)}},2e3):n("请先导入代币")})(),()=>{clearInterval(a),n("请先导入代币")}},[e]),h("div",{style:{textAlign:"center",marginTop:"0.5%",marginBottom:"0.5%"},children:h(j,{bordered:!0,size:"small",style:{width:"90%",marginLeft:"5%",marginRight:"5%"},children:typeof t=="object"?t.map((a,p)=>N(j.Item,{label:h(I,{color:"default",icon:h(Ee,{spin:!0}),children:a[0]}),span:3,children:[N(I,{color:"default",style:{marginRight:"1%"},children:[a[0],":",a[2]]}),N(I,{color:"default",style:{marginRight:"1%"},children:[e.symbol,":",a[1]]}),N(I,{color:"default",style:{marginRight:"1%"},children:["Price: 1 ",e.symbol,"=",a[3]," ",a[0]]})]},p)):h(j.Item,{label:"提示",span:3,children:t})})})}const A=Ae({scriptUrl:"//at.alicdn.com/t/c/font_3874886_obi3bq8gb.js"}),Te=[{label:"个人",key:"personInfo",icon:h(A,{type:"icon-gerenxinxi"}),style:{width:"24%",textAlign:"center"}},{label:"钱包",key:"walletInfo",icon:h(A,{type:"icon-qianbao"}),style:{width:"25%",textAlign:"center"}},{label:"买入",key:"buyCoin",icon:h(A,{type:"icon-mairu"}),style:{width:"25%",textAlign:"center"}},{label:"卖出",key:"sellCoin",icon:h(A,{type:"icon-maichu"}),style:{width:"24%",textAlign:"center"}}],Qe=()=>{const[e,t]=o.useState("personInfo"),n=se();return o.useEffect(()=>{n("/batchBuyCoin/personInfo",{replace:!0})},[]),N("div",{children:[h(me,{onClick:i=>{console.log("click ",i),t(i.key),n(`/batchBuyCoin/${i.key}`,{replace:!0})},selectedKeys:[e],mode:"horizontal",items:Te}),h(je,{}),h(le,{}),h(pe,{onClick:()=>n("/"),style:{position:"fixed"},type:"default",shape:"square",icon:h(ue,{})})]})};export{Qe as default};
