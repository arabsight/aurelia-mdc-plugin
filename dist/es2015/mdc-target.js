var _dec, _dec2, _class;

import { autoInit } from 'material-components-web';
import { inject, customAttribute, DOM } from 'aurelia-framework';
import { MdcConfig, MDC_TARGET_ATTR } from './config';

export let MdcTarget = (_dec = inject(DOM.Element, MdcConfig), _dec2 = customAttribute(MDC_TARGET_ATTR), _dec(_class = _dec2(_class = class MdcTarget {
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
}) || _class) || _class);