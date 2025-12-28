"use client";
import React from "react";

function FeedbackForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = e.target.message.value;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit feedback");
      }

      const data = await res.json();

      if (data.insertedId) {
        alert("Success");
        e.target.reset();
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5 text-center">
        <textarea
          required
          className="w-xl border border-dashed p-3"
          name="message"
          cols="40"
          rows="10"
          placeholder="Write your feedback..."
        />
        <br />
        <button type="submit" className="btn btn-success">
          Add Feedback
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;
