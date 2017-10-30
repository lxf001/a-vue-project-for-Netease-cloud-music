<template>
  <div id="app">
    <h v-if="$route.meta.needHead"></h>
    <!--<transition name="router">-->
      <keep-alive>
        <router-view v-if="$route.meta.alive" class="router"/>
      </keep-alive>
    <!--</transition>-->

    <!--<transition name="router">-->
        <router-view v-if="!$route.meta.alive" class="router"/>
    <!--</transition>-->
    <play-bar v-show="!$route.meta.closeBar"></play-bar>
    <list></list>
  </div>
</template>

<script>
import playBar from "comp/playBar";
import h from "comp/head.vue";
import list from "comp/list";
import { mapState } from "vuex";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    playBar,
    h,
    list
  },
  mounted() {},
  computed: {
    ...mapState(["loading"])
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/style/mixin.scss";
.router-enter,
.router-leave-to {
  opacity: 0;
}
.router-enter-active,
.router.leave-active {
  transition: opacity 1s ease;
}
.loading{
  position: fixed;
  @include zero();
  z-index: 9999;
  background: rgba(255,255,255,.9);
  @include flex(center,center);
}
</style>

