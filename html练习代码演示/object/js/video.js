$(function(){
	$("section .section-contain video").on("canplaythrough",function(){
		var x=parseInt($("section .section-contain video")[0].duration)
		for(var i=0;i<20;i++){
			$("section .section-contain .about-video ul").append('<li>\
						<a href="./video.html">\
							<img src="image/20181105110641_22213.jpg" alt="">\
							<span>\
								<b>黑糖姜茶的做法</b>\
								<span>0:'+x+'</span>\
							</span>\
						</a>\
					</li>');
		}
	});
	$("section .section-contain video").on("ended",function(){
		$("section .section-contain .video-shadow").show()
	}).on("play",function(){
		$("section .section-contain .video-shadow").css("display","none");
	})
	$("section .section-contain .video-shadow").click(function(){
		$("section .section-contain video").play()
	})
})