import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

type Token = { text: string; cls: string }
type CodeLine = { tokens: Token[] }

const CODE_LINES: CodeLine[] = [
  {
    tokens: [
      { text: 'const ', cls: 'text-violet-400' },
      { text: 'developer', cls: 'text-sky-300' },
      { text: ' = {', cls: 'text-zinc-400' },
    ],
  },
  {
    tokens: [
      { text: '  name', cls: 'text-red-300' },
      { text: ': ', cls: 'text-zinc-500' },
      { text: '"Mustafa Ünal"', cls: 'text-emerald-300' },
      { text: ',', cls: 'text-zinc-500' },
    ],
  },
  {
    tokens: [
      { text: '  role', cls: 'text-red-300' },
      { text: ': ', cls: 'text-zinc-500' },
      { text: '"Backend Developer"', cls: 'text-emerald-300' },
      { text: ',', cls: 'text-zinc-500' },
    ],
  },
  {
    tokens: [
      { text: '  focus', cls: 'text-red-300' },
      { text: ': [', cls: 'text-zinc-500' },
      { text: '".NET"', cls: 'text-amber-300' },
      { text: ', ', cls: 'text-zinc-500' },
      { text: '"Microservices"', cls: 'text-amber-300' },
      { text: ', ', cls: 'text-zinc-500' },
      { text: '"Go"', cls: 'text-amber-300' },
      { text: '],', cls: 'text-zinc-500' },
    ],
  },
  {
    tokens: [
      { text: '  domain', cls: 'text-red-300' },
      { text: ': ', cls: 'text-zinc-500' },
      { text: '"cybersecurity platforms"', cls: 'text-emerald-300' },
      { text: ',', cls: 'text-zinc-500' },
    ],
  },
  {
    tokens: [
      { text: '  experience', cls: 'text-red-300' },
      { text: ': ', cls: 'text-zinc-500' },
      { text: '"~4 years"', cls: 'text-violet-300' },
      { text: ',', cls: 'text-zinc-500' },
    ],
  },
  {
    tokens: [
      { text: '  status', cls: 'text-red-300' },
      { text: ': ', cls: 'text-zinc-500' },
      { text: '"open to collaborate"', cls: 'text-violet-300' },
    ],
  },
  {
    tokens: [{ text: '}', cls: 'text-zinc-400' }],
  },
]

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines >= CODE_LINES.length) return
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 300)
    return () => clearTimeout(t)
  }, [visibleLines])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12">
      <div className="w-full max-w-2xl animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
        <p className="font-mono text-xs text-muted-foreground mb-8 tracking-widest uppercase">
          hello, world
        </p>

        <div className="rounded-lg border border-border overflow-hidden shadow-[0_0_60px_hsl(262_70%_60%/0.08)]">
          <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-border">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">~/developer.ts</span>
          </div>

          <div className="p-6 font-mono text-sm leading-7 min-h-[280px]">
            {CODE_LINES.slice(0, visibleLines).map((line, i) => (
              <div key={i} className="animate-fade-in" style={{ animationFillMode: 'both' }}>
                {line.tokens.map((token, j) => (
                  <span key={j} className={token.cls}>
                    {token.text}
                  </span>
                ))}
              </div>
            ))}
            {visibleLines < CODE_LINES.length && (
              <span className="inline-block w-2 h-4 bg-violet-400 align-middle animate-cursor-blink" />
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild>
            <a href="#projects">view projects</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">get in touch</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
