$(function(){
	 
	  
	  //判断是否登录
	  var cookie=$.cookie("temp")
	  console.log(cookie)
 	 // var temp=localStorage.getItem("temp")
	if(cookie==undefined){
		var test = window.location.href;
		localStorage.setItem("windowhref",test);
		window.location.href="mobile_login.html"
		 
	}
	
	//上拉加载下拉刷新
	 function box(borrowValue,departmentIds){
	 	
	 console.log(departmentIds)
        var page=1;
        mui.init({
            pullRefresh: {
                container: '#pullrefresh',
                up: {
                    contentrefresh: '正在加载...',
                    callback: pullupRefresh
                }
            }
        });
	 
	 
	
	
	
	
	
	
	
	
	
	 //加载更多
        var dataNum=1;//获取数据总数
        var pageSize=1;//每页显示条数
        var counter=1;//计数器
        var pageStart=0;//开始数据条数
       // var url ='http://zhukeyunfu.com:8870/ntsjlaborplatapp2/'
        //var orgcode ='A03';
        getData(pageStart,pageSize);
        function getData(pageStart,pageSize){
//显示数不足每页显示条数
            if(dataNum-pageStart<pageSize){
                pageSize=dataNum-pageStart;
                data(pageStart,pageSize);

                console.log("显示数不足每页显示条数");
            }
//显示隐藏加载更多
            else if(pageStart+pageSize>=dataNum){
                data(pageStart,pageSize);
                
                console.log("没有更多数据了");
//没有更多数据了
            }else{
                data(pageStart,pageSize);
               // console.log("显示dataNum"+dataNum+"pageSize"+pageSize+"pageStart"+pageStart);

//显示
            }
        }
        function data(pageStart,pageSize){
//业务
            var result="";
            for(var i=pageStart;i<(pageStart+pageSize);i++){
   
	//医生列表
	 
		
	 
	$.ajax({
	  headers:{
      'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:apiurl666+"doctorlist?"+(new Date()).getTime(),
		async:true,
		data: (function() {
			if (departmentIds === '0') {
				return {
					search: borrowValue,
					page: page,
					recommend: ''
				};
			}
			return {
				subDepartmentIds:'',
				search:borrowValue,
				page:page,
				recommend:'',
				departmentIds:departmentIds,
			};
		})(),
		dataType:"json",
		success:function(data){
			console.log(data);
			 
			 mui('body').on('tap','a',function(){
                window.top.location.href=this.href;
            });
				var list=data.data.data;
                  console.log(list)
                  //医生列表无数据时的情况
                    if(list.length==0){
                    	$('.zanwu-box').hide();
                   mui('#pullrefresh').pullRefresh().disablePullupToRefresh();
                   result+='<div class="zanwu-box">'+
            	'<img src="images/bag/zanwushuju.png" class="zanwu-img">'+
            	'<div class="zanwu-content">暂无数据</div>'+
            	'</div>'
                  }else{
                  	$('.zanwu-box').hide();
                  	  mui('#pullrefresh').pullRefresh().enablePullupToRefresh();
                  }
                  //医生列表渲染
				 for( j=0;j<list.length;j++){
			 
				 if(list[j].edu==''){
				 	result+='<div class="evne-doctor-list-card">'+
     	  			'<a href="even-doctor.html?id='+list[j].d_id+'&&d_id='+list[j].d_id+'">'+
     	  			'<div class="list-card-head">'+
     	  				'<img src='+imgurl+list[j].photo+'>'+
     	  				'<div class="list-card-head-auto">'+
     	  					'<p><span class="card-name">'+list[j].name+'</span><span>'+list[j].edu+'</span></p>'+
     	  					'<p><span class="card-position">'+list[j].position+'</span></p>'+
     	  				'</div>'+
     	  				'<div class="list-card-head-right">'+
     	  					'<p><span class="card-money-red">100元</span><span class="card-number">/次</span></p>'+ 
     	  				'</div>'+
     	  			'</div>'+
     	  			'<div class="list-card-footer">'+
     	  				'<span>'+list[j].department.department+':</span><span class="keshi01">'+list[j].intro+'</span>'+
     	  			'</div>'+
     	  			'</a>'+
     	  		'</div>'
				 }else{ 
				result+='<div class="evne-doctor-list-card">'+
     	  			'<a href="even-doctor.html?id='+list[j].id+'&&d_id='+list[j].d_id+'">'+
     	  			'<div class="list-card-head">'+
     	  				'<img src='+imgurl+list[j].photo+'>'+
     	  				'<div class="list-card-head-auto">'+
     	  					'<p><span class="card-name">'+list[j].name+'</span><span class="card-education">'+list[j].edu+'</span></p>'+
     	  					'<p><span class="card-position">'+list[j].position+'</span></p>'+
     	  				'</div>'+
     	  				'<div class="list-card-head-right">'+
     	  					'<p><span class="card-money-red">100元</span><span class="card-number">/次</span></p>'+ 
     	  				'</div>'+
     	  			'</div>'+
     	  			'<div class="list-card-footer">'+
     	  				'<span>'+list[j].department.department+':</span><span class="keshi01">'+list[j].intro+'</span>'+
     	  			'</div>'+
     	  			'</a>'+
     	  		'</div>'
     	  	}
             				}
                      
                        jQuery(result).insertBefore('#pullrefresh .mui-scroll .mui-table-view');
             		console.log(dataNum)
             		 
             		 
		          return dataNum=(data.data.last_page)-1;
		          
    
    
		}
	}); 
	 
	
	 }
            /* console.log(jQuery);
             jQuery(result).insertBefore('#pullrefresh .mui-scroll .mui-table-view');*/
        }
        /**
         * 上拉加载具体业务实现
         */
        function pullupRefresh() {
            setTimeout(function() {
                ++page;
                    
                var flag=counter++<(dataNum/pageSize)
                console.log(dataNum/pageSize);
                mui('#pullrefresh').pullRefresh().endPullupToRefresh((!flag)); //参数为true代表没有更多数据了。
                var scroll = document.body.querySelector('.mui-scroll .mui-table-view');
                var item = document.body.querySelectorAll('.goode-msg');
                console.log(counter);
                if(flag){
                    console.log(counter);
                    pageStart=counter*pageSize;
                    data(pageStart,pageSize);
                }
            }, 1500);
        }
	
	 
	
	
     
	
	
	
	 }
	 var borrowValue=''
	 box(borrowValue)
	      //搜索
	 $('#borrowValue').bind('input propertychange', function() {
	 	$('.evne-doctor-list-card').hide();
	 	  
			var loadInterest = '4';
	  		var borrowValue = $(this).val();
	  		 //console.log(borrowValue)
		 //listfun(borrowValue)
		  
          
		 box(borrowValue)
		 
		 
    });
	
	
	
	
	
	
	
	//医生科室列表
	$.ajax({
		type:"post",
		url:apiurl666+"departmentlist?"+(new Date()).getTime(),
		async:true,
		data:{},
		dataType:"json",
		success:function(data){
			console.log(data)
			var quanbu={
				'id': 0,
				'department':'全部',
				 
			};
			var arr=data.data;
			arr.unshift(quanbu)
			console.log(arr)
			$('.list-menu').empty();
			var subject="";
			$.each(arr, function(key,list) {
				 
				subject+='<li data-id='+list.id+' href="#first">'+list.department+'</li>'
			 
			});
			$('.list-menu').html(subject)
			var departmentIds=''
			box(borrowValue,departmentIds)
			//医生科室选择列表
	$('.list-menu>li').eq(0).css("color","RGBA(0, 155, 255, 1)")
	$('.img-jiazai').hide()
	$('.list-menu>li').click(function(){
	 
		 
		// var scroll = mui('.mui-scroll-wrapper').scroll(); 
//  document.querySelector('.mui-scroll-wrapper' ).addEventListener('scroll', function (e ) { 
//    console.log(scroll.y); 
//  }) 
            //mui('.mui-scroll-wrapper').scroll().y=0
            mui('.mui-scroll-wrapper').scroll().scrollTo(0,0,0);//解决mui滚动条置顶问题
		//  console.log(scroll.y); 
  
 
 
 
		 
		var departmentIds=$(this).attr("data-id")
		$('.list-menu>li').css("color","RGBA(79, 80, 96, 1)")
		$(this).css("color","RGBA(0, 155, 255, 1)")
			$('.evne-doctor-list-card').fadeOut(2000);
			 //$('.evne-doctor-list-card').remove();
		 $('.img-jiazai').show()
		 $('.img-jiazai').fadeOut(3000)
		box(borrowValue,departmentIds)
		
	})
			
			
			
			
		}
	});
	
	
	
	//mui双滚动条隐藏一个
	 mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.1, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值 0.0006 
    indicators: false  //隐藏一条滚动条 增大减速系数。。。
});
 
	
  
 
	 
	
})
