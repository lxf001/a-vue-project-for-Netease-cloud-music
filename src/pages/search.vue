<template>
  <div>
    <div class="header">
      <div class="text-field">
        <i class="iconfont icon-back" @click="$router.go(-1)"></i>
        <div>
          <mu-text-field hintText="提示文字"/>
        </div>
        <i class="iconfont icon-delete"></i>
      </div>
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="song" title="单曲" @active="handleActive('high')"/>
        <mu-tab value="playlist" @active="handleActive('new')" title="歌单"/>
        <mu-tab value="artist" title="歌手" @active="handleActive('hot')"/>
      </mu-tabs>
    </div>
    <div class="search-result"></div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeTab:'song'
    };
  },
  mounted() {},
  methods: {
    handleTabChange(val){
       this.activeTab = val;
    },
    handleActive(){

    },
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
@import "../assets/style/mixin.scss";
.header{
  position: fixed;
  top: 0;
  width: 100%;
  z-index: $z4;
  .text-field{
    @include wh(100%,$h);
    background: $red;
    color:#fff;
    @include flex(space-around,center)
  }
}
.search-result{
  margin-top:$h;
}
</style>


