const peticion = () =>{
    fetch('http://localhost:8081/api/user/')
    .then(response => response.json())
    .then(data => imprimir(data));
}


function imprimir(data) {

    console.log(data.allUsers)

    data.allUsers.forEach(element => {
        let datosTabla = `
        <tr>
            <td>${element.identificacion}</td>
            <td>${element.nombre}</td>
            <td>${element.apellidos}</td>
            <td>${element.usuario}</td>
            <td>${element.direccion}</td>
            <td>${element.telefono}</td>
        </tr>
        `
    
        $("#tableUsuarios tbody").append(datosTabla)
    });

 

}



peticion();