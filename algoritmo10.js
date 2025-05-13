// Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
// Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
// si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.


function weekDays (){

    console.log('📆 Dias de la semana')
    
    let numeros = prompt ('Elige un numero entre el 1 y el 7, comienza de Domingo a Sábado!')
    
    if (numeros == 1){
    
        console.log('Hoy es Domingo tomate un descanso, pero mañana a trabajar crack!')        
    } else if (numeros >= 2 && numeros <= 6){
        
        console.log('Hoy tienes que trabajar es dia laboral') 
    } else if (numeros == 7){

        console.log('Comienza el fin de semana hoy es Sábado 🎉')
    } else if(numeros >= 8){

        console.log('Ese numero no existe crack no hay tantos dias en una semana ❌')
    }
};
weekDays()

