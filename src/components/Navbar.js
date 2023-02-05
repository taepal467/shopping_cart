import { Outlet, Link } from "react-router-dom";
import icon from "../assets/icons8-handbag-64.png";
import img from "../assets/bag.png";
import "../styles/Navbar.css";

export function Navbar(props) {

    const {countCartItems} = props;
    console.log("count cart items: ",props)

    return(
        <>
        <nav className="nav">
            <div className="nav--title">
                <img src={icon} alt="Logo" className="logo"/>
                <p className="title">Tae's <span className="span--item">Luxury</span> Discount Store</p>
            </div>
         
            <ul className="nav--list">
                <li className="nav--items">
                    <Link to='/' className="nav--link">Home</Link>
                </li>
                <li className="nav--items">
                    <Link to='/shop' className="nav--link">Shop</Link>
                </li>
       
                <Link to='/cart'>
                    {countCartItems ? (
                        <button type="button" className="count--btn">{countCartItems }</button>
                    ) : (
                        ''
                    )}
                    <button type="button" className="nav--btn">
                        <img src={img} alt="shopping-cart" className="cart"/>
                    </button>
                </Link>
            </ul>
        </nav>

        <Outlet />
        </>
    );
}