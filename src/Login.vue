<template>
  <div id="login">
    <div class="bg">
      <div class="mainbox">
        <h1 class="title">CRM客户管理系统</h1>
        <p class="tip">为保护企业的数据安全，请妥善保管密码</p>
      </div>
    </div>
    <div class="alt">
      <section class="loginBox" ref="login" @mousedown="down($event)">
        <div class="form">
          <i class="iconfont icon-yonghuming"></i>
          <input type="text" class="userName" placeholder="请输入用户名/手机号/邮箱" v-model="username" />
        </div>
        <div class="form">
          <i class="iconfont icon-mima"></i>
          <input type="password" class="userPass" placeholder="请输入登录密码" v-model="password" />
        </div>
        <button class="submit" @click="submit(username,password)">登录</button>
      </section>
    </div>
    <footer class="footerBox">
      <span>北京珠峰世纪技术培训有限公司</span>
      <span>京ICP备09041920号</span>
      <span>京公网安备110108400531号</span>
    </footer>
  </div>
</template>
<script>
import { login } from "./api/login";
import md5 from "blueimp-md5";
export default {
  data() {
    return {
      choce: false,
      dialogVisible: true,
      pageX: 0,
      pageY: 0,
      lf: 0,
      tp: 0,
      userPower: null,
      username: null,
      password: null
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {})
        .catch(_ => {});
    },
    down(ev) {
      this.choce = true;
      let target = ev.target;
      this.pageX = ev.pageX;
      this.pageY = ev.pageY;
      this.lf = parseInt(window.getComputedStyle(target)["left"]);
      this.tp = parseInt(window.getComputedStyle(target)["top"]);
      document.addEventListener("mousemove", this.move);
      document.addEventListener("mouseup", this.up);
    },
    move(ev) {
      let target = this.$refs.login,
        classNam = target.className,
        tag = target.tagName;
      if (tag === "SECTION" && classNam === "loginBox" && this.choce === true) {
        let pageX = ev.pageX,
          pageY = ev.pageY,
          x = pageX - this.pageX,
          y = pageY - this.pageY,
          lf = this.lf + x,
          tp = this.tp + y;
        target.setAttribute("style", `left:${lf}px;top:${tp}px`);
      }
    },
    up(ev) {
      this.choce = false;
      let target = ev.target,
        classNam = target.className,
        tag = target.tagName;
      if (
        tag === "SECTION" &&
        classNam === "loginBox" &&
        this.choce === false
      ) {
        document.removeEventListener("mousemove", this.move);
      }
    },
    checkAccount(account) {
      let argArr = [
        /^((\w{2,20})|([\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}))$/,
        /^1\d{10}$/,
        /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
      ];
      return argArr.some(item => {
        return item.test(account);
      });
    },
    submit(account, password) {
      account = account.trim();
      let flag = this.checkAccount(account);
      if (!flag) {
        this.$message("输入账号格式有误，请重新输入");
        return;
      }
      let password1 = md5(password);
      login(account, password1).then(result => {
        if (parseInt(result.code) === 0) {
          let power = result.power;
          let name = result.name;
          localStorage.setItem("power", encodeURIComponent(power));
          localStorage.setItem("name",this.username);
          this.$store.state.customer.power = power;
          this.$confirm("即将登录，是否确认登录", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          })
            .then(() => {
              this.$message({
                type: "success",
                message: "登录成功!"
              });
              window.location.href = 'index.html';
            })
            .catch(() => {
              this.$message({
                type: "info",
                message: "已取消登录"
              });
            });
        }
       if (parseInt(result.code) === 1) {
          this.$message("输入的账号密码不匹配，请您核对后再重新输入")
       }  
      });
    }
  },
  created() {
 
  },
  computed: {

  },
  mounted() {}
};
</script>
<style  lang="less" >
html,
body {
  width: 100%;
  height: 100%;

  #login {
    position: relative;
    width: 100%;
    height: 100%;

    .alt {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: 0 auto;
      z-index: 20;
      width: 100%;
      height: 100%;

      .loginBox {
        position: absolute;
        left: 35%;
        top: 30%;
        box-sizing: border-box;
        width: 30%;
        margin-top: 20px;
        padding: 25px;
        background: #fff;
        border: 1px solid #f4f4f4;
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
        .form {
          position: relative;
          margin: 10px 0;
          input {
            box-sizing: border-box;
            padding-left: 40px;
            width: 100%;
            height: 50px;
            line-height: 50px;
            border: 1px solid #aaa;
          }
          i {
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 20px;
          }
          .icon-mima {
            left: 7px;
            font-size: 26px;
          }
        }
        .submit {
          box-sizing: border-box;
          margin: 10px 0;
          width: 100%;
          height: 48px;
          line-height: 48px;
          text-align: center;
          font-size: 18px;
          color: #fff;
          background: #2299ee;
          border: none;
          border-radius: 2px;
          cursor: pointer;
        }
      }
    }

    .bg {
      position: relative;
      width: 100%;
      height: 50%;
      background: url("./assets/images/login_bg.jpg") center center;

      .mainbox {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -60%);
        width: 400px;

        .title {
          font-size: 30px;
          line-height: 50px;
          text-align: center;
          color: #fff;
          font-weight: normal;
        }

        .tip {
          font-size: 18px;
          color: #bebebf;
          line-height: 50px;
          text-align: center;
          font-weight: normal;
        }
      }
    }

    .footerBox {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      // transform:translateY(-50%);
      bottom: 20px;
      span {
        padding: 0 10px;
      }
    }
  }
}
</style>
