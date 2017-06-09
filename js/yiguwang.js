$(function(){
//	$.ajax({
//		type:"get",
//		url:"/html/header.html",
//		async:true
//	});
	
	$("#header").load("/yiguwang/html/header.html");
	$("#footer").load("/yiguwang/html/footer.html");
});


//*********************************页面滚动顶部显示*********************************
$(window).scroll(function(){
	var $height = $(this).scrollTop();
	
	if($height > 0){
		$("#hedBottom").addClass("header_jquery");
	}else{
		$("#hedBottom").removeClass("header_jquery");
	}
	
//	$("#hedBottom").css({
//						background:"rgba(51, 51, 51, 0.8)",
//						position:"fixed",
//						top:"0",
//						zIndex:"99999"
//	})
})



//********************************首页 index********************************

//index首页轮播flash
$(function(){
	var img = $(".img_flash ul li")
	var len = img.length;
	var outindex = 0;
	var inindex = 1;
	var timer;
	var html = "";
//计时器
	timer = setInterval(time,3000);
//鼠标移入暂停时间移出启动时间
	$("#img_flash").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(time,3000);
	});
//创建原点、原点样式、原点点击事件
	for(var i = 0; i < len; i++){
		html += "<div></div>";
	};
	$(html).appendTo("#circle").addClass("circle").eq(0).addClass("current");
	var circleWidth = $("#circle").children().eq(0).outerWidth(true) + 5;
	$("#circle").css({
						"width":len * circleWidth + "px",
						"left":"50%",
						"marginLeft":"-" + circleWidth * len / 2 + "px",
						"bottom":"20px"
					});
	$("#circle").on("click",".circle",function(){
		if(outindex == $(this).index()){
			return;
		};
		inindex = $(this).index();
		time();
	});	
//时间函数
	function time(){
		$(img).eq(outindex).animate({
										width:"0",height:"0",
										left:"50%",top:"240px"
									},"slow").end()
				.eq(inindex).css({
										"display":"block",
										"width":"0%",
										"height":"0",
										"left":"50%",
										"top":"240px"}).animate({
																	width:"100%",
																	height:"480px",
																	left:"0",
																	top:"0"},"slow");
		$("#circle").children().eq(outindex).removeClass("current").end()
								.eq(inindex).addClass("current");
		outindex = inindex;
		inindex++;
		if(inindex == len){
			inindex = 0;
		}
	}
});
//轮播图上面导航栏效果
$(function(){
	$("#index_select").delegate("li","mousemove",function(){
		$(this).addClass("index_select_jquery").children().eq(1).css({display:"block"});
	});
	$("#index_select").delegate("li","mouseleave",function(){
		$(this).removeClass("index_select_jquery").children().eq(1).css({display:"none"});	
	});
});
//轮播下一块鼠标移入效果
$(function(){
	$("#index_two").delegate("img","mouseenter",function(){
		$(this).stop().animate({marginLeft:"5px"},"100").siblings().stop().animate({marginLeft:"5px"},"100");
	});
	$("#index_two").delegate("img","mouseleave",function(){
		$(this).stop().animate({marginLeft:"0"},"100").siblings().stop().animate({marginLeft:"0"},"100");
	});
})



