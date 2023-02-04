import "../styles/Cart.css";

export function Cart (props) {

    const {cartItems, onAddItem, onRemoveItem} = props;
    const total = cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.currentPrice * currentValue.qty, 0)

    return(
        <div>
            <h1 className="cart--header">Order Summary</h1>
            <div className="cart--subHeader">{cartItems.length === 0 && <div>your bag is empty</div>}</div>
            {cartItems.map(item => (
                <div key={item.id} className="cart--items">
                 
                    <div className="cart--item--info">
                        <img src={item.img} alt={item.brandName} className="cart--card--img"/>
                        <div className="item--brandName">{item.brandName}</div>
                        <div className="item--handbag">{item.handbag}</div>
                    </div>
                    <div className="cart--btns">
                        <button onClick={() => onAddItem(item)} className="add--btn">+</button>
                        <button onClick={() => onRemoveItem(item)} className="subtract--btn">-</button>
                    </div>
                    <div className="item--qty">
                        {item.qty} x $ {item.currentPrice}
                    </div>
                </div>
            ))}

   
            {cartItems.length !== 0 && (
                <>
                <hr></hr>
                {total}
                </>
            )}
           
             

        </div>
    );
}


