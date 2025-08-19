const inputTodo=document.getElementById("input-todo");
const addTodo=document.getElementById("add-todo");
const todoContainer=document.querySelector(".container");

addTodo.addEventListener("click",e=> {
    if(inputTodo.value != ""){
        displayTodo(inputTodo.value);
        inputTodo.value="";
    }
})

function displayTodo(todoValue){
    let todoWrapper=document.createElement("div");
    todoWrapper.classList.add("todo-wrapper");

    todoWrapper.innerHTML=`
    <div class="todo bg-gradient-to-r from-amber-300 to-gray-100   text-2xl flex items-center justify-between mx-8 my-2 px-2 py-2 rounded mt-10">
                <p>${inputTodo.value}</p>
                <div class="actions">
                    <input type="checkbox" class="mr-4">
                    <button class="delete-btn bg-red-600 text-white px-2 py-1 rounded">Delete</button>
                </div>
            </div>
    `;

    let deleteButton=todoWrapper.querySelector(".delete-btn");
    deleteButton.addEventListener("click",function deleteTodo(){
        todoWrapper.remove();
    });


    todoContainer.appendChild(todoWrapper);
}