function multiplicarMatrices(matriz1, matriz2) {
    const filas1 = matriz1.length;
    const columnas1 = matriz1[0].length;
    const filas2 = matriz2.length;
    const columnas2 = matriz2[0].length;

    if (columnas1 !== filas2) {
        throw new Error('Las matrices no son válidas para la multiplicación. El número de columnas de la primera matriz debe ser igual al número de filas de la segunda matriz.');
    }

    const resultado = [];
    for (let i = 0; i < filas1; i++) {
        resultado[i] = [];
        for (let j = 0; j < columnas2; j++) {
            let suma = 0;
            for (let k = 0; k < columnas1; k++) {
                suma += matriz1[i][k] * matriz2[k][j];
            }
            resultado[i][j] = suma;
        }
    }

    console.log(resultado)
    return resultado;
}

module.exports = { multiplicarMatrices };
