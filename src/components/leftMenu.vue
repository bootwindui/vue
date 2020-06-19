<template>
     <nav class="p-3">
         <div class="flex flex-col">
          <h2 class="text-primary font-bold w-full py-2 px-4 flex mt-2">
            <svg class="w-8 p-1 -mt-1" id="i-book" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M16 7 C16 7 9 1 2 6 L2 28 C9 23 16 28 16 28 16 28 23 23 30 28 L30 6 C23 1 16 7 16 7 Z M16 7 L16 28" />
            </svg>
            Getting Started
            </h2>
            <div class="flex flex-col pl-4">
              <router-link v-for="com in menu.start" :key="com.path" :class="($route.path == com.path)? activeClass : nonActiveClass" :to="com.path">{{ com.name }}</router-link>
             </div>
        </div>
        <div class="flex flex-col">
          <h2 class="text-primary font-bold w-full py-2 px-4 flex">
            
            <svg  class="w-8 p-1 -mt-1" id="i-folder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M2 26 L30 26 30 7 14 7 10 4 2 4 Z M30 12 L2 12" />
            </svg>
            Component</h2>
            <div class="flex flex-col pl-4">
              <router-link v-for="com in menu.com" :key="com.path" :class="($route.path == com.path)? activeClass : nonActiveClass" :to="com.path">{{ com.name }}</router-link>
         </div>
        </div>
         <div class="flex flex-col">
          <h2 class="text-primary font-bold w-full py-2 px-4 flex">
              <svg class="w-8 p-1 -mt-1"  id="i-portfolio" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M29 17 L29 28 3 28 3 17 M2 8 L30 8 30 16 C30 16 24 20 16 20 8 20 2 16 2 16 L2 8 Z M16 22 L16 18 M20 8 C20 8 20 4 16 4 12 4 12 8 12 8" />
            </svg>
            Template</h2>
            <div class="flex flex-col pl-4">
              <router-link  :class="($route.path == '/template/login')? activeClass : nonActiveClass" to="/template/login">Login</router-link>
              <router-link  :class="($route.path == '/template/register')? activeClass : nonActiveClass" to="/template/register">Register</router-link>
              <router-link  :class="($route.path == '/template/profile')? activeClass : nonActiveClass" to="/template/profile">Profile</router-link>
              <router-link  :class="($route.path == '/template/dashboard')? activeClass : nonActiveClass" to="/template/dashboard">Dashboard</router-link>
            </div>
        </div>
        <br>
        <br>
      </nav>
</template>

<script>
export default {
    data(){
        return {
            menu: {
              start: [
                {
                  name: 'Overview',
                  path: '/docs/started/overview'
                },
                {
                    name: 'Icons',
                    path: '/docs/started/icons'
                  },
                {
                  name: 'Quick Start',
                  path: '/docs/started/install'
                }
              ],
              com: [
                {
                  name: 'Alert',
                  path: '/docs/component/alert'
                },
                {
                  name: 'Badge',
                  path: '/docs/component/badge'
                },
                {
                  name: 'Buttons',
                  path: '/docs/component/buttons'
                },
                
                {
                  name: 'Cards',
                  path: '/docs/component/cards'
                },
                {
                  name: 'Carousel',
                  path: '/docs/component/carousel',
                },
                {
                  name: 'Collapse',
                  path: '/docs/component/collapse',
                },
                {
                  name: 'Dropdown',
                  path: '/docs/component/dropdown',
                },
                {
                  name: 'Form',
                  path: '/docs/component/form-group',
                },
                {
                  name: 'Jumbotron',
                  path: '/docs/component/jumbotron',
                },
                {
                  name: 'Modal',
                  path: '/docs/component/modal',
                },
                {
                  name: 'Navs',
                  path: '/docs/component/navs'
                },
                {
                  name: 'Paginations',
                  path: '/docs/component/paginations',
                },
                {
                  name: 'Popevers',
                  path: '/docs/component/popevers',
                },
                {
                  name: 'Progress',
                  path: '/docs/component/progress',
                },
                {
                  name: 'Scrollspy',
                  path: '/docs/component/scrollspy',
                },
                {
                  name: 'Spinners',
                  path: '/docs/component/spinners',
                },
                {
                  name: 'Toasts',
                  path: '/docs/component/toasts',
                },
                {
                  name: 'Tooltips',
                  path: '/docs/component/tooltips',
                },
              ],
            },
            activeClass : 'neu-out font-semibold rounded-lg py-2 px-4 text-primary hover:text-primary my-2 mr-4',
            nonActiveClass : 'hover:neu-out hover:font-semibold rounded-lg py-2 px-4 hover:text-primary mr-4'
        }
    }
}
</script>