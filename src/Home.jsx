import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import AddToDoBox from "./components/addtodoBox.jsx"
function Home() {
  const [todos, setTodos] = useState([]);
  const [addToDoDisplay, setAddToDoDisplay] = useState("none");
  //to load all the todos
const loadTodos = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/todos`);
    console.log(response.data.data);
    setTodos(response.data.data);
  }
  useEffect(()=>{loadTodos()}, []);

  //to delete selected todo
  const deleteItem = async (id)=>
  {
 const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/todos/${id}`)
 if(response)
 {
  alert(response.data.message);
  loadTodos();
 }
  }

  //mark as a check to do
  const markAsCheached = async (id,isDone)=>
  {
     const responce = await axios.patch(`${import.meta.env.VITE_BASE_URL}/todos/${id}/status`,{isDone});
     if(responce)
     {
      console.log(isDone)
      alert(responce.data.message);
      loadTodos();
     }
  }
 
  return (
    <div className="container">
      <h1>To Do List</h1>
      <div style={{display:`${addToDoDisplay}`}}><AddToDoBox /></div>
      <div>
        {todos.map((todoItem,index) => {
          const { id, toIteam, priority, emoji, isDone, createdDate } =
            todoItem;
          return <div className={"cards"} key={index}>
            <h2>{`${id}]`} {toIteam} </h2>
             <h3 className={`${isDone ?"todo-done":"" }`}>priority = {priority}</h3>
             <h3>emoji = {emoji}</h3>
             <h3>Created Date {createdDate.replace("T"," ").slice(0,16)}</h3>
             <p>mark as check </p><input 
             type="checkbox"
             checked={isDone}
             onChange={(e)=>
             {
              markAsCheached(id,e.target.checked);
             }
             }
             />
             <Link to={`edit/${id}`}>Edit </Link>
             <button onClick={()=>
              {
                deleteItem(id)
              }
             }>Delete Item</button>
          </div>;
        })}
      </div>
      
      <button className="floating-btn" onClick={()=>{setAddToDoDisplay("block")}}>Add Todo</button>
    </div>
  );
}

export default Home;
  