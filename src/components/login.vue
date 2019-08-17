<template>
  <div class="content">
    <div class="bg-box">
      <div class="space"></div>
      <div class="inp-div">
        <p class="tit-p">登录</p>
        <div class="inp-box">
          <input
            type="text"
            value
            placeholder="请输入账号"
            autocomplete="off"
            maxlength="11"
            v-model="phone"
            v-on:input="checkF"
          />
        </div>
        <div class="inp-box">
          <input
            type="password"
            value
            placeholder="请输入密码"
            autocomplete="off"
            maxlength="11"
            v-model="password"
            v-on:input="checkF"
          />
        </div>
        <p class="error">{{errorMsg}}</p>
        <div class="space" style="height:2rem;"></div>
      </div>
      <button :disabled="ifDisabled" class="login-btn" @click="loginF">登录</button>
    </div>
  </div>
</template>

<script>
import { loginApi } from "@/api/api";
import { localSto } from "@/util/localStorage";
export default {
  name: "login",
  data() {
    return {
      phone: "",
      password: "",
      ifDisabled: true,
      errorMsg: ""
    };
  },
  created() {
    if (localSto.get("isLogin")) {
      this.$router.push({ name: "index" });
    }
  },
  methods: {
    checkF: function() {
      this.ifDisabled = true;
      let reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.phone == "") {
        this.errorMsg = "账号不能为空";
      }
      // else if (!reg.test(this.phone)) {
      //   this.errorMsg = "手机号格式错误";
      // }
      else if (this.password == "") {
        this.errorMsg = "密码不能为空";
      } else {
        this.errorMsg = "";
        this.ifDisabled = false;
      }
    },
    loginF: function() {
      let _this = this;
      loginApi({
        password: this.password,
        username: this.phone
      })
        .then(data => {
          localSto.set("isLogin", true);
          _this.$toast("登陆成功");
          setTimeout(function() {
            _this.$router.push({ name: "index" });
          }, 800);
        })
        .catch(function(err) {
          _this.$alert(err);
        });
    }
  }
};
</script>

<style scoped>
.content {
  width: 100%;
  height: 100vh;
  background: -webkit-linear-gradient(#fefefe, #fff); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#fefefe, #fff); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#fefefe, #fff); /* Firefox 3.6 - 15 */
  background: linear-gradient(#fefefe, #fff); /* 标准的语法（必须放在最后） */
}
.bg-box {
  width: 100%;
  background: url(/static/login.png) no-repeat 0 0;
  background-size: 100%;
}
.space {
  width: 100%;
  height: 16rem;
}
.tit-p{
  width:90%;
  margin:0 auto;
  line-height: 4rem;
  color:#3e4a59;
  font-size:2rem;
  padding-top:2rem;
}
.inp-div{
  width:84%;
  margin:0 auto;
  border-radius:1.2rem;
  background:#fff;
  box-shadow:2px 2px 3px #ddd;
}
.inp-box {
  width:90%;
  margin:0 auto;
  height: 3.4rem;
  line-height: 3.4rem;
  border-bottom: 0.1rem solid #ddd;
  padding-top: 1.4rem;
  color:#24272b;
  font-size:1.6rem;
}
.inp-box input {
  float: left;
  display: block;
  height: 3.2rem;
  width: 90%;
}
.foot {
  color: #666;
  text-align: center;
  line-height: 4rem;
}
</style>
