let params = {
    tagName: "h2",
    content: "obieqtidan h2 is damateba",
    count: 8,
    parentSelector: "#para4",
    childCount: "para4",
}



function name(arg) {
    for (let i = 0; i < arg.count; i++) {

        let elementNode = document.createElement(arg.tagName);
        let elementText = document.createTextNode(arg.content);

        let parentId = document.querySelector(arg.parentSelector);


        elementNode.appendChild(elementText);
        parentId.appendChild(elementNode);
    }
  
    let count = document.getElementById(arg.childCount).childElementCount;
    document.getElementById("demo").innerHTML = count;

    document.getElementsByTagName("h2")[1].setAttribute("id", "gawitleba");
    console.log(document.getElementsByTagName("h2"))
}


name(params);


// atributi 
// clasi 