import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">

            <h1>My Website</h1>

            <div className="nav-links">

                <Link to="/home">
                    <button>Home</button>
                </Link>

                <Link to="/products">
                    <button>Products</button>
                </Link>

                <Link to="/explore">
                    <button>Explore</button>
                </Link>

            </div>

        </nav>
    );
}

export default Navbar;