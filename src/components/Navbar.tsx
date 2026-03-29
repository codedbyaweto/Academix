import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <nav className="navbar">
            <div className="logo">Academix</div>

            <button className="menu-btn" onClick={() => setOpen((prev) => !prev)}>
                ☰
            </button>

            <div className={`nav-links ${open ? "active" : ""}`}>
                <Link to="/" className="link">Home</Link>
                <Link to="/add" className="link">Add Result</Link>
                <Link to="/results" className="link">Results</Link>
            </div>
        </nav>
    );
};

export default Navbar;