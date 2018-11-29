$(function(){
	
		//文章列表
	 var doctor_id=localStorage.getItem("doctor_id")
	 console.log(doctor_id)
	$.ajax({
		 headers:{
      'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:apiurl+"valist",
		async:true,
		data:{
			author:doctor_id,
			type:'0'
		},
		dataType:"json",
		success:function(data){
			
			console.log(data);
			
			//文章列表
			$('.doctor-article-list-box').empty();
			var wenzhang="";
			$.each(data.success, function(key,list) {
				 	//console.log(list.created_at.split(" ")[0])
				 	localStorage.setItem("manname",list.doctor_name)
				if(list.a_id){ 
				if(list.is_fee==1){ 
				wenzhang+='<li class="dyt-money" data-type="2" data-id='+list.a_id+' data-author='+list.author+'>'+
      		'<a href="doctor-article-detail.html?author='+list.author+'&a_id='+list.a_id+'"> '+
      		'<div class="valist-video-left"><div class="article-list-title"> '+list.title+'<span>【</span><span>文章</span><span>】</span></div>'+
      		'<div class="article-foot">'+
      			//'<span class="article-foot-i">&nbsp;</span>'+
      			'<span class="col-blue">'+list.doctor_name+'</span>'+
      			'<span class="col-gray">'+list.created_at+'</span>'+
      			'<span class="col-money">付费'+parseFloat(list.price)+'元</span>'+
      		    '<span class="col-right-argument"><i class="iconfont icon-xiaoxi-copy-copy"></i>&nbsp;0</span>'+
      		    '<span class="col-right-can"><i class="iconfont icon-chakan1"></i>&nbsp;'+list.view_count+'</span>'+
      		'</div></div>'+
      		'<div class="video-img"><img src='+list.img+' style="width:100%;"></div>'+
      		'</a>'+
      	'</li>'
      }else{
      	wenzhang+='<li>'+
      		'<a href="doctor-article-detail.html?author='+list.author+'&a_id='+list.a_id+'"> '+
      		'<div class="valist-video-left"><div class="article-list-title">'+list.title+'<span>【</span><span>文章</span><span>】</span></div>'+
      		'<div class="article-foot">'+
      			//'<span class="article-foot-i">&nbsp;</span>'+
      			'<span class="col-blue">'+list.doctor_name+'</span>'+
      			'<span class="col-gray">'+list.created_at+'</span>'+
      		    '<span class="col-right-argument"><i class="iconfont icon-xiaoxi-copy-copy"></i>&nbsp;0</span>'+
      		    '<span class="col-right-can"><i class="iconfont icon-chakan1"></i>&nbsp;'+list.view_count+'</span>'+
      		'</div></div>'+
      		'<div class="video-img"><img src='+list.img+' style="width:100%;"></div>'+
      		'</a>'+
      	'</li>'
      	 
      }
     }else{
     if(list.is_fee==1){  
				wenzhang+='<li class="dyt-money" data-type="1" data-id='+list.v_id+' data-author='+list.author+'>'+
      		'<a href="doctor-video-detail.html?author='+list.author+'&v_id='+list.v_id+'">'+ 
      		'<div class="valist-video-left"><div class="video-title-copy"><span>'+list.title+'</span><span>【</span><span>视频</span><span>】</span></div>'+
      		//'<div class="video-img"><img src='+imgurl+list.img+' style="width:100%;height:100%;"></div>'+
      		'<div class="article-foot">'+
      			//'<span class="article-foot-i">&nbsp;</span>'+
      			'<span class="col-blue">'+list.doctor_name+'</span>'+
      			'<span class="col-gray">'+list.created_at.split(" ")[0]+'</span>'+
      			'<span class="col-money">付费'+parseFloat(list.price)+'元</span>'+
      		    '<span class="col-right-argument"><i class="iconfont icon-xiaoxi-copy-copy"></i>&nbsp;0</span>'+
      		    '<span class="col-right-can"><i class="iconfont icon-chakan1"></i>&nbsp;'+list.view_count+'</span>'+
      		'</div></div>'+
      		'<div class="video-img"><img src='+imgurl666+list.img+' style="width:100%;"></div>'+
      		'</a>'+
      	'</li>'
     
      	    }else{
      	    	 
				wenzhang+='<li>'+
      		'<a href="doctor-video-detail.html?author='+list.author+'&v_id='+list.v_id+'">'+ 
      		'<div class="valist-video-left"><div class="video-title-copy"><span>'+list.title+'</span><span>【</span><span>视频</span><span>】</span></div>'+
      		//'<div class="video-img"><img src='+imgurl+list.img+' style="width:100%;height:100%;"></div>'+
      		'<div class="article-foot">'+
      			//'<span class="article-foot-i">&nbsp;</span>'+
      			'<span class="col-blue">'+list.doctor_name+'</span>'+
      			'<span class="col-gray">'+list.created_at.split(" ")[0]+'</span>'+
      		    '<span class="col-right-argument"><i class="iconfont icon-xiaoxi-copy-copy"></i>&nbsp;0</span>'+
      		    '<span class="col-right-can"><i class="iconfont icon-chakan1"></i>&nbsp;'+list.view_count+'</span>'+
      		'</div></div>'+
      		'<div class="video-img"><img src='+imgurl666+list.img+' style="width:100%;"></div>'+
      		'</a>'+
      	'</li>'
     
}
     }
      	$('.doctor-article-list-box').html(wenzhang);
       
      	//默认图片加载失败后的替换图片
	$("img").on("error", function () {
     $(this).attr("src", "images/bag/ycspmz.png");
    });
	 
      	
      	
      	
      	
      	
      	
      	
			});
			
			
			
			
		},
		error:function(data){
			//console.log(data)
			if(data.responseJSON.error){ 
			$('.doctor-article-list-box').empty()
			var zanwu="";
			zanwu+='<div class="article-zanwu"><img src="images/bag/zanwushuju.png" class="zanwu-img"><div>暂无数据</div></div>';
			$('.doctor-article-list-box').html(zanwu)
			}
		}
	});
	 
	
})
