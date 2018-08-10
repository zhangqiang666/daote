  $(function(){
  	//模态框
  	  var w = document.documentElement.clientWidth || document.body.clientWidth;
  	console.log(w)
  	if(w>=640){ 
         $("#myModal").modal({
            keyboard: true
        });
       }else{
       	
       }
        //模态框
        //shujujiaohu
       
         
                    
                    
                    
         $.ajax({
        url:"http://www.dianyitai.cn/api/homes",
        type:"post",
        /*xhrFieds:{
        	widthCredentials:true
        },*/
        data:"",
        /*预期服务器端返回的数据类型，假设现在跨域了，就改成jsonp 就可以了 */
        dataType:"json",
        success:function(data){
            console.log(data);
            
            
                    $('.content1').empty();   //清空resText里面的所有内容
                    var html = '';
                    $.each(data.data, function(key, list){
                         
                        
                        html +='';
                      

                    });
                    $('.content1').html(html);             

        }
    })
       
        
        
        
        
        
        
        
        
        
        
    });
    
 