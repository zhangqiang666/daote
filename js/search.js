$(function(){
	
	$.ajax({
		type:"get",
		url:"http://dyttest.pi.imjs.0cdn.cn/api/departmentlist?"+(new Date()).getTime(),
		async:true,
		data:{},
		dataType:"json",
		success:function(data){
			console.log(data);
			console.log(data.data[0])
			//一级科室
			 $('.search-index-left').empty();
			  var list01=""
			$.each(data.data, function(key,list) {
				  
				   
				  list01+='<div class="search-left-list" data-id='+key+' data-name='+list.department+'>'+list.department+'</div>';
				  
				  
				   
			});
			  $('.search-index-left').html(list01)
			  //获取一级科目id
			  
			  $('.search-left-list').click(function(){
			  	 $('.search-left-list').css("color","black")
			  	var id=$(this).attr('data-id');
			  	var name=$(this).attr('data-name');
			  	console.log(name)
			    $(this).css("color","#3dbb28")
			  	console.log(id)
			  	list02(id,name)
			  	//wancheng(arr,name);
			  })
			  //二级科室
			  function list02(e,name){ 
			  	console.log(data.data[e])
			   $('.search-index-right').empty();
			  var list02=""
			$.each(data.data[e].children, function(key,list) {
				  			  
				  list02+='<div class="search-right-list" data-id='+list.id+' data-i='+key+'>'+list.department+'</div>'; 
				   
			});
			  $('.search-index-right').html(list02);
			  
			  
			  
			  //选取二级科室
			  var arr=[]
			   $('.search-right-list').click(function(){
			  	var id=$(this).attr('data-id');
			  		$(this).css("color","#3dbb28")
			  		//$(this).css("border","1px solid #3dbb28")
			  	arr.push(id)
			  	  console.log(arr)
			  	  
//			  	 list_id=arr.join(","); 
//			  	 console.log(list_id)
			  	  if(arr.length>=4){
			  	  	//alert('选取的科室不能超过三个')
			  	  	$('<div>').appendTo('body').addClass('alert alert-success').html('选取的科室不能超过三个').show().delay(1500).fadeOut();
			  	  	 $(this).css("color","black")
			  	  	 arr.pop()//删除数组最后一个元素
			  	  }
			  	  //清空选中的科室
			  	  $('.qingkong').click(function(){
			  	  	arr.splice(0,arr.length);//清空数组
			  	  	$('.search-right-list').css("color","black")
			  	  	//$('.search-right-list').css("border","0px")
			  	  	console.log(arr)
			  	  })
			  	   wancheng(arr,name);
			  	  
			  	  
			  })
			   //选取科室完成后跳转
			   function wancheng(arr,name){
			   		console.log(arr)   	
			   $('.wancheng').click(function(){
//			         if(arr.length==0){
//			         	alert('请先选取科室')
//			         }else{ 
//			   		 window.location.href='doctorhomeadd.html?arr='+arr+'';
//			   		 }
                       console.log(arr)
                    if(name==undefined&&arr==undefined){
                    	//alert(1)
//                   	var name='内科'
//                   	 window.location.href='doctorhomeadd.html?arr='+arr+'&&name='+name+'';
                  $('<div>').appendTo('body').addClass('alert alert-success').html('请先选择科室').show().delay(1500).fadeOut();
//                   }else if(name==undefined&&arr!=undefined){
//                   var name='内科'
//                	 window.location.href='doctorhomeadd.html?arr='+arr+'&&name='+name+'';
                     	 
                     }else{
                     	if(name==undefined){
                     		 
                  	      window.location.href='doctorhomeadd.html?arr='+arr+'&&name=内科';
                     	}else{ 
                     	 window.location.href='doctorhomeadd.html?arr='+arr+'&&name='+name+'';
                     	}
                     }
                       
                      	 
                     
			   })
			   	}
			   wancheng();
			  
			 
			  
			  
			  
			  
			  
			  
			  }
			  list02(0)
			   
			   
			  
			  
			  
		}
	});
	
	
	
	 
	
	
	
	
	
	
	
	
	
	
	
	
	
})
