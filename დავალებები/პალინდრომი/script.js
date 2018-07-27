let a = prompt("please enter a word here and I will tell you, is the word palindrome or not")
a
let b = a.split("")
b

let c = b.reverse()
c

let d = c.join("")
d

if (a.toLowerCase() === d.toLowerCase()) {
    alert(`CONGRATS! ${a} is a palindrome`);
}
else {
    alert(`sorry :( ${a} is NOT a palindrome`);
}

