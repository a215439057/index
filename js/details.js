function h(){
	var pht1 = document.getElementById('pht-1');
	var pht2 = document.getElementById('pht-2');
	var pht3 = document.getElementById('pht-3');
	var php = document.getElementById('php');
	var name = document.getElementById('name');
	var stock = document.getElementById('stock');
	var money = document.getElementById('money');
	var quan = document.getElementById('quan');
	var total = document.getElementById('total');
	var jian = document.getElementById('jian');
	var jia = document.getElementById('jia');
	var psp =document.getElementById("psp");
	var col  =document.getElementById("col");
	var lei  =document.getElementById("lei");
	var colo  =document.getElementById("colo");
	var nam="Slim business suit",mon ="504",sto="999",tot=mon;
	var yanse =["Black","Blue","White"]
	var pp = ["images/cater-1(1).jpg","images/cater-1(2).jpg","images/cater-1(3).jpg", "images/cater-1(4).jpg","images/cater-1(5).jpg"];
	var ff = ["门襟:单排两粒扣","误差范围:1-2cm","适合季节:四季","面料名称:聚酯纤维","主面料成分:醋酯纤维","主面料成分的含量:70(%)","领型:无领","开衩方式:后中开衩",
	"版型:修身型","厚薄:常规","上市年份/季节:2018年夏季","款式细节:提花","尺码:48,50,52,54,56,58"];
	pht1.style.backgroundImage = "url('" + pp[0] +"')";
	pht2.style.backgroundImage ="url('" + pp[1] +"')";
	pht3.style.backgroundImage ="url('" + pp[2] +"')";
	php.style.backgroundImage ="url('" + pp[0] +"')";
	name.innerHTML = nam;
	money.innerHTML =mon;
	stock.innerHTML = sto;
	total.innerHTML = tot;
	//颜色
	for (var ri = 1; ri <= yanse.length; ri++) {
　　　　var opt = document.createElement("option");
　　　　opt.setAttribute("id", "col");
　　　　opt.innerHTML =yanse[ri-1];
		colo.appendChild(opt);
	}		
	//详细介绍
	for (var r = 1; r <= ff.length; r++) {
　　　　var spa = document.createElement("span");
　　　　//spa.setAttribute("class", "newspan");
　　　　spa.innerHTML =ff[r-1];
		lei.appendChild(spa);
	}	
	//详情图
	for (var i = 1; i <= pp.length; i++) {
　　　　//添加 img
　　　　var img = document.createElement("img");
　　　　//设置 img 属性，如 id
　　　　//img.setAttribute("id", "newImg");
　　　　//设置 img 图片地址
　　　　img.src = pp[i-1];
		psp.appendChild(img);
	}
	//
	if(quan.value <= 1) {
		jian.disabled=true;
		}

	}
	function pht1(){
		document.getElementById('php').style.backgroundImage = document.getElementById('pht-1').style.backgroundImage;
	}
	function pht2(){
		document.getElementById('php').style.backgroundImage = document.getElementById('pht-2').style.backgroundImage;
	}
	function pht3(){
		document.getElementById('php').style.backgroundImage = document.getElementById('pht-3').style.backgroundImage;
	}	
	function jian(){
		var quan = document.getElementById('quan');
		var jian = document.getElementById('jian');		
		quan.value=parseInt(quan.value)-1;
		document.getElementById('total').innerHTML=parseInt(quan.value)*parseInt(document.getElementById('money').innerHTML);
		if(quan.value == 1) {
			jian.disabled=true;
		}			
	}	
	function jia(){
		var quan = document.getElementById('quan');
		var jian = document.getElementById('jian');
		quan.value=parseInt(quan.value)+1;
		document.getElementById('total').innerHTML=parseInt(document.getElementById('quan').value)*parseInt(document.getElementById('money').innerHTML);
		if(quan.value > 1) {
		jian.disabled=false;
		}		
	}	
	function oncha(){
		var quan = document.getElementById('quan');
		var jian = document.getElementById('jian');
			if(quan.value <= 1) {
				jian.disabled=true;
				quan.value=1;
			}
			else{
				jian.disabled=false;	
			}
		document.getElementById('total').innerHTML=parseInt(document.getElementById('quan').value)*parseInt(document.getElementById('money').innerHTML);
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