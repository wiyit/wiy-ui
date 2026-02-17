import template from './editor.html';
import style from './editor.scss';
import tinymce from 'tinymce';
import 'tinymce/themes/silver';
import 'tinymce/models/dom';
import 'tinymce/icons/default';

export default {
    template,
    style,
    data() {
        return {
            editorId: Math.random(),
            editor: undefined,
            options: {},
            content: '',
        };
    },
    methods: {
    },
    lifecycle: {
        init() {
            this.trigger('datainit', {
                content: this.content,
            });
        },
        mount() {
            let {
                content_style,
                language = 'zh-CN',//TODO 完善翻译
                plugins = [
                    'wordcount',
                    'link',
                    'autolink',
                    'image',
                    'media',
                    'lists',//TODO 显示按钮
                    'preview',
                    'table',
                ],
                ...optherOptions
            } = this.options;

            Promise.all([
                content_style ?? import('./editor-content.scss').then(m => m.default),
                import(`./assets/langs/${language}`),
                Promise.all(plugins.map(plugin => import(`tinymce/plugins/${plugin}`))),
            ]).then(([content_style]) => {
                tinymce.init({
                    target: this.getElement(this.editorId),
                    license_key: 'gpl',
                    skin: false,
                    content_css: false,
                    resize: 'both',
                    elementpath: false,
                    promotion: false,
                    content_style,
                    language,
                    plugins,
                    ...optherOptions,
                }).then(([editor]) => {
                    Object.defineProperty(this, 'editor', {
                        writable: false,
                        value: this.raw(editor),
                    });

                    this.observe(() => {
                        return this.content;
                    }, ({ result }) => {
                        editor.setContent(result);
                    });

                    editor.on('change', e => {
                        this.trigger('change', {
                            content: this.content = editor.getContent(),
                        });
                    });
                });
            });
        },
        unmount() {
            this.editor?.destroy();
        }
    }
};