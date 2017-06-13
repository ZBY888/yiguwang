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
		html += "<p></p>";
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
	$("#index_two").delegate(".index_twobj","mouseenter",function(){
		$(this).stop().animate({marginLeft:"5px"},"100").children().children("p").stop().animate({left:"13px"});
	});
	$("#index_two").delegate(".index_twobj","mouseleave",function(){
		$(this).stop().animate({marginLeft:"0"},"100").children().children("p").stop().animate({left:"10px"});
	});
})
//商品展示、本周爆品鼠标移入效果
$(function(){
	$("#index_bp").delegate("img","mouseenter",function(){
		$(this).stop().animate({marginLeft:"5px"},"100");
	});
	$("#index_bp").delegate("img","mouseleave",function(){
		$(this).stop().animate({marginLeft:"0"},"100");
	});
})
//商品展示、本周爆品图片轮播效果
$(function(){
	var img = $(".right_bottomlft li");
	var bg = $(".right_bottomlftrit ul li");
	var len = img.length;
	var outindex = 0;
	var inindex = 1;
	var time;
	time = setInterval(timer,3000);
	$(".right_bottomlft li").hover(function(){
		clearInterval(time);
	},function(){
		time = setInterval(timer,3000);
	});
	$(".right_bottomlftrit ul li").hover(function(){
		clearInterval(time);
		if(outindex == $(this).index()){
			return;
		}else{
			inindex = $(this).index();
			timer();
		};
	},function(){
		time = setInterval(timer,3000);
	});
//计时器
	function timer(){
		$(img).eq(outindex).fadeOut();
		$(img).eq(inindex).fadeIn();
		$(bg).eq(inindex).addClass("right_bottomlftrit_jquery");
		$(bg).eq(outindex).removeClass("right_bottomlftrit_jquery");
		outindex = inindex;
		inindex++;
		if(inindex == len){
			inindex = 0;
		};
	};
});

$(function(){
//水果蔬菜效果
	$(".index_model1").delegate(".left_top","mouseenter",function(){
		$(this).css({"background":"url(/yiguwang/images/index/index-content-two.png) no-repeat -386px 0"})
	}).delegate(".left_top","mouseleave",function(){
		$(this).css({"background":"url(/yiguwang/images/index/index-content-two.png) no-repeat 0 0"})
	}).delegate(".first_rit","mouseenter",function(){
		$(this).children("h4").children().stop().animate({"bottom":"0"},300);
	}).delegate(".first_rit","mouseleave",function(){
		$(this).children("h4").children().stop().animate({"bottom":"-35px"},300);
	}).delegate(".first_lft img","mouseenter",function(){
		$(this).stop().animate({"paddingLeft":"5px"},300);
	}).delegate(".first_lft img","mouseleave",function(){
		$(this).stop().animate({"paddingLeft":"0"},300);
	}).delegate(".first_rit>a","mouseenter",function(){
		$(this).stop().animate({"paddingLeft":"10px"},300);
	}).delegate(".first_rit>a","mouseleave",function(){
		$(this).stop().animate({"paddingLeft":"0"},300);
	}).delegate(".first_rit>p","mouseenter",function(){
		$(this).stop().animate({"paddingLeft":"10px"},300).children().addClass("fruit_vegetable_jquery");
	}).delegate(".first_rit>p","mouseleave",function(){
		$(this).stop().animate({"paddingLeft":"0"},300).children().removeClass("fruit_vegetable_jquery");
	});
//肉禽蛋奶
	$(".index_model2").delegate(".left_top","mouseenter",function(){
		$(this).css({"background":"url(/yiguwang/images/index/index-content-two.png) no-repeat -386px -92px"})
	}).delegate(".left_top","mouseleave",function(){
		$(this).css({"background":"url(/yiguwang/images/index/index-content-two.png) no-repeat 0 -92px"})
	}).delegate(".first_rit","mouseenter",function(){
		$(this).children("h4").children().stop().animate({"bottom":"0"},300);
	}).delegate(".first_rit","mouseleave",function(){
		$(this).children("h4").children().stop().animate({"bottom":"-35px"},300);
	}).delegate(".first_rit>p","mouseenter",function(){
		$(this).children().addClass("fruit_vegetable_jquery_color");
	}).delegate(".first_rit>p","mouseleave",function(){
		$(this).children().removeClass("fruit_vegetable_jquery_color");
	}).delegate(".right_rit li","mouseenter",function(){
		$(this).children().stop().animate({"paddingLeft":"5px"},300);
	}).delegate(".right_rit li","mouseleave",function(){
		$(this).children().stop().animate({"paddingLeft":"0"},300);
	})
//零食饮酒
	$(".index_model3").delegate(".meat_right","mouseenter",function(){
		$(this).children().children().stop().animate({paddingLeft:"5px"},300)
	}).delegate(".meat_right","mouseleave",function(){
		$(this).children().children().stop().animate({paddingLeft:"0"},300)
	}).delegate(".right_rit li","mouseenter",function(){
		$(this).children().children().stop().animate({paddingLeft:"5px"},300)
	}).delegate(".right_rit li","mouseleave",function(){
		$(this).children().children().stop().animate({paddingLeft:"0"},300)
	}).delegate(".first_rit a","mouseenter",function(){
		$(this).children().stop().animate({paddingLeft:"10px"},300)
	}).delegate(".first_rit a","mouseleave",function(){
		$(this).children().stop().animate({paddingLeft:"0"},300)
	}).delegate(".first_rit","mouseenter",function(){
		$(this).children("h4").children().stop().animate({bottom:"0"},300)
	}).delegate(".first_rit","mouseleave",function(){
		$(this).children("h4").children().stop().animate({bottom:"-35px"},300);
	}).delegate(".first_rit>p","mouseenter",function(){
		$(this).stop().animate({"paddingLeft":"10px"},300).children().addClass("fruit_vegetable_jquery");
	}).delegate(".first_rit>p","mouseleave",function(){
		$(this).stop().animate({"paddingLeft":"0"},300).children().removeClass("fruit_vegetable_jquery");
	});
});



