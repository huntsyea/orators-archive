import { getAllSpeeches } from "@/lib/mdx";
import { DirectoryClient } from "./directory-client.tsx";

export default async function DirectoryPage() {
  const speeches = getAllSpeeches();
  
  return <DirectoryClient speeches={speeches} />;
}