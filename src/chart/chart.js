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

            new ResizeObserver(() => {
                if (this.chart) {
                    this.chart.resize();
                    return;
                }

                if (container.clientWidth && container.clientHeight) {
                    Object.defineProperty(this, 'chart', {
                        writable: false,
                        value: echarts.init(container, this.attr('theme')),
                    });

                    this.observe(() => {
                        return this.option;
                    }, (result) => {
                        this.chart.setOption(result);
                    });
                }
            }).observe(container);
        },
    },
};
export const methods = {
    registerChartTheme(name, theme) {
        echarts.registerTheme(name, theme);
    },
};