<template>
  <div class="head" :style="`background:rgba(211,58,49,${opacity})`">
    <i @click="goBack" class="iconfont icon-back"></i>
    <div class="text">
      <h2 class="title">{{this.comTitle}}</h2>
      <h3 class="sub-title">{{this.subTitle}}</h3>
    </div>
  </div>
</template>
<script>
  export default {
    name:'thead',
    data() {
      return {
        opacity:0,
        comTitle:this.title
      };
    },
    props: ["title", "subTitle", "underTitle"],
    mounted() {
      window.onscroll = () => {
        var opa = window.pageYOffset / 250
        if (opa > 0.5) {
          this.comTitle = this.underTitle;
        } else {
          this.comTitle = this.title;
        }
        this.opacity = window.pageYOffset / 250
      }
    },
    methods:{
      goBack(){
        this.$router.go(-1);
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../assets/style/mixin.scss";

  .head {
    @include wh(100%, $h);
    @include flex(flex-start, center);
    position: fixed;
    z-index: 999;
    top: 0;
    &::after {
      content: "";
      @include wh(100%, 0.02rem);
      position: absolute;
      bottom: 0;
      background: -webkit-linear-gradient(left, transparent, #ddd, transparent); /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(right, transparent, #ddd, transparent); /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(right, transparent, #ddd, transparent); /* Firefox 3.6 - 15 */
      background: linear-gradient(to right, transparent, #ddd, transparent); /* 标准的语法 */
    }
    .icon-back {
      @include cs(#fff, .6rem);
      margin: 0 .4rem;
    }
    .text {
      @include wh(100%, 100%);
      overflow: hidden;
      @include flex(center, flex-start, column);
      .title {
        @include cs(#fff, .45rem);
      }
      .sub-title {
        @include cs(#ddd, .25rem);
      }
    }
  }
</style>
