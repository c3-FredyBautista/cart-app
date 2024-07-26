import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreProvider";
import '../styles/cart.css';

const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
};

const Cart = () => {
    const { cart, updateStock, updateCartItemQuantity, removeCartItem } = useContext(StoreContext);
    const totalCost = cart.reduce((total, plant) => total + (plant.price * plant.quantity), 0);

    const handleIncrement = (id) => {
        updateCartItemQuantity(id, 1);
        updateStock(id, -1);
    };

    const handleDecrement = (id) => {
        updateCartItemQuantity(id, -1);
        updateStock(id, 1);
    };

    const handleDelete = (id) => {
        const plant = cart.find(item => item.id === id);
        updateStock(id, plant.quantity); // Return the stock
        removeCartItem(id);
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Unit Cost</th>
                        <th>Total Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((plant) => (
                        <tr key={plant.id}>
                            <td>{plant.name}</td>
                            <td>{formatCurrency(plant.price)}</td>
                            <td>{formatCurrency(plant.price * plant.quantity)}</td>
                            <td className="add-decrement" colSpan={3}>
                                <button onClick={() => handleDecrement(plant.id)}>-</button>
                                <label >{plant.quantity}</label>
                                <button onClick={() => handleIncrement(plant.id)}>+</button>
                                <button onClick={() => handleDelete(plant.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">Total</td>
                        <td>{formatCurrency(totalCost)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Cart;