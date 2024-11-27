// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";
var Speech = defineDocumentType(() => ({
  name: "Speech",
  filePathPattern: `speeches/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    speaker: { type: "string", required: true },
    date: { type: "string", required: true },
    location: { type: "string", required: true },
    category: {
      type: "list",
      of: { type: "string" },
      required: true
    },
    era: { type: "string", required: true },
    tags: {
      type: "list",
      of: { type: "string" },
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
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
      ],
      rehypeStringify
    ]
  }
});
export {
  Speech,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-HIZTEYDY.mjs.map
