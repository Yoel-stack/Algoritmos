// contar los caracteres de 'a' en el string

function filtrarRepetidas (string) {

    let repetidas = 0;

    for(let i = 0; i <= string.length; i++){
        if(string[i] === 'b'){
            repetidas +=1
        }
    }
    return repetidas;
}
console.log(filtrarRepetidas("beisbol"));
console.log(filtrarRepetidas("Balón"));
console.log(filtrarRepetidas("pasto"));
console.log(filtrarRepetidas("bombilla"));


// encontrar palabras que comiencen con la letra 'T' en el siguiente Array

const animales = ['Pantera','Tigre','Gato','Perro',
                    'Tiburon','Tortuga','Toro'];

function elementos (condicion){
    return condicion.startsWith('T');
}

const animalesT = animales.filter(elementos)
console.log(animalesT);

