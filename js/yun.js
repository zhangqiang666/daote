$(document).ready(function(){
	  var w = document.documentElement.clientWidth || document.body.clientWidth;
  	console.log(w)
  	var modal=localStorage.getItem("modal")
  	console.log(modal);
  	if(w<=640){ 
        window.location.href="mobile_yun.html" 
      }
	var arrdata= [
{ "name":"小儿课程" , "url":"www.runoob.com","id":"2"  }, 
{ "name":"google" , "url":"www.google.com","id":"2" }, 
{ "name":"google" , "url":"www.google.com","id":"2" },
{ "name":"google" , "url":"www.google.com","id":"2" },
{ "name":"google" , "url":"www.google.com","id":"2" },
{ "name":"google" , "url":"www.google.com","id":"2" },
{ "name":"google" , "url":"www.google.com","id":"2" },
{ "name":"google" , "url":"www.google.com","id":"2" },
{ "name":"google" , "url":"www.google.com","id":"2" },
{ "name":"google" , "url":"www.google.com","id":"2" },
{ "name":"google" , "url":"www.google.com","id":"2" },
{ "name":"微博" , "url":"www.weibo.com","id":"2" }
];
var imgurl='http://www.dianyitai.cn'
 function google(id){
 	 
 	 $.ajax({
        url:"http://www.dianyitai.cn/home/yun/shipin",
        type:"post",
        /*xhrFieds:{
        	widthCredentials:true
        },*/
        data:"",
        /*预期服务器端返回的数据类型，假设现在跨域了，就改成jsonp 就可以了 */
        dataType:"json",
        success:function(data){
            console.log(data);
            
                   if(id==0){ 
                    $('.category-list-box').empty();   //清空resText里面的所有内容
                    var html = '';
                    $.each(JSON.parse(data), function(key, list){
                         
                        
                        html +='<li><a href="doctor.html">'+
                	 		'<div><img src='+imgurl+list.thumb+'></div>'+
                	 		'<div class="book-name">'+list.title+'</div>'+
                	 		'<div class="book-centent">'+
                	 			'<span class="money-red">￥'+list.price+'</span>'+
                	 			'<span class="doctor-man">授课：'+list.xinghao+'</span>'+
                	 		'</div>'+
                	 	'</a></li>';
                      

                    });
                    $('.category-list-box').html(html);    
                   }

        }
    })
 }
 google(0)
  
   
  $.ajax({
        url:"http://www.dianyitai.cn/home/yun/shipin",
        type:"post",
        /*xhrFieds:{
        	widthCredentials:true
        },*/
        data:"",
        /*预期服务器端返回的数据类型，假设现在跨域了，就改成jsonp 就可以了 */
        dataType:"json",
        success:function(data){
            console.log(data);
            $(".category-head-list-right>li").click(function(){
		var _index=$(".category-head-list-right>li").index(this);
		//console.log(_index);
	 
		$(".category-head-list-right>li").removeClass("col")
		$(".category-head-list-right>li").eq(_index).addClass("col")
		 branch(_index);
		 google(_index)
		   listclick(_index);
	})
            function listclick(id){
	//列表2点击事件
	$(".category-head-list-right02>li").click(function(){
		var money=$(".category-head-list-right02>li").index(this);
		//console.log(money);
		$(".category-head-list-right02>li").removeClass("col")
		$(".category-head-list-right02>li").eq(money).addClass("col")
		 branch(id,money);
		 google(money);
	})
	  }
            listclick();
            function branch(id,money){
            	 console.log(id);
            	 console.log(money);
            	  for( var i=0; i<JSON.parse(data).length; i++){
            	  	//console.log(data[i].kmfl);
            	  	if(data[i].kmfl==id||data[i].money==money){
            	  		 $('.category-list-box').empty();   //清空resText里面的所有内容
                    var html = '';
                    $.each(JSON.parse(data) , function(key, list){
                    	 //json.parse();
                        //console.log('hahah:'+list.money);
                        //console.log(list.kmfl)
                         if(list.kmfl==id||list.money==money){ 
                       html +='<li><a href="doctor.html">'+
                	 		'<div><img src='+imgurl+list.thumb+'></div>'+
                	 		'<div class="book-name">'+list.title+'</div>'+
                	 		'<div class="book-centent">'+
                	 			'<span class="money-red">￥'+list.price+'</span>'+
                	 			'<span class="doctor-man">授课：'+list.xinghao+'</span>'+
                	 		'</div>'+
                	 	'</a></li>';
                	 	 
                      } 

                    });
                    $('.category-list-box').html(html);
            	  		
            	  		
            	  		
            	  	} 
            	  	
            	  	
            	  }
            	  	 
		 
                     
                   
	}
	//branch();
	         

        }
    })
	 
	
})
