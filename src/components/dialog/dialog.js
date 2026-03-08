import template from './dialog.html';
import style from './dialog.scss';

export default {
    template,
    style,
    data: {
        title: undefined,
        closeOnClickOutside: false,
    },
    methods: {
        async showModal() {
            const dialog = this.getElement('dialog');
            if (!dialog.open) {
                dialog.showModal();
                this.trigger('show');
            }
            return new Promise((resolve) => {
                const handler = e => {
                    this.off('close', handler);
                    resolve(e.data);
                };
                this.on('close', handler);
            });
        },
        show() {
            const dialog = this.getElement('dialog');
            if (!dialog.open) {
                dialog.show();
                this.trigger('show');
            }
        },
        close(data) {
            const dialog = this.getElement('dialog');
            if (dialog.open) {
                dialog.close();
                this.trigger('close', data);
            }
        },
        onDialogMousedown(e) {
            if (e.button === 0 && this.closeOnClickOutside) {
                const dialogRect = this.getElement('dialog')?.getBoundingClientRect();
                if (dialogRect) {
                    if (e.clientX < dialogRect.left ||
                        e.clientX > dialogRect.right ||
                        e.clientY < dialogRect.top ||
                        e.clientY > dialogRect.bottom) {
                        this.close();
                    }
                }
            }
        }
    },
    lifecycle: {
        beforeUnmount() {
            this.close();
        },
    },
};
export const methods = {
    showDialog(options) {
        return new Promise((resolve) => {
            this.newComponent({
                data: {
                    dialogData: {
                        title: options.title,
                        closeOnClickOutside: options.closeOnClickOutside,
                    },
                },
                methods: {
                    onDialogInit(e) {
                        resolve(e.target);
                    },
                    onDialogMount(e) {
                        e.target.showModal();
                    },
                    onDialogClose(e) {
                        e.target.remove();
                    },
                },
                lifecycle: {
                    init() {
                        const element = document.createElement('wiy-dialog');
                        options.position && element.setAttribute('position', options.position);
                        element.setAttribute('wiy:data', 'this.dialogData');
                        element.setAttribute('wiy:oninit', "this.onDialogInit")
                        element.setAttribute('wiy:onmount', "this.onDialogMount");
                        element.setAttribute('wiy:onclose', "this.onDialogClose");
                        element.innerHTML = options.content;
                        document.body.appendChild(element);
                        this.renderElement(element, [
                            this.proxy(options.contentData ?? {}),
                        ]);
                    }
                }
            });
        });
    }
};