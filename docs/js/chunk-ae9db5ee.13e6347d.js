(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ae9db5ee"],{"1d31":function(t,e,n){"use strict";var r=n("6378"),a=n.n(r);a.a},4109:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"force-base-ii"},[n("h2",[t._v("Force-based label placement II")]),n("svg",{staticClass:"container-border",attrs:{id:"viz"}})])},a=[],i=(n("ac6a"),n("5698")),s=n("5313"),o={name:"ForceBasedLabelPlacement",components:{},mounted:function(){var t=1850,e=800,n=i["u"](i["v"]),r=s,a={nodes:[],links:[]};r.nodes.forEach((function(t,e){a.nodes.push({node:t}),a.nodes.push({node:t}),a.links.push({source:2*e,target:2*e+1})}));var o=i["h"](a.nodes).force("charge",i["g"]().strength(-50)).force("link",i["f"](a.links).distance(0).strength(2));i["h"](r.nodes).force("charge",i["g"]().strength(-3e3)).force("center",i["e"](t/2,e/2)).force("x",i["i"](t/2).strength(1)).force("y",i["j"](e/2).strength(1)).force("link",i["f"](r.links).id((function(t){return t.id})).distance(50).strength(1)).on("tick",g);var l=[];r.links.forEach((function(t){l[t.source.index+"-"+t.target.index]=!0,l[t.target.index+"-"+t.source.index]=!0}));var c=i["w"]("#viz").attr("width",t).attr("height",e),u=c.append("g");c.call(i["A"]().scaleExtent([.1,4]).on("zoom",(function(){u.attr("transform",i["d"].transform)})));var d=u.append("g").attr("class","links").selectAll("line").data(r.links).enter().append("line").attr("stroke","#aaa").attr("stroke-width","1px"),f=u.append("g").attr("class","nodes").selectAll("g").data(r.nodes).enter().append("circle").attr("r",5).attr("fill",(function(t){return n(t.group)})),p=u.append("g").attr("class","labelNodes").selectAll("text").data(a.nodes).enter().append("text").text((function(t,e){return e%2===0?"":t.node.id})).style("fill","#555").style("font-family","Arial").style("font-size",12).style("pointer-events","none");function g(){f.call(L),d.call(y),o.alphaTarget(.3).restart(),p.each((function(t,e){if(e%2===0)t.x=t.node.x,t.y=t.node.y;else{var n=this.getBBox(),r=t.x-t.node.x,a=t.y-t.node.y,i=Math.sqrt(r*r+a*a),s=n.width*(r-i)/(2*i);s=Math.max(-n.width,Math.min(0,s));var o=16;this.setAttribute("transform","translate("+s+","+o+")")}})),p.call(L)}function h(t){return isFinite(t)?t:0}function y(t){t.attr("x1",(function(t){return h(t.source.x)})).attr("y1",(function(t){return h(t.source.y)})).attr("x2",(function(t){return h(t.target.x)})).attr("y2",(function(t){return h(t.target.y)}))}function L(t){t.attr("transform",(function(t){return"translate("+h(t.x)+","+h(t.y)+")"}))}}},l=o,c=(n("1d31"),n("d720"),n("2877")),u=Object(c["a"])(l,r,a,!1,null,"0d9322ad",null);e["default"]=u.exports},5313:function(t){t.exports=JSON.parse('{"nodes":[{"id":"Myriel","group":1},{"id":"Napoleon","group":2},{"id":"Feuilly","group":3}],"links":[{"source":"Myriel","target":"Napoleon","value":1},{"source":"Napoleon","target":"Feuilly","value":2},{"source":"Feuilly","target":"Myriel","value":3}]}')},6378:function(t,e,n){},a30b:function(t,e,n){},ac6a:function(t,e,n){for(var r=n("cadf"),a=n("0d58"),i=n("2aba"),s=n("7726"),o=n("32e9"),l=n("84f2"),c=n("2b4c"),u=c("iterator"),d=c("toStringTag"),f=l.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=a(p),h=0;h<g.length;h++){var y,L=g[h],x=p[L],v=s[L],m=v&&v.prototype;if(m&&(m[u]||o(m,u,f),m[d]||o(m,d,L),l[L]=f,x))for(y in r)m[y]||i(m,y,r[y],!0)}},d720:function(t,e,n){"use strict";var r=n("a30b"),a=n.n(r);a.a}}]);
//# sourceMappingURL=chunk-ae9db5ee.13e6347d.js.map