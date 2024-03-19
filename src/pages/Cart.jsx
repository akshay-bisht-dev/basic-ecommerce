import React, { useContext, useEffect, useState } from 'react'
import { Cart } from '../context/Context';
import SingleProduct from '../components/SingleProduct';

const CartPage = () => {
    const { cart } = useContext(Cart);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => {
            return acc + Number(Math.floor(curr.price))
        }, 0))
    }, [cart])

    return (
        <div>
            <div className="cart_details">
                <h1>Cart Products</h1>
                <span>Total: ${total}</span>
            </div>
            <div className='products_div'>
                {cart.map((prod) => (
                    <SingleProduct prod={prod} cart={cart} key={prod.id} />
                ))}
            </div>
        </div>
    )
}

export default CartPage