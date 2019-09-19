import React from 'react'
import {Link} from 'react-router-dom'
import {SHOPPING_CART_PAGE_URL} from '../../../constants/constants.js'

const ShoppingCartNav = () =>{
    return (
        <Link to={SHOPPING_CART_PAGE_URL}>Cart</Link>
    )
}

export default ShoppingCartNav;