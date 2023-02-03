import { Link } from "react-router-dom";
import { Footer } from "./Footer"
import img from "../assets/home-img.avif";
import "../styles/Home.css";

export function Home() {
    return (
        <div className="home--container">
            <div className="hero">
                <div className="header--container">
                    <h1 className="header1">Welcome To Tae's Luxury Discount Store</h1>
                    <h2 className="header2">Where Everything is 80% off Retail Price!</h2>
                    <Link to="/shop">
                        <button type="button" className="hero--btn">
                            Shop Now
                        </button>
                    </Link>
                </div>
                    <div className="img--container">
                        <img src={img} alt="Gucci Bag" className="hero--img"/>
                    </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}