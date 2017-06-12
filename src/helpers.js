export let resolveAttachedPromise;

let _attachedPromise = new Promise(resolve => {
    resolveAttachedPromise = resolve;
});

export function ensureAttached() {
    return _attachedPromise;
}
