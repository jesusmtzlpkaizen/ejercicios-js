// Encontrar el nombre de una sociedad secreta segun los datos de los nombres para cada integrante
// secretName(["Felipe", "Fer", "Zabdiel"]) -> FFZ
// secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']) -> CJMPRR
// secretName(['Harry', 'Ron', 'Hermione']) -> HHR


const secretName = array => {

    const firstWord = array.map(val =>{
        return val.charAt(0);
    });
    
    firstWord.sort((uno,dos) => {

        if (uno == dos){
            return 0;
        } else if (uno<dos) {
            return -1;
        }
        return 1;

    });

    return firstWord.join();


}

console.log(secretName(["aba","ceta","deta","anda","lada"]));


// onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']) -> 'mockIng99, J0eyPunch and one 1 more online' mostrar solo los primeros dos


const showTwo = parametro => {
    let lang1 = parametro.length;
    
    if (lang1 <= 0){
        return "nadie en linea";
    } else if (lang1 == 1) {
        return `${parametro[0]} online`;
    } else if (lang1 == 2) {
        return `${parametro[0]} and ${parametro[1]} online`;
    } else {
        return `${parametro[0]},${parametro[1]} and ${lang1-2} online`;
    }

}
console.log(showTwo(["jess","mes","vic"]));


// Crear una funcion que tome 2 parametros, (numero, longitud) y regrse un array de longitud cantidad de numeros multiplos del numero por parametro
// arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102]

const multiply = (num1,num2) =>{
    let multiplos = [];
    for (let init=0; init<num2;init++){
        multiplos.push(num1*(init+1));
    }
    console.log(multiplos);
}
multiply(2,5);

// Escrbir una funcion que descubra si el array es dominante positivo
// Un array es positivo dominante cuando la mayoria de sus elementos son positivos -> [1, -2, 55, 10]
// positiveDom([-1, -3, -5, 4, 6767]) -> false

const dominion = leDomion => {
    let contTrue = 0;
    let contFalse = 0;
    let contIndefinido = 0;
    leDomion.forEach((comparar)=>{
        if (comparar<0){
            contFalse++;
        }else if (comparar>0) {
            contTrue++;
        }else {
            contIndefinido++;
        }
    });

    if (contIndefinido>0){
        console.log("introcucir parametros aceptables");
    } else if (contTrue==contFalse){
        console.log("nadie domina");
    } else if (contFalse>contTrue){
        console.log(false);
    } else {
        console.log(true);
    }

    
    

}
dominion([-1]);


// Promedio antipode
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos:
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales
// - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8]
// - Dividir cada numero del array final entre 2  -> [3.5, 12, 4]

const antipode = arreglo =>{
    let longAntipode = arreglo.length;
    let final = longAntipode;
    let part1 = [];
    let part2 = [];
    let part3 = [];
    if ((longAntipode%2) ==0){
        longAntipode = longAntipode/2;
        part1 = arreglo.slice(0,longAntipode);
        part2 = arreglo.slice(longAntipode,final+1);
    } else {
        longAntipode = (longAntipode/2)-0.5;
        part1 = arreglo.slice(0,longAntipode);
        part2 = arreglo.slice(longAntipode+1,final+1);
    }
    part2 = part2.reverse();
    part1.forEach((element,iterative) =>{
        part3 [iterative] = element + part2[iterative];
    });
    console.log(part3);
}

antipode([1,2,3,4,5,6,7]);

