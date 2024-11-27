"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Quote } from "lucide-react";
import { getSpeechById } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RelatedSpeeches } from "@/components/related-speeches";
import { SpeechAnalysis } from "@/components/speech-analysis";

interface SpeechClientProps {
  speechId: string;
}

export function SpeechClient({ speechId }: SpeechClientProps) {
  const speech = getSpeechById(speechId);

  if (!speech) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        className="mb-8"
        asChild
      >
        <Link href="/directory">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Directory
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        <div className="space-y-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-4xl font-bold">{speech.title}</h1>
              <Badge>{speech.era}</Badge>
            </div>
            <div className="text-muted-foreground">
              <p className="text-lg">{speech.speaker}</p>
              <p>{speech.date} • {speech.location}</p>
            </div>
          </div>

          <Card className="p-6 bg-muted/50">
            <Quote className="h-8 w-8 mb-4 text-muted-foreground" />
            <p className="text-lg italic">{speech.fullText}</p>
          </Card>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Key Takeaway</h2>
            <p className="text-muted-foreground">{speech.keyTakeaway}</p>
          </div>

          <Separator />

          <SpeechAnalysis
            rhetoricalTechniques={speech.rhetoricalTechniques}
            modernApplications={speech.modernApplications}
          />
        </div>

        <div className="space-y-8">
          <div className="sticky top-8">
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {speech.categories.map((category) => (
                  <Badge key={category} variant="secondary">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            <RelatedSpeeches
              currentSpeechId={speech.id}
              categories={speech.categories}
            />
          </div>
        </div>
      </div>
    </div>
  );
}