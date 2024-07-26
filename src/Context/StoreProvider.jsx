import React, { createContext, useState, useEffect } from 'react'
import data from "../data/data.json";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [plants, setPlants] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setPlants(data);
    }, []);

    const updateCartItemQuantity = (id, delta) => {
        setCart((prevCart) =>
            prevCart.map((item) => {
                if(item.id === id && item.stock > 0) {
                    return { ...item, quantity: item.quantity + delta };
                }
                return item
            }
            ).filter(item => item.quantity > 0)
        );
    };

    const updateStock = (id, delta) => {
        setPlants((prevPlants) =>
            prevPlants.map((plant) => {
                if (plant.id === id) {
                    const newStock = plant.stock + delta;
                    if (newStock < 0) {
                        alert("Insufficient stock");
                        return plant;
                    } else return { ...plant, stock: newStock };
                }
                return plant;
            })
        );
    }

    const removeCartItem = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const addToCart = (plant) => {
        const item = cart.find((item) => item.id === plant.id);
        if (item) {
            const quantity = item.quantity + 1
            const newCart = cart.map((item) => {
                if(item.id === plant.id && plant.stock > 0) {
                    return { ...item, quantity }
                } 
                return item
            });
            setCart(newCart);
        } else {
            setCart([...cart, { ...plant, quantity: 1 }]);
        }
        updateStock(plant.id, -1);
    };

    return (
        <StoreContext.Provider value={{ cart, plants, addToCart, updateCartItemQuantity, updateStock, removeCartItem }}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;