$(function(){
	
	//登录后跳转个人信息列表
       var mylist=localStorage.getItem("temp")
       
       if(mylist){ 
       $('.mylist').attr("href","mylist.html")
       }
	//内容列表渲染
	var imgurl='http://www.dianyitai.cn'
	$.ajax({
		type:"post",
		url:"http://www.dianyitai.cn/home/doctorhome/studio",
		async:true,
		data:"",
		dataType:"json",
		success:function(data){
			console.log(data);
			$('.tj-doctor-list').empty();
			var html="";
			$.each(data.data,function(key,list){
			//$.each(JSON.parse(data).data,function(key,list){
				html+='<li><a href="doctordetail.html?id='+list.id+'">'+ 
             					'<img src='+imgurl+list.touxiang+'>'+
             					'<div class="list-card-name">'+list.title+list.zhiwei+'</div>'+
             					'<div class="list-card-adress">'+list.yiyuan+list.kemu+'</div>'+
             					'</a>'+
             				'</li>'
             				$('.tj-doctor-list').html(html);
			})
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
