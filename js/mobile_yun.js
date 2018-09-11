$(function(){
//	 var w = document.documentElement.clientWidth || document.body.clientWidth;
//	 if(w>640){
//	 	 window.location.href="yun.html" 
//	 }
	 var url=localStorage.getItem("url");
	 var imgurl=localStorage.getItem("imgurl");
	  //点击切换控制
	  function control(type){
	  	 //视频课程头部分类选择控制
	  $('.video-head-list-box li').click(function(){
	  	$('.video-head-list-box li').css("background","#EDEDED");
	  		$('.video-head-list-box li').css("color","black");
	  	var _index=$('.video-head-list-box li').index(this)
	  	//console.log(_index)
	  	 list(_index);
	  	$(this).css("background","#009BFF");
	  $(this).css("color","white");
	  	
	  	
	  	
	  	
	  })
	   //医学文章头部分类选择控制
	  $('.video-head-list-box02 li').click(function(){
	  	$('.video-head-list-box02 li').css("background","#EDEDED");
	  		$('.video-head-list-box02 li').css("color","black");
	  	var _index=$('.video-head-list-box02 li').index(this)
	  	//console.log(_index)
	  	 list(_index);
	  	$(this).css("background","#009BFF");
	  	$(this).css("color","white");
	  	
	  	
	  	
	  	
	  })
	  }
	  //文章和视频的分类
	  $.ajax({
	  	type:"post",
	  	url:localStorage.getItem("url")+"typename",
	  	async:true,
	  	data:{
	  		//author:localStorage.getItem("d_id"),
	  		f_type:'2'
	  	},
	  	dataType:"json",
	  	success:function(data){
	  		//console.log(data); 
	  		 
	  		//文章分类目录
	  		$('.video-head-list-box02').empty();
	  		var typename="";
	  		$.each(data.success, function(key,list) {
	  			  
	  			typename+='<li>'+list.type_name+'</li>'
	  			 
	  			
	  		});
	  		$('.video-head-list-box02').html(typename);
	  		//
	  		
	  		 control();
	  		
	  		
	  		
	  		 
	  	}
	  });
	   //文章和视频的分类
	  $.ajax({
	  	type:"post",
	  	url:localStorage.getItem("url")+"typename",
	  	async:true,
	  	data:{
	  		//author:localStorage.getItem("d_id"),
	  		f_type:'1'
	  	},
	  	dataType:"json",
	  	success:function(data){
	  		//console.log(data); 
	  		//视频分类目录
	  		$('.video-head-list-box').empty();
	  		var typename="";
	  		$.each(data.success, function(key,list) {
	  			  
	  			typename+='<li>'+list.type_name+'</li>'
	  			 
	  			
	  		});
	  		$('.video-head-list-box').html(typename);
	  		 
	  		//
	  		
	  		 control();
	  		
	  		
	  		
	  		 
	  	}
	  });
	  function list(type){ 
	//视频课程列表
	$.ajax({
		type:"post",
		url:url+"videolist",
		async:true,
		data:{
			author:'',
			type:type 
		},
		dataType:"json",
		success:function(data){
			//console.log(data);
			$('.video-content-list-box').empty();
			var shipin="";
			$.each(data.success, function(key,list) {
				//console.log(list.is_fee)
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
			 
		},
		error:function(data){
			//console.log(data)
			if(data.responseJSON.error){ 
			$('.video-content-list-box').empty()
			var zanwu="";
			zanwu+='<div class="video-zanwu"><img src="images/bag/zanwushuju.png" class="zanwu-img"><div>暂无数据</div></div>';
			$('.video-content-list-box').html(zanwu)
			}
		}
		
	});
	//文章列表
	 
	$.ajax({
		type:"post",
		url:url+"articlelist",
		async:true,
		data:{
			author:'',
			type:type
		},
		dataType:"json",
		success:function(data){
			//console.log(data);
			//文章列表
			$('.doctor-article-list-box').empty();
			var wenzhang="";
			$.each(data.success, function(key,list) {
				if(list.is_fee==1){ 
				wenzhang+='<li>'+
      		'<a href="article_detail.html?author='+list.author+'&a_id='+list.a_id+'"> '+
      		'<div class="article-list-title"> '+list.title+'<span class="col-red">&nbsp;&nbsp;New</span></div>'+
      		'<div class="article-foot">'+
      			'<span class="article-foot-i">&nbsp;</span>'+
      			'<span class="col-blue">'+localStorage.getItem("name")+'</span>'+
      			'<span class="col-gray">'+list.created_at+'</span>'+
      			'<span class="col-money">付费阅读'+list.price+'元</span>'+
      		    '<span class="col-right-argument"><i class="iconfont icon-pinglun"></i>'+localStorage.getItem("number")+'</span>'+
      		    '<span class="col-right-can"><i class="iconfont icon-chakan"></i>300</span>'+
      		'</div>'+
      		'</a>'+
      	'</li>'
      }else{
      	wenzhang+='<li>'+
      		'<a href="article_detail.html?author='+list.author+'&a_id='+list.a_id+'"> '+
      		'<div class="article-list-title">'+list.title+'<span class="col-red">&nbsp;&nbsp;New</span></div>'+
      		'<div class="article-foot">'+
      			'<span class="article-foot-i">&nbsp;</span>'+
      			'<span class="col-blue">'+localStorage.getItem("name")+'</span>'+
      			'<span class="col-gray">'+list.created_at+'</span>'+
      		    '<span class="col-right-argument"><i class="iconfont icon-pinglun"></i>'+localStorage.getItem("number")+'</span>'+
      		    '<span class="col-right-can"><i class="iconfont icon-chakan"></i>300</span>'+
      		'</div>'+
      		'</a>'+
      	'</li>'
      }
      	$('.doctor-article-list-box').html(wenzhang);
       
      	
      	
      	
      	
      	
      	
      	
      	
      	
      	
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
	
	
	
	
	
	
	
})
