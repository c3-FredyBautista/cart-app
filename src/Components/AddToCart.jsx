import React, { useContext } from "react";
import { StoreContext } from '../Context/StoreProvider';

const AddToCart = ({ plant }) => {
    const { addToCart } = useContext(StoreContext);
    
    const handleClick = () => {
        addToCart(plant);
    };

    return (
        <div>
            <button disabled={plant.stock <= 0} onClick={handleClick}>Add to Cart</button>
        </div>
    );
}

export default AddToCart;