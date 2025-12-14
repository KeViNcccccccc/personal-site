export default function Page() {
  const profile = {
    name: "Kevin Cai",
    headline: "CS student • ML / CV • Full-stack Engineer",
    location: "Sydney / Nanjing",
    bio: "I build practical ML demos and clean web apps. Recently working on computer vision, data engineering, and network programming projects.",
    links: [
      { label: "GitHub", href: "https://github.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
      { label: "Email", href: "ckw1598409309@yahoo.com" }
    ],
    highlights: [
      {
        title: "What I’m doing",
        items: [
          "Computer Vision: image classification & detection demos",
          "Data engineering: Spark pipelines",
          "System/network programming projects in Python"
        ]
      },
      {
        title: "Skills",
        items: [
          "Python, TypeScript, C/C++",
          "PyTorch, Pyspark",
          "Next.js, React, REST APIs"
        ]
      }
    ],
    projects: [
      {
        name: "Vision Demo",
        desc: "A small web demo that showcases CV model outputs with clean UI.",
        tags: ["CV", "Next.js", "API"],
        href: "#"
      },
      {
        name: "Data Dashboard",
        desc: "Interactive charts and summaries for experiment results.",
        tags: ["Data", "Charts"],
        href: "#"
      },
      {
        name: "Networking Project",
        desc: "Custom UDP/TCP client-server.",
        tags: ["Networking", "Python"],
        href: "#"
      }
    ]
  };

  return (
    <main className="page">
      <div className="container">
        <header className="header">
          <div className="avatar" aria-hidden="true">
            <span>KC</span>
          </div>

          <div className="intro">
            <h1 className="name">{profile.name}</h1>
            <p className="headline">{profile.headline}</p>
            <p className="meta">{profile.location}</p>

            <div className="links">
              {profile.links.map((l) => (
                <a key={l.label} className="pill" href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                  <span className="arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </header>

        <section className="card">
          <h2>About</h2>
          <p className="muted">{profile.bio}</p>
        </section>

        <section className="grid">
          {profile.highlights.map((block) => (
            <div key={block.title} className="card">
              <h2>{block.title}</h2>
              <ul className="list">
                {block.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="card">
          <div className="row">
            <h2>Projects</h2>
            <span className="muted">Selected</span>
          </div>

          <div className="projects">
            {profile.projects.map((p) => (
              <a key={p.name} className="project" href={p.href} target="_blank" rel="noreferrer">
                <div className="projectTop">
                  <div className="projectName">{p.name}</div>
                  <span className="muted">↗</span>
                </div>
                <div className="projectDesc muted">{p.desc}</div>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <footer className="footer muted">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with Next.js on Vercel</span>
        </footer>
      </div>
    </main>
  );
}
