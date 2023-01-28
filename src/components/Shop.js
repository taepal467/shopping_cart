import { Footer } from "./Footer";
import data from "../components/inventoryData";
import Card from "./Card";


export const Shop = () => {
 
const cards = data.map(item => {
    return <Card 
        img={item.img}
        name={item.name}
        retailPrice={item.firstPrice}
        tldsPrice={item.secondPrice}
    />
})
    return(
        <div>
            {cards}
            <Footer />
        </div>
    );
}


