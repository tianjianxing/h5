$(function(){
	$(document).on("scroll",function(){
		if($(document).scrollTop()>=48){
			$(".search-box-hover").css({
				"position":"fixed","left":272,"top":40,"box-shadow":"0px 0px 5px 5px #dbdbdb"
			});
			$(".search-box-hover img").fadeIn();
		}else{
			$(".search-box-hover").css({
				"position":"fixed","left":272,"top":100,"box-shadow":"0px 0px 0px 0px"
			});
			$(".search-box-hover img").fadeOut();
		}
	})

	$(".craft-list-one-box a").on("click",function(event){
		event.preventDefault();
		var that = $(this).text();
		$("div .craft-list-up-span1").css("top",50);
		$("div .craft-list-up-span3").css("top",65);
		$(".craft-list-tips").show();
		$(".craft-list-tips-first-button").show();
		$(".craft-list-tips-first-button").html(that+" &times;");
	})
	$(".craft-list-two-box a").on("click",function(event){
		event.preventDefault();
		var that = $(this).text();
		$("div .craft-list-up-span1").css("top",50);
		$("div .craft-list-up-span3").css("top",65);
		$(".craft-list-tips").show();
		$(".craft-list-tips-second-button").show();
		$(".craft-list-tips-second-button").html(that+" &times;");
	})
	$(".craft-list-three-box a").on("click",function(event){
		event.preventDefault();
		var that = $(this).text();
		$("div .craft-list-up-span1").css("top",50);
		$("div .craft-list-up-span3").css("top",65);
		$(".craft-list-tips").show();
		$(".craft-list-tips-third-button").show();
		$(".craft-list-tips-third-button").html(that+" &times;");
	})
	$(".craft-list-four-box a").on("click",function(event){
		event.preventDefault();
		var that = $(this).text();
		$("div .craft-list-up-span1").css("top",50);
		$("div .craft-list-up-span3").css("top",65);
		$(".craft-list-tips").show();
		$(".craft-list-tips-four-button").show();
		$(".craft-list-tips-four-button").html(that+" &times;");
	})

	$(".craft-list-tips-first-button").on("click",function(){
		$("div .craft-list-up-span1").css("top",50);
		$("div .craft-list-up-span3").css("top",65);
		$(this).css("display","none");
	})
	$(".craft-list-tips-second-button").on("click",function(){
		$("div .craft-list-up-span1").css("top",50);
		$("div .craft-list-up-span3").css("top",65);
		$(this).css("display","none");
	})
	$(".craft-list-tips-third-button").on("click",function(){
		$("div .craft-list-up-span1").css("top",50);
		$("div .craft-list-up-span3").css("top",65);
		$(this).css("display","none");
	})
	$(".craft-list-tips-four-button").on("click",function(){
		$("div .craft-list-up-span1").css("top",50);
		$("div .craft-list-up-span3").css("top",65);
		$(this).css("display","none");
	})

	$(".craft-list-tips button").on("click",function(){
		if($(".craft-list-tips-first-button").css("display")=="none" && $(".craft-list-tips-second-button").css("display")=="none"
			&& $(".craft-list-tips-third-button").css("display")=="none" && $(".craft-list-tips-four-button").css("display")=="none"){
		$("div .craft-list-up-span1").css("top",10);
		$("div .craft-list-up-span3").css("top",25);
		$(".craft-list-tips").hide();
		}
	})

	$(".craft-list-tips a").on("click",function(){
		$("div .craft-list-up-span1").css("top",10);
		$("div .craft-list-up-span3").css("top",25);
		$(".craft-list-tips").hide();
	})

	$(".craft-list-all-up").on("click",function(){
		$(".craft-list-all-up").hide();
		$(".craft-list-all-down").show();
		$(".craft-list-all-box").slideUp();
	})
	$(".craft-list-all-down").on("click",function(){
		$(".craft-list-all-down").hide();
		$(".craft-list-all-up").show();
		$(".craft-list-all-box").slideDown();
	})
	
	$(".craft-list-up-span3").on("click",function(){
		$(".craft-list-one-box").animate({"height":90},500,function(){
			$(".craft-list-one-box").slideDown();
		})
		$(this).hide();
		$("div .craft-list-up-span1").show().css({
			"width":50,"height":28
		});
	})
	$(".craft-list-up-span4").on("click",function(){
		$(".craft-list-two-box").animate({"height":90},500,function(){
			$(".craft-list-two-box").slideDown();
		})
		$(this).hide();
		$("div .craft-list-up-span2").show().css({
			"width":50,"height":28
		});
	})
	$(".craft-list-up-span1").on("click",function(){
		$(".craft-list-one-box").animate({"height":30},500,function(){
		})
		$(this).hide();
		$(".craft-list-up-span3").show();
	})
	$(".craft-list-up-span2").on("click",function(){
		$(".craft-list-two-box").animate({"height":30},500,function(){
		})
		$(this).hide();
		$(".craft-list-up-span4").show();
	})

	$(".footer-interesting-img").on("mouseover",function(){
		$(this).animate({"bottom":90},500,function(){
		})
	})
	$(".footer-interesting-img").on("mouseout",function(){
		$(this).animate({"bottom":45},500,function(){
		})
	})
})