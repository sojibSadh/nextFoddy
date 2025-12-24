import React from 'react'

function FoodSkeleton() {
  return (
    <div>
      <div className='border rounded-2xl p-4 shadow animate-pulse'>
         <div className='mt-3 space-y-2'>
            <div className='h-4 bg-gray-300 rounded w-3/4'> </div>
            <div className='h-3 bg-gray-300 rounded w-1/2'> </div>
            <div className='h-6 bg-gray-300 rounded  w-20 mt-2'> </div>
         </div>

         <div className='flex gap-3 mt-4'>
            <div className='flex-1 h-40 bg-gray-300 rounded-lg'> </div>
            <div className='flex-1 h-40 bg-gray-300 rounded-lg'> </div>
         </div>
      </div>
    </div>
  )
}

export default FoodSkeleton
