<template>
  <div class="index">
    <div class="space"></div>
    <div class="container follow">
      <p class="tit">
        <span class="line"></span>
        <b class="list">设备列表：</b><span @click="goSetting" class="set">设置</span>
      </p>
      <div class="hw-space"></div>
      <table class="table-box">
        <thead>
          <tr>
            <td>编码</td>
            <td>设备id</td>
            <td>设备二维码</td>
            <!-- <td>操作</td> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,i) in deviceA" :key=i>
            <td>{{ (item.no>9)?("00"+item.no):("000"+item.no) }}</td>
            <td>{{ item.id }}</td>
            <td>
              <a @click="getPic(item.id)" class="download">下载</a>
            </td>
            <!-- <td>
              <span>编辑</span>
              <span>删除</span>
            </td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { deviceListApi,deviceCodeApi } from "@/api/api";
export default {
  name: "index",
  data() {
    return {
      deviceA: []
    };
  },
  created() {
    var _this = this;
    deviceListApi({ page: 1, per_page: 100 }).then(function(res) {
       _this.deviceA = res.devices;
    });
    
  },
  methods:{
    goSetting:function(){
      this.$router.push({ name: "setting" });
    },
    getPic:function(id){
       deviceCodeApi(id).then(function(res){
         if(res&&res.length>0){
           location.href=res[0].pic
         }
       })
    }
  }
};
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
  width: 100%;
  height:100vh;
  background:#eaebed;
  margin: 0 auto;
}
.space{width:100%;height:2rem;}

</style>
