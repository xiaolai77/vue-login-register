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
            docEl.style.fontSize = 10 * (clientWidth / 375) + 'px';
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
  margin-top: 20px;
}
body,a,ul,li,h1,h2,h3,p{
	margin:0;
	padding:0;
}
.fr{float:right;}
body{font-size:1.5rem;}
input,button{
	  -webkit-appearance: none;
    appearance: none;
    outline: 0;
    -webkit-tap-highlight-color: transparent;
    border-radius: 0;
    border: none;
		font-size:1.5rem;
}
a{text-decoration: none;}
</style>
