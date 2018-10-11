$(function(){
    //console.log("hello world2");
	$width = $(document.body).width();
	console.log($height)
	$width_side = $(".side_list").width();
	
	$(".header a").css({
		width : $width - $width_side
	});
	window.onresize=resize;//当窗口改变宽度时执行此函数
	function resize(){
		console.log(1)
		var winW = $(document.body).width();
		$height = $(document.body).height();
		$(".side_list").css({
			height : $height
		})
	}
  
})  