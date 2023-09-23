import Home from  '../views/started/overview.vue'

export default [{
    path: '/docs',
    component: function() {
        return import ( /* webpackChunkName: "docs" */ '../Docs.vue')
    },
    children: [{
            path: '',
            name: 'BootWind',
            meta: {
                title: 'Vue BootWind Template',
                metaTags: [{
                    name: 'description',
                    content: 'Make a Better Website with BootWind Template and Tailwind Css '
                }]
            },
            component: Home
        },
        {
            path: 'started/install',
            name: 'Installl',
            meta: {
                title: 'Install Tailwind Vue Js',
                metaTags: [{
                    name: 'description',
                    content: 'Install Tailwind Css Vue Js - Vue BootWind Template '
                }]
            },
            component: function() {
                return import ( /* webpackChunkName: "instalasi" */ '../views/started/instalasi.vue')
            }
        },
        {
            path: 'component/alert',
            name: 'Alert',
            meta: {
                title: 'Alert Tailwind Component',
                metaTags: [{
                    name: 'description',
                    content: 'Alert Tailwind CSS Component'
                }]
            },
            component: function() {
                return import ( /* webpackChunkName: "c-alert" */ '../views/components/alert.vue')
            }
        },
        {
            path: 'component/badge',
            name: 'Badge',
            meta: {
                title: 'Badge Tailwind Component',
                metaTags: [{
                    name: 'description',
                    content: 'Badge Tailwind CSS Component '
                }]
            },
            component: function() {
                return import ( /* webpackChunkName: "c-badge" */ '../views/components/badge.vue')
            }
        },
        {
            path: 'component/buttons',
            name: 'buttons',
            meta: {
                title: 'Buttons Tailwind Componen',
                metaTags: [{
                    name: 'description',
                    content: 'Buttons Tailwind CSS Component '
                }]
            },
            component: function() {
                return import ( /* webpackChunkName: "c-button" */ '../views/components/button.vue')
            }
        },
        {
            path: 'component/cards',
            name: 'cards',
            meta: {
                title: 'Cards Tailwind Component',
                metaTags: [{
                    name: 'description',
                    content: 'Cards Tailwind CSS Component '
                }]
            },
            component: function() {
                return import ( /* webpackChunkName: "c-cards" */ '../views/components/cards.vue')
            }
        },

        {
            path: 'component/carousel',
            name: 'carousel',
            meta: {
                title: 'Carousel Tailwind CSS Component',
                metaTags: [{
                    name: 'description',
                    content: 'Carousel Tailwind CSS Component'
                }]
            },
            component: function() {
                return import ( /* webpackChunkName: "c-carousel" */ '../views/components/carousel.vue')
            }
        },

        {
            path: 'component/collapse',
            name: 'collapse',
            meta: {
                title: 'Collapse Tailwind CSS Component',
                metaTags: [{
                    name: 'description',
                    content: 'Collapse Tailwind CSS Component'
                }]
            },
            component: function() {
                return import ( /* webpackChunkName: "c-collapse" */ '../views/components/collapse.vue')
            }
        },

        {
            path: 'component/dropdown',
            name: 'dropdown',
            meta: {
                title: 'Dropdown Tailwind CSS Component',
                metaTags: [{
                    name: 'description',
                    content: 'Dropdown Tailwind CSS Component'
                }]
            },
            component: function() {
                return import ( /* webpackChunkName: "c-dropdown" */ '../views/components/dropdown.vue')
            }
        },

        {
            path: 'component/form',
            name: 'form',
            meta: {
                title: 'Form Tailwind CSS Component',
                metaTags: [{
                    name: 'description',
                    content: 'Form Tailwind CSS Component'
                }]
            },
            component: function() {
                return import ( /* webpackChunkName: "c-form" */ '../views/components/form.vue')
            }
        },
        {
            path: 'component/jumbotron',
            name: 'jumbotron',
            meta: {
                title: 'jumbotron Tailwind CSS Component',
                metaTags: [{
                    name: 'description',
                    content: 'jumbotron Tailwind CSS Component'
                }]
            },
            component: function() {
                return import ( /* webpackChunkName: "c-jumbotron" */ '../views/components/jumbotron.vue')
            }
        },
        {
            path: 'component/modal',
            name: 'modal',
            meta: {
                title: 'modal Tailwind CSS Component',
                metaTags: [{
                    name: 'description',
                    content: 'modal Tailwind CSS Component'
                }]
            },
            component: function() {
                return import ( /* webpackChunkName: "c-modal" */ '../views/components/modal.vue')
            }
        },
        {
            path: 'component/navs',
            name: 'navs',
            meta: {
                title: 'navs Tailwind CSS Component',
                metaTags: [{
                    name: 'description',
                    content: 'navs Tailwind CSS Component'
                }]
            },
            component: function() {
                return import ( /* webpackChunkName: "c-navs" */ '../views/components/navs.vue')
            }
        },

        {
            path: 'component/paginations',
            name: 'paginations',
            meta: {
                title: 'paginations Tailwind CSS Component',
                metaTags: [{
                    name: 'description',
                    content: 'paginations Tailwind CSS Component'
                }]
            },
            component: function() {
                return import ( /* webpackChunkName: "c-navs" */ '../views/components/paginations.vue')
            }
        },

        // 404
        {
            path: '*',
            name: '404',
            meta: {
                title: 'BootWind Template',
                metaTags: [{
                    name: 'description',
                    content: 'Make a Better Website with BootWind Template and Tailwind Css '
                }]
            },
            component: Home
        },
    ]
}]