<template>
  <div class="content">
    <div class="space"></div>
    <p class="tit">
      <span class="line"></span>
      <b class="list">设置</b>
      <span @click="goDevice" class="set">查看设备</span>
      <span @click="addF" class="set">新增</span>
    </p>
    <div class="hw-space"></div>
    <table class="table-box">
      <thead>
        <tr>
          <td>序号</td>
          <td>分钟数</td>
          <td>价格（元）</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,i) in settingA" :key="i">
          <td>{{ i+1 }}</td>
          <td>{{ item.time }}</td>
          <td>{{item.price}}</td>
          <td>
            <span @click="delF(item.id)" class="download">删除</span>
            <span @click="editF(item.id)" class="download">编辑</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { settingListApi, settingDelApi } from "@/api/api";
import { localSto } from "@/util/localStorage";
export default {
  name: "setting",
  data() {
    return {
      settingA: []
    };
  },
  created() {
    var _this = this;
    if (!localSto.get("isLogin")) {
      this.$router.push({ name: "login" });
    }
    settingListApi().then(function(res) {
      _this.settingA = res.data;
    });
  },
  methods: {
    goDevice: function() {
      this.$router.push({ name: "index" });
    },
    addF: function() {
      this.$router.push({ name: "settingEdit" });
    },
    delF: function(id) {
      var _this = this;
      this.$confirm("确定删除")
        .then(function() {
          settingDelApi(id).then(function(res) {
            _this.$toast("删除成功");
            settingListApi().then(function(res) {
              _this.settingA = res.data;
            });
          });
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    editF: function(id) {
      var editJ = this.settingA.filter(function(item, index) {
        return item.id == id;
      });
      localSto.setObject('editJ',editJ[0]);
      this.$router.push({ name: "settingEdit" ,params: { edit: true }}); 
    },
    checkF: function() {
      this.ifDisabled = true;
      if (this.phone == "") {
        this.errorMsg = "账号不能为空";
      }
    }
  }
};
</script>

<style scoped>
.content {
  width: 100%;
  height:100vh;
  background:#eaebed;
  margin: 0 auto;
  overflow-y:auto;
}
.space{
  width:100%;
  height:2rem;
}
.download{
  width:8rem;
}
 
</style>
