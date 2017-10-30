<template>
  <div>
    <div class="placeholder"></div>
    <div class="head">

      <!--空-->
      <i class="iconfont icon-play2"></i>

      <div class="center">
        <router-link :to="`/music/${activeTab}`" class="iconfont icon-music" :class="this.$route.path.indexOf('/music')!==-1?'white-icon':''"></router-link>
        <router-link to="/" class="iconfont icon-netease" :class="this.$route.path ==='/'?'white-icon':''"></router-link>
        <router-link to="/rank" class="iconfont icon-rank" :class="this.$route.path ==='/rank'?'white-icon':''"></router-link>
      </div>

      <router-link class="iconfont icon-search" to="/search"></router-link>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    name:'head',
    data() {
      return {};
    },
    mounted() {
      console.log(this.$route);
    },
    methods: {

    },
    computed: {
      ...mapState([
        'activeTab'
      ])
    }
  };
</script>
<style lang="scss" scoped>
  @import "../assets/style/mixin.scss";

  .placeholder {
    @include wh(100%, $h);
  }

  .head {
    position: fixed;
    top: 0;
    z-index:99;
    @include wh(100%,$h);
    background: $red;
    @include flex(space-between,center);
    .iconfont{
      @include cs($pink,.7rem);
      padding: 0 .3rem;
    }
    .icon-play2{
      color:$red;
    }
    .icon-search{
      color:#fff;
    }
    .white-icon{
      color:#fff;
    }
  }
</style>
