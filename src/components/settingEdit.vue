<template>
  <div class="content">
    <div class="space"></div>
    <p class="tit">
      <span class="line"></span>
      <b class="list" @click="goback">返回</b>
    </p>
    <div class="hw-space"></div>
    <div class="inp-div">
      <div class="inp-box">
        <span>请选择使用时间：</span>
        <select
          type="text"
          placeholder="请选择分钟数"
          autocomplete="off"
          maxlength="3"
          v-on:change="changF"
          v-model="time"
        >
          <option value="5">5分钟</option>
          <option value="10">10分钟</option>
          <option value="15">15分钟</option>
          <option value="20">20分钟</option>
          <option value="25">25分钟</option>
          <option value="30">30分钟</option>
          <option value="35">35分钟</option>
          <option value="40">40分钟</option>
          <option value="45">45分钟</option>
          <option value="50">50分钟</option>
          <option value="55">55分钟</option>
          <option value="60">1小时</option>
          <option value="65">65分钟</option>
          <option value="70">70分钟</option>
          <option value="75">75分钟</option>
          <option value="80">80分钟</option>
          <option value="85">85分钟</option>
          <option value="90">90分钟</option>
          <option value="95">95分钟</option>
        </select>
      </div>
      <div class="inp-box">
        <span>价钱（元）：</span>
        <input
          type="number"
          value
          placeholder="请输入价格"
          autocomplete="off"
          maxlength="6"
          v-model="price"
          v-on:input="checkF"
        />
      </div>
      <p class="error">{{errorMsg}}</p>
      <div class="space"></div>
    </div>
    <button :disabled="ifDisabled" class="login-btn" @click="addF">保存</button>
  </div>
</template>

<script>
import { settingAddApi } from "@/api/api";
import { localSto } from "@/util/localStorage";
export default {
  name: "settingEdit",
  data() {
    return {
      time: "30",
      price: "",
      ifDisabled: true,
      errorMsg: "",
      id: ""
    };
  },
  created() {
    if (!localSto.get("isLogin")) {
      this.$router.push({ name: "login" });
    }
    console.log(this.$route.params);
    if (this.$route.params.edit) {
      var editJ = localSto.getObject("editJ");
      this.time = editJ.time;
      this.price = editJ.price;
      this.id = editJ.id;
      this.ifDisabled = false;
    }
  },
  methods: {
    goback: function() {
      this.$router.push({ name: "setting" });
    },
    checkF: function() {
      this.ifDisabled = true;
      if (this.price == "") {
        this.errorMsg = "价格不能为空";
      } else {
        this.errorMsg = "";
        this.ifDisabled = false;
      }
    },
    changF: function(e) {
      console.log(e.target.value);
      this.time = e.target.value;
    },
    addF: function() {
      let _this = this;
      settingAddApi({
        price: this.price,
        time: this.time,
        id: this.id
      })
        .then(data => {
          _this.$toast("操作成功");
          setTimeout(function() {
            _this.$router.push({ name: "setting" });
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
  background: -webkit-linear-gradient(#f8f8f8, #fff); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#f8f8f8, #fff); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#f8f8f8, #fff); /* Firefox 3.6 - 15 */
  background: linear-gradient(#f8f8f8, #fff); /* 标准的语法（必须放在最后） */
}
.space {
  width: 100%;
  height: 2rem;
}
.inp-div {
  width: 84%;
  margin: 0 auto;
  border-radius: 1.2rem;
  background: #fff;
  box-shadow: 2px 2px 3px #ddd;
}
.inp-box {
  width: 90%;
  margin: 0 auto;
  height: 6.4rem;
  line-height: 3.4rem;
  border-bottom: 0.1rem solid #ddd;
  padding-top: 2.4rem;
  color: #24272b;
  font-size: 1.6rem;
  box-sizing: border-box;
}
.inp-box span {
  display: block;
  float: left;
}
.inp-box input {
  float: left;
  display: block;
  height: 3.2rem;
  width: 60%;
}

/* button[disabled].login-btn {
  background: #d9d9d9;
} */
.foot {
  color: #666;
  text-align: center;
  line-height: 4rem;
}
</style>
