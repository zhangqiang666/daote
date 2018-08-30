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
	
	
	
	
	
	
	
	
	
})
