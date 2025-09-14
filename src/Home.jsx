import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import AddToDoBox from "./components/addtodoBox.jsx";
import Navbar from "./components/Navbar.jsx";
import { Plus } from "lucide-react";
import MainInfo from "./components/mainInfo.jsx";

function Home() {
  const [todos, setTodos] = useState([]);
  const [showAddToDo, setShowAddToDo] = useState(false);

  const loadTodos = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/todos`);
    setTodos(response.data.data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const deleteItem = async (id) => {
    const response = await axios.delete(
      `${import.meta.env.VITE_BASE_URL}/todos/${id}`
    );
    if (response) {
      alert(response.data.message);
      loadTodos();
    }
  };

  const markAsChecked = async (id, isDone) => {
    const response = await axios.patch(
      `${import.meta.env.VITE_BASE_URL}/todos/${id}/status`,
      { isDone }
    );
    if (response) {
      alert(response.data.message);
      loadTodos();
    }
  };

  return (
    <div className="container">
      <Navbar />
      <MainInfo />
      <div className="floating-box">
        {showAddToDo && <AddToDoBox onClose={() => setShowAddToDo(false)} />}
      </div>

      <div className="card-container">
        {todos.map((todoItem) => {
          const { id, toIteam, priority, emoji, isDone, createdDate, note } =
            todoItem;
          return (
            <div className="cards" key={id}>
              <details>
                <summary>
                  <div className="summary-display">
                    <h2 className={isDone ? "todo-done" : ""}>
                      {`${id}]`} {toIteam}
                      {emoji}
                    </h2>
                    <h3 className="priority">{priority}</h3>
                    <h3 className="see-task-btn">see task</h3>
                  </div>
                </summary>
                <div className="inner-card">
                  <div className="mark-as-read">
                  <input
                    type="checkbox"
                    checked={isDone}
                    onChange={(e) => markAsChecked(id, e.target.checked)}
                  />
                  <p>mark as check </p>
                  </div>
                  <p><h2>To Do Description :-</h2> {note}</p>

                  <h3>
                    Created Date :- {createdDate.replace("T", " ").slice(0, 16)}
                  </h3>
                  <div className="btns">
                    <button>
                      <Link to={`edit/${id}`} className="btn">
                        Edit{" "}
                      </Link>
                    </button>
                    <button onClick={() => deleteItem(id)}>Delete Item</button>
                  </div>
                </div>
              </details>
            </div>
          );
        })}
      </div>

      <button className="floating-btn" onClick={() => setShowAddToDo(true)}>
        Add Todo <Plus />
      </button>
    </div>
  );
}

export default Home;
