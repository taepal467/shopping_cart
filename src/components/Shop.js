import { Footer } from "./Footer";
import '../styles/Shop.css';
import img from "../assets/lv1.webp"

export const Shop = () => {

    return(
        <div>
            <div className="inventory--card">
                <img src={img} className="card--img"/>
                    <div className="card--info">
                        <p className="card--item--name">Louis Vuitton Alma BB</p>
                        <small className="retail--price">Retail Price: $1760</small>
                        <small className="tlds--price">TLDS Price: $352</small>
                    </div>

                    <img src={img} className="card--img"/>
                    <div className="card--info">
                        <p className="card--item--name">Louis Vuitton Alma BB</p>
                        <small className="retail--price">Retail Price: $1760</small>
                        <small className="tlds--price">TLDS Price: $352</small>
                    </div>

                    <img src={img} className="card--img"/>
                    <div className="card--info">
                        <p className="card--item--name">Louis Vuitton Alma BB</p>
                        <small className="retail--price">Retail Price: $1760</small>
                        <small className="tlds--price">TLDS Price: $352</small>
                    </div>

                    <img src={img} className="card--img"/>
                    <div className="card--info">
                        <p className="card--item--name">Louis Vuitton Alma BB</p>
                        <small className="retail--price">Retail Price: $1760</small>
                        <small className="tlds--price">TLDS Price: $352</small>
                    </div>
            </div>
            <Footer />
        </div>
    );
}