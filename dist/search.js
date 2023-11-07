!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t,r){"use strict";r.r(t),r.d(t,"COPYRIGHT_YEAR",function(){return n}),r.d(t,"FULLTITLE",function(){return i}),r.d(t,"LONG_NAME",function(){return a}),r.d(t,"NAME",function(){return o}),r.d(t,"ORGANIZATION",function(){return s}),r.d(t,"VERSION",function(){return u}),r.d(t,"events",function(){return d}),r.d(t,"log",function(){return c}),r.d(t,"on",function(){return l}),r.d(t,"trigger",function(){return p});const n=(new Date).getFullYear(),i="ES-DOC Dataset Errata",a="Dataset Errata",o="Errata",s="ES-DOC",u="0.6.4.0",d=_.extend({},Backbone.Events),c=e=>{console.log(new Date+" :: "+s+"-"+o.toUpperCase()+" :: "+e)},l=(e,t,r)=>{d.on(e,t,r)},p=(e,t)=>(c("event :: "+e),d.trigger(e,t))},function(e,t,r){"use strict";r.r(t),r.d(t,"openURL",function(){return a}),r.d(t,"openDocumentation",function(){return o}),r.d(t,"openPIDDocumentation",function(){return s}),r.d(t,"openHomepage",function(){return u}),r.d(t,"openEmail",function(){return d}),r.d(t,"openSupportEmail",function(){return c}),r.d(t,"render",function(){return l}),r.d(t,"renderHTML",function(){return p}),r.d(t,"renderTemplate",function(){return f}),r.d(t,"getURLParam",function(){return h}),r.d(t,"getPageCount",function(){return E}),r.d(t,"getPages",function(){return S}),r.d(t,"displayFeedback",function(){return U}),r.d(t,"hideFeedback",function(){return m}),r.d(t,"displayInfoDialog",function(){return y}),r.d(t,"hideInfoDialog",function(){return D}),r.d(t,"generateUUID",function(){return v});var n=r(0),i=r(2);const a=(e,t)=>{!0===t?window.open(e):window.location=e},o=()=>{a(i.URLS.DOCUMENTATION,!0)},s=()=>{a(i.URLS.PIDDOCUMENTATION,!0)},u=()=>{a(i.URLS.HOME_PAGE,!0)},d=(e,t,r)=>{var n="mailto:{0}?subject={1}&body={2}";t=t||i.EMAIL.SUBJECT,r=r||i.EMAIL.MESSAGE,n=(n=(n=n.replace("{0}",e)).replace("{1}",t)).replace("{2}",r),window.location.href=n},c=()=>{var e;e=(e=(e="ES-DOC :: SUPPORT :: {0} (v{1})").replace("{0}",n.NAME.toUpperCase())).replace("{1}",n.VERSION),d(i.EMAIL.SUPPORT,e)},l=(e,t,r)=>{var n,i,a=[];return n=_.isArray(e)?e:[e],_.each(n,function(e){i=new e(t).render(),a.push(i),_.isUndefined(r)||(_.has(r,"$el")?r.$el.append(i.$el):r.append(i.$el))},void 0),1===n.length?a[0]:a},p=(e,t,r)=>{var n=t?e(t):e();_.isUndefined(r)||(_.has(r,"$el")?r.$el.append(n):r.append(n))},g={},f=(e,t,r)=>{var n;if(_.has(g,e)||(g[e]=_.template($("#"+e).html())),n=(0,g[e])(t),r&&r.$el)r.$el.append(n);else{if(!r)return n;r.replaceWith(n)}},h=(e,t)=>{var r=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.href);return r?(r[1]||t).toUpperCase():t},E=function(e,t){var r=0;return t&&t/e>(r=parseInt(t/e,10))&&(r+=1),r},S=(e,t)=>_.map(_.range(E(e,t.length)),function(t){return{id:t+1,data:this.slice(t*e,(t+1)*e-1)}},t),U=e=>{$("#feedbackText").text(e+" ... please wait"),$(".feedback-title").text(n.FULLTITLE),$(".feedback-version").text("v"+n.VERSION),$("#feedbackContainer").modal({backdrop:"static",keyboard:!1,show:!0})},m=()=>{$("#feedbackContainer").modal("hide")},y=(e,t)=>{$("#infoDialogText").text(e),$(".infoDialog-title").text(n.FULLTITLE),$(".infoDialog-version").text("v"+n.VERSION),t&&$("#infoDialogContainer").on("hide.bs.modal",t),$("#infoDialogContainer").modal({backdrop:"static",keyboard:!1,show:!0})},D=()=>{$("#infoDialog").modal("hide")},v=()=>{let e=(new Date).getTime();return"xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?r:3&r|8).toString(16)})}},function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"CONTACT",function(){return o}),r.d(n,"SUPPORT",function(){return s}),r.d(n,"SUBJECT",function(){return u}),r.d(n,"MESSAGE",function(){return d});var i={};r.r(i),r.d(i,"LOGGING_PREFIX",function(){return c}),r.d(i,"NULL_FIELD",function(){return l}),r.d(i,"UI_UPDATE_DELAY",function(){return p});var a={};r.r(a),r.d(a,"API_BASE_URL",function(){return g}),r.d(a,"DOCUMENTATION",function(){return f}),r.d(a,"PIDDOCUMENTATION",function(){return h}),r.d(a,"HOME_PAGE",function(){return _}),r.d(a,"API_OAUTH_AUTHORIZE",function(){return E}),r.d(a,"PID_PAGE",function(){return S}),r.d(a,"API_PID_RESOLVE",function(){return U}),r.d(a,"API_PID_TASK_QUEUE_SEARCH",function(){return m}),r.d(a,"API_PID_TASK_QUEUE_SEARCH_SETUP",function(){return y}),r.d(a,"ISSUE_CREATE",function(){return D}),r.d(a,"ISSUE_UPDATE",function(){return v}),r.d(a,"RETRIEVE",function(){return A}),r.d(a,"SEARCH",function(){return I}),r.d(a,"SEARCH_SETUP",function(){return C}),r.d(a,"SEARCH_PAGE",function(){return T}),r.d(a,"VIEW_PAGE",function(){return x}),r.d(a,"EDIT_PAGE",function(){return R});const o="support@errata.es-doc.org",s="support@errata.es-doc.org",u="ES-DOC ERRATA :: subject goes here",d="Dear ES-DOC ERRATA support team,",c="ES-DOC-ERRATA :: ",l="--",p=1e3,g=window.origin,f="https://es-doc.github.io/esdoc-errata-client/",h="https://es-doc.github.io/esdoc-errata-client/lookup.html",_="https://es-doc.org",E=window.location.origin+"/oauth/authorize",S="pid.html",U="/1/resolve/pid",m="/1/pid-queue/search",y="/1/pid-queue/search-setup",D="/1/issue/create",v="/1/issue/update",A="/1/issue/retrieve",I="/1/issue/search",C="/1/issue/search-setup",T="/static/index.html",x="/static/view.html",R="/static/edit.html";r.d(t,"EMAIL",function(){return L}),r.d(t,"MISC",function(){return b}),r.d(t,"URLS",function(){return k});const L=n,b=i,k=a},,,,function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"OAuthCredentials",function(){return u}),r.d(n,"isAuthenticated",function(){return d}),r.d(n,"filters",function(){return c}),r.d(n,"paging",function(){return l}),r.d(n,"sorting",function(){return p}),r.d(n,"searchData",function(){return g}),r.d(n,"setSearchData",function(){return f}),r.d(n,"initFilters",function(){return h}),r.d(n,"setActiveFilters",function(){return E}),r.d(n,"getActiveFilters",function(){return S}),r.d(n,"updateFilter",function(){return U}),r.d(n,"paginateIssues",function(){return m}),r.d(n,"sortResults",function(){return y}),r.d(n,"updateSortField",function(){return D});var i=r(0),a=r(1),o=r(2);class s{constructor(e,t){this.severity=t[1].data.set["esdoc:errata:severity:"+e.severity],this.status=t[2].data.set["esdoc:errata:status:"+e.status],this.institutionID=e.institutionID.toUpperCase(),this.title=(e.title||"--").trim(),e.title.length>53&&(this.title=e.title.slice(0,53)+" ...")}}const u=Cookies.get("errata-oauth-credentials"),d=!1===_.isUndefined(u);var c=[];const l={current:null,count:0,pages:[],pageSize:25,pageSizeOptions:[25,50,100]},p={field:"dateCreated",direction:"desc"};var g=null;const f=e=>{g=_.defaults({results:_.map(e.results,e=>new class{constructor(e,t){this.project=e[0],this.institutionID=e[1],this.uid=e[2],this.title=e[3],this.severity=e[4],this.status=e[5],this.dateCreated=e[6],this.dateClosed=e[7],this.dateUpdated=e[8],this.ext=new s(this,t)}}(e,c))},e),y(),m()},h=e=>{c=_.map(e,function(e){return new class{constructor(e){if(this.data={all:_.sortBy(e.terms,e=>e.sortOrdinal||e.key),current:null,set:{}},"esdoc:errata:project"===e.key){let e=a.getURLParam("project");console.log(e),e?(e=e.toLowerCase(),this.defaultKey=`esdoc:errata:project:${e}`):this.defaultKey="esdoc:errata:project:cmip6"}else this.defaultKey=null;this.key=e.key,this.label=e.label,this.project=e.key.startsWith("esdoc")?null:e.key.split(":")[1],this.uiPosition="esdoc:errata:project"===e.key?0:"esdoc:errata:severity"===e.key?1e3:"esdoc:errata:status"===e.key?1001:100,"esdoc:errata:project"!==e.key&&this.data.all.unshift({key:this.key+":*",label:"*"}),this.defaultKey&&(this.data.current=_.find(this.data.all,e=>e.key===this.defaultKey)),this.data.current=this.data.current||this.data.all[0],this.data.set=_.indexBy(this.data.all,"key")}}(e)}),E()},E=()=>{_.each(c,e=>{e.isActive=_.isNull(e.project)||e.project===c[0].data.current.key.split(":")[3]})},S=()=>_.filter(c,e=>e.isActive),U=(e,t)=>{var r;(r=_.find(c,t=>t.key===e)).data.current=_.find(r.data.all,e=>e.key===t),"esdoc:errata:project"===r.key&&E(),i.trigger("state:filterUpdated",r)},m=()=>{l.pages=a.getPages(l.pageSize,g.results),l.count=l.pages.length,l.current=l.count>0?l.pages[0]:void 0},y=()=>{var e,t,r;"title"===(t=p.field)?r=(e=>e.title):"institutionID"===t?r=(e=>e.ext.institutionID):"status"===t?r=(e=>e.ext.status.label.toLowerCase()):"severity"===t?r=(e=>e.ext.severity.sortOrdinal):_.contains(["dateClosed","dateCreated","dateUpdated"],t)&&(r=(e=>e[t]?e[t].valueOf():"--")),e=_.sortBy(g.results,r),"desc"===p.direction&&(e=e.reverse()),g.results=e},D=e=>{p.field===e?(p.direction="asc"===p.direction?"desc":"asc",i.trigger("state:sortDirectionToggled")):(i.trigger("state:sortFieldChanging"),p.field=e,_.contains(["dateClosed","dateCreated","dateUpdated","severity"],e)?p.direction="desc":p.direction="asc",i.trigger("state:sortFieldChanged")),y(),m()};var v=Backbone.View.extend({events:{"click img.esdoc-logo":()=>{a.openHomepage()},"click button.esdoc-support":()=>{a.openSupportEmail()},"click button.esdoc-docs":()=>{a.openDocumentation()},"click button.esdoc-errata-login":()=>{a.openURL(o.URLS.API_OAUTH_AUTHORIZE,!1)},"click button.esdoc-errata-create":()=>{a.openURL(o.URLS.EDIT_PAGE,!0)},"click button.esdoc-pid-lookup":()=>{a.openURL(o.URLS.PID_PAGE,!0)},"click .issue":e=>{var t;t=o.URLS.VIEW_PAGE,t+="?uid=",t+=$(e.target).parent().attr("id")||$(e.target).parent().parent().attr("id"),a.openURL(t,!0)},"change .filter select":e=>{i.trigger("state:filterUpdate",$(e.target).val())},"change .pagination-info":e=>{var t;t=parseInt($(e.target).val(),10),$(e.target).val(""),!1===_.isNaN(t)&&t>0&&t<=l.pages.length&&l.current!==l.pages[t-1]&&(l.current=l.pages[t-1],i.trigger("state:pageUpdate"))},"click .pagination-first":()=>{l.pages.length&&l.current!==_.first(l.pages)&&(l.current=_.first(l.pages),i.trigger("state:pageUpdate"))},"click .pagination-previous":()=>{l.pages.length&&l.current!==_.first(l.pages)&&(l.current=l.pages[l.current.id-2],i.trigger("state:pageUpdate"))},"click .pagination-next":()=>{l.pages.length&&l.current!==_.last(l.pages)&&(l.current=l.pages[l.current.id],i.trigger("state:pageUpdate"))},"click .pagination-last":()=>{l.pages.length&&l.current!==_.last(l.pages)&&(l.current=_.last(l.pages),i.trigger("state:pageUpdate"))},"change .pagination-page-size":e=>{l.pageSize=$(e.target).val(),l.pages=a.getPages(l.pageSize,g.results),l.count=l.pages.length,l.current=l.count>0?l.pages[0]:void 0,i.trigger("state:pageUpdate")},"click .sort-target":e=>{var t;(t=$(e.target).attr("class"))&&(t=t.split(" "),t=(t=_.find(t,e=>e.startsWith("sort-target-"))).slice(12)),t&&(D(t),i.trigger("state:pageUpdate"))}},initialize:function(){i.on("ui:initialized",this._setSortColumn,this),i.on("search:complete",this._updateStatisticsInfo,this),i.on("state:pageUpdate",this._updateGrid,this),i.on("state:pageUpdate",this._updateGridPager,this),i.on("state:sortFieldChanging",this._clearSortColumn,this),i.on("state:sortFieldChanged",this._setSortColumn,this),i.on("state:sortDirectionToggled",this._toggleSortColumn,this),i.on("project:changed",()=>{this._replaceNode("div.filter","template-filter")},this)},render:function(){return _.each(["template-header","template-filter","template-grid"],e=>{a.renderTemplate(e,null,this)},this),this},_setSortColumn:function(){"asc"===p.direction?this.$(".glyphicon.sort-target-"+p.field).addClass("glyphicon-menu-up"):this.$(".glyphicon.sort-target-"+p.field).addClass("glyphicon-menu-down")},_toggleSortColumn:function(){this._clearSortColumn(),this._setSortColumn()},_clearSortColumn:function(){this.$(".glyphicon.sort-target-"+p.field).removeClass("glyphicon-menu-up"),this.$(".glyphicon.sort-target-"+p.field).removeClass("glyphicon-menu-down")},_updateGrid:function(){this._replaceNode("tbody","template-grid-body")},_updateGridPager:function(){var e;e="Page ",e+=l.current?l.current.id:"0",e+=" of ",e+=l.count,this.$(".pagination-info").attr("placeholder",e),this.$(".pagination-container").removeClass("hidden"),l.count<2&&g.count<25&&this.$(".pagination-container").addClass("hidden")},_updateStatisticsInfo:function(){this._replaceNode("#grid-header-summary","template-grid-header-summary"),this._replaceNode("#grid-footer-summary","template-grid-footer-summary")},_replaceNode:function(e,t){this.$(e).replaceWith(a.renderTemplate(t))}});i.on("setup:begin",()=>{var e;e=o.URLS.API_BASE_URL+o.URLS.API_SEARCH_SETUP,$.get(e).done(e=>{i.trigger("setup:setupDataDownload",e)}).fail(()=>{setTimeout(()=>{i.trigger("setup:setupDataDownload:error")},o.MISC.UI_UPDATE_DELAY)})}),i.on("setup:setupDataDownload",e=>{h(e.vocabs),A(null,"setup:initialSearchDataDownload")}),i.on("state:filterUpdated",e=>{A("search:begin","search:dataDownload"),"esdoc:errata:project"===e.key&&i.trigger("project:changed")}),i.on("state:filterUpdate",e=>{U(e.split(":").slice(0,3).join(":"),e)}),i.on("setup:initialSearchDataDownload",e=>{f(e),i.trigger("setup:complete")}),i.on("search:dataDownload",e=>{f(e),i.trigger("state:pageUpdate"),i.trigger("search:complete")});const A=(e,t)=>{var r,n;!1===_.isNull(e)&&i.trigger(e),r=o.URLS.API_BASE_URL+o.URLS.API_SEARCH,n=[],_.each(_.values(S()),e=>{!1===e.data.current.key.endsWith("*")&&n.push(e.data.current.key)}),n={criteria:n.join(",")},i.trigger(t+"ing"),$.get(r,n).done(e=>{setTimeout(()=>{i.trigger(t,e)},o.MISC.UI_UPDATE_DELAY)}).fail(()=>{setTimeout(()=>{i.trigger(t+":error")},o.MISC.UI_UPDATE_DELAY)})};i.on("setup:begin",()=>{a.displayFeedback("Initializing errata search",i.FULLTITLE,i.VERSION)}),i.on("setup:complete",a.hideFeedback),i.on("setup:setupDataDownload:error",()=>{alert("setup:setupDataDownload:error")}),i.on("search:begin",()=>{a.displayFeedback("Searching errata repository",i.FULLTITLE,i.VERSION)}),i.on("search:complete",a.hideFeedback),i.on("search:dataDownload:error",()=>{alert("search:dataDownload:error")}),$(document).ready(()=>{i.trigger("setup:begin")}),i.events.on("setup:complete",()=>{var e;(e=new v).render(),$("body").append(e.el),i.trigger("ui:initialized")}),window.APP=i,window.STATE=n,window.UTILS=a,window.CONSTANTS=o}]);