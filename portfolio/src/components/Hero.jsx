import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Download, Mail, Sparkles } from 'lucide-react'
import { useToast } from '../context/ToastContext'
import {
  personalInfo,
  stats,
  skills,
  projects,
  experiences,
  certifications,
} from '../data/portfolioData'

/** Types each phrase out, holds, deletes, moves to the next — forever. */
function useTypewriter(words, { typeSpeed = 55, deleteSpeed = 28, hold = 1600 } = {}) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let timer
    if (!deleting && text === word) {
      timer = setTimeout(() => setDeleting(true), hold)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => i + 1)
    } else {
      timer = setTimeout(
        () => setText(word.slice(0, deleting ? text.length - 1 : text.length + 1)),
        deleting ? deleteSpeed : typeSpeed,
      )
    }
    return () => clearTimeout(timer)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, hold])

  return text
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
}

/** Builds a plain-text CV from the portfolio data and triggers a download. */
function buildResume() {
  const line = '='.repeat(60)
  const parts = [
    personalInfo.name.toUpperCase(),
    personalInfo.role,
    personalInfo.tagline,
    line,
    `Phone   : ${personalInfo.phone}`,
    `Email   : ${personalInfo.email}`,
    `GitHub  : ${personalInfo.github}`,
    `LinkedIn: ${personalInfo.linkedin}`,
    '',
    'PROFILE',
    personalInfo.bio,
    '',
    'EDUCATION',
    `- ${personalInfo.degree}`,
    `  ${personalInfo.university}`,
    `  CGPA: ${personalInfo.gpa}`,
    '',
    'SKILLS',
    `- Languages : ${skills.languages.join(', ')}`,
    `- Core CS   : ${skills.coreCS.join(', ')}`,
    `- Tools & DB: ${skills.toolsAndDB.join(', ')}`,
    '',
    'PROJECTS',
    ...projects.flatMap((p) => [`- ${p.title} (${p.category})`, `  ${p.summary}`, `  ${p.github}`]),
    '',
    'EXPERIENCE & INVOLVEMENT',
    ...experiences.map((e) => `- ${e.role} — ${e.organization} (${e.period})`),
    '',
    'CERTIFICATIONS',
    ...certifications.map((c) => `- ${c.title} — ${c.issuer} (${c.date})`),
    '',
    line,
    `Generated from ${personalInfo.github}`,
  ]
  return parts.join('\n')
}

