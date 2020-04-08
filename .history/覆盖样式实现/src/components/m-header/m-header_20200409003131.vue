<template>
  <div class="header">
    <div class="text">小恐龙换肤</div>
    <div
      role="switch"
      class="switch"
      :class="theme === true ? 'is-checked' : ''"
    >
      <input
        type="checkbox"
        name=""
        true-value="true"
        class="switch-input"
      /><span class="switch-core" @click="changeTheme"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "m-header",
  data() {
    return {
      theme: true, // false深色主题
    };
  },
  methods: {
    changeTheme() {
      this.theme = !this.theme;
      document.documentElement.setAttribute(
        "data-theme",
        this.theme ? "light" : "dark",
      );
    },
  },
  mounted() {
    document.documentElement.setAttribute(
      "data-theme",
      this.theme ? "light" : "dark",
    );
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variable.scss";

.header {
  position: relative;
  height: 70px;
  text-align: center;
  font-size: 0;
  .text {
    display: inline-block;
    vertical-align: top;
    line-height: 70px;
    font-size: $font-size-large;
    color: $color-text-2;
  }
  .switch {
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .switch {
    margin: 20px 20px 20px 0;
    position: fixed;
    right: 0;
    &-input {
      position: absolute;
      width: 0;
      height: 0;
      opacity: 0;
      margin: 0;
    }
    &-core {
      margin: 0;
      display: inline-block;
      position: relative;
      width: 40px;
      height: 20px;
      border: 1px solid #dcdfe6;
      outline: none;
      border-radius: 10px;
      box-sizing: border-box;
      background: #dcdfe6;
      cursor: pointer;
      transition: border-color 0.3s, background-color 0.3s;
      vertical-align: middle;
      &:after {
        content: "";
        position: absolute;
        top: 1px;
        left: 1px;
        border-radius: 100%;
        transition: all 0.3s;
        width: 16px;
        height: 16px;
        background-color: #fff;
      }
    }
  }
  .switch.is-checked .switch-core:after {
    left: 100%;
    margin-left: -17px;
  }
  .switch .switch-core {
    width: 40px;
    border-color: #ffcd32;
    background-color: #ffcd32;
  }
  .switch.is-checked .switch-core {
    width: 40px;
    border-color: #dcdfe6;
    background-color: #dcdfe6;
  }
}
</style>
