'use strict';

System.register(['aurelia-pal', './config', './mdc-target', './helpers'], function (_export, _context) {
    "use strict";

    var PLATFORM, MdcConfig, MDC_TARGET_ATTR, MDC_INIT_ATTR, pluginConfig;
    function configure(config, callback) {
        pluginConfig = config.container.get(MdcConfig);

        if (callback !== undefined && typeof callback === 'function') {
            callback(pluginConfig);
        }

        config.globalResources(PLATFORM.moduleName('./mdc-target'));

        config.aurelia.resources.registerViewEngineHooks({
            beforeCompile: beforeViewCompiled
        });
    }

    _export('configure', configure);

    function beforeViewCompiled(content) {
        var elements = content.querySelectorAll(pluginConfig.mdcSelectors);
        if (elements.length === 0) return;

        for (var i = 0; i < elements.length; i++) {
            var item = elements.item(i);
            var componentName = pluginConfig.getComponentName(item);
            item.setAttribute(MDC_TARGET_ATTR, componentName);
            item.setAttribute(MDC_INIT_ATTR, componentName);
        }
    }
    return {
        setters: [function (_aureliaPal) {
            PLATFORM = _aureliaPal.PLATFORM;
        }, function (_config) {
            MdcConfig = _config.MdcConfig;
            MDC_TARGET_ATTR = _config.MDC_TARGET_ATTR;
            MDC_INIT_ATTR = _config.MDC_INIT_ATTR;
        }, function (_mdcTarget) {
            var _exportObj = {};

            for (var _key in _mdcTarget) {
                if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _mdcTarget[_key];
            }

            _export(_exportObj);
        }, function (_helpers) {
            var _exportObj2 = {};
            _exportObj2.ensureAttached = _helpers.ensureAttached;

            _export(_exportObj2);
        }],
        execute: function () {
            pluginConfig = void 0;
        }
    };
});