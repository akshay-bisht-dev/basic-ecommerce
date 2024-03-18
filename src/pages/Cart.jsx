import React, { useContext } from 'react'
import { Cart } from '../context/Context';

const CartPage = () => {
    const { product } = useContext(Cart);

    return (
        <div>
            {
                product.map((val) => {
                    return (
                        <>
                            <div>{val.title}</div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default CartPage