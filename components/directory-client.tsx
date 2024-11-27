"use client";

import { useState } from "react";
import { Filter } from "lucide-react";
import { DirectoryFilters } from "@/components/directory-filters";
import { SpeechList } from "@/components/speech-list";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useFilters } from "@/hooks/use-filters";

export function DirectoryClient() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { speeches, filters, updateFilter } = useFilters();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Speech Directory</h1>
        <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="lg:hidden">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <DirectoryFilters
              filters={filters}
              updateFilter={updateFilter}
              className="mt-4"
            />
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
        <DirectoryFilters
          filters={filters}
          updateFilter={updateFilter}
          className="hidden lg:block"
        />
        <SpeechList speeches={speeches} />
      </div>
    </div>
  );
}