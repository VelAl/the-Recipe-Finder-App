import { BackHomeButton, ErrorMessage, RecipeCard } from "@/components";
import { fetchRecipe } from "@/lib/fetchData";

type T_Props = { params: Promise<{ id: string }> };

const RecipeDetailsPage = async ({ params }: T_Props) => {
  const { id } = await params;

  const response = await fetchRecipe(id);

  return (
    <div className="p-6 max-w-6xl mx-auto bg-muted min-h-[100vh]">
      <BackHomeButton />
      {response.success ? (
        <RecipeCard recipe={response.data} />
      ) : (
        <ErrorMessage message={response.errorMessage} />
      )}
    </div>
  );
};

export default RecipeDetailsPage;
