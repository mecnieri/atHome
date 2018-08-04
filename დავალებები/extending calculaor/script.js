// EXERCISE 8 
function Calculator() {
    this.addOperator = function (name, func) {
        this.addOperator[name] = func
    }
    this.calculate = function (str) {
        b = str.split(" ")
        if (b[1] == "+") {
            let c = Number(b[0]) + Number(b[2])
            console.log(c);
        }
        else if (b[1] == "-") {
            let c = Number(b[0]) - Number(b[2])
            console.log(c);
        } else {

            for (key in this.addOperator) {
                if (key === b[1]) {
                    console.log(this.addOperator[key](b[0], b[2]));
                }
            }
        }
    }
}

let powerCalc = new Calculator()

powerCalc.addOperator("*", (a, b) => a * b);
powerCalc.addOperator("/", (a, b) => a / b);
powerCalc.addOperator("**", (a, b) => a ** b)
powerCalc.calculate("3 * 4");
