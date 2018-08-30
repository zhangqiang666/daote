$(function(){
	 
	var url=localStorage.getItem("url")
	
	$('#member-btn').click(function(){
		var name=$('#name').val();
		var phone=$('#phone').val();
		//$("#myselect").change(function(){
         var opt=$("#myselect").val();
      
         // });
		console.log(name)
		console.log(phone)
		console.log(opt)
		//$('.aa').attr("href","http://p.qiao.baidu.com/cps/chat?siteId=12421912&userId=26143907");
		$.ajax({
		url:url+"getpbinfo",
		type:"post",
		data:{
			name:name,
			phone:phone,
			pro_type:opt
		},
		dataType:"json",
		success:function(data){
			 
		console.log(data)
		if(data.success){ 
			$('<div>').appendTo('body').addClass('alert alert-success').html('信息提交成功').show().delay(1500).fadeOut();
		 window.location.href="http://p.qiao.baidu.com/cps/chat?siteId=12421912&userId=26143907";
		 
		}
		 
		
		
		
			
		},
		error:function(data){
			console.log(data);
			console.log(data.responseJSON.error.phone[0]);
			if(data.status==401){
				$('.phone').empty();
			var html='';
			html+='<p style="width:100%;height:20px;line-height:10px;color:red;font-size:8px;">'+data.responseJSON.error.phone[0]+'</p>'
			$('.phone').html(html);
			//console.log('电话不能为空')
		}
			if(data.status==401){
				$('.name').empty();
			var html='';
			html+='<p style="width:100%;height:20px;line-height:10px;color:red;font-size:8px;">'+data.responseJSON.error.name[0]+'</p>'
			$('.name').html(html);
			//console.log('姓名不能为空')
			
		  }
			 
		if(name!=''){
			$('.name').empty();
		}
		if(phone!=''){
			$('.phone').empty();
		}
		}
		
	})
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	})//dianji 
	
	
	
})



 