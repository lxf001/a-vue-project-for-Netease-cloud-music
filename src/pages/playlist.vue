<template>
    <div>
123我 {{id}}
      <img src="../assets/404.png" alt="">
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
      props:['id'],
        mounted() {
          console.log(123)
        },
        methods: {},
        computed: {}
    }
</script>
<style lang="scss" scoped>
    @import '../assets/style/mixin.scss';

</style>
