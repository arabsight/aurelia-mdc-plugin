import { autoInit } from 'material-components-web';
import { inject, customAttribute, DOM } from 'aurelia-framework';
import { MdcConfig, MDC_TARGET_ATTR } from './config';
import { resolveAttachedPromise } from './helpers';

@inject(DOM.Element, MdcConfig)
@customAttribute(MDC_TARGET_ATTR)
export class MdcTarget {
    constructor(element, config) {
        this.element = element;
        this.config = config;
    }

    attached() {
        const hasMdcElements = this.config.mdcClasses.some(cls => {
            return this.element.classList.contains(cls);
        });

        if (!hasMdcElements) return;

        autoInit(this.element.parentNode, () => {});

        resolveAttachedPromise();
    }
}
