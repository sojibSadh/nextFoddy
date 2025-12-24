import Link from "next/link";
import React from "react";

function StoryCard({ story }) {
  const {
    name,
    designnation,
    experience,
    skills,
    story: description,
    image,
  } = story;

  return (
    <div className=" bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm text-gray-500">
          {designnation} • {experience}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Story */}
        <p className="text-sm text-gray-600 line-clamp-3">
          {description}
        </p>

        <Link className="btn btn-success" href={`stories/${story.id}`}> Read Full Story </Link>
      </div>
    </div>
  );
}

export default StoryCard;
