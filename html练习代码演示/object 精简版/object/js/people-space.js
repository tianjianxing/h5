$(function(){
	if(!localStorage.getItem("a")){
		localStorage.setItem("a","未登录")
	}
	if(localStorage.getItem("a")=="登录"){
		/*登陆后写的*/
		$(".info1 a").removeAttr("href");
		$(".mail").click(function(){
			alert("对方不接收你的消息并且朝你扔了一只狗")
		})
		$(".follow-ta").click(function(){
			if(!$(".follow-ta").html()||$(".follow-ta").html()=="取消关注"){
				$(this).css({
					"background-image":"url()",
					"display":"flex",
					"align-items":"center"
				})
				.html("已关注")
			}else if($(".follow-ta").html()=="已关注"){
				$(this).html("取消关注")
			}
		})
	}
	$("section>ul li:nth-child(1) a").click(function(){
		$("section>ul li a").css({
			"color":"#333",
			"font-weight":"normal",
			"border-bottom":"3px solid transparent"
		})
		$(this).css({
			"color":"red",
			"font-weight":"bold",
			"border-bottom":"3px solid red"
		})
		$("section .user-space").html("");
		$("section .user-space").append('<div class="user-works">\
				<a href=""><img src="image/zpicon.gif" alt=""></a>\
				<ul>\
					<li>发布作品</li>\
					<li>\
						<a href="family-big-dumpling.html">\
							<h3>辣炒包心菜</h3>\
							<p>简单美味</p>\
						</a>\
					</li>\
					<li>2015-08-14 16:07</li>\
				</ul>\
			</div>\
			<aside>\
				<div>\
					<h3>他的关注<a href="">更多></a></h3>\
					<div class="tade-users">\
						<a href=""><img src="image/t358358_155031929419042.jpg" alt=""></a>\
					</div>\
				</div>\
				<div>\
					<h3>他的菜单<a href="">更多></a></h3>\
					<ul>\
						<li>\
							<a href="">我的文章</a><span>7</span>\
						</li>\
						<li>\
							<a href="">我的菜单</a><span>10</span>\
						</li>\
						<li>\
							<a href="">#最羊气年夜饭#我家年夜饭...</a><span>14</span>\
						</li>\
					</ul>\
				</div>\
			</aside>')
	});
	$("section>ul li:nth-child(1) a").click()
	$("section>ul li:nth-child(2) a").click(function(){
		$("section>ul li a").css({
			"color":"#333",
			"font-weight":"normal",
			"border-bottom":"3px solid transparent"
		});
		$(this).css({
			"color":"red",
			"font-weight":"bold",
			"border-bottom":"3px solid red"
		});
		$("section .user-space").html("");
		$("section .user-space").append('<div class="user-space-box">\
				<div class="user-space-nav">\
					<ul>\
						<li>\
							<a>全部作品</a>\
						</li>\
						<li>\
							<a>他的作品</a>\
						</li>\
						<li>\
							<a>他的菜谱</a>\
						</li>\
					</ul>\
					<form action="">\
						<input type="text" placeholder="菜谱、作品名"><input type="submit" value="">\
					</form>\
				</div>\
				<div class="works">暂时没有作品.....</div>\
			</div>')
	});
	$("section>ul li:nth-child(3) a").click(function(){
		$("section>ul li a").css({
			"color":"#333",
			"font-weight":"normal",
			"border-bottom":"3px solid transparent"
		});
		$(this).css({
			"color":"red",
			"font-weight":"bold",
			"border-bottom":"3px solid red"
		});
		$("section .user-space").html("");
		$("section .user-space").append('<div class="my-task-box">\
				<div class="my-task"><a href="">我的作品</a></div>\
				<div class="my-task-section">暂时没有任务......</div>\
			</div>')
	});
	$("section>ul li:nth-child(4) a").click(function(){
		$("section>ul li a").css({
			"color":"#333",
			"font-weight":"normal",
			"border-bottom":"3px solid transparent"
		});
		$(this).css({
			"color":"red",
			"font-weight":"bold",
			"border-bottom":"3px solid red"
		});
		$("section .user-space").html("");
		$("section .user-space").append('<div class="collect-box">\
				<div class="collect-nav">\
					<a href="">我的收藏</a>\
					<a href="">全部菜单 \
						<div class="glyphicon glyphicon-triangle-bottom"></div>\
					</a>\
					<div class="more">\
						<a href="">他的菜单</a>\
						<a href="">收藏的菜单</a>\
						<a href="">官方菜单</a>\
					</div>\
				</div>\
				<div class="collect-section">暂无数据.....</div>\
			</div>');
		$("section .user-space .collect-box .collect-nav>a:nth-child(2)").on("mouseover",function(){
			$("section .user-space .collect-box .collect-nav .more").show();
			$("section .user-space .collect-box .collect-nav .more").on("mouseout",function(){
				$(this).hide()
			})
		})
	});
	$("section>ul li:nth-child(5) a").click(function(){
		$("section>ul li a").css({
			"color":"#333",
			"font-weight":"normal",
			"border-bottom":"3px solid transparent"
		});
		$(this).css({
			"color":"red",
			"font-weight":"bold",
			"border-bottom":"3px solid red"
		});
		$("section .user-space").html("");
		$("section .user-space").append('<div class="user-like">暂无数据.....</div>')
	});
	$("section>ul li:nth-child(6) a").click(function(){
		$("section>ul li a").css({
			"color":"#333",
			"font-weight":"normal",
			"border-bottom":"3px solid transparent"
		});
		$(this).css({
			"color":"red",
			"font-weight":"bold",
			"border-bottom":"3px solid red"
		});
		$("section .user-space").html("");
		$("section .user-space").append('<div class="text-box">\
				<p>他的测试</p>\
				<div class="user-text">\
					<a href=""><img src="https://s1.c.meishij.net/n/images/jkcs_300.jpg" alt="">\
					</a>\
					<a href=""><img src="https://s1.c.meishij.net/n/images/jkcs_300.jpg" alt=""></a>\
					<a href=""><img src="https://s1.c.meishij.net/n/images/jkcs_300.jpg" alt=""></a>\
					<a href=""><img src="https://s1.c.meishij.net/n/images/jkcs_300.jpg" alt=""></a>\
				</div>')
	});

})