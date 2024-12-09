export default function contarOvejas(ovejas) {
    return ovejas.filter(({ name, color }) =>
        color.toLowerCase() === 'rojo' &&
        ['a', 'n'].every(letra => name.toLowerCase().includes(letra))
    );
}