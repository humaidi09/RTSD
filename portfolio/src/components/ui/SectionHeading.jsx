import Reveal from './Reveal'

/**
 * Consistent section header: mono eyebrow + display title + optional kicker.
 */
export default function SectionHeading({
  eyebrow,
  title,
  kicker,
  align = 'left',
}) {
  const wrap =
    align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'

  return (
    <div className={wrap}>
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {kicker && (
        <Reveal delay={0.1}>
          <p className="mt-4 leading-relaxed text-muted">{kicker}</p>
        </Reveal>
      )}
    </div>
  )
}
