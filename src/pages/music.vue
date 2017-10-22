<template>
  <div class="wrapper">
    <!--<el-carousel trigger="click" indicator-position="none" height="4.8rem">-->
      <!--<el-carousel-item v-for="item in bannerData" :key="item.id">-->
        <!--<a v-lazy="item.url">-->
          <!--<img class="banner-pic" :src="item.pic" alt="">-->
        <!--</a>-->
      <!--</el-carousel-item>-->
    <!--</el-carousel>-->
  </div>
</template>
<script>
  import {getBanner} from 'config/fetch'

  export default {
    data() {
      return {
        bannerData: []
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      async init() {
        let res = await getBanner();
        this.bannerData = res.code === 200 ? res.banners : []
      }
    },
    computed: {}
  }
</script>
<style lang="scss" >
  @import '../assets/style/mixin.scss';

  .banner-pic {
    @include wh(100%, 4.8rem)
  }

</style>
