<template>
    <div class="flex flex-wrap">
        
        <h1 class="w-full px-2 pt-2 font-bold text-3xl">Carousel BootWind Component</h1>
        
        <ul class="w-full lg:w-1/2 mb-12">
           
            <li class="p-2">
                <ul class="shadow-lg rounded-lg bg-white text-default">
                    <li v-for="(data,i) in carouselImage" :key="i">
                     
                            <img  v-touch:swipe="carouselImageTo" 
                            :class="(carouselImageActive == i)? '': 'hidden'" :src="data.src" :alt="data.title" 
                        >
                    </li>
                     <li class="flex flex-wrap text-center" >
                        <span @click="carouselImageTo('right')" class="w-1/2 cursor-pointer p-1 px-5 hover:bg-gray-100">Prev</span>
                        <span @click="carouselImageTo('left')"  class="w-1/2 cursor-pointer p-1 px-5 hover:bg-gray-100 ">Next</span>
                    </li>
                </ul>
            </li>
             <li class="p-2">
                <ul class="shadow-lg rounded-lg bg-white text-default">
                    <li v-for="(data,i) in listCarousel" :key="i" >
                        <span v-touch:swipe="carouselTo" v-if="carouselActive == i" >
                            <div class="flex flex-wrap rounded-lg text-center text-white" :class="data.theme">
                            
                                <div class="w-full py-2 px-4 flex flex-col">
                                    <h5 class="text-3xl font-bold flex-col py-1">{{data.title}}</h5>
                                    <p class="flex-col">With supporting text below as a natural lead-in to additional content.</p>
                                    <span class="py-3">
                                        <a href="#" class="shadow-md text-default bg-white rounded-full px-4 py-2">Go somewhere</a>
                                    </span>
                                </div>
                                <div class="w-full py-2 px-4 ">
                                    2 days ago
                                </div>
                            </div>
                        </span>
                    </li>
                
                <li class="flex flex-wrap text-center" >
                        <span @click="carouselTo('right')" class="w-1/2 cursor-pointer p-1 px-5  hover:bg-gray-100">Prev</span>
                        <span @click="carouselTo('left')"  class="w-1/2 cursor-pointer p-1 px-5 hover:bg-gray-100 ">Next</span>
                    </li>
                </ul>
                
            </li>
        </ul>
        <right-menu class="w-full lg:w-1/2 shadow-sm p-2 lg:p-12" youtube="laI_rwHPnNM" next="breadcrumb" back="alert" />
    
      
    </div>
</template>
<script>
import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'
 
Vue.use(Vue2TouchEvents)
 
export default {

  methods: {
        carouselTo (direction) {
             if(direction == 'left'){
                if(this.carouselActive < this.listCarousel.length-1){
                    this.carouselActive = this.carouselActive+1
                }
            }else if(direction == 'right'){
                if(this.carouselActive > 0){
                    this.carouselActive = this.carouselActive-1
                }
            }
            console.log(direction)  // May be left / right / top / bottom
        },
         carouselImageTo (direction) {
             if(direction == 'left'){
                if(this.carouselImageActive < this.carouselImage.length-1){
                    this.carouselImageActive = this.carouselImageActive+1
                }
            }else if(direction == 'right'){
                if(this.carouselImageActive > 0){
                    this.carouselImageActive = this.carouselImageActive-1
                }
            }
            console.log(direction)  // May be left / right / top / bottom
        },
    },
  data(){
      return{
          listCarousel: [
              {
                 title: 'Carousel 1' ,
                  theme: 'bg-default'
              },
              {
                 title: 'Carousel 2' ,
                 theme: 'bg-primary'
              },
              {
                 title: 'Carousel 3' ,
                 theme: 'bg-success'
              }
          ],
          carouselActive: 0,
          carouselImage: [
              {
                title: 'Alert' ,
                src: '/img/doc/alert-component.jpg'
              },
              {
                 title: 'Badge' ,
                 src: '/img/doc/badge-component.jpg'

              },
              {
                 title: 'Button' ,
                 src: '/img/doc/button-component.jpg'
              }
          ],
          carouselImageActive: 0,
        }
    }
}
</script>

