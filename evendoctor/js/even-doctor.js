
var url = location.search;//获取url中"?"符后的字串

    var theRequest = new Object();

    if (url.indexOf("?") != -1) {

        var str = url.substr(1);

        strs = str.split("&");

        for(var i = 0; i < strs.length; i ++) {

            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);

        }

    }

    console.log(theRequest);
    var d_id=theRequest.d_id;
    var id=theRequest.id;
    var service=theRequest.service;
    var shiping=theRequest.shiping;
     console.log(d_id)
     localStorage.setItem("service",service)
//图文问诊价格
$('.service').empty()
 $('.service').html(service)
 //图文问诊价格
$('.shiping').empty()
 $('.shiping').html(shiping)
//图文问诊
     function fun01(){
     	window.location.href='even-tuwen.html?d_id='+d_id+''
     }
$(function(){
  
      
     //远程视频门诊
     $('.video-money').click(function(){
     	window.location.href="http://p.qiao.baidu.com/cps/chat?siteId=12421912&userId=26143907"
     	//$('<div>').appendTo('body').addClass('alert alert-success').html('该功能正在开发，请继续关注！').show().delay(1500).fadeOut();
     })
       //医生秀传参
    $('.doctor-show-box').empty()
    var doctorshow="";
        doctorshow+='<a href="even-show.html?id='+id+'&&d_id='+d_id+'">'+
     	 	'<div class="doctor-show-left">'+
     	 		'<img src="evendoctor/images/doctor666.png">'+
     	 	'</div>'+
     	 	'<div class="doctor-show-auto">'+
     	 		'<p><span>医生秀</span>&nbsp;&nbsp;<span class="zhanshi">医生个人的展示平台——</span></p>'+
     	 		'<p class="shenghuo"><span style="color:black;">生活点滴、文章视频、看病花絮</span></p>'+
     	 	'</div>'+
     	 	'<div class="doctor-show-right">'+
     	 		'<p><i class="iconfont icon-arrowright"></i></p>'+
     	 	'</div>'+
     	 	'</a>';
        $('.doctor-show-box').html(doctorshow);
     //私人医生传参
     $('.private-doctor').empty();
     var private=""
     private+='<a href="even-order.html?id='+id+'&&d_id='+d_id+'">'+
     	 	'<div class="doctor-service-list-left">'+
     	 		'<img src="evendoctor/images/shiping.png">'+
     	 	'</div>'+
     	 	'<div class="doctor-service-list-auto">'+
     	 		'<p><span class="col-title-blue">私人医生</span><span class="col-money">100元</span><span class="col-number">/周</span></p>'+
     	 	'</div>'+
     	 	'<div class="doctor-service-list-right">'+
     	 		'<p><i class="iconfont icon-arrowright"></i></p>'+
     	 	'</div>'+
     	 	'</a>'
     $('.private-doctor').html(private)
 //底部跳转评论传参
    $('.argument-href').empty();
    var argument="";
        argument+='<a href="input.html?classify=医生&comment='+d_id+'&&id='+id+'&&d_id='+d_id+'"class="argument-href">'+ 
	'<button class="video-detail-foot-auto">发表评论</button>'+
	'</a>'
        $('.argument-href').html(argument);

 //评论列表
	$.ajax({
		 headers:{
      'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:apiurl+"commentlist",
		async:true,
		data:{
			classify:"医生",
			comment:d_id
			 
			 
			 
		},
		dataType:"json",
		success:function(data){
			console.log(data)
			 
			$('.xueyuan-content-list-box').empty();
			var pinlun="";
			$.each(data.success, function(key,list) {
				pinlun+='<li>'+
        		'<div class="xueyuan-list-head">'+
        			'<div class="list-head-i"><img src='+imgurl+list.photo+' style="width:100%;height:100%;border-radius:50px;"></div>'+
        			'<div class="list-head-auto">'+
        				'<p class="list-head-phone">'+list.name+'</p>'+
        				'<p class="list-head-day">'+list.created_at+'</p>'+
        			'</div>'+
        			'<span class="list-head-right">'+(key+1)+'#</span>'+
        		'</div>'+
        		'<div class="xueyuan-list-content">'+list.content+'</div>'+
           '</li>'
				
				
				
				$('.xueyuan-content-list-box').html(pinlun);
			});
			$('.user-title').empty()
			var hznumber=""
			hznumber+='<span>患者评价(<span>'+data.success.length+'</span>)</span>';
			$('.user-title').html(hznumber)
			 $('img').on("error",function(){
			 	$(this).attr("src","images//bag/morentouxiang.png")
			 })
			
			
		},
		error:function(data){
			console.log(data)
		}
		
	});
	 
	
	
	
	
	
	
	
	 
	
	
	
	
	
	
	
	 


})