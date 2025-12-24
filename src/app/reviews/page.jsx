"use client";

import ReviewCard from '@/components/cards/ReviewCard';
import React, { useEffect, useState } from 'react'
import LoadingReview from './LoadingReview';


function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      setReviews(data.reviews);
      setLoading(false);

    })
  }, [ ])
if(loading) {
  return <LoadingReview></LoadingReview>
}

  return (
    <div>
        <h2 className='font-bold text-2xl text-center my-5'> Its Reviews page </h2>
       <div className='grid grid-cols-3 gap-5'>
       {
          reviews.map(reviewData => <ReviewCard key={reviewData.id} reviewData={reviewData}> </ReviewCard>)
        }
       </div>
    </div>
  )
}

export default Reviews
