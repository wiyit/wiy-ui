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