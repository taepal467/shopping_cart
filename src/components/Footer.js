import '../styles/Footer.css';

export function Footer() {
    return(
        <div className='footer--container'>
            <div className='newsletter--container'>
                <form className='form'>
                    <p>Newsletter</p>
                    <p>Subscribe to receive news from TLDS</p>
                    <label for="email"></label>
                    <input type="email" id="email" placeholder="Enter your email address"></input>
                    <button type="submit" className='form--btn'>subscribe</button>
                </form>
            </div>

            <div className="contact--container">
                <p>Contact Us</p>
                <p>TLDS Customer Care is available Monday to Sunday, 7AM to 7PM PT, to answer all your questions. 
                Please <a href='#'>email us</a>, call <a href="#">1.800.555.5555 </a> or <a href="#">live chat </a>
                 with a TLDS Advisor.
                </p>
            </div>

            <div className='about--container'>
                    <p>Tae's Luxury Discount Store</p>
                <ul>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Careers</a>
                    </li>
                    <li>
                        <a href="#">Stores</a>
                    </li>
                    <li>
                        <a href="#">Follow Us</a>
                    </li>
                    <li>
                        <a href="#">Refund Policy</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">Do Not Sell or Share My Personal Information</a>
                    </li>
                </ul>
    
            </div>
         
        </div>
    );
}