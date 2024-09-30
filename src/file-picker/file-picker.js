export default {
    template: import('./file-picker.html'),
    style: import('./file-picker.css'),
    data: {
        files: [],
    },
    methods: {
        onButtonClick() {
            this.getElement('file').click();
        },
        onInputChange() {
            Array.from(this.getElement('file').files).forEach(file => {
                this.files.push({
                    name: file.name,
                });
            });
        },
        onDeleteClick(key) {
            delete this.files[key];
        },
    },
};