// Hacer una funcion que reciba por paremetro un objeto y un array de strings que representan las keys del objeto
// la funcion debe retornar el objeto sin los strings que se encuentren en el array

const persona = {
    nombre: "Jorge",
    edad:34,
    pais:"Uruguay",
    profesion:"Desarrollador web"
};


const eliminarKey = (obj, keys) =>{
    const newObj = {...obj};
    keys.forEach((key) => {
        delete newObj[key];
    },{})
    return newObj;
}
console.log(eliminarKey(persona, ["edad", "pais"]));
