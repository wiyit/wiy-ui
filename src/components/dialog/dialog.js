import template from './dialog.html';
import style from './dialog.scss';

export default {
    template,
    style,
    data: {
        title: undefined,
    },
    methods: {
        onCloseClick() {
            this.close();
        },
        async showModal() {
            const dialog = this.getElement('dialog');
            !dialog.open && dialog.showModal();
            return new Promise((resolve) => {
                const handler = e => {
                    this.off('close', handler);
                    resolve(e.data);
                };
                this.on('close', handler);
            });
        },
        show() {
            const dialog = this.getElement('dialog');
            !dialog.open && dialog.show();
        },
        close(data) {
            const dialog = this.getElement('dialog');
            dialog.open && dialog.close();
            this.trigger('close', data);
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