export type Era = "All Eras" | "Ancient" | "Medieval" | "Modern" | "20th Century" | "21st Century";
export type Theme = "All Themes" | "Inspiration" | "Persuasion" | "Civil Rights" | "War" | "Peace" | "Politics";

export interface Heading {
  level: number;
  text: string;
}

export interface Speech {
  _id: string;
  _raw: {
    sourceFileName: string;
    sourceFilePath: string;
    sourceFileDir: string;
    contentType: string;
    flattenedPath: string;
  };
  type: 'Speech';
  title: string;
  speaker: string;
  date: string;
  location: string;
  category: string[];
  era: string;
  tags: string[];
  body: {
    raw: string;
    code: string;
    html: string;
  };
  slug: string;
  headings: Heading[];
} 