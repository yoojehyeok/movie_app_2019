(this.webpackJsonpmovie_app_2019=this.webpackJsonpmovie_app_2019||[]).push([[0],{27:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var i=n(2),r=n.n(i),s=n(15),a=n.n(s),c=n(6),o=n.n(c),u=n(16),d=n(17),j=n(18),l=n(21),v=n(20),h=(n(27),n(1));var p=function(t){t.key;var e=t.id,n=t.url,i=t.title;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h5",{children:["id : ",e]}),Object(h.jsxs)("h5",{children:["url : ",n]}),Object(h.jsxs)("h5",{children:[" title : ",i]})]})},b=n(19),f=n.n(b),m=(n(47),function(t){Object(l.a)(n,t);var e=Object(v.a)(n);function n(){var t;Object(d.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={isLoading:!0,movies:[]},t.getMovies=Object(u.a)(o.a.mark((function e(){var n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://yts-proxy.now.sh/list_movies.json");case 2:n=e.sent,i=n.data.data.movies,t.setState({movies:i,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),t}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var t=this.state,e=t.isLoading,n=t.movies;return Object(h.jsx)("div",{children:e?"Loading":n.map((function(t){return Object(h.jsx)(p,{id:t.id,url:t.url,title:t.title},t.id)}))})}}]),n}(r.a.Component)),O=m;a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.cbebacdb.chunk.js.map