import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'BootWind',
        meta: {
            title: 'BootWind Template',
            metaTags: [{
                name: 'description',
                content: 'Make a Better Website with BootWind Template and Tailwind Css '
            }]
        },
        component: Home
    },
    {
        path: '/started/install',
        name: 'Installl',
        meta: {
            title: 'Install Tailwind Css Vue Js',
            metaTags: [{
                name: 'description',
                content: 'Install Tailwind Css Vue Js - Vue BootWind Template '
            }]
        },
        component: function() {
            return import ( /* webpackChunkName: "instalasi" */ '../views/instalasi.vue')
        }
    },
    {
        path: '/component/alert',
        name: 'Alert',
        meta: {
            title: 'Alert Component BootWind Template',
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
        path: '/component/badge',
        name: 'Badge',
        meta: {
            title: 'Badge Component BootWind Template',
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
        path: '/component/buttons',
        name: 'buttons',
        meta: {
            title: 'buttons Component BootWind Template',
            metaTags: [{
                name: 'description',
                content: 'Button Tailwind CSS Component '
            }]
        },
        component: function() {
            return import ( /* webpackChunkName: "c-button" */ '../views/components/button.vue')
        }
    },
    {
        path: '/component/cards',
        name: 'cards',
        meta: {
            title: 'button Component BootWind Template',
            metaTags: [{
                name: 'description',
                content: 'Vue cards Component Tailwind CSS '
            }]
        },
        component: function() {
            return import ( /* webpackChunkName: "c-cards" */ '../views/components/cards.vue')
        }
    },
    {
        path: '*',
        name: 'BootWind',
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

const router = new VueRouter({
    routes
})




// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

    // Skip rendering meta tags if there are none.
    if (!nearestWithMeta) return next();

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
            const tag = document.createElement('meta');

            Object.keys(tagDef).forEach(key => {
                tag.setAttribute(key, tagDef[key]);
            });

            // We use this to track which meta tags we create, so we don't interfere with other ones.
            tag.setAttribute('data-vue-router-controlled', '');

            return tag;
        })
        // Add the meta tags to the document head.
        .forEach(tag => document.head.appendChild(tag));

    next();
});


export default router