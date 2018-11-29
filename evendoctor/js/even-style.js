$(function(){
	var url = location.search;//获取url中"?"符后的字串

    var theRequest = new Object();

    if (url.indexOf("?") != -1) {

        var str = url.substr(1);

        strs = str.split("&");

        for(var i = 0; i < strs.length; i ++) {

            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);

        }

    }

    console.log(theRequest);
    var id=theRequest.id;
    var d_id=theRequest.d_id;
    localStorage.setItem("d_id666",d_id);
    //医生卡片信息
    $.ajax({
    	headers:{
      'Authorization':localStorage.getItem("token"),
     },
    	type:"post",
    	url:apiurl+"doctorlist",
    	async:true,
    	dataType:"json",
    	data:{
    		id:d_id
    	},
    	success:function(data){
    		console.log(data);
    		$('.doctor-card-box').empty()
    		var doctor="";
    		$.each(data.success, function(key,list) {
    			doctor+='<img src='+imgurl+list.photo+'>'+
     	 	'<div class="doctor-card-auto">'+
     	 		'<p><span class="card-doctor-name">'+list.name+'</span></p>'+
     	 		'<p class="card-doctor-position"><span>'+list.department.department+'</span>&nbsp;&nbsp;<span>'+list.position+'</span></p>'+
     	 		'<p class="card-doctor-position"><span>'+list.from+'</span></p>'+
     	 	'</div>'+
     	 	'<div class="doctor-card-right">'+
     	 		'<button class="card-head-btn">关注</button><button class="card-head-btn66">已关注</button>'+
     	 	'</div>'
    		});
    		$('.doctor-card-box').html(doctor);
    		//擅长
    		$('.doctor-good-right').empty();
    		  var shanzhang="";
    		  shanzhang+='<span>'+data.success[0].intro+'</span>'
    		  $('.doctor-good-right').html(shanzhang)
    		 
    		
    		
    		
    		 //判断是否关注该医生
	$.ajax({
		 headers:{
      'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:apiurl+"getcom",
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
			if(data.success==1){
				$('.card-head-btn').hide();
				$('.card-head-btn66').css("display","block");
				 
			}else{
				$('.card-head-btn66').hide();
				$('.card-head-btn').css("display","block");
			}
		}
	});
	
	//关注按钮的切换
			$('.card-head-btn').click(function(){
 
	//关注医生
	 console.log("zhangqiang")
	$.ajax({
		 headers:{
      'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:apiurl+"getcollect",
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
				$('.card-head-btn').hide();
				$('.card-head-btn66').css("display","block");
				$('<div>').appendTo('body').addClass('alert alert-success').html('关注成功').show().delay(1500).fadeOut();
			}
		}
	});
	
 
			
			})
			$('.card-head-btn66').click(function(){
 
//取消关注医生
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
			}
		}
	});
			})
	
	
    		
    		
    		
    		
    		
    		
    		
    		
    		
    		
    		
    		
    		
    		
    		
    		
    		
    		
    		
    	}
    });
	
	
	
	
	
})
	
	
	
	
	
	 
	
	
	
	

