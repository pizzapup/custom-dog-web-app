import { NavLink } from "react-router-dom";
import { pages } from "../../App";

export function Nav() {
  return (
    <>
      <nav>
        <input
          type="checkbox"
          name="nav-menu-btn"
          className="nav-btn"
          label="nav menu button"
          title="navigation menu button"
        />
        <ul className="nav">
          {pages.map((page, index) => (
            <li key={index}>
              <NavLink
                to={page.to}
                className={({ isActive }) =>
                  isActive ? "navlink navlink--active" : "navlink"
                }
              >
                {page.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
