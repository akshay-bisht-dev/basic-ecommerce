import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Cart } from '../context/Context'

const Header = () => {
    const { cart } = useContext(Cart);
    return (
        <div className='navbar_div'>
            <nav>
                <div className="logo">
                    <Link to='/'>E-comm</Link>
                </div>

                <div className="menu">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/cart'>Cart({cart.length})</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Header