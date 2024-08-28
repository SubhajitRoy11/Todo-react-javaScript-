let input=document.querySelector("#input");
let button=document.querySelector("#button");
let h3=document.querySelector("#h3");
let taskList = document.querySelector("#taskList");

let tasks=[];

button.addEventListener("click",(e)=>{
    e.preventDefault();
    let task=input.value.trim();
    if(task){
        tasks.push(task);
        input.value="";
        printarr();
    }
})

function printarr(){
    taskList.innerHTML="";
    tasks.map((task,index)=>{
        let li=document.createElement("li");
        li.textContent=task;
        taskList.appendChild(li);

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", () => {
            tasks.splice(index, 1); 
            printarr(); 
        })

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    })

}

