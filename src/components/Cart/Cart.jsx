import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please Select Some Product</p>
    }
    else {
        message = <div>
            <p>Boroloxxx</p>
            <p><small>Thanks giving Money</small></p>
        </div>
    }
    return (
        <div>
            <h3 className={cart.length === 2 ? 'blue' : 'red'}>Order Summary:{cart.length}</h3>
            <p className={`green ${cart.length === 3 ? 'orange' : 'lightgreen'}`}>something Here</p>
            {
                cart.length > 2 ?
                    <span>Aro kino</span>
                    : <span>Fokira</span>
            }
            {message}
            <div>
                {
                    cart.map(tshirt =>
                        <p key={tshirt._id}>
                            {tshirt.name}
                            <button onClick={() => handleRemoveCart(tshirt._id)} className='btn-x'>X</button>
                        </p>)
                }

                {
                    cart.length == 2 && <p>Double Danzar</p>
                }
                {
                    cart.length ===3 || <h3>tinta to hoilo na</h3>
                }
            </div>
        </div>
    );
};

/**
 * Conditional Rendering
 * 1.use if else to set a variable that will contain elements,components.
 * 2.Ternary : condition ? "for true" : "false"
 */

export default Cart;