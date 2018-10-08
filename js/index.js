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

