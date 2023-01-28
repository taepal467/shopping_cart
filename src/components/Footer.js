import '../styles/Footer.css';
import twitter from "../assets/icons8-twitter-30.png";
import facebook from "../assets/icons8-facebook-30.png";
import instagram from "../assets/icons8-instagram-30.png"

export function Footer() {
    return(
        <div className='footer--container'>
            <div className='footer--content'>

                <div className='newsletter--container'>
                    <form className='form'>
                        <p className='header'>Newsletter</p>
                        <p className='newsletter--content'>Subscribe to receive news from TLDS</p>
                        <label htmlFor="email"></label>
                        <input type="email" id="email" placeholder="Enter your email address" className='input'></input>
                        <button type="submit" className='form--btn'>Subscribe</button>
                    </form>
                </div>

                <div className="contact--container">
                    <p className='header'>Contact Us</p>
                    <p className='contact--content'>TLDS Customer Care is available Monday to Sunday, 7AM to 7PM PT, to answer all your questions. 
                    Please <button type="button" className='contact--link'>email us</button>, 
                    call <button type="button" className='contact--link'>1.800.555.5555 </button> or 
                    <button type="button" className='contact--link live--chat'>    live chat </button>
                    with a TLDS Advisor.
                    </p>
                </div>

                <div className='about--container'>
                        <p className='header'>Tae's Luxury Discount Store</p>
                    <ul className='footer--list'>
                        <li className='list--item'>
                            <button type="button" className='footer--link'>About</button>
                        </li>
                        <li className='list--item'>
                            <button type="button" className='footer--link'>Careers</button>
                        </li>
                        <li className='list--item'>
                            <button type="button" className='footer--link'>Order Status</button>
                        </li>
                        <li className='list--item'>
                            <button type="button" className='footer--link'>Shipping Policy and Rate</button>
                        </li>
                        <li className='list--item'>
                            <button type="button" className='footer--link'>Returns</button>
                        </li>
                        <li className='list--item'>
                            <button type="button" className='footer--link'>Your Privacy Rights</button>
                        </li>
                        <li className='list--item'>
                            <button type="button" className='footer--link'>Do Not Sell or Share My Personal Information</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='icons--container'>
                <button type="button" className='icon--btn'>
                    <img src={twitter} alt="twitter"/>
                </button>
                <button type="button" className='icon--btn'>
                    <img src={facebook} alt="facebook"/>
                </button>
                <button type="button" className='icon--btn'>
                    <img src={instagram} alt="instagram"/>
                </button>
            </div>
            <div className='small--tag'>
            <small>&copy;2023 Created By <a href="https://github.com/taepal467" target='_blank' rel="noreferrer" className='github--link'>taepal467</a> </small>
            </div>
        
        </div>
    );
}