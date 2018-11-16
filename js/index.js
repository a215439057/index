function a(){
	
		document.getElementById('menu_2').onclick=function(){
			if (document.getElementById('men').offsetLeft=="-280") 
				{
					document.getElementById('men').style ="left:0px";
				}
			else{
				document.getElementById('men').style ="left:-280px";
			}
		}
		/* yanchiduqu */
		function throttle(fn, delay, atleast) {
		    var timeout = null,
			startTime = new Date();
		    return function() {
			var curTime = new Date();
			clearTimeout(timeout);
			if(curTime - startTime >= atleast) {
			    fn();
			    startTime = curTime;
			}else {
			    timeout = setTimeout(fn, delay);
			}
		    }
		}
		function lazyload() {
		    var images = document.getElementsByTagName('img');
		    var len    = images.length;
		    var n      = 0;      //存储图片加载到的位置，避免每次都从第一张图片开始遍历		
		    return function() {
			var seeHeight = document.documentElement.clientHeight;
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			for(var i = n; i < len; i++) {
			    if(images[i].offsetTop < seeHeight + scrollTop) {
			        if(images[i].getAttribute('src') === 'images/loading.gif') {
				     images[i].src = images[i].getAttribute('data-src');
			        }
				n = n + 1;
			     }
			}
		    }
		}
		var loadImages = lazyload();
		loadImages();          //初始化首页的页面图片
		window.addEventListener('scroll', throttle(loadImages, 500, 1000), false);
		/* */
	}

	function addEvent(o,evt,func){
	  if(o.attachEvent)o.attachEvent('on'+evt,func);
	    else if(o.addEventListener)o.addEventListener(evt,func,false);
	}
