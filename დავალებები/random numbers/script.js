let t = tbody.children;
let counts = [];
let counts2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

for (let i = 0; i < t.length; i++) {
    let d = t[i].children;
    for (let j = 0; j < d.length; j++) {
        counts.push(d[j]);
    }
}

for (let q = 1; q <= counts.length; q++) {
    counts[q - 1].innerText = q;
}


document.getElementById("randomNum").addEventListener("click", function () {

    function myFunction(k) {
        //  counts2[k]++

        let y = ++counts2[k]
        console.log(y);
        let j = y % 4
        switch (j) {
            case (1):
                counts[k].style.background = "gray";
                break;
            case (2):
                counts[k].style.background = "green";

                break;
            case (3):
                counts[k].style.background = "blue";

                break;
            case (0):
                counts[k].style.background = "white";
                break;
            default:
                break;
        }

    }
    myFunction(Math.floor((Math.random() * 20)))


})