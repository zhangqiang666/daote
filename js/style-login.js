$(function(){
	//判断是否登录
//	  var cookie=$.cookie("temp")
//	  console.log(cookie)

//
   	  var temp=localStorage.getItem("temp")
	if(temp==undefined){
		var test = window.location.href;
		localStorage.setItem("windowhref",test);
		//window.location.href="mobile_login.html"
		 
	}
	
	
	
})
