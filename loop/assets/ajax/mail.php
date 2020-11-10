<?php
$to = "support@loopmobility.co";
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$subject = $_POST['subject'];
$email = $_POST['email'];
$message = $_POST['message'];

	$message = "Name: $first_name $last_name\nEmail: $email\nMessage: $message";
	$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/plain; charset=utf-8\r\n";

	if(mail($to, $subject, $message, $headers))
		echo "Good";
	else
		echo "Error";

?>