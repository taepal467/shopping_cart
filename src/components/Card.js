import '../styles/Card.css';

export default function Card(props) {
    return (
        <div className="card">
        <img src={props.img} className="card--img" alt={props.brandName}/>
            <div className="card--info">
                <p className="card--item--brand">{props.brandName}<span></span></p>
                <p className="card--item--handbag">{props.handbag}</p>
                <p className="retail--price">Retail:$ {props.prevPrice}</p>
                <p className="tlds--price">TLDS Price:$ {props.currentPrice}</p>
            </div>
        </div>
    )
}