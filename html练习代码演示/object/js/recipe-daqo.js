$(function(){
	$("section .mom-food-show .aside-left>p:nth-child(2) input:first-child").on("focus",function(){
		$(this).attr("placeholder","")
	}).on("blur",function(){
		$(this).attr("placeholder","请输入您要搜索的食材")
	})
	/*展开 收起*/
	for(var i=0;i<50;i++){
			$("section .mom-food-show .aside-left .all-show-p").before('<dl data-add="dl">\
							<dd>\
								<a>\
									<div><span>应季</span>黄瓜</div>\
									<div>1790</div>\
								</a>\
							</dd>\
						</dl>')
	}
	$("section .mom-food-show .aside-left [data-add='dl']").hide()
	$("section .mom-food-show .aside-left .all-show-p").click(function(){
		$("section .mom-food-show .aside-left [data-add='dl']").show()
		$(this).hide()
		$("section .mom-food-show .aside-left .all-hide-p").show()
	});
	$("section .mom-food-show .aside-left .all-hide-p").click(function(){
		$("section .mom-food-show .aside-left [data-add='dl']").hide()
		$(this).hide()
		$("section .mom-food-show .aside-left .all-show-p").show()
	});
	$(".zxf_pagediv").createPage({
			pageNum: 20,
			current: 6,
			backfun: function(e) {
				//console.log(e);//回调
			}
		});
})