export const RecipeCardSkeleton = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto animate-pulse">
      <div className="h-10 bg-gray-300 rounded w-3/4 mb-4"></div>

      <div className="bg-gray-300 rounded-md w-full h-64 mb-6"></div>

      <div className="flex flex-wrap gap-2 mb-6">
        <div className="h-6 bg-gray-300 rounded w-24"></div>
        <div className="h-6 bg-gray-300 rounded w-32"></div>
        <div className="h-6 bg-gray-300 rounded w-28"></div>
        <div className="h-6 bg-gray-300 rounded w-20"></div>
      </div>

      <div className="h-16 bg-gray-300 rounded mb-6"></div>

      <div className="h-8 bg-gray-300 rounded w-48 mb-2"></div>

      <ul className="space-y-2">
        {[...Array(5)].map((_, i) => (
          <li
            key={i}
            className="h-4 bg-gray-300 rounded w-full max-w-[90%]"
          ></li>
        ))}
      </ul>
    </div>
  );
};
