import React from 'react';
import './Cosmetrics.css'
import { addToDb } from '../utilies/FakeDb';

const Cosmetric = (props) => {
    const addToCart = (id) => {
        addToDb(id);
    }

    const { id, name, price } = props.cosmetric;
    return (
        <div className='item_box border'>
            <p>Id: {id}</p>
            <p>Name : {name}</p>
            <p>Price : {price}</p>
            <button onClick={ () => addToCart(id) }>Add To Cart</button>
        </div>
    );
};

export default Cosmetric;