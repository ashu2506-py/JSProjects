document.addEventListener("DOMContentLoaded",()=>{
    const taskInput=document.getElementById("task")
const addTask=document.getElementById("addTask")
const taskList=document.getElementById("todo-list")

let tasks=[]
addTask.addEventListener("click",()=>{
    const taskText=taskInput.value.trim();
    if (taskText==="") return ;
    const newTask={
        id:Date.now(),
        text:taskText,
        completed:false
    }
    tasks.push(newTask);
    saveTasks()
    taskInput.value=""
    console.log(tasks);
})

function saveTasks()
{
    localStorage.setItem('tasks',JSON.stringify(tasks))
}
})