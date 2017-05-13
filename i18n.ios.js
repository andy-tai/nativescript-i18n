require('globals');
const application = require("tns-core-modules/application");
const utils = require("tns-core-modules/utils/utils");
const format = require('format');

const bundle = utils.ios.getter(NSBundle, NSBundle.mainBundle);

const L = function () {
    arguments[0] = bundle.localizedStringForKeyValueTable(arguments[0], '', null);
    return format.apply(this, arguments);
};

var applicationResources = application.getResources();
applicationResources.L = L;
application.setResources(applicationResources);
global.L = L;
