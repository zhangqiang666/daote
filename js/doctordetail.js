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

    console.log(theRequest.id);
    var id = theRequest.id;
    console.log(id)
    var url66=localStorage.getItem("url");
    var imgurl=localStorage.getItem("imgurl");
    //var imgurl='http://www.dianyitai.cn'
	$.ajax({
		type:"post",
		url:url66+"doctorlist",
		async:true,
		data:{
			id:id
		},
		dataType:"json",
		success:function(data){
			console.log(data)
			//关注该医生
			$('.doctor-detail-card-box').empty();
			var html="";
			 
			    //$.each(JSON.parse(data).data.detail, function(key,list) {
				$.each(data.success, function(key,list) {
					localStorage.setItem("d_id",list.d_id)
					localStorage.setItem("name",list.name)
					 videodetail(list.name);
					 console.log(list.name)
				html+='<div class="card-head-box">'+
               			'<img src='+imgurl+list.photo+'>'+
               			'<div class="card-head-main">'+
               				'<p><strong>'+list.name+'：'+list.position+'</strong></p>'+
               				'<p>'+list.from+'</p>'+
               			'</div>'+
               			'<div class="card-head-btn">关注该医生</div>'+
               			'<div class="card-head-btn66">取消关注</div>'+
               		'</div>'+
               		'<div class="card-head-centent">'+list.intro+'</div>'
			});
			$('.doctor-detail-card-box').html(html);
			 
			
			//关注按钮的切换
			$('.card-head-btn').click(function(){
				$('.card-head-btn').hide();
				$('.card-head-btn66').css("display","block");
			})
			$('.card-head-btn66').click(function(){
				$('.card-head-btn66').hide();
				$('.card-head-btn').css("display","block");
			})
			//关注收藏
//	$.ajax({
//		type:"post",
//		url:url66+"getcollect",
//		async:true,
//		data:{
//			classify:'1',
//			f_type:'1',
//			focus:id
//			
//		},
//		dataType:"json",
//		success:function(data){
//			console.log(data);
//		}
//	});
			
			
			
			
			
			
			
			
			
			
			
			
		}
	});
	//课程视频
	function videodetail(name){ 
		console.log(name)
	$.ajax({
		type:"post",
		url:url66+"videolist",
		async:true,
		data:{
			author:localStorage.getItem("d_id")
		},
		dataType:"json",
		success:function(data){
			console.log(data);
			$('.tab-home-list-box').empty();
			var shipin="";
			$.each(data.success, function(key,list) {
				if(list.is_fee==1){ 
				shipin+='<li>'+
				'<a href="video_detail.html?author='+list.author+'&v_id='+list.v_id+'">'+
      		'<div class="tab-home-list-video"><img src='+imgurl+list.img+' style="width:100%;height:100%;"></div>'+
      		'<div class="home-video-name">'+list.title+'</div>'+
      		'<div class="home-video-doctor">'+
      		'<span class="fot-doctor">授课：'+name+'</span><br><span class="col-red66">￥'+list.price+'</span>'+
      		'</div>'+
      		'</a>'+
      	     '</li>'
      	    }else{
      	    	shipin+='<li>'+
      	    	'<a href="video_detail.html?author='+list.author+'&v_id='+list.v_id+'">'+
      		'<div class="tab-home-list-video"><img src='+imgurl+list.img+' style="width:100%;height:100%;"></div>'+
      		'<div class="home-video-name">'+list.title+'</div>'+
      		'<div class="home-video-doctor">'+
      		'<span class="fot-doctor">授课：'+name+'</span><span class="col-green">公开课</span>'+
      		'</div>'+
      		'</a>'+
      	     '</li>'
      	    }
			});
			$('.tab-home-list-box').html(shipin);
			//文章列表
			$('.doctor-article-list-box').empty();
			var wenzhang="";
			$.each(data.success, function(key,list) {
				if(list.is_fee==1){ 
				wenzhang+='<li>'+
      		'<a href="article_detail.html"> '+
      		'<div class="article-list-title"> '+list.title+'<span class="col-red">&nbsp;&nbsp;New</span></div>'+
      		'<div class="article-foot">'+
      			'<span class="article-foot-i">&nbsp;</span>'+
      			'<span class="col-blue">'+name+'</span>'+
      			'<span class="col-gray">'+list.created_at+'</span>'+
      			'<span class="col-money">付费课程</span>'+
      		    '<span class="col-right-argument">70条评论</span>'+
      		    '<span class="col-right-can">300人查看</span>'+
      		'</div>'+
      		'</a>'+
      	'</li>'
      }else{
      	wenzhang+='<li>'+
      		'<a href="article_detail.html"> '+
      		'<div class="article-list-title">'+list.title+'<span class="col-red">&nbsp;&nbsp;New</span></div>'+
      		'<div class="article-foot">'+
      			'<span class="article-foot-i">&nbsp;</span>'+
      			'<span class="col-blue">'+name+'</span>'+
      			'<span class="col-gray">'+list.created_at+'</span>'+
      		    '<span class="col-right-argument">70条评论</span>'+
      		    '<span class="col-right-can">300人查看</span>'+
      		'</div>'+
      		'</a>'+
      	'</li>'
      }
      	$('.doctor-article-list-box').html(wenzhang);
			});
			
			
			
			
		}
	});
	}
	 videodetail();
	 //评论列表
	$.ajax({
		type:"post",
		url:url66+"commentlist",
		async:true,
		data:{
			classify:"医生",
			comment:localStorage.getItem("d_id")
			 
		},
		dataType:"json",
		success:function(data){
			console.log(data)
			$('.xueyuan-content-list-box').empty();
			var pinlun="";
			$.each(data.success, function(key,list) {
				pinlun+='<li>'+
        		'<div class="xueyuan-list-head">'+
        			'<div class="list-head-i"><img src='+imgurl+list.photo+' style="width:100%;height:100%;border-radius:50px;"></div>'+
        			'<div class="list-head-auto">'+
        				'<p class="list-head-phone">'+list.name+'</p>'+
        				'<p class="list-head-day">'+list.created_at+'</p>'+
        			'</div>'+
        			'<span class="list-head-right">'+key+'#</span>'+
        		'</div>'+
        		'<div class="xueyuan-list-content">'+list.content+'</div>'+
           '</li>'
				
				
				
				$('.xueyuan-content-list-box').html(pinlun);
			});
			 
			
			
		},
		error:function(data){
			
		}
		
	});
	 
	
	
	
	
	  
	 
	 
})
