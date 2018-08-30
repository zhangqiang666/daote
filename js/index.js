  $(function(){
  	//模态框
  	  var w = document.documentElement.clientWidth || document.body.clientWidth;
  	console.log(w)
  	var modal=localStorage.getItem("modal")
  	console.log(modal);
  	if(w>=640&&modal==null){ 
         $("#myModal").modal({
            keyboard: true
        });
      }
   
        //模态框
        //shujujiaohu
       
         
             //发送短信       
          var phone=$('#name').val();
          console.log(phone);
         $('#phone').click(function(){
         	 var phone=$('#name').val();
          console.log(phone);
          
         $.ajax({
        url:"http://www.dianyitai.cn/home/index/sendSms",
        type:"post",
        /*xhrFieds:{
        	widthCredentials:true
        },*/
        data:{
        	phone:phone
        },
        /*预期服务器端返回的数据类型，假设现在跨域了，就改成jsonp 就可以了 */
        dataType:"json",
        success:function(data){
            console.log(data);
            
            
                    /*$('.content1').empty();   //清空resText里面的所有内容
                    var html = '';
                    $.each(data.data, function(key, list){
                         
                        
                        html +='';
                      

                    });
                    $('.content1').html(html);*/             

        }
    })
         
         
         });
         //短信登录
         $('.modal-btn').click(function(){
         	var phone=$('#name').val();
         	var code=$('#code').val();
         	console.log(phone);
         	console.log(code);
          
         $.ajax({
         	url:"http://www.dianyitai.cn/home/index/login",
         	type:"post",
         	data:{
         		phone:phone,
         		code:code
         	},
         	dataType:"json",
         	success:function(data){
         		console.log(data);
         		localStorage.setItem("modal",data.stu); //存入 参数： 1.调用的值 2.所要存入的数据 
         		localStorage.setItem("phone",phone);
	 	        console.log(localStorage.getItem("modal"));//输出
	 	        if(data.stu==1){ 
	 	        	alert( "注册成功")
	 	        	window.location.href="index.html"
	 	        
	 	             }
         	}
         })
         })//登录
          function fun(){
    obj = document.getElementsByName("test");
    check_val = [];
    for(k in obj){
        if(obj[k].checked)
            check_val.push(obj[k].value);
    }
    obj[0].checked=true;
    console.log(obj[0].checked);
}
	 fun();
	//复选框默认选择
       //登录后跳转个人信息列表
       var mylist=localStorage.getItem("temp")
       
       if(mylist){ 
       $('.mylist').attr("href","mylist.html")
       }
        //首页列表
        $.ajax({
        	type:"get",
        	url:"http://172.16.30.231/ucenter/public/api/homelist",
        	async:true,
        	data:"",
        	dataType:"json",
        	success:function(data){
        		console.log(data)
        		
        	}
        });
        
        
        
        
        
        
        
        
    });
    
 