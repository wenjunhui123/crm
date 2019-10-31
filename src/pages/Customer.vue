<template>
  <div class="customer">
    <div class="left">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <span slot="title">
            <router-link to="/customer/list">我的客户</router-link>
          </span>
        </el-menu-item>
        <el-menu-item index="1">
          <span slot="title">
            <router-link to="/customer/all">所有客户</router-link>
          </span>
        </el-menu-item>
        <el-menu-item index="1">
          <span slot="title">
            <router-link to="/customer/handle">新增客户</router-link>
          </span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped lang="less">
html,
body {
  width: 100%;
  height: 80%;

  .customer {
    width: 100%;
    height: 84%;
    .left {
      float: left;
      width: 20%;
      height: 100%;
      background: blue;
    }
    .right {
      float: right;
      width: 80%;
      height: 100%;
      background: yellow;
    }
  }
}
</style>
