"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { featuredSpeeches } from "@/lib/data";

export function FeaturedSpeeches() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Speeches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredSpeeches.map((speech) => (
          <Card key={speech.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="mb-2">{speech.title}</CardTitle>
                  <CardDescription>{speech.speaker}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{speech.keyTakeaway}</p>
              <div className="flex flex-wrap gap-2">
                {speech.categories.map((category) => (
                  <Badge key={category} variant="secondary">
                    {category}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}