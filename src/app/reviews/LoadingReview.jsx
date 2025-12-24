import ReviewCardSkeleton from '@/components/skeleton/ReviewCardSkeleton'
import React from 'react'

function LoadingReview() {
  return (
    <div className='text-center font-semibold'>

        {
        [...Array(12)].map((_, index) => (
            <ReviewCardSkeleton key={index}> </ReviewCardSkeleton>
        ))
        }
    </div>
  )
}

export default LoadingReview
