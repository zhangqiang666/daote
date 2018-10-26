//$(function(){
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
            url:apiurl666+"getorder",
            async:true,
            data:{
                type:type,
                product_id:d_id666,

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
                    url:apiurl666+"towxpaymp",
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


 var d_id555=$(e).attr("data-id");
        if(d_id555!=undefined){
        	return d_id666=d_id555;
        }
    }//函数

 // })//点击





//})
