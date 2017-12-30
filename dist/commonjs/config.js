'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MDC_TARGET_ATTR = exports.MDC_TARGET_ATTR = 'mdc-target';
var MDC_INIT_ATTR = exports.MDC_INIT_ATTR = 'data-mdc-auto-init';

var MDC_COMPONENTS = {
    'mdc-checkbox': 'MDCCheckbox',
    'mdc-dialog': 'MDCDialog',
    'mdc-persistent-drawer': 'MDCPersistentDrawer',
    'mdc-temporary-drawer': 'MDCTemporaryDrawer',
    'mdc-form-field': 'MDCFormField',
    'mdc-ripple-surface': 'MDCRipple',
    'mdc-grid-list': 'MDCGridList',
    'mdc-icon-toggle': 'MDCIconToggle',
    'mdc-linear-progress': 'MDCLinearProgress',
    'mdc-radio': 'MDCRadio',
    'mdc-snackbar': 'MDCSnackbar',
    'mdc-tab-bar': 'MDCTabBar',
    'mdc-text-field': 'MDCTextfield',
    'mdc-simple-menu': 'MDCSimpleMenu',
    'mdc-select': 'MDCSelect',
    'mdc-slider': 'MDCSlider',
    'mdc-toolbar': 'MDCToolbar'
};

var MdcConfig = exports.MdcConfig = function () {
    function MdcConfig() {
        _classCallCheck(this, MdcConfig);
    }

    MdcConfig.prototype.addComponents = function addComponents(items) {
        if ((typeof items === 'undefined' ? 'undefined' : _typeof(items)) !== 'object') {
            throw Error('Invalid argument, expected an Object');
        }

        MDC_COMPONENTS = Object.assign(MDC_COMPONENTS, items);
        return this;
    };

    MdcConfig.prototype.getComponentName = function getComponentName(item) {
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