import "./navbar.css"
import { Github,Linkedin } from 'lucide-react';
const Navbar = ()=>
{
    return(
        <div className="navbar">
            <h1>ToDo's</h1>
            <div className="icn">
                <Github  className="icn-item"/>
                <Linkedin className="icn-item"/>
            </div>
        </div>
    )
}
export default Navbar;