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
    var imgurl='http://www.dianyitai.cn'
	$.ajax({
		type:"get",
		url:"http://www.dianyitai.cn/home/Doctordetail/doctordetail",
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
				$.each(data.data.detail, function(key,list) {
				html+='<div class="card-head-box">'+
               			'<img src='+imgurl+list.touxiang+'>'+
               			'<div class="card-head-main">'+
               				'<p><strong>'+list.title+'：'+list.zhiwei+'</strong></p>'+
               				'<p>'+list.yiyuan+'</p>'+
               			'</div>'+
               			'<div class="card-head-btn">关注该医生</div>'+
               		'</div>'+
               		'<div class="card-head-centent">'+list.jianjie+'</div>'
			});
			$('.doctor-detail-card-box').html(html);
			//课程视频
			$('.tab-home-list-box').empty();
			var shipin="";
			//$.each(JSON.parse(data).data.shipin, function(key,list) {
			$.each(data.data.shipin, function(key,list) {
				if(list.money==1){ 
				shipin+='<li>'+
      		'<div class="tab-home-list-video"></div>'+
      		'<div class="home-video-name">'+list.title+'</div>'+
      		'<div class="home-video-doctor">'+
      		'<span class="fot-doctor">授课：'+list.xinghao+'</span><span class="col-red">￥'+list.price+'</span>'+
      		'</div>'+
      	     '</li>'
      	    }else{
      	    	shipin+='<li>'+
      		'<div class="tab-home-list-video"></div>'+
      		'<div class="home-video-name">'+list.title+'</div>'+
      		'<div class="home-video-doctor">'+
      		'<span class="fot-doctor">授课：'+list.xinghao+'</span><span class="col-green">公开课</span>'+
      		'</div>'+
      	     '</li>'
      	    }
			});
			$('.tab-home-list-box').html(shipin);
			//医学文章
			 
//			$('#yxwz').empty();
//			var wenzhang="";
//			//$.each(JSON.parse(data).data.wenzhang, function(key,list) {
//			$.each(data.data.wenzhang, function(key,list) {
//				//var endDate = (new Date("2018/072/09 14:13:11")).getTime(); //得到毫秒数  
//              var newDate = new Date(list.createtime ); //得到普通的时间了 
//              console.log(newDate);
//              
//				wenzhang+='<div class="yxwz-main-list">'+
//    	'<a href="bookdetail.html">'+
//    	 '<p class="yxwz-list-btn">学术类</p>'+
//    	 '<ul class="yxwz-list-right">'+
//    	 	'<li>'+
//    	 		'<div>'+
//    	 			'<strong>'+list.title+'</strong>'+
//    	 			'<img src="images/slide/new.png">'+
//    	 			'<span class="new-red">New</span>'+
//    	 		'</div>'+
//    	 	'</li>'+
//    	 	'<li class="yxwz-time">'+
//    	 		 '<span>发表于 07-29 17:10</span>'+
//    	 		 '<span>'+list.hits+'人查看</span>'+
//    	 		 '<span>70条评论</span>'+
//    	 	'</li>'+
//    	 '</ul>'+
//    	 '</a>'+
//    '</div>'
//			});
//			$('#yxwz').html(wenzhang);
			
			
			
			
			
			
			
			
			
			
			
			
		}
	});
	
	
})
