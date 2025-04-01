import React from 'react';

const Bottle = ({bottle}) => {
    return (
        <div>
            <img style={{width: '100%', borderRadius: '8px' }} src={bottle.img} alt="" />
            <h4>{bottle.name}</h4>
            <h5>Brand: {bottle.seller}</h5>
        </div>
    );
};

export default Bottle;