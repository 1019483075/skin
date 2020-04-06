<template>
  <div class="reaconmend" ref="reaconmend">
    <div class="reaconmend-content">
      <div>
        <div class="reaconmend-list">
          <ul>
            <li @click="selectItem(item)" v-for="item in discList" :key="item.dissid" class="item">
              <div class="icon">
                <img :src="item.imgurl" alt width="60px" height="60px" />
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <div class="desc" v-html="item.dissname"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { list } from "../data";
export default {
  name: "reaconmend",
  data() {
    return {
      discList: []
    };
  },
  created() {
    this._getDiscList();
  },
  methods: {
    _getDiscList() {
      this.discList = list;
    }
  },
  components: {}
};
</script>
