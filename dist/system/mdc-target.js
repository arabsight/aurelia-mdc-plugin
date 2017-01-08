'use strict';

System.register(['material-components-web', 'aurelia-framework', './config'], function (_export, _context) {
    "use strict";

    var mdc, inject, customAttribute, DOM, MdcConfig, MDC_TARGET_ATTR, _dec, _dec2, _class, MdcTarget;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_materialComponentsWeb) {
            mdc = _materialComponentsWeb;
        }, function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            customAttribute = _aureliaFramework.customAttribute;
            DOM = _aureliaFramework.DOM;
        }, function (_config) {
            MdcConfig = _config.MdcConfig;
            MDC_TARGET_ATTR = _config.MDC_TARGET_ATTR;
        }],
        execute: function () {
            _export('MdcTarget', MdcTarget = (_dec = inject(DOM.Element, MdcConfig), _dec2 = customAttribute(MDC_TARGET_ATTR), _dec(_class = _dec2(_class = function () {
                function MdcTarget(element, config) {
                    _classCallCheck(this, MdcTarget);

                    this.element = element;
                    this.config = config;
                }

                MdcTarget.prototype.attached = function attached() {
                    var _this = this;

                    if (!this.config.autoInitMode && !this.config.mdcClasses.some(function (cls) {
                        return _this.element.classList.contains(cls);
                    })) {
                        return;
                    }

                    mdc.autoInit(this.element.parentNode, function () {});
                };

                return MdcTarget;
            }()) || _class) || _class));

            _export('MdcTarget', MdcTarget);
        }
    };
});