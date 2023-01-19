import { Outlet, Link } from "react-router-dom";

export function Navbar() {
    return(
        <>
        <nav>
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