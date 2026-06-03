export default function Home() {
  return (
    <main className="pt-16">
      {Array.from({ length: 20 }).map((_, i) => (
        <p key={i} className="p-8 text-muted-foreground">Placeholder line {i + 1}</p>
      ))}
    </main>
  );
}