(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[10],{682:function(e,a,t){},688:function(e,a,t){"use strict";var n=t(675),l=t.n(n),c=t(676),s=t(396),r=t.n(s),o=t(164),m=function(){var e=Object(c.a)(l.a.mark((function e(a,t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,r.a.post("api/add_favourite",{ID:a}).then((function(e){o.NotificationManager.success("Successfully Added Into Favourites","Successful!",2e3),console.log(e)})).catch((function(e){console.log(e)}));case 3:e.next=7;break;case 5:return e.next=7,r.a.post("api/del_favourite",{ID:a}).then((function(e){o.NotificationManager.success("Successfully Removed From Favourites","Successful!",2e3)})).catch((function(e){console.log(e)}));case 7:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}();a.a=m},737:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return x}));var n=t(675),l=t.n(n),c=t(154),s=t(676),r=t(165),o=t(162),m=t(163),i=t(168),u=t(167),p=t(1),d=t.n(p),h=t(396),g=t.n(h),E=(t(682),t(704)),f=t(688),b=t(664),v=d.a.createElement("div",{className:"loader p-2 ml-5 d-flex"}),N=[{label:"Id",field:"id",sort:"asc"},{label:"Domain",field:"domain",sort:"asc"},{label:"Metrics",field:"metrics",sort:"asc"},{label:"Words",field:"words",sort:"asc"},{label:"Sentiment_score",field:"sentiment_score",sort:"asc"},{label:"Add_Fav",field:"add_fav",sort:"asc"}],x=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,m=new Array(n),i=0;i<n;i++)m[i]=arguments[i];return(e=a.call.apply(a,[this].concat(m))).state={isloading:!1,is_favourite:!0,pageNo:1,size:5,pagesAmount:1,columns:[].concat(N),rows:[],domain:null,length:null,alphanumeric:0,numeric:null,hyphenated:0,tld:null,wordcount:null,words:null,score:null,countselect:"0",scoreselect:"0",lengthselect:"0"},e.onPageChange=function(a){e.setState({pageNo:a},(function(){return e.getData(e.state)}))},e.onChange=function(a){var t=a.target,n=t.name,l=t.value;if("hyphenated"==n||"alphanumeric"==n||"numeric"==n){e.setState(Object(r.a)({},n,a.target.checked?1:0))}else e.setState(Object(r.a)({},n,l.trim()))},e.onClickSearch=function(){e.getData(e.state)},e.getData=function(){var a=Object(s.a)(l.a.mark((function a(t){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e.setState({isloading:!0}),a.next=3,g.a.post("api/get_domains",Object(c.a)({},t)).then((function(a){console.log(a);var t=a.data.data,n=a.data.pages,l=[];a.data.data.length>0?(t.map((function(a){l.push({id:a._id,domain:a.domain,metrics:d.a.createElement(d.a.Fragment,null,d.a.createElement("span",null,"alphanumeric : ",a.metrics.alphanumeric),d.a.createElement("hr",{className:"p-0 m-0"}),d.a.createElement("span",null,"hyphenated :",a.metrics.hyphenated),d.a.createElement("hr",{className:"p-0 m-0"}),d.a.createElement("span",null,"length:",a.metrics.length),d.a.createElement("hr",{className:"p-0 m-0"}),"\u200b\u200b ",d.a.createElement("span",null,"numeric : ",a.metrics.numeric),d.a.createElement("hr",{className:"p-0 m-0"}),d.a.createElement("span",null,"tld:",a.metrics.tld),d.a.createElement("hr",{className:"p-0 m-0"}),"\u200b\u200b ",d.a.createElement("span",null,"wordcount : ",a.metrics.wordcount),d.a.createElement("hr",{className:"p-0 m-0"})),words:d.a.createElement(d.a.Fragment,null,a.words.map((function(e,a){return d.a.createElement("span",{key:a},", ",e," ",d.a.createElement("hr",{className:"p-0 m-0"}))}))),sentiment_score:a.sentiment_score,add_fav:d.a.createElement("button",{className:a.is_favourite?"btn btn-danger btn-sm":"btn btn-success btn-sm",onClick:function(){Object(f.a)(a._id,!a.is_favourite),e.getData(e.state)}},a.is_favourite?d.a.createElement(d.a.Fragment,null,"remove fav"):d.a.createElement(d.a.Fragment,null," add fav"))})})),console.log("Setting state . .. ",l),e.setState(Object(c.a)(Object(c.a)({},e.state),{},{rows:l,pagesAmount:n,isloading:!1}))):e.setState(Object(c.a)(Object(c.a)({},e.state),{},{isloading:!1,rows:[],pageNo:1,pagesAmount:1}))})).catch((function(a){console.log(a),e.setState(Object(c.a)(Object(c.a)({},e.state),{},{rows:[],pageNo:1,pagesAmount:1,isloading:!1}))}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(m.a)(t,[{key:"render",value:function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("header",{className:"text-align-center"},d.a.createElement("h1",null,"Favourite COMPONENT")),d.a.createElement(b.wb,{className:"m-0 p-0"},d.a.createElement(b.u,{xs:"3",sm:"2",md:"1",className:"m-1 p-0 "},d.a.createElement(b.f,{block:!0,variant:"outline",color:"success",onClick:this.onClickSearch},"Search")),d.a.createElement(b.u,{xs:"2",sm:"1",md:"1",className:"m-1 p-0 rounded border border-success"},d.a.createElement(b.xb,{custom:!0,name:"size",placeholder:"No of Entries",onChange:this.onChange,id:"ccmonth"},d.a.createElement("option",{value:"5"},"5"),d.a.createElement("option",{value:"10"},"10"),d.a.createElement("option",{value:"20"},"20"),d.a.createElement("option",{value:"30"},"30"),d.a.createElement("option",{value:"40"},"40"),d.a.createElement("option",{value:"50"},"50"),d.a.createElement("option",{value:"60"},"60"),d.a.createElement("option",{value:"70"},"70"),d.a.createElement("option",{value:"80"},"80"),d.a.createElement("option",{value:"90"},"90"),d.a.createElement("option",{value:"100"},"100"),d.a.createElement("option",{value:"500"},"500"),d.a.createElement("option",{value:"1000"},"1000"))),d.a.createElement(b.u,{xs:"5",sm:"4",md:"2",className:"m-1 p-0 rounded border border-success"},d.a.createElement("input",{style:{height:"35px"},placeholder:"Domain",name:"domain",onChange:this.onChange,type:"text",className:"form-control form-control-sm"})),d.a.createElement(b.u,{xs:"5",sm:"4",md:"2",className:"m-1 p-0 rounded border border-success"},d.a.createElement("input",{style:{height:"35px"},placeholder:"Words",name:"words",onChange:this.onChange,type:"text",className:"form-control form-control-sm"})),d.a.createElement(b.u,{xs:"5",sm:"4",md:"2",style:{height:"35px"},className:"m-1 p-0 rounded border border-success"},d.a.createElement("div",{className:"form-check"},d.a.createElement("label",{style:{marginLeft:"-18px"},className:"form-check-label mt-2 "},"alphanumeric"),d.a.createElement(b.Hb,{shape:"pill",name:"alphanumeric",className:"mx-1 p-auto form-check-input",onChange:this.onChange,color:"success",labelOn:"Yes",labelOff:"No"}))),d.a.createElement(b.u,{xs:"5",sm:"4",md:"2",style:{height:"35px"},className:"m-1 p-0 rounded border border-success"},d.a.createElement("div",{className:"form-check"},d.a.createElement("label",{className:"form-check-label mt-2 "},"hyphenated"),d.a.createElement(b.Hb,{shape:"pill",name:"hyphenated",className:"mx-1 p-auto form-check-input",onChange:this.onChange,color:"success",labelOn:"Yes",labelOff:"No"}))),d.a.createElement(b.u,{xs:"5",sm:"4",md:"2",style:{height:"35px"},className:"m-1 p-0 rounded border border-success"},d.a.createElement("div",{className:"form-check"},d.a.createElement("label",{className:"form-check-label mt-2 "},"numeric"),d.a.createElement(b.Hb,{shape:"pill",name:"numeric",className:"mx-1 p-auto form-check-input",onChange:this.onChange,color:"success",labelOn:"Yes",labelOff:"No"}))),d.a.createElement(b.u,{xs:"5",sm:"4",md:"1",className:"m-1 p-0 rounded border border-success"},d.a.createElement("input",{style:{height:"35px"},placeholder:"tld",name:"tld",onChange:this.onChange,type:"text",className:"form-control form-control-sm"})),d.a.createElement(b.u,{xs:"5",sm:"4",md:"3",className:"m-1 p-0 rounded border border-success"},d.a.createElement(b.V,null,d.a.createElement(b.S,{style:{height:"35px"},name:"wordcount",placeholder:"wordcount",onChange:this.onChange,type:"number",className:"form-control form-control-sm"}),d.a.createElement(b.u,{xs:"5",sm:"4",md:"3",style:{marginLeft:"-2px"},className:"m-0 p-0"},d.a.createElement(b.xb,{onChange:this.onChange,name:"countselect",style:{height:"35px"},custom:!0,id:"select",size:"sm"},d.a.createElement("option",{value:"0",selected:!0},"eq"),d.a.createElement("option",{value:"1"},"(gt)"),d.a.createElement("option",{value:"2"},"(lt)"),d.a.createElement("option",{value:"3"},"(gte)"),d.a.createElement("option",{value:"4"},"(lte)"))))),d.a.createElement(b.u,{xs:"5",sm:"4",md:"3",className:"m-1 p-0 rounded border border-success"},d.a.createElement(b.V,null,d.a.createElement(b.S,{style:{height:"35px"},placeholder:"length",name:"length",onChange:this.onChange,type:"number",className:"form-control form-control-sm"}),d.a.createElement(b.u,{xs:"5",sm:"4",md:"3",style:{marginLeft:"-2px"},className:"m-0 p-0"},d.a.createElement(b.xb,{style:{height:"35px"},custom:!0,onChange:this.onChange,name:"lengthselect",id:"select",size:"sm"},d.a.createElement("option",{value:"0",selected:!0},"eq"),d.a.createElement("option",{value:"1"},"(gt)"),d.a.createElement("option",{value:"2"},"(lt)"),d.a.createElement("option",{value:"3"},"(gte)"),d.a.createElement("option",{value:"4"},"(lte)"))))),d.a.createElement(b.u,{xs:"5",sm:"4",md:"3",className:"m-1 p-0 rounded border border-success"},d.a.createElement(b.V,null,d.a.createElement(b.S,{style:{height:"35px"},placeholder:"Sentimental score",name:"score",onChange:this.onChange,type:"number",className:"form-control form-control-sm"}),d.a.createElement(b.u,{xs:"5",sm:"4",md:"3",style:{marginLeft:"-2px"},className:"m-0 p-0"},d.a.createElement(b.xb,{style:{height:"35px"},custom:!0,onChange:this.onChange,name:"scoreselect",id:"select",size:"sm"},d.a.createElement("option",{value:"0",selected:!0},"eq"),d.a.createElement("option",{value:"1"},"(gt)"),d.a.createElement("option",{value:"2"},"(lt)"),d.a.createElement("option",{value:"3"},"(gte)"),d.a.createElement("option",{value:"4"},"(lte)")))))),d.a.createElement(b.wb,null,d.a.createElement(b.u,{className:"m-0 p-0"},d.a.createElement(b.j,{className:"m-0 p-0"},d.a.createElement(b.k,{className:"heavy-rain-gradient m-0 p-0"},this.state.isloading?v:d.a.createElement(E.c,{className:"text-dark black-text p-2 strong",searching:!1,responsive:!0,bordered:!0,paging:!1,striped:!0,theadColor:"dark",small:!0,noBottomColumns:!0,hover:!0,data:this.state}),d.a.createElement(b.sb,{align:"center",activePage:this.state.pageNo,pages:this.state.pagesAmount,onActivePageChange:this.onPageChange}))))))}}]),t}(p.Component)}}]);
//# sourceMappingURL=10.f595add1.chunk.js.map