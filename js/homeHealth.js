//$(function(){
	 //判断是否登录
	  var cookie=$.cookie("temp")
	  console.log(cookie)
 	 // var temp=localStorage.getItem("temp")
	if(cookie==undefined){
		var test = window.location.href;
		localStorage.setItem("windowhref",test);
		window.location.href="mobile_login.html"
		 
	}
var orderData = {};

function jsApiCall() {
    WeixinJSBridge.invoke(
        'getBrandWCPayRequest',
        orderData,
        function(res){
            WeixinJSBridge.log(res.err_msg);
            if (res.err_msg == "get_brand_wcpay_request:ok") {
                $('<div>').appendTo('body').addClass('alert alert-info').html('支付完成').show().delay(1500).fadeOut();
            } else {
                $('<div>').appendTo('body').addClass('alert alert-info').html('支付遇到问题').show().delay(1500).fadeOut();
            }
        }
    );
}

function callpay() {
    if (typeof WeixinJSBridge == "undefined"){
        if( document.addEventListener ){
            document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
        }else if (document.attachEvent){
            document.attachEvent('WeixinJSBridgeReady', jsApiCall); 
            document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
        }
    }else{
        jsApiCall();
    }
}


    var imgurl='http://www.dianyitai.cn'
    //$('.dyt-money').click(function(){
     	 
    function fun(e){ 
        console.log(e)
        
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
                type:'3',
                product_id:e,

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
                        callpay();
                    },
                    error:function(data){
                        console.log(data);
                    }
                });

            }
        });



    }//函数

//  })//点击





//})
