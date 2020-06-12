<template>
    <div class="flex flex-wrap">
        
        <h1 class="w-full px-2 pt-2 font-bold text-3xl">Carousel BootWind Component</h1>
        
        <ul class="w-full lg:w-2/3 mb-12">
             <li class="p-2">

                <div class="text-default relative" >
                    <div v-for="(data,i) in listCarousel" :key="i" >
                        <span v-touch:swipe="carouselTo" v-if="carouselActive == i" >
                            <div class="flex flex-wrap text-center text-white shadow-lg border  " style="border-radius:30px" :class="data.theme">
                                <div class="w-full py-2 ">
                                    {{data.title}}
                                </div>
                                <!-- <img class="w-full" :src="data.img" :alt="data.img"> -->
                                <div class="w-full px-4 flex flex-col">
                                    <h5 class="text-3xl font-bold flex-col py-1">{{data.title}}</h5>
                                    <p class="flex-col">With supporting text below as a natural lead-in to additional content.</p>
                                    <span class="py-3">
                                        <a href="#" class="shadow-md text-default bg-white rounded-full px-4 py-2">Go somewhere {{ i+1 }}</a>
                                    </span>
                                </div>
                                <div class="w-full py-2 px-4 ">
                                    2 days ago
                                </div>
                            </div>
                        </span>
                    </div>
                     <span @click="carouselTo('prev')" class="rounded-full mx-2 cursor-pointer p-3 bg-gray-100 hover:bg-primary absolute left-0 z-20 border-4 text-primary hover:text-white border-primary" style="top:40%">
                        <svg class="bi bi-caret-left" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M10 12.796L4.519 8 10 3.204v9.592zm-.659.753l-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
                        </svg>
                    </span>
                    <span @click="carouselTo('next')"  class="rounded-full mx-2 cursor-pointer p-3 bg-gray-100 hover:bg-primary absolute right-0 z-20 border-4 text-primary hover:text-white border-primary" style="top:40%">
                        <svg class="bi bi-caret-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M6 12.796L11.481 8 6 3.204v9.592zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                        </svg>
                    </span>
                </div>
            </li>
        </ul>
        <right-menu class="w-full lg:w-1/3 shadow-sm p-2 lg:p-12" youtube="laI_rwHPnNM" next="breadcrumb" back="alert" />
    </div>
</template>
<script>
import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'
Vue.use(Vue2TouchEvents)
export default {
  methods: {
        carouselTo (direction) {
             if(direction == 'left' || direction == 'next'){
                if(this.carouselActive < this.listCarousel.length-1){
                    this.carouselActive = this.carouselActive+1
                }else{
                    this.carouselActive = 0;
                }
            }else if(direction == 'right' || direction == 'prev'){
                if(this.carouselActive > 0){
                    this.carouselActive = this.carouselActive-1
                }else{
                    this.carouselActive = this.listCarousel.length-1
                }
            }
        }
    },
  data(){
      return{
          listCarousel: [
              {
                 title: 'Carousel 1' ,
                 img: '/img/doc/alert-component.jpg',
                 theme: 'bg-default'
              },
              {
                 title: 'Carousel 2' ,
                 img: '/img/doc/badge-component.jpg',
                 theme: 'bg-primary'
              },
              {
                 title: 'Carousel 3' ,
                 img: '/img/doc/button-component.jpg',
                 theme: 'bg-success'
              },
              {
                 title: 'Carousel 4' ,
                 img: '/img/doc/cards-component.jpg',
                 theme: 'bg-danger'
              }
          ],
          carouselActive: 0
        }
    }
}
</script>

