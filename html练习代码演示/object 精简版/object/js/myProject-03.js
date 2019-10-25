$(function(){
	$(document).on("scroll",function(){
		if($(document).scrollTop()>20){
			$(".header-section .header-section-nav").css({"position":"fixed","top":0,"background-color":"#ffffff","width":"100%"});
			$(".header-section .header a").css("color","#000000");
		}else{
			$(".header-section .header-section-nav").css({"position":"relative","background-color":"transparent"});
			$(".header-section .header a").css("color","#ffffff");
			$(".header-section .header .header-nav li a").on("mouseover",function(){
				$(this).css("color","#f45d52");
			})
			$(".header-section .header .header-nav li a").on("mouseout",function(){
				$(this).css("color","#ffffff");
			})
		}
	})
})