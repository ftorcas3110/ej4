let seed = [
    {
        id: 1,
        nombre: "Eva",
        edad: 22,
        domicilio: { calle: "Antigua", num: 3, localidad: "Lucena" },
      },
      {
        id: 2,
        nombre: "Juan",
        edad: 21,
        domicilio: {calle: "Larios", num: 11, localidad: "Malaga"},
      },
      {
        id: 3,
        nombre: "Andrea",
        edad: 67,
        domicilio: {calle: "Nueva", num: 71, localidad: "Antequera"},
      },
      {
        id: 4,
        nombre: "Paco",
        edad: 21,
        domicilio: {calle: "Ancha", num: 6, localidad: "Montilla"},
      },
]

let alumnos = null;

export default function getAlumnos() {
    if (!alumnos) 
        alumnos = seed;
    
    return alumnos;
}