//**************************************商品详情**************************************
$(function(){
//放大镜上导航栏
	$(".mag_nav li:first a").css({marginLeft:"0"});
	$(".mag_nav li:last a").css({color:"#9fbe06"});
	$(".mag_nav li a").hover(function(){
		$(this).addClass("mag_navJquery");
	},function(){
		$(this).removeClass("mag_navJquery");
	});
//放大镜图片切换
	$(".shopping_magnifier_lt ul").delegate("li","mouseenter",function(){
		var _src = $(this).children().attr("src");
		var _src1 = $(this).parent().siblings("img");
		$(_src1).attr({src:_src,"data-zoom-image":_src});
	});
//点击+ - 对数量进行加减
	var _value;
	$("#number dl dd span:first").click(function(){
		_value = $("#number input").val();
		$("#number input").val(++_value);
	});
	$("#number dl dd span:last").click(function(){
		_value = $("#number input").val();
		if(_value < 2){
			alert("购买数量不能小于1");
			_value = 1;
			return;
		}
		$("#number input").val(--_value);
	});
//点击加入购物车保存至cookie	
	$("#shopping_btn a:last").click(function(){
		//获取当前点击加入购物车的对象
		var $row = $("#shopping_magnifier");
		//将商品信息保存至对products象中
		var product = {
			src : $row.children(".shopping_magnifier_lt").children("ul").children("li").eq(0).children("img").attr("src"),
			name : $row.children(".shopping_guide").children("h3").children("b").text(),
			price : $("#price").text(),
			amount : $("#number input").val(),
			weight : "1KG",
			zongprice : parseFloat($("#price").children().text()) * Math.floor($("#number input").val()),
			zongliang : Math.floor($("#number input").val()) * parseFloat($("#_weight").children("a").eq(0).text())
		}
		$.cookie.json = true; // 自动在对象与字符串之间解析转换
		var _products = $.cookie("products") || [];// 获取 cookie 中保存的购物车信息
		//判断是否以选购当前商品
		var _index = indexOf(product.name,_products);
		console.log(product.zongliang);
		if(_index === -1){//没有选购
			_products.push(product);
		}else{//已选购
			_products[_index].amount =Math.floor(_products[_index].amount) + Math.floor(product.amount);
		};
		//将购物车数组保存至cookie中
		$.cookie("products",_products,{expires:6});
		
		function indexOf(id,products){
//			console.log(id,products)
			for(var i = 0, len = products.length; i < len; i++){
				if(id == products[i].name)
				return i;
			}
				return -1;
			
		}
		console.log($.cookie("products"));
	})
})