export default function Hero() {
  const reduce = useReducedMotion()
  const { toast } = useToast()
  const phrases = personalInfo.tagline.split('|').map((s) => s.trim())
  const typed = useTypewriter(phrases)
  const badgeText = reduce ? phrases[0] : typed

  const downloadCV = () => {
    const blob = new Blob([buildResume()], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Hussain_Ahmed_Humaidi_CV.txt'
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
    toast({ type: 'success', title: 'CV downloaded', message: 'Saved Hussain_Ahmed_Humaidi_CV.txt' })
  }

  // "Calm & cohesive": one bright gradient primary (View Projects) + two matching
  // soft-slate secondaries built from theme tokens (hair/fill flip in light mode)
  // that pick up the cyan accent on hover — so the trio reads as one family.
  const secondaryBtn =
    'inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-hair-strong bg-fill-2 px-4 py-2.5 text-sm font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-neonCyan/45 hover:bg-neonCyan/10 hover:text-neonCyan'

  return (
    <section id="top" className="relative mx-auto max-w-6xl px-4 pt-36 pb-20 sm:px-6 md:pt-44 md:pb-28">
      {/* Living aurora background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Three drifting color fields */}
        <div className="absolute -left-32 -top-24 h-[26rem] w-[26rem] rounded-full bg-neonCyan/25 blur-[120px] animate-aurora" />
        <div className="absolute -right-24 top-8 h-[30rem] w-[30rem] rounded-full bg-neonPurple/25 blur-[130px] animate-drift-slow" />
        <div className="absolute -bottom-32 left-1/3 h-[24rem] w-[24rem] rounded-full bg-neon-magenta/20 blur-[130px] animate-aurora [animation-delay:-7s]" />
        {/* Focal spotlight behind the headline */}
        <div className="absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-neon-cyan)_14%,transparent),transparent_60%)]" />
        {/* Ambient dot grid, faded toward the edges */}
        <div className="absolute inset-0 bg-dot-grid opacity-60 mask-radial-fade" />
      </div>

      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* ---- Left: the pitch ---- */}
        <motion.div initial="hidden" animate="show" className="max-w-xl">
          <motion.div
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-neonCyan/30 bg-neonCyan/10 px-3.5 py-1.5 font-mono text-xs text-neonCyan shadow-[0_0_24px_-6px_rgba(6,182,212,0.5)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neonCyan/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neonCyan" />
            </span>
            Available for Roles
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="mt-6 text-4xl font-bold leading-[1.08] text-ink sm:text-6xl md:text-7xl"
          >
            Hi, I&rsquo;m <span className="text-gradient-animate glow-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.p variants={fadeUp} custom={2} className="mt-4 text-lg font-medium text-ink/90 sm:text-2xl">
            {personalInfo.role}
          </motion.p>

          {/* Terminal-style typed tagline */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="code-surface mt-6 inline-flex max-w-full items-center gap-2 overflow-hidden rounded-xl border border-hair bg-[#0b1120]/80 px-4 py-2.5 font-mono text-xs sm:text-sm"
          >
            <span className="text-neonPurple">~/humaidi</span>
            <span className="text-muted">$</span>
            <span className="truncate text-ink">{badgeText}</span>
            <span className="inline-block h-4 w-[2px] shrink-0 animate-blink bg-neonCyan" />
          </motion.div>

          <motion.div variants={fadeUp} custom={4} className="mt-8 flex flex-wrap items-center gap-2.5 sm:flex-nowrap">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-r from-neonCyan to-neonPurple px-4 py-2.5 text-sm font-semibold text-void transition-transform duration-200 hover:scale-[1.03] glow-cyan"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className={secondaryBtn}
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <button
              type="button"
              onClick={downloadCV}
              className={secondaryBtn}
            >
              <Download className="h-4 w-4" />
              Download CV
            </button>
          </motion.div>
        </motion.div>

        {/* ---- Right: portrait (falls back to the code card until /profile.jpg loads) ---- */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Rotating conic halo bleeding out from behind the portrait */}
          <div aria-hidden="true" className="pointer-events-none absolute -inset-6 -z-10 hidden sm:block">
            <div className="conic-ring h-full w-full rounded-[2.5rem] opacity-30 blur-3xl animate-spin-slow" />
          </div>
          <HeroVisual />

          <div className="pointer-events-none absolute -left-3 top-10 hidden sm:block">
            <StatChip value={`${stats[0].value}`} label={stats[0].label} float />
          </div>
          <div className="pointer-events-none absolute -right-3 top-1/2 hidden sm:block">
            <StatChip value={`${stats[3].value}+`} label={stats[3].label} float delay="1.5s" />
          </div>
          <div className="pointer-events-none absolute -bottom-5 left-1/4 hidden sm:block">
            <StatChip value={`${stats[2].value}+`} label={stats[2].label} float delay="3s" />
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        aria-label="Scroll to about"
        className="mx-auto mt-16 flex w-fit flex-col items-center gap-1.5 text-muted transition-colors hover:text-neonCyan"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  )
}

/** Hero visual: a compact headshot stacked above the code card. The photo drops
    out gracefully (leaving just the code card) if /profile.jpg fails to load. */
function HeroVisual() {
  const [showPhoto, setShowPhoto] = useState(true)
  return (
    <div className="flex flex-col gap-5">
      {showPhoto && <Portrait onError={() => setShowPhoto(false)} />}
      <CodeCard />
    </div>
  )
}

/** Compact headshot: gradient-ring frame, offset outline, and corner accent marks. */
function Portrait({ onError }) {
  return (
    <div className="relative mx-auto w-full max-w-[240px]">
      {/* Offset outline — a little breathing-room frame around the photo */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 -z-10 rounded-[1.6rem] border border-neonCyan/20"
      />
      {/* Gradient ring wrapping the image */}
      <div className="rounded-2xl bg-gradient-to-br from-neonCyan via-neonPurple to-neon-magenta p-[2px] shadow-2xl shadow-black/50">
        <div className="overflow-hidden rounded-[calc(1rem-2px)] bg-surface">
          <img
            src={personalInfo.photo}
            alt={`Portrait of ${personalInfo.name}`}
            onError={onError}
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </div>
      </div>
      {/* Corner accent marks */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-2 -top-2 h-5 w-5 rounded-tl-md border-l-2 border-t-2 border-neonCyan"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-2 -right-2 h-5 w-5 rounded-br-md border-b-2 border-r-2 border-neon-magenta"
      />
    </div>
  )
}

function StatChip({ value, label, float = false, delay = '0s' }) {
  return (
    <div
      className="glass-strong flex items-center gap-2 rounded-xl px-3 py-2 shadow-lg shadow-black/40"
      style={float ? { animation: 'var(--animate-float)', animationDelay: delay } : undefined}
    >
      <span className="font-display text-lg font-bold text-gradient">{value}</span>
      <span className="font-mono text-[11px] leading-tight text-muted">{label}</span>
    </div>
  )
}

/** Stylized editor window showing a self-describing object. */
function CodeCard() {
  const Line = ({ n, children }) => (
    <div className="flex gap-4">
      <span className="w-4 select-none text-right text-white/20">{n}</span>
      <span className="whitespace-pre">{children}</span>
    </div>
  )
  const key = 'text-neonCyan'
  const str = 'text-emerald-300'
  const kw = 'text-neon-magenta'
  const punct = 'text-muted'

  return (
    <div className="code-surface glass-strong overflow-hidden rounded-2xl shadow-2xl shadow-black/50">
      <div className="flex items-center gap-2 border-b border-hair bg-fill px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
        <span className="h-3 w-3 rounded-full bg-green-400/80" />
        <span className="ml-3 flex items-center gap-1.5 font-mono text-xs text-muted">
          <Sparkles className="h-3.5 w-3.5 text-neonCyan" />
          humaidi.js
        </span>
      </div>
      <pre className="overflow-x-auto px-4 py-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        <code className="block">
          <Line n="1"><span className={kw}>const</span> <span className="text-ink">humaidi</span> <span className={punct}>= {'{'}</span></Line>
          <Line n="2">{'  '}<span className={key}>role</span><span className={punct}>:</span> <span className={str}>"Aspiring Software Engineer"</span><span className={punct}>,</span></Line>
          <Line n="3">{'  '}<span className={key}>focus</span><span className={punct}>:</span> <span className={punct}>[</span><span className={str}>"DSA"</span><span className={punct}>,</span> <span className={str}>"OOP"</span><span className={punct}>],</span></Line>
          <Line n="4">{'  '}<span className={key}>stack</span><span className={punct}>:</span> <span className={punct}>[</span><span className={str}>"C++"</span><span className={punct}>,</span> <span className={str}>"Python"</span><span className={punct}>,</span> <span className={str}>"JS"</span><span className={punct}>],</span></Line>
          <Line n="5">{'  '}<span className={key}>cgpa</span><span className={punct}>:</span> <span className="text-orange-300">3.85</span><span className={punct}>,</span></Line>
          <Line n="6">{'  '}<span className={key}>competitiveProgrammer</span><span className={punct}>:</span> <span className={kw}>true</span><span className={punct}>,</span></Line>
          <Line n="7">{'  '}<span className={key}>openToWork</span><span className={punct}>:</span> <span className={kw}>true</span><span className={punct}>,</span></Line>
          <Line n="8"><span className={punct}>{'};'}</span></Line>
        </code>
      </pre>
    </div>
  )
}
