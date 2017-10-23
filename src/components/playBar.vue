<template>
  <div class="wrapper">
    <div class="placeholder"></div>
    <transition name="mask">
      <div class="mask" @touchmove.prevent @wheelDelta.prevent @click="toggleList" v-show="list"></div>
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
    <transition name="list">
      <ul class="list" v-show="list">
        <li class="title">{{'播放列表'}}</li>
        <li class="item" v-for="n in 8">我是你的<span class="artist">&nbsp- 孙燕姿</span> <i class="iconfont icon-delete"></i>
        </li>

      </ul>
    </transition>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        status: false,
        list: false
      }
    },
    mounted() {

    },
    methods: {
      toggleStatus() {
        this.status = !this.status;
      },
      toggleList() {
        this.list = !this.list;
      }
    },
    computed: {}
  }
</script>
<style lang="scss" scoped>
  @import '../assets/style/mixin.scss';
.wrapper{
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

    background: rgba(0, 0, 0, .77);
    top: 0;
    bottom: 0;
    left:0;
    right:0;
    z-index: 99;
  }

  .playBar {
    position: fixed;
    z-index: 9;
    bottom: 0;
    @include wh(100%, $h);
    background: #fff;
    -webkit-box-shadow:  1px -1px 10px $gray;
    -moz-box-shadow:  1px -1px 10px $gray;
    box-shadow:  1px -1px 10px $gray;
    overflow: hidden;
    @include flex(space-between, center);

    .music-info {
      @include wh(60%, $h);
      @include flex(flex-start, center);
      overflow: hidden;
      img {
        @include wh(($h)-.2rem);
        padding: .1rem;
      }
    }

    .btn {
      @include flex(space-between,center);
      .iconfont {
        @include cs($red, 1rem);
        padding: .2rem;
      }
    }
  }

  $listHeight: 10rem;
  .list {
    position: fixed;
    bottom: 0;
    z-index: 999;
    @include wh(100%, 10rem);
    background: #fff;
    li {
      border-bottom: 1px solid #eee;
      @include cs(#000, .45rem)
    }
    .title {
      @include wh(100%, 1.3rem);
      @include flex(center, center);
      font-size: .55rem;
    }
    .item {
      @include wh(100%, 1rem);
      @include flex(flex-start, baseline);
      line-height: 1rem;
      padding-left: .4rem;
      .artist {
        @include cs($gray, .3rem)
      }
      .iconfont {
        @include cs($gray, .3rem);
        padding-right: .4rem;
        margin-left: auto;
      }
    }
  }

  .list-enter, .list-leave-to {
    bottom: -$listHeight;
  }

  .list-enter-active, .list-leave-active {
    transition: bottom .3s;
  }

  .mask-enter, .mask-leave-to {
    opacity: 0;
  }

  .mask-enter-active, .mask-leave-active {
    transition: opacity .3s;
  }
</style>
