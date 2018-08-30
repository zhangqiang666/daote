$(function(){
	  var url=localStorage.getItem("url")
//发送短信
	   $('#iphone-btn').click(function(){
	   	var iphone=$('#iphone').val();
	   	console.log(iphone);
	   	//var iphone_code=$('#iphone-code').val();
	   	//console.log(iphone_code);
	
	$.ajax({
        url:url+"getsendsms",
        type:"post",
        /*xhrFieds:{
        	widthCredentials:true
        },*/
        data:{
        	phone:iphone
        },
        /*预期服务器端返回的数据类型，假设现在跨域了，就改成jsonp 就可以了 */
        dataType:"json",
        success:function(data){
        	console.log(data);
         
        	//document.getElementById("iphone-code").value="重新发送";
        	 //$("#iphone_code").attr("value",data.stu);
        	 //console.log( $("#iphone-code").attr("value",data.stu))
        	 
        }
	   });
	
	
	
	 })//发送短信
	  function fun(){
    obj = document.getElementsByName("test");
    check_val = [];
    for(k in obj){
        if(obj[k].checked)
            check_val.push(obj[k].value);
    }
    obj[0].checked=true;
    console.log(obj[0].checked);
}
	 fun();
	//复选框默认选择
	 //登录
	 $('.mobile-login-btn').click(function(){
	 	var iphone=$('#iphone').val();
	 	var code=$('#iphone-code').val();
	 	console.log(iphone)
	 	console.log(code)
	 	  localStorage.setItem("temp",iphone); //存入 参数： 1.调用的值 2.所要存入的数据 
	 	  console.log(localStorage.getItem("temp"));//输出
	 	  $.ajax({
	 	  	url:url+"login",
	 	  	type:"post",
	 	  	data:{
	 	  		phone:iphone,
	 	  		regcode:code
	 	  	},
	 	  	 // headers : {'Authorization':'Basic bmVvd2F5Oe4lb3dheQ=='},

//    beforeSend: function(xhr) {
//
//        xhr.setRequestHeader("Authorization", "Basic bmVvd2F5Oe4lb3dheQ==");
//
//    },
	 	  	dataType:"json",
	 	  	success:function(data){
	 	  		console.log(data)
	 	  		localStorage.setItem("token",data.success.token)
	 	  		 
	 	  		if(data.success){
	 	  			$('<div>').appendTo('body').addClass('alert alert-success').html('登录成功').show().delay(1500).fadeOut();
	 	  				window.location.href="index.html"
	 	  		}
//	 	  	 
	 	  	/*	 if(iphone==''){
	 	  	var html='';
	 	  	html+='<div style="width:95%;height:50px;color:red;font-size:10px;margin:0 auto;">手机号不能为空</div>'
	 	  	 $('.yzm').html(html);
	 	  }else if(code==''){
	 	  		var html='';
	 	  	html+='<div style="width:95%;height:50px;color:red;font-size:10px;margin:0 auto;">验证码不能为空</div>'
	 	  	 $('.yzm').html(html);
	 	  }else{
	 	  	window.location.href="index.html"; 
	 	  }*/
	 	  		
	 	  		
	 	  		
	 	  		
	 	  		
	 	  		
	 	  		
	 	  		
	 	  		
	 	  		
	 	  		
	 	  		
	 	  		
	 	  		
	 	  		
	 	  		
	 	  		
	 	  		
	 	  },
	 	  error: function (data) {
　　 
        console.log(data.responseJSON)
        console.log(data.responseJSON.error)
         if(data.responseJSON.status_code==500){
         	$('.code-red').css("display","block")
         	$('.code-red').empty();
        	var code=""
        	code+='验证码不正确';
        	$('.code-red').html(code);
         }
        if(data.responseJSON.error.phone){
        	$('.phone-red').css("display","block")
        	$('.phone-red').empty();
        	var phone=""
        	phone+=data.responseJSON.error.phone[0];
        	$('.phone-red').html(phone);
        }
        if(!data.responseJSON.error.phone){
        		$('.phone-red').css("display","none")
        }
        if(data.responseJSON.error.regcode){
        	$('.code-red').css("display","block")
        	$('.code-red').empty();
        	var code=""
        	code+=data.responseJSON.error.regcode[0];
        	$('.code-red').html(code);
        }
         if(!data.responseJSON.error.regcode){
        		$('.code-red').css("display","none")
        }
         
        
        
 　　  }     
	 	  
	 	  });
	 	  
	 	 
	 
	 })//登录
	
	 
	
	
	 
	
	
	
	
	
	
	
})
