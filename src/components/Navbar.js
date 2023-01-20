import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

export function Navbar() {
    return(
        <>
        <nav>
        <img src={logo} alt="Logo" className="logo"/>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/shop'>Shop</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
        </>
    );
}