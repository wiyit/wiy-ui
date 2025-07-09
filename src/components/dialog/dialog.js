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
        element.setAttribute('wiy:onmount', "this.show");
        element.setAttribute('wiy:onclose', "this.remove");
        element.innerHTML = options.content;

        this.newComponent({
            methods: {
                show() {
                    this.getComponent('dialog').showModal();
                },
                remove() {
                    this.getComponent('dialog').remove();
                }
            },
            lifecycle: {
                init() {
                    document.body.appendChild(element);
                    this.renderElement(element);
                }
            }
        });
    },
};