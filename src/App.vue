<template>
  <div id="app">
    <router-view/>
    <FooterGuide/>
  </div>
</template>

<script>
import '/src/assets/css/reset.css'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  name: 'App',
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus">
body 
  margin 0
  padding 0

#app
  width 100%
  height 100%
  background #f5f5f5
  position relative

</style>