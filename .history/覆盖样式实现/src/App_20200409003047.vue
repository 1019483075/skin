<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {},
};
</script>

<style lang="scss">
@import "./assets/scss/index.scss";

[data-theme="dark"] {
  body {
    background: $dark-fill-1;
  }
  .reaconmend .reaconmend-list .item .name {
    color: $dark-color-text;
  }
  .reaconmend .reaconmend-list .item .desc {
    color: $dark-color-text-1;
  }
  .header .text {
    color: $dark-color-text-2;
  }
}
</style>
