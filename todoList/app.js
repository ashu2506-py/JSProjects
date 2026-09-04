document.addEventListener("DOMContentLoaded",()=>{
    const taskInput=document.getElementById("task")
const addTask=document.getElementById("addTask")
const taskList=document.getElementById("todo-list")

let tasks=JSON.parse(localStorage.getItem("tasks")) || []
tasks.forEach((task)=>renderTask(task))
addTask.addEventListener("click",()=>{
    const taskText=taskInput.value.trim();
    if (taskText==="") return ;
    const newTask={
        id:Date.now(),
        text:taskText,
        completed:false
    }
    tasks.push(newTask);
    saveTasks();
    renderTask(newTask)  
    taskInput.value=""
    console.log(tasks);
})


function renderTask(task){
    console.log(task)
    const li=document.createElement("li")
    li.setAttribute("data-id",task.id);
    if (task.completed) li.classList.add("completed")
    li.innerHTML=`
    <span>${task.text}</span>
    <button>delete</button>`

    li.addEventListener("click",(e)=>{
        if(e.target.tagName === "BUTTON") return;
        task.completed=!task.completed;
        li.classList.toggle("completed")
        saveTasks()
    })

    li.querySelector("button").addEventListener("click",(e)=>{
        e.stopPropagation();
        tasks=tasks.filter((t)=> t.id!==task.id);
        li.remove()
    })
    taskList.appendChild(li)

}

function saveTasks()
{
    localStorage.setItem('tasks',JSON.stringify(tasks))
}
})