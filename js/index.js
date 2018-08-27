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
	// 			if(document.getElementById('top_2').onclick){
	// 					return;
	// 			}
	// 			else{
	// 				document.getElementById('top_2').style ="display:none";
	// 				i=0;
	// 			}
	// 		}
	// }
	if(window.pageYOffset != '0'){
		document.getElementById("top").style="height :120px";
		document.getElementById("men").style= "padding-top : 120px";
	}
	document.getElementById('menu_2').onclick=function(){
		document.getElementById('top_2').style ="display:inline-block";
	}

}
function cc(){

}
window.onscroll=function()
{	
	var top =document.getElementById("top");
	if (top.style.height =="143px") {
		top.style.height="120px";
		document.getElementById("men").style= "padding-top : 120px";
	}
	if(window.pageYOffset == '0'){
		top.style.height ="143px";
		document.getElementById("men").style= "padding-top : 153px";
	}
}
