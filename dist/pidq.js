!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t,r){"use strict";r.r(t),r.d(t,"COPYRIGHT_YEAR",function(){return n}),r.d(t,"FULLTITLE",function(){return a}),r.d(t,"LONG_NAME",function(){return i}),r.d(t,"NAME",function(){return o}),r.d(t,"ORGANIZATION",function(){return s}),r.d(t,"VERSION",function(){return u}),r.d(t,"events",function(){return c}),r.d(t,"log",function(){return d}),r.d(t,"on",function(){return l}),r.d(t,"trigger",function(){return p});const n=(new Date).getFullYear(),a="ES-DOC Dataset Errata",i="Dataset Errata",o="Errata",s="ES-DOC",u="0.5.3.0",c=_.extend({},Backbone.Events),d=e=>{console.log(new Date+" :: "+s+"-"+o.toUpperCase()+" :: "+e)},l=(e,t,r)=>{c.on(e,t,r)},p=(e,t)=>(d("event :: "+e),c.trigger(e,t))},function(e,t,r){"use strict";r.r(t),r.d(t,"openURL",function(){return i}),r.d(t,"openHomepage",function(){return o}),r.d(t,"openEmail",function(){return s}),r.d(t,"openSupportEmail",function(){return u}),r.d(t,"render",function(){return c}),r.d(t,"renderHTML",function(){return d}),r.d(t,"renderTemplate",function(){return p}),r.d(t,"getURLParam",function(){return g}),r.d(t,"getPageCount",function(){return f}),r.d(t,"getPages",function(){return h}),r.d(t,"displayFeedback",function(){return E}),r.d(t,"hideFeedback",function(){return m}),r.d(t,"displayInfoDialog",function(){return S}),r.d(t,"hideInfoDialog",function(){return v}),r.d(t,"generateUUID",function(){return U});var n=r(0),a=r(2);const i=(e,t)=>{!0===t?window.open(e):window.location=e},o=()=>{i(a.URLS.HOME_PAGE,!0)},s=(e,t,r)=>{var n="mailto:{0}?subject={1}&body={2}";t=t||a.EMAIL.SUBJECT,r=r||a.EMAIL.MESSAGE,n=(n=(n=n.replace("{0}",e)).replace("{1}",t)).replace("{2}",r),window.location.href=n},u=()=>{var e;e=(e=(e="ES-DOC :: SUPPORT :: {0} (v{1})").replace("{0}",n.NAME.toUpperCase())).replace("{1}",n.VERSION),s(a.EMAIL.SUPPORT,e)},c=(e,t,r)=>{var n,a,i=[];return n=_.isArray(e)?e:[e],_.each(n,function(e){a=new e(t).render(),i.push(a),_.isUndefined(r)||(_.has(r,"$el")?r.$el.append(a.$el):r.append(a.$el))},void 0),1===n.length?i[0]:i},d=(e,t,r)=>{var n=t?e(t):e();_.isUndefined(r)||(_.has(r,"$el")?r.$el.append(n):r.append(n))},l={},p=(e,t,r)=>{var n;if(_.has(l,e)||(l[e]=_.template($("#"+e).html())),n=(0,l[e])(t),r&&r.$el)r.$el.append(n);else{if(!r)return n;r.replaceWith(n)}},g=(e,t)=>{var r=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.href);return r?(r[1]||t).toUpperCase():t},f=function(e,t){var r=0;return t&&t/e>(r=parseInt(t/e,10))&&(r+=1),r},h=(e,t)=>_.map(_.range(f(e,t.length)),function(t){return{id:t+1,data:this.slice(t*e,(t+1)*e-1)}},t),E=e=>{$("#feedbackText").text(e+" ... please wait"),$(".feedback-title").text(n.FULLTITLE),$(".feedback-version").text("v"+n.VERSION),$("#feedbackContainer").modal({backdrop:"static",keyboard:!1,show:!0})},m=()=>{$("#feedbackContainer").modal("hide")},S=(e,t)=>{$("#infoDialogText").text(e),$(".infoDialog-title").text(n.FULLTITLE),$(".infoDialog-version").text("v"+n.VERSION),t&&$("#infoDialogContainer").on("hide.bs.modal",t),$("#infoDialogContainer").modal({backdrop:"static",keyboard:!1,show:!0})},v=()=>{$("#infoDialog").modal("hide")},U=()=>{let e=(new Date).getTime();return"xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?r:3&r|8).toString(16)})}},function(e,t,r){"use strict";r.r(t);var n={};r.d(n,"CONTACT",function(){return o}),r.d(n,"SUPPORT",function(){return s}),r.d(n,"SUBJECT",function(){return u}),r.d(n,"MESSAGE",function(){return c});var a={};r.d(a,"LOGGING_PREFIX",function(){return d}),r.d(a,"NULL_FIELD",function(){return l}),r.d(a,"UI_UPDATE_DELAY",function(){return p});var i={};r.d(i,"API_BASE_URL",function(){return g}),r.d(i,"HOME_PAGE",function(){return f}),r.d(i,"OAUTH_AUTHORIZE",function(){return h}),r.d(i,"PID_PAGE",function(){return _}),r.d(i,"PID_RESOLVE",function(){return E}),r.d(i,"PID_TASK_QUEUE_SEARCH",function(){return m}),r.d(i,"PID_TASK_QUEUE_SEARCH_SETUP",function(){return S}),r.d(i,"ISSUE_CREATE",function(){return v}),r.d(i,"ISSUE_UPDATE",function(){return U}),r.d(i,"RETRIEVE",function(){return A}),r.d(i,"SEARCH",function(){return D}),r.d(i,"SEARCH_SETUP",function(){return x}),r.d(i,"SEARCH_PAGE",function(){return P}),r.d(i,"VIEW_PAGE",function(){return C}),r.d(i,"EDIT_PAGE",function(){return I});const o="errata-contact@list.woc.noaa.gov",s="errata-support@list.woc.noaa.gov",u="ES-DOC ERRATA :: subject goes here",c="Dear ES-DOC ERRATA support team,",d="ES-DOC-ERRATA :: ",l="--",p=1e3,g=window.origin,f="https://es-doc.org",h=window.location.origin+"/oauth/authorize",_="pid.html",E="/1/resolve/pid",m="/1/pid-queue/search",S="/1/pid-queue/search-setup",v="/1/issue/create",U="/1/issue/update",A="/1/issue/retrieve",D="/1/issue/search",x="/1/issue/search-setup",P="/static/index.html",C="/static/view.html",I="/static/edit.html";r.d(t,"EMAIL",function(){return w}),r.d(t,"MISC",function(){return y}),r.d(t,"URLS",function(){return T});const w=n,y=a,T=i},,function(e,t,r){"use strict";r.r(t);var n={};r.d(n,"filters",function(){return s}),r.d(n,"paging",function(){return u}),r.d(n,"sorting",function(){return c}),r.d(n,"searchData",function(){return d}),r.d(n,"setSearchData",function(){return l}),r.d(n,"initFilters",function(){return p}),r.d(n,"updateFilter",function(){return g}),r.d(n,"paginateIssues",function(){return f}),r.d(n,"sortResults",function(){return h}),r.d(n,"updateSortField",function(){return E});var a=r(0),i=r(1),o=r(2);var s=[];const u={current:null,count:0,pages:[],pageSize:25,pageSizeOptions:[25,50,100]},c={field:"timestamp",direction:"desc"};var d=null;const l=e=>{d=_.defaults({results:_.map(e.results,e=>new class{constructor(e){_.each(_.keys(e),t=>{this[t]=e[t]}),this.ext=new class{constructor(e){this.action=s[1].data.set["esdoc:errata:pid-task-action:"+e.action],this.status=s[2].data.set["esdoc:errata:pid-task-status:"+e.status]}}(this)}}(e,s))},e),h(),f()},p=e=>{s=_.map(e,function(e){return new class{constructor(e){var t;this.data={all:_.sortBy(e.terms,e=>e.sortOrdinal||e.key),current:null,set:{}},this.key=e.key,this.label=e.label,this.uiPosition="esdoc:errata:project"===e.key?0:"esdoc:errata:pid-task-action"===e.key?1e3:"esdoc:errata:pid-task-status"===e.key?1001:100,"esdoc:errata:project"!=e.key&&this.data.all.unshift({key:e.key+":*",label:"*",namespace:e.key+":*"}),(t="esdoc:errata:project"===e.key?"esdoc:errata:project:cmip6":null)&&(this.data.current=_.find(this.data.all,e=>e.key===t)),this.data.current=this.data.current||this.data.all[0],this.data.set=_.indexBy(this.data.all,"key")}}(e)})},g=(e,t)=>{var r;(r=_.find(s,t=>t.key===e)).data.current=_.find(r.data.all,e=>e.key===t),APP.trigger("state:filterUpdated",r)},f=()=>{u.pages=i.getPages(u.pageSize,d.results),u.count=u.pages.length,u.current=u.count>0?u.pages[0]:void 0},h=()=>{var e,t,r;"datasetID"===(t=c.field)?r=(e=>e.datasetID):"status"===t?r=(e=>e.ext.status.label.toLowerCase()):"action"===t?r=(e=>e.ext.action.label.toLowerCase()):"timestamp"===t&&(r=(e=>e[t]?e[t].valueOf():"--")),e=_.sortBy(d.results,r),"desc"===c.direction&&(e=e.reverse()),d.results=e},E=e=>{c.field===e?(c.direction="asc"===c.direction?"desc":"asc",APP.trigger("state:sortDirectionToggled")):(APP.trigger("state:sortFieldChanging"),c.field=e,c.direction="timestamp"===e?"desc":"asc",APP.trigger("state:sortFieldChanged")),h(),f()};var m=Backbone.View.extend({events:{"click img.esdoc-logo":()=>{i.openHomepage()},"click button.esdoc-support":()=>{i.openSupportEmail()},"click .task":e=>{var t;t=o.URLS.VIEW_PAGE,t+="?uid=",t+=$(e.target).parent().attr("id")||$(e.target).parent().parent().attr("id"),i.openURL(t,!0)},"change .filter select":e=>{a.trigger("state:filterUpdate",$(e.target).val())},"change .pagination-info":e=>{var t;t=parseInt($(e.target).val(),10),$(e.target).val(""),!1===_.isNaN(t)&&t>0&&t<=u.pages.length&&u.current!==u.pages[t-1]&&(u.current=u.pages[t-1],a.trigger("state:pageUpdate"))},"click .pagination-first":()=>{u.pages.length&&u.current!==_.first(u.pages)&&(u.current=_.first(u.pages),a.trigger("state:pageUpdate"))},"click .pagination-previous":()=>{u.pages.length&&u.current!==_.first(u.pages)&&(u.current=u.pages[u.current.id-2],a.trigger("state:pageUpdate"))},"click .pagination-next":()=>{u.pages.length&&u.current!==_.last(u.pages)&&(u.current=u.pages[u.current.id],a.trigger("state:pageUpdate"))},"click .pagination-last":()=>{u.pages.length&&u.current!==_.last(u.pages)&&(u.current=_.last(u.pages),a.trigger("state:pageUpdate"))},"change .pagination-page-size":e=>{u.pageSize=$(e.target).val(),u.pages=i.getPages(u.pageSize,d.results),u.count=u.pages.length,u.current=u.count>0?u.pages[0]:void 0,a.trigger("state:pageUpdate")},"click .sort-target":e=>{var t;(t=$(e.target).attr("class"))&&(t=t.split(" "),t=(t=_.find(t,e=>e.startsWith("sort-target-"))).slice(12)),t&&(E(t),a.trigger("state:pageUpdate"))}},initialize:function(){a.events.on("ui:initialized",this._setSortColumn,this),a.events.on("search:complete",this._updateStatisticsInfo,this),a.events.on("state:pageUpdate",this._updateGrid,this),a.events.on("state:pageUpdate",this._updateGridPager,this),a.events.on("state:sortFieldChanging",this._clearSortColumn,this),a.events.on("state:sortFieldChanged",this._setSortColumn,this),a.events.on("state:sortDirectionToggled",this._toggleSortColumn,this),a.events.on("project:changed",()=>{this._replaceNode("div.filter","template-filter")},this)},render:function(){return _.each(["template-header","template-filter","template-grid"],e=>{i.renderTemplate(e,a,this)},this),this},_setSortColumn:function(){"asc"===c.direction?this.$(".glyphicon.sort-target-"+c.field).addClass("glyphicon-menu-up"):this.$(".glyphicon.sort-target-"+c.field).addClass("glyphicon-menu-down")},_toggleSortColumn:function(){this._clearSortColumn(),this._setSortColumn()},_clearSortColumn:function(){this.$(".glyphicon.sort-target-"+c.field).removeClass("glyphicon-menu-up"),this.$(".glyphicon.sort-target-"+c.field).removeClass("glyphicon-menu-down")},_updateGrid:function(){this._replaceNode("tbody","template-grid-body")},_updateGridPager:function(){var e;e="Page ",e+=u.current?u.current.id:"0",e+=" of ",e+=u.count,this.$(".pagination-info").attr("placeholder",e),this.$(".pagination-container").removeClass("hidden"),u.count<2&&d.count<25&&this.$(".pagination-container").addClass("hidden")},_updateStatisticsInfo:function(){this._replaceNode("#grid-header-summary","template-grid-header-summary"),this._replaceNode("#grid-footer-summary","template-grid-footer-summary")},_replaceNode:function(e,t){this.$(e).replaceWith(i.renderTemplate(t,n))}});a.on("setup:begin",()=>{var e;e=o.URLS.API_BASE_URL+o.URLS.PID_TASK_QUEUE_SEARCH_SETUP,$.get(e).done(e=>{a.trigger("setup:setupDataDownload",e)}).fail(()=>{setTimeout(()=>{a.trigger("setup:setupDataDownload:error")},o.MISC.UI_UPDATE_DELAY)})}),a.on("setup:setupDataDownload",e=>{p(e.vocabs),S(null,"setup:initialSearchDataDownload")}),a.on("state:filterUpdated",e=>{S("search:begin","search:dataDownload")}),a.on("state:filterUpdate",e=>{g(e.split(":").slice(0,3).join(":"),e)});const S=(e,t)=>{var r,n;!1===_.isNull(e)&&a.trigger(e),r=o.URLS.API_BASE_URL+o.URLS.PID_TASK_QUEUE_SEARCH,n=[],_.each(_.values(s),e=>{!1===e.data.current.key.endsWith("*")&&n.push(e.data.current.key)}),n={criteria:n.join(",")},a.trigger(t+"ing"),$.get(r,n).done(e=>{setTimeout(()=>{a.trigger(t,e)},o.MISC.UI_UPDATE_DELAY)}).fail(()=>{setTimeout(()=>{a.trigger(t+":error")},o.MISC.UI_UPDATE_DELAY)})};a.on("setup:initialSearchDataDownload",e=>{l(e),a.trigger("setup:complete")}),a.on("search:dataDownload",e=>{l(e),a.trigger("state:pageUpdate"),a.trigger("search:complete")}),a.on("setup:begin",()=>{i.displayFeedback("Initializing errata pid task search")}),a.on("setup:complete",i.hideFeedback),a.on("setup:setupDataDownload:error",()=>{alert("setup:setupDataDownload:error")}),a.on("search:begin",()=>{i.displayFeedback("Searching errata repository")}),a.on("search:complete",i.hideFeedback),a.on("search:dataDownload:error",()=>{alert("search:dataDownload:error")}),$(document).ready(()=>{a.trigger("setup:begin")}),a.events.on("setup:complete",()=>{var e;(e=new m).render(),$("body").append(e.el),a.log("ui initialized"),a.trigger("ui:initialized")}),window.APP=a,window.STATE=n,window.UTILS=i,window.CONSTANTS=o}]);