<?php
include("conn.php");
$name = $_GET['name'];
$content = $_GET['content'];
$imageurl = $_GET['imageurl'];
$sql = "INSERT INTO `note` (`name`,`content`,`imageurl`)VALUES ('{$name}','{$content}','{$imageurl}')";
mysql_query($sql);
?>