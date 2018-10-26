//$(function(){
	 
var orderData = {};
function jsApiCall(type,product_id,author) {
    WeixinJSBridge.invoke(
        'getBrandWCPayRequest',
        orderData,
        function(res){
            WeixinJSBridge.log(res.err_msg);
            if (res.err_msg == "get_brand_wcpay_request:ok") {
                $('<div>').appendTo('body').addClass('alert alert-info').html('支付完成，请稍候').show().delay(1500).fadeOut();
                //支付成功后跳转内页
                setTimeout(function () {
              if(type=='1'){
                window.location.href='video_detail.html?+author='+author+'&&v_id='+product_id+''
                }else if(type=='2'){
                 window.location.href='article_detail.html?+author='+author+'&&a_id='+product_id+''
                }
              }, 1500);
              // 
                
            } else {
                $('<div>').appendTo('body').addClass('alert alert-info').html('支付遇到问题').show().delay(1500).fadeOut();
            }
        }
    );
}

function callpay(type,product_id,author) {
    if (typeof WeixinJSBridge == "undefined"){
        if( document.addEventListener ){
            document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
        }else if (document.attachEvent){
            document.attachEvent('WeixinJSBridgeReady', jsApiCall); 
            document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
        }
    }else{
        jsApiCall(type,product_id,author);
    }
}

 
    //var imgurl='http://www.dianyitai.cn'
    //$('.dyt-money').click(function(){
     	 
   function fun(e, dom){
        console.log(e, dom)
         var type=$(dom).attr("data-type")
        var product_id=$(dom).attr("data-id")
        var author=$(dom).attr("data-author")
           
        console.log(product_id)
         console.log(type)
        
        	  $('<div>').appendTo('body').addClass('alert alert-info').html('正在唤起微信支付，请稍候').show().delay(3000).fadeOut();
        //生成订单
        $.ajax({
            headers:{
                'Authorization':localStorage.getItem("token"),
            },
            type:"post",
            url:localStorage.getItem("url")+"getorder",
            async:true,
            data:{
                type:type,
                product_id:product_id,

            },
            dataType:"json",
            success:function(data){
                console.log(data)

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
                    url:localStorage.getItem("url")+"towxpaymp",
                    async:true,
                    data:{
                        order_id:data.success,
                    },
                    dataType:"json",
                    success:function(data){
                        console.log(data)
                        orderData = data;
                        callpay(type,product_id,author);
                    },
                    error:function(data){
                        console.log(data);
                    }
                });

            }
        });



    }//函数

 // })//点击





//})
