$(function(){
	//头部样式替换
				$('#head').empty();
				   var head="";
				   head+='<div class="head-div"></div>'+
                 '<div class="mobile-head-title"><a href="doctor-core.html"> <strong> 点&nbsp;医&nbsp;台</strong><br><span class="dyt-fot">DOCTOR POOL</span></a></div>'+
               '<div class="mobile-head-right"></div>'
				   $('#head').html(head)
				   
				   //开通服务的黄色提示科室获取
				   $('.department').empty()
				   var html=""
				   html+=localStorage.getItem('department');
				   $('.department').html(html)
				   
				   
				   	 
			//公共聊天窗口
			var baidu="";
			baidu+='<div class="baidu-info-box">'+
     	  '<a href="http://p.qiao.baidu.com/cps/chat?siteId=12421912&userId=26143907">'+
     	 	'<div><i class="iconfont icon-kefu"></i></div>'+
     	 	 '<div> <span>客服</span></div>'+
     	 '</a>'+
        '</div>'
			$('body').append(baidu)
				   
})
