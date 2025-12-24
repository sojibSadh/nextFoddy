import FoodSkeleton from '@/components/skeleton/FoodSkeleton'
import React from 'react'

function loading() {
  return (
    <div className='text-center font-semibold'>

        {
        [...Array(12)].map((_, index) => (
            <FoodSkeleton key={index}> </FoodSkeleton>
        ))
        }
    </div>
  )
}

export default loading
