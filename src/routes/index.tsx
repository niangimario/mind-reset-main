import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "This Is Keeping You Stuck in Depression Depression No More" },
      {
        name: "description",
        content:
          "Daily habits silently feed depression. Discover what changes everything, based on neuroscience. By Depression No More.",
      },
      { property: "og:title", content: "This Is Keeping You Stuck in Depression" },
      {
        property: "og:description",
        content:
          "It's not lack of strength. It's not bad luck. It's a cycle. And you're trapped in it. A 8-minute clinical read.",
      },
      { property: "og:type", content: "article" },
    ],
  }),
  component: ArticlePage,
});

const habits = [
  {
    n: "01",
    title: "Staying isolated all day",
    body:
      "The human brain is social. Isolation reduces dopamine production and increases cortisol (the stress hormone). The result: more emptiness, more anxiety, more depression.",
  },
  {
    n: "02",
    title: "Sleeping poorly or too much",
    body:
      "Too little or too much sleep completely disrupts serotonin. Mood becomes unstable, the mind heavy, and you wake up worse than when you went to bed.",
  },
  {
    n: "03",
    title: "Constantly consuming negative content",
    body:
      "News, sad videos, comparisons on social media activate the brain areas linked to fear and inadequacy. You literally train your mind to feel bad.",
  },
  {
    n: "04",
    title: "Not getting enough sunlight",
    body:
      "Low sun exposure = low serotonin production. Without enough serotonin, your brain enters emotional survival mode.",
  },
  {
    n: "05",
    title: "Staying still, with no physical activity",
    body:
      "Exercise releases endorphins natural antidepressants. Without movement, the body builds tension and the mind sinks.",
  },
  {
    n: "06",
    title: "Repetitive negative thinking (rumination)",
    body:
      "Thinking too much about the same problems strengthens negative neural connections. Your brain learns to be depressive. Yes it learns.",
  },
];

const benefits = [
  {
    title: "Increase natural serotonin production",
    body: "The neurotransmitter linked to well-being, calm and emotional stability.",
  },
  {
    title: "Improve dopamine receptor sensitivity",
    body: "The neurotransmitter linked to pleasure, motivation and reward.",
  },
  {
    title: "Reduce cortisol (the stress hormone)",
    body: "It lowers the chronic alert state that keeps the brain overloaded.",
  },
  {
    title: "Stimulate neuroplasticity",
    body: "The brain's ability to reorganize itself and form new healthy pathways.",
  },
];

function ArticlePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero / Article header */}
      <article id="artigo" className="mx-auto max-w-3xl px-4 pt-10 pb-8 sm:px-6 sm:pt-16 sm:pb-10 md:pt-24">
        <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:mb-8 sm:text-[11px]">
          <span className="inline-block h-px w-6 bg-border sm:w-8" />
          <span>Mental Health · Neuroscience</span>
        </div>
        <h1 className="font-serif text-[2rem] font-light leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-6xl">
          This is keeping you{" "}
          <span className="italic text-clinical">stuck in depression</span>{" "}
          <span className="bg-yellow-300 px-1.5 py-0.5 text-foreground decoration-clone box-decoration-clone">
            (and you do it every day)
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg md:text-xl">
          Do you think depression simply "happens" to you? Wrong. It is being fed silently
          by your own habits.
        </p>

        {/* Author */}
        <div className="mt-12 flex items-center gap-4 border-y border-border py-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-clinical text-sm font-semibold text-primary-foreground">
            DN
          </div>
          <div className="flex flex-1 flex-col">
            <span className="text-sm font-medium text-foreground">Editorial Team</span>
            <span className="text-xs text-muted-foreground">
              Depression No More · 8 min read
            </span>
          </div>
          <span className="hidden text-xs uppercase tracking-widest text-muted-foreground md:inline">
            Clinical Article
          </span>
        </div>
      </article>

      {/* Body */}
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <h2 className="font-serif text-2xl font-medium tracking-tight md:text-3xl">
          The truth no one tells you
        </h2>
        <p className="mt-5 text-lg leading-[1.75] text-foreground/85">
          Depression isn't only emotional. It's <strong className="font-medium">brain chemistry</strong>{" "}
          + <strong className="font-medium">repeated behavior</strong>. And there are daily
          actions that destroy the neurotransmitters responsible for your well-being mainly{" "}
          <em>serotonin</em> and <em>dopamine</em>.
        </p>

        <h3 className="mt-16 font-serif text-2xl font-medium tracking-tight md:text-3xl">
          If you do this, you are making your depression worse right now
        </h3>

        <ol className="mt-10 divide-y divide-border border-y border-border">
          {habits.map((h) => (
            <li key={h.n} className="grid grid-cols-[auto_1fr] gap-4 py-6 sm:gap-6 md:gap-10 md:py-7">
              <span className="font-serif text-2xl font-light text-clinical sm:text-3xl md:text-4xl">
                {h.n}
              </span>
              <div>
                <h4 className="font-serif text-lg font-medium leading-snug text-foreground sm:text-xl">
                  {h.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
                  {h.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Pull quote */}
        <blockquote className="my-12 border-l-2 border-accent pl-5 sm:my-16 sm:pl-6 md:pl-8">
          <p className="font-serif text-xl font-light italic leading-snug text-foreground sm:text-2xl md:text-3xl">
            “It's not lack of strength. It's not bad luck. It's a cycle. And you're trapped in it.”
          </p>
        </blockquote>

        <p className="text-base leading-[1.75] text-foreground/85 sm:text-lg">
          But the good news is: if the wrong habits make depression worse,{" "}
          <strong className="font-medium">the right habits can reverse it</strong>. And that is
          exactly what almost no one teaches you.
        </p>

        {/* Turning point */}
        <h2 className="mt-16 font-serif text-2xl font-medium tracking-tight sm:mt-20 sm:text-3xl md:text-4xl">
          The part that changes everything
        </h2>
        <p className="mt-5 text-base leading-[1.75] text-foreground/85 sm:text-lg">
          If behaviors can dysregulate your brain, then behaviors can also reorganize it. This is
          not opinion it is science.
        </p>

        <h3 className="mt-12 font-serif text-xl font-medium tracking-tight md:text-2xl">
          The right habits activate the same mechanisms as clinical treatments
        </h3>
        <p className="mt-3 text-base text-muted-foreground">
          Neuroscience studies show that certain routines can:
        </p>

        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {benefits.map((b) => (
            <li
              key={b.title}
              className="flex gap-4 rounded-md border border-border bg-card p-5 shadow-[0_1px_0_0_oklch(0.9_0.01_90)]"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs text-accent-foreground">
                ✓
              </span>
              <div>
                <p className="font-medium text-foreground">{b.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-base leading-[1.75] text-foreground/85 sm:text-lg">
          In other words: your brain can come out of the depressive state{" "}
          <em>if it receives the right stimuli.</em>
        </p>

        {/* Important callout */}
        <aside className="mt-12 rounded-md border-l-4 border-clinical bg-secondary/60 p-5 sm:p-6 md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-clinical">
            Important
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/90 sm:text-base md:text-lg">
            There are pills that help regulate neurotransmitters like serotonin and dopamine. But
            there is something many people ignore: the right habits can do something similar
            stimulating the body itself to produce and balance these chemicals naturally.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90 sm:text-base md:text-lg">
            The pharmaceutical industry will not make something that frees you forever. They want
            you trapped in this so they can keep profiting from selling you their pills.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-foreground/90 sm:text-base md:text-lg">
            That's why the dose of serotonin and dopamine those pills release is intentionally
            low enough to give you relief for a while, but never to cure you. The result? You
            always come back to the same problem. And to the same pharmacy.
          </p>
        </aside>

        <h3 className="mt-16 font-serif text-2xl font-medium tracking-tight md:text-3xl">
          Why do so many people keep returning to the same mental state?
        </h3>
        <p className="mt-4 text-lg leading-[1.75] text-foreground/85">
          Because they treat the symptoms, but never change the system that creates the problem.
        </p>
        <p className="mt-6 text-lg leading-[1.75] text-foreground/85">
          "I often recommend to my patients struggling with depression a simple, accessible, and straight-to-the-point book.
        </p>
        <p className="mt-4 text-lg leading-[1.75] text-foreground/85">
          A guide designed to help the brain interrupt negative cycles, reshape destructive mental habits, and gradually return to a more balanced and emotionally stable state."
        </p>

        {/* Imagine */}
        <div className="mt-16 rounded-md bg-foreground p-6 text-background sm:p-8 md:p-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-background/60">
            Imagine this
          </p>
          <ul className="mt-6 space-y-4 font-serif text-xl font-light leading-snug sm:text-2xl md:text-3xl">
            <li className="flex gap-3 sm:gap-4">
              <span className="text-background/40"></span>
              Waking up and feeling mental lightness.
            </li>
            <li className="flex gap-3 sm:gap-4">
              <span className="text-background/40"></span>
              Having energy without effort.
            </li>
            <li className="flex gap-3 sm:gap-4">
              <span className="text-background/40"></span>
              Stopping the fight against your own mind.
            </li>
          </ul>
          <p className="mt-8 text-sm text-background/70 sm:text-base md:text-lg">
            This is not luck. It's <em>biology applied correctly.</em>
          </p>
        </div>
      </section>

      {/* Product / CTA */}
      <section id="adquirir" className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[1.1fr_1fr] md:py-28">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              Clinical Resource
            </p>
            <h2 className="mt-4 font-serif text-3xl font-light leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
              Depression <em className="text-clinical">No More</em>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              It's not just a book about depression.
              It's a neuroscience-based strategic manual designed to help the brain gradually break free from the mental state that fuels emotional suffering.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              Throughout its pages, the author reveals specific habits and natural methods created to build a healthier chemical environment in the brain, interrupt negative thought patterns, and retrain the nervous system to function in a balanced way again.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              You will discover practical strategies capable of naturally stimulating serotonin, restoring emotional stability, and helping the mind slowly escape the cycle of depression.
            </p>

            <div className="mt-10 flex flex-wrap items-end gap-5 sm:gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Investment
                </p>
                <p className="font-serif text-3xl font-medium text-foreground sm:text-4xl">£12.00</p>
              </div>
              <a
                href="https://pay.hotmart.com/A105838567F?checkoutMode=10"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 sm:w-auto sm:px-7"
              >
                Buy Now
                <span className="transition group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </div>

          {/* Book mock */}
          <div id="metodo" className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-xs">
              <div className="absolute -inset-6 rounded-md bg-accent/10 blur-2xl" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-clinical text-primary-foreground shadow-2xl ring-1 ring-black/10">
                <div className="absolute inset-0 bg-gradient-to-br from-clinical via-clinical to-foreground" />
                <div className="absolute left-0 top-0 h-full w-2 bg-black/20" />
                <div className="relative flex h-full flex-col justify-between p-7">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/60">
                      The Method
                    </p>
                    <h3 className="mt-3 font-serif text-4xl font-light leading-[0.95]">
                      Depression
                      <br />
                      <em className="text-accent">No</em>
                      <br />
                      More
                    </h3>
                  </div>
                  <div>
                    <div className="h-px w-10 bg-primary-foreground/40" />
                    <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-primary-foreground/60">
                      DN Editorial Team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <p className="font-serif text-xl font-light italic leading-snug text-foreground sm:text-2xl md:text-3xl">
          “If you keep the same habits, you'll keep the same brain. But if you change what you
          do daily, you change who you become.”
        </p>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 px-4 py-8 text-xs text-muted-foreground sm:px-6 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Depression No More · Editorial Team</span>
          <span>
            Informational content. Does not replace medical or psychological care.
          </span>
        </div>
      </footer>
    </div>
  );
}
