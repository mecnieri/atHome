let  me = {
    saxeli : "giorgi",
    gvari : "abzianidze",
    swavla(){
        console.log("me vswavlob");
    }
}

me.saxeli

let me = {
    "saxeli": "giorgi",
    "gvari": "abzianidze",
    mimateba() {
        return 5 + 2
    }
}

me //?
me.saxeli //?
typeof me.saxeli //?
typeof me //?
me.mimateba //?
typeof me.mimateba //?

me.mimateba() //?
typeof me.mimateba() //?


let a = "a"
let a2 = a.split("")
a2


let b = "gama"
let b2 = b.split("")
b2

for (let i = 0; i < a2.length; i++) {

    for (let j = 0; j < b2.length; j++) {
        if (a2[i] === b2[j]) {
            console.log(a2[i]);
        }
    }
}