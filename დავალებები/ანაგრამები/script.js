let a = prompt("Type two words and I will tell you, are they anagrams or not ? \nPlease, type here first word")
let b = a.split("")
let c = b.sort()

console.log(c.length);
let d = prompt("Type here second word")
let e = d.split("")
let f = e.sort()
f
console.log(d.length);
let x = 0;
if (a.length === d.length) {

    for (let i = 0; i < c.length; i++) {
        if (c[i] === f[i]) {
            x++
            x
        } else {
            alert(`sorry, "${a}" and "${d}" are NOT anagrams !`);
        }
    }
}
else {
    alert(`sorry, "${a}" and "${d}" are NOT anagrams !`);
}
if(x === a.length){
    alert(`CONGRATS! "${a}" and "${d}" are anagrams !`)
}