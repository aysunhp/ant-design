"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[316],{800316:function(Ne,Y,r){r.r(Y),r.d(Y,{scopes:function(){return re}});var y=r(667294),s=r(86198),le=r(945016),t=r(256661),R=r(923232),B=r(965516),w=r(988872),p=r(773036),L=r(943215),M=r(5603),v=r(887547),V=r(269243),X=r(526911),_=r(48869),N=r(455355),q=r(884477),k=r(919944),W=r(88484),m=r(497680),ee=r(741156),G=r(461086),de=r(670125),se=r(647235),re={"components-layout-demo-basic":{React:y,Layout:s.Z,Space:le.Z},"components-layout-demo-top":{React:y,Breadcrumb:t.Z,Layout:s.Z,Menu:R.Z,theme:B.Z},"components-layout-demo-top-side":{React:y,LaptopOutlined:L.Z,NotificationOutlined:M.Z,UserOutlined:v.Z,Breadcrumb:t.Z,Layout:s.Z,Menu:R.Z,theme:B.Z},"components-layout-demo-top-side-2":{React:y,LaptopOutlined:L.Z,NotificationOutlined:M.Z,UserOutlined:v.Z,Breadcrumb:t.Z,Layout:s.Z,Menu:R.Z,theme:B.Z},"components-layout-demo-side":{React:y,useState:y.useState,DesktopOutlined:V.Z,FileOutlined:X.Z,PieChartOutlined:_.Z,TeamOutlined:N.Z,UserOutlined:v.Z,Breadcrumb:t.Z,Layout:s.Z,Menu:R.Z,theme:B.Z},"components-layout-demo-custom-trigger":{React:y,useState:y.useState,MenuFoldOutlined:q.Z,MenuUnfoldOutlined:k.Z,UploadOutlined:W.Z,UserOutlined:v.Z,VideoCameraOutlined:m.Z,Layout:s.Z,Menu:R.Z,Button:w.ZP,theme:B.Z},"components-layout-demo-responsive":{React:y,UploadOutlined:W.Z,UserOutlined:v.Z,VideoCameraOutlined:m.Z,Layout:s.Z,Menu:R.Z,theme:B.Z},"components-layout-demo-fixed":{React:y,Breadcrumb:t.Z,Layout:s.Z,Menu:R.Z,theme:B.Z},"components-layout-demo-fixed-sider":{React:y,AppstoreOutlined:ee.Z,BarChartOutlined:G.Z,CloudOutlined:de.Z,ShopOutlined:se.Z,TeamOutlined:N.Z,UploadOutlined:W.Z,UserOutlined:v.Z,VideoCameraOutlined:m.Z,Layout:s.Z,Menu:R.Z,theme:B.Z},"components-layout-demo-custom-trigger-debug":{React:y,useState:y.useState,DesktopOutlined:V.Z,FileOutlined:X.Z,MenuFoldOutlined:q.Z,MenuUnfoldOutlined:k.Z,PieChartOutlined:_.Z,TeamOutlined:N.Z,UserOutlined:v.Z,Layout:s.Z,Menu:R.Z,Button:w.ZP,theme:B.Z},"components-layout-demo-component-token":{React:y,LaptopOutlined:L.Z,NotificationOutlined:M.Z,UserOutlined:v.Z,Breadcrumb:t.Z,ConfigProvider:p.ZP,Layout:s.Z,Menu:R.Z,theme:B.Z}}},256661:function(Ne,Y,r){r.d(Y,{Z:function(){return T}});var y=r(238416),s=r.n(y),le=r(242122),t=r.n(le),R=r(627424),B=r.n(R),w=r(670215),p=r.n(w),L=r(667294),M=r(294184),v=r.n(M),V=r(45598),X=r(430339),_=r(106465),N=r(73287),q=r(205085),k=r.n(q),W=r(428608),m=r(785893),ee=function(e){var o=e.children,i=L.useContext(N.E_),l=i.getPrefixCls,g=l("breadcrumb");return(0,m.jsx)("li",{className:"".concat(g,"-separator"),"aria-hidden":"true",children:o===""?o:o||"/"})};ee.__ANT_BREADCRUMB_SEPARATOR=!0;var G=ee,de=r(918698),se=r.n(de),re=["className","onClick"];function te(n,e){if(n.title===void 0||n.title===null)return null;var o=Object.keys(e).join("|");return se()(n.title)==="object"?n.title:String(n.title).replace(new RegExp(":(".concat(o,")"),"g"),function(i,l){return e[l]||i})}function me(n,e,o,i){if(o==null)return null;var l=e.className,g=e.onClick,h=p()(e,re),C=t()(t()({},(0,X.default)(h,{data:!0,aria:!0})),{},{onClick:g});return i!==void 0?(0,m.jsx)("a",t()(t()({},C),{},{className:v()("".concat(n,"-link"),l),href:i,children:o})):(0,m.jsx)("span",t()(t()({},C),{},{className:v()("".concat(n,"-link"),l),children:o}))}function Se(n,e){var o=function(l,g,h,C,Z){if(e)return e(l,g,h,C);var A=te(l,g);return me(n,l,A,Z)};return o}var ae=["items"],ce=["key","title","label","path"],Be=["prefixCls","children","href"],fe=function(e){var o=e.prefixCls,i=e.separator,l=i===void 0?"/":i,g=e.children,h=e.menu,C=e.overlay,Z=e.dropdownProps,A=e.href;if(!1)var P;var H=function(Q){if(h||C){var z=t()({},Z);if(h){var ne=h||{},J=ne.items,j=p()(ne,ae);z.menu=t()(t()({},j),{},{items:J==null?void 0:J.map(function(I,D){var K=I.key,oe=I.title,ue=I.label,Ce=I.path,ie=p()(I,ce),ye=ue!=null?ue:oe;return Ce&&(ye=(0,m.jsx)("a",{href:"".concat(A).concat(Ce),children:ye})),t()(t()({},ie),{},{key:K!=null?K:D,label:ye})})})}else C&&(z.overlay=C);return(0,m.jsx)(W.Z,t()(t()({placement:"bottom"},z),{},{children:(0,m.jsxs)("span",{className:"".concat(o,"-overlay-link"),children:[Q,(0,m.jsx)(k(),{})]})}))}return Q},U=H(g);return U!=null?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("li",{children:U}),l&&(0,m.jsx)(G,{children:l})]}):null},ve=function(e){var o=e.prefixCls,i=e.children,l=e.href,g=p()(e,Be),h=L.useContext(N.E_),C=h.getPrefixCls,Z=C("breadcrumb",o);return(0,m.jsx)(fe,t()(t()({},g),{},{prefixCls:Z,children:me(Z,g,i,l)}))};ve.__ANT_BREADCRUMB_ITEM=!0;var Pe=ve,he=r(548073),Ee=r(141035),$=r(986943),Oe=function(e){var o,i,l=e.componentCls,g=e.iconCls;return s()({},l,t()(t()({},(0,he.Wf)(e)),{},(i={color:e.itemColor,fontSize:e.fontSize},s()(i,g,{fontSize:e.iconFontSize}),s()(i,"ol",{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"}),s()(i,"a",t()({color:e.linkColor,transition:"color ".concat(e.motionDurationMid),padding:"0 ".concat(e.paddingXXS,"px"),borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",marginInline:-e.marginXXS,"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover}},(0,he.Qy)(e))),s()(i,"li:last-child",{color:e.lastItemColor}),s()(i,"".concat(l,"-separator"),{marginInline:e.separatorMargin,color:e.separatorColor}),s()(i,"".concat(l,"-link"),s()({},`
          > `.concat(g,` + span,
          > `).concat(g,` + a
        `),{marginInlineStart:e.marginXXS})),s()(i,"".concat(l,"-overlay-link"),(o={borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",padding:"0 ".concat(e.paddingXXS,"px"),marginInline:-e.marginXXS},s()(o,"> ".concat(g),{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon}),s()(o,"&:hover",{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}}),s()(o,"a",{"&:hover":{backgroundColor:"transparent"}}),o)),s()(i,"&".concat(e.componentCls,"-rtl"),{direction:"rtl"}),i)))},d=(0,Ee.Z)("Breadcrumb",function(n){var e=(0,$.TS)(n,{});return[Oe(e)]},function(n){return{itemColor:n.colorTextDescription,lastItemColor:n.colorText,iconFontSize:n.fontSize,linkColor:n.colorTextDescription,linkHoverColor:n.colorText,separatorColor:n.colorTextDescription,separatorMargin:n.marginXS}}),a=["breadcrumbName","children"],c=["breadcrumbName"];function u(n){var e=n.breadcrumbName,o=n.children,i=p()(n,a),l=t()({title:e},i);return o&&(l.menu={items:o.map(function(g){var h=g.breadcrumbName,C=p()(g,c);return t()(t()({},C),{},{title:h})})}),l}function x(n,e){return(0,L.useMemo)(function(){return n||(e?e.map(u):null)},[n,e])}var f=["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"],O=function(e,o){if(o===void 0)return o;var i=(o||"").replace(/^\//,"");return Object.keys(e).forEach(function(l){i=i.replace(":".concat(l),e[l])}),i},S=function(e){var o=e.prefixCls,i=e.separator,l=i===void 0?"/":i,g=e.style,h=e.className,C=e.rootClassName,Z=e.routes,A=e.items,P=e.children,H=e.itemRender,U=e.params,F=U===void 0?{}:U,Q=p()(e,f),z=L.useContext(N.E_),ne=z.getPrefixCls,J=z.direction,j=z.breadcrumb,I,D=ne("breadcrumb",o),K=d(D),oe=B()(K,2),ue=oe[0],Ce=oe[1],ie=x(A,Z);if(!1)var ye,Ve;var Le=Se(D,H);if(ie&&ie.length>0){var xe=[],Ae=A||Z;I=ie.map(function(E,ge){var Ze=E.path,Re=E.key,We=E.type,be=E.menu,Ie=E.overlay,ze=E.onClick,Ke=E.className,Xe=E.separator,$e=E.dropdownProps,Me=O(F,Ze);Me!==void 0&&xe.push(Me);var De=Re!=null?Re:ge;if(We==="separator")return(0,m.jsx)(G,{children:Xe},De);var pe={},Fe=ge===ie.length-1;be?pe.menu=be:Ie&&(pe.overlay=Ie);var Te=E.href;return xe.length&&Me!==void 0&&(Te="#/".concat(xe.join("/"))),(0,m.jsx)(fe,t()(t()(t()({},pe),(0,X.default)(E,{data:!0,aria:!0})),{},{className:Ke,dropdownProps:$e,href:Te,separator:Fe?"":l,onClick:ze,prefixCls:D,children:Le(E,F,Ae,xe,Te)}),De)})}else if(P){var He=(0,V.default)(P).length;I=(0,V.default)(P).map(function(E,ge){if(!E)return E;var Ze=ge===He-1;return(0,_.Tm)(E,{separator:Ze?"":l,key:ge})})}var Ue=v()(D,j==null?void 0:j.className,s()({},"".concat(D,"-rtl"),J==="rtl"),h,C,Ce),je=t()(t()({},j==null?void 0:j.style),g);return ue((0,m.jsx)("nav",t()(t()({className:Ue,style:je},Q),{},{children:(0,m.jsx)("ol",{children:I})})))};S.Item=Pe,S.Separator=G;var b=S,T=b},86198:function(Ne,Y,r){r.d(Y,{Z:function(){return Oe}});var y=r(600861),s=r.n(y),le=r(238416),t=r.n(le),R=r(627424),B=r.n(R),w=r(670215),p=r.n(w),L=r(242122),M=r.n(L),v=r(667294),V=r(294184),X=r.n(V),_=r(518475),N=r(73287),q=r(121790),k=r(45598),W=r(296708);function m(d,a,c){if(typeof c=="boolean")return c;if(d.length)return!0;var u=(0,k.default)(a);return u.some(function(x){return x.type===W.Z})}var ee=r(141035),G=function(a){var c,u=a.componentCls,x=a.bodyBg,f=a.lightSiderBg,O=a.lightTriggerBg,S=a.lightTriggerColor;return t()({},"".concat(u,"-sider-light"),(c={background:f},t()(c,"".concat(u,"-sider-trigger"),{color:S,background:O}),t()(c,"".concat(u,"-sider-zero-width-trigger"),{color:S,background:O,border:"1px solid ".concat(x),borderInlineStart:0}),c))},de=G,se=function(a){var c,u,x=a.antCls,f=a.componentCls,O=a.colorText,S=a.triggerColor,b=a.footerBg,T=a.triggerBg,n=a.headerHeight,e=a.headerPadding,o=a.headerColor,i=a.footerPadding,l=a.triggerHeight,g=a.zeroTriggerHeight,h=a.zeroTriggerWidth,C=a.motionDurationMid,Z=a.motionDurationSlow,A=a.fontSize,P=a.borderRadius,H=a.bodyBg,U=a.headerBg,F=a.siderBg;return u={},t()(u,f,M()(M()((c={display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:H,"&, *":{boxSizing:"border-box"}},t()(c,"&".concat(f,"-has-sider"),t()({flexDirection:"row"},"> ".concat(f,", > ").concat(f,"-content"),{width:0})),t()(c,"".concat(f,"-header, &").concat(f,"-footer"),{flex:"0 0 auto"}),t()(c,"".concat(f,"-sider"),{position:"relative",minWidth:0,background:F,transition:"all ".concat(C,", background 0s"),"&-children":t()({height:"100%",marginTop:-.1,paddingTop:.1},"".concat(x,"-menu").concat(x,"-menu-inline-collapsed"),{width:"auto"}),"&-has-trigger":{paddingBottom:l},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:l,color:S,lineHeight:"".concat(l,"px"),textAlign:"center",background:T,cursor:"pointer",transition:"all ".concat(C)},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:n,insetInlineEnd:-h,zIndex:1,width:h,height:g,color:S,fontSize:a.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:F,borderStartStartRadius:0,borderStartEndRadius:P,borderEndEndRadius:P,borderEndStartRadius:0,cursor:"pointer",transition:"background ".concat(Z," ease"),"&::after":{position:"absolute",inset:0,background:"transparent",transition:"all ".concat(Z),content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:-h,borderStartStartRadius:P,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:P}}}}),c),de(a)),{},{"&-rtl":{direction:"rtl"}})),t()(u,"".concat(f,"-header"),t()({height:n,padding:e,color:o,lineHeight:"".concat(n,"px"),background:U},"".concat(x,"-menu"),{lineHeight:"inherit"})),t()(u,"".concat(f,"-footer"),{padding:i,color:O,fontSize:A,background:b}),t()(u,"".concat(f,"-content"),{flex:"auto",minHeight:0}),u},re=(0,ee.Z)("Layout",function(d){return[se(d)]},function(d){var a=d.colorBgLayout,c=d.controlHeight,u=d.controlHeightLG,x=d.colorText,f=d.controlHeightSM,O=d.marginXXS,S=d.colorTextLightSolid,b=d.colorBgContainer,T=u*1.25;return{colorBgHeader:"#001529",colorBgBody:a,colorBgTrigger:"#002140",bodyBg:a,headerBg:"#001529",headerHeight:c*2,headerPadding:"0 ".concat(T,"px"),headerColor:x,footerPadding:"".concat(f,"px ").concat(T,"px"),footerBg:a,siderBg:"#001529",triggerHeight:u+O*2,triggerBg:"#002140",triggerColor:S,zeroTriggerWidth:u,zeroTriggerHeight:u,lightSiderBg:b,lightTriggerBg:b,lightTriggerColor:x}},{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]}),te=r(785893),me=["prefixCls","suffixCls","className","tagName"],Se=["prefixCls","className","rootClassName","children","hasSider","tagName","style"];function ae(d){var a=d.suffixCls,c=d.tagName,u=d.displayName;return function(x){var f=v.forwardRef(function(O,S){return(0,te.jsx)(x,M()({ref:S,suffixCls:a,tagName:c},O))});return f}}var ce=v.forwardRef(function(d,a){var c=d.prefixCls,u=d.suffixCls,x=d.className,f=d.tagName,O=p()(d,me),S=v.useContext(N.E_),b=S.getPrefixCls,T=b("layout",c),n=re(T),e=B()(n,2),o=e[0],i=e[1],l=u?"".concat(T,"-").concat(u):T;return o((0,te.jsx)(f,M()({className:X()(c||l,x,i),ref:a},O)))}),Be=v.forwardRef(function(d,a){var c,u=v.useContext(N.E_),x=u.direction,f=v.useState([]),O=B()(f,2),S=O[0],b=O[1],T=d.prefixCls,n=d.className,e=d.rootClassName,o=d.children,i=d.hasSider,l=d.tagName,g=d.style,h=p()(d,Se),C=(0,_.default)(h,["suffixCls"]),Z=v.useContext(N.E_),A=Z.getPrefixCls,P=Z.layout,H=A("layout",T),U=m(S,o,i),F=re(H),Q=B()(F,2),z=Q[0],ne=Q[1],J=X()(H,(c={},t()(c,"".concat(H,"-has-sider"),U),t()(c,"".concat(H,"-rtl"),x==="rtl"),c),P==null?void 0:P.className,n,e,ne),j=v.useMemo(function(){return{siderHook:{addSider:function(D){b(function(K){return[].concat(s()(K),[D])})},removeSider:function(D){b(function(K){return K.filter(function(oe){return oe!==D})})}}}},[]);return z((0,te.jsx)(q.V.Provider,{value:j,children:(0,te.jsx)(l,M()(M()({ref:a,className:J,style:M()(M()({},P==null?void 0:P.style),g)},C),{},{children:o}))}))}),fe=ae({tagName:"div",displayName:"Layout"})(Be),ve=ae({suffixCls:"header",tagName:"header",displayName:"Header"})(ce),Pe=ae({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(ce),he=ae({suffixCls:"content",tagName:"main",displayName:"Content"})(ce),Ee=fe,$=Ee;$.Header=ve,$.Footer=Pe,$.Content=he,$.Sider=W.Z,$._InternalSiderContext=W.D;var Oe=$}}]);
