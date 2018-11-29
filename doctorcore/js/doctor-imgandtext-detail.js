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
    
    console.log(theRequest)
     //头部title显示标题
	var service=theRequest.service;
        
       console.log(service)
       
        //头部title显示标题
	 
	localStorage.setItem("service",service)
	$('.title').empty();
	var title="";
	 title+='<span>开通'+service+'服务</span>'
	 $('.title').html(title)
          
          
          $('.eye-money-btn').click(function(){
          	
         var price=$('.price').val()
          console.log(price)
                 $.ajax({
                 		headers:{
      'Authorization':localStorage.getItem("token"),
       },
                 	type:"post",
                 	url:apiurl+"doctor/service/update",
                 	async:true,
                 	data:{
                 		service:service,
                 		price:price
                 	},
                 	dataType:"json",
                 	success:function(data){
                 		console.log(data);
                 		$('<div>').appendTo('body').addClass('alert alert-info').html(data.msg).show().delay(1500).fadeOut();
                 		if(data.status=='success'){
                 			 
                 			 $('<div>').appendTo('body').addClass('alert alert-info').html('开通服务成功').show().delay(1500).fadeOut();
                 			window.location.href="doctor-core.html"
                 		}
                 	}
                 });


  })









})