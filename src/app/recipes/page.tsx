type T_Props = {
  searchParams: Promise<{
    query?: string;
    cuisine?: string;
    maxReadyTime?: string;
  }>;
};

const RecipesPage = async ({}: T_Props) => {
  //   const { query = "", cuisine = "", maxReadyTime = "" } = await searchParams;

  //   const params = new URLSearchParams({
  //     query,
  //     cuisine,
  //     maxReadyTime,
  //     apiKey: process.env.API_KEY || "",
  //   });

  //   const resp = await fetch(`https://api.spoonacular.com/recipes/complexSearch?${params.toString()}`);
  //   const data = await resp.json()

  return <div>here i am</div>;
};

export default RecipesPage;
