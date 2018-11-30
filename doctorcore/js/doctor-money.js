$(function(){
	$('.zfb-btn').click(function(){
			$('<div>').appendTo('body').addClass('alert alert-success').html('该功能正在开发...').show().delay(1500).fadeOut();
	})
	//医生账户余额
 
	$.ajax({
		 headers:{
      'Authorization':localStorage.getItem("token"),
     },
		type:"get",
		url:apiurl+"doctor/transaction/balance",
		async:true,
		data:{},
		dataType:"json",
		success:function(data){
			console.log(data)
			$('.money-detail').empty()
			$('.money-detail').html(data.data)
		}
	});
	
	
})
