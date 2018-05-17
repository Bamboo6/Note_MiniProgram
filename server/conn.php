<?php
//数据库连接
$dbname = 'cAuth';
$host = "localhost:5825";
$user = "root";
$pwd = "wx3599c412069d26f5";
/*接着调用mysql_connect()连接服务器*/
$link = mysql_connect($host,$user,$pwd);
if(!$link){
	die("Connect Server Failed: " . mysql_error($link));
}
/*连接成功后立即调用mysql_select_db()选中需要连接的数据库*/
if(!mysql_select_db($dbname,$link)){
	die("Select Database Failed: " . mysql_error($link));
}
?>