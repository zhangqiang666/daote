$(function(){
	var url = location.search;//获取url中"?"符后的字串

    var theRequest = new Object();

    if (url.indexOf("?") != -1) {

        var str = url.substr(1);

        strs = str.split("&");

        for(var i = 0; i < strs.length; i ++) {

            theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);

        }

    }
 

   // console.log(theRequest.author);
    var classify=theRequest.classify;
    var comment=theRequest.comment;
    
    console.log(classify);
    console.log(comment);
	var url66=localStorage.getItem("url");
	var token=localStorage.getItem("token")
	console.log(token)
	//判断头部医生卡片的显示和隐藏
	 if(classify=='医生'){
	 	$('.doctor-card-box').css("display","block")
	 }else{
	 	$('.doctor-card-box').css("display","none")
	 }
	$('.input-title-right').click(function(){
		var content=$('.input-content').val();
		console.log(content);
 if(content==''){
				$('<div>').appendTo('body').addClass('alert alert-success').html('请先填写内容再发表评论').show().delay(1500).fadeOut();
	}else if(localStorage.getItem("temp")){
				
			$.ajax({
				headers:{
      'Authorization':localStorage.getItem("token"),
     },
//    headers: {'Authorization': 'Basic'+token,"lpy":"lpy"},
// beforeSend: function(request) {
//                      request.setRequestHeader("Test",token);
//                 },
       
      
		type:"post",
		url:url66+"getcomment",
		//async:true,
		data:{
			classify:classify,
			comment:comment,
			content:content,
			//id:localStorage.getItem("id")
			
		},
//		 beforeSend: function(request) {
//                      request.setRequestHeader("Authorization",token);
//                  },
		dataType:"json",
//		headers:{
//          'token':localStorage.getItem("token")
//     },
		success:function(data){
			console.log(data);
			 	$('<div>').appendTo('body').addClass('alert alert-success').html('发表成功').show().delay(1500).fadeOut();
			 	window.location.href="javascript:window.history.back();"
		},
//		error:function(data){
//			 	$('<div>').appendTo('body').addClass('alert alert-success').html('发表成功').show().delay(1500).fadeOut();
//		}
	});
	
	
		 
			}else{
				$('<div>').appendTo('body').addClass('alert alert-success').html('请先登录后再发表').show().delay(1500).fadeOut();
			}
	
	
	
	
	
			});
			
			
			
 
	
})
