export default {
    template: import('./dialog.html'),
    style: import('./dialog.scss'),
    data: {
        title: undefined,
    },
    methods: {
        onCloseClick() {
            this.close();
        },
        showModal() {
            const dialog = this.getElement('dialog');
            !dialog.open && dialog.showModal();
        },
        show() {
            const dialog = this.getElement('dialog');
            !dialog.open && dialog.show();
        },
        close() {
            const dialog = this.getElement('dialog');
            dialog.open && dialog.close();
        },
    },
    lifecycle: {
        beforeUnmount() {
            this.close();
        },
    },
};
export const methods = {
    showDialog(options) {
        const element = document.createElement('wiy-dialog');
        element.id = 'dialog';
        options.title && element.setAttribute('title', options.title);
        element.setAttribute('wiy:onmount', "show");
        element.setAttribute('wiy:onclose', "remove");
        element.innerHTML = options.content;
        document.body.appendChild(element);

        const component = this.newComponent({
            components: {
                'wiy-dialog': import('./dialog.js'),
            },
        });
        component.renderElement(element, [
            {
                show() {
                    component.getComponent('dialog').showModal();
                },
                remove() {
                    component.getComponent('dialog').remove();
                }
            }
        ]);
    },
};