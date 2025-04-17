export default {
    template: import('./floater.html'),
    style: import('./floater.scss'),
    data: {
        stopped: false,
        visible: true,
    },
    methods: {
        move() {
            this.stopped = false;
        },
        stop() {
            this.stopped = true;
        },
        close() {
            this.visible = false;
        },
    },
    lifecycle: {
        mount() {
            let xPerStep = 1;
            let yPerStep = 1;

            const element = this.getElement();
            const inWindow = this.hasAttr('in-window');//是否需要限制在窗口范围内

            const step = (time) => {
                let parent = element.parentNode;
                while (parent && !(parent instanceof HTMLElement)) {
                    parent = parent.parentNode;
                }

                if (parent && !this.stopped) {
                    const left = element.offsetLeft;
                    const top = element.offsetTop;
                    const width = element.offsetWidth;
                    const height = element.offsetHeight;

                    const parentWidth = parent.offsetWidth;
                    const parentHeight = parent.offsetHeight;

                    let leftMin = 0;
                    let leftMax = parentWidth - width;
                    let topMin = 0;
                    let topMax = parentHeight - height;
                    if (inWindow) {
                        const parentClientTop = parent.getBoundingClientRect().top;
                        const parentClientLeft = parent.getBoundingClientRect().left;

                        const windowWidth = window.innerWidth;
                        const windowHeight = window.innerHeight;

                        leftMin = Math.max(-parentClientLeft, leftMin);
                        leftMax = Math.min(windowWidth - parentClientLeft - width, leftMax);
                        topMin = Math.max(-parentClientTop, topMin);
                        topMax = Math.min(windowHeight - parentClientTop - height, topMax);
                    }

                    const direction = [xPerStep, yPerStep];
                    if (left + direction[0] < leftMin) {
                        direction[0] = leftMin - left;
                        xPerStep = -xPerStep;
                    }
                    if (left + direction[0] > leftMax) {
                        direction[0] = leftMax - left;
                        xPerStep = -xPerStep;
                    }
                    if (top + direction[1] < topMin) {
                        direction[1] = topMin - top;
                        yPerStep = -yPerStep;
                    }
                    if (top + direction[1] > topMax) {
                        direction[1] = topMax - top;
                        yPerStep = -yPerStep;
                    }

                    element.style.left = `${left + direction[0]}px`;
                    element.style.top = `${top + direction[1]}px`;
                }

                requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        },
    },
};