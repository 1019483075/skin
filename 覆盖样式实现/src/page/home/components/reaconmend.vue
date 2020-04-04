<template>
  <div class="reaconmend" ref="reaconmend">
    <div class="reaconmend-content">
      <div>
        <div class="reaconmend-list">
          <ul>
            <li
              @click="selectItem(item)"
              v-for="item in discList"
              :key="item.dissid"
              class="item"
            >
              <div class="icon">
                <img :src="item.imgurl" alt="" width="60px" height="60px" />
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
      discList: [],
    };
  },
  created() {
    this._getDiscList();
  },
  methods: {
    _getDiscList() {
      this.discList = list;
      console.log(this.discList);
    },
  },
  components: {},
};
</script>
<style lang="scss" rel="stylesheet/scss">
@import "../../../assets/scss/variable.scss";
.reaconmend {
  // position: fixed;
  // width: 100%;
  // top: 84px;
  // bottom: 0;
  .reaconmend-content {
    height: 100%;
    // overflow: hidden;
    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }
  }
  .reaconmend-list {
    .list-title {
      height: 40px;
      line-height: 40 px;
      text-align: center;
      font-size: $font-size-medium;
      color: $color-text;
    }
    .item {
      display: flex;
      box-sizing: border-box;
      align-items: center;
      padding: 0 20px 20px 20px;
      .icon {
        flex: 0 0 60px;
        width: 60px;
        padding-right: 20px;
      }
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        line-height: 20px;
        overflow: hidden;
        color: $font-size-medium;
      }
      .name {
        margin-bottom: 10px;
        color: $color-text;
      }
      .desc {
        color: $color-text-1;
      }
    }
  }
  .loading-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
