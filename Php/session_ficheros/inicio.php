<?php
session_start();
if($_SESSION['nombreUsuario'] == ""){
    header('Location: login.php');
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
<a href="contactos.php">Ir a contactos</a>
<a href="salir.php">Salir</a>

    <h2>Bienvenido <?= $_SESSION['nombreUsuario']; ?></h2>
</body>

</html>