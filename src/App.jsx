import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import EditToDo from "./edit.jsx"
import "./App.css"
const App = () => {
  return (
    <div class="container">
  <div class="teal-glow"></div>
   <div>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/edit/:id" element={<EditToDo />}></Route>
       </Routes>
       </BrowserRouter>
    </div>
</div>

  );
};
export default App;
