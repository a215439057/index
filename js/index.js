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

