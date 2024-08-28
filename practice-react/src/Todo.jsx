import react from "react";
import { useState} from "react";

export default function (){
    let [task,setTask]=useState("");
    let [newValue,setnewvalue]=useState([ ]);

    let handleInput=(event)=>{
        setTask(event.target.value);
    }

    let handleClick=()=>{
        setnewvalue((newValue)=>{
            const updateList=[...newValue,task]
            console.log(updateList);
            setTask("");
            return updateList;
        })
    }

    let handleDelete=(i)=>{
        const updateListData = newValue.filter((elem,id)=>{
            return i!=id;
        })
        setnewvalue(updateListData);
    }

    let removeAll=()=>{
        setnewvalue([]);
    }

    return(
        <>
            <div>
                <h1>Todo using React js</h1>
                <h2>Todo List</h2>
                <input type="text" placeholder="Enter your task" value={task} onChange={handleInput}></input>
                <button onClick={handleClick}>Add Task</button>
                <p>Here is Your Task</p>
                {newValue != [] && newValue.map((data,i)=>{
                    return(
                        <>
                           <div className="core">
                                <li key={i}>{data}</li>
                                <button onClick={()=>handleDelete(i)}>Delete</button>
                           </div>
                        </>
                     )
                    })
                }  

                {newValue.length >=1 && <button onClick={removeAll}>Delete All</button>} 
                
            </div>
        </>
    )
}