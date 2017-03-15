define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var MDC_TARGET_ATTR = exports.MDC_TARGET_ATTR = 'mdc-target';
    var MDC_INIT_ATTR = exports.MDC_INIT_ATTR = 'data-mdc-auto-init';

    var MDC_COMPONENTS = {
        'mdc-textfield': 'MDCTextfield',
        'mdc-ripple-surface': 'MDCRipple',
        'mdc-checkbox': 'MDCCheckbox',
        'mdc-temporary-drawer': 'MDCTemporaryDrawer',
        'mdc-icon-toggle': 'MDCIconToggle',
        'mdc-radio': 'MDCRadio',
        'mdc-snackbar': 'MDCSnackbar',
        'mdc-simple-menu': 'MDCSimpleMenu',
        'mdc-select': 'MDCSelect',
        'mdc-form-field': 'MDCFormField',
        'mdc-grid-list': 'MDCGridList'
    };

    var MdcConfig = exports.MdcConfig = function () {
        function MdcConfig() {
            _classCallCheck(this, MdcConfig);

            this.autoInitMode = true;
        }

        MdcConfig.prototype.autoInit = function autoInit() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            if (typeof value !== 'boolean') {
                throw Error('Invalid argument, expected a Boolean');
            }

            this.autoInitMode = value;
            return this;
        };

        MdcConfig.prototype.addComponents = function addComponents(items) {
            if ((typeof items === 'undefined' ? 'undefined' : _typeof(items)) !== 'object') {
                throw Error('Invalid argument, expected an Object');
            }

            MDC_COMPONENTS = Object.assign(MDC_COMPONENTS, items);
            return this;
        };

        MdcConfig.prototype.componentName = function componentName(item) {
            var component = void 0;

            this.mdcClasses.forEach(function (selector) {
                if (item.classList.contains(selector)) {
                    component = MDC_COMPONENTS[selector];
                }
            });

            return component;
        };

        _createClass(MdcConfig, [{
            key: 'mdcClasses',
            get: function get() {
                return Object.keys(MDC_COMPONENTS);
            }
        }, {
            key: 'mdcSelectors',
            get: function get() {
                return this.mdcClasses.map(function (selector) {
                    return '.' + selector;
                }).join();
            }
        }]);

        return MdcConfig;
    }();
});