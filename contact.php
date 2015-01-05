<html>
<head>
	<title>Whatever</title>
</head>
<body>
<?php

// SendGrid PHP Library - https://github.com/sendgrid/sendgrid-php

require 'vendor/autoload.php';


/* USER CREDENTIALS
====================================================*/
$sg_username = "salon_gregories_admin";
$sg_password = "SalonGregories2015";


/* CREATE THE SENDGRID MAIL OBJECT
====================================================*/
$sendgrid = new SendGrid( $sg_username, $sg_password );
$mail = new SendGrid\Email();




/* SEND MAIL
/  Replace the the address(es) in the setTo/setTos
/  function with the address(es) you're sending to.
====================================================*/
try {
    $mail->
    setFrom('ContactForm@betterwithgrid.com')->
    setReplyTo($_POST['emailAddress'])->
    addTo('ron.canada@sendgrid.com')->
    setSubject('Salon Gregories Contact Form Inquiry From '.$_POST['firstName'])->
    setText("Call back number (if provided): ".$_POST['phoneNum']
    	."\n\n".$_POST['emailMsg']);
    
    $response = $sendgrid->send( $mail );

    if (!$response) {
        throw new Exception("Did not receive response.");
?>
<p><strong>Yikes!</strong> It looks like something went wrong. Please click here to try again.</p>
<?php
    } else if ($response->message && $response->message == "error") {
        throw new Exception("Received error: ".join(", ", $response->errors));
?>
<p><strong>Yikes!</strong> It looks like something went wrong. Please click here to try again.</p>
<?php
    } else {
        
?>
        <p><strong>Thanks!</strong> We got your message and you'll be hearing from us soon.</p>
<?php
    }
} catch ( Exception $e ) {
    var_export($e);
?>
    <p><strong>Yikes!</strong> It looks like something went wrong. Please click here to try again.</p>
<?php
}

?>
</body>
</html>