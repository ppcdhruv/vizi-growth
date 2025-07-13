import Card from './ui/Card';

const posts = [
  {
    title: 'iOS 14.5 Survival Guide',
    excerpt: 'What every e-com brand needs to know about ATT & SKAdNetwork.',
    date: 'Jul 12 2025'
  },
  {
    title: 'Creative Fatigue: Myth vs Math',
    excerpt: 'How often should you refresh ad creatives? Data-backed answer.',
    date: 'Jul 5 2025'
  }
];

export default function Insights() {
  return (
    <section id="insights" className="py-24 px-4 bg-neutral-50">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center">Insights & Blog</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {posts.map(p => (
            <Card key={p.title} asChild>
              <article>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-neutral-600">{p.excerpt}</p>
                <time className="mt-3 inline-block text-sm text-neutral-500">{p.date}</time>
              </article>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
