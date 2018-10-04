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
		var ima =3;
		var imb =2;
		var imc =1;		
		document.getElementById('prev').onclick=function(){
				var news = document.querySelectorAll("#new_1");	
				for (var i = 0; i < news.length; i++) {
					news[i].className ='iem';
			}
				news[imag-1].className='iem '+'iemt '+'lef '+'bock'+' abs';
				news[imbg-1].className='iem '+'iemt '+'bock';
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
	
	document.getElementById('next').onclick=function(){
			var news = document.querySelectorAll("#new_1");
			for (var i = 0; i < news.length; i++) {
				news[i].className ='iem';
		}
			news[imcg-1].className='iem '+'iemt '+'lef '+'bock'+' abs';
				news[imbg-1].className='iem '+'iemt '+'bock';
				news[imag-1].className='iem '+'righ '+'bock'+' abs';
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
}