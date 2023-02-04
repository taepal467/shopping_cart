export function Cart (props) {

    const {cartItems, onAddItem, onRemoveItem} = props;
    const total = cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.currentPrice * currentValue.qty, 0)

    return(
        <div>
            <h1>Cart Items</h1>
            <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
            {cartItems.map(item => (
                <div key={item.id}>
            
                        {/* <img src={item.img} alt={item.brandName}/> */}
            
                    <div>{item.brandName}</div>
                    <div>
                        <button onClick={() => onAddItem(item)}>+</button>
                        <button onClick={() => onRemoveItem(item)}>-</button>
                    </div>
                    <div>
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


