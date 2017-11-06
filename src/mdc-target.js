import { DOM } from 'aurelia-pal';
import { autoInit } from 'material-components-web';
import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { MdcConfig, MDC_TARGET_ATTR } from './config';

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

        autoInit(this.element.parentNode, () => { });
    }
}
