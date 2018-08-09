let myStorage = window.localStorage;
$(document).ready(function () {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            console.log(json[5].name = "Giorgi Abzianidze");
            console.log(json[5].username = "Giganti");
            for (key in json) {
                myStorage.setItem(key, JSON.stringify(json[key]));
            }

            let length = JSON.parse(myStorage.length)
            for (let i = 0; i < length; i++) {
                document.getElementById("demo").innerHTML += `${JSON.parse(myStorage.getItem(i)).id} <br>`
                document.getElementById("demo").innerHTML += `${JSON.parse(myStorage.getItem(i)).name} <br>`
                document.getElementById("demo").innerHTML += `${JSON.parse(myStorage.getItem(i)).website} <br>`
                document.getElementById("demo").appendChild(document.createElement("div")).setAttribute("onclick", "averageFunc(this, Number(prompt('Please, enter number here')))")

            }
        })
        .catch(error => {
            console.log(error);
        })




})
    function averageFunc() {
        document.getElementById("demo").innerHTML =`${JSON.parse(myStorage.getItem(2)).name} <br>`
    }


    $(document).ready(function () {

        let h = document.getElementById('search-text')
        console.log(h.value);
        let notes = ["gandzi", "bandzi", "kvariati"]
    
        $('#btn').click(function () {
            console.log(h.value);
            notes.push(h.value);
            console.log(notes);
            localStorage.setItem("note title", notes)
        })
        console.log(localStorage.getItem("note title"));
        let not = document.getElementById('notes')
        console.log(not);
        
        not.appendChild("da")
    })