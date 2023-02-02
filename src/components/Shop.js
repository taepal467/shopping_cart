import { Footer } from "./Footer";
import data from "../components/inventoryData";
import Card from "./Card";
import { useState } from "react";


export const Shop = (props) => {
    const { onAddItem } = props;

    const cards = data.map(item => {
        return <Card 
            key={item.id}
            item={item}
            onAddItem={onAddItem}
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


