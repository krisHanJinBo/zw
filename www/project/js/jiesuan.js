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
		    	<td style="border:none"><a></a><span style="display:none" data-id=${sh.id}><span></td>
		    </tr>`
	    }
	    $("#cart").find("table").html(html)
	    
	var con1=0;
	var sum1=0;
		var list=document.getElementsByTagName("tr")
		for(var i=0; i<list.length;i++){
			con1+=parseInt(list[i].children[3].innerHTML)
			sum1+=parseInt(list[i].children[4].innerHTML)
		}
		document.getElementById("ss1").innerHTML=con1;
		document.getElementById("ss3").innerHTML=sum1;	
		document.getElementById("zf").innerHTML=sum1+8;	

	
	var provArr=["安徽","湖南","江苏"]
	var cityArr=[["六安","合肥"],["长沙","邵阳"],["苏州","常熟"]]
    var countyArr=[[["霍邱","叶集"],["肥东","肥西"]],[["c1","c2"],["sy1","sy2"]],[["sz1","sz2"],["cs1","cs2"]]]
    $(function(){
    	for(var i = 0 ; i < provArr.length ; i++){
			$("#prov").append( "<option value="+i+">"+provArr[i]+"</option>" );
		}
    })
    $("#prov").change(function(){	
		//清空市的信息
		//$("#city").empty();
		$("#city")[0].length = 1;//js的length属性 可以读写  
		var index =  $(this).val();
		if( index == "" ){
			return;
		}
		var _cityArr = cityArr[index]; //一维数组  
		for( var i = 0 ; i < _cityArr.length ; i++ ){
			$("#city").append( "<option value="+index+"_"+i+">"+_cityArr[i]+"</option>" );
		}
	})
	$("#city").change(function(){
		var str = $(this).val();//  "1_0"
		$("#country")[0].length = 1;
		if( str == "" ){
			return ;
		}
		var proIndex = str.split("_")[0];
		var cityIndex = str.split("_")[1];
		var _countryArr = countyArr[proIndex][cityIndex];
		for( var i = 0 ; i < _countryArr.length ; i++ ){
			$("#country").append( "<option>"+_countryArr[i]+"</option>" );
		}
	})
	
	var regx=/^\w{2,8}$/;
	var regd=/^\w{3,}$/;
	var regyb=/^\d{6,6}$/;
	var regh=/^\d{11,11}$/;
    var regyx=/^\w+@\w+$/;
    var flagx=null;
    var flagd=null;
    var flagyb=null;
    var flagh=null;
    var flagyx=null;
    $("#xm").blur(function(){
    	if(regx.test($(this).val())){
    		$("#xm1").html("格式正确")
    		flagx=true;
    	}else{
    		$("#xm1").html("格式不正确")
    		flagx=false;
    		
    	}
    })
    
	    $("#dz").blur(function(){
	    	if(regd.test($(this).val())){
	    		$("#dz1").html("格式正确")
	    		flagd=true;
	    	}else{
	    		$("#dz1").html("格式不正确")
	    		flagd=false;
	    	}
	    })
	
	    $("#yb").blur(function(){
	    	if(regyb.test($(this).val())){
	    		$("#yb1").html("格式正确")
	    		flagyb=true;
	    	}else{
	    		$("#yb1").html("格式不正确")
	    		flagyb=false;
	    	}
	    })
	
	    $("#hm").blur(function(){
	    	if(regh.test($(this).val())){
	    		$("#hm1").html("格式正确")
	    		flagh=true;
	    	}else{
	    		$("#hm1").html("格式不正确")
	    		flagh=false;
	    	}
	    })
	$("#yx").blur(function(){
    	if(regyx.test($(this).val())){
    		$("#yx1").html("格式正确")
    		flagyx=true;
    	}else{
    		$("#yx1").html("格式不正确")
    		flagyx=false;
        }
    })
	var flag=null;
	$("#qrzq").click(function(){
		if(flagx&&flagd&&flagyb&&flagh&&flagyx){
			flag=true;
			alert("收货地址填写正确,请继续完成订单操作")
			var _json={
				"xm":$("#xm").val(),
				"dz":$("#dz").val(),
				"hm":$("#hm").val(),
				"jg":sum1
			}
			setCookie("xx",JSON.stringify(_json))
		}else{
			flag=false;
			alert("请正确填写收货地址信息")
			return
		}
		
	})
    
    $("#ess").click(function(){
    	if(flag==null){
    		alert("请完整填写收货信息")
    	}else{
    		if(flag){
    		    location.href="success.html"
    	    }else{
    		    alert("请正确填写收货地址信息")
    	    }
    	}
    	
    })
