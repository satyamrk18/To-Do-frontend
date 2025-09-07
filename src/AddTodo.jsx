import { useState, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";
import axios from "axios";
import "./AddTodos.css";
const AddTodo = () => {
  const [todos, setTodos] = useState({
    toIteam: "",
    priority: "Low",
    emoji: "❤️‍🔥",
  });
  const [emojiPickerOPen, setEmojiPickerOpen] = useState(false);

  const saveTodo = async () => {
    const submit = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/addTodos`,
      todos
    );
    if (submit) {
      alert(submit.data.message);
      window.location.href = "/";
    }
  };
  return (
    <div className="form-container">
      <h1>Add To Do</h1>
      <div className="input-form">
        <input
          type="text"
          placeholder="enter a task"
          className="inputs"
          value={todos.toIteam}
          onChange={(e) => {
            setTodos({ ...todos, toIteam: e.target.value });
          }}
        />
        <select className="inputs"
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
          emoji {todos.emoji}
        </button>
        {/* emoji picker */}
        <div className="input-emoji">
          <EmojiPicker className="emoji-container"
          height={350}
          width={`70%`}
            onEmojiClick={({ emoji }) => {
              setTodos({ ...todos, emoji: emoji });
              setEmojiPickerOpen(false);
            }}
            open={emojiPickerOPen}
          />
          
        </div>
        {/*submit button*/}
        <button
          type="button"
          onClick={() => {
            saveTodo();
          }}
        >
          Save To DO
        </button>
      </div>
    </div>
  );
};
export default AddTodo;
