const components = {
    'wiy-back-top': import('./back-top/back-top.js'),
    'wiy-badge': import('./badge/badge.js'),
    'wiy-breadcrumb': import('./breadcrumb/breadcrumb.js'),
    'wiy-button': import('./button/button.js'),
    'wiy-chart': import('./chart/chart.js'),
    'wiy-checkbox': import('./checkbox/checkbox.js'),
    'wiy-checkbox-group': import('./checkbox-group/checkbox-group.js'),
    'wiy-code': import('./code/code.js'),
    'wiy-dialog': import('./dialog/dialog.js'),
    'wiy-divider': import('./divider/divider.js'),
    'wiy-dropdown': import('./dropdown/dropdown.js'),
    'wiy-empty': import('./empty/empty.js'),
    'wiy-file-picker': import('./file-picker/file-picker.js'),
    'wiy-form': import('./form/form.js'),
    'wiy-icon': import('./icon/icon.js'),
    'wiy-image': import('./image/image.js'),
    'wiy-input': import('./input/input.js'),
    'wiy-link': import('./link/link.js'),
    'wiy-loading': import('./loading/loading.js'),
    'wiy-map': import('./map/map.js'),
    'wiy-menus': import('./menus/menus.js'),
    'wiy-message': import('./message/message.js'),
    'wiy-pagination': import('./pagination/pagination.js'),
    'wiy-popover': import('./popover/popover.js'),
    'wiy-pre': import('./pre/pre.js'),
    'wiy-radio': import('./radio/radio.js'),
    'wiy-radio-group': import('./radio-group/radio-group.js'),
    'wiy-rate': import('./rate/rate.js'),
    'wiy-select': import('./select/select.js'),
    'wiy-table': import('./table/table.js'),
    'wiy-tabs': import('./tabs/tabs.js'),
    'wiy-textarea': import('./textarea/textarea.js'),
    'wiy-tooltip': import('./tooltip/tooltip.js'),
};

export default {
    install(app) {
        Object.entries(components).forEach(([name, value]) => {
            app.registerComponent(name, value);
        });
    },
};