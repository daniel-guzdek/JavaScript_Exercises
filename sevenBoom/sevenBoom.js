function sevenBoom(arr) {
    arr = arr.join("");

    if(arr.includes("7")) {
        return "BOOM";
    } else {
        return "None of the items contain 7 within them.";
    }
}

console.log(sevenBoom([34, 45, 6]));
module.exports = sevenBoom;