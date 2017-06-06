import { autoInit } from 'material-components-web';
import { inject, customAttribute, DOM } from 'aurelia-framework';
import { MdcConfig, MDC_TARGET_ATTR } from './config';

@inject(DOM.Element, MdcConfig)
@customAttribute(MDC_TARGET_ATTR)
export class MdcTarget {
    constructor(element, config) {
        this.element = element;
        this.config = config;
    }

    attached() {
        if (!this.config.mdcClasses.some(cls => this.element.classList.contains(cls))) {
            return;
        }

        autoInit(this.element.parentNode, () => {});
    }
}
