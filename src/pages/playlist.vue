<template>
    <div>
        <transparentH title="歌单" :underTitle="playlist.name" :subTitle="playlist.tags.join(' ')"></transparentH>
        <section class="cover" >
            <div class="background" :style="`background-image:url('${playlist.coverImgUrl}')`"></div>
            <div class="cover-wrap">
                <div class="wl">
                    <img v-lazy="playlist.coverImgUrl" alt="" class="cover-img">
                    <i class="iconfont icon-headset">123</i>
                    <span class="tag">歌单</span>
                </div>
                <div class="wr">
                    <h2 class="name">{{playlist.name}}</h2>
                    <div class="creator">
                        <img :src="playlist.creator.avatarUrl" class="avatar" alt="">
                        <span class="nickname">{{playlist.creator.nickname}} ></span>
                    </div>
                </div>
            </div>
            <div class="detail">
                <div @click="message('收藏成功')" class="detail-item">
                    <i class="iconfont icon-star"></i>
                    <span>{{playlist.subscribedCount}}</span>
                </div>
                <div class="detail-item">
                    <i class="iconfont icon-comment"></i>
                    <span>{{playlist.commentCount}}</span>
                </div>
                <div class="detail-item">
                    <i class="iconfont icon-share"></i>
                    <span>{{playlist.shareCount}}</span>
                </div>
            </div>
        </section>
        <section class="playlist">
            <h5 class="title">
                歌曲列表
            </h5>
            <ul class="list">
                <li class="item" v-for="(item,index) in playlist.tracks" :key="index" :to="`/song/${item.id}`" @click="routerGo(item)">
                    <div class="index">{{index+1}}</div>
                    <div class="text">
                        <p class="name">{{item.name}}</p>
                        <p class="ar-name">{{item.ar[0].name+' - '+item.al.name}}</p>
                    </div>
                    <i class="iconfont icon-play1"></i>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
import transparentH from "comp/thead.vue";
import { getPlaylistDetail, getMusicUrl, getMusic } from "config/fetch";
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      playlist: {
        creator: {},
        tags: []
      }
    };
  },
  components: {
    transparentH
  },
  props: ["id"],
  mounted() {
    if (this.$route.params.fetch) {
      this.init();
    } else {
      if (this.playStorage.length !== 0) {
        this.playlist = this.playStorage;
      } else {
        this.init();
      }
    }
  },
  methods: {
    async init() {

      try {
        let res = await getPlaylistDetail(this.id);
        this.playlist = res.code === 200 ? res.playlist : {};

        //获取url的集合
        let ids = this.playlist.trackIds.map(x => x.id);
        res = await getMusicUrl(ids);
        let urls = res.code === 200 ? res.data : [];
        this.setLoading(false);

        //将对应的url添加到tracks中对应的歌曲中
        this.playlist.tracks.forEach(x => {
          urls.forEach(element => {
            if (element.id === x.id) {
              x.url = element.url;
            }
          });
        });

        //将Playlist缓存起来
        this.setPlayStorage(this.playlist);
      } catch (e) {
        console.log("getPlaylistDetail", e);
      }
    },
    message(message) {
      this.$message({
        message,
        type: "success"
      });
    },
    routerGo(item) {
      this.pushList(item);
      this.$router.push({
        name: "song"
      });
    },
    ...mapMutations(["setPlayStorage", "setLoading", "pushList"])
  },
  computed: {
    ...mapState(["playStorage"])
  },
  beforeRouteEnter: (to, from, next) => {
    if (from.name === "index") {
      to.params.fetch = true;
    } else {
      this.playlist = this.tracks;
      to.params.fetch = false;
    }
    next();
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/style/mixin.scss";
.cover {
  position: relative;
  @include wh(100%,7rem);
  overflow: hidden;
  .background {
    position: absolute;
    top: 0;
    @include wh(100%);
    @include blurBg();
  }
  .cover-wrap {
    @include wh(100%);
    @include flex(flex-start,center);
    padding: 1.8rem 0.5rem;
    .wl {
      position: relative;
      height: 100%;
      .cover-img {
        height: 100%;
      }
      @include headsetBar();
    }
    .wr {
      z-index: 2;
      height: 100%;
      padding-left: 0.5rem;
      .name {
        @include cs(#fff,0.5rem);
      }
      .creator {
        @include flex(flex-start,center);
        padding-top: 0.4rem;
        .avatar {
          width: 0.8rem;
          border-radius: 50%;
        }
        .nickname {
          padding-left: 0.2rem;
          @include cs(#ddd,0.4rem);
        }
      }
    }
  }
  .detail {
    position: absolute;
    @include wh(100%,1.5rem);
    bottom: 0;
    @include flex(space-around,center);
    .detail-item {
      @include flex(center,center,column);

      .iconfont {
        @include cs(#fff,0.65rem);
      }
      span {
        @include cs(#fff,0.35rem);
      }
    }
  }
}
//播放列表
.playlist {
  width: 100%;
  .title {
    background: #eee;
    @include cs(#333,0.4rem);
    line-height: 0.8rem;
    padding-left: 0.2rem;
  }
  .list {
    width: 100%;
    .item {
      position: relative;
      @include wh(100%,1.5rem);
      @include flex(flex-start,center);
      background: #fff;
      .index {
        flex-basis: 15%;
        height: 100%;
        @include flex(center,center);
      }
      .text {
        @include wh(85%,100%);
        @include flex(center,flex-start,column);
        border-bottom: 1px solid #eee;
        .name {
          width: 85%;
          @include ellipise();
        }
        .ar-name {
          width: 85%;
          @include ellipise();
          @include cs(#aaa,0.35rem);
        }
      }
      .iconfont {
        position: absolute;
        right: 0.5rem;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
      }
    }
  }
}
</style>
