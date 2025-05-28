import {
  BackHomeButton,
  RecipeCardSkeleton,
  SuspensedRecipeCard,
} from "@/components";
import { Suspense } from "react";

type T_Props = { params: Promise<{ id: string }> };

const RecipeDetailsPage = async ({ params }: T_Props) => {
  const { id } = await params;

  return (
    <div className="p-6 max-w-6xl mx-auto bg-muted min-h-[100vh]">
      <BackHomeButton />

      <Suspense fallback={<RecipeCardSkeleton />}>
        <SuspensedRecipeCard id={id} />
      </Suspense>
    </div>
  );
};

export default RecipeDetailsPage;
