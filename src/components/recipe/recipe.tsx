import { T_Recipe } from "@/lib/app-types";
import Image from "next/image";
import { Badge } from "../ui/badge";

type T_Props = { recipe: T_Recipe };

export const RecipeCard = ({ recipe }: T_Props) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      <Image
        src={recipe.image}
        alt={recipe.title}
        width={800}
        height={500}
        className="rounded-md object-cover w-full h-64 mb-6"
        priority
      />

      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="secondary">
          ⏱️ Ready in: {recipe.readyInMinutes} min
        </Badge>
        <Badge variant="secondary">💚 Health Score: {recipe.healthScore}</Badge>
        <Badge variant={recipe.glutenFree ? "default" : "outline"}>
          {recipe.glutenFree ? "🌾 Gluten Free" : "Contains Gluten"}
        </Badge>
        {recipe.servings && (
          <Badge variant="secondary">🍽️ Servings: {recipe.servings}</Badge>
        )}
      </div>

      {recipe.summary && (
        <div className="prose prose-sm prose-gray mb-6">{recipe.summary}</div>
      )}

      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      {!!recipe.extendedIngredients?.length ? (
        <ul className="list-disc list-inside text-gray-800 space-y-1">
          {recipe.extendedIngredients.map((ing) => (
            <li key={ing.id}>{ing.original}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No ingredients listed.</p>
      )}
    </div>
  );
};
