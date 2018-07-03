
let a = 0;



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
    

    while (a % 7 != 1 && a % 7 != 3 && a % 7 != 5 && a % 7 != 6) {
        a++;
        console.log(a);
    }
    
    
     
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let apr = new Date(2018, 3, 29 + a, )
     
    let day = days[apr.getDay()];
    let date = apr.getDate();
    let month = months[apr.getMonth()];
    
    
    let newdate = day + " " + month + " " + date;

    function name(arg) {
        
        let grandParentClass = document.querySelector(arg.grandParentSelector);
        let parentNode = document.createElement(arg.parentTagName);
        // grandParentClass.appendChild(parentNode).setAttribute(arg.pAttName, arg.pAttValue + a);
        grandParentClass.appendChild(parentNode).setAttribute(arg.pAttName, previousSibling());
        
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
    
    
    a++;
     
});

document.getElementById("removeDay").addEventListener("click", function () {
    
    // Removes an element from the document
        while (a % 7 == 1 || a % 7 == 3 || a % 7 == 5 || a % 7 == 6) {
         a--;
         console.log(a);
     }
   let element = document.querySelector(".table").lastElementChild;
   element.parentNode.removeChild(element);
   a--;

});