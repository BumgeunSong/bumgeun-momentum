// const todolist = [];

const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoShow = document.querySelector("#todo-show");

const TODO_KEY = "saved"


console.dir(toDoForm)
console.dir(toDoInput)
console.dir(toDoShow)

function addToDo (event) {
    event.preventDefault();
    const newToDo = {
        text: toDoInput.value,
        id: Date.now()
    }

    toDoInput.value = "";
    saveToDo(newToDo);
    paintToDo(newToDo);
};

function saveToDo (newToDo) {
    toDoSave.push(newToDo);
    localStorage.setItem(TODO_KEY, JSON.stringify(toDoSave));
}

function paintToDo (newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span")
    const button = document.createElement("button");
    
    li.appendChild(span);
    li.appendChild(button);
    li.setAttribute("id", newToDo.id);
    button.setAttribute("class", "deleteButton");

    span.innerText = newToDo.text;
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    console.log(li);
    toDoShow.appendChild(li);
}


function deleteToDo (event) {
    //delete localStorage
    let targetID = event.target.parentElement.id;

    //load & filter localStorage
    toDoSave = JSON.parse(localStorage.getItem(TODO_KEY));
    toDoSave = toDoSave.filter(todoObj => todoObj.id != targetID);
    
    // replace localStorage
    localStorage.setItem(TODO_KEY, JSON.stringify(toDoSave));
    
    //delete HTML
    const deleteToDo = event.target.parentElement;
    deleteToDo.remove();
    console.log("deleted")
}


// loading existing to-dos
let loadedToDo = localStorage.getItem(TODO_KEY);
let toDoSave = [];

if (loadedToDo === null) {    
    console.log("no save yet");
} else {
    toDoSave = JSON.parse(loadedToDo);
    console.log("There is saved to do");
    toDoSave.forEach(item => paintToDo(item));
    // for (let i = 0; i < toDoSave.length; i++) {
        // paintToDo(toDoSave[i]);
    // };
    
}

toDoForm.addEventListener("submit", addToDo);



 