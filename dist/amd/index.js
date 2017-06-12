define(['exports', './mdc-target', './helpers', 'aurelia-pal', './config'], function (exports, _mdcTarget, _helpers, _aureliaPal, _config) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ensureAttached = undefined;
    Object.keys(_mdcTarget).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () {
                return _mdcTarget[key];
            }
        });
    });
    Object.defineProperty(exports, 'ensureAttached', {
        enumerable: true,
        get: function () {
            return _helpers.ensureAttached;
        }
    });
    exports.configure = configure;


    var pluginConfig = void 0;

    function configure(config, callback) {
        pluginConfig = config.container.get(_config.MdcConfig);

        if (callback !== undefined && typeof callback === 'function') {
            callback(pluginConfig);
        }

        config.globalResources(_aureliaPal.PLATFORM.moduleName('./mdc-target'));

        config.aurelia.resources.registerViewEngineHooks({
            beforeCompile: beforeViewCompiled
        });
    }

    function beforeViewCompiled(content) {
        var elements = content.querySelectorAll(pluginConfig.mdcSelectors);
        if (elements.length === 0) return;

        for (var i = 0; i < elements.length; i++) {
            var item = elements.item(i);
            var componentName = pluginConfig.getComponentName(item);
            item.setAttribute(_config.MDC_TARGET_ATTR, componentName);
            item.setAttribute(_config.MDC_INIT_ATTR, componentName);
        }
    }
});