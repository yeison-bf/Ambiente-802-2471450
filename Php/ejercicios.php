<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

</head>

<body>
    <div class="container-fluid">
        <div class="wraper w-100 vh-100 col-6 d-flex justify-content-center align-items-center">
            <form class="col-6" action="ejercicios.php" method="post">
                <div class="row col-12">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="" class="form-label">Nombres y Apellidos</label>
                            <input type="text" name="nombres" class="form-control col-12">
                        </div>
                        <div class="form-group">
                            <label for="" class="form-label">Opcion</label>
                            <select type="number" name="opcion" class="form-control col-12">
                                <option value="1">Saludar</option>
                                <option value="2">Restar</option>
                                <option value="3">Multiplicar</option>
                            </select>
                        </div>
                        <div class="form-group mt-3">
                            <input type="submit" value="Enviar" class="btn btn-success col-6">
                        </div>

                    </div>
                </div>
            </form>
        </div>
    </div>



    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
</body>

</html>


<?php

    error_reporting(0);


    $opcion = $_POST['opcion'];

    switch ($opcion) {
        case 1:
            saludar();
            break;
        
        default:
            break;
    }




    function saludar(){
        $nombre = $_POST['nombres'];

        echo "<h1>Hola $nombre </h1>";
    }


    //mayores a 30
    $mayor =40;
    