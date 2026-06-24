import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

const PROJECTS = [
  {
    title: 'Project Alpha',
    description:
      'A brief description of what this project does and why it matters. What problem does it solve?',
    tags: ['.NET', 'React', 'TypeScript', 'MSSQL'],
    github: 'https://github.com/mustafaunall',
    live: null,
  },
  {
    title: 'Project Beta',
    description:
      'Short summary of this project — the goal, the interesting technical challenge, the result.',
    tags: ['Go', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/mustafaunall',
    live: null,
  },
  {
    title: 'Project Gamma',
    description:
      'What makes this one worth showing? A line or two on the approach and what you learned.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Redis'],
    github: 'https://github.com/mustafaunall',
    live: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-border">
      <div className="container mx-auto max-w-3xl">
        <p className="font-mono text-xs text-primary/70 tracking-widest uppercase mb-4">
          // projects
        </p>

        <h2 className="text-2xl font-semibold text-foreground mb-12">Selected work.</h2>

        <div className="space-y-6">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group p-6 rounded-lg border border-border bg-surface hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
                  {project.github && (
                    <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                      <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Button variant="outline" asChild>
            <a href="https://github.com/mustafaunall" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              more on github
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
