(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{15:function(t,e,n){"use strict";n.r(e);var i=n(1),s=n.n(i),a=n(4),c=n.n(a),r=n(3),u=n(5),l=n(6),d=n(7),o=n(9),j=n(8),h=n(0),b=function(t){Object(o.a)(n,t);var e=Object(j.a)(n);function n(t){var i;return Object(l.a)(this,n),(i=e.call(this,t)).state={newItem:"",list:[]},i}return Object(d.a)(n,[{key:"updateInput",value:function(t,e){this.setState(Object(u.a)({},t,e))}},{key:"addItem",value:function(){var t={id:1+Math.random(),value:this.state.newItem.slice()},e=Object(r.a)(this.state.list);e.push(t),this.setState({list:e,newItem:""})}},{key:"deleteItem",value:function(t){var e=Object(r.a)(this.state.list).filter((function(e){return e.id!==t}));this.setState({list:e})}},{key:"render",value:function(){var t=this;return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("div",{children:["Add an Item...",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",placeholder:"Type Item Here...",value:this.state.newItem,onChange:function(e){return t.updateInput("newItem",e.target.value)}}),Object(h.jsx)("button",{onClick:function(){return t.addItem()},children:"Add"}),Object(h.jsx)("br",{}),Object(h.jsx)("ul",{children:this.state.list.map((function(e){return Object(h.jsxs)("li",{children:[e.value,Object(h.jsx)("button",{onClick:function(){return t.deleteItem(e.id)},children:"X"})]},e.id)}))})]})})}}]),n}(i.Component);c.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.612d4c8a.chunk.js.map