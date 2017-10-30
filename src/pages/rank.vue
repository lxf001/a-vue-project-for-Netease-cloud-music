<template>
  <div>

    <mu-list >
      <mu-list-item :title="item.name" :describeText="`${item.artists[0].name} - ${item.album.name}`" v-for="(item,index) in rank.tracks" :key="item.id"  @click="routerGo(item)">
        <mu-avatar color="red" backgroundColor="transparent" slot="leftAvatar" style="color:red">{{index+1}}</mu-avatar>
       <i class="iconfont icon-play1" slot="right" ></i> 
      </mu-list-item>
    </mu-list>
    <mu-divider/>

  </div>
</template>
<script>
import { getRank,getMusicUrl } from "config/fetch";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      rank: {}
    };
  },
  mounted() {
    this.getRank();
  },
  methods: {
    async getRank(id = 1) {
      try {
        let res = await getRank(id);
        this.rank = res.code === 200 ? res.result : {};

        //获取url的集合
        let ids = this.rank.tracks.map(x => x.id);
        res = await getMusicUrl(ids);
        let urls = res.code === 200 ? res.data : [];

        //将对应的url添加到tracks中对应的歌曲中
        this.rank.tracks.forEach(x => {
          urls.forEach(element => {
            if (element.id === x.id) {
              x.url = element.url;
            }
          });
        });
      } catch (e) {
        console.log("getPlaylist", e);
      }
    },
    routerGo(item) {
      this.pushList(item);
      this.$router.push({
        name: "song"
      });


    },
    ...mapMutations(["pushList"])
  },
  computed: {}
};
</script>
<style lang="scss" >
@import "../assets/style/mixin.scss";
#app
  > div.router
  > div
  > div:nth-child(1)
  > div
  > div
  > div.mu-item.show-left.has-avatar
  > div.mu-item-left
  > div
  > div {
  color: #fff !important;
  background: $pink;
}
#app
  > div.router
  > div
  > div:nth-child(2)
  > div
  > div
  > div.mu-item.show-left.has-avatar
  > div.mu-item-left
  > div
  > div {
  color: #fff !important;
  background: $pink;
}
#app
  > div.router
  > div
  > div:nth-child(3)
  > div
  > div
  > div.mu-item.show-left.has-avatar
  > div.mu-item-left
  > div
  > div {
  color: #fff !important;
  background: $pink;
}
</style>
