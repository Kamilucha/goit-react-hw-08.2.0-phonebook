"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[986],{9133:function(n,e,t){t.d(e,{II:function(){return u},Yb:function(){return d},__:function(){return l},zx:function(){return p}});var r,a,i,o,s=t(168),c=t(5706),u=c.Z.input(r||(r=(0,s.Z)(["\n  box-sizing: border-box;\n  padding: 20px 50px 20px 40px;\n  width: 300px;\n  border: 2.4px solid #F6F6F6;\n  background-color: transparent;\n  border-radius: 40px;\n  font-family: 'DM Sans';\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.33;\n  letter-spacing: -0.01em;\n  color: #F6F6F6;\n  margin-top: 16px;"]))),l=c.Z.label(a||(a=(0,s.Z)(["\n  color: #F6F6F6;\n  font-family: DM Sans;\nfont-size: 14px;\nfont-weight: 500;\nline-height: 18px;\nletter-spacing: -0.28px;\ntext-transform: uppercase;\ndisplay: flex;\nflex-direction: column;\nmargin-bottom: 16px;\n\n"]))),d=c.Z.form(i||(i=(0,s.Z)(["\ndisplay: flex;\nflex-direction: column;\n\n"]))),p=c.Z.button(o||(o=(0,s.Z)(["\n  color: #F6F6F6;\n  padding: 14px 28px;\n\n  min-width: 124px;\n  height: 46px;\n\n  border: 2px solid #F6F6F6;\n  background-color: transparent;\n  border-radius: 40px;\n\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.29;\n\n  letter-spacing: -0.01em;\n  text-transform: uppercase;\n\n  margin-top: 8px;\n  max-width: 180px;"])))},1986:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,i,o=t(2791),s=t(9434),c=t(6907),u=t(9133),l=t(168),d=t(5706),p=d.Z.li(r||(r=(0,l.Z)(["\ndisplay: flex;\n"]))),x=d.Z.p(a||(a=(0,l.Z)(["\ncolor: white;\nmargin-right: 30px;\n"]))),m=t(9526),f=t(184),h=function(n){var e=n.name,t=n.number,r=n.id,a=(0,s.I0)();return(0,f.jsxs)(p,{children:[(0,f.jsxs)(x,{children:[e," : ",t]}),(0,f.jsx)(u.zx,{type:"button",onClick:function(){return a((0,m.xX)(r))},children:"Delete \ud83d\uddd1\ufe0f"})]},r)},b=d.Z.ul(i||(i=(0,l.Z)(["\n\n"]))),g=function(n){return n.contacts.contacts.items},v=function(n){return n.contacts.contacts.isLoading},j=function(n){return n.filter.filter},Z=function(){var n=function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}((0,s.v9)(g),(0,s.v9)(j));return(0,f.jsx)(b,{children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,f.jsx)(h,{id:e,name:t,number:r},e)}))})},F=t(4808),w=function(){var n=(0,s.I0)(),e=(0,s.v9)(j);return(0,f.jsxs)(u.__,{children:["Find contacts by name",(0,f.jsx)(u.II,{type:"text",name:"filter",value:e,onChange:function(e){var t=e.target.value;n((0,F.T)(t))}})]})},y=t(1362),C=t(9439),I=function(){var n=(0,o.useState)(""),e=(0,C.Z)(n,2),t=e[0],r=e[1],a=(0,o.useState)(""),i=(0,C.Z)(a,2),c=i[0],l=i[1],d=(0,s.I0)(),p=(0,s.v9)(g),x=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":l(a)}},h=function(){r(""),l("")};return(0,f.jsxs)(u.Yb,{onSubmit:function(n){if(n.preventDefault(),p.some((function(n){return n.name.toLowerCase()===t.toLowerCase()||n.number===c})))return alert("".concat(t," is already in contacts"));var e={name:t,number:c};d((0,m.G3)(e)),console.log(e),h()},children:[(0,f.jsxs)(u.__,{children:[" Name",(0,f.jsx)(u.II,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:x})]}),(0,f.jsxs)(u.__,{children:["Number",(0,f.jsx)(u.II,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:c,onChange:x})]}),(0,f.jsx)(u.zx,{type:"submit",children:"Add contact"})]})};function _(){var n=(0,s.I0)(),e=(0,s.v9)(v);return(0,o.useEffect)((function(){n((0,m.m$)())}),[n]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(I,{}),(0,f.jsx)(c.B6,{children:(0,f.jsx)(c.ql,{children:(0,f.jsx)("title",{children:"Your contacts"})})}),(0,f.jsx)(w,{}),(0,f.jsx)(Z,{}),e&&(0,f.jsx)(y.a,{})]})}}}]);
//# sourceMappingURL=986.a997d924.chunk.js.map