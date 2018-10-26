$(function(){
	var url=localStorage.getItem("url");
	var imgurl=localStorage.getItem("imgurl")
	//复选框默认选择
//	function fun(){
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
//	 
	  
		 
		 
	 //给数据赋值
	var phone66=localStorage.getItem("temp")
	console.log(phone66);
	var email66=localStorage.getItem("email")
	
	$('.phone66').attr("value",phone66);
	$('.email66').attr("value",email66);
	$('#vip-btn').click(function(){
		var phone=$('#phone').val();
		 var email=$('#email').val();
		var username=$('#name').val();
		var sex=$('#sex').val();
		var age=$('#age').val();
		var idcard=$('#idcard').val();
		var condition=$('#condition').val();
		//var address=$('#detailed').val();
		//var postcode=$('#youbian').val();
		localStorage.setItem("dianhua",phone);
		localStorage.setItem("youxiang",email);
		localStorage.setItem("username",username);
		localStorage.setItem("sex",sex)
		//localStorage.setItem("province",province)
			//localStorage.setItem("city",city)
				//localStorage.setItem("district",district)
				//localStorage.setItem("address",address)
				//localStorage.setItem("postcode",postcode)
				
		
		//console.log(city)
		 
		
		
//		if(phone==''){
//			$('.phone-red').css("display","block");
//		 
//		}
//		if(phone!=''){
//			$('.phone-red').css("display","none");
//		}
//		if(username==''){
//			$('.name-red').css("display","block");
//		 
//		}
//		if(username!=''){
//			$('.name-red').css("display","none");
//		 
//		}
//		if(province==''){
//			$('.sf-red').css("display","block");
//	 
//		}
//		if(province!=''){
//			$('.sf-red').css("display","none");
//	 
//		}
//		if(city==''){
//			$('.cs-red').css("display","block");
//		 
//		}
//		if(city!=''){
//			$('.cs-red').css("display","none");
//		 
//		}
//		if(address==''){
//			$('.address-red').css("display","block");
//		 
//		}
//		if(address!=''){
//			$('.address-red').css("display","none");
//		 
//		}
		//if(phone!=''&&username!=''&&province!=''&&city!=''&&address!=''){
		$.ajax({
			headers:{
      'Authorization':localStorage.getItem("token"),
       },
			url:url+"getuserinfo",
			type:"post",
			data:{
				phone:phone,
				name:username,
				sex:sex,
				age:age,
				idcard:idcard,
				condition:condition,
				
			},
			dataType:"json",
			success:function(data){
				
				console.log(data)
				if(data.success){
					$('<div>').appendTo('body').addClass('alert alert-success').html('信息提交成功').show().delay(1500).fadeOut();
					window.location.href="mylist.html"
				}
				 
				 
				
				
				
				
				
				
			}
		})
		
		//}//判断全填正确
		
	 
		
		
		
		
	})
	 //用户信息
				 $.ajax({
				  headers:{
      'Authorization':localStorage.getItem("token"),
     },
				 	
				 	url:localStorage.getItem("url")+"userinfos",
				 	type:"post",
				 	async:true,
//				 	data:{
//				 		id:localStorage.getItem("id")
//				 	},
				 	dataType:"json",
				 	success:function(data){
			 		console.log(data)
				 		  $('#phone').attr("value",data.success.phone);
		        $('#email').attr("value",data.success.email);
		        $('#name').attr("value",data.success.name);
	            $('#sex').attr("value",data.success.sex);
	            $('#age').attr("value",data.success.age);
//	            $('.city').empty();
//	            var html="";
//	            html+='<option>'+data.success.city+'</option>'
//	            $('.city').html(html)
		        //$('.city').attr("value",data.success.city);
//		        $('#region').empty();
//	            var areas="";
//	            areas+='<option>'+data.success.areas+'</option>'
//	            $('#region').html(areas)
	            //$('#region').attr("district",data.success.areas);
		        $('#idcard').attr("value",data.success.idcard);
		        $('#condition').val(data.success.condition);
				 		 
				 	}
				 });
	 
     
	           
	
	
	
	
	
})
  