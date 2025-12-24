"use client"
import { CartContext } from '@/context/CartProvider'
import React, { use } from 'react'

function CartItems() {
    const {cart} = use(CartContext);
  return (
    <div>
      <h2>{cart.length} Items Added </h2>
    </div>
  )
}

export default CartItems
