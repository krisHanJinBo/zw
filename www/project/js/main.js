	$("#right").on("mouseenter","a",function(){
		$(this).find("p").stop().animate({"left":-100},200)
		$(this).find("p").show(200)
		$(this).find("#code").stop().animate({"left":-520,},200)
		$(this).find("#code").show(200)
	})
	$("#right").on("mouseleave","a",function(){
		$(this).find("p").stop().animate({"left":-120},200)
		$(this).find("p").hide(100)
		$(this).find("#code").stop().animate({"left":-540},200)
		$(this).find("#code").hide(100)
	})
	$("#topIn").on("mouseenter",".menu",function(){
		$(this).css({"background":"white","border-buttom":"white 1px solid"})
	    $(this).find("div").slideDown(100)
	})
	$("#topIn").on("mouseleave",".menu",function(){
		$(this).css({"background":"#f2f2f2","border-buttom":"1px solid darkgray"})
	     $(this).find("div").slideUp(100)
	})
	$("#uu").on("mouseenter","li",function(){
	    $(this).stop().animate({"width": $(this).val()},500)
	})
	$("#uu").on("mouseleave","li",function(){
	    $(this).stop().animate({"width":34},500)
	})
	$("#ttt").mouseleave(function(){
	    $(this).css("background-image","url(img/home_overseas.gif")
	})
	$("#ttt").mouseenter(function(){
	     $(this).css("background-image","url(img/home_overseas_current.gif")
	})
	$("#a2").mouseenter(function(){
		$(this).css("background","#00647f")
		$("#market").slideDown(200)
	})
	$("#a2").mouseleave(function(){
		$(this).css("background","#00c8ff")
		$("#market").slideUp(200)
	})
	
	var index=0;
	var timer=null;
	 timer= setInterval(autoPlay,2000)
	function  autoPlay(){
		index++
		if(index>=5){
			index=0
		}
		$("#down").children("li").eq(index).css("background-color","#00647f").siblings().css("background-color","#00c8ff")
		$("#up").children("li").eq(index).fadeIn(500).siblings().fadeOut(500)
		
	}
	
	function getTime(end,start){
	 return	(end.getTime()-start.getTime())/1000
		
	}
	var end=new Date("2017-9-15 12:00:00")
	var start=new Date();
	var t=getTime(end,start);
    var list=document.getElementsByClassName("time")
     change();
	function change(){
		var h=parseInt(t/3600)
		var m=parseInt((t-h*3600)/60)
		var s=parseInt(t-m*60-h*3600)
		
		for(var i=0;i<list.length;i++){
		    list[i].innerHTML="距离团购还有"+h+"时"+m+"分"+s+"秒"
		    $(".timer").html("距离团购还有"+h+"时"+m+"分"+s+"秒")
		    $("#tt").html("距离团购还有"+h+"时"+m+"分"+s+"秒")
		}
	}
	var timer=setInterval  (function(){
			t--;
	     if(t<0){
	     	for(var i=0;i<list.length;i++){
		        list[i].innerHTML="商品下架了"
		        $(".timer").html("商品下架了")
		        $("#tt").html("商品下架了")
		    }
	     	clearIntval(timer)
	     }else{
	     	change();
	     }
	},1000)	
	var zIndex=1;
	var ind=0;
	for(var i=0;i<$("#list").children().length;i++){
	     ind=$(this).index()
		$("#list").children().eq(i).mouseenter(function(){
			$(this).addClass("active").siblings().removeClass("active")
			$("#uList").children().eq($(this).index()).css("z-index",zIndex++)
		})
	}
	$("#leftBtn").click(function(){
		ind--
		if(ind<=-1){
			ind=3
		}
		$("#uList").children().eq(ind).css("z-index",zIndex++)
		$("#list").children().eq(ind).addClass("active").siblings().removeClass("active")
	})
	$("#rightBtn").click(function(){
		ind++
		if(ind==4){
			ind=0
		}
		$("#uList").children().eq(ind).css("z-index",zIndex++)
		$("#list").children().eq(ind).addClass("active").siblings().removeClass("active")
	})
