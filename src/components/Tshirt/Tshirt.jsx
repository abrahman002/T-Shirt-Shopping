import React from 'react';
import './Tshirt.css';

const Tshirt = ({tshirt,handlerButton}) => {
        const {picture,name,gender,price,}=tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price:$ {price}</p>
            <p>Gender: {gender}</p>
            <button onClick={()=>handlerButton(tshirt)} className='btn-buy'>Buy Now</button>
        </div>
    );
};

export default Tshirt;