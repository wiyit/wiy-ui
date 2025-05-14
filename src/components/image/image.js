export default {
    template: import('./image.html'),
    style: import('./image.scss'),
    data: {
        src: undefined,
        srcList: [],
        current: undefined,
    },
    methods: {
        getCurrentPreviewSrc() {
            this.current = Math.min(Math.max(this.current || this.srcList.indexOf(this.src), 0), this.srcList.length - 1);
            return this.srcList[this.current];
        },
        closePreview(e) {
            e && e.stopPropagation();
            const preview = this.getElement('preview');
            preview && preview.open && preview.close();
        },
    },
    lifecycle: {
        mount() {
            const element = this.getElement();
            element.addEventListener('click', () => {
                const preview = this.getElement('preview');
                preview && !preview.open && preview.showModal();
            });
        },
        beforeUnmount() {
            this.closePreview();
        },
    },
};