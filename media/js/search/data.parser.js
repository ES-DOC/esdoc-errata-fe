// --------------------------------------------------------
// search/search.data.parser.js - Parses search data returned from web-service.
// --------------------------------------------------------
(function (APP, _) {
    // ECMAScript 5 Strict Mode
    "use strict";

    var
        // Parses data returned from search web-service endpoint.
        doParse = function (eventType, data) {
            // Set filter related helper attributes.
            _.each(data.results, function (row) {
                _.each(_.values(APP.state.filters), function (f) {
                    row['_' + f.key] = f.data.set[row[f.key]];
                });
                row._institute = row.institute.toUpperCase();
            });

            // Set human readable title.
            _.each(data.results, function (row) {
                row._title = (row.title || '--').trim();
                if (row.title.length > 53) {
                    row._title = row.title.slice(0, 53) + " ...";
                }
            });

            // Trigger application event.
            APP.trigger(eventType, data);
        };

    // Event handler: setup:initialSearchDataDownload.
    APP.on("setup:initialSearchDataDownload", function (data) {
        doParse("setup:initialSearchDataParsed", data);
    });

    // Event handler: search:dataDownload.
    APP.on("search:dataDownload", function (data) {
        doParse("search:dataParsed", data);
    });

    // Event handler: setup:setupDataDownload.
    APP.on("setup:setupDataDownload", function (data) {
        _.each(APP.state.filters, function (f) {
            // Inject global filter.
            if (f.hasGlobal) {
                data[f.key].unshift({
                    key: "*",
                    label: "*"
                });
            }

            // Sort filter data.
            data[f.key] = _.sortBy(data[f.key], 'label');
        });

        // Fire event.
        APP.trigger("setup:setupDataParsed", data);
    });

}(
    this.APP,
    this._
));
