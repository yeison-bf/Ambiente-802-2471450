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
    const user_selected = usuarios.find( (us) => us.id === id);
    if(user_selected){
        callback(null, user_selected)
    }else{
        callback("No existe el usuario")
    }
}


getUserById(1, (err, usuario)=>{
    if(err){
        console.log("ERROR!")
        return console.log(err)
    }
    console.log(usuario)
})
