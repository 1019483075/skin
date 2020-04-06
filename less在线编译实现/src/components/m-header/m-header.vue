<template>
  <div class="header">
    <div class="text">小恐龙换肤</div>
    <div role="switch" class="switch" :class="theme === true ? 'is-checked' : ''">
      <input type="checkbox" class="switch-input" />
      <span class="switch-core" @click="changeTheme"></span>
    </div>
  </div>
</template>

<script>
import { lightTheme, darkTheme } from "../../assets/js/variable";
export default {
  name: "m-header",
  data() {
    return {
      theme: true
    };
  },
  methods: {
    changeTheme() {
      this.theme = !this.theme;
      // 调用 `less.modifyVars` 方法来改变变量值
      window.less.modifyVars(this.theme ? lightTheme : darkTheme);
    }
  },
  mounted() {}
};
</script>

