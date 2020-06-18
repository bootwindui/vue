<template>

     <div class="flex flex-wrap align-middle justify-center text-primary w-full lg:w-5/6 p-2 z-30 pt-4  ">
            
            <h1 class=" p-1 font-bold text-lg text-center flex flex-wrap ">
                <svg @click="$store.commit('toggleLeftMenu','sidebar-active')" class="block lg:hidden lg:w-10 mt-1  text-primary mx-2" id="i-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24" />
                </svg>

                <div class="bg-primary rounded-full">
                  <img class="w-10 h-10" src="@/assets/logo-bootwind-template.png" alt="Logo BootWind Template">
                </div>
 
                <router-link class="flex font-semibold text-2xl  tracking-tight" to="/docs">
                  <span class="px-2 ">BootWind <small class="text-sm">Doc</small></span> 
                </router-link>

            </h1>
            
            <div class="ml-auto p-1 text-md  " >
              <div class="flex flex-wrap">
                <a target="_blank" href="https://github.com/bootwindt/vue-bootwind-template" class="
                cursor-pointer px-4 pt-2  mx-2 rounded-full hidden lg:block"> 
                     Version <span class="font-bold "> ( 0.0.1 ) </span>
                </a>
                <div class="hidden lg:flex">
                    <a target="_blank" href="https://twitter.com/bootwindt" class="cursor-pointer text-primary p-2">                  
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><linearGradient id="_osn9zIN2f6RhTsY8WhY4a" x1="10.341" x2="40.798" y1="8.312" y2="38.769" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"/><stop offset="1" stop-color="#007ad9"/></linearGradient><path fill="url(#_osn9zIN2f6RhTsY8WhY4a)" d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758	c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582	c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322	c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419	c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963	c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41	c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"/></svg>    
                    </a>
                    <a target="_blank" href="https://facebook.com/bootwind" class="cursor-pointer text-primary p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><linearGradient id="Ld6sqrtcxMyckEl6xeDdMa" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"/><stop offset="1" stop-color="#007ad9"/></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"/><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"/></svg>
                    </a>
                    <a target="_blank" href="https://instagram.com/bootwindt" class="cursor-pointer text-primary p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"/><stop offset=".328" stop-color="#ff543f"/><stop offset=".348" stop-color="#fc5245"/><stop offset=".504" stop-color="#e64771"/><stop offset=".643" stop-color="#d53e91"/><stop offset=".761" stop-color="#cc39a4"/><stop offset=".841" stop-color="#c837ab"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"/><stop offset=".999" stop-color="#4168c9" stop-opacity="0"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/></svg>
                    </a>
                    <a target="_blank" href="https://github.com/bootwindt" class="cursor-pointer m-2 rounded-full bg-white">
                        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"/></svg>
                    </a>
                   
                </div>
                 <div @click="$store.commit('toggleSetting')" class="cursor-pointer m-2 bg-primary rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g id="surface20753174">
                          <path style=" stroke:none;fill-rule:nonzero;fill:rgb(20.392157%,28.627451%,36.862745%);fill-opacity:1;" d="M 23.628906 12 C 23.628906 5.578125 18.421875 0.371094 12 0.371094 C 5.578125 0.371094 0.371094 5.578125 0.371094 12 C 0.371094 18.421875 5.578125 23.628906 12 23.628906 C 18.421875 23.628906 23.628906 18.421875 23.628906 12 Z M 23.628906 12 "/>
                          <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 19.507812 12.90625 L 19.507812 11.09375 L 17.792969 10.554688 C 17.648438 9.976562 17.417969 9.425781 17.113281 8.925781 L 17.949219 7.328125 L 16.667969 6.046875 L 15.066406 6.882812 C 14.570312 6.582031 14.023438 6.355469 13.445312 6.210938 L 12.898438 4.484375 L 11.085938 4.484375 L 10.542969 6.210938 C 9.964844 6.355469 9.417969 6.582031 8.921875 6.882812 L 7.332031 6.046875 L 6.046875 7.332031 L 6.882812 8.929688 C 6.582031 9.429688 6.347656 9.976562 6.203125 10.5625 L 4.484375 11.101562 L 4.484375 12.910156 L 6.191406 13.449219 C 6.335938 14.035156 6.566406 14.585938 6.871094 15.09375 L 6.046875 16.667969 L 7.328125 17.949219 L 8.90625 17.125 C 9.414062 17.429688 9.96875 17.664062 10.5625 17.808594 L 11.09375 19.503906 L 12.910156 19.503906 L 13.445312 17.808594 C 14.035156 17.664062 14.585938 17.429688 15.097656 17.125 L 16.679688 17.949219 L 17.957031 16.667969 L 17.132812 15.085938 C 17.4375 14.578125 17.667969 14.023438 17.8125 13.4375 Z M 12 15.976562 C 9.8125 15.976562 8.035156 14.199219 8.035156 12.007812 C 8.035156 9.820312 9.8125 8.042969 12 8.042969 C 14.1875 8.042969 15.960938 9.820312 15.960938 12.007812 C 15.960938 14.203125 14.1875 15.976562 12 15.976562 Z M 12 15.976562 "/>
                        </g>
                      </svg>
                    </div>
               
              </div>
               
            </div>
      </div>

</template>