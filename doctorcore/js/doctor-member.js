$(function(){
	
	
	
	
	$.ajax({
		headers:{
      'Authorization':localStorage.getItem("token"),
       },
		type:"post",
		url:apiurl+"doctor/index",
		async:true,
		data:{},
		dataType:"json",
		success:function(data){
			console.log(data)
			//给个人信息内容赋值
			$('#phone').attr("value",localStorage.getItem("temp"));
			$('#zhicheng').attr("value",data.data[0].position);
			$('#name').attr("value",data.data[0].name);
			$('#xueli').attr("value",data.data[0].edu);
			
		}
	});
	
	
	
	
	
})
