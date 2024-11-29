import * as echarts from 'echarts';

export default {
    template: import('./chart.html'),
    style: import('./chart.scss'),
    data: {
        chart: undefined,
        option: {},
    },
    lifecycle: {
        mount() {
            const container = this.getElement('container');

            Object.defineProperty(this, 'chart', {
                writable: false,
                value: echarts.init(container),
            });

            this.observe(() => {
                return this.option;
            }, (result) => {
                this.chart.setOption(result);
            });

            new ResizeObserver(() => {
                this.chart.resize();
            }).observe(container);
        },
    },
};