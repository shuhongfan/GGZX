<template>
  <div class="com">
    <h1>
      各种Vue组件间通信/传值
      <span style="color: red;">非常重要, 面试必备</span>
    </h1>

    <div>
      <h2 style="display: inline">演示:</h2>&nbsp;&nbsp;
      <router-link to="/props_pre">props</router-link>&nbsp;&nbsp;
      <router-link to="/event_pre">custom event</router-link>&nbsp;&nbsp;
      <router-link to="/bus_pre">event bus</router-link>&nbsp;&nbsp;
      <router-link to="/model_pre">v-model</router-link>&nbsp;&nbsp;
      <router-link to="/attrs-listeners_pre">useAttrs</router-link>&nbsp;&nbsp;
      <router-link to="/ref-parent_pre">ref$parent</router-link>&nbsp;&nbsp;
      <router-link to="/provide-inject_pre">provide-inject</router-link>&nbsp;&nbsp;
      <router-link to="/vuex_pre">pinia</router-link>&nbsp;&nbsp;
      <router-link to="/slot_pre">slot</router-link>&nbsp;&nbsp;
    </div>
    <br>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'App',
  }
</script>
<script lang="ts" setup>
  
</script>
<style lang="less" scoped>
  .com {
    margin: 10px;
    a {
      font-size: 16px;
      margin-right: 5px;
      &.router-link-active {
        color: red;
      }
    }
  }
</style>
<style>
  .box {
    border: solid 1px #aaa;
    margin: 5px;
    padding: 5px;
  }
</style>