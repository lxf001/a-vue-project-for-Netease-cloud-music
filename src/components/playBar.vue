<template>
  <div class="wrapper">
    <div class="placeholder"></div>
    <transition name="mask">
      <div class="mask" @touchmove.prevent @wheelDelta.prevent @click="toggleList" v-show="listShow"></div>
    </transition>
    <div class="playBar">
      <div class="music-info">
        <img src="../assets/404.png" height="468" width="468"/>
        <div>
          <p>1231231231231231</p>
          <p>123123123</p>
        </div>
      </div>
      <div class="btn">
        <i class="iconfont icon-list" @click="toggleList"></i>
        <i class="iconfont" :class="status?'icon-pause':'icon-play'" @click="toggleStatus"></i>
        <i class="iconfont icon-next"></i>
      </div>
    </div>

    <audio src=""></audio>
  </div>
</template>
<script>
import { mapState,mapMutations } from "vuex";
export default {
  data() {
    return {
      status: false
    };
  },
  mounted() {},
  methods: {
    toggleStatus() {
      this.status = !this.status;
    },
    toggleList() {
      this.toggleListShow();
      console.log('toggleList',this.listShow)
    },
    ...mapMutations(["toggleListShow"])
  },
  computed: {
    ...mapState([
      'listShow'
    ])
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/style/mixin.scss";
.wrapper {
  position: relative;
  z-index: 99;
}
.placeholder {
  @include wh(100%, $h);
}

body {
  z-index: 1;
}

.mask {
  position: fixed;

  background: rgba(0, 0, 0, 0.77);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: $z3;
}

.playBar {
  position: fixed;
  z-index: 9;
  bottom: 0;
  @include wh(100%, $h);
  background: #fff;
  -webkit-box-shadow: 1px -1px 10px $gray;
  -moz-box-shadow: 1px -1px 10px $gray;
  box-shadow: 1px -1px 10px $gray;
  overflow: hidden;
  @include flex(space-between, center);

  .music-info {
    @include wh(60%, $h);
    @include flex(flex-start, center);
    overflow: hidden;
    img {
      @include wh(($h)-0.2rem);
      padding: 0.1rem;
    }
  }

  .btn {
    @include flex(space-between,center);
    .iconfont {
      @include cs($red, 1rem);
      padding: 0.2rem;
    }
  }
}

.mask-enter,
.mask-leave-to {
  opacity: 0;
}

.mask-enter-active,
.mask-leave-active {
  transition: opacity 0.3s;
}
</style>
