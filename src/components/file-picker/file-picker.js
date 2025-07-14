import template from './file-picker.html';
import style from './file-picker.scss';

export default {
    template,
    style,
    data: {
        files: [],
        tips: undefined,
    },
    methods: {
        onButtonClick() {
            this.getElement('file').click();
        },
        onInputChange() {
            this.files = this.files || [];
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
                files: this.files,
            });
        },
        onDeleteClick(key) {
            this.files = this.files || [];
            this.files.splice(key, 1);
            this.trigger('change', {
                files: this.files,
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