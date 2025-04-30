// Contar cantidad de caracteres en una cadena

// primer metodo solo con "length"
function conteoCaracteres (string){  
    for(let i = 0; i <= string.length; i++){
        if(string[i] < string){
            return string.length
        }        
    }
};
console.log(conteoCaracteres('Mascota'));
console.log(conteoCaracteres('Comida'));
console.log(conteoCaracteres('Escalera'));

// segundo metodo con "split"
const texto = "La pelota esta pinchada";
const metodo = texto.split(" "); //separa por palabra
const metodo2 = texto.split(""); //separa por letra

console.log(metodo);
console.log(metodo2);

