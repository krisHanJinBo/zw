<?php  
	header("content-type:text/html;charset=utf-8");
    if(isset($_POST["Submit"]) && $_POST["Submit"] == "同意协议并注册")  
    {  
        $user = $_POST["username"];  
        $psw = $_POST["password"];  
        $psw_confirm = $_POST["confirm"];  
        if($user == "" || $psw == "" || $psw_confirm == "")  
        {  
            echo "<script>alert('请确认信息完整性！'); history.go(0);</script>";  
        }  
        else  
        {  
              
            $db=mysql_connect("localhost","root","root");   //连接数据库  
            mysql_select_db("day19",$db);  //选择数据库  
            mysql_query("set names utf8"); //设定字符集  
            $sql = "select * from cars where uname = '$_POST[username]'"; //SQL语句  
            $result = mysql_query($sql);    //执行SQL语句  
            $num = mysql_num_rows($result); //统计执行结果影响的行数  
            if($num)    //如果已经存在该用户  
                {  
                    echo "<script>alert('用户名已存在'); location.href='register.html';</script>";  
                }  
            else    //不存在当前注册用户名称  
                {  
                    $sql_insert = "insert into cars (uname,upwd) values('$_POST[username]','$_POST[password]')";  
                    $res_insert = mysql_query($sql_insert);  
                    //$num_insert = mysql_num_rows($res_insert);  
                    if($res_insert)  
                    {  
                        echo "<script>alert('注册成功！'); location.href='index.html';</script>";  
                    }  
                    else  
                    {  
                        echo "<script>alert('系统繁忙，请稍候！'); history.go(0);</script>";  
                    }  
                }  
        }    
          
    }  
    else  
    {  
        echo "<script>alert('提交未成功！'); history.go(0);</script>";  
    }  
?>  