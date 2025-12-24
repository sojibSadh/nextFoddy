import { useState } from "react";

function ReviewCard({ reviewData, currentUserEmail }) {
  const {
    user,
    email,
    photo,
    rating,
    review,
    date,
    likes,
  } = reviewData;

  const [likeList, setLikeList] = useState(likes || []);

  const isLiked = likeList.includes(currentUserEmail);

  const handleLike = () => {
    if (!currentUserEmail) return;

    if (isLiked) {
      setLikeList(likeList.filter(mail => mail !== currentUserEmail));
    } else {
      setLikeList([...likeList, currentUserEmail]);
    }
  };

  return (
    <div className="bg-gray-300 gap-5 rounded-xl shadow-md p-5 space-y-4">
      {/* User Info */}
      <div className="flex items-center gap-3">
        <img
          src={photo}
          alt={user}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">{user}</h3>
          <p className="text-sm text-gray-500">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 leading-relaxed">{review}</p>

      {/* Rating */}
      <div className="flex items-center gap-1 text-yellow-500">
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </div>

      {/* Like Button */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleLike}
          className={`px-4 py-1 rounded-full text-sm transition
            ${isLiked ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"}
          `}
        >
          {isLiked ? "❤️ Liked" : "🤍 Like"}
        </button>

        <span className="text-sm text-gray-600">
          {likeList.length} likes
        </span>
      </div>
    </div>
  );
}

export default ReviewCard;
