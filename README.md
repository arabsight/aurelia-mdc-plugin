## aurelia-mdc-plugin

[![NPM](https://nodei.co/npm/aurelia-mdc-plugin.png?compact=true)](https://nodei.co/npm/aurelia-mdc-plugin/)

## Aurelia CLI:

- Install:

```bash
npm i -S material-components-web
npm i -S aurelia-mdc-plugin
```

- Bundle:

add mdc & plugin to one of your bundle's dependencies in *aurelia.json*.

```json
{
    "name": "material-components-web",
    "path": "../node_modules/material-components-web/dist",
    "main": "material-components-web",
    "resources": [
        "material-components-web.css"
    ]
},
{
    "name": "aurelia-mdc-plugin",
    "path": "../node_modules/aurelia-mdc-plugin/dist/amd",
    "main": "index"
}
```

- Register the plugin:

```js
export function configure(aurelia) {
    ...
    aurelia.use.plugin('aurelia-mdc-plugin');
    ...
}
```

- import the css:

```html
<require from="material-components-web/material-components-web.css"></require>
```

- Use it!

```html
<button class="mdc-button
               mdc-button--raised
               mdc-button--primary
               mdc-ripple-surface">
    Print Greeting
</button>
```

The plugin automaticaly adds *data-mdc-auto-init="MDCRipple"* to the button above and initializes it, so you do not have to add it to any of the components available.
