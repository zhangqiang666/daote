$(function(){
	var url = location.search;//获取url中"?"符后的字串

    var theRequest = new Object();

    if (url.indexOf("?") != -1) {

        var str = url.substr(1);

        strs = str.split("&");

        for(var i = 0; i < strs.length; i ++) {

            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);

        }

    }

    console.log(theRequest.id);
    var id = theRequest.id;
      var d_id= theRequest.d_id;
    console.log(id)
    var url66=localStorage.getItem("url");
    var imgurl=localStorage.getItem("imgurl");
     
    //var imgurl='http://www.dianyitai.cn'
    
    
     //底部跳转评论传参
    $('.argument-href').empty();
    var argument="";
        argument+='<a href="input.html?classify=医生&comment='+d_id+'"class="argument-href">'+ 
	'<button class="video-detail-foot-auto">发表评论</button>'+
	'</a>'
        $('.argument-href').html(argument);
      
	$.ajax({
		type:"post",
		url:url66+"doctorlist",
		async:true,
		data:{
			id:id
		},
		dataType:"json",
		success:function(data){
			console.log(data)
			//关注该医生
			$('.doctor-detail-card-box').empty();
			var html="";
			 
			    //$.each(JSON.parse(data).data.detail, function(key,list) {
				$.each(data.success, function(key,list) {
					localStorage.setItem("d_id",list.d_id)
					localStorage.setItem("name",list.name)
					 videodetail(list.name);
					 console.log(list.name)
				html+='<div class="card-head-box">'+
               			'<img src='+imgurl+list.photo+'>'+
               			'<div class="card-head-main">'+
               				'<p><strong>'+list.name+'：'+list.position+'</strong></p>'+
               				'<p>'+list.from+'</p>'+
               			'</div>'+
               			'<div class="card-head-btn">关注该医生</div>'+
               			'<div class="card-head-btn66">取消关注</div>'+
               		'</div>'+
               		'<div class="card-head-centent">'+list.intro+'</div>'
			});
			$('.doctor-detail-card-box').html(html);
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			  //判断是否关注该医生
	$.ajax({
		type:"post",
		url:url66+"getcom",
		async:true,
		data:{
			classify:'1',
			f_type:'1',
			focus:d_id,
			id:localStorage.getItem("id")
			
		},
		dataType:"json",
		success:function(data){
			console.log(data);
			if(data.success==1){
				$('.card-head-btn').hide();
				$('.card-head-btn66').css("display","block");
				 
			}else{
				$('.card-head-btn66').hide();
				$('.card-head-btn').css("display","block");
			}
		}
	});
			 
			 
			//关注按钮的切换
			$('.card-head-btn').click(function(){
//				$('.card-head-btn').hide();
//				$('.card-head-btn66').css("display","block");
//		$('<div>').appendTo('body').addClass('alert alert-success').html('关注成功').show().delay(1500).fadeOut();
if(localStorage.getItem("temp")){
	//关注医生
	$.ajax({
		type:"post",
		url:url66+"getcollect",
		async:true,
		data:{
			classify:'1',
			f_type:'1',
			focus:d_id,
			id:localStorage.getItem("id")
			
			
		},
		dataType:"json",
		success:function(data){
			console.log(data);
			if(data.success){
				$('.card-head-btn').hide();
				$('.card-head-btn66').css("display","block");
				$('<div>').appendTo('body').addClass('alert alert-success').html('关注成功').show().delay(1500).fadeOut();
			}
		}
	});
	
}else{
	$('<div>').appendTo('body').addClass('alert alert-success').html('请先登录再进行关注该用户').show().delay(1500).fadeOut();
}
 
			
			})
			$('.card-head-btn66').click(function(){
//				$('.card-head-btn66').hide();
//				$('.card-head-btn').css("display","block");
//				$('<div>').appendTo('body').addClass('alert alert-success').html('取消成功').show().delay(1500).fadeOut();
//取消关注医生
	$.ajax({
		type:"post",
		url:url66+"losecollect",
		async:true,
		data:{
			classify:'1',
			f_type:'1',
			focus:d_id,
			id:localStorage.getItem("id")
			
			
		},
		dataType:"json",
		success:function(data){
			console.log(data);
			if(data.success){
				$('.card-head-btn66').hide();
				$('.card-head-btn').css("display","block");
				$('<div>').appendTo('body').addClass('alert alert-success').html('取消成功').show().delay(1500).fadeOut();
			}
		}
	});










			})
			 
			
			
			
			
			
			
			
			
			
			
			
		}
	});
	//课程视频
	function videodetail(name){ 
		console.log(name)
	$.ajax({
		type:"post",
		url:url66+"videolist",
		async:true,
		data:{
			author:d_id,
			type:'0'
		},
		dataType:"json",
		success:function(data){
			console.log(data);
			$('.tab-home-list-box').empty();
			var shipin="";
			$.each(data.success, function(key,list) {
				if(list.is_fee==1){ 
				shipin+='<li>'+
				'<a href="video_detail.html?author='+list.author+'&v_id='+list.v_id+'">'+
      		'<div class="tab-home-list-video"><img src='+imgurl+list.img+' style="width:100%;height:100%;"></div>'+
      		'<div class="home-video-name">'+list.title+'</div>'+
      		'<div class="home-video-doctor">'+
      		'<span class="fot-doctor">授课：'+name+'</span><br><span class="col-red66">￥'+list.price+'</span>'+
      		'</div>'+
      		'</a>'+
      	     '</li>'
      	    }else{
      	    	shipin+='<li>'+
      	    	'<a href="video_detail.html?author='+list.author+'&v_id='+list.v_id+'">'+
      		'<div class="tab-home-list-video"><img src='+imgurl+list.img+' style="width:100%;height:100%;"></div>'+
      		'<div class="home-video-name">'+list.title+'</div>'+
      		'<div class="home-video-doctor">'+
      		'<span class="fot-doctor">授课：'+name+'</span><span class="col-green">公开课</span>'+
      		'</div>'+
      		'</a>'+
      	     '</li>'
      	    }
			});
			$('.tab-home-list-box').html(shipin);
			 
			//});
			
			
			
			
		}
	});
	//文章列表
	$.ajax({
		type:"post",
		url:url66+"articlelist",
		async:true,
		data:{
			author:d_id,
			type:'0'
		},
		dataType:"json",
		success:function(data){
			console.log(data);
			 
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
      			'<span class="col-blue">'+name+'</span>'+
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
      			'<span class="col-blue">'+name+'</span>'+
      			'<span class="col-gray">'+list.created_at+'</span>'+
      		    '<span class="col-right-argument"><i class="iconfont icon-pinglun"></i>'+localStorage.getItem("number")+'</span>'+
      		    '<span class="col-right-can"><i class="iconfont icon-chakan"></i>300</span>'+
      		'</div>'+
      		'</a>'+
      	'</li>'
      }
      	$('.doctor-article-list-box').html(wenzhang);
			});
			
			
			
			
		}
	});
	
	
	
	
	
	
	}
	 videodetail();
	 //评论列表
	$.ajax({
		type:"post",
		url:url66+"commentlist",
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
//			$('.argument-head-number').empty()
//			var hznumber=""
//			hznumber+='<span>患者评价(<span>'+data.success.length+'</span>)</span>';
//			$('.argument-head-number').html(hznumber)
			 
			
			
		},
		error:function(data){
			
		}
		
	});
	 
	
	
	
	
	  
	 
	 
})
