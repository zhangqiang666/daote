$(function(){
	 var url=localStorage.getItem("url");
	 var imgurl=localStorage.getItem("imgurl");
	
	
	//我的关注视频课程列表
	$.ajax({
		headers:{
    'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:url+"collectlist",
		async:true,
		data:{
			classify:'2',
			f_type:'3',
			//id:localStorage.getItem("id")
		},
		dataType:"json",
		success:function(data){
			console.log(data);
			$('.video-content-list-box').empty();
			var shipin="";
			$.each(data.success, function(key,list) {
				console.log(list.msg.is_fee)
				if(list.msg.is_fee==1){ 
				shipin+='<li>'+
      		'<a href="video_detail.html?author='+list.msg.author+'&v_id='+list.msg.v_id+'">'+ 
      		'<div class="video-img"><img src='+imgurl+list.msg.img+' style="width:100%;"></div>'+
      		'<div class="video-title">'+list.msg.title+'</div>'+
      		'<div class="video-man-name">授课：'+name+'</div>'+
      		'<div class="video-no-money" style="color:red;">￥'+list.msg.price+'</div>'+
      		'</a>'+
      	'</li>'
      	    }else{
      	    		shipin+='<li>'+
      		'<a href="video_detail.html?author='+list.msg.author+'&v_id='+list.msg.v_id+'">'+ 
      		'<div class="video-img"><img src='+imgurl+list.msg.img+' style="width:100%;"></div>'+
      		'<div class="video-title">'+list.msg.title+'</div>'+
      		'<div class="video-man-name">授课：'+localStorage.getItem("name")+'</div>'+
      		'<div class="video-no-money">公开课</div>'+
      		'</a>'+
      	'</li>'
      	    }
      	    
      	    $('.video-content-list-box').html(shipin);
      	     //我的收藏头部显示数量
      	  $('.number01').empty();
      	  var number01="";
      	  number01+=data.success.length;
      	  $('.number01').html(number01)
			});
			 
			 // 这个可以实现多行的，内容增多显示省略号
//			 $(".video-title").each(function() {   
//			 	 if ($(this).text().length > 1) {     
//			 	   $(this).html($(this).text().replace(/\s+/g, "").substr(0, ) + "...")   
//			 	 }})

 
			
			
			
			
		}
	});
	
	//我的关注文章列表
	$.ajax({
		headers:{
    'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:url+"collectlist",
		async:true,
		data:{
			classify:'2',
			f_type:'2',
			//id:localStorage.getItem("id")
		},
		dataType:"json",
		success:function(data){
			console.log(data);
			 
			//文章列表
			$('.doctor-article-list-box').empty();
			var wenzhang="";
			$.each(data.success, function(key,list) {
				//console.log(list.msg.created_at.split(" ")[0])
				if(list.msg.is_fee==1){ 
				wenzhang+='<li>'+
      		'<a href="article_detail.html?author='+list.msg.author+'a_id='+list.msg.a_id+'"> '+
      		'<div class="article-list-title"> '+list.msg.title+'</div>'+
      		'<div class="article-foot">'+
      			//'<span class="article-foot-i">&nbsp;</span>'+
      			'<span class="col-blue">'+localStorage.getItem("name")+'</span>'+
      			'<span class="col-gray">'+list.msg.created_at.split(" ")[0]+'</span>'+
      			'<span class="col-money">付费阅读'+list.msg.price+'元</span>'+
      		    '<span class="col-right-argument"><i class="iconfont icon-xiaoxi-copy-copy"></i>&nbsp;'+localStorage.getItem("number")+'</span>'+
      		    '<span class="col-right-can"><i class="iconfont icon-chakan"></i>&nbsp;300</span>'+
      		'</div>'+
      		'</a>'+
      	'</li>'
      }else{
      	wenzhang+='<li>'+
      		'<a href="article_detail.html?author='+list.msg.author+'&a_id='+list.msg.a_id+'"> '+
      		'<div class="article-list-title">'+list.msg.title+'</div>'+
      		'<div class="article-foot">'+
      			//'<span class="article-foot-i">&nbsp;</span>'+
      			'<span class="col-blue">'+localStorage.getItem("name")+'</span>'+
      			'<span class="col-gray">'+list.msg.created_at.split(" ")[0]+'</span>'+
      		    '<span class="col-right-argument"><i class="iconfont icon-xiaoxi-copy-copy"></i>&nbsp;'+localStorage.getItem("number")+'</span>'+
      		    '<span class="col-right-can"><i class="iconfont icon-chakan1"></i>&nbsp;300</span>'+
      		'</div>'+
      		'</a>'+
      	'</li>'
      }
      	$('.doctor-article-list-box').html(wenzhang);
      	 
      	  //我的收藏头部显示数量
      	  $('.number02').empty();
      	  var number02="";
      	  number02+=data.success.length;
      	  $('.number02').html(number02)
      	
      	
      	
      	
      	
      	
      	
      	
      	
      	
			});
			
			
			
			
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
