import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BackHomeButton = () => {
  return (
    <Link href="/">
      <Button variant="outline" className="flex items-center gap-2">
        <ArrowLeft className="w-4 h-4" />
        Home
      </Button>
    </Link>
  );
};
