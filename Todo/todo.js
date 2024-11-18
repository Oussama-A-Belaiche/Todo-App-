const AddTask = () => { 

    let TaskBox = document.getElementsByClassName("todo")[0] 
    let task = document.getElementById("TaskInput")

    if (task.value) { 

        let div = document.createElement("div")
        div.className = "taskdiv" 

        let checkbox = document.createElement("input") 
        checkbox.type ="checkbox"
        checkbox.className = "completed"


        let p = document.createElement("p") 
        p.className = "task"
        p.textContent = task.value
        checkbox.onclick = () => { 
            checkbox.checked ?    p.style.textDecoration = "line-through" : p.style.textDecoration = "none"
        }


        let deletTask = document.createElement ("button") 
        deletTask.className = "delete" 

        deletTask.textContent = "Delete Task"
        deletTask.onclick = () => { 
            TaskBox.removeChild (div)
        }

        div.appendChild(checkbox)
        div.appendChild(p)
        div.appendChild(deletTask)

        TaskBox.appendChild(div)



    }
}