'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mdcTarget = require('./mdc-target');

Object.keys(_mdcTarget).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _mdcTarget[key];
        }
    });
});
exports.configure = configure;

var _aureliaPal = require('aurelia-pal');

var _config = require('./config');

var pluginConfig = void 0;

function configure(config, callback) {
    pluginConfig = config.container.get(_config.MdcConfig);

    if (callback !== undefined && typeof callback === 'function') {
        callback(pluginConfig);
    }

    config.globalResources(_aureliaPal.PLATFORM.moduleName('./mdc-target'));

    if (pluginConfig.autoInitMode === true) {
        config.aurelia.resources.registerViewEngineHooks({
            beforeCompile: beforeViewCompiled
        });
    }
}

function beforeViewCompiled(content) {
    var elements = content.querySelectorAll(pluginConfig.mdcSelectors);
    if (elements.length === 0) return;

    for (var i = 0; i < elements.length; i++) {
        var item = elements.item(i);
        item.setAttribute(_config.MDC_TARGET_ATTR, '');
        item.setAttribute(_config.MDC_INIT_ATTR, pluginConfig.componentName(item));
    }
}