<template>
  <div class="margin-top">
    <transparentHead title="歌单" subTitle="1q23" underTitle="ff"></transparentHead>
    <div class="cover" :style="`background-image:url('${currentSong.cover}')`"></div>

    <div class="box" :class="playStatus?'':'needle-up'">
      <div class="img-wrapper">
        <img :src="currentSong.cover" alt="">
      </div>
    </div>
    <div class="slider">
      <span class="current-time">12:21</span>
      <mu-slider v-model="percent" @change="setCur" class="demo-slider"/>
      <span class="current-time">12:11</span>
    </div>
    <div class="play-control">
      <i class="iconfont icon-singlecycle"></i>
      <i class="iconfont icon-previous"></i>
      <i class="iconfont icon-play1" :class="playStatus?'icon-pause':'icon-play4'" @click="togglePlayStatus"></i>
      <i class="iconfont icon-next"></i>
      <i class="iconfont icon-list"></i>
    </div>
  </div>

</template>
<script>
  import transparentHead from "comp/thead";
  import {getLyric} from "config/fetch";
  import {mapState, mapActions, mapMutations} from "vuex";

  export default {
    data() {
      return {
        percent:this.currentTime
      };
    },
    components: {
      transparentHead
    },
    props: ["id"],
    mounted() {
      // setInterval(()=>{
      //   console.log(1111,this.curTime,this.currentTime,(this.duration))
      // },2000)
    },
    methods: {
      setCur(){
        document.getElementById('audio').currentTime = this.percent*this.duration/100
        // console.log(this.currentTime,this.playStaus)
      },
      ...mapMutations([
        "togglePlayStatus","setCurrentTime"
      ])
    },
    computed: {
      ...mapState(["currentSong", "playStatus","currentTime","duration",])
    },
    watch:{
      currentTime(v){
        this.percent = v/this.duration*100;
      }
    }
    // beforeRouteLeave: (to, from, next) => {
    //   to.meta.alive = true;
    //   next();
    //   console.log('leave2222222')
    // }
  };
</script>
<style lang="scss" scoped>
  @import "../assets/style/mixin.scss";

  .cover {
    position: fixed;
    @include zero();
    @include blurBg();
  }

  .box {
    position: relative;
    width: 100%;
    overflow: hidden;
    &::after {
      content: '';
      display: block;
      position: absolute;
      z-index: $z1;
      background: url(../assets/needle.png) no-repeat;
      background-size: contain;
      top: -.2rem;
      left: 4.5*$per;
      transition: transform .3s;
      transform-origin: .45*$per 0rem;
      @include wh(3*$per, 3*1.43*$per);
    }

    .img-wrapper {
      @include wh(8rem);
      margin: 2.2rem auto;
      @include flex(center, center);
      transform-origin: 50% 50%;
      animation-play-state: running;
      -webkit-animation: cycle 6s linear infinite;
      -o-animation: cycle 6s linear infinite;
      animation: cycle 6s linear infinite;
      &::before {
        content: '';
        position: absolute;
        background: url(../assets/cd_wrapper.png);
        background-size: contain;
        @include wh(8rem);
        top:0;
        left: 0;
      }
      img {
        @include wh(5.2rem);
      }
    }

  }

  .needle-up {
    &::after {
      -webkit-transform: rotate(-30deg);
      -moz-transform: rotate(-30deg);
      -ms-transform: rotate(-30deg);
      -o-transform: rotate(-30deg);
      transform: rotate(-30deg);
    }
    .img-wrapper {
      animation-play-state: paused;

    }
  }

  @keyframes cycle {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .slider {
    position: fixed;
    bottom: 3rem;
    width: 100%;
    z-index: $z1;
    padding: 0 .5rem;
    @include flex(center, center);
    .demo-slider {
      margin: 0 .2rem;
    }
    span {
      @include cs(#eee, .3rem);
    }
  }

  .play-control {
    position: fixed;
    width: 100%;
    z-index: $z1;
    bottom: 1rem;
    @include flex(space-around, center);
    .iconfont {
      @include cs(#eee, 1rem);
    }
  }
</style>
