// Module imports.
import * as APP         from  '../shared/application.js';
import Issue from  './model.js';

// OAuth credentials.
export const OAuthCredentials = Cookies.get('errata-oauth-credentials');

// Flag indicating whether user is authenticated or not.
export const isAuthenticated = _.isUndefined(OAuthCredentials) === false;

// Issue.
export const issue = new Issue();

// Event handler: field:change:aborted.
APP.on("field:change:aborted", (field) => {
    issue[field.id] = _.isArray(field.value) ? [] : null;
});

// Event handler: field:change:verified.
APP.on("field:change:verified", (field) => {
    issue[field.id] = field.value;
});

// Event handler: issue:save.
APP.on("issue:save:start", () => {
    if (issue.hasChanged) {
        APP.trigger("issue:save:post");
    } else {
        APP.trigger("issue:save:abort");
    }
});
