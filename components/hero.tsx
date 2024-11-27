import { ScrollText } from "lucide-react";

export function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-primary/10 via-background to-background">
      <div className="container mx-auto px-4 py-24 text-center">
        <ScrollText className="h-16 w-16 mx-auto mb-6 text-primary" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Timeless Words, Modern Lessons
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover history's most influential speeches and unlock the secrets of powerful rhetoric for today's world.
        </p>
      </div>
    </div>
  );
}