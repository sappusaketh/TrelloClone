(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(3),o=a.n(i),c=(a(15),a(1)),r=a(4),l=a(5),m=a(7),u=a(6),h=a(8),d=(a(16),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={backlog:{color:"red",heading:"Backlog",items:[]},toDo:{color:"yellow",heading:"To Do",items:[]},inProgrss:{color:"green",heading:"In Progress",items:[]},completed:{color:"#00f1ff",heading:"Completed",items:[]}},a.categoies=Object.keys(a.state),a.buildItems=function(e,t){for(var n=[],i=a.categoies.indexOf(t),o=a.categoies.length-1,c=0;c<e.length;c++)n.push(s.a.createElement("div",{key:c,className:"item"},s.a.createElement("div",{className:"leftBtn"},a.getLeftBtn(i,o,c,t)),s.a.createElement("div",{className:"item-content"},e[c]),a.getRightBtn(i,o,c,t)));return n},a.segments=function(){var e=[],t=function(t){e.push(s.a.createElement("div",{key:t,className:"column",style:{background:a.state[t].color}},s.a.createElement("h2",{className:"textCenter"},a.state[t].heading),s.a.createElement("div",{className:"textCenter"},s.a.createElement("button",{onClick:function(){return a.addItem(t)}},"+ Add Item")),s.a.createElement("div",{className:"content"},a.buildItems(a.state[t].items,t))))};for(var n in a.state)t(n);return console.log(e),e},a.newCategory=s.a.createRef(),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"addItem",value:function(e){var t=this,a=!1,n=prompt("Please enter Item details","");n&&n.length>0&&(this.categoies.forEach(function(e){t.state[e].items.includes(n)&&(alert("Item Exists"),a||(a=!0))}),a||(this.state[e].items.push(n),this.setState(Object(c.a)({},e,this.state[e])))),console.log(this.state)}},{key:"addCategory",value:function(){var e=this.newCategory.current.value,t={color:"grey",heading:e,items:[]};this.categoies.push(e),this.setState(Object(c.a)({},e,t)),this.newCategory.current.value=""}},{key:"moveItem",value:function(e,t,a){var n,s,i=this.state[t].items.splice(e,1),o=this.categoies.indexOf(t);"right"===a?s=this.categoies[o+1]:"left"===a&&(s=this.categoies[o-1]),this.state[s].items.push(i[0]),this.setState((n={},Object(c.a)(n,t,this.state[t]),Object(c.a)(n,s,this.state[s]),n)),console.log(this.state)}},{key:"getLeftBtn",value:function(e,t,a,n){var i=this;return 0!==e?[s.a.createElement("div",{key:a,className:"leftBtn"},s.a.createElement("button",{onClick:function(){return i.moveItem(a,n,"left")},className:"btn"},"  <  "))]:""}},{key:"getRightBtn",value:function(e,t,a,n){var i=this;return e!==t?[s.a.createElement("div",{key:a,className:"rightBtn"},s.a.createElement("button",{onClick:function(){return i.moveItem(a,n,"right")},className:"btn"}," >"))]:""}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"headSection"},s.a.createElement("div",{className:"addSection"},s.a.createElement("label",null,"Add Category"),s.a.createElement("input",{type:"text",ref:this.newCategory,placeholder:"name"}),s.a.createElement("button",{onClick:function(){return e.addCategory()}},"Add"))),s.a.createElement("div",{className:"main-content"},this.segments()))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.4bd06f8a.chunk.js.map