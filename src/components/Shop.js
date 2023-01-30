import { Footer } from "./Footer";
import data from "../components/inventoryData";
import Card from "./Card";


export const Shop = () => {
 
const cards = data.map(item => {
    return <Card 
        img={item.img}
        brandName={item.brandName}
        handbag={item.handbag}
        prevPrice={item.prevPrice}
        currentPrice={item.currentPrice}
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


