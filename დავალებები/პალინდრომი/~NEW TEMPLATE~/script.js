let a = prompt("please enter a word here and I will tell you, is the word palyndrom or not")
a
let b = a.split("")
b

let c = b.reverse()
c

let d = c.join("")
d

if (a.toLowerCase() === d.toLowerCase()) {
    alert(`CONGRATS! ${a} is a palyndrom`);
}
else {
    alert(`sorry :( ${a} is NOT a palyndrom`);
}

