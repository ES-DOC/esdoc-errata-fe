!function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=7)}([function(e,t,i){"use strict";i.r(t),i.d(t,"COPYRIGHT_YEAR",function(){return r}),i.d(t,"FULLTITLE",function(){return n}),i.d(t,"LONG_NAME",function(){return s}),i.d(t,"NAME",function(){return a}),i.d(t,"ORGANIZATION",function(){return o}),i.d(t,"VERSION",function(){return u}),i.d(t,"events",function(){return d}),i.d(t,"log",function(){return c}),i.d(t,"on",function(){return l}),i.d(t,"trigger",function(){return p});const r=(new Date).getFullYear(),n="ES-DOC Dataset Errata",s="Dataset Errata",a="Errata",o="ES-DOC",u="0.6.0.0",d=_.extend({},Backbone.Events),c=e=>{console.log(new Date+" :: "+o+"-"+a.toUpperCase()+" :: "+e)},l=(e,t,i)=>{d.on(e,t,i)},p=(e,t)=>(c("event :: "+e),d.trigger(e,t))},function(e,t,i){"use strict";i.r(t),i.d(t,"openURL",function(){return s}),i.d(t,"openHomepage",function(){return a}),i.d(t,"openEmail",function(){return o}),i.d(t,"openSupportEmail",function(){return u}),i.d(t,"render",function(){return d}),i.d(t,"renderHTML",function(){return c}),i.d(t,"renderTemplate",function(){return p}),i.d(t,"getURLParam",function(){return f}),i.d(t,"getPageCount",function(){return g}),i.d(t,"getPages",function(){return h}),i.d(t,"displayFeedback",function(){return E}),i.d(t,"hideFeedback",function(){return m}),i.d(t,"displayInfoDialog",function(){return v}),i.d(t,"hideInfoDialog",function(){return S}),i.d(t,"generateUUID",function(){return A});var r=i(0),n=i(2);const s=(e,t)=>{!0===t?window.open(e):window.location=e},a=()=>{s(n.URLS.HOME_PAGE,!0)},o=(e,t,i)=>{var r="mailto:{0}?subject={1}&body={2}";t=t||n.EMAIL.SUBJECT,i=i||n.EMAIL.MESSAGE,r=(r=(r=r.replace("{0}",e)).replace("{1}",t)).replace("{2}",i),window.location.href=r},u=()=>{var e;e=(e=(e="ES-DOC :: SUPPORT :: {0} (v{1})").replace("{0}",r.NAME.toUpperCase())).replace("{1}",r.VERSION),o(n.EMAIL.SUPPORT,e)},d=(e,t,i)=>{var r,n,s=[];return r=_.isArray(e)?e:[e],_.each(r,function(e){n=new e(t).render(),s.push(n),_.isUndefined(i)||(_.has(i,"$el")?i.$el.append(n.$el):i.append(n.$el))},void 0),1===r.length?s[0]:s},c=(e,t,i)=>{var r=t?e(t):e();_.isUndefined(i)||(_.has(i,"$el")?i.$el.append(r):i.append(r))},l={},p=(e,t,i)=>{var r;if(_.has(l,e)||(l[e]=_.template($("#"+e).html())),r=(0,l[e])(t),i&&i.$el)i.$el.append(r);else{if(!i)return r;i.replaceWith(r)}},f=(e,t)=>{var i=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.href);return i?(i[1]||t).toUpperCase():t},g=function(e,t){var i=0;return t&&t/e>(i=parseInt(t/e,10))&&(i+=1),i},h=(e,t)=>_.map(_.range(g(e,t.length)),function(t){return{id:t+1,data:this.slice(t*e,(t+1)*e-1)}},t),E=e=>{$("#feedbackText").text(e+" ... please wait"),$(".feedback-title").text(r.FULLTITLE),$(".feedback-version").text("v"+r.VERSION),$("#feedbackContainer").modal({backdrop:"static",keyboard:!1,show:!0})},m=()=>{$("#feedbackContainer").modal("hide")},v=(e,t)=>{$("#infoDialogText").text(e),$(".infoDialog-title").text(r.FULLTITLE),$(".infoDialog-version").text("v"+r.VERSION),t&&$("#infoDialogContainer").on("hide.bs.modal",t),$("#infoDialogContainer").modal({backdrop:"static",keyboard:!1,show:!0})},S=()=>{$("#infoDialog").modal("hide")},A=()=>{let e=(new Date).getTime();return"xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const i=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?i:3&i|8).toString(16)})}},function(e,t,i){"use strict";i.r(t);var r={};i.d(r,"CONTACT",function(){return a}),i.d(r,"SUPPORT",function(){return o}),i.d(r,"SUBJECT",function(){return u}),i.d(r,"MESSAGE",function(){return d});var n={};i.d(n,"LOGGING_PREFIX",function(){return c}),i.d(n,"NULL_FIELD",function(){return l}),i.d(n,"UI_UPDATE_DELAY",function(){return p});var s={};i.d(s,"API_BASE_URL",function(){return f}),i.d(s,"HOME_PAGE",function(){return g}),i.d(s,"OAUTH_AUTHORIZE",function(){return h}),i.d(s,"PID_PAGE",function(){return E}),i.d(s,"PID_RESOLVE",function(){return m}),i.d(s,"PID_TASK_QUEUE_SEARCH",function(){return v}),i.d(s,"PID_TASK_QUEUE_SEARCH_SETUP",function(){return S}),i.d(s,"ISSUE_CREATE",function(){return _}),i.d(s,"ISSUE_UPDATE",function(){return A}),i.d(s,"RETRIEVE",function(){return T}),i.d(s,"SEARCH",function(){return I}),i.d(s,"SEARCH_SETUP",function(){return U}),i.d(s,"SEARCH_PAGE",function(){return x}),i.d(s,"VIEW_PAGE",function(){return w}),i.d(s,"EDIT_PAGE",function(){return D});const a="errata-contact@list.woc.noaa.gov",o="errata-support@list.woc.noaa.gov",u="ES-DOC ERRATA :: subject goes here",d="Dear ES-DOC ERRATA support team,",c="ES-DOC-ERRATA :: ",l="--",p=1e3,f=window.origin,g="https://es-doc.org",h=window.location.origin+"/oauth/authorize",E="pid.html",m="/1/resolve/pid",v="/1/pid-queue/search",S="/1/pid-queue/search-setup",_="/1/issue/create",A="/1/issue/update",T="/1/issue/retrieve",I="/1/issue/search",U="/1/issue/search-setup",x="/static/index.html",w="/static/view.html",D="/static/edit.html";i.d(t,"EMAIL",function(){return R}),i.d(t,"MISC",function(){return b}),i.d(t,"URLS",function(){return C});const R=r,b=n,C=s},,,,,function(e,t,i){"use strict";i.r(t);var r={};i.d(r,"OAuthCredentials",function(){return o}),i.d(r,"isAuthenticated",function(){return u}),i.d(r,"issue",function(){return d}),i.d(r,"hasChanged",function(){return c});var n=i(0),s=i(1),a=i(2);const o=Cookies.get("errata-oauth-credentials"),u=!1===_.isUndefined(o),d=new class{constructor(e){this.datasets=[],this.description=null,this.materials=[],this.project=null,this.severity="low",this.status="new",this.title=null,this.uid=s.getURLParam("uid")||s.generateUUID(),this.isNew=!s.getURLParam("uid"),this.urls=[],this.ext=new class{constructor(e){this._issue=e}get datasets(){return this._issue.datasets.join("\n")}get materials(){return this._issue.materials.join("\n")}}(this)}get fullTitle(){var e;return this.isNew?"New Issue":(e=this.project.toUpperCase(),e+=" - ",e+=this.title.slice(0,48),this.title.length>48&&(e+="..."),e)}decode(e){this.datasets=e.datasets,this.description=e.description,this.materials=e.materials,this.project=e.project,this.severity=e.severity,this.status=e.status,this.title=e.title,this.uid=e.uid,this.urls=e.urls}encode(){return JSON.stringify({datasets:this.datasets,description:this.description,materials:this.materials,project:this.project,severity:this.severity,status:this.status,title:this.title,uid:this.uid,urls:this.urls})}};let c=!1;n.on("field:change:aborted",e=>{d[e.id]=_.isArray(e.value)?[]:null}),n.on("field:change:verified",e=>{c=!0,d[e.id]=e.value}),validate.validators.presence.options={message:"Must enter a value."},validate.validators.materialsValidator=function(e){const t="Issue materials must be a list of valid image URLs (.jpg, .gif, .png, .tiff)";if(0===e.length)return t;const i=["jpg","gif","png","tiff"];return _.filter(e,e=>_.isObject(validate({material:e},{material:{url:!0}}))||!1===_.contains(i,_.last(e.split(".")))).length>0?t:void 0},validate.validators.datasetsValidator=function(e){if(0===e.length)return"Issue datasets must be a list of valid dataset identifiers";console.log("TODO: Check datasets prefixed with project code"),console.log("TODO: POST datasets to server for validation")};const l={project:{presence:!0,inclusion:{within:["cmip5","cmip6","cordex"],message:"Issue project is required."}},title:{presence:!0,length:{minimum:16,maximum:255,message:"Issue title is required & must be 16 to 255 characters."}},description:{presence:!0,length:{minimum:16,maximum:1023,message:"Issue description is required & must be 16 to 1023 characters."}},severity:{presence:!0},status:{presence:!0},materials:{materialsValidator:{}},datasets:{presence:!0,datasetsValidator:{}}};n.on("field:change",e=>{const t={},i={};t[e.id]=""===e.value?null:e.value,i[e.id]=l[e.id];const r=validate(t,i,{fullMessages:!1});r?(e.err=r[e.id][0],n.trigger("field:change:aborted",e)):n.trigger("field:change:verified",e)}),n.on("issue:save",e=>{n.trigger("issue:save:aborted")});var p=Backbone.View.extend({events:{"click img.esdoc-logo":()=>{s.openHomepage()},"click button.esdoc-support":()=>{s.openSupportEmail()},"click button.esdoc-errata-save":()=>{c?n.trigger("issue:save"):n.trigger("issue:save:unrequired")},"change #project, #title, #description, #severity, #status, #materials, #datasets":function(e){const t=$(e.target).attr("id");let i=$(e.target).val().trim();_.contains(["materials","datasets"],t)&&(i=_.filter(_.uniq(_.map(i.split(","),e=>e.trim())),e=>e.length>0)),n.trigger("field:change",{id:t,name:t,value:i})}},initialize:function(){n.on("field:change:aborted",this._onFieldChangeAborted,this),n.on("field:change:verified",this._onFieldChangeVerified,this)},render:function(){return s.renderTemplate("template-header",null,this),s.renderTemplate("template-issue",null,this),this},_onFieldChangeAborted:function(e){this.$("."+e.id).addClass("has-error"),this.$("#"+e.id+"ErrorMessage").text(e.err)},_onFieldChangeVerified:function(e){this.$("."+e.id).removeClass("has-error"),this.$("#"+e.id+"ErrorMessage").text("")}});n.on("setup:begin",()=>{var e,t;d.isNew?n.trigger("setup:complete"):(e=a.URLS.API_BASE_URL+a.URLS.RETRIEVE,t={uid:d.uid},$.get(e,t).done(e=>{setTimeout(()=>{n.trigger("setup:issueDownload",e)},a.MISC.UI_UPDATE_DELAY)}).fail(()=>{setTimeout(()=>{n.trigger("setup:issueDownload:error")},a.MISC.UI_UPDATE_DELAY)}))}),n.on("setup:issueDownload",e=>{d.decode(e.issue),n.trigger("setup:complete")}),n.on("setup:issueDownload:error",e=>{alert("TODO: handle issue download error")}),n.on("setup:begin",()=>{s.displayFeedback("Initializing errata editor")}),n.on("setup:complete",()=>{setTimeout(()=>{s.hideFeedback()},a.MISC.UI_UPDATE_DELAY)}),n.on("setup:setupDataDownload:error",()=>{alert("TODO: setup:setupDataDownload:error")}),n.on("issue:save:unrequired",()=>{s.displayInfoDialog("An error occurred whilst saving the issue details - please try again.  If the problem persists then contact support.")}),n.on("issue:save:post:starts",()=>{s.displayFeedback("Saving issue details")}),n.on("issue:save:post:success",()=>{s.hideFeedback(),s.displayInfoDialog("Issue details have been successfully saved.",()=>{n.trigger("issue:save:complete")})}),n.on("issue:save:post:error",()=>{s.hideFeedback(),s.displayInfoDialog("An error occurred whilst saving the issue details - please try again.  If the problem persists then contact support.")}),n.on("issue:save:verified",()=>{const e=CONSTANTS.URLS.API_BASE_URL+(d.isNew?CONSTANTS.URLS.ISSUE_CREATE:CONSTANTS.URLS.ISSUE_UPDATE);n.trigger("issue:save:post:starts"),$.ajax({method:"POST",url:e,data:d.encode(),dataType:"json",headers:{Authorization:o,"Content-Type":"application/json; charset=UTF-8","X-XSRFToken":Cookies.get("_xsrf")}}).always(e=>{200===e.status?n.trigger("issue:save:post:success"):n.trigger("issue:save:post:error",e)})}),$(document).ready(()=>{PYESSV.initialise(()=>{n.trigger("setup:begin")})}),n.on("setup:complete",()=>{var e;(e=new p).render(),$("body").append(e.el),n.trigger("ui:initialized")}),n.on("issue:save:complete",()=>{let e=a.URLS.VIEW_PAGE;e+="?uid=",e+=d.uid,s.openURL(e)}),window.APP=n,window.CONSTANTS=a,window.STATE=r,window.UTILS=s}]);