<template>
<div class="w-full">
    <!-- Content -->
    <section class="w-full neu-in-lg rounded-xl p-5 pt-10 lg:p-10">
          <div class="neu-out rounded-xl p-1 mt-5 ">
            <ul class="flex flex-wrap neu-push hover:neu-push rounded-xl p-5">
                <li class="font-semibold pb-3">Total : 10.000 Users</li>
                <li class="w-full relative my-2 neu-in hover:neu-out rounded-xl p-3" v-for="data in listData" :key="data.id">
                    <div class="h-5 w-5 rounded-xl absolute z-10 neu-out" :class="data.color"></div>
                    <span class="text-sm pl-8">User {{data.id}} ....</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum vitae dolor mollitia voluptates et incidunt perferendis amet quisquam deserunt dolorum aperiam, ducimus molestias. Minima repellat exercitationem laudantium doloribus modi.
                    </p>
                </li>
            </ul>
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