const GROUPS = [
  {
    label: 'backend',
    skills: ['.NET 6/8/10', 'ASP.NET Core', 'C#', 'Go (Fiber)', 'REST API', 'N-Layer Arch'],
  },
  {
    label: 'frontend',
    skills: ['React 18', 'Vue 3', 'Flutter', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Vuetify'],
  },
  {
    label: 'data & messaging',
    skills: ['PostgreSQL', 'EF Core', 'Dapper', 'GORM', 'MSSQL', 'RabbitMQ', 'MassTransit', 'SignalR', 'Redis'],
  },
  {
    label: 'auth & gateway',
    skills: ['Keycloak', 'OIDC / OAuth2', 'YARP Reverse Proxy', 'JWT'],
  },
  {
    label: 'devops & infra',
    skills: ['Docker', 'Kubernetes / RKE2', 'Helm', 'Jenkins', 'Harbor', 'HAProxy', 'Ansible', 'Azure DevOps', 'Azure Pipelines'],
  },
  {
    label: 'observability',
    skills: ['Prometheus', 'Grafana', 'VictoriaMetrics', 'Elasticsearch', 'Serilog'],
  },
  {
    label: 'tools',
    skills: ['Git', 'Quartz.NET', 'Hangfire', 'QuestPDF', 'FluentValidation', 'AutoMapper', 'MinIO / S3', 'Linux', 'Bash'],
  },
]

export default function Skills() {
  return (
    <section id="stack" className="py-24 px-6 border-t border-border">
      <div className="container mx-auto max-w-3xl">
        <p className="font-mono text-xs text-primary/70 tracking-widest uppercase mb-4">
          // stack
        </p>

        <h2 className="text-2xl font-semibold text-foreground mb-12">Tools I work with.</h2>

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
