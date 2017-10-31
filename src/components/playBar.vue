<template>
  <div class="wrapper">
    <div class="placeholder"></div>

    <div class="playBar">

        <router-link to="/song"><img v-lazy="currentSong.cover" height="468" width="468"/></router-link>
        <router-link class="text" to="/song">
          <p class="ellipsis name">{{currentSong.name}}</p>
          <p class="ellipsis artist">{{currentSong.artist}}</p>
        </router-link>

      <div class="btn">
        <i class="iconfont" :class="iconStatus?'icon-pause':'icon-play'" @click="togglePlayStatus"></i>
        <i class="iconfont icon-list" @click="toggleList"></i>
      </div>
    </div>

    <audio id= "audio" :src="currentSong.url" ref="audio" @canplay="play" @timeupdate="setCur"  @durationchange="setDur" @ended="endEvent" autoplay></audio>
  </div>
</template>
<script>
import { mapState, mapMutations,mapActions } from "vuex";
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
    },
    setCur(){
      this.setCurrentTime(this.$refs.audio.currentTime)
    },
    setDur(){
      this.setDuration(this.$refs.audio.duration)
    },
    endEvent(){
      if(this.list.length===1){
        this.$refs.audio.play();
      }else if(this.list.length===0){
        this.togglePlayStatus();
      }else {
        this.setCurrentSong(this.index+1);
      }
    },
    ...mapMutations(["toggleListShow", "togglePlayStatus","setCurrentTime","setDuration","play"]),
    ...mapActions([
      "setCurrentSong"
    ])
  },
  computed: {
    ...mapState(["listShow", "currentSong", "playStatus","currentTime","index","list"])
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
    },
  },
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
    margin: 0 0.15rem;
  }
  .text {
    width: 45%;
    margin-right: auto;
    .ellipsis {
      width: 100%;
    }
    .artist {
      @include cs($gray,0.3rem);
    }
  }

  .btn {
    @include flex(space-between,center);
    flex-basis: 22%;
    margin-right: .3rem;
    .iconfont {
      @include cs($red, 1rem);
    }
  }
}


</style>
