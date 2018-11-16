function h(){
	var pht1 = document.getElementById('pht-1');
	var pht2 = document.getElementById('pht-2');
	var pht3 = document.getElementById('pht-3');
	var name = document.getElementById('name');
	var stock = document.getElementById('stock');
	var money = document.getElementById('money');
	var name = document.getElementById('name');
	var p1 ="url('images/cater-1(1).jpg')", p2="url('images/cater-1(2).jpg')",p3="url('images/cater-1(1).jpg')",nam="Slim business suit",
	mon ="400",sto="999";
	pht1.style.backgroundImage = p1;
	pht2.style.backgroundImage = p2;
	pht3.style.backgroundImage = p3;
	name.innerHTML = nam;
	money.innerHTML =mon;
	stock.innerHTML = sto;

	function ph1(){
		pht3.style.backgroundImage = "url('images/cater-1(1).jpg')";
	}
	function ph2(){
		pht3.style.backgroundImage = "url('images/cater-1(2).jpg')";
	}
}


		// /* yanchiduqu */
		// function throttle(fn, delay, atleast) {
		//     var timeout = null,
		// 	startTime = new Date();
		//     return function() {
		// 	var curTime = new Date();
		// 	clearTimeout(timeout);
		// 	if(curTime - startTime >= atleast) {
		// 	    fn();
		// 	    startTime = curTime;
		// 	}else {
		// 	    timeout = setTimeout(fn, delay);
		// 	}
		//     }
		// }
		// function lazyload() {
		//     var images = document.getElementsByTagName('img');
		//     var len    = images.length;
		//     var n      = 0;      //存储图片加载到的位置，避免每次都从第一张图片开始遍历		
		//     return function() {
		// 	var seeHeight = document.documentElement.clientHeight;
		// 	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		// 	for(var i = n; i < len; i++) {
		// 	    if(images[i].offsetTop < seeHeight + scrollTop) {
		// 	        if(images[i].getAttribute('src') === 'images/loading.gif') {
		// 		     images[i].src = images[i].getAttribute('data-src');
		// 	        }
		// 		n = n + 1;
		// 	     }
		// 	}
		//     }
		// }
		// var loadImages = lazyload();
		// loadImages();          //初始化首页的页面图片
		// window.addEventListener('scroll', throttle(loadImages, 500, 1000), false);
		// /* */