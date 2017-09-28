    $("#topIn").on("mouseenter",".menu",function(){
		$(this).css({"background":"white","border-buttom":"white 1px solid"})
	    $(this).find("div").show(100)
	})
	$("#topIn").on("mouseleave",".menu",function(){
		$(this).css({"background":"#f2f2f2","border-buttom":"1px solid darkgray"})
	     $(this).find("div").hide(100)
	})
	var arr=getCookie("shoplist")
	var html="";
	    for (var i in arr){
	    	var sh=arr[i]
	    	html+=`<tr>
		    	<td style="width: 150px;"><img src="${sh.src}"></td>
		    	<td style="width: 280px;text-align: left;">${sh.name}</td>
		    	<td style="width: 115px;">${sh.price}</td>
		    	<td style="width: 100px;">${sh.count}</td>
		    	<td style="width: 110px;" class="money">${sh.count*sh.price}</td>
		    	<td style="width: 80px;">${sh.count*sh.price}</td>
		    	<td><a>删除</a><span style="display:none" data-id=${sh.id}><span></td>
		    </tr>`
	    }
	    $("#cart").find("table").html(html)
	    
	var con1=0;
	var sum1=0;
	window.onload=function(){
		var flag=true;
		if(flag){
			var list=document.getElementsByTagName("tr")
			for(var i=0; i<list.length;i++){
				con1+=parseInt(list[i].children[3].innerHTML)
				sum1+=parseInt(list[i].children[4].innerHTML)
			}
			document.getElementById("ss1").innerHTML=con1;
			document.getElementById("ss3").innerHTML=sum1;	
		}
	}
	var con2=0;
	var sum2=0;
	$("table").on("click","a",function(){
		flag=false;
		var pid=$(this).next().data("id")
		for(var i in arr){
			if(pid==arr[i].id){
				arr.splice(i,1)
				setCookie("shoplist",JSON.stringify(arr))
				$(this).parent().parent().remove();
			}
		}
		if($("table").html()==""){
			document.getElementById("ss1").innerHTML=con;
			document.getElementById("ss3").innerHTML=sum;
			con=sum=0;
		}
		if(!flag){
			var list=document.getElementsByTagName("tr")
			for(var i=0; i<list.length;i++){
				con2+=parseInt(list[i].children[3].innerHTML)
				sum2+=parseInt(list[i].children[4].innerHTML)
			}
			document.getElementById("ss1").innerHTML=con2;
			document.getElementById("ss3").innerHTML=sum2;
			con2=sum2=0;	
		}
		
	})
    
	var crr=[];
	$("#aa1").click(function(){
		$("table").html("")
		$("#ss1").html(0)
		$("#ss3").html(0)
		setCookie("shoplist",JSON.stringify(crr))
	})
