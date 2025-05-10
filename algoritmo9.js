// Escribe una función en JavaScript llamada validarContrasena que tome una contraseña como entrada y determine si es válida según ciertos criterios. La contraseña se considera válida si cumple con las siguientes condiciones:

// Contiene al menos un carácter especial de los siguientes: !@#$%^&*()_+[]{}|;:',.<>?.
// Tiene al menos 8 caracteres de longitud.
// Contiene al menos un número.
// Contiene al menos una letra minúscula y una letra mayúscula.
// La función debe devolver true si la contraseña es válida y false en caso contrario.


const validarCaracter = ( cadena ) => {
    const caracteres = ['!', '@', '#', '$', '%', ' ', '^', '&', '*', '(', ')', '_', '+', '[', ']', '{', '}', '|', ';', ':', "'", ',', '.', '<', '>', '?']
    return validarC = caracteres.some((item) => cadena.includes(item)) 
}

const validarLong = ( cadena ) => {
    return cadena.length >= 8;
}

const validarNum = ( cadena ) => {
    const numeros = [1,2,3,4,5,6,7,8,9,0];
    return validarN = numeros.some((item) => cadena.includes(item))
}

const lowerCase = ( cadena ) => {
    const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    return validarL = lower.some((item) => cadena.includes(item))
}

const uperCase = ( cadena ) => {
    const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    return validarU = upper.some((item) => cadena.includes(item))    
}

const validarContra = (cadena) =>{
    return validarCaracter (cadena) 
            && validarLong (cadena)
            && validarNum (cadena)
            && lowerCase (cadena)
            && uperCase (cadena)
};
console.log('valiDar_99752')
console.log(validarContra("valiDar_99752"))