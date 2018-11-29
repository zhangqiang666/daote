  $(function(){
  	//模态框
  	  var w = document.documentElement.clientWidth || document.body.clientWidth;
  	console.log(w)
  	var modal=localStorage.getItem("modal")
  	console.log(modal);
//	if(w>=640&&modal==null){ 
//       $("#myModal").modal({
//          keyboard: true
//      });
//    }
   
        //模态框
        //shujujiaohu
       
         
             //发送短信       
//        var phone=$('#name').val();
//        console.log(phone);
//       $('#phone').click(function(){
//       	 var phone=$('#name').val();
//        console.log(phone);
//        
//       $.ajax({
//      url:"http://www.dianyitai.cn/home/index/sendSms",
//      type:"post",
//      /*xhrFieds:{
//      	widthCredentials:true
//      },*/
//      data:{
//      	phone:phone
//      },
//      /*预期服务器端返回的数据类型，假设现在跨域了，就改成jsonp 就可以了 */
//      dataType:"json",
//      success:function(data){
//          console.log(data);
//          
//          
//                  /*$('.content1').empty();   //清空resText里面的所有内容
//                  var html = '';
//                  $.each(data.data, function(key, list){
//                       
//                      
//                      html +='';
//                    
//
//                  });
//                  $('.content1').html(html);*/             
//
//      }
//  })
//       
//       
//       });
         //短信登录
//       $('.modal-btn').click(function(){
//       	var phone=$('#name').val();
//       	var code=$('#code').val();
//       	console.log(phone);
//       	console.log(code);
//        
//       $.ajax({
//       	url:"http://www.dianyitai.cn/home/index/login",
//       	type:"post",
//       	data:{
//       		phone:phone,
//       		code:code
//       	},
//       	dataType:"json",
//       	success:function(data){
//       		console.log(data);
//       		localStorage.setItem("modal",data.stu); //存入 参数： 1.调用的值 2.所要存入的数据 
//       		localStorage.setItem("phone",phone);
//	 	        console.log(localStorage.getItem("modal"));//输出
//	 	        if(data.stu==1){ 
//	 	        	alert( "注册成功")
//	 	        	window.location.href="index.html"
//	 	        
//	 	             }
//       	}
//       })
//       })
         //登录
//        function fun(){
//  obj = document.getElementsByName("test");
//  check_val = [];
//  for(k in obj){
//      if(obj[k].checked)
//          check_val.push(obj[k].value);
//  }
//  obj[0].checked=true;
//  console.log(obj[0].checked);
//}
//	 fun();
	//复选框默认选择
       //登录后跳转个人信息列表
       var mylist=localStorage.getItem("temp")
       
       if(mylist){ 
       $('.mylist').attr("href","mylist.html")
       }
        //首页列表
//      $.ajax({
//      	type:"get",
//      	url:"http://172.16.30.231/ucenter/public/api/homelist",
//      	async:true,
//      	data:"",
//      	dataType:"json",
//      	success:function(data){
//      		console.log(data)
//      		
//      	}
//      });
       function getCookie(c_name){
//判断document.cookie对象里面是否存有cookie
if (document.cookie.length>0){
  c_start=document.cookie.indexOf(c_name + "=")
  console.log(c_start)
	//如果document.cookie对象里面有cookie则查找是否有指定的cookie，如果有则返回指定的cookie值，如果没有则返回空字符串
  if (c_start!=-1){ 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    } 
  }
return ""
}
getCookie("temp")
 
        //首页列表在用户未登录时候的跳转
      //  if(!localStorage.getItem("temp")){
//      	  if(!getCookie("temp")){
//      	$('.homeHealth-page').attr("href","mobile_login.html?page=homeHealth")
//      		$('.doctorhome-page').attr("href","mobile_login.html?page=doctorhome")
//      			$('.mobile_yun-page').attr("href","mobile_login.html?page=mobile_yun")
//      				$('.videoexpert-page').attr("href","mobile_login.html?page=videoexpert")
//      					$('.shanghaiMedical-page').attr("href","mobile_login.html?page=shanghaiMedical")
//      						$('.expertAssignment-page').attr("href","mobile_login.html?page=expertAssignment")
//      }

//      //获取微信openid
//      if (navigator !== void 0 && navigator.userAgent.match(/MicroMessenger/)) {
//        $.ajax({
//        	type:"get",
//        	url:"http://www.dianyitai.cn/api/hasopenid",
//        	async:true,
//        	data:{},
//        	dataType:"json",
//          success:function(data){ 
//          	console.log(data)
//          	if(data.hasOpenId==false){
//          		window.location.href="http://www.dianyitai.cn/api/getopenid";
//          	}else{
//          		
//          	}
//          }
//        });
//      }
        
         
        
        
        
    });
    
 