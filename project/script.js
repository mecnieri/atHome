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
    // content: "0",
    attName: "class",
    attValue: "green",
    count: 15,
}

document.getElementById("addDaybutton").addEventListener("click", function () {


    a++
    
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
    let newdate = day + " " + month + " " + date;

    console.log(newdate);
    console.log(apr.getDay());

    //#endregion 


    function name(arg) {
        
        let grandParentClass = document.querySelector(arg.grandParentSelector);
        let parentNode = document.createElement(arg.parentTagName);
        grandParentClass.appendChild(parentNode).setAttribute(arg.pAttName, arg.pAttValue + a);

        console.log(document.querySelector(".table").lastElementChild.id + a);

        for (let i = 0; i < arg.count; i++) {

            let parentId = document.querySelector(".table").lastElementChild;
            let elementNode = document.createElement(arg.elementTagName);
            let elementText = document.createTextNode(i);
            parentId.appendChild(elementNode).setAttribute(arg.attName, arg.attValue + i);
            elementNode.appendChild(elementText);
        }

        document.getElementById(arg.pAttValue + a).firstChild.innerHTML = newdate;

    }
    name(params);


 
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