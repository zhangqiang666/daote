$(function(){
	 //获取微信openid
	
        if (navigator !== void 0 && navigator.userAgent.match(/MicroMessenger/)) {
          $.ajax({
          	type:"get",
          	url:"http://www.dianyitai.cn/api/hasopenid",
          	async:true,
          	data:{},
          	dataType:"json",
            success:function(data){ 
            	console.log(data)
            	if(data.hasOpenId==false){
            		window.location.href="http://www.dianyitai.cn/api/getopenid?redirect=" + encodeURIComponent('http://www.dianyitai.cn/daote/loadin/demo.html?redirect=' + encodeURIComponent(location.href));
            	}else{
            		
            	}
            }
          });
        }
	
	
	
	
})
