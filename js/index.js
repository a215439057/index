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
	}

	function addEvent(o,evt,func){
	  if(o.attachEvent)o.attachEvent('on'+evt,func);
	    else if(o.addEventListener)o.addEventListener(evt,func,false);
	}

	function prev(){
				var imag =1;
				var imbg =2;
				var imcg =3;
				var imdg =1;
			var ban =document.getElementById('new_1');
			var bans =document.getElementById('banner').getElementsByTagName('img');			
			for (var i = 0; i < bans.length; i++) {
				bans[i].className ='iem';
		}
			bans[imag-1].className='iem '+'iemt '+'lef '+'bock'+' abs';
			bans[imbg-1].className='iem '+'iemt '+'bock';
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
	
	function next(){
				var imag =1;
				var imbg =2;
				var imcg =3;
				var imdg =1;
			var ban =document.getElementById('new_1');
			var bans =document.getElementById('banner').getElementsByTagName('img');			
			for (var i = 0; i < bans.length; i++) {
				bans[i].className ='iem';
		}
			bans[imag-1].className='iem '+'iemt '+'lef '+'bock'+' abs';
			bans[imbg-1].className='iem '+'iemt '+'bock';
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