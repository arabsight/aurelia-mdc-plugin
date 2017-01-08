export const MDC_TARGET_ATTR = 'mdc-target';
export const MDC_INIT_ATTR = 'data-mdc-auto-init';

let MDC_COMPONENTS = {
    'mdc-textfield': 'MDCTextfield',
    'mdc-ripple-surface': 'MDCRipple',
    'mdc-checkbox': 'MDCCheckbox',
    'mdc-temporary-drawer': 'MDCTemporaryDrawer',
    'mdc-icon-toggle': 'MDCIconToggle',
    'mdc-radio': 'MDCRadio',
    'mdc-snackbar': 'MDCSnackbar',
    'mdc-simple-menu': 'MDCSimpleMenu',
    'mdc-select': 'MDCSelect'
};

export class MdcConfig {
    constructor() {
        this.autoInitMode = true;
    }

    autoInit(value = true) {
        if (typeof value !== 'boolean') {
            throw Error('Invalid argument, expected a Boolean');
        }

        this.autoInitMode = value;
        return this;
    }

    addComponents(items) {
        if (typeof items !== 'object') {
            throw Error('Invalid argument, expected an Object');
        }

        MDC_COMPONENTS = Object.assign(MDC_COMPONENTS, items);
        return this;
    }

    get mdcClasses() {
        return Object.keys(MDC_COMPONENTS);
    }

    get mdcSelectors() {
        return this.mdcClasses.map(selector => `.${selector}`).join();
    }

    componentName(item) {
        let component;

        this.mdcClasses.forEach(selector => {
            if (item.classList.contains(selector)) {
                component = MDC_COMPONENTS[selector];
            }
        });

        return component;
    }
}
