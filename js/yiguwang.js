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
			weight : 1
		};
		$.cookie.json = true; // 自动在对象与字符串之间解析转换
		var _products = $.cookie("products") || [];// 获取 cookie 中保存的购物车信息
		//判断是否以选购当前商品
		var _index = indexOf(product.name,_products);
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



//***************************************注册页面验证***************************************
$(function(){
//		手机号码验证
	$("#phone").blur(function(){
		var phoneReg =/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
		var phoneValue = $("#phone").val();
		if(phoneReg.test(phoneValue)){
			$(".phone_reg").text("手机号码正确");
		}else{
			$(".phone_reg").text("请输入正确的手机号码");
		};
	});
//		密码验证
	$("#password").focus(function(){
		$(".password_reg").text("请输入6-16位由字母、数字、下划线组成的有效字符，并以字母开头");
	})
	$("#password").blur(function(){
		var passwordReg = /^[a-zA-Z]\w{5,15}$/;
		var passwordValue = $(this).val();
		if(passwordReg.test(passwordValue)){
			$(".password_reg").text("正确")
			return;
		}else{
			$(".password_reg").text("格式不正确")
		};
	})
	$("#password_two").focus(function(){
		$(".password_regTwo").text("请再次输入密码");
	})
	$("#password_two").blur(function(){
		var passwordValue = $("#password").val();
		if(passwordValue == $(this).val() && $(this).val() != ""){
			$(".password_regTwo").text("一致");
		}else{
			$(".password_regTwo").text("两次密码输入不一致，请重新输入");
		};
	})
//	生成4位验证码
	function change(){
	    code=$("#code");
	  	// 验证码组成库
	  	var arrays=new Array( 
	       	'1','2','3','4','5','6','7','8','9','0',
	       	'a','b','c','d','e','f','g','h','i','j', 
	       	'k','l','m','n','o','p','q','r','s','t', 
	       	'u','v','w','x','y','z', 
	       	'A','B','C','D','E','F','G','H','I','J', 
	      	'K','L','M','N','O','P','Q','R','S','T', 
	       	'U','V','W','X','Y','Z'        
	    ); 
	    codes='';// 重新初始化验证码
	   	for(var i = 0; i<4; i++){
	   	// 随机获取一个数组的下标
	  	 var r = parseInt(Math.random()*arrays.length);
	  	 codes += arrays[r];
	 	}
	  	// 验证码添加到input里
	    code.val(codes);
	}
	change();
	code.click(change);
	//单击验证
	$("#yanzhengma").focus(function(){
	   	var inputCode = $(this).val().toUpperCase(); //取得输入的验证码并转化为大写 
	  	if(inputCode.length == 0) { //若输入的验证码长度为0
	   		$(".yanzhengma").text("请输入验证码！"); //则弹出请输入验证码
	  	}
	})
	$("#yanzhengma").blur(function(){
		var inputCode = $(this).val().toUpperCase(); //取得输入的验证码并转化为大写 
  		if(inputCode!=codes.toUpperCase()) { //若输入的验证码与产生的验证码不一致时
   		$(".yanzhengma").text("验证码输入错误!请重新输入"); //则弹出验证码输入错误
   		change();//刷新验证码
   		$(this).val("");//清空文本框
	  	}else { //输入正确时
	   		$(".yanzhengma").text("正确"); //弹出^-^
	  	};
  	})
//	点击完成保存至cookie中
	$.cookie.json = true;
	$("#btn").click(function(){
		if($(".phone_reg").text() == "手机号码正确" && $(".password_regTwo").text() == "一致" && $(".password_reg").text() == "正确" && $(".password_regTwo").text() == "一致" && $("#register_checkbox").prop("checked") == true){
			var data = {
					phone : $("#phone").val(),
					_password : $("#password").val()
				}
//			console.log(data)
			var _products = $.cookie("products_reg") || [];
			var _index = indexOf(data.phone,_products)
			if(_index === -1){
				_products.push(data);
				alert("注册成功");
			}else{
				alert("用户名已存在");
			};
			//保存至cookie中
			$.cookie("products_reg",_products,{expires:7});
			
			console.log($.cookie("products_reg"))
			
			function indexOf(id,products_reg){
	//			console.log(id,products_reg)
				for(var i = 0, len = products_reg.length; i < len; i++){
					if(id == products_reg[i].phone)
					return i;
				}
					return -1;
			}
		}else{
			alert("检验手机号、密码、验证码是否正确，并勾选服务协议")
		}
	})
	
})
//***************************************登录页面验证***************************************
$(function(){
	$.cookie.json = true;
	var _username = $.cookie("username");
	console.log(_username);
	if(_username != null){
		$("#loginPhone").val(_username);
		$("#login_checkbox").prop("checked",true);
	}else{
		$("#login_checkbox").prop("checked",false);
	}
	$("#login_btn").click(function(){
		var login_cookie = $.cookie("products_reg") || [];
		var login_phone = $("#loginPhone").val();
		var login_password = $("#loginPassword").val();
		var _index = indexOf(login_phone,login_cookie);
		if(_index == -1){
			alert("用户名不存在");
		}else{
			if(login_phone != login_cookie[_index].phone || login_password != login_cookie[_index]._password || $("#login_code").val() != $("#code").val()){
				alert("用户名或密码、验证码(区分大小写)错误");
			}else{
				alert("登录成功");
				if($("#login_checkbox").prop("checked")){
					$.cookie("username",login_phone,{expires:7});
				}else{
					$.cookie("username",login_phone,{expires:-1});
				}
				window.open("/yiguwang/index.html");
			}
		}
	})
	
	
	
	function indexOf(phone,products){
		for(var i = 0, len = products.length; i < len; i++){
			if(phone == products[i].phone){
				return i;
			}
				return -1;
		}
	}
})


