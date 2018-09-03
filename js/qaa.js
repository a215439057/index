window.onload = function(){

	        var Words = document.getElementById("words");
            var Who = document.getElementById("who");
            var TalkWords = document.getElementById("talkwords");
            var TalkSub = document.getElementById("talksub");
            TalkSub.onclick = function(){
                //定义空字符串
                var str = "";
                var ste ="";
                if(TalkWords.value == ""){
                     // 消息为空时弹窗
                    alert("Please enter content");
                    return;
                }
                str = '<div class="btalk"><span>me:' + TalkWords.value +'</span></div>' ;  
                if (TalkWords.value.indexOf("time") == 0) {
                    	ste = '<div class="atalk"><span>me:' + '2 day' +'</span></div>'; 
                    	
					}		
				else{
					ste = '<div class="atalk"><span>me:' + 'no' +'</span></div>'; 
				}	
                //将之前的内容与要发的内容拼接好 提交
                Words.innerHTML = Words.innerHTML + str +ste;
            }
}