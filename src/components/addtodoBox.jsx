import AddToDo from "../AddTodo.jsx";
import "./addtodoBox.css";

const AddToDoBox = ({ onClose }) => {
  return (
    <div className="addToDoBox">
      <p className="cancel-btn" onClick={onClose}>X</p>
      <AddToDo />
    </div>
  );
};

export default AddToDoBox;
