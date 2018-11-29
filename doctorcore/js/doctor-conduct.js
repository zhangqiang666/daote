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
			//服务订单
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
           
           $('.fuwu').html(textimg)
			//t头部数量
			var _length02=data.data.length;
			console.log(_length02)
			$('.number').empty()
			var number="";
			  number+=_length02
			  $('.number').html(_length02);
           
			});
			 
		}
	});
})
