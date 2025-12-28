import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Feedback"
};

// Fetching data on the server
const getFeedback = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback`, {
            next: { revalidate: 60 }, // ISR
        });

        if (!res.ok) {
            throw new Error("Failed to fetch feedback");
        }

        const data = await res.json();
        return data;

    } catch (error) {
        console.error("Fetch Error:", error);
        return []; // prevent map crash
    }
};

const FeedbackPage = async () => {
    const feedback = await getFeedback();

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">
                    {feedback.length} Feedbacks Found
                </h2>

                <Link className="btn btn-success" href="/feedback/add">
                    Add Feedback
                </Link>
            </div>

            <div className="flex flex-col gap-2">
                {feedback.length > 0 ? (
                    feedback.map((fd) => (
                        <div
                            key={fd._id}
                            className="border p-3 rounded bg-base-100"
                        >
                            <p>{fd.message ?? "No content provided"}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No feedback available.</p>
                )}
            </div>
        </div>
    );
};

export default FeedbackPage;
