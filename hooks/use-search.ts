"use client";

import { useMemo, useState } from "react";
import { Speech, speeches } from "@/lib/data";

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSpeeches = useMemo(() => {
    if (!searchQuery.trim()) return speeches;

    const query = searchQuery.toLowerCase();
    return speeches.filter((speech) => {
      return (
        speech.title.toLowerCase().includes(query) ||
        speech.speaker.toLowerCase().includes(query) ||
        speech.categories.some((category) =>
          category.toLowerCase().includes(query)
        ) ||
        speech.keyTakeaway.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    speeches: filteredSpeeches,
  };
}