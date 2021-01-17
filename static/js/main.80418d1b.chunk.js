(this["webpackJsonpbookshelf-app"]=this["webpackJsonpbookshelf-app"]||[]).push([[0],{13:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),r=n(23),i=n.n(r),o=n(9),l=n(11),h=n.n(l),d=n(14),u=n(15),j=n(16),b=n(7),p=n(18),O=n(17),x=n(2);n(13);var g=function(e){var t=e.tags.map((function(e){return Object(a.jsx)("div",{children:e})}));return Object(a.jsxs)("div",{className:"book",children:[Object(a.jsx)("div",{className:"book-title",children:Object(a.jsx)("a",{className:"book-url",href:e.url,target:"_blank",children:e.title})}),Object(a.jsx)("div",{className:"book-tags",children:t})]})};var f=function(e){var t=e.query,n=e.submitQuery,s=e.books.map((function(e){return Object(a.jsx)("div",{className:"bookshelf",children:Object(a.jsx)("li",{children:Object(a.jsx)(g,{title:e.title,url:e.url,tags:e.tags})})})}));return Object(a.jsxs)("div",{className:"bookshelf",children:[Object(a.jsx)("h1",{children:"Bookshelf"}),Object(a.jsx)("div",{className:"search-bar-container",children:Object(a.jsx)("input",{type:"text",id:"search-bar",placeholder:"book name, author, or any #tag! (Temp: #tag search only !)",onChange:function(e){return n(e)},value:t})}),Object(a.jsx)("div",{className:"search-results",children:Object(a.jsx)("ol",{children:s})}),Object(a.jsx)("div",{className:"open-add-book",children:Object(a.jsx)(o.b,{to:"/addBook",children:Object(a.jsx)("button",{children:"Add a book"})})})]})},v=n(8),k="https://www.bookshelf.alchemist-hk.com/api",m=localStorage.token;m||(m=localStorage.token=Math.random().toString(36).substr(-8));var y={Accept:"application/json",Authorization:m},C=function(e){return fetch("".concat(k,"/book"),{method:"POST",headers:Object(v.a)(Object(v.a)({},y),{},{"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return e.books}))},N=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={title:"",url:"",tags:[],description:""},a.handleTitleChange=a.handleTitleChange.bind(Object(b.a)(a)),a.handleUrlChange=a.handleUrlChange.bind(Object(b.a)(a)),a.handleTagsChange=a.handleTagsChange.bind(Object(b.a)(a)),a.handleAddBook=a.handleAddBook.bind(Object(b.a)(a)),a.handleDescriptionChange=a.handleDescriptionChange.bind(Object(b.a)(a)),a}return Object(j.a)(n,[{key:"handleAddBook",value:function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={title:this.state.title,tags:this.state.tags,url:this.state.url,description:this.state.description},e.next=3,n=[t],fetch("".concat(k,"/book/bulk"),{method:"POST",headers:Object(v.a)(Object(v.a)({},y),{},{"Content-Type":"application/json"}),body:JSON.stringify(n)}).then((function(e){return e.json()}));case 3:e.sent,this.setState({title:"",url:"",tags:[],description:""});case 5:case"end":return e.stop()}var n}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleTitleChange",value:function(e){this.setState({title:e.target.value.trim()})}},{key:"handleUrlChange",value:function(e){this.setState({url:e.target.value.trim()})}},{key:"handleTagsChange",value:function(e){var t=e.target.value.trim().split(/\s+/).filter((function(e){return e})).map((function(e){return"#"===e.charAt(0)?e:"#".concat(e)}));this.setState({tags:t}),console.log(this.state)}},{key:"handleDescriptionChange",value:function(e){this.setState({description:e.target.value.trim()})}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"add-book-container",children:[Object(a.jsx)("h1",{children:"Add a new book"}),Object(a.jsxs)("div",{className:"form",children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("div",{className:"label",children:"Title"}),Object(a.jsx)("div",{className:"input",children:Object(a.jsx)("input",{type:"text",id:"title",placeholder:"e.g Attention is all your need",onChange:this.handleTitleChange,required:!0})})]}),Object(a.jsxs)("span",{children:[Object(a.jsx)("div",{className:"url",children:"URL"}),Object(a.jsx)("div",{className:"input",children:Object(a.jsx)("input",{type:"url",id:"url",placeholder:"e.g https://arxiv.org/pdf/1706.03762.pdf",onChange:this.handleUrlChange,required:!0})})]}),Object(a.jsxs)("span",{children:[Object(a.jsx)("div",{className:"tags",children:"Tags"}),Object(a.jsx)("div",{className:"input",children:Object(a.jsx)("input",{type:"text",id:"tags",placeholder:"#Transformer #Attention",onChange:this.handleTagsChange,required:!0})})]}),Object(a.jsxs)("span",{children:[Object(a.jsx)("div",{className:"description",children:"Description"}),Object(a.jsx)("div",{className:"input",children:Object(a.jsx)("input",{type:"text",id:"description",placeholder:"e.g This is for your attention~",onChange:this.handleDescriptionChange,required:!0})})]}),Object(a.jsx)("span",{children:Object(a.jsx)("div",{className:"add-button",children:Object(a.jsx)("button",{type:"submit",onClick:this.handleAddBook,children:"Add"})})})]}),Object(a.jsx)("div",{className:"open-search",children:Object(a.jsx)(o.b,{to:"/",children:"back to search"})})]})}}]),n}(c.a.Component),S=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleSearch=a.handleSearch.bind(Object(b.a)(a)),a.state={books:[],searchValue:""},a}return Object(j.a)(n,[{key:"handleSearch",value:function(){var e=Object(d.a)(h.a.mark((function e(t){var n,a,s,c,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,this.setState({searchValue:n}),a={tags:[]},this.state.searchValue.includes("#")&&(s=this.state.searchValue.split(/\s+/).filter((function(e){return e})),c=s.map((function(e){return"#"===e.charAt(0)?e:"#".concat(e)})),a.tags=c),console.log(a),e.next=7,C(a);case 7:r=e.sent,this.setState((function(e){return{books:r}}));case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.books,s=t.searchValue;return Object(a.jsx)("div",{className:"app",children:Object(a.jsx)(o.a,{basename:"/bookshelf-app",children:Object(a.jsxs)(x.c,{children:[Object(a.jsx)(x.a,{exact:!0,path:"/",render:function(t){t.history;return Object(a.jsx)(f,{query:s,submitQuery:e.handleSearch,books:n})}}),Object(a.jsx)(x.a,{exact:!0,path:"/addBook",render:function(e){e.history;return Object(a.jsx)(N,{})}})]})})})}}]),n}(c.a.Component);i.a.render(Object(a.jsx)(o.a,{children:Object(a.jsx)(S,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.80418d1b.chunk.js.map