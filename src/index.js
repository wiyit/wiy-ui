const components = {
    'wiy-back-top': import('./components/back-top/back-top.js'),
    'wiy-badge': import('./components/badge/badge.js'),
    'wiy-breadcrumb': import('./components/breadcrumb/breadcrumb.js'),
    'wiy-button': import('./components/button/button.js'),
    'wiy-chart': import('./components/chart/chart.js'),
    'wiy-checkbox': import('./components/checkbox/checkbox.js'),
    'wiy-checkbox-group': import('./components/checkbox-group/checkbox-group.js'),
    'wiy-code': import('./components/code/code.js'),
    'wiy-dialog': import('./components/dialog/dialog.js'),
    'wiy-divider': import('./components/divider/divider.js'),
    'wiy-dropdown': import('./components/dropdown/dropdown.js'),
    'wiy-ellipsis': import('./components/ellipsis/ellipsis.js'),
    'wiy-empty': import('./components/empty/empty.js'),
    'wiy-file-picker': import('./components/file-picker/file-picker.js'),
    'wiy-flex': import('./components/flex/flex.js'),
    'wiy-floater': import('./components/floater/floater.js'),
    'wiy-form': import('./components/form/form.js'),
    'wiy-frame': import('./components/frame/frame.js'),
    'wiy-icon': import('./components/icon/icon.js'),
    'wiy-image': import('./components/image/image.js'),
    'wiy-input': import('./components/input/input.js'),
    'wiy-link': import('./components/link/link.js'),
    'wiy-loading': import('./components/loading/loading.js'),
    'wiy-map': import('./components/map/map.js'),
    'wiy-menus': import('./components/menus/menus.js'),
    'wiy-message': import('./components/message/message.js'),
    'wiy-pagination': import('./components/pagination/pagination.js'),
    'wiy-popover': import('./components/popover/popover.js'),
    'wiy-pre': import('./components/pre/pre.js'),
    'wiy-radio': import('./components/radio/radio.js'),
    'wiy-radio-group': import('./components/radio-group/radio-group.js'),
    'wiy-rate': import('./components/rate/rate.js'),
    'wiy-select': import('./components/select/select.js'),
    'wiy-table': import('./components/table/table.js'),
    'wiy-tabs': import('./components/tabs/tabs.js'),
    'wiy-textarea': import('./components/textarea/textarea.js'),
    'wiy-tooltip': import('./components/tooltip/tooltip.js'),
    'wiy-video': import('./components/video/video.js'),
};

export default {
    async install(app) {
        for (let [componentName, component] of Object.entries(components)) {
            app.registerComponent(componentName, component);

            const methods = (await component).methods || {};
            for (let [methodName, method] of Object.entries(methods)) {
                app.registerMethod(methodName, method);
            }
        }
    },
};