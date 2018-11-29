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
			$('.fuwu').empty()
			var textimg="";
			$.each(data.data, function(key,list) {
				textimg+='<li>'+
           	'<div class="service-number"><span>订单编号：</span><span>'+list.order_id+'</span></div>'+
           	'<div class="service-time"><span>下单时间：</span><span>2018-10-08 11:00:55</span></div>'+
           	 '<div class="service-title">'+list.name+'</div>'+
           	 '<div class="service-money">'+
           	 	'<span>￥'+parseInt(list.order.price)+'/次</span>'+
           	 	  '<button>问诊时间待定</button>'+
           	 '</div>'+
           '</li>'
			});
			$('.fuwu').html(textimg)
		}
	});
})
