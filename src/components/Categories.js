import { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { getCategories } from "../api";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    const fetchedCategories = getCategories();
    setCategories(fetchedCategories);
  }, []);

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Schools</h1>

      <input
        type="text"
        placeholder="Search categories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul className="categories">
        {filteredCategories.map(cat => (
          <li key={cat.id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "category-active" : null
              }
              to={cat.id}
            >
              {cat.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
