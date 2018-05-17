<?php
include("conn.php");
$name = $_GET['name'];
$content = $_GET['content'];
$imageurl = $_GET['imageurl'];
$time = $_GET['time'];
$sql = "INSERT INTO `note` (`name`,`content`,`imageurl`,`time`)VALUES ('{$name}','{$content}','{$imageurl}','{$time}')";
if(mysql_query($sql)){
  echo "留言成功";
}else{
  echo "留言失败";
}
?>