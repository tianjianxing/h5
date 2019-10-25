$(function(){
	if(localStorage.getItem("a")=="登录"){
		/*登陆后写的*/
		$("#shoucang").removeAttr("href");
		$("#shoucang").click(function(){
			alert("已收藏")
		});
		$(".btn").click(function(){
			if($("textarea").val().length<=7){
				alert("评论不可少于7个字")
			}else{
				alert("提交成功，请等待审核后显示~")
			}
		});
	}
	var randomTalk = $(".randomTalk")
	var reqSlove = $(".reqSlove")
	var textarea = $("textarea")
	var btn = $(".btn")
	randomTalk.click(function(){
		textarea.html("[随意吐槽]: ")
		textarea.focus()
		randomTalk.css({
			"background-color": '#ff3232',
			"color": 'white'
		});
		reqSlove.css({
			"background-color": '#eee',
			"color": '#000'
		});
	})
	reqSlove.click(function(){
		textarea.html("[提问求解]: ")
		textarea.focus()
		reqSlove.css({
			"background-color": '#ff3232',
			"color": 'white'
		});
		randomTalk.css({
			"background-color": '#eee',
			"color": '#000'
		});
	})
	if(localStorage.getItem("a")=="未登录"){
		btn.click(function(){
			alert("提交失败，请登录")
		})
	}
	
})