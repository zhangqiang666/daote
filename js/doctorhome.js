$(function(){
	
	//登录后跳转个人信息列表
       var mylist=localStorage.getItem("temp")
       
       if(mylist){ 
       $('.mylist').attr("href","mylist.html")
       }
	//内容列表渲染
	//var imgurl='http://www.dianyitai.cn'
	var url=localStorage.getItem("url");
	var imgurl=localStorage.getItem("imgurl");
	$.ajax({
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
				html+='<li><a href="doctordetail.html?id='+list.id+'">'+ 
             					'<img src='+imgurl+list.photo+'>'+
             					'<div class="list-card-name">'+list.name+list.position+'</div>'+
             					'<div class="list-card-adress">'+list.from+list.labels+'</div>'+
             					'</a>'+
             				'</li>'
             				$('.tj-doctor-list').html(html);
			})
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
