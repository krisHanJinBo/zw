$("#right").on("mouseenter","a",function(){
		$(this).find("p").stop().animate({"left":-100},500)
		$(this).find("p").show(500)
		$(this).find("#code").stop().animate({"left":-520,},500)
		$(this).find("#code").show(500)
	})
	$("#right").on("mouseleave","a",function(){
		$(this).find("p").stop().animate({"left":-120},500)
		$(this).find("p").hide(500)
		$(this).find("#code").stop().animate({"left":-540},500)
		$(this).find("#code").hide(500)
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
	
    var xd=document.getElementById("xd")
    window.onscroll=function(){
	    var h=1158; 
	    var m=document.body.scrollTop||document.documentgetElement.scrollTop
	    if(m>h){
		    xd.style.position="fixed"
		    xd.style.top="0"
	    }else{
	        xd.style.position=""
	    }
    }
    var slist=xd.getElementsByTagName("li")
    slist[0].onclick=function(){
        document.body.scrollTop=1158
    }
    slist[1].onclick=function(){
        document.body.scrollTop=1434
    }
    slist[2].onclick=function(){
        document.body.scrollTop=5011
    }
    slist[3].onclick=function(){
        document.body.scrollTop=5090
    }
    var str=location.href; 
	var arr=str.split("?")[1]
	var pid=arr.split("&")[0].split("=")[1]
	$.ajax({
		type:"get",
		url:"main.json",
		success : function( res ){
			//console.log( res.list)
			for(var j in res.list){
				if(res.list[j].id==pid){
				    var ch=res.list[j]
				    $("#jie").html(ch.jie)
				    console.log(ch)
				    $("#p2").html(ch.name)
				    $("#jn").attr("src",ch.src)
				    $("#ssp").html("￥"+ch.price)
				    $("#para").attr("src",ch.src)
					}
			    }	
			}
	})

    
	$("#shopc").click(function(e){
		e.stopPropagation();
		$("#shopmenu").animate({"right":35},500)
    })
	$(document).click(function(){
		$("#shopmenu").animate({"right":-300},500)
	})


  function  send(){
    	var sm=0
    	var cct=0
    	var arr=getCookie("shoplist")
	    var html="";
	    for (var i in arr){
	    	var sh=arr[i]
	    	html+=`<div class="good">
					<img  class="xt" src="${sh.src}"> 
					<p class="pr">
						<span class="spa1">${sh.name}</span><br>
						<span class="spa2">${sh.price}</span>
						<span class="spa3">${sh.count}</span>
						<u class="spa4"><a>知我</a></u>
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
	}
    $("#suv").on("click","u",function(){
    	$(this).parent().parent().remove();
    })
