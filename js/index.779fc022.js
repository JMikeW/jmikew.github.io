(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],d=0,h=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={index:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("e8e9")},"0a55":function(t,e,a){"use strict";var n=a("b858"),r=a.n(n);r.a},"0b66":function(t,e,a){"use strict";var n=a("a517"),r=a.n(n);r.a},2264:function(t,e,a){},"2d73":function(t,e,a){},"4f40":function(t,e,a){},5835:function(t,e,a){},7102:function(t,e,a){"use strict";var n=a("4f40"),r=a.n(n);r.a},7184:function(t,e,a){"use strict";var n=a("e2a1"),r=a.n(n);r.a},"7de1":function(t,e,a){"use strict";var n=a("2264"),r=a.n(n);r.a},"829e":function(t,e,a){"use strict";var n=a("c888"),r=a.n(n);r.a},a517:function(t,e,a){},af6b:function(t,e,a){},b4c8:function(t,e,a){"use strict";var n=a("af6b"),r=a.n(n);r.a},b858:function(t,e,a){},c888:function(t,e,a){},d2a1:function(t){t.exports=JSON.parse('{"blog":[{"id":1,"title":"title1","description":"description1","leadingExcerpt":"This is the intro paragraph.","tags":["tag2","CSharp","tag12897","winforms"],"date":"12/30/2020","path":"https://moolicc.github.io/blog/2020/test.md"},{"id":2,"title":"title2","description":"description2","leadingExcerpt":"This is the intro paragraph 2.","tags":["tag2","tag12897","winforms"],"date":"10/30/2020","path":"https://moolicc.github.io/blog/2020/test2.md"},{"id":3,"title":"title3","description":"description3","leadingExcerpt":"This is the intro paragraph 3.","tags":["tag2","tag12897","winforms"],"date":"12/30/2017","path":"https://moolicc.github.io/blog/2017/test.md"},{"id":4,"title":"title4","description":"description4","leadingExcerpt":"This is the intro paragraph 4.","tags":["tag2","CSharp","tag12897","winforms"],"date":"8/30/2017","path":"https://moolicc.github.io/blog/2017/test2.md"}]}')},d4bf:function(t){t.exports=JSON.parse('{"projects":[{"title":"Wallop","description":"Wallop is an extensible solution for scripted, living desktop background to be run on multiple platforms.","url":"https://github.com/moolicc/Wallop/tree/dev","tag":"wallop"},{"title":"Waterlogged","description":"Waterlogged is a logging library with richness and extensibility in mind.","url":"https://github.com/moolicc/waterlogged","tag":"waterlogged"}]}')},dfe7:function(t,e,a){"use strict";var n=a("2d73"),r=a.n(n);r.a},e2a1:function(t,e,a){},e7f2:function(t,e,a){"use strict";var n=a("5835"),r=a.n(n);r.a},e8e9:function(t,e,a){"use strict";a.r(e);a("99af"),a("4160"),a("159b"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"wrapper"}},[a("NavBar"),a("div",{attrs:{id:"content"}},[a("router-view")],1),a("div",{attrs:{id:"sidebar"}},[a("router-view",{attrs:{name:"side"}})],1)],1),a("Footer")],1)},i=[],o=a("d4ec"),s=a("99de"),c=a("7e84"),l=a("262e"),u=a("9ab4"),d=a("60a3"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"navbar"}},[a("div",{staticClass:"menu"},[a("router-link",{attrs:{to:{path:"/"}}},[t._v("HOME")]),a("router-link",{attrs:{to:{path:"/projects/"}}},[t._v("Projects")]),a("router-link",{attrs:{to:{path:"/blog/"}}},[t._v("Blog")]),a("router-link",{attrs:{to:{path:"/contact/"}}},[t._v("Contact")])],1),a("hr"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.command,expression:"command"}],staticClass:"textbox",attrs:{type:"text"},domProps:{value:t.command},on:{keypress:t.keypress,input:[function(e){e.target.composing||(t.command=e.target.value)},t.textchanged]}})])},p=[],f=(a("2ca0"),a("498a"),a("bee2")),b=function(t){function e(){return Object(o["a"])(this,e),Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(f["a"])(e,[{key:"textchanged",value:function(){">"!=this.command[0]&&(this.command=">"+this.command)}},{key:"keypress",value:function(t){"Enter"==t.code&&this.handleCommand()}},{key:"handleCommand",value:function(){var t=this.command;t.startsWith(">")&&(t=this.command.substring(1)),t=t.trim(),"/"==t&&(t="#"),this.$router.push("/".concat(t)),this.command=">"}}]),e}(d["c"]);Object(u["a"])([Object(d["b"])({default:">"})],b.prototype,"command",void 0),b=Object(u["a"])([d["a"]],b);var v=b,g=v,m=(a("dfe7"),a("2877")),y=Object(m["a"])(g,h,p,!1,null,"e02ba202",null),j=y.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("a",{attrs:{href:"https://github.com/moolicc"}},[a("font-awesome-icon",{staticClass:"fa",attrs:{icon:["fab","github"],size:"lg"}})],1)])},_=[],k=function(t){function e(){return Object(o["a"])(this,e),Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["c"]);k=Object(u["a"])([d["a"]],k);var w=k,C=w,x=Object(m["a"])(C,O,_,!1,null,"f8ab26c8",null),T=x.exports,E=function(t){function e(){return Object(o["a"])(this,e),Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["c"]);E=Object(u["a"])([Object(d["a"])({components:{NavBar:j,Footer:T}})],E);var P=E,S=P,$=(a("0b66"),Object(m["a"])(S,r,i,!1,null,"7f9e6161",null)),I=$.exports,F=a("8c4f"),D=a("3a60"),q=a.n(D),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"body"}},[t._m(0),a("div",{staticClass:"about-wrapper"},[a("div",{staticClass:"icon-container",staticStyle:{"grid-area":"i1"}},[a("router-link",{attrs:{to:{path:"/"}}},[a("img",{attrs:{src:"https://avatars3.githubusercontent.com/u/28231505?s=48",alt:""}})])],1),a("div",{staticClass:"h2-container"},[a("router-link",{staticStyle:{"grid-area":"h1"},attrs:{to:{path:"/"}}},[a("h2",{staticClass:"about-header"},[t._v("I'm Moolick, and this is my plot of virtual real-estate.")])])],1),a("router-link",{staticStyle:{"grid-area":"c1"},attrs:{to:{path:"/"}}},[a("p",{staticClass:"about-comment"},[t._v("/* I enjoy coding, hacking away on 'duinos and pies, and basically everything in between. It might be worth mentioning that I consume a great deal of coffee and therefore directly affect the cost of that luxury. */")])]),a("div",{staticClass:"icon-container",staticStyle:{"grid-area":"i2"}},[a("router-link",{attrs:{to:{path:"/projects"}}},[a("font-awesome-icon",{staticClass:"fa",attrs:{icon:["fas","clipboard-list"],size:"lg"}})],1)],1),a("div",{staticClass:"h2-container"},[a("router-link",{staticStyle:{"grid-area":"h2"},attrs:{to:{path:"/projects"}}},[a("h2",[t._v("I work on various projects, which can all be found in a nice, summarized list.")])])],1),a("router-link",{staticStyle:{"grid-area":"c2"},attrs:{to:{path:"/projects"}}},[a("p",[t._v("/* This site is actually one of those projects. I wanted to learn vue.js. */")])]),a("div",{staticClass:"icon-container",staticStyle:{"grid-area":"i3"}},[a("router-link",{attrs:{to:{path:"/blog"}}},[a("font-awesome-icon",{staticClass:"fa",attrs:{icon:["fas","book"],size:"lg"}})],1)],1),a("div",{staticClass:"h2-container"},[a("router-link",{staticStyle:{"grid-area":"h3"},attrs:{to:{path:"/blog"}}},[a("h2",[t._v("You can also find my journal somewhere around here.")])])],1),a("router-link",{staticStyle:{"grid-area":"c3"},attrs:{to:{path:"/blog"}}},[a("p",[t._v("/* I'll be dev-blogging about my experiences with various frameworks/languages/stacks/etc. */")])]),a("div",{staticClass:"icon-container",staticStyle:{"grid-area":"i4"}},[a("router-link",{attrs:{to:{path:"/contact"}}},[a("font-awesome-icon",{staticClass:"fa",attrs:{icon:["fas","envelope"],size:"lg"}})],1)],1),a("div",{staticClass:"h2-container"},[a("router-link",{staticStyle:{"grid-area":"h4"},attrs:{to:{path:"/contact"}}},[a("h2",[t._v("There are also a few ways you can get in touch with me noted right here.")])])],1),a("router-link",{staticStyle:{"grid-area":"c4"},attrs:{to:{path:"/contact"}}},[a("p",[t._v("/* If for whatever reason you should want to do that. */")])])],1)])},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"intro"},[a("h1",[t._v("Hello, World!")]),a("p",{staticStyle:{"margin-bottom":"1%"}},[t._v("// And welcome to my portion of the internet!")]),a("hr",{staticClass:"green"})])}],z=function(t){function e(){return Object(o["a"])(this,e),Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["c"]);z=Object(u["a"])([d["a"]],z);var A=z,W=A,B=(a("b4c8"),Object(m["a"])(W,M,Y,!1,null,"3d7181d9",null)),L=B.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"blogarchive"}},[""!=t.filtersText?a("p",{staticClass:"filters-text"},[t._v("Filters: "+t._s(t.filtersText))]):t._e(),""!=t.filtersText?a("router-link",{staticStyle:{"margin-top":"0"},attrs:{to:{path:"/blog/archive/"}}},[t._v("Clear")]):t._e(),0==t.years.length?a("h1",[t._v("There's nothing here...")]):t._e(),t._l(t.years,(function(e){return a("div",{key:e,staticClass:"yearlycontainer"},[a("h1",[t._v(t._s(e))]),t._l(t.yearlyPosts(e),(function(e){return a("div",{key:e.id,staticClass:"post-container"},[a("router-link",{attrs:{to:{path:"/blog/"+e.date.getUTCFullYear()+"/"+e.safeTitle}}},[a("h2",{staticClass:"post-title"},[t._v(t._s(e.title))])]),a("p",{staticClass:"post-date"},[t._v(t._s(t.formatDate(e.date)))]),a("p",{staticClass:"post-desc"},[t._v(t._s(e.leadingExcerpt))])],1)}))],2)}))],2)},U=[],J=(a("caad"),a("d3b7"),a("25f0"),a("2532"),a("a4d3"),a("e01a"),a("ac1f"),a("5319"),a("d2a1")),G=function(){function t(e,a,n,r,i,s,c,l){Object(o["a"])(this,t),this.id=e,this.title=a,this.description=n,this.leadingExcerpt=r,this.tags=i,this.date=s,this.path=c,this.safeTitle=l}return Object(f["a"])(t,null,[{key:"loadPosts",value:function(){if(this.posts.length>0)return this.posts;var e=[];return J.blog.forEach((function(a){var n=a.path.replace(/^.*[\\\/]/,"").replace(".md","").replace(".html","");e.push(new t(a.id,a.title,a.description,a.leadingExcerpt,a.tags,new Date(a.date),a.path,n))})),this.posts=e,e}}]),t}();G.posts=[];var H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"post-preview",style:{marginLeft:t.leftMargin},attrs:{id:"postpreview"}},[a("router-link",{attrs:{to:{path:"/post/"+t.post.date.getFullYear()+"/"+t.post.id}}},[a("h2",{attrs:{id:"title"}},[t._v(t._s(t.post.title))]),a("p",{attrs:{id:"date"}},[t._v(t._s(t.formatDate(t.post.date)))]),a("p",{attrs:{id:"description"}},[t._v(t._s(t.lead))])])],1)},V=[],R=function(t){function e(){return Object(o["a"])(this,e),Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(f["a"])(e,[{key:"formatDate",value:function(t){var e={month:"long",day:"numeric",year:"numeric"};return new Intl.DateTimeFormat("default",e).format(t)}},{key:"leftMargin",get:function(){return this.firstItem?"5%":"0%"}}]),e}(d["c"]);Object(u["a"])([Object(d["b"])(G)],R.prototype,"post",void 0),Object(u["a"])([Object(d["b"])()],R.prototype,"firstItem",void 0),Object(u["a"])([Object(d["b"])()],R.prototype,"lead",void 0),R=Object(u["a"])([d["a"]],R);var X=R,K=X,Q=(a("7102"),Object(m["a"])(K,H,V,!1,null,"1b303de2",null)),Z=Q.exports,tt=function(t){function e(){return Object(o["a"])(this,e),Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(f["a"])(e,[{key:"yearlyPosts",value:function(t){for(var e=G.loadPosts(),a=[],n=0;n<e.length;n++){var r=e[n],i=r.date.getFullYear();i==t&&(void 0!=this.$route.query.t?r.tags.includes(this.$route.query.t)&&a.push(r):a.push(r))}return a}},{key:"formatDate",value:function(t){var e={month:"long",day:"numeric",year:"numeric"};return new Intl.DateTimeFormat("default",e).format(t)}},{key:"filtersText",get:function(){var t=this.$route.query.y,e=this.$route.query.t,a="";return void 0!=t&&(a+="\n  Year: ".concat(t)),void 0!=e&&(a+="\n  Tag: ".concat(e)),a}},{key:"years",get:function(){for(var t=G.loadPosts(),e=[],a=this.$route.query.y,n=this.$route.query.t,r=0;r<t.length;r++){var i=t[r],o=i.date.getFullYear();if(void 0!=a){var s=o.toString();if(a!=s)continue}e.includes(o)||(void 0!=n?i.tags.includes(n)&&e.push(o):e.push(o))}return e.sort((function(t,e){return t<e?1:t>e?-1:0}))}}]),e}(d["c"]);tt=Object(u["a"])([Object(d["a"])({components:{PostPreview:Z}})],tt);var et=tt,at=et,nt=(a("e7f2"),Object(m["a"])(at,N,U,!1,null,"10bc2a29",null)),rt=nt.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"blogpost"}},[a("div",{staticClass:"tag-links"},t._l(t.tags,(function(e){return a("router-link",{key:e,staticClass:"tag-container",attrs:{to:{path:"/archive",query:{t:e}}}},[t._v(t._s(e))])})),1),a("markdown-it-vue",{staticClass:"md-body",attrs:{content:t.content}}),a("BlogDiscussion",{attrs:{id:"comments"}})],1)},ot=[],st=(a("7db0"),a("1276"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("VueScriptComponent",{attrs:{script:'<script src="https://utteranc.es/client.js"\n        repo="moolicc/moolicc.github.io"\n        issue-term="title"\n        label=":speech_balloon:  Discussion"\n        theme="github-light"\n        crossorigin="anonymous"\n        async>\n<\/script>'}})],1)}),ct=[],lt=a("6183"),ut=function(t){function e(){return Object(o["a"])(this,e),Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["c"]);Object(u["a"])([Object(d["b"])()],ut.prototype,"template",void 0),ut=Object(u["a"])([Object(d["a"])({components:{VueScriptComponent:lt["a"]}})],ut);var dt=ut,ht=dt,pt=Object(m["a"])(ht,st,ct,!1,null,"624cf9d2",null),ft=pt.exports,bt=a("48cd"),vt=a.n(bt),gt=(a("f417"),function(t){function e(){return Object(o["a"])(this,e),Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(f["a"])(e,[{key:"created",value:function(){this.loadContent()}},{key:"loadContent",value:function(){this.content="# *LOADING :hourglass_flowing_sand:*";var t,e=G.loadPosts(),a=this.$route.path.split("/"),n=a[2];if("/blog/"==this.$route.path&&(n="latest"),console.log("Finding latest post..."),void 0==n||"latest"==n)t=e.sort((function(t,e){return t.date<e.date?1:t.date>e.date?-1:0}))[0];else{var r=a[3],i=parseInt(n);t=e.find((function(t){return t.date.getUTCFullYear()==i&&t.safeTitle==r}))}null==t?this.content="# Post not found":(document.title=t.title,this.path=t.path,this.tags=t.tags,console.log("Loading post "+t.path),this.loadMarkdown(t.path))}},{key:"loadMarkdown",value:function(t){var e=this,a=new XMLHttpRequest;a.open("GET",t),a.onload=function(){4==a.readyState&&200==a.status&&(e.content=a.responseText)},a.onerror=function(){e.content="**Post not found**"},a.send()}}]),e}(d["c"]));Object(u["a"])([Object(d["b"])()],gt.prototype,"content",void 0),Object(u["a"])([Object(d["b"])()],gt.prototype,"path",void 0),Object(u["a"])([Object(d["b"])()],gt.prototype,"tags",void 0),gt=Object(u["a"])([Object(d["a"])({components:{MarkdownItVue:vt.a,BlogDiscussion:ft}})],gt);var mt=gt,yt=mt,jt=(a("0a55"),Object(m["a"])(yt,it,ot,!1,null,"103ef700",null)),Ot=jt.exports,_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"main"}},[a("h3",[t._v("Tags")]),a("ul",t._l(t.postTags,(function(e){return a("li",{key:e.count},[a("router-link",{attrs:{to:{path:"/blog/archive",query:{t:e}}}},[t._v(t._s(e))])],1)})),0),a("h3",[t._v("Share")]),a("div",{staticClass:"share-container"},[a("font-awesome-icon",{staticClass:"fa falink",attrs:{icon:["fas","link"],size:"lg",title:"Copy link"},on:{click:t.copyLink}}),a("a",{staticClass:"twitter-share-button",attrs:{href:"https://twitter.com/share?ref_src=twsrc%5Etfw","data-text":t.postTitle,"data-dnt":"true","data-show-count":"false"}},[a("font-awesome-icon",{staticClass:"fa falink",attrs:{icon:["fab","twitter"],size:"lg",title:"Tweet"}})],1)],1),a("h3",[t._v("Discussion")]),a("div",{staticClass:"comments-container"},[a("a",{attrs:{href:"#comments"}},[a("font-awesome-icon",{staticClass:"fa falink2",attrs:{icon:["far","comments"],size:"lg",title:"Comments"}})],1),a("a",{attrs:{href:"https://github.com/moolicc/moolicc.github.io/issues?q=label%3A%22%3Aspeech_balloon%3A++Discussion%22",target:"_blank"}},[a("font-awesome-icon",{staticClass:"fa falink2",attrs:{icon:["fab","github-alt"],size:"lg",title:"Discussions on Github"}})],1)]),a("hr"),a("h3",[t._v("Archive")]),a("ul",[a("li",[a("router-link",{attrs:{to:{path:"/blog/archive"}}},[t._v("All Posts")])],1),t._l(t.yearlyPosts,(function(e){return a("li",{key:e},[a("router-link",{attrs:{to:{path:"/blog/archive",query:{y:e.year}}}},[t._v(t._s(e.year)+" ("+t._s(e.count)+")")])],1)}))],2),a("hr"),a("h3",[t._v("All Tags")]),a("ul",t._l(t.allTags,(function(e){return a("li",{key:e.count},[a("router-link",{attrs:{to:{path:"/blog/archive",query:{t:e.name}}}},[t._v(t._s(e.name)+" ("+t._s(e.count)+")")])],1)})),0)])},kt=[],wt=(a("c740"),a("b0c0"),function t(e,a){Object(o["a"])(this,t),this.name=e,this.count=a}),Ct=function t(e,a){Object(o["a"])(this,t),this.year=e,this.count=a},xt=function(t){function e(){return Object(o["a"])(this,e),Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(f["a"])(e,[{key:"copyLink",value:function(){navigator.clipboard.writeText(window.location.href)}},{key:"findIndex",value:function(t,e){for(var a=0;a<t.length;a++){var n=t[a];if(e(n))return a}return-1}},{key:"findPost",value:function(){var t,e=G.loadPosts(),a=this.$route.path.split("/"),n=a[2];if("/blog/"==this.$route.path&&(n="latest"),console.log("Finding latest post..."),void 0==n||"latest"==n)t=e.sort((function(t,e){return t.date<e.date?1:t.date>e.date?-1:0}))[0];else{var r=a[3],i=parseInt(n);t=e.find((function(t){return t.date.getUTCFullYear()==i&&t.safeTitle==r}))}return t}},{key:"postTitle",get:function(){var t=this.findPost();return null!=t?t.title:""}},{key:"postTags",get:function(){var t=this.findPost();return null!=t?t.tags:""}},{key:"allTags",get:function(){var t=this,e=G.loadPosts(),a=[];return e.forEach((function(e){e.tags.forEach((function(e){var n=t.findIndex(a,(function(t){return t.name==e}));n>-1?a[n].count+=1:a.push(new wt(e,1))}))})),a}},{key:"yearlyPosts",get:function(){var t=this,e=G.loadPosts(),a=[];return e.forEach((function(e){var n=t.findIndex(a,(function(t){return t.year==e.date.getFullYear()}));n>-1?a[n].count+=1:a.push(new Ct(e.date.getFullYear(),1))})),a}}]),e}(d["c"]);xt=Object(u["a"])([d["a"]],xt);var Tt=xt,Et=Tt,Pt=(a("7184"),Object(m["a"])(Et,_t,kt,!1,null,null,null)),St=Pt.exports,$t=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},It=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"body"}},[a("p",[t._v("Email")])])}],Ft=function(t){function e(){return Object(o["a"])(this,e),Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["c"]);Ft=Object(u["a"])([d["a"]],Ft);var Dt=Ft,qt=Dt,Mt=(a("829e"),Object(m["a"])(qt,$t,It,!1,null,"aee45ac4",null)),Yt=Mt.exports,zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"projects-list"}},[a("h1",[t._v("Below is a list of projects I contribute to")]),t._l(t.projects,(function(e){return a("project-container",{key:e.title},[a("a",{attrs:{href:e.url,target:"_blank"}},[a("h2",[t._v(t._s(e.title))])]),a("p",[t._v(t._s(e.description))]),a("router-link",{staticClass:"posts-link",attrs:{to:{path:"/blog/archive/",query:{t:e.tag}}}},[t._v("See posts")])],1)}))],2)},At=[],Wt=a("d4bf"),Bt=function(){function t(e,a,n,r){Object(o["a"])(this,t),this.title=e,this.description=a,this.tag=n,this.url=r}return Object(f["a"])(t,null,[{key:"loadProjects",value:function(){if(this.projects.length>0)return this.projects;var e=[];return Wt.projects.forEach((function(a){e.push(new t(a.title,a.description,a.tag,a.url))})),this.projects=e,e}}]),t}();Bt.projects=[];var Lt=function(t){function e(){return Object(o["a"])(this,e),Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(f["a"])(e,[{key:"projects",get:function(){return Bt.loadProjects()}}]),e}(d["c"]);Lt=Object(u["a"])([d["a"]],Lt);var Nt=Lt,Ut=Nt,Jt=(a("7de1"),Object(m["a"])(Ut,zt,At,!1,null,"15c877c2",null)),Gt=Jt.exports,Ht=a("ecee"),Vt=a("ad3d"),Rt=a("c074"),Xt=a("f2d1"),Kt=a("b702");n["a"].config.productionTip=!1,n["a"].use(q.a);var Qt=G.loadPosts(),Zt=[{path:"/",name:"home",component:L},{path:"/projects/",component:Gt},{path:"/blog/",redirect:"/blog/latest"},{path:"/blog/latest/",components:{default:Ot,side:St}},{path:"/blog/archive/",components:{default:rt,side:St}},{path:"/contact/",component:Yt}],te=new F["a"]({mode:"history",routes:Zt});Qt.forEach((function(t){console.log("Adding route for blogpost: "+"/blog/".concat(t.date.getUTCFullYear(),"/").concat(t.safeTitle,"/")),te.addRoutes([{path:"/blog/".concat(t.date.getUTCFullYear(),"/").concat(t.safeTitle,"/"),name:t.title,components:{default:Ot,side:St}}])})),n["a"].use(F["a"]),Ht["c"].add(Rt["b"]),Ht["c"].add(Rt["a"]),Ht["c"].add(Rt["c"]),Ht["c"].add(Rt["d"]),Ht["c"].add(Xt["c"]),Ht["c"].add(Xt["b"]),Ht["c"].add(Xt["a"]),Ht["c"].add(Kt["a"]),n["a"].component("font-awesome-icon",Vt["a"]),new n["a"]({router:te,render:function(t){return t(I)}}).$mount("#app")}});
//# sourceMappingURL=index.779fc022.js.map