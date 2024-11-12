export default {
    template: import('./message.html'),
    style: import('./message.scss'),
    methods: {
        getIcon() {
            switch (this.attr('theme') || 'info') {
                case 'info':
                    return 'circle-info';
                case 'success':
                    return 'circle-check';
                case 'warning':
                    return 'circle-exclamation';
                case 'error':
                    return 'circle-xmark';
                case 'question':
                    return 'circle-question';
                case 'loading':
                    return 'spinner';
                default:
                    return 'circle-info';
            }
        },
    },
};