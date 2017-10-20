<template>
  <div id="app" v-loading.fullscreen.lock="loading">
    <h></h>
    <router-view/>
    <play-bar></play-bar>


  </div>
</template>

<script>
import playBar from "./components/playBar";
import h from 'comp/head'
export default {
  name: "app",
  data() {
    return {
      loading: false
    };
  },
  components: {
    playBar,
    h
  },
  mounted() {}
};
</script>

<style lang="scss">
@import "src/assets/style/mixin.scss";
</style>

