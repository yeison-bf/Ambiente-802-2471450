<?php

require_once '../db/db.php';

if (isset($_POST['acceder'])) {

    $usuario = $_POST['usuario'];
    $password = $_POST['password'];

    if ($usuario == "" || $password == "") {
        header('Location: ../index.php?id=0');
    }

    $si_existe = false;

    foreach ($UsuariosAccesos as $key => $value) {
        if ($usuario == $value['userName'] && $password == $value['password']) {
            $si_existe = true;

            if ($value['estado'] == 1) {
                session_start();

                $_SESSION['nombreCompleto'] = $value['nombre'] . ' ' . $value['apellidos'];
                $_SESSION['programa'] = $value['programa'];


                header('Location: ../inicio.php');
            } elseif ($value['estado'] == 2) {
                header('Location: ../index.php?id=1');
            } elseif ($value['estado'] == 3) {
                header('Location: ../index.php?id=2');
            }
        }
    }


    if ($si_existe == false) {
        header('Location: ../index.php?id=0');
    }
}
