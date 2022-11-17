const peticion = () =>{
    fetch('http://localhost:8080/api')
    .then(response => response.json())
    .then(data => console.log(data));
}


peticion();