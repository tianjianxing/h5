$(function(){
	if(!localStorage.getItem("a")){
		localStorage.setItem("a","未登录")
	}
	if(localStorage.getItem("a")=="登录"){
		/*登陆后写的*/
		$(".about").removeAttr("href");
		$(".daren").removeAttr("href");
		$(".about").click(function(){
			$(this).html("已关注")
			.css({
				"background-color":"white",
				"color":"#999"
			})
		})
		$(".daren").click(function(){
			alert("达人已申请")/*wdnmd*/
			$(this).html("已申请")
		})
	}
	var swiper = new Swiper('.swiper-container', {
		loop : true,
      	navigation: {
       	 	nextEl: '.swiper-button-next',
        	prevEl: '.swiper-button-prev',
      	},
    });
    $(window).on("scroll",function(){
    	console.log($(document).scrollTop())
    	// console.log($(document).height())
    	console.log($('.good-content').offset().top+$('.good-content').height()-$(window).height()/3*2);
    	if($(document).scrollTop()>=$('.good-content').offset().top+$('.good-content').height()-$(window).height()/3*2){
			$(".good-content").append('<div class="nice-food">\
				<img src="image/a11ff2c8c80affc6dbaa1be7488ca6dd.jpeg" alt="">\
				<span><a href="yellow-cake.html">没有烤箱一样吃烤鸭--电饼铛烤鸭腿</a><i>21浏览 · 0评论 · 0赞</i><a href="people-space.html">籣草児</a></span>\
			</div>\
			<div class="nice-food">\
				<img src="image/a11ff2c8c80affc6dbaa1be7488ca6dd.jpeg" alt="">\
				<span><a href="yellow-cake.html">没有烤箱一样吃烤鸭--电饼铛烤鸭腿</a><i>21浏览 · 0评论 · 0赞</i><a href="people-space.html">籣草児</a></span>\
			</div>\
			<div class="nice-food">\
				<img src="image/a11ff2c8c80affc6dbaa1be7488ca6dd.jpeg" alt="">\
				<span><a href="yellow-cake.html">没有烤箱一样吃烤鸭--电饼铛烤鸭腿</a><i>21浏览 · 0评论 · 0赞</i><a href="people-space.html">籣草児</a></span>\
			</div>')
    	}
    })
})