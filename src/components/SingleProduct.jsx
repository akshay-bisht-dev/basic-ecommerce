import React, { useContext } from 'react'
import { Cart } from '../context/Context'

const SingleProduct = ({ prod }) => {
    const { product, setProduct } = useContext(Cart);
    return (
        <>
            <div className='product' key={prod.id}>
                <img src={prod.image} alt={prod.title} />
                <div className='product_details'>
                    <h5>{prod.title}</h5>
                    <p>{prod.description.substr(0, 100)}...</p>
                    <h5>${prod.price}</h5>

                    <div className="btns">
                        {product.includes(prod) ? (
                            <button
                                className="add remove"
                                onClick={() => setProduct(product.filter((c) => c.id !== prod.id))}
                            >
                                Remove from Cart
                            </button>
                        ) : (
                            <button className="add" onClick={() => setProduct([...product, prod])}>
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