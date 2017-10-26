<template>
  <div class="wrapper">
    <div class="placeholder"></div>
    <transition name="mask">
      <div class="mask" @touchmove.prevent @wheelDelta.prevent @click="toggleList" v-show="listShow"></div>
    </transition>
    <div class="playBar">

        <img v-lazy="currentSong.cover" height="468" width="468"/>
        <div>
          <p class="ellipsis name">{{currentSong.name}}</p>
          <p class="ellipsis artist">{{currentSong.artist}}</p>
        </div>

      <div class="btn">
        <i class="iconfont icon-list" @click="toggleList"></i>
        <i class="iconfont" :class="iconStatus?'icon-pause':'icon-play'" @click="togglePlayStatus"></i>
        <i class="iconfont icon-next"></i>
      </div>
    </div>

    <audio :src="currentSong.url" ref="audio" @canplay="togglePlayStatus"></audio>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      iconStatus: false
    };
  },
  mounted() {},
  methods: {
    toggleList() {
      this.toggleListShow();
      console.log("toggleList", this.listShow);
    },
    ...mapMutations(["toggleListShow", "togglePlayStatus"])
  },
  computed: {
    ...mapState(["listShow", "currentSong", "playStatus"])
  },
  watch: {
    playStatus(status) {
      if (status === true) {
        this.$refs.audio.play();
        this.iconStatus = true;
      } else {
        this.$refs.audio.pause();
        this.iconStatus = false;
      }
    }
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
  img {
    @include wh(1.2rem);
    margin: 0 0.1rem;
  }
  div {
    width: 45%;
    .ellipsis {
      width: 100%;
    }
    .artist {
      @include cs($gray,0.3rem);
    }
  }

  .btn {
    @include flex(space-between,center);
    flex-basis: 35%;
    margin-right: .3rem;
    .iconfont {
      @include cs($red, 1rem);
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
