

console.log("Inicio del programa") //1
console.log("Resultado 1") //2 


setTimeout(()=>{
    console.log("Resultado 2") // 6
}, 3000);


setTimeout(() => {
    console.log("Analisis") // 3
}, 0);


setTimeout(() => {
    console.log("Resultado 4") // 4
}, 0);


console.log("Fin del programa") // 5