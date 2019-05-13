<?php
$name=$_POST["name"];
$email=$_POST["email"];
$message=$_POST["message"];

$email_from= $email;
$email_subject="new message from ficus";
$email_body="User Name: $name.\n",
"User Email: $email.\n",
"User Message: $message.\n";

$to="iamharmangrewal@gmail.com";

$headers="From: $email_from \r\n";
$headers="Reply-To: $email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: index.html");

?>