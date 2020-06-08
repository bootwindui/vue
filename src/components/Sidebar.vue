<template>
     <nav class="hidden lg:block bg-white shadow-sm p-3 fixed top-0 w-full lg:w-1/6 sidebar">
        <div class="flex flex-col">
          <h2 class="text-indigo-800 font-bold w-full py-2 px-4 flex">
           
              <svg class="w-6 p-1 -mt-1" id="i-book" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <path d="M16 7 C16 7 9 1 2 6 L2 28 C9 23 16 28 16 28 16 28 23 23 30 28 L30 6 C23 1 16 7 16 7 Z M16 7 L16 28" />
              </svg>
            Documentation</h2>
            <div class="flex flex-col pl-4">
              <a target="_blank" href="https://tailwindcss.com" :class="nonActiveClass">
                Tailwind Css</a>
              <a target="_blank" href="https://vuejs.org" :class="nonActiveClass">
                Vue Js</a>
              <router-link :class="($route.path == '/instalasi')? activeClass : nonActiveClass" to="/instalasi">Instalasi</router-link>
            </div>
        </div>
        <div class="flex flex-col">
          <h2 class="text-indigo-800 font-bold w-full py-2 px-4 flex">
            
            <svg  class="w-6 p-1 -mt-1" id="i-folder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M2 26 L30 26 30 7 14 7 10 4 2 4 Z M30 12 L2 12" />
            </svg>

            Component</h2>
            <div class="flex flex-col pl-4">
              <router-link :class="($route.path == '/component/alert')? activeClass : nonActiveClass" to="/component/alert">Alert</router-link>
              <router-link :class="($route.path == '/component/badge')? activeClass : nonActiveClass" to="/component/badge">Badge</router-link>
              <router-link :class="($route.path == '/component/breadcrumb')? activeClass : nonActiveClass" to="/component/breadcrumb">Breadcrumb</router-link>
              <router-link :class="($route.path == '/component/button')? activeClass : nonActiveClass" to="/component/button">Button</router-link>
              <router-link :class="($route.path == '/component/card')? activeClass : nonActiveClass" to="/component/card">Card</router-link>
              <router-link :class="($route.path == '/component/carousel')? activeClass : nonActiveClass" to="/component/carousel">Carousel</router-link>
              <router-link :class="($route.path == '/component/collapse')? activeClass : nonActiveClass" to="/component/collapse">Collapse</router-link>
              <router-link :class="($route.path == '/component/dropdown')? activeClass : nonActiveClass" to="/component/dropdown">Dropdown</router-link>
             </div>
        </div>
         <div class="flex flex-col">
          <h2 class="text-indigo-800 font-bold w-full py-2 px-4 flex">
              <svg class="w-6 p-1 -mt-1"  id="i-portfolio" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M29 17 L29 28 3 28 3 17 M2 8 L30 8 30 16 C30 16 24 20 16 20 8 20 2 16 2 16 L2 8 Z M16 22 L16 18 M20 8 C20 8 20 4 16 4 12 4 12 8 12 8" />
            </svg>
            Template</h2>
            <div class="flex flex-col pl-4">
              <router-link  :class="($route.path == '/template/login')? activeClass : nonActiveClass" to="/template/login">Login</router-link>
              <router-link  :class="($route.path == '/template/register')? activeClass : nonActiveClass" to="/template/register">Register</router-link>
              <router-link  :class="($route.path == '/template/profile')? activeClass : nonActiveClass" to="/template/profile">Profile</router-link>
              <router-link  :class="($route.path == '/template/admin-dashboard')? activeClass : nonActiveClass" to="/template/admin-dashboard">Admin Dashboard</router-link>
            </div>
        </div>
      </nav>
</template>

<script>
export default {
    data(){
        return {
            activeClass : 'bg-gray-200 text-indigo-800 rounded-tl-md rounded-br-md w-full py-1 px-4',
            nonActiveClass : 'rounded w-full py-1 px-4'
        }
    }
}
</script>