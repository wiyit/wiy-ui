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

            const update = () => {
                const width = container.clientWidth;
                const height = container.clientHeight;

                if (this.chart) {//有图表
                    if (this.chart.isDisposed()) {//图表被销毁
                        return;
                    }
                    if (width != this.chart.getWidth() || height != this.chart.getHeight()) {//图表大小改变，则重置大小
                        this.chart.resize();
                    }
                } else {//没有图表
                    if (width > 0 && height > 0) {//图表变为可见，则初始化图表
                        Object.defineProperty(this, 'chart', {
                            writable: false,
                            value: echarts.init(container, this.attr('theme')),
                        });

                        this.chart.on('rendered', () => {
                            this.trigger('rendered');
                        });
                        this.chart.on('selectchanged', (e) => {
                            this.trigger('selectchanged', {
                                selected: e.selected,
                            }, e);
                        });

                        this.observe(() => {
                            return this.option;
                        }, (result) => {
                            this.chart.setOption(result);
                        });
                    }
                }
            };

            new ResizeObserver(() => {
                requestAnimationFrame(update);
            }).observe(container);
        },
        destory() {
            this.chart && this.chart.dispose();
        },
    },
};

export const methods = {
    registerChartTheme(name, theme) {
        echarts.registerTheme(name, theme);
    },
    registerChartTransform(type, transform) {
        echarts.registerTransform({
            type,
            transform,
        });
    },
};