const decodeString = (str) => {
    let arr = "abcdefghijklmnopqrstuvwxyz"
    let decoded = [];
    for (let i = 1; i < str.length; i++) {
        let shift = Number(str[0]);
        let index = Number(arr.indexOf(str[i]));
        decoded.push(arr[index+shift]);
    }
    return decoded.join("");
}

console.log(decodeString("2fcjjm"));