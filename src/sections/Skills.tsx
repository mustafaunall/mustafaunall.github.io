const GROUPS = [
  {
    label: 'frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'SASS'],
  },
  {
    label: 'backend',
    skills: ['.NET / C#', 'Go', 'Node.js', 'Python', 'GraphQL', 'REST'],
  },
  {
    label: 'data',
    skills: ['MSSQL', 'MongoDB', 'Redis', 'MariaDB', 'Elasticsearch'],
  },
  {
    label: 'infra & tools',
    skills: ['Docker', 'Azure', 'Nginx', 'Git', 'Linux', 'Cloudflare'],
  },
]

export default function Skills() {
  return (
    <section id="stack" className="py-24 px-6 border-t border-border">
      <div className="container mx-auto max-w-3xl">
        <p className="font-mono text-xs text-primary/70 tracking-widest uppercase mb-4">
          // stack
        </p>

        <h2 className="text-2xl font-semibold text-foreground mb-12">
          Tools I work with.
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {GROUPS.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-xs text-primary mb-4 tracking-wide">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1.5 rounded border border-border bg-surface text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
