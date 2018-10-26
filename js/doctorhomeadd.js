$(function(){
	//上拉加载下拉刷新
	 function box(borrowValue){
	 	
	 
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
	var url = location.search;//获取url中"?"符后的字串

    var theRequest = new Object();

    if (url.indexOf("?") != -1) {

        var str = url.substr(1);

        strs = str.split("&");

        for(var i = 0; i < strs.length; i ++) {

            theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);

        }

    }

   // console.log(theRequest.author);
   var listid=theRequest.arr;
//   console.log(theRequest)
   //科室选择显示
   $('.title-left').empty();
   
   var keshi="";
   if(theRequest.name==undefined){
   	keshi+='<strong>全部医生</strong>'
   }else{
   	keshi+='<strong>'+theRequest.name+'</strong>'
   }
    
   $('.title-left').html(keshi)
    //加载更多
        var dataNum=16;//获取数据总数
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
   
	//登录后跳转个人信息列表
//     var mylist=localStorage.getItem("temp")
//     
//     if(mylist){ 
//     $('.mylist').attr("href","mylist.html")
//     }
	//内容列表渲染
	//var imgurl='http://www.dianyitai.cn'
	var url=localStorage.getItem("url");
	//var imgurl=localStorage.getItem("imgurl");
	var imgurl="http://dyttest.pi.imjs.0cdn.cn/uploads/"
	 
   // var borrowValue ='';
    function listfun(borrowValue){ 
	$.ajax({
	  headers:{
      'Authorization':localStorage.getItem("token"),
     },
		type:"post",
		url:"http://dyttest.pi.imjs.0cdn.cn/api/doctorlist?"+(new Date()).getTime(),
		async:true,
		data:{
			subDepartmentIds:theRequest.arr,
			search:borrowValue,
			page:page,
			recommend:''			
		},
		dataType:"json",
		success:function(data){
			//console.log(data);
			//console.log(data.data.data)
		//box(data.data.data)
		 
		//console.log(dataNum)
			//$('.tj-doctor-list').empty();
			//var html="";
			//$.each(data.data.data,function(key,list){
				//上拉刷新a标签跳转作用代码
            mui('body').on('tap','a',function(){
                window.top.location.href=this.href;
            });
				var list=data.data.data;
				 for( j=0;j<list.length;j++){
			//$.each(JSON.parse(data).data,function(key,list){
				//console.log(list)
				 
				result+='<li class="list-doctor-li"><a href="doctordetail.html?id='+list[j].id+'&d_id='+list[j].d_id+'">'+ 
             					'<img src='+imgurl+list[j].photo+'>'+
             					'<div class="list-card-name">'+list[j].name+'&nbsp;&nbsp;'+list[j].edu+'</div>'+
             					'<div class="list-card-name">'+list[j].position+'</div>'+
             					'<div class="list-card-adress">'+list[j].department.department+'</div>'+
             					'</a>'+
             				'</li>'
             				}
                      //  console.log(jQuery);
                        jQuery(result).insertBefore('#pullrefresh .mui-scroll .mui-table-view');
             				//$('.tj-doctor-list').html(html);
			//})
			//console.log(data.data.last_page)
		   return dataNum=data.data.last_page;
		 
    
    
    
		}
	}); 
	}
	 listfun(borrowValue);
	 
	
	
	
	
	
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
	 	$('.list-doctor-li').hide();
	 	  
			var loadInterest = '4';
	  		var borrowValue = $(this).val();
	  		 //console.log(borrowValue)
		 //listfun(borrowValue)
		  
          
		 box(borrowValue)
		 
		 
    });
//$('#search-btn').click(function(){
//	//$('.tj-doctor-list').empty()
//	return 
//	var borrowValue = $('#borrowValue').val();
//	//setTimeout("listfun(borrowValue)",1000)
//	console.log('1')
//	 box()
//})
	 
	 
	 
	 
	 
})
