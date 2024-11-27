// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var Speech = defineDocumentType(() => ({
  name: "Speech",
  filePathPattern: `speeches/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    speaker: {
      type: "string",
      required: true
    },
    date: {
      type: "string",
      required: true
    },
    location: {
      type: "string",
      required: true
    },
    category: {
      type: "list",
      of: { type: "string" },
      required: true
    },
    era: {
      type: "string",
      required: true
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: true
    },
    relatedSpeeches: {
      type: "nested",
      of: {
        slug: { type: "string" },
        title: { type: "string" },
        speaker: { type: "string" }
      },
      required: false,
      list: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `${doc._raw.flattenedPath.split("/").pop()}`
    },
    headings: {
      type: "json",
      resolve: async (doc) => {
        const regXHeader = /#(#{0,5})\s+(.+)/g;
        const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          (match) => ({
            level: match[1].length + 1,
            text: match[2]
          })
        );
        return headings;
      }
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Speech],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark"
        }
      ]
    ]
  }
});
export {
  Speech,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-RHGCKEYR.mjs.map
