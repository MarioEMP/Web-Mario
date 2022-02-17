<?php
    $destino = "marioemp90@gmail.com"
    $nombre = $_POST["Nombre"];
    $correo = $_POST["Correo"];
    $mensaje = $_POST["Mensaje"];
    $content = "Nombre: " . $nombre . "\nCorreo" . $correo . "\Mensaje" . $mensaje;


    mail($destino,"Contacto", $contenido);
    
?>