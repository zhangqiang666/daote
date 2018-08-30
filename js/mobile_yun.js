$(function(){
	 var w = document.documentElement.clientWidth || document.body.clientWidth;
	 if(w>640){
	 	 window.location.href="yun.html" 
	 }
	 var url=localStorage.getItem("url");
	 var imgurl=localStorage.getItem("imgurl");
	  //视频课程头部分类选择控制
	  $('.video-head-list-box li').click(function(){
	  	$('.video-head-list-box li').css("background","#EDEDED");
	  	var _index=$('.video-head-list-box li').index(this)
	  	console.log(_index)
	  	$(this).css("background","#009BFF");
	  	
	  	
	  	
	  	
	  })
	   //医学文章头部分类选择控制
	  $('.video-head-list-box02 li').click(function(){
	  	$('.video-head-list-box02 li').css("background","#EDEDED");
	  	var _index=$('.video-head-list-box02 li').index(this)
	  	console.log(_index)
	  	$(this).css("background","#009BFF");
	  	
	  	
	  	
	  	
	  })
	  
	//视频课程列表
	$.ajax({
		type:"post",
		url:url+"videolist",
		async:true,
		data:{
			author:localStorage.getItem("d_id")
		},
		dataType:"json",
		success:function(data){
			console.log(data);
			$('.video-content-list-box').empty();
			var shipin="";
			$.each(data.success, function(key,list) {
				console.log(list.is_fee)
				if(list.is_fee==1){ 
				shipin+='<li>'+
      		'<a href="video_detail.html?author='+list.author+'&v_id='+list.v_id+'">'+ 
      		'<div class="video-img"><img src='+imgurl+list.img+' style="width:100%;height:100%;"></div>'+
      		'<div class="video-title">'+list.title+'</div>'+
      		'<div class="video-man-name">授课：'+name+'</div>'+
      		'<div class="video-no-money" style="color:red;">￥'+list.price+'</div>'+
      		'</a>'+
      	'</li>'
      	    }else{
      	    		shipin+='<li>'+
      		'<a href="video_detail.html?author='+list.author+'&v_id='+list.v_id+'">'+ 
      		'<div class="video-img"><img src='+imgurl+list.img+' style="width:100%;height:100%;"></div>'+
      		'<div class="video-title">'+list.title+'</div>'+
      		'<div class="video-man-name">授课：'+localStorage.getItem("name")+'</div>'+
      		'<div class="video-no-money">公开课</div>'+
      		'</a>'+
      	'</li>'
      	    }
			});
			$('.video-content-list-box').html(shipin);
			//文章列表
			$('.doctor-article-list-box').empty();
			var wenzhang="";
			$.each(data.success, function(key,list) {
				if(list.is_fee==1){ 
				wenzhang+='<li>'+
      		'<a href="article_detail.html?author='+list.author+'"> '+
      		'<div class="article-list-title"> '+list.title+'<span class="col-red">&nbsp;&nbsp;New</span></div>'+
      		'<div class="article-foot">'+
      			'<span class="article-foot-i">&nbsp;</span>'+
      			'<span class="col-blue">'+name+'</span>'+
      			'<span class="col-gray">'+list.created_at+'</span>'+
      			'<span class="col-money">付费课程</span>'+
      		    '<span class="col-right-argument"><i class="iconfont icon-pinglun"></i>100</span>'+
      		    '<span class="col-right-can"><i class="iconfont icon-chakan"></i>300</span>'+
      		'</div>'+
      		'</a>'+
      	'</li>'
      }else{
      	wenzhang+='<li>'+
      		'<a href="article_detail.html?author='+list.author+'"> '+
      		'<div class="article-list-title">'+list.title+'<span class="col-red">&nbsp;&nbsp;New</span></div>'+
      		'<div class="article-foot">'+
      			'<span class="article-foot-i">&nbsp;</span>'+
      			'<span class="col-blue">'+name+'</span>'+
      			'<span class="col-gray">'+list.created_at+'</span>'+
      		    '<span class="col-right-argument"><i class="iconfont icon-pinglun"></i>100</span>'+
      		    '<span class="col-right-can"><i class="iconfont icon-chakan"></i>300</span>'+
      		'</div>'+
      		'</a>'+
      	'</li>'
      }
      	$('.doctor-article-list-box').html(wenzhang);
      	//我的订单视频课程
      	$('.my-order-list-box').empty();
      	var dingdan="";
      	  $.each(data.success, function(key,list) {
      	  if(list.is_fee==1){ 
      	  	dingdan+='<li>'+
      	  	  '<a href="video_detail.html?author='+list.author+'&v_id='+list.v_id+'">'+ 
                 		'<div class="order-video-img"><img src='+imgurl+list.img+' style="width:100%;height:100%;"></div>'+
                 		'<div class="order-video-right">'+
                 			'<div class="right-title">'+list.title+'</div>'+
                 			'<div class="right-man">授课：'+localStorage.getItem("name")+'</div>'+
                 			'<div class="right-money">￥'+list.price+'</div>'+
                 		'</div>'+
                 		'</a>'+
                 '</li>'
                }else{
                	dingdan+='<li>'+
      	  	  '<a href="video_detail.html?author='+list.author+'&v_id='+list.v_id+'">'+ 
                 		'<div class="order-video-img"><img src='+imgurl+list.img+' style="width:100%;height:100%;"></div>'+
                 		'<div class="order-video-right">'+
                 			'<div class="right-title">'+list.title+'</div>'+
                 			'<div class="right-man">授课：'+localStorage.getItem("name")+'</div>'+
                 			'<div class="right-money" style="color:#70D445;">公开课</div>'+
                 		'</div>'+
                 		'</a>'+
                 '</li>'
                }
      	  });
      	  $('.my-order-list-box').html(dingdan)
      	  //我的订单头部显示数量
      	  $('.number').empty();
      	  var number="";
      	  number+=data.success.length;
      	  $('.number').html(number)
      	
      	
      	
      	
      	
      	
      	
      	
      	
      	
			});
			
			
			
			
		}
	});
	
	
	
	
	
	
	
	
	
})
