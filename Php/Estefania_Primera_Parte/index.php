<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <style>
        body {
            background-image: url('../img/fondo.jpeg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    </style>
</head>

<body>

    <div class="container-fluid">
        <div class="wraper w-100 vh-100 col-12 d-flex justify-content-center align-items-center">
            <form class="col-3 card p-4" action="src/acceso.php" method="post">
                <div class="form-group">
                    <label for="" class="form-label">Usuario</label>
                    <input type="text" name="usuario" require class="form-control col-12">
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Password</label>
                    <input type="password" name="password" require class="form-control col-12">
                </div>
                <div class="form-group mt-3 mb-5">
                    <input type="submit" value="acceder" name="acceder" class="btn btn-success col-6">
                </div>
                <?php
                    error_reporting(0);
                    if($_GET['id'] != 10){
                        echo '';
                    }

                    if($_GET['id'] == 0){
                        echo '<div class="alert alert-danger alert-sm">Usuario no encontrado</div>';
                    }elseif($_GET['id'] == 1){
                        echo '<div class="alert alert-danger alert-sm">Usuario Inactivo</div>';
                    }elseif($_GET['id'] == 2){
                        echo '<div class="alert alert-danger alert-sm">Usuario en espera</div>';
                    }
                ?>
            </form>
        </div>
    </div>



    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
</body>

</html>