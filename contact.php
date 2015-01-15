<html>
<head>
    <link rel="stylesheet" type="text/css" href="css/style.css">
	<title>Thanks from Salon Gregories</title>
</head>
<body>
<?php

// SendGrid PHP Library - https://github.com/sendgrid/sendgrid-php

require 'vendor/autoload.php';

/* Authentication
====================================================*/
$sg_username = "salon_gregories_admin";
$sg_password = "SalonGregories2015";

/* Create mail object
====================================================*/
$sendgrid = new SendGrid( $sg_username, $sg_password );
$mail = new SendGrid\Email();

/* SEND MAIL
/  Replace the the address(es) in the setTo/setTos
/  function with the address(es) you're sending to.
====================================================*/
try {
    $mail->
    //From Address
    setFrom('ContactForm@betterwithgrid.com')->

    //Reply To Set 
    setReplyTo($_POST['emailAddress'])->

    //Contact form Recipient
    addTo('ron.canada@sendgrid.com')->

    // Concat form Subject
    setSubject('Salon Gregories From '.$_POST['firstName'])->

    //Contact form body
    setText("Phone Number Provided: ".$_POST['phoneNum']
    	."\n\n".$_POST['emailMsg']."\n\n"."Sent By: ".$_POST['firstName']
        );

    //Response logging
    $response = $sendgrid->send( $mail );
    if (!$response) {
        throw new Exception("Did not receive response.");
?>
<p><strong>Yikes!</strong> It looks like something went wrong. Please call us at (949) 644-6671 to contact us.</p>
<?php
    } else if ($response->message && $response->message == "error") {
        throw new Exception("Received error: ".join(", ", $response->errors));
?>
<p><strong>Yikes!</strong> It looks like something went wrong. Please call us at (949) 644-6671 to contact us.</p>
<?php
    } else {  
?>

<!-- Success Response Page HTML -->

<div id="landingPage">
    <p>Thanks! We got your message and you'll be hearing from us soon.</p>

    <p>Please call us directly at (949) 644-6671 to book appointments.</p>

    <br><br>
    <a href="index.html">
        <button>Go Back</button>
    </a>
</div>
<div id="craftedBy">
    <p>This website was crafted by Ron Canada</p>
</div>

<?php
    }
} catch ( Exception $e ) {
    var_export($e);
?>
    <p><strong>Yikes!</strong> It looks like something went wrong. Please call us at (949) 644-6671 to contact us.</p>
<?php
}

?>
</body>
</html>