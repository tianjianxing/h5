$(function(){
	$(document).on("scroll",function(){
		if($(document).scrollTop()>20){
			$(".first-picture .first-picture-header").css({"position":"fixed","top":0,"background-color":"#ffffff","width":"100%"});
			$(".first-picture .header a").css("color","#000000");
		}else{
			$(".first-picture .first-picture-header").css({"position":"relative","background-color":"transparent"});
			$(".first-picture .header a").css("color","#ffffff");
			$(".first-picture .header .header-nav li a").on("mouseover",function(){
				$(this).css("color","#f45d52");
			})
			$(".first-picture .header .header-nav li a").on("mouseout",function(){
				$(this).css("color","#ffffff");
			})
		}
	})
})