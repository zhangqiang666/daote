$(function(){
	  //判断是否登录
//	  var cookie=$.cookie("temp")
//	  console.log(cookie)
// 	 // var temp=localStorage.getItem("temp")
//	if(cookie==undefined){
//		var test = window.location.href;
//		localStorage.setItem("windowhref",test);
//		window.location.href="mobile_login.html"
//		 
//	}

//	 var w = document.documentElement.clientWidth || document.body.clientWidth;
//	 if(w>640){
//	 	 window.location.href="yun.html" 
//	 }
	// var url=localStorage.getItem("url");
	//var imgurl=localStorage.getItem("imgurl");
	 console.log(imgurl666)
	  //点击切换控制
	  function control(type){
	   
	   //医学文章头部分类选择控制
	  $('.video-head-list-box02 li').click(function(){
	  	$('.video-head-list-box02 li').css("background","#EDEDED");
	  		$('.video-head-list-box02 li').css("color","black");
	  	var _index=$('.video-head-list-box02 li').index(this)
	  	//console.log(_index)
	  	 var type=$(this).attr("date-id");
             list(type);
	  	 list(type);
	  	$(this).css("background","#009BFF");
	  	$(this).css("color","white");
	  	
	  	
	  	
	  	
	  })
	  }
	 
	  function list(type){ 
	//视频课程列表
//	$.ajax({
//		 headers:{
//    'Authorization':localStorage.getItem("token"),
//   },
//		type:"post",
//		url:url+"videolist",
//		async:true,
//		data:{
//			author:'',
//			type:type 
//		},
//		dataType:"json",
//		success:function(data){
//			console.log(data);
//			$('.video-content-list-box').empty();
//			var shipin="";
//			$.each(data.success, function(key,list) {
//				//console.log(list.is_fee)
//				if(list.is_fee==1){ 
//				shipin+='<li>'+
//    		'<a href="video_detail.html?author='+list.author+'&v_id='+list.v_id+'">'+ 
//    		'<div class="video-img"><img src='+imgurl+list.img+' style="width:100%;height:100%;"></div>'+
//    		'<div class="video-title">'+list.title+'</div>'+
//    		'<div class="video-man-name">授课：'+list.doctor_name+'</div>'+
//    		'<div class="video-no-money" style="color:red;">￥'+list.price+'</div>'+
//    		'</a>'+
//    	'</li>'
//    	    }else{
//    	    		shipin+='<li>'+
//    		'<a href="video_detail.html?author='+list.author+'&v_id='+list.v_id+'">'+ 
//    		'<div class="video-img"><img src='+imgurl+list.img+' style="width:100%;height:100%;"></div>'+
//    		'<div class="video-title">'+list.title+'</div>'+
//    		'<div class="video-man-name">授课：'+list.doctor_name+'</div>'+
//    		'<div class="video-no-money">公开课</div>'+
//    		'</a>'+
//    	'</li>'
//    	    }
//			});
//			$('.video-content-list-box').html(shipin);
//			 
//		},
//		error:function(data){
//			//console.log(data)
//			if(data.responseJSON.error){ 
//			$('.video-content-list-box').empty()
//			var zanwu="";
//			zanwu+='<div class="video-zanwu"><img src="images/bag/zanwushuju.png" class="zanwu-img"><div>暂无数据</div></div>';
//			$('.video-content-list-box').html(zanwu)
//			}
//		}
//		
//	});
	//文章列表
	 
	$.ajax({
		 headers:{
      'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:apiurl+"valist",
		async:true,
		data:{
			author:'',
			type:type
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
				wenzhang+='<li class="dyt-money" data-type="2" data-id='+list.a_id+' data-author='+list.author+' onClick="fun(1, this)">'+
      		//'<a href="article_detail.html?author='+list.author+'&a_id='+list.a_id+'"> '+
      		'<div class="valist-video-left"><div class="article-list-title"> '+list.title+'<span>【</span><span>文章</span><span>】</span></div>'+
      		'<div class="article-foot">'+
      			//'<span class="article-foot-i">&nbsp;</span>'+
      			'<span class="col-blue">'+list.doctor_name+'</span>'+
      			'<span class="col-gray">'+list.created_at+'</span>'+
      			'<span class="col-money">付费'+parseFloat(list.price)+'元</span>'+
      		    '<span class="col-right-argument"><i class="iconfont icon-xiaoxi-copy-copy"></i>&nbsp;0</span>'+
      		    '<span class="col-right-can"><i class="iconfont icon-chakan1"></i>&nbsp;'+list.view_count+'</span>'+
      		'</div></div>'+
      		'<div class="video-img"><img src='+imgurl666+list.img+' style="width:100%;"></div>'+
      		//'</a>'+
      	'</li>'
      }else{
      	wenzhang+='<li>'+
      		'<a href="article_detail.html?author='+list.author+'&a_id='+list.a_id+'"> '+
      		'<div class="valist-video-left"><div class="article-list-title">'+list.title+'<span>【</span><span>文章</span><span>】</span></div>'+
      		'<div class="article-foot">'+
      			//'<span class="article-foot-i">&nbsp;</span>'+
      			'<span class="col-blue">'+list.doctor_name+'</span>'+
      			'<span class="col-gray">'+list.created_at+'</span>'+
      		    '<span class="col-right-argument"><i class="iconfont icon-xiaoxi-copy-copy"></i>&nbsp;0</span>'+
      		    '<span class="col-right-can"><i class="iconfont icon-chakan1"></i>&nbsp;'+list.view_count+'</span>'+
      		'</div></div>'+
      		'<div class="video-img"><img src='+imgurl666+list.img+' style="width:100%;"></div>'+
      		'</a>'+
      	'</li>'
      }
     }else{
     if(list.is_fee==1){ 
				wenzhang+='<li class="dyt-money" data-type="1" data-id='+list.v_id+' data-author='+list.author+' onClick="fun(1, this)">'+
      		//'<a href="video_detail.html?author='+list.author+'&v_id='+list.v_id+'">'+ 
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
      		//'</a>'+
      	'</li>'
     
      	    }else{
      	    	 
				wenzhang+='<li>'+
      		'<a href="video_detail.html?author='+list.author+'&v_id='+list.v_id+'">'+ 
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
      	//当图片加载失败时加载默认图片
      	
       $("img").on("error",function(){
       	$(this).attr("src",'images/bag/ssys.png')
       })
      	
      	
      	
      	
      	
      	
      	
      	
      	
      	
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
	
	}
	  list(0);
	  
	    //文章的分类
	  $.ajax({
	  	 headers:{
      'Authorization':localStorage.getItem("token"),
     },
	  	type:"post",
	  	url:apiurl+"typename",
	  	async:true,
	  	data:{
	  		//author:localStorage.getItem("d_id"),
	  		//f_type:'2'
	  	},
	  	dataType:"json",
	  	success:function(data){
	  		//console.log(data); 
	  		 
	  		//文章分类目录
	  		$('.video-head-list-box02').empty();
	  		var typename="";
	  		$.each(data.success, function(key,list) {
	  			  
	  			typename+='<li date-id='+list.type+'>'+list.type_name+'</li>'
	  			  
	  			
	  		});
	  		$('.video-head-list-box02').html(typename);
	  		//
	  		
	  		 control();
	  		
	  		
	  		
	  		
	  	}
	  });
	  
	   //视频的分类
	  $.ajax({
	  	 headers:{
      'Authorization':localStorage.getItem("token"),
     },
	  	type:"post",
	  	url:apiurl+"typename",
	  	async:true,
	  	data:{
	  		//author:localStorage.getItem("d_id"),
	  		//f_type:'1'
	  	},
	  	dataType:"json",
	  	success:function(data){
	  		//console.log(data); 
	  		//视频分类目录
	  		$('.video-head-list-box').empty();
	  		var typename="";
	  		$.each(data.success, function(key,list) {
	  			  
	  			typename+='<li date-id='+list.type+' >'+list.type_name+'</li>'
	  			 
	  			//onClick="list('+list.type+')"
	  		});
	  		$('.video-head-list-box').html(typename);
	  		 
	  		//
	  		
	  		 control();
	  		
	  		
	  		
	  		 
	  	}
	  });
	
	
	
	
	
	 	
})
