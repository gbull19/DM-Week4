// const tshirtSorter = (str) => {
//     return str.split("").sort().reverse().join("");
// }
// console.log(tshirtSorter("lms"))


// const tshirtSorter = (str) => {
//     let alpha = "abcdefghijknopqrtuvwxyz".split("");
//     let arr = Array.from(str); 
//     arr = arr.filter((ele) => {
//         return !alpha.includes(ele);
//     })
//     return arr.sort().reverse().join("");
// }
// console.log(tshirtSorter("lmsaasdcvjisfdb"));


const tshirtSorter = (str) => {
    let sml = /^[s.m.l]$/;
    let arr = Array.from(str); 
    arr = arr.filter((ele) => {
        return !alpha.includes(ele);
    })
    return arr.sort().reverse().join("");
}
console.log(tshirtSorter("lmsaasdcvjisfdb"));