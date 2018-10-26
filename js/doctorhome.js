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
   var listid=theRequest.arr;
   console.log(theRequest)
	//登录后跳转个人信息列表
//     var mylist=localStorage.getItem("temp")
//     
//     if(mylist){ 
//     $('.mylist').attr("href","mylist.html")
//     }
	//内容列表渲染
	//var imgurl='http://www.dianyitai.cn'
	var url=localStorage.getItem("url");
	var imgurl=localStorage.getItem("imgurl");
	$.ajax({
	  headers:{
      'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:url+"doctorlist",
		async:true,
		data:"",
		dataType:"json",
		success:function(data){
			console.log(data);
			$('.tj-doctor-list').empty();
			var html="";
			$.each(data.success,function(key,list){
			//$.each(JSON.parse(data).data,function(key,list){
				html+='<li><a href="doctordetail.html?id='+list.id+'&d_id='+list.d_id+'">'+ 
             					'<img src='+imgurl+list.photo+'>'+
             					'<div class="list-card-name">'+list.name+'&nbsp;&nbsp;'+list.edu+'</div>'+
             					'<div class="list-card-name">'+list.position+'</div>'+
             					'<div class="list-card-adress">'+list.labels+'</div>'+
             					'</a>'+
             				'</li>'
             				$('.tj-doctor-list').html(html);
			})
		}
	});
	
	
	
	
	 
	
	
     
	
	
	
	
})
