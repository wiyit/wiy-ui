export default {
    template: import('./input.html'),
    style: import('./input.scss'),
    data: {
        text: '',
        showPassword: false,
    },
    methods: {
        onInputChange() {
            this.trigger('change', {
                text: this.text,
            });
        },
        onPasswordToggleClick() {
            const input = this.getElement('input');
            input.type = input.type === 'password' ? 'text' : 'password';
            this.showPassword = !this.showPassword;
        },
    },
    lifecycle: {
        init() {
            this.trigger('datainit', {
                text: this.text,
            });
        },
    },
};