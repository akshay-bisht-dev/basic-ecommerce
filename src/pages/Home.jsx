import React, { useContext } from 'react'
import { Cart } from '../context/Context'
import SingleProduct from '../components/SingleProduct';

const Home = () => {
    const { cart, setCart, product } = useContext(Cart);
    return (
        <>
            <h1>All Products</h1>
            <div className='products_div'>
                {product.map((prod) => (
                    <SingleProduct prod={prod} cart={cart} setCart={setCart} key={prod.id} />
                ))}
            </div>
        </>
    )
}

export default Home