import { useState } from "react"
import AddToDo from "../AddTodo.jsx"
import "./addtodoBox.css"
const addTodoBox = ()=>
{
    const [display,setDisplay] = useState("block")
    return(
        <div className="addToDoBox" style={{display:`${display}`}}>
            <p className="cancel-btn" onClick={()=>{setDisplay("none")}}>X</p>
         <AddToDo />
        </div>
    )
}
export default addTodoBox;