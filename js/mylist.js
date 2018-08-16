$(function(){
	 
	 
	
	
	
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
