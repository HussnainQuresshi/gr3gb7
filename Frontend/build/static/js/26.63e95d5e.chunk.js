(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[26],{687:function(e,a,t){"use strict";var n=t(675),l=t.n(n),s=t(676),c=t(396),m=t.n(c),r=t(164),o=function(){var e=Object(s.a)(l.a.mark((function e(a,t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,m.a.post("api/add_favourite",{ID:a}).then((function(e){r.NotificationManager.success("Successfully Added Into Favourites","Successful!",2e3),console.log(e)})).catch((function(e){console.log(e)}));case 3:e.next=7;break;case 5:return e.next=7,m.a.post("api/del_favourite",{ID:a}).then((function(e){r.NotificationManager.success("Successfully Removed From Favourites","Successful!",2e3)})).catch((function(e){console.log(e)}));case 7:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}();a.a=o},711:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return v}));var n=t(675),l=t.n(n),s=t(154),c=t(676),m=t(165),r=t(162),o=t(163),i=t(168),u=t(167),p=t(1),h=t.n(p),d=t(396),g=t.n(d),E=t(703),f=t(687),N=t(664),b=[{label:"Id",field:"id",sort:"asc"},{label:"Domain",field:"domain",sort:"asc"},{label:"Metrics",field:"metrics",sort:"asc"},{label:"Words",field:"words",sort:"asc"},{label:"Sentiment_score",field:"sentiment_score",sort:"asc"},{label:"Add_Fav",field:"add_fav",sort:"asc"}],v=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=a.call.apply(a,[this].concat(o))).state={togglesearch:!1,pageNo:1,size:5,pagesAmount:1,keyword:null,columns:[].concat(b),rows:[],domain:null,length:null,alphanumeric:null,numeric:null,hyphenated:null,tld:null,wordcount:null,words:null,score:null},e.toggleSearch=function(){e.setState({pageNo:1,size:5,pagesAmount:1,keyword:null,domain:null,metrics:null,words:null,score:null,togglesearch:!e.state.togglesearch})},e.onPageChange=function(a){e.setState({pageNo:a},(function(){e.getData(e.state)}))},e.onChange=function(a){var t=a.target,n=t.name,l=t.value;e.setState(Object(m.a)({},n,l.trim()),(function(){e.getData(e.state)}))},e.getData=function(){var a=Object(c.a)(l.a.mark((function a(t){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.post("api/get_domains",Object(s.a)({},t)).then((function(a){console.log(a);var t=a.data.data,n=a.data.pages,l=[];a.data.data.length>0?(t.map((function(a){l.push({id:a._id,domain:a.domain,metrics:h.a.createElement(h.a.Fragment,null,h.a.createElement("span",null,"alphanumeric: ",a.metrics.alphanumeric),h.a.createElement("hr",{className:"p-0 m-0"}),h.a.createElement("span",null,"hyphenated :",a.metrics.hyphenated),h.a.createElement("hr",{className:"p-0 m-0"}),h.a.createElement("span",null,"length:",a.metrics.length),h.a.createElement("hr",{className:"p-0 m-0"}),"\u200b\u200b ",h.a.createElement("span",null,"numeric: ",a.metrics.numeric),h.a.createElement("hr",{className:"p-0 m-0"}),h.a.createElement("span",null,"tld:",a.metrics.tld),h.a.createElement("hr",{className:"p-0 m-0"}),"\u200b\u200b ",h.a.createElement("span",null,"wordcount",a.metrics.wordcount),h.a.createElement("hr",{className:"p-0 m-0"})),words:h.a.createElement(h.a.Fragment,null,a.words.map((function(e,a){return h.a.createElement("span",{key:a},e," ",h.a.createElement("hr",{className:"p-0 m-0"}))}))),sentiment_score:a.sentiment_score,add_fav:h.a.createElement("button",{className:a.is_favourite?"btn btn-danger btn-sm":"btn btn-success btn-sm",onClick:function(){Object(f.a)(a._id,!a.is_favourite),e.getData(e.state)}},a.is_favourite?h.a.createElement(h.a.Fragment,null,"remove fav"):h.a.createElement(h.a.Fragment,null," add fav"))})})),console.log("Setting state . .. ",l),e.setState(Object(s.a)(Object(s.a)({},e.state),{},{rows:l,pagesAmount:n}))):e.setState(Object(s.a)(Object(s.a)({},e.state),{},{rows:[],pageNo:1,pagesAmount:1}))})).catch((function(a){console.log(a),e.setState(Object(s.a)(Object(s.a)({},e.state),{},{rows:[],pageNo:1,pagesAmount:1}))}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(o.a)(t,[{key:"render",value:function(){return h.a.createElement(h.a.Fragment,null,h.a.createElement("header",{className:"text-align-center"},h.a.createElement("h1",null,"SEARCH COMPONENT")),h.a.createElement(N.wb,{className:"m-0 p-0"},h.a.createElement(N.u,{xs:"3",sm:"2",md:"1",className:"m-1 p-0"},h.a.createElement(N.j,{className:"m-0 p-0"},h.a.createElement(N.k,{className:"m-0 p-0"},h.a.createElement("button",{style:{height:"35px"},className:"btn btn-sm btn-success border-outline-green btn-block",onClick:this.toggleSearch},"Toggle")))),h.a.createElement(N.u,{xs:"6",sm:"8",md:"9",className:"m-1 p-0"},h.a.createElement(N.j,{className:"m-0 p-0"},h.a.createElement(N.k,{className:"m-0 p-0"},h.a.createElement("input",{style:{height:"35px"},placeholder:"SuperSearch",disabled:this.state.togglesearch,name:"keyword",onChange:this.onChange,type:"text",className:"form-control form-control-sm m-0 p-0"})))),h.a.createElement(N.u,{xs:"2",sm:"1",md:"1",className:"m-1 p-0"},h.a.createElement(N.j,{className:"m-0 p-0"},h.a.createElement(N.k,{className:"m-0 p-0"},h.a.createElement(N.xb,{custom:!0,name:"size",placeholder:"No of Entries",onChange:this.onChange,id:"ccmonth"},h.a.createElement("option",{value:"5"},"5"),h.a.createElement("option",{value:"10"},"10"),h.a.createElement("option",{value:"20"},"20"),h.a.createElement("option",{value:"30"},"30"),h.a.createElement("option",{value:"40"},"40"),h.a.createElement("option",{value:"50"},"50"),h.a.createElement("option",{value:"60"},"60"),h.a.createElement("option",{value:"70"},"70"),h.a.createElement("option",{value:"80"},"80"),h.a.createElement("option",{value:"90"},"90"),h.a.createElement("option",{value:"100"},"100"),h.a.createElement("option",{value:"500"},"500"),h.a.createElement("option",{value:"1000"},"1000")))))),h.a.createElement(N.wb,{className:"m-0 p-0"},h.a.createElement(N.u,{xs:"5",sm:"4",md:"2",className:"m-1 p-0"},h.a.createElement(N.j,{className:"m-0 p-0"},h.a.createElement(N.k,{className:"m-0 p-0"},h.a.createElement("input",{style:{height:"35px"},placeholder:"Domain",disabled:!this.state.togglesearch,name:"domain",onChange:this.onChange,type:"text",className:"form-control form-control-sm"})))),h.a.createElement(N.u,{xs:"5",sm:"4",md:"2",className:"m-1 p-0"},h.a.createElement(N.j,{className:"m-0 p-0"},h.a.createElement(N.k,{className:"m-0 p-0"},h.a.createElement("input",{style:{height:"35px"},placeholder:"m.length",disabled:!this.state.togglesearch,name:"length",onChange:this.onChange,type:"number",className:"form-control form-control-sm"})))),h.a.createElement(N.u,{xs:"5",sm:"4",md:"2",className:"m-1 p-0"},h.a.createElement(N.j,{className:"m-0 p-0"},h.a.createElement(N.k,{className:"m-0 p-0"}," ",h.a.createElement("input",{style:{height:"35px"},placeholder:"m.alphanumeric",disabled:!this.state.togglesearch,name:"alphanumeric",onChange:this.onChange,type:"number",className:"form-control form-control-sm"})))),h.a.createElement(N.u,{xs:"5",sm:"4",md:"2",className:"m-1 p-0"},h.a.createElement(N.j,{className:"m-0 p-0"},h.a.createElement(N.k,{className:"m-0 p-0"}," ",h.a.createElement("input",{style:{height:"35px"},placeholder:"m.hyphenated",disabled:!this.state.togglesearch,name:"hyphenated",onChange:this.onChange,type:"number",className:"form-control form-control-sm"})))),h.a.createElement(N.u,{xs:"5",sm:"4",md:"2",className:"m-1 p-0"},h.a.createElement(N.j,{className:"m-0 p-0"},h.a.createElement(N.k,{className:"m-0 p-0"}," ",h.a.createElement("input",{style:{height:"35px"},placeholder:"m.tld",disabled:!this.state.togglesearch,name:"tld",onChange:this.onChange,type:"text",className:"form-control form-control-sm"})))),h.a.createElement(N.u,{xs:"5",sm:"4",md:"2",className:"m-1 p-0"},h.a.createElement(N.j,{className:"m-0 p-0"},h.a.createElement(N.k,{className:"m-0 p-0"}," ",h.a.createElement("input",{style:{height:"35px"},placeholder:"m.wordcount",disabled:!this.state.togglesearch,name:"wordcount",onChange:this.onChange,type:"number",className:"form-control form-control-sm"})))),h.a.createElement(N.u,{xs:"5",sm:"4",md:"2",className:"m-1 p-0"},h.a.createElement(N.j,{className:"m-0 p-0"},h.a.createElement(N.k,{className:"m-0 p-0"},h.a.createElement("input",{style:{height:"35px"},placeholder:"Words",disabled:!this.state.togglesearch,name:"words",onChange:this.onChange,type:"text",className:"form-control form-control-sm"})))),h.a.createElement(N.u,{xs:"5",sm:"4",md:"2",className:"m-1 p-0"},h.a.createElement(N.j,{className:"m-0 p-0"},h.a.createElement(N.k,{className:"m-0 p-0"},h.a.createElement("input",{style:{height:"35px"},placeholder:"Sentimental score",disabled:!this.state.togglesearch,name:"score",onChange:this.onChange,type:"number",className:"form-control form-control-sm"}))))),h.a.createElement(N.wb,null,h.a.createElement(N.u,null,h.a.createElement(N.j,null,h.a.createElement(N.k,{className:"heavy-rain-gradient"},h.a.createElement(E.c,{id:"divToPrint",className:"text-dark black-text p-2 strong",searching:!1,responsive:!0,paging:!1,striped:!0,theadColor:"dark",small:!0,noBottomColumns:!0,hover:!0,data:this.state}),h.a.createElement(N.sb,{align:"center",activePage:this.state.pageNo,pages:this.state.pagesAmount,onActivePageChange:this.onPageChange}))))))}}]),t}(p.Component)}}]);
//# sourceMappingURL=26.63e95d5e.chunk.js.map