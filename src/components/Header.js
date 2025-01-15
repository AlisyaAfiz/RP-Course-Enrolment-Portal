import { Link, NavLink } from "react-router-dom";
import logo from "../assets/rp-logo.png";
import { useState } from "react";

export default function Header() {
    const [searchQuery, setSearchQuery] = useState("");
    
    const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement your search logic here
        console.log("Search query:", searchQuery);
    };

    return (
        <header className="container">
        <Link to="/">
            <img
            className="logo"
            src={logo}
            alt="Republic Polytechnic logo"
            title="Republic Polytechnic | Home"
            />
        </Link>

        <form className="search-bar" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>

        <nav>
            <NavLink to="/" className={getClass}>
            Home
            </NavLink>
            <NavLink to="/categories" className={getClass}>
            Diplomas
            </NavLink>
            <NavLink to="/register" className={getClass}>
            Register
            </NavLink>
        </nav>
    </header>
  );
}
