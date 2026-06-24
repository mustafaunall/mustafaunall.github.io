export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <p className="font-mono text-xs text-primary/70 tracking-widest uppercase mb-4">
          // about
        </p>

        <h2 className="text-2xl font-semibold text-foreground mb-8">
          Building things that hold up.
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a software engineer based in Turkey, working at RSU. Most of my days are
              spent in .NET and React — designing APIs, building interfaces, figuring out where the
              abstraction should sit.
            </p>
            <p>
              Currently going deep on Go. I find the language design unusually honest, and I&apos;m
              interested in the problems that make it shine.
            </p>
            <p>
              I care about open source and try to contribute where I can. If you&apos;re working on
              something interesting in the .NET, React, or Go space, I&apos;m happy to talk.
            </p>
          </div>

          <div className="space-y-3">
            {[
              { label: 'currently at', value: 'RSU' },
              { label: 'main stack', value: '.NET · React · TypeScript' },
              { label: 'learning', value: 'Go' },
              { label: 'interested in', value: 'clean arch · OSS · DX' },
              { label: 'email', value: 'mustafaunaldev@gmail.com', href: 'mailto:mustafaunaldev@gmail.com' },
            ].map(({ label, value, href }) => (
              <div key={label} className="flex gap-4 text-sm border-b border-border pb-3">
                <span className="font-mono text-primary/60 w-28 shrink-0">{label}</span>
                {href ? (
                  <a href={href} className="text-foreground hover:text-primary transition-colors font-mono">
                    {value}
                  </a>
                ) : (
                  <span className="text-foreground font-mono">{value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
