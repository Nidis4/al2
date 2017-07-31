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
    $details = $_POST['details'];
    //$firstname = $_POST['inputfirstname'];
    $host = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $host = str_replace("script.php","", $host);
    $topic = "Mos-i-ko System Project";
       
    $mess = "New Form has been submitted with the following details\n\n Name : $name \n E-mail : $email \n Telephone : $mobile \n Image name :  $file \n Image Location :  $host".$file." \n\n More Details for elements \n $details \n " ;
    $to = "gkonstantinidis@digiverse.gr, export@al2.gr, alexia@al2.gr";
    //$subject = $topic;
    //$message = "Job has successfully been terminated\n\nPlease find your results attached.";
    //$headers = "";
    $headerFields = array('MIME-Version: 1.0', 'Content-Type: text/plain;charset=utf-8');
   
    $mail_sent = @mail( $to, $topic, $mess,implode("\r\n", $headerFields));
    echo $success ? 'Your form has been submitted' : 'Unable to save the form. Please contact us by e-mail';

?>