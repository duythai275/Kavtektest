(this.webpackJsonpkavtektest=this.webpackJsonpkavtektest||[]).push([[0],{320:function(e,t,c){},321:function(e,t,c){},322:function(e,t,c){},330:function(e,t,c){},339:function(e,t,c){},342:function(e,t,c){"use strict";c.r(t);var a=c(3),s=c.n(a),n=c(115),r=c.n(n),i=(c(320),c(321),c(322),c(372)),l=c(6),j=function(){return Object(l.jsxs)("div",{className:"account-container",children:[Object(l.jsx)("div",{className:"account-avatar",children:Object(l.jsx)(i.a,{src:""})}),Object(l.jsxs)("div",{className:"account-info",children:[Object(l.jsx)("div",{className:"account-name",children:"Thai Nguyen"}),Object(l.jsx)("div",{className:"account-role",children:"Superadmin"})]})]})},d=c(284),o=c.n(d),u=c(286),b=c.n(u),h=c(287),O=c.n(h),x=c(288),m=c.n(x),v=function(){return Object(l.jsxs)("div",{className:"menu-wrapper",children:[Object(l.jsxs)("div",{className:"menu-container",children:[Object(l.jsxs)("div",{className:"menu-item",children:[Object(l.jsx)(o.a,{}),Object(l.jsx)("div",{className:"menu-item-name",children:"Dashboard"})]}),Object(l.jsxs)("div",{className:"menu-item",children:[Object(l.jsx)(b.a,{}),Object(l.jsx)("div",{className:"menu-item-name",children:"About Us"})]}),Object(l.jsxs)("div",{className:"menu-item",children:[Object(l.jsx)(O.a,{}),Object(l.jsx)("div",{className:"menu-item-name",children:"Contact Us"})]})]}),Object(l.jsxs)("div",{className:"menu-item-end",children:[Object(l.jsx)(m.a,{style:{color:"#979797"}}),Object(l.jsx)("div",{children:"Log out"})]})]})},p=function(e){return Object(l.jsxs)("div",{className:"sidebar-container",children:[Object(l.jsx)(j,{}),Object(l.jsx)(v,{})]})},f=c(141),N=c(96),g=c(373),y=c(374),S=c(370),w=(c(330),Object(N.b)((function(e){return{sale:e.sale}}))((function(e){var t=e.sale,c=t.sales,a=t.totalSale,s={data:Object.keys(c).map((function(e){return{time:"".concat(e," am"),sale:c[e]}})),height:300,xField:"time",yField:"sale",point:{size:5,shape:"diamond"}};return Object(l.jsx)("div",{className:"card1-wrapper",children:Object(l.jsx)(g.a,{variant:"outlined",children:Object(l.jsxs)(y.a,{children:[Object(l.jsxs)("div",{className:"card1-container",children:[Object(l.jsx)("div",{className:"card1-title",children:"Total Sales"}),Object(l.jsxs)("div",{className:"card1-subtitle",children:["$",a.toString().split(/(?=(?:\d{3})+(?:\.|$))/g).join(",")]})]}),s&&Object(l.jsx)(S.a,Object(f.a)({},s))]})})})}))),L=c(45),A=c(375),C=c(368),k=c(369),E=c(376),D=c(377),F=c(378),U=c(379),H=c(380),J=c(381),T=c(301),M=c.n(T),_=(c(339),Object(N.b)((function(e){return{users:e.user.users}}))((function(e){var t=e.users,c=Object(a.useState)(""),s=Object(L.a)(c,2),n=s[0],r=s[1],i=Object(a.useState)([]),j=Object(L.a)(i,2),d=j[0],o=j[1];return Object(a.useEffect)((function(){o(t.filter((function(e){var t=e.name,c=e.createdAt,a=e.city;return n.startsWith("@")?a.toLowerCase().includes(n.slice(1,n.length).toLowerCase()):t.toLowerCase().includes(n.toLowerCase())||c.toLowerCase().includes(n.toLowerCase())||a.toLowerCase().includes(n.toLowerCase())})))}),[n]),Object(l.jsx)("div",{className:"card-wrapper",children:Object(l.jsx)(A.a,{variant:"outlined",children:Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsxs)("div",{className:"card-user-header",children:[Object(l.jsx)("div",{className:"card-title",children:"Users"}),Object(l.jsx)("div",{className:"card-user-search",children:Object(l.jsxs)(A.a,{sx:{p:"1px",display:"flex",alignItems:"center"},variant:"outlined",children:[Object(l.jsx)(C.a,{type:"submit",sx:{p:"5px"},"aria-label":"search",children:Object(l.jsx)(M.a,{})}),Object(l.jsx)(k.a,{sx:{ml:1,flex:1},placeholder:"Search",inputProps:{"aria-label":"search"},value:n,onChange:function(e){return r(e.target.value)}})]})})]}),Object(l.jsx)("div",{className:"card-content",children:Object(l.jsx)(E.a,{sx:{maxHeight:350},children:Object(l.jsxs)(D.a,{stickyHeader:!0,children:[Object(l.jsx)(F.a,{children:Object(l.jsxs)(U.a,{children:[Object(l.jsx)(H.a,{children:Object(l.jsx)("div",{className:"table-header",children:"Full Name"})}),Object(l.jsx)(H.a,{children:Object(l.jsx)("div",{className:"table-header",children:"City"})}),Object(l.jsx)(H.a,{children:Object(l.jsx)("div",{className:"table-header",children:"Date Registered"})})]})}),Object(l.jsx)(J.a,{children:0===d.length?t.map((function(e){return Object(l.jsxs)(U.a,{children:[Object(l.jsx)(H.a,{children:e.name}),Object(l.jsx)(H.a,{children:e.city}),Object(l.jsx)(H.a,{children:e.createdAt})]},e.id)})):d.map((function(e){return Object(l.jsxs)(U.a,{children:[Object(l.jsx)(H.a,{children:e.name}),Object(l.jsx)(H.a,{children:e.city}),Object(l.jsx)(H.a,{children:e.createdAt})]},e.id)}))})]})})})]})})})}))),R=function(){return Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)(p,{}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(w,{}),Object(l.jsx)(_,{})]})]})},G="GET_ALL_USERS",I="GET_ALL_SALES",P={getUsers:function(e){return{type:G,payload:e}},getSales:function(e){return{type:I,payload:e}}},W=Object(N.b)(null,P)((function(e){var t=e.getUsers,c=e.getSales;return Object(a.useEffect)((function(){Promise.all([fetch("https://6155a05293e3550017b08b11.mockapi.io/users").then((function(e){return e.json()})),fetch("https://6155a05293e3550017b08b11.mockapi.io/sales ").then((function(e){return e.json()}))]).then((function(e){t(e[0]),c(e[1])}))}),[]),Object(l.jsx)("div",{children:Object(l.jsx)(R,{})})})),$=c(138),z=c(302),B={users:[]},Y=["January","February","March","April","May","June","July","August","September","October","November","December"],q={sales:[],totalSale:0},K=Object($.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;return t.type===G?{users:t.payload.map((function(e){var t=new Date(e.createdAt);return Object(f.a)(Object(f.a)({},e),{},{createdAt:"".concat(Y[t.getMonth()]," ").concat(t.getDate(),", ").concat(t.getFullYear())})}))}:e},sale:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;if(t.type===I){var c={};return t.payload.forEach((function(e){var t=new Date(e.createdAt);c[t.getHours()]?c[t.getHours()]+=parseFloat(e.price):c[t.getHours()]=parseFloat(e.price)})),{sales:c,totalSale:Object.values(c).reduce((function(e,t){return e+t}),0)}}return e}}),Q=Object($.createStore)(K,Object(z.composeWithDevTools)());r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(N.a,{store:Q,children:Object(l.jsx)(W,{})})}),document.getElementById("root"))}},[[342,1,2]]]);
//# sourceMappingURL=main.ed95862f.chunk.js.map