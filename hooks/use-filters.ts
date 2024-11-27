"use client";

import { useState, useMemo } from "react";
import { Speech, speeches } from "@/lib/data";

export interface FilterOption {
  value: string;
  count: number;
  selected: boolean;
}

export interface FilterState {
  eras: FilterOption[];
  categories: FilterOption[];
}

export function useFilters() {
  const [selectedEras, setSelectedEras] = useState<Set<string>>(new Set());
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());

  const filters = useMemo(() => {
    const eraCount = new Map<string, number>();
    const categoryCount = new Map<string, number>();

    speeches.forEach((speech) => {
      eraCount.set(speech.era, (eraCount.get(speech.era) || 0) + 1);
      speech.categories.forEach((category) => {
        categoryCount.set(category, (categoryCount.get(category) || 0) + 1);
      });
    });

    return {
      eras: Array.from(eraCount.entries()).map(([value, count]) => ({
        value,
        count,
        selected: selectedEras.has(value),
      })),
      categories: Array.from(categoryCount.entries()).map(([value, count]) => ({
        value,
        count,
        selected: selectedCategories.has(value),
      })),
    };
  }, [selectedEras, selectedCategories]);

  const filteredSpeeches = useMemo(() => {
    return speeches.filter((speech) => {
      const matchesEra =
        selectedEras.size === 0 || selectedEras.has(speech.era);
      const matchesCategory =
        selectedCategories.size === 0 ||
        speech.categories.some((category) => selectedCategories.has(category));
      return matchesEra && matchesCategory;
    });
  }, [selectedEras, selectedCategories]);

  const updateFilter = (type: "era" | "category", value: string) => {
    const updateSet = (set: Set<string>) => {
      const newSet = new Set(set);
      if (newSet.has(value)) {
        newSet.delete(value);
      } else {
        newSet.add(value);
      }
      return newSet;
    };

    if (type === "era") {
      setSelectedEras(updateSet(selectedEras));
    } else {
      setSelectedCategories(updateSet(selectedCategories));
    }
  };

  return {
    speeches: filteredSpeeches,
    filters,
    updateFilter,
  };
}