
/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck es un arreglo de String
 * @returns {String} regresa la ultima carta del deck y la retorna
 */

export const pedirCarta = (deck) => {

    if (!deck ||  deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}