import template from './file-picker.html';
import style from './file-picker.scss';

export default {
    template,
    style,
    data: {
        files: [],
        tips: undefined,
        directory: false,
    },
    methods: {
        getStatusIcon(file) {
            switch (file.status) {
                case 'uploading':
                    return 'circle-notch';
                case 'success':
                    return 'circle-check';
                case 'error':
                    return 'circle-exclamation';
            }
        },
        getStatusTheme(file) {
            switch (file.status) {
                case 'uploading':
                    return 'info';
                case 'success':
                    return 'success';
                case 'error':
                    return 'error';
            }
        },
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
                        path: file.webkitRelativePath,
                        size: file.size,
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
        onDeleteClick(e, index) {
            e.stopPropagation();
            this.files = this.files || [];
            this.files.splice(index, 1);
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