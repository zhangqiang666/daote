$(function(){
	 var url=localStorage.getItem("url");
	 var imgurl=localStorage.getItem("imgurl");
	 
	 //视频课程列表
	$.ajax({
			headers:{
    'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:url+"myorder",
		async:true,
		data:{
//			author:'',
//			type:'0'
		},
		dataType:"json",
		success:function(data){
			console.log(data);
		     console.log(data.success.length)
	     if(data.success.length==0){
	     	$('.zanwu-box').empty();
	     	 var zanwu="";
	     	 zanwu+='<img src="images/bag/zanwushuju.png" class="zanwu-img">'+
            	'<div class="zanwu-content">暂无数据</div>';
	     	 $('.zanwu-box').html(zanwu)
	     }else{ 
      	//我的订单视频课程
      	$('.my-order-list-box').empty();
      	var dingdan="";
      	  $.each(data.success, function(key,list) {
      	  	console.log(list.details.product_type)
      	  if(list.details.product_type=="视频"){ 
      	  	dingdan+='<li>'+
      	  	  '<a href="video_detail.html?author='+list.details.product.author+'&v_id='+list.details.product.v_id+'">'+ 
                 		'<div class="order-video-img"><img src="images/66666_12.jpg" style="width:100%;height:100%;"></div>'+
                 		'<div class="order-video-right">'+
                 			'<div class="right-title">'+list.details.product.title+'</div>'+
                 			'<div class="right-man">授课：王强</div>'+
                 			'<div class="right-money">￥'+list.price+'</div>'+
                 		'</div>'+
                 		'</a>'+
                 '</li>'
                }
      	  //else{
//              	dingdan+='<li>'+
//    	  	  '<a href="video_detail.html?author='+list.author+'&v_id='+list.v_id+'">'+ 
//               		'<div class="order-video-img"><img src='+imgurl+list.img+' style="width:100%;height:100%;"></div>'+
//               		'<div class="order-video-right">'+
//               			'<div class="right-title">'+list.title+'</div>'+
//               			'<div class="right-man">授课：'+localStorage.getItem("name")+'</div>'+
//               			'<div class="right-money" style="color:#70D445;">公开课</div>'+
//               		'</div>'+
//               		'</a>'+
//               '</li>'
//              }
      	  });
      	   $('.my-order-list-box').html(dingdan)
      	  //我的订单头部显示数量
      	 var _length=$('.my-order-list-box li').length;
      	 console.log(_length)
      	  $('.number').empty();
      	  var number="";
      	  number+=data.success.length;
      	  $('.number').html(_length)
      	  //无数据时候的判断
//    	  if(_length==0){
//    	  	dingdan+='<div class="zanwu-box">'+ 
//          	'<img src="images/bag/zanwushuju.png" class="zanwu-img">'+
//          	'<div class="zanwu-content">暂无数据</div>'+
//          	'</div>'
//    	  }
//    	 
//    	 $('.my-order-list-box').html(dingdan)
      	//文章列表
			$('.doctor-article-list-box').empty();
			var wenzhang="";
			$.each(data.success, function(key,list) {
				if(list.details.product_type=='文章'){ 
					wenzhang+='<li>'+
      		'<a href="article_detail.html?author='+list.details.product.author+'&a_id='+list.details.product.a_id+'"> '+
      		'<div class="article-list-title">'+list.details.product.title+'</div>'+
      		'<div class="article-foot">'+
      			//'<span class="article-foot-i">&nbsp;</span>'+
      			'<span class="col-blue">王强</span>'+
      			'<span class="col-gray">'+list.created_at.split(" ")[0]+'</span>'+
      		    '<span class="col-right-argument"><i class="iconfont icon-xiaoxi-copy-copy"></i>&nbsp;'+list.details.num+'</span>'+
      		    '<span class="col-right-can"><i class="iconfont icon-chakan1"></i>&nbsp;300</span>'+
      		'</div>'+
      		'</a>'+
      	'</li>'
 
      }
       
      	 $('.doctor-article-list-box').html(wenzhang);
      	  //我的订单头部显示数量
      	  var _length01=$('.wenzhang li').length;
      	 //console.log(_length01)
      	  $('.number01').empty(); 
      	  var number="";
      	  number+=data.success.length;
      	  $('.number01').html(_length01)
      	  //无数据时候的判断
//    	  if(_length01==0){
//    	  	wenzhang+='<div class="zanwu-box">'+ 
//          	'<img src="images/bag/zanwushuju.png" class="zanwu-img">'+
//          	'<div class="zanwu-content">暂无数据</div>'+
//          	'</div>'
//    	  }
//    		  $('.doctor-article-list-box').html(wenzhang);
      		//服务列表
			$('.fuwu').empty();
			var fuwu="";
			$.each(data.success, function(key,list) {
				var zixun_name = {'一周咨询': '10', '一月咨询': '11','三月咨询':'12'};
				if(list.details.product_type=='服务'){ 
					var product_name = {'s1': '线上医务室', 's2': '跨时空医疗'};
					var s1='s1'
//					fuwu+='<li>'+
//    		'<div class="article-list-title">'+product_name[list.details.product_id]+'</div>'+
//    		'<div class="article-foot">'+
//    			'<span class="col-blue">王强</span>'+
//    			'<span class="col-gray">'+list.created_at.split(" ")[0]+'</span>'+
//    		'</div>'+
//    	'</li>'
      	fuwu+='<li>'+
           	'<div class="service-number"><span>订单编号：</span><span>'+list.details.product_id+'</span></div>'+
           	 '<div class="service-time"><span>下单时间：</span><span>'+list.created_at+'</span></div>'+
           	 '<div class="service-title">'+product_name[list.details.product_id]+'</div>'+
           	 '<div class="service-money">'+
           	 	'<span>￥'+list.price+'/次</span>'+
           	 '</div>'+
           '</li>'
 
      }else if(list.details.product_type!='服务'&&list.details.product_type!='视频'&&list.details.product_type!='文章'){
      	fuwu+='<li>'+
           	'<div class="service-number"><span>订单编号：</span><span>'+list.details.product_id+'</span></div>'+
           	 '<div class="service-time"><span>下单时间：</span><span>'+list.created_at+'</span></div>'+
           	 '<div class="service-title">'+list.details.product_type+'</div>'+
           	 '<div class="service-money">'+
           	 	'<span>￥'+list.price+'/次</span>'+
           	 	'<button class="purchase" data-type='+zixun_name[list.details.product_type]+' data-id='+list.details.product_id+' onclick="fun(this)">再次购买</button>'+
           	 	'<button class="evaluate"><a href="input.html?classify='+list.details.product_type+'&comment='+list.details.product_id+'&&id=1&&d_id='+list.details.product_id+'&&orderDetailId='+list.details.id+'">去评价</a></button>'+
           	 	'<button class="reply"><a href="even-reply.html?order='+list.details.order_id+'">查看回复</a></button>'+
           	 '</div>'+
           '</li>'
      	
      	
      	
      }
       
      	
      	
      	$('.fuwu').html(fuwu);
      
      	//我的订单头部显示数量
      	  var _length02=$('.fuwu li').length;
      	 //console.log(_length01)
      	  $('.number02').empty();
      	  var number="";
      	  number+=data.success.length;
      	  $('.number02').html(_length02)
      	   //无数据时候的判断
//    	  if(_length02==0){
//    	  	fuwu+='<div class="zanwu-box">'+ 
//          	'<img src="images/bag/zanwushuju.png" class="zanwu-img">'+
//          	'<div class="zanwu-content">暂无数据</div>'+
//          	'</div>'
//    	  }
//    	  	 	$('.fuwu').html(fuwu);
      	  
      	});
      	 
      	
      
      	
      	
      	
      	
			});
		
      	
      	
      	
      	
      	
      	
      	
		 
			
			
			
		}	
		}
	});
	 
	  
	 
	 
  
	
	
})
