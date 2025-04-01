import React, { use } from 'react';
import Bottle from '../bottle/bottle';

const Bottles = ({bottleFetch}) => {
    const bottles = use(bottleFetch);
    
    return (
        <div>
            <h2>Total Bottles: {bottles.length}</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px'}}>
                {
                    bottles.map( bottle => <Bottle
                        key={bottle.id} 
                        bottle = {bottle}
                        ></Bottle> )
                }
            </div>
        </div>
    );
};

export default Bottles;