import { Footer } from "./Footer";
import Card from "./Card";
import {Cart} from "./Cart"

export const Shop = (props) => {
    const { data, onAddItem, onRemoveItem } = props;

    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                item={item}
                onAddItem={onAddItem}
                onRemoveItem={onRemoveItem}
            />
        )
    })

    return(
        <div>
             <section className="cards-list">
                {cards}
            </section>
            <Footer />
        </div>
    );
}


