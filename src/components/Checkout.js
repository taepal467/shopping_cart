import {Footer} from "./Footer"
import "../styles/Checkout.css"
import image from "../assets/icons8-done-75.png"

export function Checkout() {
    function getRandomTenDigitNumber() {
        return Math.floor(Math.random() * 1000000000);
      }
      
      let randomNumber = getRandomTenDigitNumber();

    return(
        <>
        <div class="checkout--container">
            <h1>Your Order Has Been Received</h1>
            <img src={image} alt="done-checkmark"/>
            <h2>Thank you for your purchase!</h2>
            <p>Your order ID is: {randomNumber}</p>
            <p>You will receive an order confirmation email with details of your order and how to track your order</p>
        </div>
        <div>
            <Footer />
        </div>
        </>
    )
}