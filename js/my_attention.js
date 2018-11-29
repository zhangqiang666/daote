$(function(){
	//var url=localStorage.getItem("url");
	//var imgurl=localStorage.getItem("imgurl");
	//关注医生列表
	function attention(){ 
	$.ajax({
		headers:{
    'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:apiurl+"collectlist",
		async:true,
		data:{
			classify:'1',
			//id:localStorage.getItem("id")
		},
		dataType:"json",
		success:function(data){
			console.log(data);
			 
			$('.attention-list-box').empty();
			var html="";
			$.each(data.success,function(key,list){
			//$.each(JSON.parse(data).data,function(key,list){
//				html+='<a href="doctordetail.html?id='+list.msg.id+'&d_id='+list.msg.d_id+'"><div class="attention-list">'+
//          		'<div class="list-img">'+
//          			'<img src='+imgurl+list.msg.photo+'>'+
//          		'</div>'+
//          		'<div class="list-title">'+list.msg.name+'&nbsp;'+list.msg.edu+'</div>'+
//          		'<div class="list-doctor">'+list.msg.position+'</div>'+
//          		'<div class="list-newson">'+list.msg.labels+'</div>'+
//          	'</div></a>'
                    html+='<div class="doctor-card-box">'+
                    '<a href="even-doctor.html?d_id='+list.msg.d_id+'">'+
     	 	'<img src='+imgurl666+list.msg.photo+'>'+
     	 	'<div class="doctor-card-auto">'+
     	 		'<p><span class="card-doctor-name">'+list.msg.name+'</span></p>'+
     	 		'<p class="card-doctor-position"><span>'+list.msg.department.department+'</span>&nbsp;&nbsp;<span>'+list.msg.position+'</span></p>'+
     	 		'<p class="card-doctor-position"><span>'+list.msg.from+'</span></p>'+
     	 	'</div></a>'+
     	 	'<div class="doctor-card-right">'+
     	 		'<button data-d-id='+list.msg.d_id+'>已关注</button>'+
     	 	'</div>'+
     	 '</div>'
             $('.attention-list-box').html(html);
             //取消关注医生
             $('.doctor-card-right button').click(function(){
		var _index=$(this).index();
		console.log(_index)
	 var d_id=$(this).attr("data-d-id")
	 console.log(d_id)
	 
	 
	 
	 //取消关注医生api列表渲染
	$.ajax({
		 headers:{
      'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:apiurl+"losecollect",
		async:true,
		data:{
			classify:'1',
			f_type:'1',
			focus:d_id,
			//id:localStorage.getItem("id")	
		},
		dataType:"json",
		success:function(data){
			console.log(data);
			if(data.success){
				$('.card-head-btn66').hide();
				$('.card-head-btn').css("display","block");
				$('<div>').appendTo('body').addClass('alert alert-success').html('取消成功').show().delay(1500).fadeOut();
				// window.location.href="my_attention.html"
				attention();
			}
		}
	});
	});
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
			})
			//我的关注部显示数量
      	  $('.number').empty();
      	  var number="";
      	  number+=data.success.length;
      	  $('.number').html(number)
		},
		error:function(data){
			console.log(data.responseJSON)
			if(data.responseJSON){
				//window.location.href="my_attention.html"
				 //$('.doctor-card-box').hide();
				 $('.attention-list-box').empty();
				  var zanwu="";
				     zanwu+='<div class="zanwu-box">'+
            	'<img src="images/bag/zanwushuju.png" class="zanwu-img">'+
            	'<div class="zanwu-content">暂无数据</div>'
            	'</div>'
            	$('.attention-list-box').html(zanwu)
            	//我的关注部显示数量
      	  $('.number').empty();
      	  var number="";
      	  number+='0';
      	  $('.number').html(number)
			}
		}
	});
	
	 
	
	};
	attention()
	
	
})
