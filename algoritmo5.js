// Ejercicio Anagrama
function anagramaStr (palabra1, palabra2){

    let tolowerStr = function (string) {
        
        let result = ' ';
        for (const element of string) {
            if (element !== ' ') {
                result += element.toLowerCase();
            }
        }
        return result;
    };

    let sortString = function(string){
        return tolowerStr(string).split("").sort().join("");
    }

    return sortString(palabra1) === sortString(palabra2);
}
console.log(anagramaStr('Cara','Arca'));
console.log(anagramaStr('Castor','Castro'));
console.log(anagramaStr('Estufa','Balon'));
