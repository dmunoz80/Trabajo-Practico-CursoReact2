import React, { createContext, useEffect, useState } from "react";

const Context = createContext();


const GeneralProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [ShopCart, setShopCart] = useState([]);
    const [total, setTotal] = useState(0)


    const dataPizza = async () => {
        const res = await fetch('/pizzas.json');
        const data = await res.json();
        const newData = data.map((e) => ({
            desc: e.desc,
            id: e.id,
            img: e.img,
            ingredients: e.ingredients,
            name: e.name,
            price: e.price,
            quantity: 1
        }))
        setPizzas(newData);
    }

    useEffect(() => {
        dataPizza()
    }, []);

    //Agregar Pizzas al carro de compras en Home
    const addToCart = (selectedPizza) => {
        const index = ShopCart.findIndex(e => e.id === selectedPizza.id);
        if (index !== -1) {
            const updatedPizzas = [...ShopCart];
            updatedPizzas[index].quantity += 1;
            setShopCart(updatedPizzas);
        } else {
            setShopCart(pizzas => [...pizzas, { ...selectedPizza, quantity: 1 }]);
        }
        setTotal((e) => e + selectedPizza.price)
    }

    const handleClick = (selectedPizza) => {
        addToCart(selectedPizza)
    }

    //Suma o resta de Items al carro de compras
    const AddItem = (id) => {
        const pizzaUp = ShopCart.map((pizza) => {
            if (pizza.id === id) {
                return { ...pizza, quantity: pizza.quantity += 1 }
            } else {
                return pizza;
            }
        })
        setShopCart(pizzaUp);
        priceTotal();
    }

    const SubtractItem = (id) => {
        const pizzaDown = ShopCart.map((pizza) => {
            if (pizza.id === id) {
                return { ...pizza, quantity: pizza.quantity -= 1 }
            } else {
                return pizza
            }
        })
        setShopCart(pizzaDown.filter((pizza) => pizza.quantity > 0));
        priceTotal();
    }

    //suma o resta precios al carrito
    const priceTotal = () => {
        const totalPrice = ShopCart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);
        setTotal(totalPrice);
    }

    return (
        <Context.Provider value={
            {
                pizzas,
                setPizzas,
                handleClick,
                ShopCart,
                setShopCart,
                AddItem,
                SubtractItem,
                priceTotal,
                total
            }}>
            {children}
        </Context.Provider>
    )
}

export { GeneralProvider }
export default Context;