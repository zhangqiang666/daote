$(function(){
	var url=localStorage.getItem("url");
	var imgurl=localStorage.getItem("imgurl")
	//复选框默认选择
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
	 
	 	  //地区联动选择框
//		$.ajax({
//			type:"post",
//			url:url+"getcity",
//			async:true,
//			data:{
//				
//			},
//			dataType:"json",
//			success:function(data){
//				console.log(data);
//				$('.province').empty();
//				var option="";
//				$.each(data.success.msg, function(key,list) {
//					//console.log(list.id)
//					option+='<option value='+list.id+'>'+list.name+'</option>'
//				});
//				$('.province').html(option)
//			 
//			}
//			
//		});
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
		var province=$('#province').val();
		var city=$('.city').val();
		var district=$('#region').val();
		var address=$('#detailed').val();
		var postcode=$('#youbian').val();
		localStorage.setItem("dianhua",phone);
		localStorage.setItem("youxiang",email);
		localStorage.setItem("username",username);
		localStorage.setItem("sex",sex)
		localStorage.setItem("province",province)
			localStorage.setItem("city",city)
				localStorage.setItem("district",district)
				localStorage.setItem("address",address)
				localStorage.setItem("postcode",postcode)
				
		
		console.log(city)
		 
		
		
		if(phone==''){
			$('.phone-red').css("display","block");
		 
		}
		if(phone!=''){
			$('.phone-red').css("display","none");
		}
		if(username==''){
			$('.name-red').css("display","block");
		 
		}
		if(username!=''){
			$('.name-red').css("display","none");
		 
		}
		if(province==''){
			$('.sf-red').css("display","block");
	 
		}
		if(province!=''){
			$('.sf-red').css("display","none");
	 
		}
		if(city==''){
			$('.cs-red').css("display","block");
		 
		}
		if(city!=''){
			$('.cs-red').css("display","none");
		 
		}
		if(address==''){
			$('.address-red').css("display","block");
		 
		}
		if(address!=''){
			$('.address-red').css("display","none");
		 
		}
		if(phone!=''&&username!=''&&province!=''&&city!=''&&address!=''){
		$.ajax({
			url:url+"getuserinfo",
			type:"post",
			data:{
				phone:phone,
				name:username,
				sex:sex,
				province:province,
				city:city,
				areas:district,
				address:address,
				postcode:postcode,
				email:email
				
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
		
		}//判断全填正确
		
	 
		
		
		
		
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
				 		  $('#phone').attr("value",data.success.phone);
		        $('#email').attr("value",data.success.email);
		        $('#name').attr("value",data.success.name);
	            $('#sex').attr("value",localStorage.getItem("sex"));
	            $('#province').attr("value",data.success.province);
		        $('.city').attr("value",data.success.city);
	            $('#region').attr("district",data.success.areas);
		        $('#detailed').attr("value",data.success.province+data.success.city+data.success.areas+data.success.address);
		        $('#youbian').attr("value",data.success.postcode);
				 		 
				 	}
				 });
	
	
	           
	
	
	
	
	
})
