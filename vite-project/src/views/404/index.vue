<template>
  <div class="box">
    <img alt="" src="../../assets/images/error_images/404.png" />
    <button @click="goHome">首页</button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

let $router = useRouter()
const goHome = () => {
  $router.push('/home')
}
</script>

<style lang="scss" scoped>
.box {
  width: 100vw;
  height: 100vh;
  background: yellowgreen;
  display: flex;
  justify-content: center;

  img {
    width: 800px;
    height: 400px;
  }

  button {
    width: 50px;
    height: 50px;
  }
}
</style>
