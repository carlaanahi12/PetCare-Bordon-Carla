<?php

$nombre = $_POST ['nombre'];

$apellido = $_POST ['apellido'];

$email = $_POST ['email'];

$mensaje = $_POST ['mensaje']; 


$para = 'carla95bordon@hotmail.com'

$asunto = 'este email fue enviado desde la web';

mail($para, $asunto utf8_decode($mensaje))

header ('location:mensaje.html');




?>