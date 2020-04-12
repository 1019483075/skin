<template>
  <div class="wrapper page-home">
    <m-header></m-header>
    <m-reaconmend></m-reaconmend>
  </div>
</template>
<script>
import Header from "../../components/m-header/m-header";
import Reaconmend from "./components/reaconmend";
export default {
  name: "index",
  data() {
    return {};
  },
  components: {
    "m-header": Header,
    "m-reaconmend": Reaconmend,
  },
};
</script>
