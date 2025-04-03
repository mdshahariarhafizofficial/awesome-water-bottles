import React, { use, useState } from "react";
import Bottle from "../bottle/bottle";

const Bottles = ({ bottleFetch }) => {
  const bottles = use(bottleFetch);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  const handleCart = (cartItem) => {
    const newCart = [...cart, cartItem];
    setCart(newCart)
    const total = price+cartItem.price;
    setPrice(total);
  };

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid gray', marginBottom: '20px'}}>
        <h2>Total Bottles: {bottles.length}</h2>
        <h2>Cart: {cart.length}</h2>
        <h2>Total Price: ${price}</h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
        }}
      >
        {bottles.map((bottle) => (
            <Bottle 
            key={bottle.id} 
            bottle={bottle}
            handleCart = {handleCart}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
