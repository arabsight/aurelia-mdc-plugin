"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var resolveAttachedPromise, _attachedPromise;

    function ensureAttached() {
        return _attachedPromise;
    }

    _export("ensureAttached", ensureAttached);

    return {
        setters: [],
        execute: function () {
            _export("resolveAttachedPromise", resolveAttachedPromise = void 0);

            _export("resolveAttachedPromise", resolveAttachedPromise);

            _attachedPromise = new Promise(function (resolve) {
                _export("resolveAttachedPromise", resolveAttachedPromise = resolve);
            });
        }
    };
});