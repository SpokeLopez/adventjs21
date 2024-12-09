export default function listGifts(letter) {
    return letter
        .split(/\s+/)
        .filter(regalo => regalo && !regalo.startsWith('_'))
        .reduce((contador, regalo) => {
            contador[regalo] = (contador[regalo] || 0) + 1;
            return contador;
        }, {});
}