import { cache } from "react";
import { T_ApiResponse, T_Dish } from "./app-types";
import axiosInstance from "./axios";

type T_successResp = {
  success: true;
  data: T_ApiResponse<T_Dish>;
};

type T_ErrResp = {
  success: false;
  errorMessage: string;
};

export const fetchRecipes = cache(
  async ({
    query = "",
    cuisine = "",
    maxReadyTime = "",
  }): Promise<T_successResp | T_ErrResp> => {
    try {
      const response = await axiosInstance.get("/recipes/complexSearch", {
        params: {
          query,
          cuisine,
          maxReadyTime,
        },
      });
      
      return {
        success: true,
        data: response.data,
      } as T_successResp;
    } catch (error: unknown) {
      console.error("Error fetching recipes:", error);

      const errorMessage =
        error instanceof Error ? error.message : "Failed to fetch recipes.";
      return {
        success: false,
        errorMessage,
      } as T_ErrResp;
    }
  }
);
