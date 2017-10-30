<template>
  <div>

    <mu-list>
      <mu-list-item :title="item.name" describeText="电话" v-for="item in rank.tracks" :key="item.id">
        <mu-icon value="1" color="indigo" slot="left"/>
      </mu-list-item>
    </mu-list>
      <mu-divider/>

  </div>
</template>
<script>
  import {getRank} from 'config/fetch'

  export default {
    data() {
      return {
        rank:{}
      }
    },
    mounted() {
      this.getRank();
    },
    methods: {
      async getRank(id=1) {
        try {
          let res = await getRank(id);
          this.rank = res.code === 200 ? res.result : {};


        } catch (e) {
          console.log("getPlaylist", e);
        }
      },
    },
    computed: {}
  }
</script>
<style lang="scss" scoped>
  @import '../assets/style/mixin.scss';

</style>
