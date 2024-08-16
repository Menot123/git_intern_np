const numbers = ["I", "am", "the", "bone"];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
    txt += " " + value;
}
console.log(txt);