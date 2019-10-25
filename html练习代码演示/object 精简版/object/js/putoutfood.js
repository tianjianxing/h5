$(function(){
	/*获得交点时显示*/
	$(".first-row1-box input").on("focus",function(){
		$(".first-row1-box span").fadeIn();
		$(".first-row1-box div").fadeIn()
	}).on("blur",function(){
		$(".first-row1-box span").fadeOut()
		$(".first-row1-box div").fadeOut()
	});
	$("section .section-contain1 .row1-box ul li dl dd span").click(function(){
		$(this).parent().parent().find("dt").html($(this).html());
		$(this).parent().hide();
	});
	$("section .section-contain1 .row1-box ul li").on("mouseover",function(){
		$(this).find("dd").show();
	});
	/*主料添加删除*/
	$(".add-zhu").click(function(){
		$($(".zhuliao .yizu-input")[0]).find(".del-input").show()
		$(".zhuliao").append('<div class="yizu-input">\
					<input type="text" placeholder="请填写主料名称">\
					<input type="text" placeholder="请填写用量"><span class="del-input"></span>\
				</div>');
		$(".zhuliao .del-input").click(function(){
			if($(".zhuliao .yizu-input input").length==4){
				$(this).parent().remove()
				$($(".zhuliao .yizu-input")[0]).find(".del-input").hide()
			}else{
				$(this).parent().remove();
			}
		});
	});
	/*判断是否还剩一个*/
	$(".zhuliao .del-input").click(function(){
		console.log("a")
		if($(".zhuliao .yizu-input input").length==4){
			$(this).parent().remove()
			$($(".zhuliao .yizu-input")[0]).find(".del-input").hide()
		}else{
			$(this).parent().remove();
		}
	});
	/*辅料添加删除*/
	$(".add-fu").click(function(){
		$(".fuliao").append('<div class="yizu-input">\
					<input type="text" placeholder="请填写主料名称">\
					<input type="text" placeholder="请填写用量"><span class="del-input"></span>\
				</div>');
		$(".fuliao .del-input").click(function(){
			$(this).parent().remove()
		});
	});
	$(".fuliao .del-input").click(function(){
		$(this).parent().remove()
	});
	/*第三块的*/
	$(".all-body").on("click",".more-buzhou",function(){
		$(this).parent().html('<div class="shicai">\
								<p class="cao">此步骤所用食材：</p>\
								<div>请选择食材</div>\
								<div class="ycd">\
									<span class="t">此步骤所用食材：</span>\
									<div class="c">\
										<dl class="z1 clearfix">\
											<dt class="zl">\
												<span class="s1">主料</span>\
												<span class="s2">步骤用量（可修改）</span>\
											</dt>\
											<dd class="dd1 checked">\
												<span class="cb"></span>\
												<div class="d1">\
													<input type="text" value>\
												</div>\
												<div class="d2">\
													<input type="text" value="">\
												</div>\
											</dd>\
											<dd class="dd2">\
												<a class="addinstep">+ 增加一行</a>\
											</dd>\
										</dl>\
										<dl class="f1 clearfix">\
											<dt class="fl">\
												<span class="s1">辅料</span>\
												<span class="s2">步骤用量（可修改）</span>\
											</dt>\
											<dd class="dd2">\
												<a class="addinstep">+ 增加一行</a>\
											</dd>\
										</dl>\
									</div>\
								</div>\
							</div>\
							<p>此步骤所用时间：</p>\
							<input type="text">\
							分钟')
	});
	$(".all-body").on("click",".add-yibu div",function(){
		$(this).parent().before('<div class="buzhou-box">\
					<div class="number">2</div>\
					<div class="file-box">\
						<img src="image/step_result_img.gif" alt="">\
						<input type="file">\
					</div>\
					<div class="textarea-box">\
						<textarea name="" id="" cols="30" rows="10" placeholder="请填写步骤描述"></textarea>\
						<!-- 块中块 -->\
						<div class="more-buzhou-box">\
							<!-- 贼几把麻烦的地方 -->\
							<div class="more-buzhou">\
								更多步骤细节（选填） >\
							</div>\
						</div>\
					</div>\
					<aside>\
						<div class="move-up"></div>\
						<div class="move-down"></div>\
						<div class="add-step"></div>\
						<div class="del-step"></div>\
					</aside>\
				</div>');
		$(".number").each(function(i){
			$(this).html(i+1+".")
		});
	});
	$(".all-body").on("click",".del-step",function(){
		var lg = $(".buzhou-box").length
		if(lg==1){
			alert("大师，菜谱一个步骤都没有！叫我等如何领悟啊！")
		}else{
			$($(".buzhou-box")[lg-1]).remove()
		};
	});
	$(".all-body").on("click",".add-step",function(){
		$(this).parent().parent().after('<div class="buzhou-box">\
					<div class="number">2</div>\
					<div class="file-box">\
						<img src="image/step_result_img.gif" alt="">\
						<input type="file">\
					</div>\
					<div class="textarea-box">\
						<textarea name="" id="" cols="30" rows="10" placeholder="请填写步骤描述"></textarea>\
						<!-- 块中块 -->\
						<div class="more-buzhou-box">\
							<!-- 贼几把麻烦的地方 -->\
							<div class="more-buzhou">\
								更多步骤细节（选填） >\
							</div>\
						</div>\
					</div>\
					<aside>\
						<div class="move-up"></div>\
						<div class="move-down"></div>\
						<div class="add-step"></div>\
						<div class="del-step"></div>\
					</aside>\
				</div>');
		$(".number").each(function(i){
			$(this).html(i+1+".")
		});
	});
	$(".submit-box:first-child").click(function(){
		alert("保存成功")
	})
	$(".submit-box:last-child").click(function(){
		alert("正在提交")
	})
	$("body").on("click",".get-out",function(){
		location.href="user-login.html"
	})
})