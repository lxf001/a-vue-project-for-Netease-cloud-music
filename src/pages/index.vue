<template>
  <div>
    <!--轮播-->
    <el-carousel trigger="click" indicator-position="none" height="4.8rem">
      <el-carousel-item v-for="item in bannerData" :key="item.id">
        <a :href="item.url">
          <img class="banner-pic" :src="item.pic" alt="">
        </a>
      </el-carousel-item>
    </el-carousel>

    <!--推荐歌单-->
    <div class="content">
      <router-link to="/" class="title">
        <span class="text">推荐歌单 ></span>
      </router-link>
      <div class="items">
        <router-link :to="'/playlist/'+item.id" class="item one-third" v-for="item in recommendationData">
          <img v-lazy="item.picUrl" alt="">
          <p>{{item.name}}</p>
        </router-link>
      </div>
    </div>

    <!--华语精选-->
    <div class="content">
      <router-link to="/" class="title">
        <span class="text">华语精选 ></span>
      </router-link>
      <div class="items">
        <div class="item one-third" v-for="item in highQualityData">
          <img v-lazy="item.coverImgUrl" alt="">
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>

    <!--独家放送-->
    <div class="content">
      <router-link to="/" class="title">
        <span class="text">独家放送 ></span>
      </router-link>
      <div class="items">
        <div class="item half" v-for="item in privateCotentData">
          <img v-lazy="item.picUrl" alt="">
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>


  </div>

</template>
<script>
  import {getBanner, getRecommendation, getPrivateContent, getHighQuality} from 'config/fetch'
  import {mapActions} from 'vuex'

  export default {
    data() {
      return {
        bannerData: [],
        recommendationData: [],
        privateCotentData: [],
        highQualityData: [],

      }
    },
    mounted() {
      this.init();
    },
    methods: {
      ...mapActions([
        'setLoading'
                  ]),
      async init() {
        await this.getBanner();
        await this.getRecommendation();
        await this.getPrivateContent();
        await this.getHighQuality('华语');
        this.setLoading(false);

      },
      async getBanner() {
        try {
          let res = await getBanner();
          this.bannerData = res.code === 200 ? res.banners : [];
        } catch (e) {
          console.log('getBanner', e);
        }
      },
      async getRecommendation() {
        try {
          let res = await getRecommendation();
          this.recommendationData = res.code === 200 ? res.result : [];
        } catch (e) {
          console.log('getRecommendation', e);
        }
      },
      async getPrivateContent() {
        try {
          let res = await getPrivateContent();
          this.privateCotentData = res.code === 200 ? res.result : [];
        } catch (e) {
          console.log('getPrivateContent', e);
        }
      },
      async getHighQuality(cat) {
        try {
          let res = await getHighQuality(6, cat);
          this.highQualityData = res.code === 200 ? res.playlists : [];
        } catch (e) {
          console.log('getHighQuality', e);
        }
      }
    },
    computed: {},
  }
</script>
<style lang="scss" scoped>
  @import '../assets/style/mixin.scss';

  .banner-pic {
    @include wh(100%, 4.8rem);
  }

  .content {
    @include wh(100%);
    .title {
      display: block;
      @include wh(100%, 1rem);
      margin-top: .2rem;
      @include flex(flex-start, center);
      .text {
        padding-left: .4rem;
        border-left: 3px solid $red;
      }
    }
    .items {
      @include wh(100%);
      @include flex(space-between, center);
      flex-wrap: wrap;
      .one-third {
        flex-basis: 33%;
        height: 5rem;
      }
      .half {
        flex-basis: 40%;
        flex-grow: 1;
        height: 3.5rem;
        &:last-child {
          height: 5rem;
        }
      }
      .item {

        overflow: hidden;
        img {
          width: 100%;
          margin-bottom: .1rem;
        }
        p {
          @include ellipise();
          white-space: normal;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-size: .35rem;
          padding: 0 .1rem;
        }
      }
    }
  }

</style>
