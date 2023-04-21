

const conjuntoNum = [1,2,3,4,5,6,7,8]

const nuevoConjunto = conjuntoNum.filter(numPares)

function numPares(valorActual) {
    /* valorAcutal %2 ===0 ; realiza el resto o el residuo en una división" si el 0 es true, por tanto se agrega a el nuevoConjunto*/
    return  valorActual%2===0
}

console.log(nuevoConjunto)