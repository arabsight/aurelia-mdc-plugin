'use strict';

System.register(['./config', './mdc-target'], function (_export, _context) {
    "use strict";

    var MdcConfig, MDC_TARGET_ATTR, MDC_INIT_ATTR, pluginConfig;
    function configure(config, callback) {
        pluginConfig = config.container.get(MdcConfig);

        if (callback !== undefined && typeof callback === 'function') {
            callback(pluginConfig);
        }

        config.globalResources('./mdc-target');

        if (pluginConfig.autoInitMode === true) {
            config.aurelia.resources.registerViewEngineHooks({
                beforeCompile: beforeViewCompiled
            });
        }
    }

    _export('configure', configure);

    function beforeViewCompiled(content) {
        var elements = content.querySelectorAll(pluginConfig.mdcSelectors);
        if (elements.length === 0) return;

        for (var i = 0; i < elements.length; i++) {
            var item = elements.item(i);
            item.setAttribute(MDC_TARGET_ATTR, '');
            item.setAttribute(MDC_INIT_ATTR, pluginConfig.componentName(item));
        }
    }
    return {
        setters: [function (_config) {
            MdcConfig = _config.MdcConfig;
            MDC_TARGET_ATTR = _config.MDC_TARGET_ATTR;
            MDC_INIT_ATTR = _config.MDC_INIT_ATTR;
        }, function (_mdcTarget) {
            var _exportObj = {};

            for (var _key in _mdcTarget) {
                if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _mdcTarget[_key];
            }

            _export(_exportObj);
        }],
        execute: function () {
            pluginConfig = void 0;
        }
    };
});