import { Footer } from "./Footer";
import data from "../components/inventoryData";
import Card from "./Card";


export const Shop = () => {
 
const cards = data.map(item => {
    return <Card 
        key={item.id}
        item={item}
    />
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


