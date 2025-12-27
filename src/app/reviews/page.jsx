import React from 'react'
import ReviewsPage from './ReviewsPage'

export const metadata = {
    title: {
        absolute: "satisfied review"
    },
    description: "Best FastFood in Noakali",
};


function page() {
    return (
        <div>
            <ReviewsPage> </ReviewsPage>
        </div>
    )
}

export default page
