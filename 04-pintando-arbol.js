export default function createXmasTree(height) {
    let tree = "";

    for (let i = 0; i < height; i++){
        const spaces = "_".repeat(height - i - 1);
        const stars = "*".repeat(2 * i + 1);
        tree += `${spaces}${stars}${spaces}\n`;
    }

    const trunk = "_".repeat(height - 1) + "#" + "_".repeat(height - 1);
    tree += `${trunk}\n${trunk}`;

    return tree;
}