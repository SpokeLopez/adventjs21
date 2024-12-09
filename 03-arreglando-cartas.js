export default function isValid(letter) {
    let stack = [];
    let dentroParentesis = false;
    let contenidoParentesis = false;

    for (let i = 0; i < letter.length; i++) {
        let char = letter[i];

        if (char === '(') {
            if (dentroParentesis) return false;
            dentroParentesis = true;
            contenidoParentesis = false;
            stack.push(char);
        } else if (char === ')') {
            if (!dentroParentesis || stack.length === 0 || !contenidoParentesis) return false;
            dentroParentesis = false;
            stack.pop();
        } else if (dentroParentesis && (char === '{' || char === '[')) {
            return false;
        } else if (dentroParentesis) {
            contenidoParentesis = true;
        }
    }

    return stack.length === 0 && !dentroParentesis; // Verifica que todos los paréntesis estén cerrados
}