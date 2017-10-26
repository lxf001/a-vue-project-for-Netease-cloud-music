<template>
<div class="margin-top">
  <transparentHead title="歌单" subTitle="1q23" underTitle="ff"></transparentHead>
    <div class="cover" :style="`background-image:url('${currentSong.cover}')`"></div>
    
    <div class="box">
      <div class="img-wrapper">
        <img :src="currentSong.cover" alt="">
      </div>
    </div>
    <mu-slider v-model="value1" class="demo-slider" color="red"/>
</div>

</template>
<script>
import transparentHead from "comp/thead";
import { getLyric } from "config/fetch";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      value1: 1
    };
  },
  components: {
    transparentHead
  },
  props: ["id"],
  mounted() {},
  methods: {
    getLyric() {
      try {
        let res = getLyric(this.id);
      } catch (e) {
        console.log("getLyric", e);
      }
    }
  },
  computed: {
    ...mapState(["currentSong"])
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
  &::after{
    content:'';
    display: block;
    position: absolute;
    z-index: $z1;
    background:url(../assets/needle.png)  no-repeat;
    background-size: contain;
    top:0;
    left:4.5*$per;
    @include wh(3*$per,3*1.43*$per);
  }
  .img-wrapper{
    padding-top:3rem;
    @include flex(center,center);
    &::before{
      content: '';
      position: absolute;
      background:url(../assets/cd_wrapper.png);
      background-size: contain;
      @include wh(6rem);
    }
    img{
      @include wh(4rem);
    }
  }
}
</style>
