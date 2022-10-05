const balancedParens = (str) => {
    let parens = "(", parens2 = ")", num = 0;
    for (letter in str) {
        if (letter = parens || parens2) {
            num += 1;
        }
    }
    return (num % 2 === 0);
}
console.log(balancedParens("())"));

// const balancedParens = (str) => {
//     return str.val().match(/[()]/u);
// }
// console.log(balancedParens("0000())"));