function c(){
		var imag =1;
		var imbg =2;
		var imcg =3;
		var news = document.querySelectorAll("#new_1");	


		document.getElementById('next').onclick=function(){		
					hehe();
					news[imag-1].className='iem '+'iemt '+'lef '+'bock'+' abs'+' trans';
					news[imbg-1].className='iem '+'iemt '+'bock'+' trans';
					news[imcg-1].className='iem '+'righ '+'bock'+' abs';
					if (imag == 3) {
							imag = 1;	
						}
					else{
							imag +=1;				
						}
					if (imbg == 3) {
							imbg = 1;	
						}
					else{					
							imbg +=1;				
						}
					if (imcg == 3) {
							imcg = 1;	
						}
					else{					
							imcg +=1;				
						}	
				}
		document.getElementById('prev').onclick=function(){
					hehe();
					news[imag-1].className='iem '+'righ '+'bock'+' abs'+' trans';
					news[imbg-1].className='iem '+'iemt '+'lef '+'bock'+' abs';
					news[imcg-1].className='iem '+'iemt '+'bock'+' trans';
					if (imag == 1) {
							imag = 3;	
						}
					else{
							imag -=1;				
						}
					if (imbg == 1) {
							imbg = 3;	
						}
					else{					
							imbg -=1;				
						}
					if (imcg == 1) {
							imcg = 3;	
						}
					else{					
							imcg -=1;				
						}	
				}
		function hehe(){
				//next//
				for (var i = 0; i < news.length; i++) {
						news[i].className ='iem';
				}
					

		}		
	}

	function d(){
		var pro1 =document.querySelectorAll("#pro-1");
		var pro2 =document.querySelectorAll("#pro-2");
		var pro3 =document.querySelectorAll("#pro-3");
		var pro4 =document.querySelectorAll("#pro-4");
		var pro5 =document.querySelectorAll("#pro-5");
		var pro6 =document.querySelectorAll("#pro-6");
		var pro7 =document.querySelectorAll("#pro-7");
		document.getElementById('all').onclick=function(){
			for (var u = 0; u < pro1.length; u++) {
				pro1[u].style.display ="block";
			}
			for (var i = 0; i < pro2.length; i++) {
				pro2[i].style.display ="block";
			}
			for (var o = 0; o < pro3.length; o++) {
				pro3[o].style.display ="block";
			}
			for (var p = 0; p < pro4.length; p++) {
				pro4[p].style.display ="block";
			}
			for (var j = 0; j < pro5.length; j++) {
				pro5[j].style.display ="block";
			}
			for (var k = 0; k < pro6.length; k++) {
				pro6[k].style.display ="block";
			}
		}
		document.getElementById('school').onclick=function(){
			for (var u = 0; u < pro1.length; u++) {
				pro1[u].style.display ="block";
			}
			for (var i = 0; i < pro2.length; i++) {
				pro2[i].style.display ="none";
			}
			for (var o = 0; o < pro3.length; o++) {
				pro3[o].style.display ="none";
			}
			for (var p = 0; p < pro4.length; p++) {
				pro4[p].style.display ="none";
			}
			for (var j = 0; j < pro5.length; j++) {
				pro5[j].style.display ="none";
			}
			for (var k = 0; k < pro6.length; k++) {
				pro6[k].style.display ="none";
			}
		}
		document.getElementById('group').onclick=function(){
			for (var u = 0; u < pro1.length; u++) {
				pro1[u].style.display ="none";
			}
			for (var i = 0; i < pro2.length; i++) {
				pro2[i].style.display ="block";
			}
			for (var o = 0; o < pro3.length; o++) {
				pro3[o].style.display ="none";
			}
			for (var p = 0; p < pro4.length; p++) {
				pro4[p].style.display ="none";
			}
			for (var j = 0; j < pro5.length; j++) {
				pro5[j].style.display ="none";
			}
			for (var k = 0; k < pro6.length; k++) {
				pro6[k].style.display ="none";
			}
		}
		document.getElementById('company').onclick=function(){
			for (var u = 0; u < pro1.length; u++) {
				pro1[u].style.display ="none";
			}
			for (var i = 0; i < pro2.length; i++) {
				pro2[i].style.display ="none";
			}
			for (var o = 0; o < pro3.length; o++) {
				pro3[o].style.display ="block";
			}
			for (var p = 0; p < pro4.length; p++) {
				pro4[p].style.display ="none";
			}
			for (var j = 0; j < pro5.length; j++) {
				pro5[j].style.display ="none";
			}
			for (var k = 0; k < pro6.length; k++) {
				pro6[k].style.display ="none";
			}
		}
		document.getElementById('work').onclick=function(){
			for (var u = 0; u < pro1.length; u++) {
				pro1[u].style.display ="none";
			}
			for (var i = 0; i < pro2.length; i++) {
				pro2[i].style.display ="none";
			}
			for (var o = 0; o < pro3.length; o++) {
				pro3[o].style.display ="none";
			}
			for (var p = 0; p < pro4.length; p++) {
				pro4[p].style.display ="block";
			}
			for (var j = 0; j < pro5.length; j++) {
				pro5[j].style.display ="none";
			}
			for (var k = 0; k < pro6.length; k++) {
				pro6[k].style.display ="none";
			}
		}
		document.getElementById('other').onclick=function(){
			for (var u = 0; u < pro1.length; u++) {
				pro1[u].style.display ="none";
			}
			for (var i = 0; i < pro2.length; i++) {
				pro2[i].style.display ="none";
			}
			for (var o = 0; o < pro3.length; o++) {
				pro3[o].style.display ="none";
			}
			for (var p = 0; p < pro4.length; p++) {
				pro4[p].style.display ="none";
			}
			for (var j = 0; j < pro5.length; j++) {
				pro5[j].style.display ="block";
			}
			for (var k = 0; k < pro6.length; k++) {
				pro6[k].style.display ="none";
			}
		}
		document.getElementById('items').onclick=function(){
			for (var u = 0; u < pro1.length; u++) {
				pro1[u].style.display ="none";
			}
			for (var i = 0; i < pro2.length; i++) {
				pro2[i].style.display ="none";
			}
			for (var o = 0; o < pro3.length; o++) {
				pro3[o].style.display ="none";
			}
			for (var p = 0; p < pro4.length; p++) {
				pro4[p].style.display ="none";
			}
			for (var j = 0; j < pro5.length; j++) {
				pro5[j].style.display ="none";
			}
			for (var k = 0; k < pro6.length; k++) {
				pro6[k].style.display ="block";
			}
		}						
	}