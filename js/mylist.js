$(function(){
	//判断是否登录
//	  var cookie=$.cookie("temp")
//	  console.log(cookie)
// 	 // var temp=localStorage.getItem("temp")
//	if(cookie==undefined){
//		var test = window.location.href;
//		localStorage.setItem("windowhref",test);
//		window.location.href="mobile_login.html"
//		 
//	}
	 var url=localStorage.getItem("url")
	 //登录后跳转个人信息列表
       var mylist=localStorage.getItem("temp")
       
       if(mylist){ 
       $('.mylist').attr("href","mylist.html")
       }
	
	
	
	
	var namephone=localStorage.getItem("temp")
	console.log(namephone);
	
	  
	 
	
	
	$('#signout').click(function(){
		  localStorage.removeItem('temp');
		  window.location.href="mobile_login.html"; 
	})
	
	
	
	//移动端底部邮箱
				 $('.email-btn').click(function(){
				 	var email=$('.mylist-email input').val();
				 	console.log(email);
				 	localStorage.setItem("email",email);
				 	$.ajax({
				 		url:url+"sendmail",
				 		type:"post",
				 		data:{
				 			email:email
				 		},
				 		dataType:"json",
				 		success:function(data){
				 			console.log(data)
				 			//var email=$('.mylist-email input').attr("value",'555')
				 			$('<div>').appendTo('body').addClass('alert alert-success').html('发送成功').show().delay(1500).fadeOut();
				 		}
				 	})
				 		})
				 
				 //用户信息
				 $.ajax({
				 	headers:{
      'Authorization':localStorage.getItem("token"),
       },
				 	type:"post",
				 	url:apiurl+"userinfos?"+(new Date()).getTime(),
				 	async:true,
				 	data:{
				 		//id:localStorage.getItem("id")
				 	},
				 	dataType:"json",
				 	success:function(data){
				 		console.log(data)
				 		$('.man-img').attr("src",localStorage.getItem("imgurl")+data.success.photo)
				 		$('.mylist-name').empty();
	 var html='';
	 if(data.success.name){
	 	 html+=data.success.name;
	 }else{ 
	 html+=namephone;
	 }
	 $('.mylist-name').html(html);
	      //当头像加载失败的时候加载默认头像
	      $('img').on('error',function(){
	      	$(this).attr('src','images/bag/morentouxiang.png')
	      })
				 	}
				 });
				 //点击出现遮罩
				 $('.doctor-home-box').click(function(){
				 	$('.user-mask').show()
				 })
				  //点击关闭遮罩
				  $('.no-mask').click(function(){
				  	$('.user-mask').hide()
				  })
				  //退出登录
				  $('.out-login').click(function(){
				  	localStorage.removeItem("temp")
				    window.location.href="mylist.html"
				  })
	  //获取用户当前最近一条审核记录
				 $.ajax({
				 	headers:{
      'Authorization':localStorage.getItem("token"),
       },
				 	type:"post",
				 	url:localStorage.getItem("url")+"doctor/verify/getLastReviewStatus",
				 	async:true,
				 	data:{},
				 	dataType:"json",
				 	success:function(data){
				 		console.log(data)
				 		$('.doctor-home').click(function(){
				 			if(data.status=='success'){ 
				 			if(data.data.status==1){
				 			$('.doctor-home a').attr("href","doctor-core.html")
				 		}else if(data.data.status==2){
				 			$('.doctor-home a').attr("href","doctor-info.html")
				 		}else if(data.data.status==0){
				 			$('.doctor-home a').attr("href","doctor-shenghe.html")
				 		}
				 		}else{
				 			
				 			 //判断是否跳转医生页面
				 $.ajax({
				 	headers:{
      'Authorization':localStorage.getItem("token"),
       },
				 	type:"post",
				 	url:localStorage.getItem("url")+"doctor/index",
				 	async:true,
				 	data:{
				 		
				 	},
				 	dataType:"json",
				 	success:function(data){
				 		console.log(data)
				 		//$('.doctor-home').click(function(){
				 			if(data.status=='success'){
				 			$('.doctor-home a').attr("href","doctor-core.html")
				 			 
				 		}else{
				 			$('.doctor-home a').attr("href","doctor-info.html")
				 		}
				 		//})
				 		 
				 	}
				 });
				 	
				 			
				 			
				 			
				 		}
				 		})
				 	}
				 });

	
	
	
	
	
	
})
