

let heroes = [
    {
        id: 1,
        nombre: "Superman"
    },
    {
        id: 2,
        nombre: "Iron Man"
    },
    {
        id: 3,
        nombre: "Batman"
    },
    {
        id: 4,
        nombre: "Black panter"
    }
]





let poderes = [
    {
        id: 1,
        nombre: "Volar"
    },
    {
        id: 2,
        nombre: "Tecnología"
    },
    {
        id: 3,
        nombre: "Dinero"
    },
    {
        id: 4,
        nombre: "Super fuerza"
    }
]

const base = 1;

const getHeroe = ( id )=>{
    return new Promise( (resolve, reject) =>{
        const heroe = heroes.find(h=>h.id == id);
        (heroe)
        ? resolve(console.log(heroe.nombre))
        : reject ("El heroe no existe")
    });
}


const getPoder = ( id )=>{
    return new Promise( (resolve, reject) =>{
        const poder = poderes.find( h=>h.id == id);
        (poder)
        ? resolve(poder.nombre)
        : reject ("El poder no existe")
    });
}

getHeroe( base )
    .then( ( heroe ) => { 
        let nombreHeroe = heroe;
        return getPoder( base )
    })
    .then( (poder) => {
        console.log(`El heroe ${nombreHeroe} tiene como poder ${poder}`)
    })
    .catch( ( error ) => {  console.log(error) })