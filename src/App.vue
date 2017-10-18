<template>
  <div id="app" v-loading.fullscreen.lock="loading">
    <img src="./assets/logo.png">
    <router-view/>
    
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      loading: false,
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
@import 'src/assets/style/mixin.scss';
body {
  background:$red;
}

</style>

