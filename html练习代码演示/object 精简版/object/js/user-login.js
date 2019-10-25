$(function(){
	$("section .section-contain>a:nth-child(3)").click(function(){
		if($("section .section-contain>a:nth-child(3)").html() == "更多第三方登录方式 v"){
			$(".others-login-fun").css("height","100px")
			$("section .section-contain>a:nth-child(3)").html("收起 ^")
		}else{
			$(".others-login-fun").css({
				"height":"0px",
				"overflow":"hidden"
			})
			$("section .section-contain>a:nth-child(3)").html("更多第三方登录方式 v")
		}
	})
	$("section .section-contain>a:last-child").click(function(){
		if($("section .section-contain>a:last-child").html() == "还没有账号？免费注册 v"){
			$(".phone-email-login").css({
				"height":"0px",
				"overflow":"hidden"
			});
			$(".all-box").css("height","340px");
			$("section .section-contain>a:last-child").html("已有账号?马上登录 ^");
			$(".section-contain>h3:first-child").html("注册美食杰")
		}else{
			$(".phone-email-login").css({
				"height":"207px",
			})
			$(".all-box").css("height","220px")
			$("section .section-contain>a:last-child").html("还没有账号？免费注册 v");
			$(".section-contain>h3:first-child").html("登录美食杰")
		}
	})
	$(".phone").click(function(){
		$(".enroll-fun a").css({
			"color":"#999",
			"font-weight":"normal"
		});
		$(this).css({
			"color":"#333",
			"font-weight":"bold"
		});
		$(".phone-enroll").css("left","0px");
		$(".last-form").show()
		.css({
			"right":"-325px"
		});
	});
	$(".email").click(function(){
		$(".enroll-fun a").css({
			"color":"#999",
			"font-weight":"normal"
		});
		$(this).css({
			"color":"#333",
			"font-weight":"bold"
		});
		$(".phone-enroll").css("left","-325px");
		$(".last-form").show()
		.css({
			"right":"0px"
		});
	});
	if(!location.href.split("?")[1]){
		location.href+="?f=1";
	}
	if(location.href.split("?")[1] == "f=0"){
		$("section .section-contain>a:last-child").click();
	}
	$("#login").validate({
		submitHandler:function(form){
			if($("[name=userName]").val()==123456&&$("[name=pwd]").val()==123456){
				alert("你真他妈棒！");
				location.href="./index.html";
				$(".error").remove();
				localStorage.setItem("a","登录")
			}else{
				$(".all-box").before('<div class="error1">× 您输入的用户名或者密码有误，请重试。</div>')
			}
		}
	});
	var times
	$(".san-a").click(function(){
		z = 60
		clearInterval(times)
		times = setInterval(function(){
			$(".san-a").html(z--+'秒后重新获得')
			if(z == -1){
				clearInterval(times)
				$(".san-a").html("免费获取验证码")
			}
		},1000)
		
	})
	jQuery.validator.addMethod("myVali", function(value, element) {   
			    var patt = /(^1[3-9]\d{9}$)|(^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)|(^\w{6,8}$)/;
			    return this.optional(element) || (patt.test(value));
			}, "× 您填写的格式不正确");
	$("#phone-enroll").validate({
			
		rules:{
				userName:{
					myVali:true		//使用自定义验证规则
				},
			},
	});
})