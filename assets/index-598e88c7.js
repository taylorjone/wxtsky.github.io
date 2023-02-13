import{r as s,h as S,j as r}from"./index-0d81f36f.js";import{B as d}from"./index-d0e23e70.js";import{D as z}from"./index-b50dd0b3.js";import{T as H,a as q,b as G,S as J}from"./index-83f7e285.js";import{M as K,F as M}from"./index-eb4f3b37.js";import{I as g}from"./index-82c67ad9.js";import{B as O}from"./button-10d5930a.js";import{m as o,S as R}from"./index-836259d3.js";import{a as N}from"./index-25073e35.js";import{A as Q}from"./index-40db3eec.js";import"./useMergedState-4984f5cf.js";import"./index-6ec23b91.js";import"./responsiveObserver-abd4cbbd.js";import"./RightOutlined-2bd33cf6.js";import"./index-cc8777d0.js";import"./index-5ee1957e.js";import"./useFlexGapSupport-d49eff58.js";import"./getDataOrAriaProps-cf91de79.js";import"./row-d963e2c8.js";import"./fade-d6f29317.js";const X=()=>{const[C,l]=s.useState(!1),[D,m]=s.useState(!1),[u,U]=s.useState(""),[v,W]=s.useState(""),{WBNBAddress:T}=d(e=>({WBNBAddress:e.WBNBAddress})),{userAddress:n}=d(e=>({userAddress:e.userAddress})),{Provider:f}=d(e=>({Provider:e.Provider})),{BEP20ABI:c}=d(e=>({BEP20ABI:e.BEP20ABI})),{USDTAddress:w}=d(e=>({USDTAddress:e.USDTAddress})),{ownerContractAddress:i}=d(e=>({ownerContractAddress:e.ownerContractAddress})),[k,p]=s.useState(0),[P,I]=s.useState(0),[x,y]=s.useState(!1),h=async()=>{try{y(!0);const e=new N(T,c,f),a=new N(w,c,f),V=await e.allowance(n,i),_=await a.allowance(n,i),L=q(V,18),j=q(_,18);console.log("ApproveWBNBNumber",L,"ApproveUSDTNumber",j),p(Number(L).toFixed(3)),I(Number(j).toFixed(3)),o.success({content:"获取授权成功",duration:1}),y(!1)}catch{o.error({content:"获取授权失败",duration:1}),y(!1)}},E=()=>{m(!0);let e=[];try{if(v==="授权WBNB代币到合约"){const a=new N(T,c,f);e.push({from:n,to:T,data:a.interface.encodeFunctionData("approve",[i,G(u,18)])})}else if(v==="授权USDT代币到合约"){const a=new N(w,c,f);e.push({from:n,to:w,data:a.interface.encodeFunctionData("approve",[i,G(u,18)])})}window.ethereum.request({method:"eth_sendTransaction",params:e}).then(a=>{f.waitForTransaction(a).then(V=>{V.status===1?(o.success("授权成功"),m(!1),l(!1),h()):(o.error("授权失败"),m(!1),l(!1))})}).catch(a=>{o.error(a.message),m(!1),l(!1)})}catch(a){o.error(a.message),m(!1),l(!1)}},B=()=>{l(!1)},b={width:"80%",marginTop:"1%",marginLeft:"10%",marginRight:"10%"},F=e=>{W("授权"+e.name+"代币到合约"),l(!0),console.log(e)},t=[{title:"代币",dataIndex:"name",key:"name",align:"center"},{title:"已授权数量",dataIndex:"amount",key:"amount",align:"center"},{title:"授权",key:"action",align:"center",render:e=>r(J,{children:r(O,{type:"primary",onClick:()=>F(e),children:"授权"})})}],A=[{key:"1",name:"WBNB",amount:k,action:"WBNB"},{key:"2",name:"USDT",amount:P,action:"USDT"}];return s.useEffect(()=>{n!==""&&h().then(e=>console.log("getApprove"))},[]),S("div",{children:[r(z,{orientation:"center",children:"授权信息"}),r(H,{style:b,columns:t,pagination:!1,dataSource:A}),r(K,{title:v,open:C,onOk:E,confirmLoading:D,onCancel:B,children:r(M,{children:r(M.Item,{label:"输入授权数量",children:r(g,{value:u,onChange:e=>U(e.target.value)})})})}),r(O,{type:"primary",onClick:()=>h(),style:b,loading:x,children:"刷新授权信息"})]})};function Y(){const{Provider:C}=d(t=>({Provider:t.Provider})),{userAddress:l}=d(t=>({userAddress:t.userAddress})),{ownerContractAddress:D}=d(t=>({ownerContractAddress:t.ownerContractAddress})),{ownerContractABI:m}=d(t=>({ownerContractABI:t.ownerContractABI})),{BEP20TokenInfo:u}=d(t=>({BEP20TokenInfo:t.BEP20TokenInfo})),{WBNBAddress:U}=d(t=>({WBNBAddress:t.WBNBAddress})),{USDTAddress:v}=d(t=>({USDTAddress:t.USDTAddress})),[W,T]=s.useState("WBNB"),[n,f]=s.useState(0),[c,w]=s.useState(0),[i,k]=s.useState(0),[p,P]=s.useState(20),[I,x]=s.useState("发送到合约创建地址"),[y,h]=s.useState(!0),[E,B]=s.useState(!1);s.useEffect(()=>{u.address!==void 0&&n>0&&c>0&&i>0&&p>0?h(!1):h(!0)},[u.address,n,c,i,p]);const b=()=>n<=0?(o.error("购买数量不合法"),!1):c<=0?(o.error("每个地址购买数量不合法"),!1):i<=0?(o.error("总地址数量不合法"),!1):p<=0?(o.error("滑点不合法"),!1):!0,F=()=>{if(!b())return;const t=new N(D,m,C);let A=[];W==="WBNB"?I==="发送到合约创建地址"?A=[p,[U,u.address],n*1e4,c*1e4,i,"0x0000000000000000000000000000000000000000"]:A=[p,[U,u.address],n*1e4,c*1e4,i,l]:W==="USDT"&&(I==="发送到合约创建地址"?A=[p,[v,u.address],n*1e4,c*1e4,i,"0x0000000000000000000000000000000000000000"]:A=[p,[v,u.address],n*1e4,c*1e4,i,l]);try{B(!0),window.ethereum.request({method:"eth_sendTransaction",params:[{from:l,to:D,data:t.interface.encodeFunctionData("buy",A)}]}).then(e=>{C.waitForTransaction(e).then(a=>{a.status===1?(o.success({content:"购买成功",duration:1}),B(!1)):(o.error({content:"购买失败",duration:1}),B(!1))})}).catch(e=>{o.error({content:e.message,duration:1}),B(!1)})}catch(e){o.error({content:e.message,duration:1}),B(!1)}};return S("div",{style:{width:"80%",marginTop:"1%",marginLeft:"10%",marginRight:"10%"},children:[r(Q,{message:"什么池子用什么币购买,买之前确定好池子",type:"warning",style:{textAlign:"center"}}),S(g.Group,{compact:!0,style:{marginTop:"1%"},children:[S(R,{defaultValue:"WBNB",style:{width:"30%"},onChange:t=>T(t),children:[r(Option,{value:"WBNB",children:"WBNB"}),r(Option,{value:"USDT",children:"USDT"})]}),r(g,{style:{width:"70%"},onChange:t=>f(t.target.value),placeholder:"选择购买方式, 输入购买数量"})]}),r(g,{addonBefore:"单地址购买Token数量",style:{width:"100%",marginTop:"3%"},onChange:t=>w(t.target.value),placeholder:"输入购买数量"}),r(g,{addonBefore:"总共购买地址数量",style:{width:"100%",marginTop:"3%"},placeholder:"输入购买数量",onChange:t=>k(t.target.value)}),S(g.Group,{compact:!0,style:{marginTop:"3%"},children:[r(g,{addonBefore:"滑点",style:{width:"40%"},onChange:t=>P(t.target.value),placeholder:"0-99"}),S(R,{defaultValue:"发送到合约创建地址",style:{width:"60%"},onChange:t=>x(t),children:[r(Option,{value:"发送到合约创建地址",children:"发送到合约创建地址"}),r(Option,{value:"全部转移到自己地址",children:"全部转移到自己地址"})]})]}),r(O,{type:"primary",style:{width:"100%",marginTop:"3%"},onClick:F,disabled:y,loading:E,children:"购买"})]})}function ge(){return S("div",{children:[r(X,{}),r(Y,{})]})}export{ge as default};
