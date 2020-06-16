<template>
    <div v-if="$store.state.settings" style="width:220px" class="text-center bg-theme_primary_dark h-screen fixed top-0 right-0 mt-20 p-3 rounded-lg flex justify-center items-start flex-wrap">
    <div @click="$store.commit('toggleSetting')" style="opacity:.0005" class=" bg-theme_primary_light absolute top-0 right-0 h-screen w-screen z-10"></div>
    <div class="z-20">
    <div class="w-full">
        <h1 class="mb-3">
            Theme 
        </h1>
           <!-- Theme Set -->
                <div  @click="$store.commit('setTheme','theme-dark-gray')" class="cursor-pointer m-2 rounded-full text-white theme-dark-gray hover:text-secondary flex p-2 px-4 justify-center border-2 shadow-lg">
                    <svg class="bi bi-moon mr-2" width="24px" height="24px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"/>
                    </svg> Dark Gray
                </div>

                 <div  @click="$store.commit('setTheme','theme-dark-blue')" class="cursor-pointer m-2 rounded-full text-white theme-dark-blue hover:text-secondary flex p-2 px-4 justify-center border-2 shadow-lg">
                    <svg class="bi bi-moon mr-2" width="24px" height="24px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"/>
                    </svg> Dark Blue
                </div>

                  <div  @click="$store.commit('setTheme','theme-light')" class="cursor-pointer theme-light m-2 rounded-full text-yellow-600 flex p-2 px-4 justify-center border-2 shadow-lg">
                        <svg class="bi bi-sun mr-2 " width="24px" height="24px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"/>
                            <path fill-rule="evenodd" d="M8.202.28a.25.25 0 0 0-.404 0l-.91 1.255a.25.25 0 0 1-.334.067L5.232.79a.25.25 0 0 0-.374.155l-.36 1.508a.25.25 0 0 1-.282.19l-1.532-.245a.25.25 0 0 0-.286.286l.244 1.532a.25.25 0 0 1-.189.282l-1.509.36a.25.25 0 0 0-.154.374l.812 1.322a.25.25 0 0 1-.067.333l-1.256.91a.25.25 0 0 0 0 .405l1.256.91a.25.25 0 0 1 .067.334L.79 10.768a.25.25 0 0 0 .154.374l1.51.36a.25.25 0 0 1 .188.282l-.244 1.532a.25.25 0 0 0 .286.286l1.532-.244a.25.25 0 0 1 .282.189l.36 1.508a.25.25 0 0 0 .374.155l1.322-.812a.25.25 0 0 1 .333.067l.91 1.256a.25.25 0 0 0 .405 0l.91-1.256a.25.25 0 0 1 .334-.067l1.322.812a.25.25 0 0 0 .374-.155l.36-1.508a.25.25 0 0 1 .282-.19l1.532.245a.25.25 0 0 0 .286-.286l-.244-1.532a.25.25 0 0 1 .189-.282l1.508-.36a.25.25 0 0 0 .155-.374l-.812-1.322a.25.25 0 0 1 .067-.333l1.256-.91a.25.25 0 0 0 0-.405l-1.256-.91a.25.25 0 0 1-.067-.334l.812-1.322a.25.25 0 0 0-.155-.374l-1.508-.36a.25.25 0 0 1-.19-.282l.245-1.532a.25.25 0 0 0-.286-.286l-1.532.244a.25.25 0 0 1-.282-.189l-.36-1.508a.25.25 0 0 0-.374-.155l-1.322.812a.25.25 0 0 1-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"/>
                        </svg> Light 
                </div>
    </div>
 
    <!-- Primary Color Set  -->
   <div class="w-full mt-5">
        <h1 class="mb-3">
            Primary Color
        </h1>
            <div class="flex flex-wrap justify-between mb-2">
                <div @click="$store.commit('setPrimaryColor','primary-red')" class=" cursor-pointer border-2 rounded-lg square-50 primary-red bg-primary hover:bg-primary_dark hover:border-primary shadow-lg" :class="($store.state.primaryColor == 'primary-red') ? 'bg-primary_dark border-primary' : ''" ></div>
                <div @click="$store.commit('setPrimaryColor','primary-orange')" class=" cursor-pointer border-2 rounded-lg square-50 primary-orange bg-primary hover:bg-primary_dark hover:border-primary shadow-lg" :class="($store.state.primaryColor == 'primary-orange') ? 'bg-primary_dark border-primary' : ''"></div>
                <div @click="$store.commit('setPrimaryColor','primary-yellow')" class=" cursor-pointer border-2 rounded-lg square-50 primary-yellow bg-primary hover:bg-primary_dark hover:border-primary shadow-lg" :class="($store.state.primaryColor == 'primary-yellow') ? 'bg-primary_dark border-primary' : ''"></div>
            </div>
            <div class="flex flex-wrap justify-between mb-2">
                <div @click="$store.commit('setPrimaryColor','primary-green')" class=" cursor-pointer border-2 rounded-lg square-50 primary-green bg-primary hover:bg-primary_dark hover:border-primary shadow-lg" :class="($store.state.primaryColor == 'primary-green') ? 'bg-primary_dark border-primary' : ''"></div>
                <div @click="$store.commit('setPrimaryColor','primary-teal')" class=" cursor-pointer border-2 rounded-lg square-50 primary-teal bg-primary hover:bg-primary_dark hover:border-primary shadow-lg" :class="($store.state.primaryColor == 'primary-teal') ? 'bg-primary_dark border-primary' : ''"></div>
                <div @click="$store.commit('setPrimaryColor','primary-blue')" class=" cursor-pointer border-2 rounded-lg square-50 primary-blue bg-primary hover:bg-primary_dark hover:border-primary shadow-lg" :class="($store.state.primaryColor == 'primary-blue') ? 'bg-primary_dark border-primary' : ''"></div>
            </div>
            <div class="flex flex-wrap justify-between mb-2">
                <div @click="$store.commit('setPrimaryColor','primary-indigo')" class=" cursor-pointer border-2 rounded-lg square-50 primary-indigo bg-primary hover:bg-primary_dark hover:border-primary shadow-lg" :class="($store.state.primaryColor == 'primary-indigo') ? 'bg-primary_dark border-primary' : ''"></div>
                <div @click="$store.commit('setPrimaryColor','primary-purple')" class=" cursor-pointer border-2 rounded-lg square-50 primary-purple bg-primary hover:bg-primary_dark hover:border-primary shadow-lg" :class="($store.state.primaryColor == 'primary-purple') ? 'bg-primary_dark border-primary' : ''"></div>
                <div @click="$store.commit('setPrimaryColor','primary-pink')" class=" cursor-pointer border-2 rounded-lg square-50 primary-pink bg-primary hover:bg-primary_dark hover:border-primary shadow-lg" :class="($store.state.primaryColor == 'primary-pink') ? 'bg-primary_dark border-primary' : ''"></div>
          
         </div>
    </div>
</div>

    </div>
</template>
<style scoped>
.square-50{
    width: 50px;
    height: 50px;
}
</style>