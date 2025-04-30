// obtener el promedio de fin de curso :)

const cursos = [
    { nombre: "Matemáticas", creditos: 3, calificacion: 90 },
    { nombre: "Historia", creditos: 4, calificacion: 85 },
    { nombre: "Inglés", creditos: 2, calificacion: 81 },
    { nombre: "Filosofia", creditos: 2, calificacion: 75 },
    { nombre: "Geografia", creditos: 2, calificacion: 80 },
    { nombre: "Fisica", creditos: 2, calificacion: 67 },
    { nombre: "Lengua", creditos: 2, calificacion: 96 },
];

const promedioFinal = (cursos) => {
    return (
        cursos.reduce(
            (suma, curso) => suma + curso.creditos * curso.calificacion, 0
        ) / cursos.reduce ((suma, curso) => suma + curso.creditos, 0
    )
    ).toFixed(2)
}
console.log(promedioFinal(cursos));
