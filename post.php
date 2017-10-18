<?php

$adminemail="admin@localhost";

date_default_timezone_set('Europe/Kiev');

$date=date("d.m.y");
$time=date("H:i");

$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$message = $_POST['message'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$tel = htmlspecialchars($tel);
$message = htmlspecialchars($message);

$name = urldecode($name);
$email = urldecode($email);
$tel = urldecode($tel);
$message = urldecode($message);

$name = trim($name);
$email = trim($email);
$tel = trim($tel);
$message = trim($message);

// echo  $name, $email, $tel, $message;

$msg = '<p> Ім\'я: '.$name.' </p>
<p> E-mail: '.$email.' </p>
<p> Телефон: '.$tel.' </p>
<p> Повідомлення: '.$message.' </p>';

// echo $msg;

$f = fopen("message.txt", "a+");
fwrite($f," \n $date $time Сообщение от $name");
fwrite($f,"\n $msg ");
fwrite($f,"\n ---------------");
fclose($f);

// mail($adminemail, "Лист з сайту", "ФІО:".$name.". E-mail: ".$email.". Телефон:".$tel.". Повідомлення:".$message ,"From: szk@localhost \r\n");

header('Location: http://szk.local#contactFormStatic');

exit;
?>
