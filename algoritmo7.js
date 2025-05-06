// Realiza un contador de letras

const letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

const conteoLetras = letras.reduce(( acumulador, letra ) =>{
    console.log({ acumulador, letra });
    // console.log(acumulador);
    return acumulador + letra.length;
}, 0);
console.log(conteoLetras);