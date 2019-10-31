<template>
  <div id="index">
    <header class="headerBox" ref="headerBox">
      <h1 class="logo">CRM客户管理系统</h1>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <router-link to="/customer">客户管理</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/system">系统设置</router-link>
        </el-menu-item>
      </el-menu>
      <div class="right">
        <span>欢迎:</span>
        <a href="javascript:;" ref="name" class="username">{{name}}</a>
        <a>修改密码</a>
        <a @click="signOut">安全退出</a>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>
<script>
import { isLogin, signOut, getList } from "./api/requstCustomer";

export default {
  data() {
    return {
      activeIndex: "1",
      name: ""
    };
  },
  created() {
    isLogin().then(result => {
      if (!parseInt(result.code) === 0) {
        window.location.href = "login.html";
        return;
      }
      getList().then(result => {});
    });
  },
  methods: {
    handleSelect(key, keyPath) {},
    signOut() {
      signOut().then(result => {
        if (parseInt(result.code) === 0) {
          window.location.href = "login.html";
        }
      });
    }
  },
  mounted() {
    this.name = localStorage.getItem("name");
    this.$refs["name"].innerHtml = this.name;
    this.$refs["name"].style.color = "white";
  }
};
</script>
<style scoped lang='less'>
html,body {
  width: 100%;
  height: 100%; 
  #index {
    width: 100%;
    height: 100%;
    .headerBox {
      width: 100%;
      height: 100px;
      background: #3a3d42;
      color: #ffffff;
      .logo {
        float: left;
        width: 20%;
        height: 100%;
        line-height: 100px;
        text-align: center;
      }
      .el-menu-demo {
        float: left;
        width: 40%;
        height: 99px;
        color: #ffffff;
        background: #3a3d42;
        li {
          width: 20%;
          height: 100%;
          line-height: 100px;
          font-size: 16px;
          background: #3a3d42 !important;
          a {
            color: #ffffff;
          }
          a.router-link-active {
            color: orangered;
          }
        }
      }
      .right {
        display: flex;
        float: right;
        width: 30%;
        height: 100%;
        span,
        a {
          height: 100%;
          width: 25%;
          line-height: 100px;
          font-size: 18px;
          cursor: pointer;
        }
        span {
          text-align: right;
        }
      }
    }
  }
}
</style>
