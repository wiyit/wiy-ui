import template from './icon.html';
import style from './icon.scss';
import { library, icon, config } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(fas, far, fab);

export default {
    template,
    style,
    data: {
        prefix: undefined,
        name: undefined,
    },
    methods: {
        getHtml() {
            const i = icon({
                prefix: this.prefix || this.attr('prefix'),
                iconName: this.name || this.attr('name'),
            }, {
                classes: [
                    ...[this.hasAttr('spin') ? 'spin' : undefined],
                ],
            });
            if (i) {
                const html = i.html[0];
                return html;
            }
        },
    },
};