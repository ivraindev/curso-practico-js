//helpers

function esPar (numero){
    return (numero % 2=== 0);
}

 
function calcularMediaAritmetica (lista){
    const sumaLista = lista.reduce (
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
    }

//calculadora mediana

function medianaSalariosCol (lista) {
    const mitad = parseInt (lista.length / 2);

    if (esPar (lista.length)) {

        const personaMitad1 = lista [mitad - 1];
        const personaMitad2 = lista [mitad];

        const mediana = calcularMediaAritmetica ([personaMitad1, personaMitad2]);
        return mediana;

    } else {
        const personaMitad = lista [mitad];
        return personaMitad;
    }
}


//Mediana general

const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salarioColSorted = salariosCol.sort (
    function (salaryA, SalaryB) {
        return salaryA - SalaryB;
    }
);
const medianaGeneralCol =   medianaSalariosCol (salarioColSorted);



//Mediana del top 10%


const spliceStart = (salarioColSorted.length * 90) / 100;
const spliceCount = salarioColSorted.length - spliceStart;

const salarioColtop10 = salarioColSorted.splice (
    spliceStart,
    spliceCount,
);

const medianaTop10col =   medianaSalariosCol (salarioColtop10);

console.log ({
    medianaGeneralCol,
    medianaTop10col,
});


