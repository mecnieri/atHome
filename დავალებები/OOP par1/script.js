// EXERCISE 3 

// let calculator = {

//     read() {
//         this.num1 = prompt("here")
//         this.num2 = prompt("aseve")
//     },
//     sum() {
//         return Number(this.num1) + Number(this.num2);
//     },
//     mul() {
//         return this.num1 * this.num2;
//     }
// }
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());


// EXERCISE 4

// function makeUser() {
//     return {
//     name: "John",
//     ref: this
//     };
//     };
//     let user = makeUser();
//     alert(user.ref.name);



// EXERCISE 5

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
    },
    q() {
        this.step++;
        return this;
    },
    showStep: function () { // shows the current step
        alert(this.step);
    }
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); //

ladder.up().up().up().up().q().down()
ladder.showStep();