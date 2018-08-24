window.onload = function(){
	var mobile = document.getElementById("mobile");
	var cloth = document.getElementById("cloth");
	var dloth = document.getElementById("dloth").getElementsByTagName('span');
	var index = 1;
	var timer; 
	//圆点变化//
	function baner(){
		for(var i = 0 ; i < dloth.length; i++){
			if(dloth[i].className=='on'){
				dloth[i].className='';
				break;
			}
		}
	dloth[index-1].className='on';
	}
	for (var i = 0; i < dloth.length ; i++ ){
			dloth[i].onclick =function(){
				if(this.className == 'on'){
					return;
				}
				var myIndex = parseInt(this.getAttribute('index'));
				var offset = - 274 * ( myIndex - index );
				index = myIndex;
				mobile.style.left = offset +'px';
				baner();
				index =1;
		} 
	}
}