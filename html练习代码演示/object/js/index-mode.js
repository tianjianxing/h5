$(function(){
	if(!localStorage.getItem("a")){
		localStorage.setItem("a","未登录")
		$(".log-on").css("display","block")
	}
	if(localStorage.getItem("a")=="登录"){
		/*登陆后写的*/
		$(".log-on").after('<ul class="log-in">\
				<li class="user-infos">\
					<a href=""><img src="image/tx2_4.png" alt=""></a>\
					<a href="">杰米1456465465</a>\
					<ul class="user-power">\
						<li>\
							<img src="image/QQ图片20190907131359.png" alt="" class="V">\
							<a href=""><img src="image/tx2_4.png" alt=""></a>\
							<a href="">杰米1456465465</a>\
							<span>新人</span>\
						</li>\
						<li>\
							<a href="putoutfood.html">发布菜谱</a>\
						</li>\
						<li class="release-draw">\
							<a>发布图文(400积分)</a>\
						</li>\
						<li>\
							<a href="">我的美食空间</a>\
						</li>\
						<li>\
							<a href="">我的积分成长</a>\
						</li>\
						<li>\
							<a class="get-out">退出登录</a>\
						</li>\
					</ul>\
				</li>\
				<li><a href="">收藏</a></li>\
				<li><a href="">消息</a></li>\
				<li class="Sign-in"><img src="image/Snipaste_2019-09-06_17-57-39.png" alt=""><a href="">签到</a></li>\
			</ul>')
		$(".log-on").hide()		
		$(".user-infos").mouseover(function(){
			$(".user-power").css("display","block")
		}).mouseout(function(){
			$(".user-power").css("display","none")
		})
		$(".Sign-in").mouseover(function(){
			$(".Sign-in img").css("display","block")
		}).mouseout(function(){
			$(".Sign-in img").css("display","none")
		})
		$(".get-out").click(function(){
			$(".log-in").css("display","none")
			$(".log-on").show()
			localStorage.setItem("a","未登录")
		})
		// 弹出框
		$(".release-draw").click(function(){
			$("header").after('<div class="high-ligth">\
		<div class="drow">\
			<h3>发布图文</h3>\
			<h4>任务标题：发布图文</h4>\
			<h5>领取任务消耗积分：0您的现有积分：236完成任务奖励：400积分</h5>\
			<div class="call-fun">\
				确认联系方式\
			</div>\
			<div class="juti-call">\
				<div>:<span>*</span>姓名： <input type="text"></div>\
				<div>:<span>*</span>电话： <input type="text"></div>\
				<div>:<span>*</span>微信号： <input type="text"></div>\
				<div>:<span>*</span>QQ： <input type="text"></div>\
				<div>:<span>*</span>详细地址： <input type="text" class="juti-place"></div>\
			</div>\
			<div class="cancle-send">\
				<input type="submit" value="取消" class="canbtn">\
				<input type="submit" value="提交" class="sendbtn">\
			</div>\
		</div>\
	</div>')
			$(".high-ligth").show()
			$(".canbtn").click(function(){
				$(".high-ligth").hide()
			})
			$(".sendbtn").click(function(){
				alert("我太难了")
			})
		})
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
	});
	$("nav ul li:nth-child(5)").find("a").attr("href","index-mode02.html")
	$("nav ul li:nth-child(8)").find("a").attr("href","index-mode01.html");
	$("header .header-contain .header-search-box [type=button]").click(function(){
		location.href="myProject-01.html";
	})
})