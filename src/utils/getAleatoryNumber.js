let ultimoNumero = null;

function obtenerNumeroAleatorio() {
    let nuevoNumero;
    do {
        nuevoNumero = Math.floor(Math.random() * 4);
    } while (nuevoNumero === ultimoNumero);
    
    ultimoNumero = nuevoNumero;
    return nuevoNumero;
}

export default obtenerNumeroAleatorio;