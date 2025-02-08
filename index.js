const taskItems=document.querySelectorAll(".task-item")
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