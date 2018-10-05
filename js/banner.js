function b(){
	var imag =2;
	var imbg =3;
	var imcg =4;
	play();
//图片循环 //
	function play(){
		var timer =setInterval(function(){
			dd();
		},3000);
	}
		function dd(){			
			var bans =document.getElementById('banner').getElementsByTagName('img');			
			for (var i = 0; i < bans.length; i++) {
				bans[i].className ='iem';
		}
			bans[imag-1].className='iem '+'iemt '+'lef '+'bock'+' abs'+' trans';
			bans[imbg-1].className='iem '+'iemt '+'bock'+' trans';
			bans[imcg-1].className='iem '+'righ '+'bock'+' abs';
		if (imag == 4) {
				imag = 1;	
			}
		else{					
				imag +=1;				
			}
		if (imbg == 4) {
				imbg = 1;	
			}
		else{				
				imbg +=1;				
			}
		if (imcg == 4) {
				imcg = 1;	
			}
		else{				
				imcg +=1;				
			}						
		
	}

}