import Vue from 'vue'
import VueRouter from 'vue-router'
import routeDoc from "./docs"


Vue.use(VueRouter)


const routes = [
    ...routeDoc,
    {
        path: '',
        name: 'home',
        meta: {
            title: 'BootWind Template',
            metaTags: [{
                name: 'description',
                content: 'Bootwind Template'
            }]
        },
        component: function() {
            return import ( /* webpackChunkName: "index" */ '../views/Index.vue')
        }
    },
    {
        path: '/dashboard-1',
        name: 'dashboard-1',
        component: function() {
            return import ( /* webpackChunkName: "dashboard-1" */ '../views/admin/dashboard-1/layout.vue')
        },
        children: [
            {
                path: '',
                name: 'Dashboard 1',
                meta: {
                    title: 'Admin BootWind - Dashboard 1 - Analytics ',
                    metaTags: [{
                        name: 'description',
                        content: 'Admin Dashboard 1 - Analytics - Bootwind Template'
                    }]
                },
                component: function() {
                    return import ( /* webpackChunkName: "dashboard-1" */ '../views/admin/dashboard-1/index.vue')
                },
            },
            {
                path: 'users',
                name: 'Users',
                meta: {
                    title: 'Users - Admin Dashboard 1 ',
                    metaTags: [{
                        name: 'description',
                        content: 'Admin Dashboard 1 - Bootwind Template'
                    }]
                },
                component: function() {
                    return import ( /* webpackChunkName: "dashboard-1" */ '../views/admin/dashboard-1/users.vue')
                },
            }
        ]
    },
]
const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
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