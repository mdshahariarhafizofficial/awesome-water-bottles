import React from 'react';

const Bottle = ({bottle, handleCart}) => {
    const {name, seller, stock, price} = bottle; 
    return (
        <div style={{textAlign: 'left', border: '2px solid gray', borderRadius: '10px', padding:'20px'}}>
            <img style={{width: '100%', borderRadius: '8px' }} src={bottle.img} alt="" />
            <h4>{name}</h4>
            <h5 style={{margin: '0'}}>Brand: {seller}</h5>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h4>Price: ${price}</h4>
                <p>Available: {stock}</p>
            </div>
            <button onClick={()=>{handleCart(bottle)}}>Add to cart</button>
        </div>
    );
};

export default Bottle;
