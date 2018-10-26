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
    var d_id=theRequest.d_id;
    var id=theRequest.id;
	  
	 
	  function list(type){ 
	 
	//文章列表
	 console.log(type)
	$.ajax({
		 headers:{
      'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:apiurl+"valist",
		async:true,
		data:{
			author:d_id,
			type:type
		},
		dataType:"json",
		success:function(data){
			
			console.log(data);
			
			//文章列表
			$('.doctor-article-list-box').empty();
			var wenzhang="";
			$.each(data.success, function(key,list) {
				 	//console.log(list.created_at.split(" ")[0])
				 	localStorage.setItem("manname",list.doctor_name)
				if(list.a_id){ 
				if(list.is_fee==1){ 
				wenzhang+='<li class="dyt-money" data-type="2" data-id='+list.a_id+' data-author='+list.author+' onClick="fun(1, this)">'+
      		//'<a href="article_detail.html?author='+list.author+'&a_id='+list.a_id+'"> '+
      		'<div class="article-list-title"> '+list.title+'</div>'+
      		'<div class="article-foot">'+
      			//'<span class="article-foot-i">&nbsp;</span>'+
      			'<span class="col-blue">'+list.doctor_name+'</span>'+
      			'<span class="col-gray">'+list.created_at+'</span>'+
      			'<span class="col-money">付费'+parseFloat(list.price)+'元</span>'+
      		    '<span class="col-right-argument"><i class="iconfont icon-xiaoxi-copy-copy"></i>&nbsp;'+list.id+'</span>'+
      		    '<span class="col-right-can"><i class="iconfont icon-chakan1"></i>&nbsp;300</span>'+
      		'</div>'+
      		//'</a>'+
      	'</li>'
      }else{
      	wenzhang+='<li>'+
      		'<a href="article_detail.html?author='+list.author+'&a_id='+list.a_id+'"> '+
      		'<div class="article-list-title">'+list.title+'</div>'+
      		'<div class="article-foot">'+
      			//'<span class="article-foot-i">&nbsp;</span>'+
      			'<span class="col-blue">'+list.doctor_name+'</span>'+
      			'<span class="col-gray">'+list.created_at+'</span>'+
      		    '<span class="col-right-argument"><i class="iconfont icon-xiaoxi-copy-copy"></i>&nbsp;'+list.id+'</span>'+
      		    '<span class="col-right-can"><i class="iconfont icon-chakan1"></i>&nbsp;300</span>'+
      		'</div>'+
      		'</a>'+
      	'</li>'
      }
     }else{
     if(list.is_fee==1){ 
				wenzhang+='<li class="dyt-money" data-type="1" data-id='+list.v_id+' data-author='+list.author+' onClick="fun(1, this)">'+
      		//'<a href="video_detail.html?author='+list.author+'&v_id='+list.v_id+'">'+ 
      		'<div class="valist-video-left"><div class="video-title-copy"><span>'+list.title+'</span><span>【</span><span>视频</span><span>】</span></div>'+
      		//'<div class="video-img"><img src='+imgurl+list.img+' style="width:100%;height:100%;"></div>'+
      		'<div class="article-foot">'+
      			//'<span class="article-foot-i">&nbsp;</span>'+
      			'<span class="col-blue">'+list.doctor_name+'</span>'+
      			'<span class="col-gray">'+list.created_at.split(" ")[0]+'</span>'+
      			'<span class="col-money">付费'+parseFloat(list.price)+'元</span>'+
      		    '<span class="col-right-argument"><i class="iconfont icon-xiaoxi-copy-copy"></i>&nbsp;'+list.id+'</span>'+
      		    '<span class="col-right-can"><i class="iconfont icon-chakan1"></i>&nbsp;300</span>'+
      		'</div></div>'+
      		'<div class="video-img"><img src='+imgurl666+list.img+' style="width:100%;"></div>'+
      		//'</a>'+
      	'</li>'
     
      	    }else{
      	    	 
				wenzhang+='<li>'+
      		'<a href="video_detail.html?author='+list.author+'&v_id='+list.v_id+'">'+ 
      		'<div class="valist-video-left"><div class="video-title-copy"><span>'+list.title+'</span><span>【</span><span>视频</span><span>】</span></div>'+
      		//'<div class="video-img"><img src='+imgurl+list.img+' style="width:100%;height:100%;"></div>'+
      		'<div class="article-foot">'+
      			//'<span class="article-foot-i">&nbsp;</span>'+
      			'<span class="col-blue">'+list.doctor_name+'</span>'+
      			'<span class="col-gray">'+list.created_at.split(" ")[0]+'</span>'+
      		    '<span class="col-right-argument"><i class="iconfont icon-xiaoxi-copy-copy"></i>&nbsp;'+list.id+'</span>'+
      		    '<span class="col-right-can"><i class="iconfont icon-chakan1"></i>&nbsp;300</span>'+
      		'</div></div>'+
      		'<div class="video-img"><img src='+imgurl666+list.img+' style="width:100%;"></div>'+
      		'</a>'+
      	'</li>'
     
}
     }
      	$('.doctor-article-list-box').html(wenzhang);
       
      	
      	
      	
      	
      	
      	
      	
      	
      	
      	
			});
			
			
			
			
		},
		error:function(data){
			//console.log(data)
			if(data.responseJSON.error){ 
			$('.doctor-article-list-box').empty()
			var zanwu="";
			zanwu+='<div class="article-zanwu"><img src="images/bag/zanwushuju.png" class="zanwu-img"><div>暂无数据</div></div>';
			$('.doctor-article-list-box').html(zanwu)
			}
		}
	});
	
	}
	  list(0);
	  
	    //文章的分类
	  $.ajax({
	  	 headers:{
      'Authorization':localStorage.getItem("token"),
     },
	  	type:"post",
	  	url:localStorage.getItem("url")+"typename",
	  	async:true,
	  	data:{
	  		//author:localStorage.getItem("d_id"),
	  		//f_type:'2'
	  	},
	  	dataType:"json",
	  	success:function(data){
	  		//console.log(data); 
	  		 
	  		 
	  		
	  		
	  		
	  		
	  	}
	  });
	  
	  
	
	
	
	
	
	 	
})
