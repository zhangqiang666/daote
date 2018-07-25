 $(document).ready(function(){
 	$(".icon-header").hide();
 	$(".head-div").click(function(){
 		$(".icon-header").toggle();
 		//$(".icon-header>ul").toggle();
 		//$(".icon-header>ul>li").toggle();
 	})
 	 
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
 	
 	 
 })
