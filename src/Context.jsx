import React, { createContext, useEffect, useState } from "react";
//Creando el contexto
const PizzaContext = createContext();

//Creando el provider para los datos
const ProviderPizza = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0)

    //Creando la funcion que obtendra los datos del Json
    const getPizzas = async () => {
        const res = await fetch('/pizzas.json');
        const data = await res.json();
        const newData = data.map((p) => ({
            desc: p.desc,
            id: p.id,
            img: p.img,
            ingredients: p.ingredients,
            name: p.name,
            price: p.price,
            quantity: 1
        }))
        setPizzas(newData);
    }

    useEffect(() => {
        getPizzas()
    }, []);

    //Agregando pizzas al carrito
    const addPizzaToCart = (selectedPizza) => {
        const index = cart.findIndex(p => p.id === selectedPizza.id);
        if (index !== -1) {
            const updatedPizzas = [...cart];
            updatedPizzas[index].quantity += 1;
            setCart(updatedPizzas);
        } else {
            setCart(pizzas => [...pizzas, { ...selectedPizza, quantity: 1 }]);
        }
        setTotal((p) => p + selectedPizza.price)
    }

    const handleClick = (selectedPizza) => {
        addPizzaToCart(selectedPizza)
    }

    //Modificando cantidad en carrito
    const incrementQuantity = (id) => {
        const increment = cart.map((pizza) => {
            if (pizza.id === id) {
                return { ...pizza, quantity: pizza.quantity += 1 }
            } else {
                return pizza;
            }
        })
        setCart(increment);
        calculateTotal();
    }

    const decrementQuantity = (id) => {
        const decrement = cart.map((pizza) => {
            if (pizza.id === id) {
                return { ...pizza, quantity: pizza.quantity -= 1 }
            } else {
                return pizza
            }
        })
        setCart(decrement.filter((pizza) => pizza.quantity > 0));
        calculateTotal();
    }

    //Modificando precios al carrito
    const calculateTotal = () => {
        const totalPrice = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);
        setTotal(totalPrice);
    }

    return (
        <PizzaContext.Provider value={
            {
                pizzas,
                setPizzas,
                handleClick,
                cart,
                setCart,
                incrementQuantity,
                decrementQuantity,
                calculateTotal,
                total
            }}>
            {children}
        </PizzaContext.Provider>
    )
}

export { ProviderPizza }
export default PizzaContext;