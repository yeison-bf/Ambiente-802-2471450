<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">


        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

</head>

<body>
    <div class="container-fluid">
        <div class="wraper w-100 vh-100 col-6 d-flex justify-content-center align-items-center">
            <form class="col-6" action="php/login.php" method="post">
                <div class="row col-12">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="" class="form-label">Usuario</label>
                            <input type="text" name="usuario" placeholder="usuario" class="form-control col-12">
                        </div>
                        <div class="form-group">
                            <label for="" class="form-label">Contraseña</label>
                            <input type="password" name="password" placeholder="password" class="form-control col-12">
                        </div>
                        <div class="form-group mt-3">
                            <input name="login_btn" type="submit" value="Enviar" class="btn btn-success col-6">
                        </div>

                    </div>
                </div>
            </form>

            <?php
            error_reporting(0);
                if($_GET["response"] == 0){
                    echo "
                        <script>
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Lo sentimos, datos errados!'
                          })
                        </script>
                    ";
                }
            ?>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous">
    </script>

</body>

</html>