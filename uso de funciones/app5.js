let a = prompt("Ingresa un numero a");
let b = prompt("Ingresa un numero b");

function suma(n1,n2){
    return parseInt(n1) + parseInt(n2);
}

function resta(n1,n2){
    return parseInt(n1) - parseInt(n2);
}

function multi(n1,n2){
    return parseInt(n1) * parseInt(n2);
}

function division(n1,n2){
    return parseInt(n1) / parseInt(n2);
}

let opcion = parseInt(prompt(`
    Operacion:
    1. Suma
    2. Resta
    3. Multiplicacion
    4. Divison`));
switch(opcion){
    case 1:
        console.log(`La suma es: ${suma(a,b)}`);
    break;
    case 2:
        console.log(`La resta es: ${resta(a,b)}`);
    break;
    case 3:
        console.log(`La multiplicacion es: ${multi(a,b)}`);
    break;
    case 4:
        console.log(`La division es: ${division(a,b)}`);
 
}




