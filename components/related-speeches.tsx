import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { speeches } from "@/lib/data";

interface RelatedSpeechesProps {
  currentSpeechId: string;
  categories: string[];
}

export function RelatedSpeeches({ currentSpeechId, categories }: RelatedSpeechesProps) {
  const relatedSpeeches = speeches
    .filter(
      (speech) =>
        speech.id !== currentSpeechId &&
        speech.categories.some((category) => categories.includes(category))
    )
    .slice(0, 3);

  if (relatedSpeeches.length === 0) return null;

  return (
    <div>
      <h3 className="font-semibold mb-4">Related Speeches</h3>
      <div className="space-y-4">
        {relatedSpeeches.map((speech) => (
          <Link key={speech.id} href={`/speeches/${speech.id}`}>
            <Card className="hover:bg-muted/50 transition-colors">
              <CardHeader className="p-4">
                <CardTitle className="text-base">{speech.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">{speech.speaker}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}