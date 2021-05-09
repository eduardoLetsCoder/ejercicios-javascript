//1. Compara tu edad (o una cualquiera) con la de Fernando Simón. muestra en consola si eres menor, mayor o tienes la misma edad que él.
//if()

let edadFernandoSimon = 57;

let miEdad = 35;

if(edadFernandoSimon > miEdad){
    console.log('Mi edad es menor que la de Fernando Simón.');
} else if(edadFernandoSimon == miEdad){
    console.log('Mi edad es la misma que la de Fernando Simón.');
} else {
    console.log('Mi edad es mayor que la de Fernando Simón.');
}

//2. Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una string que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
//if(), %

function parImpar(num){
    let numero = num;
    if(numero % 2 == 0){
        console.log("El número es par.");
    } else {
        console.log("El número es impar.");
    }
}

//3. recorre la array y muestra los valores múltiplos de 3 en consola
//for(), if(), %

let numeros = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43];

for(let i=0; i<numeros.length; i++){
    if(numeros[i] % 3 == 0){
        console.log(numeros[i]);
    }
}

//4. Dada la array, escribe una función que encuentre el número menor. (No utilizar Math.min())
//for(), if()

function numeroMenor(arr){
    let array = arr;
    let menor;
    for(let i=0; i<array.length; i++){
        if(i == 0){
            menor = array[0];
        } else {
            resultadoResta = array[i] - menor;
            if(resultadoResta < 0){
                menor = array[i];
            }
        }
    }
    return menor;
}

//5. Utilizando la array anterior, encuentra el número más grande. (No utilizar Math.max())
//for(), if()

function numeroMayor(arr){
    let array = arr;
    let mayor;
    for(let i=0; i<array.length; i++){
        if(i == 0){
            mayor = array[0];
        } else {
            resultadoResta = mayor - array[i];
            if(resultadoResta < 0){
                mayor = array[i];
            }
        }
    }
    return mayor;
}

//6. Utilizando la array anterior, encontrar los números que se repiten, guardarlos en una array (si aun no existen en esta) y mostrarlos en consola
//for(), if(), push(), includes() || indexOf()

function numerosRepetidos(arr){
    let array = arr;
    let repetidos = [];
    let enRepetidos = false;
    for(let i=0; i<array.length; i++){
        enRepetidos = false;
        for(let j=0; j<array.length; j++){
            if(j != i){
                if(array[i] == array[j]){
                    if(repetidos.length == 0){
                        repetidos.push(array[i]);
                    }
                    for(let k=0; k<repetidos.length; k++){
                        if(repetidos[k] == array[i]){
                            enRepetidos = true;
                        }
                    }
                    if(enRepetidos == false){
                        repetidos.push(array[i]);
                    }
                }
            }
        }
    }
    return repetidos;
}

//7. Utilizando la array anterior, elimina los numeros pares
//for(), if(), %, splice()

function quitarPares(arr) {
    let array = arr;
    let arraySinPares = [];
    for(let i=0; i<array.length; i++){
        if(array[i] % 2 != 0){
            arraySinPares.push(array[i]);
        }
    }
    return arraySinPares;
}

//8. Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random() para obtener números aleatorios 
//entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, 
//repitiendo 36.000 veces esta operación.
//Math.random(), for(), push()

function lanzarDados(){
    let dadoMin = 1;
    let dadoMax = 6;
    let numDados = 2;
    let aparicionesSuma = [];
    let tiradas = 36000;
    for(let i=(dadoMin*numDados); i<=(dadoMax*numDados); i++){
        let newElement = [i, 0];
        aparicionesSuma.push(newElement);
    }
    for(let i=0; i<tiradas; i++){
        let tirada_1 = Math.floor(Math.random() * (dadoMax + 1 - dadoMin)) + dadoMin;
        let tirada_2 = Math.floor(Math.random() * (dadoMax + 1 - dadoMin)) + dadoMin;
        let sumaTiradas = tirada_1 + tirada_2;
        for(let j=0; j<aparicionesSuma.length; j++){
            if(sumaTiradas == aparicionesSuma[j][0]){
            aparicionesSuma[j][1]++;
        }
      }
    }
    return aparicionesSuma;
}

//9. Haz que el ejercicio anterior pase la array obtenida a la función de este ejercicio. Calcula el promedio de todos los lanzamientos de dados.
//for()

function calcularMedia(arr){
    let array = arr;
    let suma;
    let tiradas;
    for(let i=0; i<array.length; i++){
        let numeroAparecido = array[i][0];
        let cantidadDeVeces = arrai[i][1];
        tiradas += cantidadDeVeces;
        suma += (numeroAparecido * cantidadDeVeces);
    }
    let media = suma / tiradas;
    return suma;
}

//10. Haz una copia de la array del ejercicio 3, ordenala de forma ascendente, y coloca el siguiente número donde le corresponda.
//Array.from(), sort(), splice(), for(), if()

let numeros = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43];

function ordenarNumeros(arr){
    let array = arr;
    let sortedArray = [];
    sortedArray = array.sort((a, b) => {
        return a -b;
    })
    return sortedArray;
}

//11. Dado el siguiente objeto, muestra en consola una string con el nombre y apellido.
let mentor = {
    nombre: "Lluís",
    apellido: "Garcia",
    edad: 27,
    poblacion: "Sallent",
    empresa: "Let's Coder",
    hobbies: ["futbol", "codigo", "videojuegos"],
    mascotas: [{
        nombre: "Tuca",
        tipo: "perro",
        sexo: "hembra"
    },
    {
        nombre: "Tam",
        tipo: "perro",
        sexo: "macho"
    }]
};

console.log(`${mentor.nombre} ${mentor.apellido}`);

//12. Dado el objecto anterior, crea una array con todas las keys y luego úsala para mostrar en consola todas las values
//Object.keys(), for()

function mostrarValores(obj){
    let objeto = obj;
    let clavesObjeto = Object.keys(objeto);
    let valores = [];
    for(let i=0; i<clavesObjeto.length; i++){
        let clave = clavesObjeto[i];
        valores.push(objeto[clave]);
    }
    console.log(valores);
}

//13. Dado el objeto anterior, añade las edades a las mascotas. Luego muestra cada una de las mascotas en consola por separado
let edadTuca = 4;
let edadTam = 2;

for(let i=0; i<mentor.mascotas.length; i++){
    if(mentor.mascotas[i].nombre == "Tuca"){
        Object.defineProperty(mentor.mascotas[i], "edad", {
            value: edadTuca,
            writable: true,
            configurable: true,
            enumerable: true
        })
    } else {
        Object.defineProperty(mentor.mascotas[i], "edad", {
            value: edadTam,
            writable: true,
            configurable: true,
            enumerable: true
        })
    }
    console.log(mentor.mascotas[i]);
}
  