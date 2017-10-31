<template>
  <div class="margin-top">
    <transparentHead :title="currentSong.name" :subTitle="currentSong.artist" underTitle="ff"></transparentHead>
    <div class="cover" ></div>

    <div v-show="!showLyric" class="box" :class="playStatus?'':'needle-up'"  @click="showLyric = !showLyric">
      <div class="img-wrapper">
        <img v-lazy="currentSong.cover" alt="">
      </div>
    </div>
    <div class="lyric-box" v-show="showLyric" @click="showLyric = !showLyric">
      <ul class="lyric" :style="`transform:translateY(-${lyricIndex}rem)`">
        <li v-for="(item,i) in lyricArr" :key="i" :class="i===lyricIndex?'color-white':''">
        {{item.lrc}}
        </li>
      </ul>
    </div>
    <div class="slider">
      <div class="time">{{currentTime|format}}</div>
      <mu-slider v-model="percent" @change="setCur" class="slider-bar"/>
      <!-- <el-slider  :show-tooltip="false"  class="slider-bar"></el-slider> -->
      <div class="time">{{ duration|format}}</div>
    </div>
    <div class="play-control">
      <i class="iconfont icon-singlecycle"></i>
      <i class="iconfont icon-previous" @click="setCurrentSong(index-1)"></i>
      <i class="iconfont icon-play1" :class="playStatus?'icon-pause':'icon-play4'" @click="togglePlayStatus"></i>
      <i class="iconfont icon-next" @click="setCurrentSong(index+1)"></i>
      <i class="iconfont icon-list" @click="toggleListShow"></i>
    </div>
  </div>

</template>
<script>
import transparentHead from "comp/thead";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      percent: this.currentTime,
      lyricIndex: 0,
      showLyric:false
    };
  },
  components: {
    transparentHead
  },
  props: ["id"],
  mounted() {
    this.setCurrentSong();

  },
  methods: {
    setCur() {
      document.getElementById("audio").currentTime =
        this.percent * this.duration / 100;
    },
    //将aa:bb时间字符串转为秒数
    parseSec(str) {
      let minute = str.slice(0,str.indexOf(':'));
          minute = parseInt(minute,10)*60;
      let second = str.slice(str.indexOf(':')+1);
          second = parseFloat(second,10);
      return minute+second
    },
    ...mapMutations([
      "togglePlayStatus",
      "setCurrentTime",
      "setLoading",
      "toggleListShow"
    ]),
    ...mapActions(["setCurrentSong"])
  },
  computed: {
    ...mapState([
      "currentSong",
      "playStatus",
      "currentTime",
      "duration",
      "index"
    ]),
    //歌词数组
    lyricArr() {
      let lyric = this.currentSong.lyric;
      if (lyric) {
        lyric = lyric.split("\n"); //每一句歌词为一项
        lyric.pop();//去掉末尾空项
        lyric =  lyric.map(function(value, index, array) {
          let arr = value.split("]");
          let time = this.parseSec(arr[0].slice(1));
          let lrc = arr[1];
          return {time,lrc}
        }, this);
        return lyric;
      }
    }
  },
  filters: {
    format(value) {
      let minute = parseInt(value / 60);
      minute = minute >= 10 ? minute : "0" + minute;
      let second = parseInt(value % 60);
      second = second >= 10 ? second : "0" + second;
      return minute + ":" + second;
    }
  },
  watch: {
    currentTime(v) {
      this.percent = v / this.duration * 100;
      this.lyricArr.forEach(function(value,index,array) {
        if(value.time<v){
          this.lyricIndex = index;

        }
      }, this);

    }
  }
  // beforeRouteLeave: (to, from, next) => {
  //   to.meta.alive = true;
  //   next();
  //   console.log('leave2222222')
  //
};
</script>
<style lang="scss" scoped>
@import "../assets/style/mixin.scss";

.cover {
  position: fixed;
  @include zero();
  background: $bg;
}

.box {
  position: relative;
  width: 100%;
  overflow: hidden;
  &::after {
    content: "";
    display: block;
    position: absolute;
    z-index: $z1;
    background: url(../assets/needle.png) no-repeat;
    background-size: contain;
    top: -0.12rem;
    left: 4.3*$per;
    transition: transform 0.5s;
    transition-timing-function: ease;
    transform-origin: 0.45*$per 0rem;
    -webkit-transition: transform 0.5s; /* Safari */
    -webkit-transition-timing-function: ease; /* Safari */
    -webkit-transform-origin: 0.3*$per 0rem;
    @include wh(2*$per, 2*1.43*$per);
  }

  .img-wrapper {
    @include wh(7.8rem);
    margin: 1.75rem auto;
    @include flex(center, center);
    transform-origin: 50% 50%;
    animation-play-state: running;
    -webkit-animation: cycle 6s linear infinite;
    -o-animation: cycle 6s linear infinite;
    animation: cycle 6s linear infinite;
    &::before {
      content: "";
      position: absolute;
      background: url(../assets/cd_wrapper.png) no-repeat;
      background-size: contain;
      @include wh(7.8rem);
      top: 0;
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

//歌词
.lyric-box{
  position: fixed;
  overflow: hidden;
  top: 2rem;
  bottom: 3.5rem;
  width: 100%;
  .lyric{
      transition: all .7s ease-out;
    padding-top:50%;
    li{
      @include cs($gray,.42rem);
      text-align: center;
      height: 1rem;
      line-height: 1rem;
    }
  }
}

.slider {
  position: fixed;
  bottom: 2.5rem;
  width: 100%;
  height: 24px;
  z-index: $z1;
  padding: 0 0.5rem;
  @include flex(center, center);
  .slider-bar {
    width: 80%;
    margin: 0;
    padding: 0;
  }
  .time {
    @include cs(#eee, 0.3rem);
    text-align: center;
    margin: 0 0.1rem;
    padding: 0;
  }
}

.play-control {
  position: fixed;
  width: 100%;
  z-index: $z1;
  bottom: 0.5rem;
  @include flex(space-around, center);
  .iconfont {
    @include cs(#eee, 1rem);
  }
}
.color-white{
  color:white !important;
}
</style>
