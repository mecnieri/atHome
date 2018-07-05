let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let a = 0;
let b = 0;



let params = {
    grandParentSelector: ".table",

    parentTagName: "div",
    pAttName: "id",
    pAttValue: "trainingDay ",

    elementTagName: "div",
    attName: "id",
    attValue: "student_TrnDay_",
    count: 16,
}

document.getElementById("addDaybutton").addEventListener("click", function () {

    a++;

    //#region date 

    if (a % 4 == 1 || a % 4 == 2 || a % 4 == 3) {
        b += 2;
    }

    else if (a % 4 == 0) {
        b++;
    }

    let apr = new Date(2018, 3, 28 + b, )
    let day = days[apr.getDay()];
    let date = apr.getDate();
    let month = months[apr.getMonth()];
    let newdate = day + " </br> " + month + " " + date;


    //#endregion 


    function addingColumn(arg) {

        let grandParentClass = document.querySelector(arg.grandParentSelector);
        let parentNode = document.createElement(arg.parentTagName);
        grandParentClass.appendChild(parentNode).setAttribute(arg.pAttName, arg.pAttValue + a);


        for (let i = 0; i < arg.count; i++) {

            let parentId = document.querySelector(".table").lastElementChild;
            let elementNode = document.createElement(arg.elementTagName);
            let elementText = document.createTextNode("0");
            parentId.appendChild(elementNode).setAttribute(arg.attName, arg.attValue + i + "_" + a);
            elementNode.appendChild(elementText);
        }

        document.getElementById(arg.pAttValue + a).firstChild.innerHTML = newdate;

    }
    addingColumn(params);



});

document.getElementById("removeDay").addEventListener("click", function () {

    // Removes an element from the document
    if (a % 4 == 1 || a % 4 == 2 || a % 4 == 3) {
        b -= 2;
    }

    else if (a % 4 == 0) {
        b--;
    }

    let apr = new Date(2018, 3, 28 + b, )
    let day = days[apr.getDay()];
    let date = apr.getDate();
    let month = months[apr.getMonth()];
    let newdate = day + " " + month + " " + date;

    // console.log(b);
    console.log(newdate);
    console.log(apr.getDay());
    a--;
    let element = document.querySelector(".table").lastElementChild;
    element.parentNode.removeChild(element);

    console.log(a);
});



function averageFunc(elmnt, x) {
    elmnt.innerHTML = x;

    let sum = 0;
    
    for (let j = 1; j < a; j++) {
      
        sum += Number(document.getElementById("student_TrnDay_2_" + j ).textContent);
        average = sum / j;
    }
     console.log(sum);
     console.log(average);
     document.getElementById("av1").innerHTML = average;
}