<?php
 $val= $_POST['val'];
 $toemail='raging.build.inc@gmail.com '; // enter your email id here
 
$name = $val['name'];
 $email = $val['email'];
 $category = $val['cate'];
 $msg = $val['msg'];
 
 
 $subject = 'Message from RI Contact Form!';

$headers = "From: admin@infotuts.com \r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";



$message = "<b>Name :</b>".$name."<br>";
$message .='<b>Email :</b>'.$email."<br>";
$message .='<b>Category :</b>'.$category."<br>";
$message .='<b>Message :</b>'.$msg;


 



mail($toemail, $subject, $message, $headers);
 
 
 
 echo "Thanks for contacting us!";
	
?>