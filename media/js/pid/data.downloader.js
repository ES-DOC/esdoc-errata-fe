// --------------------------------------------------------
// search/search.data.downloader.js - Calls web-service search endpoint.
// --------------------------------------------------------
(function (APP, _, $) {

    // ECMAScript 5 Strict Mode
    "use strict";

    // Event handler: search initiated from ui.
    APP.on("ui:search", function () {
        var url, params;

        // Trigger event.
        APP.trigger("search:begin");

        // Set web-service endpoint url + params.
        url = APP.defaults.apiBaseURL + APP.constants.URLS.PID_RESOLVE;
        params = {
            pids: APP.state.pids.join(",")
        };

        // Invoke web-service endpoint.
        APP.trigger("search:dataDownloading");
        $.get(url, params)
            .done(function (data) {
                setTimeout(function () {
                    APP.trigger("search:dataDownload", data);
                }, APP.constants.uiUpdateDelay);
            })
            .fail(function (data) {
                setTimeout(function () {
                    APP.trigger("search:dataDownload:error", data);
                }, APP.constants.uiUpdateDelay);
            });
    });

}(
    this.APP,
    this._,
    this.$
));