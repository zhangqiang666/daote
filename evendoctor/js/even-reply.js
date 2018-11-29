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
   var orderId=theRequest.order;
	//图文问诊订单
	$.ajax({
		headers:{
    'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:apiurl+"doctor/graphic/get",
		async:true,
		data:{
			orderId:orderId
		},
		dataType:"json",
		success:function(data){
			console.log(data);
			$('.patient-info-box').empty();
			var textimg="";
			//$.each(data.data, function(key,list) {
				textimg+=' <div class="patient-name"><span>患者姓名：'+data.data.name+'</span></div>'+
    	 	 '<div class="patient-problem-title"><span>问题描述：</span></div>'+
    	 	 '<div class="patient-problem-main"><span>'+data.data.content+'</span></div>'+
    	 	 '<div class="patient-img">'+
    	 	 
    	 	 '</div>'
			//});
			$('.patient-info-box').html(textimg)
			var imglist="";
		   $.each(data.data.images, function(key,list) {
			   imglist+='<img src='+imgurl+list.path+'>'
			   
			   });
			   $('.patient-img').html(imglist);
			//医生回复
			$('.textarea-box').empty();
			var huifu="";
			$.each(data.data.replies, function(key,list) {
			huifu+='<div>'+(key+1)+':'+list.content+'</div>'
			});
			$('.textarea-box').html(huifu)
			
		}
	});
	 
	 
		  
		 
		 
	 
	 
	
	
	
})
