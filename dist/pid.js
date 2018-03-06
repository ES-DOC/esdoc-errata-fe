!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t,r){"use strict";r.r(t),r.d(t,"COPYRIGHT_YEAR",function(){return n}),r.d(t,"FULLTITLE",function(){return i}),r.d(t,"LONG_NAME",function(){return o}),r.d(t,"NAME",function(){return a}),r.d(t,"ORGANIZATION",function(){return d}),r.d(t,"VERSION",function(){return c}),r.d(t,"events",function(){return u}),r.d(t,"log",function(){return s}),r.d(t,"on",function(){return l}),r.d(t,"trigger",function(){return p});const n=(new Date).getFullYear(),i="ES-DOC Dataset Errata",o="Dataset Errata",a="Errata",d="ES-DOC",c="0.5.3.0",u=_.extend({},Backbone.Events),s=e=>{console.log(new Date+" :: "+d+"-"+a.toUpperCase()+" :: "+e)},l=(e,t,r)=>{u.on(e,t,r)},p=(e,t)=>(s("event :: "+e),u.trigger(e,t))},function(e,t,r){"use strict";r.r(t);var n={};r.d(n,"CONTACT",function(){return a}),r.d(n,"SUPPORT",function(){return d}),r.d(n,"SUBJECT",function(){return c}),r.d(n,"MESSAGE",function(){return u});var i={};r.d(i,"EXECUTION_MODE",function(){return s}),r.d(i,"LOGGING_PREFIX",function(){return l}),r.d(i,"NULL_FIELD",function(){return p}),r.d(i,"UI_UPDATE_DELAY",function(){return f});var o={};r.d(o,"API_BASE_URL",function(){return h}),r.d(o,"HOME_PAGE",function(){return E}),r.d(o,"PID_PAGE",function(){return g}),r.d(o,"PID_RESOLVE",function(){return w}),r.d(o,"PID_TASK_QUEUE_SEARCH",function(){return _}),r.d(o,"PID_TASK_QUEUE_SEARCH_SETUP",function(){return S}),r.d(o,"RETRIEVE",function(){return v}),r.d(o,"SEARCH",function(){return A}),r.d(o,"SEARCH_PAGE",function(){return R}),r.d(o,"SEARCH_SETUP",function(){return T}),r.d(o,"VIEWER_BASE_URL",function(){return m});const a="errata-contact@list.woc.noaa.gov",d="errata-support@list.woc.noaa.gov",c="ES-DOC ERRATA :: subject goes here",u="Dear ES-DOC ERRATA support team,",s=window.location.host&&window.location.host.indexOf("es-doc.org")>=0?window.location.host.indexOf("test")>=0?"test":"prod":"dev",l="ES-DOC-ERRATA :: ",p="--",f=1e3,h={dev:"http://localhost:5001",prod:"https://errata-api.es-doc.org",test:"https://test-errata-api.es-doc.org"}[s],E="https://es-doc.org",g="pid.html",w="/1/resolve/pid",_="/1/pid-queue/search",S="/1/pid-queue/search-setup",v="/1/issue/retrieve",A="/1/issue/search",R="index.html",T="/1/issue/search-setup",m={dev:window.location.href.replace("index","viewer").replace("pidq","viewer"),prod:"https://errata.es-doc.org/viewer.html",test:"https://test-errata.es-doc.org/viewer.html"}[s];r.d(t,"EMAIL",function(){return I}),r.d(t,"MISC",function(){return P}),r.d(t,"URLS",function(){return U});const I=n,P=i,U=o},function(e,t,r){"use strict";r.r(t),r.d(t,"openURL",function(){return o}),r.d(t,"openHomepage",function(){return a}),r.d(t,"openEmail",function(){return d}),r.d(t,"openSupportEmail",function(){return c}),r.d(t,"render",function(){return u}),r.d(t,"renderHTML",function(){return s}),r.d(t,"renderTemplate",function(){return p}),r.d(t,"getURLParam",function(){return f}),r.d(t,"getPageCount",function(){return h}),r.d(t,"getPages",function(){return E}),r.d(t,"displayFeedback",function(){return g}),r.d(t,"hideFeedback",function(){return w});var n=r(0),i=r(1);const o=(e,t)=>{!0===t?window.open(e):window.location=e},a=()=>{o(i.URLS.HOME_PAGE,!0)},d=(e,t,r)=>{var n="mailto:{0}?subject={1}&body={2}";t=t||i.EMAIL.SUBJECT,r=r||i.EMAIL.MESSAGE,n=(n=(n=n.replace("{0}",e)).replace("{1}",t)).replace("{2}",r),window.location.href=n},c=()=>{var e;e=(e=(e="ES-DOC :: SUPPORT :: {0} (v{1})").replace("{0}",n.NAME.toUpperCase())).replace("{1}",n.VERSION),d(i.EMAIL.SUPPORT,e)},u=(e,t,r)=>{var n,i,o=[];return n=_.isArray(e)?e:[e],_.each(n,function(e){i=new e(t).render(),o.push(i),_.isUndefined(r)||(_.has(r,"$el")?r.$el.append(i.$el):r.append(i.$el))},void 0),1===n.length?o[0]:o},s=(e,t,r)=>{var n=t?e(t):e();_.isUndefined(r)||(_.has(r,"$el")?r.$el.append(n):r.append(n))},l={},p=(e,t,r)=>{var n;if(_.has(l,e)||(l[e]=_.template($("#"+e).html())),n=(0,l[e])(t),r&&r.$el)r.$el.append(n);else{if(!r)return n;r.replaceWith(n)}},f=(e,t)=>{var r=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.href);return r?(r[1]||t).toUpperCase():t},h=function(e,t){var r=0;return t&&t/e>(r=parseInt(t/e,10))&&(r+=1),r},E=(e,t)=>_.map(_.range(h(e,t.length)),function(t){return{id:t+1,data:this.slice(t*e,(t+1)*e-1)}},t),g=e=>{$("#feedbackText").text(e+" ... please wait"),$(".feedback-title").text(n.FULLTITLE),$(".feedback-version").text("v"+n.VERSION),$("#feedbackContainer").modal({backdrop:"static",keyboard:!1,show:!0})},w=()=>{$("#feedbackContainer").modal("hide")}},,,,function(e,t,r){"use strict";r.r(t);var n={};r.d(n,"errata",function(){return d}),r.d(n,"pids",function(){return c}),r.d(n,"setErrata",function(){return u}),r.d(n,"setPIDs",function(){return s});var i=r(0),o=r(2),a=r(1);var d=[],c=[];const u=e=>{d=_.map(e,e=>new class{constructor(e){this.handle=e[0],this.issues=_.map(e[1],e=>new class{constructor(e){this.artefact=e[1]+"#"+e[2],this.sortOrdinal=e[3],this.uid=e[0],this.is_first=e[4],this.is_latest=e[5],this.unchanged_file=e[6]}}(e))}}(e))},s=e=>{c=e};var l=Backbone.View.extend({events:{"click img.esdoc-logo":()=>{o.openHomepage()},"click button.esdoc-support":()=>{o.openSupportEmail()},"click button.esdoc-errata-search":()=>{o.openURL(a.URLS.SEARCH_PAGE,!1)},"change .btn-file :file":e=>{var t,r;t=$("#file-selector")[0].files[0],(r=new FileReader).onload=function(e){e.target.result.trim()&&i.trigger("ui:pidFileSelected",{file:t,pids:e.target.result.trim().split("\n")})},r.readAsText(t)},"change #pid-data":e=>{var t;t=$(e.target).val().trim(),s(t?[t]:[])},"click #searchButton":e=>{c.length&&i.trigger("ui:search")},"click #issueButton":e=>{var t,r;(t=$(e.target).attr("title"))&&(r=window.location.href.replace("pid","viewer"),r+="?uid=",r+=t,o.openURL(r,!0))}},initialize:function(){i.events.on("ui:pidFileSelected",this._setPIDList,this),i.events.on("search:complete",this._updateGrid,this),this.isFirstGridRender=!0},render:function(){return _.each(["template-header","template-filter"],function(e){o.renderTemplate(e,i,this)},this),this},_replaceNode:function(e,t){this.$(e).replaceWith(o.renderTemplate(t,n))},_setPIDList:function(e){s(e.pids),$("#pid-data").val("file://"+e.file.name)},_updateGrid:function(){this.isFirstGridRender||this.$("table").remove(),o.renderTemplate("template-grid",i,this),this.isFirstGridRender=!1}});window.APP=i,window.STATE=n,window.UTILS=o,window.CONSTANTS=a,i.on("ui:search",()=>{var e,t;i.trigger("search:begin"),e=a.URLS.API_BASE_URL+a.URLS.PID_RESOLVE,t={pids:c.join(",")},i.trigger("search:dataDownloading"),$.get(e,t).done(e=>{setTimeout(()=>{i.trigger("search:dataDownload",e)},a.MISC.UI_UPDATE_DELAY)}).fail(e=>{setTimeout(()=>{i.trigger("search:dataDownload:error",e)},a.MISC.UI_UPDATE_DELAY)})}),i.on("search:dataDownload",e=>{u(e.errata),i.trigger("search:complete")}),i.on("setup:begin",()=>{o.displayFeedback("Initializing errata PID Lookup")}),i.on("setup:complete",o.hideFeedback),i.on("setup:setupDataDownload:error",()=>{alert("setup:setupDataDownload:error")}),i.on("search:begin",()=>{o.displayFeedback("Searching PID handle service")}),i.on("search:complete",o.hideFeedback),i.on("search:dataDownload:error",()=>{alert("An error occurred whilst calling the PID handle service")}),$(document).ready(()=>{i.trigger("setup:begin"),i.trigger("setup:complete")}),i.events.on("setup:complete",()=>{var e;(e=new l).render(),$("body").append(e.el),i.log("ui initialized"),i.trigger("ui:initialized")}),window.APP=i,window.STATE=n,window.UTILS=o,window.CONSTANTS=a}]);