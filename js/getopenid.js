$(function(){
	 //获取微信openid
	var apiurl='http://' + (location.host === "www.dianyitai.cn" ? "www.dianyitai.cn" : '1nau3jkekkbqsfxu.dianyitai.cn') + '/api/'
	var wxurl='http://' + (location.host === "www.dianyitai.cn" ? "www.dianyitai.cn" : '1nau3jkekkbqsfxu.dianyitai.cn')
        if (navigator !== void 0 && navigator.userAgent.match(/MicroMessenger/)) {
          $.ajax({
          	type:"get",
          	url:apiurl+"hasopenid",
          	async:true,
          	data:{},
          	dataType:"json",
            success:function(data){ 
            	console.log(data)
            	if(data.hasOpenId==false){
            		window.location.href=apiurl+"getopenid?redirect=" + encodeURIComponent(''+wxurl+'/daote/loadin/demo.html?redirect=' + encodeURIComponent(location.href));
            	}else{
            		
            	}
            }
          });
        }
	
	
	
	
})
