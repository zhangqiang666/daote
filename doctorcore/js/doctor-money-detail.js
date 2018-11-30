$(function(){
	//账户明细
	$.ajax({
		 headers:{
      'Authorization':localStorage.getItem("token"),
     },
		type:"get",
		url:apiurl+"doctor/transaction/detail",
		async:true,
		data:{
			page:"1"
		},
		dataType:"json",
		success:function(data){
			console.log(data)
			 $('.money-list-box').empty()
			 var html="";
			 $.each(data.data.data, function(key,list) {
			 	html+='<li>'+
    	 		'<div class="money-title">'+
    	 			'<div class="list-left">'+(list.description || (list.money > 0 ? '收入' : '支出'))+'</div>'+
    	 		     '<div class="list-right">'+list.money+'</div>'+
    	 		'</div>'+
    	 		'<div class="list-footer-time">'+list.created_at+'</div>'+
    	 	'</li>'
			 });
			 $('.money-list-box').html(html)
		}
	});
	
	
	
	
	
	
})
