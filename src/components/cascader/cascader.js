import template from './cascader.html';
import style from './cascader.scss';

export default {
    template,
    style,
    data: {
        prompts: [],
        options: [],
        data: [],
    },
    methods: {
        async getOptions() {
            this.actualOptions = await this.actual(this.options);
            return this.actualOptions;//返回响应式结果
        },
        getLevel() {
            return parseInt(this.attr('level')) || 0;
        },
        getSubOptions() {
            const level = this.getLevel();
            return this.actualOptions.find(o => o.value === this.data[level])?.sub;
        },
        onSelectChange() {
            const level = this.getLevel();
            this.data.length = level + 1;
            this.trigger('change', {
                data: this.data,
            });
        },
        onSubChange() {
            this.trigger('change', {
                data: this.data,
            });
        },
    },
    lifecycle: {
        init() {
            this.trigger('datainit', {
                data: this.data,
            });
        },
    },
};