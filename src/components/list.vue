<template>
      <transition name="list">
      <ul class="list" v-show="listShow">
        <li class="title">{{'播放列表'}}</li>
        <li class="item" v-for="n in 8" :key="n">我是你的<span class="artist">&nbsp- 孙燕姿</span> <i class="iconfont icon-delete"></i>
        </li>
      </ul>
    </transition>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data(){
    return {

    }
  },
  computed:{
    ...mapState([
      'listShow'
    ])
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/style/mixin.scss';

  $listHeight: 10rem;
  .list {
    position: fixed;
    bottom: 0;
    z-index: $z4;
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
</style>

