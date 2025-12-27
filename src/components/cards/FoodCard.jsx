
import Link from 'next/link';
import React from 'react'
import CartButton from '../button/CartButton';
import Image from 'next/image';

function FoodCard({ food }) {
  // console.log(food);

  const { title, foodImg, category, price, id } = food;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">

      {/* <img
            src={foodImg}
            alt="Shoes"
            className="rounded-xl" /> */}

      <Image width={500} height={400} src={foodImg}
        alt="Shoes"
        className="rounded-xl object-fill" />

      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}  </h2>
        <p>{category} </p>
        <div className="card-actions">
          {/* <button className="btn btn-primary">Buy Now</button> */}
          <CartButton food={food}> </CartButton>

          <Link href={`/foods/${id}`} className='btn btn-success'> View Details </Link>
        </div>
      </div>
    </div>
  )
}

export default FoodCard
