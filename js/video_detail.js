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
    console.log(v_id)
    console.log(author)
	$.ajax({
		type:"post",
		url:url66+"videolist",
		async:true,
		data:{
			 author:author,
			 v_id:v_id,
		},
		dataType:"json",
		success:function(data){
			console.log(data)
			$('.video-card-box').empty();
			var html="";
			 
			$.each(data.success, function(key,list) {
				if(list.is_fee==1){ 
				 html+='<video width="100%" height="126" controls>'+
                  '<source src='+imgurl+list.video+'  type="video/mp4">'+
                '</video>'+
            	'<div class="video-card-foot-01">'+
            		'<span class="col-green" style="color:red;">￥'+list.price+'&nbsp;</span>'+
            		'<span>'+list.title+'</span>'+
            	'</div>'+
            	'<div class="video-card-foot-02">'+
            		'<span>最近在学2245人</span>'+
            		'<span class="border-auto">累计报名3万人</span>'+
            		'<span>好评度99%</span>'+
            	'</div>'
            }else{
            	 html+='<video width="100%" height="126" controls>'+
                  '<source src='+imgurl+list.video+'  type="video/mp4">'+
                '</video>'+
            	'<div class="video-card-foot-01">'+
            		'<span class="col-green">【公开课】</span>'+
            		'<span>'+list.title+'</span>'+
            	'</div>'+
            	'<div class="video-card-foot-02">'+
            		'<span>最近在学2245人</span>'+
            		'<span class="border-auto">累计报名3万人</span>'+
            		'<span>好评度99%</span>'+
            	'</div>'
            }
				
			});
			 $('.video-card-box').html(html);
			
			
		},
		error:function(data){
			
		}
		
	});
	//医生简介
	$.ajax({
		type:"post",
		url:url66+"doctorlist",
		async:true,
		data:"",
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
		type:"post",
		url:url66+"commentlist",
		async:true,
		data:{
			classify:"医生",
			comment:localStorage.getItem("d_id")
			 
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
        			'<span class="list-head-right">'+key+'#</span>'+
        		'</div>'+
        		'<div class="xueyuan-list-content">'+list.content+'</div>'+
           '</li>'
				
				
				
				$('.xueyuan-content-list-box').html(pinlun);
			});
			 
			
			
		},
		error:function(data){
			
		}
		
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	 
})
