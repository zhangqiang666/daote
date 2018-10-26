//$(function(){
	 
	 	
	 
	var imgurl='http://www.dianyitai.cn'
	//$('.dyt-money').click(function(){
		function fun(e){ 
	      console.log(e)
	//生成订单
	$.ajax({
		 headers:{
      'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:localStorage.getItem("url")+"getorder",
		async:true,
		data:{
			type:'3',
			product_id:e,
			
		},
		dataType:"json",
		success:function(data){
			console.log(data)
			
			//支付 

   $.ajax({
		 headers:{
      'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:localStorage.getItem("url")+"towxpay",
		async:true,
		data:{
			order_id:data.success,
			
		},
		dataType:"json",
		success:function(data){
			console.log(data)
			console.log(data.success)
//			$('body').empty();
//			var html="";
//			html+=data.success
//			//window.location.href=data.success;
//			$('body').html(html)
           window.location.href=data.success
			 
		},
		error:function(data){
			console.log(data);
		}
	});
   
			
			
			
			
			
			
			
			 
		}
	});
	
   
   
  }//函数
   
 //  })//点击
   


	
	 
//})
