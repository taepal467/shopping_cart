import '../styles/Card.css';

export default function Card(props) {
    return (
        <div className="card">
        <img src={props.img} className="card--img" alt={props.name}/>
            <div className="card--info">
                <p className="card--item--name">{props.name}</p>
                <small className="retail--price">Retail:$ {props.prevPrice}</small>
                <small className="tlds--price">TLDS Price:$ {props.currentPrice}</small>
            </div>
        </div>
    )
}