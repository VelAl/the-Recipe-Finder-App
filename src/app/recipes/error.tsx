"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ErrorDisplayProps {
  error: Error & { digest?: string };
  reset: () => void;
  title?: string;
  description?: string;
}

export default function ErrorDisplay({
  error,
  reset,
  title = "Something went wrong",
  description = "An error occurred. Please try again.",
}: ErrorDisplayProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div
            className={cn(
              "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full",
              "bg-red-100"
            )}
          >
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <CardTitle className="text-xl font-semibold text-gray-900">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-600">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="rounded-md bg-red-50 border border-red-200 p-3">
            <p className="text-sm font-medium text-red-800 break-all">
              {error.message}
            </p>
          </div>

          {error.digest && (
            <div className="rounded-md bg-red-50 border border-red-200 p-3 mt-2">
              <p className="text-xs text-red-600 font-mono break-all">
                Error ID: {error.digest}
              </p>
            </div>
          )}

          <div className="flex flex-col gap-3 mt-4">
            <Button onClick={reset} className="w-full" variant="default">
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>

            <Button asChild variant="ghost" className="w-full">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Return to Home
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
