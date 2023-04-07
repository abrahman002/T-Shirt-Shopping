import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const TShirts=useLoaderData();

    const [cart,setCart]=useState([]);

    const handlerButton=tshirt=>{
        const exist=cart.find(ts => ts._id === tshirt._id);
        if (exist){
            return toast("You Already Added this Items!")
        }
        const newCart=[...cart,tshirt];
        setCart(newCart)
    }

    const handleRemoveCart=id=>{
       const remaining=cart.filter(st => st._id !== id);
       setCart(remaining)
    }
    return (
        <div className='home-container'>
            <div className='t-shirt-container'>
                {
                    TShirts.map(tshirt=><Tshirt
                      key={tshirt._id}
                      tshirt={tshirt}
                      handlerButton={handlerButton}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
            </div>
        </div>
    );
};

export default Home;