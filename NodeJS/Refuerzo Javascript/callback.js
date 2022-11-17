

const getUserById = ( id, callback ) => {

    const users = {
        id,
        name: "Yeison Barrios"
    }

    setTimeout(() => {
        callback(users)
    }, 1000);
}


getUserById( 4, (users) => {
    console.log(users)
} );
