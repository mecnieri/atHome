let a = prompt("Type two words and I will tell you, are they anagrams or not ? \nPlease, type here first word")
let b = a.split("").sort()

let c = prompt("Type here second word")
let d = c.split("").sort()

let countCoincidence = 0;
if (a.length === c.length) {
    for (let i = 0; i < a.length; i++) {
        if (b[i] === d[i]) {
            countCoincidence++;
        } else {
            alert(`sorry, "${a}" and "${c}" are NOT anagrams !`);
        }
    }
}
else {
    alert(`sorry, "${a}" and "${c}" are NOT anagrams !`);
}
if (countCoincidence === a.length) {
    alert(`CONGRATS! "${a}" and "${c}" are anagrams !`)
}