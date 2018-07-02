export default [
   
    {
        "path": "/cms",
        "children": [
            {
                "path": "article",
                "children": [
                    {
                        "path": "article/form",
                        "component": r => require.ensure([], () => r(require('./cms/article/article/form.vue')), 'cms')
                    },
                    {
                        "path": "article",
                        "component": r => require.ensure([], () => r(require('./cms/article/article/index.vue')), 'cms')
                    },
                    {
                        "path": "link/form",
                        "component": r => require.ensure([], () => r(require('./cms/article/link/form.vue')), 'cms')
                    },
                    {
                        "path": "link",
                        "component": r => require.ensure([], () => r(require('./cms/article/link/index.vue')), 'cms')
                    },
                    {
                        "path": "pages",
                        "component": r => require.ensure([], () => r(require('./cms/article/pages/index.vue')), 'cms')
                    }
                ],
                "component": r => require.ensure([], () => r(require('./cms/article/index.vue')), 'cms')
            },
            {
                "path": "category",
                "children": [
                    {
                        "path": "form",
                        "component": r => require.ensure([], () => r(require('./cms/category/form.vue')), 'cms')
                    },
                    {
                        "path": "list",
                        "component": r => require.ensure([], () => r(require('./cms/category/list.vue')), 'cms')
                    }
                ],
                "component": r => require.ensure([], () => r(require('./cms/category/index.vue')), 'cms')
            },
            {
                "path": "comment",
                "children": [
                    {
                        "path": "form",
                        "component": r => require.ensure([], () => r(require('./cms/comment/form.vue')), 'cms')
                    },
                    {
                        "path": "list",
                        "component": r => require.ensure([], () => r(require('./cms/comment/list.vue')), 'cms')
                    }
                ],
                "component": r => require.ensure([], () => r(require('./cms/comment/index.vue')), 'cms')
            },
            {
                "path": "guestbook",
                "children": [
                    {
                        "path": "form",
                        "component": r => require.ensure([], () => r(require('./cms/guestbook/form.vue')), 'cms')
                    },
                    {
                        "path": "list",
                        "component": r => require.ensure([], () => r(require('./cms/guestbook/list.vue')), 'cms')
                    }
                ],
                "component": r => require.ensure([], () => r(require('./cms/guestbook/index.vue')), 'cms')
            },
            {
                "path": "page",
                "children": [
                    {
                        "path": "form",
                        "component": r => require.ensure([], () => r(require('./cms/page/form.vue')), 'cms')
                    },
                    {
                        "path": "list",
                        "component": r => require.ensure([], () => r(require('./cms/page/list.vue')), 'cms')
                    },
                    {
                        "path": "page.form",
                        "component": r => require.ensure([], () => r(require('./cms/page/page.form.vue')), 'cms')
                    }
                ],
                "component": r => require.ensure([], () => r(require('./cms/page/index.vue')), 'cms')
            },
            {
                "path": "select",
                "component": r => require.ensure([], () => r(require('./cms/select/index.vue')), 'cms')
            },
            {
                "path": "site",
                "children": [
                    {
                        "path": "form",
                        "component": r => require.ensure([], () => r(require('./cms/site/form.vue')), 'cms')
                    },
                    {
                        "path": "list",
                        "component": r => require.ensure([], () => r(require('./cms/site/list.vue')), 'cms')
                    }
                ],
                "component": r => require.ensure([], () => r(require('./cms/site/index.vue')), 'cms')
            }
        ],
        "component": r => require.ensure([], () => r(require('./cms/index.vue')), 'cms')
    },
    
]