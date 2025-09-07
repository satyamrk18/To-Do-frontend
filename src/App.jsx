import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import AddTodo from "./AddTodo.jsx"
import EditToDo from "./edit.jsx"
const App = () => {
  return (
    <div>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addtodo" element={<AddTodo />}></Route>
        <Route path="/edit/:id" element={<EditToDo />}></Route>
       </Routes>
       </BrowserRouter>
    </div>
  );
};
export default App;
