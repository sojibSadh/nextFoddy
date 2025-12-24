function ReviewCardSkeleton() {
    return (
      <div className="bg-white rounded-xl shadow-md p-5 animate-pulse space-y-4">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          <div className="space-y-2">
            <div className="w-32 h-4 bg-gray-300 rounded"></div>
            <div className="w-20 h-3 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Review */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded"></div>
          <div className="h-3 bg-gray-200 rounded"></div>
          <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
        </div>

        {/* Rating */}
        <div className="w-24 h-4 bg-gray-200 rounded"></div>

        {/* Button */}
        <div className="w-24 h-8 bg-gray-300 rounded-full"></div>
      </div>
    );
  }

  export default ReviewCardSkeleton;
