"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Speech } from "@/lib/mdx";

const eras = ["All Eras", "Ancient", "Medieval", "Modern", "20th Century", "21st Century"] as const;
const themes = ["All Themes", "Inspiration", "Persuasion", "Civil Rights", "War", "Peace", "Politics"] as const;

type Era = typeof eras[number];
type Theme = typeof themes[number];

interface DirectoryClientProps {
  speeches: Speech[];
}

export function DirectoryClient({ speeches }: DirectoryClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEra, setSelectedEra] = useState<Era>("All Eras");
  const [selectedTheme, setSelectedTheme] = useState<Theme>("All Themes");

  const handleEraChange = (value: Era) => {
    setSelectedEra(value);
  };

  const handleThemeChange = (value: Theme) => {
    setSelectedTheme(value);
  };

  const filteredSpeeches = speeches.filter((speech: Speech) => {
    const matchesSearch = speech.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      speech.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesEra = selectedEra === "All Eras" || speech.era === selectedEra;
    const matchesTheme = selectedTheme === "All Themes" || speech.category.includes(selectedTheme);
    
    return matchesSearch && matchesEra && matchesTheme;
  });

  return (
    <div className="container py-6 lg:py-12">
      <h1 className="text-4xl font-bold mb-8">Speech Directory</h1>

      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <Input
          placeholder="Search speeches..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
        <Select value={selectedEra} onValueChange={handleEraChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select Era" />
          </SelectTrigger>
          <SelectContent>
            {eras.map((era) => (
              <SelectItem key={era} value={era}>
                {era}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedTheme} onValueChange={handleThemeChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select Theme" />
          </SelectTrigger>
          <SelectContent>
            {themes.map((theme) => (
              <SelectItem key={theme} value={theme}>
                {theme}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredSpeeches.map((speech: Speech) => (
          <Link key={speech.slug} href={`/speeches/${speech.slug}`}>
            <Card className="p-6 h-full hover:bg-muted/50 transition-colors">
              <h2 className="text-xl font-semibold mb-2">{speech.title}</h2>
              <p className="text-muted-foreground mb-4">{speech.speaker}</p>
              <div className="flex flex-wrap gap-2">
                {speech.category.map((cat: string) => (
                  <Badge key={cat} variant="secondary">
                    {cat}
                  </Badge>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {filteredSpeeches.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No speeches found matching your criteria.</p>
        </div>
      )}
    </div>
  );
} 