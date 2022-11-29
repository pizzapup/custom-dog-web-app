import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/Logo/Logo";
import { Nav } from "../components/Nav/Nav";

export function Layout() {
  return (
    <>
      <header>
        <Link className="logo-link" to="/home">
          <Logo />
        </Link>
        <Nav />
      </header>
      <Outlet />
    </>
  );
}
