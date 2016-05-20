// --------------------------------------------------------
// search/state._.js - search state.
// --------------------------------------------------------
(function (APP, _, cookies) {

    // ECMAScript 5 Strict Mode
    "use strict";

    // Declare application state.
    APP.state = {
        APP: APP,

        issue: undefined,

        issueID: APP.utils.getURLParam("uid")
    };

}(
    this.APP,
    this._,
    this.Cookies
));