$(function(){
	//$('.alert').html('操作成功').addClass('alert-success').show().delay(1500).fadeOut();
//	$('.video-detail-foot-left').click(function(){
//		$('<div>').appendTo('body').addClass('alert alert-success').html('你已成功报名该公开课').show().delay(1500).fadeOut();
//		
//	})
//	
var url66=localStorage.getItem("url");
var imgurl=localStorage.getItem("imgurl");
var url = location.search;//获取url中"?"符后的字串

    var theRequest = new Object();

    if (url.indexOf("?") != -1) {

        var str = url.substr(1);

        strs = str.split("&");

        for(var i = 0; i < strs.length; i ++) {

            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);

        }

    }

   // console.log(theRequest.author);
    var author=theRequest.author;
    var v_id=theRequest.v_id;
    //var v_id=theRequest.d_id;
    localStorage.setItem("v_id",v_id)
    console.log(v_id)
    console.log(author)
    //底部跳转评论传参
    $('.argument-href').empty();
    var argument="";
        argument+='<a href="input.html?classify=视频&comment='+v_id+'"class="argument-href">'+ 
	'<button class="video-detail-foot-auto">发表评论</button>'+
	'</a>'
        $('.argument-href').html(argument);
      
	$.ajax({
		headers:{
    'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:apiurl+"video",
		async:true,
		data:{
			 author:author,
			 v_id:v_id,
			 type:'0'
		},
		dataType:"json",
		success:function(data){
			console.log(data)
			 
			$('.video-card-box').empty();
			var html="";
			
			var data = data['data'];
			 
			//$.each(data.data, function(key,list) {
				if(data.is_fee==1){ 
					 
				 html+='<video width="100%" height="150" poster='+imgurl+data.img+' controls>'+
                  '<source src='+data.video+' controls="true" controlslist="nodownload" type="video/mp4">'+
                '</video>'+
            	 '<div class="video-card-foot-01">'+
            		'<span class="col-green" style="color:red;">￥'+data.price+'&nbsp;</span>'+
            		'<span>'+data.title+'</span>'+
            	'</div>'+
            	'<div class="video-card-foot-02">'+
            		'<span>最近在学2245人</span>'+
            		'<span class="border-auto"></span>'+
            		'<span>好评度99%</span>'+
            	'</div>'
           }else{ 
            	 html+='<video width="100%" height="150"  poster='+imgurl+data.img+' controls autoplay="true">'+
                  '<source src='+data.video+'  type="video/mp4">'+
                '</video>'+
            	 '<div class="video-card-foot-01">'+
            		'<span class="col-green">【公开课】</span>'+
            		'<span>'+data.title+'</span>'+
            	'</div>'+
            	'<div class="video-card-foot-02">'+
            		'<span>最近在学2245人</span>'+
            		'<span class="border-auto"> </span>'+
            		'<span>好评度99%</span>'+
            	'</div>'
            }
				
			//});
			 $('.video-card-box').html(html);
			
			
		},
		error:function(data){
			
		}
		
	});
	//医生简介
	$.ajax({
		headers:{
    'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:url66+"doctorlist",
		async:true,
		data:{
			id:author
		},
		dataType:"json",
		success:function(data){
			console.log(data);
			$('.doctor-jiajie').empty();
			var doctor="";
			$.each(data.success,function(key,list){
			//$.each(JSON.parse(data).data,function(key,list){
				 doctor+='<div class="home-man-img">'+
      	 '<img src='+imgurl+list.photo+'><br>'+
      	 '<span>'+list.name+list.position+'</span>'+
         '</div>'+
         '<div class="home-content">'+list.intro+'</div>'
     
             
			})
			 $('.doctor-jiajie').html(doctor);
		}
	});
//评论列表
	$.ajax({
		headers:{
    'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:url66+"commentlist",
		async:true,
		data:{
			classify:"视频",
			comment:v_id
			 
		},
		dataType:"json",
		success:function(data){
			console.log(data)
			$('.xueyuan-content-list-box').empty();
			var pinlun="";
			//for(var i=0; i<data.success.length;i++){ 
			$.each(data.success, function(key,list) {
				localStorage.setItem("yhname",list.name)
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
			//};
			 $('.video-detail-number').empty();
			 
			 localStorage.setItem("argumentnumber",data.success.length)
			 var number="";
			// $.each(data.success, function(key,list) {
			 number+=data.success.length;
			 $('.video-detail-number').html(number);
			//});
			
			
		},
		error:function(data){
			
		}
		
	});
	//判断是否收藏视屏
	$.ajax({
		headers:{
    'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:url66+"getcom",
		async:true,
		data:{
			classify:'2',
			f_type:'3',
			focus:v_id,
			id:localStorage.getItem("id")
			
		},
		dataType:"json",
		success:function(data){
			console.log(data);
			if(data.success==1){
				 $('.collection-erroy').hide();
				 $('.collection-success').show();
				 
			}else{
				$('.collection-success').hide();
		        $('.collection-erroy').show();
			}
		}
	});
	//是否收藏
	$('.collection-success').hide();
	$('.collection-erroy').click(function(){
//		$('.collection-erroy').hide();
//		$('.collection-success').show();
//		$('<div>').appendTo('body').addClass('alert alert-success').html('收藏成功').show().delay(1500).fadeOut();
//收藏视屏
	$.ajax({
		headers:{
    'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:url66+"getcollect",
		async:true,
		data:{
			classify:'2',
			f_type:'3',
			focus:v_id,
			id:localStorage.getItem("id")
			
		},
		dataType:"json",
		success:function(data){
			console.log(data);
			if(data.success){
				 $('.collection-erroy').hide();
				 $('.collection-success').show();
				 $('<div>').appendTo('body').addClass('alert alert-success').html('收藏成功').show().delay(1500).fadeOut();
			}
		}
	});
		 
	})
	$('.collection-success').click(function(){
//		$('.collection-success').hide();
//		$('.collection-erroy').show();
//		$('<div>').appendTo('body').addClass('alert alert-success').html('取消收藏成功').show().delay(1500).fadeOut();
//取消收藏视屏
	$.ajax({
		headers:{
    'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:url66+"losecollect",
		async:true,
		data:{
			classify:'2',
			f_type:'3',
			focus:v_id,
			id:localStorage.getItem("id")
			
		},
		dataType:"json",
		success:function(data){
			console.log(data);
			if(data.success){
				$('.collection-success').hide();
				$('.collection-erroy').show();
				$('<div>').appendTo('body').addClass('alert alert-success').html('取消收藏成功').show().delay(1500).fadeOut();
			}
		}
	});




	})
 
	
	
	
	
	
	
	
	
	 
})
