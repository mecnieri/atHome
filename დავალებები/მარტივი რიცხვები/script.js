
let firstNumber = Number(prompt("insert first number here"));
let lastNumber = Number(prompt("insert last number here"));

let totalPrimeNumbers = 0;
for (let x = firstNumber; x <= lastNumber; x++) {
    let b = 0;
    for (let i = 0; i <= x ; i++) {

        if (x % i == 0) {
            b++;
        }
    }
    if (b == 2) {
        document.write("<br> &emsp;" + x);
        totalPrimeNumbers++;
    }
}

document.write(`<br><br>There are ${totalPrimeNumbers} prime numbers between ${firstNumber} and ${lastNumber}`);
