!function(e){function t(r){if(s[r])return s[r].exports;var o=s[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var s={};t.m=e,t.c=s,t.d=function(e,s,r){t.o(e,s)||Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=(new Date).getFullYear();t.COPYRIGHT_YEAR=r;t.FULLTITLE="ES-DOC Dataset Errata";t.LONG_NAME="Dataset Errata";t.NAME="Errata";t.ORGANIZATION="ES-DOC";t.VERSION="0.5.2.0";const o=_.extend({},Backbone.Events);t.events=o;const a=e=>{console.log(new Date+" :: ES-DOC-"+"Errata".toUpperCase()+" :: "+e)};t.log=a;t.on=((e,t,s)=>{o.on(e,t,s)});t.trigger=((e,t)=>(a("event :: "+e),o.trigger(e,t)))},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(0),o=s(2);const a=(e,t)=>{!0===t?window.open(e):window.location=e};t.openURL=a;t.openHomepage=(()=>{a(o.URLS.HOME_PAGE,!0)});const n=(e,t,s)=>{var r="mailto:{0}?subject={1}&body={2}";t=t||o.EMAIL.SUBJECT,s=s||o.EMAIL.MESSAGE,r=(r=(r=r.replace("{0}",e)).replace("{1}",t)).replace("{2}",s),window.location.href=r};t.openEmail=n;t.openSupportEmail=(()=>{var e;e=(e=(e="ES-DOC :: SUPPORT :: {0} (v{1})").replace("{0}",r.NAME.toUpperCase())).replace("{1}",r.VERSION),n(o.EMAIL.SUPPORT,e)});t.render=((e,t,s)=>{var r,o,a=[];return r=_.isArray(e)?e:[e],_.each(r,function(e){o=new e(t).render(),a.push(o),_.isUndefined(s)||(_.has(s,"$el")?s.$el.append(o.$el):s.append(o.$el))},this),1===r.length?a[0]:a});t.renderHTML=((e,t,s)=>{var r=t?e(t):e();_.isUndefined(s)||(_.has(s,"$el")?s.$el.append(r):s.append(r))});const i={};t.renderTemplate=((e,t,s)=>{var r,o;if(_.has(i,e)||(i[e]=_.template($("#"+e).html())),r=i[e],o=r(t),s&&s.$el)s.$el.append(o);else{if(!s)return o;s.replaceWith(o)}});t.getURLParam=((e,t)=>{var s=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.href);return s?(s[1]||t).toUpperCase():t});const c=function(e,t){var s=0;return t&&t/e>(s=parseInt(t/e,10))&&(s+=1),s};t.getPageCount=c;t.getPages=((e,t)=>_.map(_.range(c(e,t.length)),function(t){return{id:t+1,data:this.slice(t*e,(t+1)*e-1)}},t));t.displayFeedback=(e=>{$("#feedbackText").text(e+" ... please wait"),$(".feedback-title").text(r.FULLTITLE),$(".feedback-version").text("v"+r.VERSION),$("#feedbackContainer").modal({backdrop:"static",keyboard:!1,show:!0})});t.hideFeedback=(()=>{$("#feedbackContainer").modal("hide")})},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(6),o=s(4),a=s(7);const n=r;t.EMAIL=n;const i=o;t.MISC=i;const c=a;t.URLS=c},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s.d(t,"issue",function(){return o}),s.d(t,"datasets",function(){return a}),s.d(t,"facets",function(){return n}),s.d(t,"vocabs",function(){return i}),s.d(t,"projects",function(){return c}),s.d(t,"severity",function(){return u}),s.d(t,"status",function(){return p});var r=s(8),o=null,a=[],n=[],i=[],c=[],u=[],p=[];t.setVocabs=(e=>{i=e,c=e[0],u=e[1],p=e[2]});t.setIssue=(e=>{o=new r.a(e),a=e.datasets,n=e.facets});const l=e=>_.find(i,t=>t.key===e);t.getVocabCollection=l;t.getVocabTerm=((e,t)=>{var s;if(s=l(e))return _.find(s.terms,e=>e.canonicalName===t)})},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=window.location.host&&window.location.host.indexOf("es-doc.org")>=0?window.location.host.indexOf("test")>=0?"test":"prod":"dev";t.EXECUTION_MODE=r;t.LOGGING_PREFIX="ES-DOC-ERRATA :: ";t.NULL_FIELD="--";t.UI_UPDATE_DELAY=1e3},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(0),o=s(1),a=s(2),n=s(3),i=s(9);s(10),s(11);$(document).ready(()=>{r.trigger("setup:begin")}),r.events.on("setup:complete",()=>{var e;(e=new i.a).render(),$("body").append(e.el),r.log("ui initialized"),r.trigger("ui:initialized")}),window.APP=r,window.STATE=n,window.UTILS=o,window.CONSTANTS=a},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CONTACT="errata-contact@list.woc.noaa.gov";t.SUPPORT="errata-support@list.woc.noaa.gov";t.SUBJECT="ES-DOC ERRATA :: subject goes here";t.MESSAGE="Dear ES-DOC ERRATA support team,"},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(4);const o={dev:"http://localhost:5001",prod:"https://errata-api.es-doc.org",test:"https://test-errata-api.es-doc.org"}[r.EXECUTION_MODE];t.API_BASE_URL=o;t.HOME_PAGE="https://es-doc.org";t.PID_PAGE="pid.html";t.PID_RESOLVE="/1/resolve/pid";t.PID_TASK_QUEUE_SEARCH="/1/pid-queue/search";t.PID_TASK_QUEUE_SEARCH_SETUP="/1/pid-queue/search-setup";t.RETRIEVE="/1/issue/retrieve";t.SEARCH="/1/issue/search";t.SEARCH_PAGE="index.html";t.SEARCH_SETUP="/1/issue/search-setup";const a={dev:window.location.href.replace("index","viewer").replace("pidq","viewer"),prod:"https://errata.es-doc.org/viewer.html",test:"https://test-errata.es-doc.org/viewer.html"}[r.EXECUTION_MODE];t.VIEWER_BASE_URL=a},function(e,t,s){"use strict";var r=s(3);t.a=class{constructor(e){_.each(_.keys(e),t=>{this[t]=e[t]}),this.datasets=this.datasets.sort(),this.ext=new class{constructor(e){this.facets=_.map(e.facets,e=>new class{constructor(e){this.namespace=e,this.typeof=e.split(":").slice(0,3).join(":"),this.value=e.split(":")[3]}}(e)),this.institute=e.institute.toUpperCase(),this.project=r.getVocabTerm("esdoc:errata:project",e.project),this.projectFacets=_.filter(this.project.facets,e=>!1===e.split(":")[2].startsWith("institut")),this.projectDocURL=this.project.isDocumented?"https://documentation.es-doc.org/"+this.project.canonicalName:null,this.severity=r.getVocabTerm("esdoc:errata:severity",e.severity),this.status=r.getVocabTerm("esdoc:errata:status",e.status),this.affectedFacets=_.map(this.projectFacets,t=>new class{constructor(e,t,s){this.collection=r.getVocabCollection(s),this.terms=_.filter(this.collection.terms,e=>_.find(t,t=>e.namespace===t.namespace)),!1===_.isUndefined(this.collection.cimDocumentType)&&_.each(this.terms,t=>{t.documentationURL="https://documentation.es-doc.org/"+e+"/"+this.collection.cimDocumentTypeSynonym+"s/"+t.canonicalName})}}(e.project,this.facets,t))}}(this)}get fullTitle(){var e;return e=this.project.toUpperCase(),e+=" - ",e+=this.institute.toUpperCase(),e+=" - ",e+=this.title.slice(0,48),this.title.length>48&&(e+="..."),this.title}}},function(e,t,s){"use strict";s(0);var r=s(1),o=s(2);s(3);t.a=Backbone.View.extend({events:{"click img.esdoc-logo":()=>{r.openHomepage()},"click button.esdoc-support":()=>{r.openSupportEmail()},"click button.esdoc-errata-search":()=>{r.openURL(o.URLS.SEARCH_PAGE,!1)}},render:function(){return _.each(["template-header","template-issue"],e=>{r.renderTemplate(e,null,this)},this),this}})},function(e,t,s){"use strict";var r=s(0),o=s(2),a=s(1),n=s(3);r.on("setup:begin",()=>{var e;e=o.URLS.API_BASE_URL+o.URLS.SEARCH_SETUP,$.get(e).done(e=>{r.trigger("setup:cvDataDownload",e)}).fail(()=>{setTimeout(()=>{r.trigger("setup:cvDataDownload:error")},o.MISC.UI_UPDATE_DELAY)})}),r.on("setup:cvDataDownload",e=>{n.setVocabs(e.vocabs),r.trigger("setup:cvDataParsed")}),r.on("setup:cvDataParsed",()=>{var e,t;e=o.URLS.API_BASE_URL+o.URLS.RETRIEVE,t={uid:a.getURLParam("uid")},$.get(e,t).done(e=>{setTimeout(()=>{r.trigger("setup:issueDataDownload",e)},o.MISC.UI_UPDATE_DELAY)}).fail(()=>{setTimeout(()=>{r.trigger("setup:issueDataDownload:error")},o.MISC.UI_UPDATE_DELAY)})}),r.on("setup:issueDataDownload",e=>{n.setIssue(e.issue),r.trigger("setup:complete")})},function(e,t,s){"use strict";var r=s(0),o=s(1);r.on("setup:begin",()=>{o.displayFeedback("Initializing errata viewer",r.FULLTITLE,r.VERSION)}),r.on("setup:complete",o.hideFeedback),r.on("setup:setupDataDownload:error",()=>{alert("TODO: setup:setupDataDownload:error")})}]);