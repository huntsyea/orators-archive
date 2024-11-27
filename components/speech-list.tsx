"use client";

import Link from "next/link";
import { Speech } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SpeechListProps {
  speeches: Speech[];
}

export function SpeechList({ speeches }: SpeechListProps) {
  if (speeches.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No speeches found matching your filters.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {speeches.map((speech) => (
        <Link key={speech.id} href={`/speeches/${speech.id}`}>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="mb-2">{speech.title}</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    <p>{speech.speaker}</p>
                    <p>{speech.date} • {speech.location}</p>
                  </div>
                </div>
                <Badge>{speech.era}</Badge>
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
        </Link>
      ))}
    </div>
  );
}