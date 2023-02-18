// Escribir una funcion que regrese la cantidad de valores true que hay en un array
/* 
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
 */
// Regresar 0 si el array es vacio

const val = val => {
    //val = [];
    let resolve =0;
    let contador= val.lenght;

    if (contador != 0 ){

        for (i=0 ; i<contador; i++) {

            if (val[i] == true){
                resolve ++;
            }

        }

    } 
    console.log(resolve);
    
}

val([0,0,0,1]);









// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion

const mayor = (uno,dos) =>{

    if(uno%dos == 0) return dos;
    return mayor(dos%uno,uno); //Usamos el algoritmo de euclides :)
}

console.log(mayor(8,2));

// Encontrar los primeros n elementos de la serie fibonacci
// Usar recursion

const fibo = n => {

    

    if (n<2) return n;
    
    return (fibo(n-1)+fibo(n-2));
    
}


const printFibo = m => {

    let fibiNum = 0;
    let comparador = m;
    while (fibiNum < comparador){
        console.log(fibo(m));
        m --;
        fibiNum ++;
    }

    console.log(0);


}

printFibo(8);



//reto 03

const day = daylab => {
    daylab = new  Date().getDay();
    let laboral = false;

    if (daylab <= 5) laboral = true; 

    return laboral;



}

console.log(day());



const hour = hourlab => {
    hourlab = new Date().getHours();
    let laboral2 = false;

    if (hourlab >9 && hourlab < 18 ) laboral2 = true;

    return laboral2;

    
}

console.log(hour());

//Funcion nombre de un pais y su area

const proporcion = (nombre,area) => {

    let wordArea = 510000000;
    
    area = (area * 100) / wordArea;

    console.log(`la propocion de ${nombre} es ${area} % `);




}

proporcion("haiti",50000000);


// Messener alerta

const onLine = people => {

    

    if (people == 1){
        console.log(`user 1 online`);
    }else if (people == 2) {
        console.log(`user 1 and 2 online`);

    }else if (people > 2){
        console.log(`user1 and ${people -1} online`);
    }else{console.log("nobody online");}

}  

onLine(0);


//return 0 or 1

const retornar = numBin =>{
    switch(numBin){
        case 0:
           return numBin = 1;

        case 1:
            return numBin = 0;

        default:
            return numBin = "error";



    }
}

console.log(retornar(3));


//numero n de figura piramidal

const piramind = bloq =>{

    
    let calculoTotal;

    calculoTotal = ((bloq + 1)* bloq)/2;

    return calculoTotal;

    
    
}

console.log(piramind(4));



