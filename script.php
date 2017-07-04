<?php
  // requires php5
  define('UPLOAD_DIR', 'images/guests/');
  $img = $_POST['imgBase64'];
  $img = str_replace('data:image/png;base64,', '', $img);
  $img = str_replace(' ', '+', $img);
  $data = base64_decode($img);
  $file = UPLOAD_DIR . uniqid() . '.png';
  $success = file_put_contents($file, $data);
  

    $name = $_POST['nameF'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    //$firstname = $_POST['inputfirstname'];

    $topic = "Mos-i-ko System Project";
       
    $mess = "Name: $name \nE-mail = $email \nTelephone = $mobile \nImage name =  $file \nImage Location=http://digiverse.gr/a2test/".$file." " ;
    $to = "gkonstantinidis@digiverse.gr";
    //$subject = $topic;
    //$message = "Job has successfully been terminated\n\nPlease find your results attached.";
    //$headers = "";
    $headerFields = array('MIME-Version: 1.0', 'Content-Type: text/plain;charset=utf-8');
   
    $mail_sent = @mail( $to, $topic, $mess,implode("\r\n", $headerFields));
    echo $success ? 'Your form has been submitted' : 'Unable to save the form. Please contact us by e-mail';

?>