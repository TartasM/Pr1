(this.webpackJsonprp1=this.webpackJsonprp1||[]).push([[4],{310:function(e,s,i){"use strict";i.r(s);var t=i(128),a=i(11),n=i(42),d=i(21),c=i(22),o=i(24),r=i(23),l=i(1),g=i.n(l),j=i(68),m=i.n(j),h=i(43),u=i(69),b=i(129),O=i(130),p=i(34),x=i(26),f=i(0),v=Object(x.a)(10),E=Object(O.a)({form:"dialogAddMessageForm"})((function(e){return Object(f.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(f.jsx)("div",{children:Object(f.jsx)(b.a,{component:p.b,name:"newMessageBody",placeholder:"Your text",validate:[x.b,v]})}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{children:"Add"})})]})})),P=function(e){Object(o.a)(i,e);var s=Object(r.a)(i);function i(e){var t;return Object(d.a)(this,i),(t=s.call(this,e)).AddDialogPost=function(s){e.sendDialogPost(s.newMessageBody)},t}return Object(c.a)(i,[{key:"render",value:function(){return this.dialogsElements=this.props.dialogs.map((function(e){return Object(f.jsx)(h.a,{url:e.url,name:e.name,id:e.id},e.id)})),this.dialogsElementsRightSide=this.props.personsside.map((function(e){return Object(f.jsx)(h.a,{url:e.url,name:e.name,id:e.id},e.id)})),this.messagesElements=this.props.messages.map((function(e){return Object(f.jsx)(u.a,{message:e.message},e.id)})),this.messagesElementsRightSide=this.props.messagesside.map((function(e){return Object(f.jsx)(u.a,{messagesside:e.message},e.id)})),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:m.a.dialogs,children:[Object(f.jsx)("div",{className:m.a.dialogIthem,children:this.dialogsElements}),Object(f.jsx)("div",{children:this.messagesElements})]}),Object(f.jsxs)("div",{className:m.a.rightside,children:[Object(f.jsx)("div",{children:this.dialogsElementsRightSide}),Object(f.jsx)("div",{children:this.messagesElementsRightSide}),Object(f.jsx)(E,{onSubmit:this.AddDialogPost})]})]})}}]),i}(g.a.Component),S=i(9);s.default=Object(S.d)(Object(a.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,personsside:e.dialogsPage.personsside,messagesside:e.dialogsPage.messagesside}}),(function(e){return{sendDialogPost:function(s){e(Object(t.a)(s))}}})),n.a)(P)}}]);
//# sourceMappingURL=4.cb1e2744.chunk.js.map