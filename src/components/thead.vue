<template>
  <div class="head" :style="`background:rgba(211,58,49,${opacity})`">
    <i @click="goBack" class="iconfont icon-back"></i>
    <div class="text">
      <h2 class="title ellipsis" v-show="!tittleToggle">{{this.underTitle}}</h2>      
      <h2 class="title ellipsis" v-show="tittleToggle">{{this.title}}</h2>
      <h3 class="sub-title ellipsis">{{this.subTitle}}</h3>
    </div>
  </div>
</template>
<script>
  export default {
    name:'thead',
    data() {
      return {
        opacity:0,
        tittleToggle:true
      };
    },
    props: ["title", "subTitle", "underTitle"],
    mounted() {
      window.onscroll = () => {
        var opa = window.pageYOffset / 250
        if (opa > 0.5) {
          this.tittleToggle = false;
        } else {
          this.tittleToggle = true;
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
    z-index: $z3;
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
        width: 70%;
      }
      .sub-title {
        @include cs(#ddd, .25rem);
        width: 70%;        
      }
    }
  }
</style>
