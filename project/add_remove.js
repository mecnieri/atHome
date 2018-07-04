// ახალი, სასურველი ელემენტის შესაქმნელად საჭიროა თეგი და შიგთავსი(ტექსტი) 

//ვქმნით თეგს 
let tag = document.createElement("h1");

// ცალკე ვქმნით შიგთავსს(ტექსტს) 
var teqsti = document.createTextNode("ai chavsvit.");

// ამ ტექსტს ვათავსებთ თაგში 
tag.appendChild(teqsti);

// ახალი ელემენტი უკვე შექმნილია.

// ახლა ვსაზღვრავთ მისამართს, სადაც გვინდა ამ ელემენტის მოთავსება 

let misamarti = document.getElementById("a5");


// მისამართში ვათავსებთ ახალ ელემენტს 
misamarti.appendChild(tag);