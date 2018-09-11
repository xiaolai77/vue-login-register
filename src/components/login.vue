<template>
  <div class="content">
	<div class="inp-box">
		<input type="tel" value="" placeholder="请输入手机号" autocomplete="off" maxlength="11" v-model="phone" v-on:input="checkF"/>
	</div>
	<div class="inp-box">
		<input type="password" value="" placeholder="请输入密码" autocomplete="off" maxlength="11" v-model="password" v-on:input="checkF"/>
	</div>
	<p class="error">{{errorMsg}}</p>
	<button  :disabled="ifDisabled" class="login-btn" @click="loginF">登录</button>
	<p class="foot"><router-link to="/register">注册</router-link></p>
	
  </div>
</template>

<script>
import { loginApi } from '@/api/api'
import {localSto } from '@/util/localStorage'
export default {
  name: 'login',
  data () {
    return {
       phone:'',
			 password:'',
			 ifDisabled:true,
			 errorMsg:''
    }
  },
  methods: {
//       telCount:function(){
// 		  this.mobile= this.mobile.replace(/^(.{11}).*$/,'$1');//只能输入18位
// 	  }
      checkF:function(){
					this.ifDisabled=true;
						 let reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
					if(this.phone==''){
						 this.errorMsg='手机号不能为空';
					}else if(!reg.test(this.phone)){
						this.errorMsg='手机号格式错误';
					}else if(this.password==''){
						this.errorMsg='密码不能为空';
					}else{
						this.errorMsg='';
						this.ifDisabled=false;
					}
			},
			loginF:function(){
				 
				 loginApi().then(data=> {
					    localSto.set('userId',data.userId);
							
							this.$router.push({ name: 'index'})
					});
			}
  }
}
</script>

<style scoped>
.content{
	width:92%;margin:0 auto;
}
.inp-box{
    height:3.4rem;
	line-height:3.4rem;
	border-bottom:.1rem solid #ddd;
    padding-top:1rem;
}
.inp-box input{
	float:left;
	display: block;
	height:3.2rem;
	width:90%;
}
.login-btn{
    color: #fff;
    line-height: 3.8rem;
    border-radius: .5rem;
    background: #f37938;
	margin-top:3rem;
	width:100%;
    display: block;
	font-size:1.rem;
}
button[disabled].login-btn {
    background: #d9d9d9;
}
.foot{
	color:#666;
	text-align: center;
	line-height: 4rem;
}
.error{
	color:red;
	font-size: 1.2rem;
	line-height: 3rem;
}
</style>
