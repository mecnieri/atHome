let myStorage = window.localStorage;
$(document).ready(function () {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())

        .then(json => {

            myStorage.setItem("users", JSON.stringify(json));

            for (let i = 0; i < json.length; i++) {

                let div = document.createElement("div")
                div.textContent = json[i].id + " - " + json[i].name
                div.setAttribute('id', json[i].id)
                let demo = document.querySelector('#demo')
                demo.appendChild(div)

                // console.log(div);

            }


            document.addEventListener("click", function(e){
                demo.removeChild(e.target)
            })


        })
        .catch(error => {
            console.log(error);
        })
})


function averageFunc(element, todaysResult) {
    console.log(element);
    console.log(todaysResult);
    debugger
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