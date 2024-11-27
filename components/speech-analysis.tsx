interface SpeechAnalysisProps {
  rhetoricalTechniques?: string[];
  modernApplications?: string[];
}

export function SpeechAnalysis({
  rhetoricalTechniques,
  modernApplications,
}: SpeechAnalysisProps) {
  if (!rhetoricalTechniques && !modernApplications) return null;

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {rhetoricalTechniques && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Rhetorical Techniques</h2>
          <ul className="space-y-3">
            {rhetoricalTechniques.map((technique, index) => (
              <li key={index} className="text-muted-foreground">
                • {technique}
              </li>
            ))}
          </ul>
        </div>
      )}

      {modernApplications && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Modern Applications</h2>
          <ul className="space-y-3">
            {modernApplications.map((application, index) => (
              <li key={index} className="text-muted-foreground">
                • {application}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}