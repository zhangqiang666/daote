$(function(){
	
	   $('.fee-btn').click(function(){
	   	
		$('.money-content input').attr("data-money",'0')
		$('.fee-btn01').show();
		$(this).hide();
		$('.money-content').hide()
	  })  
	    
	 $('.fee-btn01').click(function(){
	   	
		//$('.money-content input').attr("data-money",'0')
		$('.fee-btn').show();
		$(this).hide();
		$('.money-content').show()
	  }) 
		 
		 //限制价格的输入长度提示
		   $('.money-content input').bind('input propertychange',function(){
		   	var _length=$(this).val()
		   	//console.log(_length)
		  	if(_length>=10001){
		   		$('.red-tips').show() 
		   	}
		   	if(_length<10001){
		   		$('.red-tips').hide()
		   	}
		   }) 
	$('.reply-btn button').click(function(){
		 var title=$('.reply-title input').val();
		 var article=$('.textarea-box textarea').val();
		 var video=localStorage.getItem("videourl")+localStorage.getItem("reskey");
		 console.log(video)
		 var price=$('.money-content input').val()
		 var is_fee=$('.money-content input').attr("data-money")
		 var dataimg=$('.man-img').attr("data-url")
		//var img=$('.img').html()
		// var article01=article+img;
		// console.log(img)
		//console.log(article01)
		 if(title.length==0){
		 	$('<div>').appendTo('body').addClass('alert alert-success').html('标题不能为空').show().delay(1500).fadeOut();
		 }else if(is_fee==1&&price.length==0){
		 	$('<div>').appendTo('body').addClass('alert alert-success').html('价格不能为空').show().delay(1500).fadeOut();
		 }else if(dataimg==undefined){
		 	$('<div>').appendTo('body').addClass('alert alert-success').html('封面图片不能为空').show().delay(1500).fadeOut();
		 }else{
		$.ajax({
			headers:{
    'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:apiurl+"doctor/video/create",
		async:true,
		data:{
			title:title,
			video:video,
			is_fee:is_fee,
			price:price,
			img:dataimg
		},
		dataType:"json",
		success:function(data){
			console.log(data);
			if(data.status=='success'){
				$('<div>').appendTo('body').addClass('alert alert-success').html('发表成功').show().delay(1500).fadeOut();
				window.location.href="javascript:window,history.back();"
			}
		}
	  });
	
	 }
	
	})
	 
	 
	
})
