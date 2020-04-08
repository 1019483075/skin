<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import cssVars from "css-vars-ponyfill";

// let theme = 1;

// const lightTheme = {
//   "--bg-color": "#f5f6f7",
// };

// const darkTheme = {
//   "--bg-color": "#000000",
// };

export default {
  name: "App",
  components: {},
  methods: {
    change() {
      document.documentElement.setAttribute(
        "data-theme",
        theme ? "light" : "dark",
      );
      cssVars({
        variables: theme ? lightTheme : darkTheme,
        onlyLegacy: false,
      });
      theme = !theme;
    },
  },
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