//	var arr=[]
//		$.ajax({
//			type:"get",
//			url:"data.json",
//			success : function( res ){
//				arr=res.list
//				for(var i=0;i<arr.length;i++){
//					$s=$(`<li>
//					<a href="http://127.0.0.1/project/page.html?pid=${arr[i].id}">
//						<img src="${arr[i].src}">
//					</a>
//					<div class="con">
//						<p>${arr[i].name}</p>
//						<b>￥</b><span>${arr[i].price}</span>
//					    <button>加入购物车</button>
//					    <span style="display:none" data-id=${arr[i].id} data-name=${arr[i].name} data-price=${arr[i].price} data-src=${arr[i].src}></span>
//					<div class="timer"></div>
//				</li>`)
//					$("#main").find("ul").append($s)
//				}
//		       
//			}
//		})
		
		var brr=[]
		$(window).scroll(function(){
			if($(window).scrollTop()==5100){
				$.ajax({
					type:"get",
					url:"data.json",
					success : function( res ){
						brr=res.list
						for(var i=0;i<brr.length;i++){
							$l=$(`<li>
							<a href="page.html">
								<img src="${brr[i].src}">
							</a>
							<div class="con">
								<p>${brr[i].name}</p>
								<b>￥</b><span>${brr[i].price}</span>
							    <button>加入购物车</button>	
							<div class="timer"></div>
						</li>`)
							$("#main").find("ul").append($l)
						}  
					}
			    })
		    }
		})
$("#shopc").click(function(e){
	e.stopPropagation();
	$("#shopmenu").animate({"right":35},500)
})
$(document).click(function(){
	$("#shopmenu").animate({"right":-300},500)
})
 $("#backtop").click(function(){
	document.body.scrollTop=0;
 })

$(".shoplist").on("click","button",function(){
		var arr=[]
		var flag=true;
		var _json={
			id : $(this).next().data("id"),
			name:$(this).next().data("name") ,
			src:$(this).next().data("src") ,
			price: $(this).next().data("price"),
			count : 1
		}
		var cookieInfo=getCookie("shoplist")
		if(cookieInfo.length!=0){
			arr=cookieInfo;
			for(var i in arr){
				if(_json.id==arr[i].id&&_json.name==arr[i].name){
					arr[i].count++;
					flag=false;
					break;
				}
			}
		}
		if(flag){
			arr.push(_json);
		}
		
		setCookie("shoplist",JSON.stringify(arr))
		send();
	})
    
    function  send(){
    	var sm=0
    	var cct=0
    	var arr=getCookie("shoplist")
	    var html="";
	    for (var i in arr){
	    	var sh=arr[i]
	    	html+=`<div class="good">
					<img class="xt" src="${sh.src}"> 
					<p class="pr">
						<span class="spa1">${sh.name}</span><br>
						<span class="spa2">${sh.price}</span>
						<span class="spa3">${sh.count}</span>
						<u class="spa4"><a>删除</a></u>
						<span style="display:none" data-id=${sh.id}></span>
					</p>
				</div>`
				sm+=parseInt(sh.price);
				cct+=parseInt(sh.count)
	    }
	    $("#suv").html(html)
	    $("#sim").html(sm)
	    $("#ct").html(cct)
	    $("#count").html(cct)
    }
     window.onload=function(){
     	send();
//   	if($("#count").html()==0){
//		$("#shopmenu").html("")
//		$("#shopmenu").append($("<img id='em' src='img/empty.png'><span id='ts'>空空如也，快去购买吧!</span>"))
//	    }
     }
    
//  alert($("button").children().length)

$(window).scroll(function(){
	if($(window).scrollTop()>=400){
		$("#left").show()
	}else{
		$("#left").hide()
	}
})
   
    $("#suv").on("click","u",function(){
//  	var pid=$(this).next().data("id")
//		for(var i in arr){
//			if(pid==arr[i].id){
//				arr.splice(i,1)
//				setCookie("shoplist",JSON.stringify(arr))
				$(this).parent().parent().remove();
//			}
//		}
  })



$(".bs").mouseenter(function(){
	$(this).css("background","#00c8ff")
})
$(".bs").mouseleave(function(){
	$(this).css("background","")
})
var plist=document.getElementById("left").getElementsByTagName("p")
    plist[0].onclick=function(){
        document.body.scrollTop=0
    }
    plist[1].onclick=function(){
        document.body.scrollTop=550
    }
    plist[3].onclick=function(){
        document.body.scrollTop=2390
    }
    