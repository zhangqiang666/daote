$(function(){
	 
	 //登录后跳转个人信息列表
       var mylist=localStorage.getItem("temp")
       
       if(mylist){ 
       $('.mylist').attr("href","mylist.html")
       }
	
	
	
	
	var namephone=localStorage.getItem("temp")
	console.log(namephone);
	
	 $('.mylist-name').empty();
	 var html='';
	 html+=namephone;
	 $('.mylist-name').html(html);
	 
	
	
	$('#signout').click(function(){
		  localStorage.removeItem('temp');
		  window.location.href="mobile_login.html"; 
	})
	
	
	
	
	
	
	
	
	
	
	
	
})
