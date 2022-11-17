<?php

    if(isset($_POST['login_btn'])){
        $usuario = $_POST['usuario'];
        $password = $_POST['password'];

        if($usuario == "" || $password == ""){
            header('Location:../login.php?id=1');
        }

        
        session_start();
        $_SESSION['nombreUsuario'] = $usuario;
        header('Location:../inicio.php');

        echo $_SESSION['nombreUsuario'];
    }