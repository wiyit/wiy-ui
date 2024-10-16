export default {
    template: import('./dialog.html'),
    style: import('./dialog.css'),
    data: {
        title: undefined,
    },
    methods: {
        onCloseClick() {
            this.close();
        },
        showModal() {
            const dialog = this.getElement('dialog');
            dialog.showModal();
        },
        show() {
            const dialog = this.getElement('dialog');
            dialog.show();
        },
        close() {
            const dialog = this.getElement('dialog');
            dialog.close();
        },
    },
};