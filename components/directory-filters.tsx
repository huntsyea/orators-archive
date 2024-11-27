"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { FilterState } from "@/hooks/use-filters";

interface DirectoryFiltersProps {
  className?: string;
  filters: FilterState;
  updateFilter: (category: string, value: string) => void;
}

export function DirectoryFilters({
  className,
  filters,
  updateFilter,
}: DirectoryFiltersProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div>
        <h3 className="font-semibold mb-3">Era</h3>
        <ScrollArea className="h-[200px]">
          {filters.eras.map((era) => (
            <Button
              key={era.value}
              variant={era.selected ? "secondary" : "ghost"}
              className="w-full justify-start mb-1"
              onClick={() => updateFilter("era", era.value)}
            >
              {era.value}
              {era.count > 0 && (
                <Badge variant="secondary" className="ml-auto">
                  {era.count}
                </Badge>
              )}
            </Button>
          ))}
        </ScrollArea>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-3">Categories</h3>
        <ScrollArea className="h-[200px]">
          {filters.categories.map((category) => (
            <Button
              key={category.value}
              variant={category.selected ? "secondary" : "ghost"}
              className="w-full justify-start mb-1"
              onClick={() => updateFilter("category", category.value)}
            >
              {category.value}
              {category.count > 0 && (
                <Badge variant="secondary" className="ml-auto">
                  {category.count}
                </Badge>
              )}
            </Button>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
}