import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/badge";
import { getAllSpeechSlugs, getSpeechBySlug } from "@/lib/mdx";
import type { Speech } from "@/lib/mdx";

export async function generateStaticParams() {
  const speeches = getAllSpeechSlugs();
  return speeches.map((speech) => ({
    slug: speech.slug,
  }));
}

async function getSpeechFromParams(slug: string): Promise<Speech | undefined> {
  try {
    return getSpeechBySlug(slug);
  } catch {
    return undefined;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const speech = await getSpeechFromParams(params.slug);

  if (!speech) {
    return {};
  }

  const title = `${speech.title} | The Orator's Archive`;
  const description = `${speech.title} - A historical speech delivered by ${speech.speaker} in ${speech.location} (${speech.date}). ${speech.category.join(", ")}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: speech.date,
      authors: [speech.speaker],
      tags: [...speech.category, speech.era],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    authors: [{ name: speech.speaker }],
    keywords: [...speech.category, speech.era, "speech", "oration", "history", speech.speaker],
    alternates: {
      canonical: `/speeches/${params.slug}`,
    },
  };
}

export default async function SpeechPage({
  params,
}: {
  params: { slug: string };
}) {
  const speech = await getSpeechFromParams(params.slug);

  if (!speech) {
    notFound();
  }

  return (
    <article className="container py-6 lg:py-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{speech.title}</h1>
        <div className="flex flex-col space-y-2">
          <p className="text-xl text-muted-foreground">By {speech.speaker}</p>
          <p className="text-muted-foreground">{speech.date} • {speech.location}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {speech.category.map((cat) => (
            <Badge key={cat} variant="secondary">
              {cat}
            </Badge>
          ))}
        </div>
      </div>
      <div className="mt-8 prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote source={speech.content} />
      </div>
    </article>
  );
} 