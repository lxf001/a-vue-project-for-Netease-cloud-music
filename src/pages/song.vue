<template>
<div>
  <transparentHead :title="123"></transparentHead>
    <mu-slider v-model="value1" class="demo-slider" color="red"/>
</div>

</template>
<script>
  import transparentHead from 'comp/thead'
import { getLyric } from "config/fetch";
export default {
  data() {
    return {
      value1: 1
    };
  },
  components:{
    transparentHead
  },
  props: ["id"],
  mounted() {
    this.getLyric();
  },
  methods: {
    getLyric() {
      try {
        let res = getLyric(this.id);
      } catch (e) {
        console.log('getLyric',e)
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/style/mixin.scss";
</style>
