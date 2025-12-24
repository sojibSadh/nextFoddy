const Loading = () => {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10 animate-pulse">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Image Skeleton */}
          <div className="w-full h-[350px] bg-gray-300 rounded-xl"></div>

          {/* Content Skeleton */}
          <div className="space-y-4">
            <div className="h-8 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            <div className="h-6 bg-gray-300 rounded w-1/4"></div>
            <div className="h-10 bg-gray-300 rounded w-40"></div>
          </div>
        </div>
      </div>
    );
  };

  export default Loading;
