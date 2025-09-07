import { useState, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./AddTodos.css";
const Edit = () => {
  const [todos, setTodos] = useState({
    toIteam: "",
    priority: "Low",
    emoji: "❤️‍🔥",
    isDone:false,
  });
  const [emojiPickerOPen, setEmojiPickerOpen] = useState(false);
  const { id } = useParams();

//to load the existing detail of the to do item for edit
const loadTodo = async ()=>
{
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/todos/${id}`);
    const idData = response.data.data;
    setTodos({
        toIteam:idData.toIteam,
        priority:idData.priority,
        emoji:idData.emoji,
        isDone:idData.isDone
    })
}
useEffect(()=>{loadTodo()},[id])

//saving the data
  const saveTodo = async () => {
    const submit = await axios.put(
      `${import.meta.env.VITE_BASE_URL}/todos/${id}`,
      todos
    );
    if (submit) {
      alert(submit.data.message);
      window.location.href = "/";
    }
  };
  return (
    <div className="form-container">
      <div>
        <h1>Edit To Do : {id}</h1>
        <input
          type="text"
          placeholder="enter a task"
          value={todos.toIteam}
          onChange={(e) => {
            setTodos({ ...todos, toIteam: e.target.value });
          }}
        />
        <select
          onChange={(e) => {
            setTodos({ ...todos, priority: e.target.value });
          }}
          value={todos.priority}
        >
          <option value="High">Hign</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button
          onClick={() => {
            setEmojiPickerOpen(!emojiPickerOPen);
          }}
        >
          emoji
        </button>
        {/* emoji picker */}
        <EmojiPicker
          onEmojiClick={({ emoji }) => {
            setTodos({ ...todos, emoji: emoji });
            setEmojiPickerOpen(false);
          }}
          open={emojiPickerOPen}
        />
        {/*submit button*/}
        <button
          type="button"
          onClick={() => {
            saveTodo();
          }}
        >
          Update To DO
        </button>
      </div>
    </div>
  );
};
export default Edit;
