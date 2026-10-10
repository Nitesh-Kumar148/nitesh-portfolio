
import { useState } from 'react'
import profilePhoto from './assets/nitesh.jpg'

function App() {
  const [imageError, setImageError] = useState(false)

  const projects = [
    {
      number: '01',
      name: 'DataPrepEnv',
      category: 'AI · Data Science · Streamlit',
      status: 'Project',
      description:
        'An AI-assisted data cleaning and preprocessing environment for messy CSV datasets. Features include missing-value handling, negative-value fixes, outlier handling, row removal, and reward-based scoring.',
      tags: ['Python', 'Streamlit', 'Data Preprocessing'],
      link: 'https://github.com/Nitesh-Kumar148/dataprepenv',
    },
    {
      number: '02',
      name: 'ForgeWarm',
      category: 'Multi-Agent AI · Team Project',
      status: 'In Development',
      description:
        'A team project aiming to turn user ideas into applications using multiple coordinated AI agents.',
      tags: ['Artificial Intelligence', 'Multi-Agent Systems'],
      link: '',
    },
    {
      number: '03',
      name: 'AgriVoice',
      category: 'AI · Agriculture · AI Verse 2.0',
      status: 'Prototype',
      description:
        'An AI farming assistant prototype built with a friend to help farmers interact with an AI agent and receive farming-related guidance.',
      tags: ['AI Assistant', 'Agriculture'],
      link: '',
    },
    {
      number: '04',
      name: 'Research Methodology Paper',
      category: 'Academic Research',
      status: 'Academic Work',
      description:
        'A research paper titled “A Hybrid Cloud-Peer Architecture for Real-Time Document Collaboration Using Firebase Realtime Database and WebRTC.”',
      tags: ['Firebase', 'WebRTC', 'Cloud Architecture'],
      link: '',
    },
  ]

  const skills = [
    {
      title: 'Programming & Web Fundamentals',
      subtitle: 'Studied · Basic knowledge',
      items: ['C', 'Python', 'Java', 'HTML', 'CSS'],
    },
    {
      title: 'Tools & Platforms',
      subtitle: 'Previously used',
      items: [
        'GitHub',
        'Streamlit',
        'VS Code',
        'Jupyter Notebook',
        'Google Colab',
      ],
    },
    {
      title: 'Currently Learning',
      subtitle: 'Learning through practice',
      items: ['JavaScript', 'React', 'Tailwind CSS'],
    },
  ]

  const navLinks = [
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Contact', '#contact'],
  ]

  return (
    <div className="min-h-screen overflow-hidden bg-[#09090b] text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#09090b]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 md:px-10">
          <a href="#home" className="shrink-0 text-lg font-bold sm:text-xl">
            Nitesh Kumar<span className="text-cyan-400">.</span>
          </a>

          <div className="flex flex-wrap justify-end gap-3 text-xs text-gray-400 sm:gap-6 sm:text-sm">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="transition hover:text-cyan-400"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Home */}
      <main
        id="home"
        className="relative mx-auto grid min-h-[80vh] max-w-7xl items-center gap-14 px-6 py-16 md:grid-cols-[1.15fr_0.85fr] md:px-10 md:py-24"
      >
        <div className="pointer-events-none absolute left-0 top-20 -z-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="relative z-10">
          <p className="mb-6 flex items-center gap-3 text-xs tracking-[0.2em] text-cyan-400 sm:text-sm">
            <span className="h-px w-8 bg-cyan-400" />
            COMPUTER SCIENCE STUDENT
          </p>

          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            Hi, I'm Nitesh.
            <br />
            <span className="text-gray-500">I build things</span>
            <br />
            <span className="text-cyan-400">with technology.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            I'm a B.Tech Computer Science student graduating in 2028,
            exploring software development and artificial intelligence.
            I learn by building projects and strengthening my coding
            fundamentals.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
            >
              Explore My Projects ↗
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-white/15 px-6 py-3 text-gray-200 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-gray-500">
            <span>India</span>
            <span>AI & Software Development</span>
            <span>Always Learning</span>
          </div>
        </div>

        {/* Profile photo */}
        <div className="relative mx-auto w-full max-w-sm md:max-w-md">
          <div className="absolute -inset-4 rounded-[2rem] bg-cyan-400/10 blur-2xl" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-cyan-400/30 bg-[#111116] p-2 shadow-2xl shadow-cyan-950/30">
            {!imageError ? (
              <img
                src={profilePhoto}
                alt="Nitesh Kumar"
                onError={() => setImageError(true)}
                className="h-full w-full object-cover object-center"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#10232a] via-[#111116] to-[#092f36]">
                <span className="text-8xl font-bold tracking-tighter text-cyan-400">
                  NK
                </span>
                <p className="mt-4 text-sm text-gray-400">
                  Check your photo filename
                </p>
              </div>
            )}

            
          </div>

          <div className="absolute -right-3 top-8 rounded-lg border border-cyan-400/30 bg-[#101013] px-4 py-3 text-xs text-cyan-300 shadow-xl sm:-right-5">
            Building & learning ↗
          </div>
        </div>
      </main>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-24 border-t border-white/10 px-6 py-24 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm tracking-[0.2em] text-cyan-400">
            01 / ABOUT
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Learning by building.
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">A little about me</h3>
              <p className="mt-4 leading-8 text-gray-400">
                I'm Nitesh Kumar, a Computer Science student pursuing a B.Tech
                degree. I'm interested in software development and artificial
                intelligence, and I enjoy exploring ideas through hands-on
                projects.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Education</h3>
              <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <p className="font-medium">B.Tech in Computer Science</p>
                <p className="mt-2 text-sm text-gray-400">
                  Expected graduation: 2028
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Building my technical foundation through coursework,
                  experimentation, and collaborative projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="scroll-mt-24 border-t border-white/10 bg-white/[0.015] px-6 py-24 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm tracking-[0.2em] text-cyan-400">
            02 / SKILLS
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            My technical toolkit<span className="text-cyan-400">.</span>
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-gray-400">
            Programming fundamentals I've studied, tools I've used, and
            technologies I'm currently learning.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {skills.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-white/10 bg-[#101013] p-6 transition hover:border-cyan-400/40"
              >
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <p className="mt-2 text-xs text-gray-500">{group.subtitle}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-gray-300"
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

      {/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-7xl scroll-mt-24 border-t border-white/10 px-6 py-24 md:px-10"
      >
        <p className="mb-4 text-sm tracking-[0.2em] text-cyan-400">
          03 / SELECTED WORK
        </p>
        <h2 className="text-3xl font-bold md:text-5xl">
          Projects & research<span className="text-cyan-400">.</span>
        </h2>
        <p className="mt-5 max-w-2xl leading-7 text-gray-400">
          A selection of my project work, collaborative experiments, and
          academic research.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group flex flex-col rounded-2xl border border-white/10 bg-[#101013] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-sm text-cyan-400">
                  PROJECT / {project.number}
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                  {project.status}
                </span>
              </div>

              <p className="mt-8 text-xs uppercase tracking-wider text-gray-500">
                {project.category}
              </p>
              <h3 className="mt-3 text-2xl font-semibold transition group-hover:text-cyan-300">
                {project.name}
              </h3>
              <p className="mt-4 flex-1 leading-7 text-gray-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-white/[0.05] px-3 py-1.5 text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                >
                  View on GitHub ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 border-t border-white/10 px-6 py-24 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm tracking-[0.2em] text-cyan-400">
            04 / CONTACT
          </p>
          <h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Let's connect<span className="text-cyan-400">.</span>
          </h2>
          <p className="mt-6 max-w-xl leading-7 text-gray-400">
            I'm interested in learning, collaborating on projects, and exploring
            internship opportunities. Feel free to reach out!
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:niteshk91854@gmail.com"
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/50"
            >
              <p className="text-sm text-gray-500">Email</p>
              <p className="mt-2 break-all font-medium text-cyan-400">
                niteshk91854@gmail.com
              </p>
            </a>

            <a
              href="https://github.com/Nitesh-Kumar148"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/50"
            >
              <p className="text-sm text-gray-500">GitHub</p>
              <p className="mt-2 font-medium text-cyan-400">
                View my repositories ↗
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/nitesh-kumar-a69321412"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/50"
            >
              <p className="text-sm text-gray-500">LinkedIn</p>
              <p className="mt-2 font-medium text-cyan-400">
                Connect with me ↗
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-7 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Nitesh Kumar</p>
          <a href="#home" className="transition hover:text-cyan-400">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App