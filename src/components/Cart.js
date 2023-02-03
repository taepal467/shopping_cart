export function Cart (props) {

    const {cartItems, onAddItem, onRemoveItem} = props;
    console.log("cart component props: ", cartItems)
    return(
        <div>
            <h1>Cart Items</h1>
            <h2>brand name: {props.item}</h2>
            <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
            {cartItems.map(item => (
                <div key={item.id}>
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
        </div>
    );
}

// 02/01 -- the "item" Props are not passing through.*Face Palm* 
