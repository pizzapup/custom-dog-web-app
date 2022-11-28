import { NavLink, Outlet } from "react-router-dom";
const pages = [
  { to: "/home", title: "Home" },
  { to: "/post", title: "Post" },
  { to: "/test", title: "Test" },
  { to: "/signup", title: "Sign Up" },
  { to: "/color", title: "Color" },
  { to: "/ai", title: "AI" },
];

export function Layout() {
  return (
    <>
      <nav>
        <ul>
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
      <Outlet />
    </>
  );
}
