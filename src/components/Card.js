import '../styles/Card.css';

export default function Card(props) {
    console.log("Card Component: ", props)
    return (
        <div className="inventory--card">
        <img src={`../assets/${props.img}`} className="card--img" alt="handbag"/>
            <div className="card--info">
                <p className="card--item--name">{props.name}</p>
                <small className="retail--price">{props.firstPrice}</small>
                <small className="tlds--price">{props.secondPrice}</small>
            </div>
    </div>
    )
}