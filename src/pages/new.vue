<template>
  <div class="content">
    <div class="items">
      <router-link :to="'/playlist/'+item.id" class="item one-third" v-for="item in playlist" :key="item.id">
        <img v-lazy="item.coverImgUrl" alt="">
        <span class="tag" v-if="item.highQuality">精品</span>
        <i class="iconfont icon-headset">{{item.playCount | numConversion}}</i>
        <p>{{item.name}}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
  import {getPlaylist} from "config/fetch";
  import {mapMutations} from 'vuex'

  export default {
    data() {
      return {
        playlist: []
      }
    },
    mounted() {
      this.getPlaylist();
    },
    methods: {
      async getPlaylist() {
        try {
          let res = await getPlaylist(30,'new');
          this.playlist = res.code === 200 ? res.playlists : [];
          this.pushListStorage(this.playlist);

        } catch (e) {
          console.log("getPlaylist", e);
        }
      },
      ...mapMutations([
        'pushListStorage'
      ])
    },
    computed: {},
    filters: {
      numConversion(num) {
        if (num > 10000) {
          return Math.ceil(num / 10000) + "万";
        }
        return num;
      },
    }
  }
</script>
<style lang="scss" scoped>
  @import '../assets/style/mixin.scss';

  .content {
    @include wh(100%);
    padding-top: .5rem  ;
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
