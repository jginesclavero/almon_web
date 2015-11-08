[php]
<?php
$nombre = $_POST[‘name’];
$email = $_POST[’email’];
$mensaje = $_POST[‘message’];
$para = 'joni_largo_99@hotmail.com';
$titulo = 'Mensaje pagina web';
$header = 'De: '. $email;
$msjCorreo = "Nombre: $nombre\n E-Mail: $email\n Mensaje:\n $mensaje";

if ($_POST['submit']) {
	if (mail($para, $titulo, $msjCorreo, $header)) {
		echo "<script language='javascript'>
		alert('Mensaje enviado, muchas gracias.);
		window.location.href = 'localhost:8000';
		</script>";
	} else {
		echo 'Falló el envio';
	}
}
?>
[/php]