import FoodCard from '@/components/cards/FoodCard';
import React from 'react'
import CartItems from './CartItems';
import InputSearch from '@/components/search/InputSearch';
import style from "./foods.module.css";

const getFoods = async (search) => {
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`);
    const data = await res.json();

    await new Promise((resolve) => setTimeout(resolve, 1000));
    return data.foods || []
    // console.log(data.foods);
}

export const metadata = {
    title: "All Foods",
    description: "Best FastFood in Noakali",
  };


const FoodsPage = async ({ searchParams }) => {
    const { search = " " } = await searchParams;
    console.log(style);
    const foods = await getFoods(search);

    return (
        <div className='w-[1400px] mx-auto'>
            <h2 className={`font-bold text-2xl  ${style.bgblue}`}> Total Foods {foods.length}</h2>
            <div className='text-center my-5'>
                <InputSearch> </InputSearch>
            </div>
            <div className='flex gap-3'>
                <div className='flex-1 grid md:grid-cols-3 '>
                    {
                        foods.map(food => <FoodCard key={food.id} food={food}> food </FoodCard>)
                    }
                </div>
                <div className='w-[#250px] border-1 rounded-xl p-4'>
                    <h3 className='text-2xl font-bold'>Cart Items</h3> <hr />
                    <CartItems></CartItems>
                </div>
            </div>
        </div>
    )
}

export default FoodsPage
