export interface Speech {
  id: string;
  title: string;
  speaker: string;
  date: string;
  location: string;
  categories: string[];
  era: string;
  keyTakeaway: string;
  fullText?: string;
  rhetoricalTechniques?: string[];
  modernApplications?: string[];
}

export const speeches: Speech[] = [
  {
    id: "mlk-dream",
    title: "I Have a Dream",
    speaker: "Martin Luther King Jr.",
    date: "1963-08-28",
    location: "Washington, D.C.",
    categories: ["Civil Rights", "Inspiration"],
    era: "20th Century",
    keyTakeaway: "The power of metaphor and repetition in painting a vision of hope and equality.",
    fullText: "I have a dream that one day this nation will rise up and live out the true meaning of its creed: 'We hold these truths to be self-evident, that all men are created equal.'",
    rhetoricalTechniques: [
      "Anaphora - Repeated use of 'I have a dream' to emphasize vision",
      "Metaphor - 'Justice rolls down like waters'",
      "Allusion - References to American documents and ideals"
    ],
    modernApplications: [
      "Using repetition to reinforce key messages",
      "Connecting personal vision to universal values",
      "Building emotional resonance through imagery"
    ]
  },
  {
    id: "churchill-finest-hour",
    title: "Their Finest Hour",
    speaker: "Winston Churchill",
    date: "1940-06-18",
    location: "House of Commons",
    categories: ["War", "Leadership"],
    era: "20th Century",
    keyTakeaway: "Using emotional appeal and vivid imagery to rally a nation in crisis.",
    fullText: "Let us therefore brace ourselves to our duties, and so bear ourselves that, if the British Empire and its Commonwealth last for a thousand years, men will still say, 'This was their finest hour.'",
    rhetoricalTechniques: [
      "Pathos - Emotional appeal to national pride",
      "Future-casting - Imagining how history will view present actions",
      "Dramatic contrast - Juxtaposing crisis with greatness"
    ],
    modernApplications: [
      "Creating a compelling vision during crisis",
      "Using historical context to add weight to current situations",
      "Building confidence through acknowledgment of challenges"
    ]
  },
  {
    id: "kennedy-inaugural",
    title: "Inaugural Address",
    speaker: "John F. Kennedy",
    date: "1961-01-20",
    location: "Washington, D.C.",
    categories: ["Politics", "Leadership"],
    era: "20th Century",
    keyTakeaway: "The impact of concise, powerful statements in calling for national unity.",
    fullText: "Ask not what your country can do for you—ask what you can do for your country.",
    rhetoricalTechniques: [
      "Chiasmus - Inverse parallelism in structure",
      "Antithesis - Contrasting ideas for emphasis",
      "Brevity - Concise, memorable phrasing"
    ],
    modernApplications: [
      "Crafting memorable soundbites",
      "Using rhetorical devices for impact",
      "Balancing individual and collective responsibility"
    ]
  },
  {
    id: "gettysburg-address",
    title: "Gettysburg Address",
    speaker: "Abraham Lincoln",
    date: "1863-11-19",
    location: "Gettysburg, Pennsylvania",
    categories: ["War", "Unity"],
    era: "19th Century",
    keyTakeaway: "The art of brevity and the power of dedicating oneself to a greater cause.",
    fullText: "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.",
    rhetoricalTechniques: [
      "Elevated diction - Formal, dignified language",
      "Parallel structure - Repeated grammatical patterns",
      "Metaphor - Birth of a nation"
    ],
    modernApplications: [
      "Making complex ideas accessible",
      "Using brevity for impact",
      "Connecting present actions to historical context"
    ]
  },
  {
    id: "demosthenes-philip",
    title: "First Philippic",
    speaker: "Demosthenes",
    date: "351 BC",
    location: "Athens",
    categories: ["Politics", "War"],
    era: "Ancient",
    keyTakeaway: "The importance of action over words and the responsibility of citizens.",
    fullText: "For if you sit idle, with an interest merely in listening to speeches, I see no possibility that anything we need will be done.",
    rhetoricalTechniques: [
      "Direct address - Speaking directly to audience",
      "Logical argument - Step-by-step reasoning",
      "Call to action - Urgent appeal for response"
    ],
    modernApplications: [
      "Motivating audiences to take action",
      "Building credibility through logical argument",
      "Addressing audience objections directly"
    ]
  }
];

export const featuredSpeeches = speeches.slice(0, 3);

export function getSpeechById(id: string): Speech | undefined {
  return speeches.find(speech => speech.id === id);
}