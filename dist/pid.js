!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";n.r(t),n.d(t,"COPYRIGHT_YEAR",function(){return r}),n.d(t,"FULLTITLE",function(){return i}),n.d(t,"LONG_NAME",function(){return o}),n.d(t,"NAME",function(){return a}),n.d(t,"ORGANIZATION",function(){return u}),n.d(t,"VERSION",function(){return d}),n.d(t,"events",function(){return c}),n.d(t,"log",function(){return s}),n.d(t,"on",function(){return l}),n.d(t,"trigger",function(){return p});const r=(new Date).getFullYear(),i="ES-DOC Dataset Errata",o="Dataset Errata",a="Errata",u="ES-DOC",d="0.5.3.0",c=_.extend({},Backbone.Events),s=e=>{console.log(new Date+" :: "+u+"-"+a.toUpperCase()+" :: "+e)},l=(e,t,n)=>{c.on(e,t,n)},p=(e,t)=>(s("event :: "+e),c.trigger(e,t))},function(e,t,n){"use strict";n.r(t),n.d(t,"openURL",function(){return o}),n.d(t,"openHomepage",function(){return a}),n.d(t,"openEmail",function(){return u}),n.d(t,"openSupportEmail",function(){return d}),n.d(t,"render",function(){return c}),n.d(t,"renderHTML",function(){return s}),n.d(t,"renderTemplate",function(){return p}),n.d(t,"getURLParam",function(){return f}),n.d(t,"getPageCount",function(){return E}),n.d(t,"getPages",function(){return h}),n.d(t,"displayFeedback",function(){return g}),n.d(t,"hideFeedback",function(){return S}),n.d(t,"displayInfoDialog",function(){return w}),n.d(t,"hideInfoDialog",function(){return A}),n.d(t,"generateUUID",function(){return x});var r=n(0),i=n(2);const o=(e,t)=>{!0===t?window.open(e):window.location=e},a=()=>{o(i.URLS.HOME_PAGE,!0)},u=(e,t,n)=>{var r="mailto:{0}?subject={1}&body={2}";t=t||i.EMAIL.SUBJECT,n=n||i.EMAIL.MESSAGE,r=(r=(r=r.replace("{0}",e)).replace("{1}",t)).replace("{2}",n),window.location.href=r},d=()=>{var e;e=(e=(e="ES-DOC :: SUPPORT :: {0} (v{1})").replace("{0}",r.NAME.toUpperCase())).replace("{1}",r.VERSION),u(i.EMAIL.SUPPORT,e)},c=(e,t,n)=>{var r,i,o=[];return r=_.isArray(e)?e:[e],_.each(r,function(e){i=new e(t).render(),o.push(i),_.isUndefined(n)||(_.has(n,"$el")?n.$el.append(i.$el):n.append(i.$el))},void 0),1===r.length?o[0]:o},s=(e,t,n)=>{var r=t?e(t):e();_.isUndefined(n)||(_.has(n,"$el")?n.$el.append(r):n.append(r))},l={},p=(e,t,n)=>{var r;if(_.has(l,e)||(l[e]=_.template($("#"+e).html())),r=(0,l[e])(t),n&&n.$el)n.$el.append(r);else{if(!n)return r;n.replaceWith(r)}},f=(e,t)=>{var n=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.href);return n?(n[1]||t).toUpperCase():t},E=function(e,t){var n=0;return t&&t/e>(n=parseInt(t/e,10))&&(n+=1),n},h=(e,t)=>_.map(_.range(E(e,t.length)),function(t){return{id:t+1,data:this.slice(t*e,(t+1)*e-1)}},t),g=e=>{$("#feedbackText").text(e+" ... please wait"),$(".feedback-title").text(r.FULLTITLE),$(".feedback-version").text("v"+r.VERSION),$("#feedbackContainer").modal({backdrop:"static",keyboard:!1,show:!0})},S=()=>{$("#feedbackContainer").modal("hide")},w=(e,t)=>{$("#infoDialogText").text(e),$(".infoDialog-title").text(r.FULLTITLE),$(".infoDialog-version").text("v"+r.VERSION),t&&$("#infoDialogContainer").on("hide.bs.modal",t),$("#infoDialogContainer").modal({backdrop:"static",keyboard:!1,show:!0})},A=()=>{$("#infoDialog").modal("hide")},x=()=>{let e=(new Date).getTime();return"xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)})}},function(e,t,n){"use strict";n.r(t);var r={};n.d(r,"CONTACT",function(){return a}),n.d(r,"SUPPORT",function(){return u}),n.d(r,"SUBJECT",function(){return d}),n.d(r,"MESSAGE",function(){return c});var i={};n.d(i,"LOGGING_PREFIX",function(){return s}),n.d(i,"NULL_FIELD",function(){return l}),n.d(i,"UI_UPDATE_DELAY",function(){return p});var o={};n.d(o,"API_BASE_URL",function(){return f}),n.d(o,"HOME_PAGE",function(){return E}),n.d(o,"OAUTH_AUTHORIZE",function(){return h}),n.d(o,"PID_PAGE",function(){return g}),n.d(o,"PID_RESOLVE",function(){return _}),n.d(o,"PID_TASK_QUEUE_SEARCH",function(){return S}),n.d(o,"PID_TASK_QUEUE_SEARCH_SETUP",function(){return w}),n.d(o,"ISSUE_CREATE",function(){return A}),n.d(o,"ISSUE_UPDATE",function(){return x}),n.d(o,"RETRIEVE",function(){return T}),n.d(o,"SEARCH",function(){return D}),n.d(o,"SEARCH_SETUP",function(){return I}),n.d(o,"SEARCH_PAGE",function(){return m}),n.d(o,"VIEW_PAGE",function(){return v}),n.d(o,"EDIT_PAGE",function(){return U});const a="errata-contact@list.woc.noaa.gov",u="errata-support@list.woc.noaa.gov",d="ES-DOC ERRATA :: subject goes here",c="Dear ES-DOC ERRATA support team,",s="ES-DOC-ERRATA :: ",l="--",p=1e3,f=window.origin,E="https://es-doc.org",h=window.location.origin+"/oauth/authorize",g="pid.html",_="/1/resolve/pid",S="/1/pid-queue/search",w="/1/pid-queue/search-setup",A="/1/issue/create",x="/1/issue/update",T="/1/issue/retrieve",D="/1/issue/search",I="/1/issue/search-setup",m="/static/index.html",v="/static/view.html",U="/static/edit.html";n.d(t,"EMAIL",function(){return P}),n.d(t,"MISC",function(){return R}),n.d(t,"URLS",function(){return L});const P=r,R=i,L=o},,,function(e,t,n){"use strict";n.r(t);var r={};n.d(r,"errata",function(){return u}),n.d(r,"pids",function(){return d}),n.d(r,"setErrata",function(){return c}),n.d(r,"setPIDs",function(){return s});var i=n(0),o=n(1),a=n(2);var u=[],d=[];const c=e=>{u=_.map(e,e=>new class{constructor(e){this.handle=e[0],this.issues=_.map(e[1],e=>new class{constructor(e){this.artefact=e[1]+"#"+e[2],this.sortOrdinal=e[3],this.uid=e[0],this.is_first=e[4],this.is_latest=e[5],this.unchanged_file=e[6]}}(e))}}(e))},s=e=>{d=e};var l=Backbone.View.extend({events:{"click img.esdoc-logo":()=>{o.openHomepage()},"click button.esdoc-support":()=>{o.openSupportEmail()},"change .btn-file :file":e=>{var t,n;t=$("#file-selector")[0].files[0],(n=new FileReader).onload=function(e){e.target.result.trim()&&i.trigger("ui:pidFileSelected",{file:t,pids:e.target.result.trim().split("\n")})},n.readAsText(t)},"change #pid-data":e=>{var t;t=$(e.target).val().trim(),s(t?[t]:[])},"click #searchButton":e=>{d.length&&i.trigger("ui:search")},"click #issueButton":e=>{var t,n;(t=$(e.target).attr("title"))&&(n=window.location.href.replace("pid","viewer"),n+="?uid=",n+=t,o.openURL(n,!0))}},initialize:function(){i.events.on("ui:pidFileSelected",this._setPIDList,this),i.events.on("search:complete",this._updateGrid,this),this.isFirstGridRender=!0},render:function(){return _.each(["template-header","template-filter"],function(e){o.renderTemplate(e,i,this)},this),this},_replaceNode:function(e,t){this.$(e).replaceWith(o.renderTemplate(t,r))},_setPIDList:function(e){s(e.pids),$("#pid-data").val("file://"+e.file.name)},_updateGrid:function(){this.isFirstGridRender||this.$("table").remove(),o.renderTemplate("template-grid",i,this),this.isFirstGridRender=!1}});window.APP=i,window.STATE=r,window.UTILS=o,window.CONSTANTS=a,i.on("ui:search",()=>{var e,t;i.trigger("search:begin"),e=a.URLS.API_BASE_URL+a.URLS.PID_RESOLVE,t={pids:d.join(",")},i.trigger("search:dataDownloading"),$.get(e,t).done(e=>{setTimeout(()=>{i.trigger("search:dataDownload",e)},a.MISC.UI_UPDATE_DELAY)}).fail(e=>{setTimeout(()=>{i.trigger("search:dataDownload:error",e)},a.MISC.UI_UPDATE_DELAY)})}),i.on("search:dataDownload",e=>{c(e.errata),i.trigger("search:complete")}),i.on("setup:begin",()=>{o.displayFeedback("Initializing errata PID Lookup")}),i.on("setup:complete",o.hideFeedback),i.on("setup:setupDataDownload:error",()=>{alert("setup:setupDataDownload:error")}),i.on("search:begin",()=>{o.displayFeedback("Searching PID handle service")}),i.on("search:complete",o.hideFeedback),i.on("search:dataDownload:error",()=>{alert("An error occurred whilst calling the PID handle service")}),$(document).ready(()=>{i.trigger("setup:begin"),i.trigger("setup:complete")}),i.events.on("setup:complete",()=>{var e;(e=new l).render(),$("body").append(e.el),i.log("ui initialized"),i.trigger("ui:initialized")}),window.APP=i,window.STATE=r,window.UTILS=o,window.CONSTANTS=a}]);