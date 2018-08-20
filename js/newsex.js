$(function(){
	 
	
	
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
		url:"http://www.dianyitai.cn/home/index/getusersinfo",
		type:"post",
		data:{
			name:name,
			phone:phone,
			pro_type:opt
		},
		dataType:"json",
		success:function(data){
			 
		console.log(data)
		if(data.stu==1){ 
		 window.location.href="http://p.qiao.baidu.com/cps/chat?siteId=12421912&userId=26143907";
		 
		}
		if(name==''){
			var html='';
			html+='<p style="width:100%;height:20px;line-height:10px;color:red;font-size:8px;">姓名不能为空</p>'
			$('.name').html(html);
			console.log('姓名不能为空')
		}else if(phone==''){
			var html='';
			html+='<p style="width:100%;height:20px;line-height:10px;color:red;font-size:8px;">电话不能为空</p>'
			$('.phone').html(html);
			console.log('电话不能为空')
		}
		if(name!=''){
			$('.name').empty();
		}else if(phone!=''){
			$('.phone').empty();
		}
		
		
		
			
		}
	})
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	})//dianji 
	
	
	
})



 