import * as constants from './constants_.js';


// Opens the target url.
// @url     URL to be opened.
// @inTab   Flag indicating whether url will be opened in a new browser tab or not.
APP.utils.openURL = (url, inTab) => {
    if (inTab === true) {
        window.open(url);
    } else {
        window.location = url;
    }
};

// Opens the homepage.
APP.utils.openHomepage = () => {
    APP.utils.openURL(constants.URLS.HOME_PAGE, true);
};

// Opens the target email.
// @address         Target email address.
// @subject         Target email subject.
APP.utils.openEmail = (address, subject, message) => {
    var email = "mailto:{0}?subject={1}&body={2}";

    subject = subject || constants.EMAIL.SUBJECT;
    message = message || constants.EMAIL.MESSAGE;

    email = email.replace('{0}', address);
    email = email.replace('{1}', subject);
    email = email.replace('{2}', message);

    window.location.href = email;
};

// Opens module support email.
// @module         Module for which a support email is being sent.
APP.utils.openSupportEmail = () => {
    var subject;

    subject = "ES-DOC :: SUPPORT :: {0} (v{1})";
    subject = subject.replace("{0}", APP.NAME.toUpperCase());
    subject = subject.replace("{1}", APP.VERSION);
    APP.utils.openEmail(constants.EMAIL.SUPPORT, subject);
};

// Renders a view.
// @type          View type.
// @options       View options.
// @container     View container.
APP.utils.render = (types, options, container) => {
    var typeset, view, rendered = [];

    typeset = _.isArray(types) ? types : [types];
    _.each(typeset, function (ViewType) {
        view = new ViewType(options).render();
        rendered.push(view);
        if (!_.isUndefined(container)) {
            if (_.has(container, '$el')) {
                container.$el.append(view.$el);
            } else {
                container.append(view.$el);
            }
        }
    }, this);

    return typeset.length === 1 ? rendered[0] : rendered;
};

// Renders an html view and injects it into DOM.
// @template            View template.
// @data                View template data.
// @container           View container.
APP.utils.renderHTML = (template, data, container) => {
    var html = data ? template(data) : template();

    if (!_.isUndefined(container)) {
        if (_.has(container, '$el')) {
            container.$el.append(html);
        } else {
            container.append(html);
        }
    }
};

// Returns a rendered template.
// @templateID          View template ID.
// @templateData        View template data.
// @container           View container.
APP.utils.renderTemplate = (templateID, templateData, view) => {
    var template, html;

    if (!_.has(APP.templateCache, templateID)) {
        APP.templateCache[templateID] = _.template($('#' + templateID).html());
    }
    template = APP.templateCache[templateID];
    html = template(templateData);

    if (view && view.$el) {
        view.$el.append(html);
    } else if (view) {
        view.replaceWith(html);
    } else {
        return html;
    }
};

// Returns URL query param value.
// @name                URL query param name.
// @defaultValue        URL query param default value.
APP.utils.getURLParam = (name, defaultValue) => {
    var
        results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (!results) {
        return defaultValue;
    }
    return (results[1] || defaultValue).toUpperCase();
};

// Returns number of pages to be rendered.
APP.utils.getPageCount = function (row_count) {
    var pageSize = APP.state.paging.pageSize,
        pageCount = 0;

    if (row_count) {
        pageCount = parseInt(row_count / pageSize, 10);
        if (row_count / pageSize > pageCount) {
            pageCount += 1;
        }
    }

    return pageCount;
};

// Converts search results into pages for rendering.
APP.utils.getPages = (data) => {
    var pageSize = APP.state.paging.pageSize;

    return _.map(_.range(APP.utils.getPageCount(data.length)), function (id) {
        return {
            id: id + 1,
            data: this.slice(id * pageSize, ((id + 1) * pageSize) - 1)
        };
    }, data);
};

// Displays feedback modal.
APP.utils.displayFeedback = (text) => {
    $('#feedbackText').text(text + " ... please wait");
    $('.feedback-title').text(APP.FULLTITLE);
    $('.feedback-version').text("v" + APP.VERSION);
    $("#feedbackContainer").modal({
        backdrop: 'static',
        keyboard: false,
        show: true
    });
};

// Hides feedback modal.
APP.utils.hideFeedback = () => {
    $("#feedbackContainer").modal('hide');
};