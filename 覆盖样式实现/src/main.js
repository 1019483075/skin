import Vue from "vue";
import App from "./App.vue";
import cssVars from "css-vars-ponyfill";
import router from "./router";
function toggleTheme(theme) {
  var $link = window.createLink();
  $link.href = "./" + theme + ".css";
  cssVars({
    onlyLegacy: false,
  });
  return theme;
}
window.toggleTheme = toggleTheme;
toggleTheme("light");

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
