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
		/*if(name==''){
			console.log('姓名不能为空')
		}else if(phone==''){
			console.log('电话不能为空')
		}*/
		
		
		
		
			
		}
	})
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	})//dianji 
	
	
	
})
