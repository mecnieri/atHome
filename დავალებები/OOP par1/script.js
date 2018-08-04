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

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//     },
//     q() {
//         this.step++;
//         return this;
//     },
//     showStep: function () { // shows the current step
//         alert(this.step);
//     }
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); //

// ladder.up().up().up().up().q().down()
// ladder.showStep();


// EXERCISE 6  constructor function

// function Calculator() {

//     this.read = function () {
//         this.num1 = prompt("here")
//         this.num2 = prompt("aseve")
//     },
//         this.sum = function () {
//             return Number(this.num1) + Number(this.num2);
//         },
//         this.mul = function () {
//             return this.num1 * this.num2;
//         }
// }

// let calculator = new Calculator()
// calculator.read();
// alert("Sum = " + calculator.sum());
// alert("Mul = " + calculator.mul());


// EXERCISE 7


// function Accumulator(startingValue) {
//     this.value = Number(startingValue);
//     this.read = function () {
//         this.num1 = prompt("here")
//         this.value += Number(this.num1)

//     }

// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();

// alert(accumulator.value);


// // EXERCISE 8 
// function Calculator() {
//     this.addOperator = function (name, func) {
//         this.addOperator[name] = func
//     }
//     this.calculate = function (str) {
//         b = str.split(" ")
//         if (b[1] == "+") {
//             let c = Number(b[0]) + Number(b[2])
//             console.log(c);
//         }
//         else if (b[1] == "-") {
//             let c = Number(b[0]) - Number(b[2])
//             console.log(c);
//         } else {

//             for (key in this.addOperator) {
//                 if (key === b[1]) {
//                     console.log(this.addOperator[key](b[0], b[2]));
//                 }
//             }
//         }
//     }
// }


// let powerCalc = new Calculator()

// // powerCalc.addOperator("*", (a, b) => a * b);
// powerCalc.addOperator("/", (a, b) => a / b);
// powerCalc.addOperator("**", (a, b) => a ** b)
// powerCalc.calculate("2 ** 4");
