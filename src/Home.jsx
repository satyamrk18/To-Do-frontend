import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";

function Home() {
  const [todos, setTodos] = useState([]);
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
  return (
    <div>
      <h1>To Do List</h1>
      <div>
        {todos.map((todoItem,index) => {
          const { id, toIteam, priority, emoji, isDone, createdDate } =
            todoItem;
          return <div className={"cards"} key={index}>
            <h2>{`${id}]`} {toIteam} </h2>
             <h3 className={`${isDone ?"todo-done":"" }`}>priority = {priority}</h3>
             <h3>emoji = {emoji}</h3>
             <h3>Created Date {createdDate.replace("T"," ").slice(0,16)}</h3>
             <button onClick={()=>
              {
                deleteItem(id)
              }
             }>Delete Item</button>
          </div>;
        })}
      </div>
      <Link to="/addtodo" className="floating-btn">Add Todo</Link>
    </div>
  );
}

export default Home;
