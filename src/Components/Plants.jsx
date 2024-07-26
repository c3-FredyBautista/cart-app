import React, { useContext} from "react";
import Item from "./Item";
import { StoreContext } from '../Context/StoreProvider';

const Plants = () => {
    const { plants } = useContext(StoreContext);

    return (
        <div>
            <h2>Available Plants</h2>
            <div style={{ display: "flex"}}>
                {plants.map((plant) => (
                    <Item key={plant.id} plant={plant} />
                ))}
            </div>
        </div>
    );
};

export default Plants;