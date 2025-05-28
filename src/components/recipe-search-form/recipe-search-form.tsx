"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Clock, ChefHat } from "lucide-react";
import { cuisineOptions } from "./helpers";
import { debounce } from "@/lib/utils";

export const RecipeSearchForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("query") || "";
  const cuisine = searchParams.get("cuisine") || "";
  const prepTime = searchParams.get("prepTime") || "";

  const updateQueryParam = debounce((key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`?${params.toString()}`);
  }, 500);

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <ChefHat className="h-6 w-6" />
          Recipe Search
        </CardTitle>
        <CardDescription>
          Find the perfect recipe for your next meal
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="query" className="text-sm font-medium">
              Recipe Query
            </Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="query"
                name="query"
                placeholder="e.g., pasta, chicken, chocolate cake..."
                className="pl-10"
                required
                onChange={(e) => updateQueryParam("query", e.target.value)}
                defaultValue={query}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cuisine" className="text-sm font-medium">
              Cuisine Type
            </Label>
            <Select
              name="cuisine"
              defaultValue={cuisine}
              onValueChange={(value) => updateQueryParam("cuisine", value)}
            >
              <SelectTrigger id="cuisine" className="w-full">
                <SelectValue placeholder="Select a cuisine" />
              </SelectTrigger>

              <SelectContent>
                {cuisineOptions.map(({ title, value }) => (
                  <SelectItem key={value} value={value}>
                    {title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="prep-time" className="text-sm font-medium">
              Maximum Preparation Time
            </Label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="prep-time"
                name="prepTime"
                type="number"
                placeholder="30"
                min="1"
                max="480"
                className="pl-10"
                defaultValue={prepTime || ""}
                onChange={(e) => updateQueryParam("prepTime", e.target.value)}
              />
              <span className="absolute right-9 top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground">
                minutes
              </span>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={!query && !cuisine && !prepTime}
          >
            <Search className="mr-2 h-4 w-4" />
            Next
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
