import template from './code.html';
import style from './code.scss';
import { Compartment, EditorState } from '@codemirror/state';
import { EditorView, keymap, lineNumbers } from '@codemirror/view';
import { indentWithTab } from '@codemirror/commands';
import { languages as oldLanguages } from '@codemirror/language-data';
import { defaultHighlightStyle, foldGutter, LanguageDescription, syntaxHighlighting } from '@codemirror/language';
import { basicSetup } from 'codemirror';

const languages = oldLanguages.filter(desc => {
    return desc.name.toLowerCase() != 'markdown';
}).concat(LanguageDescription.of({//支持markdown嵌套
    name: "Markdown",
    extensions: ["md", "markdown", "mkd"],
    load() {
        return import('@codemirror/lang-markdown').then(m => m.markdown({ codeLanguages: languages }));
    }
}));

export default {
    template,
    style,
    data: {
        code: '',
        theme: undefined,
    },
    lifecycle: {
        mount() {
            const languageCompartment = new Compartment();
            const themeCompartment = new Compartment();

            let extensions = [
                languageCompartment.of([]),
                themeCompartment.of([]),
                EditorView.lineWrapping,
                EditorView.theme({
                    '&': {
                        width: '100%',
                        height: '100%',
                        borderRadius: '3px',
                        border: '1px solid var(--wiy-code-border-color)',
                        backgroundColor: 'var(--wiy-code-color)',
                        overflow: 'hidden',
                    },
                    '.cm-scroller': {
                        overflow: 'auto',
                        fontFamily: 'inherit',
                    },
                    '.cm-gutters': {
                        userSelect: 'none',
                    },
                }),
            ];
            if (this.hasAttr('editable')) {
                extensions = [
                    ...extensions,
                    basicSetup,
                    keymap.of([
                        indentWithTab,
                    ]),
                    EditorView.theme({
                        '&:hover': {
                            borderColor: 'var(--wiy-code-border-color-hover)',
                        },
                        '&.cm-focused': {
                            outline: 'none',
                            borderColor: 'var(--wiy-code-border-color-focus)',
                            boxShadow: 'var(--wiy-code-focus-shadow)',
                        },
                    }),
                ];
            } else {
                extensions = [
                    ...extensions,
                    lineNumbers(),
                    foldGutter(),
                    syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
                    EditorView.editable.of(false),
                ];
            }

            const state = EditorState.create({
                doc: this.code,
                extensions,
            });
            const view = new EditorView({
                state,
                parent: this.getElement('inner-container'),
            });

            const lang = this.attr('lang');
            if (lang) {
                LanguageDescription.matchLanguageName(languages, lang).load().then(languageSupport => {
                    view.dispatch({
                        effects: [
                            languageCompartment.reconfigure(languageSupport),
                        ],
                    });
                });
            }

            this.observe(() => {
                return this.theme;
            }, ({ result }) => {
                view.dispatch({
                    effects: [
                        themeCompartment.reconfigure(result || []),
                    ],
                });
            });
        },
    },
};