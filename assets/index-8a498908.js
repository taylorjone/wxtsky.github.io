import{i as s,h as n,j as t}from"./index-02b61a1a.js";import{R as o,C as h}from"./row-1e8562db.js";import{B as p}from"./button-78fe6a1c.js";import"./useFlexGapSupport-90c1898e.js";import"./responsiveObserver-4ffafcab.js";import"./index-b03ee216.js";function f(){const a=[{text:"批量买币",disabled:!1,path:"/batchBuyCoin"},{text:"限价交易",disabled:!1,path:"/limitTrade"},{text:"批量转账",disabled:!0,path:"/batchTransfer"},{text:"CEX策略",disabled:!0,path:"/CexTrading"},{text:"辅助买卖",disabled:!0,path:"/helpTrade"},{text:"粉红预售抢购",disabled:!0,path:"/pinksaleBuy"},{text:"批量转账",disabled:!0,path:"/"},{text:"抢跑工具",disabled:!0,path:"/"},{text:"撤流动性",disabled:!0,path:"/"},{text:"粉红提币",disabled:!0,path:"/"},{text:"限价订单",disabled:!0,path:"/"},{text:"粉红预售",disabled:!0,path:"/"},{text:"批量转账",disabled:!0,path:"/"},{text:"抢跑工具",disabled:!0,path:"/"},{text:"撤流动性",disabled:!0,path:"/"},{text:"粉红提币",disabled:!0,path:"/"},{text:"限价订单",disabled:!0,path:"/"}],i=s(),d={display:"block",textAlign:"center",fontSize:"30px",color:"#000000",width:"100%",fontWeight:"bold",marginBottom:"3%",fontFamily:"Helvetica"},r={textAlign:"center",marginRight:"1.5%",marginLeft:"1.5%",marginBottom:"3%"};return n("div",{style:{marginTop:"3%",width:"90%",marginLeft:"5%",marginRight:"5%"},children:[t("a",{style:d,children:"ToolBox"}),t(o,{children:t(h,{style:{textAlign:"center"},children:a.map((e,l)=>t(p,{onClick:()=>i(e.path),style:r,size:"large",disabled:e.disabled,children:e.text},l))})})]})}export{f as default};
