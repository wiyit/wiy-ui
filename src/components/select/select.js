import template from './select.html';
import style from './select.scss';

export default {
    template,
    style,
    data: {
        options: [],
        data: undefined,
    },
    methods: {
        async getOptions() {
            this.actualOptions = await this.actual(this.options);
            return this.actualOptions;//返回响应式结果
        },
        onSelectChange(e) {
            const { options } = e.target;
            this.trigger('change', {
                data: this.data = options[options.selectedIndex].v,
            });
        },
    },
    lifecycle: {
        init() {
            this.trigger('datainit', {
                data: this.data,
            });
        },
        mount() {
            const select = this.getElement('select');
            this.observe(() => {
                return this.actualOptions.findIndex(o => o.value === this.data);
            }, ({ result }) => {
                select.value = result;
            });
        },
    },
};