<?php
	header("content-type:text/html;charset=utf-8");
	$uname = $_POST["uname"];
	$upwd = $_POST["upwd"];
	
	$db = mysql_connect("localhost","root","root");
	mysql_select_db("day19",$db);
	mysql_query("set names utf8");
	
	$sql = "select * from cars where uname='$uname'";
	
	$res = mysql_query($sql); // 查询的sql语句通过该方法执行后 会得到一个结果集  
	//通过 mysql_fetch_array 方法 获取结果集中的一条数据   得到的结果是一个数组
	
	$arr = mysql_fetch_array( $res );//结果是一个数组  array( "uid"=>1,"uname"=>"lichune","upwd"=>"lichune" )
	//print_r( $arr ) ;
	
	if( $arr ){//说明用户名存在
		//比较密码
		if( $upwd == $arr["upwd"]){ //用户输入的密码 ==  数据库中的密码   说明 登录成功 
			echo "<script>alert('登录成功');location.href='index.html';</script>";
		}else{ //密码不正确 
			echo "<script>alert('密码错误');location.href='login.html';</script>";
		}
		
	}else{ //说明用户名不存在
		echo "<script>alert('用户名不存在');location.href='login.html';</script>";
	}
?>