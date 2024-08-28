import { useState } from "react";


export default function (){
    let data={name:"",email:"",password:""};
    let [inputData,setInputData]=useState(data);

    let handleInput=(e)=>{
        setInputData({...inputData,[e.target.name]:e.target.value});
        console.log(inputData);
    }

    let handleSubmit=(e)=>{
        e.preventDefault();
        
    }
    return (
        <>
            <h1>This is the form</h1>

           <div>
                {/* <label for="username">Enter your name</label> */}
                <input type="text" id="username" name="name" placeholder="Enter your name" value={inputData.name} onChange={handleInput}></input>
                <button onClick={handleSubmit}>Submit</button>
           </div>

           <div>
                {/* <label for="username">Enter your email</label> */}
                <input type="text" id="email" name="email" placeholder="Enter your email" value={inputData.email} onChange={handleInput}></input>
                <button onClick={handleSubmit}>Submit</button>
           </div>

           <div>
                {/* <label for="username">Enter your name</label> */}
                <input type="text" id="paswrd" name="password" placeholder="Enter your password" value={inputData.password} onChange={handleInput}></input>
                <button onClick={handleSubmit}>Submit</button>
           </div>
        </>
    )
}