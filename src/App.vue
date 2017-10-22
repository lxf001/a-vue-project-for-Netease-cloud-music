<template>
  <div id="app" v-loading.fullscreen.lock="loading">
    <h v-if="$route.meta.needHead"></h>
    <transition name="router">
      <keep-alive>
        <router-view class="router"/>

      </keep-alive>
    </transition>
    <play-bar></play-bar>


  </div>
</template>

<script>
  import playBar from "comp/playBar";
  import h from 'comp/head.vue'
  import {mapState} from 'vuex'
  export default {
    name: "app",
    data() {
      return {
      };
    },
    components: {
      playBar,
      h
    },
    mounted() {
    },
    computed:{
      ...mapState([
        'loading'
      ])
    }
  };
</script>

<style lang="scss">
  @import "./assets/style/mixin.scss";
  .router-enter, .router-leave-to {
    opacity: 0;
  }
  .router-enter-active, .router.leave-active{
    transition: opacity 1s ease;
  }
</style>

