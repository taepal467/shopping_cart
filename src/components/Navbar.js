import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import img from "../assets/bag.png";
import "../styles/Navbar.css";

export function Navbar() {
    return(
        <>
        <nav className="nav">
            <img src={logo} alt="Logo" className="logo"/>
            <ul className="nav--list">
                <li className="nav--items">
                    <Link to='/' className="nav--link">Home</Link>
                </li>
                <li className="nav--items">
                    <Link to='/shop' className="nav--link">Shop</Link>
                </li>
                <button><img src={img} alt="shopping-bag" className="bag"/></button>
            </ul>
        </nav>

        <Outlet />
        </>
    );
}