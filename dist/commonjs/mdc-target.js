'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MdcTarget = undefined;

var _dec, _dec2, _class;

var _materialComponentsWeb = require('material-components-web');

var mdc = _interopRequireWildcard(_materialComponentsWeb);

var _aureliaFramework = require('aurelia-framework');

var _config = require('./config');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MdcTarget = exports.MdcTarget = (_dec = (0, _aureliaFramework.inject)(_aureliaFramework.DOM.Element, _config.MdcConfig), _dec2 = (0, _aureliaFramework.customAttribute)(_config.MDC_TARGET_ATTR), _dec(_class = _dec2(_class = function () {
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
}()) || _class) || _class);