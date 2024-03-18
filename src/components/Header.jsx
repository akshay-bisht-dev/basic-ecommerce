import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Cart } from '../context/Context'

const Header = () => {
    const { product } = useContext(Cart);
    return (
        <div>
            <nav>
                <div className="logo">
                    <Link to='/'>E-comm</Link>
                </div>

                <div className="menu">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/cart'>Cart({product.length})</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Header