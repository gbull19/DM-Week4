// const makeUnique = (str) => {
//     const unique = new Set();
//     for (let i = 0; i < str.length; i++) {
//         unique.add(str[i]);
//     }
//     return Array.from(unique).join("");
// }
// console.log(makeUnique("helloworld"));


// const makeUnique = (str) => {
//     let unique = "";
//     for (let i = 0; i < str.length; i++) {
//         if (!unique.includes(str[i])) {
//             unique = unique + str[i];
//         }
//     }
//     return unique;
// }
// console.log(makeUnique("helloworld"));


const makeUnique = (str) => {
    let unique = "";
    for (let letter in str) {
        if (!unique.includes(str[letter])) {
            unique = unique + str[letter];
        }
    }
    return unique;
}
console.log(makeUnique("helloworld"));