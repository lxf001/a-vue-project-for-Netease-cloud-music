<template>
<div>
    <mu-slider v-model="value1" class="demo-slider" color="red"/>
</div>

</template>
<script>
import { getLyric } from "config/fetch";
export default {
  data() {
    return {
      value1: 1
    };
  },
  props: ["id"],
  mounted() {
    this.getLyric();
  },
  methods: {
    getLyric() {
      try {
        let res = getLyric(this.id);
        console.log(123, res);
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
