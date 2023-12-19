import { Link } from "react-router-dom";
import Home from "../assets/home-icon.png";
import "./Navbar.css"

function Navbar() {
  return (
    <>
      <nav className="Navbar">
        <ul>
          <Link to="/">
            <img src={Home}></img>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
