<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            var sizeNow=10 * (clientWidth / 375);
            if(sizeNow>16){
              sizeNow=16;
            }
            docEl.style.fontSize = sizeNow + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
        
})(document, window);

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
body,a,ul,li,h1,h2,h3,p{
	margin:0;
	padding:0;
}
.fr{float:right;}
body{font-size:1.5rem;max-width: 640px;}
input,button,select{
	  -webkit-appearance: none;
    appearance: none;
    outline: 0;
    -webkit-tap-highlight-color: transparent;
    border-radius: 0;
    border: none;
		font-size:1.5rem;
}
a{text-decoration: none;}
.table-box {
  line-height: 4rem;
  font-size: 1.6rem;
  text-align: center;
  border-collapse: collapse;
  width:90%;
  margin:0 auto;
  background:#fff;
}
thead {
  font-size:1.3rem;
  color:#3c3a3a;
}
td {
  border: 0.1rem solid #ddd;
}
.hw-space {
  width: 100%;
  height: 3rem;
}
.tit {
  color: #3c3a3a;
  width:90%;
  margin:0 auto;
  font-size: 1.6rem;
  line-height: 2.2rem;
  padding-left: 1rem;
  border-left: 3px solid #00b0e5;
}
.tit b{  font-weight: normal;}
.tit span{float:right; display:block;}
.set{
  padding:.4rem 1rem;
  border-radius:3rem;
  font-size:1.5rem;
  background:#00b0e5;
  color:#fff;
  text-align: center;
  min-width: 6rem;
  margin-left:1rem;
}
.download{
  background:url(/static/download.png) no-repeat center center;
  color:#fff;
  font-size:1.4rem;
  display:inline-block;
  width:8rem;
  background-size: 100%;
  margin:0 auto;
  height:4.9rem;
  line-height:4.9rem;
}
.login-btn {
  color: #fff;
  border-radius: 2.3rem;
  background: url(/static/but.png) no-repeat center center;
  background-size: 100%;
  height:6.7rem;
  line-height: 6.7rem;
  width: 22rem;
  margin:3rem auto;
  display: block;
  font-size: 1.6rem;
}
button[disabled].login-btn {
  opacity: 0.3;
}
.error {
  color: red;
  width:90%;
  margin:0 auto;
  font-size: 1.2rem;
  line-height: 3rem;
  height: 3rem;
}
</style>
