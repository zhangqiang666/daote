$(function(){
	 //判断是否登录
	  var cookie=$.cookie("temp")
	  console.log(cookie)
 	 // var temp=localStorage.getItem("temp")
	if(cookie==undefined){
		var test = window.location.href;
		localStorage.setItem("windowhref",test);
		window.location.href="mobile_login.html"
		 
	}
	//登录后跳转个人信息列表
//     var mylist=localStorage.getItem("temp")
//     
//     if(mylist){ 
//     $('.mylist').attr("href","mylist.html")
//     }
       //内容渲染
       var imgurl='http://www.dianyitai.cn';
       $.ajax({
       	type:"post",
       	url:"http://www.dianyitai.cn/home/Videoexpert/videoexpert",
       	async:true,
       	data:"",
       	dataType:"json",
       	success:function(data){
       		console.log(data);
       	}
       });
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
})
