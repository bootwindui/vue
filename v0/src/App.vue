<template>
  <div id="app" >
      <router-view />
  </div>
</template>

<script>
export default {
   watch: {
    $route(to, from) {
     this.$store.commit('toggleLeftMenu','')
    }
  }
}
</script>