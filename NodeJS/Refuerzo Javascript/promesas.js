const usuarios = [
    {
        id: 1,
        nombre : "Miguel"
    },
    {
        id: 2,
        nombre : "Joseé"
    }
]


const getUserById = ( id, callback ) => {
    return new Promise( (resolve, reject)=>{
        const user_selected = usuarios.find( (us) => us.id === id);
        if(user_selected){
            resolve(user_selected)
        }else{
            reject("Error! el usuario no existe...")
        }
    });
}


getUserById(19)
    .then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    });