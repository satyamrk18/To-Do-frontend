import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import AddTodo from "./AddTodo.jsx"
const App = () => {
  return (
    <div>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addtodo" element={<AddTodo />}></Route>
       </Routes>
       </BrowserRouter>
    </div>
  );
};
export default App;
