const taskItems=document.querySelectorAll(".task-item")
const taskList=document.querySelectorAll("li")
console.log(taskList)
function handleClick(taskItem) {
    if(taskItem.style.textDecoration=="line-through") {
        taskItem.style.textDecoration = "none";
    }else {
        taskItem.style.textDecoration = "line-through"
    }
}
for(let i=0;i <taskItems.length;i++) {
    taskItems[i].addEventListener("click",() => {
        handleClick(taskItems[i])
    })
}

const addTaskButton=document.querySelector(".add-task")
const taskInput=document.querySelector(".task-input")
newTask.appendChild(taskDiv);
taskList.appendChild(newTask);


function handleAddTask() {
    if(taskInput.value != "") {
        const newTask = document.createElement("li");
        const taskDiv = document.createElement("div")
        taskDiv.classList.add("task-item")
        newTask.appendChild(taskDiv)

        const taskTitle = document.createElement("p") 
        taskTitle.classList.add("task-title")
        taskTitle.textContent = taskInput.value
        taskDiv.appendChild(taskTitle)

        const iconsDiv = document.createElement("div")
        const editIcon = document.createElement("i")
        editIcon.classList.add("fa-solid", "fa-pen-to-square")
        const deleteIcon = document.createElement("i")
        deleteIcon.classList.add("fa-solid", "fa-trash")
        iconsDiv.appendChild(editIcon)
        iconsDiv.appendChild(deleteIcon)
        taskDiv.appendChild(iconsDiv)
        taskList.push(newTask)
    }
}

addTaskButton.addEventListener("click",handleAddTask)
// On click of the add task button the newTask(li tag) should be a child of the ul tag
//Once this is done the new task should appear on the screen