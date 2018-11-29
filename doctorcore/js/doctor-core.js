$(function(){
	 //手风琴选项卡切换
				 //我的服务
				 $('.myfuwu').click(function(){
				 		$('.jianhao').eq(1).hide()
				 	$('.jiahao').eq(1).show()
				 	$('.my-service-box').eq(1).hide()
				  
				 	$('.jianhao').eq(0).toggle()
				 	$('.jiahao').eq(0).toggle()
				 	$('.my-service-box').eq(0).toggle()
				 	
				 	
				 })
				 //我的订单
				  $('.mydingdan').click(function(){
				 		$('.jianhao').eq(0).hide()
				 	$('.jiahao').eq(0).show()
				 	$('.my-service-box').eq(0).hide()
				 	$('.jianhao').eq(1).toggle()
				 	$('.jiahao').eq(1).toggle()
				 	$('.my-service-box').eq(1).toggle()
				 	
				 	
				 })
				  //随声医疗队
				  $('.suisheng').click(function(){
				  	 
				  	 $('<div>').appendTo('body').addClass('alert alert-success').html('平台默认开通无需修改').show().delay(1500).fadeOut();
				  })
				  //切换身份弹窗
				  $('.putong-user').click(function(){
				  	$('.user-mask').show()
				  })
				  //点击关闭遮罩
				  $('.no-mask').click(function(){
				  	$('.user-mask').hide()
				  })
	 //用户信息
//				 $.ajax({
//				 	headers:{
//    'Authorization':localStorage.getItem("token"),
//     },
//				 	type:"post",
//				 	url:apiurl+"doctor/profile",
//				 	async:true,
//				 	data:{
//				 		id:localStorage.getItem("id")
//				 	},
//				 	dataType:"json",
//				 	success:function(data){
//				 		console.log(data)
//				 		 
//				 		$('.man-img').attr("src",localStorage.getItem("imgurl")+data[0].photo)
//				 		$('.mylist-name').empty();
//	 var html='';
//	 if(data[0].name){
//	 	 html+=data[0].name;
//	 }else{
//	 	html+=localStorage.getItem("temp");
//	 }
//	 $('.mylist-name').html(html);
//				 	}
//				 });
				 //查看开通的服务和用户信息
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
				 		console.log(data);
				 		 localStorage.setItem("doctor_id",data.data[0].d_id)
				 		$('.man-img').attr("src",localStorage.getItem("imgurl")+data.data[0].photo)
				 		$('.mylist-name').empty();
	 var html='';
	 if(data.data[0].name){
	 	 html+=data.data[0].name;
	 }else{
	 	html+=localStorage.getItem("temp");
	 }
	 $('.mylist-name').html(html);
	 //当头像加载失败时记载默认头像
	 $('img').on("error",function(){
	 	$(this).attr("src",'images/bag/morentouxiang.png')
	 })
	              //开通服务查询
	            // console.log(data.data[0].service)	  
	           
//                for(i=0;i<4;i++){
//                	var service_list= $('.service').eq(i).attr("data-service")
//                  console.log(service_list)
//                   }
//	                $('.service-box').empty()
//	                var service="";
                          // $('div[data-service="图文问诊"]')
                       // console.log($('div[data-service="图文问诊"]'))
	                $.each(data.data[0].service, function(key,list) {
	                	// console.log($('div[data-service='+list.k+']'))
	                     $('span[data-service='+list.k+']').text(parseInt(list.v)+'元/次').css("color","#000000")
	                     $('a[data-service='+list.k+']').attr("href",'doctor-modify.html?service='+list.k+'')
	                    
	                
	                });
	                
                //$('.service-box').html(service)      
                //$('.service-box').prepend(service)            
	 //医生科室列表
	$.ajax({
		type:"post",
		url:apiurl+"departmentlist?"+(new Date()).getTime(),
		async:true,
		data:{},
		dataType:"json",
		success:function(res){
			console.log(res)
			console.log(data.data[0].department_id)
			var department_id=data.data[0].department_id;
			
			$.each(res.data, function(key,list) {
				if(list.id==department_id){
					console.log(list.department)
					localStorage.setItem("department",list.department)
				}
				
			});
			
			
			
	 	}
	});
	 
	 
	 
	 
	 
	 
	 
				 	}
				 });
				 
	
	
	
	
})
