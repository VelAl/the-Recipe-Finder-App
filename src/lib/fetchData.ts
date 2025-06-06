import { cache } from "react";
import { T_ApiResponse, T_Recipe, T_RecipeShort } from "./app-types";
import axiosInstance from "./axios";
import { normalizeParams } from "./utils";

type T_successResp<T> = {
  success: true;
  data: T;
};

type T_ErrResp = {
  success: false;
  errorMessage: string;
};

type T_FetchRecipesProps = {
  query?: string;
  cuisine?: string;
  maxReadyTime?: string;
};
export const fetchRecipes = cache(
  async (
    params: T_FetchRecipesProps
  ): Promise<T_successResp<T_ApiResponse<T_RecipeShort>> | T_ErrResp> => {
    try {
      const response = await axiosInstance.get("recipes/complexSearch", {
        params: normalizeParams(params),
      });

      return {
        success: true,
        data: response.data,
      } as const;
    } catch (error: unknown) {
      console.error("Error fetching recipes:", error);

      const errorMessage =
        error instanceof Error ? error.message : "Failed to fetch recipes.";
      return {
        success: false,
        errorMessage,
      } as const;
    }
  }
);

export const fetchRecipe = async (
  id: string
): Promise<T_successResp<T_Recipe> | T_ErrResp> => {
  try {
    const response = await axiosInstance.get(`recipes/${id}/information`);

    return {
      success: true,
      data: response.data,
    } as const;
  } catch (error: unknown) {
    console.error("Error fetching recipe:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Failed to fetch recipe.";

    return {
      success: false,
      errorMessage,
    } as const;
  }
};
