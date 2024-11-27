import * as echarts from 'echarts';

export default {
    template: import('./chart.html'),
    style: import('./chart.scss'),
    data: {
        option: {},
    },
    lifecycle: {
        mount() {
            const chart = echarts.init(this.getElement('container'));
            chart.setOption(this.option);
        },
    },
};