$(function(){
	//设价和免费的判断
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
		 //返回时控制遮罩层
		 $('.doctor-money-fanhui-box a').click(function(){
		 	
		 	$('.mask-box').show()
		 })
		 //判断是否保留编辑后的内容
		 $('.yes-draft').click(function(){
		 	//取值
		 	 window.location.href="doctor-myhome.html"
		 	var title=$('.reply-title input').val();
		 var article=$('.textarea-box textarea').val();
		 var price=$('.money-content input').val()
		 var is_fee=$('.money-content input').attr("data-money")
		 //var img=$('.img').html()
		 // var article01=article+img;
		  var data_url= $('.man-img').attr("data-url")
		 
		  //存储值到本地localStorage
		  localStorage.setItem("title",title);
		  localStorage.setItem("article",article);
		  localStorage.setItem("price",price);
		  localStorage.setItem("is_fee",is_fee);
		  localStorage.setItem("data_url",data_url);
		   
		 })
		 $('.no-draft').click(function(){
		 	 
		 		  window.location.href="doctor-myhome.html"
		  //删除本地localStorage
		  localStorage.removeItem("title");
		  localStorage.removeItem("article");
		  localStorage.removeItem("price");
		  localStorage.removeItem("is_fee");
		  localStorage.removeItem("data_url");
		  
		 	 
		  
		 })
		 //保留编辑内容后给文本赋值
		 if(localStorage.getItem("title")){
		 	$('.reply-title input').attr("value",localStorage.getItem("title"))
		 }
		   if(localStorage.getItem("article")){
		 	$('.textarea-box textarea').val(localStorage.getItem("article"))
		 }
		   if(localStorage.getItem("price")){
		 	$('.money-content input').attr("value",localStorage.getItem("price"))
		 }
		   if(localStorage.getItem("data_url")){
		 	$('.man-img').attr("data-url",localStorage.getItem("data_url"))
		 	$('.man-img').attr("url",imgurl+localStorage.getItem("data_url"))
		 }
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
		 var price=$('.money-content input').val()
		 var is_fee=$('.money-content input').attr("data-money")
		 var img=$('.img').html()
		  var article01=article+img;
		 console.log(img)
		 console.log(article01)
		 if(title.length==0){
		 	$('<div>').appendTo('body').addClass('alert alert-success').html('标题不能为空').show().delay(1500).fadeOut();
		 }else if(article.length==0){
		 	$('<div>').appendTo('body').addClass('alert alert-success').html('内容不能为空').show().delay(1500).fadeOut();
		 }else if(is_fee=='1'&&price.length==0){
		 	$('<div>').appendTo('body').addClass('alert alert-success').html('价格不能为空').show().delay(1500).fadeOut();
		 }else{
		$.ajax({
			headers:{
    'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:apiurl+"doctor/article/create",
		async:true,
		data:{
			title:title,
			article:article01,
			is_fee:is_fee,
			price:price
		},
		dataType:"json",
		success:function(data){
			console.log(data);
			if(data.status=='success'){
				$('<div>').appendTo('body').addClass('alert alert-success').html('发表成功').show().delay(1500).fadeOut();
				window.location.href="doctor-myhome.html"
			}
		}
	  });
	
	 }
	
	})
	 
	 
	
})
