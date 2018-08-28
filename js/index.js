window.onload = function(){
		// var mobile = document.getElementById("mobile");
		// var cloth = document.getElementById("cloth");
		// var dloth = document.getElementById("dloth").getElementsByTagName('span');
		// var index = 1;
		// var timer; 
		// //圆点变化//
		// function baner(){
		// 	for(var i = 0 ; i < dloth.length; i++){
		// 		if(dloth[i].className=='on'){
		// 			dloth[i].className='';
		// 			break;
		// 		}
		// 	}
		// dloth[index-1].className='on';
		// }
		// for (var i = 0; i < dloth.length ; i++ ){
		// 		dloth[i].onclick =function(){
		// 			if(this.className == 'on'){
		// 				return;
		// 			}
		// 			var myIndex = parseInt(this.getAttribute('index'));
		// 			var offset = - 300 * ( myIndex - index );
		// 			index = myIndex;
		// 			mobile.style.left = offset +'px';
		// 			baner();
		// 			index =1;
		// 	} 
		// }
	// window.onclick=function(){
	// 		if (i=1) {
	// 			if(document.getElementById('tob_2').onclick){
	// 					return;
	// 			}
	// 			else{
	// 				document.getElementById('tob_2').style ="display:none";
	// 				i=0;
	// 			}
	// 		}
	// }
	document.getElementById('menu_2').onclick=function(){
		if (document.getElementById('men').offsetLeft=="-280") 
			{
				document.getElementById('men').style ="left:0px";
			}
		else{
			document.getElementById('men').style ="left:-280px";
		}

	}
}

window.onscroll=function()
{	
	var tob =document.getElementById("tob");
	if (tob.clientHeight =="73"&& window.pageYOffset != '0') {
		document.getElementById("top").style.height="53px";
		tob.style.height="53px";
	}
	if(window.pageYOffset == '0'){
		document.getElementById("top").style.height="73px";
		tob.style.height ="73px";
	}
}
