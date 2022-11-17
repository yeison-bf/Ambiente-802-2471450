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


const base = 1;

const getUser = ( base, collback )=>{
    const user = users.find( (us) => us.id == base)
  
    if(user){
        collback(null, user)
    }else{
        collback("Usuario no encontrado...")
    }
}


const getSalaryUser = ( base, collback )=>{
    const user = salary.find( (sl) => sl.id == base)
    
    if(user){
        collback(null, user)
    }else{
        collback("Lo sentimos!")
    }
}





getUser(base, (error, user)=>{
    
    if(error){
        console.log("ERROR! ")
        return console.log(error)
    }

    console.log(user.name)
    getSalaryUser(user.id, (error, salary)=>{
    
        if(error){
            console.log(`El empleado ${user.name} no tiene salario, que pena con ella.`)
            return console.log(error)
        }
    
        console.log(`El salario es : ${salary.money}`)
    });
});





