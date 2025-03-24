export default {
    template: import('./link.html'),
    style: import('./link.scss'),
    methods: {
        onClick(e) {
            const href = this.attr('href') || '';
            const target = this.attr('target') || '_self';
            if (href.startsWith('http://') || href.startsWith('https://')) {
                return;
            }
            if (target != '_self') {
                return;
            }

            const router = this.getApp().getRouter();
            if (router.isInternalLink(href)) {//在路由范围内
                e.preventDefault();
                router.go(router.toRelativePath(href), undefined, false);
            }
        },
    },
};