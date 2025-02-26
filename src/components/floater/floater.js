export default {
    template: import('./floater.html'),
    style: import('./floater.scss'),
    data: {
        stopped: true,
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


                    let newLeft = left + xPerStep;
                    if (newLeft < 0 || newLeft + width > parentWidth) {
                        xPerStep = -xPerStep;
                        newLeft = Math.min(left + xPerStep, parentWidth - width);
                    }

                    let newTop = top + yPerStep;
                    if (newTop < 0 || newTop + height > parentHeight) {
                        yPerStep = -yPerStep;
                        newTop = Math.min(top + yPerStep, parentHeight - height);
                    }

                    element.style.left = `${newLeft}px`;
                    element.style.top = `${newTop}px`;
                }

                requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        },
    },
};