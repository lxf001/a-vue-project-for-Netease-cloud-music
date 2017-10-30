<template>
  <div>
    <mu-popup position="top" :overlay="false" popupClass="demo-popup-top" :open="topPopup">
      功能暂未开发
    </mu-popup>
    <div class="header">
      <div class="text-field">
        <i class="iconfont icon-back" @click="$router.go(-1)"></i>
        <div>
          <mu-text-field hintText="请输入..."  @change="getSearch()" v-model="keywords"/>
        </div>
        <i class="iconfont icon-delete"></i>
      </div>
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="song" title="单曲" @active="handleActive('song')"/>
        <mu-tab value="playlist" @active="handleActive('playlist')" title="歌单"/>
        <mu-tab value="artist" title="歌手" @active="handleActive('artist')"/>
        <mu-tab value="album" title="专辑" @active="handleActive('album')"/>
      </mu-tabs>
    </div>
    <div class="placeholder"></div>

      <!-- 单曲 -->
    <mu-list v-if="activeTab ==='song'">
      <mu-list-item :title="item.name" :describeText="`${item.artists[0].name} - ${item.album.name}`" v-for="(item,index) in song" :key="item.id"  @click="routerToSong(item)">
       <i class="iconfont icon-play1" slot="right" ></i>
      </mu-list-item>
    </mu-list>

    <!-- 歌单 -->
    <mu-list v-if="activeTab ==='playlist'" >
      <mu-list-item :title="item.name" :describeText="`${item.creator.nickname}`" v-for="(item,index) in playlist" :key="item.id"  @click="routerToPlaylist(item.id)">
        <img v-lazy="item.coverImgUrl" alt="" slot="left" style="width:40px;height:40px">
      </mu-list-item>
    </mu-list>

    <!-- 歌手 -->
    <mu-list v-if="activeTab ==='artist'">
      <mu-list-item :title="item.name"  v-for="(item,index) in artist" :key="item.id" @click="topPopup=true" >
        <mu-avatar slot="leftAvatar" :src="item.picUrl"></mu-avatar>
      </mu-list-item>
    </mu-list>

    <!-- 专辑 -->
    <mu-list v-if="activeTab ==='album'">
      <mu-list-item :title="item.name" :describeText="`${item.artists[0].name}`" v-for="(item,index) in album" :key="item.id" @click="topPopup=true">
        <img v-lazy="item.picUrl" alt="" slot="left" style="width:40px;height:40px">

      </mu-list-item>
    </mu-list>

  </div>
</template>
<script>
import { getSearch, getMusicUrl } from "config/fetch";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      topPopup:false,
      keywords: "",
      activeTab: "song",
      song: [],
      playlist: [],
      artist: [],
      album: []
    };
  },
  mounted() {},
  methods: {
    handleTabChange(val) {
      this.activeTab = val;
    },
    handleActive(n) {
      console.log(n);
    },
    async getSearch() {
      try {
        let songRes = await getSearch(this.keywords, 1);
        let albumRes = await getSearch(this.keywords, 10);
        let artistRes = await getSearch(this.keywords, 100);
        let playlistRes = await getSearch(this.keywords, 1000);
        this.song = songRes.code === 200 ? songRes.result.songs : [];
        this.album = albumRes.code === 200 ? albumRes.result.albums : [];
        this.artist = artistRes.code === 200 ? artistRes.result.artists : [];
        this.playlist =
          playlistRes.code === 200 ? playlistRes.result.playlists : [];
        this.pushListStorage(this.playlist)
        //获取url的集合
        let ids = this.song.map(x => x.id);
        let res = await getMusicUrl(ids);
        let urls = res.code === 200 ? res.data : [];

        //将对应的url添加到tracks中对应的歌曲中
        this.song.forEach(x => {
          urls.forEach(element => {
            if (element.id === x.id) {
              x.url = element.url;
            }
          });
        });
        console.log(111, this.song);
      } catch (e) {
        console.log("getSearch", e);
      }
    },
    routerToSong(item) {
      this.pushList(item);
      this.$router.push({
        name: "song"
      });
    },
    routerToPlaylist(id) {
      this.$router.push({
        name: "playlist",
        params:{
          id
        }
      });
    },
    ...mapMutations(["pushList" ,'pushListStorage'])
  },
  computed: {},
  watch:{
    topPopup(val){
      if(val){
        setTimeout(()=>this.topPopup=false,1200)
      }
    }
  }
};
</script>
<style lang="scss" >
@import "../assets/style/mixin.scss";
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: $z4;
  .text-field {
    @include wh(100%,$h);
    background: $red;
    color: #fff;
    @include flex(space-around,center);
  }
}
.placeholder {
  @include wh(100%,2*$h);
}
.demo-popup-top{
  width: 100%;
  opacity: .8;
  height: 48px;
  line-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 375px;
}
</style>


