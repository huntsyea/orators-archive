import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const speechesDirectory = path.join(process.cwd(), 'content/speeches');

export interface Speech {
  slug: string;
  title: string;
  speaker: string;
  date: string;
  location: string;
  category: string[];
  era: string;
  tags: string[];
  content: string;
}

export function getAllSpeechSlugs() {
  const fileNames = fs.readdirSync(speechesDirectory);
  return fileNames.map(fileName => ({
    slug: fileName.replace(/\.mdx$/, '')
  }));
}

export function getSpeechBySlug(slug: string): Speech {
  const fullPath = path.join(speechesDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...data as Omit<Speech, 'slug' | 'content'>
  };
}

export function getAllSpeeches(): Speech[] {
  const slugs = getAllSpeechSlugs();
  const speeches = slugs
    .map(({ slug }) => getSpeechBySlug(slug))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  return speeches;
}