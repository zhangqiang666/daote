 $(function(){
 	var url=localStorage.getItem("url");
 	var imgurl=localStorage.getItem("imgurl");
 	//评论列表
	$.ajax({
			headers:{
    'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:url+"commentlist",
		async:true,
		data:{
			//classify:"医生",
			//comment:localStorage.getItem("d_id"),
			user:'123'
			 
		},
		dataType:"json",
		success:function(data){
			console.log(data)
			$('.my-comment-list-box').empty();
			var pinlun="";
			$.each(data.success, function(key,list) {
				if(list.classify=='医生'){ 
				pinlun+='<li><a href="even-doctor.html?id='+list.product.id+'&&d_id='+list.product.d_id+'">'+
                 		'<img src='+imgurl+list.photo+' class="comment-img">'+
                 		'<div class="comment-right-box">'+
                 			'<div class="comment-name">'+
                 				'<div>'+list.name+'</div>'+
                 				'<div>'+list.updated_at+'</div>'+
                 			'</div>'+
                 			'<div class="comment-content">'+list.content+'</div>'+
                 			'<div class="comment-foot">'+
                 				'<img src='+imgurl+list.product.photo+'>'+
                 				'<div class="comment-foot-right">'+
                 					'<div>'+list.product.from+'</div>'+
                 					'<div>授课：'+list.product.name+'&nbsp;'+list.product.position+'</div>'+
                 				'</div>'+
                 			'</div>'+
                 			
                 		'</div>'+
                 		
                 	'</a></li>'
				}
				if(list.classify=='视频'){ 
				pinlun+='<li><a href="video_detail.html?v_id='+list.product.v_id+'&author='+list.product.author+'">'+
                 		'<img src='+imgurl+list.photo+' class="comment-img">'+
                 		'<div class="comment-right-box">'+
                 			'<div class="comment-name">'+
                 				'<div>'+list.name+'</div>'+
                 				'<div>'+list.updated_at+'</div>'+
                 			'</div>'+
                 			'<div class="comment-content">'+list.content+'</div>'+
                 			'<div class="comment-foot">'+
                 				'<img src='+imgurl+list.product.img+'>'+
                 				'<div class="comment-foot-right">'+
                 					'<div>'+list.product.title+'</div>'+
                 					'<div>'+list.product.updated_at+'</div>'+
                 				'</div>'+
                 			'</div>'+
                 			
                 		'</div>'+
                 		
                 	'</a></li>'
				}
				if(list.classify=='文章'){ 
				pinlun+='<li><a href="article_detail.html?a_id='+list.product.a_id+'&author='+list.product.author+'">'+
                 		'<img src='+imgurl+list.photo+' class="comment-img">'+
                 		'<div class="comment-right-box">'+
                 			'<div class="comment-name">'+
                 				'<div>'+list.name+'</div>'+
                 				'<div>'+list.updated_at+'</div>'+
                 			'</div>'+
                 			'<div class="comment-content">'+list.content+'</div>'+
                 			'<div class="comment-foot">'+
                 				'<img src='+imgurl+list.product.img+'>'+
                 				'<div class="comment-foot-right">'+
                 					'<div>'+list.product.title+'</div>'+
                 					'<div>授课：'+list.product.name+list.product.position+'</div>'+
                 				'</div>'+
                 			'</div>'+
                 			
                 		'</div>'+
                 		
                 	'</a></li>'
				}
				
				
				$('.my-comment-list-box').html(pinlun);
			});
			 
			
			
		},
		error:function(data){
			
		}
		
	});
 	
 	
 	
 	
 	
 })
