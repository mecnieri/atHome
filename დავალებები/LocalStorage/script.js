let myStorage = window.localStorage;
$(document).ready(function () {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            // console.log(json);
            // console.log(json[0].name);
            // console.log(json[0].name = "Giganti");

            myStorage.setItem("users", JSON.stringify(json));

            for (let i = 0; i < json.length; i++) {
                document.getElementById("demo").innerHTML += `<br>${json[i].id} : ${json[i].name} `
                document.getElementById("demo").appendChild(document.createElement("div")).setAttribute("id", `d${i}`)
            }
            // .setAttribute("onclick", `averageFunc(${i}, prompt('Please, enter number here'))`)
            $("#id").click(function(){
                $("p").hide(1000);
                alert("The paragraph is now hidden");
            }); 
        })
        .catch(error => {
            console.log(error);
        })
})

console.log(JSON.parse(myStorage.users)[0].id = 143);
// console.log(JSON.parse(myStorage.setItem("users", ))[0].id = 143);
console.log(JSON.parse(myStorage.users)[0]);

function averageFunc(element, todaysResult) {
    console.log(element);
    console.log(todaysResult);
    console.log(json[element].name);
    console.log(json[element].name = todaysResult);
}

    //     console.log(element.innerHTML = todaysResult);
    //     console.log(myStorage.getItem(element));
    //     console.log(JSON.parse(myStorage.getItem(element)));
    //     console.log(JSON.parse(myStorage.getItem(element)).name = "Giorgi Abzianidze");
    //     console.log(JSON.parse(myStorage.getItem(element)));

    //     // JSON.stringify(myStorage.setItem(element))

    // localStorage.setItem(element, todaysResult);
    // console.log(JSON.stringify(
    // myStorage.setItem(JSON.stringify(i))
    // document.getElementById("demo").innerHTML = `${JSON.parse(myStorage.getItem(element)).name} <br>`


    // $(document).ready(function () {

    //     let h = document.getElementById('search-text')
    //     console.log(h.value);
    //     let notes = ["gandzi", "bandzi", "kvariati"]

    //     $('#btn').click(function () {
    //         console.log(h.value);
    //         notes.push(h.value);
    //         console.log(notes);
    //         localStorage.setItem("note title", notes)
    //     })
    //     console.log(localStorage.getItem("note title"));
    //     let not = document.getElementById('notes')
    //     console.log(not);

    //     not.appendChild("da")
    // })