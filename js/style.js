 $(document).ready(function(){
 	//公共地址
   	var url="http://172.16.30.231/ucenter/public/api/"
   	var imgurl="http://172.16.30.231/ucenter/public/uploads/"
// 	var url="http://www.dianyitai.cn/api/"
// 	var imgurl="http://www.dianyitai.cn/uploads/"
 	localStorage.setItem("url",url)
 	localStorage.setItem("imgurl",imgurl)
 	console.log(localStorage.getItem("url"));
 	 //登录后跳转个人信息列表
       var mylist=localStorage.getItem("temp")
       
       if(mylist){ 
       $('.mylist').attr("href","mylist.html")
       }
 	/*$(".icon-header").hide();
 	$(".head-div").click(function(){
 		$(".icon-header").toggle();
 		 
 	})*/
 	 
 	/*$("#head ul li").hover(function(){
 		$(".border-home").hide()
 	    var _index=$("#head ul li").index(this)
 	      var _home=$(this).index(this)
 	      console.log(_index)
 		$(".border-home").eq(_index).show()
 	})*/
 	$(".foot-img img").hide();
 	$(".foot-two img").hover(function(){
 	 
 		$(".foot-img img").toggle();
 	})
 	            //登录后显示用户名
 	 	        var phonelogin=localStorage.getItem("phone")
 	 	        console.log(phonelogin)
 	 	        if(phonelogin==null){ 
  	            $('.active-a').empty();
	 	        var html="";
	 	         
	 	        html+='<span>登录</span>'
	 	        $('.active-a').html(html);
	 	        }else{
	 	        	 $('.active-a').empty();
	 	        var html="";
	 	         
	 	        html+='<span>'+phonelogin+'</span>'
	 	        $('.active-a').html(html);
	 	        }
  
//轮播图触摸事件
	 
				var startX,endX;//声明触摸的两个变量
				var offset = 30;//声明触摸距离的变量
				$('.carousel-inner').on('touchstart',function (e) {
					startX= e.originalEvent.touches[0].clientX;//当触摸开始时的x坐标；
				});
				$('.carousel-inner').on('touchmove',function (e) {
					endX = e.originalEvent.touches[0].clientX;//当触摸离开时的x坐标；
				});
				$('.carousel-inner').on('touchend',function (e) {
					//当触摸完成时进行的事件；
					var distance = Math.abs(startX - endX);//不论正负，取值为正值；
					if (distance > offset){
					    if(startX > endX){
					        $('#myCarousel').carousel('next');//当开始的坐标大于结束的坐标时，滑动到下一附图
					    }else{
					      	$('#myCarousel').carousel('prev');//当开始的坐标小于结束的坐标时，滑动到上一附图
 
					    }
					        	
					}
				});	
				//底部手风琴选项卡
				$(function(){
    $(".coll_body").eq(3).show();
    $(".Collapsing").click(function(){
        $(this).toggleClass("current").siblings('.Collapsing').removeClass("current");//切换图标
        $(this).next(".coll_body").slideToggle(5).siblings(".coll_body").slideUp(5);
    });
});
				 
				/*$('.foot-add').click(function(){
					  $('.foot-add').removeClass("span_plus")
					  $('.foot-add').addClass("span_minus")
					   $(this).toggleClass("span_plus");
					    
					  
					  $(this).addClass("span_minus");
				
				})*/
				//pc端底部邮箱
				 $('.input-group span').click(function(){
				 	var email=$('.input-group input').val();
				 	console.log(email);
				 	$.ajax({
				 		url:"http://www.dianyitai.cn/home/sendsms/sendmail",
				 		type:"post",
				 		data:{
				 			email:email
				 		},
				 		dataType:"json",
				 		success:function(data){
				 			console.log(data)
				 		}
				 	})
				 	 });
				 	
				 //移动端底部邮箱
				 $('.email-input span').click(function(){
				 	var email=$('.email-input input').val();
				 	console.log(email);
				 	localStorage.setItem("email",email);
				 	$.ajax({
				 		url:url+"sendmail",
				 		type:"post",
				 		data:{
				 			email:email
				 		},
				 		dataType:"json",
				 		success:function(data){
				 			console.log(data)
				 			$('<div>').appendTo('body').addClass('alert alert-success').html('发送成功').show().delay(1500).fadeOut();
				 		}
				 	})
				 	
				 	
				 	
				 	
				 	
				 	
				 	
				 	
				 	
				 	
				 	
				 	
				 })
				
				
				
				
				
				
				
				
			});
