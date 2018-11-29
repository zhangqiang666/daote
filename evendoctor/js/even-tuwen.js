 //$(document).ready(function(){
var url = location.search;//获取url中"?"符后的字串

    var theRequest = new Object();

    if (url.indexOf("?") != -1) {

        var str = url.substr(1);

        strs = str.split("&");

        for(var i = 0; i < strs.length; i ++) {

            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);

        }

    }

    console.log(theRequest);
    var d_id=theRequest.d_id;
    var id=theRequest.id; 
     console.log(d_id)
     //图文问诊价格
     var service=localStorage.getItem("service")
$('.service').empty()
 $('.service').html(service)
	 //上传图片
    	var arr=[]
        $("#idcardPhoto1").change(function(){
        	 $('.kong-img').hide();//判断是否有图片填入
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
              	//$('.man-img').attr("src",imgurl+data.path)
                	// $('.man-img').attr("data-idcardPhoto1",data.path)
                    console.log(data);
                    var scimg=$('<img/>').attr("src",imgurl+data.path).attr("data-idcardPhoto1",data.path);
                    $('.jibing-img').append(scimg)
                    arr.push(data.path)
                   
                     
                },error:function(e){
                    //console.log(e);
                }
            });
        });
        //信息提交
//      $('.submit-textimg').click(function(){
//      	var idcardlength=$('.jibing-img img').length;
//      	var s1=arr.join(",")
//      	var content=$('.problem-box textarea').val();
//      	var name=$('#name').val()
//      	console.log(idcardlength)
//      	console.log(arr)
//      	$.ajax({
//      			headers:{
//    'Authorization':localStorage.getItem("token"),
//     },
//      		type:"post",
//      		url:apiurl+"graphic/submit",
//      		async:true,
//      		data:{
//      			name:name,
//      			orderId:"DYT20521542184753",
//      			doctorDId:localStorage.getItem("d_id666"),
//      			content:content,
//      			image:arr
//      		},
//      		dataType:"json",
//      		success:function(data){
//      			console.log(data)
//      		}
//      	});
//      	 
//      	   	
//      })
         $('.problem-box textarea').bind('input porpertychange',function(){
         	var content=$(this).val()
         	if(content!=''){
         		 $('.kong-problem').hide();
         	}
         })
        
         $("#name").bind('input porpertychange',function(){
　　　      var name=$(this).val()
         	if(name!=''){
         		 $('.kong').hide();
         	}
　　　   　});
         //订单生成后信息提交
        function submitfun(orderId){
        	 
        	var s1=arr.join(",")
        	var content=$('.problem-box textarea').val();
        	var name=$('#name').val()
        	 
        	console.log(arr)
        	//判断是否填写信息
        	console.log(name)
        	if(name==''){
        		 $('.kong').show();
        	}
        	if(content==''){
        		 $('.kong-problem').show();
        	}
        	if(arr==''){
        		 $('.kong-img').show();
        	}
        	
        	
        	$.ajax({
        			headers:{
      'Authorization':localStorage.getItem("token"),
       },
        		type:"post",
        		url:apiurl+"graphic/submit",
        		async:true,
        		data:{
        			name:name,
        			orderId:orderId,
        			doctorDId:localStorage.getItem("d_id666"),
        			content:content,
        			image:arr
        		},
        		dataType:"json",
        		success:function(data){
        			console.log(data)
        		}
        	});
        	
        }
        
        
        
        
        //订单支付
        var orderData = {};
function jsApiCall(orderId) {
    WeixinJSBridge.invoke(
        'getBrandWCPayRequest',
        orderData,
        function(res){
            WeixinJSBridge.log(res.err_msg);
            if (res.err_msg == "get_brand_wcpay_request:ok") {
                $('<div>').appendTo('body').addClass('alert alert-info').html('支付完成').show().delay(1500).fadeOut();
                //submitfun(orderId)
            } else {
                $('<div>').appendTo('body').addClass('alert alert-info').html('支付遇到问题').show().delay(1500).fadeOut();
            }
        }
    );
}

function callpay(orderId) {
    if (typeof WeixinJSBridge == "undefined"){
        if( document.addEventListener ){
            document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
        }else if (document.attachEvent){
            document.attachEvent('WeixinJSBridgeReady', jsApiCall); 
            document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
        }
    }else{
        jsApiCall(orderId);
    }
}


   // var imgurl='http://www.dianyitai.cn'
    //$('.dyt-money').click(function(){
    	 
     	//var zixun=$(this).attr("data-id")
       function fun(e){ 
       	
       	
       	
       	
        console.log(e)
           var d_id666=localStorage.getItem("d_id666");
          
       console.log(d_id555)
       
         console.log(d_id666);
         var type=$(e).attr("data-type");
         console.log(e)
        	  $('<div>').appendTo('body').addClass('alert alert-info').html('正在唤起微信支付，请稍候').show().delay(3000).fadeOut();
        //生成订单
        $.ajax({
            headers:{
                'Authorization':localStorage.getItem("token"),
            },
            type:"post",
            url:apiurl+"getorder",
            async:true,
            data:{
                type:type,
                product_id:d_id666,

            },
            dataType:"json",
            success:function(data){
                console.log(data)
                var orderId=data.success;
                  submitfun(orderId)
                //支付 

/*                $.ajax({
                    headers:{
                        'Authorization':localStorage.getItem("token"),
                    },
                    type:"post",
                    url:localStorage.getItem("url")+"towxpay",
                    async:true,
                    data:{
                        order_id:data.success,

                    },
                    dataType:"json",
                    success:function(data){
                        console.log(data)
                        console.log(data.success)
                //			$('body').empty();
                //			var html="";
                //			html+=data.success
                //			//window.location.href=data.success;
                //			$('body').html(html)
                        window.location.href=data.success

                    },
                    error:function(data){
                        console.log(data);
                    }
                });*/

                $.ajax({
                    headers:{
                        'Authorization':localStorage.getItem("token"),
                    },
                    type:"post",
                    url:apiurl+"towxpaymp",
                    async:true,
                    data:{
                        order_id:data.success,
                    },
                    dataType:"json",
                    success:function(data){
                        console.log(data)
                        orderData = data;
                        callpay(orderId);
                    },
                    error:function(data){
                        console.log(data);
                    }
                });

            }
        });


 var d_id555=$(e).attr("data-id");
        if(d_id555!=undefined){
        	return d_id666=d_id555;
        }
    }//函数

        
        
        
        
        
        
        
        
        
        
        
        
    //});
    