  

$(function(){
	//医生科室列表
	$.ajax({
		type:"post",
		url:apiurl+"departmentlist?"+(new Date()).getTime(),
		async:true,
		data:{},
		dataType:"json",
		success:function(data){
			console.log(data)
			$('.departmentId').empty();
			var html="" 
				// html+='<option value='+list.id+'>'+list.department+'</option>'
				var selectDom = [];
				for (var i = 0; i < data.data.length; i++) {
					var optGroupDom = $('<optgroup />').attr('label', data.data[i].department);
					for (var j = 0; j < data.data[i]['children'].length; j++) {
						optGroupDom.append($('<option />').attr('value', data.data[i]['children'][j].id).html(data.data[i]['children'][j].department))
					}
					//console.log(optGroupDom)
					selectDom.push(optGroupDom);
				}
				
				//console.log(selectDom)			
			  $('.departmentId').html(selectDom)
			  }
            });
	  //身份证正面照片
        $("#idcardPhoto1").change(function(){
        	 
            //FormData对象，
            //可以把form中所有表单元素的name与value组成一个queryString，提交到后台。
            //在使用Ajax提交时，使用FormData对象可以减少拼接queryString的工作量
            var formData = new FormData();
             formData.append("file",$("#idcardPhoto1")[0].files[0]);
             // formData.append("id",localStorage.getItem("id"));
            $.ajax({
            	headers:{
      'Authorization':localStorage.getItem("token"),
       },
                url:apiurl+"doctor/verify/upload",
                type:'post',
                data: formData,
                cache: false,
                processData: false,
                contentType: false,
                success:function(data){
              	$('.man-img').attr("src",imgurl+data.path)
                	 $('.man-img').attr("data-idcardPhoto1",data.path)
                    console.log(data);
                    var idcardPhoto1=data.path;
                     
                },error:function(e){
                    //console.log(e);
                }
            });
        });
    //上传医师资格照正面照片
     $("#PQCPhoto").change(function(){
      
            //FormData对象，
            //可以把form中所有表单元素的name与value组成一个queryString，提交到后台。
            //在使用Ajax提交时，使用FormData对象可以减少拼接queryString的工作量
            var formData = new FormData();
             formData.append("file",$("#PQCPhoto")[0].files[0]);
             // formData.append("id",localStorage.getItem("id"));
            $.ajax({
            	headers:{
      'Authorization':localStorage.getItem("token"),
       },
                url:apiurl+"doctor/verify/upload",
                type:'post',
                data: formData,
                cache: false,
                processData: false,
                contentType: false,
                success:function(data){
              	$('.man-img01').attr("src",imgurl+data.path)
                	 $('.man-img01').attr("data-PQCPhoto",data.path)
                    console.log(data);
                    var PQCPhoto=data.path;
                     
              
                },error:function(e){
                    //console.log(e);
                }
            });
        });
         //上传专业技术资格证书
     $("#PATQCPhoto").change(function(){
     		 
            //FormData对象，
            //可以把form中所有表单元素的name与value组成一个queryString，提交到后台。
            //在使用Ajax提交时，使用FormData对象可以减少拼接queryString的工作量
            var formData = new FormData();
             formData.append("file",$("#PATQCPhoto")[0].files[0]);
             // formData.append("id",localStorage.getItem("id"));
            $.ajax({
            	headers:{
      'Authorization':localStorage.getItem("token"),
       },
                url:apiurl+"doctor/verify/upload",
                type:'post',
                data: formData,
                cache: false,
                processData: false,
                contentType: false,
                success:function(data){
              	$('.man-img02').attr("src",imgurl+data.path)
                	 $('.man-img02').attr("data-PATQCPhoto",data.path)
                    console.log(data);
                    var PATQCPhoto=data.path;
                   
                   
 
                },error:function(e){
                    //console.log(e);
                }
            });
        });
        //手机号码格式判断
//      $(".iphone").on(" input propertychange",function(){
//          var mobile=$(this).val()
//       
//})
 
   	            
   	            
        
        
        
   //审核页面的信息提交
        
   $('#submit').click(function(){
       var name=$('.name').val();
        var mobile=$('.iphone').val();
       var from01=$('.from').val();
       var departmentId=$('.departmentId').val();
       var idcardPhoto1=$('.man-img').attr("data-idcardPhoto1");
       var PQCPhoto=$('.man-img01').attr("data-PQCPhoto");
   	   var PATQCPhoto=$('.man-img02').attr("data-PATQCPhoto");
   	   console.log(name);
   	     console.log(from01);
   	       console.log(departmentId);
   	         console.log(idcardPhoto1);
   	           console.log(PQCPhoto);
   	            console.log(PATQCPhoto);
   	           
   	             if(mobile.length==0){      
           $('<div>').appendTo('body').addClass('alert alert-success').html('请输入手机号码！').show().delay(1500).fadeOut();
           //document.form1.mobile.focus();
           return false;
        }else if(mobile.length!=11){
           
            $('<div>').appendTo('body').addClass('alert alert-success').html('请输入有效的手机号码！').show().delay(1500).fadeOut();
            document.form1.mobile.focus();
            return false;
        }else if(name.length==0){ 
        	  $('<div>').appendTo('body').addClass('alert alert-success').html('姓名不能为空！').show().delay(1500).fadeOut();
        }else if(from01.length==0){
        	$('<div>').appendTo('body').addClass('alert alert-success').html('隶属医院不能为空！').show().delay(1500).fadeOut();
        }else if(departmentId.length==0){
        	$('<div>').appendTo('body').addClass('alert alert-success').html('科室不能为空！').show().delay(1500).fadeOut();
        }else if(idcardPhoto1==undefined){
        		$('<div>').appendTo('body').addClass('alert alert-success').html('上传身份证照片不能为空！').show().delay(1500).fadeOut();
        }else if(PQCPhoto==undefined){
        	$('<div>').appendTo('body').addClass('alert alert-success').html('上传医师资格证书照片不能为空！').show().delay(1500).fadeOut();
        }else{
//      var myreg = /^(((13[0-9]{1})|159|153)+\d{8})$/;
//      if(!myreg.test(mobile))
//      {
//          
//           $('<div>').appendTo('body').addClass('alert alert-success').html('请输入有效的手机号码！').show().delay(1500).fadeOut();
//          document.form1.mobile.focus();
//          return false;
//      }
   	            
       $.ajax({
       		headers:{
      'Authorization':localStorage.getItem("token"),
       },
       	type:"post",
       	url:apiurl+"doctor/verify/submit",
       	async:true,
       	data:{
       		name:name,
       		from:from01,
       		phone:mobile,
       		departmentId:departmentId,
       		idcardPhoto1,idcardPhoto1,
       		PQCPhoto:PQCPhoto,
       		PATQCPhoto:PATQCPhoto
       		
       	},
       	dataType:"json",
       	success:function(data){
       		console.log(data);
       		if(data.status=='error'){ 
       			$('<div>').appendTo('body').addClass('alert alert-success').html(data.msg).show().delay(1500).fadeOut();
       		}else{
       			$('<div>').appendTo('body').addClass('alert alert-success').html('提交信息成功，请等候审核结果').show().delay(1500).fadeOut();
       		window.location.href="javascript:window,history.back();"
       		}
       	},
       	 
       });
       
       }
   	  
   	
   })
  
	 
})
