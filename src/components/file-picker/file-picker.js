export default {
    template: import('./file-picker.html'),
    style: import('./file-picker.scss'),
    data: {
        files: [],
        tips: undefined,
    },
    methods: {
        onButtonClick() {
            this.getElement('file').click();
        },
        onInputChange() {
            const element = this.getElement('file');
            if (element) {
                Array.from(element.files).forEach(file => {
                    this.files.push({
                        name: file.name,
                        getFile() {
                            return file;
                        },
                    });
                });
                element.value = '';//清空input中已选择的文件
            }
            this.trigger('change', {
            });
        },
        onDeleteClick(key) {
            this.files.splice(key, 1);
            this.trigger('change', {
            });
        },
        onFileClick(file) {
            this.trigger('fileclick', {
                file: file,
            });
        },
    },
    lifecycle: {
        init() {
            this.trigger('datainit', {
                files: this.files,
            });
        },
    },
};