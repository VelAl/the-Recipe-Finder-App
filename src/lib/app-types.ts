export type T_Dish = {
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
