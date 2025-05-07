// Regresar solo los index de las posiciones pares de un arreglo

const cantidad = [10]

function numerosPares(){

    for(let i = 1; i <= cantidad; i++){
        if(i % 2 === 0 && i != 0){
            console.log(`Estos son los numeros PARES: ${i}`)
        } else {
            console.log(`Estos son numeros IMPARES: ${i}`)
        }
    }
}
numerosPares()