<template>
  <div id="app">
    <img v-lazy="img">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      img: ''
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    test(){
      return new Promise((res, rej) => {

          res(require('./assets/logo.png'))

      })
    },
    async fetch(){
      let d = await this.test()
      this.img = d
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
