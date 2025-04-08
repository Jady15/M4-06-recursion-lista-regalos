// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// Función para buscar recursivamente un regalo en una lista determinada
function findGift(gifts, giftName, index = 0) {
    // Caso base: Si llegamos al final de la lista
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }
    // Caso base: Se encuentra el regalo.
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}`
    }
  // Realiza la llamada recursiva para seguir buscando el regalo.
    return findGift(gifts, giftName, index + 1);
}
// Casos de ejemplo
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));   // Expected output: "Lego está en la posición 3."
// Salida esperada:


// Caso cuando el regalo no está en la lista
giftToFind = "Camión";
console.log(findGift(gifts, giftToFind));   // Expected output: "Camión no está en la lista."


