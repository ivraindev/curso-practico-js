//codigo cuadrado

console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");



function perimetroCuadrado (lado){
    return lado * 4;
} 


function areaCuadrada (lado){
    return lado * lado;
}

// const areaCuadrada = ladoCuadrado * ladoCuadrado;
// console.log("el área del cuadrado es: " + areaCuadrada + "cm^2");


console.groupEnd();

//codigo triángulo


console.group("Triángulo");


// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1 
//     +"cm, "
//     + ladoTriangulo2 
//     +"cm, "
//     + baseTriangulo 
//     + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo mide: " + alturaTriangulo + "cm");


function perimetroTriangulo (ladoTriangulo1, ladoTriangulo2 , baseTriangulo) {
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo (baseTriangulo, alturaTriangulo) {
    return (baseTriangulo * alturaTriangulo) / 2;
}


// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");


console.groupEnd();


//Codigo Circulo

console.group("Círculo");

//Radio

// function radioCirculo ()


// const radioCirculo = 4;
// console.log("El radio del círculo: " + radioCirculo + "cm");


//Diámetro

function diametroCirculo (radioCirculo){
    return radioCirculo * 2;
}

// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del círculo es: " + diametroCirculo + "cm");


//PI

const PI = Math.PI;
console.log("PI es: " + PI + "cm");


//Circunferencia

function perimetroCirculo (radio) {
    const diametro =  diametroCirculo (radio);
    return diametro * PI;
}

// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perímetro del círculo es: " + perimetroCirculo);


//Área

function areaCirculo (radio){
return (radio * radio) * PI;
}

// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El área del círculo es: " + areaCirculo + "cm^2");


console.groupEnd();


//HTML

function calcularPerimetroCuadrado () {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const perimetro = perimetroCuadrado (value);
    alert (perimetro);
}

function calcularArea () {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const area = areaCuadrada (value);
    alert (area);
}
