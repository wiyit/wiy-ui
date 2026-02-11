import template from './editor.html';
import style from './editor.scss';
import tinymce from 'tinymce';
import 'tinymce/themes/silver';
import 'tinymce/models/dom';
import 'tinymce/icons/default';
import './assets/langs/zh-CN';//TODO 完善翻译
import editorContentStyle from './editor-content.scss';

import 'tinymce/plugins/wordcount';
import 'tinymce/plugins/link';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/image';
import 'tinymce/plugins/media';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/table';

export default {
    template,
    style,
    data() {
        return {
            editorId: Math.random(),
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
            tinymce.init({
                target: this.getElement(this.editorId),
                license_key: 'gpl',
                language: 'zh-CN',
                skin: false,
                content_css: false,
                content_style: editorContentStyle,
                resize: 'both',
                elementpath: false,
                promotion: false,
                plugins: [
                    'wordcount',
                    'link',
                    'autolink',
                    'image',
                    'media',
                    'lists',//TODO 显示按钮
                    'preview',
                    'table',
                ],
                //TODO 文件上传
                file_picker_callback: () => { },
                setup: (editor) => {
                    this.editor = this.raw(editor);
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
                },
            });
        },
        unmount() {
            this.editor?.destroy();
        }
    }
};