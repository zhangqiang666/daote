$(function(){
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
				 	type:"post",
				 	url:localStorage.getItem("url")+"userinfos",
				 	async:true,
				 	data:{
				 		id:localStorage.getItem("id")
				 	},
				 	dataType:"json",
				 	success:function(data){
				 		console.log(data)
				 		$('.mylist-name').empty();
	 var html='';
	 if(data.success.name){
	 	 html+=data.success.name;
	 }else{ 
	 html+=namephone;
	 }
	 $('.mylist-name').html(html);
				 	}
				 });
	 
	 
	
	
	
	
	
	
})
