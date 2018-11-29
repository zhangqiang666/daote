$(function(){
	var url66=localStorage.getItem("url");
	var imgurl=localStorage.getItem("imgurl");
	 
	var url = location.search;//获取url中"?"符后的字串

    var theRequest = new Object();

    if (url.indexOf("?") != -1) {

        var str = url.substr(1);

        strs = str.split("&");

        for(var i = 0; i < strs.length; i ++) {

            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);

        }

    }

   // console.log(theRequest.author);
    var author=theRequest.author;
      var a_id=theRequest.a_id;
      console.log(a_id)
    console.log(author)
    
    
	$.ajax({
		 headers:{
      'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:apiurl+"article",
		async:true,
		data:{
			 author:author,
			 a_id:a_id,
			 type:'0'
		},
		dataType:"json",
		success:function(data){
			console.log(data)
			$('.article-main').empty();
			var html="";
			 var data = data['data'];
			//$.each(data.success, function(key,list) {
				localStorage.setItem("a_id",data.a_id);
				html+='<div class="article-detail-title">'+data.title+'</div>'+
            '<div class="article-detail-title-foot">'+
            	//'<span class="title-foot-i"></span>'+
            	'<span class="man">'+localStorage.getItem("manname")+'</span>'+
            	'<span class="time">'+data.created_at+'</span>'+
            	'<span class="argument">0条评论</span>'+
            	'<span class="read">'+data.view_count+'人查看</span>'+
            '</div>'+
            //'<img src="images/bag/detail666.png" class="article-detail-img">'+
            '<div class="article-detail-content">'+data.article+'</div>'
				
			//});
			 $('.article-main').html(html);
			
//			//评论条数
//			$('.argument').empty();
//			var number="";
//			number+='<span>'+lenghthnumber+'评论</span>';
//			$('.argument').html(number);
		},
		error:function(data){
			
		}
		
	});
	//评论列表
	 
	$.ajax({
		 headers:{
      'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:url66+"commentlist",
		async:true,
		data:{
			classify:"文章",
			comment:a_id
			 
		},
		dataType:"json",
		success:function(data){
			console.log(data)
			$('.xueyuan-content-list-box').empty();
			var pinlun="";
			$.each(data.success, function(key,list) {
				localStorage.setItem("number",data.success.length)
				pinlun+='<li>'+
        		'<div class="xueyuan-list-head">'+
        			'<div class="list-head-i"><img src='+imgurl+list.photo+' style="width:100%;height:100%;border-radius:50px;"></div>'+
        			'<div class="list-head-auto">'+
        				'<p class="list-head-phone">'+list.name+'</p>'+
        				'<p class="list-head-day">'+list.created_at+'</p>'+
        			'</div>'+
        			'<span class="list-head-right">'+(key+1)+'#</span>'+
        		'</div>'+
        		'<div class="xueyuan-list-content">'+list.content+'</div>'+
           '</li>'
				
				
				
				$('.xueyuan-content-list-box').html(pinlun);
			});
			 //用户评论显示数目
			 $('.user-title').empty()
			 var yhnumber="";
			     lenghthnumber=data.success.length;
			    yhnumber+='<span>用户评论(<span>'+data.success.length+'</span>)</span>';
			    $('.user-title').html(yhnumber)
			 //评论条数
			$('.argument').empty();
			var number="";
			number+='<span>'+lenghthnumber+'评论</span>';
			$('.argument').html(number);
			
			
		},
		error:function(data){
			
		}
		
	});
    
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
