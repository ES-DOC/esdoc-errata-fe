!function(e){function t(r){if(a[r])return a[r].exports;var i=a[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var a={};t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=(new Date).getFullYear();t.COPYRIGHT_YEAR=r;t.FULLTITLE="ES-DOC Dataset Errata";t.LONG_NAME="Dataset Errata";t.NAME="Errata";t.ORGANIZATION="ES-DOC";t.VERSION="0.5.2.0";const i=_.extend({},Backbone.Events);t.events=i;const n=e=>{console.log(new Date+" :: ES-DOC-"+"Errata".toUpperCase()+" :: "+e)};t.log=n;t.on=((e,t,a)=>{i.on(e,t,a)});t.trigger=((e,t)=>(n("event :: "+e),i.trigger(e,t)))},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),i=a(2);const n=(e,t)=>{!0===t?window.open(e):window.location=e};t.openURL=n;t.openHomepage=(()=>{n(i.URLS.HOME_PAGE,!0)});const s=(e,t,a)=>{var r="mailto:{0}?subject={1}&body={2}";t=t||i.EMAIL.SUBJECT,a=a||i.EMAIL.MESSAGE,r=(r=(r=r.replace("{0}",e)).replace("{1}",t)).replace("{2}",a),window.location.href=r};t.openEmail=s;t.openSupportEmail=(()=>{var e;e=(e=(e="ES-DOC :: SUPPORT :: {0} (v{1})").replace("{0}",r.NAME.toUpperCase())).replace("{1}",r.VERSION),s(i.EMAIL.SUPPORT,e)});t.render=((e,t,a)=>{var r,i,n=[];return r=_.isArray(e)?e:[e],_.each(r,function(e){i=new e(t).render(),n.push(i),_.isUndefined(a)||(_.has(a,"$el")?a.$el.append(i.$el):a.append(i.$el))},this),1===r.length?n[0]:n});t.renderHTML=((e,t,a)=>{var r=t?e(t):e();_.isUndefined(a)||(_.has(a,"$el")?a.$el.append(r):a.append(r))});const o={};t.renderTemplate=((e,t,a)=>{var r,i;if(_.has(o,e)||(o[e]=_.template($("#"+e).html())),r=o[e],i=r(t),a&&a.$el)a.$el.append(i);else{if(!a)return i;a.replaceWith(i)}});t.getURLParam=((e,t)=>{var a=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.href);return a?(a[1]||t).toUpperCase():t});const c=function(e,t){var a=0;return t&&t/e>(a=parseInt(t/e,10))&&(a+=1),a};t.getPageCount=c;t.getPages=((e,t)=>_.map(_.range(c(e,t.length)),function(t){return{id:t+1,data:this.slice(t*e,(t+1)*e-1)}},t));t.displayFeedback=(e=>{$("#feedbackText").text(e+" ... please wait"),$(".feedback-title").text(r.FULLTITLE),$(".feedback-version").text("v"+r.VERSION),$("#feedbackContainer").modal({backdrop:"static",keyboard:!1,show:!0})});t.hideFeedback=(()=>{$("#feedbackContainer").modal("hide")})},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(6),i=a(4),n=a(7);const s=r;t.EMAIL=s;const o=i;t.MISC=o;const c=n;t.URLS=c},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a.d(t,"filters",function(){return n}),a.d(t,"searchData",function(){return c});var r=a(1),i=a(8),n=[];const s={current:null,count:0,pages:[],pageSize:25,pageSizeOptions:[25,50,100]};t.paging=s;const o={field:"timestamp",direction:"desc"};t.sorting=o;var c=null;t.setSearchData=(e=>{c=_.defaults({results:_.map(e.results,e=>new i.b(e,n))},e),g(),p()});t.initFilters=(e=>{n=_.map(e,function(e){return new i.a(e)})});t.updateFilter=((e,t)=>{var a;(a=_.find(n,t=>t.key===e)).data.current=_.find(a.data.all,e=>e.key===t),APP.trigger("state:filterUpdated",a)});const p=()=>{s.pages=r.getPages(s.pageSize,c.results),s.count=s.pages.length,s.current=s.count>0?s.pages[0]:void 0};t.paginateIssues=p;const g=()=>{var e,t,a;"datasetID"===(t=o.field)?a=(e=>e.datasetID):"status"===t?a=(e=>e.ext.status.label.toLowerCase()):"action"===t?a=(e=>e.ext.action.label.toLowerCase()):"timestamp"===t&&(a=(e=>e[t]?e[t].valueOf():"--")),e=_.sortBy(c.results,a),"desc"===o.direction&&(e=e.reverse()),c.results=e};t.sortResults=g;t.updateSortField=(e=>{o.field===e?(o.direction="asc"===o.direction?"desc":"asc",APP.trigger("state:sortDirectionToggled")):(APP.trigger("state:sortFieldChanging"),o.field=e,o.direction="timestamp"===e?"desc":"asc",APP.trigger("state:sortFieldChanged")),g(),p()})},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=window.location.host&&window.location.host.indexOf("es-doc.org")>=0?window.location.host.indexOf("test")>=0?"test":"prod":"dev";t.EXECUTION_MODE=r;t.LOGGING_PREFIX="ES-DOC-ERRATA :: ";t.NULL_FIELD="--";t.UI_UPDATE_DELAY=1e3},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),i=a(1),n=a(2),s=a(3),o=a(9);a(10),a(11);$(document).ready(()=>{r.trigger("setup:begin")}),r.events.on("setup:complete",()=>{var e;(e=new o.a).render(),$("body").append(e.el),r.log("ui initialized"),r.trigger("ui:initialized")}),window.APP=r,window.STATE=s,window.UTILS=i,window.CONSTANTS=n},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CONTACT="errata-contact@list.woc.noaa.gov";t.SUPPORT="errata-support@list.woc.noaa.gov";t.SUBJECT="ES-DOC ERRATA :: subject goes here";t.MESSAGE="Dear ES-DOC ERRATA support team,"},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(4);const i={dev:"http://localhost:5001",prod:"https://errata-api.es-doc.org",test:"https://test-errata-api.es-doc.org"}[r.EXECUTION_MODE];t.API_BASE_URL=i;t.HOME_PAGE="https://es-doc.org";t.PID_PAGE="pid.html";t.PID_RESOLVE="/1/resolve/pid";t.PID_TASK_QUEUE_SEARCH="/1/pid-queue/search";t.PID_TASK_QUEUE_SEARCH_SETUP="/1/pid-queue/search-setup";t.RETRIEVE="/1/issue/retrieve";t.SEARCH="/1/issue/search";t.SEARCH_PAGE="index.html";t.SEARCH_SETUP="/1/issue/search-setup";const n={dev:window.location.href.replace("index","viewer").replace("pidq","viewer"),prod:"https://errata.es-doc.org/viewer.html",test:"https://test-errata.es-doc.org/viewer.html"}[r.EXECUTION_MODE];t.VIEWER_BASE_URL=n},function(e,t,a){"use strict";var r=a(3);t.b=class{constructor(e){_.each(_.keys(e),t=>{this[t]=e[t]}),this.ext=new class{constructor(e){this.action=r.filters[1].data.set["esdoc:errata:pid-task-action:"+e.action],this.status=r.filters[2].data.set["esdoc:errata:pid-task-status:"+e.status]}}(this)}};t.a=class{constructor(e){var t;this.data={all:_.sortBy(e.terms,e=>e.sortOrdinal||e.key),current:null,set:{}},this.key=e.key,this.label=e.label,this.uiPosition="esdoc:errata:project"===e.key?0:"esdoc:errata:pid-task-action"===e.key?1e3:"esdoc:errata:pid-task-status"===e.key?1001:100,"esdoc:errata:project"!=e.key&&this.data.all.unshift({key:e.key+":*",label:"*",namespace:e.key+":*"}),(t="esdoc:errata:project"===e.key?"esdoc:errata:project:cmip6":null)&&(this.data.current=_.find(this.data.all,e=>e.key===t)),this.data.current=this.data.current||this.data.all[0],this.data.set=_.indexBy(this.data.all,"key")}}},function(e,t,a){"use strict";var r=a(0),i=a(1),n=a(2),s=a(3);t.a=Backbone.View.extend({events:{"click img.esdoc-logo":()=>{i.openHomepage()},"click button.esdoc-support":()=>{i.openSupportEmail()},"click button.esdoc-pid-lookup":()=>{i.openURL(n.URLS.PID_PAGE,!0)},"click .task":e=>{var t;t=n.URLS.VIEWER_BASE_URL,t+="?uid=",t+=$(e.target).parent().attr("id")||$(e.target).parent().parent().attr("id"),i.openURL(t,!0)},"change .filter select":e=>{r.trigger("state:filterUpdate",$(e.target).val())},"change .pagination-info":e=>{var t;t=parseInt($(e.target).val(),10),$(e.target).val(""),!1===_.isNaN(t)&&t>0&&t<=s.paging.pages.length&&s.paging.current!==s.paging.pages[t-1]&&(s.paging.current=s.paging.pages[t-1],r.trigger("state:pageUpdate"))},"click .pagination-first":()=>{s.paging.pages.length&&s.paging.current!==_.first(s.paging.pages)&&(s.paging.current=_.first(s.paging.pages),r.trigger("state:pageUpdate"))},"click .pagination-previous":()=>{s.paging.pages.length&&s.paging.current!==_.first(s.paging.pages)&&(s.paging.current=s.paging.pages[s.paging.current.id-2],r.trigger("state:pageUpdate"))},"click .pagination-next":()=>{s.paging.pages.length&&s.paging.current!==_.last(s.paging.pages)&&(s.paging.current=s.paging.pages[s.paging.current.id],r.trigger("state:pageUpdate"))},"click .pagination-last":()=>{s.paging.pages.length&&s.paging.current!==_.last(s.paging.pages)&&(s.paging.current=_.last(s.paging.pages),r.trigger("state:pageUpdate"))},"change .pagination-page-size":e=>{s.paging.pageSize=$(e.target).val(),s.paging.pages=i.getPages(s.paging.pageSize,s.searchData.results),s.paging.count=s.paging.pages.length,s.paging.current=s.paging.count>0?s.paging.pages[0]:void 0,r.trigger("state:pageUpdate")},"click .sort-target":e=>{var t;(t=$(e.target).attr("class"))&&(t=t.split(" "),t=(t=_.find(t,e=>e.startsWith("sort-target-"))).slice(12)),t&&(s.updateSortField(t),r.trigger("state:pageUpdate"))}},initialize:function(){r.events.on("ui:initialized",this._setSortColumn,this),r.events.on("search:complete",this._updateStatisticsInfo,this),r.events.on("state:pageUpdate",this._updateGrid,this),r.events.on("state:pageUpdate",this._updateGridPager,this),r.events.on("state:sortFieldChanging",this._clearSortColumn,this),r.events.on("state:sortFieldChanged",this._setSortColumn,this),r.events.on("state:sortDirectionToggled",this._toggleSortColumn,this),r.events.on("project:changed",()=>{this._replaceNode("div.filter","template-filter")},this)},render:function(){return _.each(["template-header","template-filter","template-grid"],e=>{i.renderTemplate(e,r,this)},this),this},_setSortColumn:function(){"asc"===s.sorting.direction?this.$(".glyphicon.sort-target-"+s.sorting.field).addClass("glyphicon-menu-up"):this.$(".glyphicon.sort-target-"+s.sorting.field).addClass("glyphicon-menu-down")},_toggleSortColumn:function(){this._clearSortColumn(),this._setSortColumn()},_clearSortColumn:function(){this.$(".glyphicon.sort-target-"+s.sorting.field).removeClass("glyphicon-menu-up"),this.$(".glyphicon.sort-target-"+s.sorting.field).removeClass("glyphicon-menu-down")},_updateGrid:function(){this._replaceNode("tbody","template-grid-body")},_updateGridPager:function(){var e;e="Page ",e+=s.paging.current?s.paging.current.id:"0",e+=" of ",e+=s.paging.count,this.$(".pagination-info").attr("placeholder",e),this.$(".pagination-container").removeClass("hidden"),s.paging.count<2&&s.searchData.count<25&&this.$(".pagination-container").addClass("hidden")},_updateStatisticsInfo:function(){this._replaceNode("#grid-header-summary","template-grid-header-summary"),this._replaceNode("#grid-footer-summary","template-grid-footer-summary")},_replaceNode:function(e,t){this.$(e).replaceWith(i.renderTemplate(t,s))}})},function(e,t,a){"use strict";var r=a(0),i=a(2),n=(a(1),a(3));r.on("setup:begin",()=>{var e;e=i.URLS.API_BASE_URL+i.URLS.PID_TASK_QUEUE_SEARCH_SETUP,$.get(e).done(e=>{r.trigger("setup:setupDataDownload",e)}).fail(()=>{setTimeout(()=>{r.trigger("setup:setupDataDownload:error")},i.MISC.UI_UPDATE_DELAY)})}),r.on("setup:setupDataDownload",e=>{n.initFilters(e.vocabs),s(null,"setup:initialSearchDataDownload")}),r.on("state:filterUpdated",e=>{s("search:begin","search:dataDownload")}),r.on("state:filterUpdate",e=>{n.updateFilter(e.split(":").slice(0,3).join(":"),e)});const s=(e,t)=>{var a,s;!1===_.isNull(e)&&r.trigger(e),a=i.URLS.API_BASE_URL+i.URLS.PID_TASK_QUEUE_SEARCH,s=[],_.each(_.values(n.filters),e=>{!1===e.data.current.key.endsWith("*")&&s.push(e.data.current.key)}),s={criteria:s.join(",")},r.trigger(t+"ing"),$.get(a,s).done(e=>{setTimeout(()=>{r.trigger(t,e)},i.MISC.UI_UPDATE_DELAY)}).fail(()=>{setTimeout(()=>{r.trigger(t+":error")},i.MISC.UI_UPDATE_DELAY)})};r.on("setup:initialSearchDataDownload",e=>{n.setSearchData(e),r.trigger("setup:complete")}),r.on("search:dataDownload",e=>{n.setSearchData(e),r.trigger("state:pageUpdate"),r.trigger("search:complete")})},function(e,t,a){"use strict";var r=a(0),i=a(1);r.on("setup:begin",()=>{i.displayFeedback("Initializing errata pid task search")}),r.on("setup:complete",i.hideFeedback),r.on("setup:setupDataDownload:error",()=>{alert("setup:setupDataDownload:error")}),r.on("search:begin",()=>{i.displayFeedback("Searching errata repository")}),r.on("search:complete",i.hideFeedback),r.on("search:dataDownload:error",()=>{alert("search:dataDownload:error")})}]);