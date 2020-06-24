<template>
<div class="w-full">
            <!-- Content -->
            <section class="w-full neu-in-lg rounded-xl p-5 pt-10 lg:p-10">

                 
                    <div class="w-full flex flex-wrap">

                         <div class="w-full lg:w-2/3 flex flex-wrap">
                                    <div class="hidden lg:block w-full lg:w-1/2 p-2 relative"> 
                                            <div class="neu-out rounded-xl p-1">
                                                    <div class="relative flex neu-in hover:neu-push rounded-xl p-5 lg:py-20 text-center flex-wrap">
                                                        <img class="w-32 h-32 mx-auto border-4 border-primary rounded-full neu-out" src="/svg/male.svg" alt="Male">
                                                        <h1 class="text-4xl w-full font-bold text-primary mt-5">Hello Ari</h1>
                                                        <strong class="w-full">Have a Nice Day :)</strong>
                                                  
                                                   </div>
                                                      
                                            </div>
                                   
                                    </div>
                                    <div class="w-full lg:w-1/2 p-2"> 
                                        <div class="neu-push rounded-lg to-hover w-full relative mb-3">
                                                <button class="font-bold pl-4 py-2 neu-out rounded-lg w-full flex-wrap text-left" >
                                                {{ bulan }}
                                                <svg class="float-right mr-2 mt-1" width="16px" height="16px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                                                </svg>
                                                </button>
                                                <ul class="z-30 w-full hovered py-3 flex flex-wrap absolute neu-out">
                                                    <li class="w-full flex  hover:bg-theme_primary_dark"><a href="#" class="px-4 py-2 w-full">Today</a></li>
                                                    <li class="w-full flex  hover:bg-theme_primary_dark"><a href="#" class="px-4 py-2 w-full">Last Month</a></li>
                                                    <li class="w-full flex  hover:bg-theme_primary_dark"><a href="#" class="px-4 py-2 w-full">This Year</a></li>
                                                    <li class="w-full flex  hover:bg-theme_primary_dark"><a href="#" class="px-4 py-2 w-full">All Times</a></li>
                                                </ul>
                                            </div>
                                        <div class="neu-out rounded-xl p-2 pb-6 mt-3">
                                            <h1 class="font-semibold px-4 pb-3">Visitor</h1>
                                            <ul class="flex neu-in-lg hover:neu-push rounded-xl p-5 h-40 justify-between ">
                                                <li class="w-1/5 relative to-hover flex flex-wrap justify-center" v-for="data in listData" :key="data.id">
                                                    <div class="w-5 rounded-xl absolute bottom-0 z-10" :class="data.color" :style="`height:${data.persen}%`"></div>
                                                    <div class="w-5 rounded-xl absolute top-0 neu-out " style="height:100%;"></div>
                                                    <span class="w-20 px-3 py-1 hovered absolute z-20 text-sm rounded-lg neu-out ">{{data.visitor}} 
                                                        <br/><small>{{data.id}} {{bulan}}</small>  </span>
                                                </li>
                                            </ul>
                                        </div>


                                        
                                <div class="neu-out rounded-xl p-1 mt-3">
                                    <div class="flex neu-in-lg hover:neu-push rounded-xl p-5">
                                        <div class="w-full flex">
                                            <div class="font-bold text-3xl px-3 text-primary flex w-full">
                                                <span class=" relative w-full pb-1">
                                                      <div class="absolute text-primary rounded-full p-3 -mt-1 border-8 border-primary neu-out">
                                                         <svg class="bi bi-graph-up" width="18px" height="18px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0 0h1v16H0V0zm1 15h15v1H1v-1z"/>
                                                            <path fill-rule="evenodd" d="M14.39 4.312L10.041 9.75 7 6.707l-3.646 3.647-.708-.708L7 5.293 9.959 8.25l3.65-4.563.781.624z"/>
                                                            <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4h-3.5a.5.5 0 0 1-.5-.5z"/>
                                                            </svg>
                                                        </div>

                                                    <span class="ml-16 ">
                                                        100K 
                                                    </span>

                                                    <small class="text-sm absolute top-0 right-0"> 
                                                        
                                                    <b class="text-lg"> View </b>
                                                     <br>    
                                                    {{ bulan }}
                                                    </small>
                                                      
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    

                                    </div>
                        
                                    <div class="w-full p-2"> 
                                        <div class="neu-out rounded-xl p-2 ">
                                            <h1 class="w-full font-semibold px-4 py-3 pb-5"> Trending Story</h1>
                                            <ul class="flex flex-wrap neu-in-lg hover:neu-push rounded-xl p-5">
                                                <li class="w-full relative my-2 neu-out hover:neu-in rounded-xl p-3" v-for="data in 3" :key="data">
                                                    <div class="h-5 w-5 rounded-xl absolute z-10 neu-out bg-primary"></div>
                                                    <span class="pl-8 pt-2 ">Story {{data}}</span>
                                                    <p>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum rem aut laudantium vel error saepe magni! Repellat laboriosam voluptas iure, optio, sapiente vel dolorem placeat provident tenetur, iste beatae.
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                         </div>
                          <div class="w-full lg:w-1/3 p-2"> 

                              
                                        <div class="neu-out rounded-xl p-1">
                                            <div class="flex neu-in-lg hover:neu-push rounded-xl p-5 justify-between ">
                                                <div class="w-full flex">
                                                    <div class="w-16 h-16 border-8 neu-out-lg border-primary rounded-full p-3 font-bold text-primary" >
                                                        90%
                                                    </div>
                                                    <div class="font-bold text-xl px-3 pt-1 text-primary flex flex-col">
                                                        <span class="w-full">Active Users</span>
                                                        <small class="w-full">90K / 100K</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    
                                 <div class="neu-out rounded-xl p-1 mt-5 ">
                                    <ul class="flex flex-wrap neu-push hover:neu-push rounded-xl p-5">
                                        <li class="font-semibold pb-3">Aktifitas Terakhir</li>
                                        <li class="w-full relative my-2 h-10 neu-in rounded-xl p-3" v-for="data in listData" :key="data.id">
                                            <div class="h-5 w-5 rounded-xl absolute z-10 neu-out" :class="data.color"></div>
                                            <span class="absolute top-0 z-20 text-sm pl-8 pt-2 ">User {{data.id}} ....</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                          
                        
                    </div>
            </section>
</div>
        
</template>

<script>


export default {
  data(){
      return{
          bulan: 'Agustus',
          listData: [
              {
                  id: 1,
                  persen: 35,
                  visitor: '35K',
                  color: 'bg-default'
              },
              {
                  id: 2,
                  persen: 60,
                  visitor: '60K',
                  color: 'bg-success'
              },
              {
                  id: 3,
                  persen: 45,
                  visitor: '45K',
                  color: 'bg-danger'
              },
              {
                  id: 4,
                  persen: 100,
                  visitor: '100K',
                  color: 'bg-info'
              },
              {
                  id: 5,
                  persen: 45,
                  visitor: '45K',
                  color: 'bg-warning'
              },
               {
                  id: 6,
                  persen: 60,
                  visitor: '60K',
                  color: 'bg-primary'
              },
          ]
      }
  }
}
</script>