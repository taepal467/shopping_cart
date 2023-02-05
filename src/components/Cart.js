import { Link } from "react-router-dom";
import {Footer} from "../components/Footer"
import "../styles/Cart.css";

export function Cart (props) {

    const {cartItems, onAddItem, onRemoveItem} = props;
    const total = cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.currentPrice * currentValue.qty, 0)
    const payments = cartItems.reduce((accumulator, currentValue) => accumulator + (currentValue.currentPrice * currentValue.qty) / 4, 0);

    return(
        <div className="cart--container">
            <h1 className="cart--header">Order Summary</h1>
            <div className="cart--subHeader">
            {cartItems.length === 0 && <div className="subheader--display">your bag is empty
                <Link to="/shop">
                    <button type="button" className="continue--btn">Continue Shopping</button>
                </Link>
                </div>
            }
            </div>
            {cartItems.map(item => (
                <div key={item.id} className="cart--items">
                 
                    <div className="cart--item--info">
                        <img src={item.img} alt={item.brandName} className="cart--card--img card--img"/>
                        <div className="item--brandName">{item.brandName}</div>
                        <div className="item--handbag">{item.handbag}</div>
                    </div>
                    <div className="cart--btns">
                        <button onClick={() => onAddItem(item)} className="add--btn btn">+</button>
                        <button onClick={() => onRemoveItem(item)} className="subtract--btn btn">-</button>
                    </div>
                    <div className="item--qty">
                        {item.qty} x $ {item.currentPrice}
                    </div>
                </div>
            ))}

   
            {cartItems.length !== 0 && (
                <div className="cart--total">
                    <h2>Total ${total}</h2>
                    <p>or 4 interest-free payments of ${payments.toFixed(2)} with <span className="special--txt">Klarna</span> <button type="button" className="p--btn">learn more</button></p>
                    <Link to="/shop"><button type="button" className="continue--btn">Continue Shopping</button></Link>
                    <Link to="/checkout"><button type="button" className="checkout--btn">Checkout</button></Link>
                </div>
            )}

           <div>
            <Footer />
           </div>
        </div>
    );
}


