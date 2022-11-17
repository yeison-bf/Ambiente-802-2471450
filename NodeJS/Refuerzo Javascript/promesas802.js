let users = [
    {
        id : 1,
        name : "Lorena Estrada"
    },
    {
        id : 2,
        name: "Laura Marcela Caro"
    },
    {
        id : 3,
        name: "Stefania"
    }
]


let salary = [
    {
        id: 1,
        money : 80000
    },
    {
        id: 2,
        money : 30000
    }
]

let errors = [
    {
        codigo : 1,
        error : 204
    },
    {
        codigo : 2,
        error : 500
    },
    {
        codigo : 3,
        error : 404
    }
]

const base = 18;

const getUser = ( id )=>{
    return new Promise( (resolve, reject) =>{
        const user = users.find( (us) => us.id == id)
        (user)
            ? resolve(user)
            : reject("Usuario no encontrado")
    });
}


getUser( base )
    .then( ( loQueSea ) => { console.log( loQueSea.name )})
    .catch( ( error ) => { console.log( error )})


