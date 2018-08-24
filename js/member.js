$(function(){
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
		$.ajax({
			url:"http://www.dianyitai.cn/home/index/usersinfo",
			type:"post",
			data:{
				phone:phone,
				username:username,
				sex:sex,
				province:province,
				city:city,
				district:district,
				address:address,
				postcode:postcode,
				email:email
				
			},
			dataType:"json",
			success:function(data){
				console.log(data)
				if(data.stu=='1'){
					window.location.href="mylist.html"
				}
				
			}
		})
		
		
		
		
		
	})
	
	
	
	
	
	
	
	
	
})
