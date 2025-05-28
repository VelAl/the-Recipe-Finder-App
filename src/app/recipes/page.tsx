import { fetchRecipes } from "@/lib/fetchData";
import Image from "next/image";
import Link from "next/link";

type T_Props = {
  searchParams: Promise<{
    query?: string;
    cuisine?: string;
    maxReadyTime?: string;
  }>;
};

export const revalidate = 60;

const RecipesPage = async ({ searchParams }: T_Props) => {
  const params = await searchParams;

  const result = await fetchRecipes(params);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Recipes</h1>

      {!result.success ? (
        <p className="text-red-500">Error: {result.errorMessage}</p>
      ) : result.data.results.length === 0 ? (
        <p className="text-gray-500">No recipes found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {result.data.results.map((recipe) => (
            <Link
              key={recipe.id}
              href={`/recipes/${recipe.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4"
            >
              <Image
                src={recipe.image}
                alt={recipe.title}
                width={400}
                height={300}
                className="rounded-md object-cover w-full h-48"
                priority
              />
              <h2 className="mt-4 text-lg font-semibold">{recipe.title}</h2>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipesPage;
