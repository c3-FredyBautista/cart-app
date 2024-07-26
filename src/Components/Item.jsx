import React from "react";
import AddToCart from "./AddToCart";

const Item = ({ plant }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", padding: "1rem" }}>
            <img src={plant.image} alt={plant.name} height={120} width={120} />
            <div>
                <label>Name: </label>
                <label>{plant.name}</label>
            </div>
            <div>
                <label>Type: </label>
                <label>{plant.type}</label>
            </div>
            <div>
                <label>Price: </label>
                <label>{plant.price}</label>
            </div>
            <div>
                <label>Stock: </label>
                <label>{plant.stock}</label>
            </div>

            <AddToCart plant={plant} />
        </div>
    );
};

export default Item;