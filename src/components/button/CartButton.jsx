"use client"
import { CartContext } from '@/context/CartProvider';
import React, { use, useState } from 'react'

function CartButton({food}) {
    const [inCart, setIncart] = useState(false);
    const {addToCart} = use(CartContext);

    const handleCard = () => {
        addToCart(food)
        setIncart(true);
    }
    return (
        <div>
            <button onClick={handleCard} disabled={inCart} className='flex-1 disabled:bg-gray-300  bg-blue-600 text-white py-2 px-3 rounded-lg'>
                {
                    inCart ? "Added" : "Add to Cart"
                }
            </button>
        </div>
    )
}

export default CartButton
