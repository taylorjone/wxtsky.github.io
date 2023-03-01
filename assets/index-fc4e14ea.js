import{r as s,h as T,j as o}from"./index-30ca824a.js";import{B as r}from"./index-5baec20b.js";import{D as O}from"./index-466bfc02.js";import{I as E}from"./index-46ecd646.js";import{B as x}from"./button-74b29afc.js";import{m as a}from"./index-63716e0a.js";import{C as k}from"./index-a917681c.js";import{T as _,a as R}from"./index-74bf53fa.js";import"./useMergedState-68142bc3.js";import"./index-c49dd96a.js";import"./index-900836db.js";import"./motion-9f18b6ee.js";import"./index-7578be44.js";import"./slide-1c1c430c.js";import"./responsiveObserver-ca965483.js";import"./RightOutlined-ae7280c8.js";import"./index-a76946d9.js";import"./colors-56c2ced0.js";import"./index-6d95cbb0.js";import"./getDataOrAriaProps-cf91de79.js";import"./Dropdown-b5aab39a.js";import"./EllipsisOutlined-6ab7d953.js";import"./index-14418e67.js";import"./collapse-97de76d4.js";import"./useFlexGapSupport-d8e09818.js";function G(){const[d,A]=s.useState(1),{ownerContractAddress:u}=r(t=>({ownerContractAddress:t.ownerContractAddress})),{ownerContractABI:g}=r(t=>({ownerContractABI:t.ownerContractABI})),{Provider:n}=r(t=>({Provider:t.Provider})),{userAddress:I}=r(t=>({userAddress:t.userAddress}));r(t=>({setUserBalance:t.setUserBalance}));const{userBalance:b}=r(t=>({userBalance:t.userBalance})),[v,l]=s.useState(!1),[C,m]=s.useState(!1),{oldOwnerContractAddress:c}=r(t=>({oldOwnerContractAddress:t.oldOwnerContractAddress})),L=async()=>{try{m(!0);const t=[{inputs:[],name:"upgrade",outputs:[],stateMutability:"nonpayable",type:"function"}],y=await new k(c,t,n),f={from:I,to:c,data:y.interface.encodeFunctionData("upgrade",[])};window.ethereum.request({method:"eth_sendTransaction",params:[f]}).then(i=>{n.waitForTransaction(i).then(async h=>{h.status===1?(a.success({content:"升级成功",duration:1}),m(!1)):(a.error({content:"升级失败",duration:1}),m(!1))}).catch(h=>{a.error({content:h.message,duration:1}),m(!1)})}).catch(i=>{a.error({content:i.message,duration:1}),m(!1)})}catch(t){a.error({content:t.message,duration:1}),m(!1)}},D=async()=>{try{l(!0),console.log(b);const t=new k(u,g,n),y={from:I,to:u,data:t.interface.encodeFunctionData("newContract",["0x0000000000000000000000000000000000000000",d])};window.ethereum.request({method:"eth_sendTransaction",params:[y]}).then(f=>{n.waitForTransaction(f).then(async i=>{if(i.status===1){a.success("创建成功");const h=await t.getCreateLength({from:I});l(!1)}else a.error("创建失败"),l(!1)}).catch(i=>{a.error(i.message),l(!1)})}).catch(f=>{a.error(f.message),l(!1)})}catch(t){a.error(t.message),l(!1)}finally{A(1)}};return T("div",{children:[o(O,{orientation:"center",children:"创建钱包"}),T(E.Group,{compact:!0,children:[o(E,{style:{width:"30%",marginLeft:"5%"},placeholder:"请输入创建钱包数量",value:d,onChange:t=>{A(t.target.value)}}),o(x,{type:"primary",style:{width:"30%"},onClick:D,loading:v,children:"创建钱包"}),o(x,{type:"default",style:{width:"30%",marginRight:"5%"},onClick:L,loading:C,children:"升级合约"})]})]})}const M=[{title:"序号",dataIndex:"id",align:"center"},{title:"地址",dataIndex:"address",align:"center",render:d=>o("div",{style:{wordWrap:"break-word",wordBreak:"break-word"},children:d})},{title:"余额",dataIndex:"balance",align:"center"}],$=()=>{const{ownerContractAddress:d}=r(e=>({ownerContractAddress:e.ownerContractAddress})),{ownerContractABI:A}=r(e=>({ownerContractABI:e.ownerContractABI})),{Provider:u}=r(e=>({Provider:e.Provider})),{userAddress:g}=r(e=>({userAddress:e.userAddress})),{BEP20TokenInfo:n}=r(e=>({BEP20TokenInfo:e.BEP20TokenInfo})),{BEP20ABI:I}=r(e=>({BEP20ABI:e.BEP20ABI})),[b,v]=s.useState([]),[l,C]=s.useState(!1),[m,c]=s.useState(!1),[L,D]=s.useState(!0),[t,y]=s.useState(!0),[f,i]=s.useState(null),[h,U]=s.useState([]),F=async()=>{try{v([]),C(!0);const e=await new k(d,A,u),p=await e.getCreateLength({from:g}),w=n.address,S=await new k(w,I,u),W=n.decimals;for(let B=0;B<Number(p);B++){console.log(B);const P=await e.getCreate(g,B);console.log(P);const N=await S.balanceOf(P);console.log(P,R(N,W)),v(q=>[...q,{id:B+1,key:B,address:P,balance:R(N,W)}])}C(!1),a.success({content:"扫描成功",duration:1}),C(!1)}catch(e){a.error({content:e.message,duration:1}),C(!1)}},j=async()=>{const e=await new k(d,A,u);let p=[];h.length===b.length?p=[[n.address],g,!0,0,0]:p=[[n.address],g,!1,f*1e4,h[0]];try{c(!0),window.ethereum.request({method:"eth_sendTransaction",params:[{from:g,to:d,data:e.interface.encodeFunctionData("tranCreateToken",p)}]}).then(w=>{u.waitForTransaction(w).then(S=>{S.status===1?(a.success({content:"归集成功",duration:1}),c(!1)):(a.error({content:"归集失败",duration:1}),c(!1))}).catch(S=>{a.error({content:S.message,duration:1}),c(!1)})}).catch(w=>{a.error({content:w.message,duration:1}),c(!1)})}catch(w){a.error({content:w.message,duration:1}),c(!1)}};return s.useEffect(()=>{console.log(n.address),n.address!==void 0&&(D(!1),F())},[n]),T("div",{children:[o(O,{orientation:"center",children:"获取钱包及代币余额"}),o(E,{style:{width:"90%",marginLeft:"5%",marginRight:"5%",marginBottom:"1%"},placeholder:"若归集单个，请输入数量",onChange:e=>{i(e.target.value)}}),o(x,{type:"primary",style:{width:"40%",marginLeft:"5%",marginRight:"5%",marginBottom:"1%"},onClick:F,loading:l,disabled:L,children:"扫描钱包"}),o(x,{type:"primary",style:{width:"40%",marginLeft:"5%",marginRight:"5%",marginBottom:"1%"},onClick:j,loading:m,disabled:t,children:"归集选中"}),o(_,{rowSelection:{type:"checkbox",...{onChange:(e,p)=>{console.log(`selectedRowKeys: ${e}`,"selectedRows: ",p),U(e),e.length===b.length||e.length===1?y(!1):y(!0)},getCheckboxProps:e=>({disabled:e.name==="Disabled User",name:e.name})}},pagination:!1,columns:M,dataSource:b})]})};function we(){return T("div",{children:[o(G,{}),o($,{})]})}export{we as default};