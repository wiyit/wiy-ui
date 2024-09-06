import { library, icon, config } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(fas, far, fab);

export default {
    template: import('./icon.html'),
    style: import('./icon.css'),
    methods: {
        getHtml() {
            const i = icon({
                prefix: this.attr('prefix'),
                iconName: this.attr('name'),
            });
            if (i) {
                const html = i.html[0];
                return html;
            }
        },
    },
};