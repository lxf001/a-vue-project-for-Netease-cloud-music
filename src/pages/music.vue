<template>
  <div>
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="high" title="精品歌单" @active="handleActive('high')"/>
      <mu-tab value="hot" title="热门歌单" @active="handleActive('hot')"/>
      <mu-tab value="new" @active="handleActive('new')" title="最新歌单"/>
    </mu-tabs>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    data() {
      return {
        activeTab: 'high'
      }
    },
    mounted(){
      this.activeTab = 'tab1',
        console.log(1111,this.activeTab)
    },
    methods: {
      handleTabChange(val) {
        this.activeTab = val;
        this.setActiveTab(val);
      },
      handleActive(name) {
        this.$router.push({
          name
        })
      },
      ...mapMutations([
        'setActiveTab'
      ])
    },

  }
</script>
