$(function(){
	if(!localStorage.getItem("a")){
		localStorage.setItem("a","未登录")
	}
	if(localStorage.getItem("a")=="登录"){
		/*登陆后写的*/
	}
	/*header的搜索*/
	$(".header-search-box").on("focus","[type='text']",function(){
		$(this).attr("placeholder","")
	}).on("blur","[type='text']",function(){
		$(this).attr("placeholder","请输入菜谱/食材/菜单/作者")
	})
	/*页面底部的搜索框*/
	$(".main-search-box").on("mouseover",function(){
		$(this).css({
			"bottom":"0",
			"padding-top":"6px"
		})
		$(".back-to-top").css("bottom","12px")
	}).on("mouseout",function(){
		$(this).css({
			"bottom":"-50px",
			"padding-top":"10px"
		})
		$(".back-to-top").css("bottom","72px")
	})
	/*点击，搜索框切换*/
	$(".main-search-show").click(function(){			
		$(".main-search-box").off("mouseout");
		$(this).hide()
		$(".main-search-hide").show()
	})
	$(".main-search-hide").click(function(){			
		$(".main-search-box").on("mouseout",function(){
			$(this).css({
				"bottom":"-50px",
				"padding-top":"10px"
			})
			$(".back-to-top").css("bottom","72px")
		})
		$(".main-search-box").mouseout()
		$(this).hide()
		$(".main-search-show").show()
	})
	$(document).on("scroll",function(){
		if($(document).scrollTop()>=400){
			$(".back-to-top").fadeIn();
		}else if($(document).scrollTop()<400){
			$(".back-to-top").fadeOut();
		}
	})
	/*food-show 轮播图*/
	var myPlugin = {
		    name: 'debugger',
		    params: {
		        debugger: false,
		    },
  		};
  	Swiper.use(myPlugin);
    // Init Swiper
    var swiper = new Swiper('.section-contain', {
		    pagination: {
		      el: '.swiper-pagination',
		      clickable: true,
		    },
		    autoplay: {
			    delay: 10000,
			    stopOnLastSlide: false,
			    disableOnInteraction: true,
			},
		    navigation: {
		      nextEl: '.swiper-button-next',
		      prevEl: '.swiper-button-prev',
		    },
		    // Enable debugger
		    debugger: true,
		    loop:true,
    	});
    /*第二个*/
    var swiper_popular = new Swiper('.popular-food', {
		    pagination: {
		      el: '.swiper-pagination',
		      clickable: true,
		    },
		    autoplay: {
			    delay: 5000,
			    stopOnLastSlide: false,
			    disableOnInteraction: true,
			},
		    navigation: {
		      nextEl: '.swiper-button-next',
		      prevEl: '.swiper-button-prev',
		    },
		    // Enable debugger
		    debugger: true,
		    loop:true,
    	});
    /*data-food div 的显示隐藏*/
    $(".food-data li a").on("mouseover",function(){
    	$(".food-data div").hide();
    	$(".food-data li a").css({
    		"background-color":"white",
    		"color":"#666"
    	})
    	$(this).css({
    		"background-color":"red",
    		"color":"white"
    	})
    	var con = "."+$(this).attr("data-food")
    	$(con).show()
    })
    /*健康新闻*/
    $(".heathly-news .left-news ul").on("mouseenter","li",function(){
    	$(this).parent().find("li").css({
    		"height":"50px",
    	})
    	$(this).parent().find("a").css({
    		"font-size":"14px",
    		"color":"#666",
    		"font-weight":"normal"
    	})
    	$(this).parent().find("img").hide()
    	$(this).css("height","60px")
    	.find("a").css({
    		"font-size":"18px",
    		"color":"#000",
    		"font-weight":"bold"
    	})
    	$(this).find("img").show()
    	$(this).on("mouseenter","a",function(){
	     	$(this).css({
	     		"color":"red"
	     	})
	     })
    	.on("mouseout","a",function(){
    		$(this).css({
	     		"color":"#000"
	     	})
    	})
    });
    $("header .header-contain .header-search-box [type=button]").click(function(){
		location.href="myProject-01.html";
	}) 
})