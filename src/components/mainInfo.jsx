import "./maininfo.css";
import {MoveRight} from "lucide-react"
const MainInfo = () => {
  return (
    <div className="main-info-container">
      <h1> Add Your ToDo's Now</h1>
      <h2>
        Easily manage your personal tasks, family projects, and team’s work all
        in one place.
      </h2>
      <button className="getStarted-btn">
        Get Started. it's Free <MoveRight />
      </button>
    </div>
  );
};
export default MainInfo;
