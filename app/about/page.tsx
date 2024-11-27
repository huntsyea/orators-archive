import { ScrollText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <ScrollText className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold mb-4">About The Orator's Archive</h1>
          <p className="text-xl text-muted-foreground">
            Preserving history's most powerful voices for tomorrow's speakers
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                The Orator's Archive exists to preserve and analyze history's most influential speeches, 
                making their timeless wisdom accessible to modern speakers and leaders. We believe that 
                by studying the great orators of the past, we can better understand the art of 
                persuasion and its power to shape the future.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li>• Curated collection of historical speeches</li>
                <li>• Detailed rhetorical analysis</li>
                <li>• Modern applications for public speaking</li>
                <li>• Educational resources for speakers and historians</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                We envision a world where the art of rhetoric is understood and appreciated by all, 
                where powerful speech serves as a force for positive change, and where the lessons 
                of history's greatest orators continue to inspire and guide future generations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}