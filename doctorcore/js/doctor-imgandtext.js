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
	localStorage.setItem("service",service)
	$('.title').empty();
	var title="";
	 title+='<span>开通'+service+'服务</span>'
	 $('.title').html(title)
	$('.eye-money-btn a').attr("href",'doctor-imgandtext-detail.html?service='+service+'')
	
	
})
