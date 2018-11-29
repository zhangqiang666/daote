$(function(){
	
	//图文问诊订单
	$.ajax({
		headers:{
    'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:apiurl+"doctor/graphic/list",
		async:true,
		data:{},
		dataType:"json",
		success:function(data){
			console.log(data);
			$('.tuwen-list-box').empty()
			var textimg="";
			$.each(data.data, function(key,list) {
				textimg+='<li>'+
    			'<div class="tuwen-list-left">'+
    				'<img src="images/bag/ssys.png">'+
    			'</div>'+
    			'<div class="tuwen-list-right">'+
    				'<p class="patient-name"><span>患者:'+list.name+'</span></p>'+
    				'<p class="patient-main"><span>'+list.content+'</span></p>'+
    			'</div>'+
    			'<div class="reply-btn">'+
    				'<a href="doctor-reply.html?order='+list.order_id+'">'+
    				'<button>回复Ta</button>'+
    				'</a>'+
    			'</div>'+
    		'</li>'
			});
			$('.tuwen-list-box').html(textimg)
		}
	});
})
