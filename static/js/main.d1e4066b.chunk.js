(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{14:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(1),i=n.n(c),a=n(7),r=n.n(a),l=(n(14),n(5)),d=n(6),u=n(8),s=function(e){var t=e.id,n=e.name,c=e.completed,i=e.toggleCompleted;return Object(o.jsx)("div",{children:Object(o.jsxs)("label",{htmlFor:"task",style:c?{textDecoration:"line-through"}:{},children:[Object(o.jsx)("input",{type:"checkbox",name:"task",id:"task",checked:c,onChange:function(e){return console.log("".concat(n,": ").concat(!c)),i(t)}}),n]})})},j=function(e){var t=e.taskList,n=e.toggleCompleted;return Object(o.jsx)(i.a.Fragment,{children:t.map((function(e){return Object(o.jsx)(s,{id:e.id,name:e.name,completed:e.completed,toggleCompleted:n},e.id)}))})},b="madhavrjha@github.io/todo.todo-list",m=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)([]),r=Object(d.a)(a,2),s=r[0],m=r[1];Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem(b));e&&m(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem(b,JSON.stringify(s))}),[s]);return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"ToDo"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(o.jsx)("input",{type:"text",name:"taskName",value:n,onChange:function(e){i(e.target.value)}}),Object(o.jsx)("button",{type:"submit",onClick:function(e){var t=n.toLocaleLowerCase(),o=""===t,c=s.find((function(e){return t===e.name}));o||c?(o&&console.log("Empty Task Could not be added"),c&&console.log("Existed Task Could not be added")):(i(""),m((function(e){return[].concat(Object(l.a)(e),[{id:Object(u.uuid)(),name:t,completed:!1}])})))},children:"Add"}),Object(o.jsx)("button",{onClick:function(e){m((function(e){return e.filter((function(e){return!e.completed}))}))},children:"Remove All Completed"})]}),Object(o.jsxs)("p",{children:[s.filter((function(e){return!e.completed})).length," task remaining"]}),Object(o.jsx)(j,{taskList:s,toggleCompleted:function(e){var t=Object(l.a)(s),n=t.find((function(t){return t.id===e}));n.completed=!n.completed,m(t)}})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),i(e),a(e)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),f()}},[[20,1,2]]]);
//# sourceMappingURL=main.d1e4066b.chunk.js.map