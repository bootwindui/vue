import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ( /* webpackChunkName: "about" */ '../views/About.vue')
        }
    },
    {
        path: '/instalasi',
        name: 'Instalasi',
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
                content: 'Vue Alert Component Tailwind CSS '
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
                content: 'Vue Badge Component Tailwind CSS '
            }]
        },
        component: function() {
            return import ( /* webpackChunkName: "c-badge" */ '../views/components/badge.vue')
        }
    },
    {
        path: '/component/breadcrumb',
        name: 'breadcrumb',
        meta: {
            title: 'breadcrumb Component BootWind Template',
            metaTags: [{
                name: 'description',
                content: 'Vue breadcrumb Component Tailwind CSS '
            }]
        },
        component: function() {
            return import ( /* webpackChunkName: "c-breadcrumb" */ '../views/components/breadcrumb.vue')
        }
    },
    {
        path: '/component/button',
        name: 'button',
        meta: {
            title: 'button Component BootWind Template',
            metaTags: [{
                name: 'description',
                content: 'Vue button Component Tailwind CSS '
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
    }
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