'use strict';

System.register(['aurelia-pal', 'material-components-web', 'aurelia-templating', 'aurelia-dependency-injection', './config'], function (_export, _context) {
    "use strict";

    var DOM, autoInit, customAttribute, inject, MdcConfig, MDC_TARGET_ATTR, _dec, _dec2, _class, MdcTarget;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaPal) {
            DOM = _aureliaPal.DOM;
        }, function (_materialComponentsWeb) {
            autoInit = _materialComponentsWeb.autoInit;
        }, function (_aureliaTemplating) {
            customAttribute = _aureliaTemplating.customAttribute;
        }, function (_aureliaDependencyInjection) {
            inject = _aureliaDependencyInjection.inject;
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

                    var hasMdcElements = this.config.mdcClasses.some(function (cls) {
                        return _this.element.classList.contains(cls);
                    });

                    if (!hasMdcElements) return;

                    autoInit(this.element.parentNode, function () {});
                };

                return MdcTarget;
            }()) || _class) || _class));

            _export('MdcTarget', MdcTarget);
        }
    };
});