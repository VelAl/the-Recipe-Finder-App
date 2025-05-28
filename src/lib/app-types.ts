export type T_Recipe = {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  healthScore: number;
  glutenFree: boolean;
  servings?: number;
  summary?: string;
  extendedIngredients?: { id: number; original: string }[];
};

export type T_RecipeShort = {
  id: number;
  image: string;
  imageType: string;
  title: string;
};

export type T_ApiResponse<T> = {
  number: number;
  offset: number;
  results: T[];
  totalResults: number;
};
