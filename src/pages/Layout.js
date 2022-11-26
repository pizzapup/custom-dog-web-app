import { NavLink, Outlet } from "react-router-dom";
import "../styles/input.css";
import "../styles.css";
export function Layout() {
  return (
    <>
      <nav>
        test
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/createpost">Post</NavLink>
        <NavLink to="/test">Test</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/color">color</NavLink>
        <NavLink to="/colorAI">AI</NavLink>
      </nav>
      <Outlet />
      {/* <LoginForm /> */}
      {/* <CreatePost /> */}
    </>
  );
}
