import React, { useContext } from 'react'
import { Cart } from '../context/Context'

const SingleProduct = ({ prod }) => {
    const { cart, setCart } = useContext(Cart);
    return (
        <>
            <div className='product' key={prod.id}>
                <img src={prod.image} alt={prod.title} />
                <div className='product_details'>
                    <h5>{prod.title.substr(0, 40)}...</h5>
                    <p>{prod.description.substr(0, 100)}...</p>
                    <h5>${prod.price}</h5>

                    <div className="btns">
                        {cart.includes(prod) ? (
                            <button
                                onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
                            >
                                Remove from Cart
                            </button>
                        ) : (
                            <button onClick={() => setCart([...cart, prod])}>
                                Add to Cart
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct