const taskListContainer=document.querySelector("ul")
const deleteIcons=document.querySelectorAll(".fa-trash")
const editIcons=document.querySelectorAll(".fa-pen-to-square")
const taskItems=document.querySelectorAll(".task-item")
const taskTitles=document.querySelectorAll(".task-title")
const taskList=document.querySelectorAll("li")
const addTaskButton=document.querySelector(".add-task")
const taskInput=document.querySelector(".task-input")


function handleClick(taskTitle) {
    if (taskTitle.style.textDecoration === "line-through") {
        taskTitle.style.textDecoration = "none";
    } else {
        taskTitle.style.textDecoration = "line-through";
    }
}

for(let i=0;i <taskTitles.length;i++) {
    taskTitles[i].addEventListener("click",() => {
        handleClick(taskTitles[i])
    })
}

for(let i=0;i <deleteIcons.length;i++) {
    deleteIcons[i].addEventListener("click",() => {
        deleteIcons[i].closest("li").remove()
    })
}

for(let i=0;i <editIcons.length;i++) {
    editIcons[i].addEventListener("click",() => {
        const editInput=document.createElement("input")
        editInput.type="text"
        editInput.value=taskTitles[i].textContent
        taskItems[i].replaceChild(editInput,taskTitles[i])

        editInput.addEventListener("keydown",(event) => {
           if(event.key=="Enter") {
            if(editInput.value.trim() !== "") {
                taskTitles[i].textContent=editInput.value
            }
            taskItems[i].replaceChild(taskTitles[i],editInput)
            }
        })
    })
}

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
        editIcon.addEventListener("click", () => {
            const editInput=document.createElement("input")
            editInput.type="text"
            editInput.value=taskTitle.textContent
            taskDiv.replaceChild(editInput,taskTitle)
    
            editInput.addEventListener("keydown",(event) => {
               if(event.key=="Enter") {
                if(editInput.value.trim() !== "") {
                    taskTitle.textContent=editInput.value
                }
                taskDiv.replaceChild(taskTitle,editInput)
                }
            })
        })
        editIcon.style.marginRight = "10px";
        const deleteIcon = document.createElement("i")
        deleteIcon.classList.add("fa-solid", "fa-trash")
        deleteIcon.addEventListener("click", () => {
            deleteIcon.closest("li").remove()
        });

        iconsDiv.appendChild(editIcon)
        iconsDiv.appendChild(deleteIcon)
        taskDiv.appendChild(iconsDiv)

        taskTitle.addEventListener("click", () => {
            handleClick(taskTitle);
        });

        taskListContainer.appendChild(newTask)
        taskInput.value=""
    }
}

addTaskButton.addEventListener("click",handleAddTask)
// On click of the add task button the newTask(li tag) should be a child of the ul tag
//Once this is done the new task should appear on the screen