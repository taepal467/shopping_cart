import '../styles/Card.css';

export default function Card(props) {
    return (
        <div className="card">
        <img src={props.item.img} className="card--img" alt={props.item.brandName}/>
            <div className="card--info">
                <p className="card--item--brand">{props.item.brandName}</p>
                <p className="card--item--handbag">{props.item.handbag}</p>
                <p className="retail--price">Retail: ${props.item.prevPrice}</p>
                <p className="tlds--price">TLDS Price: ${props.item.currentPrice}</p>
            </div>
        </div>
    )
}