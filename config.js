System.config({
    defaultJSExtensions: true,
    transpiler: false,
    paths: {
        'github:*': 'jspm_packages/github/*',
        'npm:*': 'jspm_packages/npm/*'
    },

    map: {
        'aurelia-framework': 'npm:aurelia-framework@1.0.8',
        'aurelia-polyfills': 'npm:aurelia-polyfills@1.0.0',
        'npm:aurelia-binding@1.1.1': {
            'aurelia-logging': 'npm:aurelia-logging@1.2.0',
            'aurelia-metadata': 'npm:aurelia-metadata@1.0.3',
            'aurelia-pal': 'npm:aurelia-pal@1.0.0',
            'aurelia-task-queue': 'npm:aurelia-task-queue@1.1.0'
        },
        'npm:aurelia-dependency-injection@1.2.1': {
            'aurelia-metadata': 'npm:aurelia-metadata@1.0.3',
            'aurelia-pal': 'npm:aurelia-pal@1.0.0'
        },
        'npm:aurelia-framework@1.0.8': {
            'aurelia-binding': 'npm:aurelia-binding@1.1.1',
            'aurelia-dependency-injection': 'npm:aurelia-dependency-injection@1.2.1',
            'aurelia-loader': 'npm:aurelia-loader@1.0.0',
            'aurelia-logging': 'npm:aurelia-logging@1.2.0',
            'aurelia-metadata': 'npm:aurelia-metadata@1.0.3',
            'aurelia-pal': 'npm:aurelia-pal@1.0.0',
            'aurelia-path': 'npm:aurelia-path@1.1.1',
            'aurelia-task-queue': 'npm:aurelia-task-queue@1.1.0',
            'aurelia-templating': 'npm:aurelia-templating@1.1.4'
        },
        'npm:aurelia-loader@1.0.0': {
            'aurelia-metadata': 'npm:aurelia-metadata@1.0.3',
            'aurelia-path': 'npm:aurelia-path@1.1.1'
        },
        'npm:aurelia-metadata@1.0.3': {
            'aurelia-pal': 'npm:aurelia-pal@1.0.0'
        },
        'npm:aurelia-polyfills@1.0.0': {
            'aurelia-pal': 'npm:aurelia-pal@1.0.0'
        },
        'npm:aurelia-task-queue@1.1.0': {
            'aurelia-pal': 'npm:aurelia-pal@1.0.0'
        },
        'npm:aurelia-templating@1.1.4': {
            'aurelia-binding': 'npm:aurelia-binding@1.1.1',
            'aurelia-dependency-injection': 'npm:aurelia-dependency-injection@1.2.1',
            'aurelia-loader': 'npm:aurelia-loader@1.0.0',
            'aurelia-logging': 'npm:aurelia-logging@1.2.0',
            'aurelia-metadata': 'npm:aurelia-metadata@1.0.3',
            'aurelia-pal': 'npm:aurelia-pal@1.0.0',
            'aurelia-path': 'npm:aurelia-path@1.1.1',
            'aurelia-task-queue': 'npm:aurelia-task-queue@1.1.0'
        }
    }
});
