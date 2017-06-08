$(function(){
//	$.ajax({
//		type:"get",
//		url:"/html/header.html",
//		async:true
//	});
	
	$("#header").load("/yiguwang/html/header.html");
	$("#footer").load("/yiguwang/html/footer.html");
});



//index首页轮播flash

$(function(){
	var img = $(".img_flash ul li")
	var len = img.length;
	var outindex = 0;
	var inindex = 1;
	var timer;
	
	timer = setInterval(time,2000);
	function time(){
		$(img).eq(outindex).animate({width:"0",height:"0"},2000).fadeOut().end()
				.eq(inindex).animate({width:"100%",height:"480px"},1000).fadeIn();
		outindex = inindex;
		inindex++;
		if(inindex == len){
			inindex = 0;
		}
		
		
	}
	
	
	
//	console.log(len)
	
	
});

