import { PLATFORM } from 'aurelia-pal';
import { MdcConfig, MDC_TARGET_ATTR, MDC_INIT_ATTR } from './config';

export * from './mdc-target';

let pluginConfig;

export function configure(config, callback) {
    pluginConfig = config.container.get(MdcConfig);

    if (callback !== undefined && typeof callback === 'function') {
        callback(pluginConfig);
    }

    config.globalResources(PLATFORM.moduleName('./mdc-target'));

    config.aurelia.resources.registerViewEngineHooks({
        beforeCompile: beforeViewCompiled
    });
}

function beforeViewCompiled(content) {
    let elements = content.querySelectorAll(pluginConfig.mdcSelectors);
    if (elements.length === 0) return;

    for (let i = 0; i < elements.length; i++) {
        let item = elements.item(i);
        item.setAttribute(MDC_TARGET_ATTR, '');
        item.setAttribute(MDC_INIT_ATTR, pluginConfig.getComponentName(item));
    }
}