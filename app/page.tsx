"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FeaturedSpeeches } from "@/components/featured-speeches";
import { Hero } from "@/components/hero";
import { useSearch } from "@/hooks/use-search";
import { SpeechList } from "@/components/speech-list";

export default function Home() {
  const { searchQuery, setSearchQuery, speeches } = useSearch();
  const showSearchResults = searchQuery.trim().length > 0;

  return (
    <main className="min-h-screen">
      <Hero />
      
      <div className="container mx-auto px-4 py-8">
        <div className="relative max-w-2xl mx-auto mb-12">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input 
            placeholder="Search speeches by title, speaker, or theme..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {showSearchResults ? (
          <div>
            <h2 className="text-2xl font-bold mb-6">Search Results</h2>
            <SpeechList speeches={speeches} />
          </div>
        ) : (
          <FeaturedSpeeches />
        )}
      </div>
    </main>
  );
}