"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ensureAttached = ensureAttached;
var resolveAttachedPromise = exports.resolveAttachedPromise = void 0;

var _attachedPromise = new Promise(function (resolve) {
    exports.resolveAttachedPromise = resolveAttachedPromise = resolve;
});

function ensureAttached() {
    return _attachedPromise;
}