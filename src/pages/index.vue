<template>
  <div class="wrapper">
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
        <router-link :to="'/playlist/'+item.id" class="item one-third" v-for="item in recommendationData" :key="item.id">
          <img v-lazy="item.picUrl" alt="">
          <span class="tag" v-if="item.highQuality">精品</span>
          <i class="iconfont icon-headset">{{numConversion(item.playCount)}}</i>
          <p>{{item.name}}</p>
        </router-link>
      </div>
    </div>

    <!--华语精选-->
    <div class="content">
      <router-link to="/music/high" class="title">
        <span class="text">华语精选 ></span>
      </router-link>
      <div class="items">
        <router-link :to="'/playlist/'+item.id" class="item one-third" v-for="item in highQualityData" :key="item.id">
          <img v-lazy="item.coverImgUrl" alt="">
          <span class="tag" v-if="item.highQuality">精品</span>
          <i class="iconfont icon-headset">{{numConversion(item.playCount)}}</i>
          <p>{{item.name}}</p>
        </router-link>
      </div>
    </div>

    <!--独家放送-->
    <div class="content">
      <router-link to="/" class="title">
        <span class="text">独家放送 ></span>
      </router-link>
      <div class="items">
        <div class="item half" v-for="item in privateCotentData" :key="item.id">
          <img v-lazy="item.picUrl" alt="">
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>


  </div>

</template>
<script>
import {
  getBanner,
  getRecommendation,
  getPrivateContent,
  getHighQuality
} from "config/fetch";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      bannerData: [],
      recommendationData: [],
      privateCotentData: [],
      highQualityData: []
    };
  },
  mounted() {
    this.init();

  },
  methods: {
    ...mapMutations(["setLoading", "pushListStorage"]),
    async init() {
      this.getBanner();
      this.getPrivateContent();
      await this.getRecommendation();
      await this.getHighQuality("华语");
      this.pushListStorage([...this.recommendationData,...this.highQualityData])
    },
    async getBanner() {
      try {
        let res = await getBanner();
        this.bannerData = res.code === 200 ? res.banners : [];
      } catch (e) {
        console.log("getBanner", e);
      }
    },
    async getRecommendation() {
      try {
        let res = await getRecommendation();
        this.recommendationData = res.code === 200 ? res.result : [];
      } catch (e) {
        console.log("getRecommendation", e);
      }
    },
    async getPrivateContent() {
      try {
        let res = await getPrivateContent();
        this.privateCotentData = res.code === 200 ? res.result : [];
      } catch (e) {
        console.log("getPrivateContent", e);
      }
    },
    async getHighQuality(cat) {
      try {
        let res = await getHighQuality(6, cat);
        this.highQualityData = res.code === 200 ? res.playlists : [];
      } catch (e) {
        console.log("getHighQuality", e);
      }
    },
    numConversion(num) {
      if (num > 10000) {
        return Math.ceil(num / 10000) + "万";
      }
      return num;
    },
  },
  computed: {},
  beforeDestroy() {
    console.log(123);
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/style/mixin.scss";
.wrapper {
  position: relative;
  z-index: 1;
}
.banner-pic {
  @include wh(100%, 4.8rem);
}

.content {
  @include wh(100%);
  .title {
    display: block;
    @include wh(100%, 1rem);
    margin-top: 0.2rem;
    @include flex(flex-start, center);
    .text {
      padding-left: 0.4rem;
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
      @include headsetBar();
      overflow: hidden;
      img {
        width: 100%;
        margin-bottom: 0.1rem;
      }
      p {
        @include ellipise();
        white-space: normal;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 0.35rem;
        padding: 0 0.1rem;
      }
    }
  }
}
</style>
