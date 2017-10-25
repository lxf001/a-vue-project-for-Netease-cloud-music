<template>
  <div class="head">
    <i class="iconfont icon-back"></i>
    <div class="text">
      <h2 class="title">{{this.title}}</h2>
      <h3 class="sub-title">{{this.subTitle}}</h3>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["title", "subTitle"]
};
</script>
<style lang="scss" scoped>
@import "../assets/style/mixin.scss";
.head {
  @include wh(100%,$h);
  @include flex(flex-start,center);
  position: fixed;
  z-index: $z2;
  top: 0;
  background: transparent;
  &::after {
    content: "";
    @include wh(100%,0.02rem);
    position: absolute;
    bottom: 0;
    background: -webkit-linear-gradient(left, transparent, #ddd,transparent); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, transparent, #ddd,transparent); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, transparent, #ddd,transparent); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, transparent, #ddd,transparent); /* 标准的语法 */
  }
  .icon-back {
    @include cs(#fff,.6rem);
    margin:0 .4rem;
  }
  .text{
    @include wh(100%,100%);
    overflow: hidden;
    @include flex(center,flex-start,column);
    .title{
      @include cs(#fff,.4rem);
    }
    .sub-title{
      @include cs(#bbb,.25rem);
    }
  }
}
</style>
