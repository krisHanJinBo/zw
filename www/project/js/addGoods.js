  
	var sum = 0;
	for(var i=0; i<20;i++){
		$(".shoplist").on("click","button",function(){
			//起点坐标
			var startPoint = {
				x : $(this).offset().left + $(this).width()/2,
				y : $(this).offset().top
			}
			console.log(x,y)
			//终点坐标
			 var endPoint = {
			 	x : $("#shopc").offset().left,
			 	y : $("#shopc").offset().top
			 }
			//最高点 
			var topPoint = {
				x : endPoint.x - 100 ,
				y : endPoint.y - 80
			}
			
			//根据三点坐标确定抛物线的系数
			var a = ((startPoint.y - endPoint.y) * (startPoint.x - topPoint.x) - (startPoint.y - topPoint.y) * (startPoint.x - endPoint.x)) / ((startPoint.x * startPoint.x - endPoint.x * endPoint.x) * (startPoint.x - topPoint.x)-(startPoint.x * startPoint.x - topPoint.x * topPoint.x) * (startPoint.x - endPoint.x));  
					
			var b = ((endPoint.y - startPoint.y) - a * (endPoint.x * endPoint.x - startPoint.x * startPoint.x)) / (endPoint.x - startPoint.x);  
					
			var c = startPoint.y - a * startPoint.x * startPoint.x - b * startPoint.x;
			
			
			//创建商品
			//获取商品起始点坐标
			var x = startPoint.x;
			var y = startPoint.y;
			var good = document.createElement("div");
			good.style.position = "absolute";
			good.style.zIndex=1000000;
			good.style.left = x + "px";
			good.style.top = y +"px";
			document.body.appendChild(good);
			good.style.width = "20px";
			good.style.borderRadius="10px"
			good.style.height = "20px";
			good.style.background = "#ff643c";
			//商品移动  根据抛物线轨迹移动
			var timer = setInterval(function(){
				x = x + 15;
				y = a*x*x + b*x + c;
				good.style.left = x + "px";
				good.style.top = y + "px";
				if( x > endPoint.x ){
					good.remove();
					clearInterval( timer );
					$("#count").html( $("#ct").html() );
				}
			},30)
		})
	}