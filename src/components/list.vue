<template>

<div>
      <transition name="mask">
        <div class="mask" @touchmove.prevent @wheelDelta.prevent @click="toggleListShow" v-show="listShow"></div>
      </transition>

    <transition name="list">
      <ul class="list" v-show="listShow">
        <li class="title">{{'播放列表'}}</li>
        <li class="item" v-for="(n,index) in list" :key="n.id" @click="setCurrentSong(index)">{{n.name}}<span class="artist">&nbsp- {{n.artist}}</span> <i class="iconfont icon-delete" @click.stop="deleteSong(index)"></i>
        </li>
      </ul>
    </transition>
</div>
</template>
<script>
import { mapState,mapMutations,mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["listShow", "list"])
  },
  methods:{
    ...mapMutations([
      'toggleListShow',
      'deleteSong'
    ]),
    ...mapActions([
      'setCurrentSong'
    ])
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/style/mixin.scss";

$listHeight: 10rem;
.list {
  position: fixed;
  bottom: 0;
  z-index: $z5;
  @include wh(100%, 10rem);
  background: #fff;
  li {
    border-bottom: 1px solid #eee;
    @include cs(#000, 0.45rem);
  }
  .title {
    @include wh(100%, 1rem);
    @include flex(center, center);
    font-size: 0.55rem;
    background: #eee;
  }
  .item {
    @include wh(100%, 1.3rem);
    @include flex(flex-start, baseline);
    line-height: 1.3rem;
    padding-left: 0.4rem;
    .artist {
      @include cs($gray, 0.3rem);
    }
    .iconfont {
      @include cs($gray, 0.3rem);
      padding-right: 0.4rem;
      margin-left: auto;
    }
  }
}
.mask {
  position: fixed;
  background: rgba(0, 0, 0, 0.77);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: $z4;
}
.list-enter,
.list-leave-to {
  bottom: -$listHeight;
}

.list-enter-active,
.list-leave-active {
  transition: bottom 0.3s;
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

