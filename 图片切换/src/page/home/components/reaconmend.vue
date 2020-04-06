<template>
  <div class="reaconmend" ref="reaconmend">
    <div class="reaconmend-content">
      <div>
        <div class="reaconmend-list">
          <!-- <ul>
            <li @click="selectItem(item)" v-for="item in discList" :key="item.dissid" class="item">
              <div class="icon">
                <img :src="item.imgurl" alt width="60px" height="60px" />
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <div class="desc" v-html="item.dissname"></div>
              </div>
            </li>
          </ul>-->
          <div class="avatar">
            <img class :src="avatar" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { list } from "../data";
import bus from "../../../bus";
export default {
  name: "reaconmend",
  data() {
    return {
      discList: [],
      avatar: ""
    };
  },
  created() {
    this._getDiscList();
    this.avatar = require(`@/assets/images/logo-light.jpeg`);
    // 监听
    bus.$on("changeTheme", theme => {
      theme = theme ? "light" : "dark";
      this.avatar = require(`@/assets/images/logo-${theme}.jpeg`);
    });
  },
  methods: {
    _getDiscList() {
      this.discList = list;
      console.log(this.discList);
    },
    changeTheme() {}
  },
  components: {}
};
</script>
<style lang="scss" rel="stylesheet/scss">
.reaconmend {
  .reaconmend-content {
    height: 100%;
    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }
  }
  .reaconmend-list {
    .avatar {
      width: 200px;
      height: 200px;
      margin: 0 auto;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .list-title {
      height: 40px;
      line-height: 40 px;
      text-align: center;
      font-size: var(--font-size-medium);
      color: var(--text-1);
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
        color: var(--font-size-medium);
      }
      .name {
        margin-bottom: 10px;
        color: var(--text);
      }
      .desc {
        color: var(--text-1);
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
