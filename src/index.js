const components = {
    'wiy-breadcrumb': import('./breadcrumb/breadcrumb.js'),
    'wiy-checkbox': import('./checkbox/checkbox.js'),
    'wiy-dropdown': import('./dropdown/dropdown.js'),
    'wiy-icon': import('./icon/icon.js'),
    'wiy-image': import('./image/image.js'),
    'wiy-input': import('./input/input.js'),
    'wiy-menus': import('./menus/menus.js'),
    'wiy-radio': import('./radio/radio.js'),
    'wiy-select': import('./select/select.js'),
    'wiy-table': import('./table/table.js'),
    'wiy-textarea': import('./textarea/textarea.js'),
};

export default function (app) {
    Object.entries(components).forEach(([name, value]) => {
        app.registerComponent(name, value);
    });
};