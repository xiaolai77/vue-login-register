<template>
  <div class="index">
       <div class="container follow">
						<p class="tit"><span class="line"></span><b class="list">目录</b></p>
						<div class="row">
								<div class="col-xs-4">
									<p>
										<img class="ccc" src="../img/1.png" alt="">
									</p>
									<p>完善个人信息</p>
								</div>
								<div class="col-xs-4">
									<p>
										<img class="ccc" src="../img/2.png" alt="">
									</p>
									<p>我的额度</p>
								</div>
								<div class="col-xs-4">
									<p>
										<img class="ccc" src="../img/3.png" alt="">
									</p>
									<p>我要贷款</p>
								</div>
						</div>
			 </div>
			
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{width:90%;margin:0 auto}
.tit{
	color: #333;
	font-size:1.3rem;
	line-height:1.5rem;
	padding-left:1rem;
	border-left:2px solid #7f1b9f;
}
.row{
	display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction:row;
	flex-wrap: nowrap; 
	padding-top:3rem;
}
.col-xs-4{
	line-height: 2rem;
	text-align: center;
}
.col-xs-4 img{
	width:50%;
}
</style>
